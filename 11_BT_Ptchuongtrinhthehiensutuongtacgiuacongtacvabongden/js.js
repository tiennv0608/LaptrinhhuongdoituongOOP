class ElectricLamp {
    constructor(name) {
        this.name = name;
        this.status = false;
        this.turnOn = function () {
            if (this.status) {
                console.log("đang sáng rồi mà")
            } else {
                console.log("đèn đã được bật!");
                this.status =true;
            }
        };
        this.turnOff = function () {
            if (this.status) {
                console.log("đèn đã được tắt!");
                this.status =false
            } else {
                console.log("đang sáng rồi mà")

            }
        }
    }
};
class SwitchLamp {
    constructor() {
        this.lamp = {};
        this.connectStatus = false;
        this.connectToLamp = function (object) {
            this.lamp = object;
            this.status = true;
        };
        this.getStatus = function () {
            if (this.status) {
                console.log(this.lamp.name);
                console.log(this.lamp.status);
            }
        };
        this.switchOff = function () {
            if (this.status) {
                this.lamp.turnOff();
                this.getStatus();
            }
        };
        this.switchOn = function () {
            if (this.status) {
                this.lamp.turnOn();
                this.getStatus();
            }
        }
    }

};
