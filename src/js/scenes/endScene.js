import { Scene, Vector, Label, Color, Font, vec, FontUnit, Input } from "excalibur"
import { Background } from '../actor/background'
import { MainScene } from "./mainScene";
import { EndIcon } from "../actor/iconEnd";

export class EndScene extends Scene {

  engine

  time = 0
  timeText


  constructor() {
    super()
  }


  onInitialize(engine) {

    const background = new Background()
    this.add(background)

    const button = new EndIcon('startGame')
    this.add(button)




  }

  onActivate(engine) {
    console.log("the game scene is created, end")

    const previous = JSON.parse(localStorage.getItem("score"))
    if (previous) { console.log(previous.score) }

    let endText = new Label({
      text: "FINISH!!",
      pos: new Vector(200, 200),
      font: new Font({
        family: "impact",
        size: 70,
        color: Color.White,
        unit: FontUnit.Px
      }),
    })
    this.add(endText);

    this.timeText = new Label({
      text: `You remove a bumping pink with ${previous.life} life in: ${previous.score} S`,
      font: new Font({
          unit: FontUnit.Px,
          family: 'impact',
          size: 28,
          color: Color.White,
      }),
      pos: new Vector(200, 400)
  })
  this.add(this.timeText)

  }


}


