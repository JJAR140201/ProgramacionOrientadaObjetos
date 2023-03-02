//Principio de abstraccion

class Smartphone {
    color:String;
    brand:String;

    constructor(color: String, brand: String){
        color:String;
        brand:String;
    }
    
    makeAPhoneCall(): void {
    }
}
//Programacion Orientada a Objetos
let obj = new Smartphone('White', 'Iphone');
obj.makeAPhoneCall();
obj.color = 'Red'
obj.brand = 'Android'