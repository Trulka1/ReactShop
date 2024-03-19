const ADD_NOTE = "ADD_NOTE"
const UPDATE_TEXT_AREA = "UPDATE_TEXT_AREA"

let initialState = {
    accountData: [
        { id: 1, accountname: "Роман", accountlocation: "Москва" },
    ],
    notesData: [
        { id: 1, note: "Я дебил", },
        { id: 2, note: "Плохой день", },
        { id: 3, note: "Завтра пойду какать", },
        { id: 4, note: "Надо купить сосиски", },
    ],
    newInputText: "eqw"
}

const accountReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NOTE:
            let newNote = {
                id: 5,
                note: state.newInputText,
            }
            state.notesData.push(newNote)
            state.newInputText = ""
            return state
        case UPDATE_TEXT_AREA:
            state.newInputText = action.newText
            return state
        default:
            return state
    }
}

export const AddNoteCreator = () => {
    return {
        type: ADD_NOTE
    }
}

export const UpdateTextAreaCreator = (text) => {
    return {
        type: UPDATE_TEXT_AREA, 
        newText: text
    }
}

export default accountReducer