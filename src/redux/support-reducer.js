const UPDATE_TEXT_MESSAGE_BODY = "UPDATE-TEXT-MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

const supportReducer = (state, action) => {

    switch(action.type){
        case UPDATE_TEXT_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messagesData.push({ id: 6, messagetext: body })
            return state
        default:
            return state
    }
    return state
}

export const UpdateMessageAreaCreator = (body) => {
    return {
        type: UPDATE_TEXT_MESSAGE_BODY,
        body: body
    }
}

export const SendMessageCreator = () => {
    return {
        type: SEND_MESSAGE, 
    }
}

export default supportReducer