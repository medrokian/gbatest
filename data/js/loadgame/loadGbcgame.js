savedGameTypeID = localStorage.getItem("gameTypeID");
gameTypeID = JSON.parse(savedGameTypeID);



function setGbGameName() {
const gameNameTypeID = 
['../gba-host/gbc-alt/10-Pin_Bowling_(USA)_(Rumble_Version).7z',
'../gba-host/gbc-alt/102_Dalmatians_-_Puppies_to_the_Rescue_(USA_Europe).7z',
'../gba-host/gbc-alt/1942_(USA_Europe).7z',
'../gba-host/gbc-alt/3-D_Ultra_Pinball_-_Thrillride_(USA)_(Rumble_Version).7z',
'../gba-host/gbc-alt/720_Degrees_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Action_Man_-_Search_for_Base_X_(USA_Europe).7z',
'../gba-host/gbc-alt/AirForce_Delta_(USA).7z',
'../gba-host/gbc-alt/Aladdin_(USA).7z',
'../gba-host/gbc-alt/Alice_in_Wonderland_(USA_Australia).7z',
'../gba-host/gbc-alt/Aliens_-_Thanatos_Encounter_(USA_Europe).7z',
'../gba-host/gbc-alt/All-Star_Baseball_2000_(USA_Europe).7z',
'../gba-host/gbc-alt/All-Star_Baseball_2001_(USA).7z',
'../gba-host/gbc-alt/Alone_in_the_Dark_-_The_New_Nightmare_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Animorphs_(USA).7z',
'../gba-host/gbc-alt/Antz_(USA)_(EnFrEs)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Antz_Racing_(USA)_(EnFrDeEsItNl).7z',
'../gba-host/gbc-alt/Armada_-_FX_Racers_(USA).7z',
'../gba-host/gbc-alt/Armorines_-_Project_S.W.A.R.M._(USA_Europe)_(EnDe).7z',
'../gba-host/gbc-alt/Army_Men_(USA_Europe)_(EnFrDe).7z',
'../gba-host/gbc-alt/Army_Men_-_Air_Combat_(USA_Europe)_(EnFrDe).7z',
'../gba-host/gbc-alt/Army_Men_-_Sarges_Heroes_2_(USA_Europe)_(EnFrDe).7z',
'../gba-host/gbc-alt/Army_Men_2_(USA_Europe)_(EnFrDe).7z',
'../gba-host/gbc-alt/Arthurs_Absolutely_Fun_Day!_(USA).7z',
'../gba-host/gbc-alt/Asteroids_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Atlantis_-_The_Lost_Empire_(USA_Europe).7z',
'../gba-host/gbc-alt/Austin_Powers_-_Oh_Behave!_(USA).7z',
'../gba-host/gbc-alt/Austin_Powers_-_Welcome_to_My_Underground_Lair!_(USA).7z',
'../gba-host/gbc-alt/Azure_Dreams_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Babe_and_Friends_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Ballistic_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Barbie_-_Fashion_Pack_Games_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Barbie_-_Magic_Genie_Adventure_(USA).7z',
'../gba-host/gbc-alt/Barbie_-_Ocean_Discovery_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Barbie_-_Pet_Rescue_(USA).7z',
'../gba-host/gbc-alt/Bass_Masters_Classic_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Batman_-_Chaos_in_Gotham_(USA).7z',
'../gba-host/gbc-alt/Batman_Beyond_-_Return_of_the_Joker_(USA).7z',
'../gba-host/gbc-alt/Battleship_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/BattleTanx_(USA).7z',
'../gba-host/gbc-alt/Beauty_and_the_Beast_-_A_Board_Game_Adventure_(USA_Australia)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Billy_Bobs_Huntin_n_Fishin_(USA_Europe).7z',
'../gba-host/gbc-alt/Bionic_Commando_-_Elite_Forces_(USA_Australia).7z',
'../gba-host/gbc-alt/Black_Bass_-_Lure_Fishing_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Blade_(USA_Europe).7z',
'../gba-host/gbc-alt/Blaster_Master_-_Enemy_Below_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Blues_Clues_-_Blues_Alphabet_Book_(USA).7z',
'../gba-host/gbc-alt/Boarder_Zone_(USA).7z',
'../gba-host/gbc-alt/Bob_the_Builder_-_Fix_it_Fun!_(USA).7z',
'../gba-host/gbc-alt/Bomberman_Max_-_Blue_Champion_(USA).7z',
'../gba-host/gbc-alt/Bomberman_Max_-_Red_Challenger_(USA).7z',
'../gba-host/gbc-alt/Bomberman_Quest_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Buffy_the_Vampire_Slayer_(USA_Europe).7z',
'../gba-host/gbc-alt/Bugs_Bunny_-_Crazy_Castle_3_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Bugs_Bunny_in_-_Crazy_Castle_4_(USA).7z',
'../gba-host/gbc-alt/Bugs_Life_A_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Bust-A-Move_4_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Bust-A-Move_Millennium_(USA_Europe).7z',
'../gba-host/gbc-alt/Buzz_Lightyear_of_Star_Command_(USA_Europe).7z',
'../gba-host/gbc-alt/Caesars_Palace_II_(USA_Europe).7z',
'../gba-host/gbc-alt/Cannon_Fodder_(USA)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/Carmageddon_-_Carpocalypse_Now_(USA_Europe)_(EnFrEsIt).7z',
'../gba-host/gbc-alt/Casper_(USA).7z',
'../gba-host/gbc-alt/Caterpillar_Construction_Zone_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Catwoman_(USA).7z',
'../gba-host/gbc-alt/Catz_(USA).7z',
'../gba-host/gbc-alt/Centipede_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Championship_Motocross_2001_featuring_Ricky_Carmichael_(USA_Europe).7z',
'../gba-host/gbc-alt/Chase_H.Q._-_Secret_Police_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Chessmaster_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Chicken_Run_(USA_Europe)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/Classic_Bubble_Bobble_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Commander_Keen_(USA_Europe).7z',
'../gba-host/gbc-alt/Conkers_Pocket_Tales_(USA_Europe)_(EnFrDe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Crash_II_Advance_2003_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Croc_(USA_Europe).7z',
'../gba-host/gbc-alt/Croc_2_(USA_Europe).7z',
'../gba-host/gbc-alt/Cruisn_Exotica_(USA).7z',
'../gba-host/gbc-alt/Crystalis_(USA).7z',
'../gba-host/gbc-alt/Cubix_-_Robots_for_Everyone_-_Race_n_Robots_(USA)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/CyberTiger_(USA_Europe).7z',
'../gba-host/gbc-alt/Daffy_Duck_-_Fowl_Play_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Dave_Mirra_Freestyle_BMX_(USA_Europe).7z',
'../gba-host/gbc-alt/Deer_Hunter_(USA).7z',
'../gba-host/gbc-alt/Deja_Vu_I_&_II_-_The_Casebooks_of_Ace_Harding_(USA).7z',
'../gba-host/gbc-alt/Dexters_Laboratory_-_Robot_Rampage_(USA_Europe).7z',
'../gba-host/gbc-alt/Digimon_-_Yellow_Jade_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Digimon_Adventure_2001_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Digimon_Crystal_II_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Digimon_Saphire_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Dinosaur_(USA).7z',
'../gba-host/gbc-alt/Diva_Starz_-_Mall_Mania_(USA).7z',
'../gba-host/gbc-alt/Dogz_(USA).7z',
'../gba-host/gbc-alt/Donald_Duck_-_Goin_Quackers_(USA)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/Donkey_Kong_Country_(USA_Europe)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/Dougs_Big_Game_(USA).7z',
'../gba-host/gbc-alt/Dracula_-_Crazy_Vampire_(USA).7z',
'../gba-host/gbc-alt/Dragons_Lair_(USA_Europe)_(EnJaFrDeEsZh).7z',
'../gba-host/gbc-alt/Dragon_Ball_Z_-_Legendary_Super_Warriors_(USA).7z',
'../gba-host/gbc-alt/Dragon_Dance_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Dragon_Tales_-_Dragon_Adventures_(USA).7z',
'../gba-host/gbc-alt/Dragon_Tales_-_Dragon_Wings_(USA).7z',
'../gba-host/gbc-alt/Dragon_Warrior_III_(USA).7z',
'../gba-host/gbc-alt/Dragon_Warrior_I_&_II_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Dragon_Warrior_Monsters_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Dragon_Warrior_Monsters_2_-_Cobis_Journey_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Dragon_Warrior_Monsters_2_-_Taras_Adventure_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Driver_-_You_Are_the_Wheelman_(USA)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/DryMouth_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Dukes_of_Hazzard_The_-_Racing_for_Home_(USA).7z',
'../gba-host/gbc-alt/Duke_Nukem_(USA)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/E.T._-_The_Extra-Terrestrial_-_Digital_Companion_(USA).7z',
'../gba-host/gbc-alt/E.T._-_The_Extra-Terrestrial_-_Escape_from_Planet_Earth_(USA).7z',
'../gba-host/gbc-alt/E.T._-_The_Extra-Terrestrial_and_the_Cosmic_Garden_(USA).7z',
'../gba-host/gbc-alt/Earthworm_Jim_-_Menace_2_the_Galaxy_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Emperors_New_Groove_The_(USA).7z',
'../gba-host/gbc-alt/ESPN_International_Track_&_Field_(USA).7z',
'../gba-host/gbc-alt/ESPN_National_Hockey_Night_(USA).7z',
'../gba-host/gbc-alt/Evel_Knievel_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Extreme_Sports_with_the_Berenstain_Bears_(USA_Europe)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/F-18_Thunder_Strike_(USA_Europe).7z',
'../gba-host/gbc-alt/F1_World_Grand_Prix_II_for_Game_Boy_Color_(USA)_(EnFrDeEs).7z',
'../gba-host/gbc-alt/FIFA_2000_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/filenames.txt',
'../gba-host/gbc-alt/Flintstones_The_-_Burgertime_in_Bedrock_(USA).7z',
'../gba-host/gbc-alt/Force_21_(USA)_(EnFrDe).7z',
'../gba-host/gbc-alt/Formula_One_2000_(USA).7z',
'../gba-host/gbc-alt/Frogger_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Frogger_2_(USA).7z',
'../gba-host/gbc-alt/Galaga_-_Destination_Earth_(USA).7z',
'../gba-host/gbc-alt/GameShark_MX_(USA)_(v1.02)_(Unl).7z',
'../gba-host/gbc-alt/GameShark_Online_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Game_&_Watch_Gallery_2_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Game_&_Watch_Gallery_3_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Gex_-_Enter_the_Gecko_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Gex_3_-_Deep_Pocket_Gecko_(USA).7z',
'../gba-host/gbc-alt/Ghostsn_Goblins_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Gobs_of_Games_(USA)_(EnFrDe).7z',
'../gba-host/gbc-alt/Godzilla_-_The_Series_(USA)_(EnFrDe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Godzilla_-_The_Series_-_Monster_Wars_(USA)_(EnFrDe).7z',
'../gba-host/gbc-alt/Gold_and_Glory_-_The_Road_to_El_Dorado_(USA).7z',
'../gba-host/gbc-alt/Grand_Theft_Auto_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Grand_Theft_Auto_2_(USA).7z',
'../gba-host/gbc-alt/Grinch_The_(USA).7z',
'../gba-host/gbc-alt/Hamtaro_-_Ham-Hams_Unite!_(USA).7z',
'../gba-host/gbc-alt/Hands_of_Time_(USA_Europe)_(EnFrDeEsItNl).7z',
'../gba-host/gbc-alt/Harley-Davidson_Motor_Cycles_-_Race_Across_America_(USA).7z',
'../gba-host/gbc-alt/Harry_Potter_2_-_The_Black_Art_Wrestle_Edition_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Harry_Potter_3_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Harry_Potter_and_the_Chamber_of_Secrets_(USA_Europe)_(EnFrDeEsItNlPtSvDa).7z',
'../gba-host/gbc-alt/Harry_Potter_II_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Harvest_Moon_2_GBC_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Harvest_Moon_3_GBC_(USA).7z',
'../gba-host/gbc-alt/Harvest_Moon_GBC_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Hello_Kittys_Cube_Frenzy_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Heroes_of_Might_and_Magic_(USA)_(EnFrDe).7z',
'../gba-host/gbc-alt/Heroes_of_Might_and_Magic_II_(USA)_(EnFrDe).7z',
'../gba-host/gbc-alt/Hexcite_-_The_Shapes_of_Victory_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Hole_in_One_Golf_(USA)_(Rumble_Version)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Hot_Wheels_-_Stunt_Track_Driver_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Hoyle_Card_Games_(USA).7z',
'../gba-host/gbc-alt/Hoyle_Casino_(USA).7z',
'../gba-host/gbc-alt/Indiana_Jones_and_the_Infernal_Machine_(USA_Europe)_(EnFrDe).7z',
'../gba-host/gbc-alt/Inspector_Gadget_-_Operation_Madkactus_(USA).7z',
'../gba-host/gbc-alt/International_Rally_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/International_Superstar_Soccer_2000_(USA).7z',
'../gba-host/gbc-alt/International_Superstar_Soccer_99_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/International_Track_&_Field_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Jeff_Gordon_XS_Racing_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Jeremy_McGrath_Supercross_2000_(USA_Europe).7z',
'../gba-host/gbc-alt/Jim_Hensons_Bear_in_the_Big_Blue_House_(USA)_(EnFrDeEsItNl).7z',
'../gba-host/gbc-alt/Jim_Hensons_Muppets_(USA).7z',
'../gba-host/gbc-alt/Jinsei_Game_-_Tomodachi_Takusan_Tsukurou_yo!_(Japan)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/JumpStart_Dino_Adventure_-_Field_Trip_(USA).7z',
'../gba-host/gbc-alt/Jungle_Book_The_-_Mowglis_Wild_Adventure_(USA)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/Kelly_Club_(USA).7z',
'../gba-host/gbc-alt/Ken_Griffey_Jr.s_Slugfest_(USA).7z',
'../gba-host/gbc-alt/King_Lion_Advance_III_2003_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Kirby_-_Tilt_n_Tumble_(USA).7z',
'../gba-host/gbc-alt/Klax_(USA_Europe).7z',
'../gba-host/gbc-alt/Klustar_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Knockout_Kings_(USA_Europe).7z',
'../gba-host/gbc-alt/Land_Before_Time_The_(USA).7z',
'../gba-host/gbc-alt/Las_Vegas_Cool_Hand_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Laura_(USA).7z',
'../gba-host/gbc-alt/Legend_of_the_River_King_2_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Legend_of_the_River_King_GBC_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Legend_of_Zelda_The_-_Links_Awakening_DX_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Legend_of_Zelda_The_-_Oracle_of_Ages_(USA_Australia).7z',
'../gba-host/gbc-alt/Legend_of_Zelda_The_-_Oracle_of_Seasons_(USA_Australia).7z',
'../gba-host/gbc-alt/LEGO_Alpha_Team_(USA).7z',
'../gba-host/gbc-alt/LEGO_Racers_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/LEGO_Stunt_Rally_(USA).7z',
'../gba-host/gbc-alt/Lemmings_&_Oh_No!_More_Lemmings_(USA).7z',
'../gba-host/gbc-alt/Lil_Monster_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Lion_King_The_-_Simbas_Mighty_Adventure_(USA_Europe).7z',
'../gba-host/gbc-alt/Little_Mermaid_II_The_-_Pinball_Frenzy_(USA)_(EnFrDeEsIt)_(Rumble_Version).7z',
'../gba-host/gbc-alt/Little_Nicky_(USA).7z',
'../gba-host/gbc-alt/Logical_(USA).7z',
'../gba-host/gbc-alt/Looney_Tunes_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Looney_Tunes_-_Carrot_Crazy_(USA)_(EnFrEs)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Looney_Tunes_-_Twouble!_(USA)_(EnFrEs)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Looney_Tunes_Collector_-_Alert!_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Looney_Tunes_Racing_(USA)_(EnFrDeEsItNl).7z',
'../gba-host/gbc-alt/Lucky_Luke_(USA)_(EnFrDeEs).7z',
'../gba-host/gbc-alt/Lufia_-_The_Legend_Returns_(USA).7z',
'../gba-host/gbc-alt/M&Ms_Minis_Madness_(USA).7z',
'../gba-host/gbc-alt/M&Ms_Minis_Madness_(USA)_(Sample).7z',
'../gba-host/gbc-alt/Madden_NFL_2000_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Madden_NFL_2001_(USA).7z',
'../gba-host/gbc-alt/Madden_NFL_2002_(USA).7z',
'../gba-host/gbc-alt/Magical_Drop_(USA).7z',
'../gba-host/gbc-alt/Magical_Tetris_Challenge_(USA).7z',
'../gba-host/gbc-alt/Magi_Nation_(USA).7z',
'../gba-host/gbc-alt/Marble_Madness_(USA_Europe).7z',
'../gba-host/gbc-alt/Mario_Golf_(USA).7z',
'../gba-host/gbc-alt/Mario_Tennis_(USA).7z',
'../gba-host/gbc-alt/Marvin_Strikes_Back!_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Mary-Kate_&_Ashley_-_Get_a_Clue!_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Mary-Kate_and_Ashley_-_Crush_Course_(USA_Europe).7z',
'../gba-host/gbc-alt/Mary-Kate_and_Ashley_-_Pocket_Planner_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Mary-Kate_and_Ashley_-_Winners_Circle_(USA_Europe).7z',
'../gba-host/gbc-alt/Mask_of_Zorro_The_(USA).7z',
'../gba-host/gbc-alt/Matchbox_Emergency_Patrol_(USA_Europe).7z',
'../gba-host/gbc-alt/Mat_Hoffmans_Pro_BMX_(USA_Europe).7z',
'../gba-host/gbc-alt/Mega_Man_Xtreme_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Mega_Man_Xtreme_2_(USA_Europe).7z',
'../gba-host/gbc-alt/Mega_Memory_Card_(USA)_(GB_Compatible)_(Unl).7z',
'../gba-host/gbc-alt/Men_in_Black_-_The_Series_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Men_in_Black_2_-_The_Series_(USA)_(EnFrDe).7z',
'../gba-host/gbc-alt/Metal_Gear_Solid_(USA).7z',
'../gba-host/gbc-alt/Metal_Walker_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Mia_Hamm_Soccer_Shootout_(USA).7z',
'../gba-host/gbc-alt/Mickeys_Racing_Adventure_(USA_Europe)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/Mickeys_Speedway_USA_(USA_Europe)_(EnFrDeEs).7z',
'../gba-host/gbc-alt/Microsoft_-_The_6_in_1_Puzzle_Collection_Entertainment_Pack_(USA).7z',
'../gba-host/gbc-alt/Microsoft_-_The_Best_of_Entertainment_Pack_(USA).7z',
'../gba-host/gbc-alt/Microsoft_Pinball_Arcade_(USA).7z',
'../gba-host/gbc-alt/Micro_Machines_1_and_2_-_Twin_Turbo_(USA_Europe).7z',
'../gba-host/gbc-alt/Micro_Machines_V3_(USA_Europe).7z',
'../gba-host/gbc-alt/Midway_Presents_Arcade_Hits_-_Joust_&_Defender_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Midway_Presents_Arcade_Hits_-_Moon_Patrol_&_Spy_Hunter_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Millennium_Winter_Sports_(USA).7z',
'../gba-host/gbc-alt/Missile_Command_(USA)_(Rumble_Version).7z',
'../gba-host/gbc-alt/Mission_-_Impossible_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Monopoly_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Monsters_Inc._(USA_Europe).7z',
'../gba-host/gbc-alt/Monster_Rancher_Battle_Card_GB_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Monster_Rancher_Explorer_(USA).7z',
'../gba-host/gbc-alt/Montezumas_Return!_(USA)_(EnEs)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Mortal_Kombat_4_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Motocross_Maniacs_2_(USA).7z',
'../gba-host/gbc-alt/Mr._Driller_(USA).7z',
'../gba-host/gbc-alt/Mr._Nutz_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Ms._Pac-Man_-_Special_Color_Edition_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/MTV_Sports_-_Pure_Ride_(USA_Europe).7z',
'../gba-host/gbc-alt/MTV_Sports_-_Skateboarding_Featuring_Andy_MacDonald_(USA_Europe).7z',
'../gba-host/gbc-alt/MTV_Sports_-_T.J._Lavins_Ultimate_BMX_(USA_Europe).7z',
'../gba-host/gbc-alt/Mummy_Returns_The_(USA).7z',
'../gba-host/gbc-alt/Mummy_The_(USA).7z',
'../gba-host/gbc-alt/Nakayoshi_Pet_Series_2_-_Kawaii_Usagi_(Japan)_(GB_Compatible).7z',
'../gba-host/gbc-alt/NASCAR_2000_(USA_Europe).7z',
'../gba-host/gbc-alt/NASCAR_Challenge_(USA)_(Rumble_Version).7z',
'../gba-host/gbc-alt/NASCAR_Heat_(USA).7z',
'../gba-host/gbc-alt/NASCAR_Racers_(USA).7z',
'../gba-host/gbc-alt/NBA_3_on_3_Featuring_Kobe_Bryant_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/NBA_Hoopz_(USA).7z',
'../gba-host/gbc-alt/NBA_in_the_Zone_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/NBA_in_the_Zone_2000_(USA).7z',
'../gba-host/gbc-alt/NBA_Jam_2001_(USA_Europe).7z',
'../gba-host/gbc-alt/NBA_Jam_99_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/NBA_Show_Time_-_NBA_on_NBC_(USA).7z',
'../gba-host/gbc-alt/New_Adventures_of_Mary-Kate_&_Ashley_The_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/NFL_Blitz_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/NFL_Blitz_2000_(USA).7z',
'../gba-host/gbc-alt/NFL_Blitz_2001_(USA).7z',
'../gba-host/gbc-alt/NHL_2000_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/NHL_Blades_of_Steel_(USA).7z',
'../gba-host/gbc-alt/NHL_Blades_of_Steel_2000_(USA).7z',
'../gba-host/gbc-alt/Nicktoons_Racing_(USA).7z',
'../gba-host/gbc-alt/NSYNC_-_Get_to_the_Show_(USA).7z',
'../gba-host/gbc-alt/Oddworld_Adventures_2_(USA)_(EnFrDeEsIt)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Pac-Man_-_Special_Color_Edition_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Pachinko_Hisshou_Guide_-_Data_no_Ousama_(Japan)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Paperboy_(USA_Europe).7z',
'../gba-host/gbc-alt/Perfect_Dark_(USA_Europe)_(EnFrDeEsIt)_(Rumble_Version).7z',
'../gba-host/gbc-alt/Pitfall_-_Beyond_the_Jungle_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Planet_of_the_Apes_(USA)_(EnFrDeEsItNl).7z',
'../gba-host/gbc-alt/Pocket_Bomberman_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Pocket_Bowling_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Pocket_Monster_Carbuncle_2003_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Pokemon_-_Crystal_Version_(USA).7z',
'../gba-host/gbc-alt/Pokemon_-_Gold_Version_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Pokemon_-_Sapphire_Version_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Pokemon_-_Silver_Version_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Pokemon_Jade_Version_-_Special_Pikachu_Edition_(USA)_(Pirate).7z',
'../gba-host/gbc-alt/Pokemon_Pinball_(USA_Australia)_(Rumble_Version)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Pokemon_Puzzle_Challenge_(USA_Australia).7z',
'../gba-host/gbc-alt/Pokemon_Trading_Card_Game_(USA_Australia)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Polaris_SnoCross_(USA)_(Rumble_Version).7z',
'../gba-host/gbc-alt/Pong_-_The_Next_Level_(USA_Europe).7z',
'../gba-host/gbc-alt/Pooh_and_Tiggers_Hunny_Safari_(USA).7z',
'../gba-host/gbc-alt/Portal_Runner_(USA).7z',
'../gba-host/gbc-alt/Powerpuff_Girls_The_-_Bad_Mojo_Jojo_(USA).7z',
'../gba-host/gbc-alt/Powerpuff_Girls_The_-_Battle_Him_(USA).7z',
'../gba-host/gbc-alt/Powerpuff_Girls_The_-_Paint_the_Townsville_Green_(USA).7z',
'../gba-host/gbc-alt/Power_Quest_(USA)_(En-USEn-GBFrDeEsIt)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Power_Spike_-_Pro_Beach_Volleyball_(USA).7z',
'../gba-host/gbc-alt/Prince_of_Persia_(USA_Europe)_(EnFrDeEsIt)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Project_S-11_(USA).7z',
'../gba-host/gbc-alt/Pro_Darts_(USA).7z',
'../gba-host/gbc-alt/Pro_Pool_(USA)_(EnFrDe).7z',
'../gba-host/gbc-alt/Puzzled_(USA).7z',
'../gba-host/gbc-alt/Puzzle_Master_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Q-bert_(USA).7z',
'../gba-host/gbc-alt/Quest_-_Brians_Journey_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Quest_-_Fantasy_Challenge_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Quest_for_Camelot_(USA_Australia)_(EnFrEs)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/R-Type_DX_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Racin_Ratz_(USA).7z',
'../gba-host/gbc-alt/Rampage_-_World_Tour_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Rampage_2_-_Universal_Tour_(USA_Europe).7z',
'../gba-host/gbc-alt/Rampart_(USA).7z',
'../gba-host/gbc-alt/Rats!_(USA)_(EnEs)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Rayman_(USA)_(EnFrDeEsItNl).7z',
'../gba-host/gbc-alt/Rayman_2_(USA)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/Razor_Freestyle_Scooter_(USA).7z',
'../gba-host/gbc-alt/Ready_2_Rumble_Boxing_(USA)_(Rumble_Version).7z',
'../gba-host/gbc-alt/Rescue_Heroes_-_Fire_Frenzy_(USA).7z',
'../gba-host/gbc-alt/Resident_Evil_Gaiden_(USA).7z',
'../gba-host/gbc-alt/Return_of_the_Ninja_(USA).7z',
'../gba-host/gbc-alt/Rhino_Rumble_(USA_Europe).7z',
'../gba-host/gbc-alt/Roadsters_(USA)_(EnFrDeEsItNl)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Road_Champs_-_BXS_Stunt_Biking_(USA_Europe).7z',
'../gba-host/gbc-alt/Road_Rash_(USA_Europe).7z',
'../gba-host/gbc-alt/Robopon_-_Sun_Version_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Rocket_Power_-_Gettin_Air_(USA_Europe).7z',
'../gba-host/gbc-alt/Rocky_Mountain_-_Trophy_Hunter_(USA).7z',
'../gba-host/gbc-alt/Ronaldo_V-Soccer_(USA)_(EnFrEsPt)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Roswell_Conspiracies_-_Aliens_Myths_&_Legends_(USA)_(EnFrDe).7z',
'../gba-host/gbc-alt/Rox_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Rugrats_-_Time_Travelers_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Rugrats_-_Totally_Angelica_(USA_Europe).7z',
'../gba-host/gbc-alt/Rugrats_in_Paris_-_The_Movie_(USA_Europe).7z',
'../gba-host/gbc-alt/Rugrats_Movie_The_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Sabans_Power_Rangers_-_Lightspeed_Rescue_(USA_Europe).7z',
'../gba-host/gbc-alt/Sabans_Power_Rangers_-_Time_Force_(USA_Europe).7z',
'../gba-host/gbc-alt/Sabrina_-_The_Animated_Series_-_Spooked!_(USA_Europe).7z',
'../gba-host/gbc-alt/Sabrina_-_The_Animated_Series_-_Zapped!_(USA_Europe).7z',
'../gba-host/gbc-alt/San_Francisco_Rush_2049_(USA_Europe).7z',
'../gba-host/gbc-alt/Scooby-Doo!_-_Classic_Creep_Capers_(USA_Europe).7z',
'../gba-host/gbc-alt/Sesame_Street_-_Elmos_123s_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Sesame_Street_-_Elmos_ABCs_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Sesame_Street_-_The_Adventures_of_Elmo_in_Grouchland_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Sesame_Street_Sports_(USA).7z',
'../gba-host/gbc-alt/Sewing_Machine_Operation_Software_(USA)_(EnFrEs)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Sgt._Rock_-_On_the_Frontline_(USA).7z',
'../gba-host/gbc-alt/Shadowgate_Classic_(USA_Europe)_(EnFrDeEsSv)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Shamus_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Shanghai_Pocket_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Shantae_(USA).7z',
'../gba-host/gbc-alt/Shaun_Palmers_Pro_Snowboarder_(USA_Australia).7z',
'../gba-host/gbc-alt/Shrek_-_Fairy_Tale_Freakdown_(USA_Europe)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/Simpsons_The_-_Night_of_the_Living_Treehouse_of_Horror_(USA_Europe).7z',
'../gba-host/gbc-alt/Smurfs_Nightmare_The_(USA).7z',
'../gba-host/gbc-alt/Snoopy_Tennis_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Snow_White_and_the_Seven_Dwarfs_(USA).7z',
'../gba-host/gbc-alt/Soreike!_Anpanman_-_5-tsu_no_Tou_no_Ousama_(Japan).7z',
'../gba-host/gbc-alt/Space_Baby_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Space_Invaders_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Space_Marauder_(USA).7z',
'../gba-host/gbc-alt/Spawn_(USA).7z',
'../gba-host/gbc-alt/Speedy_Gonzales_-_Aztec_Adventure_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Spider-Man_(USA_Europe).7z',
'../gba-host/gbc-alt/Spider-Man_2_-_The_Sinister_Six_(USA_Europe).7z',
'../gba-host/gbc-alt/Spider-Man_3_-_Movie_Version_(USA)_(Unl).7z',
'../gba-host/gbc-alt/SpongeBob_SquarePants_-_Legend_of_the_Lost_Spatula_(USA_Europe).7z',
'../gba-host/gbc-alt/Spy_vs_Spy_(USA).7z',
'../gba-host/gbc-alt/Star_Wars_-_Yoda_Stories_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Star_Wars_Episode_I_-_Obi-Wans_Adventures_(USA).7z',
'../gba-host/gbc-alt/Star_Wars_Episode_I_-_Racer_(USA_Europe)_(Rumble_Version).7z',
'../gba-host/gbc-alt/Street_Fighter_Alpha_-_Warriors_Dreams_(USA).7z',
'../gba-host/gbc-alt/Stuart_Little_-_The_Journey_Home_(USA_Europe).7z',
'../gba-host/gbc-alt/Super_Breakout!_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Super_Mario_Bros._Deluxe_(USA_Europe).7z',
'../gba-host/gbc-alt/Survival_Kids_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Tarzan_(USA_Europe).7z',
'../gba-host/gbc-alt/Tasmanian_Devil_-_Munching_Madness_(USA)_(EnFrDeEsIt)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Tech_Deck_Skateboarding_(USA_Europe).7z',
'../gba-host/gbc-alt/Test_Drive_2001_(USA).7z',
'../gba-host/gbc-alt/Test_Drive_6_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Test_Drive_Cycles_(USA).7z',
'../gba-host/gbc-alt/Test_Drive_Le_Mans_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Test_Drive_Off-Road_3_(USA)_(Rumble_Version)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/The_Second_Edition_Harry_Boy_-_The_Secret_of_the_Chamber_of_Secrets_(USA)_(Unl).7z',
'../gba-host/gbc-alt/Tiger_Woods_PGA_Tour_2000_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Tiny_Toon_Adventures_-_Buster_Saves_the_Day_(USA).7z',
'../gba-host/gbc-alt/Titus_the_Fox_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/TNN_Outdoors_Fishing_Champ_(USA)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/TOCA_Touring_Car_Championship_(USA_Europe).7z',
'../gba-host/gbc-alt/Toki_Tori_(USA_Europe)_(EnJaFrDeEs).7z',
'../gba-host/gbc-alt/Tomb_Raider_(USA_Europe)_(EnFrDeEsIt).7z',
'../gba-host/gbc-alt/Tomb_Raider_-_Curse_of_the_Sword_(USA_Europe).7z',
'../gba-host/gbc-alt/Tom_and_Jerry_(USA_Europe).7z',
'../gba-host/gbc-alt/Tom_and_Jerry_-_Mouse_Hunt_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Tom_and_Jerry_in_-_Mouse_Attacks!_(USA).7z',
'../gba-host/gbc-alt/Tom_Clancys_Rainbow_Six_(USA_Europe)_(EnFrDe).7z',
'../gba-host/gbc-alt/Tonka_Construction_Site_(USA).7z',
'../gba-host/gbc-alt/Tonka_Raceway_(USA).7z',
'../gba-host/gbc-alt/Tonka_Raceway_(USA)_(Rumble_Version).7z',
'../gba-host/gbc-alt/Tony_Hawks_Pro_Skater_(USA_Europe).7z',
'../gba-host/gbc-alt/Tony_Hawks_Pro_Skater_2_(USA_Europe).7z',
'../gba-host/gbc-alt/Tony_Hawks_Pro_Skater_3_(USA_Europe).7z',
'../gba-host/gbc-alt/Toobin_(USA).7z',
'../gba-host/gbc-alt/Toonsylvania_(USA).7z',
'../gba-host/gbc-alt/Top_Gear_Pocket_(USA)_(Rumble_Version).7z',
'../gba-host/gbc-alt/Top_Gear_Pocket_2_(USA).7z',
'../gba-host/gbc-alt/Top_Gun_-_Fire_Storm_(USA_Europe)_(EnFrDeEsItNl).7z',
'../gba-host/gbc-alt/Towers_-_Lord_Baniffs_Deceit_(USA_Europe).7z',
'../gba-host/gbc-alt/Toy_Story_2_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Toy_Story_Racer_(USA_Europe).7z',
'../gba-host/gbc-alt/Trick_Boarder_(USA).7z',
'../gba-host/gbc-alt/Triple_Play_2001_(USA_Europe).7z',
'../gba-host/gbc-alt/Trouballs_(USA).7z',
'../gba-host/gbc-alt/Turok_-_Rage_Wars_(USA_Europe)_(EnFrDeEs).7z',
'../gba-host/gbc-alt/Turok_2_-_Seeds_of_Evil_(USA_Europe)_(EnFrDeEs)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Turok_3_-_Shadow_of_Oblivion_(USA_Europe)_(EnFrDeEs).7z',
'../gba-host/gbc-alt/Tweetys_High-Flying_Adventure_(USA).7z',
'../gba-host/gbc-alt/Ultimate_Fighting_Championship_(USA).7z',
'../gba-host/gbc-alt/Ultimate_Paintball_(USA_Europe).7z',
'../gba-host/gbc-alt/Ultimate_Surfing_(USA).7z',
'../gba-host/gbc-alt/Uno_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/V-Rally_-_Edition_99_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Vegas_Games_(USA).7z',
'../gba-host/gbc-alt/Vigilante_8_(USA)_(Rumble_Version).7z',
'../gba-host/gbc-alt/VIP_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Wacky_Races_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/Walt_Disney_World_Quest_-_Magical_Racing_Tour_(USA_Europe).7z',
'../gba-host/gbc-alt/Wario_Land_II_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Warlocked_(USA).7z',
'../gba-host/gbc-alt/Warriors_of_Might_and_Magic_(USA)_(EnFrDe).7z',
'../gba-host/gbc-alt/WCW_Mayhem_(USA_Europe).7z',
'../gba-host/gbc-alt/WDL_-_World_Destruction_League_-_Thunder_Tanks_(USA)_(EnFrDe).7z',
'../gba-host/gbc-alt/Wendy_-_Every_Witch_Way_(USA_Europe).7z',
'../gba-host/gbc-alt/Who_Wants_to_Be_a_Millionaire_-_2nd_Edition_(USA).7z',
'../gba-host/gbc-alt/Wild_Thornberrys_The_-_Rambler_(USA).7z',
'../gba-host/gbc-alt/Wings_of_Fury_(USA)_(GB_Compatible).7z',
'../gba-host/gbc-alt/Wing_Warriors_(USA)_(EnFrEs)_(Aftermarket)_(Homebrew).7z',
'../gba-host/gbc-alt/Winnie_the_Pooh_-_Adventures_in_the_100_Acre_Wood_(USA).7z',
'../gba-host/gbc-alt/Woody_Woodpecker_(USA).7z',
'../gba-host/gbc-alt/Woody_Woodpecker_Racing_(USA).7z',
'../gba-host/gbc-alt/Worms_Armageddon_(USA)_(EnFrEs).7z',
'../gba-host/gbc-alt/WWF_Attitude_(USA_Europe).7z',
'../gba-host/gbc-alt/WWF_Betrayal_(USA_Europe).7z',
'../gba-host/gbc-alt/WWF_WrestleMania_2000_(USA_Europe)_(GB_Compatible).7z',
'../gba-host/gbc-alt/X-Men_-_Mutant_Academy_(USA_Europe).7z',
'../gba-host/gbc-alt/X-Men_-_Mutant_Wars_(USA_Europe).7z',
'../gba-host/gbc-alt/X-Men_-_Wolverines_Rage_(USA).7z',
'../gba-host/gbc-alt/Xena_-_Warrior_Princess_(USA_Europe)_(EnFrDeEsItNl).7z',
'../gba-host/gbc-alt/Xtreme_Sports_(USA).7z',
'../gba-host/gbc-alt/Xtreme_Wheels_(USA).7z',
'../gba-host/gbc-alt/Yogi_Bear_-_Great_Balloon_Blast_(USA).7z',
'../gba-host/gbc-alt/Yu-Gi-Oh!_-_Dark_Duel_Stories_(USA).7z',
'../gba-host/gbc-alt/Zebco_Fishing!_(USA)_(Rumble_Version).7z',
'../gba-host/gbc-alt/Zoboomafoo_-_Playtime_in_Zobooland_(USA).7z',
'../gba-host/gbc-alt/Zook_Z_(USA)_(Unl).7z',
'../gba-host/gbc-alt/[BIOS]_Challenger_GB_(USA)_(Unl).7z',





]

function returnLast(arr) {
    return arr.at(gameTypeID - 11001);
  }
const getGameNameFromAr = returnLast(gameNameTypeID);

gameName = getGameNameFromAr;
}
