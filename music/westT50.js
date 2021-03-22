const app = new APlayer({
    container: document.getElementById('west'),
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
        name: "ROSÉ - On The Ground",
        url: '/WestT50/On The Ground.mp3',
      },
      {
        name: 'ROSÉ - Gone',
        url: '/WestT50/Gone.mp3',
      },
	  {
        name: "Bruno Mars, Anderson .Paak & Silk Sonic - Leave The Door Open",
        url: '/WestT50/Leave The Door Open.mp3',
      },
      {
        name: 'Justin Bieber - Hold On',
        url: '/WestT50/Hold On.mp3',
      },{
        name: "Maroon 5 & Megan Thee Stallion - Beautiful Mistakes",
        url: '/WestT50/Beautiful Mistakes.mp3',
      },
      {
        name: 'ØZI - 0.03',
        url: '/WestT50/0.03.mp3',
      },
	  {
        name: "Taylor Swift - Love Story (Taylors Version)",
        url: '/WestT50/Love Story.mp3',
      },
      {
        name: 'Jhené Aiko - Lead the Way',
        url: '/WestT50/Lead the Way.mp3',
      },
	  {
        name: "ØZI - LUFU (feat.Arin Ray,GSoul)",
        url: '/WestT50/LUFU.mp3',
      },
      {
        name: 'Post Malone - Only Wanna Be With You (Pokémon 25 Version)',
        url: '/WestT50/Only Wanna Be With You.mp3',
      },
	  {
        name: "Conan Gray - Overdrive",
        url: '/WestT50/Overdrive.mp3',
      },
      {
        name: 'The Chainsmokers, Coldplay - Something Just Like This',
        url: '/WestT50/Something Just Like This.mp3',
      },{
        name: "Ed Sheeran - Shape of You",
        url: '/WestT50/Shape of You.mp3',
      },
      {
        name: 'DJ Snake & Selena Gomez - Selfish Love',
        url: '/WestT50/Selfish Love.mp3',
      },
	  {
        name: "Maisie Peters - John Hughes Movie",
        url: '/WestT50/John Hughes Movie.mp3',
      },
      {
        name: 'Zara Larsson - Need Someone',
        url: '/WestT50/Need Someone.mp3',
      },
	  {
        name: "Joel Corry, RAYE & David Guetta - BED",
        url: '/WestT50/BED.mp3',
      },
      {
        name: 'Alan Walker & salem ilese - Fake A Smile',
        url: '/WestT50/Fake A Smile.mp3',
      },
	  {
        name: "Ed Sheeran - Afterglow",
        url: '/WestT50/Afterglow.mp3',
      },
      {
        name: 'Shawn Mendes & Camila Cabello - Señorita',
        url: '/WestT50/Senorita.mp3',
      },{
        name: "BTS - Dynamite",
        url: '/WestT50/Dynamite.mp3',
      },
      {
        name: 'Bebe Rexha - Sacrifice',
        url: '/WestT50/Sacrifice.mp3',
      },
	  {
        name: "Tones and I - Dance Monkey",
        url: '/WestT50/Dance Monkey.mp3',
      },
      {
        name: 'Alan Walker - Faded',
        url: '/WestT50/Faded.mp3',
      },
	  {
        name: "SHAUN - Way Back Home (feat. Conor Maynard)",
        url: '/WestT50/Way Back Home.mp3',
      },
      {
        name: 'ØZI - SLIDE',
        url: '/WestT50/SLIDE.mp3',
      },
	  {
        name: "Ed Sheeran - Perfect",
        url: '/WestT50/Perfect.mp3',
      },
      {
        name: 'Rhydian Vaughan - Fine As Moonlight',
        url: '/WestT50/Fine As Moonlight.mp3',
      },{
        name: "The Chainsmokers - Closer (ft. Halsey)",
        url: '/WestT50/Closer.mp3',
      },
      {
        name: 'Camila Cabello - Havana (ft. Young Thug)',
        url: '/WestT50/Havana.mp3',
      },
	  {
        name: "Maroon 5 - Girls Like You (feat. Cardi B)",
        url: '/WestT50/Girls Like You.mp3',
      },
      {
        name: 'ØZI - JUST DO YOU (feat. sunkis)',
        url: '/WestT50/JUST DO YOU.mp3',
      },
	  {
        name: "Ariana Grande - test drive",
        url: '/WestT50/test drive.mp3',
      },
      {
        name: "Dua Lipa - We're Good",
        url: "/WestT50/We're Good.mp3",
      },
	  {
        name: "Lady Gaga, Bradley Cooper - Shallow",
        url: '/WestT50/Shallow.mp3',
      },
      {
        name: 'Sia - 1+1',
        url: '/WestT50/1+1.mp3',
      },{
        name: "RITA ORA - Big (feat. Gunna)",
        url: '/WestT50/Big.mp3',
      },
      {
        name: 'Adam Hambrick - The Longer I Lay Here (ft Jillian Jacqueline)',
        url: '/WestT50/The Longer I Lay Here.mp3',
      },
	  {
        name: "Maroon 5 - Sugar",
        url: '/WestT50/Sugar.mp3',
      },
      {
        name: 'Wiz Khalifa - See You Again (ft. Charlie Puth)',
        url: '/WestT50/See You Again.mp3',
      },
	  {
        name: "Amy Shark - Love Songs Ain't for Us (feat. Keith Urban)",
        url: "/WestT50/Love Songs Ain't for Us.mp3",
      },
      {
        name: 'Imagine Dragons - Follow You',
        url: '/WestT50/Follow You.mp3',
      },
	  {
        name: "Billie Eilish - bad guy",
        url: '/WestT50/bad guy.mp3',
      },
      {
        name: 'Ava Max - Sweet but Psycho',
        url: '/WestT50/Sweet but Psycho.mp3',
      },{
        name: "Justin Bieber - Love Yourself",
        url: '/WestT50/Love Yourself.mp3',
      },
      {
        name: 'Gentle Bones & Clara Benin - A Day At A Time',
        url: '/WestT50/A Day At A Time.mp3',
      },
	  {
        name: "Alexander 23 - Cry Over Boys",
        url: '/WestT50/Cry Over Boys.mp3',
      },
      {
        name: 'Joshua Bassett - Telling Myself',
        url: '/WestT50/Telling Myself.mp3',
      },
	  {
        name: "Alan Walker, Noah Cyrus, Digital Farm Animals, Juliander - All Falls Down",
        url: '/WestT50/All Falls Down.mp3',
      },
      {
        name: 'Justin Bieber - Anyone',
        url: '/WestT50/Anyone.mp3',
      }
    ]
});