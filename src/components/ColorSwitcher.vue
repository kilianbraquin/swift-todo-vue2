<template>
  <ul class="flex gap-2">
    <li v-for="color in allColors" :key="color" class="leading-[0]">
      <button
        @click="selectedColor = color"
        :style="'background:' + color"
        class="h-4 w-4 rounded-sm outline-2 focus:outline-white"
      />
    </li>
  </ul>
</template>

<script>
const colors = [
  "#f5e0dc",
  "#f2cdcd",
  "#f5c2e7",
  "#cba6f7",
  "#f38ba8",
  "#eba0ac",
  "#fab387",
  "#f9e2af",
  "#a6e3a1",
  "#94e2d5",
  "#89dceb",
  "#74c7ec",
  "#89b4fa",
  "#b4befe",
];

export default {
  data() {
    return {
      selectedColor: colors[Math.floor(Math.random() * colors.length)],
    };
  },
  computed: {
    allColors() {
      return colors;
    },
  },
  created() {
    document.body.style.setProperty("--primary-color", this.selectedColor);
  },
  watch: {
    selectedColor(currentSelectedColor) {
      document.body.style.setProperty("--primary-color", currentSelectedColor);
    },
  },
};
</script>
