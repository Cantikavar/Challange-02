function getAngkaTerbesarKedua(Angka) {
    if (Angka) {
      let dataYangDiFilter = []
      for(let i of Angka) {
        if (dataYangDiFilter.indexOf(i) === -1) {
          dataYangDiFilter.push(i);
        }
      }
    let dataYangDisort = dataYangDiFilter.sort((a, b) => b - a)
      return dataYangDisort[1]
  
  }
  
    else if (Angka==null){
        return 'ERROR : Datanya mana?'
    }
  
    else {
        return 'ERROR : Data tidak sesuai'
    }
  
  }
  
  const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
  
  console.log(getAngkaTerbesarKedua(dataAngka));
  console.log(getAngkaTerbesarKedua(0));
  console.log(getAngkaTerbesarKedua());