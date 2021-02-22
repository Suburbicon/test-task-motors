<template>
  <div class="sort">
    <span class="sort__label">Сортировка по алфавиту</span>
    <label class="sort__switch">
      <input type="checkbox" class="sort__input" />
      <span class="sort__slider round"></span>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sort {
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__label {
    color: #626262;
    font-size: 16px;
  }

  &__switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;

    input {
      display: none;
    }
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #626262;
    transition: 0.3s;

    &::before {
      position: absolute;
      content: "";
      height: 15px;
      width: 15px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.3s;
    }
  }

  &__input:checked + &__slider {
    background-color: #2196fe;
  }

  &__input:focus + &__slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &__input:checked + &__slider::before {
    -webkit-transform: translateX(17px);
    -ms-transform: translateX(17px);
    transform: translateX(17px);
  }

  &__slider.round {
    border-radius: 34px;

    &::before {
      border-radius: 50%;
    }
  }
}
</style>
