<template>
  <div>
    <div class="title">
      <h1>Ali Elsayed</h1>
      <h2>Machine Learning & Software Engineer</h2>
    </div>
    <div class="contacts">
      <NuxtLink
        target="_blank"
        to="mailto:ali-hisham@hotmail.com"
        class="contact">
        <img :src="icons.mail" alt="" />
        <span class="info"> Ali-Hisham@hotmail.com </span>
      </NuxtLink>
      <NuxtLink
        target="_blank"
        :to="tr ? 'tel:+90 541 886 22 79' : 'tel:+971 631 33 52'"
        class="contact">
        <img :src="icons.phone" alt="" />
        <span v-if="tr" class="info"> +90 541 886 22 79 </span>
        <span v-else class="info"> +971 631 33 52 </span>
      </NuxtLink>
      <div class="contact">
        <img :src="icons.location" alt="" />
        <span v-if="tr" class="info"> İstanbul, Türkiye </span>
        <span v-else class="info"> Dubai, UAE </span>
      </div>
      <NuxtLink
        target="_blank"
        to="https://github.com/Asharp97"
        class="contact">
        <img :src="icons.github" alt="" />
        <span class="info"> ASharp97.github.io </span>
      </NuxtLink>
      <NuxtLink
        target="_blank"
        to="https://www.linkedin.com/in/ali-elsayed-25974b130/"
        class="contact">
        <img :src="icons.linkedin" alt="" />
        <span class="info"> ASharp97.github.io </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import icons from "../icons";
defineProps(["tr"]);
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5em;
}
.contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  .contact {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 400;
    font-size: 14px;
    .info {
      font-size: 16.4px;
      font-weight: 500;

    }
  }
}
</style>
