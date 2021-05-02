
var args = process.argv.slice(2);
const numberMap = new Map([
    [0,"Zero"],[1,"One"],[2,"Two"],
    [3,"Three"],[4,"Four"],[5,"Five"],
    [6,"Six"],[7,"Seven"],[8,"Eight"],
    [9,"Nine"]]
    );

function Conversion(item){
    var result = "";
    while(item>=1){
        var b = item%10;
        item = Math.floor(item/10);
        var temp = numberMap.get(b);
        result = temp + result; 
        }
    return result;
    }
    
    /*var input = [3,25,209];*/
try{
    var output = args.map(item=>Conversion(item));
    console.log(output.toString());
}catch(e){
    console.error(e);
}