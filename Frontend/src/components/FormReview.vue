<template>
  <section class="max-w-3xl mx-auto px-4 py-14">
    <h2 class="text-3xl font-bold mb-6 text-center">Review</h2>

    <form @submit.prevent="submitReview" class="space-y-5 bg-white p-6 rounded-xl shadow">

      <!-- Nama -->
      <div>
        <label class="block font-medium mb-1">Nama</label>
        <input
          v-model="name"
          type="text"
          required
          class="w-full border p-2 rounded-md"
        />
      </div>

      <!-- ⭐ Rating (Star Rating Interaktif) -->
      <div>
        <label class="block font-medium mb-2">Rating</label>

        <div class="flex space-x-1 cursor-pointer">
          <span
            v-for="n in 5"
            :key="n"
            @click="star = n"
            class="text-3xl transition select-none"
            :class="n <= star ? 'text-yellow-400' : 'text-gray-300'"
          >
            ★
          </span>
        </div>
      </div>

      <!-- Pendapat -->
      <div>
        <label class="block font-medium mb-1">Pendapat</label>
        <textarea
          v-model="comment"
          rows="4"
          required
          class="w-full border p-2 rounded-md"
        ></textarea>
      </div>

      <button
        class="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md"
      >
        Kirim Review
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const star = ref(0); // default 5 bintang
const comment = ref("");

function submitReview() {
  const newReview = {
    name: name.value,
    star: star.value,
    comment: comment.value,
    date: new Date().toISOString(),
  };

  const stored = localStorage.getItem("reviews");
  const reviews = stored ? JSON.parse(stored) : [];

  reviews.push(newReview);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  alert("Review berhasil dikirim!");

  name.value = "";
  star.value = 5;
  comment.value = "";
}
</script>
