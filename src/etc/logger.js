const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  log: 3
}

let logLevel = 3

export function error(...args) {
  if (logLevel >= logLevels.error) console.error(...args)
}

export function warn(...args) {
  if (logLevel >= logLevels.warn) console.warn(...args)
}

export function info(...args) {
  if (logLevel >= logLevels.info) console.info(...args)
}

export function log(...args) {
  if (logLevel >= logLevels.log) console.log(...args)
}
