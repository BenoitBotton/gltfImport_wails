<template>
    <primitive :object="nodes.round_1013" />
</template>

<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

const { nodes } = await useGLTF('src/assets/cylinder_1013-transformed.glb', { draco: true })
console.log(nodes)
</script>