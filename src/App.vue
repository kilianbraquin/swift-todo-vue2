<template>
  <div class="min-h-screen bg-base pb-12 pt-6 text-text">
    <Header />
    <main class="container flex flex-col gap-4 pb-4">
      <TodoNew />
      <TodoList />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import TodoList from "./components/TodoList.vue";
import TodoNew from "./components/TodoNew.vue";

export default {
  components: {
    Header,
    Footer,
    TodoList,
    TodoNew,
  },
};
</script>
