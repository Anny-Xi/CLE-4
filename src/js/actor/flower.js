import { Actor, Vector, SpriteSheet, Animation, range, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Leaves } from "./leaves.js"


export class Flower extends Actor {


    constructor(points) {

        
        super({ width: 70, height: 70 })

        const flowerSheet = SpriteSheet.fromImageSource({
            image: Resources.FlowerN,
            grid: { rows: 1, columns: 5, spriteWidth: 85, spriteHeight: 100 },
        })

        // test of alle sprites er zijn
        console.log(flowerSheet.sprites);

        const idle = Animation.fromSpriteSheet(flowerSheet, range(1, 5), 120) //idle animatie

        this.graphics.add("idle", idle);
        this.graphics.use(idle);

        this.points = points

    }

    onInitialize(engine) {



        this.leaves = new Leaves(this.points)

        this.addChild(this.leaves)

    }

}