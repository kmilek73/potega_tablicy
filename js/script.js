let numbers = [0,1,2,3,4,5];
let dlugoscTablicy = numbers.length;
let kwadrat = 0;
let sumaWszystkich=0;


function sumaAll(){

for (let i=0; i<dlugoscTablicy; i++){
   kwadrat = Math.pow(numbers[i],2);
    console.log("Kwadrat liczby ", numbers[i],"wynosi : ",kwadrat);
    sumaWszystkich = sumaWszystkich + kwadrat;
    }
     console.log("Suma wszystkich kwadratów wynosi : ", sumaWszystkich);
}

sumaAll(numbers);