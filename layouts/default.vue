<template>
  <div>
    <nav class="navbar has-shadow is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://robohash.org/bumble" alt="">
        </a>
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
        <!-- Logo, tagline, and navbar-burger -->
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <small>Publishing at the speed of technology</small>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              Alex Johnson
            </div>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <i class="fa fa-user-circle-o" />
                  </span>
                  Profile</div>
              </a>
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <i class="fa fa-bug" />
                  </span>
                  Report bug
                </div>
              </a>
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <i class="fa fa-sign-out" />
                  </span>
                  Sign Out
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style>

</style>
