/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius. (32°F − 32) × 5/9 = 0°C


    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

function toCelcius(f){
    let c = f * (9/5) + 32;
    return c;
}

toCelcius(32)



/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the users password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/


class User{
    constructor(username, password){
        this.username=username
        this.password=password
    }

    check_password(password, new_password){

        if (password=this.password){
            console.log('You may now reset your password. What would you like your new password to be?')
            this.new_password = new_password
        } else {
            console.log('Passwords do not match. You cannot reset your password')
        }

    }

    
}







/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

function getPos(array){
    const squareNegatives = array.filter(function(x*x => x > 0);
    return squareNegatives;
}









