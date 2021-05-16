<template>
  <div id="editor">
    <div
      :class="popupTemplate['popup-outer-circle'].attribute.classList"
      :data-element="popupTemplate['popup-outer-circle'].uniqueKey"
      data-x="194.40005493164062"
      data-y="90.39997863769531"
      id="popup-outer-circle"
      :style="styleObjToCss('popup-outer-circle')"
      @focusout="deactivateElement"
      @click.stop="editElement"
      tabindex="-1"
    >
      <div
        class="draggable"
        data-element="div"
        data-x="5.5999755859375"
        data-y="5.600006103515625"
        id="popup-inner-circle"
        :style="styleObjToCss('popup-inner-circle')"
        @focusout="deactivateElement"
        @click.stop="editElement"
        tabindex="-1"
      >
        <p
          class="popup-paragraph draggable"
          data-element="p"
          data-x="0"
          data-y="92.80003356933594"
          id="popup-text-1"
          tabindex="-1"
          :style="styleObjToCss('popup-text-1')"
          v-html="popupTemplate['popup-text-1'].slot.textContent"
          @focusout="deactivateElement"
          @click.stop="editElement"
        ></p>
        <div
          class="star draggable"
          id="popup-star-1"
          v-html="popupTemplate['popup-star-1'].slot.textContent"
          :style="styleObjToCss('popup-star-1')"
          @focusout="deactivateElement"
          @click.stop="editElement"
        ></div>
        <div
          class="star draggable"
          id="popup-star-2"
          v-html="popupTemplate['popup-star-2'].slot.textContent"
          :style="styleObjToCss('popup-star-2')"
          @focusout="deactivateElement"
          @click.stop="editElement"
        ></div>
        <div
          class="star draggable"
          id="popup-star-3"
          v-html="popupTemplate['popup-star-3'].slot.textContent"
          :style="styleObjToCss('popup-star-3')"
          @focusout="deactivateElement"
          @click.stop="editElement"
        ></div>
        <input
          class="popup-input draggable"
          :placeholder="popupTemplate['popup-input-1'].attribute.placeholder"
          data-element="input"
          data-x="8.041249920358155"
          data-y="30.586721111764575"
          id="popup-input-1"
          :style="styleObjToCss('popup-input-1')"
          @focusout="deactivateElement"
          @click.stop="editElement"
        />
        <button
          id="popup-button"
          class="popup-button draggable"
          data-x="8.041249920358155"
          data-y="30.586721111764575"
          :style="styleObjToCss('popup-button')"
          v-html="popupTemplate['popup-button'].slot.textContent"
          @focusout="deactivateElement"
          @click.stop="editElement"
        ></button>
        <p
          class="popup-paragraph draggable"
          data-element="p"
          data-x="0"
          data-y="92.80003356933594"
          id="popup-text-2"
          tabindex="-1"
          :style="styleObjToCss('popup-text-2')"
          v-html="popupTemplate['popup-text-2'].slot.textContent"
          @focusout="deactivateElement"
          @click.stop="editElement"
        ></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import styleToCss from 'style-object-to-css-string';
import EventBus from '@/app/eventBus';
import { ICustomEvent } from '@/interfaces';
import DefaultPopup from '../components/commons/popups/Default/Default.vue';

@Component({
  components: {
    DefaultPopup,
  },
  created() {
    EventBus.$on('element-moved', (id: string) => {
      const style = document.getElementById(id)?.style as
        | Record<string, string>
        | undefined;
      const editedProperty = 'transform';

      const newStyle = {
        edited: editedProperty,
        value: style?.[editedProperty] || style?.transform,
      };
      this.$store.dispatch('UpdatePopUpTemplate', { id, newStyle });
    });
  },
})
export default class Home extends Vue {
  @Getter
  popupTemplate!: Record<string, Record<string, unknown>>;

  styleObjToCss(key: string): string {
    return styleToCss(this.popupTemplate[key].styles);
  }

  $(el: string): HTMLElement | null {
    return document.getElementById(el);
  }

  editElement(ev: ICustomEvent): void {
    const element = ev.target as HTMLElement;
    const el = this.$(element.id);
    if (el) {
      el.focus();
      el.classList.add('focused-element');
      EventBus.$emit('currently-editing', el.id);
    }
  }

  deactivateElement(ev: Event): void {
    const element = ev.target as HTMLElement;
    const el = this.$(element.id);
    if (el) {
      el.classList.remove('focused-element');
    }
  }
}
</script>

<style>
#editor {
  position: relative;
  height: 100%;
}
@import url(../assets/css/_popup_control.css);
@import url(../assets/css/_animation.css);
</style>
