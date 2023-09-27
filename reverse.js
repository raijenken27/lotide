

// const reversed = array1.reverse();
// console.log('reversed:', reversed);
//const myString = '['hello', 'goodbye'];

//for (let i = myString.length - 1; i >= 0; i--) {
 //   console.log(myString[i])
//} //

//const myString = ['hello', 'goodbye'];

//for (let i = myString.length - 1; i >= 0; i--) {
//    console.log(myString[i]);
//}


const myString = ['hello', 'goodbye'];

for (let i = 0; i < myString.length; i++) {
    const reversedString = myString[i].split('').reverse().join('');
    console.log(reversedString);
}
