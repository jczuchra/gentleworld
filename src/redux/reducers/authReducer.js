const initState = {
    login: '',
    password: ''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: action.error
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success')
            return state
        default:
            return state
    }
}

export default authReducer;