let robot = "Machine : "

 console.log(robot + "Write Number : ")

 let nb1 = prompt("number 1 : ");
 let nb2 = prompt("number 2 : ");

 if ( nb1 + nb2 > 0) {
    console.log(robot + "the numbers positif ");
 }else if (nb1 + nb2 < 0) {  
    console.log(robot + "the numbers négatif ");
 }else{
    console.log(robot + "the number is 0 ");
 }
