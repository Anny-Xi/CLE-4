import { Actor, Vector, SpriteSheet, Animation, range, Engine, Label, Color, Font, vec, FontUnit, Input } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Blocks extends Actor {

    damage

    label

    plant


    constructor(points) {


        super({ width: 70, height: 70 })

        this.points = points

        const sheetBlock = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 1, columns: 5, spriteWidth: 85, spriteHeight: 100 },
        })

        const idle = Animation.fromSpriteSheet(sheetBlock, range(1, 5), 100) //idle animatie

        this.graphics.add("idle", idle);
        this.graphics.use(idle);

        // this.plant =

    }

    onInitialize(engine) {

        

        this.damage = this.points

        console.log(this.points)

        this.engine = engine
        this.graphics.use("idle")

        this.pos = new Vector(
            Math.random() * engine.drawWidth,
            Math.random() * engine.drawHeight);

        this.vel = new Vector(Math.random() * 400 - 200, Math.random() * 400 - 200);



        this.removeBlock()


    }

    onPostUpdate(engine) {

        if (this.pos.x < 0 || this.pos.x + 90 > 1000) {
            this.vel.x = -this.vel.x;
        }
        if (this.pos.y < 0 || this.pos.y + 90 > 700) {
            this.vel.y = -this.vel.y;
        }

    }

    removeBlock(){
        this.on("pointerdown", (event) => {
            this.damage = this.damage - 1


            if (this.damage <= 0) {
                console.log("you remove a bumping")
                this.kill()

                this.engine.goToScene('endGame')

            }
        })

    }


}