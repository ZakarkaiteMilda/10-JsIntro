console.clear();
/*NUMBERS 

normalus:
- sveikieji
- desimtainiai

mistiniai:
- Infinity
- -Infinity
-NaN (not-a-number)

MATEMATINIAI VEIKSMAI
aritmetiniai operatoriai:
+, -, /, *, ** (laipsnis), % (liekana)
** tai kelimas laipsniu
priskyrimo operatoriai:
=, +=, -=, /=, *=, **=, %=


KINTAMŲJŲ INICIAVIMO BŪDAI:

- const (default)
- let (jei kinta reikšmė)
- var (nenaudoti, nebent žinai ka darai) naudotas iki 2016m buvo tik var

*/

//Sveikasis
console.log(12551);
console.log(-12551);
console.log(0);
console.log(-0);

//Desimtainis
console.log(3.1415);
console.log(-3.1415);
console.log(3 / 4);
console.log(1 / 3);
console.log(0.1 + 0.2);

//begalybes
console.log(Infinity);
console.log(-Infinity);

//NaN
console.log(NaN);

//VEIKSMAI
console.log(7 + 5);
console.log(7 - 5);
console.log(7 / 5);
console.log(7 * 5);

console.log(2 ** 2, '=', 2 * 2);
console.log(2 ** 3, '=', 2 * 2 * 2);
console.log(2 ** 4, '=', 2 * 2 * 2 * 2);

const a = 7;
console.log(a);

let PI = 3.14;
console.log(PI);
PI = 3;
console.log(PI);

//pažymiai: 10, 2, 8, 4, 6.
console.log('-------------------------------------------------');
let suma = 0;
console.log(suma);
suma = suma + 10;
console.log(suma);
suma = suma + 2; 
//dar galima rasyti suma += 2;
suma = suma + 8;
suma = suma + 4;
suma = suma + 6;
console.log(suma);

console.log('-------------------------------------------------');
let suma2 = 0;
console.log(suma2);
suma2 += 10;
console.log(suma2);
suma2 += 2; 
//dar galima rasyti suma += 2;
suma2 += 8;
suma2 =+ 4;
suma2 =+ 6;
console.log(suma2);
console.log('-------------------------------------------------');

let suma3 = 0;
console.log(suma3);

suma3 += 10;
console.log(suma3);

suma3 *= 5;
console.log(suma3);

suma3 -= 1;
console.log(suma3);

suma3 /= 7;
console.log(suma3);

suma3 **= 7;
console.log(suma3, 7 * 7 * 7);

console.log('-------------------------------------------------');

const skaicius = 81;
const daliklis = 3;
const dalmuo = skaicius / daliklis;
console.log(skaicius, '/', daliklis, '=', dalmuo);

const liekana = skaicius % daliklis;
console.log(liekana);

console.log(17 / 3);
console.log(17 % 3);

console.log(0 % 3);
console.log(1 % 3);
console.log(2 % 3);
console.log(3 % 3);
console.log(4 % 3);
console.log(5 % 3);
console.log(6 % 3);

let liek = 144;

liek = liek %  100;
console.log(liek);

liek %= 15;
console.log(liek);
