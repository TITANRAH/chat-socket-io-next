import  { initializeApp} from 'firebase/app'


const firebaseConfig = {
   appKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp;