let today = new Date()
let year = today.getFullYear()
let Buttons = []
let totalDays = 0;

class Button {
    constructor(date, words="", photos=[]) {
        this.date = date
        this.words = words
        this.photos = photos

    }
}

const setButtons = () => {
    let date = new Date(`January 01, ${year}`)

    while (true) {
        Buttons.push(new Button(date.toLocaleDateString("en-us")))
        date.setDate(date.getDate() + 1)
        totalDays += 1

        if (date.toLocaleDateString("en-us") == today.toLocaleDateString("en-us")) {
            break
        }
    }
}

const setJars = () => {
    let ButtonsLeft = 365 - totalDays
}

setButtons()
setJars()