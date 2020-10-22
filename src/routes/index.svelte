<script>
// Nothing here at the moment.
</script>


<style>
header {
  position: relative;
  background-color: black;
  height: 100vh; 
  min-height: 25rem;
  width: 100%; 
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  width: 100%;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
  
}


header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

.me, .occupation{
 letter-spacing: 10px;
 font-weight: 100 !important

}

.about-me{
  letter-spacing: 2px;
  font-weight: 200;
}

.az-sd{
  position: absolute;
  bottom: 20px;
  text-align: center;
  width: 100%;
}

.index-fa-github{
 color: white;
}




/* iPhone 5/SE */
  @media (max-width: 320px) { 
    .whoami-mobile{
     position: absolute;
    bottom: 70px;
    font-size: 12px;
		} 
    .me{
      font-size: 40px;
    }
    .occupation{
      font-size: 25px;
    }
  }

  /* Small devices (landscape phones, 576px and up) */

@media (max-width: 576px) { 
    .me{
    font-size: 50px;
    padding-top: 5px;
		} 
  }



</style>

<!-- HTML -->


<svelte:head>
	<title>Andrew Zdunek</title>
</svelte:head>


    <header>
      <div class="overlay"></div>

      <video  playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="coding-video.mp4" type="video/mp4">
      </video>
	  
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
          <div class="whoami-mobile">
            <h1 class="display-3 me">Andrew Zdunek</h1>
            <h1 class="display-6 occupation">Software Developer</h1>
            <p class="py-5 about-me">Whether I'm creating simple pages with HTML/CSS or diving into a more complex project with JavaScript or Python, I appreciate that the tech space allows me to both be creative and solve problems. I've worked with small startups and Fortune 500 companies in the U.S. and New Zealand.</p>
            </div>

            <div class="az-sd">
              <footer>© 2020 AZ | Software Developement</footer>


              <div class="container py-3 text-center">
              <a href="https://www.linkedin.com/in/azdunek/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in fa-2x mr-2"></i></a>
              <a href="https://twitter.com/ZdunekAndrew" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x ml-2"></i></a>
              <a href="https://github.com/ajzdunek" target="_blank" rel="noopener noreferrer"><i class="fab fa-github index-fa-github fa-2x ml-3"></i></a>
              <a href="https://stackoverflow.com/users/9090178/azdunek" target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow fa-2x ml-3"></i></a>
              </div>
            </div>

            </div>
          </div>
      </header>






<!-- HTML -->



