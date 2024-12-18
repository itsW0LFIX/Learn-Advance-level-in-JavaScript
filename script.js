let robot = "Machine : ",nbofrobot= 3;

 console.log(robot + "Write Number 1 to 3 : ")

 while (true) { // Loop runs indefinitely
    let nb = prompt("Number: "); // Prompt the user for a number
    nb = parseInt(nb, 10); // Convert the input to a number

    if (nb === nbofrobot) { // Check if the guessed number is correct
        console.log(robot + "It's the number!");
        break; // Exit the loop (close it)
    } else {
        console.log(robot + "Not the number.");
    }
}
