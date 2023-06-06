import { Scene, Vector, Label, Color, Font, vec, FontUnit, Input} from "excalibur"
import { Background } from '../actor/background'
import { MainScene } from "./mainScene";
import { StartIcon } from '../actor/iconStart'

export class EndScene extends Scene {
  engine

    constructor() {
        super()
        this.label = new Label({
            text: "//",
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


    }

    onActivate(engine){
      console.log("the game scene is created, end")
      const button = new StartIcon('mainGame')
      this.add(button)
    }
    

}


