///abstract class User {
   /// private profession: string;

   /// constructor(profession: string){
    ///    this.profession = profession;
   /// }

    ///goToWork() : void {}
///}
///class Doctor extends User {
    ///constructor(){
      ///  super('Doctor');
    ///}
///}

///class Police extends User {
    ///constructor(){
        ///super('Police');
    ///}
///}

abstract class User { 
    public professio: string;
    constructor(profession: string){
        this.professio = profession;
    }
    goToWork(): void{
    };
}

interface IUserExtraInformation { 
    phoneNumber: string;
}

class Doctor extends User implements IUserExtraInformation{
    constructor(phoneNumber: string){
        super('Doctor')
        this.phoneNumber = phoneNumber
    }
    phoneNumber: string;
    professio: string;
    goToWork(): void {
        throw new Error("Method not implemented.");
    }
}

class Police implements User, IUserExtraInformation{
    constructor(phoneNumber: string){
        this.professio = 'Police'
        this.phoneNumber = phoneNumber
    }
    phoneNumber: string;
    professio: string;
    goToWork(): void {
        throw new Error("Method not implemented.");
    }
}

function printProfession(model:User): void{
    console.log(model.professio);
}
let police = new Police('8888888'),
    doctor = new Doctor('9999999');

    printProfession(police);
    printProfession(doctor);