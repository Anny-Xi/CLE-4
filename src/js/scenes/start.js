import { Scene, Vector, Label, Color, Font, vec, FontUnit, Input} from "excalibur"
import { Background } from '../actor/background'
import { MainScene } from "./mainScene";
// import { Flower } from './flower'

export class StartScene extends Scene {

    constructor() {
        super()
        this.label = new Label({
            text: "Welkom to the game, click somewhere to start",
            pos: new Vector(0 , 350),
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

        engine.input.pointers.on("down", this.mainGame())


        console.log("the game over scene is created, the start")


    }
    
    mainGame(){

      this.addScene('mainGame', new MainScene())
      this.goToScene('mainGame')

    }

}


