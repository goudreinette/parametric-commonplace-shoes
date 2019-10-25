import soleImage from './assets/soles/sole1.png'

let img

export default {
    setup(s) {
        img = s.loadImage(soleImage)
    },

    draw(s, {length, soleColor}) {
        s.tint(soleColor)
        s.image(img, s.width/2, s.height/2, length * 1.03, 100)
    }
}
