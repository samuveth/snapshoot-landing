<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Snapshot` : "Snapshot";
  },
  meta: [
    {
      name: "description",
      content:
        "Empower your community with Snapshot's customizable, user-friendly voting and governance platform for transparent and inclusive decision-making.",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
