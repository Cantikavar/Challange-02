//4

function isValidPassword (email) {

    var regex = new RegExp ("[A-Z]+[a-z0-9]{8}");
    var mailResult;
        if (typeof email !== "string") {
          return 'ERROR karena Parameter yang di masukkan tidak sesuai';
        }
        else {
          if (regex.test(email)) {
            mailResult = "True"
          }
          else if (!regex.test(email)){
            mailResult = "False"
          }
          else {
            mailResult = "ERROR"
          }
          return mailResult;
        }
  
  }
  
  console.log(isValidPassword('Meong2021'));
  console.log(isValidPassword('meong2021'));
  console.log(isValidPassword('@eong'));
  console.log(isValidPassword('Meong2'));
  console.log(isValidPassword(0));
  console.log(isValidPassword());
  