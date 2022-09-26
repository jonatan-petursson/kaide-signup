import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), ssr()],
  server:{
    https: true,
    hmr: process.env.GITPOD_WORKSPACE_URL ? {
      host: process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-"),
      protocol: "wss",
      clientPort: 443
    } : true
  }
}

export default config
