<script setup lang="ts">
import AboutMe from 'src/components/AboutMe.vue';
import MainSection from 'src/components/MainSection.vue';
import DesignEthics from 'src/components/DesignEthics.vue';
import FooterSection from 'src/components/FooterSection.vue';
import FeaturedProjects from 'src/components/FeaturedProjects.vue';
import HeaderSection from 'src/components/HeaderSection.vue';
</script>

<template>
  <HeaderSection />

  <MainSection />

  <div class="horizontal-bar">
    <ul role="list" class="list-5">
      <li class="list-item-3">
        <h2 class="paragraph centered">Accessibility</h2>
      </li>
      <li class="list-item-3">
        <h2 class="paragraph centered">UX/UI</h2>
      </li>
      <li class="list-item-3">
        <h2 class="paragraph centered">Inclusion</h2>
      </li>
    </ul>
  </div>

  <DesignEthics />

  <div class="horizontal-bar blue">
    <p class="centered">
      <strong>Did you know?&nbsp;</strong>1 in 4&nbsp;adults in the European Union is disabled. That is
      +100&nbsp;million people for whom accessibility is a necessity.
    </p>
    <p>
      <a href="https://www.consilium.europa.eu/en/infographics/disability-eu-facts-figures/" target="_blank"
        class="nav-link">Source: European Council of the EU, 2022
      </a>
    </p>
  </div>

  <FeaturedProjects />

  <div class="horizontal-bar green">
    <p class="centered">
      <strong>Did you know?&nbsp;</strong>
      80% of disabled people have invisible impairments. Even though
      you cannot see evidence of a disability, the disability still exists.
    </p>
    <p>
      <a href="https://post.parliament.uk/research-briefings/post-pn-0689/" target="_blank" class="nav-link">
        Source: UK&nbsp;Parliament
      </a>
    </p>
  </div>

  <AboutMe />

  <FooterSection />
</template>

<style scoped></style>
