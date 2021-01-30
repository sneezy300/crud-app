const initialState = {
    users: [
        {
            name: "Nana  Antwi",
            email: "sneezy300@gmail.com"
            gen: 12
            id: "f7t7ty"
        },
        {
            name: "Obiri yaa",
            email: "yaaobiri@gmail.com"
            gen: 13
            id: "f7t7"
        },
        {
            name: "Nana sarfo",
            email: "sneezy300@gmail.com"
            gen: 15
            id: "ghf6"
        },
    ]

}

const usersReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_USER:
            const newUser = {
                name: action.payload.name,
                email: action.payload.email,
                gen: action.payload.gen
            };
            return { ...state, users: [...state.users, newUser] }

        default:
            return state;
    }

}

export default usersReducer;