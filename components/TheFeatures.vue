<script setup lang="ts">
const features = [
  {
    name: "Custom Branding.",
    description:
      "Create your own governance portal and use your own branding, color schemes and domain name.",
    icon: "CloudArrowUpIcon",
  },
  {
    name: "Diverse Voting Systems.",
    description:
      "Choose from a range of voting systems like Single Choice, Approval Voting, Quadratic Voting and more.",
    icon: "LockClosedIcon",
  },
  {
    name: "Flexible Voting Strategies.",
    description:
      "Customize how voting power is calculated through single or combined strategies, allowing you to vote with ERC20s, NFTs, other contracts and more.",
    icon: "ServerIcon",
  },
  {
    name: "Advanced moderation.",
    description:
      "Utilize Gitcoin Passport, POAPs or other solutions to dictate who can create a proposal, leave a comment or cast a vote.",
    icon: "ServerIcon",
  },
];
</script>

<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-screen-xl md:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start"
      >
        <div class="px-6 lg:px-0 lg:pt-4 lg:pr-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-primary">
              Decide faster
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Simple governance solutions
            </p>

            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-gray-900">
                  <component
                    :is="feature.icon"
                    class="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="sm:px-6 lg:px-0">
          <div
            class="relative isolate overflow-hidden bg-primary px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none"
          >
            <div
              class="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-30 ring-1 ring-inset ring-white"
              aria-hidden="true"
            />
            <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <img
                src="@/assets/img/features1.png"
                alt="Product screenshot"
                width="2432"
                height="1442"
                class="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
              />
            </div>
            <div
              class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
