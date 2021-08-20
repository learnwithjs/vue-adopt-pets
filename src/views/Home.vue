/* eslint-disable */
<template>
  <div class="home">
    <h1>Adopt a new best friend.</h1>
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.name"
          placeholder="Enter Pet's name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="formData.age"
          placeholder="Enter Pet's Age"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="formData.gender"
          :options="['female', 'male']"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        gender: null,
        species: null
      }
    }
  },
  methods: {
    ...mapActions(['addPet']),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {
      const { species, age, name, gender } = this.formData

      const payload = {
        species,
        pet: {
          name,
          age,
          gender
        }
      }
      this.addPet(payload)
    }
  }
}
</script>
