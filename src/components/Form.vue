<template>
<div>
  <h1>Form</h1>
  <h2>Welcome {{fullname}}</h2>
  <div>
    <label>Name:</label>
    <input v-model="name" class="form__label_name" type="text" name="formName">
  </div>
  <div>
    <label>Last Name:</label>
    <input v-model="lastName" class="form__label_lastname" type="text" name="formLastName">
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    lastName: '',
  }),

  computed: {
    fullname() {
      return `${this.name} ${this.lastName}`;
    },
  },
};
</script>

<style>

</style>
