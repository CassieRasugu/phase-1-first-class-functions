function receivesAfunction(callback){
    callback();
}
function returnsANameFunction(){
    function namedFunction(){
        console.log("Named function");
    }
    return namedFunction;
}
function returnAnAnonymousFunction(){
    return function (){
        console.log("Anonymous function");
    }
}
