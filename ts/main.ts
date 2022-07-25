const laneEffectLeft = document.getElementById('lane_effect_left')
const laneEffectRight = document.getElementById('lane_effect_right')

document.addEventListener('keydown', e => onKeyDown(e))
document.addEventListener('keyup', e => onKeyUp(e))

function onKeyDown(e: KeyboardEvent) {
    if (laneEffectLeft == null || laneEffectRight == null) {
        return;
    }
    if (e.isComposing || e.keyCode === 229) {
        return;
    }
    if (e.key == 'f') {
        laneEffectLeft.style.visibility = "visible"
    }
    if (e.key == 'j') {
        laneEffectRight.style.visibility = "visible"
    }
}

function onKeyUp(e: KeyboardEvent): void {
    if (laneEffectLeft == null || laneEffectRight == null) {
        return;
    }
    if (e.isComposing || e.keyCode === 229) {
        return;
    }
    if (e.key == 'f') {
        laneEffectLeft.style.visibility = "hidden"
    }
    if (e.key == 'j') {
        laneEffectRight.style.visibility = "hidden"
    }
}