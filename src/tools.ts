export type Source = 'Native' | 'RxJS'

export function print(source: Source, value: any) {
    console.log(`${source}: ${value}`)
}

export interface Options {
    header: string,
    description?: string,
    buttons: {
        id: string,
        caption: string,
        title?: string,
        click?: (event: MouseEvent) => void
    }[]
}

export function prepareDOM(options: Options) {
    const parser = new DOMParser()
    document.getElementById('container').append(
        parser.parseFromString(`
            <div>
                <h1> ${options.header} </h1>
                ${options.description ? `<h3>${options.description}</h3>` : ''}
                ${
                options.buttons.reduce<string[]>(
                    (htmlButtons, buttonMeta) => {
                        htmlButtons.push(
                            `<button id="${buttonMeta.id}" ${
                                buttonMeta.title ? `title="${buttonMeta.title}"` : ''
                            } > ${buttonMeta.caption} </button>`)

                        return htmlButtons
                    },
                    []
                ).join('\n')
            }
            </div>`,
            'text/html'
        ).body.firstChild
    )

    options.buttons.filter(
        button => button.click instanceof Function
    ).map(
        meta => ({el: document.getElementById(meta.id), meta})
    ).forEach(
        button => button.el.addEventListener(
            'click',
            event => {
                if (button.meta.title) {
                    console.group()
                    console.log(button.meta.title)
                }

                button.meta.click(event)
            }
        )
    )
}
