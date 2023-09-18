// Write the syntax for
// a) Creating new set object
// syntax: const name_of_object = new Set([set_elements]);
const name_of_set_ob = new Set(['anything', 1, 2, 3]);
console.log(name_of_set_ob);

// b) Adding new element to set object
const alphabet = new Set(); //created set
alphabet.add(20); //add() method adds element in Set 
alphabet.add(30);
alphabet.add('Aishwarya');
alphabet.add(100);
console.log(alphabet);

// c) Deleting element from set object
name_of_set_ob.delete(3); //delete() method deletes the element from set which is given 
name_of_set_ob.delete(1);
console.log(name_of_set_ob);
