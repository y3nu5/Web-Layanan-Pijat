<template>
  <section class="relative w-full h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden rounded-md">
    
    <img
      :src="gambarhero"
      alt="Hero"
      class="w-full h-full object-cover"
    />

    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <div class="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 text-white">
      <h1 class="text-xl md:text-3xl lg:text-4xl font-semibold max-w-xl leading-snug">
        “Dapatkan kembali ketenangan Anda,
        satu pijatan pada satu waktu.”
      </h1>

      <a
        href="#layanan"
        class="mt-6 w-fit px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-md"
      >
        Booking Now
      </a>
    </div>
  </section>
</template>

<script setup>
import gambarhero from "../assets/herogambar.jpg"; 
</script>
