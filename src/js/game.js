import '../css/style.css'
import { Physics, Engine, Vector, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartScene } from './scenes/start'
import { MainScene } from './scenes/mainScene'
import { EndScene } from './scenes/endScene'

export class Game extends Engine {


    constructor() {
        super({ width: 1000, 
            height: 700,         
            fixedUpdateFps: 60,
            antialiasing: false 
        })


        this.start(ResourceLoader).then(() => this.startGame())

    }

    startGame() {
        console.log("start de game!")
        this.showDebug(true)
    
        this.addScene('startGame', new StartScene())
        this.addScene('mainGame', new MainScene())
        this.addScene('endGame', new EndScene())

        this.goToScene('startGame')


    }


}

new Game()
