// #Enonse 11
 function piGran (...numbers){
   let max= numbers[0]

    for (let i=0; i<n+1;i ++){
        if (numbers[i]> max){
            max=numbers[i] 
        }
    return max
    }
 }
const numbers=[0, 1, 3, 5, 13, 99, 34, 87, 50]
let n=numbers.lenght
let g= piGran(numbers,n)

function piPiti(...numbers){
    let min= arr [0]
    for (let i=0; i<n+1;i++){
        if (numbers[i]< min){
            min=numbers[i] 
        }
    return min  
    }
}
let p=piPiti(numbers,n)
console.log("pi gran eleman nan lis la se:",g)
console.log("Pi piti eleman nan lis la se:",p)

//12
 function output(a,b){
    if (a <= b){
        return a
    }
    else{
        return b
    }       
 }
 console.log(output(2,5))


//13
function sekans(list){
   let long = list.lenght
   let  k = long
    while (k > 0){
        let arr = []
        let j=arr[0,k].reverse()
        let m= arr[k,long]
        let som =m+j
        k = k-1
        console.log(arr.push(som))
        console.log(3, "with the index of", arr.indexOf(3))
    }
    return arr
}

sekans([0, 1, 2, 3, 4])

 //14
function output(a, b){
    return b/(2*a)
}
console.log(output(2, 16))
console.log(output(3, 24))


 //15

function findBetween(str){
    let lisFraz= str.split(' ')
    let idx1= lisFraz.findIndex(el => el === "hidden") 
    let idx2= lisFraz.findIndex(el => el === "endpass") 
    let nouvoLis1=lisFraz.splice(0,idx1) 
    let nouvoLis2=nouvoLis1.splice(idx2,-1)
    let bon=nouvoLis2.toString()
    return bon 
}
    

console.log(findBetween("yon fraz ki ant hidden ki probablement se yon fraz ak endpass ki ka yon fraz tou"))