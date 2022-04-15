<template>
  <div class="text-dark">
    <small class="text-light">{{ breadCrumb }}</small>
    <b-breadcrumb>
      <b-breadcrumb-item href="#home">
        <b-icon
          icon="house-fill"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon>
        Главная
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo"> Каталог </b-breadcrumb-item>
      <b-breadcrumb-item href="#bar">Ручная дуговая сварка</b-breadcrumb-item>
      <!-- <b-breadcrumb-item active>INVERTEC 400SX</b-breadcrumb-item> -->
      <b-breadcrumb-item active></b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>
