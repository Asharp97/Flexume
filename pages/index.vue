<template>
  <client-only>
    <div class="bg">
      <button v-if="showButton" @click="downloadPdf()">
        <h1>EXPORT PDF</h1>
      </button>
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
          <br />
          <br />
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
definePageMeta({ ssr: false });

const showButton = ref(true);



const downloadPdf = async () => {
  showButton.value = false;
  // await printPdf();
  // showButton.value = true;
};
</script>

<style lang="scss" scoped>
.bg {
  background-color: rgb(245, 245, 245);
  margin-inline: auto;
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  .page {
    padding: 13.4708mm 16mm 11.6188mm;
    min-height: 1347px;
    background-color: #fff;
    width: 957px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .indent {
      max-width: 807px;
      width: 100%;
      margin-inline: auto;
    }
  }
}
</style>
