<template>
  <header class="header transition-fadeIn">
    <nav>
      <ul class="nav">
        <li @click="setActive('about')" :class="{ active:isActive('about') }" class="about">about</li>
        <li @click="setActive('experience')" :class="{ active:isActive('experience') }" class="experience">experience</li>
        <li @click="setActive('projects')" :class="{ active:isActive('projects') }" class="projects">projects</li>
        <li @click="setActive('contact')" :class="{ active:isActive('contact') }" class="contact">contact</li>
      </ul>
    </nav>
  </header>
  <Content :active="activePage" />
  <Bot />
</template>

<script>
import Content from './Content.vue'
import Bot from './Bot.vue'

export default {
  name: 'Page',
  components: {
    Content,
    Bot
  },
  data() {
    return { activePage: 'about' }
  },
  methods: {
    isActive: function (menuItem) {
      return this.activePage === menuItem
    },
    setActive: function (menuItem) {
      this.activePage = menuItem
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  min-height: 10vh;
  align-items: center;
  // border-bottom: 2px solid var(--gray-d1);
}

.nav li {
  list-style-type: none;
  padding: .3rem 1.2rem;
  font-size: 2rem;
  color: var(--primary);
  cursor: pointer;
}

.nav li:hover {
  color: var(--complement-r);
  text-decoration: line-through;
}

.nav li:active {
  scale: 0.9;
  animation: textColorRed 1s infinite;
}

.active {
  color: var(--complement-r) !important;
  font-weight: bold;
  animation: textPulse 3s infinite alternate;
}

@media (orientation: landscape) and (min-width: 768px){
  .nav {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

</style>
