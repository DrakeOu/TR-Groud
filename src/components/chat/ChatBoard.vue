<template>
    <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: flex-end">
      <ChatLine></ChatLine>
      <ChatLine></ChatLine>
      <ChatLine></ChatLine>
      <MainChatLine></MainChatLine>
      <InputBoard></InputBoard>
    </div>
</template>

<script>
    import MainChatLine from "./MainChatLine";
    import ChatLine from "./ChatLine";
    import InputBoard from "./InputBoard";
    export default {
        name: "ChatBoard",
        components: {InputBoard, ChatLine, MainChatLine}
    }
</script>

<style scoped>

</style>
