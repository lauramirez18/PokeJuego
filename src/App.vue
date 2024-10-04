<template>
  <div id="app">
    <div v-if="showWelcomeModal" class="modalWelcome">
      <div class="modal-inicio">
        <div class="modal-header">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1733aa4c-c30e-4ecc-b8d6-80ef83ca0b8e/d3bqzxd-a81ee1f1-6c5f-4081-8640-b4cba8caf363.png/v1/fit/w_797,h_458/pokemon_battle_frontier_logo_by_pklucario_d3bqzxd-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDU4IiwicGF0aCI6IlwvZlwvMTczM2FhNGMtYzMwZS00ZWNjLWI4ZDYtODBlZjgzY2EwYjhlXC9kM2JxenhkLWE4MWVlMWYxLTZjNWYtNDA4MS04NjQwLWI0Y2JhOGNhZjM2My5wbmciLCJ3aWR0aCI6Ijw9Nzk3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.v3pX-GaQcPxrvpqOLDz5T1SmmVHVdCUqaqDspmOIf8w"
            alt="">
        </div>
        <div class="modal-body">
          <q-btn @click="showNameInputModal" push color="primary" label="a jugar" class="boton-inicio" />
        </div>
      </div>
    </div>
    <div class="content-names">
      <div v-if="showNameModal" class="name-modal">
        <h2>Nombres de los guerreros Pokémon, ¡prepárense!</h2>
        <q-input v-model="player1Name" label="Jugador 1" />
        <q-input v-model="player2Name" label="Jugador 2" />
        <q-btn @click="showRoundSelectionModal" push color="primary" label="Iniciar Juego" />
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
        <q-input v-model.number="rounds" label="Rondas" readonly />
        <q-btn @click="startGame" push color="primary" label="Comenzar Juego" />
      </div>
    </div>

    <div v-if="isGameStarted">
      <div class="batalla">
        <div class="content-game">
          <h2>PokeBatallas</h2>
          <div class="content-batalla">
            <div class="part1-batalla">
              <p>Ronda {{ currentRound }} de {{ rounds }}</p>
              <div class="seleccionar">
                <h5>Selecciona tu estadísticas</h5>
                <select v-model="selectedStat" class="input-seleccionar">
                  <option v-for="stat in stats" :key="stat" :value="stat">{{ stat }}</option>
                </select>
                <q-btn @click="playRound" push color="primary" label="Batalla" />
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
              </div>
              <div class="puntuacion">

                <p>{{ player1Name }}: {{ scores.playerScore }}</p>
                <p>{{ resultMessage }}</p>
                <p>{{ player2Name }}: {{ scores.opponentScore }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="part2-batalla">
          <div class="card" v-if="showPlayerCards">
            <div class="player">
              <div class="card-body">
                <img
                  :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${playerPokemon.id}.png`"
                  alt="">
                <h3>{{ playerPokemon.name }}</h3>
                <p v-if="selectedStat === 'HP'">HP: {{ playerPokemon.hp }}</p>
                <p v-if="selectedStat === 'Attack'">Attack: {{ playerPokemon.attack }}</p>
                <p v-if="selectedStat === 'Defense'">Defense: {{ playerPokemon.defense }}</p>
                <p v-if="selectedStat === 'Speed'">Speed: {{ playerPokemon.speed }}</p>
                <p v-if="selectedStat === 'Special Attack'">Special Attack: {{ playerPokemon.specialAttack }}</p>
                <p v-if="selectedStat === 'Special Defense'">Special Defense: {{ playerPokemon.specialDefense }}</p>
                <p class="selected-stat">{{ selectedStat }} {{ playerPokemon[selectedStat] }}</p>
              </div>
            </div>
            <div class="player">
              <div class="card-body">
                <img
                  :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${opponentPokemon.id}.png`"
                  alt="">
                <h3>{{ opponentPokemon.name }}</h3>
                <p v-if="selectedStat === 'HP'">HP: {{ opponentPokemon.hp }}</p>
                <p v-if="selectedStat === 'Attack'">Attack: {{ opponentPokemon.attack }}</p>
                <p v-if="selectedStat === 'Defense'">Defense: {{ opponentPokemon.defense }}</p>
                <p v-if="selectedStat === 'Speed'">Speed: {{ opponentPokemon.speed }}</p>
                <p v-if="selectedStat === 'Special Attack'">Special Attack: {{ opponentPokemon.specialAttack }}</p>
                <p v-if="selectedStat === 'Special Defense'">Special Defense: {{ opponentPokemon.specialDefense }}</p>
                <p> {{ selectedStat }} {{ opponentPokemon[selectedStat] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showResultModal" class="modal">
      <div class="modal-content">

        <h2>Resultados Finales</h2>
        <p>{{ player1Name }}: {{ scores.playerScore }}</p>
        <p>{{ player2Name }}: {{ scores.opponentScore }}</p>
        <p v-if="scores.playerScore > scores.opponentScore">¡Ganaste!</p>
        <p v-else-if="scores.playerScore < scores.opponentScore">¡Perdiste!</p>
        <p v-else>¡Es un empate!</p>
        <q-btn @click="showDetailedResults" push color="primary" label="Ver Detalles de Resultados" />

        <div v-if="showDetails" class="details">
          <h3>Detalles de Batallas</h3>
          <ul>
            <li v-for="(battle, index) in battles" :key="index">
              Ronda {{ index + 1 }}: {{ battle.result }}
            </li>
          </ul>
        </div>
        <q-btn @click="resetGame" push color="primary" label="REVANCHA" />

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { Notify } from 'quasar';

const showWelcomeModal = ref(true);
const showNameModal = ref(false);
const rounds = ref("");
const isGameStarted = ref(false);
const currentRound = ref(0);
const scores = ref({ playerScore: 0, opponentScore: 0 });
const selectedStat = ref('');
const stats = ['hp', 'attack', 'defense', 'specialAttack', 'specialDefense', 'speed'];
const resultMessage = ref('');
const playerPokemon = ref({});
const opponentPokemon = ref({});
const showPlayerCards = ref(false);
const showDetails = ref(false);
const showResultModal = ref(false);
const battles = ref([]);
const gameOver = ref(false);
const showRoundSelection = ref(false);
const player1Name = ref('');
const player2Name = ref('');


const showNotification = () => {
  Notify.create({
    message: 'Este es un mensaje de notificación.',
    color: 'positive',
    position: 'top',
    timeout: 3000,
  });
};

const showNameInputModal = () => {
  showWelcomeModal.value = false;
  showNameModal.value = true;

};

const showRoundSelectionModal = () => {
  if (!player1Name.value || !player2Name.value) {
    showNotification();
  } else {
    player1Name.value = player1Name.value.trim();
    player2Name.value = player2Name.value.trim();
  }
  showNameModal.value = false;
  showRoundSelection.value = true;
};
const setRounds = (number) => {
  rounds.value = number;
};

const getpokerandom = async () => {
  try {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    return {
      name: data.name,
      id: data.id,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      specialDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
    };
  } catch (error) {
    console.error('Error al obtener Pokémon:', error);
    return null;
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

  if (currentRound.value >= rounds.value) {
    isGameStarted.value = false;
    showResultModal.value = true;
  }else {
     playerPokemon.value = await getpokerandom();
  opponentPokemon.value = await getpokerandom();
  }

  errorMessage.value = '';
  showPlayerCards.value = true;

  const playerStat = playerPokemon.value[selectedStat.value];
  const opponentStat = opponentPokemon.value[selectedStat.value];

  let resultMessageText = '';

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

 
};

const resetGame = () => {
  player1Name.value = '';
  player2Name.value = '';
  showRoundSelection.value = false;
  isGameStarted.value = false;
  showWelcomeModal.value = true;
  showResultModal.value = false;
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
