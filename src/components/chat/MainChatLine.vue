<template>
  <div class="chatLine" style="margin-top: 10px; margin-right: 10px; display: flex; justify-content: flex-end">
    <v-chip
      class="ma-2"
      color="primary">这是我的聊天框</v-chip>
    <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
  </div>
</template>

<script>
    export default {
        name: "MainChatLine"
    }
</script>

<style scoped>

</style>
