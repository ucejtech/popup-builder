<template>
  <div class="py-3">
    <span class="content--title">{{ content.name }}</span>
    <v-row class="mt-2">
      <v-col cols="6" v-for="(item, index) in content.elements" :key="`${item.id}-${index}`">
        <tool-item :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ToolItem from './ToolItem.vue';
import { IToolContent } from '../../interfaces/index';

@Component({
  components: {
    ToolItem,
  },
})
export default class ToolGroup extends Vue {
  @Prop()
  content!: IToolContent;
}
</script>

<style scoped>
.content--title {
  font-weight: bold;
  font-size: 15px;
}
</style>
