<template>
  <section class="max-w-5xl mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-center mb-10">Semua Review</h2>

    <!-- Jika belum ada review -->
    <div v-if="reviews.length === 0" class="text-center text-gray-600">
      Belum ada review.
    </div>

    <!-- Daftar review -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(r, index) in reviews"
        :key="index"
        class="p-5 bg-white shadow rounded-xl hover:shadow-lg transition"
      >
        <div class="flex justify-between mb-2">
          <h3 class="font-semibold">{{ r.name }}</h3>

          <!-- Bintang -->
          <div class="flex">
            <span
              v-for="n in 5"
              :key="n"
              class="text-xl"
              :class="n <= r.star ? 'text-yellow-400' : 'text-gray-300'"
            >
              ★
            </span>
          </div>
        </div>

        <p class="text-gray-700 mb-2">{{ r.comment }}</p>

        <!-- Tanggal -->
        <p class="text-sm text-gray-500">
          {{ new Date(r.date).toLocaleDateString() }}
        </p>
      </div>
    </div>

    <!-- Tombol kembali -->
    <div class="text-center mt-10">
      <RouterLink
        to="/"
        class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition"
      >
        Kembali ke Beranda
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const reviews = ref([]);

onMounted(() => {
  const stored = localStorage.getItem("reviews");
  reviews.value = stored ? JSON.parse(stored).reverse() : [];
});
</script>
