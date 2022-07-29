// Nomor 7
var arr = [4,3,2,1];
function cekDuplikasi(arr) {
    return new Set(arr).size !== arr.length
}
var perhitungan1 = cekDuplikasi(arr);
if(perhitungan1 === true){
    console.log("Ada Duplikasi");
}else{
    console.log("Tidak Ada Duplikasi");
}