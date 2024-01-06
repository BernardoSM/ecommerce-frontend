export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-medusa'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})