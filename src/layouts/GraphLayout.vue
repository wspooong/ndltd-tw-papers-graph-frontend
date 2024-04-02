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
            <v-row class="pa-0">
                <v-col cols="3">
                    <v-card rounded="lg">
                        <PaperList :networkData="networkData" />
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card rounded="lg">
                        <NetworkGraph :networkData="networkData" />
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card rounded="lg">
                        <PaperViewer :documents="documents" />
                    </v-card>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>

</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFocusDocumentStore } from '@/stores/focusDocument';
import { useGraphLayoutSizeStore } from '@/stores/graphLayoutSize';
import NetworkData from '@/interfaces/NetworkData';
import Paper from '@/interfaces/Paper';

const route = useRoute();
const router = useRouter()
const networkData = ref<NetworkData>()
const documents = ref<Record<string, Paper>>({})
const isLoading = ref(true)
const focusDocument = useFocusDocumentStore()
const graphLayoutSize = useGraphLayoutSizeStore()

async function setWindowSize() {
    graphLayoutSize.setBrowserWindowSize(window.innerWidth, window.innerHeight)
}

async function fetchData() {
    const response = await fetch(`/api/v1/document/similarity?uid=${route.params.uid}`);
    if (response.status != 200) {
        router.push({ name: '404' })
    }
    const jsonData = await response.json()
    networkData.value = jsonData
    documents.value = jsonData.documents
    isLoading.value = false
}

onMounted(async () => {
    focusDocument.setDocument(route.params.uid as string)
    await setWindowSize()
    await fetchData()
})

</script>
