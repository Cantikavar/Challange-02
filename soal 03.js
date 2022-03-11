//3

var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validasiEmail(emailAdress){
    if (typeof (emailAdress) == "string"){
        var hasil = regex.test(emailAdress)
        if (hasil == true){
            return "Valid"
        } else{
            return "Invalid"
        }
    } else{
        return "Error"
    }
}
console.log(validasiEmail("apranata@binar.co.id"));
console.log(validasiEmail("apranata@binar.com"));
console.log(validasiEmail("apranata@binar"));
console.log(validasiEmail("apranata@binar.co.id"));
console.log(validasiEmail("apranata@binar.com"));
console.log(validasiEmail("apranata@binar"));
console.log(validasiEmail("apranata"));
console.log(validasiEmail(3322));
console.log(validasiEmail());

