import html from './index.html'
import './styles.sass'

import {Component} from "@/classes/component"

import Animation from '../animation/class'
import ExecutionTime from "@/components/execution-time/class"
import Title from "@/components/title/class"
import Controls from "@/components/controls/class"
import Button from "@/components/button/class"

export interface ShowOptions {
    title?: string,
    controls?: Button[],
    showAnimation?: boolean,
    startTimer?: boolean
}

export class Holder extends Component {
    private title: Title
    private controls: Controls
    private animation: Animation
    private executionTime: ExecutionTime

    constructor() {
        super(html);

        this.title = this.addTitle()
        this.controls = this.addControls()
        this.animation = this.addAnimation()
        this.executionTime = this.addExecutionTime()
    }

    show(
        {
            title = '', controls = [], showAnimation = true, startTimer = true
        }: ShowOptions = {}
    ) {
        this.component.style.display = 'grid'

        if (title) {
            this.title.show(title)
        }

        if (controls) {
            this.controls.show(controls)
        }

        if (showAnimation) {
            this.animation.show()
        }

        if (startTimer) {
            this.executionTime.start()
        }

        setTimeout(() => this.component.classList.toggle('in'), 1)
    }

    hide() {
        this.component.classList.toggle('in')

        this.title.hide()
        this.controls.hide()
        this.executionTime.stop()
        this.animation.hide()


        setTimeout(() => {
            this.component.style.display = 'none'
        }, 500)
    }

    private addTitle(): Title {
        const title = new Title()
        this.child('title').append(title.component)

        return title
    }

    private addControls(): Controls {
        const controls = new Controls()
        this.child('controls').append(controls.component)

        return controls
    }

    private addAnimation(): Animation {
        const animation = new Animation()
        this.child('animation').append(animation.component)

        return animation
    }

    private addExecutionTime(): ExecutionTime {
        const executionTime = new ExecutionTime()
        this.child('execution-time').append(executionTime.component)

        return executionTime
    }
}
