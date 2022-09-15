import * as play from "./main"

document.addEventListener('keydown', e => play.onKeyDown(e))
document.addEventListener('keyup', e => play.onKeyUp(e))