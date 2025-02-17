<template>
  <div>
    <VaButton @click="login">Log in</VaButton>
  </div>
</template>

<script setup lang="ts">
  // Composition API
  import { useAuth0 } from '@auth0/auth0-vue'

  const auth0 = useAuth0()

  function login() {
    auth0.loginWithRedirect()
  }
</script>