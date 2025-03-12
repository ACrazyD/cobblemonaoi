ServerEvents.recipes((e) => {
	var basicballs = [
		'cobblemon:poke_ball',
		'cobblemon:citrinit_ball',
		'cobblemon:verdant_ball',
		'cobblemon:azure_ball',
		'cobblemon:roseate_ball',
		'cobblemon:slate_ball',
		'cobblemon:premiere_ball',
		'cobblemon:great_ball',
		'cobblemon:ultra_ball',
		'cobblemon:safari_ball',
		'cobblemon:fast_ball',
		'cobblemon:level_ball',
		'cobblemon:lure_ball',
		'cobblemon:heavy_ball',
		'cobblemon:love_ball',
		'cobblemon:friend_ball',
		'cobblemon:moon_ball',
		'cobblemon:sport_ball',
		'cobblemon:park_ball',
		'cobblemon:net_ball',
		'cobblemon:dive_ball',
		'cobblemon:nest_ball',
		'cobblemon:repeat_ball',
		'cobblemon:timer_ball',
		'cobblemon:luxury_ball',
		'cobblemon:dusk_ball',
		'cobblemon:heal_ball',
		'cobblemon:quick_ball',
		'cobblemon:dream_ball',
		'cobblemon:cherish_ball'
	]

    var ancientballs = [
        'cobblemon:ancient_poke_ball',
		'cobblemon::ancient_citrinit_ball',
		'cobblemon:ancient_verdant_ball',
		'cobblemon:ancient_azure_ball',
		'cobblemon:ancient_roseate_ball',
		'cobblemon:ancient_slate_ball',
		'cobblemon:ancient_ivory_ball',
		'cobblemon::ancient_great_ball',
		'cobblemon::ancient_ultra_ball',
		'cobblemon:ancient_feather_ball',
		'cobblemon:ancient_wing_ball',
		'cobblemon:ancient_jet_ball',
		'cobblemon:ancient_heavy_ball',
		'cobblemon:ancient_leaden_ball',
		'cobblemon:ancient_gigton_ball',
		'cobblemon:ancient_origin_ball'
    ]

    var miscballs = [
        'cobblemon:beast_ball',
		'cobblemon:master_ball'
    ]

	/* var basiclids = [
		'cobblemonparts:poke_ball_lid',
		'cobblemonparts:citrinit_ball_lid',
		'cobblemonparts:verdant_ball_lid',
		'cobblemonparts:azure_ball_lid',
		'cobblemonparts:roseate_ball_lid',
		'cobblemonparts:slate_ball_lid',
		'cobblemonparts:premiere_ball_lid',
		'cobblemonparts:great_ball_lid',
		'cobblemonparts:ultra_ball_lid',
		'cobblemonparts:safari_ball_lid',
		'cobblemonparts:fast_ball_lid',
		'cobblemonparts:level_ball_lid',
		'cobblemonparts:lure_ball_lid',
		'cobblemonparts:heavy_ball_lid',
		'cobblemonparts:love_ball_lid',
		'cobblemonparts:friend_ball_lid',
		'cobblemonparts:moon_ball_lid',
		'cobblemonparts:sport_ball_lid',
		'cobblemonparts:park_ball_lid',
		'cobblemonparts:net_ball_lid',
		'cobblemonparts:dive_ball_lid',
		'cobblemonparts:nest_ball_lid',
		'cobblemonparts:repeat_ball_lid',
		'cobblemonparts:timer_ball_lid',
		'cobblemonparts:luxury_ball_lid',
		'cobblemonparts:dusk_ball_lid',
		'cobblemonparts:heal_ball_lid',
		'cobblemonparts:quick_ball_lid',
		'cobblemonparts:dream_ball_lid',
		'cobblemonparts:cherish_ball_lid',
	]
    
    var ancientlids = [
        'cobblemonparts:ancient_poke_ball_lid',
		'cobblemonparts:ancient_citrinit_ball_lid',
		'cobblemonparts:ancient_verdant_ball_lid',
		'cobblemonparts:ancient_azure_ball_lid',
		'cobblemonparts:ancient_roseate_ball_lid',
		'cobblemonparts:ancient_slate_ball_lid',
		'cobblemonparts:ancient_ivory_ball_lid',
		'cobblemonparts:ancient_great_ball_lid',
		'cobblemonparts:ancient_ultra_ball_lid',
		'cobblemonparts:ancient_feather_ball_lid',
		'cobblemonparts:ancient_wing_ball_lid',
		'cobblemonparts:ancient_jet_ball_lid',
		'cobblemonparts:ancient_heavy_ball_lid',
		'cobblemonparts:ancient_leaden_ball_lid',
		'cobblemonparts:ancient_gigton_ball_lid',
		'cobblemonparts:ancient_origin_ball_lid'
    ] */

	var basiclids = basicballs.map(ball => `cobblemonparts:${ball.split(':')[1]}_lid`);
    var ancientlids = ancientballs.map(ball => `cobblemonparts:${ball.split(':')[1]}_lid`);

	[...basicballs, ...ancientballs, ...miscballs].forEach((ball) => {
        e.remove({ id: ball });
    });

    let ironbase = 'cobblemonparts:iron_base';
    let woodbase = 'cobblemonparts:ancient_wood_base';
    let beastbase = 'cobblemonparts:beast_ball_base';
    let masterlid = 'cobblemonparts:master_ball_lid';
    let beastlid = 'cobblemonparts:beast_ball_lid';

    basicballs.forEach((ball, index) => {
        e.shaped(ball, [
            ' L ',
            ' B ',
            ' I '
        ], {
            L: basiclids[index],
            B: '#minecraft:buttons',
            I: ironbase
        });
    });

    ancientballs.forEach((ball, index) => {
        e.shaped(ball, [
            ' L ',
            ' B ',
            ' I '
        ], {
            L: ancientlids[index],
            B: '#minecraft:buttons',
            I: woodbase
        });
    });

    e.shaped('cobblemon:beast_ball', [
        ' L ',
        ' B ',
        ' I '
    ], {
        L: beastlid,
        B: '#minecraft:buttons',
        I: beastbase
    });

    e.shaped('#minecraft:buttons', [
        ' L ',
        ' B ',
        ' I '
    ], {
        L: masterlid,
        B: 'cobblemonparts:button',
        I: ironbase
    });

    

})
