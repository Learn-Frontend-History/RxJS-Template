import html from './index.html'
import './styles.sass'

import Collapse from "@/components/icons/toggle/collapse/class";
import Expand from "@/components/icons/toggle/expand/class";
import Toggle from "@/classes/toggle";
import {Factory} from "@/base/factory";

export default class GroupToggle extends Toggle {
    constructor(toggle: (flag: boolean) => void) {
        super(
            html,
            (new Expand()).component,
            (new Collapse()).component,
            toggle
        )
    }
}

Factory.reg('group-toggle', GroupToggle)
