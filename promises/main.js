//node main.js

const prompt=require("prompt-sync")({sigint:true});

function checkNumber(number) {
  number=parseInt(number) 
    return new Promise((resolve, reject) => {
      if (typeof number === 'number' && !Number.isNaN(number)) {
        resolve("Girilen "+number+" değeri bir sayıdır\n.");
      } else {
        reject(new Error("Hatalı giriş."));
      }
    });
  }


  var sayi = prompt("sayi giriniz: ");
  checkNumber(sayi)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error.message);
      console.log("Girilen "+ sayi+" değeri bir sayı değildir.\n" );
    });
  
  var sayi2 = prompt("sayi giriniz: ");
  checkNumber(sayi2)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error.message);
      console.log("Girilen "+ sayi2+" değeri bir sayı değildir.\n" );
    });
  
  var sayi3 = prompt("sayi giriniz: ");
  checkNumber(sayi3)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error.message);
      console.log("Girilen "+ sayi3+" değeri bir sayı değildir.\n" );
    });
  
  var sayi4 = prompt("sayi giriniz: \n");
  checkNumber(sayi4)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error.message);
      console.log("Girilen "+ sayi4+" değeri bir sayı değildir.\n" );
    });


  