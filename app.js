const app = Vue.createApp({
  data() {
    return {
      fullName: 'Theo Wright',
      age: 34,
      photo:
        'https://media.licdn.com/dms/image/C4D03AQGC2Iv28a8iiQ/profile-displayphoto-shrink_400_400/0/1644459946675?e=1683763200&v=beta&t=FNtv8p3lvNGSuTmBH8tAEgf8KNyzeXKtCINz0GAbuYE',
    };
  },
  methods: {
    ageIn5Years() {
      return this.age + 5;
    },
    favouriteNumber() {
      return Math.floor(Math.random() * 10);
    },
  },
});

app.mount('#assignment');
