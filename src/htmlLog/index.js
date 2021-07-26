import './index.css'

function htmlLog() {
  const logElement = document.createElement('div')
  logElement.id = 'htmlLogDisplay'
  document.body.append(logElement)

  function add(message) {
    const parser = new DOMParser()

    logElement.append(parser.parseFromString(
        `<div class="row"><span class="message">${message}</span>` +
        `<span class="timestamp">${(new Date()).toISOString()}</span></div>`,
        'text/html'
    ).body.firstChild)
  }

  return {
    clear() { logElement.innerHTML = '' },

    log(...args) {
      args.forEach(add);
    },

    group() {
      console.log('-'.repeat(30))
    },

    groupEnd() {
      console.log('-'.repeat(30))
    }
  }
}

window.console = htmlLog()
