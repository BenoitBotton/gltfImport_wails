<template>
    <VaButton size="small" preset="secondary" hover-behavior="opacity" :hover-opacity="0.4" @click="logout" :disabled="!isAuthenticated">
        LogOut
    </VaButton>
</template>
<script setup lang="ts">
// Composition API
import { useAuth0 } from '@auth0/auth0-vue'

const auth0 = useAuth0()
const isAuthenticated = auth0.isAuthenticated

function logout() {
    auth0.logout({
        logoutParams: {
            returnTo: window.location.origin
        }
    })
}
</script>