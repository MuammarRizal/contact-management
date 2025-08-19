<script setup>
import { computed } from "vue";

defineProps({
  total_page: {
    type: Number || String,
    required: true,
  },
  page: {
    type: Number || String,
    required: true,
  },
});

const pageParams = computed(() => route.query.page || 1);
</script>

<template>
  <div class="mt-10 flex justify-center">
    <nav
      class="flex items-center space-x-3 bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 p-3 animate-fade-in"
    >
      <RouterLink
        :to="`/dashboard/contacts?page=${page--}`"
        class="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center"
      >
        <i class="fas fa-chevron-left mr-2"></i> Previous
      </RouterLink>
      <RouterLink
        :to="`/dashboard/contacts?page=${numPage}`"
        :class="`${page === numPage ? 'bg-gradient' : ''}
         px-4 py-2 text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md`"
        v-for="(numPage, index) in total_page"
        :key="index"
      >
        {{ numPage }}
      </RouterLink>

      <RouterLink
        :to="`/dashboard/contacts?page=${++page}`"
        class="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center"
        :disabled="true"
      >
        Next <i class="fas fa-chevron-right ml-2"></i>
      </RouterLink>
    </nav>
  </div>
</template>
