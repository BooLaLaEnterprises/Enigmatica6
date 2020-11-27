events.listen('recipes', function (event) {
    const voidAndEndBiomes = [
        'minecraft:the_end',
        'minecraft:the_void',
        'minecraft:small_end_islands',
        'minecraft:end_barrens',
        'minecraft:end_highlands',
        'minecraft:end_midlands',
        'byg:ivis_fields',
        'byg:bulbis_gardens',
        'byg:shattered_desert',
        'byg:ethereal_islands',
        'byg:purpur_peaks',
        'byg:cryptic_wastes',
        'byg:viscal_isles',
        'byg:shulkren_forest',
        'byg:nightshade_forest'
    ];
    const blacklistType = 'minecraft:worldgen/biome';
    const laser_drill_ore = 'industrialforegoing:laser_drill_ore';
    const laserLens = 'industrialforegoing:laser_lens';

    event.remove({ id: laser_drill_ore + '/sapphire' });
    event.remove({ id: laser_drill_ore + '/ruby' });
    event.remove({ id: laser_drill_ore + '/niter' });

    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/potassium_nitrate'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 5,
                depth_max: 32,
                weight: 6
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '8'
        }
    });

    event.remove({ id: laser_drill_ore + '/arcane' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:ores/arcane'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 5,
                depth_max: 32,
                weight: 6
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '10'
        }
    });

    event.remove({ id: laser_drill_ore + '/bitumen' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/bitumen'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 10,
                depth_max: 40,
                weight: 5
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '15'
        }
    });

    event.remove({ id: laser_drill_ore + '/fluorite' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/fluorite'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 5,
                depth_max: 16,
                weight: 4
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '7'
        }
    });

    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            item: 'rftoolsbase:dimensionalshard_end'
        },
        rarity: [
            {
                whitelist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                blacklist: {},
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '0'
        }
    });

    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            item: 'rftoolsbase:dimensionalshard_nether'
        },
        rarity: [
            {
                whitelist: {
                    type: blacklistType,
                    values: [
                        'minecraft:nether_wastes',
                        'minecraft:basalt_deltas',
                        'minecraft:warped_forest',
                        'minecraft:crimson_forest',
                        'minecraft:soul_sand_valley',
                        'byg:embur_bog',
                        'byg:glowstone_gardens',
                        'byg:sythian_torrids',
                        'byg:warped_desert',
                        'byg:subzero_hypogeal',
                        'byg:quartz_desert',
                        'byg:brimstone_caverns',
                        'byg:weeping_mire',
                        'byg:withering_woods',
                        'byg:magma_wastes',
                        'byg:wailing_garth',
                        'byg:crimson_gardens',
                        'biomesoplenty:crystalline_chasm',
                        'biomesoplenty:undergrowth',
                        'biomesoplenty:visceral_heap',
                        'biomesoplenty:withered_abyss'
                    ]
                },
                blacklist: {},
                depth_min: 7,
                depth_max: 117,
                weight: 12
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '0'
        }
    });

    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            item: 'rftoolsbase:dimensionalshard_overworld'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '0'
        }
    });

    event.remove({ id: laser_drill_ore + '/aluminum' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/aluminum'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 68,
                depth_max: 84,
                weight: 5
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '12'
        }
    });

    event.remove({ id: laser_drill_ore + '/coal' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/coal'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 5,
                depth_max: 132,
                weight: 10
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 4
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '15'
        }
    });

    event.remove({ id: laser_drill_ore + '/copper' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/copper'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 35,
                depth_max: 65,
                weight: 10
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 2
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '1'
        }
    });

    event.remove({ id: laser_drill_ore + '/diamond' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/diamond'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 5,
                depth_max: 16,
                weight: 4
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '3'
        }
    });

    event.remove({ id: laser_drill_ore + '/cinnabar' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/cinnabar'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 30,
                depth_max: 70,
                weight: 2
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '14'
        }
    });

    event.remove({ id: laser_drill_ore + '/lapis' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/lapis'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 13,
                depth_max: 34,
                weight: 14
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 2
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '11'
        }
    });

    event.remove({ id: laser_drill_ore + '/lead' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/lead'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 10,
                depth_max: 40,
                weight: 6
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '10'
        }
    });

    event.remove({ id: laser_drill_ore + '/nickel' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/nickel'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 5,
                depth_max: 68,
                weight: 4
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '12'
        }
    });

    event.remove({ id: laser_drill_ore + '/quartz' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            item: 'minecraft:nether_quartz_ore'
        },
        rarity: [
            {
                whitelist: {
                    type: blacklistType,
                    values: [
                        'minecraft:nether_wastes',
                        'minecraft:basalt_deltas',
                        'minecraft:warped_forest',
                        'minecraft:crimson_forest',
                        'minecraft:soul_sand_valley',
                        'byg:embur_bog',
                        'byg:glowstone_gardens',
                        'byg:sythian_torrids',
                        'byg:warped_desert',
                        'byg:subzero_hypogeal',
                        'byg:quartz_desert',
                        'byg:brimstone_caverns',
                        'byg:weeping_mire',
                        'byg:withering_woods',
                        'byg:magma_wastes',
                        'byg:wailing_garth',
                        'byg:crimson_gardens',
                        'biomesoplenty:crystalline_chasm',
                        'biomesoplenty:undergrowth',
                        'biomesoplenty:visceral_heap',
                        'biomesoplenty:withered_abyss'
                    ]
                },
                blacklist: {},
                depth_min: 7,
                depth_max: 117,
                weight: 12
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '0'
        }
    });

    event.remove({ id: laser_drill_ore + '/redstone' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/redstone'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 5,
                depth_max: 16,
                weight: 28
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 4
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '14'
        }
    });

    event.remove({ id: laser_drill_ore + '/silver' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/silver'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 10,
                depth_max: 40,
                weight: 5
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '7'
        }
    });

    event.remove({ id: laser_drill_ore + '/sulfur' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/sulfur'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 5,
                depth_max: 10,
                weight: 6
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '4'
        }
    });

    event.remove({ id: laser_drill_ore + '/tin' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/tin'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 64,
                depth_max: 96,
                weight: 8
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 2
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '8'
        }
    });

    event.remove({ id: laser_drill_ore + '/uranium' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/uranium'
        },
        rarity: [
            {
                whitelist: {
                    type: blacklistType,
                    values: [
                        'minecraft:nether_wastes',
                        'minecraft:basalt_deltas',
                        'minecraft:warped_forest',
                        'minecraft:crimson_forest',
                        'minecraft:soul_sand_valley',
                        'byg:embur_bog',
                        'byg:glowstone_gardens',
                        'byg:sythian_torrids',
                        'byg:warped_desert',
                        'byg:subzero_hypogeal',
                        'byg:quartz_desert',
                        'byg:brimstone_caverns',
                        'byg:weeping_mire',
                        'byg:withering_woods',
                        'byg:magma_wastes',
                        'byg:wailing_garth',
                        'byg:crimson_gardens',
                        'biomesoplenty:crystalline_chasm',
                        'biomesoplenty:undergrowth',
                        'biomesoplenty:visceral_heap',
                        'biomesoplenty:withered_abyss'
                    ]
                },
                blacklist: {},
                depth_min: 5,
                depth_max: 29,
                weight: 5
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '5'
        }
    });

    event.remove({ id: laser_drill_ore + '/emerald' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/emerald'
        },
        rarity: [
            {
                whitelist: {
                    type: blacklistType,
                    values: [
                        'minecraft:mountains',
                        'minecraft:mountain_edge',
                        'minecraft:gravelly_mountains',
                        'minecraft:modified_gravelly_mountains',
                        'minecraft:snowy_mountains',
                        'minecraft:snowy_taiga_mountains'
                    ]
                },
                blacklist: {},
                depth_min: 5,
                depth_max: 29,
                weight: 8
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '5'
        }
    });

    event.remove({ id: laser_drill_ore + '/glowstone' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            item: 'minecraft:glowstone'
        },
        rarity: [
            {
                whitelist: {
                    type: blacklistType,
                    values: [
                        'minecraft:nether_wastes',
                        'minecraft:basalt_deltas',
                        'minecraft:warped_forest',
                        'minecraft:crimson_forest',
                        'minecraft:soul_sand_valley',
                        'byg:embur_bog',
                        'byg:glowstone_gardens',
                        'byg:sythian_torrids',
                        'byg:warped_desert',
                        'byg:subzero_hypogeal',
                        'byg:quartz_desert',
                        'byg:brimstone_caverns',
                        'byg:weeping_mire',
                        'byg:withering_woods',
                        'byg:magma_wastes',
                        'byg:wailing_garth',
                        'byg:crimson_gardens',
                        'biomesoplenty:crystalline_chasm',
                        'biomesoplenty:undergrowth',
                        'biomesoplenty:visceral_heap',
                        'biomesoplenty:withered_abyss'
                    ]
                },
                blacklist: {},
                depth_min: 7,
                depth_max: 117,
                weight: 8
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '4'
        }
    });

    event.remove({ id: laser_drill_ore + '/gold' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/gold'
        },
        rarity: [
            {
                whitelist: {
                    type: blacklistType,
                    values: [
                        'minecraft:badlands',
                        'minecraft:badlands_plateau',
                        'minecraft:eroded_badlands',
                        'minecraft:modified_badlands_plateau',
                        'minecraft:modified_wooded_badlands_plateau',
                        'minecraft:wooded_badlands_plateau'
                    ]
                },
                blacklist: {},
                depth_min: 32,
                depth_max: 80,
                weight: 16
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 5,
                depth_max: 32,
                weight: 6
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '4'
        }
    });

    event.remove({ id: laser_drill_ore + '/iron' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            tag: 'forge:chunks/iron'
        },
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 5,
                depth_max: 68,
                weight: 20
            },
            {
                whitelist: {},
                blacklist: {
                    type: blacklistType,
                    values: voidAndEndBiomes
                },
                depth_min: 0,
                depth_max: 255,
                weight: 3
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '12'
        }
    });

    event.remove({ id: laser_drill_ore + '/ancient_debris' });
    event.recipes.industrialforegoing.laser_drill_ore({
        output: {
            item: 'minecraft:ancient_debris'
        },
        rarity: [
            {
                whitelist: {
                    type: blacklistType,
                    values: [
                        'minecraft:nether_wastes',
                        'minecraft:basalt_deltas',
                        'minecraft:warped_forest',
                        'minecraft:crimson_forest',
                        'minecraft:soul_sand_valley',
                        'byg:embur_bog',
                        'byg:glowstone_gardens',
                        'byg:sythian_torrids',
                        'byg:warped_desert',
                        'byg:subzero_hypogeal',
                        'byg:quartz_desert',
                        'byg:brimstone_caverns',
                        'byg:weeping_mire',
                        'byg:withering_woods',
                        'byg:magma_wastes',
                        'byg:wailing_garth',
                        'byg:crimson_gardens',
                        'biomesoplenty:crystalline_chasm',
                        'biomesoplenty:undergrowth',
                        'biomesoplenty:visceral_heap',
                        'biomesoplenty:withered_abyss'
                    ]
                },
                blacklist: {},
                depth_min: 1,
                depth_max: 20,
                weight: 1
            }
        ],
        pointer: 0,
        catalyst: {
            item: laserLens + '12'
        }
    });
});
