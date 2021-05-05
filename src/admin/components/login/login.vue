<template lang="pug">
form.login(@click.prevent="login")
  input(type="text", placeholder="имя", v-model="name").
  input(type="password", placeholder="пароль", v-model="password")
  button(type="submit") Войти
</template>

<script>
import axios from "axios";
import appRequests from "../../requests.js";
export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios.post("/login", {
          name: this.name,
          password: this.password,
        })
        .then((response) => {
          if (response.status == 200) {
            const token = response.data.token;
            localStorage.setItem("token", token);
            appRequests.defaults.headers["Authorization"] = `Bearer ${token}`;
          }
        })
        .catch((error) => {
          this.$emit("getErrMsg", error.response.data.error);
        });
    },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
}
input {
  padding: 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-bottom: 10px;
}
button {
  padding: 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  transition: background-color 0.3s;
  cursor: pointer;
}
button:hover {
  background-color: greenyellow;
  transition: background-color 0.3s;
}
</style>