let data = {
  Update_Date: "2023-03-15 14:00:01",
  USD: {
    Alış: "18,9814",
    Tür: "Döviz",
    Satış: "18,9839",
    Değişim: "%0,04",
  },
  EUR: {
    Alış: "20,1690",
    Tür: "Döviz",
    Satış: "20,1777",
    Değişim: "%-0,94",
  },
  GBP: {
    Alış: "22,9046",
    Tür: "Döviz",
    Satış: "22,9150",
    Değişim: "%-0,71",
  },
  CHF: {
    Alış: "20,5823",
    Tür: "Döviz",
    Satış: "20,5950",
    Değişim: "%-0,79",
  },
  CAD: {
    Alış: "13,8074",
    Tür: "Döviz",
    Satış: "13,8139",
    Değişim: "%-0,39",
  },
  RUB: {
    Alis: "0,2503",
    Tür: "Döviz",
    Satış: "0,2504",
    Değişim: "%-0,66",
  },
};

/**
 *   for key in ... işlemiyle yapılacaktır internetten araştırın
 *   data[key] ???
 *
 *  Yukarıdaki veri bloğunda,
 * 1-) Sadece CAD adlı verileri gösteren fonksiyonu tamımlayınız.
 * 2-) TUR adlı verilerin olup olmadığını kontrol eden fonksiyonu yazınız.
 * 3-) Herbir kurun Satış değerlerini toplayın. Sayısal değerler string verilmiştir???
 * 4-) Herbir kurun Alış değerlerini toplayın. Bazı kurlarda imla hatası yapılmıştır.
 *
 */
console.log("-----------------------------------------")
console.log("1. soru: ")
function varmı(varr){
 for (key in data) {
  if(key == varr){
    console.log(key, data[key]);
  }
}}
varmı("CAD")
console.log("-----------------------------------------")
console.log("2. soru: ")
function verikontrol(control){
  if(control in data){
    return console.log("uyyyy uşam");}
  else{
    return console.log("böle bişi yok la");
  }
}
verikontrol("TUR")
console.log("-----------------------------------------")
console.log("3. soru: ")


let toplam=0;
for (key in data) {
  if(key != "Update_Date"){
  parseInt(data[key].Satış)
  const satış1=parseFloat(String(data[key].Satış).replace(",","."))
  toplam+=satış1;
  }
}
console.log("Satış değerleri toplamı: ",toplam)
console.log("-----------------------------------------")
console.log("4. soru: ")

let toplam1=0;
let toplam2=0;
for (key in data){
  if(key != "Update_Date"){
  const yeni_alış= String(data[key].Alis).replace("Alis","Alış")
  yepyeni_alış=yeni_alış + data[key].Alış
  yepisyeni_alış= String(yepyeni_alış).replace("undefined","")
  parseInt(yepisyeni_alış)
  const yepisyenihadi_alış = parseFloat(String(yepisyeni_alış).replace(",","."))
  toplam1+=yepisyenihadi_alış
  const noktaninSonraki4Basamak = toplam1.toFixed(4);
  toplam2=noktaninSonraki4Basamak
}}
console.log("Alış değerleri toplamı: ",parseFloat(toplam2))
console.log("-----------------------------------------")