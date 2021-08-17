<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table stripped :items="dogs"></b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['dogs'])
  }
}
</script>
