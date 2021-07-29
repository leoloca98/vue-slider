console.log("Vue is active", Vue);  //Controllo se Vue è effettivamente attivo

Vue.config.devtools = true;  //DA mettere se si vuole usare il tool di Vue

const sliderVue = new Vue({
    el: "#slider-vue",
    data: {
        currentIndex: 0,
        images: [
            'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
            'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
            'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
            'https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        ],
    },
    methods: {
        isActive(i) {
            return this.currentIndex === i ? 'active' : '';
        },
        increaseIndex() {
            const lastIndex = this.images.length - 1;
            this.currentIndex = this.currentIndex === lastIndex ? 0 : this.currentIndex + 1; //Non si può usare la sintassi ++
        },
        decreaseIndex() {
            const lastIndex = this.images.length - 1;
            this.currentIndex = this.currentIndex === 0 ? lastIndex : this.currentIndex - 1; //Non si può usare la sintassi --
        },
        setCurrentIndex(newIndex) {
            this.currentIndex = newIndex;
        },
    },
});