<template>
  <Header @active="getActive" />
  <Content :active="activePage"/>
  <Footer />
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'

export default {
  name: 'Page',
  components: {
    Header,
    Content,
    Footer
  },
  data() {
    return { activePage: 'about' }
  },
  methods: {
    getActive(act) {
      this.activePage = act;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
