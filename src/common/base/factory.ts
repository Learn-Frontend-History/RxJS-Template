export class Factory {
    static tags: {[key: string]: any} = {}

    static reg(tag: string, _class: any) {
        if (this.tags[tag]) {
            console.error(`Tag duplication: '${tag}'`)
            return
        }

        this.tags[tag] = _class
    }

    static create(tag: string) {
        const tagClass = this.tags[tag]

        if (!tagClass) {
            console.error(`Unknown tag: '${tag}'`)
            return
        }

        return new tagClass()
    }
}
