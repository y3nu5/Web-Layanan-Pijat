<template>
  <section
    class="relative w-full h-[500px] md:h-[480px] lg:h-[520px] overflow-hidden rounded-md bg-green-200"
    data-aos="fade-in"
    data-aos-duration="1000"
  >
    <!-- Background + Transparansi -->
    <div class="absolute inset-0">
  <img 
    :src = "gambarhero" 
    class="w-full h-full object-cover" 
  />
</div>


    <!-- Konten -->
    <div class="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 text-white">
      
      <!-- Teks judul -->
      <h1 
        class="text-xl md:text-3xl lg:text-4xl font-semibold max-w-xl leading-snug"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        Capek, pegal-pegal, keseleo, masuk angin, pijat BuMega solusinya.
      </h1>

      <!-- Tombol -->
      <a
        href="https://wa.me/6289648109012?text=Halo,%20saya%20ingin%20booking%20pijat"
        class="mt-6 w-fit px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-md"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
        id="button"
      >
        Booking Now
      </a>
    </div>
  </section>
</template>

<script setup>
import gambarhero from "../assets/gambarhero.jpeg";
</script>

