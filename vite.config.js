import {defineConfig} from 'vite'


export default defineConfig({
	plugins: [],
	build: {
	  rollupOptions: {
		treeshake: false,
	  },
	},
  });