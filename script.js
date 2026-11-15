/* 進行処理。写真・セリフ・数値の編集は game-data.js を参照してください。 */
(() => {
'use strict';
const $=id=>document.getElementById(id), D=window.GAME_DATA, root=document.querySelector('.game-screen');
let selected=null, s=null, step=0, speechManuallyHidden=false;
const play=document.createElement('section');play.id='playScreen';play.hidden=true;
play.innerHTML=`<div id="photoFrame" class="photo-frame"><img id="sceneImage" class="scene-photo" alt=""><div id="centralShadow" class="central-shadow" hidden></div><div id="paths" class="paths"></div></div>
<header class="play-header"><strong id="mission"></strong><time id="clock"></time></header><div id="placeLabel" class="place-label"></div>
<div class="play-message"><div class="speech-content"><p id="sceneText" aria-live="polite"></p><div id="eventActions"></div></div></div>
<footer class="play-footer"><button id="avatar" aria-label="人物の説明"><img id="avatarImage" alt=""></button><button id="hint">ヒント</button><div class="footer-right"><button id="back">1つ戻る</button><div id="fatigue"><label for="fatigueBar">疲労 <span id="fatigueValue"></span></label><progress id="fatigueBar" max="100" value="0"></progress></div></div></footer>
<button id="leaveGame" class="leave-game">タイトルへ</button><div id="tutorial" class="tutorial" hidden><div class="tutorial-bubble"><small id="tutorialCount"></small><h3 id="tutorialTitle"></h3><p id="tutorialText"></p><span>画面をタップして次へ</span></div></div>
<button id="tapContinue" class="tap-continue" aria-label="画面をタップして進む" hidden></button><div id="missionReady" class="mission-ready" hidden><div class="mission-box"><h2>ミッション</h2><p id="readyMission" class="mission-text"></p><button id="beginMission" type="button">始める</button></div></div><dialog id="gameDialog"><h2 id="dialogTitle"></h2><p id="dialogText"></p><button id="closeDialog">閉じる</button></dialog>`;
root.appendChild(play);
const result=document.createElement('section');result.id='resultScreen';result.className='screen result-area';result.hidden=true;
result.innerHTML=`<h2>ミッションクリア！</h2><p id="resultSummary"></p><section id="recapSection" hidden><h3 id="recapTitle"></h3><ul id="recapList"></ul></section><p id="deadlineSummary"></p><form id="reflectionForm"><label for="reflection">どんな設備や周囲の配慮があれば、もっと授業を受けやすくなると思いますか？</label><textarea id="reflection" required maxlength="2000" rows="6" placeholder="あなたが考えた解決策を書いてください"></textarea><p>送信した回答は、同じキャラクターを遊んだ人に匿名で共有されます。</p><button type="submit">回答を送信する</button></form><p id="saveStatus" role="status"></p><button id="mode2Button" type="button">MODE2へ</button><div id="answers" hidden><h3>同じキャラクターを遊んだ人の解決策</h3><div id="answerList"></div></div><button id="resultHome">タイトルへ戻る</button>`;
root.appendChild(result);
// 送信前・送信後のどちらも、回答一覧の下／タイトルへ戻るの上に表示。
result.insertBefore(window.GAME_SURVEY.createButton(),$('resultHome'));
function hide(){document.querySelectorAll('.screen').forEach(x=>x.style.display='none');$('characterInfo').style.display='none';play.hidden=true;result.hidden=true;$('missionReady').hidden=true;$('tapContinue').hidden=true;root.classList.remove('playing');}
function screen(id,display='block'){hide();$(id).style.display=display;}
function button(label,fn){const b=document.createElement('button');b.textContent=label;b.onclick=fn;return b;}
function para(text){const p=document.createElement('p');p.textContent=text;return p;}
$('startButton').onclick=()=>screen('introScreen');$('nextButton').onclick=()=>screen('characterScreen');
document.querySelectorAll('.character-item').forEach(item=>{
 const id=item.dataset.character;
 item.tabIndex=0;item.setAttribute('role','button');item.onclick=()=>{selected=id;const c=D.characters[id];$('infoName').textContent=`${c.name}(${c.age})`;$('infoText').replaceChildren(...c.description.map(t=>para('・'+t)));$('characterInfo').style.display='flex';};
 item.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();item.click();}};
});
$('backButton').onclick=()=>$('characterInfo').style.display='none';
$('decideButton').onclick=()=>{if(!D.characters[selected])return;const id=selected+'MissionScreen';$(id).querySelector('.mission-title').textContent='～Mission～';$(id).querySelector('.mission-text').textContent=D.characters[selected].mission;screen(id,'flex');};
const mins=t=>{const [h,m]=t.split(':').map(Number);return h*60+m;};
const time=n=>`${String(Math.floor(n/60)%24).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;
const character=()=>D.characters[s.character];
function start(id){const c=D.characters[id];s={character:id,scene:c.start,history:[],fatigue:0,elapsed:0,moves:0,flags:{},recap:{transports:[],seats:[],rests:[],maps:[],actions:[]},finished:false,phase:'tutorial'};hide();root.classList.add('playing');play.hidden=false;$('avatarImage').src=c.portrait;$('avatarImage').alt=c.name;render();step=0;tutorial();}
$('hanaStartButton').onclick=()=>start('hana');$('aoiStartButton').onclick=()=>start('aoi');$('rioStartButton').onclick=()=>start('rio');
function cost(c={}){s.fatigue=Math.max(0,s.fatigue+(c.fatigue||0));s.elapsed+=c.minutes||0;}
function travel(c={}){s.moves++;const scene=character().scenes[s.scene],r={...character().rules,...scene.rules};if(s.moves%r.movesPerStep===0)cost({fatigue:r.fatiguePerStep,minutes:r.minutesPerStep});cost(c);cost(scene.entryCost);}
function move(id,c={}){if(!character().scenes[id]||s.finished||s.phase!=='playing')return;if(s.character==='rio'){if(id==='f9-110'&&['f9-109','f9-116'].includes(s.scene))s.flags.rioLoungeReturn=s.scene;if(id==='f9-150'&&['f9-143','f9-147'].includes(s.scene))s.flags.rioShopReturn=s.scene;}if(id==='f5-66'&&['f5-22','f5-65'].includes(s.scene))s.flags.map66From22=s.scene==='f5-22';if(id==='f5-31'&&['f5-30','f5-32'].includes(s.scene))s.flags.room31Return=s.scene;if(s.character==='aoi'&&id==='classroom'&&s.flags.classroomEntry==='classroomFront')id='classroomFront';if(id==='map'&&s.scene.startsWith('f5-'))s.flags.mapReturn=s.scene;if(s.scene==='mapNear'&&id==='hall5')id=s.flags.mapReturn||'f5-23';recordRecapTransport(s.scene,id);s.history.push(s.scene);s.scene=id;travel(c);trackFloor(id);render();}
function status(){$('clock').textContent=time(mins(character().startTime)+s.elapsed);$('fatigueValue').textContent=s.fatigue;$('fatigueBar').value=Math.min(100,s.fatigue);}
function displayScene(){return s.scene==='f5-66'&&s.flags.map66From22?character().scenes.map22Attempt:character().scenes[s.scene];}
function render({interacting=false}={}){
 speechManuallyHidden=false;recordRecapScene();
 const c=character(),n=displayScene();$('mission').textContent=c.mission;$('placeLabel').textContent=n.title;$('sceneText').textContent=n.text||(n.photoLabel?'':(n.rest?'ここで少し休憩できそう。':'周囲を確かめて進もう。'));$('tapContinue').hidden=true;
 const img=$('sceneImage');img.src=(s.character==='aoi'&&s.scene==='teacher'?c.scenes[s.flags.classroomEntry||'classroom'].photo:n.photo)||'background.jpeg';img.onerror=()=>{img.hidden=true;$('photoFrame').classList.add('photo-missing');layoutPhoto();};img.onload=()=>{img.hidden=false;$('photoFrame').classList.remove('photo-missing');layoutPhoto();};
 const v=s.character==='aoi'?{...c.vision,...n.vision}:null;$('sceneImage').style.filter=v?`blur(${v.blur}px)`:'none';$('centralShadow').hidden=!v;if(v){$('centralShadow').style.setProperty('--darkness',v.darkness);$('centralShadow').style.setProperty('--shadow-size',v.size+'%');}
 if(s.character==='rio')img.style.filter=rioFilter(n.effect);
 $('paths').replaceChildren(...(n.hotspots||[]).map(h=>{const b=button('',()=>activateSpot(h));b.className='photo-hotspot';b.setAttribute('aria-label',h.label||'先へ進む');b.dataset.target=h.target;b.style.left=h.x+'%';b.style.top=h.y+'%';b.style.setProperty('--dot-size',(h.size||24)+'px');return b;}));
 const a=[],add=(label,fn)=>a.push(button(label,fn));
 switch(n.interactionOnly&&!interacting?null:n.event){
 case 'hanaGlassChoice':add('待って乗る',()=>move('hanaGlassInside',c.costs.glassWait));break;
 case 'tapRoute':showLines(n.tapLines,()=>{if(n.displayOnly){s.scene=n.tapTarget;render();}else move(n.tapTarget,n.tapCost);});break;
 case 'hanaSeat':add('はい',()=>move(n.deskScene));add('いいえ',()=>move('classroom'));break;
 case 'hanaDesk':add('自力で動かす',()=>move(n.selfScene,c.costs.desk));add('隣の人に声をかける',()=>move(n.helpScene,c.costs.desk));break;
 case 'hanaTap':tapNext(()=>{if(n.clear)finish();else if(n.next==='classroom')move(n.next);else{s.scene=n.next;render();}});break;
 case 'rioNotice':tapNext(()=>move(n.returnTarget));break;
 case 'rioCurtain':add('はい',()=>move(n.curtainScene,c.costs.curtainMeal));add('いいえ',()=>{s.scene=n.sunSeat;render();});break;
 case 'rioSeat':$('sceneText').textContent=s.flags.rioSeat&&s.flags.rioSeat!==s.scene?(n.seatPromptPrefix||'')+'この席に変更する？':n.text;add('はい',()=>rioChooseSeat(n));add('いいえ',()=>move(rioReturn(n)));break;
 case 'rioTicket':
 if(s.flags.rioFood){$('sceneText').textContent='お昼ご飯は買ったから、席を探そう！';if(!s.flags.rioReceived)add('ご飯を受け取りに行く',()=>move('f9-89'));add('戻る',()=>move('f9-88'));}
 else {add('はい',()=>{s.flags.rioFood='cafeteria';speech('食券を購入した！ご飯を受け取りに行こう。',[]);tapNext(()=>move('f9-88'));});add('いいえ',()=>move(n.noTarget||'f9-88'));}break;
 case 'rioReceive':
 if(s.flags.rioFood==='cafeteria'&&!s.flags.rioReceived)$('sceneImage').style.filter=rioFilter(c.effects.smell);
 if(s.flags.rioReceived){$('sceneText').textContent='お昼ご飯は買ったから、席を探そう！';add('席を探す',()=>move('f9-88'));}
 else if(s.flags.rioFood==='cafeteria'){add('はい',()=>{cost(c.costs.receive);s.flags.rioReceived=true;status();$('sceneImage').style.filter=rioFilter(c.effects.smell);speech(s.flags.rioSeat?'受け取れた！席へ行こう。':'受け取れた！落ち着いて食べられる席を探したいな。',[]);tapNext(()=>rioAfterPurchase('f9-88'));});add('いいえ',()=>move('f9-88'));}
 else if(s.flags.rioFood){$('sceneText').textContent='お昼ご飯は買ったから、席を探そう！';add('戻る',()=>move('f9-88'));}
 else {$('sceneText').textContent='先に食券を買おう。';add('食券を買いに行く',()=>move('f9-87'));add('戻る',()=>move('f9-88'));}break;
 case 'rioBuy':
 if(s.flags.rioFood){$('sceneText').textContent='お昼ご飯は買ったから、席を探そう！';add(s.flags.rioReceived?'席を探す':'ご飯を受け取りに行く',()=>move('f9-126'));}
 else {add('はい',()=>{s.flags.rioFood='store';s.flags.rioReceived=true;speech('レジで購入した！席を探そう。',[]);tapNext(()=>rioAfterPurchase('f9-126'));});add('いいえ',()=>move(rioReturn(n)));}break;
 case 'rioGlass':add('エレベーターで上がる',()=>move('rioGlassInside',c.costs.elevator));break;
 case 'rioElevator':add('エレベーターで上がる',()=>move('rioElevatorArrival1',c.costs.elevator));break;
 case 'rioEscalator':add('エスカレーターで上がる',()=>move('f9-77',c.costs.escalator));break;
 case 'floorMap':tapNext(()=>move(n.returnTarget));break;
 case 'photoStaff':
 if(s.character==='hana')add('2分待って乗る',()=>move('hanaStaffInside',c.costs.staffWait));
 else add('エレベーターで上がる',()=>aoiRide('staff','f5-74',c.costs.elevator));break;
 case 'photoGlass':
 if(s.character==='hana')add('このまま3分待つ',()=>{cost(c.costs.glassWait);speech('5階に着いた。降りるために周囲の人に声をかけよう。',[['周囲の人に降りてもらう',()=>move('f5-22',c.costs.glassExit)]]);});
 else add('エレベーターで上がる',()=>aoiRide('glass','f5-22',c.costs.elevator));break;
 case 'photoEscalator':if(s.character==='aoi')add('エスカレーターで上がる',()=>aoiRide('escalator','f5-30',c.costs.escalator));break;
 case 'photoRest':
 $('sceneText').textContent=n.restQuestion;
 add('はい',()=>{cost({minutes:c.rules.restMinutes,fatigue:-c.rules.restRecovery});recordRecapRest();status();speech(n.restText,[]);tapNext(()=>move(n.restTarget));});
 add('いいえ',()=>n.restNoDirect?move(n.restTarget):speech(n.restQuestion,[['戻る',()=>move(n.restTarget)]]));break;
 case 'otherClass':add('戻って探す',()=>{const id=n.returnTarget||s.history.at(-1);if(id)move(id);});break;

 case 'glass':add('このまま3分待つ',()=>move('glassInside',c.costs.glassWait));break;
 case 'staff':add('2分待って乗る',()=>move('staffInside',c.costs.staffWait));break;
 case 'glassExit':add('周囲の人に降りてもらう',()=>move('floor5',c.costs.glassExit));break;
 case 'door':add('自力でがんばる',()=>showLines(n.selfLines,()=>move('classroom',c.costs.door)));add('近くの人に開けてもらう',()=>showLines(n.helpLines,()=>move('classroom',c.costs.door)));break;
 case 'rear':add('自力で机を動かして進む',()=>move('mismatch',c.costs.rearSelf));add('近くの人にお願いする',()=>move('mismatch',c.costs.rearHelp));break;
 case 'moveDesk':add('自力で机を動かす',()=>{s.flags.help=true;move('mismatch',c.costs.desk);});add('隣の人に手伝ってもらう',()=>move('mismatch',c.costs.desk));break;
 case 'neighbor':add('話しかける',()=>{s.flags.help=true;move('mismatch');});break;
 case 'space':add('ここにする・机を探す',()=>{s.flags.needsDesk=true;move('deskSearch');});break;
 case 'deskSearch':add('先生に相談する',()=>move('ready'));add('別の場所から机を持ってくる',()=>move('mismatch'));break;
 case 'mismatch':
 if(s.flags.help){$('sceneText').textContent=c.helpText;s.flags.help=false;}
 if(s.flags.teacherMessage){$('sceneText').textContent=c.teacherText;s.flags.teacherMessage=false;}
 add('受けづらいけれど、このまま授業を受ける',()=>finish(c.costs.uncomfortable));break;
 case 'teacher':add('先生に話しかける',()=>{if(s.flags.teacherAsked||s.flags.needsDesk||s.history.includes('mismatch'))move('ready');else{s.flags.teacherAsked=true;s.flags.teacherMessage=true;move('mismatch');}});break;
 case 'ready':add('この机で授業を受ける',()=>finish());break;
 case 'transport':add('エスカレーターで上がる',()=>move('escalator',c.costs.escalator));add('エレベーターで上がる',()=>move('elevator',c.costs.elevator));break;
 case 'seat':add('この席で授業を受ける',()=>seatStory());break;
 case 'consult':add('見えにくいことを伝える',()=>{s.flags.consulted=true;speech(c.consultText,n.links.map(([label,id])=>[label,()=>move(id)]));});break;
 }
 if(n.rest)add(`${c.rules.restMinutes}分休憩する`,()=>{cost({minutes:c.rules.restMinutes,fatigue:-c.rules.restRecovery});recordRecapRest();$('sceneText').textContent='少し休憩した。疲労がやわらいだ。';status();});
 if(!n.interactionOnly||interacting)for(const [label,id] of n.links)add(label,()=>move(id));
 if(n.interactionOnly&&!interacting)$('sceneText').textContent='';
 $('eventActions').replaceChildren(...a);play.querySelector('.play-message').hidden=!$('sceneText').textContent.trim()&&!a.length;$('back').disabled=!s.history.length;status();requestAnimationFrame(layoutPhoto);
 if(s.character==='rio'&&n.event==='rioStoreArrival'&&s.flags.rioFood){speech('お昼ご飯は買ったから、席を探そう！',[]);tapDismiss();}
 if(n.arrivalMessage&&!s.flags.floorArrivalShown&&s.phase==='playing'){s.flags.floorArrivalShown=true;speech(n.arrivalMessage,[]);tapDismiss();}
 const lap=Object.values(s.flags.floorTrips||{}).find(l=>l.pending);if(lap&&s.phase==='playing'){lap.pending=false;lap.shown=true;speech('階を一周したね！',[]);tapDismiss();}
}
$('back').onclick=()=>{if(s.phase!=='playing'||!s.history.length)return;s.scene=s.history.pop();travel();render();};
function dialog(title,text){$('dialogTitle').textContent=title;$('dialogText').textContent=text;$('gameDialog').showModal();}
$('hint').onclick=()=>dialog('ヒント',s.character==='rio'?rioHint():character().scenes[s.scene].hint||'別の道や設備を探したり、周囲の人に相談したりすると、何が変わるかな。');
$('avatar').onclick=()=>dialog(character().name,character().description.join('\n'));$('closeDialog').onclick=()=>$('gameDialog').close();
function tutorial(){document.querySelectorAll('.tutorial-target').forEach(x=>x.classList.remove('tutorial-target'));if(step>=D.tutorial.length){$('tutorial').hidden=true;s.phase='ready';$('readyMission').textContent=character().mission;$('missionReady').hidden=false;return;}const [id,title,text]=D.tutorial[step];$(id).classList.add('tutorial-target');$('tutorialTitle').textContent=title;$('tutorialText').textContent=text;$('tutorialCount').textContent=`${step+1} / ${D.tutorial.length}`;$('tutorial').hidden=false;}
$('tutorial').onclick=()=>{step++;tutorial();};
function finish(c={}){cost(c);renderRecap();s.finished=true;play.hidden=true;root.classList.remove('playing');result.hidden=false;result.style.display='block';$('resultSummary').textContent=`${character().name}\nかかった時間：${s.elapsed}分\n最終疲労度：${s.fatigue}`;const d=character().deadline;$('deadlineSummary').textContent=d?(mins(character().startTime)+s.elapsed<=mins(d)?'10:55までに受講準備が整いました。':'10:55を過ぎて受講準備が整いました。どこで時間がかかったか考えてみよう。'):'';$('reflectionForm').querySelector('label').textContent=character().reflectionQuestion||'どんな設備や周囲の配慮があれば、もっと授業を受けやすくなると思いますか？';$('reflectionForm').hidden=false;$('reflectionForm').reset();$('answers').hidden=true;$('saveStatus').textContent='';$('saveStatus').hidden=true;}
let reflectionSending=false;
$('reflectionForm').onsubmit=async e=>{
 e.preventDefault();if(reflectionSending||!s?.finished)return;
 const text=$('reflection').value.trim();if(!text){$('reflection').setCustomValidity('回答を入力してください。');$('reflection').reportValidity();return;}
 const run=s,submit=$('reflectionForm').querySelector('button[type="submit"]');reflectionSending=true;submit.disabled=true;
 $('saveStatus').hidden=false;$('saveStatus').textContent='送信しています…';
 try{
  const answers=await window.REFLECTION_SERVICE.submit(run.character,text);
  if(s!==run)return;
  $('reflectionForm').hidden=true;$('saveStatus').textContent='回答を送信しました。';
  $('answerList').replaceChildren(...(answers.length?answers.map(x=>para(x)):[para('ほかの回答はまだありません。')]));$('answers').hidden=false;
 }catch{
  if(s===run){$('saveStatus').textContent='送信を確認できませんでした。回答は入力欄に残っています。通信状況を確認してください。';}
 }finally{reflectionSending=false;submit.disabled=false;}
};
$('reflection').oninput=()=>$('reflection').setCustomValidity('');
function home(){if($('gameDialog').open)$('gameDialog').close();s=null;selected=null;screen('titleScreen');}
$('leaveGame').onclick=()=>{if(confirm('タイトルへ戻りますか？途中の進行は保存されません。'))home();};$('resultHome').onclick=home;

// 写真と赤丸は同じ枠に入れ、写真の比率を変えても位置がずれないようにします。
function layoutPhoto(){
 if(play.hidden)return;
 const img=$('sceneImage'),frame=$('photoFrame'),W=play.clientWidth,H=play.clientHeight;
 const ratio=img.naturalWidth&& !img.hidden?img.naturalWidth/img.naturalHeight:9/16;
 let h=Math.min(H,W/ratio),w=h*ratio;
 // 写真は画面に収まる一定のサイズ。吹き出しの表示・長さでは変更しません。
 frame.style.width=w+'px';frame.style.height=h+'px';frame.style.left=(W-w)/2+'px';frame.style.top='0px';
}
new ResizeObserver(()=>{if(s)layoutPhoto();}).observe(play);
function speech(text,choices){speechManuallyHidden=false;play.querySelector('.play-message').hidden=false;$('sceneText').textContent=text;$('eventActions').replaceChildren(...choices.map(([label,fn])=>button(label,fn)));requestAnimationFrame(layoutPhoto);}
function tapNext(fn){$('tapContinue').hidden=false;$('tapContinue').onclick=()=>{$('tapContinue').hidden=true;fn();};$('sceneText').append(document.createElement('br'),document.createTextNode('画面をタップして進む'));}
// 到着時の一度だけの会話。消す操作では移動・時間・疲労は変えません。
function tapDismiss(){
 $('tapContinue').hidden=false;
 $('tapContinue').onclick=()=>{$('tapContinue').hidden=true;play.querySelector('.play-message').hidden=true;requestAnimationFrame(layoutPhoto);};
}
// 次へ進むタップが設定済みの会話は、その動作を優先します。
// それ以外は背景・吹き出しのタップで消去。ボタンの操作では消しません。
play.addEventListener('click',event=>{
 if(!s||!['playing','story'].includes(s.phase)||!$('tapContinue').hidden)return;
 if(event.target.closest('button,a,input,select,textarea,dialog,#tutorial,#missionReady'))return;
 const bubble=play.querySelector('.play-message');
 if(!bubble.hidden){bubble.hidden=true;speechManuallyHidden=true;}
 // 選択肢を隠しても行き詰まらないよう、再タップで同じ選択肢を戻せます。
 else if(speechManuallyHidden&&$('eventActions').children.length){bubble.hidden=false;speechManuallyHidden=false;}
});
function activateSpot(h){
 if(s.phase!=='playing')return;
 const n=displayScene();
 if(h.target==='enterClass'){speech('502教室を見つけた！教室に入る？',[['入る',()=>{s.flags.classroomEntry=n.entryScene;move(n.entryScene);}],['入らない',()=>move(n.declineTarget)]]);}
 else if(h.target==='notice'){speech(n.notice,[]);tapNext(()=>move(s.scene==='f5-31'?(s.flags.room31Return||n.noticeTarget):n.noticeTarget));}
 else if(h.target==='interact'){render({interacting:true});}
 else if(h.target==='say'){speech(h.message,[]);}
 else {move(h.target);}
}
$('beginMission').onclick=()=>{s.phase='playing';$('missionReady').hidden=true;trackFloor(s.scene);render();};
function seatStory(){
 const c=character(),story=c.seatStories[s.scene];
 s.phase='story';$('paths').replaceChildren();$('back').disabled=true;
 speech(s.flags.consulted&&story.consulted?story.consulted:story.text,[['次へ',()=>finish()]]);
}
// MODE2は回答フォームの外に置き、入力・保存の有無で制限しません。
const modeDialog=document.createElement('dialog');modeDialog.className='mode-dialog';
modeDialog.append(para('MODE2は準備中です。'));modeDialog.append(button('閉じる',()=>modeDialog.close()));root.appendChild(modeDialog);
$('mode2Button').onclick=()=>modeDialog.showModal();


// 同じ写真のまま、タップごとにセリフを一つずつ表示します。
// 本編の移動はタップ後に従来通り1回だけ。追加会話では時間・疲労を加算しません。
function aoiRide(kind,target,rideCost){
 const note=s.character==='aoi'&&character().rideNotes?.[kind];
 if(!note){move(target,rideCost);return;}
 if(note.photo)$('sceneImage').src=note.photo;
 speech(note.text,[]);tapNext(()=>move(target,rideCost));
}
function showLines(lines,done){let index=0;const next=()=>{if(index>=lines.length){done();return;}speech(lines[index++],[]);tapNext(next);};next();}
function rioAfterPurchase(fallback){move(s.flags.rioSeat||fallback);}
// 到着場所につながる分かれ道を起点に、主要通路を回って戻った時だけ表示。
// トイレ・案内図の往復や「1つ戻る」だけでは一周になりません。
function trackFloor(id){
 const match=/^f([59])-/.exec(id);if(!match)return;const floor=match[1];
 const required=floor==='5'?['f5-23','f5-33','f5-46','f5-55','f5-65']:['f9-78','f9-90','f9-118','f9-126','f9-128'];
 const trips=s.flags.floorTrips||(s.flags.floorTrips={});
 let lap=trips[floor];if(!lap){const anchors={'f5-22':'f5-23','f5-74':'f5-55','f5-30':'f5-30','f9-77':'f9-78','f9-131':'f9-128','f9-130':'f9-128','f9-126':'f9-126'};const anchor=character().scenes[id].lapAnchor||anchors[id]||id;lap=trips[floor]={anchor,visited:[anchor],shown:false};}
 if(lap.shown)return;
 if(id===lap.anchor&&required.every(k=>lap.visited.includes(k)))lap.pending=true;
 if(!lap.visited.includes(id))lap.visited.push(id);
}

// 吉田りお専用：食券購入・受け取り・席の記憶を別々に管理します。
function rioFilter(effect={}){return `brightness(${effect?.brightness||1}) blur(${effect?.blur||0}px)`;}
function rioReturn(n){if(n.returnFromLounge)return s.flags.rioLoungeReturn||n.returnTarget;if(n.returnByEntry)return s.flags.rioShopReturn||n.returnTarget;return n.returnTarget;}
function rioChooseSeat(n){
 s.flags.rioSeat=s.scene;
 if(!s.flags.rioReceived){speech(s.flags.rioFood==='cafeteria'?'ご飯を受け取りに行こう！':'ご飯を探そう！',[]);tapNext(()=>move(rioReturn(n)));return;}
 cost(n.mealCost);rioMealStory(n.seatStory);
}
function rioMealStory(text){s.recap.mealStory=text;s.phase='story';$('paths').replaceChildren();$('back').disabled=true;status();speech(text,[]);tapNext(()=>finish());}
function rioHint(){
 const c=character(),seat=s.flags.rioSeat,remembered=seat?`覚えた席：${c.scenes[seat].title}。\n`:'';
 let goal,task;
 if(s.scene.startsWith('f1-'))return 'ご飯を買える場所や席は9階にあるよ。エレベーターかエスカレーターを探してみよう。';
 if(!s.flags.rioFood){task='食堂の券売機かコンビニでご飯を買おう。';goal=Number(s.scene.replace('f9-',''))>=138?'f9-150':'f9-87';}
 else if(!s.flags.rioReceived){task='食券は購入済み。食堂の受け取りカウンターでご飯を受け取ろう。';goal='f9-89';}
 else if(seat){task='ご飯の用意ができた！覚えた席に戻って、もう一度この席で食べるか選ぼう。';goal=seat;}
 else return 'ご飯の用意ができた！食堂やコンビニ横を見て、落ち着けそうな席を探そう。';
 if(s.scene===goal)return remembered+task;
 const seen=new Set(),queue=[[s.scene,[]]];let route;
 while(queue.length){const [id,path]=queue.shift();if(id===goal){route=path;break;}if(seen.has(id))continue;seen.add(id);const n=c.scenes[id];if(!n)continue;
 const edges=(n.hotspots||[]).filter(h=>c.scenes[h.target]).map(h=>({id:h.target,spot:h}));
 for(const [,to] of n.links||[])if(c.scenes[to])edges.push({id:to});
 if(n.event==='rioCurtain'){edges.push({id:n.curtainScene});if(n.sunSeat)edges.push({id:n.sunSeat});}if(n.returnTarget)edges.push({id:rioReturn(n)});if(n.restTarget)edges.push({id:n.restTarget});
 for(const edge of edges)queue.push([edge.id,path.concat(edge)]);
 }
 if(route?.length){const first=route[0];if(first.spot){const h=first.spot,marks=[...(c.scenes[s.scene].hotspots||[])].sort((a,b)=>a.x-b.x),rank=marks.indexOf(h),pos=marks.length===1?'赤丸':'左から'+(rank+1)+'つ目の赤丸';return remembered+task+'\nまずは今の写真の'+pos+'（'+h.label+'）へ。';}return remembered+task+'\n今の場面から通路に戻って進もう。';}
 return remembered+task+'\n「1つ戻る」で分かれ道まで戻り、ヒントをもう一度確認してみよう。';
}

// 振り返り用の記録。時間・疲労・移動先には影響せず、プレイ開始ごとにリセット。
function recordRecapTransport(from,to){
 const config=window.GAME_RECAP?.characters[s.character];
 const used=config?.transports.find(t=>t.from===from&&t.to.includes(to));
 if(used&&!s.recap.transports.includes(used.text))s.recap.transports.push(used.text);
}
function recordRecapScene(){
 if(!s||!['playing','story'].includes(s.phase))return;
 const R=window.GAME_RECAP,config=R?.characters[s.character];if(!config)return;
 if(R.maps.includes(s.scene)&&!s.recap.maps.includes(s.scene))s.recap.maps.push(s.scene);
 const item=config.seats[s.scene];
 if(item){
  let seat=s.recap.seats.find(v=>v.key===item.key);
  if(!seat){seat={key:item.key,label:item.label||character().scenes[s.scene].title,comments:[]};s.recap.seats.push(seat);}
  const comment=item.commentFromScene?character().scenes[s.scene].text:item.comment;
  if(comment&&!seat.comments.includes(comment))seat.comments.push(comment);
 }
 const action=config.actions[s.scene];
 if(action&&!s.recap.actions.some(v=>v.key===action.key))s.recap.actions.push(action);
}
function recordRecapRest(){
 const label=window.GAME_RECAP.restLabels[s.scene]||character().scenes[s.scene].title;
 const previous=s.recap.rests.find(v=>v.label===label);
 if(previous)previous.count++;else s.recap.rests.push({label,count:1});
}
function renderRecap(){
 const R=window.GAME_RECAP,recap=s.recap,lines=[...recap.transports];
 if(recap.maps.length)lines.push(R.map);
 if(recap.maps.some(id=>R.closeMaps.includes(id)))lines.push(R.mapNear);
 const eatenKey=s.character==='rio'&&recap.mealStory?R.characters.rio.seats[s.flags.rioSeat]?.key:null;
 for(const seat of recap.seats)lines.push(seat.label+R.seatSuffix+seat.comments.join(' ')+(seat.key===eatenKey?' '+R.ateHere:''));
 if(s.character==='aoi'&&s.flags.consulted)lines.push(R.consulted);
 lines.push(...recap.actions.map(v=>v.text));
 if(s.character==='rio'&&recap.mealStory&&!R.hideSeparateMealStoryForSeats.includes(eatenKey))lines.push(recap.mealStory);
 if(s.character==='rio'&&s.flags.rioReceived)lines.push(s.flags.rioFood==='cafeteria'?R.cafeteria:R.store);
 for(const rest of recap.rests)lines.push(rest.label+R.restSuffix+(rest.count>1?'（'+rest.count+'回）':''));
 if(s.flags.floorTrips?.['5']&&(s.flags.floorTrips['5'].shown||s.flags.floorTrips['5'].pending))lines.push(R.floorFiveLap);
 if(s.character==='rio'&&recap.seats.length>=3)lines.push(R.manySeats);
 $('recapTitle').textContent=R.title;
 $('recapList').replaceChildren(...lines.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
 $('recapSection').hidden=!lines.length;
}

window.GameDebug={getState:()=>s?structuredClone(s):null};
})();



