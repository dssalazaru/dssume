<template>
  <header class="kf-fadein">
    <nav>
      <ul class="navbar">
        <li @click="setActive('about')" :class="{ active:isActive('about') }">about</li>
        <li @click="setActive('experience')" :class="{ active:isActive('experience') }">experience</li>
        <li @click="setActive('projects')" :class="{ active:isActive('projects') }">projects</li>
        <li @click="setActive('contact')" :class="{ active:isActive('contact') }">contact</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'page-header',
  data() {
    return {
      activePage: 'about'
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activePage === menuItem
    },
    setActive (menuItem) {
      this.activePage = menuItem
      this.$emit('active', this.activePage)
    }
  },
  }
</script>

<style scoped lang="scss">

.navbar {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  min-height: 10vh;
  align-items: center;
  // border-bottom: 2px solid var(--gray-d1);
}

.navbar li {
  list-style-type: none;
  padding: .3rem 1.2rem;
  font-size: 2rem;
  color: var(--primary);
  cursor: pointer;

  &:hover {
  color: var(--complement-r);
  text-decoration: line-through;
  }

  &:active {
    scale: 0.9;
    animation: textColorRed 1s infinite;
  } 
}

.active {
  color: var(--complement-r) !important;
  font-weight: bold;
  animation: textPulse 3s infinite alternate;
}

@media (orientation: landscape) and (min-width: 768px){
  .navbar {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

</style>