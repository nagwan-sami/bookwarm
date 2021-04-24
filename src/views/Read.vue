
<script>
export default {
  components: {},
  props: ["books"],

  data() {
    return {};
  },

  mounted() {},

  computed: {},

  methods: {
    editBook() {},

    deletBook(id) {
      this.$emit("delete-book", id);
    },
  },
};
</script>

<template>
  <div class="w-100">
    <router-link :to="{ name: 'store' }"> NEW BOOK</router-link>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="{ name: 'view', params: { id: book.id } }">
          {{ book.name }}</router-link
        >
        <button @click="editBook">edit</button>

        <button @click="deletBook(book.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>


<style lang="sass" scoped>
</style>