
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      newBook: "",
    };
  },

  mounted() {},

  computed: {},

  methods: {
    addNewBook() {
      this.$emit("add-new-book", this.newBook);
      this.newBook = ""
    },
  },
};
</script>

<template>
  <div class="w-100">
    <input placeholder="type book name" v-model="newBook" />
    <button @click="addNewBook">ADD BOOK</button>
  </div>
</template>


<style lang="sass" scoped>
</style>