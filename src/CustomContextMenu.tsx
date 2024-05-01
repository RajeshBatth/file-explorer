import React from 'react';

export type MenuPoint = { x: number, y: number }

export type CustomContextMenuProps = {
    position: MenuPoint,
    handleMenuClick: (option: string) => void
};

export function CustomContextMenu({handleMenuClick, position}: CustomContextMenuProps) {
    return <div className={'ctx-menu'} style={{
        left: position.x,
        top: position.y,
    }}>
        <div className="ctx-menu-item" onClick={() => handleMenuClick('copy')}>
            Copy
        </div>
        <div className="ctx-menu-item" onClick={() => handleMenuClick('rename')}>
            Rename
        </div>
        <div className="ctx-menu-item" onClick={() => handleMenuClick('Delete')}>
            Delete
        </div>
    </div>
}
