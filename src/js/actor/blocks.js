import { Actor, Vector, SpriteSheet, Animation, range, Engine } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Player } from "./player.js";

export class Blocks extends Actor {

    damage = 50


    constructor() {


        super({ width: 70, height: 70 })

        const idleSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 1, columns: 5, spriteWidth: 85, spriteHeight: 100 },
        })

        // test of alle sprites er zijn
        console.log(idleSheet.sprites);

        const idle = Animation.fromSpriteSheet(idleSheet, range(1, 5), 100) //idle animatie

        this.graphics.add("idle", idle);
        this.graphics.use(idle);

    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use("idle")

        this.pos = new Vector(
            Math.random() * engine.drawWidth,
            Math.random() * engine.drawHeight);

        this.vel = new Vector(Math.random() * 400 - 200, Math.random() * 400 - 200);


        this.on("pointerdown", (event) => {
            this.damage = this.damage - 50;
            

            if (this.damage <= 0) {
                console.log("you remove a bumping")
                this.kill()
                // this.engine.updateScore()

            }
        });

    }

    onPostUpdate(engine) {

        if (this.pos.x < 0 || this.pos.x + this.width > 1000) {
            this.vel.x = -this.vel.x;
        }
        if (this.pos.y < 0 || this.pos.y + this.height > 700) {
            this.vel.y = -this.vel.y;
        }


    }

    hitSomething(event) {
        if (event.other instanceof Player) {
            this.nummer++
            console.log(`You touch a stone voor ${this.nummer} times`)
        }
        if (this.nummer >= 5) {
            console.log(`You are dead`)
        }
    }



}