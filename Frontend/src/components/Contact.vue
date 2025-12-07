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
              <p>Jalan Tengiri V RT 24 Kel Manggar Baru</p>
            </li>

            <li class="flex items-start space-x-3">
              <span class="text-green-600 text-xl">📞</span>
              <p>0896-4810-9012</p>
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

        <!-- Google Maps -->
        <div class="bg-white shadow-md rounded-xl p-4">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Lokasi Kami</h3>

          <!-- Klik map langsung buka Google Maps -->
          <a
            href="https://www.google.com/maps/@-1.2220853,116.9695729,20z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d318.0944968392194!2d116.9695729!3d-1.2220853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14dea0b8a3e4d%3A0x0000000000000000!2sGg.%20Pesut%20IV%2C%20Manggar%20Baru%2C%20Balikpapan%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="350"
              class="rounded-xl"
              style="border:0; pointer-events:none;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>
