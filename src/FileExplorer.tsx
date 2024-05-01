import {FileExplorerItem} from './data';
import React, {useCallback, useState} from 'react';
import {FileIcon} from './icons';

interface FileExplorerProps {
    item: FileExplorerItem
    indentLevel: number
    hideContextMenu: () => void;
    handleOnContextMenu: (ev: React.MouseEvent, item: FileExplorerItem) => void
}

export function FileExplorer({item, indentLevel, handleOnContextMenu, hideContextMenu}: FileExplorerProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const _handleOnContextMenu = useCallback((event: React.MouseEvent) => {
        handleOnContextMenu(event, item)
    }, [handleOnContextMenu, item])
    const handleOnClick = useCallback((event: React.MouseEvent) => {
        event.stopPropagation()
        hideContextMenu()
        if (item.type === "file") return
        setIsExpanded(isExpanded=>!isExpanded);
    }, []);
    return <div
        onClick={handleOnClick}
        className={"explorer-item"}
        style={{
            marginLeft: indentLevel * 10,
        }}>
        <span
            onContextMenu={_handleOnContextMenu}
            className={`explorer-item-name ${isExpanded ? 'explorer-item-name--expanded' : ''}`}>
            <FileIcon item={item} isExpanded={isExpanded}/>
            {item.name}
        </span>

        {isExpanded && <div>
            {(item.type === "file") ?
                null :
                item.items.map((child) =>
                    <FileExplorer
                        key={child.name} //ideally fileId
                        item={child}
                        handleOnContextMenu={handleOnContextMenu}
                        hideContextMenu={hideContextMenu}
                        indentLevel={indentLevel + 1}
                    />
                )}
        </div>}

    </div>
}
