// Can we put duplicate values in the set object ?

const chars = new Set(['a', 'b', 'c', 'c', 'a']);
console.log(chars);
chars.add('3');
chars.add('100');
chars.add('Aisha');
console.log(chars);

// Rules of Sets: Sets can hold data of any type, but may not contain duplicate items.
// It will give output without errors and print every item/object only once and skip duplicated or other instance of it
