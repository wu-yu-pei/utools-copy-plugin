import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
  input: 'index.js',
  output: [
    {
      format: 'cjs',
      file: 'a.js',
    },
    {
      format: 'es',
      file: 'c.js',
    },
  ],
  plugins: [nodeResolve()],
};