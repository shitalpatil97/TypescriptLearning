import {Arithmetic} from "./file";
class Implementation extends Arithmetic{
    public display():void{
        console.log(super.add(10,10),super.sub(10,10),super.mul(10,10),super.div(10,10));
        

    }
}
var s=new Implementation();
s.display();
