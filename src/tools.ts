import {Button} from "./common/interfaces/Button";
import {ButtonsGenerator} from "./common/Classes/ButtonsGenerator";
import { BaseOptions } from "./common/interfaces/BaseOptions";
import { ButtonGroup } from "./common/interfaces/ButtonGroup";

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
                ${ButtonsGenerator.generate(options.buttons)}
            </div>`,
            'text/html'
        ).body.firstChild
    )

    ButtonsGenerator.bindClicks(options.buttons)
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
                                <div class="group-buttons">${ButtonsGenerator.generate(group.buttons)}</div>
                            </div>`
                        ), groups),
                        []
                    ).join('')}
                </div>
            </div>`,
            'text/html'
        ).body.firstChild
    )

    options.buttons.forEach(group => {
        ButtonsGenerator.bindClicks(group.buttons)
    })
}
