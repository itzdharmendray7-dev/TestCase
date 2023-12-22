<template>
  <img ref="image"
    src="https://assets-global.website-files.com/5f50efa4420f363f6b5670b2/645ccce745e064220abd3d4e_Tamara%20Sredojevic.png"
    loading="lazy" sizes="(max-width: 991px) 330px, (max-width: 1279px) 30vw, (max-width: 1919px) 330px, 17vw"
    srcset="https://assets-global.website-files.com/5f50efa4420f363f6b5670b2/645ccce745e064220abd3d4e_Tamara%20Sredojevic-p-500.png 500w, https://assets-global.website-files.com/5f50efa4420f363f6b5670b2/645ccce745e064220abd3d4e_Tamara%20Sredojevic.png 811w"
    alt="AI style headshot of Tamara Sredojevic with pastel colours. Tamara is in her 30s and has short dark hair."
    class="image-46" style="transform-style: preserve-3d; will-change: transform; transition: transform 0.3s ease;"
    :style="{ transform: `rotateY(${rotation}deg)`, filter: `saturate(${saturate}%)` }" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const image = ref<HTMLImageElement | null>(null);
const rotation = ref(0);
const saturate = ref(100);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (image.value) {
    const scrollTop = window.scrollY;
    rotation.value = Math.min((scrollTop / window.innerHeight) * 180, 180);
    saturate.value = 100 - (scrollTop / window.innerHeight) * 100;
  }
};
</script>
