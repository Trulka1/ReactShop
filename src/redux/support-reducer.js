const UPDATE_TEXT_MESSAGE_BODY = "UPDATE-TEXT-MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    ticketsData: [
        { id: 1, theme: "Не пришёл товар" },
        { id: 2, theme: "Долго грузится карточка товара" },
        { id: 3, theme: "Не нравится мне что-то на вашем сайте" },
        { id: 4, theme: "Купил паленый товар, верните денежку" },
        { id: 5, theme: "Ты чёрт" },
        { id: 6, theme: "Можно бесплатно?" },
        { id: 7, theme: "Как вернуть товар?" },
        { id: 8, theme: "Я не хочу больше этой хуйней заниматься" },
    ],
    messagesData: [
        { id: 1, messagetext: "Привет" },
        { id: 2, messagetext: "Как дела" },
        { id: 3, messagetext: "Норм" },
        { id: 4, messagetext: "Пока" },
        { id: 5, messagetext: "Пока" },
    ],
    newMessageBody: ""
}

const supportReducer = (state = initialState, action) => {

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