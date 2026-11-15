/* クリア画面の振り返り用の文。ゲーム中のセリフ・経路は変更しません。
 * 同じ key の席はひとつにまとめます。写真番号は編集専用で表示しません。
 * commentFromScene は、現在のゲーム中の席のセリフをそのまま振り返りに使います。
 */
(() => {
const R=window.GAME_RECAP={
 title:'今回の振り返り',
 ateHere:'ここで食べた！',
 hideSeparateMealStoryForSeats:['seat127'],
 map:'案内図を確認したね。',
 mapNear:'近づいて、案内図の文字を確かめたね。',
 consulted:'先生に見えにくいことを相談したね。文字を大きく書いて、はっきり話してもらったね。',
 cafeteria:'食堂で食券を買って、お昼ご飯を受け取ったね。',
 store:'コンビニでお昼ご飯を買ったね。',
 floorFiveLap:'教室を探すのに少し大変だったね。',
 manySeats:'色んな席を見て回ったね。',
 seatSuffix:'を確認したね。',restSuffix:'で休憩したね。',
 maps:['map','mapNear','map22Close','map65','f5-66'],
 closeMaps:['mapNear','map22Close'],
 restLabels:{'f1-19':'1階の多目的トイレ','f1-20':'1階の多目的トイレ','f1-21':'1階のお手洗い','f5-47':'5階の椅子のある場所','f5-60':'5階の椅子のある場所','f5-72':'5階のお手洗い','f9-85':'9階のお手洗い'},
 characters:{
 hana:{
 transports:[
  {from:'f1-16',to:['hanaGlassInside'],text:'透明エレベーターを使って5階へ上がったね。混雑していて、降りる時には鏡が小さく足元を確かめにくかったね。'},
  {from:'f1-9',to:['hanaStaffInside'],text:'高層階用エレベーターを使って5階へ上がったね。大きな鏡があり、足元が見やすくて乗り降りしやすかったね。'}
 ],
 seats:{
  hanaRear:{key:'rear',label:'後方の席',comment:'横幅がギリギリの通路だったね。'},
  hanaRearDesk:{key:'rear',label:'後方の席',comment:'後ろの通路が狭く、動かしたイスを置く場所がなさそうだったね。'},
  hanaLeft:{key:'left',label:'左前の席',comment:''},
  hanaRight:{key:'right',label:'右前の席',comment:''},
  hanaLeftDesk:{key:'left',label:'左前の席',comment:'机とイスを動かして場所を整える必要があったね。'},
  hanaRightDesk:{key:'right',label:'右前の席',comment:'机とイスを動かして場所を整える必要があったね。'}
 },
 actions:{
  hanaLeftSelfThanks:{key:'deskSelf',text:'机とイスを自力で動かしたね。重さがあり、自分も動きながらイスを運ぶのは大変だったね。'},
  hanaRightSelfThanks:{key:'deskSelf',text:'机とイスを自力で動かしたね。重さがあり、自分も動きながらイスを運ぶのは大変だったね。'},
  hanaLeftThanks:{key:'deskHelp',text:'隣の人に声をかけて、机とイスを動かすのを手伝ってもらったね。'},
  hanaRightThanks:{key:'deskHelp',text:'隣の人に声をかけて、机とイスを動かすのを手伝ってもらったね。'}
 }
 },
 aoi:{
 transports:[
  {from:'f1-16',to:['f5-22'],text:'透明エレベーターを使って5階へ上がったね。'},
  {from:'f1-9',to:['f5-74'],text:'高層階用エレベーターを使って5階へ上がったね。'},
  {from:'f1-15',to:['f5-30'],text:'エスカレーターを使って5階へ上がったね。'}
 ],seats:{},actions:{}
 },
 rio:{
 transports:[
  {from:'f1-16',to:['rioGlassInside'],text:'透明エレベーターを使って9階へ上がったね。人が多かったから、結構密着したね。'},
  {from:'f1-9',to:['rioElevatorArrival1'],text:'高層階用エレベーターを使って9階へ上がったね。'},
  {from:'f1-15',to:['f9-77'],text:'エスカレーターを使って9階へ上がったね。'}
 ],seats:{},actions:{}
 }
 }
};
for(const id of ['frontLeft','frontCenter','frontRight','middle','backSeat'])R.characters.aoi.seats[id]={key:id,commentFromScene:true};
for(const num of [100,102,104,108,111,112])R.characters.rio.seats['f9-'+num]={key:'seat'+num,comment:'食堂なので、苦手な匂いがある日には大変かもしれなかったね。'};
R.characters.rio.seats['f9-115']={key:'seat115',comment:'席の周囲の環境を確かめたね。'};
R.characters.rio.seats['f9-127']={key:'seat127',comment:'落ち着いて食べられそうな場所だったね。'};
for(const num of [133,134])R.characters.rio.seats['f9-'+num]={key:'seat'+num,comment:'少し空気がこもっているように感じる場所だったね。'};
for(const [before,after] of [[96,97],[136,137]]){
 const label=window.GAME_DATA.characters.rio.scenes['f9-'+before].title;
 R.characters.rio.seats['f9-'+before]={key:'seat'+before,label,comment:'日差しが強い席だったね。'};
 R.characters.rio.seats['f9-'+after]={key:'seat'+before,label,comment:'カーテンを下げて、強い日差しを遮ったね。'};
 R.characters.rio.seats['rioSunSeat'+before]={key:'seat'+before,label,comment:'カーテンを下げない場合の日差しを確かめたね。'};
}
})();
