export const createPost = post => {
    console.log(post);
    return (dispatch, getStore, { getFirestore, getFirebase }) => {

        const firestore = getFirestore();

        firestore.collection('posts').add({
            ...post,
            authorFirstName: 'Jay',
            authorLastName: 'Ce',
            id: 12345
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post })
        }).catch(error => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })

    }
}
