import svg from './animation.svg'
import './styles.sass';
import {Component} from "@/base/component";
import {Factory} from "@/base/factory";

export default class Animation extends Component {
    constructor() {
        super(svg);
    }
}

Factory.reg('animation', Animation)
