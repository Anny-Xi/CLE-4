import { Scene, Vector, Label, Color, Font, vec, FontUnit, Timer } from "excalibur"
import { Player } from '../actor/player'
import { Background } from '../actor/background'
import { Blocks } from "../actor/blocks"
import { StartIcon } from '../actor/iconStart'
import { EndIcon } from "../actor/iconEnd"
// import { Flower } from './flower'

export class MainScene extends Scene {

    constructor() {
        super()
        this.label = new Label({
            text: "Main Game",
            pos: new Vector(100, 100),
            font: new Font({
              family: "arial",
              size: 30,
              unit: FontUnit.Px,
              color: Color.White,
            }),
          });
          this.add(this.label);

    }


    onInitialize(engine) {


    }

    onActivate(engine){
      const background = new Background()
      this.add(background)

      const block = new Blocks()
      this.add(block)

      console.log("the game over scene is created, the MainScrene")

      const button = new EndIcon('endGame')
      this.add(button)
    }

    

}


