export const createPost = post => {
    console.log(post);
    return (dispatch, getStore) => {
        dispatch({ type: 'CREATE_POST', post })
    }
}
