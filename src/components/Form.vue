<template>
<div>
  <h1>Form</h1>
  <h2 v-if="isFormCompleted" class="form__h2_welcome_message">Welcome {{fullname}}</h2>
  <div>
    <label>Name:</label>
    <input v-model="name" class="form__label_name" type="text" name="formName">
  </div>
  <div>
    <label>Last Name:</label>
    <input v-model="lastName" class="form__label_lastname" type="text" name="formLastName">
  </div>
  <h1 v-if="isFormCompleted" class="form__h1_address" >Address</h1>
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
    isFormCompleted() {
      const { isValidString, name, lastName } = this;

      return isValidString(name) && isValidString(lastName);
    },
  },

  methods: {
    isValidString(string) {
      return string.length > 1;
    },
  },
};
</script>

<style>

</style>
