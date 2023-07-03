<template>
  <!-- <div class="app">
    <SlotParent> </SlotParent>
  </div> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Concepts</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Vue Concepts
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><router-link to="/"> Home </router-link> </li>
              <li><router-link to="/directiveex">Directive Example</router-link> </li>
              <li><router-link to="/counter">Composables</router-link> </li>
              <!-- <li><router-link to="/watcher">Watcher</router-link> </li>
              <li><router-link to="/watchercomposition">Watcher-Composition API</router-link> </li>
              <li><router-link to="/tempconverter">Temp Converter-Composition API</router-link> </li>
              <li><router-link to="/countdowntime">Count Down Time </router-link> </li> -->
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
    <router-view/> 
  </template>
  