let monsterLibraryDB =
    [
        {
            "name": "Vulpix",
            "type": "Fire",
            "id": 37,
            "stats": {
                "HP": 100,
                "AT": 50,
                "DF": 50,
                "AC": 100,
                "EV": 100,
                "SP": 5
            },
            "moves": {
                "move0": {
                    "name": "Tackle",
                    "type": 0,
                    "base-power": 40,
                    "base-accuracy": 100,
                    "effect": null,
                    "limit": null
                },
                "move1": {
                    "name": "Tail Whip",
                    "type": 1,
                    "base-power": 0,
                    "base-accuracy": 100,
                    "effect": {
                        "stat": "DF",
                        "value": "-10"
                    },
                    "limit": null
                },
                "move2": {
                    "name": "Ember",
                    "type": 2,
                    "base-power": 30,
                    "base-accuracy": 80,
                    "effect": {
                        "status": "Burn",
                        "chance": 20
                    },
                    "limit": null
                },
                "move3": {
                    "name": "Potion",
                    "type": 3,
                    "base-power": 0,
                    "base-accuracy": 0,
                    "effect": {
                        "heal": 50
                    },
                    "limit": 1
                }
            }
        },
        {
            "name": "Poliwhirl",
            "type": "Water",
            "id": 61,
            "stats": {
                "HP": 100,
                "AT": 50,
                "DF": 50,
                "AC": 100,
                "EV": 100,
                "SP": 5
            },
            "moves": {
                "move0": {
                    "name": "Pound",
                    "type": 0,
                    "base-power": 40,
                    "base-accuracy": 100,
                    "effect": null,
                    "limit": null
                },
                "move1": {
                    "name": "Bubble",
                    "type": 1,
                    "base-power": 40,
                    "base-accuracy": 70,
                    "effect": {
                        "stat": "SP",
                        "value": "-1"
                    },
                    "limit": null
                },
                "move2": {
                    "name": "Ice Ball",
                    "type": 2,
                    "base-power": 30,
                    "base-accuracy": 80,
                    "effect": {
                        "status": "Freeze",
                        "chance": 15
                    },
                    "limit": null
                },
                "move3": {
                    "name": "Potion",
                    "type": 3,
                    "base-power": 0,
                    "base-accuracy": 0,
                    "effect": {
                        "heal": 50
                    },
                    "limit": 1
                }
            }
        }
    ];

export { monsterLibraryDB };