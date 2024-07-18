
let array1 = [1, 2 , 3, 4, 5];

let filter_array = array1.filter(myFunction);

function myFunction(value, index, array){
    return value > 2;
}

document.write(array1);
document.write(filter_array);
document.write("----------------------------------");

// Strings to Array
let str1 = "Mumbai, Nashik, Pune";
let str1_Array = str1.split(",");

document.write(str1);
document.write(str1_Array);
document.write("----------------------------------");

// Array to strings
let array2 = [10, 20, 30, 40, 50];
let array2_String = array2.toString();

document.write(array2);
document.write(array2_String);
document.write("----------------------------------");

// slice() Method
let array3 = [100, 200, 300, 400, 500];
let slice_Array1 = array3.slice(1);
let slice_Array2 = array3.slice(1,3,5);

document.write(array3);
document.write(slice_Array1);
document.write(slice_Array2);
document.write("----------------------------------");

// splice() Mehtod
let array4 = ["A", "B", "C", "D"];
let splice_Array1 = array4.splice(4,0,"E", "F");
let splice_Array2 = array4.splice(0,3); 

document.write(array4);
document.write(splice_Array1);
document.write(splice_Array2);
document.write("----------------------------------");

// Map() method

const array5 = [12, 34, 54, 21, 78];
const array5_numbers1 = array5.map(myFunction2);

function myFunction2(value, index, array){
    return value > 30;
}

const array5_numbers2 = array5.map(myFunction3);

function myFunction3(value, index, array){
    return value * 2;
}

document.write(array5_numbers1);
document.write(array5_numbers2);
document.write("----------------------------------");

// push() Method

let array6 = [10, 20, 30, 40];
let array6_push = array6.push(50);

document.write(array6);
document.write(array6_push);
document.write("----------------------------------");

// pop() method

let array7 = [10, 20, 30, 40, 50];
let array7_pop = array7.pop();

document.write(array7);
document.write(array7_pop);
document.write("----------------------------------");

let array8 = [5, 10, 15, 20];
let array8_forEach = array8.forEach(myFunction5);

function myFunction5(value, index, array,txt){
    return (value * 5) / 10;
}

document.write(array8);
document.write(array8_forEach);
document.write("----------------------------------");

let array9 = ["vruttik", "moragha"];
let result = array9.map(myFunction4);

function myFunction4(value, index, array){
    i=1;
   Value="";
   while(i<=array9.length){
  Value += value[0].toUpperCase() + value[i];
    i++;
   }
    return Value;
}

document.write(array9);
document.write(result);
document.write("----------------------------------");


const age = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
document.write(age);

let age_sort = age.sort();
document.write(age_sort);

let age_Min = myArrayMin(age);
let age_Max = myArrayMax(age);

function myArrayMin(arr){
    return Math.min.apply(null, arr);
}

function myArrayMax(arr){
    return Math.max.apply(null, arr);
}

document.write("Min: " +age_Min);
document.write("Max: " +age_Max);

let sum = 0;
let average = 0.0;

for(let i=0;i<age.length;i++){
    sum += age[i];
}

average = sum / 10;
let age_range = age[9] - age[0];

let min_average = Math.abs(age_Min - average);
let max_average = Math.abs(age_Max - average);


document.write("Sum: "+ sum);
document.write("Average: "+ average);
document.write("Range: " + age_range);
document.write("(Min - Average): "+ min_average);
document.write("(Max - Average): "+ max_average);
document.write("----------------------------");

// ----------------------------------------------------------------------------------------------

const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

document.write(countries);

let middle_country = countries[5]
document.write(middle_country);

let slice_countries = countries.slice(0,9);
document.write(slice_countries);

let exit = countries.toString();
let exit2 = exit.split(',');
let exit_letter = exit.match(/I/gi);

document.write(exit);
document.write(exit2);
document.write(exit_letter);

Text = 'Ethiopia';
let j=0;

for(let i=0;i<countries.length;i++){
    if(countries[i] == Text[j]){
        j++;
        return 'ETHIOPIA';
    }
    else{
        countries.push('Ethiopia');
    }
}

document.write(countries);
//--------------------------------------------------------------------------------------------------------------


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

let text = "Meat";

if(text == shoppingCart[0]){
    shoppingCart = shoppingCart.replace(shoppingCart[0], "Meat");
}

document.write(shoppingCart);
