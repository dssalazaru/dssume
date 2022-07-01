<template>
  <section class="start cc">
    <div class="mid logo kf-t-primary kf-fadein">
        <span v-for="(l, index) in logo" :key="index" class="">{{ l }}</span>
    </div>
    <div class="mid titles">
      <span v-for="(title, index) in titles" :key="index" class="title typing hide">{{ title }}</span>
    <div @click="startButton()" :class="{ hide:!this.state }" class="sbtn kf-t-red kf-fadein">
      <span>Start</span><i class="fa-solid fa-power-off"></i>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'start',
  data() {
    return {
      logo: ['D','S','S','U'],
      titles: ['Infrastructure', 'Development'],
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
      let titles = document.querySelectorAll('.title')
      let showTime = 2000
      let hideTime = 3200
      // let time2 = [3200, 2600, 2800]
      titles.forEach((e) => {
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
          document.querySelector('.sbtn').classList.remove('hide')
      }, 2000);
    },
    startButton () {
      this.$emit('pressStart')
    }
  },
}
</script>

<style scoped lang="scss">

.start {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
}

.mid {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: grid;
  grid-template-columns: repeat(2, 6rem);
  font-size: 8rem;
  gap: 0rem 5rem;
  margin: 0 auto;
  font-family: 'Major Mono Display', monospace;
}

.titles {
  flex-direction: column;
}

.title {
  white-space: nowrap;
  font-size: 2rem;
  margin: 2rem auto;

  &:hover {
    animation: textPulse 5s infinite alternate,
  }
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

.sbtn {
  cursor: pointer;
  margin: 1rem auto;
  font-size: 2rem;
  padding: .8rem 1rem .6rem;
  border: .3rem solid;
  border-radius: 1rem;

    span{
      margin-right: .5rem;
    }
}

/*------------------------ Animations ------------------------*/

/* Typing effect text - Text*/
@keyframes textTyping {
  from {
    width: 0;
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
