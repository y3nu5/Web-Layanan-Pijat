<template>
  <div>
    <Hero />

    <LayananPopuler />

    <!-- ========================= -->
    <!--  REVIEW TERBARU DI HOME   -->
    <!-- ========================= -->
    <section class="max-w-10xl mx-auto px-7 py-7">
      <h2 class="text-2xl font-bold mb-8 text-center">Review Terbaru</h2>

      <div v-if="latest.length === 0" class="text-center text-gray-600">
        Belum ada review.
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          v-for="(r, index) in latest"
          :key="index"
          class="p-5 bg-white shadow rounded-xl hover:shadow-lg transition"
        >
          <div class="flex justify-between mb-2">
            <h3 class="font-semibold">{{ r.name }}</h3>
            <p class="text-yellow-500 font-bold">⭐ {{ r.star }}</p>
          </div>

          <!-- TANGGAL REVIEW -->
          <p class="text-sm text-gray-500 mb-2">
            {{ formatDate(r.date) }}
          </p>

          <p class="text-gray-700">{{ r.comment }}</p>
        </div>
      </div>

      <!-- Tombol lihat review lain -->
      <div class="text-center mt-8">
        <RouterLink
          to="/ReviewLain"
          class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition"
        >
          Lihat Review Lainnya 
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Hero from "../components/Hero.vue";
import LayananPopuler from "../components/LayananPopuler.vue";

const latest = ref([]);

// Format tanggal agar rapi (contoh: 12 Jan 2025)
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);

  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// Ambil review terbaru dari localStorage
onMounted(() => {
  const stored = localStorage.getItem("reviews");
  const reviews = stored ? JSON.parse(stored) : [];

  latest.value = reviews.slice(-4).reverse(); // Ambil 4 terbaru (dari belakang)
});
</script>
