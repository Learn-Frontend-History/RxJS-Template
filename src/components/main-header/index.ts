import template from './index.html'

import {Templater} from "@/base/templater";

class Controller {}

new Templater(
    document.getElementById('header'),
    new Controller(),
    template
)
