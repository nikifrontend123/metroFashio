<template>
  <div>
    <div class="fab-container">
      <div class="fab shadow">
        <div class="fab-content">
          <span class="fs-4 text-white"><i class="bi bi-plus-lg"></i></span>
        </div>
      </div>
      <div class="sub-button text-danger" style="font-weight: 600;">
        <a target="_blank">
          <span class="">New Request</span>
        </a>
      </div>
      <div class="sub-button text-danger" style="font-weight: 600;">
        <a target="_blank">
          <span class="">New Member</span>
        </a>
      </div>
      <div class="sub-button text-danger" style="font-weight: 600;">
        <a target="_blank">
          <span class="">New Catelog</span>
        </a>
      </div>
      <div class="sub-button text-danger" style="font-weight: 600;">
        <a target="_blank">
          <span class="">New Order</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$primary: rgb(75, 162, 255);

.fab-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  user-select: none;
  position: fixed;
  bottom: 100px;
  right: 10px;

  &:hover {
    height: 100%;

    .sub-button:nth-child(2) {
      transform: translateY(-80px);
    }

    .sub-button:nth-child(3) {
      transform: translateY(-140px);
    }

    .sub-button:nth-child(4) {
      transform: translateY(-200px);
    }

    .sub-button:nth-child(5) {
      transform: translateY(-260px);
    }

    .sub-button:nth-child(6) {
      transform: translateY(-320px);
    }
  }

  .fab {
    position: relative;
    height: 65px;
    width: 65px;
    background-color: $primary;
    border-radius: 50%;
    z-index: 2;

    &::before {
      content: " ";
      position: absolute;
      bottom: 0;
      right: 0;
      height: 35px;
      width: 35px;
      background-color: inherit;
      border-radius: 0 0 10px 0;
      z-index: -1;
    }

    .fab-content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      border-radius: 50%;

    }
  }

  .sub-button {
    text-align: center;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 10px;
    right: 5px;
    height: 50px;
    width: 50px;
    background-color: transparent;
    border-radius: 50%;
    transition: all .3s ease;

    &:hover {
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 600px) {
  .fab-container {
    bottom: 100px;
    right: 10px;
  }
}
@media only screen and (min-width: 600px) {
  .fab-container {
    bottom:30px;
    right: 10px;
  }
}
</style>