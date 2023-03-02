//Principio de abstraccion

class Smartphone {
    private color:String;
    private brand:String;
    private _battery: number;

    constructor(color: String, brand: String){
        this.color = color;
        this.brand = brand;
        this._battery = 100;
    }
    
    makeAPhoneCall(): void {
        if(this._battery === 0){
            throw "No cuenta con la bateria necesaria"
        }
        this._battery -= 10;
    }

    get battery() : number{
        return this._battery;
    }

    recharge(){
        this._battery = 100;
    }
}
//Programacion Orientada a Objetos
let obj = new Smartphone('White', 'Iphone');
obj.makeAPhoneCall();
obj.battery;