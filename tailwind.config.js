module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors:{
      'rodeo-dust': {
        '500': '#c7b299',
      },
      'white':'#FFFFFF',
      'black':'#000000',
      'stonewall': {
        '500': '#998675',
      },
      "green": {
        "500": "#1fab8a",
      },"likebgfortext": {
        "500": "#363767"
      }, "forbroder": {
        "500": "#C20772"
      },"forAllBg":{
        "500":"#FCFCFC"
      }
    },
    extend: {
      spacing:{
        '10.5':'2.7rem',
        '192': '48rem',
      '180': '45rem',
      '168': '42rem',
      '144': '36rem',
      '128': '32rem',
      '112': '28rem',
      }
    },
  },
  plugins: [],
}
