<template>
    <header class="masthead" :style="`background-image: url('${bg}')`">
      <div class="container">
        <div class="header-content">
          <h1>{{ title }}</h1>
          <span class="subheading">{{ subHeading }}</span>
          <slot></slot>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    props: {
      className: { type: String, default: 'site-heading' },
      bg: { type: String, default: 'assets/img/home-bg.jpg' },
      title: { type: String, default: 'Home Page' },
      subHeading: { type: String, default: '' },
    },
  }
  </script>
  
  <style scoped>
  .masthead {
    position: relative;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
  }
  
  .container {
    max-width: 800px;
    padding: 0 20px;
  }
  
  .header-content {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 8px;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .subheading {
    font-size: 1.25rem;
    color: #ddd;
  }
  </style>