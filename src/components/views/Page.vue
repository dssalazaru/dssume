<template>
  <Header @active="getActive" />
  <Content :activePage="activePage"/>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'page',
  components: { Header, Content, Footer },
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
