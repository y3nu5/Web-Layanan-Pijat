<template>
  <Disclosure
    as="nav"
    class="bg-white shadow-sm sticky top-0 z-50"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">

        <!-- Logo -->
        <div class="flex items-center">
          <img class="h-12 w-auto sm:h-16" :src="logo" alt="PijatBuMega" />
          <span class="ml-3 font-semibold text-lg sm:text-xl text-gray-800">
            PijatBuMega
          </span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden sm:flex sm:items-center sm:space-x-8">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="px-3 py-2 text-sm font-medium transition"
            :class="activeMenu === item.name
              ? 'text-green-600 font-semibold'
              : 'text-gray-700 hover:text-green-600'"
            @click="setActive(item.name)"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="sm:hidden flex items-center">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition"
          >
            <Bars3Icon v-if="!open" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </DisclosureButton>
        </div>

      </div>
    </div>

    <!-- Mobile Panel -->
    <DisclosurePanel class="sm:hidden bg-white shadow">
      <div class="space-y-1 px-4 pt-4 pb-4">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="block px-3 py-3 rounded-md text-base font-medium transition"
          :class="activeMenu === item.name
            ? 'text-green-600 font-semibold bg-gray-100'
            : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'"
          @click="setActive(item.name)"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/vue";

import { RouterLink } from "vue-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";  // ✔ IMPORT HAMBURGER ICON

import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../assets/logo.png";

// Menu aktif
const activeMenu = ref("Beranda");

// Ganti menu aktif
function setActive(menuName) {
  activeMenu.value = menuName;
}

// Daftar menu
const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/AboutUs" },
  { name: "Layanan", href: "/Layanan" },
  { name: "Review", href: "/Review" },
  { name: "Kontak", href: "/Contact" },
];

// Inisialisasi AOS
onMounted(() => {
  AOS.init();
});
</script>
