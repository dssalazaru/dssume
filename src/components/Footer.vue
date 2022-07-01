<template>
  <footer class="footer kf-fadein">
    <div @click="goLink(0)" class="name">
      <span v-for="n in name" :key="n" class="nml">{{ n }}</span>
    </div>
    <div class="social">
      <i @click="goLink(1)" class="icon fa-brands fa-github-square"></i>
      <i @click="goLink(2)" class="icon fa-brands fa-linkedin"></i>
      <i @click="goLink(3)" class="icon fa-brands fa-instagram"></i>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'page-footer',
  data() {
    return {
      urls: ['https://dssu.me', 'https://github.com/dssalazaru', 'https://linkedin.com/in/dssu', 'https://instagram.com/dssalazaru'],
      name: ['D','S','S','U'],
    }
  },
  methods: {
    goLink(i) {
      if (i === 0) { window.location.replace(this.urls[i]) }
      else { window.open(this.urls[i], "_blank") }
    },
  },
  }
</script>

<style scoped lang="scss">

/*------------------------ Footer ------------------------*/

.footer {
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2rem;
}

.footer .nm {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 3rem;
  gap: .1rem 1.2rem;
}

.footer .nm:hover {
  cursor: pointer;
  animation: textColorPrimary 4s infinite,
}

.name {
  font-family: 'Major Mono Display', monospace;
}

.social {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}

.icon {
  font-size: 4rem;
  color: var(--gray-l1)
}

.icon:hover {
  animation: textColorRed 2s infinite;
}

.icon:active{
  scale: .9;
}

@media (orientation: landscape) and (min-width: 600px){
  .social {
  width: 30%;
}
.icon {
  font-size: 4rem;
}
}

</style>