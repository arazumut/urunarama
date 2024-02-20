let ürün1acer = {
    isim: "iphone x",
    kategori: "mobil",
    fiyat: 8000
}
let ürün2acer = {
    isim: "iphone xr",
    kategori: "mobil",
    fiyat: 10000
}
let ürün3acer = {
    isim: "iphone 12",
    kategori: "mobil",
    fiyat: 20000
}



let ürün1huawei = {
    isim: "huawei matebook d15",
    kategori: "laptop",
    fiyat: 19.000
}
let ürün2huawei = {
    isim: "huawei matebook d16",
    kategori: "laptop",
    fiyat: 24.000
}
let ürün3huawei = {
    isim: "huawei matebook d14",
    kategori: "laptop",
    fiyat: 30.000
}



let ürün1lenovo = {
    isim: "lenovo v14",
    kategori: "bilgisayar",
    fiyat: 14.000
}
let ürün2lenovo = {
    isim: "lenovo v15",
    kategori: "bilgisayar",
    fiyat: 10.000
}
let ürün3lenovo = {
    isim: "lenovo ideapad",
    kategori: "tablet pc",
    fiyat: 4.460
}

let ürünler = [ürün1acer,ürün2acer,ürün3acer,ürün1huawei,ürün2huawei,ürün3huawei,ürün1lenovo,ürün2lenovo,ürün3lenovo];
let filtreliürün = [];
let kullanıcıürüngirsin  = prompt("lütfen aramak istediğiniz ürünü giriniz");
getirfiltreliürünler(ürünler);
filtreliürünleriyazdır(filtreliürün);

ürünler.forEach(function (ürün) {
if(ürün.isim.toLocaleUpperCase().includes(kullanıcıürüngirsin.toUpperCase(),0)){
filtreliürün.push(ürün)
}
});

function getirfiltreliürünler(ürünler){
    ürünler.forEach(function (ürün) {
        if(ürün.isim.toLocaleUpperCase().includes(kullanıcıürüngirsin.toUpperCase(),0)){
        filtreliürün.push(ürün)
        }
        });
        
}

function filtreliürünleriyazdır(ürünler){
    urunler.forEach(function(ürün){
        document.writeln("------------------------------------------------------------------------");
        document.writeln("|" + ürün.isim + "|" + ürün.fiyat + "|" + ürün.kategori+"<br>");
        document.writeln("------------------------------------------------------------------------");
    });
}
