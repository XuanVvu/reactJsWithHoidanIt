import { getAllCodeService, createNewUserService } from '../../services/userService';
import actionTypes from './actionTypes';


// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("GENDER")
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFaided())

            }
        } catch (e) {
            dispatch(fetchGenderFaided())
            console.log('fetchGenderStart error', e);
        }
    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
})
export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION")
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFaided())

            }
        } catch (e) {
            dispatch(fetchPositionFaided())
            console.log('fetchPositionStart error', e);
        }
    }

}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData,
})
export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAIDED
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE")
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFaided())

            }
        } catch (e) {
            dispatch(fetchRoleFaided())
            console.log('fetchRoleStart error', e);
        }
    }

}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData,
})
export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log('check create user redux: ', res)
            if (res && res.errCode === 0) {
                dispatch(saveUserSuccess())
            } else {
                dispatch(saveUserFailed())

            }
        } catch (e) {
            dispatch(saveUserFailed())
            console.log('fetchPositionStart error', e);
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})
