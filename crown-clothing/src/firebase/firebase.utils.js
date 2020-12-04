import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

// firebase config from firebase documentation
const config = {
    apiKey: 'AIzaSyAmUxAju2ZU2AHPEK1Zm-3kYLBluKGd7Gk',
    authDomain: 'crown-clothing-ce1a8.firebaseapp.com',
    databaseURL: 'https://crown-clothing-ce1a8.firebaseio.com',
    projectId: 'crown-clothing-ce1a8',
    storageBucket: 'crown-clothing-ce1a8.appspot.com',
    messagingSenderId: '728827691644',
    appId: '1:728827691644:web:463ff2a0fd02aac83e7ff9',
    measurementId: 'G-ZQD14H9J1D',
};

export const creatUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth utility

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;