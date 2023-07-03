<script setup>
const serverEnvs = useState(() => ({
  dev: [process.dev, import.meta.dev],
  server: [process.server, import.meta.server],
  client: [process.client, import.meta.client],
  nuxt: [process.nuxt, import.meta.nuxt],
  'versions.nuxt': [process.versions.nuxt, import.meta.versions.nuxt],
  'versions?.nuxt': [process.versions?.nuxt, import.meta.versions?.nuxt]
}))
</script>

<template>
  <div>
    <pre id="envs">
      {{ serverEnvs }}
    </pre>
  </div>
</template>
