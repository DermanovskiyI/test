import Vue from 'vue'

const sliderButtons = {

    methods: {
        slide(direction) {
            this.$emit('slide', direction)
        },
        btnSlide(direction) {
            this.$emit('btnSlide', direction)
        }
    },
    props: {
        work: Object,
        nextIndex: Number,
        prevIndex: Number,
        nextWork: Object,
        prevWork: Object,
    },
    template: '#slider-buttons',
}
const sliderDisplay = {
    props: {
        work: Object
    },
    template: '#slider-display',

}
const sliderInfo = {
    props: {
        work: Object
    },
    template: '#slider-info',
}

new Vue({
    el: '#vue-slider',
    components: {
        sliderInfo,
        sliderDisplay,
        sliderButtons
    },
    data() {
        return {
            works: [],
            currentIndex: 0,
            nextIndex: 1,
            prevIndex: 0
        }
    },
    computed: {
        work() {
            return this.works[this.currentIndex]
        },
        nextWork() {
            return this.works[this.nextIndex]
        },
        prevWork() {
            return this.works[this.prevIndex]
        },

    },
    created() {
        this.works = require('../../../data/works.json');
        this.prevIndex = this.works.length - 1
    },
    methods: {
        changeWork(direction) {
            const firstIndex = 0;
            const lastIndex = this.works.length - 1;

            if (direction == 'next') {

                if (this.currentIndex < lastIndex) {
                    this.currentIndex++;
                } else {
                    this.currentIndex = firstIndex;
                }

            } else {
                if (this.currentIndex > firstIndex) {
                    this.currentIndex--;
                } else {
                    this.currentIndex = lastIndex;
                }
            }
        },
        btnSlide(direction) {
            const firstIndex = 0;
            const lastIndex = this.works.length - 1;
            if (direction == 'next') {
                if (this.nextIndex < lastIndex) {
                    this.nextIndex++;

                } else {
                    this.nextIndex = firstIndex
                }

                if (this.prevIndex == lastIndex) {
                    this.prevIndex = firstIndex
                } else {
                    this.prevIndex++
                }

            } else {
                if (this.nextIndex == firstIndex) {
                    this.nextIndex = lastIndex;
                } else {
                    this.nextIndex--
                }

                if (this.prevIndex == firstIndex) {
                    this.prevIndex = lastIndex
                } else {
                    this.prevIndex--
                }
            }

        }
    },
    template: '#slider-container'


})