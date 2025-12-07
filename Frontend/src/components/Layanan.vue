<template>
  <section 
    class="max-w-7xl mx-auto px-4 py-16"
    data-aos="fade-in"
    data-aos-duration="2800"
  >
    <!-- Judul -->
    <h2 
      class="text-3xl font-bold text-center mb-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      Layanan
    </h2>

    <!-- ====================== -->
    <!-- KATEGORI DEWASA -->
    <!-- ====================== -->
    <div 
      class="mb-6"
      data-aos="zoom-in"
      data-aos-duration="2800"
    >
      <span class="px-6 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
        Dewasa
      </span>
    </div>

    <div 
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
      data-aos="fade-up"
      data-aos-duration="2800"
    >
      <ServiceCard
        :image="fullbody"
        title="Pijat Full Body"
        duration="1.5 jam"
        price="Rp 100.000"
        wa="6289648109012"
      />

      <ServiceCard
        :image="lulur"
        title="Pijat Lulur"
        duration="1.5 jam"
        price="Rp 100.000"
        wa="6289648109012"
      />

      <ServiceCard
        :image="keseleo"
        title="Pijat Keseleo"
        duration="1.5 jam"
        price="Rp 100.000"
        wa="6289648109012"
      />

      <ServiceCard
        :image="cabutangin"
        title="Cabut Angin"
        duration="1.5 jam"
        price="Rp 100.000"
        wa="6289648109012"
      />
    </div>

    <!-- ====================== -->
    <!-- KATEGORI ANAK-ANAK -->
    <!-- ====================== -->
    <div 
      class="mb-6 mt-10"
      data-aos="zoom-in"
      data-aos-duration="900"
    >
      <span class="px-6 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
        Anak-Anak
      </span>
    </div>

    <div 
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      data-aos="fade-up"
      data-aos-duration="1100"
    >
      <ServiceCard
        :image="fullbody"
        title="Pijat Full Body"
        duration="1.5 jam"
        price="Rp 100.000"
        wa="6289648109012"
      />

      <ServiceCard
        :image="keseleo"
        title="Pijat Keseleo"
        duration="1.5 jam"
        price="Rp 80.000"
        wa="6289648109012"
      />

      <ServiceCard
        :image="cabutangin"
        title="Cabut Angin"
        duration="1.5 jam"
        price="Rp 75.000"
        wa="6289648109012"
      />
    </div>
  </section>
</template>

<script setup>
import ServiceCard from "../components/CardLayanan.vue";
import fullbody from "../assets/pijatfullbody.jpg";
import lulur from "../assets/lulur.jpg";
import keseleo from "../assets/keseleo.jpeg";
import cabutangin from "../assets/cabutangin.jpeg";
</script>
