import { Actor, Vector, SpriteSheet, Animation, range, Engine } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Icon } from "./icon.js"

export class EndIcon extends Icon {
    
    constructor(nameScene) {

        super({width: Resources.Starticon.width, height: Resources.Starticon.height})

        this.nameScene = nameScene
    }

    onInitialize(engine) {
        this.engine = engine

        this.pos = new Vector (500,600)
        this.scale = new Vector(0.5,0.5)

        //load Main game scene
        // this.changeScene(this.nameScene)
        // location.reload();
        this.onClick()


    }

    onClick(){
        this.on("pointerdown", (event) => {
            location.reload();
        })

    }


}

