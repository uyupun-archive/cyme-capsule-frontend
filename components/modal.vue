<template>
  <div>
    <div class="modal show" @click.self="$emit('close')">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <a class="close" @click="$emit('close')">
              <span aria-hidden="true">&times;</span>
            </a>
          </div>
          <div class="modal-body">
            {{ text }}
          </div>
          <div class="modal-footer border-top-0">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
}
</style>
