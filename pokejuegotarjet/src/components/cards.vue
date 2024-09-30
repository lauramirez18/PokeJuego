<template>
    <div class="container">
      <header>
        <img src="https://i.pinimg.com/736x/e7/59/04/e75904df127a976472f97807b340137a.jpg" alt="">
      </header>
      <div class="body-container">
        <div class="busqueda">
       
          <h1>Busca tu Pokemon Favorito</h1>
          <div class="buscador">
            <input class="input" name="text" placeholder="nombre o número..." type="search" v-model="busqueda">
  
            <button class="button-with-icon" @click="getPokemon">
              <svg class="icon" id="Play" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path class="color000000 svgShape" fill="#ffffff"
                  d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z">
                </path>
              </svg>
              <span class="text">Buscar</span>
            </button>
          </div>
        </div>
        <div class="flex">
          <div v-if="mensajeError" class="error-container">
            <h4 class="error-message">{{ mensajeError }}</h4>
            <img :src="imagenError" alt="Error Image" class="error-image">
          </div>
          <div class="card" v-if="nombre">
            
            <div class="card-header">
              <div class="numero">
                 <p># {{ numero }}</p>
              </div>
              </div>
            <div class="card-body">
              <img :src="imagen" alt="" class="card-body-img" :style="{ boxShadow: '0px 0px 10px 10px ' + getTypeColor(tipos[0]?.type.name) }" />
              <h1 class="card-body-title">
                {{ nombre.toUpperCase() }} 
              </h1>
              <div v-if="altura && peso" class="pesoAltura">
                    <h3>Altura: {{ altura }} m</h3>
                    <h3>Peso: {{ peso }} kg</h3>
                  </div> 
                  <div class="ha-de">
                  <div v-if="debilidades.length > 0" class="tipo">
                    <h3>DEBILIDADES</h3>
                    <div v-for="debilidad in debilidades" :key="debilidad" class="tag"
                    :style="{ backgroundColor: getTypeColor(debilidad) }">
                      {{ debilidad.toUpperCase() }}
                    </div>
                  </div>
                  <div v-if="tipos.length > 0" class="tipo">
                    <h3 class="subtitulo">TIPO:</h3>
                    
                      <div v-for="(tipo, index) in tipos" :key="index"
                        :style="{ backgroundColor: getTypeColor(tipo.type.name) }" class="tag">{{ tipo.type.name.toUpperCase() }}
                      </div>
                    
                  </div>
                </div>
            </div>
            <div class="card-footer">
              <div class="stat">
                <h2 v-if="nombre" class="estadisticas">ESTADÍSTICAS</h2>
                <div v-for="stat in stats" :key="stat.name" class="stat-bar">
                  <span>{{ stat.name.toUpperCase() }}: {{ stat.value }}/255</span>
                  <progress :value="stat.value" max="255"></progress>
                </div>
  
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import bienvenida from './components/bienvenida.vue';
  
  
  let busqueda = ref('');
  let imagen = ref('');
  let imagenMini = ref('');
  let nombre = ref('');
  let numero = ref('');
  let mensajeError = ref('');
  let imagenError = ref('');
  let altura = ref('');
  let peso = ref('');
  let tipos = ref([]);
  let stats = ref([]);
  
  let debilidades = ref([]);
  
  
  async function getPokemon() {
  
    mensajeError.value = '';
    imagenError.value = '';
  
    if (!busqueda.value) {
      nombre.value = '';
      imagen.value = '';
      imagenMini.value = '';
      numero.value = '';
      tipos.value = [];
      mensajeError.value = 'El campo de búsqueda está vacío. Por favor, ingresa un nombre o número.';
      imagenError.value = 'https://i.pinimg.com/564x/a3/bd/ce/a3bdcee88b740d1785bbd79f29355819.jpg';
      return;
    }
  
    let url = `https://pokeapi.co/api/v2/pokemon/${busqueda.value.toLowerCase()}`;
    try {
      let { data } = await axios.get(url);
      nombre.value = data.name;
      numero.value = data.id;
      imagen.value = data.sprites.other.dream_world.front_default || '';
      imagenMini.value = data.sprites.front_default || '';
      tipos.value = data.types;
      mensajeError.value = '';
      imagenError.value = '';
      altura.value = data.height / 10;
      peso.value = data.weight / 10;
  
  
      debilidades.value = calcularDebilidades(data.types);
  
      stats.value = data.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat
      }));
  
    } catch (error) {
      nombre.value = '';
      imagen.value = '';
      mensajeError.value = 'Pokémon no encontrado. Intenta nuevamente. ';
      imagenError.value = 'https://i.pinimg.com/564x/a3/04/3a/a3043ab14464b8d69c3495ea3261b38f.jpg';
      imagen.value = '';
    }
  }
  
  const tipoDebilidades = {
    normal: ["fighting"],
    fire: ["water", "rock", "ground"],
    water: ["electric", "grass"],
    electric: ["ground"],
    grass: ["fire", "ice", "poison", "flying", "bug"],
    ice: ["fire", "fighting", "rock", "steel"],
    fighting: ["flying", "psychic", "fairy"],
    poison: ["ground", "psychic"],
    ground: ["water", "ice", "grass"],
    flying: ["electric", "ice", "rock"],
    psychic: ["bug", "ghost", "dark"],
    bug: ["fire", "flying", "rock"],
    rock: ["water", "grass", "fighting", "ground", "steel"],
    ghost: ["ghost", "dark"],
    dragon: ["ice", "dragon", "fairy"],
    dark: ["fighting", "bug", "fairy"],
    steel: ["fire", "fighting", "ground"],
    fairy: ["poison", "steel"],
  };
  
  function calcularDebilidades(tipos) {
    let debilidades = [];
  
  
    tipos.forEach(tipoInfo => {
      let tipo = tipoInfo.type.name;
  
  
      if (tipoDebilidades[tipo]) {
        tipoDebilidades[tipo].forEach(debilidad => {
          if (!debilidades.includes(debilidad)) {
            debilidades.push(debilidad);
          }
        });
      }
    });
  
    return debilidades;
  }
  
  function getTypeColor(type) {
    const typeColors = {
      normal: "#A0A2A0",
      fire: "#E72324",
      water: "#2481F0",
      electric: "#FAC100",
      grass: "#3DA224	",
      ice: "#3DD9FF	",
      fighting: "#FF8100",
      poison: "#923FCC",
      ground: '#92501B',
      flying: '#82BAF0',
      psychic: '#EF3F7A	',
      bug: '#92A212	',
      rock: '#B0AB82',
      ghost: '#713F71',
      dragon: '#4F60E2',
      dark: '#4F3F3D',
      steel: '#60A2B9	',
      fairy: '#EF71F0',
    };
  
    return typeColors[type] || '#ffffff';
  }
  function color(tipo) {
    return getTypeColor(tipo);
  }
  
  function colorDebilidad(debilidad) {
    return tipoDebilidades[debilidad] || "#FFFFFF";
  }
  
  
  
  </script>
  