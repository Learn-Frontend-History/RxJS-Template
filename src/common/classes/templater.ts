import {Factory} from "@/classes/factory";
import {Component} from "@/classes/component";

interface NodeSettings {
    name: string,
    attributes: NodeAttribute[]
    events: NodeEvent[]
    properties: NodeAttribute[]
}

interface NodeAttribute {
    name: string
    value: string
}

interface NodeEvent {
    type: string
    listener: string
}

interface TemplateNode extends NodeSettings{
    children: TemplateNode[]
    parent: TemplateNode
    content: string
}

export class Templater {
    constructor(
        private container: HTMLElement,
        private controller: Object,
        private factory: Factory,
        private template: string,
    ) {
        this.render(this.template)
    }

    private render(template: string) {
        this.parse(template).children.forEach(
            node => this.renderChild(node, new Component(this.container))
        )
    }

    private renderChild(node: TemplateNode, root: Component) {
        const componentObject: Component = this.factory.create(
            node.name
        )

        if (!componentObject) {
            console.error(`Unknown tag name: "${node.name}"`)
            return
        }

        componentObject.setContent(node.content)

        node.attributes.forEach(
            ({name, value}) => componentObject.set(
                name, value
            )
        )

        node.properties.forEach(
            ({name, value}) => componentObject.set(
                name, this.controller[value]
            )
        )

        node.events.forEach(
            ({type, listener}) => componentObject.on(
                type, this.controller[listener]
            )
        )

        root.append(componentObject)

        node.children.forEach(
            node => this.renderChild(node, componentObject)
        )
    }

    private parse(template: string): TemplateNode {
        let root = null

        return this.split(
            this.removeComments(template)
        ).reduce<TemplateNode>(
            (tree, part: string) => {
                if (part[0] === '/') { // end of current root
                    root = root.parent
                } else { // children of current root
                    const _root = root || tree // if current root not selected get tree root
                    const current: TemplateNode = {
                        name: part,
                        children: [],
                        parent: _root,
                        content: null,
                        attributes: [],
                        events: [],
                        properties: []
                    }

                    _root.children.push(current)
                    if (~part.indexOf('/')) { // `button>click!</button` - element with content
                        const [, name, content] = part.match(/([^>]+)>([^<]+)/)
                        current.name = name
                        current.content = ~content.indexOf('\n')
                            ? this.cleanUpContent(content)
                            : content
                    } else { // open tag
                        root = current
                    }

                    if (~current.name.indexOf(' ')) {
                        Object.assign(current, this.parseSettings(current.name))
                    }
                }

                return tree
            },
            {
                name: 'template',
                children: [],
                parent: null,
                content: null,
                attributes: [],
                events: [],
                properties: []
            }
        )
    }

    private parseSettings(name): NodeSettings {
        const result: NodeSettings = {
            name: name.match(/([^\s]+)/)[1],
            attributes: [],
            events: [],
            properties: []
        }

        name.match(/[^=\s]+="[^"]+"/g).forEach(
                attribute => {
                    const [,type, name,, value] = attribute.match(/([(|\[]?)([^)\]]+)([)|\]]?)="(.+)"/)

                    switch (type) {
                        case '':
                            result.attributes.push({
                                name,  value
                            })
                            break
                        case '[':
                            result.properties.push({
                                name,  value
                            })
                            break
                        case '(':
                            result.events.push({
                                type: name,
                                listener: value
                            })
                            break
                    }
                }
            )

        return result
    }

    private removeComments = (template: string): string => template.replace(/<!--.+-->/g, '');

    private split = (template: string): string[] =>
        template
            .trim()
            .substring(1, template.length - 2)
            .replace(/>\s+</g, '><')
            .replace(/>\n+</g, '><')
            .split('><');

    private cleanUpContent(content: string): string {
        let lines = content.split('\n')
        lines = lines.splice(1, lines.length - 2)

        const sideIndentRegExp = new RegExp(`^${lines[0].match(/\s+/)}`)

        return lines.map(
            line => line.replace(sideIndentRegExp, '')
        ).join('\n')
    }
}
