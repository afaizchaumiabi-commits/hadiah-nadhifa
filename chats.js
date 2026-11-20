(function(){const s=document.createElement('style');s.textContent=`
.wa{width:min(320px,88vw);height:min(540px,62vh);display:flex;flex-direction:column;border-radius:22px;overflow:hidden;font:15px/1.3 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#e9edef;background:#0b141a;box-shadow:0 18px 50px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.08);text-align:left}
.wa-h{display:flex;align-items:center;gap:10px;padding:10px 12px 10px 10px;background:#0b141a;border-bottom:1px solid rgba(255,255,255,.06);flex:none}
.wa-h svg{width:22px;height:22px;fill:#e9edef;flex:none}
.wa-h i{width:34px;height:34px;border-radius:50%;flex:none;background:url(foto/f01.jpg) center/cover,linear-gradient(135deg,#ff9fb8,#c9b6ff)}
.wa-h b{flex:1;min-width:0;font-size:16px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.wa-h .ic{display:flex;gap:16px;align-items:center}
.wa-b{flex:1;min-height:0;display:flex;flex-direction:column;justify-content:flex-end;padding:8px 8px 10px;overflow:hidden;background:radial-gradient(circle at 15% 20%,rgba(255,255,255,.035),transparent 45%),radial-gradient(circle at 85% 70%,rgba(255,255,255,.03),transparent 40%),#0b141a}
.wa-d{align-self:center;margin:2px 0 8px;padding:4px 10px;border-radius:8px;background:#182229;color:#8696a0;font-size:12px}
.wa-m{position:relative;max-width:82%;margin-top:2px;padding:6px 8px 5px 10px;border-radius:12px;word-wrap:break-word;animation:waIn .45s both;animation-delay:calc(var(--i)*.55s + .25s)}
.wa-m.first{margin-top:7px}
.wa-m span{float:right;margin:7px 0 -1px 12px;font-size:11px;color:#8696a0;white-space:nowrap}
.wa-m.her{align-self:flex-start;background:#1f2c34}.wa-m.her.first{border-top-left-radius:3px}
.wa-m.me{align-self:flex-end;background:#144d37}.wa-m.me.first{border-top-right-radius:3px}
.wa-m.me span{color:#a4bdb4}.wa-m.me span:after{content:' \\2713\\2713';letter-spacing:-3px;margin-left:3px}
.wa-f{display:flex;align-items:center;gap:8px;padding:8px 10px 10px;background:#0b141a;flex:none}
.wa-f div{flex:1;display:flex;align-items:center;gap:10px;height:42px;padding:0 14px;border-radius:21px;background:#1f2c34;color:#8696a0;font-size:15px}
.wa-f div span{flex:1}.wa-f svg{width:21px;height:21px;fill:#8696a0;flex:none}
.wa-f em{width:42px;height:42px;border-radius:50%;background:#21c063;display:grid;place-items:center;flex:none}.wa-f em svg{fill:#0b141a;width:22px;height:22px}
@keyframes waIn{from{opacity:0;transform:translateY(14px) scale(.96)}}
@media(prefers-reduced-motion:reduce){.wa-m{animation:none}}
`;document.head.appendChild(s)})();
const esc=t=>t.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const IC={back:'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z',vid:'M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11z',call:'M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02z',more:'M12 8a2 2 0 100-4 2 2 0 000 4zm0 2a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4z',mic:'M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm5-3a5 5 0 01-10 0H5a7 7 0 006 6.92V21h2v-3.08A7 7 0 0019 11z',cam:'M9 3L7.17 5H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-3.17L15 3zm3 15a5 5 0 110-10 5 5 0 010 10z',clip:'M16.5 6v11.5a4 4 0 01-8 0V5a2.5 2.5 0 015 0v10.5a1 1 0 01-2 0V6H10v9.5a2.5 2.5 0 005 0V5a4 4 0 00-8 0v12.5a5.5 5.5 0 0011 0V6z',emo:'M12 2a10 10 0 100 20 10 10 0 000-20zm-3.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 18c-2.33 0-4.31-1.46-5.11-3.5h10.22C16.31 16.54 14.33 18 12 18z'},sv=k=>`<svg viewBox="0 0 24 24"><path d="${IC[k]}"/></svg>`;
function chatCardHTML(c){let p='';return `<div class="wa"><div class="wa-h">${sv('back')}<i></i><b>semestaku tercinta 🩶</b><div class="ic">${sv('vid')}${sv('call')}${sv('more')}</div></div><div class="wa-b"><div class="wa-d">${c.d}</div>${c.m.map((m,k)=>{const f=m.s!==p?' first':'';p=m.s;return `<div class="wa-m ${m.s}${f}" style="--i:${k}">${esc(m.x)}<span>${m.t}</span></div>`}).join('')}</div><div class="wa-f"><div>${sv('emo')}<span>Ketik pesan</span>${sv('clip')}${sv('cam')}</div><em>${sv('mic')}</em></div></div>`}
window.CHATS=[{"d": "11/10/2026", "m": [{"s": "me", "t": "20.22", "x": "akuu banggaa dengernyaa"}, {"s": "me", "t": "20.22", "x": "beliii mamnyaa yaa sayangg"}, {"s": "me", "t": "20.22", "x": "goodjobb"}, {"s": "me", "t": "20.22", "x": "aku bangga sama kamu"}, {"s": "me", "t": "20.22", "x": "semangatt sayang"}, {"s": "her", "t": "20.33", "x": "belum jalann"}]}, {"d": "23/09/2026", "m": [{"s": "her", "t": "08.57", "x": "aku selalu percaya sama kamu"}, {"s": "me", "t": "09.02", "x": "makasihh sayangkuu"}, {"s": "me", "t": "09.03", "x": "semangatt bekerjanyaa sayaanggkuuu kasihkuu"}, {"s": "me", "t": "09.03", "x": "semogaa lancarr yaawww"}, {"s": "me", "t": "09.04", "x": "sudahh di pusdatin sayangg"}, {"s": "me", "t": "09.07", "x": "akuu jugaa selaluu percayaa sayangg samaa kamuu"}]}, {"d": "02/08/2026", "m": [{"s": "her", "t": "15.56", "x": "makasih sayangg"}, {"s": "her", "t": "15.56", "x": "selaluu baik sama aku"}, {"s": "me", "t": "16.19", "x": "samaa-samaa sayangkuuu"}, {"s": "me", "t": "16.20", "x": "maacii jugaa yaa"}, {"s": "her", "t": "16.21", "x": "sayang lagi apaa"}, {"s": "me", "t": "16.24", "x": "lagi kangenin kamu cintaky"}]}, {"d": "23/09/2026", "m": [{"s": "her", "t": "01.25", "x": "sunyi banget gada kamu"}, {"s": "her", "t": "01.25", "x": "semoga kamu ga macem macem ya"}, {"s": "her", "t": "01.25", "x": "aku selalu sayang kamu"}, {"s": "her", "t": "01.25", "x": "selamat istirahat sayang"}, {"s": "me", "t": "06.33", "x": "halloww sayangkuu"}, {"s": "me", "t": "06.33", "x": "selamat pagi sayangg"}]}, {"d": "12/11/2026", "m": [{"s": "her", "t": "01.14", "x": "ngantuk akuus"}, {"s": "me", "t": "01.14", "x": "yukkk bobooo sayangv"}, {"s": "her", "t": "01.14", "x": "selamat istirahat sayangkuu"}, {"s": "me", "t": "01.14", "x": "jangann terlaluu dipikirinn yaa"}, {"s": "me", "t": "01.14", "x": "selamatt istirahatt jugaa cintakuu"}, {"s": "her", "t": "06.01", "x": "halo sayangg"}]}, {"d": "06/07/2026", "m": [{"s": "her", "t": "01.44", "x": "selamat istirahat sayangkuuu"}, {"s": "her", "t": "07.30", "x": "selamat pagi sayanggg"}, {"s": "her", "t": "07.30", "x": "aku sudah bangunn"}, {"s": "me", "t": "07.52", "x": "sayangg hallowww"}, {"s": "me", "t": "07.52", "x": "selamatt pagii jugaaa"}, {"s": "me", "t": "07.52", "x": "akuu juhaa sudahh bangunn"}]}, {"d": "07/09/2026", "m": [{"s": "her", "t": "08.21", "x": "papaiii"}, {"s": "me", "t": "08.25", "x": "sayangg"}, {"s": "me", "t": "08.25", "x": "semangatt yaww cantikkuu"}, {"s": "me", "t": "08.25", "x": "yuu akuu jugaa jalann"}, {"s": "me", "t": "08.25", "x": "hatii-hatii sayangg"}, {"s": "me", "t": "08.36", "x": "sayangg"}]}, {"d": "07/11/2026", "m": [{"s": "her", "t": "10.03", "x": "alhamdulillah bobo panjang ya"}, {"s": "her", "t": "10.03", "x": "mam apa sayanggg"}, {"s": "her", "t": "10.03", "x": "tadi aku jg abis mam"}, {"s": "her", "t": "10.04", "x": "mam tahu bakso dan kentang"}, {"s": "me", "t": "10.19", "x": "selamatt mamamammm sayaangkuu"}, {"s": "me", "t": "10.19", "x": "pinternyaa sayangkuu"}]}, {"d": "15/11/2026", "m": [{"s": "her", "t": "07.41", "x": "sayang udah sampeee"}, {"s": "her", "t": "07.58", "x": "sayangkuu"}, {"s": "her", "t": "07.59", "x": "aku kerja dlu ya masukkj"}, {"s": "her", "t": "07.59", "x": "papaiii sayangkuuu"}, {"s": "her", "t": "07.59", "x": "selamat istirahat"}, {"s": "me", "t": "09.10", "x": "halloww sayangg"}]}, {"d": "21/09/2026", "m": [{"s": "me", "t": "22.50", "x": "semangatt yaa sayangg"}, {"s": "me", "t": "22.51", "x": "aku mau ke toilet sebentar terus istirahat yuukk"}, {"s": "her", "t": "22.51", "x": "belum mau istirahat sayang"}, {"s": "her", "t": "22.51", "x": "mkst akuu blm mau call, mau istirahat dlu boleh?"}, {"s": "me", "t": "22.51", "x": "ndapapaa sayangg, nantii ajaa bolehh callnyaaa"}, {"s": "her", "t": "22.57", "x": "maaciii sayanggg"}]}, {"d": "11/10/2026", "m": [{"s": "me", "t": "22.21", "x": "i cann recharge you're energyy babyy"}, {"s": "me", "t": "22.21", "x": "belii mamm apaa sayangg"}, {"s": "me", "t": "22.22", "x": "sayangg inii lagi benerin pintu toilet belakangg, engselnya rusakk"}, {"s": "me", "t": "22.25", "x": "selamatt mamamm gadiiss manisskuu"}, {"s": "me", "t": "22.25", "x": "iiiii nantii lemess ndaa mamm nasi dan belum di pijet aku"}, {"s": "her", "t": "22.33", "x": "maaaciii sayanggg🥹"}]}, {"d": "10/11/2026", "m": [{"s": "her", "t": "08.41", "x": "sayanggg"}, {"s": "her", "t": "08.41", "x": "baru sampe"}, {"s": "her", "t": "08.41", "x": "hati hati kamu sayangg"}, {"s": "me", "t": "08.46", "x": "semsngatt sayanggkuu"}, {"s": "her", "t": "08.52", "x": "maaciii sayangg"}, {"s": "her", "t": "08.52", "x": "kamu juga ya"}]}];

(function(){const s=document.createElement('style');s.textContent=`
.ws{display:grid;grid-template-columns:30px auto;column-gap:8px;row-gap:3px;width:max-content;max-width:230px;font:13px/1.3 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#e9edef;text-align:left}
.ws i{grid-row:1/3;width:30px;height:30px;border-radius:50%;background:url(foto/f01.jpg) center/cover,linear-gradient(135deg,#ff9fb8,#c9b6ff);box-shadow:0 0 0 1px rgba(255,255,255,.15)}
.ws.me i{background:linear-gradient(135deg,#7fc8ff,#6a8cff)}
.ws b{font-size:12.5px;font-weight:700;color:#fff;white-space:nowrap;align-self:end}.ws b em{font-style:normal;color:#aebac1;margin:0 4px}
.ws p{margin:0;padding:7px 10px 5px;border-radius:4px 14px 14px 14px;background:#1f2c34;box-shadow:0 6px 18px rgba(0,0,0,.45)}
.ws.me p{background:#144d37;border-radius:14px 4px 14px 14px}
.ws p span{float:right;margin:6px 0 0 10px;font-size:10.5px;color:#9aa8b0;white-space:nowrap}.ws p span:before{content:'\\2605 '}
.ws.me p span:after{content:' \\2713\\2713';color:#53bdeb}
`;document.head.appendChild(s)})();
function starHTML(m){const me=m.s==='me',N='semestaku tercinta \u{1FA76}',A='Anda';return `<div class="ws ${m.s}"><i></i><b>${me?A:N}<em>\u25B8</em>${me?N:A}</b><p>${esc(m.x)}<span>${m.t}</span></p></div>`}
window.STAR=[
{
"s": "her",
"t": "23.59",
"x": "maacii sayang sudah mau membaca dan membalas semua cerita aku, aku senang sekaliii"
},
{
"s": "her",
"t": "11.44",
"x": "semangat sayang aku dukung kamu selaluuu dari sinii"
},
{
"s": "her",
"t": "00.35",
"x": "selamat istirahat sayang semoga nyenyak bobo nyaa"
},
{
"s": "her",
"t": "22.11",
"x": "i lovee u more sayangku makasih banyakk yaaw"
},
{
"s": "her",
"t": "11.29",
"x": "alhamdulillah kerennn banget kamu, aku banggaa"
},
{
"s": "her",
"t": "15.21",
"x": "sayangkuuu semangattt ya kerjanyaaa"
},
{
"s": "her",
"t": "19.40",
"x": "hati hatii sayangku semangat kerjanya"
},
{
"s": "her",
"t": "12.05",
"x": "semangattt sayangg dijalan hati hati yaaa"
},
{
"s": "her",
"t": "19.12",
"x": "boleh kok, selamat istirahat sayangkuuu"
},
{
"s": "her",
"t": "23.59",
"x": "maacii sayang sudah mau membaca dan membalas semua cerita aku, aku senang sekaliii"
},
{
"s": "her",
"t": "14.14",
"x": "sayang alhamdulillah semangat yaa kerjanyaa"
},
{
"s": "me",
"t": "01.32",
"x": "aku bahagia selalu bisa istirahat sama kamu"
},
{
"s": "me",
"t": "01.32",
"x": "kalau aku pasti mimpi kamu, wanita paling indah dihidup aku"
},
{
"s": "me",
"t": "14.19",
"x": "aku yang peluk kamu sayangku, peluk kamu yang erat gaakan dilepasinn"
},
{
"s": "me",
"t": "02.30",
"x": "i love you so much sayang"
},
{
"s": "me",
"t": "00.48",
"x": "aku selaluu sayangg sama kamuu dan spark akuu kekamuu selaluu penuhh sayangg, gaakann adaa kondisii aku bosenn kasihku sayangkuu"
},
{
"s": "me",
"t": "08.08",
"x": "ndapapaa sayaangg, kamu capeee, aku justruu bahagiaa kamu bisaa istirahatt dengan nyaman, pinterr sayangku"
},
{
"s": "me",
"t": "23.24",
"x": "aku sangat kangen kamu"
},
{
"s": "me",
"t": "05.28",
"x": "halloww cantikkuu"
},
{
"s": "me",
"t": "17.04",
"x": "aaaa cantikkk bangett pacaerkuu sayangggg"
},
{
"s": "me",
"t": "11.03",
"x": "selaluuu cantikk siiii pacarrkuu"
},
{
"s": "me",
"t": "11.55",
"x": "makasih juga sudah mau obrolin semuanya ke aku sayangg"
},
{
"s": "me",
"t": "14.54",
"x": "makasihh yaa sudahh percayaa samaa akuuu"
},
{
"s": "me",
"t": "18.42",
"x": "maaciii pappnyaaa cantiikkuuu sayanggg"
},
{
"s": "me",
"t": "19.01",
"x": "semangatt bekerjaaanyaaa sayaangkuuu cintakuu"
},
{
"s": "me",
"t": "07.11",
"x": "kamuu hebatt bangett, aku bangga banget sama kamu"
},
{
"s": "me",
"t": "13.07",
"x": "pinternyaa sayang, aku bangga sama kamu"
},
{
"s": "me",
"t": "01.24",
"x": "akuu banggaa bangett kamu sudah ngejalaninn harinyaa sayangku, goodd jobbb"
},
{
"s": "me",
"t": "23.05",
"x": "happy 365 sayangg sudahh benerr kamuu, maacii yaa sayangg"
},
{
"s": "me",
"t": "00.50",
"x": "aku banggaa banget sama kamu sayanh"
},
{
"s": "me",
"t": "13.30",
"x": "aku bahagiaa dengernyaa sayangg"
}
];
