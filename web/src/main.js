import { createApp } from 'vue'
import App from './App.vue'

function registerGlobalComponents(app) {
  const components = import.meta.glob('./controls/*.vue', { eager: true })
  Object.entries(components).forEach(([path, module]) => {
    const name = path.split('/').pop().replace('.vue', '')
    app.component(name, module.default)
  })
}

const app = createApp(App)
registerGlobalComponents(app)
app.mount('#app')

