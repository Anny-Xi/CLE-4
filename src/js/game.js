import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { MainScene } from './scenes/mainScene'

export class Game extends Engine {

    player
    timer

    constructor() {
        super({ width: 1000, 
            height: 700,         
            fixedUpdateFps: 60,
            antialiasing: false 
        })

        //use arcade physics in the game
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0,900)

        this.start(ResourceLoader).then(() => this.startGame())

    }

    startGame() {
        console.log("start de game!")
        this.showDebug(true)
        
        // this.goToMainScene()



    }

    // goToMainScene(){

    //     const scene = new MainScene (this.player)
    //     // this.add(scene)
    //     this.addScene(scene)
    //     this.goToScene(scene)

    // }
}

new Game()
