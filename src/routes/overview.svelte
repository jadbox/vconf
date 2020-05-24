<script>
  import config from './_config.json';
  import NavBar from '../components/NavBar.svelte';

  export let agendas;
  // export let segment;
</script>

<NavBar segment="overview" {config} />
<div class="body-container">
  <div class="headline-container2 w-container">
    <div class="video-block">
      <div
        style="padding-top:56.17021276595745%"
        id="w-node-0978a16a8c6d-514291e6"
        class="w-embed-youtubevideo youtube">
        <iframe
          src={config.overviewVideo}
          frameborder="0"
          style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto"
          allow="autoplay; encrypted-media"
          allowfullscreen=""
          title="video" />
      </div>
    </div>
    <div>
      <h1 class="heading-2">
        Agenda
        <br />
      </h1>
      <div class="w-row">
        {#each ['startup-stage', 'startup-stage', 'startup-stage', 'startup-stage'] as sectionName}
          <div class="w-col w-col-6">
            <div>
              <div class="w-dyn-list">
                <div class="w-dyn-items">
                  <div class="w-dyn-item">
                    <a href="#link" class="link-block-4 w-inline-block w-clearfix">
                      <h1 class="heading-4-link">title</h1>
                    </a>
                  </div>
                </div>
                <!--<div class="w-dyn-empty">
                <div>No items found.</div>
              </div>!-->
              </div>
              <div class="w-dyn-list">
                <div class="agendagrid w-dyn-items">
                  {#each agendas as item}
                    {#if item.Room === 'startup-stage'}
                      <div class="collection-item-2 w-dyn-item">
                        <div class="collection-agenda-item">
                          <div data-hover="1" data-delay="0" class="dropdown w-dropdown">
                            <div class="dropdown-toggle w-dropdown-toggle">
                              <div class="dropdownarrow w-icon-dropdown-toggle" />
                              <div class="div-block-11 w-clearfix">
                                <div class="agenda-item-subsection" />
                                <div class="agenda-item-subsection-title">{item.Name}</div>
                                <div class="agenda-item-subsection roomlabel" />
                              </div>
                            </div>
                            <nav class="dropdown-list w-dropdown-list">
                              <div class="agenda-info-card">
                                <div>
                                  <strong>Description</strong>
                                </div>
                                <p class="paragraph-3" />
                              </div>
                            </nav>
                          </div>
                        </div>
                      </div>
                    {/if}
                  {/each}
                </div>
                <!--<div class="w-dyn-empty">
              <div>No sessions</div>
            </div>!-->
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <h1 class="heading-2">
      Reception
      <br />
    </h1>
    <div>
      <div class="collection-list-wrapper-6 w-dyn-list">
        <div class="collection-list-4 w-dyn-items">
          <div class="paper paperindividual reception w-clearfix w-dyn-item">
            <a href="#link" class="link-block-ind-image receptionimage w-inline-block">
              <img width="150" src="" alt="" class="person-image" />
              <div class="button-old buttonlink">
                <div class="paragraph-6">Chat Now</div>
              </div>
            </a>
            <div class="div-block-8">
              <div class="text-block-2" />
              <div class="text-block-3" />
              <div class="text-block-4" />
              <a href="#link" class="chat-now-button-overvie w-button">Chat Now</a>
            </div>
          </div>
        </div>
        <!--<div class="w-dyn-empty">
          <div>No items found.</div>
        </div>!-->
      </div>
    </div>
    <h1 class="heading-2">
      Sponsors
      <br />
    </h1>
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
</div>
