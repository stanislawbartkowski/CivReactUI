
import * as C from '../js/C'

export function setResource(): any {


    const res = {
        "civ": [
            {
                "civ": "America",
                "tech": "Currency",
                "gover": "Despotism",
                "desc": "The Americans start with a free, random great person. When Americans spend trade for production, they receive 2 production points instead of 1.",
                "ni": null
            },
            {
                "civ": "China",
                "tech": "Writing",
                "gover": "Despotism",
                "desc": "The Chinese start with city walls in their capital. The Chinese gain 3 culture each time they explore a hut or conquer a village. The Chinese may save one of their killed unit after each battle, returning it to their standing force.",
                "ni": null
            },
            {
                "civ": "Egypt",
                "tech": "Construction",
                "gover": "Despotism",
                "desc": "The Egyptians start with a free random ancient wonder in their capital. Once per turn, during City Management, the Egyptians may build an unlocked building for free by using an action.",
                "ni": null
            },
            {
                "civ": "Germany",
                "tech": "Metallurgy",
                "gover": "Despotism",
                "desc": "The Germans start with 2 extra infantry units. After setup, each time the Germans research a tech that upgrades or unlocked a unit, they build one of that unit for free and gain one resource of their choice from the market.",
                "ni": null
            },
            {
                "civ": "Rome",
                "tech": "CodeOfLaw",
                "gover": "Republic",
                "desc": "The Romans advance one space on the culture track for free each time they build a wonder or city, and each time they conquer a city or village.",
                "ni": null
            },
            {
                "civ": "Russia",
                "tech": "Communism",
                "gover": "Communism",
                "desc": "The Russians start with 2 armies, and their stacking limit is increased by 1. Once per turn, the Russians maybe move an army or scout into an enemy city and sacrifice that figure to research a tech known by that civilization for free. Armies sacrificed this way cannot be also attack.",
                "ni": null
            },
            {
                "civ": "Spain",
                "tech": "Navigation",
                "gover": "Despotism",
                "desc": "The Spanish start with 2 scouts. The travel speed of the Spanish is increased by 1. When the Spanish discover an unexplored map tile, they may immediately build a basic (non-upgraded) building in any of their cities for free, even if they haven't unlocked that building.",
                "ni": null
            },
            {
                "civ": "Arabs",
                "tech": "Mathematics",
                "gover": "Despotism",
                "desc": "The Arabs start having every piece of resource from the market. When they spend any resource, the receive 1 culture for any resource in return. When they invest a coin, they move forward one step on culture track.",
                "ni": null
            }
        ],
        "tech": [
            {
                "name": "Irrigation",
                "gover": null,
                "level": 2,
                "ni": null,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Maximum Cities : 3"
            },
            {
                "name": "Construction",
                "gover": null,
                "level": 2,
                "ni": null,
                "building": "Workshop",
                "resource": "Wheat",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Wheat-City Managament: One of your cities produces an extra 5 production this turn."
            },
            {
                "name": "MetalCasting",
                "gover": null,
                "level": 3,
                "ni": null,
                "building": null,
                "resource": "Incense",
                "resourceany": null,
                "units": {
                    "name": "Artillery",
                    "level": 3
                },
                "coin": null,
                "desc": "Incense-CityManagement : Gain 7 culture"
            },
            {
                "name": "Communism",
                "gover": "Communism",
                "level": 3,
                "ni": true,
                "building": null,
                "resource": "Spy",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Spy-Movement: Choose a square. No figure may leave that square this turn. This may interrupt a figure's movement."
            },
            {
                "name": "MilitaryScience",
                "gover": null,
                "level": 3,
                "ni": null,
                "building": "Academy",
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Your cities each produce 1 extra production for every 3 coins you possess."
            },
            {
                "name": "SteamPower",
                "gover": null,
                "level": 3,
                "ni": true,
                "building": null,
                "resource": "Silk",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Silk-City Management :  Move all of your figures in one square to any water square on the map. These figures may not move again this turn"
            },
            {
                "name": "GunPowder",
                "gover": null,
                "level": 3,
                "ni": true,
                "building": null,
                "resource": null,
                "resourceany": 2,
                "units": {
                    "name": "Infantry",
                    "level": 3
                },
                "coin": null,
                "desc": "Any 2-City Management : Obsolete an ancient or medieval wonder, or destroy a building of your choice"
            },
            {
                "name": "NuclearFusion",
                "gover": null,
                "level": 4,
                "ni": true,
                "building": null,
                "resource": "Uranium",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Nuke-City Management : Take an extra action with each of your cities. Nuke-Movement : Nuke a non-capital city. The city is destroyed, along with all builidngs, wonders, figures and great persins in its outskirts"
            },
            {
                "name": "ReplaceableParts",
                "gover": null,
                "level": 4,
                "ni": null,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": {
                    "name": "Infantry",
                    "level": 4
                },
                "coin": null,
                "desc": "Stacking Limit : 6"
            },
            {
                "name": "Ballistics",
                "gover": null,
                "level": 4,
                "ni": true,
                "building": null,
                "resource": "Iron",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Iron-Battle : When involved in a battle, deal up 6 wounds, spread across enemy units however you choose."
            },
            {
                "name": "MassMedia",
                "gover": null,
                "level": 4,
                "ni": true,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Your culture cannot be cancelled, regardless of other game effects. Spy-Any Time: Cancel a resource ability. The resource spent to activate the ability is lost."
            },
            {
                "name": "Computers",
                "gover": null,
                "level": 4,
                "ni": true,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Your battle and culture hand sizes are increased by 1 for every 5 coins you have"
            },
            {
                "name": "Flight",
                "gover": null,
                "level": 4,
                "ni": true,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": {
                    "name": "Aircraft",
                    "level": 4
                },
                "coin": null,
                "desc": "You may cross or end your movement in water. Also, you may ignore enemy figures, huts, villages and cities when moving."
            },
            {
                "name": "PrintingPress",
                "gover": null,
                "level": 2,
                "ni": null,
                "building": "University",
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Once per turn, you may spend 5 culture during City Management to add 1 coin token to this tech (max 4)."
            },
            {
                "name": "Democracy",
                "gover": "Democracy",
                "level": 2,
                "ni": null,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": {
                    "name": "Infantry",
                    "level": 2
                },
                "coin": null,
                "desc": "Once per turn, you may spend 6 trade during City Management to add 1 coin token to this tech (max 4)."
            },
            {
                "name": "Monarchy",
                "gover": "Monarchy",
                "level": 2,
                "ni": true,
                "building": null,
                "resource": "Silk",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Silk-City Management: Obsolete 1 ancient wonder, or kill 1 random unit from another player's standing forces"
            },
            {
                "name": "Sailing",
                "gover": null,
                "level": 2,
                "ni": null,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Movement Speed : 4. You may cross or end your movement in water"
            },
            {
                "name": "Mathematics",
                "gover": null,
                "level": 2,
                "ni": true,
                "building": null,
                "resource": "Iron",
                "resourceany": null,
                "units": {
                    "name": "Artillery",
                    "level": 2
                },
                "coin": null,
                "desc": "Iron-Battle: When involved in a battle, deal up 3 wounds, spread across enemy units however you choose."
            },
            {
                "name": "CivilService",
                "gover": null,
                "level": 2,
                "ni": true,
                "building": null,
                "resource": "Spy",
                "resourceany": null,
                "units": null,
                "coin": 1,
                "desc": "1 Coin, +1 Hand Size, Spy-Any Time: cancel a culture event"
            },
            {
                "name": "Engineering",
                "gover": null,
                "level": 2,
                "ni": true,
                "building": "Aqueduct",
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Once per turn, when spending production from a city, you may split the production to purchase two items instead of one"
            },
            {
                "name": "Metallurgy",
                "gover": null,
                "level": 1,
                "ni": null,
                "building": "Barracks",
                "resource": "Iron",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Iron-Battle : When playing a unit from hand, add 3 to strength of its attack"
            },
            {
                "name": "CodeOfLaw",
                "gover": "Republic",
                "level": 1,
                "ni": null,
                "building": "TradingPost",
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Once per turn, after you win a battle, add 1 coin to this token (max 4)."
            },
            {
                "name": "HorsebackRiding",
                "gover": null,
                "level": 1,
                "ni": null,
                "building": null,
                "resource": "Silk",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Travel Speed : 3, Silk-Trade : Gain 9 trade. Another player of your choice then gains 6 trade."
            },
            {
                "name": "Writing",
                "gover": null,
                "level": 1,
                "ni": null,
                "building": "Library",
                "resource": "Spy",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Spy - City Management : Cancel a city action being performed by another player (may not cancel resource ability)"
            },
            {
                "name": "Pottery",
                "gover": null,
                "level": 1,
                "ni": null,
                "building": "Granary",
                "resource": null,
                "resourceany": 2,
                "units": null,
                "coin": null,
                "desc": "+1 Hand Size. Any 2-City Management: Once per turn, add 1 coin token to this tech (max 4)."
            },
            {
                "name": "Philosophy",
                "gover": null,
                "level": 1,
                "ni": null,
                "building": "Temple",
                "resource": null,
                "resourceany": 3,
                "units": null,
                "coin": null,
                "desc": "Any 3-City Management : Once per turn, get random great person"
            },
            {
                "name": "Navigation",
                "gover": null,
                "level": 1,
                "ni": null,
                "building": "Harbor",
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "You may cross water, but you may not end your movement in it"
            },
            {
                "name": "Navy",
                "gover": null,
                "level": 1,
                "ni": null,
                "building": "Shipyard",
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Each time you build an army with a city action, you may place that unit in the outskirt of a city with a shipyard"
            },
            {
                "name": "AnimalHusbandry",
                "gover": null,
                "level": 1,
                "ni": true,
                "building": null,
                "resource": "Wheat",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Once per battle, heal up to a total of 3 wounds from your units in play. Wheat-City Management : One of your cities prodices an extra three production this turn"
            },
            {
                "name": "Currency",
                "gover": null,
                "level": 1,
                "ni": null,
                "building": "Market",
                "resource": "Incense",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Incense-City Management : Gain three culture"
            },
            {
                "name": "Masonry",
                "gover": null,
                "level": 1,
                "ni": null,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Stacking Limit:3, You may build City Walls in your cities for 7 production. This is indicated by flipping the city marker to its walled side"
            },
            {
                "name": "Plastics",
                "gover": null,
                "level": 4,
                "ni": true,
                "building": null,
                "resource": "Wheat",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Start Of Turn: Once per turn, build a unit, figure, or building you've unlocked for free"
            },
            {
                "name": "Ecology",
                "gover": null,
                "level": 3,
                "ni": true,
                "building": null,
                "resource": "Wheat",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Advancing on the culture track costs you 1 less trade for every 3 coins you possess. Wheat - Start Of Turn : Change an empty non-mountain square into a different non-mountain square for the rest of the game."
            },
            {
                "name": "Mysticism",
                "gover": null,
                "level": 2,
                "ni": true,
                "building": null,
                "resource": "Spy",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "When you draw a culture event card, draw an extra card from that deck, keeping one and discarding the other. Spy-City Management: force an opponent to discard a coin token of your choice."
            },
            {
                "name": "RailRoad",
                "gover": null,
                "level": 3,
                "ni": null,
                "building": "IronMine",
                "resource": null,
                "resourceany": null,
                "units": {
                    "name": "Mounted",
                    "level": 3
                },
                "coin": 1,
                "desc": "1 Coin"
            },
            {
                "name": "Biology",
                "gover": null,
                "level": 3,
                "ni": true,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Stacking Limit : 5. Once per battle, heal all wounds from your units in play"
            },
            {
                "name": "Theology",
                "gover": "Fundamentalism",
                "level": 3,
                "ni": true,
                "building": "Cathedral",
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "+1 Hand Size"
            },
            {
                "name": "Agriculture",
                "gover": null,
                "level": 1,
                "ni": true,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Immediately grow your capital to metropolis"
            },
            {
                "name": "Chivalry",
                "gover": "Feudalism",
                "level": 2,
                "ni": null,
                "building": null,
                "resource": "Incense",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Incense-City Management : Gain 5 culture"
            },
            {
                "name": "Logistics",
                "gover": null,
                "level": 2,
                "ni": null,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": {
                    "name": null,
                    "level": 2
                },
                "coin": null,
                "desc": "Upgrade you unit to 2 level"
            },
            {
                "name": "Bureaucracy",
                "gover": null,
                "level": 2,
                "ni": true,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": 1,
                "desc": "Once per turn, you may switch one of your social policies during research"
            },
            {
                "name": "Banking",
                "gover": null,
                "level": 3,
                "ni": null,
                "building": "Bank",
                "resource": "Wheat",
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Wheat-City Management : One of you cities produces an extra 7 production per turn"
            },
            {
                "name": "Education",
                "gover": null,
                "level": 3,
                "ni": true,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": null,
                "coin": null,
                "desc": "Once per turn, when you build a wonder, add one coin to this tech (max 4). 4 resources (1 of each)-City Management : Learn a new tech of your choice for free."
            },
            {
                "name": "Combustion",
                "gover": null,
                "level": 4,
                "ni": true,
                "building": null,
                "resource": null,
                "resourceany": null,
                "units": {
                    "name": "Mounted",
                    "level": 4
                },
                "coin": null,
                "desc": "Once per turn, when one of your armies ends its movement on a building, destroy that building. If one of your armies attacks a city with walls, the walls are destroyed before the battle."
            }
        ],
        "wonders": [
            {
                "name": "ChichenItza",
                "age": "Ancient",
                "cost": 15,
                "phase": "CityManagement",
                "discount": {
                    "cost": 10,
                    "tech": "Currency"
                },
                "desc": "City Management: Each of your cities produces an extra 3 hammers.",
                "t": "CI",
                "ni": false
            },
            {
                "name": "StatueofZeus",
                "age": "Ancient",
                "cost": 15,
                "phase": null,
                "discount": null,
                "desc": "Combat Bonus : +6",
                "t": "SZ",
                "ni": false
            },
            {
                "name": "Stonehenge",
                "age": "Ancient",
                "cost": 10,
                "phase": "StartOfTurn",
                "discount": null,
                "desc": "Start of Turn: Gain 1 culture.",
                "t": "SH",
                "ni": false
            },
            {
                "name": "TheColossus",
                "age": "Ancient",
                "cost": 15,
                "phase": "StartOfTurn",
                "discount": {
                    "cost": 10,
                    "tech": "Metallurgy"
                },
                "desc": "Start of Turn: Gain 3 trade.",
                "t": "CL",
                "ni": false
            },
            {
                "name": "TheGreatLighthouse",
                "age": "Ancient",
                "cost": 15,
                "phase": null,
                "discount": {
                    "cost": 10,
                    "tech": "Navigation"
                },
                "desc": "Each empty water square in the outskirts of your cities generates 1 extra trade.",
                "t": "GL",
                "ni": false
            },
            {
                "name": "TheGreatWall",
                "age": "Ancient",
                "cost": 15,
                "phase": "StartOfTurn",
                "discount": {
                    "cost": 10,
                    "tech": "Masonry"
                },
                "desc": "When you lose a battle, your opponent gains one less loot. Start of Turn: Build city walls in one of your cities for free.",
                "t": "GW",
                "ni": true
            },
            {
                "name": "TheHangingGardens",
                "age": "Ancient",
                "cost": 15,
                "phase": "StartOfTurn",
                "discount": {
                    "cost": 10,
                    "tech": "AnimalHusbandry"
                },
                "desc": "Start of Turn: Build a figure in the square containing the Hanging Gardens for free.",
                "t": "HG",
                "ni": false
            },
            {
                "name": "TheOracle",
                "age": "Ancient",
                "cost": 15,
                "phase": null,
                "discount": {
                    "cost": 10,
                    "tech": "CodeOfLaw"
                },
                "desc": "Battle: Your opponent must play with his or her hand faceup for you to see.",
                "t": "OR",
                "ni": true
            },
            {
                "name": "ThePyramids",
                "age": "Ancient",
                "cost": 15,
                "phase": null,
                "discount": {
                    "cost": 10,
                    "tech": "Pottery"
                },
                "desc": "Unlock all governments. You are immune to Anarchy. If obsoleted, revert to a government you've unlocked normally.",
                "t": "PY",
                "ni": true
            },
            {
                "name": "AngkorWat",
                "age": "Medieval",
                "cost": 20,
                "phase": "CityManagement",
                "discount": {
                    "cost": 10,
                    "tech": "Theology"
                },
                "desc": "City Management: Once per turn, as a city action, you may harvest twice with that city (even from the same square twice).",
                "t": "AW",
                "ni": true
            },
            {
                "name": "BrandenburgGate",
                "age": "Medieval",
                "cost": 20,
                "phase": null,
                "discount": null,
                "desc": "Enemy figures cannot end their movement in your cities' outskirts. Any enemies already in your city outskirts must move out when able.",
                "t": "BG",
                "ni": true
            },
            {
                "name": "HimejiSamuraiCastle",
                "age": "Medieval",
                "cost": 20,
                "phase": null,
                "discount": {
                    "cost": 15,
                    "tech": "Monarchy"
                },
                "desc": "Battle: All of your units are +1 strength.",
                "t": "HC",
                "ni": true
            },
            {
                "name": "LeonardosWorkshop",
                "age": "Medieval",
                "cost": 20,
                "phase": "CityManagement",
                "discount": {
                    "cost": 15,
                    "tech": "Mathematics"
                },
                "desc": "City Management : Your unit cards never cost more than 5 hammers to build.",
                "t": "LW",
                "ni": true
            },
            {
                "name": "MachuPichu",
                "age": "Medieval",
                "cost": 20,
                "phase": "StartOfTurn",
                "discount": {
                    "cost": 15,
                    "tech": "Irrigation"
                },
                "desc": "Start of Turn: Once per turn, after you invest a coin, gain 1 resource of your choice from the market.",
                "t": "MP",
                "ni": true
            },
            {
                "name": "NotreDame",
                "age": "Medieval",
                "cost": 20,
                "phase": "Research",
                "discount": {
                    "cost": 15,
                    "tech": "Education"
                },
                "desc": "Research : When researching a tech, you may spend 6 extra trades to learn a second tech of the same level or lower.",
                "t": "ND",
                "ni": true
            },
            {
                "name": "PorcelainTower",
                "age": "Medieval",
                "cost": 20,
                "phase": "Research",
                "discount": {
                    "cost": 15,
                    "tech": "Construction"
                },
                "desc": "Research: Techs cost you 5 less trade to research. You may still only research once per turn.",
                "t": "PT",
                "ni": true
            },
            {
                "name": "TajMahal",
                "age": "Medieval",
                "cost": 20,
                "phase": "StartOfTurn",
                "discount": {
                    "cost": 15,
                    "tech": "Chivalry"
                },
                "desc": "Start of Turn: Build a building you've unlocked in one of your cities for free.",
                "t": "TM",
                "ni": true
            },
            {
                "name": "TheLouvre",
                "age": "Medieval",
                "cost": 20,
                "phase": "StartOfTurn",
                "discount": {
                    "cost": 15,
                    "tech": "PrintingPress"
                },
                "desc": "Start of Turn: Gain 3 culture.",
                "t": "LV",
                "ni": true
            },
            {
                "name": "BigBen",
                "age": "Modern",
                "cost": 25,
                "phase": "StartOfTurn",
                "discount": {
                    "cost": 20,
                    "tech": "Banking"
                },
                "desc": "Start of Turn: Gain one of every resource in the market.",
                "t": "BB",
                "ni": true
            },
            {
                "name": "CristoRedentor",
                "age": "Modern",
                "cost": 25,
                "phase": "StartOfTurn",
                "discount": {
                    "cost": 15,
                    "tech": "MassMedia"
                },
                "desc": "Your culture hand size is increased by 4. Start of Turn: Draw two culture events from the deck of your choice.",
                "t": "CR",
                "ni": true
            },
            {
                "name": "PanamaCanal",
                "age": "Modern",
                "cost": 25,
                "phase": "StartOfTurn",
                "discount": {
                    "cost": 20,
                    "tech": "Engineering"
                },
                "desc": "Start of Turn: Add 1 coin token to this wonder.",
                "t": "PC",
                "ni": true
            },
            {
                "name": "StatueofLiberty",
                "age": "Modern",
                "cost": 25,
                "phase": "StartOfTurn",
                "discount": {
                    "cost": 20,
                    "tech": "MetalCasting"
                },
                "desc": "Start of Turn: Research one tech known by any other player for free. You may still research normally this turn.",
                "t": "SL",
                "ni": true
            },
            {
                "name": "SydneyOperaHouse",
                "age": "Modern",
                "cost": 25,
                "phase": "StartOfTurn",
                "discount": null,
                "desc": "Start of Turn: Advance one space on the culture track for free.",
                "t": "OH",
                "ni": true
            },
            {
                "name": "TheInternet",
                "age": "Modern",
                "cost": 25,
                "phase": null,
                "discount": {
                    "cost": 15,
                    "tech": "Computers"
                },
                "desc": "The maximum number of coins you can add to each of your techs is increased by 2.",
                "t": "IT",
                "ni": true
            },
            {
                "name": "TheKremlin",
                "age": "Modern",
                "cost": 25,
                "phase": null,
                "discount": {
                    "cost": 20,
                    "tech": "Communism"
                },
                "desc": "Any Time: Once per turn, you may spend any two resources instead of a spy.",
                "t": "KR",
                "ni": true
            },
            {
                "name": "ThePentagon",
                "age": "Modern",
                "cost": 25,
                "phase": null,
                "discount": {
                    "cost": 15,
                    "tech": "Ballistics"
                },
                "desc": "Battle : Your units cannot be trumped.",
                "t": "PG",
                "ni": true
            },
            {
                "name": "UnitedNations",
                "age": "Modern",
                "cost": 20,
                "phase": null,
                "discount": null,
                "desc": "Any Time: Culture events cannot target you against your will.",
                "t": "UN",
                "ni": true
            }
        ],
        "buildings": [
            {
                "name": "TradingPost",
                "cost": 7,
                "tokens": {
                    "Trade": 2,
                    "Production": 0,
                    "Culture": 1,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": null,
                "upgrade": null,
                "terrain": "Desert"
            },
            {
                "name": "Harbor",
                "cost": 7,
                "tokens": {
                    "Trade": 2,
                    "Production": 1,
                    "Culture": 0,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": null,
                "upgrade": null,
                "terrain": "Water"
            },
            {
                "name": "Shipyard",
                "cost": 5,
                "tokens": {
                    "Trade": 2,
                    "Production": 1,
                    "Culture": 0,
                    "Battle": 2,
                    "Coin": 0
                },
                "star": true,
                "upgrade": null,
                "terrain": "Water"
            },
            {
                "name": "Market",
                "cost": 7,
                "tokens": {
                    "Trade": 1,
                    "Production": 1,
                    "Culture": 2,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": true,
                "upgrade": "Bank",
                "terrain": null
            },
            {
                "name": "Bank",
                "cost": 10,
                "tokens": {
                    "Trade": 1,
                    "Production": 1,
                    "Culture": 2,
                    "Battle": 0,
                    "Coin": 1
                },
                "star": true,
                "upgrade": null,
                "terrain": null
            },
            {
                "name": "Barracks",
                "cost": 7,
                "tokens": {
                    "Trade": 2,
                    "Production": 0,
                    "Culture": 0,
                    "Battle": 2,
                    "Coin": 0
                },
                "star": true,
                "upgrade": "Academy",
                "terrain": null
            },
            {
                "name": "Academy",
                "cost": 10,
                "tokens": {
                    "Trade": 2,
                    "Production": 0,
                    "Culture": 0,
                    "Battle": 4,
                    "Coin": 0
                },
                "star": true,
                "upgrade": null,
                "terrain": null
            },
            {
                "name": "Temple",
                "cost": 7,
                "tokens": {
                    "Trade": 0,
                    "Production": 0,
                    "Culture": 2,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": true,
                "upgrade": "Cathedral",
                "terrain": null
            },
            {
                "name": "Cathedral",
                "cost": 10,
                "tokens": {
                    "Trade": 0,
                    "Production": 0,
                    "Culture": 3,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": true,
                "upgrade": null,
                "terrain": null
            },
            {
                "name": "Granary",
                "cost": 5,
                "tokens": {
                    "Trade": 1,
                    "Production": 1,
                    "Culture": 0,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": null,
                "upgrade": "Aqueduct",
                "terrain": "Grassland"
            },
            {
                "name": "Aqueduct",
                "cost": 8,
                "tokens": {
                    "Trade": 2,
                    "Production": 2,
                    "Culture": 0,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": null,
                "upgrade": null,
                "terrain": "Grassland"
            },
            {
                "name": "Library",
                "cost": 5,
                "tokens": {
                    "Trade": 1,
                    "Production": 0,
                    "Culture": 1,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": null,
                "upgrade": "University",
                "terrain": "Grassland"
            },
            {
                "name": "University",
                "cost": 8,
                "tokens": {
                    "Trade": 2,
                    "Production": 0,
                    "Culture": 2,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": null,
                "upgrade": null,
                "terrain": "Grassland"
            },
            {
                "name": "Workshop",
                "cost": 7,
                "tokens": {
                    "Trade": 0,
                    "Production": 3,
                    "Culture": 0,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": null,
                "upgrade": "IronMine",
                "terrain": "Mountain"
            },
            {
                "name": "IronMine",
                "cost": 10,
                "tokens": {
                    "Trade": 0,
                    "Production": 4,
                    "Culture": 0,
                    "Battle": 0,
                    "Coin": 0
                },
                "star": null,
                "upgrade": null,
                "terrain": "Mountain"
            }
        ],
        "culturetrack": [
            {
                "last": 7,
                "cost": {
                    "culture": 3,
                    "trade": 0
                },
                "greatperson": [
                    3,
                    7
                ]
            },
            {
                "last": 14,
                "cost": {
                    "culture": 5,
                    "trade": 3
                },
                "greatperson": [
                    12
                ]
            },
            {
                "last": 20,
                "cost": {
                    "culture": 7,
                    "trade": 6
                },
                "greatperson": [
                    18
                ]
            }
        ],
        "greatpersontype": [
            {
                "name": "Artist",
                "tokens": {
                    "Trade": 1,
                    "Production": 0,
                    "Culture": 2,
                    "Battle": 0,
                    "Coin": 0
                }
            },
            {
                "name": "Builder",
                "tokens": {
                    "Trade": 0,
                    "Production": 2,
                    "Culture": 0,
                    "Battle": 0,
                    "Coin": 1
                }
            },
            {
                "name": "General",
                "tokens": {
                    "Trade": 0,
                    "Production": 0,
                    "Culture": 0,
                    "Battle": 4,
                    "Coin": 0
                }
            },
            {
                "name": "Humanitarian",
                "tokens": {
                    "Trade": 1,
                    "Production": 1,
                    "Culture": 1,
                    "Battle": 0,
                    "Coin": 1
                }
            },
            {
                "name": "Merchant",
                "tokens": {
                    "Trade": 0,
                    "Production": 0,
                    "Culture": 2,
                    "Battle": 0,
                    "Coin": 1
                }
            },
            {
                "name": "Scientist",
                "tokens": {
                    "Trade": 2,
                    "Production": 1,
                    "Culture": 0,
                    "Battle": 0,
                    "Coin": 0
                }
            }
        ],
        "greatperson": [
            {
                "name": "AkiraKurosawa",
                "ni": true,
                "t": "AK",
                "type": "Artist",
                "phase": "CityManagement",
                "desc": "City Management: Each time another player devotes a city to the arts, you gain 1 culture."
            },
            {
                "name": "FridaKahlo",
                "ni": true,
                "t": "FK",
                "type": "Artist",
                "phase": null,
                "desc": "Any Time: You may discard this card to discard any culture events you don't want and then draw enough culture events to fill your hand. Draw from the culture deck for the area on the culture track that your"
            },
            {
                "name": "JerryGarcia",
                "ni": true,
                "t": "JG",
                "type": "Artist",
                "phase": "CityManagement",
                "desc": "City Management: As your capital's city action, you may discard this card to devote all of your cities to the arts. This action cannot be canceled and your other cities may still take their actions."
            },
            {
                "name": "MarkTwain",
                "ni": true,
                "t": "MT",
                "type": "Artist",
                "phase": null,
                "desc": "Any Time: You may discard this card to cancel a city action, a resource ability, or a culture event. If you cancel a resource ability, the resources used to pay for it are lost."
            },
            {
                "name": "Michelangelo",
                "ni": true,
                "t": "MA",
                "type": "Artist",
                "phase": "CityManagement",
                "desc": "City Management: You may discard this card to build a wonder for 5 hammers less than its normal cost. This stacks with other discounts."
            },
            {
                "name": "Valmiki",
                "ni": true,
                "t": "VM",
                "type": "Artist",
                "phase": null,
                "desc": "Your culture hand size is increased by 2."
            },
            {
                "name": "WilliamShakespeare",
                "ni": true,
                "t": "WS",
                "type": "Artist",
                "phase": null,
                "desc": "Any Time: When advancing on the culture track, you may skip any space that contains another player's marker. Only pay the cost and receive the reward for the space you land in."
            },
            {
                "name": "AdaLovelace",
                "ni": true,
                "t": "AL",
                "type": "Builder",
                "phase": "CityManagement",
                "desc": "City Management: You may discard this card to take an extra city action with one of your cities. This action cannot be canceled. You may use this to take an action with your capital during anarchy."
            },
            {
                "name": "Archimedes",
                "ni": true,
                "t": "AM",
                "type": "Builder",
                "phase": null,
                "desc": "Any Time: Gain 3 culture each time you research a tech that no other player knows or is researching that turn."
            },
            {
                "name": "FrankLloydWright",
                "ni": true,
                "t": "FW",
                "type": "Builder",
                "phase": "CityManagement",
                "desc": "City Management: You may discard this card to gain both trade and culture equal to the total number of buildings in all your cities."
            },
            {
                "name": "HenryFord",
                "ni": null,
                "t": "HF",
                "type": "Builder",
                "phase": null,
                "desc": "Your travel speed is increased by 1."
            },
            {
                "name": "NikolaTesla",
                "ni": true,
                "t": "NT",
                "type": "Builder",
                "phase": "Research",
                "desc": "Research: You may discard this card when adding a tech of level II, III, or IV to your tech pyramid to place it one level lower in the pyramid than normal."
            },
            {
                "name": "OrvilleWright",
                "ni": true,
                "t": "OW",
                "type": "Builder",
                "phase": "StartOfTurn",
                "desc": "Start of Turn: You may discard this card to build one aircraft unit for free, even if you haven't unlocked aircraft units."
            },
            {
                "name": "ThomasEdison",
                "ni": true,
                "t": "TE",
                "type": "Builder",
                "phase": "StartOfTurn",
                "desc": "Start of Turn: You may discard this card to choose a tech that another player has learned and research it for free."
            },
            {
                "name": "GeorgyZhukov",
                "ni": true,
                "t": "GZ",
                "type": "General",
                "phase": null,
                "desc": "Battle: Each time one of your units is killed during a battle, deal 1 wound to an enemy unit of your choice."
            },
            {
                "name": "GustavusAdolphus",
                "ni": true,
                "t": "GA",
                "type": "General",
                "phase": null,
                "desc": "Battle: You may discard this card at the start of a battle to kill all units in your battle force (they cannot be saved) and build an equal number of unlocked units for free, immediately adding them to your battle force."
            },
            {
                "name": "Hannibal",
                "ni": true,
                "t": "HB",
                "type": "General",
                "phase": "CityManagement",
                "desc": "City Management: You may discard this card to choose a square. Move any or all of your figures in that square to any other square on the map containing at least on of your figures. You may not exceed your stacking limit."
            },
            {
                "name": "JoanofArc",
                "ni": true,
                "t": "JA",
                "type": "General",
                "phase": "CityManagement",
                "desc": "Battle: You may discard this card at the start of a battle in which you are the defender to increase your combat bonus by an amount equal to your unspent culture. This lasts until the end of the battle."
            },
            {
                "name": "KhalidibnalWalid",
                "ni": true,
                "t": "KW",
                "type": "General",
                "phase": null,
                "desc": "Start of Any Phase: You may discard this card to become the first player and place the first player marker in front of you. Next turn, the marker passes clockwise from you."
            },
            {
                "name": "Leonidas",
                "ni": true,
                "t": "LD",
                "type": "General",
                "phase": null,
                "desc": "Battle: Each time you start a battle as defender with fewer units in your battle force than your opponent, your combat bonus is increased by 8 until the end of the battle."
            },
            {
                "name": "SunTzu",
                "ni": true,
                "t": "SZ",
                "type": "General",
                "phase": null,
                "desc": "Battle: Once per battle, you may spend 3 trade to pass your turn instead of playing a unit."
            },
            {
                "name": "DrMartinLutherKing",
                "ni": true,
                "t": "MK",
                "type": "Humanitarian",
                "phase": null,
                "desc": "Your city actions can't be canceled. In addition, you are immune to anarchy."
            },
            {
                "name": "FlorenceNightingale",
                "ni": true,
                "t": "FN",
                "type": "Humanitarian",
                "phase": null,
                "desc": "Battle: You may discard this card to save all of your killed units after a battle, returning them to your standing forces."
            },
            {
                "name": "JacquesCousteau",
                "ni": true,
                "t": "JC",
                "type": "Humanitarian",
                "phase": "StartOfTurn",
                "desc": "Start of Turn: You may discard this card to build up to 3 Harbors in your cities for free, even if you have not unlocked Harbors."
            },
            {
                "name": "JimHenson",
                "ni": true,
                "t": "JH",
                "type": "Humanitarian",
                "phase": "CityManagement",
                "desc": "City Management: Each time you build a wonder, place a wound marker on this card. Start of Turn: Gain culture and trade equal to the number of wound markers on this card."
            },
            {
                "name": "MotherTeresa",
                "ni": true,
                "t": "MT",
                "type": "Humanitarian",
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Once per turn, you may give one of your coin tokens to another player, placing it on that player's civilization sheet. If you do so, advance one space on the culture track for free."
            },
            {
                "name": "StFrancisofAssisi",
                "ni": true,
                "t": "FA",
                "type": "Humanitarian",
                "phase": "CityManagement",
                "desc": "City Management: You may discard this card to gain 3 culture for every unbuilt army figure you have."
            },
            {
                "name": "SusanBAnthony",
                "ni": true,
                "t": "SA",
                "type": "Humanitarian",
                "phase": null,
                "desc": "All of your cities produce +2 hammers."
            },
            {
                "name": "APGiannini",
                "ni": true,
                "t": "AG",
                "type": "Merchant",
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Each time you invest a coin, build an unlocked building in one of your cities for free."
            },
            {
                "name": "AdamSmith",
                "ni": null,
                "t": "AS",
                "type": "Merchant",
                "phase": null,
                "desc": "+1 coin."
            },
            {
                "name": "AndrewCarnegie",
                "ni": true,
                "t": "AC",
                "type": "Merchant",
                "phase": "CityManagement",
                "desc": "City Management: You may discard this card to advance one space on the culture track for free for every 3 coins you have."
            },
            {
                "name": "CaptainJamesCook",
                "ni": true,
                "t": "JC",
                "type": "Merchant",
                "phase": "Movement",
                "desc": "Movement: You may discard this card to double your travel speed until the end of the turn."
            },
            {
                "name": "LorenzodeMedici",
                "ni": true,
                "t": "LM",
                "type": "Merchant",
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Gain 1 culture for every 3 coins you have."
            },
            {
                "name": "MarcoPolo",
                "ni": true,
                "t": "MP",
                "type": "Merchant",
                "phase": null,
                "desc": "Any Time: You may discard this card to gain 27 trade."
            },
            {
                "name": "ZhengHe",
                "ni": true,
                "t": "ZH",
                "type": "Merchant",
                "phase": null,
                "desc": "Any Time: You may discard this card to look under every hut and village token on the map and/or owned by other players."
            },
            {
                "name": "AlanTuring",
                "ni": true,
                "t": "AT",
                "type": "Scientist",
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Gain 1 trade and 1 culture for every 2 unbuilt army figures you have."
            },
            {
                "name": "AlbertEinstein",
                "ni": true,
                "t": "AE",
                "type": "Scientist",
                "phase": "CityManagement",
                "desc": "City Management: You may discard this card to spend any amount of trade to gain an equal amount of culture or spend any amount of unspent culture to gain an equal amount of trade."
            },
            {
                "name": "CharlesDarwin",
                "ni": true,
                "t": "CD",
                "type": "Scientist",
                "phase": "CityManagement",
                "desc": "City Management: Once per turn, when you devote a city to the arts, you may change all of the culture produced by the city into trade on a 1-for-1 basis."
            },
            {
                "name": "GalileoGalilei",
                "ni": true,
                "t": "GG",
                "type": "Scientist",
                "phase": "CityManagement",
                "desc": "City Management: You may discard this card to choose a square on the outer edge of the map. Move your figures in that square to any empty square on the outer edge of the map. They cannot move again this turn"
            },
            {
                "name": "LouisPasteur",
                "ni": true,
                "t": "LP",
                "type": "Scientist",
                "phase": null,
                "desc": "Your stacking limit is increased by 1."
            },
            {
                "name": "MarieCurie",
                "ni": true,
                "t": "MC",
                "type": "Scientist",
                "phase": null,
                "desc": "Any Time: You may discard this card when you would spend a uranium to spend a different resource instead."
            },
            {
                "name": "SirIsaacNewton",
                "ni": true,
                "t": "IN",
                "type": "Scientist",
                "phase": "Research",
                "desc": "Research: Before researching, you may place this card facedown in your tech pyramid as a blank tech card of level IV or less. It remains in your tech pyramid for the rest of the game, even if Newton dies."
            }
        ],
        "cards": [
            {
                "name": "AGiftfromAfar",
                "level": 1,
                "ni": true,
                "num": 3,
                "phase": null,
                "desc": "Any Time: Play this card as one of the following resources. Then, choose another player. That player adds a coin token to his civilization sheet. (Iron, Wheat, Spy, Silk)"
            },
            {
                "name": "BarbarianEncampment",
                "level": 1,
                "ni": true,
                "num": 2,
                "phase": "StartOfTurn",
                "desc": "Start of Turn : Choose an empty square not in the outskirts of a city. Place a village token on that square."
            },
            {
                "name": "BreadandCircuses",
                "level": 1,
                "ni": true,
                "num": 2,
                "phase": null,
                "desc": "Any Time: Cancel a culture event targeting you, one of your figures, or any square or building in one of your cities."
            },
            {
                "name": "Counterfeiters",
                "level": 1,
                "ni": true,
                "num": 2,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose another player. That player must discard one coin token of your choice. This cannot affect investments."
            },
            {
                "name": "Defection",
                "level": 1,
                "ni": true,
                "num": 2,
                "phase": "Movement",
                "desc": "Movement: Choose a figure within 4 squares (no diagonals) of one of your figures or cities. Kill the chosen figure. This may interrupt a figure's movement."
            },
            {
                "name": "Disoriented",
                "level": 1,
                "ni": true,
                "num": 1,
                "phase": "CityManagement",
                "desc": "City Management: Choose a square. Move all figures belonging to another player in that square up to two squares as a group (no diagonals or crossing water). Figures cannot be forced to start a battle."
            },
            {
                "name": "Drought",
                "level": 1,
                "ni": true,
                "num": 2,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose a non-mountain square that does not contain any buildings or wonders. Place a disaster token on that square, desert side up. That square is a desert square for the rest of the game."
            },
            {
                "name": "DutyandHonor",
                "level": 1,
                "ni": true,
                "num": 2,
                "phase": null,
                "desc": "Battle: Before drawing your battle force, build 1 unlocked unit for free."
            },
            {
                "name": "ExchangeofIdeas",
                "level": 1,
                "ni": true,
                "num": 3,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose another player. Learn a level I tech of your choice belonging to that player for free. That player then learns a level I tech of their choice belonging to you for free."
            },
            {
                "name": "Migrants",
                "level": 1,
                "ni": true,
                "num": 2,
                "phase": "CityManagement",
                "desc": "City Management : Switch one of your social policies. / Movement : Move one of your figures up to 2 squares to an empty square."
            },
            {
                "name": "Sabotage",
                "level": 1,
                "ni": true,
                "num": 2,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose a building within 4 squares (no diagonals) of one of your figures or cities. Destroy the chosen building and return it to the market."
            },
            {
                "name": "TheCitizensareRevolting",
                "level": 1,
                "ni": true,
                "num": 1,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose another player. That player's government changes to anarchy."
            },
            {
                "name": "WeLovetheDespotDay",
                "level": 1,
                "ni": true,
                "num": 1,
                "phase": "CityManagement",
                "desc": "City Management: Choose one of your cities. It produces 4 extra hammers this turn."
            },
            {
                "name": "AGenerousGift",
                "level": 2,
                "ni": true,
                "num": 3,
                "phase": null,
                "desc": "Any Time: Play this card as one of the following resources. (Iron, Wheat, Spy, Silk)"
            },
            {
                "name": "Catastrophe",
                "level": 2,
                "ni": true,
                "num": 1,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose a building within 6 squares (no diagonals) of one of your figures or cities. Destroy the chosen building and return it to the market."
            },
            {
                "name": "Colonists",
                "level": 2,
                "ni": true,
                "num": 2,
                "phase": "CityManagement",
                "desc": "City Management : Switch up to 2 of social policies. / Movement : Move one of your figures up to 4 squares to an empty square."
            },
            {
                "name": "Deforestation",
                "level": 2,
                "ni": true,
                "num": 2,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose a forest square that does not contain any buildings or wonders. Place a disaster token on that square, grassland side up. That square is a grassland square for the rest of the game."
            },
            {
                "name": "Depression",
                "level": 2,
                "ni": true,
                "num": 1,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose up to 2 other players. Each player must discard 1 coin token of your choice. This cannot affect investments."
            },
            {
                "name": "Flooding",
                "level": 2,
                "ni": true,
                "num": 1,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose a non-mountain square that does not contain any figures or tokens. Place a disaster token on that square, water side up. That square is a water square for the rest of the game."
            },
            {
                "name": "JoustingTourney",
                "level": 2,
                "ni": true,
                "num": 2,
                "phase": null,
                "desc": "Any Time: Cancel a culture event."
            },
            {
                "name": "KnowledgeShared",
                "level": 2,
                "ni": true,
                "num": 3,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose another player. Learn a level I or II tech of your choice belonging to that player for free. That player then learns a level I or II tech of their choice belonging to you for free."
            },
            {
                "name": "Lost",
                "level": 2,
                "ni": true,
                "num": 1,
                "phase": "CityManagement",
                "desc": "City Management: Choose a square. Move all figures belonging to another player in that square up to three squares as a group (no diagonals or crossing water). Figures cannot be forced to start a battle."
            },
            {
                "name": "MassDefection",
                "level": 2,
                "ni": true,
                "num": 1,
                "phase": "Movement",
                "desc": "Movement: Choose a square within 6 squares (no diagonals) of one of your figures or cities. Kill a great person or up to 2 figures in the chosen square. This may interrupt a figure's movement."
            },
            {
                "name": "Nationalism",
                "level": 2,
                "ni": true,
                "num": 2,
                "phase": null,
                "desc": "Battle: Before drawing your battle force, build up to 2 unlocked units for free."
            },
            {
                "name": "RoamingHorde",
                "level": 2,
                "ni": true,
                "num": 2,
                "phase": "Movement",
                "desc": "Movement : Choose an army figure or city token within four squares (no diagonals) of a village token or revealed village icon. That figure or city is immediately attacked by rank II barbarians."
            },
            {
                "name": "TheCitizensareRevoltingII",
                "level": 2,
                "ni": true,
                "num": 1,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose another player. That player's government changes to anarchy."
            },
            {
                "name": "WeLovetheQueenDay",
                "level": 2,
                "ni": true,
                "num": 2,
                "phase": "CityManagement",
                "desc": "City Management: Choose one of your cities. It produces 6 extra hammers this turn."
            },
            {
                "name": "APrincelyGift",
                "level": 3,
                "ni": true,
                "num": 2,
                "phase": null,
                "desc": "Any Time: Play this card as one of the following resources. (Iron, Uranium, Spy, Wheat, Silk)"
            },
            {
                "name": "BankScandal",
                "level": 3,
                "ni": true,
                "num": 1,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Every player except you must discard 1 coin token of your choice. This cannot affect investments."
            },
            {
                "name": "Disaster",
                "level": 3,
                "ni": true,
                "num": 1,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Destroy up to two buildings of your choice belonging to any other player or players and retun the destroyed buildings to the market."
            },
            {
                "name": "Immigrants",
                "level": 3,
                "ni": true,
                "num": 2,
                "phase": "CityManagement",
                "desc": "City Management : Switch up to 3 of your social policies.  Movement : Move one of your figures up to 6 squares to an empty square."
            },
            {
                "name": "OutofPosition",
                "level": 3,
                "ni": true,
                "num": 1,
                "phase": "CityManagement",
                "desc": "City Management: Choose a square. Move all figures belonging to another player in that square up to four squares as a group (no diagonals or crossing water). Figures cannot be forced to start a battle."
            },
            {
                "name": "Patriotism",
                "level": 3,
                "ni": true,
                "num": 1,
                "phase": null,
                "desc": "Battle: Before drawing your battle force, build up to 3 unlocked units for free."
            },
            {
                "name": "PrimetimeTV",
                "level": 3,
                "ni": true,
                "num": 2,
                "phase": null,
                "desc": "Any Time: Cancel a culture event or a resource ability. If canceling a resource ability, the resources spent to activate the ability are lost."
            },
            {
                "name": "SupplyDrop",
                "level": 3,
                "ni": true,
                "num": 2,
                "phase": "StartOfTurn",
                "desc": "Start of Turn : Gain 7 trades. / City Management : Take an additional action with one of your non-capital cities."
            },
            {
                "name": "ThinkTank",
                "level": 3,
                "ni": true,
                "num": 2,
                "phase": "StartOfTurn",
                "desc": "Start of Turn: Choose another player. Learn a level III or less tech of your choice belonging to that player for free. That player then learns a level III or less tech of their choice belonging to you for free."
            },
            {
                "name": "WeLovethePresidentDay",
                "level": 3,
                "ni": true,
                "num": 1,
                "phase": "CityManagement",
                "desc": "City Management: Choose one of your cities. It produces 8 extra hammers this turn."
            },
            {
                "name": "WholesaleDefection",
                "level": 3,
                "ni": true,
                "num": 2,
                "phase": "Movement",
                "desc": "Movement: Choose a square. Kill a great person or up to 2 figures in the chosen square. This may interrupt a figure's movement."
            }
        ],
        "journal": {
            "CANNOTADDCOINLIMIT": "Cannot add coin to the technology, capacity %0% exceeded",
            "PUTCOINAFTERBATTLE": "Added coin after the battle",
            "ATTACKWITHIRON": "Attack using iron",
            "FIGURESAREKILLED": "Figure is killed",
            "YOUARERECEIVINGFREEGREATPERSON": "Free Great Person received",
            "YOUARERECEIVING2FREEINFANTRYUNITS": "2 free infantry units received",
            "YOUARERECEIVINGFREERESOURCESFROMMARKET": "Free resource from the market received",
            "RESEARCHINGTECHOLOGY": "Researching technology",
            "YOUARERECEIVINGSTARTINGTECHNOLOGY": "You are receiving starting technology",
            "DOACTION": "%0%",
            "HUTVILLAGERESOURCERECEIVED": "Hut or Village resource received",
            "RESOURCEFROMBOARDTAKEN": "Resource taken from the market. %0% resources left."
        }
    }

    C.setGR(res)

}