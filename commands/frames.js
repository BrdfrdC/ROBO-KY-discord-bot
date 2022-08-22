const { EmbedBuilder } = require('discord.js');
module.exports = {
  name: 'frames',
  description: 'gets frame data',
  execute(message, args){
    const frameDataLibrary = {
    sol: {
      charName: "Sol Badguy",
      thumbnail: `https://www.dustloop.com/wiki/images/thumb/7/75/GGST_Sol_Badguy_Icon.png/90px-GGST_Sol_Badguy_Icon.png`,
        a5p: {
          name: "5P",
          info: '4	5	9	1	-2	28	1000	80%	M	["5P", "2P", "6P", "6S", "6H"]',
          footer: "Can hit most crouching opponents. Combos into 6S versus crouching."
        },
        a5k: {
          name: "5K",
          info: '3	1,3	25	-13	-16	14,28	200,700	80%	M	["6P", "6S", "6H", "5D", "2D"]',
          footer: "Sol's fastest normal. Dash Cancel: 22f Total"
        },
        acs: {
          name: "c.S",
          info: '7	6	10	3	3	44	2500	0%	M	["6P", "f.S", "2S", "6S", "5H", "2H", "6H", "5D", "2D"]',
          footer: "Causes a slight float state on hit, so it has 'cancelable hitstun'. Your opponent can block but can't reversal out. Delaying a follow-up will force stand. Dash Cancel: 22f Total"
          
        },
        afs: {
          name: "f.S",
          info: '10	2	13	5	2	29	2000	90%	M	["5H", "2H"]',
          footer: "Knocks opponent away on air hit."
          
        },
        a5h: {
          name: "5H",
          info: '11	4	20	-2	-5	52	2500	0%	M	[None]',
          footer: "Knocks opponent away and causes slight ground bounce on air hit. Wall bounces airborne opponents in the corner."
          
        },
        a5d: {
          name: "5D",
          info: '20~[28]	3	26	0[KD]	-15[-10]	50[62]	1125[1875]	80%[~]	H	[None]',
          footer: "Data in [ ] represents values when fully charged."
          
        },
        a2p: {
          name: "2P",
          info: '5	4	8	1	-2	22	500	80%	M	["5P", "2P", "6P", "6S", "6H"]',
          footer: ' '
          
        },
        a2k: {
          name: "2K",
          info: '6	3	11	1	-2	28	750	70%	L	["6P", "6S", "6H", "5D", "2D"]',
          footer: "Combos into 6S versus crouching."
          
        },
        a2s: {
          name: "2S",
          info: '10	6	15	-4	-7	34	1500	90%	M	["5H", "2H"]',
          footer: ' '
          
        },
        a2h: {
          name: "2H",
          info: '11	5	31	-2	-17	46	2500	0%	M	[None]',
          footer: "Causes floating crumple on ground hit. Delaying a follow-up will force stand."
          
        },
        a2d: {
          name: "2D",
          info: '10	3	18	HKD	-4	36	1500	90%	L	[None]',
          footer: "5~24 Low Profile"
          
        },
        ajp: {
          name: "j.P",
          info: '5	3	8	~	~	24	375	80%	H	["j.P"]',
          footer: ' '
          
        },
        ajk: {
          name: "j.K",
          info: '6	3	20	~	~	30	750	80%	H	["j.D"]',
          footer: "Can cross up."          
        },
        ajs: {
          name: "j.S",
          info: '10	3	23	~	~	36	1125	80%	H	["j.H", "j.D"]',
          footer: ' '
        },
        ajh: {
          name: "j.H",
          info: '11	4,8	0	~	~	24x2	525x2	80%	H	["j.D"]',
          footer: ' '
        },
        ajd: {
          name: "j.D",
          info: '9	3	17	KD	~	45	1500	80%	H [None]',
          footer: "Knocks opponent away on hit. Wall-bounces in corner."
        },
        a6p: {
          name: "6P",
          info: '9	5	20	KD	-11	36	1500	90%	M	[None]',
          footer: "Invuln: 1~2 Upper Body, 3~13 Above Knees. Knocks opponent away on hit."
        },
        a6s: {
          name: "6S",
          info: '15	6	20	-4	-7	45	1500	90%	M	[None]',
          footer: "Can be Kara Canceled into any special move to increase their range."
        },
        a6h: {
          name: "6H",
          info: '9	3	43	HKD	-22	60	2500	0%	M	[None]',
          footer: "Cannot be special canceled."
        },
        a236p: {
          name: "Gun Flame",
          info: '20	10x4	35	KD	-8	40~30	500	80%	M	~',
          footer: "Damage value changes every 10 active frames. Counter-Hit State for entire duration."
        },
        a214p: {
          name: "Gun Flame Feint",
          info: '~	~	25	~	~	~	~	~	~	~',
          footer: "Builds small amount of Tension."
        },
        a623s: {
          name: "S Volcanic Viper",
          info: '9	14	18+10	KD	-28	40	1500	80%	M	~',
          footer: "Invuln: 1~9 Strike/Projectile. Counter-Hit State Recovery. Cannot Roman Cancel on whiff. Has two active windows, but only hits once."
        },
        a623h: {
          name: "H Volcanic Viper",
          info: '13	16	19+10	KD[HKD]	-26	35,40[100]	700x2	80%	M	~',
          footer: "Invuln: 1~14 Strike/Projectile. Data in [ ] represents values on Clean Hit. Second hit can Clean Hit at close range. Counter-Hit State Recovery. Cannot Roman Cancel on whiff."
        },
        aj623s: {
          name: "Air S Volcanic Viper",
          info: '9	9	UL+10	KD	~	40	1500	80%	M	~',
          footer: "Invuln: 1~8 Strike/Projectile. Counter-Hit State Recovery. Cannot Roman Cancel on whiff. Has two active windows, but only hits once."
        },
        aj623h: {
          name: "Air H Volcanic Viper",
          info: '13	16	UL+10	KD[HKD]	~	35,40[100]	700x2	80%	M	~',
          footer: "Invuln: 1~14 Strike/Projectile. Data in [ ] represents values on Clean Hit. Second hit can Clean Hit at close range. Counter-Hit State Recovery. Cannot Roman Cancel on whiff."
        },
        a236k: {
          name: "Bandit Revolver",
          info: '12	6	15	-4	-7	20	700	90%	M	~',
          footer: "Can be followed up with a second attack by pressing K again on frames 13~26."
        },
        a236kk: {
          name: "Bandit Revolver 2nd Hit",
          info: '6	2	UL+17	KD	-12	25	700	90%	M	~',
          footer: "This is the optional 2nd Hit of BR."
        },
        aj236k: {
          name: "Air Bandit Revolver",
          info: '10	6	UL+6	~	~	20	700	90%	M	~',
          footer: "Can be followed up with a second attack by pressing K again on frames 11~24."
        },
        aj236kk: {
          name: "Air Bandit Revolver 2nd Hit",
          info: '6	2	UL+17	KD	~	25	700	90%	M	~',
          footer: "This is the optional 2nd Hit of BR (air)."
        },
        a214k: {
          name: "Bandit Bringer",
          info: '30	7	12	HKD	-2	50	1500	80%	H	~',
          footer: "Slight ground bounce on hit."
        },		
        aj214k: {
          name: "Air Bandit Bringer",
          info: '22~[33]	~	UL+18	HKD	~	40	1500	80%	H	~',
          footer: "Can be delayed by holding K. Slight ground bounce on hit."
        },
        a623k: {
          name: "Wild Throw",
          info: '6	2	34	HKD	~	120	~	50%	T	~',
          footer: "Invuln: 1~7 Throw. Counter-hit Recovery. Switches sides on hit."
        },
        a214s: {
          name: "Night Raid Vortex",
          info: '15~[32]	2[8]	32[26]	HKD	-17	45[55]	2000	90%	M	~',
          footer: "Invuln: 7~[31] Low Profile. Data in [ ] represents values when fully held down. Can extend range by holding S. Cannot be special-canceled into."
        },
        a41236h: {
          name: "Fafnir",
          info: '24	3	16	HKD	11	65	2500	90%	M[GC]	~',
          footer: "Cannot be special-canceled into. Ground bounces on hit."
        },
        a632146h: {
          name: "Tyrant Rave",
          info: '7+2	3(20)20	81	HKD	-34	70,100[130]	1200,1000	0%	M	~',
          footer: "Invuln: 1~8 Full. Data in [ ] represents values on Clean Hit. Second hit can Clean Hit at close range."
        },
        a214214h: {
          name: "Heavy Mob Cemetery",
          info: '13+7	49	4	HKD	~	40,161	~	0%	T	~',
          footer: "Invuln: 14f onwards Guard Point. Switches sides on hit. Cannot Wall Break."
        },
      },
    ky: {
      charName: "Ky Kiske",
      thumbnail: `https://www.dustloop.com/wiki/images/thumb/d/d8/GGST_Ky_Kiske_Icon.png/135px-GGST_Ky_Kiske_Icon.png`,
        a5p: {
          name: "5P",
          info: '5	4	7	1	-1	26	500	80%	M	["5P", "2P", "6P", "6K", "6H"]',
          footer: "Can hit most crouching opponents."
        },
        a5k: {
          name: "5K",
          info: '7	8	6	1	-2	30	750	70%	L	["6P", "6K", "6H", "5D", "2D"]',
          footer: "Hits low!"
        },
        acs: {
          name: "c.S",
          info: '7	6	10	4	1	42	2000	0%	M	["6P", "6K", "f.S", "2S", "5H", "2H", "6H", "5D", "2D"]',
          footer: "Ground-bounces on air-hit."
          
        },
        afs: {
          name: "f.S",
          info: '12	6	13	-2	-5	34	1500	90%	M	["5H", "2H"]',
          footer: "Has a lingering 12f and shrinking over 3f extended hurtbox during recovery."
          
        },
        a5h: {
          name: "5H",
          info: '14	6	21	-5	-8	48	2500	0%	M	[None]',
          footer: "Launches vertically on air hit. Disjointed hitbox during the active frames, but a lingering 12f extended hurtbox during recovery."
          
        },
        a5d: {
          name: "5D",
          info: '20~[28]	4	25	0[KD]	-15[-10]	46[56]	1125[1875]	80%[~]	H	[None]',
          footer: "Data in [ ] represents values when fully charged."
          
        },
        a2p: {
          name: "2P",
          info: '5	4	8	1	-2	22	500	80%	M	["5P", "2P", "6P", "6S", "6H"]',
          footer: ' '
          
        },
        a2k: {
          name: "2K",
          info: '6	4	10	1	-2	26	750	70%	L	["6P", "6K", "6H", "5D", "2D"]',
          footer: ' '
          
        },
        a2s: {
          name: "2S",
          info: '10	2	20	-5	-8	32	1125	90%	L	["5H", "2H"]',
          footer: ' '
          
        },
        a2h: {
          name: "2H",
          info: '11	1,4	28	2	-13	14,40	1000,1200	0%	M	[None]',
          footer: ' '
          
        },
        a2d: {
          name: "2D",
          info: '10	6	18	HKD	-10	34	1125	90%	L	[None]',
          footer: ' '
          
        },
        ajp: {
          name: "j.P",
          info: '6	3	9	~	~	20	375	80%	H	["j.P"]',
          footer: ' '
          
        },
        ajk: {
          name: "j.K",
          info: '7	4	8	~	~	26	750	80%	H	["j.D"]',
          footer: ' '         
        },
        ajs: {
          name: "j.S",
          info: '7	3	21	~	~	32	1125	80%	H	["j.H", "j.D"]',
          footer: ' '
        },
        ajh: {
          name: "j.H",
          info: '13	4	23	~	~	44	1125	80%	H	["j.D"]',
          footer: ' '
        },
        ajd: {
          name: "j.D",
          info: '13	6	15	KD	~	32	500	80%	H	[None]',
          footer: "Considered a projectile. Stalls Ky's air-momentum. Knocks down on grounded hit."
        },
        a6p: {
          name: "6P",
          info: '9	5	17	-5	-8	34	1500	90%	M	[None]',
          footer: "Invul: 1~3 Upper Body, 4~13 Above Knees. Launches away on air-hit. HKD on air counter-hit."
        },
        a6k: {
          name: "6K",
          info: '25	2	11	7	4	40	1500	0%	M	[None]',
          footer: "Cannot be special-canceled."
        },
        a6h: {
          name: "6H",
          info: '14	4	20	KD	-7	52	2000	0%	M	[None]',
          footer: "Disjointed hitbox during the active frames. It continues to shrink over the next 10f of recovery. Launches opponent away on hit and wall-bounces in corner."
        },
        a236s: {
          name: "Stun Edge",
          info: '13	~	33	-11	-14	30[33]	500	80%	M	~',
          footer: "Data in [ ] represents values when consuming Shock State. Applies Shock State on contact."
        },
        a236h: {
          name: "Charged Stun Edge",
          info: '39	~	23	25[28]	22[25]	20[22]x3	100x3	80%	M	~',
          footer: "Data in [ ] represents values when consuming Shock State. Applies Shock State on contact."
        },
        aj236s: {
          name: "S Aerial Stun Edge",
          info: '21	~	UL+10	~	~	30[33]	500	80%	M	~',
          footer: "Data in [ ] represents values when consuming Shock State. Applies Shock State on contact."
        },
        aj236h: {
          name: "H Aerial Stun Edge",
          info: '21	~	UL+10	~	~	30[33]	500	80%	M	~',
          footer: "Data in [ ] represents values when consuming Shock State. Applies Shock State on contact."
        },
        a623s: {
          name: "S Vapor Thrust",
          info: '11	4	43	KD	-33	48[52]	1500	80%	M	~',
          footer: "Invul: 1~14 Strike/Projectile. Data in [ ] represents values when consuming Shock State. Removes Shock State from opponent on contact. Counter-Hit State Recovery. Cannot Roman Cancel on whiff."
        },
        a623h: {
          name: "H Vapor Thrust",
          info: '13	8	44	KD	-38	60[66]	1500	80%	M	~',
          footer: "Invul: 1~16 Strike/Projectile. Data in [ ] represents values when consuming Shock State. Removes Shock State from opponent on contact. Counter-Hit State Recovery. Cannot Roman Cancel on whiff."
        },
        aj623s: {
          name: "Air S Vapor Thrust",
          info: '11	4	UL+12	KD	~	48[52]	1500	80%	M	~',
          footer: "Invul: 1~14 Strike/Projectile. Data in [ ] represents values when consuming Shock State. Removes Shock State from opponent on contact. Counter-Hit State Recovery. Cannot Roman Cancel on whiff."
        },
        aj623h: {
          name: "Air H Vapor Thrust",
          info: '13	8	UL+12	KD	~	60[66]	1500	80%	M	~',
          footer: "Invul: 1~16 Strike/Projectile. Data in [ ] represents values when consuming Shock State. Removes Shock State from opponent on contact. Counter-Hit State Recovery. Cannot Roman Cancel on whiff."
        },
        a236k: {
          name: "Stun Dipper",
          info: '5	12(7)3	26	KD	-15[-10]	20,20[22]	525,700	90%	L,M	~',
          footer: "Data in [ ] represents values when consuming Shock State. Removes Shock State from opponent on contact."
        },
        a214k: {
          name: "Foudre Arc",
          info: '24	11	6	2[9]	-2[5]	40[44]	1500	90%	M	~',
          footer: "Data in [ ] represents values when consuming Shock State. Forces crouch state on hit. Removes Shock State from opponent on contact. Hits standing opponents on frame 27 and crouching opponents on frame 29, which affects the advantage."
        },
        a214s: {
          name: "Dire Eclat",
          info: '14	3	22	HKD	-8[-6]	40[44]	2000	0%	M	~',
          footer: "Data in [ ] represents values when consuming Shock State. Applies Shock State on contact."
        },
        a632146h: {
          name: "Ride the Lightning",
          info: '8+1	3x4(20)2	99	HKD	-82	21[22]x4,50[60]	300x4,500	0%	M	~',
          footer: "Invul: 1~10 Full. Data in [ ] represents values when consuming Shock State."
        },
        aj632146h: {
          name: "Air Ride the Lightning",
          info: '8+1	3x4(20)2	99	HKD	~	21[22]x4,50[60]	300x4,500	0%	M	~',
          footer: "Invul: 1~10 Full. Data in [ ] represents values when consuming Shock State."
        },
        a236236p: {
          name: "Sacred Edge",
          info: '4+3	~	32	13[18]	10[15]	22[26]x5	500x5	0%	M	~',
          footer: "Data in [ ] represents values when consuming Shock State. Applies Shock State on contact."
        },
        a214214h: {
          name: "Dragon Install",
          info: '11+1	5	25	HKD	4	80[88]	500	0%	M	~',
          footer: "Data in [ ] represents values when consuming Shock State. Can only be activated at  30% or lower HP. Ky's health bar will turn orange to reflect this. Enhances Ky's specials and other Overdrives for the rest of the round, but reduces his Tension gain. Increases Walking and Dashing Speed."
        },
      },
    may: {
        charName: "May",
        thumbnail: `https://www.dustloop.com/wiki/images/thumb/5/51/GGST_May_Icon.png/90px-GGST_May_Icon.png`,
          a5p: {
            name: "5P",
            info: '4	3	8	2	-1	28	500	80%	M	["5P", "2P", "6P", "3K", "6K", "6H"]',
            footer: " "
          },
          k5: {
            name: "5K",
            info: '8	6	11	-2	-5	30	1000	90%	M	["6P", "3K", "6K", "6H", "5D", "2D"]',
            footer: "Dash-cancel is -11 on block."
          },
          acs: {
            name: "c.S",
            info: '7	6	8	6	3	44	2000	0%	M	["6P", "3K", "6K", "f.S", "2S", "5H", "2H", "6H", "5D", "2D"]',
            footer: "Dash-cancel is -6 on block. Floats on air-hit."
            
          },
          afs: {
            name: "f.S",
            info: '12	3	19	-5	-8	38	1500	90%	M	["5H", "2H"]',
            footer: " "
            
          },
          a5h: {
            name: "5H",
            info: '13	8	15	-1	-4	55	2500	0%	M	[None]',
            footer: "Ground-bounces on air-hit. Wall-bounces near corner."
            
          },
          a5d: {
            name: "5D",
            info: '20~[28]	3	26	0[KD]	-15[-10]	50[62]	1125[1875]	80%[~]	H	[None]',
            footer: "Data in [ ] represents values when fully charged."
            
          },
          a2p: {
            name: "2P",
            info: '5	4	8	1	-2	24	500	80%	M	["5P", "2P", "6P", "3K", "6K", "6H"]',
            footer: ' '
            
          },
          a2k: {
            name: "2K",
            info: '6	4	10	1	-2	28	750	70%	L	["6P", "3K", "6K", "6H", "5D", "2D"]',
            footer: ' '
            
          },
          a2s: {
            name: "2S",
            info: '10	3	18	-4	-7	35	1500	90%	M	["5H", "2H"]',
            footer: ' '
            
          },
          a2h: {
            name: "2H",
            info: '11	13	26	KD	-20	60	2500	0%	M	[None]',
            footer: ' '
            
          },
          a2d: {
            name: "2D",
            info: '10	7	17	HKD	-7	30	1500	90%	L	[None]',
            footer: ' '
            
          },
          ajp: {
            name: "j.P",
            info: '5	3	12	~	~	22	375	80%	H	["j.P", "j.2H"]',
            footer: ' '
            
          },
          ajk: {
            name: "j.K",
            info: '7	3	12	~	~	28	750	80%	H	["j.D", "j.2H"]',
            footer: ' '         
          },
          ajs: {
            name: "j.S",
            info: '12	4	15	~	~	34	1125	80%	H	["j.H", "j.D"]',
            footer: ' '
          },
          ajh: {
            name: "j.H",
            info: '12	10	15	~	~	50	1500	80%	H	["j.D"]',
            footer: "High knockback on air-hit."
          },
          ajd: {
            name: "j.D",
            info: '10	6	21	~	~	60	1875	80%	H	[None]',
            footer: "High knockback on air-hit."
          },
          p6: {
            name: "6P",
            info: '12	6	19	KD	-7	35	2000	90%	M	[None]',
            footer: "Invul: 1~3 Upper Body, 4~17 Above Knee. HKD on counter-hit."
          },
          k6: {
            name: "6K",
            info: '20	5	11	1	-2	35	1125	80%	H	[None]',
            footer: "Ground-bounces on air-hit."
          },
          k3: {
            name: "3K",
            info: '11	6	21	KD	-13	35	1125	90%	L	[None]',
            footer: "Low-profile during active frames."
          },
          h6: {
            name: "6H",
            info: '16~[40]	6	24	KD	-11[5]	60[90]	2500	0%	M[GC]	[None]',
            footer: "Data in [ ] represents values when fully charged. Ground-bounces on hit."
          },
          ajh2: {
            name: "j.2H",
            info: '13	~	~	~	~	40	1500	80%	H	[None]',
            footer: "Knock straight down on air-hit."
          },
          s46: {
            name: "S Mr. Dolphin Horizontal",
            info: '7	9~[18]	11	-2	-5	30	1500	90%	M	~',
            footer: "Staggers on counter-hit. Maintains momentum on whiff. Button can be held down to increase active frames."
          },
          h46: {
            name: "H Mr. Dolphin Horizontal",
            info: '25	9~[18]	11	8	5	40	2000	90%	M	~',
            footer: "Staggers on counter-hit. Wall-bounces on air-hit if near corner. Maintains momentum on whiff. Button can be held down to increase active frames."
          },
          a2s8: {
            name: "S Mr. Dolphin Vertical",
            info: '6	19	7	HKD,[~]	-3,[~]	40	1500,[1125]	90%[~]	M,H	~',
            footer: "Data in [ ] represents values of decsending hit. 2nd hit is HKD on air-hit. Button can be held down to increase movement speed."
          },
          a2h8: {
            name: "H Mr. Dolphin Vertical",
            info: '11	27	8	HKD,[~]	1,[~]	45	2000,[1500]	90%[~]	M,H	~',
            footer: "Data in [ ] represents values of descending hit. 2nd hit is HKD on air-hit. Button can be held down to increase movement speed."
          },
          k623: {
            name: "Overhead Kiss",
            info: '6	1	42	HKD	~	30,40	0	50%	T	~',
            footer: "Invuln: 1~6 Throw. Results in a ground-bounce. Wall-bounce if near corner."
          },
          a214p: {
            name: "P Arisugawa Sparkle",
            info: '48	6	~	32	29	50	500	80%	M	~',
            footer: "~50⁰ downward angle. The opponent can destroy the ball by hitting it with an attack, which they can then cancel."
          },
          a2k14: {
            name: "K Arisugawa Sparkle",
            info: '48	10	~	32	29	50	500	80%	M	~',
            footer: "~15⁰ downward angle. The opponent can destroy the ball by hitting it with an attack, which they can then cancel."
          },
          a2s36236: {
            name: "Great Yamada Attack",
            info: '10+1	~	88	HKD	-54	190	500	0%	M	~',
            footer: "Guaranteed minimum 20% damage. Can whiff or be low profiled in certain dead zones."
          },
          h632146: {
            name: "The Wonderful and Dynamic Goshogawara",
            info: '6+4	12(22)10	65	HKD	-31	80,100	1200,500	0%	M	~',
            footer: "Invul: 1~10 Full"
          },
          ajh632146: {
            name: "Air The Wonderful and Dynamic Goshogawara",
            info: '6+4	12(~)10	65	HKD	-31	80,100	1200,500	0%	M	~',
            footer: "Invul: 1~10 Full"
          },
      },
    axl: {
        charName: "Axl Low",
        thumbnail: `https://www.dustloop.com/wiki/images/thumb/b/b6/GGST_Axl_Low_Icon.png/90px-GGST_Axl_Low_Icon.png`,
          a5p: {
            name: "5P",
            info: '7	6	19	-8	-11	40[52]	1500	80%	M	["6P", "6K", "6H"]',
            footer: "Data in [ ] refers to value at max range. Whiffs versus crouching opponents. Whiffs versus most running opponents."
          },
          a5k: {
            name: "5K",
            info: '6	3	11	1	-2	30	1000	90%	M	["6P", "6K", "6H", "5D", "2D"]',
            footer: " "
          },
          acs: {
            name: "c.S",
            info: '8	6	12	2	-1	40	2000	0%	M	["6P", "6K", "f.S", "2S", "5H", "2H", "6H", "5D", "2D"]',
            footer: " "
            
          },
          afs: {
            name: "f.S",
            info: '10	3	19	-5	-8	34	1500	90%	M	["5H", "2H"]',
            footer: " "
            
          },
          a5h: {
            name: "5H",
            info: '16	4	19	-1	-4	48	2500	0%	M	[None]',
            footer: "Ground-bounces on air-hit."
            
          },
          a5d: {
            name: "5D",
            info: '20~[28]	6	23	0[KD]	-15[-10]	45[56]	1125[1875]	80%[~]	H	[None]',
            footer: "Data in [ ] represents values when fully charged."
            
          },
          a2p: {
            name: "2P",
            info: '10	4	21	-10	-13	30[39]	750	80%	L	["6P", "6K", "6H"]',
            footer: "Data in [ ] refers to value at max range."
            
          },
          a2k: {
            name: "2K",
            info: '5	5	11	-1	-4	26	750	70%	L	["6P", "6K", "6H", "5D", "2D"]',
            footer: "Axl's fastest normal. Very, very low-profile."
            
          },
          a2s: {
            name: "2S",
            info: '9	10	23	-13	-16	35[45]	2000	90%	M	["5H", "2H"]',
            footer: "Data in [ ] refers to value at max range."
            
          },
          a2h: {
            name: "2H",
            info: '11	9	26	-15	-18	45[58]	1500	90%	L	[None]',
            footer: "Data in [ ] refers to value at max range."
            
          },
          a2d: {
            name: "2D",
            info: '10	6	17	HKD	-9	34	1125	90%	L	[None]',
            footer: ' '
            
          },
          ajp: {
            name: "j.P",
            info: '9	4	23	~	~	32[41]	750	80%	H	[None]',
            footer: "Data in [ ] refers to value at max range."
            
          },
          ajk: {
            name: "j.K",
            info: '8	3	16	~	~	28	750	80%	H	["j.D"]',
            footer: ' '         
          },
          ajs: {
            name: "j.S",
            info: '14	4	18	~	~	32[41]	1500	80%	H	["j.H", "j.D"]',
            footer: "Data in [ ] refers to value at max range."
          },
          ajh: {
            name: "j.H",
            info: '12	6	25	~	~	40[52]	1125	80%	H	["j.D"]',
            footer: "Data in [ ] refers to value at max range."
          },
          ajd: {
            name: "j.D",
            info: '10	6	21	~	~	60	1875	80%	H	[None]',
            footer: "Wall bounces if near corner."
          },
          p6: {
            name: "6P",
            info: '12	5	18	KD	-13	30	1500	90%	M	[None]',
            footer: "Invul: 1~4 Upper Body, 5~16 Above Knees"
          },
          k6: {
            name: "6K",
            info: '11	5	25	-10	-13	40[52]	2000	90%	M	[None]',
            footer: "Data in [ ] refers to value at max range. Wall-bounces near corner vs airborne opponents."
          },
          h6: {
            name: "6H",
            info: '27	9	13	0	-3	54	1875	80%	H	[None]',
            footer: " "
          },
          s46: {
            name: "Sickle Flash/Rensen",
            info: '24	15	29	KD	-19~-9	15x3	200	80%	M	~',
            footer: "Frames 24~40 cancel window. Counter-hit state for entire duration."
          },
          s46s: {
            name: "Winter Cherry/Rensen Bomb",
            info: '18~[22]	10	24	KD	-3[10]	40[60]	500	80%	M		~',
            footer: "Data in [ ] refers to just-frame version. (YES!!)"
          },
          h41236: {
            name: "Winter Cherry/Rensen Bomb",
            info: '18~[22]	10	24	KD	-3[10]	40[60]	500	80%	M		~',
            footer: "Data in [ ] refers to just-frame version. (YES!!)"
          },
      }
    };

    /*const testName = "sol";
    const testMove = "riotStamp"
    console.log(frameDataLibrary[testName][testMove]["name"]);*/

    const charName = args[0].toLowerCase();
    const moveName = 'a' + args[1].toLowerCase().replace('.', '').replace('[','').replace(']','');

    //sol c.S cs
    
    if(!frameDataLibrary[charName] || !frameDataLibrary[charName][moveName]){
      message.channel.send(`\`\`\`INVALID CHARACTER OR MOVE NAME! I AM A ROBOT AND I ONLY ACCEPT NUMPAD NOTATION!
VALID CHARACTERS ARE: Sol, Ky, May\`\`\``)
      return;
    }

    const moveInfo = frameDataLibrary[charName][moveName]["info"].split('\t');
    const x = [{ name: '**Startup**', value: moveInfo[0], inline: true },
    { name: '**Active**', value: moveInfo[1], inline: true },
    { name: '**Recovery**', value: moveInfo[2], inline: true },
    { name: '**On Block**', value: moveInfo[3], inline: true },
    { name: '**On Hit**', value: moveInfo[4], inline: true },
    { name: '**Damage**', value: moveInfo[5], inline: true },
    { name: '**RISC Gain**', value: moveInfo[6], inline: true },
    { name: '**Prorate**', value: moveInfo[7], inline: true },
    { name: '**Guard Level**', value: moveInfo[8], inline: true },
    { name: '**Gatlings**', value: moveInfo[9], inline: true }];

    const embedMessage = new EmbedBuilder()
      .setTitle(frameDataLibrary[charName]["charName"])
      .setDescription(frameDataLibrary[charName][moveName]["name"])
      .setThumbnail(frameDataLibrary[charName]["thumbnail"])
      .addFields(
        x
      )
      .setFooter({text: frameDataLibrary[charName][moveName]["footer"]})

    message.channel.send({ embeds: [embedMessage] });
  }
}