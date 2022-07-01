<template>
  <start v-if="!start" @pressStart="this.start = true" />
  <page v-else />
</template>

<script>
import Start from './components/views/Start.vue'
import Page from './components/views/Page.vue'

export default {
  name: 'root',
  components: { Start, Page, },
  data() {
    return {
      start: false,
    }
  },
  mounted() {
  },
  methods: {
    // removeCursor() {
    //   document.querySelector('.container').classList.remove("cc", "cp")
    // }
  },
}
</script>

<style lang="scss">

.container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--gray-l1);
  font-family: 'Share Tech Mono', monospace, Verdana, Arial;
  font-size: 16px;

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

.cc {
  cursor: crosshair;
}

.cp {
  cursor: pointer;
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

// .transition-down {
//   animation: transitionDown 2s;
// }

.kf-fadein {
  animation: fadein 5s;
}

.kf-t-primary {
  animation: textColorPrimary 8s infinite 4s;
}

.kf-t-red {
  animation: textColorRed 3s infinite;
}

.kf-t-pulse {
  animation: textPulse 5s infinite alternate,
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

/* effect transparent in text */
@keyframes textPulse {
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadein {
  from { opacity: 0;}
  to { opacity: 1;}
}

</style>