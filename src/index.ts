import './index.sass'
import './components/main-header/index'
import _log from './components/log'

document.body.className = localStorage.getItem('theme') || 'light'

document.getElementById('log').append(_log.component)

setTimeout(() => document.body.classList.add('transition'), 1)
