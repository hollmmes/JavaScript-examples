let plane = [
    {Model:"Spitfire", Menşei:"Birleşik Krallık", Maaliyeti:12000 , Spesifik:"Hız ve Manevra", Sınıf:"Avcı Uçağı", Yıl: 1938, Ağırlık:3855},
    {Model:"Junkers Ju 87 -Stuka-", Menşei:"3. Reich Almanyası", Maaliyeti:null, Spesifik:"Ölüm sireni", Sınıf:"Bombardıman Uçağı", Yıl: 1936,Ağırlık:9071},
    {Model:"Nakajima Ki-115", Menşei:"Japonya İmparatorluğu", Maaliyeti:null, Spesifik:"Kamikaze dalışı", Sınıf:"İntihar", Yıl: 1945,Ağırlık:2200},
    {Model:"Lockheed Martin F-22 Raptor", Menşei:"Amerika", Maaliyeti:150000000, Spesifik:"Hava üstünlüğü, Görünmezlik", Sınıf:"Taktik savaş", Yıl: 2011,Ağırlık:19700},
    {Model:"Lockheed Martin F-35 Lightning II", Menşei:"Amerika", Maaliyeti:200000000, Spesifik:"Hava üstünlüğü, Saldırı", Sınıf:"Taktik savaş", Yıl: 2023,Ağırlık:27216},
    {Model:"TUSAŞ Milli Muharip Uçak", Menşei:"Türkiye", Maaliyeti:100000000 , Spesifik:"Hava üstünlüğü, Saldırı", Sınıf:"Taktik savaş", Yıl: 2023, Ağırlık:20000},
]

let tanks= [
  {Model:"Tiger II", Menşei:"3. Reich Almanyası",Maaliyeti:800000,Spesifik:"Büyük:D",Sınıf:"Ağır tank",Yıl:1944, Ağırlık:68000},
  {model:"M4 Sherman", Menşei:"Amerika",Maaliyeti:600000,Spesifik:"Yüksek manevra",Sınıf:"Orta tank",Yıl:1942,Ağırlık:33000},
  {model:"Panzerkampfwagen IV", Menşei:"3. Reich Almanyası",Maaliyeti:700000,Spesifik:"Yüksek manevra",Sınıf:"Orta tank",Yıl:1936,Ağırlık:25000},
  {model:"Altay", Menşei:"Türkiye",Maaliyeti:null,Spesifik:"Ana Muharebe",Sınıf:"ağır tank",Yıl:2023,Ağırlık:66000}
]

let armors = plane.concat(tanks); // iki listeyi birleştirdim oh


let depo = plane.filter((elem) => { // İsmini yazdığımızın gelmesi
return elem.Model == "Spitfire";
});
console.log(depo);
*

let depo1 = plane.filter((elem) => { // spesifiğini yazdığımızın gelmesi
return elem.Spesifik == "Kamikaze dalışı";
});

console.log(depo1);

console.log("1944 sonrası görev yapanlar")
depo2 = plane.filter((elem) => { // 1944 sonrası çıkanlar
    return elem.Yıl > 1944;
  });
  
  console.log(depo2);

console.log("Türk göz bebeği") 
depo3 = plane.filter((elem) => { // Menşei Türkiye
return elem.Menşei == "Türkiye";
});

console.log(depo3);

console.log("Maaliyeti düşük olanlar");
depo4= plane.filter((elem) => {
  if(elem.Maaliyeti < 140000000){
  return console.log(elem)
  }
});

console.log(armors);
*/
console.log("Alman Tank ve Uçakları"); // oo iki listeyide emcukledim
depo5= armors.filter((elem) =>   {
return elem.Menşei== "3. Reich Almanyası";
});

console.log(depo5);
