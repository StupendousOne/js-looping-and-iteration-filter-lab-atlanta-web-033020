// Code your solution in this file
function findMatching(arr, text){
    let retArr = []
    for(const element of arr){
        if(element.toLowerCase() === text.toLowerCase()){
            retArr.push(element)
        }
    }
    return retArr
}

function fuzzyMatch(arr, text){
    let retArr = []
    for(const element of arr){
        if(element.slice(0,text.length).toLowerCase() === text.toLowerCase()){
            retArr.push(element)
        }
    }
    return retArr
}

function matchName(arr,text){
    let retArr = []
    for(const element of arr){
        if(element.name.toLowerCase() === text.toLowerCase()){
            retArr.push(element)
        }
    }
    return retArr
}