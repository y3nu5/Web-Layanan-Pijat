<template>
  <section 
    class="max-w-7xl mx-auto px-4 py-16"
  >
    <!-- Judul -->
    <h3 
      class="text-3xl font-bold text-left mb-3"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      Muhammad Yunus 11231066 ITK
    </h3>

    <h2 class='text-2xl font-bold text-left mb-2'
    >
        11231066 Institut Teknologi Kalimantan
    </h2>

    <h1 class="text-1xl text-left mb-2 "
    >
    Saya adalah seorang mahasiswa ITK prodi Informatika dengan peminatan Data Analyst / Data Scientist
    Hobi saya adalah bermain bola
    </h1>

    <div 
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
      data-aos="fade-up"
      data-aos-duration="2800"
    >
      <SkillCard
        :image="f"
        title="Power BI"
      />

      <SkillCard
        :image="l"
        title="MySQL"
      />

      <SkillCard
        :image="k"
        title="Python"
      />
    </div>
  </section>
</template>

<script setup>
import SkillCard from "../components/CardLayanan.vue";
</script>
