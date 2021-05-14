<template>
  <v-app>
    <app-sidebar />
    <v-main>
      <app-toolbar />
      <app-tools-drawer />
      <router-view class="pa-6" />
    </v-main>
    <v-snackbar v-model="snackbar" >
      {{ text }}
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EventBus from './app/eventBus';
import AppSidebar from './components/AppSidebar.vue';
import AppToolbar from './components/AppToolbar.vue';
import AppToolsDrawer from './components/AppToolsDrawer.vue';

@Component({
  components: {
    AppSidebar,
    AppToolbar,
    AppToolsDrawer,
  },
})
export default class extends Vue {
  snackbar = false;

  text = '';

  created(): void {
    EventBus.$on('fire:snackbar', (text: string) => {
      this.text = text;
      this.snackbar = true;
    });
  }
}
</script>

<style>
.v-application {
  background: #eee !important;
}
@import url('./assets/css/global.css');
</style>
