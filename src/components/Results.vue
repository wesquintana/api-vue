<template>
  <div class="Results">
    <h4>Here be results:</h4>
    <ol>
      <li v-for="photo in photos" @click="setActive(photo)">
        {{ photo.camera.full_name }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Results",
  methods: {
    setActive(photo) {
      this.$store.dispatch("setActivePhoto", photo);
    }
  },
  computed: {
    photos() {
      return this.$store.state.searchResults;
    }
  }
};
</script>

<style>
li {
  border: 1px solid grey;
}
li:hover {
  background-color: khaki;
}
ol {
  list-style-type: none;
  overflow-y: auto;
  height: 50vh;
}
ol::-webkit-scrollbar-track {
  width: 8px;
  background-color: rgba(175, 175, 175, 0.5);
  border-radius: 4px;
}
ol::-webkit-scrollbar {
  width: 8px;
}
ol::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.7);
  border-radius: 4px;
}
ol::-webkit-scrollbar-thumb:hover {
  background-color: rgba(100, 100, 100, 0.9);
}
</style>
