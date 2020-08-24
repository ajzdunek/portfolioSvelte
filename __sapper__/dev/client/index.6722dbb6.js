import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.cc362c5c.js';

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
	let div5;
	let div4;
	let div3;
	let h10;
	let t3;
	let t4;
	let h11;
	let t5;
	let t6;
	let p;
	let t7;
	let t8;
	let div2;
	let footer;
	let t9;
	let t10;
	let div1;
	let a0;
	let i0;
	let t11;
	let a1;
	let i1;
	let t12;
	let a2;
	let i2;

	const block = {
		c: function create() {
			t0 = space();
			header = element("header");
			div0 = element("div");
			t1 = space();
			video = element("video");
			source = element("source");
			t2 = space();
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			h10 = element("h1");
			t3 = text("Andrew Zdunek");
			t4 = space();
			h11 = element("h1");
			t5 = text("Software Developer");
			t6 = space();
			p = element("p");
			t7 = text("A software developer turned technical recruiter who's pivoting back into the software development space.\n              From the time I produced my first \"Hello World\" to creating band/artist pages with HTML, CSS and later diving into programming languages \n              such as JavaScript and Ruby I knew that I picked the right industry. It has helped me to be both creative and solve problems.");
			t8 = space();
			div2 = element("div");
			footer = element("footer");
			t9 = text("AZ | Software Developement");
			t10 = space();
			div1 = element("div");
			a0 = element("a");
			i0 = element("i");
			t11 = space();
			a1 = element("a");
			i1 = element("i");
			t12 = space();
			a2 = element("a");
			i2 = element("i");
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
			div5 = claim_element(header_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h10 = claim_element(div3_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t3 = claim_text(h10_nodes, "Andrew Zdunek");
			h10_nodes.forEach(detach_dev);
			t4 = claim_space(div3_nodes);
			h11 = claim_element(div3_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t5 = claim_text(h11_nodes, "Software Developer");
			h11_nodes.forEach(detach_dev);
			t6 = claim_space(div3_nodes);
			p = claim_element(div3_nodes, "P", { class: true });
			var p_nodes = children(p);
			t7 = claim_text(p_nodes, "A software developer turned technical recruiter who's pivoting back into the software development space.\n              From the time I produced my first \"Hello World\" to creating band/artist pages with HTML, CSS and later diving into programming languages \n              such as JavaScript and Ruby I knew that I picked the right industry. It has helped me to be both creative and solve problems.");
			p_nodes.forEach(detach_dev);
			t8 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			footer = claim_element(div2_nodes, "FOOTER", {});
			var footer_nodes = children(footer);
			t9 = claim_text(footer_nodes, "AZ | Software Developement");
			footer_nodes.forEach(detach_dev);
			t10 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a0 = claim_element(div1_nodes, "A", { href: true, target: true, rel: true });
			var a0_nodes = children(a0);
			i0 = claim_element(a0_nodes, "I", { class: true });
			children(i0).forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			t11 = claim_space(div1_nodes);
			a1 = claim_element(div1_nodes, "A", { href: true, target: true, rel: true });
			var a1_nodes = children(a1);
			i1 = claim_element(a1_nodes, "I", { class: true });
			children(i1).forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			t12 = claim_space(div1_nodes);
			a2 = claim_element(div1_nodes, "A", { href: true, target: true, rel: true });
			var a2_nodes = children(a2);
			i2 = claim_element(a2_nodes, "I", { class: true });
			children(i2).forEach(detach_dev);
			a2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Andrew Zdunek";
			attr_dev(div0, "class", "overlay svelte-2q6k3t");
			add_location(div0, file, 78, 6, 1101);
			if (source.src !== (source_src_value = "coding-video.mp4")) attr_dev(source, "src", source_src_value);
			attr_dev(source, "type", "video/mp4");
			add_location(source, file, 81, 8, 1225);
			video.playsInline = "playsinline";
			video.autoplay = "autoplay";
			video.muted = "muted";
			video.loop = "loop";
			attr_dev(video, "class", "svelte-2q6k3t");
			add_location(video, file, 80, 6, 1136);
			attr_dev(h10, "class", "display-3 az svelte-2q6k3t");
			add_location(h10, file, 87, 12, 1448);
			attr_dev(h11, "class", "display-6 az svelte-2q6k3t");
			add_location(h11, file, 88, 12, 1504);
			attr_dev(p, "class", "py-5 about-me svelte-2q6k3t");
			add_location(p, file, 89, 12, 1565);
			add_location(footer, file, 95, 14, 2039);
			attr_dev(i0, "class", "fab fa-linkedin-in fa-2x mr-2");
			add_location(i0, file, 98, 103, 2242);
			attr_dev(a0, "href", "https://www.linkedin.com/in/azdunek/");
			attr_dev(a0, "target", "_blank");
			attr_dev(a0, "rel", "noopener noreferrer");
			add_location(a0, file, 98, 14, 2153);
			attr_dev(i1, "class", "fab fa-github fa-2x ml-3");
			add_location(i1, file, 99, 94, 2386);
			attr_dev(a1, "href", "https://github.com/ajzdunek");
			attr_dev(a1, "target", "_blank");
			attr_dev(a1, "rel", "noopener noreferrer");
			add_location(a1, file, 99, 14, 2306);
			attr_dev(i2, "class", "fab fa-stack-overflow fa-2x ml-3");
			add_location(i2, file, 100, 114, 2545);
			attr_dev(a2, "href", "https://stackoverflow.com/users/9090178/azdunek");
			attr_dev(a2, "target", "_blank");
			attr_dev(a2, "rel", "noopener noreferrer");
			add_location(a2, file, 100, 14, 2445);
			attr_dev(div1, "class", "container py-3 text-center svelte-2q6k3t");
			add_location(div1, file, 97, 14, 2098);
			attr_dev(div2, "class", "az-sd svelte-2q6k3t");
			add_location(div2, file, 94, 12, 2005);
			attr_dev(div3, "class", "w-100 text-white");
			add_location(div3, file, 86, 10, 1405);
			attr_dev(div4, "class", "d-flex h-100 text-center align-items-center");
			add_location(div4, file, 85, 8, 1337);
			attr_dev(div5, "class", "container h-100 svelte-2q6k3t");
			add_location(div5, file, 84, 6, 1299);
			attr_dev(header, "class", "svelte-2q6k3t");
			add_location(header, file, 77, 4, 1086);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, header, anchor);
			append_dev(header, div0);
			append_dev(header, t1);
			append_dev(header, video);
			append_dev(video, source);
			append_dev(header, t2);
			append_dev(header, div5);
			append_dev(div5, div4);
			append_dev(div4, div3);
			append_dev(div3, h10);
			append_dev(h10, t3);
			append_dev(div3, t4);
			append_dev(div3, h11);
			append_dev(h11, t5);
			append_dev(div3, t6);
			append_dev(div3, p);
			append_dev(p, t7);
			append_dev(div3, t8);
			append_dev(div3, div2);
			append_dev(div2, footer);
			append_dev(footer, t9);
			append_dev(div2, t10);
			append_dev(div2, div1);
			append_dev(div1, a0);
			append_dev(a0, i0);
			append_dev(div1, t11);
			append_dev(div1, a1);
			append_dev(a1, i1);
			append_dev(div1, t12);
			append_dev(div1, a2);
			append_dev(a2, i2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjcyMmRiYjYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
