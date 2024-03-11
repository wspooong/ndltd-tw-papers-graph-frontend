<template>
  <v-toolbar border class="px-3">
    <v-toolbar-title>
      <v-btn variant="text" to="/">NDLTD TW Papers Graph</v-btn>
    </v-toolbar-title>
      <v-tabs centered> 
      <HeaderLink v-for  ="link in headerLinks" :key="link.title" v-bind="link" target="" />
    </v-tabs>
  </v-toolbar>
</template>

<script setup lang="ts">
import { HeaderLinkProps } from './HeaderLink.vue';

const headerLinks: HeaderLinkProps[] = [
  {
    title: '首頁',
    link: '/'
  },
  {
    title: '關於我',
    link: 'https://wspooong.com/'
  },
  {
    title: 'ROADMAP',
    link: '/'
  }
];

</script>

<style scoped>
.v-toolbar {
  border-width: 2px;
}
</style>
./HeaderLink.vue