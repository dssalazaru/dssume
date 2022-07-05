<template>
  <close v-if="transition" />
  <page-header @active="getActive" />
  <page-content :activePage="activePage"/>
  <page-footer />
</template>

<script>
import PageHeader from '../PageHeader.vue'
import PageContent from '../PageContent.vue'
import PageFooter from '../PageFooter.vue'
import Close from '../transitions/Close.vue'

export default {
  name: 'page',
  components: { PageHeader, PageContent, PageFooter, Close },
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
