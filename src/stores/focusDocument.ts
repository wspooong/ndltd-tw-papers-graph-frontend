import { defineStore } from "pinia";

export const useFocusDocumentStore = defineStore('focusDocument', {
    state: () => ({ uid: ''}),
    actions: {
        setDocument(uid: string) {this.uid = uid},
    }
})