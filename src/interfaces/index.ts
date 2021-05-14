export interface IToolItem {
  id: string;
  name: string;
  type?: string;
  icon?: string;
  tag: string;
  hasLabel?: boolean;
  hasPlaceholder?: boolean;
}

export interface IToolContent {
  name: string;
  elements: IToolItem[];
}

export interface IEventTarget extends EventTarget {
  id: string;
}

export interface ICustomEvent extends Event {
  dx: number;
  dy: number;
  target: IEventTarget;
}

export interface ISavedElement {
  styles: Record<string, unknown>;
  attribute?: Record<string, unknown>;
  slot?: Record<string, unknown>;
}

export interface ISavedTemplate {
  [key: string]: ISavedElement;
}
