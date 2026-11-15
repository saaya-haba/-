/* MODE1は読み取るだけ。メモ閲覧中に本編の進行・数値は変更しません。 */
(() => {
'use strict';
const D=window.GAME_DATA,M=window.MODE2_DATA,root=document.querySelector('.game-screen');
const panel=document.createElement('section');panel.className='screen mode2-screen';panel.hidden=true;root.append(panel);
let record=null,active=false,all=false,last=null;
const state=()=>window.GameDebug.getState();
function reset(s){record={character:s.character,scenes:new Set(),choices:new Set(),interactions:new Set(),transport:new Set(),read:new Set()};}
function observe(s){if(!s)return;if(!record||record.character!==s.character)reset(s);last=s;if(!['playing','story'].includes(s.phase)&&!s.finished)return;record.scenes.add(s.scene);for(const id of s.history)record.scenes.add(id);}
document.addEventListener('click',e=>{
 if(active)return;const before=state(),b=e.target.closest('button'),start=b&&/^(hana|aoi|rio)StartButton$/.test(b.id);
 if(before&&record&&b&&before.phase==='playing'){
  record.choices.add(before.scene+'\0'+b.textContent.trim());if(b.dataset.target==='interact')record.interactions.add(before.scene);
 }
 queueMicrotask(()=>{const after=state();if(start&&after)reset(after);observe(after);if(before&&after&&record&&before.scene!==after.scene){const pairs={'f1-16':['glass','hanaGlassInside','f5-22','rioGlassInside'],'f1-9':['staff','hanaStaffInside','f5-74','rioElevatorArrival1'],'f1-15':['escalator','f5-30','f9-77']};const p=pairs[before.scene];if(p&&p.slice(1).includes(after.scene))record.transport.add(p[0]);}});
},true);
function el(tag,text,cls){const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n;}
function button(text,fn,cls='m2-return'){const b=el('button',text,cls);b.type='button';b.onclick=fn;return b;}
function seen(card){const x=card.seen||{},s=last;return !!((x.transport&&record.transport.has(x.transport))||(x.anyScenes||[]).some(k=>record.scenes.has(k))||(x.interactions||[]).some(k=>record.interactions.has(k))||(x.choices||[]).some(k=>record.choices.has(k.scene+'\0'+k.text))||(x.flag&&s.flags[x.flag])||(x.food&&s.flags.rioFood===x.food&&(!x.received||s.flags.rioReceived))||(x.restLabels||[]).some(k=>(s.recap.rests||[]).some(r=>r.label===k||r.title===k)));}
const character=()=>M.characters[record.character];
function header(){panel.replaceChildren();const p=el('div',null,'m2-person'),img=el('img');img.src=character().portrait;img.alt='';p.append(img,el('span',character().name+'のMODE2'));panel.append(p);}
function close(){active=false;panel.hidden=true;panel.style.display='none';root.classList.remove('mode2-active');document.getElementById('resultScreen').hidden=false;}
function list(){header();panel.append(button('クリア画面へ戻る',close),el('h2','見つけていない場所・選択のメモ'),el('p','本編で選ばなかった道や席を、写真と短いメモで見てみよう。'));
 const filters=el('div',null,'m2-filters');for(const [label,value]of [['本編で見ていない',false],['すべてのメモ',true]]){const b=button(label,()=>{all=value;list();},'');b.setAttribute('aria-pressed',String(all===value));filters.append(b);}panel.append(filters);
 const cards=character().cards.filter(c=>all||!seen(c));if(!cards.length)panel.append(el('p','見逃したメモはなかったよ。「すべてのメモ」で見直せるよ。','m2-empty'));
 for(const [group,label]of Object.entries(M.groups)){const entries=cards.filter(c=>c.group===group);if(!entries.length)continue;panel.append(el('h3',label));for(const c of entries){const b=button('',()=>detail(c),'m2-card'),img=el('img');img.src=photo(c.slides[0]).photo||'background.jpeg';img.alt='';const t=el('span',null,'m2-card-text');t.append(el('strong',c.title),el('small',seen(c)?'本編で確認済み':'本編で見ていない'));if(record.read.has(c.id))t.append(el('small','メモを見た'));b.append(img,t);panel.append(b);}}
 panel.append(window.GAME_SURVEY.createButton());
}
function photo(slide){return D.characters[record.character].scenes[slide.scene]||{};}
function detail(card,index=0,original=false){record.read.add(card.id);header();panel.append(button('メモ一覧へ',list),el('h2',card.title));const slide=card.slides[index],n=photo(slide),wrap=el('div',null,'m2-photo-wrap'),img=el('img',null,'m2-photo');img.src=n.photo||'background.jpeg';img.alt=slide.caption||card.title;wrap.append(img);
 if(record.character==='aoi'&&!original){const v={...D.characters.aoi.vision,...n.vision};img.style.filter=`blur(${v.blur}px)`;const shadow=el('div',null,'m2-shadow');shadow.style.background=`radial-gradient(ellipse at center,rgba(0,0,0,${v.darkness}) 0%,transparent ${v.size}%)`;wrap.append(shadow);}panel.append(wrap);
 if(card.slides.length>1){const controls=el('div',null,'m2-photo-controls'),prev=button('前の写真',()=>detail(card,index-1,original)),next=button('次の写真',()=>detail(card,index+1,original));prev.disabled=index===0;next.disabled=index===card.slides.length-1;controls.append(prev,el('span',`${index+1} / ${card.slides.length}`),next);panel.append(controls);}
 if(record.character==='aoi')panel.append(button(original?'あおいの見え方に戻す':'元の写真を見る',()=>detail(card,index,!original),'m2-vision'));
 if(slide.caption)panel.append(el('p',slide.caption,'m2-caption'));const memo=el('div',null,'m2-memo'),ul=el('ul');for(const t of card.memo)ul.append(el('li',t));memo.append(ul);panel.append(memo,button('メモ一覧へ',list),window.GAME_SURVEY.createButton());
}
document.getElementById('mode2Button').onclick=()=>{const s=state();if(!s||!s.finished)return;observe(s);active=true;all=false;document.getElementById('resultScreen').hidden=true;root.classList.add('mode2-active');panel.hidden=false;panel.style.display='block';list();};
})();
