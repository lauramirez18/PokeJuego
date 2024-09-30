<template>
  <div id="app">
    <div v-if="showWelcomeModal" class="modalWelcome">
      <div class="modal-inicio">
        <div class="modal-header">
          <img src="https://i.ytimg.com/vi/VbAbyVHewXo/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCgp9MxHlkfgrgraXS5Hsv6PMpOKg" alt="">
        </div>
        <div class="modal-body">
          <img src="https://i.pinimg.com/originals/2d/ee/a5/2deea5fdee95d6e3ba3fec09ce9f7650.gif" alt="">
         <q-btn @click="showRoundSelectionModal" push color="primary" label="a jugar" class="boton-inicio" />
        </div>
        
      </div>
     
    </div>
    <div v-if="showRoundSelection" class="rounds">
      <div class="modal-content">
        <h2>Selecciona las rondas</h2>
        <div class="cardsRounds">
          
          <div class="card red" @click="setRounds(2)">
            <p class="tip">2 rondas</p>
          </div>
          <div class="card blue" @click="setRounds(4)">
            <p class="tip">4 rondas</p>
          </div>
          <div class="card green" @click="setRounds(8)">
            <p class="tip">8 rondas</p>
          </div>
        </div>
        <q-input v-model.number="rounds" :dense="dense" label="Rondas" readonly />
        <q-btn @click="startGame" push color="primary" label="Comenzar Juego" />
      </div>
    </div>
    <div v-if="isGameStarted">
      <div class="content-game">
        <h2>PokeBatallas</h2>
        
        

      <div class="content-batalla">
       
        <div class="part1-batalla">
           <p>Ronda {{ currentRound }} de {{ rounds }}</p>
        <div class="seleccionar">
          <div class="seleccionar">
  <select v-model="selectedStat" class="input-seleccionar" aria-placeholder="seleccionar">
    <option v-for="stat in stats" :key="stat" :value="stat">{{ stat }}</option>
  </select>
  <q-btn @click="playRound" push color="primary" label="a jugar" />
  <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
</div>

        </div>
        <div class="puntuacion">
             <p>{{ resultMessage }}</p>
        <p>Tu puntuación: {{ scores.playerScore }}</p>
        <p>Puntuación del oponente: {{ scores.opponentScore }}</p>
          </div>
        </div>
      </div>
    </div>
        <div class="part2-batalla">
          
          <div class="card" v-if="showPlayerCards">
        <div class="player">
          <div class="card-header"></div>
          <div class="card-body">
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${playerPokemon.id}.png`"
            alt="">
             <h3>{{ playerPokemon.name }}</h3>
             <p v-if="selectedStat === 'HP'">HP: {{ playerPokemon.hp }}</p>
             <p v-if="selectedStat === 'Attack'">Attack: {{ playerPokemon.attack }}</p>
             <p v-if="selectedStat === 'Defense'">Defense: {{ playerPokemon.defense }}</p>
             <p v-if="selectedStat === 'Speed'">Speed: {{ playerPokemon.speed }}</p>
             <p v-if="selectedStat === 'Special Attack'">Special Attack: {{ playerPokemon.special_attack }}</p>
             <p v-if="selectedStat === 'Special Defense'">Special Defense: {{ playerPokemon.special_defense }}</p>
          </div>
          
        </div>
        <div class="player">
          <div class="card-header"></div>
          <div class="card-body">
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${opponentPokemon.id}.png`" alt="" >
          <h3>{{ opponentPokemon.name }}</h3>
          <p v-if="selectedStat === 'HP'">HP: {{ opponentPokemon.hp }}</p>
             <p v-if="selectedStat === 'Attack'">Attack: {{ opponentPokemon.attack }}</p>
             <p v-if="selectedStat === 'Defense'">Defense: {{ opponentPokemon.defense }}</p>
             <p v-if="selectedStat === 'Speed'">Speed: {{ opponentPokemon.speed }}</p>
             <p v-if="selectedStat === 'Special Attack'">Special Attack: {{ opponentPokemon.special_attack }}</p>
          </div>
          
        </div>
      </div>
    </div>
        
        


      

     

    <div v-if="showResultModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="resetGame">&times;</span>
        <h2>Resultados Finales</h2>
        <p>Tu puntuación: {{ scores.playerScore }}</p>
        <p>Puntuación del oponente: {{ scores.opponentScore }}</p>
        <p v-if="scores.playerScore > scores.opponentScore">¡Ganaste!</p>
        <p v-else-if="scores.playerScore < scores.opponentScore">¡Perdiste!</p>
        <p v-else>¡Es un empate!</p>
        <button @click="showDetailedResults">Ver Detalles de Resultados</button>
        <div v-if="showDetails">
          <h3>Detalles de Batallas</h3>
          <ul>
            <li v-for="(battle, index) in battles" :key="index">
              Ronda {{ index + 1 }}: {{ battle.result }}
            </li>
          </ul>
        </div>
        <button @click="resetGame">Jugar de nuevo</button>
      </div>
    </div>

    <div v-if="gameOver">
      <h2>Fin del Juego!</h2>
      <button @click="showResultModal = true">Ver Resultados</button>
    </div>
      </div>
       
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const showWelcomeModal = ref(true);
const rounds = ref("");
const isGameStarted = ref(false);
const currentRound = ref(1);
const scores = ref({ playerScore: 0, opponentScore: 0 });
const selectedStat = ref('');
const stats = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];
const resultMessage = ref('');
const playerPokemon = ref({});
const opponentPokemon = ref({});
const showPlayerCards = ref(false);
const showDetails = ref(false);
const showResultModal = ref(false);
const battles = ref([]);
const gameOver = ref(false);
const showRoundSelection = ref(false);


const showRoundSelectionModal = () => {
      showWelcomeModal.value = false;
      showRoundSelection.value = true;
    };

const setRounds = (number) => {
  rounds.value = number;
};

const getpokerandom = async () => {
  try {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const stats = {
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      special_attack: data.stats[3].base_stat,
      special_defense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
    };
    return { name: data.name, id: data.id, ...stats };
  } catch (error) {
    console.error('Error al obtener Pokémon:', error);
  }
};

const startGame = async () => {
  showRoundSelection.value = false;
  isGameStarted.value = true;
  currentRound.value = 1;
  scores.value.playerScore = 0;
  scores.value.opponentScore = 0;
  gameOver.value = false; 
  playerPokemon.value = await getpokerandom();
  opponentPokemon.value = await getpokerandom();
};

const errorMessage = ref('');

const playRound = async () => {
 
  if (!selectedStat.value) {
    errorMessage.value = 'Por favor, selecciona una estadística.';
    return;
  }

  errorMessage.value = ''; 
  showPlayerCards.value = true;

  const playerStat = selectedStat.value.includes('special')
    ? playerPokemon.value[selectedStat.value.replace('-', '_')]
    : playerPokemon.value[selectedStat.value];

  const opponentStat = selectedStat.value.includes('special')
    ? opponentPokemon.value[selectedStat.value.replace('-', '_')]
    : opponentPokemon.value[selectedStat.value];

  let resultMessageText;

  if (playerStat > opponentStat) {
    scores.value.playerScore += 1;
    resultMessageText = `${playerPokemon.value.name} gana contra ${opponentPokemon.value.name}!`;
  } else if (playerStat < opponentStat) {
    scores.value.opponentScore += 1;
    resultMessageText = `${opponentPokemon.value.name} gana contra ${playerPokemon.value.name}!`;
  } else {
    resultMessageText = `Empate entre ${playerPokemon.value.name} y ${opponentPokemon.value.name}!`;
  }

  resultMessage.value = resultMessageText;
  battles.value.push({ result: resultMessageText });
  currentRound.value++;

 
  selectedStat.value = stats[Math.floor(Math.random() * stats.length)];

  if (currentRound.value > rounds.value) {
    isGameStarted.value = false;
    gameOver.value = true;
  } else {
    opponentPokemon.value = await getpokerandom();
    playerPokemon.value = await getpokerandom();
  }
};

const resetGame = () => {
  showWelcomeModal.value = true;
  isGameStarted.value = false;
  currentRound.value = 1;
  scores.value = { playerScore: 0, opponentScore: 0 };
  selectedStat.value = '';
  resultMessage.value = '';
  playerPokemon.value = {};
  opponentPokemon.value = {};
  showPlayerCards.value = false;
  rounds.value = "";
  showDetails.value = false;
  battles.value = [];
  gameOver.value = false;
};

const showDetailedResults = () => {
  showDetails.value = !showDetails.value;
};

</script>

<style></style>
