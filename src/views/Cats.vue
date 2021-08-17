<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table stripped :items="cats">
      <template #cell(name)="data">
        <router-link :to="`/pets/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
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
