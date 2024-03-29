import accountReducer from "./account-reducer"
import supportReducer from "./support-reducer"

let store = {
    _state: {
        supportPage: {
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
        },

        mainPage: {
            goodsData: [
                { id: 1, goodsname: "Смартфон", goodsdiscripion: "Эргономичный и удобный телефон, который отлично подойдет для повседневных звонков" },
                { id: 2, goodsname: "Наушники", goodsdiscripion: "Классные проводные наушники затычки" },
            ],
        },

        accountPage: {
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
        },


    },

    getState() {
        return this._state
    },


    _callSub() {
        console.log("state changed")
    },

    subscribe(observer) {
        this._callSub = observer
    },

    dispatch(action) {

        this._state.accountPage = accountReducer(this._state.accountPage, action)
        this._state.supportPage = supportReducer(this._state.supportPage, action)

        this._callSub(this._state)

        }
    
}

window.store = store;
export default store;
