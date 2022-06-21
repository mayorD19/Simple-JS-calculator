let proceed = true;
console.log(alert("Welcome to this simple Javascript Calculator!"));
while (proceed) {
    const input1 = prompt("Input First Number");

    const operators = prompt("choose an operator:\n  '+' ,'-' ,'*' , '/', '%' ");
    const input2 = prompt("Input Second Number");

    //creating the functions to work with.
    function add(n1, n2) {
        return +n1 + +n2;
    }

    function sub(n1, n2) {
        return n1 - n2;
    }

    function mult(n1, n2) {
        return n1 * n2;
    }

    function div(n1, n2) {
        return n1 / n2;
    }

    function mod(n1, n2) {
        return (n1 * n2) / 100;
    }
    //checking for operators used
    if (operators === "+") {
        alert(add(input1, input2));
    } else if (operators === "-") {
        alert(sub(input1, input2));
    } else if (operators === "*") {
        alert(mult(input1, input2));
    } else if (operators === "/") {
        alert(div(input1, input2));
    } else if (operators === "%") {
        alert(mod(input1, input2));
    } else {
        alert("Eti te rubbish.....Etunte.")
    }

    let moveOn = prompt("Do you want to continue using the Calculator?\ny/n").toLowerCase()
    if (moveOn === "y") {
        proceed = true;

    } else if (moveOn === "n") {
        proceed = false;
        alert("Thank You,make Donations!");
    } else {
        alert("Invalid Input...Retry!!")
        proceed = true
    }
}