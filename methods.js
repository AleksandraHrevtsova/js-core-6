const obj = {
  name: 'user',
  num1: '2',
  num2: 10,
  // // ES5
  // toSayHello: function(){
  //     console.log('HELLO!!');
  // }

  // ES6
  toSayHello(){
      console.log('HELLO!!');
  },
  toGetSum(){
      return Number(this.num1) + Number(this.num2);
  },
  getTotal(...args){
      console.log("args:",args);
      return args.reduce((memo, num)=>{
          memo += num;
          return memo;
      }, 0)
  },
  joinFullName(firstName = 'name', lastName = 'last name'){
      if(!this.name && !this.lastName){
          return `${firstName} ${lastName}`;
    } else {
         return `${this.name} ${this.lastName}`;
    }
  }
};

console.log(obj);
obj.toSayHello()

let result = obj.toGetSum()
console.log("result:",result);

const newObject = {
    num1: '5',
    num2: '3'
}
console.log(newObject);
// newObject.toGetSum()
result = obj.toGetSum.call(newObject);
console.log('result:', result);

result = obj.getTotal(1, 2, 3)
console.log('result:', result);

result = obj.getTotal(10, 20, 30);
console.log('result:', result);

result = obj.joinFullName.call(newObject, 'Sandra', 'Hrevtsova');
console.log('result:', result);

result = obj.joinFullName.apply(newObject, ['Sandra', 'Hrevtsova']);
console.log('result:', result);