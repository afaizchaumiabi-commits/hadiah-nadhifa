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
window.CHATS=/*CHATS*/[];

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
window.STAR=/*STAR*/[];
