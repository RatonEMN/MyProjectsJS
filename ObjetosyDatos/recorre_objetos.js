//Crea una función que recorra un arreglo de objetos y muestre solo los autos más recientes.

const autos = [
    {
        marca: "Toyota",
        modelo: "Tacoma",
        year: 2016
    },
    {
        marca: "Honda",
        modelo: "Civic",
        year: 2010
    },
    {
        marca: "Nissan",
        modelo: "Versa",
        year: 2016
    },
    {
        marca: "Ford",
        modelo: "Ranger",
        year: 2012
    }
];

const autos_recientes = autos.filter(auto =>{
    return auto.year >= 2015;
});

console.log(autos_recientes);

//existen 2 formas de recorrer mi arreglo con filter y con foreach, tambien se pude hacer con un bucle for u of