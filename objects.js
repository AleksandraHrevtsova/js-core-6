console.log(`OBJECTS`);

const myObject = {
    name: 'Sandra',
    'last_name': 'Hrevtsova'
};
console.log(myObject); 
console.log(myObject.name); // Sandra
console.log(myObject['name']); // Sandra

console.log(myObject.nam); // undefined
console.log(myObject['nam']); // undefined

console.log(myObject.last_name); // Hrevtsova
console.log(myObject['last_name']); // Hrevtsova

let isOnline = false
let isStudent = false

const myChildObject = Object.create(myObject);
console.log('myChildObject:', myChildObject);

myChildObject.firstName = 'Savelii'

console.log(myChildObject.hasOwnProperty('name'));
console.log(myChildObject.hasOwnProperty('last_name'));
console.log(myChildObject.hasOwnProperty('firstName'));

myChildObject['age'] = 10

for(let property in myChildObject){
    // console.log('property:', myChildObject.hasOwnProperty(property));
    if(myChildObject.hasOwnProperty(property)){
        console.log('property:', property);
    }
}

const newStudent = { isOnline, isStudent };
console.log(newStudent);

const form1 = 'userName'
const form2 = 'studentName';

const student1 = Object.create(newStudent);
console.log('student1:', student1);

student1[form1] = 'value'

const student2 = Object.create(newStudent);
console.log('student2:', student2);

student2[form2] = 'value'