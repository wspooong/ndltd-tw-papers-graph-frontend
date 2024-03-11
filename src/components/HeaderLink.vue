<template>
  <v-list-item :href="link" target="_blank" clickable>
    <v-list-item>
      <v-list-item-title>{{ title }}</v-list-item-title>
      <v-list-item-subtitle>{{ caption }}</v-list-item-subtitle>
    </v-list-item>
  </v-list-item>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

export interface HeaderLinkProps {
  title: string;
  caption?: string;
  link?: string;
}

withDefaults(defineProps<HeaderLinkProps>(), {
  caption: '',
  link: '#',
});
</script>