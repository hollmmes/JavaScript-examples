class ocak { //clas yapısı mainden aldığımız özellikleri sıra sıra buraya yazdırdı
    constructor(energy, spec, colour,fiat) {
      this.Enerji = energy;
      this.Özellik = spec;
      this.Renk = colour;
      this.Fiyat =fiat;

    console.log("Ocak fabrikadan çıktı...");}

    start() {console.log("Ocak başlatılıyor...");} //function gibi çalışıyor mainden çalıştırdık burada yazdırıyor
    engine() {console.log("Isı işlemleri uygulanılıyor...");}
    heat() {console.log("Yemek kaynıyor...");}
    done() {console.log("Yemek bişti...");}
    printOzellikleri(){console.log(`Maksimum harcadığı enerji: ${this.Enerji} \nOcağın Özelliği : ${this.Özellik}\nOcağın rengi: ${this.Renk}\nOcağın fiyatı : ${this.Fiyat}`);}}


function kalorihesap(x){ //main dosyasında istendiği zaman çağrılan bir fonksiyon
    return x*2.5
}

function saglıkkontrol(z){
    tabak=z*2 //2 tabak yiyelim
    if(tabak<450){console.log("Toplamda ",tabak," kalori aldın Günlük alınması gereken değerin altında")}
    if(tabak==450){console.log("Toplamda ",tabak," kalori aldın Günlük alınması gereken değere eşit")}
    if(tabak>450){console.log("Toplamda ",tabak," kalori aldın Kilo alıcan içme")}
    return tabak
}



module.exports = {kalorihesap,saglıkkontrol, ocak}; // buaradan çıkanlar main dosyasına yolluyor