import createBrowserHistory from "history/createBrowserHistory"

import { log } from "etc/logger"

export const browserHistory = createBrowserHistory()

export function go(path) {
  log("navigating to path:", path)
  browserHistory.push(path)
}
