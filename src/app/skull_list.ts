import { Skull_total } from './skull';

export const Skull_Total: Skull_total[] = [
                            /*  ALL dungeon skull  */
    /*  Deku Tree  */                
  { id:  1, name: 'Deku Tree GS Compass Room', data: true, requirement: "((settings_open_deku.OpenDeku == 'true') || has_kokiri_sword)"},
  { id:  2, name: 'Deku Tree GS Basement Vines', data: false, requirement: "((settings_open_deku.OpenDeku == 'true') || has_kokiri_sword) && (has_slingshot || has_boomerang || has_bomb)"},
  { id:  3, name: 'Deku Tree GS Basement Gate' , data: true, requirement: "((settings_open_deku.OpenDeku == 'true') || has_kokiri_sword)"},
  { id:  4, name: 'Deku Tree GS Basement Back Room' , data: false, requirement: "((settings_open_deku.OpenDeku == 'true') || has_kokiri_sword) && has_boomerang && has_bomb"},
    /*  Dodongos Cavern  */
  { id:  5, name: 'Dodongos Cavern GS Side Room Near Lower Lizalfos' , data: false,requirement: "has_strength1 || has_bomb"},
  { id:  6, name: 'Dodongos Cavern GS Scarecrow' , data: false, requirement: "(has_strength1 || has_bomb || has_hammer) && has_hookshot"},
  { id:  7, name: 'Dodongos Cavern GS Vines Above Stairs' , data: false, requirement: "has_strength1 || has_bomb || (has_hammer && has_dins && has_magic)"},
  { id:  8, name: 'Dodongos Cavern GS Alcove Above Stairs' , data: false, requirement: "(has_strength1 || has_bomb || (has_hammer && has_dins && has_magic)) && has_hookshot"},
  { id:  9, name: 'Dodongos Cavern GS Back Room' , data: false, requirement: "has_bomb"},
    /*  Jabu Jabus belly  */
  { id: 10, name: 'Jabu Jabus Belly GS Water Switch Room' , data: false, requirement: "(has_bomb || has_slingshot || has_boomerang) && has_ruto_letter && ((has_bomb && has_zelda_lullaby) || has_scale)"},
  { id: 11, name: 'Jabu Jabus Belly GS Lobby Basement Lower' , data: false, requirement: "has_boomerang && has_ruto_letter && ((has_bomb && has_zelda_lullaby) || has_scale)"},
  { id: 12, name: 'Jabu Jabus Belly GS Lobby Basement Upper' , data: false, requirement: "has_boomerang && has_ruto_letter && (has_bomb && has_zelda_lullaby) || has_scale"},
  { id: 13, name: 'Jabu Jabus Belly GS Near Boss' , data: false, requirement: "has_boomerang && has_ruto_letter && (has_bomb && has_zelda_lullaby) || has_scale"},
    /*  Bottom of the Well */
  { id: 14, name: 'Bottom of the Well GS West Inner Room' , data: false, requirement: "has_song_of_storm && has_boomerang && has_zelda_lullaby"},
  { id: 15, name: 'Bottom of the Well GS East Inner Room' , data: false, requirement: "has_song_of_storm && has_boomerang && has_zelda_lullaby"},
  { id: 16, name: 'Bottom of the Well GS Like Like Cage' , data: false, requirement: "has_song_of_storm && has_boomerang && has_zelda_lullaby"},
    /*  Ice Cavern  */
  { id: 17, name: 'Ice Cavern GS Spinning Scythe Room' , data: false, requirement: "has_ruto_letter && has_hookshot && ((has_bomb && has_zelda_lullaby) || has_scale)"},
  { id: 18, name: 'Ice Cavern GS Heart Piece Room' , data: false, requirement: "has_ruto_letter && has_hookshot && ((has_bomb && has_zelda_lullaby) || has_scale)"},
  { id: 19, name: 'Ice Cavern GS Push Block Room' , data: false, requirement: "has_ruto_letter && has_hookshot && ((has_bomb && has_zelda_lullaby) || has_scale)"},
    /*  Forest Temple  */
  { id: 20, name: 'Forest Temple GS First Room' , data: false, requirement: "(has_minuet_of_forest || has_saria_song) && has_hookshot"},
  { id: 21, name: 'Forest Temple GS Lobby' , data: false, requirement: "(has_minuet_of_forest || has_saria_song) && has_hookshot"},
  { id: 22, name: 'Forest Temple GS Raised Island Courtyard' , data: false, requirement: "((has_minuet_of_forest || has_saria_song) && has_hookshot && ((has_bow || has_song_of_time) || ((has_key_forest >= 1) && has_hover_boots))) || ((has_minuet_of_forest || has_saria_song) && has_hookshot && has_bow && has_strength1 && has_hover_boots)"}, // second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 23, name: 'Forest Temple GS Level Island Courtyard' , data: false, requirement: "((has_minuet_of_forest || has_saria_song) && has_hookshot && (((has_key_forest >= 1) && has_hover_boots) || ((has_key_forest >= 2) && has_strength1))) || ((has_minuet_of_forest || has_saria_song) && has_hookshot && has_bow && has_strength1 && has_hover_boots)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 24, name: 'Forest Temple GS Basement' , data: false, requirement: "((has_minuet_of_forest || has_saria_song) && has_hookshot && has_bow && has_strength1 && has_key_forest > 4) || ((has_minuet_of_forest || has_saria_song) && has_hookshot && has_bow && has_strength1 && has_hover_boots)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
    /*  Fire Temple  */
  { id: 25, name: 'Fire Temple GS Boss Key Loop' , data: false, requirement: "(has_bolero_of_fire || ((has_hookshot || has_hover_boots) && (has_strength1 || has_bomb || has_bow))) && has_hammer"},
  { id: 26, name: 'Fire Temple GS Song of Time Room' , data: false, requirement: "((has_bolero_of_fire || ((has_hookshot || has_hover_boots) && (has_strength1 || has_bomb || has_bow))) && (has_key_fire >= 1) && has_song_of_time) || (has_hookshot && has_bomb && has_hammer && has_bow && has_hover_boots && (has_tunic_goron || has_wallet200) && has_strength1)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 27, name: 'Fire Temple GS Boulder Maze' , data: false, requirement: "((has_bolero_of_fire || (has_hookshot || has_hover_boots)) && (has_key_fire >= 3) && has_strength1 && has_bomb && (has_tunic_goron || has_wallet200)) || (has_hookshot && has_bomb && has_hammer && has_bow && has_hover_boots && (has_tunic_goron || has_wallet200) && has_strength1)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 28, name: 'Fire Temple GS Scarecrow Climb' , data: false, requirement: "(has_hookshot && (has_key_fire > 4) && has_strength1 && (has_tunic_goron || has_wallet200)) || (has_hookshot && has_bomb && has_hammer && has_bow && has_hover_boots && (has_tunic_goron || has_wallet200) && has_strength1)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 29, name: 'Fire Temple GS Scarecrow Top' , data: false, requirement: "(has_hookshot && (has_key_fire > 4) && has_strength1 && (has_tunic_goron || has_wallet200)) || (has_hookshot && has_bomb && has_hammer && has_bow && has_hover_boots && (has_tunic_goron || has_wallet200) && has_strength1)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
    /*  Water Temple  */
  { id: 30, name: 'Water Temple GS Behind Gate' , data: false, requirement: "has_hookshot && has_iron_boots && has_bomb & has_zelda_lullaby"},
  { id: 31, name: 'Water Temple GS Near Boss Key Chest' , data: false, requirement: "(has_hookshot && has_iron_boots && has_bomb && has_strength1 && (has_key_water >= 4) && has_zelda_lullaby) || (has_longshot && has_bomb && has_iron_boots && has_bow && has_zelda_lullaby && has_strength1)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 32, name: 'Water Temple GS Central Pillar' , data: false, requirement: "(((has_hookshot && has_farore_wind && has_magic) || has_longshot) && has_iron_boots && ((has_key_water >= 5) || has_bow || has_dins) && has_zelda_lullaby) || (has_longshot && has_bomb && has_iron_boots && has_bow && has_zelda_lullaby && has_strength1)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 33, name: 'Water Temple GS Falling Platform Room' , data: false, requirement: "(has_longshot && has_iron_boots && (has_key_water >= 4) && has_zelda_lullaby) || (has_longshot && has_bomb && has_iron_boots && has_bow && has_zelda_lullaby && has_strength1)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 34, name: 'Water Temple GS River' , data: false, requirement: "(has_longshot && has_iron_boots && (has_key_water >= 5) && has_zelda_lullaby && has_song_of_time) || (has_longshot && has_bomb && has_iron_boots && has_bow && has_zelda_lullaby && has_strength1 && has_song_of_time)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
    /*  Spirit Temple  */
  { id: 35, name: 'Spirit Temple GS Metal Fence' , data: false, requirement: "has_requiem_of_spirit && (has_slingshot || has_boomerang)"},
  { id: 36, name: 'Spirit Temple GS Sun on Floor Room' , data: false, requirement: "(((((has_epona_song && has_hookshot && has_hover_boots) || has_longshot) && has_magic && has_lens ) || has_requiem_of_spirit) && (has_key_spirit >= 2) && has_strength2) || (has_requiem_of_spirit && has_hookshot && (has_boomerang || has_slingshot) && has_bomb && has_strength2 && has_zelda_lullaby && has_magic && (has_dins || (has_fire_arrow && has_bow)))"}, // second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 37, name: 'Spirit Temple GS Hall After Sun Block Room' , data: false, requirement: "(((((has_epona_song && has_hookshot && has_hover_boots) || has_longshot) && has_magic && has_lens ) || has_requiem_of_spirit) && (has_key_spirit >= 3) && ((has_strength2 && has_hookshot) || has_boomerang)) || (has_requiem_of_spirit && has_hookshot && (has_boomerang || has_slingshot) && has_bomb && has_strength2 && has_zelda_lullaby && has_magic && (has_dins || (has_fire_arrow && has_bow)))"}, // second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 38, name: 'Spirit Temple GS Lobby' , data: false, requirement: "(((((has_epona_song && has_hookshot && has_hover_boots) || has_longshot) && has_magic && has_lens ) || has_requiem_of_spirit) && (has_key_spirit >= 3) && has_hookshot && has_strength2) || (has_requiem_of_spirit && has_hookshot && (has_boomerang || has_slingshot) && has_bomb && has_strength2 && has_zelda_lullaby && has_magic && (has_dins || (has_fire_arrow && has_bow)))"}, // second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 39, name: 'Spirit Temple GS Boulder Room' , data: false, requirement: "((((has_epona_song && has_hookshot && has_hover_boots) || has_longshot) && has_magic && has_lens ) || has_requiem_of_spirit) && has_strength2 && has_song_of_time && (has_bow || has_hookshot || has_bomb)"},
    /*  Shadow Temple  */
  { id: 40, name: 'Shadow Temple GS Like Like Room' , data: false, requirement: "has_nocturne_of_shadow && has_dins && has_magic && has_hover_boots && has_bomb"}, // no key requirement since you have the key no matter what you do with this items
  { id: 41, name: 'Shadow Temple GS Falling Spikes Room' , data: false, requirement: "has_nocturne_of_shadow && has_dins && has_magic && has_hover_boots && has_bomb && has_hookshot"}, // no key requirement since you have the key no matter what you do with this items
  { id: 42, name: 'Shadow Temple GS Single Giant Pot' , data: false, requirement: "(has_nocturne_of_shadow && has_dins && has_magic && has_hover_boots && has_bomb && has_hookshot && (has_key_shadow >= 2)) || (has_nocturne_of_shadow && has_dins && has_magic && has_hover_boots && has_bomb && has_hookshot && has_strength1)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 43, name: 'Shadow Temple GS Near Ship' , data: false, requirement: "(has_nocturne_of_shadow && has_dins && has_magic && has_hover_boots && has_bomb && has_longshot && (has_key_shadow >= 4)) || (has_nocturne_of_shadow && has_dins && has_magic && has_hover_boots && has_bomb && has_longshot && has_strength1)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
  { id: 44, name: 'Shadow Temple GS Triple Giant Pot' , data: false, requirement: "(has_nocturne_of_shadow && has_dins && has_magic && has_hover_boots && has_bomb && has_hookshot && (has_key_shadow >= 4)) || (has_nocturne_of_shadow && has_dins && has_magic && has_hover_boots && has_bomb && has_longshot && has_strength1)"},// second part : if Full clearable no matter how, take skull into account without thinking about key
                          /*  ALL overworld skull  */
    /*  Kokiri Forest  */
  { id: 45, name: 'KF GS Know It All House' , data: true, requirement: "none"},
  { id: 46, name: 'KF GS Bean Patch' , data: false, requirement: "has_bottle || (has_ruto_letter && (has_scale || (has_bomb && has_zelda_lullaby)))"},
  { id: 47, name: 'KF GS House of Twins' , data: false, requirement: "has_hover_boots || has_hookshot"},
    /*  Lost Wood  */
  { id: 48, name: 'LW GS Bean Patch Near Bridge' , data: false, requirement: "has_bottle || (has_ruto_letter && (has_scale || (has_bomb && has_zelda_lullaby)))"},
  { id: 49, name: 'LW GS Bean Patch Near Theater' , data: false, requirement: "has_bottle || (has_ruto_letter && (has_scale || (has_bomb && has_zelda_lullaby)))"},
  { id: 50, name: 'LW GS Above Theater' , data: false, requirement: "(has_minuet_of_forest || has_saria_song) && (has_bean || has_longshot)"},
    /*  Sacred Forest Meadow  */
  { id: 51, name: 'SFM GS' , data: false, requirement: "(has_minuet_of_forest || has_saria_song) && has_hookshot"},
    /*  Hyrule Field  */
  { id: 52, name: 'HF GS Cow Grotto' , data: false, requirement: "(has_bomb && has_magic && has_dins && has_boomerang) || (has_hammer && has_magic && has_hookshot && (has_dins || (has_fire_arrow && has_bow)))"},
  { id: 53, name: 'HF GS Near Kak Grotto' , data: false, requirement: "(has_bomb && has_boomerang) || ((has_hammer || has_bomb) && has_hookshot)"},
    /*  Market  */
  { id: 54, name: 'Market GS Guard House' , data: true, requirement: "none"},
    /*  Hyrule Castle  */
  { id: 55, name: 'HC GS Tree' , data: true, requirement: "none"},
  { id: 56, name: 'HC GS Storms Grotto' , data: false, requirement: "has_song_of_storm && has_bomb && has_boomerang"},
    /*  Lon Lon Ranch */
  { id: 57, name: 'LLR GS House Window' , data: false, requirement: "has_boomerang"},
  { id: 58, name: 'LLR GS Tree' , data: true, requirement: "none"},
  { id: 59, name: 'LLR GS Rain Shed' , data: true, requirement: "none"},
  { id: 60, name: 'LLR GS Back Wall' , data: false, requirement: "has_boomerang"},
    /*  Kakariko Village  */
  { id: 61, name: 'Kak GS Tree' , data: true, requirement: "none"},
  { id: 62, name: 'Kak GS Guards House' , data: true, requirement: "none"},
  { id: 63, name: 'Kak GS Watchtower' , data: false, requirement: "has_slingshot"},
  { id: 64, name: 'Kak GS Skulltula House' , data: true, requirement: "none"},
  { id: 65, name: 'Kak GS House Under Construction' , data: true, requirement: "none"},
  { id: 66, name: 'Kak GS Above Impas House' , data: false, requirement: "has_hookshot"},
    /*  Graveyard  */
  { id: 67, name: 'Graveyard GS Bean Patch' , data: false, requirement: "has_bottle || (has_ruto_letter && (has_scale || (has_bomb && has_zelda_lullaby)))"},
  { id: 68, name: 'Graveyard GS Wall' , data: false, requirement: "has_boomerang"},
    /*  Death Mountain Trail */
  { id: 69, name: 'DMT GS Near Kak' , data: false, requirement: "has_bomb || has_hammer"},
  { id: 70, name: 'DMT GS Bean Patch' , data: false, requirement: "(has_bottle || (has_ruto_letter && (has_scale || (has_bomb && has_zelda_lullaby)))) && (has_strength1 || has_bomb)"},
  { id: 71, name: 'DMT GS Above Dodongos Cavern' , data: false, requirement: "has_hammer"},
  { id: 72, name: 'DMT GS Falling Rocks Path' , data: false, requirement: "has_hammer"},
    /*  Goron City  */
  { id: 73, name: 'GC GS Center Platform' , data: true, requirement: "none"},
  { id: 74, name: 'GC GS Boulder Maze' , data: false, requirement: "has_bomb"},
    /*  Death Mountain Crater  */
  { id: 75, name: 'DMC GS Crate' , data: false, requirement: "has_bomb"},
  { id: 76, name: 'DMC GS Bean Patch' , data: false, requirement: "(has_bottle || (has_ruto_letter && (has_scale || (has_bomb && has_zelda_lullaby)))) && has_bolero_of_fire"},
    /*  Zora River  */
  { id: 77, name: 'ZR GS Tree' , data: true, requirement: "none"},
  { id: 78, name: 'ZR GS Ladder' , data: false, requirement: "has_scale || has_bomb"},
  { id: 79, name: 'ZR GS Near Raised Grottos' , data: false, requirement: "has_hookshot"},
  { id: 80, name: 'ZR GS Above Bridge' , data: false, requirement: "has_hookshot"},
    /*  Zora Domain  */
  { id: 81, name: 'ZD GS Frozen Waterfall' , data: false, requirement: "has_zelda_lullaby"},
    /*  Zora Fountain  */
  { id: 82, name: 'ZF GS Above the Log' , data: false, requirement: "has_zelda_lullaby && has_ruto_letter && has_boomerang && (has_bomb || has_scale)"},
  { id: 83, name: 'ZF GS Tree' , data: false, requirement: "has_zelda_lullaby && has_ruto_letter && (has_bomb || has_scale)"},
  { id: 84, name: 'ZF GS Hidden Cave' , data: false, requirement: "has_zelda_lullaby && has_ruto_letter && (has_bomb || (has_scale && has_hammer)) && has_strength2 && has_hookshot"},
    /*  Lac Hylia  */
  { id: 85, name: 'LH GS Bean Patch' , data: false, requirement: "has_bottle || (has_ruto_letter && (has_scale || (has_bomb && has_zelda_lullaby)))"},
  { id: 86, name: 'LH GS Lab Wall' , data: false, requirement: "has_boomerang"},
  { id: 87, name: 'LH GS Small Island' , data: true, requirement: "none"},
  { id: 88, name: 'LH GS Lab Crate' , data: false, requirement: "has_iron_boots && has_hookshot"},
  { id: 89, name: 'LH GS Tree' , data: false, requirement: "has_longshot"},
    /*  Gerudo Valley  */
  { id: 90, name: 'GV GS Small Bridge' , data: false, requirement: "has_boomerang"},
  { id: 91, name: 'GV GS Bean Patch' , data: false, requirement: "has_bottle || (has_ruto_letter && (has_scale || (has_bomb && has_zelda_lullaby)))"},
  { id: 92, name: 'GV GS Behind Tent' , data: false, requirement: "(has_epona_song && has_hookshot) || has_longshot"},
  { id: 93, name: 'GV GS Pillar' , data: false, requirement: "(has_epona_song && has_hookshot) || has_longshot"},
    /*  Gerudo Fortress  */
  { id: 94, name: 'GF GS Top Floor' , data: false, requirement: "(has_epona_song && (has_hookshot || has_bow || has_bomb )) || has_longshot"},
  { id: 95, name: 'GF GS Archery Range' , data: false, requirement: "(has_epona_song && has_hookshot) || has_longshot"},
    /*  Wastleland */
  { id: 96, name: 'Wasteland GS' , data: false, requirement: "(has_epona_song && has_hookshot && has_hover_boots) || has_longshot"},
    /*  Desert Colossus  */
  { id: 97, name: 'Colossus GS Tree' , data: false, requirement: "(((has_epona_song && has_hookshot && has_hover_boots) || has_longshot) && has_magic && has_lens ) || (has_requiem_of_spirit && has_hookshot)"},
  { id: 98, name: 'Colossus GS Hill' , data: false, requirement: "(((has_epona_song && has_hookshot && has_hover_boots) || has_longshot) && has_magic && has_lens ) || (has_requiem_of_spirit && has_hookshot)"},
  { id: 99, name: 'Colossus GS Bean Patch' , data: false, requirement: "(has_bottle || (has_ruto_letter && (has_scale || (has_bomb && has_zelda_lullaby)))) && has_requiem_of_spirit"},
    /*  Outside Ganon Castle  */
  { id:100, name: 'OGC GS' , data: true, requirement: "none"},

];