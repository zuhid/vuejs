import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

function registerGlobalComponents(app) {
  const components = import.meta.glob('./controls/*.vue', { eager: true })
  Object.entries(components).forEach(([path, module]) => {
    const name = path.split('/').pop().replace('.vue', '')
    app.component(name, module.default)
  })
}

const app = createApp(App)
registerGlobalComponents(app)

// app.use(VueGoogleMaps, {
//   load: {
//     key: 'KEY_HERE',
//   },
// })

app.mount('#app')

