<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5 black-bar">
            {{ title }}
          </p>
          <p class="is-6 has-text-weight-bold">
            {{ name }}
          </p>
          <p>
            {{ role }}
          </p>
          <p>
            {{ institution }}
          </p>
          <p>
            {{ street }}
          </p>
          <p>
            {{ zip }} {{ city }}
          </p>
          <p>
            {{ country }}
          </p>
          <p>
            {{ phone }}
          </p>
          <p>
            {{ email }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    name: String,
    role: String,
    institution: String,
    street: String,
    zip: String,
    city: String,
    country: String,
    phone: String,
    email: String
  }
}
</script>

<style>
.card{
  box-shadow: none;
}

.black-bar{
    /* border-bottom: 4px solid #363636;
    max-width: 100px; */
    text-decoration: underline;
}

</style>
