<script setup lang="ts">
import { ref } from "vue";
import { DialogPanel, Dialog } from "@headlessui/vue";

const mobileMenuOpen = ref(false);

const navigation = [
  { name: "About", to: "#" },
  { name: "Features", to: "#" },
  { name: "Pricing", to: "#" },
  { name: "Resources", to: "#" },
];
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-6 pt-6 lg:px-8">
    <nav class="flex items-center justify-between" aria-label="Global">
      <div class="flex lg:flex-1">
        <NavbarLogo />
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <i-heroicons-bars-3-solid class="text-xl" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="font-semibold leading-6 text-gray-900"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </nav>
    <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <DialogPanel
        focus="true"
        class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
      >
        <div class="flex items-center justify-between">
          <NavbarLogo />
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <i-heroicons-x-mark class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >{{ item.name }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </div>
</template>
