<template>
    <v-container fluid class="bg-grey-lighten-3 fill-height">
        <v-responsive v-if="isLoading">
            <v-row class="pa-0">
                <v-col cols="12" md="6" offset-md="3">
                    <v-skeleton-loader type="paragraph, paragraph, paragraph" />
                </v-col>
            </v-row>
        </v-responsive>
        <v-responsive v-if="!isLoading">
            <v-row>
                <v-col cols="12">
                    <div class="text-h2 font-weight-light text-center ma-3 pa-3">搜尋結果</div>
                </v-col>
            </v-row>
            <v-col cols="12" md="6" offset-md="3">
                <v-text-field class="w-100 centered-input" label="標題搜尋" outlined v-model="search_text"
                    append-inner-icon="mdi-magnify" @click:append-inner="searchFunc"></v-text-field>
            </v-col>
            <v-row>
                <v-col cols="12" md="6" offset-md="3">
                    <v-virtual-scroll :items="documents" height="60vh">
                        <template v-slot:default="{ item }">
                            <SearchPaper :documentData="item" />
                            <v-divider></v-divider>
                        </template>
                    </v-virtual-scroll>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Paper from '@/interfaces/Paper';

const documents = ref<Paper[]>([])

const route = useRoute();
const router = useRouter()
const query = ref('')
const isLoading = ref(true)
const search_text = ref(route.query.q as string)

function searchFunc() {
    router.push({ name: 'search', query: { q: search_text.value } }).then(() => {router.go(0)})
}

const error_document = {
    uid: "404",
    layer: null,
    title: "伺服器出現錯誤，請稍後再試。",
    author: "錯誤",
    degree: "錯誤",
    graduated_academic_year: 0,
    url: "錯誤",
    abstract: "錯誤",
    institution: "錯誤",
    department: "錯誤",
    keywords: ["錯誤"],
    narrow_field: "錯誤",
    detailed_field: "錯誤"
}

const not_found_document = {
    uid: "404",
    layer: null,
    title: "找不到相關論文",
    author: "錯誤",
    degree: "錯誤",
    graduated_academic_year: 0,
    url: "錯誤",
    abstract: "錯誤",
    institution: "錯誤",
    department: "錯誤",
    keywords: ["錯誤"],
    narrow_field: "錯誤",
    detailed_field: "錯誤"
}

async function fetchData() {
    query.value = route.query.q as string
    const response = await fetch(`api/v1/search_title?query=${route.query.q}`);
    const jsonData = await response.json()
    if (response.status != 200) {
        documents.value = [error_document]
        isLoading.value = false
    } else if (jsonData.length == 0) {
        documents.value = [not_found_document]
    } else {
        documents.value = jsonData

    }
    isLoading.value = false
}

onMounted(async () => {
    await fetchData()
})

</script>