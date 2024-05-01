import {FileExplorerItem} from '../data';
import {FolderOpenedIcon} from './FolderOpenedIcon';
import {FolderIcon} from './FolderIcon';
import {JSFileIcon} from './JSFileIcon';
import {CSSFileIcon} from './CSSFileIcon';
import {SVGFileIcon} from './SVGFileIcon';
import {GenericFileIcon} from './GenericFileIcon';
import React from 'react';

function getIconComponent(item: FileExplorerItem, isActive: boolean) {
    if (item.type === 'folder') {
        return isActive ? FolderOpenedIcon : FolderIcon
    }
    switch (item.meta) {
        case 'js':
            return JSFileIcon
        case 'css':
            return CSSFileIcon
        case 'svg':
            return SVGFileIcon
        default:
            return GenericFileIcon
    }

}

export function FileIcon({item, isExpanded}: { isExpanded: boolean, item: FileExplorerItem }) {
    const IconComponent = getIconComponent(item, isExpanded);
    return <div className="file-icon">
        <IconComponent/>
    </div>
}
