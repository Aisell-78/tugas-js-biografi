document.addEventListener('DOMContentLoaded', () => {
  // --- OPSI 1: BIOGRAFI INTERAKTIF ---

  // 1. Counter Kunjungan
  let visitCount = 0;
  const readBtn = document.getElementById('readBtn');
  const readCountDisplay = document.getElementById('readCount');

  readBtn.addEventListener('click', function() {
    visitCount++;
    readCountDisplay.textContent = visitCount;
  });

  // 2. Toggle Detail
  const readMoreBtn = document.getElementById('readMoreBtn');
  const moreText = document.getElementById('moreText');

  readMoreBtn.addEventListener('click', function() {
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      readMoreBtn.textContent = 'Sembunyikan';
    } else {
      moreText.style.display = 'none';
      readMoreBtn.textContent = 'Baca Selengkapnya';
    }
  });

  // 3. Manipulasi Tabel
  const addInfoBtn = document.getElementById('addInfoBtn');
  const biodataBody = document.getElementById('biodataBody');

  addInfoBtn.addEventListener('click', function() {
    // Membuat elemen baris (tr) dan sel (td) baru
    const newRow = document.createElement('tr');
    const catCell = document.createElement('td');
    const descCell = document.createElement('td');

    // Mengisi konten
    catCell.innerHTML = '<strong>Nama Ayah & Ibu</strong>';
    descCell.textContent = 'Abdullah bin Abdul Muthalib & Aminah binti Wahab';

    // Menggabungkan ke dalam tabel
    newRow.appendChild(catCell);
    newRow.appendChild(descCell);
    biodataBody.appendChild(newRow);

    // Menonaktifkan tombol agar tidak ditambahkan berulang kali
    addInfoBtn.disabled = true;
    addInfoBtn.textContent = 'Info Telah Ditambahkan';
  });


  // --- OPSI 2: KALKULATOR SEDERHANA ---
  const inputAngka1 = document.getElementById('angka1');
  const inputAngka2 = document.getElementById('angka2');
  const hasilKalkulator = document.getElementById('hasilKalkulator');

  function hitung(operator) {
    // Menggunakan Number() untuk konversi tipe data
    const val1 = Number(inputAngka1.value);
    const val2 = Number(inputAngka2.value);
    let hasil = 0;

    if (operator === '+') {
      hasil = val1 + val2;
    } else if (operator === '-') {
      hasil = val1 - val2;
    } else if (operator === '*') {
      hasil = val1 * val2;
    } else if (operator === '/') {
      if (val2 === 0) {
        hasilKalkulator.textContent = "Error (Dibagi 0)";
        return;
      }
      hasil = val1 / val2;
    }

    // Menampilkan hasil menggunakan textContent
    hasilKalkulator.textContent = hasil;
  }

  // Menambahkan event listener ke tombol kalkulator
  document.getElementById('btnTambah').addEventListener('click', () => hitung('+'));
  document.getElementById('btnKurang').addEventListener('click', () => hitung('-'));
  document.getElementById('btnKali').addEventListener('click', () => hitung('*'));
  document.getElementById('btnBagi').addEventListener('click', () => hitung('/'));
});
