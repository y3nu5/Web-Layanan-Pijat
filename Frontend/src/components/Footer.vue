<template>
  <footer class="bg-gray-900 text-gray-300 py-10 mt-8">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

      <!-- Logo dan Deskripsi -->
      <div>
        <h2 class="text-2xl font-semibold text-white mb-3">PijatBuMega</h2>
        <p class="text-sm leading-relaxed">
          Jalan Tengiri V RT 24 NO 37 Kelurahan Manggar Baru.
        </p>
      </div>

      <!-- Menu Navigasi -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Navigasi</h3>
        <ul class="space-y-2">
          <li><RouterLink to="/" class="hover:text-white">Home</RouterLink></li>
          <li><RouterLink to="/aboutus" class="hover:text-white">Tentang Kami</RouterLink></li>
          <li><RouterLink to="/layanan" class="hover:text-white">Layanan</RouterLink></li>
          <li><RouterLink to="/review" class="hover:text-white">Review</RouterLink></li>
          <li><RouterLink to="/Kontak" class="hover:text-white">Kontak</RouterLink></li>
        </ul>
      </div>

<!-- const routes = [
  { path: '/', component: Home },
  { path: '/Contact', component: Contact},
  {path: '/AboutUs', component: AboutUs},
  {path: '/Layanan', component: Layanan},
  { path: '/Review', component: Review },
  { path: '/ReviewLain', component: ReviewLain }
]; -->

      <!-- Layanan Populer -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Layanan Populer</h3>
        <ul class="space-y-2">
          <li>Pijat Full Body</li>
          <li>Lulur Badan</li>
          <li>Pijat Keseleo</li>
          <li>Cabut Angin</li>
        </ul>
      </div>

      <!-- Kontak -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Kontak Kami</h3>
        <ul class="space-y-2">
          <li>📍 Balikpapan, Kalimantan Timur</li>
          <li>📞 0812-3456-7890</li>
          <li>✉️ layananurut@gmail.com</li>
        </ul>
      </div>
    </div>

    <!-- Bawah Footer -->
    <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
      © 2025 PijatBuMega. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
</script>
