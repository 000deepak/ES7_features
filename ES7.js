//ES7 Features
//1.Array.prototype.includes()
//2.Exponentiation Operator


//-------------------------------------------Array.prototype.includes()

//returns true if array contains the value, otherwise it returns false.
//handles NaN better than Array.prototype.indexOf(). 
//If the array contains NaN, then indexOf() does not return a correct index while searching for NaN.

let marks = [50,60,70,80]
   if(marks.includes(50)){
      console.log('found element in array') //true
   }else{
      console.log('could not find element')
   }

   // check if 50 is found from index 1
   if(marks.includes(50,1)){ //search from index 1
      console.log('found element in array') 
   }else{
      console.log('could not find element') //true
   }

   //check Not a Number(NaN) in an array
   console.log([NaN].includes(NaN))         //true

   //create an object array
   let user1 = {name:'kannan'},
   user2 = {name:'varun'},
   user3={name:'prijin'}
   let users = [user1,user2]

   //check object is available in array
   console.log(users.includes(user1))       //true
   console.log(users.includes(user3))       //false


//----------------------------------Exponentiation Operator
console.log(2**3)
