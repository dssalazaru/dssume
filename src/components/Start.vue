<template>
  <div class="start-logo cc">
    <div class="title mid">
      <div class="nm nmt">
        <div v-for="n in nms" :key="n" class="nml">{{ n }}</div>
      </div>
    </div>
    <div class="subtitle mid">
      <div class="ttlgroup">
        <div v-for="ttl in ttls" :key="ttl" class="ttl typing hide">{{ ttl }}</div>
      </div>
    <div @click="startButton()" :class="{ hide:!this.state }" class="start-btn">
      <span>Start</span><i class="fa-solid fa-power-off"></i>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data() {
    return {
      nms: ['D','S','S','U'],
      ttls: ['Infrastructure', 'Development'],
      state: 0
    }
  },
  created() {
    
  },
  mounted() {
    try {
      this.showTitles()
      
    }catch (error){}
  },
  methods: {
    showTitles() {
      let ttls = document.querySelectorAll('.ttl')
      let showTime = 2000
      let hideTime = 3200
      // let time2 = [3200, 2600, 2800]
      ttls.forEach((e) => {
        showTime += 600
        setTimeout(() => {
          e.classList.remove('hide')
          this.hideTyping(e, hideTime)
          hideTime -= 600
        }, showTime);
      })
    },
    hideTyping(elem, time) {
      setTimeout( () => {
        elem.classList.remove('typing')
        this.state = 1
      }, time);
    },
    showStartButton () {
        setTimeout( () => {
          document.querySelector('.start').classList.remove('hide')
          document.querySelector('.container').classList.replace("cc", "cp")
      }, 2000);
    },
    startButton () {
      this.$emit('pressStart')
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*------------------------ Main-Title ------------------------*/

.start-logo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
}

.mid {
  height: 50vh;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.subtitle {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
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

.start-btn {
  cursor: pointer;
  margin: 1rem auto;
  font-size: 2rem;
  padding: .8rem 1rem .6rem;
  border: .3rem solid;
  border-radius: 1rem;

  animation: fadeIn 5s,
  textColorRed 3s infinite;
}

.start-btn span{
  margin-right: .5rem;
}

.start-btn *{ 
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
