import { dirname } from 'path';
import sassCompiler from 'node-sass';
import { style as filter } from 'svelte-preprocess-filter';

export async function preprocessSass(
  sassOptions = {},
  filterOptions = {},
  { filename, content, attributes }
) {
  if (!filter(Object.assign({ name: 'scss' }, filterOptions), { attributes })) { return null; }

  const { css, map } = await new Promise((resolve, reject) => sassCompiler.render(Object.assign({
    file: filename,
    data: content,
    includePaths: [
      dirname(filename),
    ],
  }, sassOptions), (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  }));

  return { code: css.toString(), map };
}

export function sass(sassOptions, filterOptions) {
  return preprocessSass.bind(null, sassOptions, filterOptions);
}
