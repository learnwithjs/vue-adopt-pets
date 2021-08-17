<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table stripped :items="dogs"></b-table>
  </div>
</template>

<script>
import dogs from '@/data/cats'

export default {
  data () {
    return {
      dogs
    }
  }
}
</script>
