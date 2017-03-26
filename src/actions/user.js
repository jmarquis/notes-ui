import { auth } from "etc/firebase"
import { log } from "etc/logger"

export function updateUser(user) {
  return {
    type: "UPDATE_USER",
    user: user ? user : false
  }
}

export function signIn(email, password) {
  log("signing in with credentials:", email, password)
  auth.signInWithEmailAndPassword(email, password).catch(error => {
    log("firebase authentication error:", error)
  })
}

export function signOut() {
  log("signing out")
  return auth.signOut()
}
