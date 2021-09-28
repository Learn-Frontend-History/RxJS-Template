import CardEx from "@/components/cardEx/class";
import CardHeader from "@/components/cardEx/components/header/class";
import CardParagraph from "@/components/cardEx/components/paragraph/class";
import CardCode from "@/components/cardEx/components/code/class";
import CardOrderedList from "@/components/cardEx/components/ordered-list/class";
import Button from "@/components/button/class";
import ButtonGroup from "@/components/button-group/class";
import Group from "@/components/group/class";

export class Factory {
    constructor() {
    }

    create(component: string) {
        switch (component) {
            case 'card-ex':
                return new CardEx()
            case 'card-header':
                return new CardHeader()
            case 'card-sub-header':
                return new CardHeader()
            case 'card-paragraph':
                return new CardParagraph()
            case 'card-code':
                return new CardCode()
            case 'card-ordered-list':
                return new CardOrderedList()
            case 'button':
                return new Button()
            case 'button-group':
                return new ButtonGroup()
            case 'group':
                return new Group()
            default:
                return null
        }
    }
}
