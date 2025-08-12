import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './views/Login.vue'
import Map from './views/Map.vue'

function registerGlobalComponents(app) {
  const components = import.meta.glob('./controls/*.vue', { eager: true })
  Object.entries(components).forEach(([path, module]) => {
    const name = path.split('/').pop().replace('.vue', '')
    app.component(name, module.default)
  })
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/map', component: Map },
  ]
});

const app = createApp(App)
registerGlobalComponents(app)
app.use(router)

// app.use(VueGoogleMaps, {
//   load: {
//     key: 'KEY_HERE',
//   },
// })

app.mount('#app')

