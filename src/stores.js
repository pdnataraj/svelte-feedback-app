import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 2,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, error?'
    },
    {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, error?'
    },
    {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, error?'
    }
])