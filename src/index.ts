import './index.css'

document.body.className = localStorage.getItem('theme') || 'light'

document.getElementById('toggleTheme').addEventListener('click', _ => {
    const map = {
        light: 'dark',
        dark: 'light'
    }

    localStorage.setItem(
        'theme',
        document.body.className = map[document.body.className]
    )
})

document.getElementById('clearLog').addEventListener('click', _ => {
    console.clear()
})
