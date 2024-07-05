<template>
  <footer class="fixed inset-x-0 bottom-0 flex justify-center bg-mantle py-4">
    <ColorSwitcher />
  </footer>
</template>

<script>
import ColorSwitcher from "./ColorSwitcher.vue";

export default {
  components: { ColorSwitcher },
};
</script>
