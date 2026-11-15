/* 2026-11-10 指定箇所だけの追加設定。
 * セリフ・写真・赤丸の位置を後から編集する場合は、このファイルを参照してください。
 * x/y は写真の左/上からの百分率。内容を指定していない場面は変更しません。
 */
(() => {
const D=window.GAME_DATA;
D.tutorial.find(t=>t[0]==='paths')[2]='画面内の赤い丸をタップすると、その場所へ進むことができるよ';
for(const [id,c] of Object.entries(D.characters)){
 const S=c.scenes;
 // 中央は掲示板の元の位置。左右は下へ移動（位置はここで微調整できます）。
 for(const h of S['f1-16'].hotspots){h.y=h.target==='interact'?56:82;}
 for(const num of [19,21])S['f1-'+num].interactionOnly=true;
 // 多目的トイレの扉の丸だけ会話に変更。右側の既存の移動経路は維持。
 Object.assign(S['f1-19'].hotspots[0],{target:'interact',label:'お手洗いを確かめる'});
 const denied=id==='hana'?S['f1-21']:S['f1-19'];
 Object.assign(denied,{event:'tapRoute',tapLines:[id==='hana'?'このお手洗いは私には使えないから、他を探そう。':'ここは多目的トイレだから、他を探そう。'],tapTarget:'f1-18'});
 if(id==='hana'||id==='rio')S['f1-16'].photo='photos/1階-16-女子シルエット8人.png';
}
{
 const c=D.characters.hana,S=c.scenes;
 Object.assign(S['f1-2'].hotspots[1],{target:'say',message:'横幅がギリギリで通れないかも',label:'通路の幅を確かめる'});
 c.costs.glassWait.minutes=5;
 Object.assign(S['f1-16'],{event:'hanaGlassChoice',text:'混雑しているね。一回待ちで、乗れるのに3分ぐらいかかりそう。',links:[['別のエレベーターを探す','f1-3']]});
 S.hanaGlassInside={title:'透明エレベーター内',photo:'photos/1階-16-1.jpeg',text:'',links:[],event:'tapRoute',tapLines:['乗る人も多いから降りるのも時間かかっちゃった！降りる時も鏡が小さくて足元が見えないから出る時に車イスがドアにぶつかっちゃった'],tapTarget:'f5-22',tapCost:c.costs.glassExit};
 S['f1-9'].interactionOnly=true;
 S.hanaStaffInside={title:'高層階用エレベーター内',photo:'photos/1階-9-1.jpeg',text:'',links:[],event:'tapRoute',tapLines:['大きな鏡があるから足元が見やすくて、乗り降りしやすい！'],tapTarget:'f5-74'};
 S.door.selfLines=['扉がちょっと重いね','慣れないとちょっと大変かも'];
 for(const key of ['hanaRight','hanaLeft']){
   Object.assign(S[key+'Self'],{photo:S[key].photo,event:'tapRoute',tapLines:['まずは机をちょっと移動しよう','重さがあるから少し大変だ','イスを動かそう','イス前にもっていこうかな？','自分も動きながらイスを移動するのはちょっと難しいかも','イスを動かせた！','机を元にもどそう！'],tapTarget:key+'SelfThanks',displayOnly:true});
   S[key+'SelfThanks']={...structuredClone(S[key+'Thanks']),text:'机とイスを動かせた！'};
 }
}
{
 const c=D.characters.rio,S=c.scenes;
 c.description[1]='特定の匂いが苦手で、特に香辛料の匂いが苦手。';
 c.description[2]='人と直接触れ合うことが苦手。';
 S['f1-1'].text='お昼ご飯を買って、落ち着ける席で食べよう。9階へ向かおう！';
 S['f1-16'].text='エレベーターがある。乗る人多いからいっぱいになりそうだ。このまま待って乗る？';
 S.rioGlassInside={title:'透明エレベーター内',photo:'photos/1階-16-1-女子シルエット満員.png',text:'',links:[],event:'tapRoute',tapLines:['みんなで乗るのでちょっとくっつく必要があるかも'],tapTarget:'rioGlassArrival'};
 S['f1-15'].text='エスカレーターで9階まで行く？';
 c.costs.escalator.minutes=5;
 S['f9-87'].noTarget='f9-86';
 S['f9-104'].returnTarget='f9-99';
}

// ===== 追加修正：赤丸からの操作・はなのトイレと扉 =====
for(const c of Object.values(D.characters)){
 c.scenes['f1-15'].interactionOnly=true;
 c.scenes['f1-15'].links=[['登らない','f1-16']];
}
{
 const S=D.characters.hana.scenes;
 const n=S['f5-74'];
 n.hotspots[0].target='interact';n.hotspots[0].label='お手洗いを確かめる';
 Object.assign(n,{event:'tapRoute',interactionOnly:true,tapLines:['このお手洗いは私には使えないから、他を探そう'],tapTarget:'f5-73',lapAnchor:'f5-32'});
 S.door.helpLines=['近くの人に声をかけて開けてもらった！ありがとう！'];
}

// ===== 吉田りお：追加写真・匂い・窓際の順番・食事後のセリフ =====
{
 const c=D.characters.rio,S=c.scenes;
 for(let i=1;i<=3;i++)Object.assign(S['rioElevatorArrival'+i],{photo:'photos/9-'+(150+i)+'.jpeg',photoLabel:'9-'+(150+i)});
 S.rioElevatorArrival1.hotspots[0].x=85;S.rioElevatorArrival1.hotspots[0].y=75;
 S.rioElevatorArrival2.hotspots[0].x=80;S.rioElevatorArrival2.hotspots[0].y=72;
 S.rioElevatorArrival3.hotspots[0].x=51;S.rioElevatorArrival3.hotspots[0].y=56;
 S.rioGlassInside.tapTarget='f9-131';
 S['f9-131'].hotspots.push({x:85,y:60,size:24,target:'f9-78',label:'掲示板前へ'});
 S['f9-89'].photo='photos/9-89-女子シルエット2列.png';
 for(const num of [88,89,90,92])S['f9-'+num].effect=structuredClone(c.effects.smell);
 S['f9-88'].text='苦手が匂いがあるので、ちょっと辛いかも';
 const meal=(num,text,fatigue=0)=>Object.assign(S['f9-'+num],{seatStory:text+'お昼ご飯を食べた！',mealCost:{fatigue}});
 meal(127,'ここなら落ち着いて食べられそう！');
 for(const num of [100,102,104,108,111,112])meal(num,'食堂なのでちょっとだけ苦手な匂いがある日は大変かも。',15);
 for(const num of [133,134])meal(num,'少し空気がこもっているように感じるかも。',10);
 for(const [before,after] of [[96,97],[136,137]]){
   const n=S['f9-'+before],next=S['f9-'+after];
   // 日差しの強い写真では席を確定せず、先にカーテンを選びます。
   n.event='rioCurtain';n.text='このままだと日差しが強すぎてつらいかも。カーテンを下げる？';
   Object.assign(next,{event:'rioSeat',interactionOnly:false,text:'強い日差しを遮れた！ここで食べる？',seatPromptPrefix:'強い日差しを遮れた！',returnTarget:n.returnTarget,links:[],hotspots:[]});
   meal(after,'日差しは遮ったが結構暑い！一人席なのでゆっくり食べることができた。',5);
 }
}

// ===== 2026-11-12：はなの案内図／りおのぼやけ・窓際 =====
{
 const n=D.characters.hana.scenes.map22Attempt;
 n.text='';n.links=[];n.photoLabel='はなの案内図';
 // 案内図はそのまま表示。「1つ戻る」で元の場所へ戻れます。
}
{
 const c=D.characters.rio,S=c.scenes;
 c.effects.smell.blur=0;
 for(const n of Object.values(S))if(n.effect)n.effect.blur=0;
 for(const id of ['f9-136','f9-137'])S[id].returnTarget='f9-126';
 for(const num of [96,136]){
   const n=S['f9-'+num],id='rioSunSeat'+num;
   n.sunSeat=id;
   S[id]={...structuredClone(n),event:'rioSeat',text:'この席で食べる？',
     seatStory:'日の光が痛く感じてしまった。お昼ご飯を食べた！',mealCost:{fatigue:15}};
 }
}

// ===== 2026-11-13：指定された戻り経路と会話の開始 =====
{
 const S=D.characters.rio.scenes;
 S['f9-139'].hotspots.push({x:50,y:84,size:24,target:'f9-126',label:'コンビニ前の通路へ戻る'});
 S['f9-85'].restTarget='f9-82';
}
{
 // はなの写真経路だけをあおいと共通に戻し、あおいのセリフはコピーしません。
 const n=D.characters.hana.scenes['f5-74'],route=D.characters.aoi.scenes['f5-74'];
 n.hotspots=structuredClone(route.hotspots);n.links=structuredClone(route.links);n.text='';
 for(const key of ['event','interactionOnly','tapLines','tapTarget','lapAnchor'])delete n[key];
}
D.characters.aoi.scenes['f1-9'].interactionOnly=true;
// あおいだけ：乗車後、5階の到着会話より前に表示する写真とセリフ。
D.characters.aoi.rideNotes={
 glass:{photo:'photos/1階-16-2.jpeg',text:'点字があるから難なく乗れた！'},
 staff:{photo:'photos/1階-9-2.jpeg',text:'点字があるから難なく乗れた！'},
 escalator:{text:'白杖を使えばエスカレーターも乗れるよ'}
};
})();
