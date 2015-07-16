//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      // provide context a bit in the same way as he/ she does for language

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // 1. Implicit binding
      // 2. Explicit  (bind, call, apply)
      // 3. new binding 
      // 4. window bindng (not in 'use strict')


  // 3) What is the difference between call and apply?

      //Answer
      // call takes arguments, apply takes array, which it converts into arguments

  // 4) What does .bind do?

      //Answer
      // binds function into this to be used when the function is called


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 
  // 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'tkarling',
      email: 'a@a.com',
      getUsername: function () {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
    console.log(user.getUsername());


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function moveCar () {
    this.move =+ 10;
    return this.move; 
}  

var Car = function (make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    move: 0,
    moveCar: moveCar
  };
};
 

// var Car = function (make, model, year) {
//   var myCar = {};
//   myCar.make = make;
//   myCar.model = model;
//   myCar.year = year;
//   myCar.move = 0;
//   myCar.moveCar = moveCar;
//   return myCar;
// }

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);
console.log('prius', prius);
console.log('mustang', mustang);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

console.log('prius move', prius.move);
console.log('mustang move', mustang.move);

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use 
//the proper syntax that will allow for you to call the getYear function with the prius then 
//the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
  // prius.getYear = getYear.bind(prius);
  // console.log('prius.getYear()', prius.getYear());
  // mustang.getYear = getYear.bind(mustang);
  // console.log('mustang.getYear()', mustang.getYear());

  console.log(getYear.call(prius));
  console.log(getYear.call(mustang));


//New Problem

var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

// setTimeout(getUsername, 5000);
setTimeout(getUsername.bind(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, 
// what will the getUsername function return?

  //Answer Here
  undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  window

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.


