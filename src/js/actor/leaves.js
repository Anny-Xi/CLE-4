import { Actor, Vector, SpriteSheet, Animation, range, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'


export class Leaves extends Actor {

    points

    constructor(points) {

        super({ width: 70, height: 70 })

        const flowerSheetF = SpriteSheet.fromImageSource({
            image: Resources.Flower,
            grid: { rows: 1, columns: 5, spriteWidth: 85, spriteHeight: 100 },
        })


        const idleF = Animation.fromSpriteSheet(flowerSheetF, range(1, 5), 120) //idle animatie


        const flowerSheetL = SpriteSheet.fromImageSource({
            image: Resources.FlowerL,
            grid: { rows: 1, columns: 5, spriteWidth: 85, spriteHeight: 100 },
        })


        const idleL = Animation.fromSpriteSheet(flowerSheetL, range(1, 5), 120) //idle animatie

        const flowerSheetR = SpriteSheet.fromImageSource({
            image: Resources.FlowerR,
            grid: { rows: 1, columns: 5, spriteWidth: 85, spriteHeight: 100 },
        })


        const idleR = Animation.fromSpriteSheet(flowerSheetR, range(1, 5), 120) //idle animatie


        this.graphics.add("idleR", this.idleR);
        this.graphics.add("idleL", this.idleL);
        this.graphics.add("idleF", this.idleF);

        this.points = points
        console.log(this.points)
        switch (this.points) {
            case 1:
                this.graphics.use(idleL);
                break;
            case 2:
                this.graphics.use(idleR);
                break;
            case 3:
                this.graphics.use(idleF);
        }

    }

}