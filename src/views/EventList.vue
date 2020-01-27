<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import axios from "axios";

export default {
  components: {
    EventCard
  },
  created() {
    axios
      .get("http://localhost:3000/events")
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  }
};
</script>

<style></style>
