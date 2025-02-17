<template>
    <VaCard class="wrapper pa-4">
        <div>Welcome </div>
        <br />
        <div class="flex row va-spacing-x-3 align-center">
            <div>please</div>
            <LoginButton />
            <div>with your ZerdaLab email to continue</div>
        </div>
    </VaCard>
</template>

<script setup lang="ts">
import LoginButton from './LoginButton.vue'
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
}
</style>