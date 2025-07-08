// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

import mdx from '@astrojs/mdx';

import rehypePrettyCode from 'rehype-pretty-code';

import { transformerCopyButton } from '@rehype-pretty/transformers' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
	markdown: {
		syntaxHighlight: false,
		rehypePlugins: [[rehypePrettyCode,{
			// theme: {
			// 	dark: "github-dark-default",
			// 	light: "github-light-default",
			// },
			keepBackground: false,
			// bypassInlineCode: false, // Skip inline code highlighting
			// defaultLang: {
			// 	block: "plaintext",
			// 	inline: "plaintext",
			// },
			transformers: [
            	transformerCopyButton({
					// visibility: 'hover',
					// feedbackDuration: 3_500,
				}),
			],
		}]],
	},
	integrations: [tailwind(), icon(), mdx(),],
	adapter: netlify(),
	output: "server",
});