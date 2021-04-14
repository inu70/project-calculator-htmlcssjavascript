function bersih() {
	document.getElementById('hasil').innerHTML = "0";
}

function persen() {
	let nilai = document.getElementById('hasil').innerHTML;
	nilai = nilai / 100 ;
	document.getElementById('hasil').innerHTML = nilai;
}

function hapusNol() {
	let nilai = document.getElementById('hasil').innerHTML;
	if (nilai == 0) {
		nilai = '';
		document.getElementById('hasil').innerHTML = nilai;
	}
}

function nilai(nilai) {
	hapusNol();
	document.getElementById('hasil').innerHTML += nilai;
}

function hitung() {
	hapusNol();
	let perhitungan = document.getElementById('hasil').innerHTML;
	let hasilHitung = eval(perhitungan);
	document.getElementById('hasil').innerHTML = hasilHitung;
}