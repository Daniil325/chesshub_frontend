import ReactDOM from "react-dom/client";
import { Chessboard } from "./Chessboard";
import { ChessboardContext } from "./Context";
import { Component, useContext } from "react";
import type { API, BlockTool, ToolConfig } from '@editorjs/editorjs'
import React, { createElement } from 'react'

interface CustomToolOptions<TData extends Record<string, any>, TConfig extends Record<string, any>, TOpts extends Record<string, any>> {
    data: TData
    config: TConfig
    api: API
    readOnly: boolean
    component: React.ComponentType<{ onDataChange: (newData: TData) => void; readOnly: boolean; data: TData; opts: TOpts }>
    toolbox: ToolConfig
    opts?: TOpts
}

export class CustomTool<TData extends Record<string, any>, TConfig extends Record<string, any>, TOpts extends Record<string, any>> implements BlockTool {
    private api: API
    private readonly readOnly: boolean
    private data: TData
    private config: TConfig
    private component: React.ComponentType<{ onDataChange: (newData: TData) => void; readOnly: boolean; data: TData; options?: TOpts }>
    private toolbox: ToolConfig

    private readonly CSS = {
        wrapper: 'custom-tool',
    }

    private nodes = {
        holder: null as HTMLElement | null,
    }

    constructor(options: CustomToolOptions<TData, TConfig, TOpts>) {
        const { data, config, api, readOnly, component, toolbox } = options
        this.api = api
        this.readOnly = readOnly
        this.data = data
        this.config = config
        this.component = component as any
        this.toolbox = toolbox
    }

    static get isReadOnlySupported(): boolean {
        return true
    }

    render(): HTMLElement {
        const rootNode = document.createElement('div')
        rootNode.setAttribute('class', this.CSS.wrapper)
        const root = ReactDOM.createRoot(rootNode);
        this.nodes.holder = rootNode

        const onDataChange = (newData: TData) => {
            this.data = {
                ...newData,
            }
        }
            
        root.render(<this.component onDataChange={onDataChange} readOnly={this.readOnly} data={this.data} />)

        return this.nodes.holder
    }

    save(): TData {
        return this.data
    }

    static createTool<TData extends Record<string, any>, TConfig extends Record<string, any>, TOpts extends Record<string, any>>(
        component: React.ComponentType<{ onDataChange: (newData: TData) => void; readOnly: boolean; data: TData; opts: TOpts }>,
        toolbox: ToolConfig,
        opts?: TOpts,
    ): new (options: CustomToolOptions<TData, TConfig, TOpts>) => CustomTool<TData, TConfig, TOpts> {
        return class extends CustomTool<TData, TConfig, TOpts> {
            constructor(options: CustomToolOptions<TData, TConfig, TOpts>) {
                super({
                    ...options,
                    component: (props: any) => createElement(component, { ...props, options: opts }),
                    toolbox,
                    data: {
                        moves: [],
                        ...options.data,
                    },
                })
            }

            static get toolbox() {
                return toolbox
            }
        }
    }
}


export const TitleTool = CustomTool.createTool(
    // ⬇️ Here is the component that will be used as the custom "tool" / "block" inside EditorJS.
    Chessboard,
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10l3-1v10M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"/></svg>',
        title: 'Board',
    },
)
