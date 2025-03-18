const door = { 
    weight: 40,
    height: 200,
    depth: 80, 

    }

checkPropertyFunc = (str, obj) => { 
    if (str in obj ) {
        console.log(true) 
    } else {
        console.log(false)} 
}

checkPropertyFunc('depth', door) 
