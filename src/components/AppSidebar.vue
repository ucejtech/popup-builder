<template>
  <v-navigation-drawer
    v-model="drawer"
    color="primary"
    class="app--drawer"
    app
    floating
    mini-variant
    mini-variant-width="81"
    permanent
  >
    <v-list class="route--list mt-16" three-line>
      <v-list-item v-for="item in items" :key="item.title" @click="item.click">
        <v-list-item-content class="text-center">
          <v-list-item-title>
            <v-icon size="30" color="white">{{ item.icon }}</v-icon>
          </v-list-item-title>
          <v-list-item-subtitle class="text-white">
            {{ item.title }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import EventBus from '@/app/eventBus';
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import axios from 'axios';
import cuid from 'cuid';

@Component
export default class AppSidebar extends Vue {
  drawer = true;

  items = [
    { title: 'Save', icon: 'mdi-content-save', click: this.save },
    { title: 'Publish', icon: 'mdi-earth', click: this.publish },
  ];

  mini = true;

  publish(): void {
    const fd = new FormData();
    const doneElement = document.getElementById('popup-outer-circle');

    const styleSheetString = '<link rel="stylesheet" href="./_animation.css" />';
    if (doneElement) {
      const prefixString = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    ${styleSheetString}
</head>
<body>
    ${doneElement.outerHTML}
</body>
</html>`;
      fd.append('save-popup', '1');
      fd.append('popup-id', doneElement.dataset.element || cuid());
      fd.append('popup-content', prefixString);
      axios.post('http://localhost/poptin/index.php', fd).then((w) => {
        console.log(w);
      });
      console.log();
    }
  }

  save(): void {
    localStorage.setItem('popup-template', JSON.stringify(this.popupTemplate));
    EventBus.$emit('fire:snackbar', 'Popup Saved');
  }

  @Getter
  popupTemplate!: Record<string, Record<string, unknown>>;
}
</script>

<style scoped>
.text-white {
  color: #fff !important;
}
</style>
