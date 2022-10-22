import * as play from "./play"
import * as index from "./index"

document.addEventListener('keydown', e => play.onKeyDown(e))
document.addEventListener('keyup', e => play.onKeyUp(e))
document.addEventListener('mousedown', e => index.mouseClick())