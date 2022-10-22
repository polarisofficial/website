const laneEffectLeft = document.getElementById('lane_effect_left')
const laneEffectRight = document.getElementById('lane_effect_right')

export function onKeyDown(e: KeyboardEvent): void {
    if (laneEffectLeft == null || laneEffectRight == null) {
        return;
    }
    if (e.isComposing) {
        return;
    }
    if (e.key == 'f') {
        laneEffectLeft.style.visibility = "visible"
    }
    if (e.key == 'j') {
        laneEffectRight.style.visibility = "visible"
    }
}

export function onKeyUp(e: KeyboardEvent): void {
    if (laneEffectLeft == null || laneEffectRight == null) {
        return;
    }
    if (e.isComposing) {
        return;
    }
    if (e.key == 'f') {
        laneEffectLeft.style.visibility = "hidden"
    }
    if (e.key == 'j') {
        laneEffectRight.style.visibility = "hidden"
    }
}