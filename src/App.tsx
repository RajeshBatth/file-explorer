import React, {useCallback, useState} from 'react';
import './App.css';
import {FileExplorerItem, rootFolder} from './data';
import {CustomContextMenu, MenuPoint} from './CustomContextMenu';
import {FileExplorer} from './FileExplorer';


type ContextMenuState = { visible: false } | { visible: true, item: FileExplorerItem, position: MenuPoint }

function App() {
    const [contextMenuState, setContextMenuState] = useState<ContextMenuState>({visible: false})
    const handleOnContextMenu = useCallback((event: React.MouseEvent, item: FileExplorerItem) => {
        event.preventDefault();
        setContextMenuState({
            visible: true,
            item: item,
            position: {x: event.clientX, y: event.clientY}
        })

    }, [])
    const hideContextMenu = useCallback(() => {
        setContextMenuState({visible: false})
    }, [])
    return (
        <div className="App">
            <FileExplorer
                item={rootFolder}
                indentLevel={0}
                hideContextMenu={hideContextMenu}
                handleOnContextMenu={handleOnContextMenu}
            />
            {contextMenuState.visible && <CustomContextMenu
              position={contextMenuState.position}
              handleMenuClick={(eventName) => {
                  console.log(`perform action(${eventName}) on ${contextMenuState.item.name}`)
                  hideContextMenu()
              }}/>}
        </div>
    );
}

export default App;
