import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

import { 
    getFirestore, doc, getDoc, getDocs, collection 
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE8bxTnCMZjwm3oRAKjx6SvDFhl7BQBvY",
    authDomain: "ninja-cloud-cafe-87027.firebaseapp.com",
    projectId: "ninja-cloud-cafe-87027",
    storageBucket: "ninja-cloud-cafe-87027.appspot.com",
    messagingSenderId: "460515751953",
    appId: "1:460515751953:web:6144c06f6cf63b9f05d9b0",
    measurementId: "G-NJWSTJ3V6T"
};
// init firebase
initializeApp(firebaseConfig)



// init services
const db = getFirestore()


//collection ref

const colRef = collection(db, 'cafes')

// get collection data

getDocs(colRef)
    .then((snapshot) => {
        let cafes = []

        snapshot.docs.forEach((doc) => {
            cafes.push({...doc.data(), id: doc.id}) // get data from the doc array and push it to the 'cafes' array
        })
        console.log(cafes)
    })
    .catch(err => {
        console.log(err.message)
    })