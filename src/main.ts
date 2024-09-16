import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    port: 5000
  }
});

export default app;

