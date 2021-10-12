import {Component} from "@/base/component";

export class DomArray {
    constructor(
        private root: Component,
        private createItem: (data) => Component[]
    ) {
    }

    log(...messages: string[]) {
        console.log('DOM_ARRAY', this.root, ...messages)
    }

    set(index, value) {
        this.log('set', 'TODO Implement')
        // this.root.removeChild(this.root.children.item(index))
        // this.root.children.item(index).before(this.createItem(value))
    }

    push(...values) {
        this.log('push')
        values.forEach(value => this.root.append(this.createItem(value)))
    }

    pop() {
        this.log('pop', 'TODO Implement')
        // this.root.removeChild(this.root.lastElementChild)
    }

    shift() {
        this.log('shift', 'TODO Implement')
        // this.root.removeChild(this.root.firstElementChild)
    }

    unshift(...values) {
        this.log('unshift', 'TODO Implement')
        // values.forEach(value => this.root.firstElementChild.before(this.createItem(value)))
    }

    splice(start, deleteCount, ...values) {
        this.log('splice', 'TODO Implement')
        // for (let i = start; i < start + deleteCount; i++) {
        //     this.root.removeChild(this.root.children.item(i))
        // }
        // values?.forEach(value => this.root.children.item(start).before(this.createItem(value)))
    }
}
