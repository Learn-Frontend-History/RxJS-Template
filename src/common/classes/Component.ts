export class Component {
    component: HTMLElement
    constructor(view) {
        const parser = new DOMParser()
        this.component = parser.parseFromString(
            view,
            'text/html'
        ).body.firstChild as HTMLElement
    }

    protected child(className: string): HTMLElement {
        return this.component.getElementsByClassName(className)?.[0] as HTMLElement
    }
}
