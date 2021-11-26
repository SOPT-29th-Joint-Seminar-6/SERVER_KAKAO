const admin =require('firebase-admin');
const serviceAccount = require('./server-again-firebase-adminsdk-vz5s3-39dea3ff78.json');
const dotenv =require('dotenv');

dotenv.config();

let firebase;

if(admin.apps.length === 0){
    firebase = admin.initializeApp({
        credential : admin.credential.cert(serviceAccount),
    });
} else {
    firebase = admin.app();
}

module.exports = {
    api : require('./api'),
};