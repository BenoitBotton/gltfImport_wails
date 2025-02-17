<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import Cutter from './Cutter.vue'
import { ref } from 'vue'
import { useAuth0 } from "@auth0/auth0-vue"
import LoginPage from './components/auth/LoginPage.vue'

const { isAuthenticated, isLoading } = useAuth0()

const cutters = ref([
  {
    spiral: 1,
    ctype: "1313",
    shape:'cylinder',
    dia: 13.2,
    backrake: 20,
    siderake: 0,
    yrot: 0,
    ztip: 0,
    radius: 0,
    theta: 5,
    color: '#FFFF00',
  },
  {
    spiral: 2,
    ctype: "1308",
    shape:'cylinder',
    dia: 13.2,
    backrake: 25,
    siderake: 0,
    yrot: 0,
    ztip: 0,
    radius: 15,
    theta: 10,
    color: '#FF00FF',
  },

])
const options = ["1313", "1308"]
</script>

<template>
  <div  v-if="isAuthenticated" class="container">
    <div >
      <VaSelect v-model="cutters[0].ctype" :options="options" label="cutter 1 type" />
      <VaSelect v-model="cutters[1].ctype" :options="options" label="cutter 2 type" />
    </div>
    <div >
      <VaInput v-model.number="cutters[0].backrake" label="cutter 1 backrake" />
      <VaInput v-model.number="cutters[1].backrake" label="cutter 2 backrake" />
    </div>
    <div class="mycanvas">
      <TresCanvas clear-color="#82DBC5" class="mycanvas">
        <OrbitControls />
        <TresPerspectiveCamera :position="[40, 40, 30]" :fov="35" :look-at="[0, 0, 0]" />
        <Cutter v-for="cutter in cutters" :key="cutter.spiral+cutter.ctype" :cutter="cutter" :color="cutter.color" />
        <TresAmbientLight :intensity="1" />
        <TresDirectionalLight :intensity="1" :position="[500, 500, 0]" />
        <TresDirectionalLight :intensity="0.5" :position="[-500, 500, 0]" />
      </TresCanvas>
    </div>
  </div>
  <LoginPage v-else />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
}

.mycanvas {
  height: 90dvh;
  width: 80vw;
}
</style>