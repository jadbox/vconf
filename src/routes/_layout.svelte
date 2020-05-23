<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<!-- 
	<Nav {segment}/> 
!-->

<main>
<div class="body-bg">
  <slot {segment} />

  <div class="section">
    <a href="/tables/reception" class="w-button">Help</a>
    <div class="div-block-18">
      <a href="https://www.onvent.at" target="_blank" class="link">Like this platform? Learn more about Onvent now!</a>
    </div>
  </div>
  </div>
</main>
