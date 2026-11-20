import re,json,os,glob
D=os.path.dirname(os.path.abspath(__file__))
os.chdir(D)
# ---- statistik chat ----
stats=json.load(open('stats.json'))
letter=[ (p[0].upper()+p[1:]+('' if p.rstrip().endswith('🤍') else '.')) for p in open('letter.txt',encoding='utf-8').read().strip().split('\n')]
msgs=["semangattt bekerjanya cantikku","hati-hati di jalannya sayang","selamat istirahat sayangku","bukan salah kamu sayang, kamu sama sekali gasalah","aku juga selalu percaya sayang sama kamu","halloww cantikku sayang","aku sangat kangen kamu","semoga lancar kerjanya sayang","senyamannya kamu sayang, aku aman saja","selamat pagi sayang, semangat ya hari ini"]
# ---- media.js ----
ext=('.jpg','.jpeg','.png','.webp')
fotos=sorted('foto/'+f for f in os.listdir('foto') if f.lower().endswith(ext))
vids=sorted('video/'+f for f in os.listdir('video') if f.lower().endswith('.mp4'))
sync=sorted('foto/'+f for f in os.listdir('foto') if f.startswith('L') and f.lower().endswith(ext))
fotos=[f for f in fotos if not f.startswith('foto/L')]
open('media.js','w').write('window.MEDIA='+json.dumps({'fotos':fotos,'videos':vids,'sync':sync})+';')
src=json.load(open('chats_src.json'));pk=[6,20,21,38,35,32,31,7,5,25,19,1]
ch=[{'d':src[i][0]['d'],'m':[{'s':m['s'],'t':m['t'],'x':m['x']} for m in src[i]]} for i in pk]
open('chats.js','w',encoding='utf-8').write(open('chats_tpl.js',encoding='utf-8').read().replace('/*CHATS*/[]',json.dumps(ch,ensure_ascii=False)).replace('/*STAR*/[]',open('star.json',encoding='utf-8').read()))
h=open('index.template.html',encoding='utf-8').read()
h=h.replace('/*LETTER*/[]',json.dumps(letter,ensure_ascii=False)).replace('/*MSGS*/[]',json.dumps(msgs,ensure_ascii=False)).replace('/*STATS*/{}',json.dumps(stats))
open('index.html','w',encoding='utf-8').write(h)
print('fotos',len(fotos),'videos',len(vids))
