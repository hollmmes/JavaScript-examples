const hesap=require("./sorular")
var {ocak} = require("./sorular.js");
const prompt=require("prompt-sync")({sigint:true});

let corba = [
    {Adı:"Mercimek Corbasi",Kalori: 55,hammadde:"Mercimek"},
    {Adı:"Tarhana Corbasi",Kalori: 91 ,hammadde:"Tahil"},
    {Adı:"Tavuk Corbasi",Kalori: 36 ,hammadde:"Davuk"},
    {Adı:"Kelle paca Corbasi",Kalori:120,hammadde:"Kelle ve paca"}
]
var corbaadi2=prompt("Adını bildiğiniz çorbayı giriniz: ");
let dep=corba.filter((elem)=> { 
    return elem.Adı == corbaadi2
});
console.log(dep);
var corbaadi1=prompt("hammaddesini bildiğiniz çorbayı giriniz: ");
let dep2=corba.filter((elem)=> { 
    return elem.hammadde == corbaadi1
});
console.log(dep2);

console.log("Kalorisi düşük olanlar:") 
let dep1=corba.filter((elem) =>{
    if(elem.Kalori < 60){
        return console.log(elem);
    }
});

console.log("Mercimek Kalorisi") 
let soru1=hesap.kalorihesap(55);
console.log("Mercimek corbasının kase başına(250gr) kalorisi: ", soru1)

console.log("Davuk Kalorisi") 
let soru2=hesap.kalorihesap(91);
console.log("Mercimek corbasının kase başına(250gr) kalorisi: ", soru2)

console.log("Kalori kontrol Mercimek: ") 
let control=hesap.saglıkkontrol(soru1);
console.log("Kalori kontrol Tavuk: ") 
let control1=hesap.saglıkkontrol(soru2);


console.log("\nÇorba pişirmek için Ocak bakma zamanı: ")
let arcelik = new ocak(4500, "Cam Tablalı", "Siyah","4620TL");
arcelik.printOzellikleri();
arcelik.start();
arcelik.engine();
arcelik.heat();
arcelik.done();
