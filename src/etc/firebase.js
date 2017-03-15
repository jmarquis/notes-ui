import { initializeApp } from "firebase/app"
import { log } from "logger"

const state = {}

export function init() {

  log("initializing firebase app")

  state.app = initializeApp({
    apiKey: "AIzaSyCTPFo6DFO_86-vnFJNH4UlsY18LjbgpG8",
    authDomain: "notes-9b1c4.firebaseapp.com",
    databaseURL: "https://notes-9b1c4.firebaseio.com",
    storageBucket: "notes-9b1c4.appspot.com",
    messagingSenderId: "530417976720"
  })

  log(`firebase app created: ${state.app.name}`)

}
