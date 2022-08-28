import actionTypes from '../actions/actionTypes';


const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            state.isLoadingGender = true;
            console.log('fire fetch gender start: ', action)
            return {
                ...state,
                // started: true
            }

        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            console.log('fire fetch gender success: ', action)
            return {
                ...state,
                // started: true
            }

        case actionTypes.FETCH_GENDER_FAIDED:

            state.isLoadingGender = false;
            state.genders = []
            console.log('fire fetch gender faied: ', action)

            return {
                ...state,
                // started: true
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;

            return {
                ...state,
                // started: true
            }

        case actionTypes.FETCH_POSITION_FAIDED:
            state.positions = []
            return {
                ...state,
                // started: true
            }

        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;

            return {
                ...state,
                // started: true
            }

        case actionTypes.FETCH_ROLE_FAIDED:
            state.roles = []
            return {
                ...state,
                // started: true
            }

        default:
            return state;
    }
}

export default adminReducer;