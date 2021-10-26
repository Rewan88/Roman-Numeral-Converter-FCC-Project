
let basicsNums =[
    { number : 1000, roman : 'M' },
    { number : 900, roman : 'CM' },
    { number : 500, roman : 'D' },
    { number : 400, roman : 'CD' },
    { number : 100, roman : 'C' },
    { number : 90, roman : 'XC' },
    { number : 50, roman : 'L' },
    { number : 40, roman : 'XL' },
    { number : 10, roman : 'X' },
    { number : 9, roman : 'IX' },
    { number : 5, roman : 'V' },
    { number : 4, roman : 'IV' },
    { number : 1, roman : 'I' }

];

function convertToRoman(nums) {
    
    let romanLetter = '' ;
    let number = nums; 

    for (let i =0; i < basicsNums.length; i++ ){
        if ( basicsNums[i].number <= number) {
            number = number - basicsNums[i].number;

            romanLetter = romanLetter + basicsNums[i].roman

            i-- ; 
        }
    }

    console.log(`My number ${nums} is ${romanLetter} in Roman Letter`);

}

convertToRoman(1020);