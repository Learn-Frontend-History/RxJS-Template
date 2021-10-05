import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"
import {Factory} from "@/base/factory";

export default class CardSubHeader extends Component {
    constructor() {
        super(html);
    }
}

Factory.reg('card-sub-header', CardSubHeader)
