<template>
  <section class="container py-12 mx-auto grid grid-cols-2 gap-12">
    <div v-for="job in jobs" :key="job.id" class="flex justify-between items-center bg-gray-700 rounded-md py-4 pl-6 pr-4 text-white">
      {{ job.title }}<span class="py-2 px-4 bg-yellow-200 rounded text-black">See Job</span>
    </div>
  </section>
  <!-- <ul class="px-3">
    <li v-for="job in jobs" :key="job.id">
      <h2>{{ job.title }}</h2>
      <p><strong>Created By:</strong> {{ job.createdBy }}</p>
      <p><strong>Created Date:</strong> {{ formatDate(job.createdDate) }}</p>
      <h3>Job Description:</h3>
      <div v-html="job.description.txt"></div>
      <h3>Skills Required:</h3>
      <ul>
        <li v-for="skill in job.ptJobSkills" :key="skill.id">{{ skill.name }}</li>
      </ul>
    </li>
  </ul> -->
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const jobs = ref([]);

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const fetchJobs = async () => {
  try {
    const response = await axios.get("/api/services/btiportalcorems/api/pt-job-posts/no-auth");
    jobs.value = response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

fetchJobs();
</script>
