// Nomor 8
var buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Pepaya"];
var penjualan = [500, 200, 500, 500, 600];
var asik = [];
var perhitungan = cekArray(buah, penjualan);
console.log("paling laris = "+asik);

function cekArray(arr1, arr2){
    arr1[arr2.indexOf(Math.max.apply(Math, arr2))];
    for(var i=0; i<=arr1.length; i++){
        if(arr2[i]==Math.max.apply(Math, arr2)){
        asik.push(arr1[i]);
        }
    }
}