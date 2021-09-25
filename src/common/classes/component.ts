export class Component {
    component: HTMLElement
    constructor(
        view: string,
        protected context: {} = null
    ) {
        const parser = new DOMParser()
        this.component = parser.parseFromString(
            view,
            'text/html'
        ).body.firstChild as HTMLElement
    }

    protected child(className: string): HTMLElement {
        return this.component.getElementsByClassName(className)?.[0] as HTMLElement
    }

    protected append(target: HTMLElement, control: Component) {
        control.context = this.context
        this.component.append(control.component)
    }
}
