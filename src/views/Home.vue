/* eslint-disable */
<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend.</h1>
    <div>
      <p>
        <b>Total Cats count</b> : <span> {{ getAllCats.length }}</span>
      </p>
      <br />
      <p>
        <b>Total Dogs count</b> : <span> {{ getAllDogs }}</span>
      </p>
    </div>

    <p>
      <b>Total Pets Count</b> : <span>{{ animalsCount }}</span>
    </p>
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

      <b-form-group id="input-group-5" label="Breed:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="formData.breed"
          placeholder="Enter Pet's Breed"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Pet's Color:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="formData.color"
          placeholder="Enter Pet's color"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        gender: null,
        species: null,
        breed: null,
        color: null
      }
    }
  },
  computed: {
    ...mapGetters(['animalsCount', 'getAllCats', 'getAllDogs'])
  },
  methods: {
    ...mapActions(['addPet']),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {
      const { species, age, name, gender, breed, color } = this.formData

      const payload = {
        species,
        pet: {
          name,
          age,
          gender,
          breed,
          color
        }
      }
      this.addPet(payload)

      // reset Form
      this.formData = {
        name: '',
        age: 0,
        gender: null,
        species: null
      }
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 10px;
}
.btn {
  margin: 10px;
}

.d-block {
  margin-bottom: 10px;
}
</style>
