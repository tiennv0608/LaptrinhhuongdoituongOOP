class Apple {
    constructor(weight) {
        this.weight = weight;
        this.getWeight = function () {
            return this.weight;
        }
        this.decrease = function () {
            if (this.weight > 0) {
                this.weight --;
            }
        }
        this.isEmpty = function () {
            if(this.weight > 0){
                return true
            } else {
                return false
            }
        }
    }
}
class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.getName = function (){
            return this.name;
        }
        this.isMale = function (gender) {
            if (gender == 'Male') {
                return true;
            } else {
                return false;
            }
        }
        this.setGender = function () {
            if (this.isMale(gender)) {
                return gender;
            } else {
                return gender;
            }
        }
        this.checkApple = function (object) {
            this.apple = object;
            this.apple.isEmpty()
        }
        this.eat = function (object) {
            this.apple = object;
            if (this.checkApple(object)) {
                this.weight = this.weight;
            } else {
                this.apple.decrease();
                this.weight++;
            }
        }
        this.say = function (detail) {
            console.log(detail);
        }
    }
}
