<script setup lang="ts">
import AboutMe from 'src/components/AboutMe.vue';
import MainSection from 'src/components/MainSection.vue';
import DesignEthics from 'src/components/DesignEthics.vue';
import FooterSection from 'src/components/FooterSection.vue';
import FeaturedProjects from 'src/components/FeaturedProjects.vue';


</script>

<template>
  <div class="navbar-logo-center">
    <div data-animation="default" data-collapse="none" data-duration="400" data-easing="ease" data-easing2="ease"
      role="banner" class="navbar-logo-center-container shadow-three w-nav">
      <a id="skip-to-main" href="#main" class="skip-to-main w-inline-block w--current">
        <div class="nav-link">Skip to content</div>
      </a>
      <div class="container">
        <div class="navbar-wrapper-three">
          <a href="/" aria-current="page" class="navbar-brand-three w-nav-brand w--current" aria-label="home">
            <img src="/logo tamara.svg" loading="lazy" width="150" alt="Tamara_Sredojevic" class="image-45">
          </a>
          <nav role="navigation" class="nav-menu-wrapper-three w-nav-menu">
            <div class="nav-menu-three">
              <a href="mailto:hello@iamtamara.design" class="nav-link email-2">EMAIL ME</a>
              <ul role="list" class="nav-menu-block w-list-unstyled">
                <li class="list-item email">
                  <a href="mailto:hello@iamtamara.design" class="nav-link email">EMAIL ME</a>
                </li>
                <li class="list-item">
                  <a href="#ethics" class="nav-link">ETHICS</a>
                </li>
                <li class="list-item">
                  <a href="#work" class="nav-link">WORK</a>
                </li>
                <li class="list-item">
                  <a href="#about" class="nav-link">ABOUT</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
  </div>

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
