<template>
  <Top />
    <section class="content transition-fadeIn">
      <div class="block hide">
        <pre class="txt">{{ txt }}</pre>
        <!-- <span class="cursor"></span> -->
      </div>
    </section>
  <Bot />
</template>

<script>

import Top from './Top.vue'
import Bot from './Bot.vue'

export default {
  components: {
    Top,
    Bot,
  },
  props: {
    txt: String
  },
  data() {
    
  },
  mounted() {
    document.querySelector('.block').classList.remove('hide')
  }
}
</script>

<style scoped lang="scss">

/*------------------------ Main-Content ------------------------*/

.content {
  min-height: 75vh;
  display: flex;
  justify-content: center;
  background:linear-gradient( rgba(0, 27, 38, 0.9) 100%, rgba(0, 27, 38, 0.9)100%),url("../assets/pointed3.jpg");
  background-repeat:no-repeat;
  background-size: cover;
}

.block {
  margin: 5rem;
}

.txt{
  font-size: 1.6rem;
  display: inline;
  text-align: left;

  animation: fadeIn 3s;
}

.h3{
  text-align: center;
  font-size: 2rem;
  margin: 2rem;
  text-decoration: underline;
  animation: textColorRed 3s infinite,fadeIn 5s;
}

.pre.txt{
  animation: textColorPrimary 12s infinite,fadeIn 5s;
}

.cursor{
  border-left: 0.6rem solid;
  padding: 0.3rem;

  animation: textTypingCursor .3s infinite step-end alternate;
}

</style>
