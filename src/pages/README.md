## File-based Routing

Routes will be auto-generated for Vue files in this dir with the same file structure.
Check out [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) for more details.

### Path Aliasing

`~/` is aliased to `./` folder.

`src/` is aliased to `./src` folder.

`store/` is aliased to `./store` folder.

`pages/` is aliased to `./pages` folder.

For example, instead of having

```ts
import { isDark } from '../../../../logic'
```

now, you can use

```ts
import { isDark } from 'src/logic'
```
