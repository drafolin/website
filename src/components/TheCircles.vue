<script setup lang="ts">
import { usePointer, useWindowScroll } from '@vueuse/core'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const blurSquare = ref<HTMLDivElement | null>(null)
const svgBoxSize = 200

const mouse = usePointer()
const scroll = useWindowScroll()

const circles = ref<
  {
    color: string
    cx: number
    cy: number
    opacity: number
  }[]
>([])

const getRandomColor = () => {
  const hue = Math.random() * 360 // random hue between 0 and 360
  const saturation = Math.random() * 20 + 80 // random saturation between 80% and 100%

  // for lightness, let's choose a random value between 50% and 80%
  const lightness = Math.random() * 30 + 50 // random lightness between 50% and 80%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

const target = { x: 0, y: 0 }
const current = { x: 0, y: 0 }

onMounted(() => {
  for (let i = 0; i < 5; ++i) {
    const color = getRandomColor()

    // Create 5 segments for 5 circles (each segment is 2PI/5 radians wide)
    // For each circle, generate a random angle within its dedicated segment
    const segment = (2 * Math.PI) / 5
    const angle = segment * i

    const minRadius = 30 // minimum radius
    const maxRadius = 60 // maximum radius
    const randomRadius = minRadius + Math.random() * (maxRadius - minRadius)

    const cx = svgBoxSize / 2 + randomRadius * Math.cos(angle)
    const cy = svgBoxSize / 2 + randomRadius * Math.sin(angle)

    const opacity = Math.random()
    circles.value.push({ color, cx, cy, opacity })
  }

  let animationFrame: number | null = null
  const loop = () => {
    // Linear interpolation (lerp) calculation for smooth transition
    const dX = target.x - current.x
    const dY = target.y - current.y
    current.x += dX * 0.05
    current.y += dY * 0.05

    if (blurSquare.value) {
      blurSquare.value.style.left = `${current.x}px`
      blurSquare.value.style.top = `${current.y}px`
    }

    animationFrame = requestAnimationFrame(loop)
  }
  loop()

  return () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  }
})

watch([mouse.x, mouse.y], () => {
  target.x = mouse.x.value
  target.y = mouse.y.value
})

watch([scroll.y], () => {
  target.y = mouse.y.value
})

watch(
  [router.currentRoute],
  () => {
    if (!blurSquare.value) return
    console.log(router.currentRoute.value.path)

    blurSquare.value.classList.remove('fade-in', 'fade-out')

    requestAnimationFrame(() => {
      if (!blurSquare.value) return
      blurSquare.value.classList.add(
        router.currentRoute.value.name === 'home' ? 'fade-in' : 'fade-out'
      )
    })
  },
  { immediate: true }
)
</script>

<template>
  <Teleport to="#app">
    <div class="color-blur" ref="blurSquare">
      <svg :viewBox="`0 0 ${svgBoxSize} ${svgBoxSize}`" xmlns="http://www.w3.org/2000/svg">
        <circle
          v-for="(v, i) in circles"
          :id="`circle${i + 1}`"
          :key="i"
          :cx="v.cx"
          :cy="v.cy"
          :r="40"
          :fill="v.color"
          :opacity="v.opacity"
        />
        )}
      </svg>
    </div>
  </Teleport>
</template>

<style lang="scss">
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fade-in {
  animation: 1s fade-in;
  animation-fill-mode: both;
}

.fade-out {
  animation: 1s fade-out;
  animation-fill-mode: both;
}
</style>

<style lang="scss" scoped>
.color-blur {
  width: 200px;
  height: 200px;
  position: fixed;
  filter: blur(50px);
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none; // add this line
  z-index: -1;

  svg {
    width: 100%;
    height: 100%;
  }

  * {
    pointer-events: none; // add this line

    @media screen and (pointer: coarse) {
      display: none;
    }
  }
}

$opacityDurations: 4s, 6s, 9s, 12s, 14s;
$scaleDurations: 5s, 8s, 11s, 14s, 18s;

@for $i from 1 through 5 {
  @keyframes circle#{$i}OpacityAnimation {
    0%,
    100% {
      opacity: 0.2;
    }

    50% {
      opacity: 0.75;
    }
  }

  @keyframes circle#{$i}ScaleAnimation {
    0%,
    100% {
      r: 40;
    }

    50% {
      r: 50;
    }
  }

  #circle#{$i} {
    // Choose duration from the lists
    $opacityAnimationDuration: nth($opacityDurations, $i);
    $scaleAnimationDuration: nth($scaleDurations, $i);

    animation:
      circle#{$i}OpacityAnimation $opacityAnimationDuration cubic-bezier(0, 0, 0.58, 1) infinite,
      circle#{$i}ScaleAnimation $scaleAnimationDuration cubic-bezier(0, 0, 0.58, 1) infinite;
  }
}
</style>
