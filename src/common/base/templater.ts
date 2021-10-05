import {Factory} from "@/base/factory";
import {Component} from "@/base/component";

interface NodeSettings {
    name: string,
    attributes: NodeAttribute[]
    events: NodeEvent[]
    properties: NodeAttribute[]
    directives: any[]
}

interface NodeAttribute {
    name: string
    value: string
}

interface NodeEvent {
    type: string
    listener: string
}

class TemplateNode implements NodeSettings {
    attributes: NodeAttribute[] = []
    directives: any[] = []
    events: NodeEvent[] = []
    properties: NodeAttribute[] = []

    parent: TemplateNode = null
    children: TemplateNode[] = []
    context: any = null
    content: string = null

    constructor(
        public name: string = 'template',
    ) {
    }

    addChildren(node: TemplateNode) {
        this.children.push(node)
        node.parent = this
    }

    removeChildren(node: TemplateNode) {
        (this.children.splice(
            this.children.indexOf(node),
            1
        ))[0].parent = null
    }
}

export class Templater {
    constructor(
        private container: HTMLElement,
        private controller: Object,
        private template: string,
    ) {
        this.render(this.template)
    }

    private render(template: string) {
        this.parse(
            template
        ).children.map<TemplateNode>(
            this.applyDirectives.bind(this)
        ).forEach(
            node => this.renderChild(node, new Component(this.container))
        )
    }

    applyDirectives(node: TemplateNode) {
        node.directives.forEach(
            ({name, value}) => {
                switch (name) {
                    case 'repeat':
                        (node?.parent.context?.[value] || this.controller[value]).forEach(
                            context => {
                                const itemNode = new TemplateNode(node.name)
                                itemNode.attributes = node.attributes
                                itemNode.context = context
                                node.children.forEach(itemNode.addChildren.bind(itemNode))

                                node.parent.addChildren(itemNode)

                                itemNode.children.forEach(this.applyDirectives.bind(this))
                            }
                        )

                        node.parent.removeChildren(node)
                        return
                    default:
                        break
                }
            }
        )

        if (node.directives.length === 0) {
            node.children.forEach(this.applyDirectives.bind(this))
        }

        return node
    }

    private renderChild(node: TemplateNode, root: Component) {
        const componentObject: Component = Factory.create(
            node.name
        )

        if (!componentObject) {
            return
        }

        if (node.content !== null) {
            componentObject.setContent(node.content)
        }

        node.attributes.forEach(
            ({name, value}) => {
                componentObject.set(
                    name, node.context ? node.context[value] : value
                )
            }
        )

        node.properties.forEach(
            ({name, value}) => {
                const initValue = this.controller[value]
                delete this.controller[value]

                Object.defineProperty(this.controller, value, {
                    set: componentObject.set.bind(componentObject, name)
                })

                this.controller[value] = initValue
            }
        )

        node.events.forEach(
            ({type, listener}) => componentObject.on(
                type, this.controller[listener].bind(this.controller)
            )
        )

        root.append(componentObject)

        node.children.forEach(
            child => this.renderChild(child, componentObject)
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
                    const current = new TemplateNode(part);

                    (root || tree).addChildren(current)

                    if (~part.indexOf('/')) { // `button>click</button` - element with content
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
            new TemplateNode()
        )
    }

    private parseSettings(name): NodeSettings {
        const result: NodeSettings = {
            name: name.match(/([^\s]+)/)[1],
            attributes: [],
            events: [],
            properties: [],
            directives: []
        }

        name.match(/[^=\s]+="[^"]+"/g).forEach(
            attribute => {
                const [, type, name, , value] = attribute.match(/([(\[*]?)([^)\]]+)([)|\]]?)="(.+)"/)

                switch (type) {
                    case '':
                        result.attributes.push({
                            name, value
                        })
                        break
                    case '[':
                        result.properties.push({
                            name, value
                        })
                        break
                    case '(':
                        result.events.push({
                            type: name,
                            listener: value
                        })
                        break
                    case '*':
                        result.directives.push({
                            name, value
                        })
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
