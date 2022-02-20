<template>
  <div id="app">
    <wandering-merchant />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import WanderingMerchant from './components/WanderingMerchant.vue'

export default Vue.extend({
  name: 'App',
  components: {
    WanderingMerchant

  },
  data: function () {
    return {
      merchants: [
        {
          name: 'Lucas',
          location: 'Yudia',
          startTimes: [
            '1:30', '4:30', '5:30', '7:30', '8:30', '11:30'
          ],
          items: [
            'Yudia Spellbook',
            'Yudia Natural Salt',
            'Sky Reflection Oil',
            'Giant Worm Card',
            'Morina Card',
            'Thunder Card'
          ]
        },
        {
          name: 'Morris',
          location: 'East Luterra',
          startTimes: [
            '1:30', '4:30', '5:30', '7:30', '8:30', '11:30'
          ],
          items: [
            'Azenaporium Brooch',
            'Dyorika Straw Hat',
            'Model of Luterra\'s Sword',
            'Chain War Chronicles',
            'Brinewt Card',
            'Morpheo Card',
            'Meehan Card',
            'Thunder Wings Card',
            'Dry-aged Meat'
          ]
        },
        {
          name: 'Mac',
          location: 'Anikka',
          startTimes: [
            '1:30', '4:30', '5:30', '7:30', '8:30', '11:30'
          ],
          items: [
            'Tournament Entrance Stamp',
            'Angler\'s Fishing Pole',
            'Sir Valleylead Card',
            'Sir Druden Card',
            'Madam Moonscent Card',
            'Wei Card'
          ]
        },
        {
          name: 'Jeffrey',
          location: 'Shushire',
          startTimes: [
            '1:30', '4:30', '5:30', '7:30', '8:30', '11:30'
          ],
          items: [
            'Shimmering Essence',
            'Sirius\'s Holy Book',
            'Javern Card',
            'Sian Card',
            'Madnick Card',
            'Sapphire Sardine'
          ]
        },
        {
          name: 'Dorella',
          location: 'Feiton',
          startTimes: [
            '1:30', '4:30', '5:30', '7:30', '8:30', '11:30'
          ],
          items: [
            'Dessicated Wooden Statue',
            'Broken Dagger',
            'Book of Survival',
            'Red Moon\'s Tears',
            'Goulding Card',
            'Levi',
            'Kaldor',
            'Blood Pudding Chunk'
          ]
        },
        {
          name: 'Malone',
          location: 'West Luterra',
          startTimes: [
            '2:30', '5:30', '6:30', '8:30', '9:30', '12:30'
          ],
          items: [
            'Black Rose',
            'Lakebar Tomato Juice',
            'Stalwart Cage',
            'Chain War Chronicles',
            'Berhart Card',
            'Cadogan Card',
            'Cassleford Card',
            'Hairplant'
          ]
        },
        {
          name: 'Burt',
          location: 'East Luterra',
          startTimes: [
            '2:30', '5:30', '6:30', '8:30', '9:30', '12:30'
          ],
          items: [
            'Azenaporium Brooch',
            'Dyorika Straw Hat',
            'Model of Luterra\'s Sword',
            'Chain War Chronicles',
            'Seria Card',
            'Nox Card',
            'Thunder Wings Card',
            'Hot Chocolate Coffee'
          ]
        },
        {
          name: 'Oliver',
          location: 'Tortoyk',
          startTimes: [
            '2:30', '5:30', '6:30', '8:30', '9:30', '12:30'
          ],
          items: [
            'Mokoko Carrot',
            'Oversize Ladybug Doll',
            'Round Glass Piece',
            'Shy Wind Flower Pollen',
            'Egg of Creation Card',
            'Eolh Card',
            'Mokamoka Card'
          ]
        },
        {
          name: 'Nox',
          location: 'Arthetine',
          startTimes: [
            '2:30', '5:30', '6:30', '8:30', '9:30', '12:30'
          ],
          items: [
            'Fine Gramophone',
            'Energy X7 Capsule',
            'Bergstrom Card',
            'Stern Neria Card',
            'Krause Card',
            'Adrenaline-boosting Fluid'
          ]
        },
        {
          name: 'Aricer',
          location: 'Rohendel',
          startTimes: [
            '2:30', '5:30', '6:30', '8:30', '9:30', '12:30'
          ],
          items: [
            'Danube\'s Earrings',
            'Elemental\'s Feather',
            'Soundstone of Dawn',
            'Sylvain Queens\' Blessing',
            'Alifer Card',
            'Lenora Card',
            'Gnosis Card',
            'Pit-A-Pat Macaron'
          ]
        },
        {
          name: 'Rayni',
          location: 'Punika',
          startTimes: [
            '2:30', '5:30', '6:30', '8:30', '9:30', '12:30'
          ],
          items: [
            'Piñata Crafting Set',
            'Hollowfruit',
            'Rainbow Tikatika Flower',
            'Oreha Viewing Stone',
            'Seto Card',
            'Stella',
            'Cicerra',
            'Albion',
            'Blood Pudding Chunk'
          ]
        },
        {
          name: 'Ben',
          location: 'Rethramis',
          startTimes: [
            '3:30', '4:30', '6:30', '7:30', '10:30', '12:30'
          ],
          items: [
            'Fancier Bouquet',
            'Prideholme Potato',
            'Rethramis Holy Water',
            'Surprise Chest',
            'Prideholme Neria Card',
            'Varut Card',
            'Siera Card'
          ]
        },
        {
          name: 'Peter',
          location: 'North Vern',
          startTimes: [
            '3:30', '4:30', '6:30', '7:30', '10:30', '12:30'
          ],
          items: [
            'Exquisite Music Box',
            'Goblin Yam',
            'Magick Cloth',
            'Magick Crystal',
            'Queen\'s Knights Application',
            'Vern\'s Founding Coin',
            'Payla Card',
            'Gideon Card',
            'Thar Card'
          ]
        },
        {
          name: 'Laitir',
          location: 'Yorn',
          startTimes: [
            '3:30', '4:30', '6:30', '7:30', '10:30', '12:30'
          ],
          items: [
            'Piyer\'s Secret Textbook',
            'Fargar\'s Beer',
            'Great Castle Neria Card',
            'Piyer',
            'Kaysarr',
            'Back Alley Rum'
          ]
        }
      ]
    }
  },
  computed: {
    today: function () {
      return dayjs()
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
