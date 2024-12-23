let nb,save = 0;

for (let i = 1; i <= 5; i++) {
    let nb = prompt("Number "+i+" : "); 
    nb = parseInt(nb, 10); 
    if (nb >= save) {
        save = nb;
    } else {
        console.log("skip") // just for testing
    } 
}
console.log(save);
