class Mobile {
    constructor(_name,_type) {
        this.name = _name;
        this.type = _type;
        this.battery = 100;
        this.message = '';
        this.inbox = [];
        this.outbox = [];
    }

    writeMessage(msg){
        this.message = msg;
    }

    receiveMessage(msg){
        this.inbox.push(msg);
    }

    sendMessage(mobile){
        mobile.receiveMessage(this.message);
        this.outbox.push(this.message);
    }

    decreaseBattery(){
        if(this.battery > 0)
            this.battery-=20;
        else
            alert("Sạc pin vào bạn êiiii!");
    }
    // chargeBattery(){
    //     if (this.battery<100)
    //         this.battery ++;
    // }
}
