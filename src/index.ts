import './index.sass'
import './components/main-header/index'
import './components/log/index'

document.body.className = localStorage.getItem('theme') || 'light'

setTimeout(() => document.body.classList.add('transition'), 1)
