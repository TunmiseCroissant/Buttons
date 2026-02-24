let today = new Date()
let year = today.getFullYear()
let totalDays = 0;


const Buttons = JSON.parse(localStorage.getItem("Buttons")) || [];

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


while (true) {
    const day = prompt('What day would you like to add words to? (format: month/day/year // 1/1/2026): ');

    const button = Buttons.find(obj => obj.date === day);

    if (button) {
        const text = prompt("What would you like to add? ")
        button.words += text
        console.log(button)
        localStorage.setItem("Buttons", JSON.stringify(Buttons))
        break
    } else {
        console.log("Invalid day. please enter in correct format.")
    }
};
