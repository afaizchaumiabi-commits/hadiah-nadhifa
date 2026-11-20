(function(){const s=document.createElement('style');s.textContent=`
.wa{width:272px;border-radius:18px;overflow:hidden;font:14px/1.35 system-ui,-apple-system,'Segoe UI',sans-serif;background:#0b141a;color:#e9edef;box-shadow:0 18px 50px rgba(0,0,0,.55);text-align:left;border:1px solid rgba(255,255,255,.08)}
.wa-h{display:flex;align-items:center;gap:10px;padding:10px 12px;background:#202c33}
.wa-h i{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#ff9fb8,#c9b6ff);display:grid;place-items:center;font-style:normal;font-size:17px}
.wa-h b{display:block;font-size:14.5px;font-weight:600}.wa-h small{font-size:11px;color:#8696a0}
.wa-b{padding:10px 10px 12px;display:flex;flex-direction:column;gap:4px;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.03),transparent 40%),#0b141a}
.wa-d{align-self:center;margin:2px 0 6px;padding:4px 10px;border-radius:8px;background:#182229;color:#8696a0;font-size:11px}
.wa-m{max-width:80%;padding:6px 8px 4px;border-radius:9px;word-wrap:break-word}
.wa-m span{float:right;margin:6px 0 0 10px;font-size:10px;color:#ffffff99;white-space:nowrap}
.wa-m.me{align-self:flex-end;background:#005c4b;border-top-right-radius:2px}.wa-m.her{align-self:flex-start;background:#202c33;border-top-left-radius:2px}
.wa-m.me span:after{content:' ✓✓';color:#53bdeb}
`;document.head.appendChild(s)})();
const esc=t=>t.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function chatCardHTML(c){return `<div class="wa"><div class="wa-h"><i>🩶</i><div><b>semestaku tercinta 🩶</b><small>online</small></div></div><div class="wa-b"><div class="wa-d">${c.d}</div>${c.m.map(m=>`<div class="wa-m ${m.s}">${esc(m.x)}<span>${m.t}</span></div>`).join('')}</div></div>`}
window.CHATS=/*CHATS*/[];
