<template>
    <nav class="navbar">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home-page' }">Horizone</router-link>
        <button class="navbar-toggler" type="button" @click="toggleMenu">
          <i class="fas fa-bars"></i>
        </button>
        <div class="navbar-collapse" :class="{ 'show': isMenuOpen }">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link class="nav-link" :to="{ name: 'home-page' }">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" :to="{ name: 'edit-page' }">Edit</router-link></li>
            <li class="nav-item"><router-link class="nav-link" :to="{ name: 'create-page' }">Create</router-link></li>
            <li class="nav-item" v-if="$store.state.isLogin">
              <router-link class="nav-link" :to="{ name: 'edit-page' }">{{ $store.state.user.userName }}</router-link>
            </li>
            <li class="nav-item" v-if="!$store.state.isLogin">
              <router-link class="nav-link" :to="{ name: 'login-page' }">Log In</router-link>
            </li>
            <li class="nav-item" v-if="$store.state.isLogin">
              <router-link class="nav-link" :to="{ name: 'home-page' }" @click="userLogout">Log Out</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      ...mapActions(['userLogout']),
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    padding: 10px 20px;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
  }
  
  .navbar-toggler {
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
  }
  
  .navbar-collapse {
    display: none;
  }
  
  .navbar-collapse.show {
    display: block;
  }
  
  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
  }
  
  .nav-item {
    margin: 0;
  }
  
  .nav-link {
    color: #333;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
  }
  
  .nav-link:hover {
    color: #007bff;
  }
  
  @media (max-width: 768px) {
    .navbar-collapse {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  </style>