<template>
  <section class="px-6 py-10">
    <h2 class="text-2xl font-bold mb-6">Layanan Populer</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="item in services"
        :key="item.title"
        class="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 cursor-pointer"
      >
        <img
          :src="item.image"
          class="w-full h-40 object-cover rounded-xl mb-4"
        />

        <h3 class="text-lg font-semibold mb-1">
          {{ item.title }}
        </h3>

        <p class="text-sm text-gray-600 mb-4">
          {{ item.desc }}
        </p>

        <button
          class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 rounded-xl transition"
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import cabutangin from "../assets/cabutangin.jpeg";
import pijatfullbody from "../assets/pijatfullbody.jpg";
import lulur from "../assets/lulur.jpg";
import keseleo from "../assets/keseleo.jpeg";

export default {
  name: "LayananPopuler",
  data() {
    return {
      services: [
        {
          title: "Pijat Full Body",
          desc: "Pijat dari ujung kepala hingga kaki untuk merilekskan tubuh.",
          image: pijatfullbody,
        },
        {
          title: "Lulur",
          desc: "Perawatan untuk mengangkat sel kulit mati & mencerahkan kulit.",
          image: lulur,
        },
        {
          title: "Cabut Angin",
          desc: "Terapi tradisional untuk mengeluarkan angin dalam tubuh.",
          image: cabutangin,
        },
        {
          title: "Keseleo / Urut",
          desc: "Pemijatan untuk otot tegang, cidera ringan, dan keseleo.",
          image: keseleo,
        },
      ],
    };
  },
};
</script>
