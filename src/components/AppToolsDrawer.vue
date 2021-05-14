<template>
  <v-navigation-drawer
    v-model="drawer"
    class="app--drawer pb-3"
    width="310"
    right
    app
    clipped
    permanent
  >
    <v-tabs v-model="tab" grow>
      <v-tab class="capitalize" v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="px-5">
      <v-tab-item key="elements">
        <v-card flat v-for="(content, index) in elementContents" :key="index">
          <tool-group :content="content" />
        </v-card>
      </v-tab-item>
      <v-tab-item key="settings">
        <form>
          <div class="mt-2" v-if="editables.includes('animationClass')">
            <label for="entryEffect">Entry Effect</label>
            <select id="entryEffect" v-model="cssEntryEffect" name="entryEffect">
              <option
                v-for="(item, index) in entryEffects"
                :key="index"
                :value="item.value"
              >
                {{ item.title }}
              </option>
            </select>
          </div>
          <div class="mt-2" v-if="editables.includes('textContent')">
            <label for="textContent">Text</label>
            <textarea
              id="textContent"
              v-model="model.slot.textContent"
              name="textContent"
            ></textarea>
          </div>
          <div class="mt-2" v-if="editables.includes('placeholder')">
            <label for="placeholder">Placeholder</label>
            <input
              id="placeholder"
              v-model="model.attribute.placeholder"
              name="placeholder"
            />
          </div>
          <div class="mt-2" v-if="editables.includes('fontSize')">
            <label for="fontSize">Font Size</label>
            <input
              id="fontSize"
              v-model="model.styles.fontSize"
              name="fontSize"
            />
          </div>
          <div class="mt-2" v-if="editables.includes('position')">
            <label for="position">Position</label>
            <select id="position" name="position">
              <option
                v-for="(item, index) in positionValues"
                :key="index"
                :value="item.value"
              >
                {{ item.title }}
              </option>
            </select>
          </div>
          <div class="mt-2" v-if="editables.includes('direction')">
            <label for="direction">Direction</label>
            <select id="direction" name="direction" v-model="model.styles.direction">
              <option value="ltr">
              ltr
              </option>
              <option value="rtl">
              rtl
              </option>
            </select>
          </div>
          <div class="mt-2" v-if="editables.includes('height')">
            <label for="height">Height</label>
            <input name="height" type="number" />
          </div>
          <div class="mt-2" v-if="editables.includes('width')">
            <label for="width">Width</label>
            <input name="width" type="number" />
          </div>
          <div class="mt-2" v-if="editables.includes('color')">
            <label for="color">Color</label>
            <input name="color" v-model="model.styles.color" type="color" />
          </div>
          <div class="mt-2" v-if="editables.includes('borderColor')">
            <label for="borderColor">Border Color</label>
            <input name="borderColor" v-model="model.styles.borderColor" type="color" />
          </div>
          <div class="mt-2" v-if="editables.includes('backgroundColor')">
            <label for="backgroundColor">Background Color</label>
            <input name="backgroundColor" v-model="model.styles.backgroundColor" type="color" />
          </div>
        </form>
      </v-tab-item>
    </v-tabs-items>
  </v-navigation-drawer>
</template>

<script lang="ts">
import EventBus from '@/app/eventBus';
import { Component, Vue } from 'vue-property-decorator';
import ToolGroup from './elements/ToolGroup.vue';
import { editables } from '../app/defaultPopup';

@Component({
  components: {
    ToolGroup,
  },
})
export default class AppToolsDrawer extends Vue {
  entryEffect = 'fadeInDown';

  get cssEntryEffect(): string {
    return this.entryEffect;
  }

  set cssEntryEffect(newEffect: string) {
    const container = document.getElementById('popup-outer-circle');
    if (container) {
      const index = this.model.attribute.classList.findIndex((item) => item === this.entryEffect);
      console.log(index);
      if (index >= 0) {
        container.classList.remove(this.entryEffect);
        this.model.attribute.classList[index] = newEffect;
        container.classList.add(newEffect);
      } else {
        this.model.attribute.classList.push(newEffect);
      }
      this.entryEffect = newEffect;
    }
  }

  drawer = true;

  items = ['elements', 'settings'];

  entryEffects = [
    {
      title: 'Fade In',
      value: 'fadeIn',
    },

    {
      title: 'fade In Up',
      value: 'fadeInUp',
    },

    {
      title: 'Fade In Down',
      value: 'fadeInDown',
    },

  ]

  positionValues = [
    {
      title: 'None',
      value: 'unset',
    },
    {
      title: 'Relative',
      value: 'relative',
    },
    {
      title: 'Absolute',
      value: 'absolute',
    },
    {
      title: 'Sticky',
      value: 'sticky',
    },
    {
      title: 'Fixed',
      value: 'fixed',
    },
  ];

  elementContents = [
    {
      name: 'Block Elements',
      elements: [
        {
          id: 'div',
          name: 'Div',
          icon: 'mdi-alpha-d-box',
          tag: 'div',
          template: '<div style="">HELLO</div>',
          style: {
            desktop: {
              height: '100px',
              width: '100px',
            },
            mobile: {
              height: '100px',
              width: '100px',
            },
          },
        },
      ],
    },
    {
      name: 'Form Elements',
      elements: [
        {
          id: 'text',
          name: 'Text',
          type: 'text',
          icon: 'mdi-form-textbox',
          tag: 'input',
          hasPlaceholder: true,
        },
        {
          id: 'text',
          name: 'Password',
          type: 'password',
          icon: 'mdi-form-textbox-password',
          tag: 'input',
          hasPlaceholder: true,
        },
        {
          id: 'text',
          name: 'Radio',
          type: 'radio',
          icon: 'mdi-radiobox-marked',
          tag: 'input',
          hasLabel: true,
        },
        {
          id: 'text',
          name: 'Checkbox',
          type: 'checkbox',
          icon: 'mdi-checkbox-marked-outline',
          tag: 'input',
          hasLabel: true,
        },
      ],
    },
  ];

  tab = 0;

  editables: string[] | never[] = []

  model = {
    slot: {
      textContent: '',
    },
    attribute: {
      placholder: '',
      classList: [''],
    },
    styles: {
      backgroundColor: '',
      borderColor: '',
      color: '',
      direction: '',
      fontSize: '',
    },
  };

  created(): void {
    EventBus.$on('currently-editing', (id: string) => {
      this.model = this.$store.state.popupTemplateStyles[id];
      this.tab = 1;
      if (id.includes('text')) {
        this.editables = editables.text;
        return;
      }
      if (id.includes('outer-circle')) {
        this.editables = editables.outerCirlce;
        return;
      }
      if (id.includes('circle')) {
        this.editables = editables.circle;
        return;
      }
      if (id.includes('input')) {
        this.editables = editables.input;
        return;
      }
      if (id.includes('button')) {
        this.editables = editables.button;
      }
    });
  }
}
</script>

<style scoped>
textarea,
select,
input {
  background: #fff !important;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
}
label {
  font-weight: bold;
  font-size: 15px;
}
textarea:focus,
select:focus,
input:focus {
  outline: none;
}
</style>
