import './index.css'

document.body.className = localStorage.getItem('theme') || 'light'


// LOG
import _log from './components/log'

document.getElementById('log').append(_log.component)

import Header from '@/components/header/class'

const header = new Header('RxJS - bla bla bla')
document.getElementById('header').append(header.component)

// HOLDER
import Holder from "@/components/holder/class";
import Button from "@/components/button/class";

const holder = new Holder()
document.getElementById('cards-wrapper').append(holder.component)

document.body.addEventListener(
    'click',
    _ => holder.show({
        title: 'Some process...',
        controls: [
            new Button('Some action', _ => 'Some action')
        ]
    })
)
