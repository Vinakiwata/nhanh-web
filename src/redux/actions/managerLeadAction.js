export const CREATE_LEAD = 'CREATE_LEAD'
export const CREATE_LEAD_SUCCESS = 'CREATE_LEAD_SUCCESS'
export const CREATE_LEAD_FAILED = 'CREATE_LEAD_FAILED'
export const SET_VAR_LEAD = 'SET_VAR_LEAD'

export const createLead = () => {
    
}

export const setVarLead = (key, value) => ({
    type: SET_VAR_LEAD,
    key,
    value,
})