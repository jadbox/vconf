<script>
  export let segment;	
  
</script>
			
<style>
			[aria-current] {
        background-color: #ff745a;
        color: #ffffff;
      }
</style>
<div
  data-collapse="small"
  data-animation="default"
  data-duration="300"
  role="banner"
  class="navbar site-navigation w-nav">
  <img src="images/google-logo.png" width="113" alt="" class="onvent-logo" />
  <div class="navbar-container w-container">
    <a href="overview" class="w-inline-block w--current">
      <h1>COLLAB LAND</h1>
    </a>
    <div class="menu-button w-nav-button">
      <div class="menu-button-icon w-icon-nav-menu" />
    </div>
    <nav role="navigation" class="nav-menu w-nav-menu">
      <a href="overview" id="nav-link" aria-current='{segment === "overview" ? "page" : undefined}' class="nav-link nav-left w-nav-link">Overview</a>
      <a href="rooms" id="nav-link nav-link" aria-current='{segment === "rooms" ? "page" : undefined}' class="nav-link nav-link-right nav-link-right w-nav-link">Streams</a>
      <!--<a href="exhibition" id="nav-link" class="nav-link w-nav-link">Exhibition</a>
      <a href="networking" id="nav-link" class="nav-link nav-link-right nav-link-right w-nav-link">Socializing</a>
      !-->
    </nav>
  </div>
</div>