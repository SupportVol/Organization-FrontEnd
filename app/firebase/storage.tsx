
    /**
     * Import necessary modules from Firebase SDKs.
     */
    import firebase from "firebase/compat/app";
    import "firebase/compat/storage";
    import {
      getStorage,
      ref,
      uploadBytes,
      getDownloadURL,
      deleteObject,
    } from "firebase/storage";
    import admin from "firebase-admin";

    /**
     * Path to the service account key JSON file.
     */
    import serviceAccount from "../path/to/serviceAccountKey.json";

    /**
     * Firebase configuration object.
     */
    const firebaseConfig = {
      apiKey: "AIzaSyAmSpGqd4qk36lj_K9sOnfRN4ZtHCK-YQM",
      authDomain: "support-vol.firebaseapp.com",
      databaseURL:
        "https://support-vol-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "support-vol",
      storageBucket: "support-vol.appspot.com",
      messagingSenderId: "655861372911",
      appId: "1:655861372911:web:a1d577dda3edfc3c43881a",
      measurementId: "G-3FSFLTN1WD",
    };

    /**
     * Initialize Firebase with the provided configuration.
     */
    firebase.initializeApp(firebaseConfig);

    /**
     * Initialize the Firebase Admin SDK with the service account credentials.
     */
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: "gs://support-vol.appspot.com",
    });

    /**
     * Storage module from Firebase SDK.
     */
    export const storage = getStorage();

    /**
     * Class representing Firebase Storage operations.
     */
    export default class Storage {
      /**
       * Uploads a base64-encoded image to Firebase Storage.
       * @param path - The path to store the image.
       * @param imageBase64 - The base64-encoded image data.
       * @returns A promise containing upload status, error message (if any), and download URL.
       */
      async uploadByte8Array(
        path: string,
        imageBase64: string
      ) {
        try {
          const storageRef = ref(storage, path);
          const bytes = new Uint8Array(atob(imageBase64).split('').map(char => char.charCodeAt(0)));
          await uploadBytes(storageRef, bytes);
          const downloadURL = await this.getDownloadURL(path);
          return [true, downloadURL];
        } catch (error) {
          console.error("Error uploading image:", error);
          return [false, error.message];
        }
      }

      /**
       * Uploads a file to Firebase Storage.
       * @param file - The file to upload.
       * @param path - The path to store the file.
       * @returns A promise containing upload status and download URL (if successful).
       */
      async uploadFile(file: File, path: string) {
        try {
          const storageRef = ref(storage, path);
          await uploadBytes(storageRef, file);
          const downloadURL = await this.getDownloadURL(path);
          return [true, downloadURL];
        } catch (error) {
          console.error("Error uploading file:", error);
          return [false, error.message];
        }
      }

      /**
       * Retrieves the download URL of a file from Firebase Storage.
       * @param path - The path of the file.
       * @returns A promise containing retrieval status and download URL (if successful).
       */
      async getDownloadURL(path: string) {
        try {
          const storageRef = ref(storage, path);
          const downloadURL = await getDownloadURL(storageRef);
          return [true, downloadURL];
        } catch (error) {
          console.error("Error getting download URL:", error);
          return [false, error.message];
        }
      }

      /**
       * Deletes a file from Firebase Storage.
       * @param path - The path of the file to delete.
       * @returns A promise containing deletion status and error message (if any).
       */
      static async deleteFile(path: string) {
        try {
          const storageRef = ref(storage, path);
          await deleteObject(storageRef);
          return [true, ""];
        } catch (error) {
          console.error("Error deleting file:", error);
          return [false, error.message];
        }
      }
    }
