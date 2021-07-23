import './index.css'

function htmlLog() {
  const logElement = document.createElement('div')
  logElement.id = 'htmlLogDisplay'
  document.body.append(logElement)

  function add(message) {
    const parser = new DOMParser()

    logElement.append(parser.parseFromString(
        `<div class="row"><span class="message">${message}</span><span class="timestamp">${(new Date()).toISOString()}</span></div>`,
        'text/html'
    ).body.firstChild)
  }

  return {
    clear() { logElement.innerHTML = '' },

    log(...args) {
      args.forEach(add);
    }
  }
}

window.console = htmlLog()
