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
    padding-bottom: 20px;
  }
}
.menu hr {
  width: 100%;
  border: 1px solid white;
}
.colored {
  background: rgb(131, 58, 180);
  background: -moz-linear-gradient(
    90deg,
    rgb(147, 66, 201) 0%,
    rgba(253, 29, 29, 1) 20%,
    rgba(252, 176, 69, 1) 40%,
    rgba(69, 179, 252, 1) 60%,
    rgb(226, 240, 77) 80%,
    rgba(69, 252, 73, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgb(157, 70, 216) 0%,
    rgba(253, 29, 29, 1) 20%,
    rgba(252, 176, 69, 1) 40%,
    rgba(69, 179, 252, 1) 60%,
    rgb(228, 241, 77) 80%,
    rgba(69, 252, 73, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgb(164, 72, 224) 0%,
    rgba(253, 29, 29, 1) 20%,
    rgba(252, 176, 69, 1) 40%,
    rgba(69, 179, 252, 1) 60%,
    rgb(231, 245, 78) 80%,
    rgba(69, 252, 73, 1) 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#833ab4",endColorstr="#45fc49",GradientType=1);
}
.light-grey {
  color: rgb(233, 233, 233);
}
.title {
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