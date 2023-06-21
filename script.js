console.log("Welcome to Online Temperature Converter")

// Fungsi untuk mengonversi suhu
function KonversiCF() {
  
   let celtoFah= document.getElementById("angkaSuhuCF"); 
   let fahVal = document.getElementById("HasilKonversiCF");
   let outputCF = ( parseFloat(celtoFah.value) * 9/5 ) + 32;
   let CFcal = document.getElementById("PerhitunganCF")
   var hasil="Converted Celcius to Fahrenheit";

   CFcal.innerHTML= "(" + celtoFah.value + "" + "*9/5) + 32";

    fahVal.value= `${parseFloat(outputCF)}ºF`;

   console.log(hasil);
}       

function KonversiFC() {
    let Fahtocel= document.getElementById("angkaSuhuFC"); 
   let celVal = document.getElementById("HasilKonversiFC");
   let outputFC = ( parseFloat(Fahtocel.value) - 32 ) * 9/5;
   var hasilFC = "Converted Fahrenheit to Celcius";
   let FCcal = document.getElementById("PerhitunganFC")

   FCcal.innerHTML= "("+ Fahtocel.value + "-32)*5/9";
    celVal.value= `${parseFloat(outputFC)}ºC`;

     console.log(hasilFC);
  }
  
