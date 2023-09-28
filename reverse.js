const myString = ['hello', 'goodbye'];

for (let i = 0; i < myString.length; i++) {
    const reversedString = myString[i].split('').reverse().join('');
    console.log(reversedString);
}
