<template>
  <main id="main" class="section-5 header">
    <div class="columns-43 w-row">
      <div class="column-82 w-col w-col-4">
        <div class="div-block-77">
          <h1 class="h1">
            UX&nbsp;
            <strong class="bold-text-2">Design
            </strong>
            for
            <strong class="bold-text-2">Good
            </strong>
          </h1>
        </div>
      </div>

      <div class="column-84 w-col w-col-4">
        <img ref="image" src="/Tamara Sredojevic.png" loading="lazy"
          sizes="(max-width: 991px) 330px, (max-width: 1279px) 30vw, (max-width: 1919px) 330px, 17vw"
          alt="Tamara Sredojevic" class="image-46"
          style="transform-style: preserve-3d; will-change: transform; transition: transform 0.3s ease;"
          :style="{ transform: `rotateY(${rotation}deg)`, filter: `saturate(${saturate}%)` }" />

        <div class="columns-44 w-row">
          <div class="column-113 w-col w-col-6">
            <img src="/map.png" loading="lazy" alt="" width="100" class="image-48" />
          </div>

          <div class="w-col w-col-6">
            <div class="div-block-79">

              <ol role="list" class="list-7 w-list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/tamarasredojevic/?locale=en_US" target="_blank"
                    class="nav-link social">LinkedIn</a>
                </li>
                <li>
                  <a href="https://medium.com/@GimmeACamera" target="_blank" class="nav-link social">Medium</a>
                </li>
                <li>
                  <a href="https://twitter.com/GimmeACamera" target="_blank" class="nav-link social">Twitter</a>
                </li>
                <li>
                  <a href="http://eepurl.com/heSy_D" target="_blank" class="nav-link social">Newsletter (FR)</a>
                </li>
              </ol>

            </div>
          </div>
        </div>
      </div>

      <div class="column-83 w-col w-col-4">
        <div class="div-block-78">
          <p class="paragraph-2">
            I’m Tamara, a freelance UX designer based in France. I craft accessible websites for brands using tech for
            good.
          </p>
        </div>
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const image = ref<HTMLImageElement | null>(null);

const rotation = ref(0);
const saturate = ref(100);

const maxRotation = 180;
const maxSaturate = 100;

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (image.value) {
    const scrollTop = window.scrollY;
    const scrollFraction = scrollTop / (window.innerHeight * 0.2);

    rotation.value = Math.min(scrollFraction * maxRotation, maxRotation);
    saturate.value = Math.max(0, maxSaturate - Math.abs(scrollFraction) * maxSaturate);
  }
};
</script>
