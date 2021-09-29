import html from './index.html'
import './styles.sass'

import ClearLogIcon from "@/components/icons/clear-log/svg/class"
import Icon from "@/classes/icon"

export default class ClearLog extends Icon {
    constructor() {
        super(
            html,
            () => console.clear(),
            component => component.append(
                (new ClearLogIcon()).component
            )
        );
    }
}
