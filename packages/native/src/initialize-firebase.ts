import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "sesh-7a015.firebaseapp.com",
  // databaseURL: "https://project-id.firebaseio.com",
  projectId: "sesh-7a015",
  // storageBucket: "project-id.appspot.com",
  // messagingSenderId: "sender-id",
  appId: "1:470440613520:android:1aab0c404548a1a523aa15",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
