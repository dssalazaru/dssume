<template>
  <Header @active="getActive" />
  <Content :activePage="activePage"/>
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
    getActive(active) {
      this.activePage = active;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
