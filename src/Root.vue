<template>
  <div class="container">
    <Start v-if="!start" @pressStart="this.start = true" />
    <Page v-else />
  </div>
</template>

<script>
import Start from './components/Start.vue'
import Page from './components/Page.vue'

export default {
  name: 'Root',
  components: {
    Start,
    Page,
  },
  data() {
    return {
      start: false,
    }
  },
  mounted() {
  },
  methods: {
    removeCursor() {
      document.querySelector('.container').classList.remove("cc", "cp")
    }
  },
}
</script>

<style lang="scss">

#main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--gray-l1);
  font-family: 'Share Tech Mono', monospace, Verdana, Arial;
  font-size: 16px;
}

/*------------------------ Global ------------------------*/

:root {
  --primary: #00B9BD;
  --secundary: #007E80;
  --term: #001b26;
  --complement-b1: #004853;
  --complement-b2: #23384F;
  --complement-r: #f63700;
  --complement-o: #FB6900;
  --gray-l1: #F8F8F8;
  --gray-l2: #E8E8E8;
  --gray-d1: #898989;
  --gray-d2: #383B40;
}

/*------------------------ AllPage ------------------------*/

* {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
}

img {
  max-width: 100% !important;
}

body{
  background-color: var(--term);
}

.container {
  z-index: 100;
  min-height: 100vh;
  min-width: 100%;

  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE10+/Edge */
  user-select: none;
  /* Standard */
}

.cc {
  cursor: crosshair;
}

.cp {
  cursor: pointer;
}

.nm {
  font-family: 'Major Mono Display', monospace;
}

/*------------------------ Utils ------------------------*/

.hide {
  display: none !important;
}

.lock {
  z-index: 1000 !important;
  background: var(--gray-d2);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  cursor:none;
}

.transition-down {
  animation: transitionDown 2s;
}

.fadein {
  animation: fadeIn 5s;
}

/* Change to primary color */
@keyframes textColorPrimary {
  50% {
    color: var(--primary)
  }

  100% {
    color: var(--gray-l1)
  }
}

/* Change to red color */
@keyframes textColorRed {
  50% {
    color: var(--complement-r)
  }

  100% {
    color: var(--gray-l1)
  }
}

@keyframes fadein {
  from { opacity: 0;}
  to { opacity: 1;}
}

</style>