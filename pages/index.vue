<template>
  <div class="bg">
    <button>make me a pdf</button>
    <div class="page">
      <div class="indent">
        <div class="title">
          <h1>Ali Elsayed</h1>
          <h2>Machine Learning & Software Engineer</h2>
        </div>
        <div class="contacts">
          <div class="contact">
            <Icon name="material-symbols:mail" />
            <span class="info"> Ali-Hisham@hotmail.com </span>
          </div>
          <div class="contact">
            <Icon name="material-symbols:call" />
            <span v-if="tr" class="info"> +90 541 886 22 79 </span>
            <span v-else class="info"> +971 631 33 52 </span>
          </div>
          <div class="contact">
            <Icon name="ic:sharp-location-on" />
            <span v-if="tr" class="info"> Turkiye, Istanbul </span>
            <span v-else class="info"> Dubai, UAE </span>
          </div>
          <div class="contact">
            <Icon name="mdi:github" />
            <span class="info"> ASharp97.github.io </span>
          </div>
          <div class="contact">
            <Icon name="lineicons:linkedin-original" />
            <span class="info"> ASharp97.github.io </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tr = ref(false);
</script>

<style lang="scss" scoped>
.bg {
  background-color: rgb(226, 218, 218);
  min-height: 100dvh;
  margin-inline: auto;
  padding-block: 2rem;
  .page {
    padding: 13.4708mm 16mm 11.6188mm;
    min-height: 1347px;
    background-color: #fff;
    max-width: 957px;
    width: 100%;
    margin-inline: auto;
    border-radius: 10px;
    .indent {
      max-width: 807px;
      width: 100%;
      margin-inline: auto;
    }
  }
}
.title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5em;
}
.contacts {
  display: flex;
  gap: 1rem;
  .contact {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: 400;
    font-size: 13px;

    .info {
    }
  }
}
</style>
