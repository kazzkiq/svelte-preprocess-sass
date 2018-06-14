# svelte-preprocess-sass
<!--
[![CircleCI](https://circleci.com/gh/ls-age/svelte-preprocess-sass.svg?style=svg)](https://circleci.com/gh/ls-age/svelte-preprocess-sass)
[![codecov](https://codecov.io/gh/ls-age/svelte-preprocess-sass/branch/master/graph/badge.svg)](https://codecov.io/gh/ls-age/svelte-preprocess-sass)
[![Greenkeeper badge](https://badges.greenkeeper.io/ls-age/svelte-preprocess-sass.svg)](https://greenkeeper.io/)
-->

> Svelte preprocessor for [scss (SASS)](http://sass-lang.com)

## Installation

```bash
npm install --save-dev @kazzkiq/svelte-preprocess-scss node-sass
```

## Usage

**Using rollup-plugin-svelte**

```javascript
// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import { scss } from '@kazzkiq/svelte-preprocess-scss';
...

export default {
  ...
  plugins: [
    ...
    svelte({
      preprocess: {
        style: scss(),
      },
    }),
  ],
};
```

Now all `<style>` elements in your components that have a `type="text/scss"` or `lang="scss"` attribute will be preprocessed by sass.

### Passing options to sass

The `scss` function passes the first argument to the sass compiler, e.g.:

```javascript
...
scss({
  plugins: [
    ...
  ]
})
```


### Filtering styles

The `scss` function passes the second argument to [svelte-preprocess-filter](https://github.com/ls-age/svelte-preprocess-filter), e.g.:

```javascript
...
sass(
  {} // Empty sass options
  { all: true } // Preprocess all styles
)
```

For available options visit [the sass documentation](http://sass-lang.com/documentation/).

