<template>
  <Disclosure as="nav" class="bg-white shadow-sm" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        
        <!-- Logo -->
        <div class="flex items-center">
          <img
            class="h-10 w-auto"
            :src="logo"
            alt="PijatBuMega"
          />
          <span class="ml-3 font-semibold text-lg text-gray-800">
            PijatBuMega
          </span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden sm:flex sm:space-x-8">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-gray-700 hover:text-green-600 hover:font-medium px-3 py-2 text-sm"
            :class="item.current ? 'text-green-600 font-semibold' : ''"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="sm:hidden flex items-center">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200"
          >
            <Bars3Icon v-if="!open" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </DisclosureButton>
        </div>

      </div>
    </div>

    <!-- Mobile Panel -->
    <DisclosurePanel class="sm:hidden bg-white shadow">
      <div class="space-y-1 px-4 pt-3 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          class="block px-3 py-2 rounded-md text-base text-gray-700 hover:text-green-600 hover:bg-gray-100"
        >
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/vue";

import logo from "../assets/logo.png";

// Menu sesuai desain
const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "#tentang" },
  { name: "Layanan", href: "#layanan" },
  { name: "Review", href: "#review" },
  { name: "Kontak", href: "/contact" },
];
</script>
