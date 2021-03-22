const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
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
        name: "Wind flower",
        artist: '마마무',
        url: '/songs/Wind flower.mp3',
      },
      {
        name: 'A Thousand Years',
        artist: 'Christina Perri',
        url: '/songs/A Thousand Years.mp3',
      },
	  {
        name: "Solo & I Miss You",
        artist: 'Clean Bandit',
        url: '/songs/Solo I Miss You.mp3',
      },
      {
        name: 'Rather Be',
        artist: 'Clean Bandit ft. Jess Glynne',
        url: '/songs/Rather Be.mp3',
      },
	  {
        name: "Closer",
        artist: 'The Chainsmokers ft. Halsey',
        url: '/songs/Closer.mp3',
      },
      {
        name: 'Symphony',
        artist: 'Clean Bandit ft. Zara Larsson',
        url: '/songs/Symphony.mp3',
      },
	  {
        name: "Titanium",
        artist: 'David Guetta ft. Sia',
        url: '/songs/Titanium.mp3',
      },
      {
        name: 'Bang My Head',
        artist: 'David Guetta ft. Sia & Fetty Wap',
        url: '/songs/Bang My Head.mp3',
      },
	  {
        name: "Extraordinary",
        artist: 'Clean Bandit ft. Sharna Bass',
        url: '/songs/Extraordinary.mp3',
      },
      {
        name: 'Happy Now',
        artist: 'Zedd, Elley Duhé',
        url: '/songs/Happy Now.mp3',
      },
	  {
        name: "Fast Car",
        artist: 'Jonas Blue ft. Dakota',
        url: '/songs/Fast Car.mp3',
      },
      {
        name: 'Perfect Strangers',
        artist: 'Jonas Blue ft. JP Cooper',
        url: '/songs/Perfect Strangers.mp3',
      },
	  {
        name: "Firestone",
        artist: 'Kygo ft. Conrad Sewell',
        url: '/songs/Firestone.mp3',
      },
      {
        name: 'In The Name Of Love',
        artist: 'Martin Garrix & Bebe Rexha',
        url: '/songs/In The Name Of Love.mp3',
      },
	  {
        name: "Now You're Gone",
        artist: 'Basshunter',
        url: "/songs/Now You're Gone.mp3",
      },
      {
        name: 'Counting Stars',
        artist: 'OneRepublic',
        url: '/songs/Counting Stars.mp3',
      },
	  {
        name: "Rockabye",
        artist: 'Clean Bandit ft. Sean Paul & Anne-Marie',
        url: "/songs/Rockabye.mp3",
      },
      {
        name: 'These Days',
        artist: 'Rudimental ft. Jess Glynne, Macklemore & Dan Caplen',
        url: '/songs/These Days.mp3',
      },
	  {
        name: "See You Again",
        artist: 'Wiz Khalifa ft. Charlie Puth',
        url: "/songs/See You Again.mp3",
      },
      {
        name: 'Wolves',
        artist: 'Selena Gomez and Marshmello',
        url: '/songs/Wolves.mp3',
      },
	  {
        name: "Treat You Better",
        artist: 'Shawn Mendes',
        url: "/songs/Treat You Better.mp3",
      },
      {
        name: "Don't Let Me Down",
        artist: 'The Chainsmokers ft. Daya',
        url: "/songs/Don't Let Me Down.mp3",
      },
	  {
        name: "Something Just Like This",
        artist: 'The Chainsmokers & Coldplay',
        url: "/songs/Something Just Like This.mp3",
      },
      {
        name: "Clarity",
        artist: 'Zedd ft. Foxes',
        url: "/songs/Clarity.mp3",
      },
      {
        name: "Stay",
        artist: 'Zedd, Alessia Cara',
        url: "/songs/Stay.mp3",
      }
    ]
});