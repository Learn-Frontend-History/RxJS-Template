import './styles.sass'
const svg = require('./icon.svg')

import {Component} from "@/classes/component";

export default class Collapse extends Component {
    constructor() {
        super(svg);
    }
}
