import { Scene, Vector, Label, Color, Font, vec, FontUnit, Timer } from "excalibur"

import { Background } from '../actor/background'
import { Blocks } from "../actor/blocks"
// import { StartIcon } from '../actor/iconStart'
// import { EndIcon } from "../actor/iconEnd"
// import { Flower } from './flower'

export class MainScene extends Scene {

  engine

  time = 0
  timeText

  points

  constructor() {
    super()


  }


  onInitialize(engine) {
    this.engine = engine

    const background = new Background()
    this.add(background)

    console.log("the game over scene is created, the MainScrene")

    // const button = new EndIcon('endGame')
    // this.add(button)








    // this.points = Math.round( Math.random() * 3 + 1)
    // const block = new Blocks(this.points)
    // this.add(block)

  }

  onActivate(engine) {
    this.scoreText = new Label({
      text: 'Start!',
      font: new Font({
        unit: FontUnit.Px,
        family: 'impact',
        size: 28,
        color: Color.White,
      }),
      pos: new Vector(400, 100)
    })
    this.add(this.scoreText)
    

    const timer2 = new Timer({
      fcn: () => this.updateScore(),
      repeats: true,
      interval: 1000,
    })
    this.add(timer2)

    timer2.start()

    this.points = Math.round( Math.random() * 3 + 1)
    const block = new Blocks(this.points)
    this.add(block)
    
  }


  updateScore() {
    this.time++
    let data = {
      score: this.time,
      life: this.points
    }
    this.scoreText.text = `Time passed: ${this.time}`
    localStorage.setItem("score", JSON.stringify(data))

    this.engine.time = this.time
  }


}


