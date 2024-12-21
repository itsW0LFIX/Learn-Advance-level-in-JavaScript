let robot = "Machine : ",nbofrobot= 10;

 console.log(robot + "Write Number 1 to 3 : ")
 let nb = prompt("Number: "); // Prompt the user for a number
 nb = parseInt(nb, 10); // Convert the input to a number
 
 for (let i = 1; i <= 10; i++) {
    console.log(nb + i);
}