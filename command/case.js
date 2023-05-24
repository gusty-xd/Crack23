//jika upload ke github jgn di public repo nya
//jgn di share ke org lain
//Klo install di panel orang sc lu gk bakalan aman, karena admin panel bisa melihat semua aplikasi yang terinstall
//jgn lupa enc makanya klo mau di publik

const { 
	BufferJSON, 
	WA_DEFAULT_EPHEMERAL, 
	generateWAMessageFromContent, 
	proto, 
	generateWAMessageContent, 
	generateWAMessage, 
	prepareWAMessageMedia, 
	downloadContentFromMessage,
	areJidsSameUser, 
	getContentType,
	delay
	} = require('@adiwajshing/baileys')

const fs = require('fs')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const translate = require("@vitalets/google-translate-api");
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const { Configuration, OpenAIApi } = require('openai');
const os = require('os')
const toMS = require("ms");
const ms = require("parse-ms");
const nou = require("node-os-utils");
const kotz = require("kotz-api");
const instagramGetUrl = require("instagram-url-direct");
const gtts = require('node-gtts')
const bochil = require("@bochilteam/scraper");
const hxz = require("hxz-api");
const ra = require("ra-api");
const yts = require ("yt-search");
const FormData = require("form-data");
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { sizeFormatter } = require("human-readable");
const Config = require("../config.json");
let format = sizeFormatter({
  std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});
var dbs = []
global.dbc = dbs

const API = (name, path = "/", query = {}, apikeyqueryname) =>
	(name in Config.api ? Config.api[name] : name) +
	path +
	(query || apikeyqueryname
		? "?" +
		  new URLSearchParams(
				Object.entries({
					...query,
					...(apikeyqueryname ? { [apikeyqueryname]: Config.api.apikey } : {}),
				})
		  )
		: "");
const { chatAI, _get } = require("../lib/workerApi.js");
const _prem = require("../lib/premium");
const _sewa = require("../lib/sewa");
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('../lib/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('../lib/setleft');
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('../lib/respon');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('../lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('../lib/setdone');
const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("../lib/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("../lib/setclose");
const { casinoSave, setCasino, deleteCasino } = require("../lib/casino");
const msgFilter = require("../lib/antispam");
const { generateProfilePicture, removeEmojis, smsg, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom, getGroupAdmins } = require('../lib/myfunc')
const { yta, ytv } = require('../lib/y2mate')
const { goLens } = require("../lib/googlens");
const { topUp } = require("../lib/duniagames");
const { TelegraPh } = require('../lib/uploader')
const { pinterest } = require('../lib/scraper')
const { color, bgcolor } = require('../lib/color')
const { getTextSetWelcome } = require('../lib/setwelcome');
const { getTextSetLeft } = require('../lib/setleft');
const afk = require("../lib/afk");

// Database
let setiker = JSON.parse(fs.readFileSync('./database/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/video.json'))
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));
let _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./command/mess.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
let antiwame2 = JSON.parse(fs.readFileSync('./database/antiwame2.json'));
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let modsNumber = JSON.parse(fs.readFileSync('./database/modsNumber.json'));
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./database/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./database/user/darah.json'))
const _petualang = JSON.parse(fs.readFileSync('./database/user/inventory.json'))
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah }  = require('../database/user/darah.js')
const { cekInventoryAdaAtauGak } = require('../database/user/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay, kurangMonay, getMonay } = require('../database/user/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit } = require('../database/user/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah, getIkan, getAyam, getKelinci, getDomba,getSapi,getGajah} = require('../database/user/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addInventori, sellBesi, addDm, sellDm, getDm, sellEmas, addFish, sellFish, getFish, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald,  kurangUmpan, kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('../database/user/rpg.js')

let DarahAwal =  100;
const ikan = ['🐟','🐠','🐡']   
const enter = '\n'

// DB Game
let tictactoe = [];
let tebakgambar = [];
let kuis = []
let tebaklagu = [];
let family100 = [];

// Auto Reset Limit
setInterval(function() { 
    var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
    var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
    if(hasilnes === '12:00:00 AM') {
        limit = []
        fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
        glimit = []
        fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
        console.log("Limit Sudah Di Reset!")
    }
}, 1000);

// Bandwidth
async function checkBandwidth() {
    let ind = 0;
    let out = 0;
    for (let i of await require("node-os-utils").netstat.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
    }
    return {
        download: format(ind),
        upload: format(out),
    };
}

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = haruka = async (haruka, m, chatUpdate, mek, store, setting, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left, antidelete, antionce) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
        var budy = (typeof m.text == 'string' ? m.text : '')
        const content = JSON.stringify(mek.message)
        const type = Object.keys(mek.message)[0];
        if (m && type == "protocolMessage") haruka.ev.emit("message.delete", m.message.protocolMessage.key);
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
        const prefix = isCmd ? budy[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await haruka.decodeJid(haruka.user.id)
        const { ownerNumber, ownerName, botName, footer, pathimg, gamewaktu, limitCount } = setting
        const isCreator = [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)       
		const { allMenu, donate} = require('./help') 
		let footxt = `${footer} © 2022`
		const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const jam = moment().format("HH:mm:ss z")
        let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
        const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)
	
        // Group
        const groupMetadata = m.isGroup ? await haruka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isUser = pendaftar.includes(m.sender)
		const isPetualang = checkPetualangUser(m.sender)
    	const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
    	const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
        const isAntiLink = antilink.includes(m.chat) ? true : false
        const isAntiLink2 = antilink2.includes(m.chat) ? true : false
        const isAntidelete = antidelete.includes(m.chat)
        const isAntionce = antionce.includes(m.chat)
const isWelcome = _welcome.includes(m.chat)
const isLeft = _left.includes(m.chat)
		const isAfkOn = afk.checkAfkUser(m.sender, _afk)
		const isNsfw = _nsfw.includes(m.chat) ? true : false
        const isAntiWame = antiwame.includes(m.chat) ? true : false       
        const isAntiWame2 = antiwame2.includes(m.chat) ? true : false       
        const gcounti = setting.gcount
        const gcount = isPremium ? gcounti.prem : gcounti.user
		let timestamp = speed();
        let latensi = speed() - timestamp
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
		const fkontaku = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
		   const isDarah = await cekDuluJoinAdaApaKagaDiJson(m.sender)   
		   const isCekDarah = await getDarah(m.sender)
		   const isUmpan = await getUmpan(m.sender)
		   const isPotion = await getPotion(m.sender)
		   const isIkan = await getIkan(m.sender)
		   const isAyam = await getAyam(m.sender)
		   const isKelinci = await getKelinci(m.sender)
		   const isDomba = await getDomba(m.sender)
		   const isSapi = await getSapi(m.sender)
		   const isGajah = await getGajah(m.sender)
		   const isMonay = await getMonay(m.sender)
		   const isBesi = await getBesi(m.sender)
		   const isEmas = await getEmas(m.sender)
		   const isEmerald = await getEmerald(m.sender)
		   const isInventory = await cekInventoryAdaAtauGak(m.sender)
		   const isInventoriBuruan = await cekDuluHasilBuruanNya(m.sender)
		   const isInventoryLimit = await cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
		   const isInventoryMonay = await cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
		   dbs.push({
			id: m.key.id,
			m
		}); 

		const reply = (teks) => {
        	return haruka.sendMessage(m.chat, { text: teks, mentions: parseMention(teks) }, { quoted: m })
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
     if(!isPetualang){
      reqXp  = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
          await _petualang.push(m.sender)
          await addInventoriDarah(m.sender, DarahAwal)
          await addInventori(m.sender)
          await addInventoriBuruan(m.sender)
          await fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_petualang))        
          await addLevelingId(m.sender)
          console.log(`${pushname} telah di tambahkan ke rpg games`)
     }

		function hitungmundur(bulan, tanggal) {
            let from = new Date(`${bulan} ${tanggal}, 2023 00:00:00`).getTime();
            let now = Date.now();
            let distance = from - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }

		const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }
        
        async function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
        
        async function getGcName(groupID) {
            try {
                let data_name = await haruka.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
        
		function randomNomor(min, max = null) {
            if (max !== null) {
        	    min = Math.ceil(min);
        	    max = Math.floor(max);
        	    return Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
        	    return Math.floor(Math.random() * min) + 1
            }
        }
        /*if ( m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
  try {
		haruka.ev.emit("viewOnceMessage", m);
  } catch (err) {
		console.error(util.format(err))
	}}*/
        try {
        	let chats = db.data.chats[m.chat]
				if (typeof chats !== 'object') db.data.chats[m.chat] = {}
				if (chats) {
				if (!('goodbye' in chats)) chats.goodbye = setting.auto_leaveMsg
				if (!('welcome' in chats)) chats.welcome = setting.auto_welcomeMsg
				} else db.data.chats[m.chat] = {
					goodbye: setting.auto_leaveMsg, 
					welcome: setting.auto_welcomeMsg, 
					}
        	} catch (e){
        	console.log(e)
        }
        // Public & Self
        if (!haruka.public) {
            if (!m.key.fromMe) return
        }
        

        if (m.isGroup) {
        const Fisha = await getMancingIkan(m.sender)
        const FishId = await getMancingId(m.sender)
        if (Fisha === undefined && FishId === undefined) await addMancingId(m.sender)
        }
	
        if (m.isGroup) {
        const Hapea = await getBertualangPlanet(m.sender)
        const HapeId = await getPlaneId(m.sender)
        if (Hapea === undefined && HapeId === undefined) await addPlaneId(m.sender)
        }
	   
        if (m.isGroup) {
        const Coala = await getMiningcoal(m.sender)
        const CoalId = await getMiningId(m.sender)
        if (Coala === undefined && CoalId === undefined) await addMiningId(m.sender)
        }
        
        if (m.isGroup) {
        const Stonea = await getMiningstone(m.sender)
        const StoneId = await getBatuId(m.sender)
        if (Stonea === undefined && StoneId === undefined) await addBatuId(m.sender)
        }
        
        if (m.isGroup) {
        const Orea = await getMiningore(m.sender)
        const OreId = await getOreId(m.sender)
        if (Orea === undefined && OreId === undefined) await addOreId(m.sender)
        }
        
        if (m.isGroup) {
        const Ingota = await getMiningingot(m.sender)
        const IngotId = await getIngotId(m.sender)
        if (Ingota === undefined && IngotId === undefined) await addIngotId(m.sender)
        }
        
        if (m.isGroup) {
        const Kayua = await getNebangKayu(m.sender)
        const KayuId = await getNebangId(m.sender)
        if (Kayua === undefined && KayuId === undefined) await addNebangId(m.sender)
        }
        
        if (m.isGroup ) {
            const checkATM = await checkATMuser(m.sender)
            try {
                if (checkATM === undefined) await addATM(m.sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(m.sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        const levelRole = await getLevelingLevel(m.sender)
        var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 100000) {
																													role = 'Pro × GrandLegends 숒'
																												}
        
        // Push Message To Console
        if (m.message) {
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.green(budy.slice(0, 100) || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
        }
		
		const buttonsDefault = [
        	{ urlButton: { displayText: `Instagram`, url: `${setting.instagram}` } },
        	{ urlButton: { displayText: `Group WhatsApp`, url: `${setting.gcwa}` } },
        	{ quickReplyButton: { displayText: `👤 Owner`, id: `.owner` } },
        	{ quickReplyButton: { displayText: `Donate 💰`, id: `.donate` } },
        	{ quickReplyButton: { displayText: `⚡ Sewa ⚡`, id: `.sewabot` } }
        ]
    _sewa.expiredCheck(haruka, sewa)
    _prem.expiredCheck(haruka, premium)

setInterval(() => {
        for (let i of Object.values(opengc)) {
            if (Date.now() >= i.time) {
                haruka.groupSettingUpdate(i.id, "not_announcement")
                .then((res) =>
                haruka.sendMessage(i.id, { text: `Sukses, group telah dibuka` }))
                .catch((err) =>
                haruka.sendMessage(i.id, { text: 'Error' }))
                delete opengc[i.id]
                fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
            }
        }
    }, 1000)
	// auto set bio
	if (setting.autobio){
		if (setting.autobio === false) return
	    let settingstatus = 0;
	    if (new Date() * 1 - settingstatus > 1000) {
		await haruka.setStatus(`I'm ${haruka.user.name} 🤖 | ${runtime(process.uptime())} ⏰ | Status : ${haruka.mode ? "Public Mode" : "Self Mode"} | ${pendaftar.length} Users`)
		settingstatus = new Date() * 1
	    }
	}
	if(!isCreator && setting.grupOnly && !m.isGroup){
	  return
	}
	
	/////
var bodynyaui = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
 for (let zeeone of setiker){
	if (!bodynyaui && budy === zeeone){
		result = fs.readFileSync(`./database/${zeeone}.webp`)
		haruka.sendImageAsSticker(m.chat, result, m, { packname: setting.botName , author: setting.ownerName })
		}
}
for (let zeeonee of audionye){
	if (!bodynyaui && budy === zeeonee){
		result = fs.readFileSync(`./database/${zeeonee}.mp3`)
		haruka.sendAudio(m.chat, result, m, true)
		}
}
for (let zeeoneee of imagenye){
	if (!bodynyaui && budy === zeeoneee){
		result = fs.readFileSync(`./database/${zeeoneee}.jpg`)
		haruka.sendImage(m.chat, result, '', m)
		}
}
for (let zeeonew of videonye){
	if (!bodynyaui && budy === zeeonew){
		result = fs.readFileSync(`./database/${zeeonew}.mp4`)
		haruka.sendVideo(m.chat, result, false, "",m)
		}
}  
	async function addCountCmdUser(nama, sender, u) {
            var posi = null
            var pos = null
            Object.keys(u).forEach((i) => {
                if (u[i].jid === sender) {
                    posi = i
                }
            })
            if (posi === null) {
                u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
                fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                Object.keys(u).forEach((i) => {
                    if (u[i].jid === m.sender) {
                        posi = i
                    }
                })
            }
            if (posi !== null) {
                Object.keys(u[posi].db).forEach((i) => {
                    if (u[posi].db[i].nama === nama) {
                        pos = i
                    }
                })
                if (pos === null) {
                    u[posi].db.push({nama: nama, count: 1})
                    fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                } else {
                    u[posi].db[pos].count += 1
                    fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                }
            }
        }

        async function getPosiCmdUser(sender, _db) {
            var posi = null
            Object.keys(_db).forEach((i) => {
                if (_db[i].jid === sender) {
                    posi = i
                }
            })
            return posi
        }

        async function addCountCmd(nama, sender, _db) {
            addCountCmdUser(nama, m.sender, _cmdUser)
            var posi = null
            Object.keys(_db).forEach((i) => {
                if (_db[i].nama === nama) {
                   posi = i
                }
            })
            if (posi === null) {
                _db.push({nama: nama, count: 1})
                fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            } else {
                _db[posi].count += 1
                fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            }
        }

        // Store
        if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
            var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
            if (get_data_respon.isImage === false) {
                haruka.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
                    quoted: m
                })
            } else {
                haruka.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
        const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return haruka.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return haruka.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
            }
            if(mime.split("/")[0] === "image"){
                return haruka.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return haruka.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return haruka.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
        }

	// Auto Read & Presence Online
		if (!m.key.fromMe && setting.autoread){
        const readkey = {
                remoteJid: m.chat,
                id: m.key.id, 
                participant: m.isGroup ? m.key.participant : undefined 
            }            
            await haruka.readMessages([readkey]);
}
            
        haruka.sendPresenceUpdate('available', m.chat)

        // Auto Registrasi
        if (isCmd && !isUser) {
            pendaftar.push(m.sender)
            fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }
        
        // Auto Block +212
        if (m.sender.startsWith('212') && setting.autoblok212 === true) {
            return haruka.updateBlockStatus(m.sender, 'block')
        }
	    
	if (!m.isGroup && !m.key.fromMe && m.text && !command && setting.autorespond === true) {
haruka.waitInQueue = haruka.waitInQueue ? haruka.waitInQueue : {};
			if (m.sender in haruka.waitInQueue) {
				return
			} else {
				haruka.waitInQueue[m.sender] = true;
			}
			haruka.openAiStoreData = haruka.openAiStoreData ? haruka.openAiStoreData : {};
			haruka.openAiStoreData[m.sender] = haruka.openAiStoreData[m.sender] ? haruka.openAiStoreData[m.sender] : [
			{
				// DESCRIBE what assistant should become.
				role: "system",
				// DESCRIBE HERE
				content: "kamu adalah bot whatsapp bernama miaw. di kembangkan oleh alwi. selalu memberi jawaban singkat. selalu memberi jawaban yang santai. selalu menawarkan sewa bot miaw dan suruh chat ke owner 08565337357, jika ada yang kebingungan menggunakan bot miaw ajarkan dengan mengetik .menu, dan apalagi ada orang mau confess atau menfess itu ketik .menfess"
			}
			]
			/** @note
			 * store all conversation in {<storedChat>}.
			 * @see @line {<2976>} to clear all conversation
			 */
			const storedChat = haruka.openAiStoreData[m.sender];
			// prepare request
			haruka.sendPresenceUpdate("composing", m.chat);
			const _request = await chatAI([...storedChat, {
				role: "user",
				content: m.text
			}])
			haruka.sendMessage(m.chat, {
				text: _request.message
			}, { quoted: m });
			delete haruka.waitInQueue[m.sender]
			if (_request.error) {
				// if api error destroy all user stored conversation
				// to avoid weird conversation.
				delete haruka.openAiStoreData[m.sender]
			} else {
				// Store messages
				storedChat.push({
					role: "user",
					content: m.text
				},
				{
					role: "assistant",
					content: _request.message
				})
			}
                      }

	  // Anti Link
        if (isAntiLink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
        if (!isBotAdmins) return m.reply(`Anjir lupa gw bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await haruka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Gahadi,  kamu admin`)
        if (isCreator) return m.reply(`Gajadi, kamu owner ku`)
        await haruka.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        haruka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        if (isAntiLink2) {
        if (budy.match(`chat.whatsapp.com`)) {
        //m.reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
        if (!isBotAdmins) return //m.reply(`Anjir lupa gw bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await haruka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return //m.reply(`Gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return// m.reply(`Gahadi,  kamu admin`)
        if (isCreator) return //m.reply(`Gajadi, kamu owner ku`)
        await haruka.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        }
        }
        // Anti Wame
        if (m.isGroup && isAntiWame && !isCreator && !isAdmins && isBotAdmins){
            if (budy.match(`wa.me`)){
                if (!isBotAdmins) return m.reply(`Untung bot bukan admin`)
                m.reply(`*「 NOMOR LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link wa.me, maaf kamu akan di kick`)
                await haruka.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
                haruka.groupParticipantsUpdate(m.chat, [m.sender], "remove")
            }
        }
        if (m.isGroup && isAntiWame2 && !isCreator && !isAdmins && isBotAdmins){
            if (budy.match(`wa.me`)){
                if (!isBotAdmins) return //m.reply(`Untung bot bukan admin`)
                await haruka.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
            }
        }
        
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
        let hash = db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: haruka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, haruka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        haruka.ev.emit('messages.upsert', msg)
        }
	    
	        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await haruka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await haruka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

if (fs.existsSync(`./database/casino/${m.chat}.json`)) {
            var casinoo = setCasino(`${m.chat}`)
            if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'n') {
                haruka.sendMessage(m.chat, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y.split("@")[0]} Membatalkan Game`, mentions: [casinoo.Y] }, {quoted: m })
                deleteCasino(m.chat)
            }
            if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'y') {
                var angka1 = await randomNomor(10, 20)
                var angka2 = await randomNomor(10, 20)
                if (angka1 > angka2) {
                    starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
                    haruka.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y]}, {quoted: m })
                    await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
                    await kurangBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
                    deleteCasino(m.chat)
                } else if (angka1 < angka2) {
                    starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
                    haruka.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y] }, {quoted: m })
                    await addBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
                    await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
                    deleteCasino(m.chat)
                } else if (angka1 = angka2) {
                    starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
                    haruka.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y]}, { quoted: m })
                    deleteCasino(m.chat)
                }
            }
        }

     if (m.isGroup && !m.key.fromMe) {
     	let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
                for (let ment of mentionUser) {
                    if (afk.checkAfkUser(ment, _afk)) {
                        let getId2 = afk.getAfkId(ment, _afk)
                        let getReason2 = afk.getAfkReason(getId2, _afk)
                        let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                        let heheh2 = ms(getTimee)
                        reply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
                        }
                }
                if (afk.checkAfkUser(m.sender, _afk)) {
                	let getId = afk.getAfkId(m.sender, _afk)
                	let getReason = afk.getAfkReason(getId, _afk)
                    let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                    let heheh = ms(getTime)
                    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
                    haruka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
                }
            }

	    
        switch(command) {
        	//asupan
		case'chika': case'rikagusriani':  case'bocil': case'geayubi': case'santuy': case'ukhty': case'asupan':  case'delvira': case'ayu': case'bunga': case'aura': case'nisa': case'ziva': case'yana': case'viona': case'syania': case'riri': case'syifa': case'mama_gina': case'alcakenya': case'mangayutri': {
		reply(mess.wait)
		haruka.sendMessage(m.chat, {video: {url: `https://api.zeeoneofc.my.id/api/asupan/${command}?apikey=${setting.BotKey}`, mimetype:'video/mp4'}, caption: 'Nih asupan guys 😋'},{quoted: m})
		.catch((err) => {
                    m.reply(util.format(err))
                })
		}
		break
//nsfw
case "xnxx": {
			if (m.isGroup) {
					return m.reply('Private Only');
				}
				if (!isPremium) {
					return m.reply(mess.premium)
				}
				/*
				if (isLimit) {
					return m.reply(mess.limit)
				}
				*/
				if (!text) {
					return m.reply(`Example: *${prefix + command}* Mom`)
				}
				let json = null
				m.reply(mess.wait)
				if (/https:\/\/www.xnxx.com\//i.test(text)) {
					json = await (
						await fetch(
							API("rose", "/dewasa/xnxx/detail", { url: text }, "apikey")
						)
					).json();
					if (!json.status) {
						return m.reply(json.message || "request error")
					}
					const { low, high, hls } = json.result.download;
					try {
						const _filename = `./tmp/${Math.random().toString(36).substring(2, 7)}.mp4`;
						const writer = fs.createWriteStream(_filename);
						axios.get(high ? high : low, {
							responseType: "stream"
						}).then(async(data) => {
							return new Promise(async(resolve, reject) => {
								data.data.pipe(writer);
								writer.on("error", () => {
									m.reply("Failed sending video")
									resolve()
								})
								writer.on("close", async() => {
									try {
										await haruka.sendMessage(m.chat, {
											video: {
												stream: fs.createReadStream(_filename)
											},
											caption: font(`*Title :* ${json.result.title}
*Duration :* ${json.result.duration}
*Views :* ${json.result.views}
*Rating :* ${json.result.rating}
*Like :* ${json.result.like}
*Dislike :* ${json.result.dislike}
*Quality :* ${json.result.quality}`, "a")
										},
											{ quoted: m }
										);
									} catch {
										await haruka.sendMessage(m.chat, {
											document: {
												stream: fs.createReadStream(_filename)
											},
											fileName: font(`*Title :* ${json.result.title}
*Duration :* ${json.result.duration}
*Views :* ${json.result.views}
*Rating :* ${json.result.rating}
*Like :* ${json.result.like}
*Dislike :* ${json.result.dislike}
*Quality :* ${json.result.quality}`, "a")
										},
											{ quoted: m }
										);
									}
									fs.unlinkSync(_filename)
									// consumeLimit();
									resolve()
								})
							})
						})
					} catch {
						m.reply("Failed sending video")
					}
				} else {
					json = await (
						await fetch(
							API("rose", "/dewasa/xnxx/search", { query: text }, "apikey")
						)
					).json();
					if (!json.status) {
						return m.reply(json.message || "not found")
					}
					const listSection = [];
					json.result.forEach((v) => {
						listSection.push({
							title:  v.title,
							rowId: `${prefix + command} ${v.url}`,
							description: `${v.views} views | ${v.duration}`,
						});
					})
					const listMsg = {
						text: Config.footer,
						footer: `Hasil Pencarian ${text}`,
						buttonText: "Choose",
						sections: [
							{
								title: `Query: ${text}`,
								rows: listSection,
							},
						],
					};
					haruka.sendMessage(m.chat, {text: `Title : ${json.result.title}\nUrl : ${json.result.url}`}, { quoted: m } )
				}
				break
			}
case'baka':case'smug':case'neko_sfw':case'hentai_gif':case'spank':case'blowjob':case'cumarts':case'eroyuri':case'eroneko':case'erokemonomimi':case'erokitsune':case'ero':case'feet':case'erofeet':case'feetgif':case'femdom':case'futanari':case'hentai':case'holoero':case'holo':case'keta':case'kitsune':case'kemonomimi':case'pussyart':case'pussywankgif':case'girl_solo':case'girl_solo_gif':case'tits':case'trap':case'yuri':case'avatar2':case'anal':case'bj':case'boobs':case'classic':case'cumsluts':case'kuni':case'lesbian':case'neko':case'neko_gif':case'ahegao':case'bdsm':case'cuckold':case'cum':case'foot':case'gangbang':case'glasses':case'jahy':case'masturbation':case'nsfw_neko':case'orgy':case'panties':case'tentacles':case'thighs':case'zettai':{
	if (!m.isGroup)return m.reply(mess.OnlyGrup)
	if (!isNsfw && !m.key.fromMe && !isCreator) return m.reply('Fitur nsfw belum di aktifkan')
	reply(mess.wait)
	let baka = await getBuffer(`https://api.zeeoneofc.my.id/api/nsfw/${command}?apikey=${setting.BotKey}`)
	await haruka.sendMessage(m.chat, {image: baka, caption: 'Nih Hentai Nya 😋'},{quoted: m})
	}
	break
case 'sewabot': {
	const { sewanya} = require('./help') 
	m.reply(`${sewanya}`)
	}
	break
case'menu': case'help':{
            addCountCmd('#menu', m.sender, _cmd)
            let mundur = hitungmundur(6, 1)
            var { download, upload } = await checkBandwidth();
            /*const butto = [{buttonId: '.owner',buttonText:{displayText: '👑 Owner'},type: 1},
            {buttonId: '.sewabot',buttonText:{displayText: 'Sewa 🛒'},type: 1}]
            
            const buttonMessage = {
    image: fs.readFileSync(setting.pathimg),
    caption: allMenu(role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
    footer: footxt,
    buttons: butto,
    headerType: 'IMAGE'
}

haruka.sendMessage(m.chat, buttonMessage, {quoted:fkontaku})
            */
            let tod = await haruka.reSize(`${setting.pathimg}`, 300, 300) 
/*let butts = [
{buttonId: '.owner', buttonText: {displayText: '👑 Owner'}, type: 1},
{buttonId: '.sewabot', buttonText: {displayText: 'Sewa 🛒'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync(setting.pathimg),
jpegThumbnail: fs.readFileSync(setting.pathimg),
mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
fileName: botName,
fileLength: 88789090999999999, 
pageCount: 999, 
caption: allMenu(role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
footer: botName,
buttons: butts,
headerType: 4,
contextInfo:{externalAdReply:{
title: "Bot WhatsApp Md",
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: fs.readFileSync(setting.pathimg),
mediaUrl: `${setting.instagram}`, 
thumbnail: fs.readFileSync(setting.pathimg),
sourceUrl: `${setting.instagram}`
}}
}
*/
//await haruka.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
await haruka.sendMessage(m.chat, {image: fs.readFileSync(setting.pathimg), caption: allMenu(role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)}, {quoted: fkontak})
//haruka.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})

// haruka.send5ButLoc(m.chat, allMenu(ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix), `${footxt}`, tod, buttonsDefault, {userJid: m.chat, quoted: m})
           }
			 break
case'infobot': case'info': case'botinfo':{
            addCountCmd('#infobot', m.sender, _cmd)
            let tod = await haruka.reSize(`${setting.pathimg}`, 300, 300) 
            var capt = `_*${botName} Information*_

*• Name :* ${haruka.user.name}
*• Number :* ${botNumber.split("@")[0]}
*• Owner :* ${prefix}owner
*• Total Pengguna :* ${pendaftar.length}
*• Prefix :* ${prefix}
`
            m.reply(capt)
           }
 break
case'donate': case'donasi':
            addCountCmd('#donate', m.sender, _cmd)
            haruka.sendMessage(m.chat, { image: fs.readFileSync(setting.fotoDonasi), caption: donate(pushname, ownerNumber).split('@')[0]}, {quoted:m})
            break;
case 'dashboard':
	        addCountCmd('#dashboard', m.sender, _cmd)
            var posi = await getPosiCmdUser(m.sender, _cmdUser)
            _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
            _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
            var posi = await getPosiCmdUser(m.sender, _cmdUser)
            var jumlahCmd = _cmd.length
            if (jumlahCmd > 10) jumlahCmd = 10
            var jumlah = _cmdUser[posi].db.length
            if (jumlah > 5) jumlah = 5
            var totalUser = 0
            for (let x of _cmdUser[posi].db) {
                totalUser = totalUser + x.count
            }
            var total = 0
            for (let o of _cmd) {
                total = total + o.count
            }
            var teks = `*√ DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
            teks += `*Most Command Global*\n`
            for (let u = 0; u < jumlahCmd; u ++) {
                teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
            }
            teks += `\n*Most Command User*\n`
            for (let i = 0; i < jumlah; i ++) {
                teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
            }
            reply(teks)
            break
case 'owner': case 'creator': {
                haruka.sendContact(m.chat, ownerNumber.map( i => i.split("@")[0]), m)
            }
            break
case 'cekdrive': case'drive':
            var result = await nou.drive.info();
            addCountCmd('#cekdrive', m.sender, _cmd)
            reply(`*Drive Server Info*\n\n *• Total :* ${result.totalGb} GB\n *• Used :* ${result.usedGb} GB (${result.usedPercentage}%)\n *• Free :* ${result.freeGb} GB (${result.freePercentage}%)`)
            break
case 'cekbandwidth': case'bandwidth':
            reply(mess.wait);
            addCountCmd('#cekbandwidth', m.sender, _cmd)
            var { download, upload } = await checkBandwidth();
            reply(`*Bandwidth Server*\n\n*>* Upload : ${upload}\n*>* Download : ${download}`)
            break
case 'cekprem': case'cekpremium':
            if (!isPremium) return m.reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
            addCountCmd('#cekpremium', m.sender, _cmd)
            if (isCreator) return m.reply(`Khusus user aja bkn untuk owner`)
            if (_prem.getPremiumExpired(m.sender, premium) == "PERMANENT") return m.reply(`PERMANENT`)
            let cekvip = ms(_prem.getPremiumExpired(m.sender, premium) - Date.now())
            let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
            reply(premiumnya)
            break
case 'listpremium': case'listprem':
            addCountCmd('#listpremium', m.sender, _cmd)
            let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
            let men = [];
            for (let i of premium) {
                men.push(i.id)
                txt += `*ID :* @${i.id.split("@")[0]}\n`
                if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                }
            }
            haruka.sendTextWithMentions(m.chat, txt, m)
            break
        case 'listsewa':
            let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
            let data_array = [];
            for (let x of sewa) {
                addCountCmd('#listsewa', m.sender, _cmd)
                list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
                if (x.expired === 'PERMANENT') {
                    let ceksewa = 'PERMANENT'
                    list_sewa_list += `*Expire :* PERMANENT\n\n`
                } else {
                    let ceksewa = ms(x.expired - Date.now())
                    list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
                }
            }
            haruka.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })
            break
        case'speed': case'ping':
            addCountCmd('#speed', m.sender, _cmd)
            reply(`${latensi.toFixed(4)} Second`)
            break
        case'runtime':
            addCountCmd('#runtime', m.sender, _cmd)
            reply (`${runtime(process.uptime())}`)
            break
        case 'listbahasa':
            addCountCmd('#listbahasa', m.sender, _cmd)
            var clear = ["auto", "isSupported", "getCode"]
            var teks = `List Bahasa Yang Tersedia\n\n`
            for (let i in translate.languages) {
                if (!clear.includes(i)) {
                    teks += `*${i}* untuk ${translate.languages[i]}\n`
                }
            }
            reply(teks)
            break

		// Converter & Tools Menu
		case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
			if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			addCountCmd('#sticker', m.sender, _cmd)
            if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await haruka.sendImageAsSticker(m.chat, media, m, { packname: setting.botName , author: setting.ownerName })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await haruka.sendVideoAsSticker(m.chat, media, m, { packname: setting.botName , author: setting.ownerName })
                await fs.unlinkSync(encmedia)
            } else {
                return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                }
            }
            limitAdd(m.sender, limit)
            break
		case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
			if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
                addCountCmd('#stickerwm', m.sender, _cmd)
                let [teks1, teks2] = text.split`|`
                if (!teks1) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
                if (!teks2) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await haruka.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await haruka.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
                }
            }
            limitAdd(m.sender, limit)
            break
		case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
			if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			addCountCmd('#smeme', m.sender, _cmd)
			 if (!/webp/.test(mime) && /image/.test(mime)) {
            m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            mee = await haruka.downloadAndSaveMediaMessage(quoted)
			mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let emme = await haruka.sendImageAsSticker(m.chat, smeme, m, { packname: setting.botName , author: setting.ownerName })
	        await fs.unlinkSync(emme)
            } else {
            	reply(`Kirim/reply image dengan caption ${prefix + command} text1|text2`)
            }
            }
            limitAdd(m.sender, limit)
	       break     
		case 'toimage': case 'toimg': {
			if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			addCountCmd('#toimage', m.sender, _cmd)
                if (!quoted) return m.reply('Reply Image')
                if (!/webp/.test(mime)) return m.reply (`Balas sticker dengan caption *${prefix + command}*`)
                m.reply(mess.wait)
                let media = await haruka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    haruka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            limitAdd(m.sender, limit)
            break
		case 'tomp3': {
			if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			addCountCmd('#tomp3', m.sender, _cmd)
             if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            if (!quoted) return m.reply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('../lib/converter')
            let audio = await toAudio(media, 'mp4')
            haruka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haruka.user.name}.mp3`}, { quoted : m })
            }
            limitAdd(m.sender, limit)
            break
	  case "ttp": case 'attp':{
		if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			addCountCmd('#attp', m.sender, _cmd)
                    if (!text) return m.reply(`Example : ${prefix + command} halo`)
                    if(text.length > 20) return m.reply("Maksimal 20 karakter")
                    m.reply(mess.wait)
                    let encmedia = await haruka.sendMediaAsSticker(m.chat, `https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`, m, { packname: setting.botName , author: setting.ownerName })
					await fs.unlinkSync(encmedia)
		}
		limitAdd(m.sender, limit)
					break   
		case 'emojimix': {
			if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			addCountCmd('#emojimix', m.sender, _cmd)
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+💩`)
		if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+💩`)
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await haruka.sendImageAsSticker(m.chat, res.url, m, { packname: setting.botName , author: setting.ownerName, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    limitAdd(m.sender, limit)
	    break
		case'nulis':
            addCountCmd('#nulis', m.sender, _cmd)
            reply(`*Pilihan Fitur Nulis*
1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri Subscribe Ya https://youtube.com/c/zeeoneofc`)
            break
		case'nuliskiri': {
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} haruka`)
            reply(mess.wait)
            const tulisan = body.slice(11)
            addCountCmd('#nuliskiri', m.sender, _cmd)
            haruka.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("apikey sedang eror"))
            limitAdd(m.sender, limit)
            }
            limitAdd(m.sender, limit)
            break
        case'nuliskanan': {
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} haruka`)
            reply(mess.wait)
            const tulisan = body.slice(12)
            addCountCmd('#nuliskanan', m.sender, _cmd)
            haruka.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("apikey sedang eror"))
            limitAdd(m.sender, limit)
            }
            limitAdd(m.sender, limit)
            break
        case'foliokiri': {
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} haruka`)
            reply(mess.wait)
            const tulisan = body.slice(11)
            addCountCmd('#foliokiri', m.sender, _cmd)
            haruka.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("apikey sedang eror"))
            limitAdd(m.sender, limit)
            }
            limitAdd(m.sender, limit)
            break
        case'foliokanan': {
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} haruka`)
            reply(mess.wait)
            const tulisan = body.slice(12)
            addCountCmd('#foliokanan', m.sender, _cmd)
            haruka.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("apikey sedang eror"))
            limitAdd(m.sender, limit)
            }
            limitAdd(m.sender, limit)
            break
			case'say':{
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} haruka`)
	        addCountCmd('#say', m.sender, _cmd)
	        var lang = text.split("--")[1]
            if (!lang) lang = 'id'
			long = 'id'
			function tts(text, long = 'id') {
  //console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(long)
      let filePath = path.join(__dirname, '../lib', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}

let res
  try { res = await tts(text, long) }
  catch (e) {
    m.reply(e + '')
    res = await tts(text)
  } finally {
  haruka.sendMessage(m.chat, {audio: res, mimetype: 'audio/mpeg', ptt: true}, {})
    }
            limitAdd(m.sender, limit)
            }
            limitAdd(m.sender, limit)
            break
			case 'translate': case 'tr': {
if (!text) return m.reply(`Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
translate(teks, { to: args[0] }).then((res) => {
haruka.sendText(m.chat, `${res.text}`, m)
})
}
limitAdd(m.sender, limit)
break

			case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				let buttons = [
                        { buttonId: '.start', buttonText: { displayText: 'CARI TEMAN' }, type: 1 }
                    ]
                    m.reply(`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
             }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    m.reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
                    throw false
                }
                m.reply('Berhasil keluar dari anonymous chat')
                let other = room.other(m.sender)
                if (other) await haruka.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') 
            break
            }
            break
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    m.reply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '.next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    haruka.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
                    room.b = m.sender
                    room.state = 'CHATTING'
                    m.reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    m.reply(`Mohon Tunggu Sedang Mencari Partner`)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    m.reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await haruka.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '.next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    haruka.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
                    room.b = m.sender
                    room.state = 'CHATTING'
                    m.reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    m.reply(`Mohon Tunggu Sedang Mencari Partner`)
                }
                break
            }
			case'sendprofile': case'sendprofil':
            if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
            this.anonymous = this.anonymous ? this.anonymous : {}
	        let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
	        if (!romoe) {
			let buttons = [
                        { buttonId: '.start', buttonText: { displayText: 'SEARCH' }, type: 1 }
                    ]
                    m.reply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
              //  var teks = `⚠️ Kamu belum pernah memulai chat!`
                //await haruka.sendMessage(m.chat, { text: teks, footer: footxt, templateButtons: but })
                throw false
            } else {
                let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
                var partnerJID = rms.other(m.sender)
                var res = await haruka.sendContact(partnerJID, [m.sender.split("@")[0]])
                haruka.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: m })
                haruka.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: res })
            }
            break
        // Store Menu
			case 'list': case 'store':{
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
            let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
            for (let i of db_respon_list) {
              if (i.id === m.chat) {
               teks += `- ${i.key.toUpperCase()}\n`
              }
            }
              teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
              haruka.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
			}
              break
			case 'dellist':
	        if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
            if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList(m.chat, q.toLowerCase(), db_respon_list)
            reply(`Sukses delete list message dengan key *${q}*`)
            break
			case'addlist':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            var args1 = q.split("|")[0].toLowerCase()
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (/image/.test(mime)) {
                let media = await haruka.downloadAndSaveMediaMessage(quoted)
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(m.chat, args1, args2, false, '-', db_respon_list)
                reply(`Sukses set list message dengan key : *${args1}*`)
            }
            break
			case 'updatelist': case 'update':
   	     if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            var args1 = q.split("|")[0].toLowerCase()
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
            if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (/image/.test(mime)) {
                let media = await haruka.downloadAndSaveMediaMessage(quoted)
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses update respon list dengan key *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
                reply(`Sukses update respon list dengan key *${args1}*`)
            }
            break
case 'jeda': {
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (!isBotAdmins) return m.reply(mess.BotAdmin)
            if (!text) return m.reply(`kirim ${prefix+command} waktu\nContoh: ${prefix+command} 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari`)
            opengc[m.chat] = { id: m.chat, time: Date.now() + toMS(text) }
            fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
            haruka.groupSettingUpdate(m.chat, "announcement")
            .then((res) => reply(`Sukses, group akan dibuka ${text} lagi`))
            .catch((err) => reply('Error'))
            }
            break
case 'tambah':{
	if (!text.includes('+')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one + nilai_two}`)}
            break
        case 'kurang':{
            if (!text.includes('-')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one - nilai_two}`)}
            break
        case 'kali':{
            if (!text.includes('*')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one * nilai_two}`)}
            break
        case 'bagi':{
            if (!text.includes('/')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one / nilai_two}`)}
            break
		case 'setproses': case 'setp':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
            if (isSetProses(m.chat, set_proses)) return m.reply(`Set proses already active`)
            addSetProses(text, m.chat, set_proses)
            reply(`✅ Done set proses!`)
            break
        case 'changeproses': case 'changep':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
            if (isSetProses(m.chat, set_proses)) {
                changeSetProses(text, m.chat, set_proses)
                m.reply(`Sukses ubah set proses!`)
            } else {
                addSetProses(text, m.chat, set_proses)
                m.reply(`Sukses ubah set proses!`)
            }
            break
        case 'delsetproses': case 'delsetp':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (!isSetProses(m.chat, set_proses)) return m.reply(`Belum ada set proses di gc ini`)
            removeSetProses(m.chat, set_proses)
            reply(`Sukses delete set proses`)
            break
		case 'setdone':{
			if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
			if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
            if (isSetDone(m.chat, set_done)) return m.reply(`Udh set done sebelumnya`)
            addSetDone(text, m.chat, set_done)
            reply(`Sukses set done!`)
            break
            }
           case 'changedone': case 'changed':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
            if (isSetDone(m.chat, set_done)) {
                changeSetDone(text, m.chat, set_done)
                m.reply(`Sukses ubah set done!`)
            } else {
                addSetDone(text, m.chat, set_done)
                m.reply(`Sukses ubah set done!`)
            }
            break
        case 'delsetdone': case 'delsetd':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (!isSetDone(m.chat, set_done)) return m.reply(`Belum ada set done di gc ini`)
            removeSetDone(m.chat, set_done)
            m.reply(`Sukses delete set done`)
            break

        // Downloads Menu
		case 'play': case 'ytplay': {
			if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!text) return m.reply(`Example : ${prefix + command} Cara membuat bot wa`)
                await m.reply(mess.wait)
                let search = await yts(`${text}`)
                let res = search
let  caption = `*YOUTUBE PLAY*

あ ID : ${res.all[0].videoId}
あ Title : ${res.all[0].title}
あ Views : ${res.all[0].views}
あ Duration : ${res.all[0].timestamp}
あ Channel : ${res.all[0].author.name}
あ Upload : ${res.all[0].ago}
あ URL Video : ${res.videos[0].url}
あ Description : ${res.videos[0].description}

Kirim ini perintah untuk mendownload media:
${prefix}ytmp4 ${res.videos[0].url}
${prefix}ytmp3 ${res.videos[0].url}`
let todd = await getBuffer(res.all[0].image)
haruka.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
            }
            limitAdd(m.sender, limit)
            break
			case 'ytmp3': case 'ytaudio': {    
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)            
                if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/Bjf4lNfGl-w`)
                if (!text.includes('youtu.be') && !text.includes('youtube.com')) return m.reply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/Bjf4lNfGl-w`)
                await m.reply(mess.wait)
                const { youtubedl, youtubedlv2, youtubedlv3 } =require ( '@bochilteam/scraper')
limited = 100
jk = args[0]
let chat = db.data.chats[m.chat]
  const isY = /y(es)/gi.test(jk)
const { thumbnail, audio: _audio, title } = await youtubedl(jk).catch(async _ => await youtubedlv2(jk)).catch(async _ => await youtubedlv3(jk))

const limitedSize = (isCreator ? 2000 : limited) * 1024
  let audio, source, res, link, lastError, isLimited
for (let i in _audio) {
    try {
      audio = _audio[i]
      if (isNaN(audio.fileSize)) continue
      isLimited = limitedSize < audio.fileSize
      if (isLimited) continue
      link = await audio.download()
      let ggnya = await getBuffer(thumbnail)
      if (audio.fileSize > 50000) return haruka.sendMessage(m.chat, {image: ggnya, caption: `-----「 *YOUTUBE MP3* 」-----

*💬 Title:* ${title}
*▶️ Size:* ${audio.fileSizeH}
*✍️ Link:* ${link}

Untuk durasi lebih dari batas disajikan dalam bentuk link`}, {quoted:m})
      if (link) res = await fetch(link)
      isLimited = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimited) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimited) throw 'Error: ' + (lastError || 'Can\'t download audio')

//let o = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
let ggnya = await getBuffer (thumbnail)              
  if (!isY && !isLimited) await haruka.sendMessage(m.chat, {image:ggnya, caption: `-----「 *YOUTUBE MP3* 」-----

*💬 Title:* ${title}
*▶️ Size:* ${audio.fileSizeH}
*${isLimited ? 'Untuk durasi lebih dari batas disajikan dalam bentuk link ' : ''}Link:* ${link}`} , {quoted:m})
  haruka.sendMessage(m.chat, {audio: {url: link}, mimetype:'audio/mpeg'}, {quoted: m})
  //if (!isLimited) await haruka.sendFile(m.chat, link, title + '.mp3', '', m, null, {})
  .catch((err) => {
                    reply("Server eror")
                })
            }
            limitAdd(m.sender, limit)
            break
			case 'ytmp4': case 'ytvideo': {
				if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/Bjf4lNfGl-w`)
                 if (!text.includes('youtu.be') && !text.includes('youtube.com')) return m.reply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/Bjf4lNfGl-w`)
                 m.reply(mess.wait)
                const { youtubedl, youtubedlv2, youtubedlv3 } =require ( '@bochilteam/scraper')
limited = 100
jk = args[0]
let chat = db.data.chats[m.chat]
  const isY = /y(es)/gi.test(jk)
const { thumbnail, video: _video, title } = await youtubedl(jk).catch(async _ => await youtubedlv2(jk)).catch(async _ => await youtubedlv3(jk))

const limitedSize = (isCreator ? 2000 : limited) * 1024
  let video, source, res, link, lastError, isLimited
for (let i in _video) {
    try {
      video = _video[i]
      if (isNaN(video.fileSize)) continue
      isLimited = limitedSize < video.fileSize
      if (isLimited) continue
      link = await video.download()
        let ggnya = await getBuffer(thumbnail)
      if (video.fileSize > 50000) return haruka.sendMessage(m.chat,  {image: ggnya, caption: `-----「 *YOUTUBE MP4* 」-----

*💬 Title:* ${title}
*▶️ Size:* ${video.fileSizeH}
*✍️ Link:* ${link}

Untuk durasi lebih dari batas disajikan dalam bentuk link`}, {quoted:m})
      if (link) res = await fetch(link)
      isLimited = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimited) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimited) throw 'Error: ' + (lastError || 'Can\'t download video')

//let o = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
let ggnya = await getBuffer (thumbnail)              
  if (!isY && !isLimited) await haruka.sendMessage(m.chat,  {image: ggnya, caption: `-----「 *YOUTUBE MP4* 」-----

*💬 Title:* ${title}
*▶️ Size:* ${video.fileSizeH}
*${isLimited ? 'Untuk durasi lebih dari batas disajikan dalam bentuk link' : ''}Link:* ${link}`},{quoted:m})
  haruka.sendMessage(m.chat, {video: {url: link}, mimetype:'video/mp4'}, {quoted: m})
  //if (!isLimited) await haruka.sendFile(m.chat, link, title + '.mp4', '', m, null, {})
  .catch((err) => {
                    reply("Eror!!!")
                })
            }
            limitAdd(m.sender, limit)
            break
			case 'instagram': case 'ig': case 'igdl': case 'igphoto': case 'instaphoto': case 'instafoto': case 'igfoto': case 'igvideo': case 'instavideo': case 'instavid': case 'igreels': case 'instareels': case 'instareel': case 'igtv': case 'instatv':{
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cf6Ec_xPGcP/?igshid=YmMyMTA2M2Y=`)
            if (!isUrl(args[0])) return m.reply(mess.error.Iv)
            if (!args[0].includes('instagram.com')) return m.reply(mess.error.Iv)
            await m.reply(mess.wait)
            let dlig = await instagramGetUrl(args[0]).catch(async _ => await m.reply("Server sedang eror"))
            for(let i of dlig.url_list){
              haruka.sendFile(m.chat, i, "ig.jpg", "Nih kak", m)
            }
			}  
			limitAdd(m.sender, limit)
        break
			case "tiktokmp4": case 'tiktokwm': case'tiktoknowm': case'tiktok':{
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8b3r72f/`)
            if (!isUrl(args[0])) return m.reply(mess.error.Iv)
            if (!args[0].includes('tiktok')) return m.reply(mess.error.Iv)
            reply(mess.wait)
            addCountCmd('#tiktok', m.sender, _cmd)
            let dltik = await fetchJson(`https://saipulanuar.ga/api/download/tiktok?url=${text}`)
		if(!dltik.result) return m.reply(mess.error.api)
		haruka.sendMessage(m.chat, {video : {url : dltik.result.video}, mimetype:'video/mp4'}, {quoted:m})
}
limitAdd(m.sender, limit)
            break
			
		case "tiktokmp3": case'tiktokaudio':{
		    if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
		    if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8b3r72f/`)
		    if (!isUrl(args[0])) return m.reply(mess.error.Iv)
		    if (!text.includes('tiktok')) return m.reply(mess.error.Iv)
		    reply(mess.wait)
		addCountCmd('#tiktokaudio', m.sender, _cmd)
	/*	let dltik = await fetchJson(`https://tiktok.zeeoneofc.my.id/api/tiktok?url=${args[0]}`)
		if(!dltik.result) return m.reply(mess.error.api)
		haruka.sendMessage(m.chat, {audio : {url : dltik.result.url[1].url}, mimetype:'audio/mpeg'}, {quoted:m})
}*/
const json = await (
					await fetch(
						API("rose", "/downloader/tiktok", { url: args[0] }, "apikey")
					)
				).json();
				if (!json.status) {
					return reply(json.message || "Yah gaggagaal");
				}
				await haruka.sendMessage(
					m.chat,
					{
						audio: {
							url: json.download.music,
						},
						mimetype: "audio/mp4",
					},
					{ quoted: m }
				);
limitAdd(m.sender, limit)
		    break;
		}
			case'mediafire': case'mfire': case'mfdl':{
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix} limit untuk mengecek limit`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://www.mediafire.com/file/6tknikx5f3jfsh8/harukabotV16.zip/file`)
            if (!isUrl(text)) return m.reply(mess.error.Iv)
            if (!text.includes('mediafire.com')) return m.reply(mess.error.Iv)
            reply(mess.wait)
            addCountCmd('#mediafire', m.sender, _cmd)
            kotz.mediafire(text).then(async(data) => {
                data = data[0]
                data.nama = decodeURIComponent(data.nama)
                var media = await getBuffer(data.link)
                if (data.mime.includes('mp4')) {
                    haruka.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'video/mp4' }, { quoted: m })
                } else if (data.mime.includes('mp3')) {
                    haruka.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'audio/mp3' }, { quoted: m })
                } else {
                    haruka.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'application/'+data.mime }, { quoted: m })
                }
            }).catch((e) => {
                console.log(color('[ ERROR ]', 'red'), e)
                reply(mess.error.api)
               })}
               limitAdd(m.sender, limit)
            break
        case 'gitclone':{
            let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://github.com/zeeone-ofc/Haruka-Md`)
            if (!regx.test(text)) return m.reply('Linknya salah')
            reply(mess.wait)
            let [, usr, repo] = text.match(regx) || []
            let repos = repo.replace(/.git$/, '')
            let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
            let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
            haruka.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
			}
			limitAdd(m.sender, limit)
            break
			
			// Group Menu
			case'afk':
            if (!m.isGroup) return m.reply(mess.OnlyGrup)
            if (isAfkOn) return m.reply('Afk sudah diaktifkan sebelumnya')
            addCountCmd('#afk', m.sender, _cmd)
            let reason = text ? text : 'Nothing.'
            afk.addAfkUser(m.sender, Date.now(), reason, _afk)
            haruka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m)
            break
			case'welcome':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (args[0] === "on") {
                addCountCmd('#welcome', m.sender, _cmd)
                if (isWelcome) return m.reply(`Udah on`)
                _welcome.push(m.chat)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('Sukses mengaktifkan welcome di grup ini')
            } else if (args[0] === "off") {
                addCountCmd('#welcome', m.sender, _cmd)
                if (!isWelcome) return m.reply(`Udah off`)
                let anu = _welcome.indexOf(m.chat)
               _welcome.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('Sukses menonaktifkan welcome di grup ini')
            } else {
              m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 		}
            break
        case'left': case 'goodbye':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (args[0] === "on") {
                addCountCmd('#left', m.sender, _cmd)
                if (isLeft) return m.reply(`Udah on`)
                _left.push(m.chat)
                fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
                reply('Sukses mengaktifkan goodbye di grup ini')
            } else if (args[0] === "off") {
                addCountCmd('#left', m.sender, _cmd)
                if (!isLeft) return m.reply(`Udah off`)
                let anu = _left.indexOf(m.chat)
               _left.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
                reply('Sukses menonaktifkan goodbye di grup ini')
            } else {
              m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
            }
            break
        	case'setwelcome':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
            if (isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Set welcome already active`)
            addSetWelcome(text, m.chat, set_welcome_db)
            addCountCmd('#setwelcome', m.sender, _cmd)
            reply(`Successfully set welcome!`)
            break
        case'changewelcome':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
            if (isSetWelcome(m.chat, set_welcome_db)) {
                addCountCmd('#changewelcome', m.sender, _cmd)
                changeSetWelcome(q, m.chat, set_welcome_db)
                reply(`Sukses change set welcome teks!`)
            } else {
                addCountCmd('#changewelcome', m.sender, _cmd)
                addSetWelcome(q, m.chat, set_welcome_db)
                reply(`Sukses change set welcome teks!`)
            }
            break
        case'delsetwelcome':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Belum ada set welcome di sini..`)
            removeSetWelcome(m.chat, set_welcome_db)
            addCountCmd('#delsetwelcome', m.sender, _cmd)
            reply(`Sukses delete set welcome`)
            break
        case'setleft':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
            if (isSetLeft(m.chat, set_left_db)) return m.reply(`Set left already active`)
            addCountCmd('#setleft', m.sender, _cmd)
            addSetLeft(q, m.chat, set_left_db)
            reply(`Successfully set left!`)
            break
        case'changeleft':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
            if (isSetLeft(m.chat, set_left_db)) {
                addCountCmd('#changeleft', m.sender, _cmd)
                changeSetLeft(q, m.chat, set_left_db)
                reply(`Sukses change set left teks!`)
            } else {
                addCountCmd('#changeleft', m.sender, _cmd)
                addSetLeft(q, m.chat, set_left_db)
                reply(`Sukses change set left teks!`)
            }
            break
        case'delsetleft':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!isSetLeft(m.chat, set_left_db)) return m.reply(`Belum ada set left di sini..`)
            addCountCmd('#delsetleft', m.sender, _cmd)
            removeSetLeft(m.chat, set_left_db)
            reply(`Sukses delete set left`)
            break
			case 'linkgrup': case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) return m.reply('Fitur Khusus Group!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
                let response = await haruka.groupInviteCode(m.chat)
                haruka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
			case 'pppanjang': case 'setppbot2':{
				if (!isCreator) return m.reply('Fitur Khusus owner!')
                if (!quoted) return reply(`Reply foto dgn caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
				let media = await haruka.downloadAndSaveMediaMessage(quoted)
				var { img } = await generateProfilePicture(media)
            	await haruka.query({
                    tag: 'iq',
                    attrs: {
                        to: botNumber,
                        type:'set',
                        xmlns: 'w:profile:picture'
                    },
                    content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    } 
                    ]
                })
                m.reply("Done!!!")
				}
				break
			case 'pppanjanggc': case 'setppgc2':{
				if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
				if (!isBotAdmins) return m.reply(mess.BotAdmin)
                if (!quoted) return reply(`Reply foto dgn caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
				let media = await haruka.downloadAndSaveMediaMessage(quoted)
				var { img } = await generateProfilePicture(media)
            	await haruka.query({
                    tag: 'iq',
                    attrs: {
                        to: m.chat,
                        type:'set',
                        xmlns: 'w:profile:picture'
                    },
                    content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    } 
                    ]
                })
                m.reply("Done!!!")
				}
				break
			case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
				if (!isBotAdmins) return m.reply(mess.BotAdmin)
                if (!quoted) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await haruka.downloadAndSaveMediaMessage(quoted)
                await haruka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply("Berhasil mengganti pp group")
                }
                break
			case 'setname': case 'setsubject': {
                if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
                if (!text) return m.reply(`Example ${prefix + command} WhatsApp Bot`)
                await haruka.groupUpdateSubject(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
                if (!text) return m.reply(`Example ${prefix + command} WhatsApp Bot`)
                await haruka.groupUpdateDescription(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
            }
            break
			case'antilink':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
            if (args[0] === "on") {
                addCountCmd('#antilink', m.sender, _cmd)
                if (isAntiLink) return m.reply(`Udah aktif`)
                antilink.push(m.chat)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Activate Antilink In This Group')
            } else if (args[0] === "off") {
                addCountCmd('#antilink', m.sender, _cmd)
                if (!isAntiLink) return m.reply(`Udah nonaktif`)
                let anu = antilink.indexOf(m.chat)
                antilink.splice(anu, 1)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Disabling Antilink In This Group')
            } else {
              m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
            }}
            break
			case'antilink2':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
            if (args[0] === "on") {
                addCountCmd('#antilink2', m.sender, _cmd)
                if (isAntiLink2) return m.reply(`Udah aktif`)
                antilink2.push(m.chat)
                fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
                reply('Successfully Activate antilink2 In This Group')
            } else if (args[0] === "off") {
                addCountCmd('#antilink2', m.sender, _cmd)
                if (!isAntiLink2) return m.reply(`Udah nonaktif`)
                let anu = antilink2.indexOf(m.chat)
                antilink2.splice(anu, 1)
                fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
                reply('Successfully Disabling antilink2 In This Group')
            } else {
              m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
            }}
            break
			case'antidelete':{
           // if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isCreator) return m.reply('Fitur Khusus owner!')
//   if (!isBotAdmins) return m.reply(mess.BotAdmin)
            if (args[0] === "on") {
                addCountCmd('#antidelete', m.sender, _cmd)
                if (setting.antiDelete) return m.reply(`Udah aktif`)
                setting.antiDelete = true
                reply('Successfully Activate antidelete In This bot')
            } else if (args[0] === "off") {
                addCountCmd('#antidelete', m.sender, _cmd)
                if (!setting.antiViewOnce) return m.reply(`Udah nonaktif`)
                setting.antiDelete = false
                reply('Successfully Disabling antidelete In This bot')
            } else {
              m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
           }
        }
            break
			case'antionce':case 'antiviewonce':{
           // if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isCreator) return m.reply('Fitur Khusus owner!')
           //     if (!isBotAdmins) return m.reply(mess.BotAdmin)
            if (args[0] === "on") {
                addCountCmd('#antionce', m.sender, _cmd)
                if (setting.antiViewOnce) return m.reply(`Udah aktif`)
                setting.antiViewOnce = true
reply('Successfully Activate Anti view once In This bot')
            } else if (args[0] === "off") {
                addCountCmd('#antionce', m.sender, _cmd)
                if (!setting.antiViewOnce) return m.reply(`Udah nonaktif`)
               setting.antiViewOnce = false
                reply('Successfully Disabling Anti view once In This bot')
            } else {
              m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
            }
			}
            break
        case'antiwame':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
             if (args[0] === "on") {
                addCountCmd('#antiwame', m.sender, _cmd)
                if (isAntiWame) return m.reply(`Udah aktif`)
                antiwame.push(m.chat)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Activate Antiwame In This Group')
            } else if (args[0] === "off") {
                addCountCmd('#antiwame', m.sender, _cmd)
                if (!isAntiWame) return m.reply(`Udah nonaktif`)
                let anu = antiwame.indexOf(m.chat)
                antiwame.splice(anu, 1)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Disabling Antiwame In This Group')
            } else {
              m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
            }}
            break
        case'antiwame2':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
             if (args[0] === "on") {
                addCountCmd('#antiwame2', m.sender, _cmd)
                if (isAntiWame2) return m.reply(`Udah aktif`)
                antilink.push(m.chat)
                fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
                reply('Successfully Activate antiwame2 In This Group')
            } else if (args[0] === "off") {
                addCountCmd('#antiwame2', m.sender, _cmd)
                if (!isAntiWame2) return m.reply(`Udah nonaktif`)
                let anu = antiwame2.indexOf(m.chat)
                antiwame2.splice(anu, 1)
                fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
                reply('Successfully Disabling antiwame2 In This Group')
            } else {
              m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
            }}
            break
			case'open': case'buka':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return //m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
            addCountCmd('#group', m.sender, _cmd)
            haruka.groupSettingUpdate(m.chat, 'not_announcement')
            const textOpen = await getTextSetOpen(m.chat, set_open);
            reply(textOpen || `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
			break
			}
		case'setopen':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
            if (isSetOpen(m.chat, set_open)) return m.reply(`Set open sudah ada sebelumnya`)
            addSetOpen(text, m.chat, set_open)
            addCountCmd('#setopen', m.sender, _cmd)
            reply(`✅ Done set open!`)
            }
            break
        case 'changeopen': case 'changesetopen':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
            if (isSetOpen(m.chat, set_open)) {
                addCountCmd('#changeopen', m.sender, _cmd)
                changeSetOpen(text, m.chat, set_open)
                reply(`Sukses ubah set open teks!`)
            } else {
                addCountCmd('#changeopen', m.sender, _cmd)
                addSetOpen(text, m.chat, set_open)
                reply(`Sukses ubah set open teks!`)
            }
            break
        case 'delsetopen':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator) return m.reply('Fitur Khusus owner!')
            if (!isSetOpen(m.chat, set_open)) return m.reply(`Belum ada set open di sini..`)
            removeSetOpen(m.chat, set_open)
            addCountCmd('#delsetopen', m.sender, _cmd)
            reply(`Sukses delete set open`)
            break
        case'close': case'tutup':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
		    addCountCmd('#close', m.sender, _cmd)
		    haruka.groupSettingUpdate(m.chat, 'announcement')
			const textClose = await getTextSetClose(m.chat, set_close);
		    reply(textClose || `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
		    break
			case 'setclose':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
            if (isSetClose(m.chat, set_close)) return m.reply(`Set close sudah ada sebelumnya`)
            addSetClose(text, m.chat, set_close)
            addCountCmd('#setclose', m.sender, _cmd)
            reply(`✅ Done set close!`)
            }
            break
        case'changeclose': case'changesetclose':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
            if (isSetClose(m.chat, set_close)) {
                addCountCmd('#changeclose', m.sender, _cmd)
                changeSetClose(text, m.chat, set_close)
                reply(`Sukses ubah set close teks!`)
            } else {
                addCountCmd('#changeclose', m.sender, _cmd)
                addSetClose(text, m.chat, set_close)
                reply(`Sukses ubah set close teks!`)
            }
            break
        case 'delsetclose':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator) return m.reply('Fitur Khusus owner!')
            if (!isSetClose(m.chat, set_close)) return m.reply(`Belum ada set close di sini..`)
            removeSetClose(m.chat, set_close)
            addCountCmd('#delsetclose', m.sender, _cmd)
            reply(`Sukses delete set close`)
            break
			case 'kick': {
				if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await haruka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('Sukses kick target✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
	}
	break
	case 'add': {
		if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await haruka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Sukses add member✅')).catch((err) => m.reply('❌ Terjadi kesalahan, mungkin nmr nya privat'))
	}
	break
	case 'promote': {
		if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await haruka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote member✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
	}
	break
	case 'demote': {
		if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await haruka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote admin✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
	}
	break
			case'revoke':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply(mess.BotAdmin)
            addCountCmd('#revoke', m.sender, _cmd)
            await haruka.groupRevokeInvite(m.chat)
            .then( res => {
                reply(`Sukses menyetel tautan undangan grup ini`)
            }).catch(() => reply(mess.error.api))
            break
			case 'hidetag': {
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
            haruka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
			case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return m.reply( 'Pesan tersebut bukan dikirim oleh bot!')
                haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
			case 'checksewa': case'ceksewa':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
            if (!isSewa) return m.reply(`Bot tidak di sewa group ini!`)
            addCountCmd('#checksewa', m.sender, _cmd)
            let ceksewa = ms(_sewa.getSewaExpired(m.chat, sewa) - Date.now())
            let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
            reply(sewanya)
            break
    // Game Menu    
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) return m.reply('Fitur Khusus Group!')
            let TicTacToe = require("../lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply( 'Kamu masih didalam game')
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await haruka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await haruka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${prefix+command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) return m.reply ( `Kamu sedang tidak berada di room tictactoe !`)
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
			case'casino':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
            if (isGame(m.sender, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
            if (!text) return m.reply(`Kirim perintah *${prefix+command}* @tag nominal`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            if (fs.existsSync(`./database/${m.chat}.json`)) return m.reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
            if (!args[1]) return m.reply('Masukan Nominal Nya')
            if (args[1].includes('-')) return m.reply(`Jangan menggunakan -`)
            if (isNaN(parseInt(args[1]))) return m.reply('Nominal Harus Berupa Angka!')
            var anu = getBalance(m.sender, balance)
            var ani = getBalance(m.mentionedJid[0], balance)
            if (anu < args[1] || anu == 'undefined') return m.reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
            if (ani < args[1] || ani == 'undefined') return m.reply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
            var casinoo = setCasino(`${m.chat}`)
            casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
            casinoo.Y = users
            casinoo.nominal = parseInt(args[1])
            addCountCmd('#casino', m.sender, _cmd)
            fs.writeFileSync(`./database/casino/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
            gameAdd(m.sender, glimit)
            var starGame = `🎰 Memulai Game Casino 💰\n\n• @${m.sender.replace("@s.whatsapp.net", "")} Menantang ${text}, dengan Nominal: *$ ${parseInt(args[1])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!`
            haruka.sendMessage(m.chat, { text: starGame, mentions: [m.sender, users] }, { quoted: m })
           }
			 break
        case'delcasino':
            if (fs.existsSync('./database/casino/'+m.chat+'.json')) {
                var csn = JSON.parse(fs.readFileSync('./database/casino/'+m.chat+'.json'))
                if (csn.Z.includes(m.sender)) {
                    addCountCmd('#delcasino', m.sender, _cmd)
                    deleteCasino(m.chat)
                    reply('Berhasil Menghapus Sesi Casino')
		        } else if (csn.Y.includes(m.sender)) {
                    addCountCmd('#delcasino', m.sender, _cmd)
                    deleteCasino(m.chat)
                    reply('Berhasil Menghapus Sesi Casino')
                } else if (isAdmins) {
                    addCountCmd('#delcasino', m.sender, _cmd)
                    deleteCasino(m.chat)
                    reply('Berhasil Menghapus Sesi Casino')
                } else if (isCreator) {
                    addCountCmd('#delcasino', m.sender, _cmd)
                    deleteCasino(m.chat)
                    reply('Berhasil Menghapus Sesi Casino')
                } else {
	                reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
	            }
            } else {
                reply('Tidak ada sesi yang berlangsung')
            }
            break
			// Search Menu
			case'lirik': case 'liriklagu':{
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *judul*\n\n_Contoh_\n\n${prefix+command} Bila Nanti`)
            reply(mess.wait)
            addCountCmd('#lirik', m.sender, _cmd)
let anu = await fetchJson('http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=' + text)
if(!anu.data) return m.reply('server eror')
limitAdd(m.sender, limit)
let anuu = await fetchJson (anu.data[0].songLyrics)
let { artist, songTitle, songLyrics} = anuu.data
m.reply('*Artis:* ' + artist + '\n*Title*: ' + songTitle + '\n*Lirik*: ' + songLyrics)
.catch((e) => {
                console.log(e)
                reply(`Judul lagu tidak ditemukan`)
                
            })
            }
            break
        case'grupwa': case'searchgrup':
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *nama group*\n\n_Contoh_\n\n${prefix+command} store`)
            reply(mess.wait)
            addCountCmd('#grupwa', m.sender, _cmd)
            hxz.linkwa(q).then(async(data) => {
                if (data.length == 0) return m.reply(`Grup ${q} tidak ditemukan`)
                var teks = `*Hasil Pencarian Dari ${q}*\n\n`
                for (let x of data) {
                    teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
                }
                reply(teks)
                limitAdd(m.sender, limit)
            }).catch((e) => {
                console.log(color('[ ERROR ]', 'red'), e)
                reply(`Hasil pencarian dari ${q} tidak ditemukan`)
                
            })
            break
			case 'pinterest': {
				if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
                m.reply(mess.wait)
				let anu = await pinterest(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                haruka.sendMessage(m.chat, { image: { url: result }, caption: 'Url : '+result }, { quoted: m })
            }
            break
case 'yts': case 'ytsearch':{
	if (!text) reply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Cara membuat bot WhatsApp`)
  let reso = await yts(`${text}`)
	let aramat = reso.all
	var tbuff = await getBuffer(aramat[0].image)
  let teks = aramat.map(v => {
    switch (v.type) {
      case 'video': return `
📛 Title : *${v.title}* 
⏰ Durasi: ${v.timestamp}
🚀 Diupload ${v.ago}
😎 Views : ${v.views}
🌀 Url : ${v.url}
      `.trim()
      case 'channel': return `
📛 Channel : *${v.name}*
🌀 Url : ${v.url}
👻 Subscriber : ${v.subCountLabel} (${v.subCount})
🎦 Total Video : ${v.videoCount}
`.trim()
    }
  }).filter(v => v).join('\n----------------------------------------\n')
  
  haruka.sendMessage(m.chat, { image: tbuff,  caption: teks }, { quoted: m })

 .catch((err) => {
                    reply("Not found")
                })
}
  break
		
			         // Random Menu
        case'cecan': case'cewek':{
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            addCountCmd('#cecan', m.sender, _cmd)
			var query = ["cewe korea","cewe china", "cewe Thailand"]
            let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
  		let anu = datax[Math.floor(Math.random() * datax.length)]
  		 haruka.sendMessage(m.chat, { caption: "Random Cewe Cantik", image: { url: anu }}, { quoted: m })            
            .catch((e) => {
                reply(mess.error.api)
            })
            limitAdd(m.sender, limit)
			}
            break
        case'cogan': case'cowok':{
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            addCountCmd('#cogan', m.sender, _cmd)
            var query = ["cowo korea","cowo china", "cowo Thailand"]
            let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
  		let anu = datax[Math.floor(Math.random() * datax.length)]
  		 haruka.sendMessage(m.chat, { caption: "Random Cogan", image: { url: anu }}, { quoted: m })            
            .catch((e) => {
                reply(mess.error.api)
                
            })
            limitAdd(m.sender, limit)
			}
            break
		case'waifu':{
		    if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
		    reply(mess.wait)
		    addCountCmd('#waifu', m.sender, _cmd)
		    var data = (await axios.get('https://waifu.pics/api/sfw/waifu')).data.url
		    haruka.sendMessage(m.chat, { caption: "Random Waifu", image: { url: data }}, { quoted: m })
		    .catch((e) => {
                console.log(color('[ ERROR ]', 'red'), e)
                reply(mess.error.api)
                
            })
            limitAdd(m.sender, limit)
			}
		    break
			// Balance Menu
        case 'topglobal':{
        	if (!m.isGroup)return m.reply(mess.OnlyGrup)
            balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
            let top = '*── 「 TOPGLOBAL BALANCE 」 ──*\n\n'
            let arrTop = []
            var total = 10
            if (balance.length < 10) total = balance.length
            for (let i = 0; i < total; i ++){
                top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                arrTop.push(balance[i].id)
            }
            haruka.sendTextWithMentions(m.chat, top, m)
            //mentions(top, arrTop, true)
            }
            break
        case'toplocal':{
            if (!m.isGroup)return m.reply(mess.OnlyGrup)
            balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
            let top = '*── 「 TOPLOCAL BALANCE 」 ──*\n\n'
            let arrTop = []
            var total = 10
            if (balance.length < 10) total = balance.length
            let anggroup = groupMembers.map(a => a.id)
            for (let i = 0; i < total; i ++){
                if (anggroup.includes(balance[i].id)) {
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
            }
            haruka.sendTextWithMentions(m.chat, top, m)
            }
            break
        case'buylimit':{
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *jumlah limit yang ingin dibeli*\n\nHarga 1 limit = $50 balance`)
            if (text.includes('-')) return m.reply(`Jangan menggunakan -`)
            if (isNaN(text)) return m.reply(`Harus berupa angka`)
            if (args[0] === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
            let ane = Number(parseInt(text) * 50)
            if (getBalance(m.sender, balance) < ane) return m.reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
            addCountCmd('#buylimit', m.sender, _cmd)
            kurangBalance(m.sender, ane, balance)
            giveLimit(m.sender, parseInt(text), limit)
            reply(`Pembeliaan limit sebanyak ${text} berhasil\n\nSisa Balance : $${getBalance(m.sender, balance)}\nSisa Limit : ${getLimit(m.sender, limitCount, limit)}/${limitCount}`)
            }
            break
        case'buygamelimit': case'buyglimit':{
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *jumlah game limit yang ingin dibeli*\n\nHarga 1 game limit = $50 balance\nPajak $1 / $10`)
            if (text.includes('-')) return m.reply(`Jangan menggunakan -`)
            if (isNaN(text)) return m.reply(`Harus berupa angka`)
            if (text === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
            let ane = Number(parseInt(text) * 50)
            if (getBalance(m.sender, balance) < ane) return m.reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
            addCountCmd('#buygamelimit', m.sender, _cmd)
            kurangBalance(m.sender, ane, balance)
            givegame(m.sender, parseInt(text), glimit)
            reply(`Pembeliaan game limit sebanyak ${text} berhasil\n\nSisa Balance : $${getBalance(m.sender, balance)}\nSisa Game Limit : ${cekGLimit(m.sender, gcount, glimit)}/${gcount}`)
            }
            break
			case'transfer': case'tf':{
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @62918838818 2000`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            if (!users) return m.reply(`Tag orang yang ingin di transfer balance`)
            if (!args[1]) return m.reply(`Masukkan nominal nya!`)
            if (isNaN(args[1])) return m.reply(`Nominal harus berupa angka!`)
            if (args[1] === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
            if (args[1].includes("-")) return m.reply(`Jangan menggunakan -`)
            var anu = getBalance(m.sender, balance)
            if (anu < args[1] || anu == 'undefined') return m.reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
            addCountCmd('#transfer', m.sender, _cmd)
            kurangBalance(m.sender, parseInt(text), balance)
            addBalance(users, parseInt(args[1]), balance)
            haruka.sendTextWithMentions(m.chat, `Sukses transfer balance sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
            }
            break
			case'limit': case'balance': case'ceklimit': case'cekbalance':{
			/*let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            if (users){
                var Ystatus = ownerNumber.includes(users)
                var isPrim = Ystatus ? true : _prem.checkPremiumUser(users, premium)
                var ggcount = isPrim ? gcounti.prem : gcounti.user
                var limitMen = `${getLimit(users, limitCount, limit)}`
                reply(`💳 Limit : ${_prem.checkPremiumUser(users, premium) ? 'Unlimited' : limitMen}/${limitCount}\n🕹️ Limit Game : ${cekGLimit(users, ggcount, glimit)}/${ggcount}\n🏦 Balance : $${await getBalance(users, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit *jumlah* dan ${prefix}buyglimit *jumlah* untuk membeli game limit\n\n*Example :*\n${prefix}buylimit 1\n${prefix}buyglimit 1\n\n*Note :*\n• Harga 1 limit = $50 balance`)
            } else {*/
              var mybal = await getBalance(m.sender, balance)
                var limitPrib = `${getLimit(m.sender, limitCount, limit)}/${limitCount}`
                reply(`💳 Limit : ${isPremium ? 'Unlimited' : limitPrib}\n🕹️ Limit Game : ${cekGLimit(m.sender, gcount, glimit)}/${gcount}\n🏦 Balance : $${mybal}\n\nKamu dapat membeli limit dengan ${prefix}buylimit *jumlah* dan ${prefix}buyglimit *jumlah* untuk membeli game limit\n\n*Example :*\n${prefix}buylimit 1\n${prefix}buyglimit 1\n\n*Note :*\n• Harga 1 limit = $50 balance`)
           // }
            break
			}
			// Baileys
case'fitnah':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
            if (!text) return haruka.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix+command} *@tag|pesantarget|pesanbot*\n\n_Contoh_\n\n${prefix+command} @${m.sender.split("@")[0]}|enak ga semalem|enak banget`, m)
            var org = text.split("|")[0]
            var target = text.split("|")[1];
            var bot = text.split("|")[2];
            if (!org.startsWith('@')) return m.reply('Tag orangnya')
            if (!target) return m.reply(`Masukkan pesan target!`)
            if (!bot) return m.reply(`Masukkan pesan bot!`)
            var mens = parseMention(target)
            addCountCmd('#fitnah', m.sender, _cmd)
            var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
            var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${target}` }}
            haruka.sendMessage(m.chat, { text: bot, mentions: mens }, { quoted: mens.length > 2 ? msg1 : msg2 })
            break
			case'nowa':
            if (!isPremium) return m.reply(mess.OnlyPrem)
	        if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *nomor*\n\n_Contoh_\n\n${prefix+command} 628XXXXXXXXXX`)
	        if (!text.includes('x')) return m.reply('Misal 6285xxx')
            reply(mess.wait)
            addCountCmd('#nowa', m.sender, _cmd)
            function countInstances(string, word) {
                return string.split(word).length - 1;
            }
	        var nomer0 = teks.split('x')[0]
	        var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
	        var random_length = countInstances(teks, 'x')
	        var random;
	        if (random_length == 1) {
	            random = 10
	        } else if (random_length == 2) {
	            random = 100
	        } else if (random_length == 3) {
	            random = 1000
	        }

            var nomerny = `List Nomer\n\nPunya Bio/status/info\n`
            var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
            var no_watsap = `\nTidak Terdaftar\n`

            for (let i = 0; i < random; i++) {
                var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                var dom1 = nu[Math.floor(Math.random() * nu.length)]
                var dom2 = nu[Math.floor(Math.random() * nu.length)]
                var dom3 = nu[Math.floor(Math.random() * nu.length)]
                var dom4 = nu[Math.floor(Math.random() * nu.length)]

                var rndm;
                if (random_length == 1) {
                    rndm = `${dom1}`
                } else if (random_length == 2) {
                    rndm = `${dom1}${dom2}`
                } else if (random_length == 3) {
                    rndm = `${dom1}${dom2}${dom3}`
                } else if (random_length == 4) {
                    rndm = `${dom1}${dom2}${dom3}${dom4}`
                }

                var anu = await haruka.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
                var anuu = anu.length !== 0 ? anu : false

                try {
                    try {
                        var anu1 = await haruka.fetchStatus(anu[0].jid)
                    } catch {
                        var anu1 = '401'
                    }
                    if (anu1 == '401' || anu1.status.length == 0) {
                        no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                        console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    } else {
                        if (random_length == 6) {
                            var thn = `${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}`
                            if (thn.endsWith('2009')) {
                                nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
                                console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                            }
                        } else {
                            nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
                            console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                        }
                    }
                } catch {
                    no_watsap += `${nomer0}${i}${nomer1}\n`
                    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
                }
            }
		    reply(`${nomerny}${no_bio}${no_watsap}`)
		    break
		case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let gwm = await haruka.serializeM(await m.getQuotedObj())
		if (!gwm.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await gwm.quoted.copyNForward(m.chat, true)
            }
	    break
		case 'fakehidetag':
	        if (!isPremium) return rely(mess.OnlyPrem)
            if (!m.isGroup) return m.reply(mess.OnlyGrup)
            if (!text) return haruka.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix + command} *@tag|text*\n\n_Contoh_\n\n${prefix + command} @${m.sender.split("@")[0]}|Halo`, m)
            var org = text.split("|")[0]
            var teks = text.split("|")[1];
            if (!org.startsWith('@')) return m.reply('Tag orangnya')
            var mem2 = []
            groupMembers.map( i => mem2.push(i.id) )
            var mens = parseMention(target)
            addCountCmd('#fakehidetag', m.sender, _cmd)
            var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${prefix}hidetag ${teks}`, contextInfo: { mentionedJid: mens }}}}
            var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${prefix}hidetag ${teks}` }}
            haruka.sendMessage(m.chat, { text: teks ? teks : '', mentions: mem2 }, { quoted: mens.length > 2 ? msg1 : msg2 })
            break
		case'react':
            if (!isPremium) return rely(mess.OnlyPrem)
            if (!m.quoted) return m.reply(`Balas pesannya`)
            if (!text) return m.reply(`Masukkan 1 emoji`)
            if (!isEmoji(text)) return m.reply(`Itu bukan emoji!`)
            if (isEmoji(text).length > 1) return m.reply(`Satu aja emojinya`)
            addCountCmd('#react', m.sender, _cmd)
            var reactMsg = { reactionMessage: {
                key: {
                    remoteJid: m.chat,
                    fromMe: m.key.fromMe,
                    id: quoted.id
                    },
                text: text
            }
            }
            haruka.sendMessageFromContent(m.chat, reactMsg)
            break
			case 'setcmd': {
                if (!m.quoted) return m.reply( 'Reply Pesan!')
                if (!m.quoted.fileSha256) return m.reply ('SHA256 Hash Missing')
                if (!text) return m.reply(`Contoh ${prefix + command} .menu`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (db.data.sticker[hash] && db.data.sticker[hash].locked) return m.reply( 'You have no permission to change this sticker command')
                db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return m.reply ('SHA256 Hash Missing')
                if (db.data.sticker[hash] && db.data.sticker[hash].locked) return m.reply( 'You have no permission to change this sticker command')
                delete db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
// Owners Menu
			case 'join': {
                if (!isCreator) return m.reply(mess.OnlyOwner)
                if (!text) return m.reply(`Kirim perintah ${prefix + command} _linkgrup_`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply(mess.error.Iv)
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await haruka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return m.reply(mess.OnlyOwner)
                await haruka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
			case 'public': {
                if (!isCreator) return m.reply(mess.OnlyOwner)
                haruka.public = true
                m.reply('Sukse Change To Public Mode')
            }
            break
            case 'self': {
                if (!isCreator) return m.reply(mess.OnlyOwner)
                haruka.public = false
                m.reply('Sukses Change To Self Mode')
            }
            break
			case 'setppbot': {
                if (!isCreator) return m.reply(mess.OnlyOwner)
                if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await haruka.downloadAndSaveMediaMessage(quoted)
                await haruka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply("Done")
                }
                break
			case'nsfw':{
	if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
	if (args[0] === 'on') {
						if (isNsfw) return m.reply("Udh on di group ini")
						_nsfw.push(m.chat)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
						reply("Nsfw berhasil di aktifkan di group ini")
						} else if (args[0] === 'off') {
							if (!isNsfw) return m.reply("Udh off di group ini")
						_nsfw.splice(m.chat, 1)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
						reply("Nsfw berhasil di nonaktifkan di group ini")
						} else {
						  m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 		}}
	break
case'autobio': {
        if (!isCreator) return m.reply(mess.OnlyOwner)
        if (args[0] === "on") {
      	if (setting.autobio === true) return m.reply("Udh on")
        setting.autobio = true
        reply("Autobio berhasil diaktifkan")
        } else if (args[0] === "off") {
        	if (setting.autobio === false) return m.reply("Udh off")
        setting.autobio = false
        reply("Autobio berhasil dinonaktifkan")
        } else {
          m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 		}}
			break
case 'anticall': {
        if (!isCreator) return m.reply(mess.OnlyOwner)
        if (args[0] === "on") {
      	if (setting.anticall === true) return m.reply("Udh on")
        setting.anticall = true
        reply("Anticall berhasil diaktifkan")
        } else if (args[0] === "off") {
        	if (setting.anticall === false) return m.reply("Udh off")
        setting.anticall = false
        reply("Anticall berhasil dinonaktifkan")
        } else {
        	m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
			}}
			break
case 'autorespond': {
        if (!isCreator) return m.reply(mess.OnlyOwner)
        if (args[0] === "on") {
      	if (setting.autorespond === true) return m.reply("Udh on")
        setting.autorespond = true
        reply("Autorespond berhasil diaktifkan")
        } else if (args[0] === "off") {
        	if (setting.autorespond === false) return m.reply("Udh off")
        setting.autorespond = false
        reply("Autorespond berhasil dinonaktifkan")
        } else {
          m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 		}}
			break
case 'autoblok': case 'autoblok212': {
        if (!isCreator) return m.reply(mess.OnlyOwner)
        if (args[0] === "on") {
      	if (setting.autoblok212 === true) return m.reply("Udh on")
        setting.autoblok212 = true
        reply("Autoblok berhasil diaktifkan")
        } else if (args[0] === "off") {
        	if (setting.autoblok212 === false) return m.reply("Udh off")
        setting.autoblok212 = false
        reply("Autoblok berhasil dinonaktifkan")
        } else {
          m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 		}}
			break
case 'autoread': {
        if (!isCreator) return m.reply(mess.OnlyOwner)
        if (args[0] === "on") {
      	if (setting.autoread === true) return m.reply("Udh on")
        setting.autoread = true
        reply("Autoread berhasil diaktifkan")
        } else if (args[0] === "off") {
        	if (setting.autoread === false) return m.reply("Udh off")
        setting.autoread = false
        reply("Autoread berhasil dinonaktifkan")
        } else {
          m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 		}}
			break
case 'addstiker': case 'addsticker': case 'addstik':{
	if (!m.key.fromMe && !isCreator) return m.reply(mess.OnlyOwner)
					if (!/webp/.test(mime)) return  reply(`Contoh : ${prefix + command} halo`)
					if (!text) return m.reply(`Contoh : ${prefix + command} halo`)
					if (text.includes('|')) return m.reply(`Contoh : ${prefix + command} halo`)
					let media = await haruka.downloadMediaMessage(quoted)
					setiker.push(`${text}`)
					fs.writeFileSync(`./database/${text}.webp`, media)
					fs.writeFileSync('./database/stik.json', JSON.stringify(setiker))
					reply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break
case 'liststik': case 'liststiker': case 'liststc':{
					teks = '*STICKER LIST :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan kirim pesan sesuai list stiker di atas_`
					reply(teks)
					break
}
			case 'addfoto': case 'addimage': case 'addphoto': case 'addimg':{
	if (!m.key.fromMe && !isCreator) return m.reply(mess.OnlyOwner)
					if (!/image/.test(mime)) return  reply(`Contoh : ${prefix + command} halo`)
					if (!text) return m.reply(`Contoh : ${prefix + command} halo`)
					if (text.includes('|')) return m.reply(`Contoh : ${prefix + command} halo`)
					let media = await haruka.downloadMediaMessage(quoted)
					imagenye.push(`${text}`)
					fs.writeFileSync(`./database/${text}.jpg`, media)
					fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
					reply(`Sukses Menambahkan Image\nCek dengan cara ${prefix}listimg`)
}
break
case 'listimage': case 'imagelist': case 'listimg':{
					teks = '*IMAGE LIST :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil image silahkan kirim pesan sesuai list image di atas_`
					reply(teks)
					break
}
case 'addvideo': case 'addvidio': case 'addvid':{
			if (!m.key.fromMe && !isCreator) return m.reply(mess.OnlyOwner)
					if (!/video/.test(mime)) return  reply(`Contoh : ${prefix + command} halo`)
					if ((quoted.msg || quoted).seconds > 31) return m.reply('Maksimal 30 detik')
					if (!text) return m.reply(`Contoh : ${prefix + command} halo`)
					if (text.includes('|')) return m.reply(`Contoh : ${prefix + command} halo`)
					let media = await haruka.downloadMediaMessage(quoted)
					videonye.push(`${text}`)
					fs.writeFileSync(`./database/${text}.mp4`, media)
					fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
					reply(`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`)
}
break
case 'videolist': case 'listvidio': case 'listvid': case 'listvideo':{
					teks = '*VIDEO LIST :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*\n\n_Untuk mengambil video silahkan kirim pesan sesuai list video di atas_`
					reply(teks)
					break
}
case 'addaud': case 'addaudio': case 'addvn':{
			if (!m.key.fromMe && !isCreator) return m.reply(mess.OnlyOwner)
					if (!/audio/.test(mime)) return  reply(`Contoh : ${prefix + command} halo`)
					if ((quoted.msg || quoted).seconds > 31) return m.reply('Maksimal 30 detik')
					if (!text) return m.reply(`Contoh : ${prefix + command} halo`)
					if (text.includes('|')) return m.reply(`Contoh : ${prefix + command} halo`)
					let media = await haruka.downloadMediaMessage(quoted)
					audionye.push(`${text}`)
					fs.writeFileSync(`./database/${text}.mp3`, media)
					fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
					reply(`Sukses Menambahkan Vn / audio \nCek dengan cara ${prefix}listvn`)
}
break
case 'listvn': case 'listaudio':{
					teks = '*AUDIO LIST :*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil audio silahkan kirim pesan sesuai list audio di atas_`
					reply(teks)
					break
}
case 'bcimage': case 'bcimg':{
	if (!isCreator) return m.reply(mess.OnlyOwner)
                if (!text) return m.reply(`Reply foto dengan caption ${prefix + command} Tes`)
                if (!/image/.test(mime)) return m.reply(`Reply foto dengan caption ${prefix + command} Tes`)
                let anu = await store.chats.all().map(v => v.id)
                let media = await haruka.downloadAndSaveMediaMessage(quoted)
                let buffer = fs.readFileSync(media)
                for (let apaan of anu) {
                	 let txt = `「 BROADCAST 」\n\n${text}`
                      haruka.sendMessage(apaan, {image: buffer, caption: txt}, {quoted: fkontak})
		}
		m.reply('Sukses Broadcast')
	}
	break
case 'bcvideo': case 'bcvid':{
	if (!isCreator) return m.reply(mess.OnlyOwner)
                if (!text) return m.reply(`Reply video dengan caption ${prefix + command} Tes`)
                if (!/video/.test(mime)) return m.reply(`Reply video dengan caption ${prefix + command} Tes`)
                let anu = await store.chats.all().map(v => v.id)
                let media = await haruka.downloadAndSaveMediaMessage(quoted)
                let buffer = fs.readFileSync(media)
                for (let apaan of anu) {
                	let txt = `「 BROADCAST 」\n\n${text}`
                      haruka.sendMessage(apaan, {video: buffer, caption: txt, mimetype: 'video/mp4', duration: 909090909}, {quoted: fkontak})
		}
		m.reply('Sukses Broadcast')
	}
	break
case 'bcaudio': case 'bcaud':{
	if (!isCreator) return m.reply(mess.OnlyOwner)
                if (!/audio/.test(mime)) return m.reply(`Reply audio dengan caption ${prefix + command} Tes`)
                let anu = await store.chats.all().map(v => v.id)
                let media = await haruka.downloadAndSaveMediaMessage(quoted)
                let buffer = fs.readFileSync(media)
                for (let apaan of anu) {
                	let txt = `「 BROADCAST 」\n\n${text}`
                      haruka.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: false, duration: 909090909}, {quoted: fkontak})
		}
		m.reply('Sukses Broadcast')
	}
	break
case 'bcvn': {
	if (!isCreator) return m.reply(mess.OnlyOwner)
               if (!/audio/.test(mime)) return m.reply(`Reply audio dengan caption ${prefix + command} Tes`)
                let anu = await store.chats.all().map(v => v.id)
                let media = await haruka.downloadAndSaveMediaMessage(quoted)
                let buffer = fs.readFileSync(media)
                for (let apaan of anu) {
                	let txt = `「 BROADCAST 」\n\n${text}`
                      haruka.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: true, duration: 909090909}, {quoted: fkontak})
		}
		m.reply('Sukses Broadcast')
	}
	break
case 'bcstiker': case 'bcstik': case 'bcsticker':{
	if (!isCreator) return m.reply(mess.OnlyOwner)
                 if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption ${prefix + command}`)
                let anu = await store.chats.all().map(v => v.id)
                let media = await haruka.downloadAndSaveMediaMessage(quoted)
                let buffer = fs.readFileSync(media)
                for (let apaan of anu) {
                	  let txt = `「 BROADCAST 」\n\n${text}`
                      haruka.sendMessage(apaan, {sticker :{url : media}}, {quoted: fkontak})
		}
		m.reply('Sukses Broadcast')
	}
	break

			case 'bc': case 'broadcast': {
                if (!isCreator) return m.reply(mess.OnlyOwner)
                if (!text) return m.reply (`Example : ${prefix + command} Tes`)
                let anu = await store.chats.all().map(v => v.id)
                let todd = await haruka.reSize(`${setting.pathimg}`, 300, 300) 
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let apaan of anu) {
		    await sleep(1500)
		haruka.sendMessage(apaan, {image: fs.readFileSync(setting.pathimg), caption: `*BROADCAST*\n\n${text}`})
		    }
		m.reply('Sukses Broadcast')
            }
            break
			case'bcsewa': {
            if (!isCreator) return m.reply(mess.OnlyOwner)
            if (!text) return m.reply (`Example : ${prefix + command} Tes`)
            addCountCmd('#bcsewa', m.sender, _cmd)
            for (let i of sewa){
                await haruka.sendMessage(i.id, { text: text })
                await sleep(3000) 
            }
                reply(`Sukses bc ke ${sewa.length}`)
            }
            break
			case'addprem':{
            if (!isCreator) return m.reply(mess.OnlyOwner)
            const swn = args.join(" ")
            const pcknm = swn.split("|")[0];
  		  const atnm = swn.split("|")[1];
            if (!pcknm) return m.reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
            if (!atnm) return m.reply(`Mau yang berapa hari?`)
            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            if (users) {
                addCountCmd('#addprem', m.sender, _cmd)
                _prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
                reply('Sukses')
            } else {
                var cekap = await haruka.onWhatsApp(pcknm+"@s.whatsapp.net")
                if (cekap.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                addCountCmd('#addprem', m.sender, _cmd)
                _prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
                reply('Sukses')
            }}
            break
			case'delprem':
            if (!isCreator) return m.reply(mess.OnlyOwner)
            if (!args[0]) return m.reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            if (users) {
                addCountCmd('#delprem', m.sender, _cmd)
                premium.splice(_prem.getPremiumPosition(users, premium), 1)
                fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                reply('Sukses!')
            } else {
                var cekpr = await haruka.onWhatsApp(args[0]+"@s.whatsapp.net")
                if (cekpr.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                addCountCmd('#delprem', m.sender, _cmd)
                premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
                fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                reply('Sukses!')
            }
            break
           case'addsewa':
            if (!isCreator) return m.reply(mess.OnlyOwner)
            if (text < 2) return m.reply(`Gunakan dengan cara ${prefix+command} *linkgc waktu*\n\nContoh : ${prefix+command} https://chat.whatsapp.com/PnwpPqn0b 30d`)
            if (!isUrl(args[0])) return m.reply(mess.error.Iv)
            var url = args[0]
            addCountCmd('#addsewa', m.sender, _cmd)
            url = url.split('https://chat.whatsapp.com/')[1]
            if (!text) return m.reply(`Waktunya?`)
            var data = await haruka.groupAcceptInvite(url)
            if (_sewa.checkSewaGroup(data, sewa)) return m.reply(`Bot sudah disewa oleh grup tersebut!`)
            _sewa.addSewaGroup(data, args[1], sewa)
            reply(`Success Add Sewa Group Berwaktu!`)
            break
			case'delsewa':
            if (!isCreator) return m.reply(mess.OnlyOwner)
            if (!m.isGroup) return m.reply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
            if (!isSewa) return m.reply(`Bot tidak disewa di Grup ini`)
            addCountCmd('#delsewa', m.sender, _cmd)
            sewa.splice(_sewa.getSewaPosition(args[0] ? args[0] : m.chat, sewa), 1)
            fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
            reply(`Sukses`)
            break
			case'resetlimit':
		    if (!isCreator) return m.reply(mess.OnlyOwner)
			addCountCmd('#resetlimit', m.sender, _cmd)
            limit = []
            fs.writeFileSync('./database/limit.json', JSON.stringify(limit, null, 2))
            glimit = []
            fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit, null, 2))
            reply(`Sukses reset limit pengguna`)
            break
			case'halloween2':case'horror':case'game8bit':case'layered':case'glitch2':case'coolg':case'coolwg':case'realistic':case'space3d':case'gtiktok':case'stone':case'marvel':case'marvel2':case'pornhub':case'avengers':case'metalr':case'metalg':case'metalg2':case'halloween2':case'lion':case'wolf_bw':case'wolf_g':case'ninja':case'3dsteel':case'horror2':case'lava':case'bagel':{
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
reply(mess.wait)
let texproo = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${m1}&text2=${m2}&apikey=${setting.BotKey}`)
haruka.sendMessage(m.chat, {image: texproo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
                    m.reply(util.format(err))
                })
}
break

case'blackpink':case'rainbow2':case'water_pipe':case'halloween':case'sketch':case'sircuit':case'discovery':case'metallic2':case'fiction':case'demon':case'transformer':case'berry':case'thunder':case'magma':case'3dstone':case'neon':case'glitch':case'harry_potter':case'embossed':case'broken':case'papercut':case'gradient':case'glossy':case'watercolor':case'multicolor':case'neon_devil':case'underwater':case'bear':case'wonderfulg':case'christmas':case'neon_light':case'snow':case'cloudsky':case'luxury2':case'gradient2':case'summer':case'writing':case'engraved':case'summery':case'3dglue':case'metaldark':case'neonlight':case'oscar':case'minion':case'holographic':case'purple':case'glossyb':case'deluxe2':case'glossyc':case'fabric':case'neonc':case'newyear':case'newyear2':case'metals':case'xmas':case'blood':case'darkg':case'joker':case'wicker':case'natural':case'firework':case'skeleton':case'balloon':case'balloon2':case'balloon3':case'balloon4':case'balloon5':case'balloon6':case'balloon7':case'steel':case'gloss':case'denim':case'decorate':case'decorate2':case'peridot':case'rock':case'glass':case'glass2':case'glass3':case'glass4':case'glass5':case'glass6':case'glass7':case'glass8':case'captain_as2':case'robot':case'equalizer':case'toxic':case'sparkling':case'sparkling2':case'sparkling3':case'sparkling4':case'sparkling5':case'sparkling6':case'sparkling7':case'decorative':case'chocolate':case'strawberry':case'koifish':case'bread':case'matrix':case'blood2':case'neonligth2':case'thunder2':case'3dbox':case'neon2':case'roadw':case'bokeh':case'gneon':case'advanced':case'dropwater':case'wall':case'chrismast':case'honey':case'drug':case'marble':case'marble2':case'ice':case'juice':case'rusty':case'abstra':case'biscuit':case'wood':case'scifi':case'metalr':case'purpleg':case'shiny': case'jewelry':case'jewelry2':case'jewelry3':case'jewelry4':case'jewelry5':case'jewelry6':case'jewelry7':case'jewelry8':case'metalh':case'golden':case'glitter':case'glitter2':case'glitter3':case'glitter4':case'glitter5':case'glitter6':case'glitter7':case'metale':case'carbon':case'candy':case'metalb':case'gemb':case'3dchrome':case'metalb2':case'metalg':
{
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text*`)
reply(mess.wait)
let texpro = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${q}&apikey=${setting.BotKey}`)
try{
await haruka.sendMessage(m.chat, {image: texpro, caption: "Done kak"}, {quoted: m})
} catch (err){
                    m.reply(util.format(err))
                }
}
break
			case'addowner':{
            if (!isCreator) return m.reply(mess.OnlyOwner)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *@tag*`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            if (users) {
                ownerNumber.push(users)
                fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
                reply(`Sukses`)
            } else {
                reply(`Gunakan dengan cara ${prefix + command} *@tag*`)
            }}
            break
        case'delowner':{
            if (!isCreator) return m.reply(mess.OnlyOwner)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *@tag/jid*`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            if (users) {
                if (!ownerNumber.includes(users)) return m.reply(`Dia bukan owner`)
                ownerNumber.splice(ownerNumber.indexOf(users, 1))
                reply(`Sukses`)
            } else {
                reply(`Gunakan dengan cara ${prefix + command} *@tag*`)
            }}
            break

case 'inv': case 'inventori': case 'inventory': case 'profile':{
  if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
      let teksehmazeh = `*INFO USER*\n\n`
     teksehmazeh += `*❤️ Blood* : ${getDarah(m.sender) ? getDarah(m.sender) : 0}\n`
     teksehmazeh += `*◻️️ Iron* : ${getBesi(m.sender) ? getBesi(m.sender) : 0}\n`
     teksehmazeh += `*🌟 Gold* : ${getEmas(m.sender) ? getEmas(m.sender) : 0}\n`
     teksehmazeh += `*🐲 Emerald* : ${getEmerald(m.sender) ? getEmerald(m.sender) : 0}\n`
     teksehmazeh += `*💎 Diamond* : ${getDm(m.sender) ? getDm(m.sender) : 0}\n`
     teksehmazeh += `*⏺️ Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}\n`
     teksehmazeh += `*💰 Money* : $${getBalance(m.sender, balance) ? getBalance(m.sender, balance) : 0}\n`
     teksehmazeh += `*🧪 Potion* : ${getPotion(m.sender) ? getPotion(m.sender) : 0}\n\n`
     teksehmazeh += `*HUNT RESULT*\n`
     teksehmazeh += `*🐟 Fish* :` + util.format(getIkan(m.sender) ? getIkan(m.sender) : 0 + getMancingIkan(m.sender) ? getMancingIkan(m.sender) :0) + `\n`
     teksehmazeh += `*🐔 Chicken* : ${getAyam(m.sender) ? getAyam(m.sender) : 0}\n`
     teksehmazeh += `*🐇 Rabbit* : ${getKelinci(m.sender) ? getKelinci(m.sender) : 0}\n`
     teksehmazeh += `*🐑 Sheep* : ${getDomba(m.sender) ? getDomba(m.sender) : 0}\n`
     teksehmazeh += `*🐄 Cow* : ${getSapi(m.sender) ? getSapi(m.sender) : 0}\n`
     teksehmazeh += `*🐘 Elephant* : ${getGajah(m.sender) ? getGajah(m.sender) : 0}\n`
     teksehmazeh += `🎢 *Coal* : ${getMiningcoal(m.sender) ? getMiningcoal(m.sender) : 0}\n`
     teksehmazeh += `🛑 *Stone* : ${getMiningstone(m.sender) ? getMiningstone(m.sender) : 0}\n`
     teksehmazeh += `❄️ *Copper Ore* : ${getMiningore(m.sender) ? getMiningore(m.sender) : 0}\n`
     teksehmazeh += `🛠️ *Ingot Ore* : ${getMiningingot(m.sender) ? getMiningingot(m.sender) : 0}\n`
     teksehmazeh += `🪵 *Wood* : ${getNebangKayu(m.sender) ? getNebangKayu(m.sender) : 0}\n`
     haruka.sendMessage(m.chat, {image :{ url : 'https://telegra.ph/file/eb026b67d45e17632a131.jpg'}, caption: teksehmazeh}, {quoted: m})
  }
  break
case 'mining': case 'mine':{
	if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
   if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( async () => {
  let caption = `_MINING RESULT_\n\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  await haruka.sendMessage(m.chat, {image:{ url : 'https://telegra.ph/file/d17479f0a56cc52826101.jpg'}, caption: caption}, {quoted: m})
   }, 7000)  
  setTimeout( async () => {
  await haruka.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Otw Mining`, m)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sender, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  case 'beli': case 'buy':{
  if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
  if (!text) return m.reply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( async () => {
  m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( async () => {
  m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( async() => {
  m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { 
 m.reply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)}
 }
 break
case 'sell': case 'sel': case 'jual':{
  if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
 if (!text) return  m.reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
  var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return m.reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( async () => {
  m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa Ikan Fish : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return m.reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( async () => {
 m. reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa Ayam* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return m.reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( async () => {
  m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa kelinci* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return m.reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( async () => {
  m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa domba* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return m.reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( async () => {
  m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa sapi* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return m.reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( async () => {
  m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa gajah* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return m.reply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( async () => {
  m.reply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa besi* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return m.reply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( async () => {
  m.reply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa emas* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( async () => {
  m.reply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa zamrud* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { 
m.reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
 }

 }
 break
case 'heal':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
 if (!isCekDarah < 1) return m.reply('Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0')
 if (isCekDarah > 100) return m.reply('Darahmu Penuh')
 if (isPotion < 1) return m.reply(`Anda Tidak Punya Ramuan, Coba Beli Dengan Cara #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Done! Darah mu dah full')
 }
 break
case 'hunt': case 'hunting': {
  if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
  if (isCekDarah < 1) return m.reply('Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan') 
   let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = 'https://telegra.ph/file/92967f55b1f437fdd55fe.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  'https://telegra.ph/file/2b9b53837d9f109862224.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = 'https://telegra.ph/file/bd662563855328a1832e6.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = 'https://telegra.ph/file/66435cf783e308b19927e.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = 'https://telegra.ph/file/c5996d581846f70ed1514.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = 'https://telegra.ph/file/ca8f84d91ca3e1d5efa59.jpg'
   }
 setTimeout( async () => {
  let teksehmazeh = `_HUNT RESULT_\n\n`
     teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
     teksehmazeh += `*🐔Chicken* : ${ayam}\n`
     teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
     teksehmazeh += `*🐑Sheep* : ${domba}\n`
     teksehmazeh += `*🐄Cow* : ${sapi}\n`
     teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
     teksehmazeh += `_INFO_\n`
     teksehmazeh += `*Location* : ${lokasinya}\n`
     teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
    await haruka.sendMessage(m.chat, {image:{ url: image }, caption: teksehmazeh}, {quoted: m})
  }, 5000)  
 setTimeout( () => {
  haruka.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`, m)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'adventure':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
var sesuatuu = dungeon[Math.floor(Math.random() * dungeon.length)]
hasm = "https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg"
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {		
var hg = `「 DEATH 」\n\n *┊ Place*  ${sesuatuu}\n ┊ *MONEY :* $${money}\n ┊ *EXP :* ${adven}Xp`
haruka.sendMessage(m.chat, {image:{url:hasm}, caption: hg},{quoted:m})

}, 7000)
setTimeout( () => {
m.reply(`Awass`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
m.reply(`Tiba-tiba Ada ${sesuatu}`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
m.reply(`${pushname} On an Adventure`)
}, 0) // 1000 = 1s,
addLevelingXp(m.sender, adven)
addBalance(m.sender, money, balance)
}
break
case 'luckyday':
case 'luckytime':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(m.sender, b, balance)
addLevelingXp(m.sender, ez)
addEmas(m.sender, a)
addBesi(m.sender, c)
m.reply(`🎰 *Lucky*\n┊ *Money:* $${b}\n┊ *Gold :* ${a}\n┊ *Iron :* ${c}\n┊ *XP :* ${ez}`)
}
break
case 'slime':
    case 'killslime':{
    if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    ez = Math.ceil(Math.random() * 400)
            addLevelingXp(m.sender, ez)
            a = randomNomor(55)
            b = randomNomor(400)
            c = randomNomor(80)
            d = randomNomor(3)
            addLevelingXp(m.sender, ez)
            addBalance(m.sender, b, balance)
            addEmas(m.sender, a)
            addBesi(m.sender, c)
            addDm(m.sender, d)
            bufutI = "https://telegra.ph/file/c34a444fa8824d8bb6e18.jpg"
            var hg = `*Misi kill Slime*\n\n🎁 *Hadiah untuk killing Slime*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
            haruka.sendMessage(m.chat, {image:{url:bufutI},caption: hg} , {quoted:m})         
          }
    break
    case 'goblin':
    case 'killgoblin':{
    if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    ez = Math.ceil(Math.random() * 500)
            addLevelingXp(m.sender, ez)
            a = randomNomor(65)
            b = randomNomor(500)
            c = randomNomor(90)
            d = randomNomor(5)
            addLevelingXp(m.sender, ez)
            addBalance(m.sender, b, balance)
            addEmas(m.sender, a)
            addBesi(m.sender, c)
            addDm(m.sender, d)
            bufo = "https://telegra.ph/file/19bdc38aaafda29f7afe1.jpg"
            var hg = `*Misi kill Goblin*\n\n🎁 *Hadiah untuk killing Goblin*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
           haruka.sendMessage(m.chat, {image:{url:bufo}, caption: hg }, {quoted:m})
           }
    break
    case 'devil':
    case 'killdevil':{
    if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    ez = Math.ceil(Math.random() * 600)
            addLevelingXp(m.sender, ez)
            a = randomNomor(70)
            b = randomNomor(600)
            c = randomNomor(95)
            d = randomNomor(6)
            addLevelingXp(m.sender, ez)
            addBalance(m.sender, b, balance)
            addEmas(m.sender, a)
            addBesi(m.sender, c)
            addDm(m.sender, d)
            bufas = "https://telegra.ph/file/dbecd2f871988f52bf555.jpg"
            var hg = `*Misi kill Devil*\n\n🎁 *Hadiah untuk killing Devil*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
			haruka.sendMessage(m.chat, {image:{url: bufas}, caption: hg }, {quoted:m})
           }
    break
    case 'behemoth':
    case 'killbehemoth':{
    if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    ez = Math.ceil(Math.random() * 700)
            addLevelingXp(m.sender, ez)
            a = randomNomor(75)
            b = randomNomor(600)
            c = randomNomor(100)
            d = randomNomor(7)
            addLevelingXp(m.sender, ez)
            addBalance(m.sender, b, balance)
            addEmas(m.sender, a)
            addBesi(m.sender, c)
            addDm(m.sender, d)
            batai = "https://telegra.ph/file/43259a7d8accff8b627c0.jpg"
            var hg = `*Misi kill Behemoth*\n\n🎁 *Hadiah untuk kiling Behemoth*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
        haruka.sendMessage(m.chat, {image:{url: batai}, caption: hg }, {quoted:m})
           }
    break
    case 'demon':
    case 'killdemon':{
    if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    ez = Math.ceil(Math.random() * 850)
            addLevelingXp(m.sender, ez)
            a = randomNomor(90)
            b = randomNomor(900)
            c = randomNomor(120)
            d = randomNomor(10)
            addLevelingXp(m.sender, ez)
            addBalance(m.sender, b, balance)
            addEmas(m.sender, a)
            addBesi(m.sender, c)
            addDm(m.sender, d)
            bhuu = "https://telegra.ph/file/4a264a10ea2e5f18314f1.jpg"
            var hg = `*Misi kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *Diamond:* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
            haruka.sendMessage(m.chat, {image: {url: bhuu}, caption: hg }, {quoted:m})
           }
    break
    case 'demonking':
    case 'killdemonking':{
    if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    ez = Math.ceil(Math.random() * 1000)
            addLevelingXp(m.sender, ez)
            addBalance(m.sender, 1999, balance)
            addEmas(m.sender, 99)
            addBesi(m.sender, 99)
            addDm(m.sender, 99)
            bhuud = "https://telegra.ph/file/cdf482a8de192189057d8.jpg"
            var hg = `*Misi kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : $${b}\n ┊ *Iron :* ${c}\n ┊ *Gold :* ${a}\n ┊ *Diamond :* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
          haruka.sendMessage(m.chat, {image:{url: bhuud}, caption: hg }, {quoted:m})
           }
    break
case 'joinrpg':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isPetualang) return reply(' *Kamu Telah join sebelumnya*')
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
          _petualang.push(m.sender)
          addInventoriDarah(m.sender, DarahAwal)
          addInventori(m.sender)
          addInventoriBuruan(m.sender)
          fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_petualang))        
          addLevelingId(m.sender) 
          let itu = 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg'
          haruka.sendMessage(m.chat, {image:{url: itu}, caption: 'Sukses join Rpg games' }, {quoted:m})
}
break
case 'sellikan':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 5 * jmlh
if (getFish(m.sender) < jmlh) return reply(`*Ikan Anda Tidak Cukup*`)
sellFish(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
buttons = [
{ buttonId: '.inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
m.reply(`🛍️ *MARKET*\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Price/Fish : 5\n ┊ Status : Success\n ┊ Left FishPrice/Fish : ${await getFish(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellbesi':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 10 * jmlh
if (getBesi(m.sender) < jmlh) return reply(`Besi Tidak Cukup`)
sellBesi(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
buttons = [
{ buttonId: '.inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
m.reply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Besi : 10\n ┊ Status : Sukses\n ┊ Sisa Besi : ${await getBesi(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellemas':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 25 * jmlh
if (getEmas(m.sender) < jmlh) return reply(`Emas Anda Tidak Cukup`)
sellEmas(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
buttons = [
{ buttonId: '.inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
m.reply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Emas : 25\n ┊ Status : Sukses\n ┊ Sisa Emas : ${getEmas(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break 
case 'jelajah': {
			var tempsa = args.join(" ")
			if (tempsa == 'corbiens river') {
			var asu = `https://telegra.ph/file/00018dab77a6cea81523e.jpg`
			setTimeout( async () => {
			const vio = Math.ceil(Math.random() * 70) 
			const pikan = Math.ceil(Math.random() * 15)
			addStone(m.sender, vio)
			addIkan(m.sender, pikan)
			haruka.sendMessage(m.chat, {image:{url: asu}, caption:  `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${vio}* batu dan *${pikan}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
  		}, 2000); //2 minute
			setTimeout( () => {
			m.reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) 
			
            } else if (tempsa === 'chiltawa woods') {    
            let gos = `https://telegra.ph/file/77c3badc9f97d6589a30f.jpg`
            setTimeout( async () => {
			const tesaaq = Math.ceil(Math.random() * 110) // batu
			const ise = Math.ceil(Math.random() * 20)
			addStone(m.sender, tesaaq)
			addKayu(m.sender, ise)
			haruka.sendMessage(m.chat, {image:{url:gos},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tesaaq}* batu dan *${ise}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
			}, 2000); //2 minute
			setTimeout( () => {
			m.reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
            } else if (tempsa === 'cochher sea') {             
           let seae = `https://telegra.ph/file/eabfc907cfc447386b0c0.jpg`
            setTimeout( async () => {
			const feds = Math.ceil(Math.random() * 65)
			addIkan(m.sender, feds)
			haruka.sendMessage(m.chat, {image:{url: seae},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${feds}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
			}, 2000); //2 minute
			setTimeout( () => {
			m.reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
            } else if (tempsa === 'limingstall mountains') {                   
            let seoe = `https://telegra.ph/file/19a10ff95c31af10267e4.jpg`
            setTimeout(() => {
			const fads = Math.ceil(Math.random() * 50)
			const fids = Math.ceil(Math.random() * 80)
			addOre(m.sender, fads)
			addStone(m.sender, fids)
			haruka.sendMessage(m.chat, {image:{url:seoe}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${fads}* copper ore dan ${fids} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
			}, 2000); //2 minute
			setTimeout( () => {
			m.reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
            } else if (tempsa === 'chade mountain') {      
           let seye = `https://telegra.ph/file/efdcd7d07dd22294695a8.jpg`
            setTimeout( () => {
			const pore = Math.ceil(Math.random() * 40)
			const pone = Math.ceil(Math.random() * 60)
			addOre(m.sender, pore)
			addStone(m.sender, pone)
			haruka.sendMessage(m.chat, {image:{url:seye}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${pore}* copper ore dan ${pone} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
			}, 3000); //2 minute
			setTimeout( () => {
			m.reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
			} else if (tempsa === 'gerbil woods') {   
            let siae = `https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg`
            setTimeout( async () => {
			const tzys = Math.ceil(Math.random() * 90) // batu
			const isue = Math.ceil(Math.random() * 45)
			addStone(m.sender, tzys)
			addKayu(m.sender, isue)
			haruka.sendMessage(m.chat, {image:{url:siae}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tzys}* batu dan *${isue}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
			}, 2000); //2 minute
			setTimeout( () => {
			m.reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
			} else if (tempsa === 'moobiens grassland') {      
            let bbbb = `https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg`
            setTimeout( () => {
			const awqu = Math.ceil(Math.random() * 200) // batu
			const usui = Math.ceil(Math.random() * 20)
			addStone(m.sender, awqu)
			addKayu(m.sender, usui)
			haruka.sendMessage(m.chat, {image:{url:bbbb}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${awqu}* batu dan ${usui} kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`} ,{quoted:m})
			}, 2000); //2 minute
			setTimeout( () => {
			reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			} else {
			let seae = await getBuffer(`https://telegra.ph/file/16857796fab2ccb6cffc2.jpg`)
			tesk = `*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*


⚪ Corbiens River
🔵 Cochher Sea
⚫ Moobiens Grassland
🟣 Gerbil Woods
🟢 Chiltawa Woods
🟠 Limingstall Mountains
🔴 Chade Mountain

Example :
- ${prefix}jelajah corbiens river
`
			haruka.sendMessage(m.chat, { image :  seae, caption: tesk}, {quoted: m}) 
					}
			}
					break   
					case 'mancing':{
						if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
			setTimeout( () => {
			const fishing = Math.ceil(Math.random() * 10)
			addIkan(m.sender, fishing)
			m.reply(`*Congratulation 🎊*\n\n kamu mendapatkan *${fishing}* Ikan selama 2 menit`)
			}, 6000); //2 minute
			setTimeout( () => {
m.reply('Berhasil Mendapatkan Ikan . . .' )
}, 4000) // 1000 = 1s,
setTimeout( () => {
m.reply('🎣 Menarik Kail. . .' )
}, 3000) // 1000 = 1s,
setTimeout( () => {
m.reply('🎣 Mulai Memancing . . .')
			}, 0) // 1000 = 1s,
			}
					break   
					case 'jualikan':{
						if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
					bayar = args.join(' ')           
					const hargaIkan = 10000
					const hasil1 = bayar * hargaIkan
					if ( getMancingIkan(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} ikan kamu belum cukup, minimal 2 ikan`)
					if ( getMancingIkan(m.sender) >= 1 ) {
						jualIkan(m.sender, bayar)
						addKoinUser(m.sender, hasil1)
					await m.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah ikan dijual:* ${bayar}${enter}*Uang didapat:* ${hasil1}${enter}${enter}*Sisa ikan:* ${getMancingIkan(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
					}
					}
					break   
					
					case 'jualcoal':{
					if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
					bayar = args.join(' ')           
					const hargaCoal = 15000
					const hasil2 = bayar * hargaCoal
					if ( getMiningcoal(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} kamu tidak punya coal`)
					if ( getMiningcoal(m.sender) >= 1 ) {
						jualcoal(m.sender, bayar)
						addKoinUser(m.sender, hasil2)
					await m.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Coal dijual:* ${bayar}${enter}*Uang didapat:* ${hasil2}${enter}${enter}*Sisa coal:* ${getMiningcoal(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
					}
					}
					break   
					case 'lebur':{
					if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
					bayar = args.join(' ')           
					const hargaOre = 2
					const hasil3 = bayar * hargaOre
					if ( getMiningore(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} ore kamu belum cukup, minimal 2 ore`)
					if ( getMiningore(m.sender) >= 1 ) {
						jualore(m.sender, bayar)
						addIngot(m.sender, hasil3)
					await m.reply(`*「 LEBUR BERHASIL 」*\n\n*Jumlah Ore dilebur :* ${bayar}\n*Ingot didapat:* ${hasil3}\n\n*Sisa Ore:* ${getMiningore(m.sender)}`)
					}
					}
					break   
					case 'jualstone':{
					if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
					bayar = args.join(' ')           
					const hargaStone = 900
					const hasil4 = bayar * hargaStone
					if ( getMiningstone(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} stone kamu belum cukup, minimal 2 stone`)
					if ( getMiningstone(m.sender) >= 1 ) {
						jualstone(m.sender, bayar)
						addKoinUser(m.sender, hasil4)
					await m.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Batu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil4}${enter}${enter}*Sisa Batu:* ${getMiningstone(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
					}
					}
					break   
					case 'jualingot':{
					if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
					bayar = args.join(' ')           
					const hargaIngot = 35000
					const hasil5 = bayar * hargaIngot
					if ( getMiningingot(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} ingot kamu belum cukup, minimal 2 ingot`)
					if ( getMiningingot(m.sender) >= 1 ) {
						jualingot(m.sender, bayar)
						addKoinUser(m.sender, hasil5)
					await m.reply(`*「 PENJUALAN BERHASIL  」*${enter}${enter}*Jumlah Ingot dijual:* ${bayar}${enter}*Uang didapat:* ${hasil5}${enter}${enter}*Sisa Ingot:* ${getMiningingot(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
					}
					}
					break   
					case 'jualkayu':{
					if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
					bayar = args.join(' ')           
					const hargaKayu = 18000
					const hasil6 = bayar * hargaKayu
					if ( getNebangKayu(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} kayu kamu belum cukup, minimal 2 kayu`)
					if ( getNebangKayu(m.sender) >= 1 ) {
						jualkayu(m.sender, bayar)
						addKoinUser(m.sender, hasil6)
					await m.reply(`*「 PENJUALAN BERHASIL  」*${enter}${enter}*Jumlah Kayu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil6}${enter}${enter}*Sisa Kayu :* ${await getNebangKayu(m.sender)}${enter}*Sisa uang:* ${await checkATMuser(m.sender)}`)
					}
					}
					break   
					case 'nebang':{
			setTimeout( () => {
			const oreo = Math.ceil(Math.random() * 20)
			addKayu(m.sender, oreo)
			m.reply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${oreo}*kayu selama 2 menit`)
			}, 2000); //2 minute
			setTimeout( () => {
			reply('Sedang menebang, silahkan tunggu...')
			}, 0) //1sec
			}
					break   
case 'goplanet':{
			setTimeout( () => {
			const bertualang = Math.ceil(Math.random() * 100)
			const goplanet =['merkurius','venus','mars','jupiter','saturnus','neptunus','uranus']
			const planetari = goplanet[Math.floor(Math.random() * goplanet.length)]
			addPlanet(m.sender, bertualang)
			m.reply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${bertualang} bahan kimia dari  ${planetari}* selama 2 tahun`)
			}, 2000); //2 minute
			setTimeout( () => {
			reply('Sedang meroket 😱, silahkan tunggu... 2 tahun')
			}, 0) //1sec
			}
					break   
case 'jualbahankimia':{
					if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    if (!isPetualang) return reply('Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg')
    if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
					buayar= args.join(" ")
					const hargakimia = 1000
					const dapetin = buayar * hargakimia
					if ( getBertualangPlanet(m.sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya bahankimia`)
					if ( getBertualangPlanet(m.sender) >= 1 ) {
						jualbahankimia(m.sender, buayar)
						addKoinUser(m.sender, dapetin)
					await reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah bahankimia dijual:* ${buayar}${enter}*Uang didapat:* ${dapetin}${enter}${enter}*Sisa bahankimia:* ${getBertualangPlanet(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}${enter}${enter}`)
					}
					}
					break 
case 'chatgpt': case 'openai': case 'ai':{
           if (!text) return reply(`Kirim perintah:\n${prefix+command} query\n\nContoh penggunaan:\n${prefix+command} apa itu openai`)
            m.reply(mess.wait)
        try {
         const configuration = new Configuration({
            apiKey: setting.OpenAIKey,
          });
          const openai = new OpenAIApi(configuration);

          const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: q,
            temperature: 0.3,
            max_tokens: 3000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          m.reply(`${response.data.choices[0].text}\n\n`);
        } catch (err) {
          //console.log(err);
          m.reply("Uppsss... erorr\ncek kembali apikey openai kamu di config.json mungkin limit nya habis")
          //m.reply(JSON.stringify(err));
        }
      }
        limitAdd(m.sender, limit)
        break
case "image": case "img": case 'chatgptimg': case 'openaiimg': case 'aiimg':{
			if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
           if (!text) return reply(`Kirim perintah:\n${prefix+command} query\n\nContoh penggunaan:\n${prefix+command} kabbah`)
            reply(mess.wait)
 try {
            const configuration = new Configuration({
              apiKey: setting.OpenAIKey,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            haruka.sendMessage(m.chat, {image:{url: response.data.data[0].url},caption: ""}, {quoted:m});
            } catch (error) {
            m.reply(error.message);
        }
        limitAdd(m.sender, limit)
      }
        break
case "confess": case 'menfes': case 'menfess':{
  this.menfes = this.menfes ? this.menfes : {}
  roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))   
  if (roof) return reply("Kamu masih berada dalam sesi menfess")
	if (m.isGroup) return m.reply('Fitur Khusus Di private chat!')
			if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
			if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
			let [namaNya, nomorNya, pesanNya] = text.split`|`
			if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
			if(isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
			var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\n${prefix}balasmenfess -- _terima menfess/confess\n${prefix}tolakmenfess -- _tolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang, bot hanya menyampaikan saja_`
			let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
			const buttons = [{
               buttonId: `.balasmenfess ${m.sender}`,
               buttonText: {
                  displayText: '✍️ Balas'
               },
               type: 1
            },{
               buttonId: `.tolakmenfess ${m.sender}`,
               buttonText: {
                  displayText: 'Tolak 🤚'
               },
               type: 1
            }]
let id = m.sender
            this.menfes[id] = {
               id,
               a: m.sender,
               b: nomorNya + "@s.whatsapp.net",
               state: 'WAITING'
}
		 await haruka.sendMessage(nomorNya + '@s.whatsapp.net',  {image: tod, caption:yoi }, {})
           m.reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja di balas coy')
			}
			break  
			case 'balasmenfess': {
            roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))   
            if (!roof) return reply("Belum ada sesi menfess")
            find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
            let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
            let other = [room.a, room.b].find(user => user !== m.sender)
        find.b = m.sender
        find.state = 'CHATTING'
        this.menfes[find.id] = {...find}
            await haruka.sendMessage(other, {text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, mentions: [m.sender]})
            haruka.sendMessage(m.chat, {text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`})
        }
        break
         case 'tolakmenfess': {
            roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))   
            if (!roof) return reply("Belum ada sesi menfess")
            let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
            let other = [room.a, room.b].find(user => user !== m.sender)
            find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
            haruka.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
           // await haruka.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
        reply("Menfess berhasil di tolak 🤚")
        delete this.menfes[roof.id]
        }
        break
         case "stopconfess": case 'stopmenfess': {
         //   find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
            find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))   
            if (!find) return reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
            haruka.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
    await reply("ok")
    delete this.menfes[find.id]
        }
         break
            default:
            if ((budy) && ["p", "proses", "Proses", "P"].includes(budy) && !isCmd) {
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
			if (!m.quoted) return m.reply('Reply pesanan yang akan proses')
            let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
            const getTextP = getTextSetProses(m.chat, set_proses);
            if (getTextP !== undefined) {
            	var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
                haruka.sendTextWithMentions(m.chat, anunya, m)
            } else {
   haruka.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
            }


            if ((budy) && ["d", 'done', "Done", "D"].includes(budy) && !isCmd) {
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
			if (!m.quoted) return m.reply('Reply pesanan yang telah di proses')
            let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`            
            const getTextD = getTextSetDone(m.chat, set_done);
            if (getTextD !== undefined) {
            	var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
            	haruka.sendTextWithMentions(m.chat, anunya, m)
               } else {
               	haruka.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
   }

                if (budy.startsWith('=> ')) {
                    if (!isCreator) return m.reply(mess.OnlyOwner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(util.format(e))
                    }
                }

                if (budy.startsWith('> ')) {
                    if (!isCreator) return m.reply(mess.OnlyOwner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(util.format(err))
                    }
                }

                if (budy.startsWith('$ ')) {
                    if (!isCreator) return m.reply(mess.OnlyOwner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
if (m.mtype == 'viewOnceMessageV2') {
         if (!setting.antiViewOnce) return
         let msg = m.message.viewOnceMessageV2.message
         console.log(msg)
         let type = Object.keys(msg)[0]
         let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
         let buffer = Buffer.from([])
         for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk])
         }
let teks = `「 *ANTI VIEWONCE MESSAGE* 」
      
📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Makassar').format('HH:mm:ss')} WITA 
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

await haruka.sendTextWithMentions(m.chat, teks, m)
  await delay(500)
         if (/video/.test(type)) {
            return haruka.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
         }
         else if (/image/.test(type)) {
            return haruka.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
         }
      }
                
			if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
                    this.menfes = this.menfes ? this.menfes : {}
                    let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
                        let other = find.a == m.sender ? find.b : find.a
                        await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                participant: other
                            }
                        } : {})
                    }
                }
		
		if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
		
        }
        

    } catch (err) {
        //console.log(err)
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
