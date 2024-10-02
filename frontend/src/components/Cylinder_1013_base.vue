<template>
    <primitive :object="model" />
</template>

<script setup async lang="ts">
import { useGLTF } from '@tresjs/cientos'
import { Mesh, MeshLambertMaterial } from 'three'

const props = defineProps<{
    color: string
    scale: number[]
}>()

const { nodes } = await useGLTF('src/assets/cylinder_1013-transformed.glb', { draco: true })

const material = new MeshLambertMaterial({ color: props.color })
const model = new Mesh(nodes.round_1013.geometry, material)
model.scale.fromArray(props.scale)
</script>