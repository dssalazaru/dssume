<template>
  <footer class="footer transition-fadeIn">
    <div class="nm">
      <div class="nml">D</div><div class="nml">S</div><div class="nml">S</div><div class="nml">U</div>
    </div>
    <div class="social">
      <a href="https://github.com/dssalazaru" target="_blank" rel="noopener noreferrer"><i
          class="icon fa-brands fa-github-square"></i></a>
      <a href="https://linkedin.com/in/dssu" target="_blank" rel="noopener noreferrer"><i
          class="icon fa-brands fa-linkedin"></i></a>
      <a href="https://instagram.com/dssalazaru" target="_blank" rel="noopener noreferrer"><i
          class="icon fa-brands fa-instagram"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
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
  outline: 2px solid var(--gray-d1);
}

.footer .nm {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 3rem;
  gap: .1rem 1.2rem;
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