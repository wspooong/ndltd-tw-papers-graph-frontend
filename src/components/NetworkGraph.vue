<template>
    <v-sheet>
        <div class="network_graph"></div>
    </v-sheet>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import createNetworkGraph from './NetworkGraphFunction';

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
