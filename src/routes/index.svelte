<script type="text/javascript">
  import config from './_config.json';

  import { onMount } from 'svelte';
  onMount(() => {
    var document = window.document;
    // Set the date we're counting down to
    var countDownDate = new Date('Jun 2, 2020 09:00:00').getTime();
    function update() {
      // Get today's date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Display the result in the element with id="demo"
      document.getElementById('subline2').innerHTML =
        days + 'days ' + hours + 'hr ' + minutes + 'min ' + seconds + 'sec';
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('subline2').innerHTML = 'LIVE';
      }
    }
    // Update the count down every 1 second
    var x = setInterval(update, 1000);
    update();
  });
</script>

<svelte:head>
  <title>{config.name}</title>
</svelte:head>

<div class="header-background">
  <div class="headline-container w-container">
    <img
      src="images/IMGBIN_entrepreneurship-avenue-startup-company-4gamechangers-festival-2018-organization-png_u7J8HQD3.png"
      srcset="images/IMGBIN_entrepreneurship-avenue-startup-company-4gamechangers-festival-2018-organization-png_u7J8HQD3-p-500.png
      500w,
      images/IMGBIN_entrepreneurship-avenue-startup-company-4gamechangers-festival-2018-organization-png_u7J8HQD3.png
      768w"
      sizes="100vw"
      alt=""
      class="image" />
    <div class="div-block">
      <h6 class="heading-2">THE CONFERENCE FOR ENTREPRENEURS</h6>
      <h1 id="headline" class="heading">{config.name}</h1>
      <h5 id="subline" class="subhead-splash">
        Tuesday, JunE 2nd, 2020
        <br />
        16:00 - 20:00
      </h5>
      <h5 id="subline2" class="subhead-splash countdown countdowntitle">Starts in:</h5>
      <h5 id="subline2" class="subhead-splash countdown">15 days</h5>
    </div>
    <div />
    <a href="overview" class="button-2 w-button">Enter Conference</a>
  </div>
</div>
<div class="body-container-splash">
  <div class="div-block-2">
    <div class="w-container">
      <h1 class="heading-3">The Conference</h1>
      <p class="paragraph">
        At the Conference, renowned founders and investors from various industries will come together to inspire, help
        and motivate students from diverse academic backgrounds to join the startup scene. They will share their
        experiences and insights during keynotes, panel discussions, breakout sessions and networking events.
      </p>
    </div>
  </div>
  <div class="div-block-3">
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
</div>

<!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
