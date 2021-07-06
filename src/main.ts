import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { initQuasar } from './quasar'
import App from './App.vue'
import 'src/styles/main.scss'
import 'src/styles/quasar.variables.scss'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
    const { app } = ctx
    if (!import.meta.env.SSR)
      initQuasar(app)
  },
)
