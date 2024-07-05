<template>
  <div>
    <label :for="'todo-item-checkbox-' + id">
      <input
        :id="'todo-item-checkbox-' + id"
        class="hidden"
        type="checkbox"
        @input="$store.commit('toggleTask', id)"
      />
      <span
        class="relative block h-6 w-6 rounded-lg border-2 border-primary leading-[0]"
      >
        <transition name="todo-item-checked" v-if="checked" appear>
          <span class="absolute -inset-px rounded-lg bg-primary">
            <Check
              class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </span>
        </transition>
      </span>
    </label>
  </div>
</template>
<script>
import Check from "../../icons/Check.vue";

export default {
  components: { Check },
  props: { id: String, checked: Boolean },
};
</script>

<style>
.todo-item-checked-enter-active {
  animation: jump-in ease-in 0.3s;
}
.todo-item-checked-leave-active {
  animation: jump-in ease-in 0.3s reverse;
}
@keyframes jump-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
