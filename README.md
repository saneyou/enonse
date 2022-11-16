# enonse
//Enonse 1
let ip="127.0.0.1";
let lisIp=ip.replace('.','');
let total=0;

for (let y=0;y<lisIp.length;y++){
    total+=int(y)
}
    let som = total*(lisIp[0])
console.log(som)

//#2
let antye=16
if (antye % 4 == 0){
    a="NOKE"
}else if( antye % 4 != 0){
    a= 'OK'}
    console.log(a)


    //#3

let non=prompt("Tanpri antre non w: ")
while (non=== ' '){
    non=input ("Tanpri antre non w: ")
}
nouvoNon=non.toLowerCase()
 let maj=nouvoNon.split(' ')
 let bonNon=''
 for (let i=0;i<maj.length;i++){
 	bonNon=maj[i].toUpperCase()
 }
 

console.log(bonNon)

//#4

let chif='5 45 123 12';
let x=chif.split('');
let t=0
let m=1
let n_lis=[]
let m_lis=[]
for (i of x){
    a=list(i)
    n_lis.push(a)
}
    for (z of a){
        t+=(z)
        m_lis.push(t)
        t=0  
    }
     
for (d of m_lis){
    m*=(d)
}
console.log(m)
    

 //#5

let a=2
let b=3
let divA=[]
let divB=[]
let divAb=[]
let nonAb=[]


for (el of (1,21)){
    if (el % a == 0){
         div_a.push(el)
}else if (el % b == 0){
    divA.push(el)
}else{
    nonAb.push(el)
}
} divAb=divA+ divB

let one = divA.length
let two= divB.length
let three= divAb.length
let four= nonAb.length

console.log(`${divA},Total nonb se ${one}`)
console.log(`${divB}Total nonb se ${two}`)
console.log(`${divAb}total nonb se ${three}`)
console.log(`${nonAbtotal} nonb se ${four}`)
