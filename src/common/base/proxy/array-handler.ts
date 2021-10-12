export class ArrayHandler {
    private method: string
    constructor(private adapter: any) {}
    get(target: [], property: string) {
        let _this = this

        if (target[property] instanceof Function && this.adapter[property] instanceof Function) {
            return function (...args) {
                _this.method = property

                target[property].apply(this, args);
                _this.adapter[_this.method](...args)

                _this.method = null
            }
        }

        return target[property]
    }
    set(target: [], property: string, value: any) {
        if (this.method === null) {
            this.adapter.set(property, value)
        }

        target[property] = value;
        return true;
    }
}
