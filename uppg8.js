

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
const persons=[
{
    name:"Mona",
    age:26,
},
{
    name:"Victoria",
    age:26,
},
{
    name:"Lena",
    age:61,
},
{
    name:"Sergia",
    age:63,
},
{
    name:"Bella",
    age:6,
}
]

const sortArray=(array)=>{
array.forEach(person => {
    if(person.age>30){
        console.log(person.name);
    }
});
}
sortArray(persons);
}

module.exports = { uppg8 };