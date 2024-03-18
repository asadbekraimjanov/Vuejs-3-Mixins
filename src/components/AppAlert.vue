<template>
  <el-card class="m-2">
    <el-button @click="alertToggle" type="primary">View message</el-button>
    <el-dialog v-model="openDial">
      <p style="font-size: 24px; font-weight: 600" :class="color[item-1]">Warning!</p>
      <span>This is an important message.</span>
      <template #footer>
        <div>
          <el-button @click="toggleAlert">Cancel</el-button>
          <el-button :type="tip[item-1]" @click="toggleAlert">Close</el-button>
        </div>
      </template>
    </el-dialog>
  </el-card>
</template>

<script>
import alertMixin from "@/AlertMixin";

export default {
  mixins: [alertMixin]
}
</script>

<style scoped>
.col-pri{
  color: var(--el-color-primary);
}
.col-dan{
  color: var(--el-color-danger);
}
</style>
