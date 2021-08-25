import {MergeButton} from "./MergeButton";

export interface Button {
    id: string,
    caption: string,
    title?: string,
    click?: (event: MouseEvent) => void
    mergeTo?: MergeButton
}
