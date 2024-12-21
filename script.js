let robot = "Machine : ",nbofrobot= 13;

 console.log(robot + "Write Number 1 to 3 : ")

 while (true) { // Loop runs indefinitely
    let nb = prompt("Number: "); // Prompt the user for a number
    nb = parseInt(nb, 10); // Convert the input to a number

    if (nb > nbofrobot) { // Check if the guessed number is correct
        console.log(robot + "the number is small");
         // Exit the loop (close it)
    } else if(nb < nbofrobot){
        console.log(robot + "the number big");
    }else if (nb === nbofrobot) {
                console.log("the number is :"+nb);
        break;
    }
}
