<template>
  <div class="menu">
    <router-link to="/" class="homelink">
      <h1 class="title">
        <em class="colored">LOCKDOWN</em>'<em class="light-grey">QUIZZ</em>
      </h1>
      <hr />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Grandstander", cursive;
  padding: 20px 0;
  @media (min-width: 540px) {
    padding-top: 40px;
    padding-bottom: 0px;
  }
}
.menu hr {
  width: 100%;
  border: 1px solid white;
}
.colored {
  background: #ff9010;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.light-grey {
  color: rgb(233, 233, 233);
}
.title {
  margin: 0;
  font-size: 36px;
  @media (min-width: 540px) {
    font-size: 52px;
  }
  @media (min-width: 1024px) {
    font-size: 86px;
  }
}
.homelink {
  text-decoration: none;
  color: #828283;
}
</style>
