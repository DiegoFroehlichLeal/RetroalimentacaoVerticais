const Router = require('express');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const router = Router();
const serviceAccount = require("../server/serviceAccountKey.json");

initializeApp({
    credential: cert(serviceAccount)
});

router.get('/', (req, res) => {
    getFirestore()
        .collection('table')
        .get()
        .then(snapshot => {
            const transactions = snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }))
            res.json(transactions);
        })

});

module.exports = router;