<template>
  <div class="home container-fluid">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="row">
      <div class="col-12">
        <h1>NASA Mars Pictures</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Search />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <Results />
      </div>
      <div class="col-6">
        <Selected />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Results from "@/components/Results.vue";
import Selected from "@/components/Selected.vue";

export default {
  name: "home",
  components: {
    Search,
    Results,
    Selected
  }
};
</script>
