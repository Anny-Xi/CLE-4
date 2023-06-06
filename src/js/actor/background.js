

import { Actor, Vector, GraphicsGroup } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Background extends Actor {

    constructor() {

        super({ z:-10 })

 
    }

    onInitialize(engine) {

        const background = Resources.Background.toSprite()

        // const group = new GraphicsGroup({
        //     members: [
        //         {
        //             graphic: background,
        //             pos: new Vector(0, 0),
        //         },
        //         {
        //             graphic: background,
        //             pos: new Vector(background.width, 0),
        //         }
        //     ]
        // })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(background) 

        this.pos = new Vector(0, 0)
        // this.vel = new Vector(-90, 0)

    }

    // onPostUpdate(engine, delta) {
        
    //     //endless loop for background. 

    //     if (this.pos.x < -1000) {
    //         this.pos = new Vector(0, 0)
    //     }
    // }
}