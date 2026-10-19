let menu = {
  "nasi goreng": 25000,
  "nasi campur": 17000,
  "mie goreng": 15000
};
let makananpilihan = ""

function toko() {
  console.log("Bos mau makan di toko kami? Ketik: jawab('iya') atau jawab('tidak')");
}
function jawab(isi) {
  if (isi !== "iya") {
    console.log("oke mungkin lain waktu bos");
    return;
  }
  console.log("Mau pesan apa bos? Ini menu kami:");
  for (let makanan in menu) {
    console.log(`${makanan} - Rp${menu[makanan]}`);
  }
  console.log("Ketik: pesan('nama makanan')");
} 
function pesan(urutan) {
  if (menu[urutan]) {
    makananpilihan = urutan;
    console.log(`pesanan: ${urutan}, total Rp${menu[urutan]}`);
    console.log("saldo lu berapa bos sultan? ketik: duitsaya(`saldo`)")
    
  } else {
    console.log("menu ga ada");
  }
}

function duitsaya(saldo) {    
    let harga = menu[makananpilihan]
    if (saldo >= harga) {
        console.log(`oke pak bos bakalan aku siapin makanannya, kembaliannya ${saldo - harga}`)
    } else {
        console.log(`saldo lu ga cukup bos uang mu kurang ${harga - saldo}`)
    }
}

toko();