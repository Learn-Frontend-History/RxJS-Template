import './index.css'
import header from "./components/header";
import _log from './components/log'

import holder from "./components/holder";

document.body.className = localStorage.getItem('theme') || 'light'

document.getElementById('header').append(header.component)

document.getElementById('log').append(_log.component)

document.getElementById('holder').append(holder.component)
