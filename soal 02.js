//2

//Penghitungan dan Pengecekan Hasil Modulo
function cekGanjilGenap(bilangan) {
    if(typeof(bilangan)=='number'){
        if (bilangan % 2 == 0) {
            return "bilangan Genap";
          } else {
            return "bilangan Ganjil";
          }
          
    }
    else if (typeof bilangan== "string") {
        return "Error : Invalid data type"
        
    }
}

console.log(cekGanjilGenap(10)) ;
console.log(cekGanjilGenap(3)) ;
console.log(cekGanjilGenap("3")) ;
