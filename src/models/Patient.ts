export class Patient {
    constructor(
        public id:number,
        public name:string,
        public age:number,
        public address:string,
        public phone:string,
        public dui:string
    ){
        this.id=id,
        this.name=name,
        this.age=age,
        this.address=address,
        this.phone=phone,
        this.dui=dui
    }
}