const initialState = {
    users: [
        {
            name: "Nana  Antwi",
            email: "sneezy300@gmail.com",
            gen: 12,
            id: "f7t7ty"
        },
        {
            name: "Obiri yaa",
            email: "yaaobiri@gmail.com",
            gen: 13,
            id: "f7t7"
        },
        {
            name: "Nana sarfo",
            email: "sneezy300@gmail.com",
            gen: 15,
            id: "ghf6"
        },
    ]

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":

            return { ...state, users: [...state.users, action.payload] };

        case "DELETE_USER":
            let undeletedUsers = state.users.filter((user) => user.id !== action.payload)
            return { ...state, users: undeletedUsers }

        case "EDIT_USER":
            return {
                ...state, users: state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                ),
            }

        default:
            return state;
    }

};

export default usersReducer;