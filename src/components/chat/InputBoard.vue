<template>
    <div>
      <v-divider></v-divider>
      <v-row >
        <v-btn-toggle v-model="toggle_exclusive">
          <v-btn>
            <v-icon>mdi-format-align-left</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-center</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-right</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-justify</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-row>

      <v-textarea
        outlined
        label="Outlined textarea"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      ></v-textarea>
    </div>
</template>

<script>
    export default {
        name: "InputBoard"
    }
</script>

<style scoped>

</style>
