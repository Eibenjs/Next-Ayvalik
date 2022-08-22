// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import toast from 'react-hot-toast'
import { userHandler } from '../../utils/utils'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCX-zgXeBZc2EBdB7FRTAno617LmkGQhYc',
  authDomain: 'moon-ayvalik.firebaseapp.com',
  projectId: 'moon-ayvalik',
  storageBucket: 'moon-ayvalik.appspot.com',
  messagingSenderId: '972762687173',
  appId: '1:972762687173:web:37612a555d866cbeef72ac',
  measurementId: 'G-V6MM1GX982',
}
const app = initializeApp(firebaseConfig)
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
  userHandler(user || false)
})

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    toast.error(e.code)
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
  } catch (e) {
    toast.error(e.code)
  }
}

// ----------------------------------------------------------------
export const db = getFirestore(app)
