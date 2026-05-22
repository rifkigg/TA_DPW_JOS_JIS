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

  // Fungsi kondisi tidak boleh pilih tanggal sebelum saat ini
  function setBeforeNow(input, errorMessage) {
    // Tanggal Hari ini
    let dateNow = new Date();

    let dateInput = new Date(input.value);

    if (dateInput.getTime() < dateNow) {
      errorMessage.classList.remove("hide");
    }
  }

  // Validasi Nama Penyewa
  if (nameInput.value === "") {
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
  if (emailInput.value === "") {
    emptyEmailInput.textContent = "Email tidak boleh kosong";
    setEmptyState(emailInput, emptyEmailInput, emailError);
  } else {
    let emailRegex = /^[^\s@]+@(\w+\.)+\w+$/;

    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Inputan Email tidak valid";
      setErrorState(emailInput, emptyEmailInput, emailError);
    } else {
      setValidState(emailInput, emptyEmailInput, emailError);
    }
  }

  // Validasi Nomor Telepon
  if (phoneInput.value === "") {
    emptyPhoneInput.textContent = "Nomor Telepon tidak boleh kosong";
    setEmptyState(phoneInput, emptyPhoneInput, phoneError);
  } else {
    let phoneRegex = /^[0-9]+$/;

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

  // Validasi Tanggal Peminjaman

  if (datePeminjaman.value === "") {
    emptyDatePeminjaman.textContent = "Tanggal Peminjaman tidak boleh kosong";
    setEmptyState(datePeminjaman, emptyDatePeminjaman, datePeminjamanError);
  } else {
    datePeminjamanError.textContent =
      "Tanggal Peminjaman tidak boleh sebelum saat ini";
    setBeforeNow(datePeminjaman, datePeminjamanError);
  }

  // Validasi Tanggal Pengembalian
  if (datePengembalian.value === "") {
    emptyDatePengembalian.textContent =
      "Tanggal Pengembalian tidak boleh kosong";
    setEmptyState(
      datePengembalian,
      emptyDatePengembalian,
      datePengembalianError,
    );
  } else {
    datePengembalianError.textContent =
      "Tanggal Pengembalian tidak boleh sebelum saat ini";
    setBeforeNow(datePengembalian, datePengembalianError);
  }

  // Validasi Metode Pembayaran
  let selectedPayment = document.querySelector(
    'input[name="pembayaran"]:checked',
  );

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
  if (purposeInput.value === "") {
    emptyPurposeInput.textContent = "Keperluan Peminjaman tidak boleh kosong";
    setEmptyState(purposeInput, emptyPurposeInput);
  } else {
    setValidState(purposeInput, emptyPurposeInput);
  }

  // Hasil Inputan
  if (isValid) {
    // Tampilkan card hasil
    document.getElementById("result-container-card").classList.remove("hide");

    // Buat tabel hasil
    let resultTable = document.createElement("table");
    resultTable.classList.add("result-table");

    // Data field
    let fields = [
      "Nama Penyewa",
      "Email",
      "Nomor Telepon",
      "Metode Pembayaran",
      "Pilihan Kamera",
      "Keperluan Peminjaman",
    ];

    // Data value
    let values = [
      nameInput.value,
      emailInput.value,
      phoneInput.value,
      selectedPayment.value,
      cameraSelect.options[cameraSelect.selectedIndex].text,
      purposeInput.value,
    ];

    // Header tabel
    let headerRow = resultTable.insertRow(0);

    let cell1 = headerRow.insertCell(0);
    let cell2 = headerRow.insertCell(1);

    cell1.innerHTML = "<b>Field</b>";
    cell2.innerHTML = "<b>Hasil</b>";

    // Isi tabel
    for (let i = 0; i < fields.length; i++) {
      let row = resultTable.insertRow(i + 1);

      let cell1_1 = row.insertCell(0);
      let cell2_1 = row.insertCell(1);

      cell1_1.textContent = fields[i];
      cell2_1.textContent = values[i];
    }

    // Bersihkan hasil sebelumnya
    let resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "";

    // Tambahkan tabel hasil
    resultContainer.appendChild(resultTable);
  }
});
