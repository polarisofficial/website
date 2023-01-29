import {Polaris} from "./polaris";
import {TARGET_FPS} from "./constants";

init()
gameLoop()

function init() {
    Polaris.getInstance().init()
}

function gameLoop() {
    const begin: number = performance.now()

    Polaris.getInstance().update()
    Polaris.getInstance().render()

    const end: number = performance.now()

    setTimeout(gameLoop, (1000 / TARGET_FPS) - (end - begin))
}