let robot = "Machine : "

 console.log(robot + "Write Number : ")

 let nb = prompt("number : ");

 if ( nb >= 6 && nb <= 7) {
    console.log(robot + "poussin");
 }else if (nb >= 8 && nb <= 9){
    console.log(robot + "pupille");
 }else if (nb >= 10 && nb <= 11){
    console.log(robot + "minime");
 }else if (nb >= 12) {
    console.log(robot + "cadet");
 }else{
    console.log(robot + "you are " + nb);
 }