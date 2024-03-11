<template>
    <v-container>
        <v-row justify="center">
            <v-card :variant="vcard_variant" hover @click="changeFocusDocument">
                <v-card-item>
                    <div v-if="props.documentData.layer === 0">
                        <v-chip color="primary" label>Original Paper</v-chip>
                    </div>
                </v-card-item>
                <v-card-item>
                    <v-card-title>
                        <h4 >{{ props.documentData.title }}</h4>
                    </v-card-title>
                    <v-card-subtitle>
                        {{ props.documentData.author }} - {{ props.documentData.graduated_academic_year }}
                    </v-card-subtitle>
                </v-card-item>
                <v-card-text>{{ `${props.documentData.abstract.slice(0, 100)}...` }}</v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from 'vue';
import { useFocusDocumentStore } from '@/stores/focusDocument';
import Paper from '@/interfaces/Paper';

const vcard_variant = ref<"elevated" | "outlined">('elevated')
const focusDocument = useFocusDocumentStore()

const props = defineProps({
    documentData: {
        type: Object as PropType<Paper>,
        required: true,
    }
});

function changeFocusDocument() {
    focusDocument.setDocument(props.documentData.uid)
}

watch(() => focusDocument.uid, (newVal, oldVal) => {
    if (props.documentData.uid === newVal) {
        vcard_variant.value = 'outlined'
    } else {
        vcard_variant.value = 'elevated'
    }
})

</script>
