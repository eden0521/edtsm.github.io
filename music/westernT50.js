const app = new APlayer({
    container: document.getElementById('western'),
    fixed: false,
    autoplay: false,
    theme: '#1c03fc',
    loop: 'all',
    order: 'random',
    preload: 'metadata',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 0,
    audio: [
      {
        name: "ROSÉ - On The Ground",
        url: '/WesternT50/On The Ground.mp3',
      },
      {
        name: 'ROSÉ - Gone',
        url: '/WesternT50/Gone.mp3',
      },
	  {
        name: "Bruno Mars, Anderson .Paak & Silk Sonic - Leave The Door Open",
        url: '/WesternT50/Leave The Door Open.mp3',
      },
      {
        name: 'Justin Bieber - Hold On',
        url: '/WesternT50/Hold On.mp3',
      },
	  {
        name: "Maroon 5 & Megan Thee Stallion - Beautiful Mistakes",
        url: '/WesternT50/Beautiful Mistakes.mp3',
      },
      {
        name: 'ØZI - 0.03',
        url: '/WesternT50/003.mp3',
      },
	  {
        name: "Taylor Swift - Love Story (Taylors Version)",
        url: '/WesternT50/Love Story.mp3',
      },
      {
        name: 'Jhené Aiko - Lead the Way',
        url: '/WesternT50/Lead the Way.mp3',
      },
	  {
        name: "ØZI - LUFU (feat.Arin Ray,GSoul)",
        url: '/WesternT50/LUFU.mp3',
      },
      {
        name: 'Post Malone - Only Wanna Be With You (Pokémon 25 Version)',
        url: '/WesternT50/Only Wanna Be With You.mp3',
      },
	  {
        name: "Conan Gray - Overdrive",
        url: '/WesternT50/Overdrive.mp3',
      },
      {
        name: 'The Chainsmokers, Coldplay - Something Just Like This',
        url: '/WesternT50/Something Just Like This.mp3',
      },
	  {
        name: "Ed Sheeran - Shape of You",
        url: '/WesternT50/Shape of You.mp3',
      },
      {
        name: 'DJ Snake & Selena Gomez - Selfish Love',
        url: '/WesternT50/Selfish Love.mp3',
      },
	  {
        name: "Maisie Peters - John Hughes Movie",
        url: '/WesternT50/John Hughes Movie.mp3',
      },
      {
        name: 'Zara Larsson - Need Someone',
        url: '/WesternT50/Need Someone.mp3',
      },
	  {
        name: "Joel Corry, RAYE & David Guetta - BED",
        url: '/WesternT50/BED.mp3',
      },
      {
        name: 'Alan Walker & salem ilese - Fake A Smile',
        url: '/WesternT50/Fake A Smile.mp3',
      },
	  {
        name: "Ed Sheeran - Afterglow",
        url: '/WesternT50/Afterglow.mp3',
      },
      {
        name: 'Shawn Mendes & Camila Cabello - Señorita',
        url: '/WesternT50/Senorita.mp3',
      },
	  {
        name: "BTS - Dynamite",
        url: '/WesternT50/Dynamite.mp3',
      },
      {
        name: 'Bebe Rexha - Sacrifice',
        url: '/WesternT50/Sacrifice.mp3',
      },
	  {
        name: "Tones and I - Dance Monkey",
        url: '/WesternT50/Dance Monkey.mp3',
      },
      {
        name: 'Alan Walker - Faded',
        url: '/WesternT50/Faded.mp3',
      },
	  {
        name: "SHAUN - Way Back Home (feat. Conor Maynard)",
        url: '/WesternT50/Way Back Home.mp3',
      },
      {
        name: 'ØZI - SLIDE',
        url: '/WesternT50/SLIDE.mp3',
      },
	  {
        name: "Ed Sheeran - Perfect",
        url: '/WesternT50/Perfect.mp3',
      },
      {
        name: 'Rhydian Vaughan - Fine As Moonlight',
        url: '/WesternT50/Fine As Moonlight.mp3',
      },
	  {
        name: "The Chainsmokers - Closer (ft. Halsey)",
        url: '/WesternT50/Closer.mp3',
      },
      {
        name: 'Camila Cabello - Havana (ft. Young Thug)',
        url: '/WesternT50/Havana.mp3',
      },
	  {
        name: "Maroon 5 - Girls Like You (feat. Cardi B)",
        url: '/WesternT50/Girls Like You.mp3',
      },
      {
        name: 'ØZI - JUST DO YOU (feat. sunkis)',
        url: '/WesternT50/JUST DO YOU.mp3',
      },
	  {
        name: "Ariana Grande - test drive",
        url: '/WesternT50/test drive.mp3',
      },
      {
        name: "Dua Lipa - We're Good",
        url: "/WesternT50/Were Good.mp3",
      },
	  {
        name: "Lady Gaga, Bradley Cooper - Shallow",
        url: '/WesternT50/Shallow.mp3',
      },
      {
        name: 'Sia - 1+1',
        url: '/WesternT50/11.mp3',
      },
	  {
        name: "RITA ORA - Big (feat. Gunna)",
        url: '/WesternT50/Big.mp3',
      },
      {
        name: 'Adam Hambrick - The Longer I Lay Here (ft Jillian Jacqueline)',
        url: '/WesternT50/The Longer I Lay Here.mp3',
      },
	  {
        name: "Maroon 5 - Sugar",
        url: '/WesternT50/Sugar.mp3',
      },
      {
        name: 'Wiz Khalifa - See You Again (ft. Charlie Puth)',
        url: '/WesternT50/See You Again.mp3',
      },
	  {
        name: "Amy Shark - Love Songs Ain't for Us (feat. Keith Urban)",
        url: "/WesternT50/Love Songs Aint for Us.mp3",
      },
      {
        name: 'Imagine Dragons - Follow You',
        url: '/WesternT50/Follow You.mp3',
      },
	  {
        name: "Billie Eilish - bad guy",
        url: '/WesternT50/bad guy.mp3',
      },
      {
        name: 'Ava Max - Sweet but Psycho',
        url: '/WesternT50/Sweet but Psycho.mp3',
      },
	  {
        name: "Justin Bieber - Love Yourself",
        url: '/WesternT50/Love Yourself.mp3',
      },
      {
        name: 'Gentle Bones & Clara Benin - A Day At A Time',
        url: '/WesternT50/A Day At A Time.mp3',
      },
	  {
        name: "Alexander 23 - Cry Over Boys",
        url: '/WesternT50/Cry Over Boys.mp3',
      },
      {
        name: 'Joshua Bassett - Telling Myself',
        url: '/WesternT50/Telling Myself.mp3',
      },
	  {
        name: "Alan Walker, Noah Cyrus, Digital Farm Animals, Juliander - All Falls Down",
        url: '/WesternT50/All Falls Down.mp3',
      },
      {
        name: 'Justin Bieber - Anyone',
        url: '/WesternT50/Anyone.mp3',
      }
    ]
});
