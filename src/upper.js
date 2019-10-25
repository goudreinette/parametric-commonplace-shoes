import imagePaths from './assets/upper/*.png'
import mapValues from 'lodash.mapvalues'

let images = {}

export default {
    setup(s) {
        images = mapValues(imagePaths, i => s.loadImage(i))
    },

    draw(s, {upper, length, upperColor}) {
        s.tint(upperColor)
        s.image(images[upper], s.width/2, s.height/2 - 82, length, 200)
    }
}
