// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.



const posts = [
	{
		title: 'A Brief Intro',
		slug: 'first post',
		html: `


		<img style="border-radius: 1%;"src="images/IMG_6603.jpeg" class="img-fluid" alt="Responsive image">

		<br>
		<br>

		<p class="short-bio">My name is Andrew and I am a Software Developer. I am originally from Chicago and now live in the UK with my wife.
		Besides coding I play music and I like to collect vintage drum machines.</p>
		
		<p>Happy to talk about all things code so feel to reach out to me through the contact page or lets connect on LinkedIn.</p>

		<br>
		


		




		`
	},

	{
		title: 'Git and Github',
		slug: 'Tips and a Cheat Sheet',
		html: `

		<h6>Coming Soon</h6>




 	`
	},

	// {
	// 	title: '',
	// 	slug: '',
	// 	html: `

	// 	`
	// },

	// {
	// 	title: '',
	// 	slug: '',
	// 	html: `
			

		
	// 	`
	// },

	// {
	// 	title: '',
	// 	slug: '',
	// 	html: `
			
	// 	`
	// }
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;





