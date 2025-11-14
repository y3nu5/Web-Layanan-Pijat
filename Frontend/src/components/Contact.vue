<template>
  <section id="kontak" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">

      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-12">
        Hubungi Kami
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <!-- Kontak Info -->
        <div class="bg-white shadow-md rounded-xl p-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Informasi Kontak</h3>

          <ul class="space-y-4 text-gray-600">
            <li class="flex items-start space-x-3">
              <span class="text-green-600 text-xl">📍</span>
              <p>Balikpapan, Kalimantan Timur</p>
            </li>

            <li class="flex items-start space-x-3">
              <span class="text-green-600 text-xl">📞</span>
              <p>0812-3456-7890</p>
            </li>

            <li class="flex items-start space-x-3">
              <span class="text-green-600 text-xl">✉️</span>
              <p>layananurut@gmail.com</p>
            </li>

            <li class="flex items-start space-x-3">
              <span class="text-green-600 text-xl">⏰</span>
              <p>Setiap Hari — 09.00 - 22.00 WITA</p>
            </li>
          </ul>

          <div class="mt-6">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              class="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>

        <!-- Form Pesan -->
        <div class="bg-white shadow-md rounded-xl p-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Kirim Pesan</h3>

          <form class="space-y-5">
            <div>
              <label class="block text-gray-700 mb-1">Nama</label>
              <input
                type="text"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label class="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="nama@example.com"
              />
            </div>

            <div>
              <label class="block text-gray-700 mb-1">Pesan</label>
              <textarea
                rows="4"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Tulis pesan Anda..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium shadow-md"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>
