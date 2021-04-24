<script>
import { v4 as uuidv4 } from "uuid";

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
    x(payload) {
      this.books.push({ id: uuidv4(), name: payload });
      // this.books = [...this.books, { id: uuidv4(), name: payload }]
    },

    y(id) {
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
  <div id="app">
    <router-view @add-new-book="x" :books="books" @delete-book="y" />
  </div>
</template>

<style></style>
