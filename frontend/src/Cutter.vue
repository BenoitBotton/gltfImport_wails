<template>
    <TresGroup :rotation-z="cutter.theta * toRad" :key="cutter.spiral">
        <TresGroup :position-z="cutter.ztip">
            <TresGroup :position-x="cutter.radius">
                <TresGroup :rotation-y="cutter.yrot * toRad">
                    <TresGroup :rotation-z="-cutter.siderake * toRad">
                        <TresGroup :rotation-x="cutter.backrake * toRad">
                            <TresMesh :position="cutter.spiral < 500 ? [0, 0, -r] : [0, 0, 0]"
                                :rotation="[90 * toRad, 0, 0]">
                                <Suspense fallback={null}>
                                    <Comp :color="color" />
                                </Suspense>
                            </TresMesh>
                        </TresGroup>
                    </TresGroup>
                </TresGroup>
            </TresGroup>
        </TresGroup>
    </TresGroup>
</template>

<script setup lang="ts">
//@ts-expect-error
import * as Shapes from './components/index'

type Cutter = {
    spiral: number
    ctype: number
    shape: string
    dia: number
    backrake: number
    siderake: number
    yrot: number
    ztip: number
    radius: number
    theta: number
    color: string
}

const props = defineProps<{
    cutter: Cutter
    color: string
}>()

const r = props.cutter.dia / 2
const toRad = Math.PI / 180
const capitalize = <T extends string>(s: T) => (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>
const cName = capitalize(props.cutter.shape) + '_' + props.cutter.ctype
var Comp = Shapes[cName]
</script>

<style scoped></style>