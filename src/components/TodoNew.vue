<template>
  <form
    class="group flex items-center gap-1.5 rounded-md border-2 border-surface2 bg-mantle px-4 py-2.5 focus-within:border-primary"
    @submit.prevent="handleSubmit"
  >
    <Plus
      class="mx-auto h-6 w-6 translate-x-px text-surface2 group-focus-within:text-primary"
    />
    <input
      ref="input"
      type="text"
      class="flex-1 bg-transparent p-1.5 leading-[0] placeholder-surface2 focus:outline-none"
      placeholder="Add a new task"
      @keydown.esc="$refs.input.blur()"
      v-model="inputValue"
    />
  </form>
</template>

<script>
import Plus from "../icons/Plus.vue";

export default {
  components: { Plus },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.inputValue.length > 0) {
        this.$store.commit("addTask", this.inputValue);
        this.inputValue = "";
      }
    },
  },
};
</script>
