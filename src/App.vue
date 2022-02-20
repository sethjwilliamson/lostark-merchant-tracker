<template>
    <div id="app">
        <div class="input-container">
        <input v-model="searchInput" type="text" class="search" placeholder="Search by name, location, item.." >
        </div>
        <div class="table-container">
        <table>
            <thead>
            <th>
                Merchant Name
            </th>
            <th>
                Location
            </th>
            <th>
                Items
            </th>
            <th>
                Time
            </th>
            </thead>
            <wandering-merchant v-for="merchant in merchantsComputed" :key="merchant.name" :merchant="merchant"/>
        </table>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WanderingMerchant from './components/WanderingMerchant.vue'

interface Merchant {
    name: string,
    location: string,
    startTimes: Array<number>,
    items: Array<string>,
    disabled: boolean
}

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
                        1, 4, 5, 7, 8, 11, 13, 16, 17, 19, 20, 23
                    ],
                    items: [
                        'Yudia Spellbook',
                        'Yudia Natural Salt',
                        'Sky Reflection Oil',
                        'Giant Worm Card',
                        'Morina Card',
                        'Thunder Card'
                    ],
                    disabled: false
                },
                {
                    name: 'Morris',
                    location: 'East Luterra',
                    startTimes: [
                        1, 4, 5, 7, 8, 11, 13, 16, 17, 19, 20, 23
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
                    ],
                    disabled: false
                },
                {
                    name: 'Mac',
                    location: 'Anikka',
                    startTimes: [
                        1, 4, 5, 7, 8, 11, 13, 16, 17, 19, 20, 23
                    ],
                    items: [
                        'Tournament Entrance Stamp',
                        'Angler\'s Fishing Pole',
                        'Sir Valleylead Card',
                        'Sir Druden Card',
                        'Madam Moonscent Card',
                        'Wei Card'
                    ],
                    disabled: false
                },
                {
                    name: 'Jeffrey',
                    location: 'Shushire',
                    startTimes: [
                        1, 4, 5, 7, 8, 11, 13, 16, 17, 19, 20, 23
                    ],
                    items: [
                        'Shimmering Essence',
                        'Sirius\'s Holy Book',
                        'Javern Card',
                        'Sian Card',
                        'Madnick Card',
                        'Sapphire Sardine'
                    ],
                    disabled: false
                },
                {
                    name: 'Dorella',
                    location: 'Feiton',
                    startTimes: [
                        1, 4, 5, 7, 8, 11, 13, 16, 17, 19, 20, 23
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
                    ],
                    disabled: false
                },
                {
                    name: 'Malone',
                    location: 'West Luterra',
                    startTimes: [
                        0, 2, 5, 6, 8, 9, 12, 14, 17, 18, 20, 21
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
                    ],
                    disabled: false
                },
                {
                    name: 'Burt',
                    location: 'East Luterra',
                    startTimes: [
                        0, 2, 5, 6, 8, 9, 12, 14, 17, 18, 20, 21
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
                    ],
                    disabled: false
                },
                {
                    name: 'Oliver',
                    location: 'Tortoyk',
                    startTimes: [
                        0, 2, 5, 6, 8, 9, 12, 14, 17, 18, 20, 21
                    ],
                    items: [
                        'Mokoko Carrot',
                        'Oversize Ladybug Doll',
                        'Round Glass Piece',
                        'Shy Wind Flower Pollen',
                        'Egg of Creation Card',
                        'Eolh Card',
                        'Mokamoka Card'
                    ],
                    disabled: false
                },
                {
                    name: 'Nox',
                    location: 'Arthetine',
                    startTimes: [
                        0, 2, 5, 6, 8, 9, 12, 14, 17, 18, 20, 21
                    ],
                    items: [
                        'Fine Gramophone',
                        'Energy X7 Capsule',
                        'Bergstrom Card',
                        'Stern Neria Card',
                        'Krause Card',
                        'Adrenaline-boosting Fluid'
                    ],
                    disabled: false
                },
                {
                    name: 'Aricer',
                    location: 'Rohendel',
                    startTimes: [
                        0, 2, 5, 6, 8, 9, 12, 14, 17, 18, 20, 21
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
                    ],
                    disabled: false
                },
                {
                    name: 'Rayni',
                    location: 'Punika',
                    startTimes: [
                        0, 2, 5, 6, 8, 9, 12, 14, 17, 18, 20, 21
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
                    ],
                    disabled: false
                },
                {
                    name: 'Ben',
                    location: 'Rethramis',
                    startTimes: [
                        0, 3, 4, 6, 7, 10, 12, 15, 16, 18, 19, 22
                    ],
                    items: [
                        'Fancier Bouquet',
                        'Prideholme Potato',
                        'Rethramis Holy Water',
                        'Surprise Chest',
                        'Prideholme Neria Card',
                        'Varut Card',
                        'Siera Card'
                    ],
                    disabled: false
                },
                {
                    name: 'Peter',
                    location: 'North Vern',
                    startTimes: [
                        0, 3, 4, 6, 7, 10, 12, 15, 16, 18, 19, 22
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
                    ],
                    disabled: false
                },
                {
                    name: 'Laitir',
                    location: 'Yorn',
                    startTimes: [
                        0, 3, 4, 6, 7, 10, 12, 15, 16, 18, 19, 22
                    ],
                    items: [
                        'Piyer\'s Secret Textbook',
                        'Fargar\'s Beer',
                        'Great Castle Neria Card',
                        'Piyer',
                        'Kaysarr',
                        'Back Alley Rum'
                    ],
                    disabled: false
                }
            ] as Merchant[],
            searchInput: ''
        }
    },
    computed: {
        merchantsComputed: function () : Merchant[] {
            console.log(this.searchInput)

            return this.merchants.map((x: Merchant) => {
                return {
                    name: x.name,
                    location: x.location,
                    startTimes: x.startTimes,
                    items: x.items,
                    disabled: this.isDisabled(x)
                }
            })
        }
    },
    methods: {
        isDisabled: function (merchant: Merchant) {
            if (this.searchInput.length === 0) {
                return false
            }

            if (merchant.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
                return false
            }

            if (merchant.location.toLowerCase().includes(this.searchInput.toLowerCase())) {
                return false
            }

            for (const itemName of merchant.items) {
                if (itemName.toLowerCase().includes(this.searchInput.toLowerCase())) {
                    return false
                }
            }

            return true
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

.table-container {
  margin: auto;
  max-width: 1000px;
}

table {
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns:
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr);
}

thead,
tbody,
tr {
  display: contents;
}

th,
td {
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

th {
  position: sticky;
  top: 0;
  background: #6c7ae0;
  text-align: center;
  font-weight: normal;
  font-size: 1.1rem;
  color: white;
}

th:last-child {
  border: 0;
}

td {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #808080;
}

tr:nth-child(even) td {
  background: #f8f6ff;
}

.disabled > td {
  opacity: 0.25;
}

.input-container {
  max-width: 300px;
  margin: auto;
  margin-bottom: 20px;
}

input.search {
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
}

.tippy-content {
    white-space: pre-line;
    text-align: center;
}
</style>
