<template>
  <div>
{{pet().name}}
    <!-- {{ $route.params.species }}
    {{ $route.params.id }} -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    pet () {
      const animal = this[this.$route.params.species][this.$route.params.id]
      return animal
    }
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  }
}
</script>
