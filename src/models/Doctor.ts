export class Doctor{
    constructor(
        public id:number,
        public name:string,
        public specialty:string,
        public phone:string
    ) {
        this.id=id,
        this.name=name,
        this.specialty=specialty,
        this.phone=phone
    }
}