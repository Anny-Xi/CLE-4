// import { Actor, Vector } from "excalibur"
import { Player } from '../actor/player'
// import { Blocks } from './blocks'
import { Floor} from '../actor/ground'
// import { Flower } from './flower'

export class MainScene extends Scene {

    constructor(player) {
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

        const background = new Background()
        this.add(background)

        const player = new Player()
        this.add(player)

        const ground = new Floor()
        this.add(ground)

    }
    

}


