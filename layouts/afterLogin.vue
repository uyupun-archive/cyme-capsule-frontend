<template>
  <div>
    <div class="c-container">
      <nuxt />
    </div>
    <footer class="border-top position-fixed fixed-bottom w-100 py-4">
      <div class="d-flex justify-content-around">
        <router-link to="/bury">
          <font-awesome-icon icon="utensil-spoon" class="c-footerIcon" />
        </router-link>
        <router-link to="/capsules">
          <font-awesome-icon icon="home" class="c-footerIcon" />
        </router-link>
        <router-link to="/search">
          <font-awesome-icon icon="search" class="c-footerIcon" />
        </router-link>
        <router-link to="/">
          <font-awesome-icon icon="sign-out-alt" class="c-footerIcon" />
        </router-link>
      </div>
    </footer>
  </div>
</template>
