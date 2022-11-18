interface IExterior{
    color:string;
    numOfDoors:number;

}
interface IInterior{
    seats:number;
    auto:boolean;

}
interface ICar extends IExterior,IInterior{
    make:string;
    model:string;
    year:number;


}
var myCar:ICar={
    make:"TATA",
    model:"Altroz",
    year:2022,
    color:"White",
    numOfDoors:5,
    seats:7,
    auto:false
}