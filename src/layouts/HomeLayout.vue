<template>
    <v-container fluid class="fill-height bg-grey-lighten-3">
        <v-responsive class="align-center text-center">
            <v-row>
                <v-col cols="12">
                    <div class="text-h2 font-weight-light mb-n1">探索論文網絡關係圖</div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <div class="text-h5 font-weight-light">Explore the network of NDLTD papers</div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" offset-md="3">
                    <v-text-field class="w-100 centered-input" label="標題搜尋" outlined v-model="search_text"></v-text-field>
                    <v-btn class="w-50" color="primary" dark @click="searchFunc">搜尋</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" offset-md="3">
                    <v-divider thickness="10"></v-divider>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" offset-md="3">
                    <div class="text-h3 font-weight-light">FAQ</div>
                </v-col>
            </v-row>
            <v-row class="text-left">
                <v-col cols="12" md="6" offset-md="3">
                    <v-expansion-panels  v-for="(faq) in FAQ_list">
                            <v-expansion-panel :title="faq.question" :text="faq.answer">
                            </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
            
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';


const router = useRouter()
const search_text = ref('大數據 機器學習')

function searchFunc() {
    router.push({ name: 'search', query: { q: search_text.value } })    
}

const FAQ_list = [
    {
        question: "我可以用它來做什麼？",
        answer: "您可以用本工具來查詢有興趣的論文，本工具會利用該論文的摘要，找出相關的論文，並繪製成網路圖。"
    },
    {
        question: "現在有哪些論文可供搜尋？",
        answer: "目前僅有提供109學年度畢業之博碩士論文進行搜尋。"
    },{
        question: "這用了什麼技術啊？",
        answer: "本工具採用了「向量搜尋」（Vector Search）、「詞嵌入」（Word Embedding）來進行論文摘要的網路圖繪製。"
    },
    {
        question: "接下來會有什麼新功能？",
        answer: "關於新功能，請參閱右上角的Roadmap。"
    }
]


</script>