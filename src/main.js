"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
var skull_list_1 = require("./app/skull_list");
var item_list_1 = require("./app/item_list");
var item_list_2 = require("./app/item_list");
var item_list_3 = require("./app/item_list");
var item_list_4 = require("./app/item_list");
var item_list_5 = require("./app/item_list");
var item_list_6 = require("./app/item_list");
var has_hookshot = false;
var has_longshot = false;
var has_hammer = false;
var has_bomb = false;
var has_bow = false;
var has_fire_arrow = false;
var has_dins = false;
var has_chus = false;
var has_slingshot = false;
var has_farore_wind = false;
var has_tunic_goron = false;
var has_tunic_zora = false;
var has_boomerang = false;
var has_lens = false;
var has_bean = false;
var has_magic = false;
var has_scale = false;
var has_gold_scale = false;
var has_strength1 = false;
var has_strength2 = false;
var has_strength3 = false;
var has_bottle = false;
var has_ruto_letter = false;
var has_iron_boots = false;
var has_hover_boots = false;
var has_mirror_shield = false;
var has_wallet200 = false;
var has_wallet500 = false;
var has_gerudo_card = false;
var has_zelda_lullaby = false;
var has_saria_song = false;
var has_epona_song = false;
var has_song_of_time = false;
var has_song_of_storm = false;
var has_minuet_of_forest = false;
var has_bolero_of_fire = false;
var has_requiem_of_spirit = false;
var has_nocturne_of_shadow = false;
var has_key_forest = 0;
var has_key_fire = 0;
var has_key_water = 0;
var has_key_shadow = 0;
var has_key_spirit = 0;
var has_should_search_the_logic_kekw = false;
var skull_compt = 0;
document.addEventListener('DOMContentLoaded', function (event) {
    var item1 = item_list_1.ITEMS1;
    var item2 = item_list_3.ITEMS2;
    var item3 = item_list_4.ITEMS3;
    var item4 = item_list_5.ITEMS4;
    var item5 = item_list_6.ITEMS5;
    var song1 = item_list_1.SONG1;
    var song2 = item_list_1.SONG2;
    var key_dungeon = item_list_1.KEY_DUNGEON;
    var reward1 = item_list_2.REWARDS1;
    var reward2 = item_list_2.REWARDS2;
    var skull_total = skull_list_1.Skull_Total;
    skull_in_logic();
    item1.forEach(function (element) {
        document.getElementById(element.id.toString()).addEventListener("click", onitemclick1, false);
        document.getElementById(element.id.toString()).addEventListener('contextmenu', onitemrightclick1, false);
        function onitemrightclick1() {
            var id = element.id;
            switch (id) {
                case 1:
                    var image_upgrade = document.getElementById("stick_upgrade");
                    if (document.getElementById("1").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Deku_Stick_icon.png") {
                        document.getElementById("1").style.opacity = "0.5";
                    }
                    else if (document.getElementById("1").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Deku_Stick_icon_20.png") {
                        image_upgrade.src = "assets/img/Deku_Stick_icon.png";
                    }
                    else if (document.getElementById("1").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Deku_Stick_icon_30.png") {
                        image_upgrade.src = "assets/img/Deku_Stick_icon_20.png";
                    }
                    break;
                case 2:
                    var image_upgrade = document.getElementById("nut_upgrade");
                    if (document.getElementById("2").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Deku_Nut_icon.png") {
                        document.getElementById("2").style.opacity = "0.5";
                    }
                    else if (document.getElementById("2").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Deku_Nut_icon_30.png") {
                        image_upgrade.src = "assets/img/Deku_Nut_icon.png";
                    }
                    else if (document.getElementById("2").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Deku_Nut_icon_40.png") {
                        image_upgrade.src = "assets/img/Deku_Nut_icon_30.png";
                    }
                    break;
                case 3:
                    var image_upgrade = document.getElementById("bomb_upgrade");
                    if (document.getElementById("3").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Bomb_icon.png") {
                        document.getElementById("3").style.opacity = "0.5";
                        has_bomb = false;
                    }
                    else if (document.getElementById("3").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Bomb_icon_30.png") {
                        image_upgrade.src = "assets/img/Bomb_icon.png";
                    }
                    else if (document.getElementById("3").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Bomb_icon_40.png") {
                        image_upgrade.src = "assets/img/Bomb_icon_30.png";
                    }
                    break;
                case 4:
                    var image_upgrade = document.getElementById("bow_upgrade");
                    if (document.getElementById("4").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Fairy_Bow_Icon.png") {
                        document.getElementById("4").style.opacity = "0.5";
                        has_bow = false;
                    }
                    else if (document.getElementById("4").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Fairy_Bow_Icon_40.png") {
                        image_upgrade.src = "assets/img/OoT_Fairy_Bow_Icon.png";
                    }
                    else if (document.getElementById("4").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Fairy_Bow_Icon_50.png") {
                        image_upgrade.src = "assets/img/OoT_Fairy_Bow_Icon_40.png";
                    }
                    break;
                case 5:
                    has_fire_arrow = false;
                    document.getElementById("5").style.opacity = "0.5";
                    break;
                case 6:
                    has_dins = false;
                    document.getElementById("6").style.opacity = "0.5";
                    break;
                case 7:
                case 8:
                case 9:
                    document.getElementById(id.toString()).style.opacity = "0.5";
                    break;
                // do something
                default:
                // or break
            }
            skull_in_logic();
        }
        function onitemclick1() {
            var id = element.id;
            // settings variable depending of clicked item
            switch (id) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    has_bomb = true;
                    break;
                case 4:
                    has_bow = true;
                    break;
                case 5:
                    has_fire_arrow = !has_fire_arrow;
                    break;
                case 6:
                    has_dins = !has_dins;
                    break;
                case 7:
                    break;
                case 8:
                    break;
                case 9:
                    break;
                default:
                    alert("error not suposed to be here! (id not found !)");
            }
            skull_in_logic();
        }
    });
    item2.forEach(function (element) {
        document.getElementById(element.id.toString()).addEventListener("click", onitemclick2, false);
        document.getElementById(element.id.toString()).addEventListener('contextmenu', onitemrightclick2, false);
        function onitemrightclick2() {
            var id = element.id;
            switch (id) {
                case 10:
                    var image_upgrade = document.getElementById("slingshot_upgrade");
                    if (document.getElementById("10").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Fairy_Slingshot_Icon.png") {
                        document.getElementById("10").style.opacity = "0.5";
                        has_slingshot = false;
                    }
                    else if (document.getElementById("10").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Fairy_Slingshot_Icon_40.png") {
                        image_upgrade.src = "assets/img/OoT_Fairy_Slingshot_Icon.png";
                    }
                    else if (document.getElementById("10").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Fairy_Slingshot_Icon_50.png") {
                        image_upgrade.src = "assets/img/OoT_Fairy_Slingshot_Icon_40.png";
                    }
                    break;
                case 13:
                    var image_upgrade = document.getElementById("hookshot_upgrade");
                    if (document.getElementById("13").style.opacity == "0.5" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Hookshot_Icon.png") {
                        has_hookshot = false;
                    }
                    else if (document.getElementById("13").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Longshot_Icon.png") {
                        image_upgrade.src = "assets/img/OoT_Hookshot_Icon.png";
                        has_longshot = false;
                    }
                    break;
                case 11:
                    var image_upgrade = document.getElementById("ocarina_upgrade");
                    if (document.getElementById("11").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Ocarina_of_Time_Icon.png") {
                        image_upgrade.src = "assets/img/OoT_Fairy_Ocarina_Icon.png";
                    }
                    else if (document.getElementById("11").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Fairy_Ocarina_Icon.png") {
                        document.getElementById("11").style.opacity = "0.5";
                    }
                    break;
                case 18:
                    has_mirror_shield = false;
                    document.getElementById("18").style.opacity = "0.5";
                    break;
                case 15:
                    has_farore_wind = false;
                    document.getElementById("15").style.opacity = "0.5";
                    break;
                case 12:
                case 14:
                case 16:
                case 17:
                    document.getElementById(id.toString()).style.opacity = "0.5";
                    break;
                default:
                // or break
            }
            skull_in_logic();
        }
        function onitemclick2() {
            var id = element.id;
            // settings variable depending of clicked item
            switch (id) {
                case 10:
                    has_slingshot = true;
                    break;
                case 11:
                    break;
                case 12:
                    break;
                case 13:
                    var image_upgrade = document.getElementById("hookshot_upgrade");
                    if (document.getElementById("13").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Hookshot_Icon.png") {
                        has_hookshot = true;
                    }
                    else if (document.getElementById("13").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Longshot_Icon.png") {
                        has_longshot = true;
                    }
                    break;
                case 14:
                    break;
                case 15:
                    has_farore_wind = !has_farore_wind;
                    break;
                case 16:
                    break;
                case 17:
                    break;
                case 18:
                    has_mirror_shield = !has_mirror_shield;
                    break;
                default:
                    alert("error not suposed to be here! (id not found !)");
            }
            skull_in_logic();
        }
    });
    item3.forEach(function (element) {
        document.getElementById(element.id.toString()).addEventListener("click", onitemclick3, false);
        document.getElementById(element.id.toString()).addEventListener('contextmenu', onitemrightclick3, false);
        function onitemrightclick3() {
            var id = element.id;
            switch (id) {
                case 19:
                    has_boomerang = false;
                    document.getElementById("19").style.opacity = "0.5";
                    break;
                case 20:
                    has_lens = false;
                    document.getElementById("20").style.opacity = "0.5";
                    break;
                case 21:
                    has_bean = false;
                    document.getElementById("21").style.opacity = "0.5";
                    break;
                case 22:
                    has_hammer = false;
                    document.getElementById("22").style.opacity = "0.5";
                    break;
                case 26:
                    has_tunic_goron = false;
                    document.getElementById("26").style.opacity = "0.5";
                    break;
                case 27:
                    has_tunic_zora = false;
                    document.getElementById("27").style.opacity = "0.5";
                    break;
                case 23:
                case 24:
                case 25:
                    document.getElementById(id.toString()).style.opacity = "0.5";
                    break;
                // do something
                default:
                // or break
            }
            skull_in_logic();
        }
        function onitemclick3() {
            var id = element.id;
            // settings variable depending of clicked item
            switch (id) {
                case 19:
                    has_boomerang = !has_boomerang;
                    break;
                case 20:
                    has_lens = !has_lens;
                    break;
                case 21:
                    has_bean = !has_bean;
                    break;
                case 22:
                    has_hammer = !has_hammer;
                    break;
                case 23:
                    break;
                case 24:
                    break;
                case 25:
                    break;
                case 26:
                    has_tunic_goron = !has_tunic_goron;
                    break;
                case 27:
                    has_tunic_zora = !has_tunic_zora;
                    break;
                default:
                    alert("error not suposed to be here! (id not found !)");
            }
            skull_in_logic();
        }
    });
    item4.forEach(function (element) {
        document.getElementById(element.id.toString()).addEventListener("click", onitemclick4, false);
        document.getElementById(element.id.toString()).addEventListener('contextmenu', onitemrightclick4, false);
        function onitemrightclick4() {
            var id = element.id;
            switch (id) {
                case 28:
                    var image_upgrade = document.getElementById("strength_upgrade");
                    if (document.getElementById("28").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Goron_Bracelet_Icon.png") {
                        document.getElementById("28").style.opacity = "0.5";
                        has_strength1 = false;
                    }
                    else if (document.getElementById("28").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Silver_Gauntlets_Icon.png") {
                        image_upgrade.src = "assets/img/OoT_Goron_Bracelet_Icon.png";
                        has_strength2 = false;
                    }
                    else if (document.getElementById("28").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Golden_Gauntlets_Icon.png") {
                        image_upgrade.src = "assets/img/OoT_Silver_Gauntlets_Icon.png";
                        has_strength3 = false;
                    }
                    break;
                case 29:
                    var image_upgrade = document.getElementById("scale_upgrade");
                    if (document.getElementById("29").style.opacity == "0.5" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Silver_Scale_Icon.png") {
                        has_scale = false;
                    }
                    else if (document.getElementById("29").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Golden_Scale_Icon.png") {
                        image_upgrade.src = "assets/img/OoT_Silver_Scale_Icon.png";
                        has_gold_scale = false;
                    }
                    break;
                case 30:
                    var image_upgrade = document.getElementById("magic_upgrade");
                    if (document.getElementById("30").style.opacity == "0.5" && image_upgrade.src == "http://localhost:4200/assets/img/Magic_Jar_(small)_icon.png") {
                        has_magic = false;
                    }
                    else if (document.getElementById("30").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Magic_Jar_icon.png") {
                        image_upgrade.src = "assets/img/Magic_Jar_(small)_icon.png";
                    }
                    break;
                case 31:
                    var image_upgrade = document.getElementById("wallet_upgrade");
                    if (document.getElementById("31").style.opacity == "0.5" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Adult_Wallet_Icon.png") {
                        has_wallet200 = false;
                    }
                    else if (document.getElementById("31").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Giant_Wallet_Icon.png") {
                        image_upgrade.src = "assets/img/OoT_Adult_Wallet_Icon.png";
                        has_wallet500 = false;
                    }
                    break;
                case 32:
                    has_bottle = false;
                    document.getElementById("32").style.opacity = "0.5";
                    break;
                case 33:
                    has_ruto_letter = false;
                    document.getElementById("33").style.opacity = "0.5";
                    break;
                case 34:
                    document.getElementById("34").style.opacity = "0.5";
                    break;
                case 35:
                    has_iron_boots = false;
                    document.getElementById("35").style.opacity = "0.5";
                    break;
                case 36:
                    has_hover_boots = false;
                    document.getElementById("36").style.opacity = "0.5";
                    break;
                // do something
                default:
                // or break
            }
            skull_in_logic();
        }
        function onitemclick4() {
            var id = element.id;
            // settings variable depending of clicked item
            switch (id) {
                case 28:
                    var image_upgrade = document.getElementById("strength_upgrade");
                    if (document.getElementById("28").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Goron_Bracelet_Icon.png") {
                        has_strength1 = true;
                    }
                    else if (document.getElementById("28").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Silver_Gauntlets_Icon.png") {
                        has_strength2 = true;
                    }
                    else if (document.getElementById("28").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Golden_Gauntlets_Icon.png") {
                        has_strength3 = true;
                    }
                    break;
                case 29:
                    var image_upgrade = document.getElementById("scale_upgrade");
                    if (document.getElementById("29").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Silver_Scale_Icon.png") {
                        has_scale = true;
                    }
                    else if (document.getElementById("29").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Golden_Scale_Icon.png") {
                        has_gold_scale = true;
                    }
                    break;
                case 30:
                    var image_upgrade = document.getElementById("magic_upgrade");
                    if (document.getElementById("30").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/Magic_Jar_(small)_icon.png") {
                        has_magic = true;
                    }
                    break;
                case 31:
                    var image_upgrade = document.getElementById("wallet_upgrade");
                    if (document.getElementById("31").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Adult_Wallet_Icon.png") {
                        has_wallet200 = true;
                    }
                    else if (document.getElementById("31").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Giant_Wallet_Icon.png") {
                        has_wallet500 = true;
                    }
                    break;
                case 32:
                    has_bottle = !has_bottle;
                    break;
                case 33:
                    has_ruto_letter = !has_ruto_letter;
                    break;
                case 34:
                    break;
                case 35:
                    has_iron_boots = !has_iron_boots;
                    break;
                case 36:
                    has_hover_boots = !has_hover_boots;
                    break;
                default:
                    alert("error not suposed to be here! (id not found !)");
            }
            skull_in_logic();
        }
    });
    item5.forEach(function (element) {
        document.getElementById(element.id.toString()).addEventListener("click", onitemclick5, false);
        document.getElementById(element.id.toString()).addEventListener('contextmenu', onitemrightclick5, false);
        function onitemrightclick5() {
            var id = element.id;
            switch (id) {
                case 39:
                    var image_upgrade = document.getElementById("mask_upgrade");
                    if (document.getElementById("39").style.opacity == "1" && image_upgrade.src == "http://localhost:4200/assets/img/OoT_Weird_Egg_Icon.png") {
                        document.getElementById("39").style.opacity = "0.5";
                    }
                    break;
                case 52:
                    document.getElementById("52").style.opacity = "0.5";
                    break;
                case 40:
                    break;
                case 38:
                    has_gerudo_card = false;
                    document.getElementById("38").style.opacity = "0.5";
                    break;
                case 37:
                    document.getElementById(id.toString()).style.opacity = "0.5";
                    break;
                default:
                    alert("error id not found");
            }
            skull_in_logic();
        }
        function onitemclick5() {
            var id = element.id;
            // settings variable depending of clicked item
            switch (id) {
                case 37:
                    break;
                case 38:
                    has_gerudo_card = !has_gerudo_card;
                    break;
                case 52:
                    break;
                case 39:
                    break;
                case 40:
                    break;
                default:
                    alert("error not suposed to be here! (id not found !)");
            }
            skull_in_logic();
        }
    });
    song1.forEach(function (element) {
        document.getElementById(element.id.toString()).addEventListener("click", onsongclick1, false);
        document.getElementById(element.id.toString()).addEventListener('contextmenu', onsongrightclick1, false);
        function onsongclick1() {
            var id = element.id;
            switch (id) {
                case 53:
                    has_zelda_lullaby = !has_zelda_lullaby;
                    break;
                case 54:
                    has_epona_song = !has_epona_song;
                    break;
                case 55:
                    has_saria_song = !has_saria_song;
                    break;
                case 56:
                    break;
                case 57:
                    has_song_of_time = !has_song_of_time;
                    break;
                case 58:
                    has_song_of_storm = !has_song_of_storm;
                    break;
                default:
                    alert("error id not found");
            }
            skull_in_logic();
        }
        function onsongrightclick1() {
            var id = element.id;
            // settings variable depending of clicked item
            switch (id) {
                case 53:
                    has_zelda_lullaby = false;
                    document.getElementById("53").style.opacity = "0.5";
                    break;
                case 54:
                    has_epona_song = false;
                    document.getElementById("54").style.opacity = "0.5";
                    break;
                case 55:
                    has_saria_song = false;
                    document.getElementById("55").style.opacity = "0.5";
                    break;
                case 56:
                    break;
                case 57:
                    has_song_of_time = false;
                    document.getElementById("57").style.opacity = "0.5";
                    break;
                case 58:
                    has_song_of_storm = false;
                    document.getElementById("58").style.opacity = "0.5";
                    break;
                default:
                    alert("error not suposed to be here! (id not found !)");
            }
            skull_in_logic();
        }
    });
    song2.forEach(function (element) {
        document.getElementById(element.id.toString()).addEventListener("click", onsongclick2, false);
        document.getElementById(element.id.toString()).addEventListener('contextmenu', onsongrightclick2, false);
        function onsongclick2() {
            var id = element.id;
            switch (id) {
                case 59:
                    has_minuet_of_forest = !has_minuet_of_forest;
                    break;
                case 60:
                    has_bolero_of_fire = !has_bolero_of_fire;
                    break;
                case 61:
                    break;
                case 62:
                    has_requiem_of_spirit = !has_requiem_of_spirit;
                    break;
                case 63:
                    has_nocturne_of_shadow = !has_nocturne_of_shadow;
                    break;
                case 64:
                    break;
                default:
                    alert("error id not found");
            }
            skull_in_logic();
        }
        function onsongrightclick2() {
            var id = element.id;
            // settings variable depending of clicked item
            switch (id) {
                case 59:
                    has_minuet_of_forest = false;
                    document.getElementById("59").style.opacity = "0.5";
                    break;
                case 60:
                    has_bolero_of_fire = false;
                    document.getElementById("60").style.opacity = "0.5";
                    break;
                case 61:
                    break;
                case 62:
                    break;
                case 63:
                    has_nocturne_of_shadow = false;
                    document.getElementById("63").style.opacity = "0.5";
                    break;
                case 64:
                    has_requiem_of_spirit = false;
                    document.getElementById("64").style.opacity = "0.5";
                    break;
                default:
                    alert("error not suposed to be here! (id not found !)");
            }
            skull_in_logic();
        }
    });
    reward1.forEach(function (element) {
        document.getElementById(element.id.toString()).addEventListener('contextmenu', onrewardrightclick, false);
        function onrewardrightclick() {
            var image_upgrade = document.getElementById("key_forest");
            get_next_med_stone(element.id);
        }
    });
    reward2.forEach(function (element) {
        document.getElementById(element.id.toString()).addEventListener('contextmenu', onrewardrightclick, false);
        function onrewardrightclick() {
            get_next_med_stone(element.id);
        }
    });
    function get_next_med_stone(id) {
        var image_upgrade = document.getElementById("med_stone_" + id);
        if (image_upgrade.src == "http://localhost:4200/assets/img/question_icon.png") {
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Spiritual_Stone_of_the_Forest_Icon.png";
        }
        else if (image_upgrade.src == "http://localhost:4200/assets/img/OoT_Spiritual_Stone_of_the_Forest_Icon.png") {
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Spiritual_Stone_of_Fire_Icon.png";
        }
        else if (image_upgrade.src == "http://localhost:4200/assets/img/OoT_Spiritual_Stone_of_Fire_Icon.png") {
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Spiritual_Stone_of_Water_Icon.png";
        }
        else if (image_upgrade.src == "http://localhost:4200/assets/img/OoT_Spiritual_Stone_of_Water_Icon.png") {
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Forest_Medallion_Icon.png";
        }
        else if (image_upgrade.src == "http://localhost:4200/assets/img/OoT_Forest_Medallion_Icon.png") {
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Fire_Medallion_Icon.png";
        }
        else if (image_upgrade.src == "http://localhost:4200/assets/img/OoT_Fire_Medallion_Icon.png") {
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Water_Medallion_Icon.png";
        }
        else if (image_upgrade.src == "http://localhost:4200/assets/img/OoT_Water_Medallion_Icon.png") {
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Shadow_Medallion_Icon.png";
        }
        else if (image_upgrade.src == "http://localhost:4200/assets/img/OoT_Shadow_Medallion_Icon.png") {
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Spirit_Medallion_Icon.png";
        }
        else if (image_upgrade.src == "http://localhost:4200/assets/img/OoT_Spirit_Medallion_Icon.png") {
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Light_Medallion_Icon.png";
        }
        else if (image_upgrade.src == "http://localhost:4200/assets/img/OoT_Light_Medallion_Icon.png") {
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Spiritual_Stone_of_the_Forest_Icon.png";
        }
    }
    key_dungeon.forEach(function (element) {
        document.getElementById(element.id.toString()).addEventListener("click", onkeyclick1, false);
        document.getElementById(element.id.toString()).addEventListener('contextmenu', onkeyrightclick1, false);
        function onkeyclick1() {
            key_on_click(element.id);
            skull_in_logic();
        }
        function onkeyrightclick1() {
            key_on_right_click(element.id);
            skull_in_logic();
        }
    });
    function key_on_click(id) {
        if (has_key_forest < 5 && id == 65) {
            document.getElementById("65").style.opacity = "1";
            var image_upgrade = document.getElementById("key_forest");
            has_key_forest += 1;
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon_" + has_key_forest + ".png";
        }
        if (has_key_fire < 8 && id == 67) {
            document.getElementById("67").style.opacity = "1";
            var image_upgrade = document.getElementById("key_fire");
            has_key_fire += 1;
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon_" + has_key_fire + ".png";
        }
        if (has_key_water < 5 && id == 69) {
            document.getElementById("69").style.opacity = "1";
            var image_upgrade = document.getElementById("key_water");
            has_key_water += 1;
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon_" + has_key_water + ".png";
        }
        if (has_key_shadow < 5 && id == 71) {
            document.getElementById("71").style.opacity = "1";
            var image_upgrade = document.getElementById("key_shadow");
            has_key_shadow += 1;
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon_" + has_key_shadow + ".png";
        }
        if (has_key_spirit < 5 && id == 73) {
            document.getElementById("73").style.opacity = "1";
            var image_upgrade = document.getElementById("key_spirit");
            has_key_spirit += 1;
            image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon_" + has_key_spirit + ".png";
        }
        if (id == 66 || id == 68 || id == 70 || id == 72 || id == 74) {
            if (document.getElementById(id.toString()).style.opacity != "0.5") {
                document.getElementById(id.toString()).style.opacity = "0.5";
            }
            else {
                document.getElementById(id.toString()).style.opacity = "1";
            }
        }
        skull_in_logic();
    }
    ;
    function key_on_right_click(id) {
        var image_upgrade = document.getElementById(key_dungeon[id - 65].upgrade);
        if (has_key_forest > 0 && id == 65) {
            if (has_key_forest == 1) {
                document.getElementById("65").style.opacity = "0.5";
                image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon.png";
            }
            else {
                document.getElementById("65").style.opacity = "1";
                image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon_" + (has_key_forest - 1) + ".png";
            }
            has_key_forest -= 1;
        }
        if (has_key_fire > 0 && id == 67) {
            if (has_key_fire == 1) {
                document.getElementById("67").style.opacity = "0.5";
                image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon.png";
            }
            else {
                document.getElementById("67").style.opacity = "1";
                image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon_" + (has_key_fire - 1) + ".png";
            }
            has_key_fire -= 1;
        }
        if (has_key_water > 0 && id == 69) {
            if (has_key_water == 1) {
                document.getElementById("69").style.opacity = "0.5";
                image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon.png";
            }
            else {
                document.getElementById("69").style.opacity = "1";
                image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon_" + (has_key_water - 1) + ".png";
            }
            has_key_water -= 1;
        }
        if (has_key_shadow > 0 && id == 71) {
            if (has_key_shadow == 1) {
                document.getElementById("71").style.opacity = "0.5";
                image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon.png";
            }
            else {
                document.getElementById("71").style.opacity = "1";
                image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon_" + (has_key_shadow - 1) + ".png";
            }
            has_key_shadow -= 1;
        }
        if (has_key_spirit > 0 && id == 73) {
            if (has_key_spirit == 1) {
                document.getElementById("73").style.opacity = "0.5";
                image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon.png";
            }
            else {
                document.getElementById("73").style.opacity = "1";
                image_upgrade.src = "http://localhost:4200/assets/img/OoT_Small_Key_Icon_" + (has_key_spirit - 1) + ".png";
            }
            has_key_spirit -= 1;
        }
        if (id == 66 || id == 68 || id == 70 || id == 72 || id == 74) {
            document.getElementById(id.toString()).style.opacity = "0.5";
        }
        skull_in_logic();
    }
    ;
});
// SKULL SUM :
function sum_skull(skull_total) {
    skull_compt = 0;
    skull_total.forEach(function (element) {
        if (element.data == true) {
            skull_compt = skull_compt + 1;
        }
        ;
    });
}
;
// SKULL LOGIC :
function skull_in_logic() {
    var skull_total = skull_list_1.Skull_Total;
    skull_total.forEach(function (element) {
        if (eval(skull_total[element.id - 1].requirement)) {
            skull_total[element.id - 1].data = true;
        }
        else {
            skull_total[element.id - 1].data = false;
        }
        ;
    });
    sum_skull(skull_total);
    document.getElementById("skull_compt_logic_number").innerHTML = skull_compt.toString();
}
if (environment_1.environment.production) {
    (0, core_1.enableProdMode)();
}
(0, platform_browser_dynamic_1.platformBrowserDynamic)().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.error(err); });
