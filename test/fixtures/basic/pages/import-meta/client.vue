<script setup>
// NOTE: this won't work correctly in dev env, because vite and webpack serves bundles not as modules
const clientEnvs = reactive({
  dev: [process.dev, import.meta.dev],
  server: [process.server, import.meta.server],
  client: [process.client, import.meta.client],
  nuxt: [process.nuxt, import.meta.nuxt],
  // "versions.nuxt": [process.versions.nuxt, import.meta.versions.nuxt],
  'versions?.nuxt': [process.versions?.nuxt, import.meta.versions?.nuxt]
})
</script>

<template>
  <div>
    <pre id="envs">
      {{ clientEnvs }}
    </pre>
  </div>
</template>
