<template>
  <div class="main-title">
    <div class="nm nmt">
      <div class="nml">D</div><div class="nml">S</div><div class="nml">S</div><div class="nml">U</div>
      </div>
    <div class="ttlgroup">
      <div class="ttl typing hide">Infrastructure</div>
      <div class="ttl typing hide">Development</div>
      <div class="ttl typing hide">DevOps(soon)</div>
    </div>
    <div class="start hide">
      <span>Start</span><i class="fa-solid fa-power-off"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data() {
    return {
      
    }
  },
  created() {
  },
  mounted() {
    try {
      this.showTitles()
      this.showStartBtn()
    }catch (error){}
  },
  methods: {
  showTitles() {
    let ttls = document.querySelectorAll('.ttl')
    let time1 = 1200
    let time2 = [3200, 2600, 2800]
    let i = 0
    ttls.forEach((e) => {
      time1 += 600
      let l = e.textContent.length
      setTimeout(function () {
        e.classList.remove('hide')
        console.log(time2[i])
        setTimeout(function () {
          e.classList.remove('typing')
        }, time2[i]);
        i += 1
      }, time1);
    })
  },
  showStartBtn() {
    setTimeout(function () {
      document.querySelector('.start').classList.remove('hide')
    }, 6000)
    }
  },
}
    // setTimeout(function () {
    //     get('#start').removeAttribute('class', 'hide');
    //     get('.main-title').removeAttribute('style', 'cursor:none')
    // }, 6000);
    // setTimeout(function () {
    //     transitionDown()
    // }, 5400);


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*------------------------ Main-Title ------------------------*/

.main-title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  min-height: 100vh;
}

.nmt {
  display: grid;
  grid-template-columns: repeat(2, 6rem);
  font-size: 8rem;
  gap: 0rem 5rem;
  margin: 0 auto;

  animation: textColorPrimary 8s infinite 4s,
  fadeIn 5s;
}

.typing {
  display: block;
  overflow: hidden;
  width: 14ch;
  border-right: 1rem solid;

  animation: textTyping 3s steps(14),
  textPulse 5s infinite alternate 6s,
  textTypingCursor .2s infinite step-end alternate;
}

.ttl {
  white-space: nowrap;
  font-size: 2rem;
  margin: 2rem auto;
}

.ttl:hover {
  animation: textPulse 5s infinite alternate,
}

.start {
  cursor: pointer;
  margin: 1rem auto;
  font-size: 2rem;
  padding: .8rem 1rem .6rem;
  border: .3rem solid;
  border-radius: 1rem;

  animation: fadeIn 5s,
  textColorRed 3s infinite;
}

.start span{
  margin-right: .5rem;
}

.start *{ 
  animation: textColorRed 3s infinite;
}

/* .main-title #start *{
  font-size: 2rem;
  animation: textColorRed 3s infinite;
}

.main-title #start i{
  display: block;
  margin-bottom: .5rem;
  font-size: 4rem;
} */

/*------------------------ Animations ------------------------*/

/* Change to primary color */
@keyframes textColorPrimary {
  50% {
    color: var(--primary)
  }

  100% {
    color: var(--gray-l1)
  }
}

/* Typing effect text - Text*/
@keyframes textTyping {
  from {
    width: 0;
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

/* Typing effect text - Cursor */
@keyframes textTypingCursor {
  0% {
    border-color: rgba(246, 55, 0, 0);
  }

  20% {
    border-color: rgba(246, 55, 0, .2);
  }
  40% {
    border-color: rgba(246, 55, 0, .4);

  }
  60% {
    border-color: rgba(246, 55, 0, .6);
  }
  80% {
    border-color: rgba(246, 55, 0, .8);
  }
  100% {
    border-color: rgba(246, 55, 0, 1);
  }
}

@media (orientation: landscape) and (min-width: 600px){
  .nmt {
    grid-template-columns: repeat(4, 6rem);
  }
}

</style>
