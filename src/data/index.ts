export type File = {
    name: string
    type: 'file'
    meta?: string
}
export type Folder = {
    name: string
    type: 'folder'
    items: Array<File | Folder>
}

export type FileExplorerItem = File | Folder


export const rootFolder: FileExplorerItem = {
    type: "folder",
    name: "root",
    items: [
        {
            name: "src",
            type: 'folder',
            items: [
                {
                    name: "index.js",
                    type: 'file',
                    meta: 'js'
                },
                {
                    name: "index.css",
                    type: 'file',
                    meta: 'css'
                },
                {
                    name: "logo.svg",
                    type: 'file',
                    meta: 'svg'
                }
            ]
        },
        {
            name: "server",
            type: 'folder',
            items: [
                {
                    name: "app.js",
                    type: 'file',
                    meta: 'js'
                },
                {
                    name: "index.pug",
                    type: 'file',
                }
            ]
        },
        {
            name: "package.json",
            type: 'file',
            meta: 'json'
        }
    ]
}
