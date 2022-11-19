class Basic{
    add(...numbers){
        let long=numbers.length
        let sum=0
        if(long<=1){
            throw new MissingParameterError()
        }
        else if (long>=2){
            if (numbers[0].length>1){
                numbers= numbers[0]
            }
            for(let i=0; i< numbers.length; i++){
                sum+= numbers[i]
            } 
        }
        
        return sum;
    }
    
    substract(...numbers){
        let long= numbers.length
        let sub= numbers[0]
        if(long<= 1){
            throw new MissingParameterError()
        }
         else if( long>=2){
            for (let i=1;i<numbers.length; i++){
                sub-=numbers[i]
            }  
        }
        
        return sub

    }
    
    divide(...numbers){
        let div= 0
        let long= numbers.length
        if (long === 2 ){
            if (numbers[0]!=0 && numbers[1]!=0){
                let p= numbers[0];
            let s= numbers[1];
            div= p/s
            }
            else if (numbers[0]===0 || numbers[1]===0){
                throw new ZeroDivisionError('Ou paka fe divizyon sa')
            } else if(numbers[0]===0 && numbers[1]===0){
                throw new InfinityResultError ('Ou mete de zewo')
            }
            
        }
        else if(long>2){
            throw new ValueError('Ou antre plis ke 2 nonb')
        }
        
        return div
    }

    multiply(...numbers){
        let mul=1
        let long=numbers.length
        if (long>=2){
            for (let i=0;i<numbers.length; i++){
                mul= numbers[0]*numbers[i]
            }
        }
        else if(long<2){
            throw new MissingParameterError()
        }
        return mul
    }
}


class Calculator extends Basic {
    fact(n){
        let toriel= 1
        let long= n.length
        if (long>1){
          throw new TypeError('Ou mete plis ke yon eleman')
        }
        else if (long===0){
            throw new MissingParameterError('ou pa founi ase paramet');
        }else{
            if (n<0){
                throw new ValueError('Ou pa antre on bon vale')
            }
            
            else if (Number.isInteger(n)){
                for (let i=1;i<=n;i++){
                    toriel=toriel*this.multiply(1,i)
                } 
            }
            else{
                throw new TypeError('paramet ou a pa bon')
            }
        } 
        return toriel 
    }
    

    
    avg(...numbers){// 2
        let moy= 0
        let long= numbers.length
        for(let i=0; i<long;i++){
            if  (typeof(numbers[i])!= "number"){
                throw new ValueError()
            }
        }
        if(long===0){
            throw new MissingParameterError('ou pa founi ase paramet');
        }
        else if(long===1){
            throw new MissingParameterError('Ou pa founi ase eleman')
        }
        else{
            let s= this.add(...numbers)
            moy= this.divide(s,long)
        }
    
        return moy;

        
    }
    
    arr(...numbers){
        let longe=numbers.length
        let r=0
        if (longe===0 && longe<2){
            throw new MissingParameterError('ou pa founi ase paramet');
        }
        else if (longe===2){
            if (numbers[0]===0||numbers[1]===0){
                throw new ValueError()
            }
            else if(numbers[0]<0||numbers[1]<1){
                throw new ValueError()
            }
            else if (numbers[0]>numbers[1]){
                throw new ValueError()
            }
            else {
            let a= this.fact(numbers[1])
            let b= this.substract(numbers[1],numbers[0])
            let c= this.fact(b)
            r=this.divide(a,c)
            }
        }
        else{
            throw new TypeError ("Type Error")
        }
            return r 
    }
    exp(...numbers){
        let longe= numbers.length
        let result=1;
        if (longe==0){
            throw new MissingParameterError('ou pa founi ase paramet')
        }else if (numbers[0]===0 && numbers[1]===0){
            result=0
        }
        else if (longe==2){
            if (Number.isInteger(numbers[1])){
                let n= numbers[0];
                let k= numbers[1];
                result= n**k
            }
            else{
                throw new TypeError()
            }
        }
        else{
            throw new TypeError ("Type Error")
        } 
        return result;
    }
    comb(...numbers){
        let result=0;
        let longe =numbers.length
        if (longe===0){
            throw new MissingParameterError('ou pa founi ase paramet');
        }
        else if (longe===2){
            if(Number.isInteger (numbers[0]) && Number.isInteger(numbers[1])){
                if (numbers[0] < numbers[1]){
                    if(numbers[0]<0 || numbers[1]<0){
                        throw new ValueError()
                    }
                    else if (numbers[0]===0 && numbers[1]===0){
                        result = 1;
                    }
                    else{
                        let n= this.fact (numbers[1]);
                        let k= this.fact(this.substract(numbers[1], numbers[0]));
                        let j=this.fact (numbers[0]);
                        let m = (this.multiply(k, j));
                        result= this.divide(n, m)
                    }
                }
                else if(numbers[0]===0 && numbers[1]===0){
                    result=1
                }
                else{
                    throw new ValueError()
                }
            }
            else{
                throw new TypeError ("Type Error")
            }
            return result;
    
        }
    }}


class MissingParameterError extends Error {
    constructor (message) {
        super (message) ;
        this.name="MISSINPARAMETER ERROR" ;
    }
}


class InfinityResultError extends Error{
    constructor (message) {
        super (message) ;
        this.name="InfinityResult ERROR" ;
    }
}

class ZeroDivisionError extends Error{
    constructor (message) {
        super (message) ;
        this.name="ZeroDivision ERROR" ;
    }

}
class NegativeNumberError extends Error{
    constructor (message) {
        super (message) ;
        this.name="NegativeNumber ERROR" ;
    }

}
class ValueError extends Error{
    constructor (message) {
        super (message) ;
        this.name="Value ERROR" ;
    }

}

class TypeError extends Error{
    constructor (message) {
        super (message) ;
        this.name="Type ERROR" ;
    }

}


//  Test
let calc = new Calculator()

// Bon kalkil
console.log(`Adisyon 2+3=5 ${(calc.add(2,3) === 5 || calc.add(2,3) === 5.0) ? "✅": "❌"}`, calc.add(2,3) )
console.log(`Adisyon 2.3 + 6.1=8.4 ${(calc.add(2.3, 6.1) === 8.4 || calc.add(2.3, 6.1) === 8.399999999999999) ? "✅": "❌"}`, calc.add(2.3, 6.1) )
console.log(`Soustraksyon 10-3=7 ${calc.substract(10,3) === 7 ? "✅": "❌"}`, calc.substract(10,3) )
console.log(`Miltiplikasyon 15*3=45 ${calc.multiply(15,3) === 45 ? "✅": "❌"}`, calc.multiply(15,3) )
console.log(`Miltiplikasyon 15 * (-1)=-15 ${calc.multiply(15,3) === 45 ? "✅": "❌"}`, calc.multiply(15,-1) )
console.log(`Ekspozan 2e3=8 ${calc.exp(2,3) === 8 ? "✅": "❌"}`, calc.exp(2,3) )
console.log(`Ekspozan 2e0=1 ${calc.exp(2,0) === 1 ? "✅": "❌"}`, calc.exp(2,0) )
console.log(`Ekspozan 2e-3=0.125 ${calc.exp(2,-3) === 0.125 ? "✅": "❌"}`, calc.exp(2,-3) )
console.log(`Ekspozan 0e0=0 ${calc.exp(0,0) === 0 ? "✅": "❌"}`, calc.exp(0,0) )
console.log(`Ekspozan 2e-1=0.5 ${calc.exp(2,-1) === 0.5 ? "✅": "❌"}`,  calc.exp(2,-1) )
console.log(`Faktoryèl 4!=24 ${calc.fact(4) === 24 ? "✅": "❌"}`, calc.fact(4) )
console.log(`Faktoryèl 0!=1 ${calc.fact(0) === 1 ? "✅": "❌"}`, calc.fact(0) )
console.log(`Mwayèn avg(2,4)=3 ${calc.avg(2,4) === 3 ? "✅": "❌"}`, calc.avg(2,4) )
console.log(`Mwayèn avg(-4,-5)=-4.5 ${calc.avg(-4,-5) === -4.5 ? "✅": "❌"}`, calc.avg(-4,-5) )
console.log(`Konbinezan 2 nan 4=6 ${calc.comb(2,4) === 6 ? "✅": "❌"}`, calc.comb(2,4) )
console.log(`Konbinezan 0 nan 2=1 ${calc.comb(0,2) === 1 ? "✅": "❌"}`, calc.comb(0,2) )
console.log(`Konbinezan 0 nan 0=1 ${calc.comb(0,0) === 1 ? "✅": "❌"}`, calc.comb(0,0) )
console.log(`Aranjman 2 nan 4=12 ${calc.arr(2,4) == 12 ? "✅": "❌"}`,  calc.arr(2,4) )
console.log('-------------------------')
// Tcheke erè

console.log('EKZEKISYON SA YO DWE JENERE ERE')
console.log('-------------------------')

try{
	console.log("Mwayèn [3,5,3,'25',6]=ValueError ❌", calc.avg(3,5,3,"25",6) )
}catch(err){
  console.log(`calc.avg(3,5,3,'25',6) ${err.name} ✅`)
} 

try{
	console.log('calc.add(2)=MissingParameterError ❌', calc.add(2) )
}catch(err){
  console.log(`calc.add(2) ${err.name} ✅`)
} 
try{
	console.log('calc.substract(14)=MissingParameterError ❌',  calc.substract(14) )
}catch(err){
  console.log(`calc.substract(14) ${err.name} ✅`)
} 
try{
	console.log('calc.divide(13,0)=ZeroDivisionError ❌',  calc.divide(13,0) )
}catch(err){
  console.log(`calc.divide(13,0) ${err.name} ✅`)
} 
try{
	console.log('calc.divide(0,0)=InfinityError ❌',  calc.divide(0,0) )
}catch(err){
  console.log(`calc.divide(0,0) ${err.name} ✅`)
} 
try{
	console.log('calc.multiply(15)=MissingParameterError ❌',  calc.multiply(15) )
}catch(err){
  console.log(`calc.multiply(15) ${err.name} ✅`)
} 

try{
	console.log('calc.fact(-3)=ValueError ❌',  calc.fact(-3) )
}catch(err){
  console.log(`calc.fact(-3) ${err.name} ✅`)
} 
try{
	console.log('calc.fact(3.4)=TypeError|ValueError ❌',  calc.fact(3.4) )
}catch(err){
  console.log(`calc.fact(3.4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(0,0)=ValueError ❌',  calc.arr(0,0) )
}catch(err){
  console.log(`calc.arr(0,0) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(0,4)=ValueError ❌',  calc.arr(0,4) )
}catch(err){
  console.log(`calc.arr(0,4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(4,0)=ValueError ❌',  calc.arr(4,0) )
}catch(err){
  console.log(`calc.arr(4,0) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(-1,4)=ValueError ❌',  calc.arr(-1,4) )
}catch(err){
  console.log(`calc.arr(-1,4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(2,4.4)=TypeErro|ValueError ❌',  calc.arr(-2,4.4) )
}catch(err){
  console.log(`calc.arr(2,4.4) ${err.name} ✅`)
} 
try{
	console.log('calc.comb(4,2)=ValueError ❌',  calc.comb(4,2) )
}catch(err){
  console.log(`calc.comb(4,2) ${err.name} ✅`)
} 
try{
	console.log('calc.comb(0,-4)=ValueError ❌',  calc.comb(0,-4) )
}catch(err){
  console.log(`calc.comb(0,-4) ${err.name} ✅`)
} 
try{
	console.log('calc.comb(-1,4)=ValueError ❌',  calc.comb(-1,4) )
}catch(err){
  console.log(`calc.comb(-1,4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(4,2)=ValueError ❌',  calc.arr(4,2) )
}catch(err){
  console.log(`calc.arr(4,2) ${err.name} ✅`)
} 

try{
	console.log('calc.exp(2,2.3)=TypeError|ValueError ❌',  calc.exp(2,2.3) )
}catch(err){
  console.log(`calc.exp(2,2.3) ${err.name} ✅`)
} 

try{
	console.log('calc.avg(2)=MissingParameter ❌',  calc.avg(2) )
}catch(err){
  console.log(`calc.avg(2) ${err.name} ✅`)
}


