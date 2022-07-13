let cartoons = [
    tom = {
        name: "Tom",
        height: 9,
        mass: 8,
        bmi: this.mass / (this.height * this.height)
    },

    jerry = {
        name: "Jerry",
        height: 10,
        mass: 45,
        bmi: this.mass / (this.height * this.height)
    }

]

let validation = (jerry.bmi < tom.bmi);

console.log(`Is Tom's BMI higher than Jerry's? ${validation}.`);