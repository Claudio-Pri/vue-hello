console.log('js collegato');

//===== Appunti ======
// ` backtick

// {{TEXT INTERPOLATION}}

//===== Code ======


//===== Functions =====

// deconstructuring
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Ciao Vue!',
            image: 'img/happy-dog.jpg'
        }
    }


}).mount('#app')
// 'monto' vue