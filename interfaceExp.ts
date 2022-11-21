interface IEvent{
    id:number;
    name:string;
    display():void;
}
class Organizer1 implements IEvent{
    id: number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    display():void{
        console.log(`ID: ${this.id}  Name: ${this.name}`);
        
    }

}
class Event1 implements IEvent{
    id: number;
    name:string;
    description:string;
    startTime:number;
    constructor(id:number,name:string,description:string,startTime:number){
        this.id=id;
        this.name=name;
        this.description=description;
        this.startTime=startTime;
    }
    display():void{
        console.log(`ID: ${this.id}  Name: ${this.name} Description: ${this.description}  StartTime:${this.startTime}`);
        
    }

}
class Venue implements IEvent{
    id: number;
    name:string;
    description:string;
    startTime:number;
    address:string;
    constructor(id:number,name:string,description:string,startTime:number,address:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.startTime=startTime;
        this.address=address;
    }
    display():void{
        console.log(`ID: ${this.id}  Name: ${this.name} Description: ${this.description}  StartTime:${this.startTime}  Address: ${this.address}`);
        
    }

}
var o=new Organizer1(1,"Shital");
o.display();
var e=new Event1(1,"shital","bday party",11);
e.display();
var v=new Venue(1,"shital","bday party",11,"Sangola");
v.display();

