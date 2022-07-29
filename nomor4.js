// Nomor 4
const angka3 = [1, 2, 3, 4];
const hitung1 = angka3.map(myFunction)
console.log(hitung1)

function myFunction(bilangan) {
    if(bilangan%2==0){
        return "Bilangan Genap";
    }else{
        return "Bilangan Ganjil";
    }
}