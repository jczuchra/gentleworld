const initState = {
    posts: [
        { title: "Mojo jojoj is out", content: "blah blah blah blah", id: 1 },
        { title: "Ella no quiere beber !", content: "blah blah blah blah", id: 2 },
        { title: "Polskie cebule zlotem narodu", content: "blah blah blah blah", id: 3 },
        { title: "Yi er qui que !", content: "blah blah blah blah blah", id: 4 },
        { title: "Kalamafula mafula", content: "blah blah blah blah", id: 5 },]
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        default:
            return state
    }
}

export default postReducer;