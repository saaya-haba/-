/* 写真と赤丸の編集用設定（2026-10-26）
 * x: 左からの位置（0〜100%）、y: 上からの位置（0〜100%）、size: 赤丸の直径(px)。
 * target: 次の場面。管理用の番号はゲーム画面に出ません。
 * 各人物には独立したコピーを作ります。同じ写真でもイベントは別です。
 * 5階-22 と あおいの右前は写真待ち。指定名のファイルを入れるだけで反映します。
 */
(() => {
const routes = {
  "hana-7": {
    "title": "校門前",
    "photo": "photos/田中はな-7.jpeg",
    "photoLabel": "hana-7",
    "links": [],
    "hotspots": [
      {
        "x": 29.9,
        "y": 71.9,
        "size": 24,
        "target": "hana-6",
        "label": "先へ進む"
      }
    ]
  },
  "hana-6": {
    "title": "スロープ",
    "photo": "photos/田中はな-6.jpeg",
    "photoLabel": "hana-6",
    "links": [],
    "hotspots": [
      {
        "x": 50.0,
        "y": 62.3,
        "size": 24,
        "target": "hana-5",
        "label": "先へ進む"
      }
    ]
  },
  "hana-5": {
    "title": "スロープ",
    "photo": "photos/田中はな-5.jpeg",
    "photoLabel": "hana-5",
    "links": [],
    "hotspots": [
      {
        "x": 47.9,
        "y": 47.8,
        "size": 24,
        "target": "hana-4",
        "label": "先へ進む"
      }
    ]
  },
  "hana-4": {
    "title": "スロープ",
    "photo": "photos/田中はな-4.jpeg",
    "photoLabel": "hana-4",
    "links": [],
    "hotspots": [
      {
        "x": 44.4,
        "y": 41.7,
        "size": 24,
        "target": "hana-3",
        "label": "先へ進む"
      }
    ]
  },
  "hana-3": {
    "title": "スロープ",
    "photo": "photos/田中はな-3.jpeg",
    "photoLabel": "hana-3",
    "links": [],
    "hotspots": [
      {
        "x": 54.2,
        "y": 41.4,
        "size": 24,
        "target": "hana-2",
        "label": "先へ進む"
      }
    ]
  },
  "hana-2": {
    "title": "スロープ",
    "photo": "photos/田中はな-2.jpeg",
    "photoLabel": "hana-2",
    "links": [],
    "hotspots": [
      {
        "x": 65.6,
        "y": 65.1,
        "size": 24,
        "target": "hana-1",
        "label": "先へ進む"
      }
    ]
  },
  "hana-1": {
    "title": "大学の入口",
    "photo": "photos/田中はな-1.jpeg",
    "photoLabel": "hana-1",
    "links": [],
    "hotspots": [
      {
        "x": 52.1,
        "y": 52.7,
        "size": 24,
        "target": "f1-1",
        "label": "先へ進む"
      }
    ]
  },
  "f1-1": {
    "title": "1階の通路",
    "photo": "photos/1階-1.jpeg",
    "photoLabel": "f1-1",
    "links": [],
    "hotspots": [
      {
        "x": 31.5,
        "y": 60.0,
        "size": 24,
        "target": "f1-2",
        "label": "先へ進む"
      }
    ]
  },
  "f1-2": {
    "title": "1階の通路",
    "photo": "photos/1階-2.jpeg",
    "photoLabel": "f1-2",
    "links": [],
    "hotspots": [
      {
        "x": 25.2,
        "y": 58.0,
        "size": 24,
        "target": "f1-3",
        "label": "先へ進む"
      },
      {
        "x": 55.4,
        "y": 56.8,
        "size": 24,
        "target": "f1-3",
        "label": "先へ進む"
      }
    ]
  },
  "f1-3": {
    "title": "1階の通路",
    "photo": "photos/1階-3.jpeg",
    "photoLabel": "f1-3",
    "links": [],
    "hotspots": [
      {
        "x": 18.7,
        "y": 46.1,
        "size": 24,
        "target": "f1-16",
        "label": "先へ進む"
      },
      {
        "x": 85.6,
        "y": 63.1,
        "size": 24,
        "target": "f1-4",
        "label": "先へ進む"
      }
    ]
  },
  "f1-4": {
    "title": "1階の通路",
    "photo": "photos/1階-4.jpeg",
    "photoLabel": "f1-4",
    "links": [],
    "hotspots": [
      {
        "x": 7.0,
        "y": 60.0,
        "size": 24,
        "target": "f1-11",
        "label": "先へ進む"
      },
      {
        "x": 96.3,
        "y": 60.0,
        "size": 24,
        "target": "f1-5",
        "label": "先へ進む"
      }
    ]
  },
  "f1-5": {
    "title": "1階の通路",
    "photo": "photos/1階-5.jpeg",
    "photoLabel": "f1-5",
    "links": [],
    "hotspots": [
      {
        "x": 48.8,
        "y": 53.6,
        "size": 24,
        "target": "f1-6",
        "label": "先へ進む"
      }
    ]
  },
  "f1-6": {
    "title": "1階の通路",
    "photo": "photos/1階-6.jpeg",
    "photoLabel": "f1-6",
    "links": [],
    "hotspots": [
      {
        "x": 3.0,
        "y": 58.6,
        "size": 24,
        "target": "f1-17",
        "label": "先へ進む"
      },
      {
        "x": 95.4,
        "y": 58.6,
        "size": 24,
        "target": "f1-7",
        "label": "先へ進む"
      }
    ]
  },
  "f1-7": {
    "title": "1階の通路",
    "photo": "photos/1階-7.jpeg",
    "photoLabel": "f1-7",
    "links": [],
    "hotspots": [
      {
        "x": 63.3,
        "y": 52.3,
        "size": 24,
        "target": "f1-8",
        "label": "先へ進む"
      }
    ]
  },
  "f1-8": {
    "title": "1階の通路",
    "photo": "photos/1階-8.jpeg",
    "photoLabel": "f1-8",
    "links": [],
    "hotspots": [
      {
        "x": 60.7,
        "y": 56.4,
        "size": 24,
        "target": "f1-9",
        "label": "先へ進む"
      }
    ]
  },
  "f1-9": {
    "title": "高層階用エレベーター前",
    "photo": "photos/1階-9.jpeg",
    "photoLabel": "f1-9",
    "links": [],
    "hotspots": [
      {
        "x": 67.7,
        "y": 48.9,
        "size": 24,
        "target": "interact",
        "label": "設備を確かめる"
      }
    ],
    "event": "photoStaff"
  },
  "f1-11": {
    "title": "1階の通路",
    "photo": "photos/1階-11.jpeg",
    "photoLabel": "f1-11",
    "links": [],
    "hotspots": [
      {
        "x": 39.0,
        "y": 61.2,
        "size": 24,
        "target": "f1-12",
        "label": "先へ進む"
      }
    ]
  },
  "f1-12": {
    "title": "1階の通路",
    "photo": "photos/1階-12.jpeg",
    "photoLabel": "f1-12",
    "links": [],
    "hotspots": [
      {
        "x": 18.3,
        "y": 61.2,
        "size": 24,
        "target": "f1-13",
        "label": "先へ進む"
      },
      {
        "x": 71.4,
        "y": 58.0,
        "size": 24,
        "target": "f1-13",
        "label": "先へ進む"
      }
    ]
  },
  "f1-13": {
    "title": "1階の通路",
    "photo": "photos/1階-13.jpeg",
    "photoLabel": "f1-13",
    "links": [],
    "hotspots": [
      {
        "x": 36.5,
        "y": 50.0,
        "size": 24,
        "target": "f1-14",
        "label": "先へ進む"
      }
    ]
  },
  "f1-14": {
    "title": "1階の通路",
    "photo": "photos/1階-14.jpeg",
    "photoLabel": "f1-14",
    "links": [],
    "hotspots": [
      {
        "x": 10.8,
        "y": 58.0,
        "size": 24,
        "target": "f1-15",
        "label": "先へ進む"
      },
      {
        "x": 50.0,
        "y": 51.6,
        "size": 24,
        "target": "f1-16",
        "label": "先へ進む"
      }
    ]
  },
  "f1-15": {
    "title": "エスカレーター前",
    "photo": "photos/1階-15.jpeg",
    "photoLabel": "f1-15",
    "links": [],
    "hotspots": [
      {
        "x": 50.0,
        "y": 70.7,
        "size": 24,
        "target": "interact",
        "label": "設備を確かめる"
      }
    ],
    "event": "photoEscalator"
  },
  "f1-16": {
    "title": "透明エレベーター前",
    "photo": "photos/1階-16.jpeg",
    "photoLabel": "f1-16",
    "links": [],
    "hotspots": [
      {
        "x": 50,
        "y": 70.7,
        "size": 24,
        "target": "interact",
        "label": "設備を確かめる"
      }
    ],
    "event": "photoGlass"
  },
  "f1-17": {
    "title": "1階の通路",
    "photo": "photos/1階-17.jpeg",
    "photoLabel": "f1-17",
    "links": [],
    "hotspots": [
      {
        "x": 44.4,
        "y": 58.6,
        "size": 24,
        "target": "f1-18",
        "label": "先へ進む"
      }
    ]
  },
  "f1-18": {
    "title": "1階の通路",
    "photo": "photos/1階-18.jpeg",
    "photoLabel": "f1-18",
    "links": [],
    "hotspots": [
      {
        "x": 83.7,
        "y": 43.4,
        "size": 24,
        "target": "f1-19",
        "label": "先へ進む"
      }
    ]
  },
  "f1-19": {
    "title": "1階の通路",
    "photo": "photos/1階-19.jpeg",
    "photoLabel": "f1-19",
    "links": [],
    "hotspots": [
      {
        "x": 44.8,
        "y": 38.6,
        "size": 24,
        "target": "f1-20",
        "label": "先へ進む"
      },
      {
        "x": 94.3,
        "y": 35.4,
        "size": 24,
        "target": "f1-21",
        "label": "先へ進む"
      }
    ]
  },
  "f1-20": {
    "title": "1階のトイレ",
    "photo": "photos/1階-20.jpeg",
    "photoLabel": "f1-20",
    "links": [],
    "hotspots": [
      {
        "x": 42.1,
        "y": 46.6,
        "size": 24,
        "target": "interact",
        "label": "設備を確かめる"
      }
    ],
    "event": "photoRest",
    "restTarget": "f1-19",
    "restQuestion": "お手洗い行く？",
    "restText": "お手洗いに寄って少し回復した"
  },
  "f1-21": {
    "title": "1階のトイレ",
    "photo": "photos/1階-21.jpeg",
    "photoLabel": "f1-21",
    "links": [],
    "hotspots": [
      {
        "x": 34.1,
        "y": 42.2,
        "size": 24,
        "target": "interact",
        "label": "設備を確かめる"
      }
    ],
    "event": "photoRest",
    "restTarget": "f1-19",
    "restQuestion": "お手洗い行く？",
    "restText": "お手洗いに寄って少し回復した"
  },
  "f5-22": {
    "title": "5階の廊下",
    "photo": "photos/5階-22.jpeg",
    "photoLabel": "f5-22",
    "links": [],
    "hotspots": [
      {
        "x": 88,
        "y": 56,
        "size": 24,
        "target": "f5-23",
        "label": "先へ進む"
      }
    ],
    "missingPhoto": true
  },
  "f5-23": {
    "title": "5階の廊下",
    "photo": "photos/5階-23.jpeg",
    "photoLabel": "f5-23",
    "links": [],
    "hotspots": [
      {
        "x": 94.5,
        "y": 57.1,
        "size": 24,
        "target": "f5-24",
        "label": "先へ進む"
      }
    ]
  },
  "f5-24": {
    "title": "5階の廊下",
    "photo": "photos/5階-24.jpeg",
    "photoLabel": "f5-24",
    "links": [],
    "hotspots": [
      {
        "x": 36.6,
        "y": 43.8,
        "size": 24,
        "target": "f5-44",
        "label": "先へ進む"
      },
      {
        "x": 58.7,
        "y": 40.7,
        "size": 24,
        "target": "f5-25",
        "label": "先へ進む"
      }
    ]
  },
  "f5-25": {
    "title": "5階の廊下",
    "photo": "photos/5階-25.jpeg",
    "photoLabel": "f5-25",
    "links": [],
    "hotspots": [
      {
        "x": 7.0,
        "y": 56.9,
        "size": 24,
        "target": "f5-26",
        "label": "先へ進む"
      },
      {
        "x": 89.7,
        "y": 56.9,
        "size": 24,
        "target": "f5-33",
        "label": "先へ進む"
      }
    ]
  },
  "f5-26": {
    "title": "5階の廊下",
    "photo": "photos/5階-26.jpeg",
    "photoLabel": "f5-26",
    "links": [],
    "hotspots": [
      {
        "x": 34.3,
        "y": 52.3,
        "size": 24,
        "target": "f5-27",
        "label": "先へ進む"
      }
    ]
  },
  "f5-27": {
    "title": "5階の廊下",
    "photo": "photos/5階-27.jpeg",
    "photoLabel": "f5-27",
    "links": [],
    "hotspots": [
      {
        "x": 50,
        "y": 56,
        "size": 24,
        "target": "f5-28",
        "label": "先へ進む"
      }
    ]
  },
  "f5-28": {
    "title": "5階の廊下",
    "photo": "photos/5階-28.jpeg",
    "photoLabel": "f5-28",
    "links": [],
    "hotspots": [
      {
        "x": 78.3,
        "y": 60.6,
        "size": 24,
        "target": "f5-29",
        "label": "先へ進む"
      }
    ]
  },
  "f5-29": {
    "title": "5階の廊下",
    "photo": "photos/5階-29.jpeg",
    "photoLabel": "f5-29",
    "links": [],
    "hotspots": [
      {
        "x": 68.3,
        "y": 49.7,
        "size": 24,
        "target": "f5-30",
        "label": "先へ進む"
      }
    ]
  },
  "f5-30": {
    "title": "5階の廊下",
    "photo": "photos/5階-30.jpeg",
    "photoLabel": "f5-30",
    "links": [],
    "hotspots": [
      {
        "x": 86.2,
        "y": 59.5,
        "size": 24,
        "target": "f5-31",
        "label": "先へ進む"
      }
    ]
  },
  "f5-31": {
    "title": "5階のトイレ",
    "photo": "photos/5階-31.jpeg",
    "photoLabel": "f5-31",
    "links": [],
    "hotspots": [],
    "event": "photoRest",
    "restTarget": "f5-32",
    "restQuestion": "お手洗い行く？",
    "restText": "お手洗いに寄って少し回復した"
  },
  "f5-32": {
    "title": "5階の廊下",
    "photo": "photos/5階-32.jpeg",
    "photoLabel": "f5-32",
    "links": [],
    "hotspots": [
      {
        "x": 44.3,
        "y": 53.7,
        "size": 24,
        "target": "f5-33",
        "label": "先へ進む"
      }
    ]
  },
  "f5-33": {
    "title": "5階の廊下",
    "photo": "photos/5階-33.jpeg",
    "photoLabel": "f5-33",
    "links": [],
    "hotspots": [
      {
        "x": 11.2,
        "y": 59.5,
        "size": 24,
        "target": "aoiClass",
        "label": "教室を確かめる"
      },
      {
        "x": 50.0,
        "y": 46.7,
        "size": 24,
        "target": "f5-34",
        "label": "先へ進む"
      }
    ]
  },
  "f5-34": {
    "title": "5階の廊下",
    "photo": "photos/5階-34.jpeg",
    "photoLabel": "f5-34",
    "links": [],
    "hotspots": [
      {
        "x": 94.4,
        "y": 59.5,
        "size": 24,
        "target": "f5-35",
        "label": "先へ進む"
      }
    ]
  },
  "f5-35": {
    "title": "5階の廊下",
    "photo": "photos/5階-35.jpeg",
    "photoLabel": "f5-35",
    "links": [],
    "hotspots": [
      {
        "x": 55.6,
        "y": 43.7,
        "size": 24,
        "target": "f5-37",
        "label": "先へ進む"
      },
      {
        "x": 92.7,
        "y": 56.4,
        "size": 24,
        "target": "f5-36",
        "label": "先へ進む"
      }
    ]
  },
  "f5-36": {
    "title": "椅子のある場所",
    "photo": "photos/5階-36.jpeg",
    "photoLabel": "f5-36",
    "links": [],
    "hotspots": [],
    "event": "photoRest",
    "restTarget": "f5-35",
    "restQuestion": "椅子で少し休憩する？",
    "restText": "椅子で休んで少し回復した"
  },
  "f5-37": {
    "title": "5階の廊下",
    "photo": "photos/5階-37.jpeg",
    "photoLabel": "f5-37",
    "links": [],
    "hotspots": [
      {
        "x": 55.6,
        "y": 46.9,
        "size": 24,
        "target": "f5-38",
        "label": "先へ進む"
      }
    ]
  },
  "f5-38": {
    "title": "5階の廊下",
    "photo": "photos/5階-38.jpeg",
    "photoLabel": "f5-38",
    "links": [],
    "hotspots": [
      {
        "x": 31.8,
        "y": 50.0,
        "size": 24,
        "target": "f5-39",
        "label": "先へ進む"
      },
      {
        "x": 94.4,
        "y": 65.8,
        "size": 24,
        "target": "f5-41",
        "label": "先へ進む"
      }
    ]
  },
  "f5-39": {
    "title": "5階の廊下",
    "photo": "photos/5階-39.jpeg",
    "photoLabel": "f5-39",
    "links": [],
    "hotspots": [
      {
        "x": 24.2,
        "y": 57.0,
        "size": 24,
        "target": "f5-40",
        "label": "先へ進む"
      }
    ]
  },
  "f5-40": {
    "title": "エレベーター前",
    "photo": "photos/5階-40.jpeg",
    "photoLabel": "f5-40",
    "links": [],
    "hotspots": [
      {
        "x": 55.6,
        "y": 56.3,
        "size": 24,
        "target": "notice",
        "label": "エレベーターを確かめる"
      }
    ],
    "notice": "エレベーターだね。教室はこの階だから、戻って探そう",
    "noticeTarget": "f5-38"
  },
  "f5-41": {
    "title": "5階の廊下",
    "photo": "photos/5階-41.jpeg",
    "photoLabel": "f5-41",
    "links": [],
    "hotspots": [
      {
        "x": 53.6,
        "y": 43.4,
        "size": 24,
        "target": "f5-42",
        "label": "先へ進む"
      }
    ]
  },
  "f5-42": {
    "title": "5階の廊下",
    "photo": "photos/5階-42.jpeg",
    "photoLabel": "f5-42",
    "links": [],
    "hotspots": [
      {
        "x": 36.9,
        "y": 45.6,
        "size": 24,
        "target": "f5-23",
        "label": "先へ進む"
      },
      {
        "x": 92.0,
        "y": 53.9,
        "size": 24,
        "target": "f5-43",
        "label": "先へ進む"
      }
    ]
  },
  "f5-43": {
    "title": "エレベーター前",
    "photo": "photos/5階-43.jpeg",
    "photoLabel": "f5-43",
    "links": [],
    "hotspots": [
      {
        "x": 46.4,
        "y": 46.1,
        "size": 24,
        "target": "notice",
        "label": "エレベーターを確かめる"
      }
    ],
    "notice": "エレベーターだね。教室はこの階だよ。",
    "noticeTarget": "f5-42"
  },
  "f5-44": {
    "title": "511教室の入口",
    "photo": "photos/5階-44.jpeg",
    "photoLabel": "f5-44",
    "links": [],
    "hotspots": [
      {
        "x": 45.9,
        "y": 53.1,
        "size": 24,
        "target": "hanaClass",
        "label": "教室を確かめる"
      }
    ]
  },
  "f5-45": {
    "title": "5階の廊下",
    "photo": "photos/5階-45.jpeg",
    "photoLabel": "f5-45",
    "links": [],
    "hotspots": [
      {
        "x": 86.2,
        "y": 51.5,
        "size": 24,
        "target": "f5-46",
        "label": "先へ進む"
      }
    ]
  },
  "f5-46": {
    "title": "5階の廊下",
    "photo": "photos/5階-46.jpeg",
    "photoLabel": "f5-46",
    "links": [],
    "hotspots": [
      {
        "x": 86.4,
        "y": 55.0,
        "size": 24,
        "target": "f5-47",
        "label": "先へ進む"
      }
    ]
  },
  "f5-47": {
    "title": "5階の廊下",
    "photo": "photos/5階-47.jpeg",
    "photoLabel": "f5-47",
    "links": [],
    "hotspots": [
      {
        "x": 17.7,
        "y": 48.6,
        "size": 24,
        "target": "f5-43",
        "label": "先へ進む"
      }
    ]
  }
};
const D=window.GAME_DATA;
for (const [id,c] of Object.entries(D.characters)) {
  Object.assign(c.scenes,structuredClone(routes));
  c.start=id==='hana'?'hana-7':'f1-1';
  for(const n of Object.values(c.scenes)) {
    if(n.photoLabel)n.text='';
    for(const h of n.hotspots||[]) {
      if(h.target==='hanaClass') {h.target=id==='hana'?'door':'otherClass';h.label='教室の入口を確かめる';}
      if(h.target==='aoiClass') {h.target=id==='aoi'?'classroom':'otherClass';h.label='教室の入口を確かめる';}
    }
  }
  c.scenes.otherClass={title:'教室の入口',photo:'',text:'ここは別の教室だね。自分の教室を探そう。',links:[],event:'otherClass'};
  c.scenes['f1-9'].text=id==='hana'?c.scenes.staff.text:'エレベーターがある。5階へ上がろうか。';
  c.scenes['f1-16'].text=id==='hana'?c.scenes.glass.text:'エレベーターがある。5階へ上がろうか。';
  c.scenes['f1-15'].text=id==='hana'?'エスカレーターだね。エレベーターを探そう。':'足元を確かめながら5階へ進もう。';
  c.scenes['f1-15'].hotspots[0].label='エスカレーターを確かめる';

  if(id==='hana') {
    c.scenes.door.photo='photos/5階-44.jpeg';
    c.scenes['hana-7'].text=c.scenes.gate.text;
    c.scenes['hana-6'].text=c.scenes.slope.text;
    c.scenes['f1-9'].links=[['通路へ戻る','f1-8']];
    c.scenes['f1-16'].links=[['別のエレベーターを探す','f1-3']];
    c.scenes['f1-15'].links=[['戻って探す','f1-14']];
    c.scenes.door.links=[['廊下へ戻る','f5-24']];
  } else {
    c.scenes['f1-1'].text=c.scenes.entrance.text;
    for(const n of [9,15,16])c.scenes['f1-'+n].links=[['乗らずに戻る','f1-'+(n===9?8:n===15?14:3)]];
    c.scenes.classroom.photo='photos/あおい-502前入口.jpeg';
    c.scenes.classroom.title='502教室';
    const seats={frontLeft:'左前',frontCenter:'前',frontRight:'右前',middle:'真ん中',backSeat:'後ろ'};
    for(const [key,name] of Object.entries(seats))c.scenes[key].photo='photos/あおい-502-'+name+'.jpeg';
    c.scenes.frontRight.missingPhoto=true;
    c.scenes.map.photo=c.scenes.mapNear.photo='photos/5階-45.jpeg';
    // 到着地点から案内図を確認して、元の写真の道順へ戻れます。
    for(const n of [22,25,45]) {c.scenes['f5-'+n].links=[['案内図を見る','map']];c.scenes['f5-'+n].text=c.scenes.floor5.text;}
  }
}
// ===== 2026-10-26 追加指定分（写真番号は編集用のみ） =====
for(const [id,c] of Object.entries(D.characters)) {
  const S=c.scenes;
  // 1階の表記を統一。設備名は変えません。
  for(const [key,n] of Object.entries(S))if(key.startsWith('f1-')&&![9,15,16].includes(Number(key.slice(3))))n.title='1階エントランス';
  // 5階-22：中央は案内図、右は23。数値は写真内の割合です。
  S['f5-22'].hotspots=[
    {x:66.7,y:43,size:24,target:'map',label:'案内図を見る'},
    {x:90.9,y:55.5,size:24,target:'f5-23',label:'先へ進む'}
  ];
  delete S['f5-22'].missingPhoto;
  for(const num of [22,25,45])S['f5-'+num].links=[];
  if(id==='aoi') {
    S.map.photo=S.mapNear.photo='photos/5階-案内図.jpeg';
  } else {
    S.map={title:'5階の案内図',photo:'photos/5階-案内図.jpeg',text:'案内図で教室の位置を確かめよう。',links:[['戻る','f5-22']]};
  }
  // 下り側では移動しません。右側の既存経路はそのままです。
  S['f1-12'].hotspots[0]={...S['f1-12'].hotspots[0],target:'say',message:'下りのエスカレーターだね。反対側だ。',label:'下りのエスカレーターを確かめる'};
  // 透明エレベーターの会話は中央の赤丸を押した時だけ。
  S['f1-16'].interactionOnly=true;
  S['f1-16'].hotspots=[
    {x:12,y:56,size:24,target:'f1-15',label:'エスカレーターの方へ'},
    {...S['f1-16'].hotspots[0]},
    {x:88,y:56,size:24,target:'f1-3',label:'エントランスへ'}
  ];
  for(const num of [19,21])Object.assign(S['f1-'+num],{
    event:'photoRest',restTarget:'f1-18',restNoDirect:true,
    restQuestion:'お手洗い行く？',restText:'お手洗いに寄って少し回復した'
  });
  // 下側の戻り用赤丸を追加。既存の丸には触れません。
  for(const [from,to] of [[5,4],[6,5],[7,6],[8,7],[17,6],[18,17]])S['f1-'+from].hotspots.push({x:50,y:68,size:24,target:'f1-'+to,label:'前の場所へ戻る'});
  if(id==='aoi') {
    // 暗さと暗い範囲は維持し、ぼかしだけを弱めます。
    c.vision.blur=2;
    S.mapNear.vision={...S.mapNear.vision,blur:1.2};
    S.classroom.photo='photos/あおい-502-入口.jpeg';
    S.classroom.links=[];
    S.classroom.hotspots=[
      {x:5.5,y:53.4,size:24,target:'backSeat',label:'後方の席'},
      {x:37.8,y:49,size:24,target:'middle',label:'中央付近の席'},
      {x:50.1,y:46.7,size:24,target:'frontLeft',label:'前方左の席'},
      {x:57.6,y:44.6,size:24,target:'teacher',label:'先生'},
      {x:69.5,y:46.8,size:24,target:'frontCenter',label:'前方中央の席'},
      {x:97.4,y:47.9,size:24,target:'frontRight',label:'前方右前の席'}
    ];
    delete S.frontRight.missingPhoto;
    S.otherClass.photo='photos/5階-44.jpeg';
    S.otherClass.returnTarget='f5-24';
    for(const num of [22,25,45]) {
      S['f5-'+num].text='';
      S['f5-'+num].arrivalMessage='教室の場所はどこだろう？案内図を見てみたいな。';
    }
  }
}

// あおい：席ごとのクリア前ストーリー。文章をここで自由に編集できます。
D.characters.aoi.seatStories={
 frontLeft:{text:'授業を受けた！左前の席で、見える範囲を確かめながら授業を受けた。文字の読みづらさも感じた。',consulted:'授業を受けた！先生に見えにくさを伝え、左前の席で受ける方法を一緒に考えてもらえた。'},
 frontCenter:{text:'授業を受けた！前の中央の席でも文字は読みづらかった。どんな工夫があれば受けやすくなるかな。',consulted:'授業を受けた！先生が文字を大きく書いてくれたので、受けやすかった！'},
 frontRight:{text:'授業を受けた！右前の席から、見える範囲を確かめて受けた。文字の読みづらさは残った。'},
 middle:{text:'授業を受けた！真ん中の席では、板書に何か書いてあることは分かったけれど、文字は読みにくかった。'},
 backSeat:{text:'授業を受けた！後ろの席からは文字を読み取るのが難しかった。どんな配慮があればよかったかな。'}
};
// ===== 2026-11-01：5階の教室外のみ更新 =====
// 赤丸 x=写真の左から%、y=上から%、size=直径px。番号は編集用です。
const floorFiveRoutes = {
  "f5-22": {
    "title": "5階の廊下",
    "photo": "photos/5階-22.jpeg",
    "photoLabel": "f5-22",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 6.19,
        "y": 68.01,
        "size": 24,
        "target": "f5-67",
        "label": "先へ進む"
      },
      {
        "x": 64.06,
        "y": 47.64,
        "size": 24,
        "target": "map",
        "label": "ここを確かめる"
      },
      {
        "x": 91.61,
        "y": 70.32,
        "size": 24,
        "target": "f5-23",
        "label": "先へ進む"
      }
    ]
  },
  "f5-23": {
    "title": "5階の廊下",
    "photo": "photos/5階-23.jpeg",
    "photoLabel": "f5-23",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 11.52,
        "y": 46.97,
        "size": 24,
        "target": "f5-24",
        "label": "先へ進む"
      },
      {
        "x": 87.27,
        "y": 53.08,
        "size": 24,
        "target": "f5-25",
        "label": "先へ進む"
      }
    ]
  },
  "f5-24": {
    "title": "509教室の入口",
    "photo": "photos/5階-24.jpeg",
    "photoLabel": "f5-24",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 18.07,
        "y": 69.16,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "509",
    "noticeTarget": "f5-23"
  },
  "f5-25": {
    "title": "5階の廊下",
    "photo": "photos/5階-25.jpeg",
    "photoLabel": "f5-25",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 18.03,
        "y": 53.42,
        "size": 24,
        "target": "f5-26",
        "label": "先へ進む"
      },
      {
        "x": 40.5,
        "y": 48.93,
        "size": 24,
        "target": "f5-27",
        "label": "先へ進む"
      }
    ]
  },
  "f5-26": {
    "title": "510教室の入口",
    "photo": "photos/5階-26.jpeg",
    "photoLabel": "f5-26",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 53.1,
        "y": 51.88,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "510",
    "noticeTarget": "f5-25"
  },
  "f5-27": {
    "title": "5階の廊下",
    "photo": "photos/5階-27.jpeg",
    "photoLabel": "f5-27",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 10.86,
        "y": 49.47,
        "size": 24,
        "target": "f5-28",
        "label": "先へ進む"
      },
      {
        "x": 51.11,
        "y": 46.34,
        "size": 24,
        "target": "f5-29",
        "label": "先へ進む"
      }
    ]
  },
  "f5-28": {
    "title": "5階の廊下",
    "photo": "photos/5階-28.jpeg",
    "photoLabel": "f5-28",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 54.27,
        "y": 52.61,
        "size": 24,
        "target": "hanaClass",
        "label": "ここを確かめる"
      }
    ]
  },
  "f5-29": {
    "title": "5階の廊下",
    "photo": "photos/5階-29.jpeg",
    "photoLabel": "f5-29",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 50.96,
        "y": 51.18,
        "size": 24,
        "target": "f5-30",
        "label": "先へ進む"
      }
    ]
  },
  "f5-30": {
    "title": "5階の廊下",
    "photo": "photos/5階-30.jpeg",
    "photoLabel": "f5-30",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 5.59,
        "y": 57.15,
        "size": 24,
        "target": "f5-67",
        "label": "先へ進む"
      },
      {
        "x": 50.0,
        "y": 44.97,
        "size": 24,
        "target": "f5-31",
        "label": "先へ進む"
      },
      {
        "x": 91.57,
        "y": 57.46,
        "size": 24,
        "target": "f5-32",
        "label": "先へ進む"
      }
    ]
  },
  "f5-31": {
    "title": "501教室の入口",
    "photo": "photos/5階-31.jpeg",
    "photoLabel": "f5-31",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 84.96,
        "y": 53.03,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "501",
    "noticeTarget": "f5-30"
  },
  "f5-32": {
    "title": "5階の廊下",
    "photo": "photos/5階-32.jpeg",
    "photoLabel": "f5-32",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 10.01,
        "y": 50.26,
        "size": 24,
        "target": "f5-31",
        "label": "先へ進む"
      },
      {
        "x": 54.64,
        "y": 50.98,
        "size": 24,
        "target": "f5-33",
        "label": "先へ進む"
      }
    ]
  },
  "f5-33": {
    "title": "5階の廊下",
    "photo": "photos/5階-33.jpeg",
    "photoLabel": "f5-33",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 12.3,
        "y": 54.64,
        "size": 24,
        "target": "f5-34",
        "label": "先へ進む"
      },
      {
        "x": 51.53,
        "y": 51.0,
        "size": 24,
        "target": "f5-35",
        "label": "先へ進む"
      },
      {
        "x": 80.36,
        "y": 53.92,
        "size": 24,
        "target": "f5-37",
        "label": "先へ進む"
      }
    ]
  },
  "f5-34": {
    "title": "5階の廊下",
    "photo": "photos/5階-34.jpeg",
    "photoLabel": "f5-34",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 60.26,
        "y": 61.29,
        "size": 24,
        "target": "aoiClass",
        "label": "ここを確かめる"
      }
    ]
  },
  "f5-35": {
    "title": "5階の廊下",
    "photo": "photos/5階-35.jpeg",
    "photoLabel": "f5-35",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 10.11,
        "y": 49.02,
        "size": 24,
        "target": "f5-36",
        "label": "先へ進む"
      },
      {
        "x": 53.09,
        "y": 51.21,
        "size": 24,
        "target": "f5-38",
        "label": "先へ進む"
      }
    ]
  },
  "f5-36": {
    "title": "5階の廊下",
    "photo": "photos/5階-36.jpeg",
    "photoLabel": "f5-36",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 86.07,
        "y": 54.14,
        "size": 24,
        "target": "aoiClass",
        "label": "ここを確かめる"
      }
    ]
  },
  "f5-37": {
    "title": "50A教室の入口",
    "photo": "photos/5階-37.jpeg",
    "photoLabel": "f5-37",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 87.82,
        "y": 54.04,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "50A",
    "noticeTarget": "f5-33"
  },
  "f5-38": {
    "title": "5階の廊下",
    "photo": "photos/5階-38.jpeg",
    "photoLabel": "f5-38",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 13.48,
        "y": 52.47,
        "size": 24,
        "target": "f5-39",
        "label": "先へ進む"
      },
      {
        "x": 50.0,
        "y": 52.12,
        "size": 24,
        "target": "f5-40",
        "label": "先へ進む"
      }
    ]
  },
  "f5-39": {
    "title": "503教室の入口",
    "photo": "photos/5階-39.jpeg",
    "photoLabel": "f5-39",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 52.21,
        "y": 55.11,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "503",
    "noticeTarget": "f5-38"
  },
  "f5-40": {
    "title": "5階の廊下",
    "photo": "photos/5階-40.jpeg",
    "photoLabel": "f5-40",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 47.08,
        "y": 48.74,
        "size": 24,
        "target": "f5-42",
        "label": "先へ進む"
      },
      {
        "x": 83.51,
        "y": 49.3,
        "size": 24,
        "target": "f5-41",
        "label": "先へ進む"
      }
    ]
  },
  "f5-41": {
    "title": "50B教室の入口",
    "photo": "photos/5階-41.jpeg",
    "photoLabel": "f5-41",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 12.46,
        "y": 50.87,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "50B",
    "noticeTarget": "f5-40"
  },
  "f5-42": {
    "title": "5階の廊下",
    "photo": "photos/5階-42.jpeg",
    "photoLabel": "f5-42",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 16.57,
        "y": 53.91,
        "size": 24,
        "target": "f5-43",
        "label": "先へ進む"
      },
      {
        "x": 43.11,
        "y": 53.91,
        "size": 24,
        "target": "f5-44",
        "label": "先へ進む"
      },
      {
        "x": 91.01,
        "y": 53.91,
        "size": 24,
        "target": "f5-46",
        "label": "先へ進む"
      }
    ]
  },
  "f5-43": {
    "title": "503教室の入口",
    "photo": "photos/5階-43.jpeg",
    "photoLabel": "f5-43",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 62.77,
        "y": 56.33,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "503",
    "noticeTarget": "f5-42"
  },
  "f5-44": {
    "title": "5階の廊下",
    "photo": "photos/5階-44.jpeg",
    "photoLabel": "f5-44",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 26.09,
        "y": 51.0,
        "size": 24,
        "target": "f5-45",
        "label": "先へ進む"
      },
      {
        "x": 94.32,
        "y": 74.41,
        "size": 24,
        "target": "f5-46",
        "label": "先へ進む"
      }
    ]
  },
  "f5-45": {
    "title": "504教室の入口",
    "photo": "photos/5階-45.jpeg",
    "photoLabel": "f5-45",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 64.12,
        "y": 48.95,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "504",
    "noticeTarget": "f5-44"
  },
  "f5-46": {
    "title": "5階の廊下",
    "photo": "photos/5階-46.jpeg",
    "photoLabel": "f5-46",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 39.92,
        "y": 47.08,
        "size": 24,
        "target": "f5-48",
        "label": "先へ進む"
      },
      {
        "x": 84.96,
        "y": 53.82,
        "size": 24,
        "target": "f5-47",
        "label": "先へ進む"
      }
    ]
  },
  "f5-47": {
    "title": "椅子のある場所",
    "photo": "photos/5階-47.jpeg",
    "photoLabel": "f5-47",
    "text": "",
    "links": [],
    "hotspots": [],
    "event": "photoRest",
    "restTarget": "f5-46",
    "restNoDirect": true,
    "restQuestion": "椅子で少し休憩する？",
    "restText": "椅子で休んで少し回復した"
  },
  "f5-48": {
    "title": "5階の廊下",
    "photo": "photos/5階-48.jpeg",
    "photoLabel": "f5-48",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 16.33,
        "y": 49.97,
        "size": 24,
        "target": "f5-49",
        "label": "先へ進む"
      },
      {
        "x": 53.33,
        "y": 46.19,
        "size": 24,
        "target": "f5-50",
        "label": "先へ進む"
      }
    ]
  },
  "f5-49": {
    "title": "505教室の入口",
    "photo": "photos/5階-49.jpeg",
    "photoLabel": "f5-49",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 38.24,
        "y": 59.21,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "505",
    "noticeTarget": "f5-48"
  },
  "f5-50": {
    "title": "5階の廊下",
    "photo": "photos/5階-50.jpeg",
    "photoLabel": "f5-50",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 24.55,
        "y": 48.28,
        "size": 24,
        "target": "f5-51",
        "label": "先へ進む"
      },
      {
        "x": 51.03,
        "y": 46.19,
        "size": 24,
        "target": "f5-52",
        "label": "先へ進む"
      }
    ]
  },
  "f5-51": {
    "title": "506教室の入口",
    "photo": "photos/5階-51.jpeg",
    "photoLabel": "f5-51",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 58.28,
        "y": 53.28,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "506",
    "noticeTarget": "f5-50"
  },
  "f5-52": {
    "title": "5階の廊下",
    "photo": "photos/5階-52.jpeg",
    "photoLabel": "f5-52",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 43.27,
        "y": 51.89,
        "size": 24,
        "target": "f5-53",
        "label": "先へ進む"
      },
      {
        "x": 91.27,
        "y": 74.65,
        "size": 24,
        "target": "f5-55",
        "label": "先へ進む"
      }
    ]
  },
  "f5-53": {
    "title": "5階の廊下",
    "photo": "photos/5階-53.jpeg",
    "photoLabel": "f5-53",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 22.54,
        "y": 53.07,
        "size": 24,
        "target": "f5-54",
        "label": "先へ進む"
      }
    ]
  },
  "f5-54": {
    "title": "エレベーター前",
    "photo": "photos/5階-54.jpeg",
    "photoLabel": "f5-54",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 54.1,
        "y": 52.39,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "notice": "エレベーターだね。教室はこの階だから、戻って探そう",
    "noticeTarget": "f5-52"
  },
  "f5-55": {
    "title": "5階の廊下",
    "photo": "photos/5階-55.jpeg",
    "photoLabel": "f5-55",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 24.37,
        "y": 47.93,
        "size": 24,
        "target": "f5-56",
        "label": "先へ進む"
      },
      {
        "x": 60.12,
        "y": 49.26,
        "size": 24,
        "target": "f5-57",
        "label": "先へ進む"
      }
    ]
  },
  "f5-56": {
    "title": "507教室の入口",
    "photo": "photos/5階-56.jpeg",
    "photoLabel": "f5-56",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 15.78,
        "y": 54.49,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "507",
    "noticeTarget": "f5-55"
  },
  "f5-57": {
    "title": "5階の廊下",
    "photo": "photos/5階-57.jpeg",
    "photoLabel": "f5-57",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 45.13,
        "y": 47.67,
        "size": 24,
        "target": "f5-59",
        "label": "先へ進む"
      },
      {
        "x": 83.46,
        "y": 49.86,
        "size": 24,
        "target": "f5-58",
        "label": "先へ進む"
      }
    ]
  },
  "f5-58": {
    "title": "50C教室の入口",
    "photo": "photos/5階-58.jpeg",
    "photoLabel": "f5-58",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 84.74,
        "y": 52.93,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "50C",
    "noticeTarget": "f5-57"
  },
  "f5-59": {
    "title": "5階の廊下",
    "photo": "photos/5階-59.jpeg",
    "photoLabel": "f5-59",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 29.87,
        "y": 51.61,
        "size": 24,
        "target": "f5-61",
        "label": "先へ進む"
      },
      {
        "x": 51.34,
        "y": 47.81,
        "size": 24,
        "target": "f5-62",
        "label": "先へ進む"
      },
      {
        "x": 88.02,
        "y": 53.84,
        "size": 24,
        "target": "f5-60",
        "label": "先へ進む"
      }
    ]
  },
  "f5-60": {
    "title": "椅子のある場所",
    "photo": "photos/5階-60.jpeg",
    "photoLabel": "f5-60",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 68.9,
        "y": 52.93,
        "size": 24,
        "target": "interact",
        "label": "ここを確かめる"
      }
    ],
    "event": "photoRest",
    "restTarget": "f5-59",
    "restNoDirect": true,
    "restQuestion": "椅子で少し休憩する？",
    "restText": "椅子で休んで少し回復した",
    "interactionOnly": true
  },
  "f5-61": {
    "title": "508教室の入口",
    "photo": "photos/5階-61.jpeg",
    "photoLabel": "f5-61",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 84.81,
        "y": 47.07,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "508",
    "noticeTarget": "f5-59"
  },
  "f5-62": {
    "title": "5階の廊下",
    "photo": "photos/5階-62.jpeg",
    "photoLabel": "f5-62",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 19.19,
        "y": 47.05,
        "size": 24,
        "target": "f5-63",
        "label": "先へ進む"
      },
      {
        "x": 46.99,
        "y": 47.05,
        "size": 24,
        "target": "f5-65",
        "label": "先へ進む"
      },
      {
        "x": 83.66,
        "y": 51.26,
        "size": 24,
        "target": "f5-64",
        "label": "先へ進む"
      }
    ]
  },
  "f5-63": {
    "title": "509教室の入口",
    "photo": "photos/5階-63.jpeg",
    "photoLabel": "f5-63",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 11.08,
        "y": 50.0,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "room": "509",
    "noticeTarget": "f5-62"
  },
  "f5-64": {
    "title": "エレベーター前",
    "photo": "photos/5階-64.jpeg",
    "photoLabel": "f5-64",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 43.65,
        "y": 43.36,
        "size": 24,
        "target": "notice",
        "label": "ここを確かめる"
      }
    ],
    "notice": "エレベーターだね。教室はこの階だから、戻って探そう",
    "noticeTarget": "f5-62"
  },
  "f5-65": {
    "title": "5階の廊下",
    "photo": "photos/5階-65.jpeg",
    "photoLabel": "f5-65",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 17.3,
        "y": 44.15,
        "size": 24,
        "target": "f5-66",
        "label": "先へ進む"
      },
      {
        "x": 62.38,
        "y": 47.07,
        "size": 24,
        "target": "f5-23",
        "label": "先へ進む"
      }
    ]
  },
  "f5-66": {
    "title": "5階の廊下",
    "photo": "photos/5階-66.jpeg",
    "photoLabel": "f5-66",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 48.88,
        "y": 30.19,
        "size": 24,
        "target": "map65",
        "label": "ここを確かめる"
      }
    ]
  },
  "f5-67": {
    "title": "5階の廊下",
    "photo": "photos/5階-67.jpeg",
    "photoLabel": "f5-67",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 34.25,
        "y": 52.31,
        "size": 24,
        "target": "f5-68",
        "label": "先へ進む"
      }
    ]
  },
  "f5-68": {
    "title": "5階の廊下",
    "photo": "photos/5階-68.jpeg",
    "photoLabel": "f5-68",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 27.45,
        "y": 56.91,
        "size": 24,
        "target": "f5-69",
        "label": "先へ進む"
      }
    ]
  },
  "f5-69": {
    "title": "5階の廊下",
    "photo": "photos/5階-69.jpeg",
    "photoLabel": "f5-69",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 78.28,
        "y": 60.58,
        "size": 24,
        "target": "f5-70",
        "label": "先へ進む"
      }
    ]
  },
  "f5-70": {
    "title": "5階の廊下",
    "photo": "photos/5階-70.jpeg",
    "photoLabel": "f5-70",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 68.35,
        "y": 49.71,
        "size": 24,
        "target": "f5-71",
        "label": "先へ進む"
      }
    ]
  },
  "f5-71": {
    "title": "5階の廊下",
    "photo": "photos/5階-71.jpeg",
    "photoLabel": "f5-71",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 86.17,
        "y": 59.54,
        "size": 24,
        "target": "f5-72",
        "label": "先へ進む"
      }
    ]
  },
  "f5-72": {
    "title": "5階のトイレ",
    "photo": "photos/5階-72.jpeg",
    "photoLabel": "f5-72",
    "text": "",
    "links": [],
    "hotspots": [],
    "event": "photoRest",
    "restTarget": "f5-73",
    "restNoDirect": true,
    "restQuestion": "お手洗い行く？",
    "restText": "お手洗いに寄って少し回復した"
  },
  "f5-73": {
    "title": "5階の廊下",
    "photo": "photos/5階-73.jpeg",
    "photoLabel": "f5-73",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 44.35,
        "y": 53.67,
        "size": 24,
        "target": "f5-32",
        "label": "先へ進む"
      }
    ]
  },
  "f5-74": {
    "title": "5階の廊下",
    "photo": "photos/5階-74.jpeg",
    "photoLabel": "f5-74",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 86.15,
        "y": 51.49,
        "size": 24,
        "target": "f5-75",
        "label": "先へ進む"
      }
    ]
  },
  "f5-75": {
    "title": "5階の廊下",
    "photo": "photos/5階-75.jpeg",
    "photoLabel": "f5-75",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 86.38,
        "y": 54.95,
        "size": 24,
        "target": "f5-76",
        "label": "先へ進む"
      }
    ]
  },
  "f5-76": {
    "title": "5階の廊下",
    "photo": "photos/5階-76.jpeg",
    "photoLabel": "f5-76",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 17.71,
        "y": 48.59,
        "size": 24,
        "target": "f5-55",
        "label": "先へ進む"
      }
    ]
  }
};
for(const [id,c] of Object.entries(D.characters)) {
 const S=c.scenes;
 // 写真を改番したので旧5階ルートを置き換えます。1階・教室内は維持します。
 for(const key of Object.keys(S))if(key.startsWith('f5-'))delete S[key];
 Object.assign(S,structuredClone(floorFiveRoutes));
 for(const n of Object.values(S))if(n.photoLabel&&n.photoLabel.startsWith('f5-')) {
   if(n.room)n.notice=n.room+'教室だ。'+(id==='hana'?'511':'502')+'の教室を探そう。';
   for(const h of n.hotspots||[]) {
     if(h.target==='map')h.label='案内図を見る';
     if(h.target==='map65')h.label='案内図を確認する';
     if(h.target==='hanaClass') {
       if(id==='hana'){h.target='door';h.label='511教室に入る';}
       else {h.target='notice';n.title='511教室の入口';n.notice='511教室だ。502の教室を探そう。';n.noticeTarget='f5-27';}
     }
     if(h.target==='aoiClass') {
       if(id==='aoi'){h.target='classroom';h.label='502教室に入る';}
       else {h.target='notice';n.title='502教室の入口';n.notice='502教室だ。511の教室を探そう。';n.noticeTarget=n.photoLabel==='f5-34'?'f5-33':'f5-35';}
     }
   }
 }
 // 511教室の外側の写真と廊下への接続のみ変更。
 if(id==='hana'){S.door.photo='photos/5階-28.jpeg';S.door.links=[['廊下へ戻る','f5-27']];}
 // 既存の案内図の確認手順は22からの接続に残します。
 if(id==='hana')S.map.links=[['戻る','f5-22']];
 S.map65={title:'5階の案内図',photo:'photos/5階-案内図.jpeg',text:'案内図で教室の位置を確かめよう。',links:[],event:'floorMap',returnTarget:'f5-65'};
 if(id==='aoi')for(const num of [22,30,74])S['f5-'+num].arrivalMessage='エレベーター前に案内図があるらしい！確認してみようかな？';
}

// ===== 2026-11-02：今回の追加指定分のみ =====
for(const [id,c] of Object.entries(D.characters)) {
 const S=c.scenes;
 // 22左の丸を削除。中央は66、右は23のまま。
 S['f5-22'].hotspots=S['f5-22'].hotspots.filter(h=>h.target!=='f5-67');
 S['f5-22'].hotspots.find(h=>h.target==='map').target='f5-66';
 // 22から66を見た場合だけ、この確認手順を使います。
 // 65から66を見た場合の既存の流れは維持します。
 S.map22Attempt={title:'5階の案内図',photo:'photos/5階-66.jpeg',text:'文字がぼやけて読み取りにくい。',links:[['近づいて見る','map22Close'],['ホールへ戻る','f5-22']]};
 S.map22Close={...(S.mapNear||S.map),title:'5階の案内図',photo:'photos/5階-案内図.jpeg',text:(S.mapNear||S.map).text,links:[['ホールへ戻る','f5-22']]};
 if(id==='aoi') {
   // 後入口は、従来の写真・赤丸と同じ構成です。
   S.classroom.photo='photos/あおい-502-後入口.jpeg';
   // 前入口：写真上の左から、右前方・後ろ・中央・前方中央・左前方・先生。
   S.classroomFront={...structuredClone(S.classroom),photo:'photos/あおい-502-前入口.jpeg',hotspots:[
     {x:7,y:58.1,size:24,target:'frontRight',label:'右前方の席'},
     {x:16.1,y:50.5,size:24,target:'backSeat',label:'後方の席'},
     {x:31.7,y:52.8,size:24,target:'middle',label:'中央付近の席'},
     {x:58.3,y:54.7,size:24,target:'frontCenter',label:'前方中央の席'},
     {x:79.8,y:51.7,size:24,target:'frontLeft',label:'左前方の席'},
     {x:90.5,y:53.8,size:24,target:'teacher',label:'先生'}
   ]};
   for(const [num,entry,back] of [[34,'classroom','f5-33'],[36,'classroomFront','f5-35']]) {
     const n=S['f5-'+num];n.hotspots[0].target='enterClass';n.entryScene=entry;n.declineTarget=back;
   }
 }
}

// ===== 2026-11-02：先生に相談した場合の席別ストーリーのみ =====
for(const key of ['frontLeft','frontCenter','frontRight'])D.characters.aoi.seatStories[key].consulted='この席で授業を受けた！先生が文字を大きく書いて、はっきり話してくれた！';
for(const key of ['middle','backSeat'])D.characters.aoi.seatStories[key].consulted='この席で授業を受けた！先生が文字を大きく書いて、はっきり話してくれたが、たまに周囲の話し声が気になったかも';


// ===== 2026-11-05：田中はな・511教室内 =====
// 写真名・セリフ・赤丸の位置（x/yは写真に対する百分率）はここで編集できます。
{
 const S=D.characters.hana.scenes;
 S.classroom={title:'511教室',photo:'photos/田中はな-511-入口.jpeg',text:'',photoLabel:'はな教室入口',links:[],hotspots:[
   {x:5.4,y:51,size:24,target:'hanaRear',label:'後方'},
   {x:14.6,y:58.6,size:24,target:'hanaRight',label:'右前'},
   {x:78,y:52.2,size:24,target:'hanaLeft',label:'左前'}
 ]};
 S.hanaRear={title:'後方への通路',photo:'photos/田中はな-511-後方.jpeg',text:'横幅がギリギリだが通れそう',links:[],hotspots:[{x:50,y:50,size:24,target:'hanaRearDesk',label:'後方の机へ'}]};
 S.hanaRearDesk={title:'後方の机',photo:'photos/田中はな-511-後方机.jpeg',text:'後ろの通路が狭いから、移動したイスを置く場所がなさそう。前の方にしようかな？',links:[],event:'hanaTap',next:'classroom'};
 for(const [key,side] of [['hanaRight','右前'],['hanaLeft','左前']]) {
   S[key]={title:side+'の席',photo:'photos/田中はな-511-'+side+'.jpeg',text:'この場所で受けようかな？',links:[],event:'hanaSeat',deskScene:key+'Desk'};
   S[key+'Desk']={title:side+'の席',photo:S[key].photo,text:'机とイスを動かそう',links:[],event:'hanaDesk',selfScene:key+'Self',helpScene:key+'Help'};
   for(const [method,text] of [
     ['Self','田中はな（机が重くて移動するのが大変だなぁ。）隣の人「動かすの手伝うよ！」'],
     ['Help','田中はな「机とイスを動かすの手伝ってくれませんか？」隣の人「もちろん！」']
   ]) S[key+method]={title:'机とイスの移動',photo:'photos/田中はな-511-机車イス.jpeg',text,links:[],event:'hanaTap',next:key+'Thanks'};
   S[key+'Thanks']={title:'机とイスの移動',photo:'photos/田中はな-511-机車イス.jpeg',text:'隣の人が手伝ってくれた！',links:[],event:'hanaTap',next:key+'View'};
   S[key+'View']={title:side+'の席からの見え方',photo:'photos/田中はな-511-'+side+'見え方.jpeg',text:'ここで授業を受けられそう！',links:[],event:'hanaTap',clear:true};
 }
}
})();

