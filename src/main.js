import p5 from 'p5'
import sole from './sole'
import upper from './upper'

const parameters = {
    length: 500,
    soleType: 'sneaker',
    upper: 'sneaker',
    upperColor: 'white',
    soleColor: 'white'
}

addEventListener('load', () => {
    document.querySelector('[name=length]').oninput = e =>
        parameters.length = e.target.value

    document.querySelector('[name=height]').oninput = e =>
        parameters.height = e.target.value

    document.querySelector('[name=sole-type]').oninput = e =>
        parameters.soleType = e.target.value

    document.querySelector('[name=upper]').oninput = e =>
        parameters.upper = e.target.value

    document.querySelector('[name=upper-color]').oninput = e =>
        parameters.upperColor = e.target.value

    document.querySelector('[name=sole-color]').oninput = e =>
        parameters.soleColor = e.target.value
})


new p5(s => {
    s.setup = () => {
        s.imageMode(s.CENTER)
        s.createCanvas(innerWidth, innerHeight)
        sole.setup(s)
        upper.setup(s)
    }

    s.draw = () => {
        s.background('black')
        upper.draw(s, parameters)
        sole.draw(s, parameters)
    }

    s.windowResized = () => {
        s.resizeCanvas(innerWidth, innerHeight)
    }
})

