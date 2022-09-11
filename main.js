var rom = {
    1 : "I",
    2 : "II",
    3 : "III",
    4 : "IV",
    5 : "V",
    6 : "VI",
    7 : "VII",
    8 : "VIII",
    9 : "IX",
    10 : "X"

}
function roman(value){
    let x = rom[value];
    return x;
}
console.log(roman(5));