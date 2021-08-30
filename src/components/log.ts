import Log from '@/components/log/class'
const log = new Log()
document.getElementById('log').append(log.component)

console.log = function () {
    Array.prototype.forEach.call(arguments, arg => log.add(arg))
}

console.clear = function () {
    log.clear()
}

export default log
