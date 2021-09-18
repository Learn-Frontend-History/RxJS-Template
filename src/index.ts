import './index.sass'
import header from "./components/header";
import _log from './components/log'

document.body.className = localStorage.getItem('theme') || 'light'

document.getElementById('header').append(header.component)

document.getElementById('log').append(_log.component)

setTimeout(() => document.body.classList.add('transition'), 1)
