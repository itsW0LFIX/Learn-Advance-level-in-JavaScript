let robot = "Machine : ";

console.log(robot + "Write Number : ")

let sex = prompt("your sex : ");

let age = prompt("your age : ");

if (sex == "men") {
    if (age >= 20) {
        console.log("you need pay tax")
    } else {
        console.log("do not pay tax");
    }
} else if (sex == "women") {
    if (age >= 18 && age <= 35) {
        console.log("you need pay tax")
    } else {
        console.log("do not pay tax");
    }
}else{
    console.log("who are you");   
}