import Vue from 'vue'

const circles = {
    template: "#circles",
    props: {
        circleName: String,
        percentage: Number
    },
    methods: {
        drawCircleDependsOnPercentage() {
            const circle = this.$refs['circle']
            const dashOffset = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dashoffset"));
            const percent = (dashOffset / 100) * (100 - this.percentage);
            circle.style.strokeDashoffset = percent;
            circle.style.opacity=this.percentage + '%';
        }
    },
    mounted() {
        this.drawCircleDependsOnPercentage();
    }

}

const circlesList = { //создаем компонент
    template: '#circles-list', //разметка компонента
    components: { //регистрируем компонент
        circles
    },
    props: {
        skillCircle: Object
    }
    
}

new Vue({
    el: '#vue-skills',     //сюда кладем элемент в котором будет рабатать vue
    components: {  // регистрируем компонент
        circlesList
    },
    data() { //сюда кладем данные, с которыми хотим работать
        return {
            skills: []
        }
    },
    created() {
        this.skills = require('../../../data/experience.json')
    },
    template:'#skill-list', // сюда кладем id разметки
    
   
    
})
