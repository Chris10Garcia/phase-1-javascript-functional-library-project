
function myEach(collection, cb){

    const array = Object.values(collection)

    for (const ele of array){
        cb(ele)
    }
    return collection

}


function myMap (collection, cb){

    const array = Object.values(collection)
    const newArray = []
    
    for (const ele of array){
        newArray.push(cb(ele))
    }

    return newArray
}


function myReduce (collection, cb, initial){

    const array = Object.values(collection)
    if (!initial){
        initial = array.shift()
    }

    let acc = initial

    for (const ele of array){
        acc = cb(acc, ele)
    }

    return acc
}



function myFind(collection, predicate){
    const array = Object.values(collection)

    for (const ele of array){
        if (predicate(ele)) return ele
    }

    return undefined
}


function myFilter(collection, predicate){
    const array = Object.values(collection)
    const newArray = []

    for (const ele of array){
        if(predicate(ele)) newArray.push(ele)
    }

    return newArray
}

function mySize(collection){
    const array = Object.values(collection)

    let i = 0

    for (const ele of array){
        i++
    }

    return i
}

function myFirst(array, n=0){

    if (n === 0){
        return array[n]
    } else {
        return array.slice(0, n)
    }
}


function myLast(original, n=0){
    const array = [...original]
    if (n === 0){
        return array.pop()
    } else {
        return original.slice(-n)
    }
}


function myKeys(objects){
    const keys = []
    for (const key in objects){
        keys.push(key)
    }

    return keys
}

function myValues(objects){
    const values = []
    for (const key in objects){
        values.push(objects[key])
    }
    return values
}