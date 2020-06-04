import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 1, message: "Hi, how are you", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 25},

        ],
        newPostText: 'social-network',

        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Hello"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
                {id: 6, message: "Yo"}
            ],
            dialogs: [
                {id: 1, name: "Dmitriy"},
                {id: 2, name: "Natalia"},
                {id: 3, name: "Sergey"},
                {id: 4, name: "Olga"},
                {id: 5, name: "Kirill"},
                {id: 6, name: "Svetlana"}
            ],
        },
        sidebar: {
            friends: [
                {id: 1, name: "Dmitriy"},
                {id: 2, name: "Natalia"},
                {id: 3, name: "Sergey"},
            ]
        }

    }
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;