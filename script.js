document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const nik = document.getElementById('nik').value;

    // Hapus pesan kesalahan sebelumnya
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('nikError').textContent = '';

    // Validasi nama
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        valid = false;
    }

    // Validasi NIK (12 digits)
    const nikPattern = /^[0-9]{12}$/;
    if (!nikPattern.test(nik)) {
        document.getElementById('nikError').textContent = 'Nomer must be 12 digits';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully');
        
    }

    // function pesan(){
    //     alert ("me+rnampilkan pesan dengan external")
    // } 
});