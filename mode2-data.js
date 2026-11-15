/* MODE2だけの写真とメモ。MODE1のデータは読み取り専用で参照します。
 * title: 一覧の見出し、memo: 短いメモ（1項目1文が目安）。
 * slides: 写真を表示するMODE1の場面IDと、その写真の説明。
 * seen: MODE1で体験済みと判断する条件。番号・IDは編集用で画面に出ません。
 */
(() => {
const D=window.GAME_DATA,R=window.GAME_RECAP;
const M=window.MODE2_DATA={characters:{},groups:{travel:'移動のこと',guide:'場所を探すこと',seat:'席・教室のこと',food:'ご飯を買うこと',rest:'ひと休みのこと'}};
for(const id of ['hana','aoi','rio']){
 const c=D.characters[id],cards=[];
 const add=(key,title,group,slides,memo,seen)=>cards.push({id:key,title,group,slides:slides.map(s=>typeof s==='string'?{scene:s}:s),memo,seen});
 const sceneMemo=key=>c.scenes[key]?.text||'';
 const rest=(key,title,scene,label)=>add(key,title,'rest',[scene],['少し休んでから、また周りを見てみよう。','休憩できる場所があることも、過ごしやすさにつながるね。'],{restLabels:[label]});
 if(id==='hana'){
  add('glass','透明エレベーターで上がる','travel',[{scene:'f1-16',caption:'混雑しているエレベーター前'},{scene:'hanaGlassInside',caption:'乗り降りする時の様子'}],['人が多いと、乗る時だけでなく降りる時にも時間がかかったね。','鏡の大きさや位置によって、足元の確かめやすさも変わったね。'],{transport:'glass'});
  add('staff','高層階用エレベーターで上がる','travel',['f1-9','hanaStaffInside'],['大きな鏡があって、足元を見ながら乗り降りしやすかったね。','同じエレベーターでも、広さや鏡などの違いがあったね。'],{transport:'staff'});
  add('slope','校門からスロープを通る','travel',['hana-7','hana-6','hana-5'],['入口までの段差を避けて進む道を確かめてみよう。'],{anyScenes:['hana-6','hana-5']});
  add('doorSelf','扉を自力で開ける','seat',['door'],['扉が重いと、開けながら通るのが少し大変だったね。'],{choices:[{scene:'door',text:'自力でがんばる'}]});
  add('doorHelp','扉を開けてもらう','seat',['door'],['近くの人に声をかけて、扉を開けてもらう方法もあったね。'],{choices:[{scene:'door',text:'近くの人に開けてもらう'}]});
  add('rear','後方の席を確かめる','seat',['hanaRear','hanaRearDesk'],['通路の横幅はギリギリ。通れるかだけでなく、その後の動きも大切だったね。','動かしたイスを置く場所があるかも、確かめる必要があったね。'],{anyScenes:['hanaRearDesk']});
  for(const [key,name] of [['hanaLeft','左前'],['hanaRight','右前']])add(key,name+'の席から見る','seat',[key,key+'View'],['机とイスを動かすと、授業を受ける場所を整えられたね。','場所を整えた後、その位置から授業を受ける様子も確かめてみよう。'],{anyScenes:[key+'View']});
  add('deskSelf','机とイスを自力で動かす','seat',['hanaRight','hanaRightSelfThanks'],['机には重さがあったね。','自分も動きながらイスを運び、机を戻すまで、いくつもの動きが必要だったね。'],{anyScenes:['hanaLeftSelfThanks','hanaRightSelfThanks']});
  add('deskHelp','机とイスを動かすのを頼む','seat',['hanaLeft','hanaLeftThanks'],['隣の人に声をかけ、机とイスを動かすのを手伝ってもらう方法もあったね。'],{anyScenes:['hanaLeftThanks','hanaRightThanks']});
  add('map','案内図で教室を探す','guide',['map22Attempt'],['教室番号と進む方向を、案内図で確かめられるよ。'],{anyScenes:['map','map65','f5-66']});
  add('toiletOther','別のお手洗いを探す','rest',['f1-21'],['このゲームでは、はなは別のお手洗いを探す流れになるよ。','目的の場所に着くだけでなく、自分が使えるか確かめる場面だったね。'],{interactions:['f1-21']});
  rest('rest1','1階の多目的トイレで休む','f1-19','1階の多目的トイレ');
  rest('rest5Chair','5階の椅子で休む','f5-47','5階の椅子のある場所');
  rest('rest5Toilet','5階のお手洗いで休む','f5-72','5階のお手洗い');
 }
 if(id==='aoi'){
  add('glass','透明エレベーターで上がる','travel',['f1-16','f5-22'],['透明エレベーターから5階へ上がる道もあったね。'],{transport:'glass'});
  add('staff','高層階用エレベーターで上がる','travel',['f1-9','f5-74'],['別のエレベーターからは、違う場所へ出たね。','降りた後も、教室までの道を探してみよう。'],{transport:'staff'});
  add('escalator','エスカレーターで上がる','travel',['f1-15','f5-30'],['エスカレーターから5階へ上がる道もあったね。'],{transport:'escalator'});
  add('map','案内図に近づいてみる','guide',[{scene:'map22Attempt',caption:'少し離れたところから'},{scene:'map22Close',caption:'近づいて確かめる'}],['文字が読み取りにくい時、近づいて確かめる選択肢があったね。','写真の見え方を切り替えて比べることもできるよ。'],{anyScenes:['mapNear','map22Close']});
  for(const key of ['frontLeft','frontCenter','frontRight','middle','backSeat'])add(key,c.scenes[key].title,'seat',[key],[sceneMemo(key),'前後や左右の位置で、見え方や周囲の感じ方を比べてみよう。'],{anyScenes:[key]});
  add('teacher','先生に相談してみる','seat',['classroom','classroomFront'],['見えにくいことを先生に伝える選択肢もあったね。',c.consultText],{flag:'consulted'});
  rest('rest1','1階のお手洗いで休む','f1-21','1階のお手洗い');
  rest('rest5Chair','5階の椅子で休む','f5-47','5階の椅子のある場所');
  rest('rest5Toilet','5階のお手洗いで休む','f5-72','5階のお手洗い');
 }
 if(id==='rio'){
  add('glass','混雑した透明エレベーター','travel',['f1-16','rioGlassInside','f9-131'],['乗る人が多く、少しくっついて乗る必要があったね。','乗り物の中の人との距離も、感じ方につながったね。'],{transport:'glass'});
  add('staff','高層階用エレベーターの道','travel',['f1-9','rioElevatorArrival1','rioElevatorArrival3'],['高層階用エレベーターからは、こちらの通路につながっていたよ。'],{transport:'staff'});
  add('escalator','エスカレーターで9階へ','travel',['f1-15','f9-77'],['エスカレーターで9階へ向かう道もあったね。'],{transport:'escalator'});
  add('ticket','食堂で食券を買う','food',['f9-87'],['食券を買った後は、受け取りカウンターへ向かう流れだったね。'],{food:'cafeteria'});
  add('receive','食堂でご飯を受け取る','food',['f9-88','f9-89'],['受け取りが混雑している場面があったね。','待つ時間だけでなく、その場所の匂いも気になったね。'],{food:'cafeteria',received:true});
  add('smell','食堂の周りの匂い','food',['f9-88','f9-90','f9-92'],['苦手な匂いがあると、少し辛く感じることがあったね。','食べ物を買う場所と食べる場所は、別々に考えることもできるよ。'],{anyScenes:['f9-88','f9-90','f9-92']});
  add('store','コンビニでご飯を買う','food',['f9-126','f9-138'],['食堂だけでなく、コンビニで買う選択肢もあったね。'],{food:'store'});
  add('cup','コンビニのカップ麺の棚','food',['f9-145','f9-148'],['カップ麺の棚を見て、買うかどうか決める場面もあったね。'],{choices:[145,146,148,149].map(n=>({scene:'f9-'+n,text:'はい'}))});
  add('cold','コンビニの食べ物の棚','food',['f9-150'],['カップ麺以外の棚にも、お昼ご飯を選ぶ場所があったね。'],{choices:[{scene:'f9-150',text:'はい'}]});
  for(const [num,name] of [[96,'食堂'],[136,'コンビニ横']]){
   add('curtain'+num,name+'の窓際でカーテンを下げる','seat',['f9-'+num,'f9-'+(num+1)],['強い日差しをカーテンで遮る選択肢があったね。','日差しを遮った後にも暑さを感じる、という場面だったね。'],{anyScenes:['f9-'+(num+1)]});
   add('sun'+num,name+'の窓際でそのまま食べる','seat',['rioSunSeat'+num],['カーテンを下げず、その席で食べる選択もできたね。','日差しが痛く感じられた、という場面だったね。'],{choices:[{scene:'rioSunSeat'+num,text:'はい'}]});
  }
  for(const num of [100,102,104,108,111,112,115,127,133,134]){
   const key='f9-'+num,entry=R.characters.rio.seats[key];
   add('seat'+num,c.scenes[key].title,'seat',[key],[entry?.comment||'周囲の環境も確かめてみよう。'],{anyScenes:[key]});
  }
  rest('rest1','1階のお手洗いで休む','f1-21','1階のお手洗い');
  rest('rest9','9階のお手洗いで休む','f9-85','9階のお手洗い');
 }
 M.characters[id]={name:c.name,portrait:c.portrait,cards};
}
})();
