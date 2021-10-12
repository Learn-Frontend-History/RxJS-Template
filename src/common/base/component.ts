export class Component {
    component: HTMLElement
    constructor(
        view: string | HTMLElement,
    ) {
        if (view instanceof HTMLElement) {
            this.component = view
            return
        }

        const parser = new DOMParser()
        this.component = parser.parseFromString(
            view,
            'text/html'
        ).body.firstChild as HTMLElement
    }

    protected child(className: string): HTMLElement {
        return this.component.getElementsByClassName(className)?.[0] as HTMLElement
    }

    public append(controls: Component[]) {
        this.component.append(...controls.map(control => control.component))
    }

    public on(type: string, listener: (...ars) => void) {
        this.component.addEventListener(type, listener)
    }

    public set(name: string, value: any) {
        this.component.setAttribute(name, value)
    }

    public setContent(content: string) {
        this.component.innerText = content
    }
}
