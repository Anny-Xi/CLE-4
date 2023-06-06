
import { Actor, Vector, GraphicsGroup } from "excalibur"
import { Background } from './background.js'
import { Resources, ResourceLoader } from '../resources.js'

export class StartGuide extends Background {

    constructor() {

        super({ z:-10 })

 
    }

    onInitialize(engine) {

        const guide = Resources.StartScene.toSprite()

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(guide) 
        this.graphics.use(guide)

        this.pos = new Vector(0, 0)

    }

}