<script>
import Media from "sveltestrap/src/Media.svelte"
</script>



<style>

/* Gradient transparent - color - transparent */

hr.style-one {
    border: 0;
    height: 1px;
    width: 90%;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
}


.az-sd{
  text-align: center;
  width: 100%;
}

</style>


<svelte:head>
	<title>Projects</title>
</svelte:head>

<br>


<Media>
<div class="container py-3">
  <Media left href="https://github.com/ajzdunek/Space_Shooter" target="_blank" rel="noopener noreferrer">
    <Media
      object
      src="./images/space-shooter.png"
      alt="Python Space Shooter" />
  </Media>
  <Media body>
    <Media heading>python_space_shooter</Media>
    Making a Space Shooter with Python and PyGame.
  </Media>
  </div>
</Media>

<hr class="style-one">



<Media>
<div class="container py-3">
  <Media left href="https://www.wastedwish.com/" target="_blank" rel="noopener noreferrer">
    <Media
      object
      src="./images/wasted-wish.png"
      alt="Wasted Wish Website" />
  </Media>
  <Media body>
    <Media heading>Wasted Wish</Media>
  <p>Creating a band website in Jekyll (a static site generator built in Ruby) that mixes a touch of both minimalism and brutalism. <strong>(This repository is marked as private on GitHub)</strong></p>
   
  <p><strong>Nice-to-haves:</strong>Mobile responsiveness</p>
  </Media>
  </div>
</Media>

<hr class="style-one">



<Media>
<div class="container py-3">
  <Media left href="https://www.elementaj.com/" target="_blank" rel="noopener noreferrer">
    <Media
      object
      src="./images/elementaj-website.png"
      alt="Elementaj" />
  </Media>
  <Media body>
    <Media heading>Elementaj</Media>
    Creating a website for my current band Elementaj using Jekyll for its blog post feature, Bootstrap 4.1.3, Songkick tour widget, and MailChimp. <strong>(This repository is marked as private on GitHub)</strong>
  </Media>
  </div>
</Media>

<hr class="style-one">



<Media>
<div class="container py-3">
  <Media left href="https://silversail.net/" target="_blank" rel="noopener noreferrer">
    <Media
      object
      src="./images/silver-sail.png"
      alt="Silver Sail" />
  </Media>
  <Media body>
    <Media heading>Silver Sail</Media>
    Creating a simple static band website using HTML5, CSS, Bootstrap 4.1.3, Bandsintown events widget and for the text effect JavaScript. <strong>(This repository is marked as private on GitHub)</strong>
  </Media>
  </div>
</Media>

<hr class="style-one">



<Media>
<div class="container py-3">
  <Media left href="https://www.azmusicprojects.com/" target="_blank" rel="noopener noreferrer">
    <Media
      object
      src="./images/az-sound.png"
      alt="AZ Sound" />
  </Media>
  <Media body>
    <Media heading>AZ Sound</Media>
    Building a simple and sleek UI using the latest version of Bootstrap 4 combined with CSS to showcase all of the musical projects I've been a part of. <strong>(This repository is marked as private on GitHub)</strong>
  </Media>
  </div>
</Media>

<hr class="style-one">


<Media>
<div class="container py-3">
  <Media left href="https://andrewzdunek.dev/" target="_blank" rel="noopener noreferrer">
    <Media
      object
      src="./images/dev-recruit.png"
      alt="Web Dev Portfolio" />
  </Media>
  <Media body>
    <Media heading>Dev & Recruit</Media>
    A career portfolio built with Flask that combines both my web development and technical recruiting skills. <strong>(This repository is marked as private on GitHub)</strong>
  </Media>
  </div>
</Media>

<hr class="style-one">



<Media>
<div class="container py-3">
  <Media left href="https://music404.com/" target="_blank" rel="noopener noreferrer">
    <Media
      object
      src="./images/music404.png"
      alt="Music404 Blog" />
  </Media>
  <Media body>
    <Media heading>Music404</Media>
    <p>A fully functional independant music blog built with Jekyll, a blog-aware, static site generator written in Ruby. One of the features I'm proud of in this project so far was the ability to add search functionality so you can search for yours or your friends band. 
    It's not the most exciting feature but from a developers perspective it was a good challenge for me to take on.</p>

  <p>Technologies used - HTML5, CSS, Bootstrap 4, JavaScript, Getform.</p>

  The nice-to-haves that I'm working on currently is the mapping details to add more authors.
  </Media>
  </div>
</Media>

<hr class="style-one">



<Media>
<div class="container py-3">
  <Media left href="https://github.com/ajzdunek/Sonic-Pi" target="_blank" rel="noopener noreferrer">
    <Media
      object
      src="./images/sonic-pi-web-logo.png"
      alt="Sonic Pi" />
  </Media>
  <Media body>
    <Media heading>Drum machine beats programmed with Sonic Pi</Media>
    No physical drum machines, synths, keyboards, effects, etc. - just code.
  </Media>
  </div>
</Media>

<hr class="style-one">

<Media>
<div class="container py-3">
  <Media left href="https://distracted-easley-9e2792.netlify.app/" target="_blank" rel="noopener noreferrer">
    <Media
      object
      src="./images/a-to-z-recipe-search.png"
      alt="Sonic Pi" />
  </Media>
  <Media body>
    <Media heading>A to Z Recipe Search</Media>
    Creating a recipes app using React, reactstrap, Bootstrap ver. 4+ and the Edamam Recipe Search API
  </Media>
  </div>
</Media>

<hr class="style-one">


  <div class="az-sd py-3">
              <footer>© 2020 AZ | Software Developement</footer>
        <div class="container py-3 text-center">
              <a href="https://www.linkedin.com/in/azdunek/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in fa-2x mr-2"></i></a>
              <a href="https://github.com/ajzdunek" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x ml-3"></i></a>
              <a href="https://stackoverflow.com/users/9090178/azdunek" target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow fa-2x ml-3"></i></a>
        </div>
  </div> 