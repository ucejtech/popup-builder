<template>
  <v-app-bar height="70px" color="#fff" class="app--bar" clipped-right app outlined flat>
    <v-toolbar-title class="ml-3">
      <img
        src="@/assets/images/logo/poptin-logo.svg"
        alt="app logo"
        width="190px"
      />
    </v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppToolbar extends Vue {}
</script>

<style scoped>
.app--bar {
  border-bottom: 1px solid #eee !important;
}
</style>
