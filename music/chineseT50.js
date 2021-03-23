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
        url: '/edtsm.github.io/ChineseT50/飛鳥和蟬.mp3',
      },
	  {
        name: 'Eric 周興哲, 單依純 - 愛我的時候 (When You Loved Me)',
        url: '/edtsm.github.io/ChineseT50/愛我的時候.mp3',
      },
	  {
        name: "盧廣仲 - 刻在我心底的名字",
        url: '/edtsm.github.io/ChineseT50/刻在我心底的名字.mp3',
      },
      {
        name: '告五人 - 在這座城市遺失了你',
        url: '/edtsm.github.io/ChineseT50/在這座城市遺失了你.mp3',
      },
	  {
        name: "魏如萱 - HAVE A NICE DAY",
        url: '/edtsm.github.io/ChineseT50/HAVE A NICE DAY.mp3',
      },
      {
        name: '阿冗 - 三個字',
        url: '/edtsm.github.io/ChineseT50/三個字.mp3',
      },
	  {
        name: "大籽 - 白月光與朱砂痣",
        url: '/edtsm.github.io/ChineseT50/白月光與朱砂痣.mp3',
      },
      {
        name: '阿冗 - 與我無關',
        url: '/edtsm.github.io/ChineseT50/與我無關.mp3',
      },
	  {
        name: "程響 - 四季予你",
        url: '/edtsm.github.io/ChineseT50/四季予你.mp3',
      },
      {
        name: '八三夭 - 想見你想見你想見你',
        url: '/edtsm.github.io/ChineseT50/想見你想見你想見你.mp3',
      },
	  {
        name: "井朧 - 不刪",
        url: '/edtsm.github.io/ChineseT50/不刪.mp3',
      },
      {
        name: '蔡恩雨 - 阿拉斯加海灣',
        url: '/edtsm.github.io/ChineseT50/阿拉斯加海灣.mp3',
      },
	  {
        name: "孫盛希 - 小心翻閱",
        url: '/edtsm.github.io/ChineseT50/小心翻閱.mp3',
      },
      {
        name: '五月天 (Mayday) - 因為你 所以我',
        url: '/edtsm.github.io/ChineseT50/因為你 所以我.mp3',
      },
	  {
        name: "井朧 - 丟了你",
        url: '/edtsm.github.io/ChineseT50/丟了你.mp3',
      },
      {
        name: '于文文 - 體面',
        url: '/edtsm.github.io/ChineseT50/體面.mp3',
      },
	  {
        name: "艾薇 (Ivy) - 失重前幸褔",
        url: '/edtsm.github.io/ChineseT50/失重前幸褔.mp3',
      },
      {
        name: 'en - 囂張',
        url: '/edtsm.github.io/ChineseT50/囂張.mp3',
      },
	  {
        name: "夢然 - 少年",
        url: '/edtsm.github.io/ChineseT50/少年.mp3',
      },
      {
        name: '棉子 - 勇氣',
        url: '/edtsm.github.io/ChineseT50/勇氣.mp3',
      },
	  {
        name: "阿冗 - 你的答案",
        url: '/edtsm.github.io/ChineseT50/你的答案.mp3',
      },
      {
        name: '曾沛慈 - 橙色的夢',
        url: '/edtsm.github.io/ChineseT50/橙色的夢.mp3',
      },
	  {
        name: "陳零九 - 天黑請閉眼 (feat. 邱鋒澤)",
        url: '/edtsm.github.io/ChineseT50/天黑請閉眼.mp3',
      },
      {
        name: '周興哲 - 怎麼了',
        url: '/edtsm.github.io/ChineseT50/怎麼了.mp3',
      },
	  {
        name: "G.E.M. 鄧紫棋 - 句號",
        url: '/edtsm.github.io/ChineseT50/句號.mp3',
      },
      {
        name: '九九 - 假如我是你',
        url: '/edtsm.github.io/ChineseT50/假如我是你.mp3',
      },
	  {
        name: "梁靜茹 - 慢冷",
        url: '/edtsm.github.io/ChineseT50/慢冷.mp3',
      },
      {
        name: '于文文 - 餘地',
        url: '/edtsm.github.io/ChineseT50/餘地.mp3',
      },
	  {
        name: "邱振哲 - 太陽",
        url: '/edtsm.github.io/ChineseT50/太陽.mp3',
      },
      {
        name: '黃鴻升 - 地球上最浪漫的一首歌',
        url: '/edtsm.github.io/ChineseT50/地球上最浪漫的一首歌.mp3',
      },
	  {
        name: "任然 - 無人之島",
        url: '/edtsm.github.io/ChineseT50/無人之島.mp3',
      },
	  {
        name: "蕭敬騰 - 不完美的我",
        url: '/edtsm.github.io/ChineseT50/不完美的我.mp3',
      },
      {
        name: '王忻辰 & 蘇星婕 - 清空',
        url: '/edtsm.github.io/ChineseT50/清空.mp3',
      },
	  {
        name: "Eric 周興哲 - 如果能幸福",
        url: '/edtsm.github.io/ChineseT50/如果能幸福.mp3',
      },
      {
        name: 'G.E.M. 鄧紫棋 - 平行世界',
        url: '/edtsm.github.io/ChineseT50/平行世界.mp3',
      },
	  {
        name: "高爾宣 OSN - Without you",
        url: '/edtsm.github.io/ChineseT50/Without you.mp3',
      },
      {
        name: '雪二 - 漸冷',
        url: '/edtsm.github.io/ChineseT50/漸冷.mp3',
      },
	  {
        name: "告五人 - 唯一",
        url: '/edtsm.github.io/ChineseT50/唯一.mp3',
      },
      {
        name: '林鴻宇 - 你怎麼來了',
        url: '/edtsm.github.io/ChineseT50/你怎麼來了.mp3',
      },
	  {
        name: "茄子蛋 - 浪子回頭",
        url: '/edtsm.github.io/ChineseT50/浪子回頭.mp3',
      },
      {
        name: 'G.E.M. 鄧紫棋 - 光年之外',
        url: '/edtsm.github.io/ChineseT50/光年之外.mp3',
      },
	  {
        name: "艾怡良 - 我這個人",
        url: '/edtsm.github.io/ChineseT50/我這個人.mp3',
      },
      {
        name: 'G.E.M.鄧紫棋 - 很久以後',
        url: '/edtsm.github.io/ChineseT50/很久以後.mp3',
      },
	  {
        name: "不是花火呀 - TA",
        url: '/edtsm.github.io/ChineseT50/TA.mp3',
      },
      {
        name: '茄子蛋 - 浪流連',
        url: '/edtsm.github.io/ChineseT50/浪流連.mp3',
      },
	  {
        name: "李榮浩 - 年少有為",
        url: '/edtsm.github.io/ChineseT50/年少有為.mp3',
      },
      {
        name: '張惠妹 - 連名帶姓',
        url: '/edtsm.github.io/ChineseT50/連名帶姓.mp3',
      },
	  {
        name: "玖壹壹 - 來個蹦蹦 (feat. Ella 陳嘉樺)",
        url: '/edtsm.github.io/ChineseT50/來個蹦蹦.mp3',
      },
      {
        name: '瘦子E.SO - CHANGE',
        url: '/edtsm.github.io/ChineseT50/CHANGE.mp3',
      },
	  {
        name: "告五人 - 醜人多作怪",
        url: '/edtsm.github.io/ChineseT50/醜人多作怪.mp3',
      }
    ]
});
