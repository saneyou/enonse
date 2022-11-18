

let al=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let word=''
//code="<1T >7H >3C <5Y >13J <2C <5W >4A"
//code="<14P <1V <1H >4O"
let code=">3A >0A <1U <10K >1A <9J <0S <16U"
code=code.split(' ')
let Long= code.length
      
for (let i=0;i<Long;i++){
     d=i[-1]
     c=code.indexOf(d)
     e= (i[1,-1])
    if (i[0]=='<'){
        f=c-e
    }
    else if (i[0]== '>'){
        f=c+e  
    }
    p=al[f]
    word+=p
}
console.log(word)