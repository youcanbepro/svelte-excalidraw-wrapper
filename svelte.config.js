import {sveltePreprocess} from 'svelte-preprocess';

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    babel: {
     "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.22"
      }
    ],
     ["@babel/preset-react", {"runtime": "automatic"}]
  ]
    },
  }),
}



