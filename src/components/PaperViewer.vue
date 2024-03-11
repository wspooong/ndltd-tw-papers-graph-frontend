<template>
    <v-sheet>
        <div class="ma-3">
                <h3>{{ currentDocument?.title }}</h3>
                <v-chip-group column>
                    <v-chip label>{{ currentDocument?.author }}</v-chip>
                    <v-chip label>{{ currentDocument?.graduated_academic_year }}</v-chip>
                </v-chip-group>
                <v-chip-group column>
                    <v-chip label>{{ currentDocument?.institution }}</v-chip>
                    <v-chip label>{{ currentDocument?.department }}</v-chip>
                </v-chip-group>
                <v-divider></v-divider>
                <v-chip-group center>
                    <v-chip :href="currentDocument?.url" target="_blank" outlined>View Original</v-chip>
                    <v-chip :href="`/graph/${currentDocument?.uid}`">View Graph</v-chip>
                </v-chip-group>
                <v-divider></v-divider>
                <div class="pa-3">
                    <p style="max-height: 50vh; overflow-y: auto;">{{ currentDocument?.abstract }}</p>
                </div>
                <v-divider></v-divider>
            <v-chip-group center-active>
                    <v-chip label v-for="keyword in currentDocument?.keywords" :key="keyword" outlined>{{ keyword }}</v-chip>
            </v-chip-group>
            </div>
    </v-sheet>
</template>

<script setup lang="ts">
import { PropType, ref, onMounted, watch } from 'vue';
import {useFocusDocumentStore} from '@/stores/focusDocument';
import Paper from '@/interfaces/Paper';

const focusDocument = useFocusDocumentStore();
const currentDocument = ref<Paper>()
const props = defineProps({
    documents: {
        type: Object as PropType<Record<string, Paper>>,
        required: true,
    }
});

watch(() => focusDocument.uid, () => {
    currentDocument.value = props.documents[focusDocument.uid]
})

onMounted(() => {
    currentDocument.value = props.documents[focusDocument.uid]
})

</script>
