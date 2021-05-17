import EventBus from '@/app/eventBus';
import interact from 'interactjs';
import { ICustomEvent } from '../interfaces/index';

function dragMoveListener(event: ICustomEvent) {
  const target = event.target as HTMLElement;

  if (target) {
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute('data-x') || '') || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y') || '') || 0) + event.dy;

    // translate the element
    // target.style.transform = `translate(${x}px, ${y}px)`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    // update the position attributes
    target.setAttribute('data-x', `${x}`);
    target.setAttribute('data-y', `${y}`);
  }
}

// target elements with the "draggable" class
interact('.draggable').draggable({
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true,
    }),
  ],
  // enable autoScroll
  autoScroll: true,

  listeners: {
    // call this function on every dragmove event
    move: dragMoveListener,

    // call this function on every dragend event
    end(event) {
      EventBus.$emit('element-moved', event.target.id);
    },
  },
});

window.dragMoveListener = dragMoveListener;
