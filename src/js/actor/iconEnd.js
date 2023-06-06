import { Actor, Vector, SpriteSheet, Animation, range, Engine } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Icon } from "./icon.js"

export class EndIcon extends Icon {
    
    constructor(nameScene) {

        super()

        this.nameScene = nameScene
    }

    onInitialize(engine) {
        this.engine = engine
        const button = Resources.EndIcon.toSprite()
        this.graphics.use(button)
        this.pos = new Vector (500,400)
        this.scale = new Vector(0.5,0.5)

        //load Main game scene
        this.changeScene()



    }


}

