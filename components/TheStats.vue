<script setup lang="ts">
const stats = [
  { id: 1, name: "Communities", value: "10,000+" },
  { id: 2, name: "Proposals", value: "50,000+" },
  { id: 3, name: "Votes", value: "10M+" },
  { id: 4, name: "Uptime guarantee", value: "99.9%" },
];
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Proven effective governance
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-600">
            Trusted by over 10,000 communities
          </p>
        </div>
        <dl
          class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            v-for="stat in stats"
            :key="stat.id"
            class="flex flex-col bg-gray-400/5 p-8"
          >
            <dt class="text-sm font-semibold leading-6 text-gray-600">
              {{ stat.name }}
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-gray-900"
            >
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
