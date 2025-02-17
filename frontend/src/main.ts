import {createApp} from 'vue'
import App from './App.vue'
import './style.css'
import { createVuestic } from "vuestic-ui"
import "vuestic-ui/css"
import { createAuth0 } from '@auth0/auth0-vue'

const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID

const app = createApp(App)
app.use(
    createAuth0({
      domain: domain,
      clientId: clientID,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  )
app.use(createVuestic()).mount("#app")
