export type Source = 'Native' | 'RxJS'

export interface Options extends BaseOptions<Button[]> {}
export interface OptionsGroups extends BaseOptions<ButtonGroup[]>{}

export interface DocumentOptions {
    title: string
}

export function print(source: Source, value: any) {
    console.log(`${source}: ${value}`)
}

export function prepareDocument(options: DocumentOptions) {
    document.title = `RxJS - ${options.title}`
}

export function prepareDOM(options: Options) {
    const parser = new DOMParser()
    document.getElementById('container').append(
        parser.parseFromString(`
            <div>
                <h1> ${options.header} </h1>
                ${options.description ? `<h3>${options.description}</h3>` : ''}
                ${generateButtons(options.buttons)}
            </div>`,
            'text/html'
        ).body.firstChild
    )

    addClickHandlers(options.buttons)
}

export function prepareDOMGroups(options: OptionsGroups) {
    const parser = new DOMParser()
    document.getElementById('container').append(
        parser.parseFromString(`
            <div>
                <h1> ${options.header} </h1>
                ${options.description ? `<h3>${options.description}</h3>` : ''}
                <div class="groups">
                    ${options.buttons.reduce(
                        (groups, group) => (groups.push(
                            `<div class="group">
                                <span class="group-name">${group.name}</span>
                                <div class="group-buttons">${generateButtons(group.buttons)}</div>
                            </div>`
                        ),groups),
                        []
                    ).join('')}
                </div>
            </div>`,
            'text/html'
        ).body.firstChild
    )

    options.buttons.forEach(group => {
        addClickHandlers(group.buttons)
    })
}

interface MergeButton {
    left?: boolean
    right?: boolean
    both?: boolean
}

interface BaseOptions<B> {
    header: string,
    description?: string,
    buttons: B
}

interface Button {
    id: string,
    caption: string,
    title?: string,
    click?: (event: MouseEvent) => void
    mergeTo?: MergeButton
}

interface ButtonGroup {
    name: string
    buttons: Button[]
}

function getMergeClass(mergeTo: MergeButton): string {
    if (mergeTo?.both || mergeTo?.left && mergeTo?.right) {
        return 'merge-both'
    }

    if (mergeTo?.left) {
        return 'merge-left'
    }

    if (mergeTo?.right) {
        return 'merge-right'
    }
}

function generateButtons(buttons: Button[]) {
    return buttons.reduce<string[]>(
        (htmlButtons, buttonMeta) => {
            htmlButtons.push(`
                <button
                    class="${getMergeClass(buttonMeta.mergeTo)}"
                    id="${buttonMeta.id}"
                    ${buttonMeta.title ? `title="${buttonMeta.title}"` : ''}
                > ${buttonMeta.caption} </button>
            `)

            return htmlButtons
        },
        []
    ).join('\n')
}

function addClickHandlers(buttons: Button[]) {
    buttons.filter(
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
