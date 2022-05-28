// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: 'reza',
    gender: 'Laki laki',
    age: 26,
    email: 'nasi8713@gmail.com',
    favoriteColor: ['Black', 'gray', 'dark green'],
    isHavePet: 'Nope aka no',
    education: [{
        name: 'UBSI',  
        city: 'Jakarta',  
        graduate: 2020,
    },{
        name: 'SMK Nasional',  
        city: 'Depok',  
        graduate: 2014,
    },{
        name: 'SMP 87 Jakse',  
        city: 'Jakarta',  
        graduate: 2011,
    }],
    favoriteRestaurant: ['Solaria', 'Hokben', 'Sushi']  
};

const secondUser = {
    name: 'NA51',
    gender: 'Laki laki',
    age: 88,
    email: 'nasigamming87@gmail.com',
    favoriteColor: ['Dark Blue', 'Dark red', 'Shadow'],
    isHavePet: 'Nope aka no, too lazy to have one',
    education: [{
        name: 'Univ 88',  
        city: 'Ngarang',  
        graduate: 2020,
    },{
        name: 'SMK Itu',  
        city: 'Depok',  
        graduate: 2014,
    },{
        name: 'SMP Disana',  
        city: 'Disini',  
        graduate: 2011,
    }],
    favoriteRestaurant: ['Kaki Lima', 'Caffe', 'Coffe']
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};