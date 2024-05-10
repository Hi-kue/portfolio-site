import flattenColorPallete from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
		'./src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
		'./src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
	],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPallete(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, value]) => [`--color-${key}`, value]) // Example: --color-red-500, --color-blue-500
	);

	addBase({
		":root": newVars,
	});
}
