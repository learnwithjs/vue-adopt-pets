export default {
  addPet: ({ commit }, pet) => {
    commit('appentPet', pet)
  }
}
