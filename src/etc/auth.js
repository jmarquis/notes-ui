import { auth } from "etc/firebase"
import { log } from "etc/logger"

const state = {
  user: null,
  connected: false
}
export default state

auth.onAuthStateChanged(newUser => {
  log("user state change:", newUser)
  state.connected = true
  state.user = newUser
})

export function signIn(email, password) {
  log("signing in with credentials:", email, password)
  return auth.signInWithEmailAndPassword(email, password).catch(error => {
    log("firebase authentication error:", error)
  })
}
