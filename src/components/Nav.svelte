<script>
	export let segment;

	import Navbar from 'sveltestrap/src/Navbar.svelte';
	import NavbarBrand from 'sveltestrap/src/NavbarBrand.svelte';
	import NavbarToggler from 'sveltestrap/src/NavbarToggler.svelte';
	import Collapse from 'sveltestrap/src/Collapse.svelte';
	import Nav from 'sveltestrap/src/Nav.svelte';
	import NavLink from 'sveltestrap/src/NavLink.svelte';
	import NavItem from 'sveltestrap/src/NavItem.svelte';


	
let isOpen = false;

function handleUpdate(event) {
isOpen = event.detail.isOpen;
  }
  
</script>

<style>




</style> 


<!-- Original NavBar that came with Svelte boilerplate -->
<!-- Keeping this as refernce -->

<!-- <nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul>
</nav> -->


<Navbar color="light" light expand="md">
<div class="container">
<NavbarBrand aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</NavbarBrand>

  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="mr-auto" navbar>
      <NavItem>
        <NavLink aria-current="{segment === 'about' ? 'page' : undefined}" href="projects">Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="./index">Blog</NavLink>
      </NavItem>
	     <NavItem>
        <NavLink rel=prefetch aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</NavLink>
      </NavItem>
    </Nav>
  </Collapse>

</div>
</Navbar>


