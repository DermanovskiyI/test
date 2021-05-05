<template lang="pug">
.wrapper
  adminHeader
  adminNavigation
  router-view 
  
</template>

<script>
import admin from "./components/admin"
import adminHeader from "./components/adminHeader";
import adminNavigation from "./components/adminNavigation";

export default {
  components: {
    admin,
    adminHeader,
    adminNavigation
  },
};
</script>
<style lang="css">
body,
html {
  height: 100%;
}
body {
  margin: 0;
  
}
.wrapper {
  background: url("./../assets/images/water.jpg"),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7707457983193278) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  overflow: hidden;
  min-height: 100%;
  position: relative;
  font-family: Roboto;
  height: 100%;
  overflow-y: scroll;
}
.maincontent {
    background-color: rgba(#ffffff, .7);
    min-height: 100%;

}

/* @import "../main.min.css"; */

</style>
