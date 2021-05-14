<template>
  <a class="d-flex flex-column align-center clickable py-5" @click="addElement(item)">
    <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
    <span v-else>{{item.name.slice(0,1)}}</span>
    <span class="mt-2">{{ item.name }}</span>
  </a>
</template>

<script lang="ts">
import { IToolItem } from '@/interfaces';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ToolItem extends Vue {
  @Prop()
  item!: IToolItem;

  addElement(): void {
    const element = document.createElement(this.item.tag);
    if (this.item.type) {
      element.setAttribute('type', this.item.type);
    }
    if (this.item.hasPlaceholder) element.setAttribute('placeholder', `Enter your ${this.item.type}`);

    if (this.item.hasLabel) {
      element.setAttribute('placeholder', `Enter your ${this.item.type}`);
    }

    element.classList.add(...['popup-element', 'draggable']);

    const mainDisplay = document.getElementById('editor');

    if (mainDisplay) {
      mainDisplay.appendChild(element);
    }
  }
}
</script>

<style scoped>
a {
  border: 1px solid #eee;
  border-radius: 5px;
  text-decoration: none;
  color: #000 !important;
}
a:hover {
  background: #ffffff;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 15%);
  border-radius: 6px;
  display: inline-block;
}
</style>
