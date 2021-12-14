// Write your code here

function findMissingDigit(equation){
    
    const s = equation.split('=');
    for(let i = 0;i<10;i++){
        //console.log(s[0].replaceAll('?',i));
        //console.log(s[1].replaceAll('?',i))
        if(eval(s[0].replaceAll('?',i)) == eval(s[1].replaceAll('?',i))){
            return i;
        }
        
    }
    return -1;
}
const str = '4? * 47 + 2 = 1976';
console.log('Answer: ',findMissingDigit(str));
