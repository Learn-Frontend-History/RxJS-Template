import html from './index.html'
import './styles.sass';

import {Component} from "@/base/component";
import {Factory} from "@/base/factory";

export default class Card extends Component {
    constructor() {
        super(html);
    }
}

Factory.reg('card', Card)
