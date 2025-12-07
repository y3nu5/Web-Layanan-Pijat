<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <!-- Gambar -->
    <img :src="image" :alt="title" class="w-full h-48 object-cover">

    <!-- Isi Card -->
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <p class="text-sm text-gray-600">{{ duration }}</p>

      <p class="text-lg font-bold mt-2">{{ price }}</p>

      <!-- Tombol Pesan Sekarang -->
      <a
        :href="waLink"
        target="_blank"
        class="block text-center w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Pesan Sekarang
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  image: String,
  title: String,
  duration: String,
  price: String,
  wa: String // nomor WhatsApp
});

// Buat link WhatsApp otomatis berdasarkan title
const waLink = computed(() => {
  const message = `Halo, saya ingin pesan layanan ${props.title}`;
  return `https://wa.me/${props.wa}?text=${encodeURIComponent(message)}`;
});
</script>
