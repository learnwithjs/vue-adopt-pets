<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table stripped :items="cats"></b-table>
  </div>
</template>

<script>
import cats from '@/data/cats'

export default {
  data () {
    return {
      cats
    }
  }
}
</script>
