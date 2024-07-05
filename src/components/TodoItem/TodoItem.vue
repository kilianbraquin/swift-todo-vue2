<template>
  <transition name="todo-item" appear>
    <div
      ref="todo-item"
      :class="[
        checked && 'opacity-75',
        isDragged && 'opacity-50',
        isDragHovered ? 'border-primary' : 'border-mantle',
        'rounded-md border-2 bg-mantle px-4 py-2.5 shadow-md transition-opacity duration-500 ease-in-out',
      ]"
      tabindex="0"
      @keydown.esc="$refs['todo-item'].focus()"
      @keydown.delete.exact.self="$store.commit('deleteTask', id)"
      @keydown.enter.exact.self="$store.commit('toggleTask', id)"
      @keydown.alt.up="moveTaskUp"
      @keydown.alt.down="moveTaskDown"
      @keydown.space.self.prevent="focusInput"
    >
      <div
        :class="[
          isDragHovered && 'pointer-events-none',
          'flex items-center gap-1.5',
        ]"
      >
        <TodoItemCheckbox :id="id" :checked="checked" />
        <TodoItemInput
          class="flex-1"
          ref="todo-item-input"
          :id="id"
          :title="title"
          :checked="checked"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import TodoItemCheckbox from "./TodoItemCheckbox.vue";
import TodoItemInput from "./TodoItemInput.vue";

export default {
  components: { TodoItemInput, TodoItemCheckbox },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    isDragHovered: {
      type: Boolean,
      default: false,
    },
    isDragged: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { value: this.id };
  },
  methods: {
    focusInput() {
      this.$refs["todo-item-input"].enableInput();
    },
    moveTaskUp() {
      this.$store.commit("moveTaskUp", this.id);
      this.$nextTick(() => {
        this.$refs["todo-item"].focus();
      });
    },
    moveTaskDown() {
      this.$store.commit("moveTaskDown", this.id);
      this.$nextTick(() => {
        this.$refs["todo-item"].focus();
      });
    },
  },
};
</script>

<style>
.todo-item-enter-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
