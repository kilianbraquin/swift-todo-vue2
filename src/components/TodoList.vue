<template>
  <transition-group
    name="todo-list"
    tag="ul"
    v-if="tasks.length > 0"
    class="flex flex-col gap-4"
  >
    <li v-for="task in tasks" :key="task.id">
      <TodoItem
        :ref="'task-' + task.id"
        :is-dragged="draggedTaskId === task.id"
        :is-drag-hovered="dropTargetTaskId === task.id"
        v-bind="task"
        draggable="true"
        @dragover.prevent.native
        @dragstart.native="startDrag(task.id)"
        @dragend.prevent.native="endDrag(task.id)"
        @dragenter.native="enterDrag"
        @dragleave.native="leaveDrag"
      />
    </li>
  </transition-group>
</template>

<script>
import TodoNew from "./TodoNew.vue";
import TodoItem from "./TodoItem/TodoItem.vue";
import { mapState } from "vuex";

export default {
  components: { TodoItem, TodoNew },
  data() {
    return {
      draggedTaskId: undefined,
      dropTargetTaskId: undefined,
      baseId: 0,
    };
  },
  computed: {
    ...mapState({
      tasks: (state) => state.userData.tasks,
    }),
  },
  methods: {
    startDrag(id) {
      this.draggedTaskId = id;
      this.dropTargetTaskId = undefined;
    },
    enterDrag(event) {
      for (const key in this.$refs) {
        const componentRef = this.$refs[key][0];
        if (key.startsWith("task-") && key !== `task-${this.draggedTaskId}`) {
          if (componentRef.$el.contains(event.toElement)) {
            this.dropTargetTaskId = componentRef.id;
          }
        }
      }
    },
    leaveDrag(event) {
      if (this.dropTargetTaskId) {
        const ref = this.$refs[`task-${this.dropTargetTaskId}`][0].$el;
        if (!ref.contains(event.fromElement)) {
          this.dropTargetTaskId = undefined;
        }
      }
    },
    endDrag(id) {
      if (this.draggedTaskId === id) {
        if (
          this.dropTargetTaskId &&
          this.draggedTaskId !== this.dropTargetTaskId
        ) {
          this.$store.commit("moveTaskPosition", {
            itemId: this.draggedTaskId,
            targetPositionItemId: this.dropTargetTaskId,
          });
        }
        this.draggedTaskId = undefined;
        this.dropTargetTaskId = undefined;
      }
    },
  },
};
</script>

<style>
.todo-list-move {
  transition: transform 300ms;
}
.todo-list-leave-active {
  position: absolute;
  display: none;
}
</style>
