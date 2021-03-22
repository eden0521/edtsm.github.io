const appp = new APlayer({
    container: document.getElementById('chinese'),
    fixed: false,
    autoplay: false,
    theme: '#1c03fc',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 0,
    audio: [
      {
        name: "任然 - 飛鳥和蟬",
        url: '/ChineseT50/飛鳥和蟬.mp3',
      },
	  {
        name: 'Eric 周興哲, 單依純 - 愛我的時候 (When You Loved Me)',
        url: '/ChineseT50/愛我的時候.mp3',
      },
	  {
        name: "盧廣仲 - 刻在我心底的名字",
        url: '/ChineseT50/刻在我心底的名字.mp3',
      },
      {
        name: '告五人 - 在這座城市遺失了你',
        url: '/ChineseT50/在這座城市遺失了你.mp3',
      },
	  {
        name: "魏如萱 - HAVE A NICE DAY",
        url: '/ChineseT50/HAVE A NICE DAY.mp3',
      },
      {
        name: '阿冗 - 三個字',
        url: '/ChineseT50/三個字.mp3',
      },
	  {
        name: "大籽 - 白月光與朱砂痣",
        url: '/ChineseT50/白月光與朱砂痣.mp3',
      },
      {
        name: '阿冗 - 與我無關',
        url: '/ChineseT50/與我無關.mp3',
      },
	  {
        name: "程響 - 四季予你",
        url: '/ChineseT50/四季予你.mp3',
      },
      {
        name: '八三夭 - 想見你想見你想見你',
        url: '/ChineseT50/想見你想見你想見你.mp3',
      },
	  {
        name: "井朧 - 不刪",
        url: '/ChineseT50/不刪.mp3',
      },
      {
        name: '蔡恩雨 - 阿拉斯加海灣',
        url: '/ChineseT50/阿拉斯加海灣.mp3',
      },
	  {
        name: "孫盛希 - 小心翻閱",
        url: '/ChineseT50/小心翻閱.mp3',
      },
      {
        name: '五月天 (Mayday) - 因為你 所以我',
        url: '/ChineseT50/因為你 所以我.mp3',
      },
	  {
        name: "井朧 - 丟了你",
        url: '/ChineseT50/丟了你.mp3',
      },
      {
        name: '于文文 - 體面',
        url: '/ChineseT50/體面.mp3',
      },
	  {
        name: "艾薇 (Ivy) - 失重前幸褔",
        url: '/ChineseT50/失重前幸褔.mp3',
      },
      {
        name: 'en - 囂張',
        url: '/ChineseT50/囂張.mp3',
      },
	  {
        name: "夢然 - 少年",
        url: '/ChineseT50/少年.mp3',
      },
      {
        name: '棉子 - 勇氣',
        url: '/ChineseT50/勇氣.mp3',
      },
	  {
        name: "阿冗 - 你的答案",
        url: '/ChineseT50/你的答案.mp3',
      },
      {
        name: '曾沛慈 - 橙色的夢',
        url: '/ChineseT50/橙色的夢.mp3',
      },
	  {
        name: "陳零九 - 天黑請閉眼 (feat. 邱鋒澤)",
        url: '/ChineseT50/天黑請閉眼.mp3',
      },
      {
        name: '周興哲 - 怎麼了',
        url: '/ChineseT50/怎麼了.mp3',
      },
	  {
        name: "G.E.M. 鄧紫棋 - 句號",
        url: '/ChineseT50/句號.mp3',
      },
      {
        name: '九九 - 假如我是你',
        url: '/ChineseT50/假如我是你.mp3',
      },
	  {
        name: "梁靜茹 - 慢冷",
        url: '/ChineseT50/慢冷.mp3',
      },
      {
        name: '于文文 - 餘地',
        url: '/ChineseT50/餘地.mp3',
      },
	  {
        name: "邱振哲 - 太陽",
        url: '/ChineseT50/太陽.mp3',
      },
      {
        name: '黃鴻升 - 地球上最浪漫的一首歌',
        url: '/ChineseT50/地球上最浪漫的一首歌.mp3',
      },
	  {
        name: "任然 - 無人之島",
        url: '/ChineseT50/無人之島.mp3',
      },
	  {
        name: "蕭敬騰 - 不完美的我",
        url: '/ChineseT50/不完美的我.mp3',
      },
      {
        name: '王忻辰 & 蘇星婕 - 清空',
        url: '/ChineseT50/清空.mp3',
      },
	  {
        name: "Eric 周興哲 - 如果能幸福",
        url: '/ChineseT50/如果能幸福.mp3',
      },
      {
        name: 'G.E.M. 鄧紫棋 - 平行世界',
        url: '/ChineseT50/平行世界.mp3',
      },
	  {
        name: "高爾宣 OSN - Without you",
        url: '/ChineseT50/Without you.mp3',
      },
      {
        name: '雪二 - 漸冷',
        url: '/ChineseT50/漸冷.mp3',
      },
	  {
        name: "告五人 - 唯一",
        url: '/ChineseT50/唯一.mp3',
      },
      {
        name: '林鴻宇 - 你怎麼來了',
        url: '/ChineseT50/你怎麼來了.mp3',
      },
	  {
        name: "茄子蛋 - 浪子回頭",
        url: '/ChineseT50/浪子回頭.mp3',
      },
      {
        name: 'G.E.M. 鄧紫棋 - 光年之外',
        url: '/ChineseT50/光年之外.mp3',
      },
	  {
        name: "艾怡良 - 我這個人",
        url: '/ChineseT50/我這個人.mp3',
      },
      {
        name: 'G.E.M.鄧紫棋 - 很久以後',
        url: '/ChineseT50/很久以後.mp3',
      },
	  {
        name: "不是花火呀 - TA",
        url: '/ChineseT50/TA.mp3',
      },
      {
        name: '茄子蛋 - 浪流連',
        url: '/ChineseT50/浪流連.mp3',
      },
	  {
        name: "李榮浩 - 年少有為",
        url: '/ChineseT50/年少有為.mp3',
      },
      {
        name: '張惠妹 - 連名帶姓',
        url: '/ChineseT50/連名帶姓.mp3',
      },
	  {
        name: "玖壹壹 - 來個蹦蹦 (feat. Ella 陳嘉樺)",
        url: '/ChineseT50/來個蹦蹦.mp3',
      },
      {
        name: '瘦子E.SO - CHANGE',
        url: '/ChineseT50/CHANGE.mp3',
      },
	  {
        name: "告五人 - 醜人多作怪",
        url: '/ChineseT50/醜人多作怪.mp3',
      }
    ]
});