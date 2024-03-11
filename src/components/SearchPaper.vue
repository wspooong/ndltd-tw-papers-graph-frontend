<template>
    <v-container>
        <v-row justify="center">
            <v-card variant="elevated" hover click :to="`graph/${props.documentData.uid}`">
                <v-card-item>
                    <v-card-title>
                        <h4>{{ props.documentData.title }}</h4>
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
import { PropType } from 'vue';
import { useFocusDocumentStore } from '@/stores/focusDocument';
import Paper from '@/interfaces/Paper';

const props = defineProps({
    documentData: {
        type: Object as PropType<Paper>,
        required: true,
    }
});

</script>
