<template>
  <div class="chatLine" style="margin-top: 10px; margin-left: 10px; display: flex; justify-content: flex-start">
    <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    <v-chip
      class="ma-2"
      color="primary">这是你的聊天框</v-chip>
  </div>
</template>

<script>
    export default {
        name: "ChatLine"
    }
</script>

<style scoped>

</style>
