// Nomor 6
function hitung(k, angka){
    for(let i=0; i<angka.length; i++){
        for(let j=i + 1; j<=angka.length; j++){
            if(angka[i]+angka[j] === k){
                return true
            }
        }
    }return false;
}
var angka = [4, 1, 8, 7, 1]
let hasil1 = hitung(8, angka)
console.log(hasil1)