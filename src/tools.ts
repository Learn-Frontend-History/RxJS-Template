export type Source = 'Native' | 'RxJS'

export function print(source: Source, value: any) {
    console.log(`${source}: ${value}`)
}

export interface Options {
    header: string,
    buttons: {
        id: string,
        caption: string
    }[]
}

export function prepareDOM(options: Options) {
    const parser = new DOMParser()
    document.getElementById('container').append(
        parser.parseFromString(`
            <div>
                <h1> ${options.header} </h1>
                ${
                options.buttons.reduce<string[]>(
                    (htmlButtons, buttonMeta) => {
                        htmlButtons.push(`<button id="${buttonMeta.id}"> ${buttonMeta.caption} </button>`)

                        return htmlButtons
                    },
                    []
                ).join('\n')
            }
            </div>`,
            'text/html'
        ).body.firstChild
    )
}
