const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = expr.split("**********");
    let result = "";
    let j = 0;
    let arr1=[];
    let otv = "";
    arr.forEach(elem => {   
        arr1 = elem.match(/.{1,2}/g); 
        for ( i=0; i < arr1.length; i++) {
            if (+arr1[i] === 00) { result+=""}
            if (+arr1[i] === 10) { result+="."}
            if (+arr1[i] === 11) { result+="-"}
            if ((i+1) % 5 === 0) { 
                for (let key in MORSE_TABLE) {
                    if (key === result) {
                        otv += MORSE_TABLE[key]
                    }
                };
                result="";
            }    
        }
        otv+=" ";
    });
    return otv.slice(0, -1);
}

module.exports = {
    decode
}