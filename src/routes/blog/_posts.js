// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Hello World, Hello First Post and Hello Sapper',
		slug: 'first post',
		html: `

		<p>My first post using Sapper</p>

		`
	},

	{
		title: 'Git and Github',
		slug: 'Tips and a Cheat Sheet',
		html: `

		<h4>Getting Started</h4>

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





