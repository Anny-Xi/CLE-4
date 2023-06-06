import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import player from "../images/player.png"
import backgroundImage from "../images/background.jpg"
import floor from "../images/floor.png"
import flower from "../images/flower.png"
import flowerR from "../images/flower_leaveR.png"
import flowerL from "../images/flower_leaveL.png"
import flowerN from "../images/flower_leaveN.png"
import starticon from "../images/startIcon.png"

const Resources = {
    Player: new ImageSource(player),
    Flower: new ImageSource(flower),
    FlowerR: new ImageSource(flowerR),
    FlowerL: new ImageSource(flowerL),
    FlowerN: new ImageSource(flowerN),
    Background: new ImageSource(backgroundImage),
    Floor: new ImageSource(floor),
    Starticon: new ImageSource(starticon)
}
const ResourceLoader = new Loader([
    Resources.Player, 
    Resources.Flower,
    Resources.FlowerR,
    Resources.FlowerL,
    Resources.FlowerN,
    Resources.Background, 
    Resources.Floor,
    Resources.Starticon
])

export { Resources, ResourceLoader }