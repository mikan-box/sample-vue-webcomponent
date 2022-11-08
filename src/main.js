import { defineCustomElement } from 'vue'

/* Counter Component */
import Counter from './components/counter.ce.vue'
customElements.define('wc-counter', defineCustomElement(Counter))


/* Button Component */
import Button from './components/button.ce.vue'
customElements.define('wc-button', defineCustomElement(Button))