<template>
    <primitive :object="model" />
</template>

<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
import { Mesh, MeshLambertMaterial } from 'three'

const { nodes } = await useGLTF('src/assets/cylinder_1013-transformed.glb', { draco: true })
const material = new MeshLambertMaterial({ color: 'red' })
const model = new Mesh(nodes.round_1013.geometry, material)
console.log(nodes)
</script>