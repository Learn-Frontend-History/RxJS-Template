import html from './index.html'
import './styles.sass';

import {Component} from "@/classes/component";

export default class Card extends Component {
    constructor() {
        super(html);
    }
}
