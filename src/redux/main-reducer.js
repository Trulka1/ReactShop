let initialState = {
    goodsData: [
        { id: 1, goodsname: "Смартфон", goodsdiscripion: "Эргономичный и удобный телефон, который отлично подойдет для повседневных звонков" },
        { id: 2, goodsname: "Наушники", goodsdiscripion: "Классные проводные наушники затычки" },
    ],
}

const mainReducer = (state = initialState, action) => {
    return state
}

export default mainReducer