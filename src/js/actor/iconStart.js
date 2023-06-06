import { Actor, Vector, SpriteSheet, Animation, range, Engine } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Icon } from "./icon.js"

export class StartIcon extends Icon {
    
    constructor(nameScene) {

        super()

        this.nameScene = nameScene
    }

    onInitialize(engine) {
        this.engine = engine

        this.pos = new Vector (500,400)

        //load Main game scene
        this.changeScene()

    }


}

