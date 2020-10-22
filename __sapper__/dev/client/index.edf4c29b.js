import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.9886641d.js';

/* src/routes/index.svelte generated by Svelte v3.24.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let header;
	let div0;
	let t1;
	let video;
	let source;
	let source_src_value;
	let t2;
	let div6;
	let div5;
	let div4;
	let div1;
	let h10;
	let t3;
	let t4;
	let h11;
	let t5;
	let t6;
	let p;
	let t7;
	let t8;
	let div3;
	let footer;
	let t9;
	let t10;
	let div2;
	let a0;
	let i0;
	let t11;
	let a1;
	let i1;
	let t12;
	let a2;
	let i2;
	let t13;
	let a3;
	let i3;

	const block = {
		c: function create() {
			t0 = space();
			header = element("header");
			div0 = element("div");
			t1 = space();
			video = element("video");
			source = element("source");
			t2 = space();
			div6 = element("div");
			div5 = element("div");
			div4 = element("div");
			div1 = element("div");
			h10 = element("h1");
			t3 = text("Andrew Zdunek");
			t4 = space();
			h11 = element("h1");
			t5 = text("Software Developer");
			t6 = space();
			p = element("p");
			t7 = text("Whether I'm creating simple pages with HTML/CSS or diving into a more complex project with JavaScript or Python, I appreciate that the tech space allows me to both be creative and solve problems. I've worked with small startups and Fortune 500 companies in the U.S. and New Zealand.");
			t8 = space();
			div3 = element("div");
			footer = element("footer");
			t9 = text("© 2020 AZ | Software Developement");
			t10 = space();
			div2 = element("div");
			a0 = element("a");
			i0 = element("i");
			t11 = space();
			a1 = element("a");
			i1 = element("i");
			t12 = space();
			a2 = element("a");
			i2 = element("i");
			t13 = space();
			a3 = element("a");
			i3 = element("i");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1kcjlvu\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			header = claim_element(nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			div0 = claim_element(header_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t1 = claim_space(header_nodes);

			video = claim_element(header_nodes, "VIDEO", {
				playsinline: true,
				autoplay: true,
				muted: true,
				loop: true,
				class: true
			});

			var video_nodes = children(video);
			source = claim_element(video_nodes, "SOURCE", { src: true, type: true });
			video_nodes.forEach(detach_dev);
			t2 = claim_space(header_nodes);
			div6 = claim_element(header_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h10 = claim_element(div1_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t3 = claim_text(h10_nodes, "Andrew Zdunek");
			h10_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			h11 = claim_element(div1_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t5 = claim_text(h11_nodes, "Software Developer");
			h11_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t7 = claim_text(p_nodes, "Whether I'm creating simple pages with HTML/CSS or diving into a more complex project with JavaScript or Python, I appreciate that the tech space allows me to both be creative and solve problems. I've worked with small startups and Fortune 500 companies in the U.S. and New Zealand.");
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t8 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			footer = claim_element(div3_nodes, "FOOTER", {});
			var footer_nodes = children(footer);
			t9 = claim_text(footer_nodes, "© 2020 AZ | Software Developement");
			footer_nodes.forEach(detach_dev);
			t10 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a0 = claim_element(div2_nodes, "A", { href: true, target: true, rel: true });
			var a0_nodes = children(a0);
			i0 = claim_element(a0_nodes, "I", { class: true });
			children(i0).forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			t11 = claim_space(div2_nodes);
			a1 = claim_element(div2_nodes, "A", { href: true, target: true, rel: true });
			var a1_nodes = children(a1);
			i1 = claim_element(a1_nodes, "I", { class: true });
			children(i1).forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			t12 = claim_space(div2_nodes);
			a2 = claim_element(div2_nodes, "A", { href: true, target: true, rel: true });
			var a2_nodes = children(a2);
			i2 = claim_element(a2_nodes, "I", { class: true });
			children(i2).forEach(detach_dev);
			a2_nodes.forEach(detach_dev);
			t13 = claim_space(div2_nodes);
			a3 = claim_element(div2_nodes, "A", { href: true, target: true, rel: true });
			var a3_nodes = children(a3);
			i3 = claim_element(a3_nodes, "I", { class: true });
			children(i3).forEach(detach_dev);
			a3_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Andrew Zdunek";
			attr_dev(div0, "class", "overlay svelte-18zg8uf");
			add_location(div0, file, 111, 6, 1528);
			if (source.src !== (source_src_value = "coding-video.mp4")) attr_dev(source, "src", source_src_value);
			attr_dev(source, "type", "video/mp4");
			add_location(source, file, 114, 8, 1652);
			video.playsInline = "playsinline";
			video.autoplay = "autoplay";
			video.muted = "muted";
			video.loop = "loop";
			attr_dev(video, "class", "svelte-18zg8uf");
			add_location(video, file, 113, 6, 1563);
			attr_dev(h10, "class", "display-3 me svelte-18zg8uf");
			add_location(h10, file, 121, 12, 1913);
			attr_dev(h11, "class", "display-6 occupation svelte-18zg8uf");
			add_location(h11, file, 122, 12, 1969);
			attr_dev(p, "class", "py-5 about-me svelte-18zg8uf");
			add_location(p, file, 123, 12, 2038);
			attr_dev(div1, "class", "whoami-mobile svelte-18zg8uf");
			add_location(div1, file, 120, 10, 1873);
			add_location(footer, file, 127, 14, 2416);
			attr_dev(i0, "class", "fab fa-linkedin-in fa-2x mr-2");
			add_location(i0, file, 131, 103, 2627);
			attr_dev(a0, "href", "https://www.linkedin.com/in/azdunek/");
			attr_dev(a0, "target", "_blank");
			attr_dev(a0, "rel", "noopener noreferrer");
			add_location(a0, file, 131, 14, 2538);
			attr_dev(i1, "class", "fab fa-twitter fa-2x ml-2");
			add_location(i1, file, 132, 99, 2776);
			attr_dev(a1, "href", "https://twitter.com/ZdunekAndrew");
			attr_dev(a1, "target", "_blank");
			attr_dev(a1, "rel", "noopener noreferrer");
			add_location(a1, file, 132, 14, 2691);
			attr_dev(i2, "class", "fab fa-github index-fa-github fa-2x ml-3 svelte-18zg8uf");
			add_location(i2, file, 133, 94, 2916);
			attr_dev(a2, "href", "https://github.com/ajzdunek");
			attr_dev(a2, "target", "_blank");
			attr_dev(a2, "rel", "noopener noreferrer");
			add_location(a2, file, 133, 14, 2836);
			attr_dev(i3, "class", "fab fa-stack-overflow fa-2x ml-3");
			add_location(i3, file, 134, 114, 3091);
			attr_dev(a3, "href", "https://stackoverflow.com/users/9090178/azdunek");
			attr_dev(a3, "target", "_blank");
			attr_dev(a3, "rel", "noopener noreferrer");
			add_location(a3, file, 134, 14, 2991);
			attr_dev(div2, "class", "container py-3 text-center svelte-18zg8uf");
			add_location(div2, file, 130, 14, 2483);
			attr_dev(div3, "class", "az-sd svelte-18zg8uf");
			add_location(div3, file, 126, 12, 2382);
			attr_dev(div4, "class", "w-100 text-white");
			add_location(div4, file, 119, 10, 1832);
			attr_dev(div5, "class", "d-flex h-100 text-center align-items-center");
			add_location(div5, file, 118, 8, 1764);
			attr_dev(div6, "class", "container h-100 svelte-18zg8uf");
			add_location(div6, file, 117, 6, 1726);
			attr_dev(header, "class", "svelte-18zg8uf");
			add_location(header, file, 110, 4, 1513);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, header, anchor);
			append_dev(header, div0);
			append_dev(header, t1);
			append_dev(header, video);
			append_dev(video, source);
			append_dev(header, t2);
			append_dev(header, div6);
			append_dev(div6, div5);
			append_dev(div5, div4);
			append_dev(div4, div1);
			append_dev(div1, h10);
			append_dev(h10, t3);
			append_dev(div1, t4);
			append_dev(div1, h11);
			append_dev(h11, t5);
			append_dev(div1, t6);
			append_dev(div1, p);
			append_dev(p, t7);
			append_dev(div4, t8);
			append_dev(div4, div3);
			append_dev(div3, footer);
			append_dev(footer, t9);
			append_dev(div3, t10);
			append_dev(div3, div2);
			append_dev(div2, a0);
			append_dev(a0, i0);
			append_dev(div2, t11);
			append_dev(div2, a1);
			append_dev(a1, i1);
			append_dev(div2, t12);
			append_dev(div2, a2);
			append_dev(a2, i2);
			append_dev(div2, t13);
			append_dev(div2, a3);
			append_dev(a3, i3);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(header);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWRmNGMyOWIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
