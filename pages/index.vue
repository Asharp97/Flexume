<template>
  <client-only>
    <div class="bg">
      <div class="panel">
        <button v-if="showButton" @click="international()">
          <h3>international</h3>
        </button>
        <button v-if="showButton" @click="contact()">
          <h3>turkish contact</h3>
        </button>
        <button v-if="showButton" @click="langauge()">
          <h3>turkish langauge & contact</h3>
        </button>
      </div>
      <div v-if="!showButton" id="ready" />
      <div ref="cv" class="page">
        <div class="indent">
          <Header :tr="tr" />
          <SectionTitle title="profile" :icon="icon.profile" :text="profile" />

          <SectionTitle
            title="Skills"
            :icon="icon.skills"
            :text="skills"
            :cols="2" />

          <SectionTitle
            title="Professional Certificates"
            :icon="icon.certificates"
            :text="certificates"
            :cols="2" />

          <SectionTitle
            title="Professional Experience"
            :icon="icon.experience"
            :text="experience" />

          <SectionTitle
            title="projects"
            :icon="icon.projects"
            :text="projects" />
          <SectionTitle
            title="Education"
            :icon="icon.education"
            :text="education" />
          <SectionTitle
            title="Languages"
            :icon="icon.Languages"
            :text="lang"
            :cols="3" />
        </div>
      </div>
    </div>
  </client-only>
</template>
<script setup>
import icon from "../icons";
import {
  profile,
  certificates,
  skills,
  experience,
  projects,
  education,
  lang,
} from "~/content";

const tr = ref(false);
const trLang = ref(false);

definePageMeta({ ssr: false });

const showButton = ref(true);

const international = async () => {
  tr.value = false;
  await nextTick();
  window.print();
};
const contact = async () => {
  tr.value = true;
  await nextTick();
  window.print();
};
const langauge = async () => {
  tr.value = true;
  await nextTick();
  window.print();
};
</script>

<style lang="scss" scoped>
@media print {
  .panel {
    display: none !important;
  }
}
button {
  padding: 1rem;
}
.panel {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.bg {
  background-color: rgb(245, 245, 245);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  .page {
    padding: 0.4708mm 16mm 11.6188mm;
    min-height: 1347px;
    background-color: #fff;
    width: 957px;
    border-radius: 10px;
    .indent {
      max-width: 807px;
      width: 100%;
      margin-inline: auto;
    }
  }
}
</style>
