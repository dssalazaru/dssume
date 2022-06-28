<template>
  <footer class="footer transition-fadeIn">
    <div @click="godssu()" class="nm">
      <div v-for="n in name" :key="n">
        <div v-for="n in nms" :key="n" class="nml">{{ n }}</div>
      </div>
    </div>
    <div class="social">
      <i @click="golink(1)" class="icon fa-brands fa-github-square"></i>
      <i @click="golink(2)" class="icon fa-brands fa-linkedin"></i>
      <i @click="golink(3)" class="icon fa-brands fa-instagram"></i>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      urls: ['https://dssu.me', 'https://github.com/dssalazaru', 'https://linkedin.com/in/dssu', 'https://instagram.com/dssalazaru'],
      name: ['D','S','S','U'],
    }
  },
  methods: {
    godssu() {
      window.location.replace(this.urls[0])
    },
    golink(i) {
      window.open(this.urls[i], "_blank")
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