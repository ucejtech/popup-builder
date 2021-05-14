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
    <v-dialog v-model="link" max-width="344px">
      <v-card class="mx-auto">
        <v-card-title>
          Copy the link below
        </v-card-title>
        <v-card-text><code v-html="`<script data-name='poptin' src='https://poptin.ucej.tech/cdn.js?popup_id=${embedId}'></script>`"></code></v-card-text>
      </v-card>
    </v-dialog>
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

  link =false;

  items = [
    { title: 'Save', icon: 'mdi-content-save', click: this.save },
    { title: 'Publish', icon: 'mdi-earth', click: this.publish },
  ];

  mini = true;

  embedId = '';

  publish(): void {
    const fd = new FormData();
    const doneElement = document.getElementById('popup-outer-circle');

    const styleSheetString = '<link rel="stylesheet" href="./_animation.css" />';
    if (doneElement) {
      this.embedId = doneElement.dataset.element || cuid();
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
      axios.post('http://poptin.ucej.tech/popup.php', fd).then(() => {
        this.link = true;
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
