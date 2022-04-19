<template>
  <div class="container">
    <div id="screen" class="hide"></div>
    <main @click="removeCursor()" class="cc">
      <Start @click="changer()" v-if="active === 1" />
      <Page v-if="active === 2" />
    </main>
  </div>
</template>

<script>
import Start from './components/Start.vue'
import Page from './components/Page.vue'

export default {
  components: {
    Start,
    Page,
  },
  data() {
    return {
      active: 1,
      counter: 0,
    }
  },
  mounted() {
  },
  methods: {
    // screenclose()
    //   let scrn = document.querySelector('#screen')
    //   scrn.classList.remove('hide')
    //   scrn.classList.add('transition-down')
    //   setTimeout(function () {
    //   scrn.classList.remove('add')
    //   }, 2000)
    // },
    changer() {
      if (this.active === 1) { this.active = 2}
      // else { this.active = 1 }
      console.log(this.activeMenu)
      console.log(this.active)
    },
    removeCursor() {
    document.querySelector('main').classList.remove("cc", "cp")
    }
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--gray-l1);
  font-family: 'Share Tech Mono', monospace, Verdana, Arial;
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
  font-size: 16px;
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
  width: 0 !important;
  height: 0 !important;
}

.lock {
  z-index: 1000 !important;
  background: var(--gray-d2);
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0;
  bottom: 0;
  cursor:none;
}

.transition-down {
  animation: transitionDown 2s;
}

.transition-fadeIn {
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

@keyframes fadeIn {
  from { opacity: 0;}
  to { opacity: 1;}
}

</style>