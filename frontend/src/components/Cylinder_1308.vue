<template>
  <primitive :object="model" />
</template>
  
<script setup lang="ts">
import useCylinder1013 from "./Cylinder_1013_base"
import { MeshLambertMaterial } from 'three'

const props = defineProps<{
  color: string
}>()
const model=useCylinder1013()
model.value.material = new MeshLambertMaterial({ color: props.color })
model.value.scale.fromArray([1.344,1.344,8/13.2])
</script>
