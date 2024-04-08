<template>
    <v-sheet :height="_CONTENT_HEIGHT">
        <div class="network_graph"></div>
    </v-sheet>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import createNetworkGraph from './NetworkGraphFunction';
import {_CONTENT_HEIGHT} from './constants';

const props = defineProps(
    {
        networkData: {
            type: Object as any,
            required: true,
        },
    }
)

onMounted(() => {
    createNetworkGraph(props.networkData)
});


</script>
