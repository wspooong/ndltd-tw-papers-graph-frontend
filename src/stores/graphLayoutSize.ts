import { defineStore } from "pinia";

export const useGraphLayoutSizeStore = defineStore('graphLayoutSize', {
    state: () => ({ 
        width: 0,
        height: 0,
        margin: 0
     }),
    actions: {
        setBrowserWindowSize(width: number, height: number) {
            this.width = width-this.margin;
            this.height = height-this.margin;
        },
    }
})
