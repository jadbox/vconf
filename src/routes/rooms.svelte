<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`./agenda.json`)
      .then(r => r.json())
      .then(agendas => {
        return { agendas };
      });
  }
</script>

<script>
  import config from './_config.json';
  import NavBar from '../components/NavBar.svelte';
  export let agendas;
  // export let segment;
</script>

<div>
  <NavBar segment="rooms" {config} />
  <div data-collapse="none" data-animation="default" data-duration="400" role="banner" class="navbar-sub w-nav">
    <div class="container-3 w-container">
      <nav role="navigation" class="sub-menu-copy w-nav-menu">
        <!--<div class="collection-list-wrapper-2 w-dyn-list">
            <div class="collection-list-subnav w-dyn-items">
              <div class="collection-item-6 w-dyn-item">
                <a href="#link" id="nav-link" class="nav-link-sub w-nav-link">link</a>
              </div>
            </div>
            div class="w-dyn-empty">
              <div>No items found.</div>
            </div>
          </div>!-->
      </nav>
      <div class="menu-button-3 w-nav-button">
        <div class="div-block-16">
          <div class="rooms-dropdown-label">Rooms</div>
          <div class="icon-2 w-icon-nav-menu" />
        </div>
      </div>
    </div>
  </div>
  <div class="body-container w-container">
    <div class="div-block-7 w-clearfix">
      <div id="slido" class="vidleft w-clearfix">
        <iframe
          class="video w-video w-embed"
          title="video"
          width="100%"
          style="min-height:420px"
          src="{config.streamVideo}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>
      <div id="slido" class="div-block-10">
        <iframe
          class="html-embed w-embed w-iframe"
          src="https://app.sli.do/event/amylz3jo"
          allowtransparency="true"
          height="100%"
          width="100%"
          style="height:450px;min-height:450px;overflow:scroll;overflow-x:hidden;"
          marginheight="1"
          marginwidth="1"
          seamless="seamless"
          scrolling="yes"
          title="widget" />
      </div>
    </div>
    <div class="collection-list-wrapper-4 w-dyn-list">
      <div class="collection-list-3 agendagrid w-dyn-items w-row">
        {#each agendas as item}
          {#if item.Room === 'startup-stage'}
            <div class="collection-agenda-2 w-dyn-item w-col w-col-6">

              <div class="collection-agenda-item">
                <div data-hover="1" data-delay="0" class="dropdown w-dropdown">
                  <div class="dropdown-toggle w-dropdown-toggle">
                    <div class="dropdownarrow w-icon-dropdown-toggle" />
                    <div class="div-block-11 w-clearfix">
                      <div class="agenda-item-subsection" />
                      <div class="agenda-item-subsection-title" />
                      <div class="agenda-item-subsection roomlabel" />
                    </div>
                    <div class="collection-list-wrapper-3 w-dyn-list">
                      <div class="w-dyn-items">

                        <div class="collection-item-5 w-clearfix w-dyn-item">
                          <div class="div-block-12">{item.Name}</div>
                          <!-- <div class="agenda-item-subsection marginspace">by</div>
                        <div class="agenda-item-subsection"></div>
                        !-->
                        </div>

                      </div>
                    </div>
                  </div>
                  <nav class="dropdown-list w-dropdown-list">
                    <div class="agenda-info-card">
                      <div>
                        <strong>Description</strong>
                      </div>
                      <p class="paragraph-3">{item['Short Description']}</p>
                    </div>
                  </nav>
                </div>
              </div>

            </div>
          {/if}
        {/each}
      </div>
      <!--<div class="w-dyn-empty">
          <div>No items found.</div>
        </div>!-->
    </div>
  </div>
</div>
<div class="body-sponso w-row">
  <div class="w-col w-col-6">
    <div class="text-block-5">This room is sponsored by</div>
  </div>
  <div class="column-5 w-col w-col-6">
    <img src="" alt="" class="image-6" />
  </div>
</div>
<div class="logo-container w-container">
  <img
    src="images/2020-05-14-11.08.36.jpg"
    srcset="images/2020-05-14-11.08.36-p-500.jpeg 500w, images/2020-05-14-11.08.36-p-800.jpeg 800w,
    images/2020-05-14-11.08.36-p-1080.jpeg 1080w, images/2020-05-14-11.08.36-p-1600.jpeg 1600w,
    images/2020-05-14-11.08.36.jpg 1812w"
    sizes="(max-width: 767px) 96vw, (max-width: 991px) 727.9998168945312px, 939.9891967773438px"
    alt=""
    class="sponsorsimg" />
</div>
