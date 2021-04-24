
<script>
export default {
  components: {},
  props: ['books'],
  data() {
    return { };
  },

  mounted() {},

  computed: {},

  methods: {
    fetchBook() {
      let id = this.$route.params.id;
      return this.books.find(function (book) {
        if (book.id == id) {
          return book;
        }
      });
    },
  },
};
</script>

<template>
  <div class="w-100">VIEW BOOK {{ fetchBook().name }}</div>
</template>


<style lang="sass" scoped>
</style>