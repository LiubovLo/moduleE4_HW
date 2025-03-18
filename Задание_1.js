const door = {  
    weight: 40,
    height: 200,
    depth: 80,

    }

const obj = Object.create(door)  
obj.ownWeight = 100
obj.ownDepth = 50


getObject=(obj) => {  
for (let key in obj) {
    if (obj.hasOwnProperty(key))
    console.log(key + ' = ' + obj[key])
    }
}

getObject(obj)
