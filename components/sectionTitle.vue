<template>
  <div>
    <div class="sectionTitle">
      <!-- <img :src="icon" alt="" /> -->
      <div v-html="icon" />
      <h3>{{ title.toUpperCase() }}</h3>
    </div>
    <div class="layout" :style="gridStyle">
      <div v-for="(x, n) in text" :key="n">
        <div class="title">
          <NuxtLink :to="x.link">
            <div style="display: flex; gap: 0.4rem">
              <h4>{{ x.title }}</h4>
              <img :src="icons.newTab" alt="" v-if="x.link" class="icon" />
            </div>
            <h5>{{ x.subtitle }}</h5>
          </NuxtLink>
          <div>
            {{ x.date }} {{ x.location && x.date && "|" }} {{ x.location }}
          </div>
        </div>
        <ul>
          <li v-for="(a, b) in x.points" :key="b">
            <p><MDC :value="a" /></p>
          </li>
        </ul>
        <MDC :value="x.description" />
      </div>
    </div>
  </div>
</template>

<script setup>
import icons from "../icons";
const props = defineProps(["title", "icon", "text", "cols"]);
const gridStyle = computed(() => ({
  display: "grid",
  gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  gap: "2.1rem",
}));
</script>

<style lang="scss" scoped>
p {
  font-size: 16.2px;
  line-height: 1.35;
  text-align: justify;
  text-justify: inter-word;
}
.icon {
  width: 0.7rem;
}
h5 {
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
}
.sectionTitle {
  width: 100%;
  text-align: center;
  background-color: #f2f3f4;
  color: #495963;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  justify-content: center;
  margin-block: 1rem;
  border-radius: 10px;
}
.title {
  display: flex;
  justify-content: space-between;
}
ul {
  list-style: none; /* Remove HTML bullets */
  padding: 0;
  margin: 0;
  li {
    display: flex;
    &:before {
      content: "-";
      padding-right: 8px;
      font-weight: 900;
    }
  }
}
</style>
