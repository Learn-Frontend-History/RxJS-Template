import Card from "@/components/card/class";
import CardHeader from "@/components/card/components/header/class";
import CardParagraph from "@/components/card/components/paragraph/class";
import CardCode from "@/components/card/components/code/class";
import CardOrderedList from "@/components/card/components/ordered-list/class";
import Button from "@/components/button/class";
import ButtonGroup from "@/components/button-group/class";
import Group from "@/components/group/class";
import CardSubHeader from "@/components/card/components/sub-header/class";
import Animation from "@/components/animation/class";
import ExecutionTime from "@/components/execution-time/class";
import Header from "@/components/header/class";
import ClearLog from "@/components/icons/clear-log/icon/class";
import ThemeToggle from "@/components/icons/theme-toggle/icon/class";

export class Factory {
    constructor() {
    }

    create(component: string) {
        switch (component) {
            case 'header':
                return new Header()
            case 'clear-log':
                return new ClearLog()
            case 'theme-toggle':
                return new ThemeToggle()
            case 'card':
                return new Card()
            case 'card-header':
                return new CardHeader()
            case 'card-sub-header':
                return new CardSubHeader()
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
            case 'animation':
                return new Animation()
            case 'execution-time':
                return new ExecutionTime()
            default:
                return null
        }
    }
}
