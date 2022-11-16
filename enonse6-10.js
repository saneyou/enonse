//6enonse 6
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];

    }
    return newString;
}
console.log(reverseString('Ayibobo Ayiti').replace(' ',''));


// //7
let a = "I think this is a fucking string";
let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
let mot = "";
let l= a.length
for(let k=0;k< l-1;k++){
    let j=a[k+1]
    if (j.includes(voyelles)){
        mot += "*"
    }
    else{
    mot += a[k]
    k = k + 1
    mot += a[l - 1] 
    }
}
console.log(mot)

// //8
let text="I dont give a fuck about this country!"
let neWtext=text.split(' ')
let fraz=neWtext.toString()
let sanEspas=''
for(let i=0;i<fraz.length;i++){
    sanEspas+= fraz[i].replace(',','')
}
console.log(sanEspas)

// //9
let b=[1,2,3,4,5,6,7,8,9,10]

let m=0
let lo=[]

for (let x=0; x<b.length;x++){
    if(x % 2  == 0 ) {
        m+=x
        lo.push(m)
    }
}
console.log(lo)

// //10
let kod="web-insecure;34829sjdfnsj32984madsdkj"
let lis= kod.split (' ')
let position=lis.indexOf(';')
let nouvo=''
let bon=''
for (let x=0;x<lis.length;x++){
    nouvo+=lis[x]
    bon=delete nouvo[0,position]

}
console.log(bon)
