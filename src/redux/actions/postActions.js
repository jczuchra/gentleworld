export const createPost = post => {
    console.log(post);
    return (dispatch, getStore, { getFirestore, getFirebase }) => {

        const firestore = getFirestore();
        const profile = getStore().firebase.profile;
        const uid = getStore().firebase.auth.uid;
        firestore.collection('posts').add({
            ...post,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            userId: uid
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post })
        }).catch(error => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })

    }
}
