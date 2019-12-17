<template>
  <div class="search mb-4">
    <form>
      <input
        type="date"
        placeholder="Search..."
        v-model="query"
        class="mr-1"
      /><button type="submit" @click="search">
        Search
      </button>
    </form>
  </div></template
>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("searchNasaApi", this.query);
    }
  }
};
</script>

<style></style>
