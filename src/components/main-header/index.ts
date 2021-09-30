import template from './index.html'

import {Templater} from "@/classes/templater";
import {Factory} from "@/classes/factory";

class Controller {}

new Templater(
    document.getElementById('header'),
    new Controller(),
    new Factory(),
    template
)
