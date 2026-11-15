/* 編集用設定。写真・セリフ・移動先・疲労・時間はここで変更できます。
 * 写真番号は管理用で、ゲーム画面には表示しません。
 * photo: "photos/④.jpg" のように写真の場所を指定してください。
 * 未設定の写真には background.jpeg を仮表示します。
 * 移動先の配列 links は [表示名, 行き先ID] です。
 * 現在のルートは設計図で確認できた主要分岐をつないだ仮ルートです。
 * 写真がそろった後に、各写真と全分岐を照合してください。
 */
window.GAME_DATA = {
  tutorial: [
    ['mission','ミッション','各場面で目指すゴールが表示されるよ'],
    ['clock','時間','ゲーム内の時刻が表示されるよ'],
    ['paths','移動ボタン','タップするとその場所へ進むことができるよ'],
    ['avatar','アイコン','選択したキャラクターのアイコンが表示されるよ'],
    ['hint','ヒント','解決策を考えるのに困ったら、手がかりを見てみよう'],
    ['fatigue','疲労ゲージ','移動や出来事で疲労が増えるよ。休憩すると少し減るよ'],
    ['back','戻る','1つ前の場所へ戻れるよ。時間や疲労は巻き戻らないよ']
  ],
  characters: {
    hana: {
      name:'田中 はな', age:19, portrait:'田中はな.jpg',
      description:['普段車イスを使用している。','上半身は不自由なく動かすことができる。'],
      mission:'10:55までに511教室で授業の準備をしよう',
      start:'gate', startTime:'10:30', deadline:'10:55',
      rules:{movesPerStep:5, fatiguePerStep:2, minutesPerStep:2, restMinutes:3, restRecovery:5},
      // イベントごとの追加コスト。通常の移動分とは別に加算されます。
      costs:{glassWait:{minutes:3,fatigue:5},staffWait:{minutes:2,fatigue:5},glassExit:{fatigue:10},door:{fatigue:5},rearSelf:{fatigue:20},rearHelp:{fatigue:5},desk:{fatigue:5},uncomfortable:{fatigue:10}},
      helpText:'隣の人「机、動かすね！」\nスペースを作ってもらえたけれど、机と車イスの幅が合わない。',
      teacherText:'先生「左前の席を動かして場所を用意するね！」\nしかし、机と車イスの幅が合わない。',
      // はな専用の場所・出来事。あおいの設定は参照しません。
      scenes:{
        gate:{title:'校門前',photo:'',hint:'入口までの段差を避けて進める道はあるかな。',text:'511教室へ向かおう。入口まで段差の少ない道を探そう。',links:[['スロープへ','slope']]},
        slope:{title:'スロープ',photo:'',text:'スロープを使って入口へ進もう。',links:[['大学の入口へ','entrance'],['校門前へ','gate']]},
        entrance:{title:'大学の入口',photo:'',text:'5階に上がる方法を探そう。',links:[['1階ロビーへ','lobby']]},
        lobby:{title:'1階ロビー',photo:'',text:'5階へ行くエレベーターを探そう。',links:[['透明エレベーターへ','glass'],['別の通路を探す','otherHall'],['トイレへ','toilet20']]},
        glass:{title:'透明エレベーター前',photo:'',photoNumber:16,event:'glass',text:'混雑している。乗れるまで3分かかりそう。',hint:'待つ方法も、別の設備を探す方法もあるよ。',links:[['別のエレベーターを探す','otherHall']]},
        otherHall:{title:'1階の別の通路',photo:'',text:'こちらにもエレベーターがありそう。',links:[['教職員用エレベーターへ','staff'],['ロビーへ','lobby'],['トイレへ','toilet21']]},
        staff:{title:'教職員用エレベーター前',photo:'',photoNumber:10,event:'staff',text:'広めのエレベーターを見つけた。2分待てば乗れそう。',links:[['通路へ戻る','otherHall']]},
        glassInside:{title:'透明エレベーター内',photo:'',event:'glassExit',text:'5階に着いた。降りるために周囲の人に声をかけよう。',links:[]},
        staffInside:{title:'教職員用エレベーター内',photo:'',text:'鏡が大きく、広めで乗り降りしやすい。',links:[['5階へ降りる','floor5']]},
        floor5:{title:'5階エレベーターホール',photo:'',text:'511教室を探そう。',links:[['廊下へ','hall5'],['トイレへ','toilet32']]},
        hall5:{title:'5階の廊下',photo:'',text:'教室の表示を確かめながら進もう。',links:[['教室の方へ','junction'],['エレベーターホールへ','floor5']]},
        junction:{title:'5階の曲がり角',photo:'',text:'511教室の表示が見える。',links:[['511教室へ','door'],['椅子のある場所へ','chair38']]},
        door:{title:'511教室の入口',photo:'',event:'door',text:'ドアが重くて開けづらい。',links:[['廊下へ戻る','junction']]},
        classroom:{title:'511教室',photo:'',text:'入れた。どこで授業を受けよう？席や机を確かめよう。',hint:'座る場所だけでなく、机の使いやすさも確かめてみよう。',links:[['前方の席を調べる','front'],['後方の席を調べる','rear'],['空いているスペースへ','space'],['近くの人に話しかける','neighbor'],['先生に話しかける','teacher']]},
        front:{title:'前方の席',photo:'',event:'moveDesk',text:'ここにするには机を一度動かそう。',links:[['別の場所を探す','classroom']]},
        rear:{title:'後方への通路',photo:'',event:'rear',text:'通路が狭く、このままでは通れない。',links:[['別の場所を探す','classroom']]},
        space:{title:'空いているスペース',photo:'',event:'space',text:'ここで授業を受ける？机はまだない。',links:[['別の場所を探す','classroom']]},
        deskSearch:{title:'教室内で机を探す',photo:'',event:'deskSearch',text:'使えそうな机はあるかな。先生にも相談できそう。',links:[['別の場所を探す','classroom']]},
        neighbor:{title:'近くの人',photo:'',event:'neighbor',text:'隣の人に話しかけてみようか。',links:[['別の場所を探す','classroom']]},
        mismatch:{title:'机のある席',photo:'',event:'mismatch',text:'机と車イスの幅が合わない。このままだと授業を受けづらい。',hint:'使う道具そのものを変えられないかな。相談できそうな人は？',links:[['やりやすい方法を探す','classroom']]},
        teacher:{title:'教卓の前',photo:'',event:'teacher',text:'先生に相談してみよう。',links:[['別の場所を探す','classroom']]},
        ready:{title:'授業の準備',photo:'',event:'ready',text:'車イスに合う移動式の机を用意してもらえた。授業を受けられる！',links:[]},
        // ここに⑳・㉑・㉜・㊳の写真を設定してください。
        toilet20:{title:'1階のトイレ',photo:'',photoNumber:20,rest:true,links:[['ロビーへ','lobby']]},
        toilet21:{title:'1階の別のトイレ',photo:'',photoNumber:21,rest:true,links:[['通路へ','otherHall']]},
        toilet32:{title:'5階のトイレ',photo:'',photoNumber:32,rest:true,links:[['ホールへ','floor5']]},
        chair38:{title:'廊下の椅子',photo:'',photoNumber:38,rest:true,links:[['曲がり角へ','junction']]}
      }
    },
    aoi:{
      name:'斉藤 あおい',age:20,portrait:'斉藤あおい.jpg',
      description:['全体的にぼやけて見えて、真ん中が黒く見える。','一番前の席で、大きい文字は読める。'],
      mission:'502教室で授業を受けよう',start:'entrance',startTime:'10:30',deadline:null,
      rules:{movesPerStep:5,fatiguePerStep:2,minutesPerStep:2,restMinutes:3,restRecovery:5},
      costs:{escalator:{fatigue:10},elevator:{fatigue:5}},
      // 先生への相談は追加案です。以下の会話は自由に書き換えてください。
      consultText:'先生「板書する時は文字を大きく書きますね。できるだけはっきり話すようにしますね。」',
      // 写真だけにかける効果。説明やボタンはぼかしません。
      vision:{blur:5,darkness:0.88,size:42},
      scenes:{
        entrance:{title:'大学の入口',photo:'',text:'初めての授業。502教室へ向かおう。',links:[['1階ロビーへ','lobby']]},
        lobby:{title:'1階ロビー',photo:'',text:'5階に上がる方法を選ぼう。',event:'transport',links:[['入口へ戻る','entrance'],['トイレへ','toilet20']]},
        elevator:{title:'エレベーター内',photo:'',text:'5階へ向かっている。',links:[['5階へ降りる','floor5']]},
        escalator:{title:'エスカレーター',photo:'',text:'足元を確かめながら5階へ進もう。',links:[['5階へ進む','floor5']]},
        floor5:{title:'5階ホール',photo:'',text:'教室の場所が分からない。案内図を確かめよう。',hint:'表示が見えにくいときは距離を変えてみよう。',links:[['案内図を見る','map'],['トイレへ','toilet32']]},
        map:{title:'フロアの案内図',photo:'',text:'文字がぼやけて読み取りにくい。',links:[['近づいて見る','mapNear'],['ホールへ戻る','floor5']]},
        mapNear:{title:'案内図の近く',photo:'',vision:{blur:3,darkness:0.88,size:42},text:'近づいて教室の位置を確かめた。教室の方へ進もう。',links:[['教室へ向かう','hall5']]},
        hall5:{title:'5階の廊下',photo:'',links:[['大教室へ','classroom'],['案内図へ','map'],['椅子のある場所へ','chair38']]},
        classroom:{title:'大教室',photo:'',text:'502教室についた！受けやすい席はどこかな？。',hint:'前後や左右で見え方はどう変わるかな。先生に相談することもできるよ。',links:[['前方・左の席へ','frontLeft'],['前方・中央の席へ','frontCenter'],['前方・右の席へ','frontRight'],['中央付近の席へ','middle'],['後方の席へ','backSeat'],['先生に相談する','teacher']]},
        // 各席から撮影した写真を、それぞれの photo に入れてください。
        frontLeft:{title:'前方・左の席',photo:'',event:'seat',text:'先生が近いから、話は聞こえやすいかも',links:[['ほかの席を探す','classroom']]},
        frontCenter:{title:'前方・中央の席',photo:'',event:'seat',text:'ここだと大きい文字なら見えるかも。',links:[['ほかの席を探す','classroom']]},
        frontRight:{title:'前方・右の席',photo:'',event:'seat',text:'廊下の話し声がちょっと気になる時があるかも。',links:[['ほかの席を探す','classroom']]},
        middle:{title:'中央付近の席',photo:'',event:'seat',text:'何かが書かれていることは分かるが、文字は読みづらいかもな。',links:[['ほかの席を探す','classroom']]},
        backSeat:{title:'後方の席',photo:'',event:'seat',text:'後ろを気にせず受講できるが、周囲の話声がちょっと気になる時があるかも。',links:[['ほかの席を探す','classroom']]},
        teacher:{title:'教卓の前',photo:'',event:'consult',text:'見えにくいことを先生に伝えてみよう。',links:[['席を探す','classroom']]},
        toilet20:{title:'1階のトイレ',photo:'',photoNumber:20,rest:true,links:[['ロビーへ','lobby']]},
        toilet32:{title:'5階のトイレ',photo:'',photoNumber:32,rest:true,links:[['ホールへ','floor5']]},
        chair38:{title:'廊下の椅子',photo:'',photoNumber:38,rest:true,links:[['廊下へ','hall5']]}
      }
    }
  }
};
