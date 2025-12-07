<template>
  <section class="px-6 py-10" >
    <h2
      class="text-2xl font-bold text-center mb-8"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      Layanan Populer
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <CardLayanan
        v-for="(item, index) in services"
        :key="item.title"
        :image="item.image"
        :title="item.title"
        :duration="item.desc"
        :price="item.price"
        :wa="waNumber"
        data-aos="fade-up"
        data-aos-duration="1000"
        :data-aos-delay="index * 200"
      />
    </div>
  </section>
</template>

<script setup>
import CardLayanan from "../components/CardLayanan.vue";

import cabutangin from "../assets/cabutangin.jpeg";
import pijatfullbody from "../assets/pijatfullbody.jpg";
import lulur from "../assets/lulur.jpg";
import keseleo from "../assets/keseleo.jpeg";

const waNumber = "6289648109012";

const services = [
  {
    title: "Pijat Full Body",
    desc: "Pijat dari ujung kepala hingga kaki untuk merilekskan tubuh.",
    image: pijatfullbody,
    price: "Rp 100.000",
  },
  {
    title: "Lulur",
    desc: "Perawatan untuk mengangkat sel kulit mati & mencerahkan kulit.",
    image: lulur,
    price: "Rp 100.000",
  },
  {
    title: "Cabut Angin",
    desc: "Terapi tradisional untuk mengeluarkan angin dalam tubuh.",
    image: cabutangin,
    price: "Rp 75.000",
  },
  {
    title: "Keseleo / Urut",
    desc: "Pemijatan untuk otot tegang, cidera ringan, dan keseleo.",
    image: keseleo,
    price: "Rp 80.000",
  },
];
</script>
