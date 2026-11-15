/* 吉田りお専用設定。はな・あおいの場面を変更しません。
 * 写真番号は管理専用。画面の表示名は title です。
 * hotspots の x/y は写真の左端/上端からの百分率。赤丸を微調整できます。
 * seatStory は席ごとの仮のクリア前セリフです。自由に変更してください。
 */
(() => {
const D=window.GAME_DATA;
// 共通の1階だけ独立したコピーにします。教室・5階は引き継ぎません。
const firstFloor=Object.fromEntries(Object.entries(D.characters.aoi.scenes).filter(([key])=>key.startsWith('f1-')).map(([key,value])=>[key,structuredClone(value)]));
const scenes={
  "f9-77": {
    "title": "9階・エスカレーター前",
    "photo": "photos/9-77.jpeg",
    "photoLabel": "9-77",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 91.43,
        "y": 44.1,
        "size": 24,
        "target": "f9-78",
        "label": "掲示板前へ"
      }
    ]
  },
  "f9-78": {
    "title": "掲示板前",
    "photo": "photos/9-78.jpeg",
    "photoLabel": "9-78",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 90.87,
        "y": 60.58,
        "size": 24,
        "target": "f9-79",
        "label": "9階の入口付近へ"
      }
    ]
  },
  "f9-79": {
    "title": "9階の入口付近",
    "photo": "photos/9-79.jpeg",
    "photoLabel": "9-79",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 51.98,
        "y": 49.86,
        "size": 24,
        "target": "f9-81",
        "label": "食堂への通路へ"
      }
    ]
  },
  "f9-81": {
    "title": "食堂への通路",
    "photo": "photos/9-81.jpeg",
    "photoLabel": "9-81",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 48.01,
        "y": 46.63,
        "size": 24,
        "target": "f9-82",
        "label": "トイレ前の分かれ道へ"
      }
    ]
  },
  "f9-82": {
    "title": "トイレ前の分かれ道",
    "photo": "photos/9-82.jpeg",
    "photoLabel": "9-82",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 23.01,
        "y": 48.15,
        "size": 24,
        "target": "f9-83",
        "label": "トイレへの入口へ"
      },
      {
        "x": 65.64,
        "y": 48.77,
        "size": 24,
        "target": "f9-86",
        "label": "食堂の入口へ"
      }
    ]
  },
  "f9-83": {
    "title": "トイレへの入口",
    "photo": "photos/9-83.jpeg",
    "photoLabel": "9-83",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 44.66,
        "y": 46.51,
        "size": 24,
        "target": "f9-84",
        "label": "洗面台前へ"
      }
    ]
  },
  "f9-84": {
    "title": "洗面台前",
    "photo": "photos/9-84.jpeg",
    "photoLabel": "9-84",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 55.34,
        "y": 51.15,
        "size": 24,
        "target": "f9-85",
        "label": "9階のトイレへ"
      }
    ]
  },
  "f9-85": {
    "title": "9階のトイレ",
    "photo": "photos/9-85.jpeg",
    "photoLabel": "9-85",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 63.4,
        "y": 53.2,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "interactionOnly": true,
    "event": "photoRest",
    "restQuestion": "お手洗いで休憩する？",
    "restText": "お手洗いに寄って少し回復した",
    "restTarget": "f9-84",
    "restNoDirect": true
  },
  "f9-86": {
    "title": "食堂の入口",
    "photo": "photos/9-86.jpeg",
    "photoLabel": "9-86",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 40.28,
        "y": 47.04,
        "size": 24,
        "target": "f9-87",
        "label": "食堂の券売機へ"
      },
      {
        "x": 78.64,
        "y": 46.32,
        "size": 24,
        "target": "f9-88",
        "label": "食堂の受け取り前へ"
      }
    ]
  },
  "f9-87": {
    "title": "食堂の券売機",
    "photo": "photos/9-87.jpeg",
    "photoLabel": "9-87",
    "text": "食券を買えるよ。ここでお昼ご飯を買う？今日は少し苦手な匂いのものもあるので、受け取りに時間がかかると少し大変かも？",
    "links": [],
    "hotspots": [
      {
        "x": 49.85,
        "y": 41.63,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "interactionOnly": true,
    "event": "rioTicket"
  },
  "f9-88": {
    "title": "食堂の受け取り前",
    "photo": "photos/9-88.jpeg",
    "photoLabel": "9-88",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 21.75,
        "y": 50.0,
        "size": 24,
        "target": "f9-89",
        "label": "食堂の受け取りカウンターへ"
      },
      {
        "x": 92.7,
        "y": 65.83,
        "size": 24,
        "target": "f9-90",
        "label": "食堂の通路へ"
      }
    ]
  },
  "f9-89": {
    "title": "食堂の受け取りカウンター",
    "photo": "photos/9-89.jpeg",
    "photoLabel": "9-89",
    "text": "食堂の受け取りが混雑していて、時間がかかりそうだ。少し匂いが苦手だが、待つ？",
    "links": [],
    "hotspots": [
      {
        "x": 51.68,
        "y": 52.14,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "interactionOnly": true,
    "event": "rioReceive"
  },
  "f9-90": {
    "title": "食堂の通路",
    "photo": "photos/9-90.jpeg",
    "photoLabel": "9-90",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 14.9,
        "y": 57.39,
        "size": 24,
        "target": "f9-92",
        "label": "食堂カウンター横へ"
      },
      {
        "x": 84.41,
        "y": 58.39,
        "size": 24,
        "target": "f9-113",
        "label": "食堂の本棚付近へ"
      }
    ]
  },
  "f9-92": {
    "title": "食堂カウンター横",
    "photo": "photos/9-92.jpeg",
    "photoLabel": "9-92",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 14.01,
        "y": 51.04,
        "size": 24,
        "target": "f9-93",
        "label": "窓側への通路へ"
      }
    ]
  },
  "f9-93": {
    "title": "窓側への通路",
    "photo": "photos/9-93.jpeg",
    "photoLabel": "9-93",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 33.67,
        "y": 62.84,
        "size": 24,
        "target": "f9-94",
        "label": "窓側の分かれ道へ"
      }
    ]
  },
  "f9-94": {
    "title": "窓側の分かれ道",
    "photo": "photos/9-94.jpeg",
    "photoLabel": "9-94",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 12.94,
        "y": 57.25,
        "size": 24,
        "target": "f9-95",
        "label": "窓際のカウンター前へ"
      },
      {
        "x": 90.27,
        "y": 59.83,
        "size": 24,
        "target": "f9-98",
        "label": "丸テーブルへの通路へ"
      }
    ]
  },
  "f9-95": {
    "title": "窓際のカウンター前",
    "photo": "photos/9-95.jpeg",
    "photoLabel": "9-95",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 49.39,
        "y": 64.29,
        "size": 24,
        "target": "f9-96",
        "label": "食堂の窓際のカウンター席へ"
      }
    ],
    "effect": {
      "brightness": 1.35,
      "blur": 0
    }
  },
  "f9-96": {
    "title": "食堂の窓際のカウンター席",
    "photo": "photos/9-96.jpeg",
    "photoLabel": "9-96",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [],
    "event": "rioSeat",
    "interactionOnly": false,
    "returnTarget": "f9-94",
    "returnFromLounge": false,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！",
    "brightSeat": true,
    "curtainScene": "f9-97",
    "effect": {
      "brightness": 1.7,
      "blur": 0
    }
  },
  "f9-97": {
    "title": "カーテンを下げた窓際の席",
    "photo": "photos/9-97.jpeg",
    "photoLabel": "9-97",
    "text": "",
    "links": [],
    "hotspots": [],
    "effect": {
      "brightness": 1.1,
      "blur": 0
    }
  },
  "f9-98": {
    "title": "丸テーブルへの通路",
    "photo": "photos/9-98.jpeg",
    "photoLabel": "9-98",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 54.41,
        "y": 57.56,
        "size": 24,
        "target": "f9-99",
        "label": "丸テーブル付近へ"
      }
    ]
  },
  "f9-99": {
    "title": "丸テーブル付近",
    "photo": "photos/9-99.jpeg",
    "photoLabel": "9-99",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 13.97,
        "y": 48.44,
        "size": 24,
        "target": "f9-100",
        "label": "食堂の窓側の丸テーブル席へ"
      },
      {
        "x": 48.52,
        "y": 47.0,
        "size": 24,
        "target": "f9-101",
        "label": "壁側の席の前へ"
      },
      {
        "x": 87.17,
        "y": 54.45,
        "size": 24,
        "target": "f9-103",
        "label": "長テーブルへの通路へ"
      }
    ]
  },
  "f9-100": {
    "title": "食堂の窓側の丸テーブル席",
    "photo": "photos/9-100.jpeg",
    "photoLabel": "9-100",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [
      {
        "x": 51.0,
        "y": 48.36,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "event": "rioSeat",
    "interactionOnly": true,
    "returnTarget": "f9-99",
    "returnFromLounge": false,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！"
  },
  "f9-101": {
    "title": "壁側の席の前",
    "photo": "photos/9-101.jpeg",
    "photoLabel": "9-101",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 30.34,
        "y": 51.56,
        "size": 24,
        "target": "f9-102",
        "label": "食堂の壁側の席へ"
      },
      {
        "x": 89.33,
        "y": 67.7,
        "size": 24,
        "target": "f9-105",
        "label": "食堂の奥への通路へ"
      }
    ]
  },
  "f9-102": {
    "title": "食堂の壁側の席",
    "photo": "photos/9-102.jpeg",
    "photoLabel": "9-102",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [
      {
        "x": 50.99,
        "y": 52.08,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "event": "rioSeat",
    "interactionOnly": true,
    "returnTarget": "f9-101",
    "returnFromLounge": false,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！"
  },
  "f9-103": {
    "title": "長テーブルへの通路",
    "photo": "photos/9-103.jpeg",
    "photoLabel": "9-103",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 89.34,
        "y": 61.03,
        "size": 24,
        "target": "f9-104",
        "label": "食堂中央の白い長テーブル席へ"
      }
    ]
  },
  "f9-104": {
    "title": "食堂中央の白い長テーブル席",
    "photo": "photos/9-104.jpeg",
    "photoLabel": "9-104",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [
      {
        "x": 44.66,
        "y": 64.97,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "event": "rioSeat",
    "interactionOnly": true,
    "returnTarget": "f9-101",
    "returnFromLounge": false,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！"
  },
  "f9-105": {
    "title": "食堂の奥への通路",
    "photo": "photos/9-105.jpeg",
    "photoLabel": "9-105",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 59.68,
        "y": 53.0,
        "size": 24,
        "target": "f9-106",
        "label": "食堂の奥の扉前へ"
      }
    ]
  },
  "f9-106": {
    "title": "食堂の奥の扉前",
    "photo": "photos/9-106.jpeg",
    "photoLabel": "9-106",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 87.06,
        "y": 50.59,
        "size": 24,
        "target": "f9-107",
        "label": "黄色いイスの前へ"
      }
    ]
  },
  "f9-107": {
    "title": "黄色いイスの前",
    "photo": "photos/9-107.jpeg",
    "photoLabel": "9-107",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 27.23,
        "y": 58.36,
        "size": 24,
        "target": "f9-109",
        "label": "食堂の柱の分かれ道へ"
      },
      {
        "x": 67.19,
        "y": 50.2,
        "size": 24,
        "target": "f9-108",
        "label": "食堂の黄色いイスの席へ"
      }
    ]
  },
  "f9-108": {
    "title": "食堂の黄色いイスの席",
    "photo": "photos/9-108.jpeg",
    "photoLabel": "9-108",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [
      {
        "x": 43.48,
        "y": 52.3,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "event": "rioSeat",
    "interactionOnly": true,
    "returnTarget": "f9-107",
    "returnFromLounge": false,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！"
  },
  "f9-109": {
    "title": "食堂の柱の分かれ道",
    "photo": "photos/9-109.jpeg",
    "photoLabel": "9-109",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 10.79,
        "y": 54.72,
        "size": 24,
        "target": "f9-118",
        "label": "食堂の外の通路へ"
      },
      {
        "x": 55.34,
        "y": 40.68,
        "size": 24,
        "target": "f9-110",
        "label": "白いイスのラウンジ前へ"
      }
    ]
  },
  "f9-110": {
    "title": "白いイスのラウンジ前",
    "photo": "photos/9-110.jpeg",
    "photoLabel": "9-110",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 7.59,
        "y": 44.0,
        "size": 24,
        "target": "f9-111",
        "label": "ラウンジの白い四角テーブル席へ"
      },
      {
        "x": 36.65,
        "y": 42.03,
        "size": 24,
        "target": "f9-112",
        "label": "ラウンジの白い丸テーブル席へ"
      }
    ]
  },
  "f9-111": {
    "title": "ラウンジの白い四角テーブル席",
    "photo": "photos/9-111.jpeg",
    "photoLabel": "9-111",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [
      {
        "x": 49.3,
        "y": 49.68,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "event": "rioSeat",
    "interactionOnly": true,
    "returnTarget": "f9-109",
    "returnFromLounge": true,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！"
  },
  "f9-112": {
    "title": "ラウンジの白い丸テーブル席",
    "photo": "photos/9-112.jpeg",
    "photoLabel": "9-112",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [
      {
        "x": 41.35,
        "y": 50.36,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "event": "rioSeat",
    "interactionOnly": true,
    "returnTarget": "f9-109",
    "returnFromLounge": true,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！"
  },
  "f9-113": {
    "title": "食堂の本棚付近",
    "photo": "photos/9-113.jpeg",
    "photoLabel": "9-113",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 55.06,
        "y": 50.0,
        "size": 24,
        "target": "f9-116",
        "label": "食堂の本棚の分かれ道へ"
      },
      {
        "x": 90.12,
        "y": 60.61,
        "size": 24,
        "target": "f9-114",
        "label": "ラウンジの通路へ"
      }
    ]
  },
  "f9-114": {
    "title": "ラウンジの通路",
    "photo": "photos/9-114.jpeg",
    "photoLabel": "9-114",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 13.55,
        "y": 76.15,
        "size": 24,
        "target": "f9-113",
        "label": "食堂の本棚付近へ"
      },
      {
        "x": 84.71,
        "y": 57.77,
        "size": 24,
        "target": "f9-115",
        "label": "ラウンジの高いテーブル席へ"
      }
    ]
  },
  "f9-115": {
    "title": "ラウンジの高いテーブル席",
    "photo": "photos/9-115.jpeg",
    "photoLabel": "9-115",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [
      {
        "x": 44.4,
        "y": 50.0,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "event": "rioSeat",
    "interactionOnly": true,
    "returnTarget": "f9-114",
    "returnFromLounge": false,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！"
  },
  "f9-116": {
    "title": "食堂の本棚の分かれ道",
    "photo": "photos/9-116.jpeg",
    "photoLabel": "9-116",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 50.0,
        "y": 47.0,
        "size": 24,
        "target": "f9-117",
        "label": "食堂の出口前へ"
      },
      {
        "x": 89.25,
        "y": 70.72,
        "size": 24,
        "target": "f9-110",
        "label": "白いイスのラウンジ前へ"
      }
    ]
  },
  "f9-117": {
    "title": "食堂の出口前",
    "photo": "photos/9-117.jpeg",
    "photoLabel": "9-117",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 50.0,
        "y": 56.42,
        "size": 24,
        "target": "f9-118",
        "label": "食堂の外の通路へ"
      }
    ]
  },
  "f9-118": {
    "title": "食堂の外の通路",
    "photo": "photos/9-118.jpeg",
    "photoLabel": "9-118",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 50.0,
        "y": 50.0,
        "size": 24,
        "target": "f9-119",
        "label": "食堂の扉へ"
      }
    ]
  },
  "f9-119": {
    "title": "食堂の扉",
    "photo": "photos/9-119.jpeg",
    "photoLabel": "9-119",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 59.1,
        "y": 50.0,
        "size": 24,
        "target": "f9-120",
        "label": "9階の廊下へ"
      }
    ]
  },
  "f9-120": {
    "title": "9階の廊下",
    "photo": "photos/9-120.jpeg",
    "photoLabel": "9-120",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 50.38,
        "y": 53.66,
        "size": 24,
        "target": "f9-121",
        "label": "廊下の曲がり角へ"
      }
    ]
  },
  "f9-121": {
    "title": "廊下の曲がり角",
    "photo": "photos/9-121.jpeg",
    "photoLabel": "9-121",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 56.01,
        "y": 44.37,
        "size": 24,
        "target": "f9-122",
        "label": "エレベーターへの分かれ道へ"
      }
    ]
  },
  "f9-122": {
    "title": "エレベーターへの分かれ道",
    "photo": "photos/9-122.jpeg",
    "photoLabel": "9-122",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 40.89,
        "y": 50.0,
        "size": 24,
        "target": "f9-123",
        "label": "廊下の突き当たりへ"
      },
      {
        "x": 89.36,
        "y": 60.64,
        "size": 24,
        "target": "f9-126",
        "label": "コンビニ前の通路へ"
      }
    ]
  },
  "f9-123": {
    "title": "廊下の突き当たり",
    "photo": "photos/9-123.jpeg",
    "photoLabel": "9-123",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 44.66,
        "y": 48.7,
        "size": 24,
        "target": "f9-124",
        "label": "エレベーター手前へ"
      }
    ]
  },
  "f9-124": {
    "title": "エレベーター手前",
    "photo": "photos/9-124.jpeg",
    "photoLabel": "9-124",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 39.33,
        "y": 52.14,
        "size": 24,
        "target": "f9-125",
        "label": "エレベーター前へ"
      }
    ]
  },
  "f9-125": {
    "title": "エレベーター前",
    "photo": "photos/9-125.jpeg",
    "photoLabel": "9-125",
    "text": "エレベーターだね。食事はこの階だから、戻って場所とご飯を探そう",
    "links": [],
    "hotspots": [
      {
        "x": 54.2,
        "y": 62.32,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "interactionOnly": true,
    "event": "rioNotice",
    "returnTarget": "f9-122"
  },
  "f9-126": {
    "title": "コンビニ前の通路",
    "photo": "photos/9-126.jpeg",
    "photoLabel": "9-126",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 26.76,
        "y": 51.98,
        "size": 24,
        "target": "f9-138",
        "label": "コンビニの入口へ"
      },
      {
        "x": 69.53,
        "y": 48.32,
        "size": 24,
        "target": "f9-128",
        "label": "コンビニ横の分かれ道へ"
      },
      {
        "x": 89.4,
        "y": 63.76,
        "size": 24,
        "target": "f9-127",
        "label": "コンビニ前の丸テーブル席へ"
      }
    ]
  },
  "f9-127": {
    "title": "コンビニ前の丸テーブル席",
    "photo": "photos/9-127.jpeg",
    "photoLabel": "9-127",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [
      {
        "x": 47.32,
        "y": 45.36,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "event": "rioSeat",
    "interactionOnly": true,
    "returnTarget": "f9-126",
    "returnFromLounge": false,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！"
  },
  "f9-128": {
    "title": "コンビニ横の分かれ道",
    "photo": "photos/9-128.jpeg",
    "photoLabel": "9-128",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 10.45,
        "y": 60.31,
        "size": 24,
        "target": "f9-131",
        "label": "コンビニ横のラウンジ入口へ"
      },
      {
        "x": 46.71,
        "y": 51.91,
        "size": 24,
        "target": "f9-130",
        "label": "掲示板への通路へ"
      },
      {
        "x": 86.37,
        "y": 60.31,
        "size": 24,
        "target": "f9-129",
        "label": "透明エレベーター前へ"
      }
    ]
  },
  "f9-129": {
    "title": "透明エレベーター前",
    "photo": "photos/9-129.jpeg",
    "photoLabel": "9-129",
    "text": "エレベーターだね。食事はこの階だから、戻って場所とご飯を探そう",
    "links": [],
    "hotspots": [
      {
        "x": 44.0,
        "y": 53.91,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "interactionOnly": true,
    "event": "rioNotice",
    "returnTarget": "f9-128"
  },
  "f9-130": {
    "title": "掲示板への通路",
    "photo": "photos/9-130.jpeg",
    "photoLabel": "9-130",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 50.87,
        "y": 59.54,
        "size": 24,
        "target": "f9-78",
        "label": "掲示板前へ"
      }
    ]
  },
  "f9-131": {
    "title": "コンビニ横のラウンジ入口",
    "photo": "photos/9-131.jpeg",
    "photoLabel": "9-131",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 47.41,
        "y": 53.0,
        "size": 24,
        "target": "f9-132",
        "label": "コンビニ横の席の前へ"
      }
    ]
  },
  "f9-132": {
    "title": "コンビニ横の席の前",
    "photo": "photos/9-132.jpeg",
    "photoLabel": "9-132",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 12.19,
        "y": 48.65,
        "size": 24,
        "target": "f9-133",
        "label": "コンビニ横の丸テーブル席へ"
      },
      {
        "x": 40.85,
        "y": 42.64,
        "size": 24,
        "target": "f9-134",
        "label": "コピー機そばの丸テーブル席へ"
      },
      {
        "x": 62.42,
        "y": 36.64,
        "size": 24,
        "target": "f9-135",
        "label": "コンビニ横の窓際席の前へ"
      }
    ]
  },
  "f9-133": {
    "title": "コンビニ横の丸テーブル席",
    "photo": "photos/9-133.jpeg",
    "photoLabel": "9-133",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [
      {
        "x": 47.54,
        "y": 49.83,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "event": "rioSeat",
    "interactionOnly": true,
    "returnTarget": "f9-126",
    "returnFromLounge": false,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！"
  },
  "f9-134": {
    "title": "コピー機そばの丸テーブル席",
    "photo": "photos/9-134.jpeg",
    "photoLabel": "9-134",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [
      {
        "x": 47.97,
        "y": 45.41,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "event": "rioSeat",
    "interactionOnly": true,
    "returnTarget": "f9-126",
    "returnFromLounge": false,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！"
  },
  "f9-135": {
    "title": "コンビニ横の窓際席の前",
    "photo": "photos/9-135.jpeg",
    "photoLabel": "9-135",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 18.46,
        "y": 66.31,
        "size": 24,
        "target": "f9-136",
        "label": "コンビニ横の窓際の席へ"
      }
    ],
    "effect": {
      "brightness": 1.35,
      "blur": 0
    }
  },
  "f9-136": {
    "title": "コンビニ横の窓際の席",
    "photo": "photos/9-136.jpeg",
    "photoLabel": "9-136",
    "text": "この席で食べる？",
    "links": [],
    "hotspots": [],
    "event": "rioSeat",
    "interactionOnly": false,
    "returnTarget": "f9-132",
    "returnFromLounge": false,
    "seatStory": "ここなら落ち着いて食べられそう。お昼ご飯を食べた！",
    "brightSeat": true,
    "curtainScene": "f9-137",
    "effect": {
      "brightness": 1.7,
      "blur": 0
    }
  },
  "f9-137": {
    "title": "カーテンを下げたコンビニ横の席",
    "photo": "photos/9-137.jpeg",
    "photoLabel": "9-137",
    "text": "",
    "links": [],
    "hotspots": [],
    "effect": {
      "brightness": 1.1,
      "blur": 0
    }
  },
  "f9-138": {
    "title": "コンビニの入口",
    "photo": "photos/9-138.jpeg",
    "photoLabel": "9-138",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 43.17,
        "y": 53.29,
        "size": 24,
        "target": "f9-139",
        "label": "コンビニの通路入口へ"
      }
    ],
    "event": "rioStoreArrival"
  },
  "f9-139": {
    "title": "コンビニの通路入口",
    "photo": "photos/9-139.jpeg",
    "photoLabel": "9-139",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 22.26,
        "y": 54.93,
        "size": 24,
        "target": "f9-147",
        "label": "コンビニの別の通路へ"
      },
      {
        "x": 79.02,
        "y": 54.93,
        "size": 24,
        "target": "f9-140",
        "label": "コンビニのお菓子の通路へ"
      }
    ]
  },
  "f9-140": {
    "title": "コンビニのお菓子の通路",
    "photo": "photos/9-140.jpeg",
    "photoLabel": "9-140",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 42.78,
        "y": 54.93,
        "size": 24,
        "target": "f9-141",
        "label": "コンビニの奥の通路へ"
      },
      {
        "x": 53.91,
        "y": 86.71,
        "size": 24,
        "target": "f9-139",
        "label": "コンビニの通路入口へ"
      }
    ]
  },
  "f9-141": {
    "title": "コンビニの奥の通路",
    "photo": "photos/9-141.jpeg",
    "photoLabel": "9-141",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 47.5,
        "y": 89.3,
        "size": 24,
        "target": "f9-140",
        "label": "コンビニのお菓子の通路へ"
      },
      {
        "x": 49.23,
        "y": 50.93,
        "size": 24,
        "target": "f9-142",
        "label": "コンビニの奥へ"
      }
    ]
  },
  "f9-142": {
    "title": "コンビニの奥",
    "photo": "photos/9-142.jpeg",
    "photoLabel": "9-142",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 17.78,
        "y": 59.18,
        "size": 24,
        "target": "f9-143",
        "label": "コンビニの冷蔵棚前へ"
      },
      {
        "x": 45.84,
        "y": 88.5,
        "size": 24,
        "target": "f9-141",
        "label": "コンビニの奥の通路へ"
      }
    ]
  },
  "f9-143": {
    "title": "コンビニの冷蔵棚前",
    "photo": "photos/9-143.jpeg",
    "photoLabel": "9-143",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 9.17,
        "y": 66.55,
        "size": 24,
        "target": "f9-144",
        "label": "コンビニのカップ麺の通路へ"
      },
      {
        "x": 45.68,
        "y": 89.79,
        "size": 24,
        "target": "f9-142",
        "label": "コンビニの奥へ"
      },
      {
        "x": 63.93,
        "y": 51.47,
        "size": 24,
        "target": "f9-150",
        "label": "コンビニの食べ物の棚へ"
      }
    ]
  },
  "f9-144": {
    "title": "コンビニのカップ麺の通路",
    "photo": "photos/9-144.jpeg",
    "photoLabel": "9-144",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 5.33,
        "y": 42.65,
        "size": 24,
        "target": "f9-146",
        "label": "カップ麺の棚へ"
      },
      {
        "x": 50.0,
        "y": 89.51,
        "size": 24,
        "target": "f9-143",
        "label": "コンビニの冷蔵棚前へ"
      },
      {
        "x": 92.28,
        "y": 44.47,
        "size": 24,
        "target": "f9-145",
        "label": "カップ麺の棚へ"
      }
    ]
  },
  "f9-145": {
    "title": "カップ麺の棚",
    "photo": "photos/9-145.jpeg",
    "photoLabel": "9-145",
    "text": "今日のお昼ご飯はカップ麺にする？",
    "links": [],
    "hotspots": [
      {
        "x": 49.64,
        "y": 51.19,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "interactionOnly": true,
    "event": "rioBuy",
    "returnTarget": "f9-144",
    "returnByEntry": false
  },
  "f9-146": {
    "title": "カップ麺の棚",
    "photo": "photos/9-146.jpeg",
    "photoLabel": "9-146",
    "text": "今日のお昼ご飯はカップ麺にする？",
    "links": [],
    "hotspots": [
      {
        "x": 50.0,
        "y": 49.53,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "interactionOnly": true,
    "event": "rioBuy",
    "returnTarget": "f9-144",
    "returnByEntry": false
  },
  "f9-147": {
    "title": "コンビニの別の通路",
    "photo": "photos/9-147.jpeg",
    "photoLabel": "9-147",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 8.56,
        "y": 51.71,
        "size": 24,
        "target": "f9-149",
        "label": "カップ麺の棚へ"
      },
      {
        "x": 39.71,
        "y": 43.45,
        "size": 24,
        "target": "f9-150",
        "label": "コンビニの食べ物の棚へ"
      },
      {
        "x": 50.0,
        "y": 89.4,
        "size": 24,
        "target": "f9-139",
        "label": "コンビニの通路入口へ"
      },
      {
        "x": 83.33,
        "y": 53.0,
        "size": 24,
        "target": "f9-148",
        "label": "カップ麺の棚へ"
      }
    ]
  },
  "f9-148": {
    "title": "カップ麺の棚",
    "photo": "photos/9-148.jpeg",
    "photoLabel": "9-148",
    "text": "今日のお昼ご飯はカップ麺にする？",
    "links": [],
    "hotspots": [
      {
        "x": 49.94,
        "y": 50.75,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "interactionOnly": true,
    "event": "rioBuy",
    "returnTarget": "f9-147",
    "returnByEntry": false
  },
  "f9-149": {
    "title": "カップ麺の棚",
    "photo": "photos/9-149.jpeg",
    "photoLabel": "9-149",
    "text": "今日のお昼ご飯はカップ麺にする？",
    "links": [],
    "hotspots": [
      {
        "x": 51.76,
        "y": 44.82,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "interactionOnly": true,
    "event": "rioBuy",
    "returnTarget": "f9-147",
    "returnByEntry": false
  },
  "f9-150": {
    "title": "コンビニの食べ物の棚",
    "photo": "photos/9-150.jpeg",
    "photoLabel": "9-150",
    "text": "ここでお昼ご飯を買う？",
    "links": [],
    "hotspots": [
      {
        "x": 52.95,
        "y": 43.68,
        "size": 24,
        "target": "interact",
        "label": "調べる"
      }
    ],
    "interactionOnly": true,
    "event": "rioBuy",
    "returnTarget": "f9-147",
    "returnByEntry": true
  },
  "rioGlassArrival": {
    "title": "9階・透明エレベーターホール",
    "photo": "photos/りお-9階-透明エレベーター到着.jpeg",
    "photoLabel": "りお透明エレベーター到着",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 50,
        "y": 52,
        "size": 24,
        "target": "f9-131",
        "label": "コンビニ横のラウンジへ"
      },
      {
        "x": 85,
        "y": 60,
        "size": 24,
        "target": "f9-130",
        "label": "掲示板への通路へ"
      }
    ]
  },
  "rioElevatorArrival1": {
    "title": "9階・エレベーターホール",
    "photo": "photos/りお-9階-エレベーター到着1.jpeg",
    "photoLabel": "りおエレベーター到着1",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 50,
        "y": 55,
        "size": 24,
        "target": "rioElevatorArrival2",
        "label": "先へ進む"
      }
    ]
  },
  "rioElevatorArrival2": {
    "title": "9階・エレベーターホール",
    "photo": "photos/りお-9階-エレベーター到着2.jpeg",
    "photoLabel": "りおエレベーター到着2",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 50,
        "y": 55,
        "size": 24,
        "target": "rioElevatorArrival3",
        "label": "先へ進む"
      }
    ]
  },
  "rioElevatorArrival3": {
    "title": "9階・エレベーターホール",
    "photo": "photos/りお-9階-エレベーター到着3.jpeg",
    "photoLabel": "りおエレベーター到着3",
    "text": "",
    "links": [],
    "hotspots": [
      {
        "x": 50,
        "y": 55,
        "size": 24,
        "target": "f9-126",
        "label": "先へ進む"
      }
    ]
  }
};
D.characters.rio={
 name:'吉田 りお',age:21,portrait:'吉田りお.jpg',
 description:['日の光やパソコンの光などを辛く感じる。','食べ物の匂いが充満した場所、特に香辛料の匂いが苦手。','周囲のざわめきや、人と触れ合う混雑が苦手。'],
 mission:'お昼ご飯を買って、落ち着ける席で食べよう',start:'f1-1',startTime:'10:30',deadline:null,
 rules:{movesPerStep:5,fatiguePerStep:2,minutesPerStep:1,restMinutes:3,restRecovery:5},
 costs:{escalator:{fatigue:5},elevator:{fatigue:10},receive:{minutes:3,fatigue:10},brightMeal:{fatigue:20},curtainMeal:{fatigue:10}},
 effects:{smell:{brightness:1.05,blur:3}},
 reflectionQuestion:'どんな設備や周囲の配慮があれば、もっと落ち着いて食事ができると思いますか？',
 scenes:{...firstFloor,...scenes}
};
const S=D.characters.rio.scenes;
S['f1-9'].event='rioElevator';
S['f1-16'].event='rioGlass';
S['f1-15'].event='rioEscalator';
for(const id of ['f1-9','f1-15','f1-16'])S[id].text=S[id].text.replaceAll('5階','9階');
// りおの1階では、既存の混雑の説明と左右の経路はそのまま使います。
})();
