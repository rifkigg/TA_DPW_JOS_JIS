// Java Script Halaman Form Rental Kamera

// Deklarasi Nama Penyewa
let nameInput = document.getElementById("name-input");
let nameError = document.getElementById("name-error");
let emptyNameInput = document.getElementById("empty-name");

// Deklarasi Email
let emailInput = document.getElementById("email-input");
let emailError = document.getElementById("email-error");
let emptyEmailInput = document.getElementById("empty-email");

// Deklarasi Nomor Telepon
let phoneInput = document.getElementById("phone-input");
let phoneError = document.getElementById("phone-error");
let emptyPhoneInput = document.getElementById("empty-phone");

// Deklarasi Tanggal Peminjaman
let datePeminjaman = document.getElementById("date-peminjaman");
let datePeminjamanError = document.getElementById("date-peminjaman-error");
let emptyDatePeminjaman = document.getElementById("empty-date-peminjaman");

// Deklarasi Tanggal Pengembalian
let datePengembalian = document.getElementById("date-pengembalian");
let datePengembalianError = document.getElementById("date-pengembalian-error");
let emptyDatePengembalian = document.getElementById("empty-date-pengembalian");

// Deklarasi Metode Pembayaran
let paymentError = document.getElementById("payment-error");

// Deklarasi Pilihan Kamera
let cameraSelect = document.getElementById("camera-select");
let emptyCameraSelect = document.getElementById("empty-camera");

// Deklarasi Keperluan Peminjaman
let purposeInput = document.getElementById("purpose-input");
let emptyPurposeInput = document.getElementById("empty-purpose");

// Deklarasi Tombol Submit
let submitButton = document.getElementById("submit-button");

// Event Handler
submitButton.addEventListener("click", function (event) {
  // Mencegah form agar tidak otomatis refresh halaman saat tombol diklik
  event.preventDefault();

  let isValid = true;

  // Fungsi kondisi kosong
  function setEmptyState(input, emptyMessage, errorMessage) {
    input.classList.add("error");
    input.classList.remove("valid");

    emptyMessage.classList.remove("hide");

    if (errorMessage) {
      errorMessage.classList.remove("hide");
    }

    isValid = false;
  }

  // Fungsi kondisi error
  function setErrorState(input, emptyMessage, errorMessage) {
    input.classList.add("error");
    input.classList.remove("valid");

    if (emptyMessage) {
      emptyMessage.classList.add("hide");
    }

    if (errorMessage) {
      errorMessage.classList.remove("hide");
    }

    isValid = false;
  }

  // Fungsi kondisi valid
  function setValidState(input, emptyMessage, errorMessage) {
    input.classList.remove("error");
    input.classList.add("valid");

    if (emptyMessage) {
      emptyMessage.classList.add("hide");
    }

    if (errorMessage) {
      errorMessage.classList.add("hide");
    }
  }

  // Validasi Nama Penyewa
  if (nameInput.value.trim() === "") {
    emptyNameInput.textContent = "Nama Penyewa tidak boleh kosong";
    setEmptyState(nameInput, emptyNameInput, nameError);
  } else {
    let nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(nameInput.value)) {
      nameError.textContent = "Nama Penyewa tidak boleh mengandung angka";
      setErrorState(nameInput, emptyNameInput, nameError);
    } else {
      setValidState(nameInput, emptyNameInput, nameError);
    }
  }

  // Validasi Email
  if (emailInput.value.trim() === "") {
    emptyEmailInput.textContent = "Email tidak boleh kosong";
    setEmptyState(emailInput, emptyEmailInput, emailError);
  } else {
    let emailRegex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/i;
    // [a-z0-9] => hanya boleh angka 0 sampai 9 dan huruf a sampai z
    // apabila ada + setelah nya berarti pengecekan di sebelum nya itu tidak hanya satu huruf atau angka saja
    // /i => berfungsi agar huruf a sampai z itu sama dengan A sampai Z
    // \. => untuk pengecekan charakter . dalam regex

    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Inputan Email tidak valid";
      setErrorState(emailInput, emptyEmailInput, emailError);
    } else {
      setValidState(emailInput, emptyEmailInput, emailError);
    }
  }

  // Validasi Nomor Telepon
  if (phoneInput.value.trim() === "") {
    emptyPhoneInput.textContent = "Nomor Telepon tidak boleh kosong";
    setEmptyState(phoneInput, emptyPhoneInput, phoneError);
  } else {
    let phoneRegex = /^[0-9]+$/; // hanya angka 0 sampai 9

    if (!phoneRegex.test(phoneInput.value)) {
      phoneError.textContent = "Nomor Telepon tidak boleh mengandung huruf";
      setErrorState(phoneInput, emptyPhoneInput, phoneError);
    } else if (phoneInput.value.length < 10 || phoneInput.value.length > 13) {
      phoneError.textContent = "Nomor Telepon harus 10 - 13 digit";
      setErrorState(phoneInput, emptyPhoneInput, phoneError);
    } else {
      setValidState(phoneInput, emptyPhoneInput, phoneError);
    }
  }

  // ==========================================
  // VALIDASI TANGGAL PEMINJAMAN & PENGEMBALIAN
  // ==========================================

  // Ambil tanggal hari ini dalam format YYYY-MM-DD (Sama dengan format input HTML)
  let hariIni = new Date().toISOString().slice(0, 16);
  // toISOString() adalah fungsi bawaan (method) di JavaScript yang digunakan untuk mengubah objek tanggal (Date) menjadi sebaris teks (String) dengan format standar internasional yang disebut ISO 8601.
  // pada code ini berfungsi untuk menyamakan dengan value yang dibarikan oleh input type datetime-local

  // --- VALIDASI TANGGAL PEMINJAMAN ---
  let isPeminjamanValid = false; 

  if (datePeminjaman.value === "") {
    emptyDatePeminjaman.textContent = "Tanggal Peminjaman tidak boleh kosong";
    setEmptyState(datePeminjaman, emptyDatePeminjaman, datePeminjamanError);
  } else if (datePeminjaman.value < sekarang) {
    // Jika tanggal & jam yang dipilih sudah lewat dari menit sekarang
    datePeminjamanError.textContent = "Tanggal Peminjaman tidak boleh sebelum saat ini";
    setErrorState(datePeminjaman, emptyDatePeminjaman, datePeminjamanError);
  } else {
    setValidState(datePeminjaman, emptyDatePeminjaman, datePeminjamanError);
    isPeminjamanValid = true; 
  }


  // --- VALIDASI TANGGAL PENGEMBALIAN ---
  if (datePengembalian.value === "") {
    emptyDatePengembalian.textContent = "Tanggal Pengembalian tidak boleh kosong";
    setEmptyState(datePengembalian, emptyDatePengembalian, datePengembalianError);
  } else if (datePengembalian.value < sekarang) {
    // Jika tanggal & jam kembali yang dipilih sudah lewat dari menit sekarang
    datePengembalianError.textContent = "Tanggal Pengembalian tidak boleh sebelum saat ini";
    setErrorState(datePengembalian, emptyDatePengembalian, datePengembalianError);
  } else if (isPeminjamanValid && datePengembalian.value < datePeminjaman.value) {
    // Jika tanggal & jam kembali ternyata LEBIH DULU daripada tanggal & jam pinjam
    datePengembalianError.textContent = "Tanggal Pengembalian tidak boleh sebelum Tanggal Peminjaman";
    setErrorState(datePengembalian, emptyDatePengembalian, datePengembalianError);
  } else {
    setValidState(datePengembalian, emptyDatePengembalian, datePengembalianError);
  }

  // Validasi Metode Pembayaran
  // Mengambil value dari input dengan atribut name "pembayaran" yang sudah kepilih atau "checked"
  let selectedPayment = document.querySelector('input[name="pembayaran"]:checked',); 

  if (!selectedPayment) {
    paymentError.textContent = "Metode pembayaran harus dipilih";
    paymentError.classList.remove("hide");
    isValid = false;
  } else {
    paymentError.classList.add("hide");
  }

  // Validasi Pilihan Kamera
  if (cameraSelect.value === "") {
    emptyCameraSelect.textContent = "Pilihan Kamera harus dipilih";
    setEmptyState(cameraSelect, emptyCameraSelect);
  } else {
    setValidState(cameraSelect, emptyCameraSelect);
  }

  // Validasi Keperluan Peminjaman
  if (purposeInput.value.trim() === "") {
    emptyPurposeInput.textContent = "Keperluan Peminjaman tidak boleh kosong";
    setEmptyState(purposeInput, emptyPurposeInput);
  } else {
    setValidState(purposeInput, emptyPurposeInput);
  }
});
