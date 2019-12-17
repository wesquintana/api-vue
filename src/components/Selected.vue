<template
  ><div class="Selected">
    <h4>Selected:</h4>
    <img :src="nasaPhoto.img_src" />
    <p>{{ nasaPhoto.rover.name }}: {{ nasaPhoto.camera.full_name }}</p>
  </div></template
>

<script>
export default {
  name: "Selected",
  computed: {
    nasaPhoto() {
      return this.$store.state.activePhoto;
    }
  }
};
</script>

<style>
.Selected img {
  height: 50vh;
}
</style>
