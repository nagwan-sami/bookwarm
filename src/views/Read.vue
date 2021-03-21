
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      books: [
        {
          id: 1,
          name: "Sophie`s Wrold",
        },
        {
          id: 2,
          name: "Allah",
        },
        {
          id: 3,
          name: "Hart of Darkness",
        },
        {
          id: 4,
          name: "1984",
        },
        {
          id: 5,
          name: "Game of Thrones",
        },
        {
          id: 6,
          name: "Harry Poter",
        },
        {
          id: 7,
          name: "Thee portit of an artist as Young man",
        },
      ],
    };
  },

  mounted() {},

  computed: {},

  methods: {
    addNewBook() {},
    editBook() {},
    deletBook(id) {
      this.books = this.books.filter(function (book) {
        if (book.id !== id) {
          return book;
        }
      });
    },
  },
};
</script>

<template>
  <div class="w-100">
    <button @click="addNewBook">Add New Book</button>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }}
        <button @click="editBook">edit</button>

        <button @click="deletBook(book.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>


<style lang="sass" scoped>
</style>