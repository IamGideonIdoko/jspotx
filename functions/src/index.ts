/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// import admin from 'firebase-admin';
// import * as functions from 'firebase-functions';
// admin.initializeApp();
// const db = admin.firestore();

// // Add all registered users to Firestore
// export const createUserDocument = functions.auth.user().onCreate((user) => {
//   db.collection('users')
//     .doc(user.uid)
//     .set(JSON.parse(JSON.stringify(user)));
// });
