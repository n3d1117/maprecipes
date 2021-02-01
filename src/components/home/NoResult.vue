<template>
  <div class="mt-5">
    <b-row class="d-flex justify-content-center">
      <p
        id="help-label"
        class="text-center ml-3 mr-3"
      >
        Non hai trovato la ricetta che cercavi? Puoi richiedere che venga aggiunta!
      </p>
    </b-row>

    <b-row class="d-flex justify-content-center mb-5">
      <button
        class="btn btn-primary btn-hoverable"
        type="button"
        data-toggle="modal"
        data-target="#richiedi-ricetta-modal"
      >
        <b-icon
          id="icon"
          icon="pencil-square"
          class="mr-2"
        />SUGGERISCI RICETTA
      </button>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'NoResult'
}
</script>

<style scoped>

#help-label {
  color: var(--text-color);
  font-size: 25px;
}

#icon {
  margin-bottom: 5px;
}

.btn-hoverable {
  background-color: var(--button-color);
  color: #fff;
  font-size: 29px;
  vertical-align: bottom;
  border-radius: 53px;
  box-shadow: var(--soft-shadow);
  border-color: rgba(255,255,255,0);
  padding-bottom: 2px;
}

.btn-hoverable:hover {
  background-color: var(--button-hover-color);
}

</style>