 <script>
  import { onMount } from 'svelte';
  import ReactDOM from 'react-dom';
  import { Excalidraw } from '@excalidraw/excalidraw';
  
  let container;

  onMount(() => {
    ReactDOM.render(<Excalidraw />, container);
  });
</script>

<div bind:this={container}></div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>