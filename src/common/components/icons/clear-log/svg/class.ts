const svg = require('./icon.svg')

import './styles.sass'
import {Component} from "@/classes/component"

export default class ClearLogIcon extends Component {
    constructor() {
        super(svg);
    }
}
