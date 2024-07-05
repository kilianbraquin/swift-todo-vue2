<template>
  <div>
    <input
      ref="input"
      type="text"
      :id="'task-input-' + id"
      :value="title"
      :readonly="readonly"
      tabindex="-1"
      :class="[
        checked && readonly && 'line-through',
        !readonly && 'rounded-md bg-base',
        readonly && 'cursor-default bg-transparent selection:bg-transparent',
        'w-full truncate p-1.5 font-medium leading-[0] transition-colors duration-300 focus:outline-none',
      ]"
      @dblclick="enableInput"
      @keydown.space.self.stop="enableInput"
      @blur="handleBlur"
      @keydown.enter.stop="handleEnter"
      @keydown.delete.stop="readonly && $parent.$el.focus()"
      @keydown.alt.down.exact="!readonly && $event.stopPropagation()"
      @keydown.alt.up.exact="!readonly && $event.stopPropagation()"
      @scroll="handleScroll"
      @input="handleInput($event.target.value)"
      :draggable="!readonly"
      @dragstart="handleDragStart"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    checked: Boolean,
  },
  data() {
    return {
      readonly: true,
    };
  },
  methods: {
    enableInput(event) {
      if (this.readonly) {
        if (event instanceof KeyboardEvent) {
          event.preventDefault();
        }
        this.readonly = false;
        this.$refs.input.focus();
        this.$refs.input.selectionStart = this.$refs.input.selectionEnd;
      }
    },
    handleEnter() {
      this.handleBlur();
      this.$parent.$el.focus();
    },
    handleDragStart(event) {
      if (!this.readonly) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    handleInput(value) {
      this.$store.commit("updateTaskTitle", { itemId: this.id, title: value });
    },
    handleBlur() {
      this.readonly = true;
      this.$store.commit("updateTaskTitle", {
        itemId: this.id,
        title: this.title.trim(),
      });
    },
    handleScroll() {
      if (this.$refs.input !== document.activeElement) {
        this.$refs.input.scrollLeft = 0;
      }
    },
  },
};
</script>
