<template>
<div>
  <h1>Form</h1>
  <h2 v-show="isFormCompleted" class="form__h2_welcome_message">Welcome {{fullname}}</h2>
  <div>
    <label>Name:</label>
    <input v-model="name" class="form__input_name" type="text" name="formName">
  </div>
  <div>
    <label>Last Name:</label>
    <input v-model="lastName" class="form__input_last_name" type="text" name="formLastName">
  </div>
  <h1 v-show="isFormCompleted" class="form__h1_address" >Address</h1>

  <button @click="goToHome" v-show="isFormCompleted" class="form__button_go_home" >Go home</button>

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
      const {
        isValidString, hasOnlyLetter, name, lastName,
      } = this;

      return isValidString(name)
      && isValidString(lastName)
      && hasOnlyLetter(name)
      && hasOnlyLetter(lastName);
    },
  },

  methods: {
    isValidString(string) {
      return string.length > 1;
    },
    hasOnlyLetter(string) {
      const lettersRegex = /^[A-Za-z]+$/;
      return !!string.match(lettersRegex);
    },
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style>

</style>
