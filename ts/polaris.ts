import * as index from "./index"
import * as play from "./play"

export class Polaris {

    private static instance: Polaris

    private constructor() {
    }

    public init(): void {
        // Set callbacks
        document.addEventListener("mousedown", () => index.mouseClick())
        document.addEventListener("keyup", e => play.onKeyUp(e))
        document.addEventListener("keydown", e => play.onKeyDown(e))
    }

    public update(): void {
    }

    public render(): void {
    }

    public static getInstance(): Polaris {
        if (!Polaris.instance) {
            Polaris.instance = new Polaris()
        }
        return Polaris.instance
    }
}