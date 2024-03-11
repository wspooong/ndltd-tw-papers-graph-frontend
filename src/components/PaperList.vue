<template>
    <v-sheet class="h-auto">
        <v-virtual-scroll height="80vh" :items="listDocumentData">
            <template v-slot:default="{ item }">
                <PaperCard :documentData="item" />
            </template>
        </v-virtual-scroll>
    </v-sheet>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Paper from '@/interfaces/Paper';

const listDocumentData = ref<Paper[]>([])

const props = defineProps({
    networkData: {
        type: Object,
        required: true,
    }
})

onMounted(() => {
    for (let node of props.networkData.nodes) {
        let uid = node.uid
        listDocumentData.value.push(
            {
                uid: uid,
                layer: node.layer,
                title: props.networkData.documents[uid].title,
                author: props.networkData.documents[uid].author,
                degree: props.networkData.documents[uid].degree,
                graduated_academic_year: props.networkData.documents[uid].graduated_academic_year,
                url: props.networkData.documents[uid].url,
                abstract: props.networkData.documents[uid].abstract,
                institution: props.networkData.documents[uid].institution,
                department: props.networkData.documents[uid].department,
                keywords: props.networkData.documents[uid].keywords,
                narrow_field: props.networkData.documents[uid].narrow_field,
                detailed_field: props.networkData.documents[uid].detailed_field
            }
        )
    }
})

</script>

<style>
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: var(--lightestgrey);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>