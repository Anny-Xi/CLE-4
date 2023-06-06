import { Actor, Vector, SpriteSheet, Animation, range, Engine } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Icon extends Actor {
    
    constructor() {

        super({width: Resources.Starticon.width, height: Resources.Starticon.height})
        
        const button = Resources.Starticon.toSprite()
        this.graphics.use(button)

        

        
    }

    onInitialize(engine) {
        this.engine = engine

    }

    changeScene(engine){
        //load Main game scene
        this.on("pointerdown", (event) => {
            console.log("You click on something")
            this.engine.goToScene(this.nameScene)
        })

    }

    reloadPage(){
        this.on("pointerdown", (event) => {
            location.reload();
        })

    }

    


}

