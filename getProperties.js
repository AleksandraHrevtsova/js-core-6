// Object.keys(obj)
// Object.values(obj);
// Object.entries(obj);

const user = {
    name: 'user',
    age: 18,
    gender: 'male',
    isOnline: false
}

// console.log(user);

const allKeys = Object.keys(user);
// console.log(allKeys);

const allValues = Object.values(user)
// console.log(allValues);

const allProps = Object.entries(user)
// console.log(allProps);

const propductsPrices = {
    bread: 10,
    meat: 20,
    milk: 15,
    apples: 7
}

const productsCount = {
  bread: 5,
  meat: 3,
  milk: 2,
  oranges: 5
};

function getTotal(prices, counts){
    // console.log('prices:', prices);
    // console.log('counts:', counts);
    // console.log("prices keys:",Object.keys(prices));
    // console.log('counts keys:', Object.keys(counts));
    let total = 0;
    for (let product of Object.keys(prices)) {
        // console.log('product:', product);
        // console.log('product price:', prices[product]);
        // console.log('product count:', counts[product]);
        if (counts[product]){
            total += prices[product] * counts[product];
        } 
        // console.log(total);
    }
    return total;
}

let total = getTotal(propductsPrices, productsCount);
console.log('total:', total);

const user1 = {
    name: 'user1'
}

const user2 = {
  name: 'user2',
};
const user3 = {
  name: 'user3',
};

const users = [user1, user2, user3];
console.log(users);

let result = users.map((user)=>{
    console.log(user);
    return user.name
})
console.log(result);