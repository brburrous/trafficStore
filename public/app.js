console.log(firebase)

const db = firebase.firestore();
const createThing = document.getElementById('createThing');

let humansRef;

humansRef = db.collection("humans");

createThing.onclick = () => {
    humansRef.add({
        name: document.getElementById("nameInput").value,
        description: document.getElementById("descInput").value,
        photo: document.getElementById("photoInput").value,
    })
}