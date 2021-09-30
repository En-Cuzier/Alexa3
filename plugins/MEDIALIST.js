/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Language = require('../language');
const Config = require('../config');
const Lang = Language.getString('amazone');
let fs = Config.WORKTYPE == 'public' ? false : true

Neotro.addCommand({pattern: 'textimg', fromMe: fs, desc: Lang.ALIST}, (async (message, match) => {
    await message.sendMessage("*====👩‍🦰Amazone Alexa Effect Image ===*\n\n*⚙විධානය* : .galaxysprout\n*💬විස්තරය* : එය ඔබේ අකරු galaxysproutලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .2sand\n*💬විස්තරය* : එය ඔබේ අකරු 2sand ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .lightgerm\n*💬විස්තරය* : එය ඔබේ අකරු lightgerm ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .yasuo\n*💬විස්තරය* : එය ඔබේ අකරු yasuo ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .writegalaxy\n*💬විස්තරය* : එය ඔබේ අකරු writegalaxy ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .firedragon\*💬විස්තරය* : එය ඔබේ අකරු firedragon ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .viettel\n*💬විස්තරය* : එය ඔබේ අකරු viettel ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .angelwing\n*💬විස්තරය* : එය ඔබේ අකරු angelwing ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .galaxystyle\n*💬විස්තරය* : එය ඔබේ අකරු galaxystyle ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .galaxyangel\n*💬විස්තරය* : එය ඔබේ අකරු galaxyangel ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .halloween\n*💬විස්තරය* : එය ඔබේ අකරු halloween ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .nxninja\n*💬විස්තරය* : එය ඔබෙ අකුරු Ninja logo බවට පරිවර්තනය කරයි.\n\n*⚙විධානය* : .nwolf\n*💬විස්තරය* :එය ඔබෙ අකුරු wolf logo බවට පරිවර්තනය කරයි\n\n *⚙විධානය* : .nxwolf\n*💬විස්තරය* :එය ඔබෙ අකුරු දම් ලාට Wolf ලාංඡනයක්  බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .marvel\n*💬විස්තරය* :එය ඔබෙ අකුරු Marvel  logo බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .dgold\n*💬විස්තරය* :එය ඔබෙ අකුරු රත්තරං පැහැ අකුරු සහිත ඡායාරූපයක් බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .glossy\n*💬විස්තරය* :එය ඔබෙ අකුරු glossy logo බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .njoker\n*💬විස්තරය* :එය ඔබෙ අකුරු joker logo බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .horror\n*💬විස්තරය* :එය ඔබෙ අකුරු Horror ඡායාරූප  බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .blood\n*💬විස්තරය*: එය ඔබෙ අකුරු ලේ සහිත ඡායාරූපයක් බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .toxic\n*💬විස්තරය* :එය ඔබෙ අකුරු විෂ සහිත අකුරු  බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .space3d\n*💬විස්තරය* :එය ඔබෙ අකුරු Space LOGO බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .luxury\n*💬විස්තරය* :එය ඔබෙ අකුරු luxury gold බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .xmas\n*💬විස්තරය* :එය ඔබෙ අකුරු නත්තල් සහිත ඡායාරූප බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .metald\n*💬විස්තරය* :එය ඔබෙ අකුරු Metak Dark logo බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .sand\n*💬විස්තරය* : මුහුදු වෙරළක අකුරු සාදයි.\n\n*⚙විධානය:*  .bcwall\n*💬විස්තරය:*  එය වෝල් ආර්ට් එකක් ලෙස අකුරු පරිවර්තනය කරයි\n\n*⚙විධානය:*  .ninjalogo\n*💬විස්තරය:* එය Ninja ආකාරයේ Logo සාදයි\n\n*⚙විධානය:*  .buttonyt\n*💬විස්තරය:* මෙය Youtube Golden බටනයට ඔබේ අකුරු යොදයි.\n\n*⚙විධානය:*  .glitch\n*💬විස්තරය:* glitch අකාරයට අකුරු ඡායාරූප කරයි\n\n*⚙විධානය:* .freefire\n*💬විස්තරය:* freefire gaming ලෝගෝ සාදයි\n\n*⚙විධානය:*  .light\n*💬විස්තරය:* අකුරු Neon text ලෙස පරිවර්තනය කරයි\n\n*⚙විධානය:*  .cslogo\n*💬විස්තරය:* gaming ලෝගෝ සාදයි\n\n*⚙විධානය:*  .nlogo\n*💬විස්තරය:*  ඔබෙ අකුරු ලෝගෝ එකක් ලෙස සකසයි\n\n*⚙විධානය:*  .s3d\n*💬විස්තරය:* අකුරු 3D Box ලෙස සකසයි\n\n*⚙විධානය:*  .blackpink\*💬විස්තරය:* ඔබෙ අකුරු blackpink ලෝගෝ ලෙස සකසයි.\n\n*⚙විධානය:* .pornhub\n*💬විස්තරය:* ඔබේ අකුරු Pornhub Logo ලෙස සකසයි\n\n*⚙විධානය:* .neolight\n*💬විස්තරය:* .එය අකුරු Neoncube එකක් තුල සකසයි\n\n*⚙විධානය:*  .blood\n*💬විස්තරය:* අකුරු ලේ සහිත ඡායාරූප ලෙස සකසයි\n\n*⚙විධානය:* .3dtext\n*💬විස්තරය:* අකුරු 3D ලෙස සකසයි\n\n*⚙විධානය:* .nsky\n*💬විස්තරය:* අකුරු අහසේ ඇදි ලෙස ඡායාරූප බවට පත් කරයි.\n\n*⚙විධානය:* .nleaves\n*💬විස්තරය:* අකුරු දීප්තිමත් තණකොළ මත ලියයි.\n\n*⚙විධානය:* .nglow\n*💬විස්තරය:* Neon ලෙස සකසයි\n\n*⚙විධානය:* .nfire\n*💬විස්තරය:* එය දීප්තිමත් ලෙස අකුරු ඡායාරූප කරයි.\n\n*⚙විධානය:*  .ptext\n*💬විස්තරය* : එය අකුරු Video බවට හරවයි\n\n*⚙විධානය* : .colortext\*💬විස්තරය* : එය අකුරු දේදුන්නක වර්ණ ලෙස video බවට හරවයි\n\n*⚙විධානය* : .vtext\n*💬විස්තරය* : එය අකුරු video බවට හරවයි.\n\n");

}));

Neotro.addCommand({pattern: 'listp', fromMe: fs, desc: Lang.BLIST}, (async (message, match) => {
    await message.sendMessage("*👩‍🦰Amazone Alexa TTP list*\n\n╔══════════▷\n*╠📑: .tblue < your Text>*\n*╠📑: .tyellow < your Text>*\n*╠📑: .tgreen< your Text>*\n*╠📑: .tpink < your Text>*\n*╠📑: .tpurple < your Text>*\n*╠📑: .tred < your Text>*\n*╠📑: .tblack < your Text>*\n*╠📑: .tbrown < your Text>*\n╠📑: .tpurple < your text>\n╚══════════▷");

}));

Neotro.addCommand({pattern: 'listanim', fromMe: fs, desc: Lang.CLIST}, (async (message, match) => {
    await message.sendMessage("  *👩‍🦰Amazone Alexa Anime List*\n\n╔═════════▷\n╠🌼: .loli\n╠🌼: .wifu\n╠🌼: .neko\n╠🌼: .ava\n╠🌼: .kemo\n╠🌼: .awoo\n╠🌼: .shinobu\n╠🌼: .megumin\n╚═════════▷");

}));

Neotro.addCommand({pattern: 'newslist', fromMe: true, dontaddCommandList:true}, (async (message, match) => {
    await message.sendMessage("<===👩‍🦰Amazone Support Group===>\n\n🦹‍♀️News 01\n💬https://chat.whatsapp.com/LuLTEKm22fp8gv4ltCmKMo\n🦹‍♀️News 02\n💬https://chat.whatsapp.com/LVykTrmNEU98AktU0eBNNq\n🦹‍♀️News 03\n💬https://chat.whatsapp.com/JdNWV3viiGKGINYNrb5oy8\n\n⚡Plugins Group \n📑https://chat.whatsapp.com/JJs2iwfF0VKL3IWrIyr7AT\n\n⚙Support 01\n🧚https://chat.whatsapp.com/GTgqgMTo7FoJ1GqdijshsX\n⚙Support 02\n🧚https://chat.whatsapp.com/K4QouGNrNcm1iARgDaYiLj\n⚙Support 03\n🧚https://chat.whatsapp.com/DSX2aegJpVRG3cWIUlBa48\n");

}));
