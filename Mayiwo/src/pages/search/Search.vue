<template>
  <div class="search">
    <search-list
      :cities="cities"
      @input-focus="showInfo = false"
      @input-blur="showInfo = true"
    ></search-list>
    <search-app-info
      v-show="showInfo"
    ></search-app-info>
  </div>
</template>

<script>
import SearchList from './components/SearchList'
import SearchAppInfo from './components/AppInfo'

export default {
  name: 'Search',
  components: {
    SearchList,
    SearchAppInfo
  },
  data () {
    return {
      cities: {},
      showInfo: true
    }
  },
  methods: {
    getInfo () {
      this.axios.get('/api/city.json')
           .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret) {
        const data = res.data
        this.cities = data.cities
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style scoped lang="scss">

</style>
