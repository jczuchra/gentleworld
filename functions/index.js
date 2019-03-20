const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp(functions.config().firebase);

const createNotification = (notification) => {
    admin.firestore().collection('notifications').add(notification)
        .then(doc => {
            console.log('Notification was added', doc)
        })
}

exports.projectCreated = functions.firestore
    .document('posts/{postId}')
    .onCreate(doc => {
        const data = doc.data();
        const notification = {
            content: "Added a new project",
            user: `${data.authorFirstName} ${data.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })

exports.userJoined = functions.auth.user()
    .onCreate(user => {

        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {

                const newUser = doc.data();
                const notification = {
                    content: "Joined the party",
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotification(notification)
            })
    })