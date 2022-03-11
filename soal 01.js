//1

function changeWord(selectedText, changeText, Text) {
    return Text.replace(selectedText, changeText);
  }
  
  const kalimat1 = "Andini sangat mencintai kamu selamanya";
  const kalimat2 =
    "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
  
  console.log(changeWord("mencintai", "membenci", kalimat1)); //OUTPUT : Andini 
  console.log(changeWord("bromo", "semeru", kalimat2));
  
  