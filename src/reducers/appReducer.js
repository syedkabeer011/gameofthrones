const initialState = {
    gotData: {
        isDone: false,
        detail: '',
        data: {
            message: ''
        },
        error: ""
    }
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_SUCCESS':
            return {
                ...state,
                gotData: { isDone: true, detail: 'success', data: action.payload, error: false },
            };

        case 'GET_DATA_FAILURE':
            return {
                ...state,
                gotData: { isDone: true, detail: 'error', data: action.payload, error: true },
                
            };
        default:
            return { ...state };
    }
}
