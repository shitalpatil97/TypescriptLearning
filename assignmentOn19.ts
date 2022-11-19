class Organizer{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;

    }
    public display():void{
        console.log(`Organizer id ${this.id} and ${this.name}`);
        
    }
}

class Event1 extends Organizer{
    description:string;
    startTime:number;
    constructor(id:number,name:string,description:string,startTime:number){
        super(id,name);
        this.description=description;
        this.startTime=startTime;
        
    }
    public display(): void {
        super.display();
        console.log(`Id: ${this.id}  Name: ${this.name}  Description: ${this.description}   StartTime:${this.startTime}`);
        

    }


}

class Venue extends Event1{
    address:string;
    constructor(id:number,name:string,description:string,startTime:number,address:string){
        super(id,name,description,startTime);
    
        this.address=address;
        
    }
    public display(): void {
        super.display();
        console.log(`Id: ${this.id}  Name: ${this.name}  Description: ${this.description}   StartTime:${this.startTime}  Address:${this.address}`);
        

    }


}
let obj= new Venue(1,"shital","this is famous event management company",11,"Sangola");
obj.display();