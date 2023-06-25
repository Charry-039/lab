import {defineStore} from "pinia";

export const useASore = defineStore('a', {
    state: () => {
        return {
            title: 'Charry\'s Blog'
        }
    }
})
