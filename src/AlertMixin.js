export default {
    data(){
        return {
            openDial: false,
            tip: ['primary', 'danger'],
            color: ['col-pri', 'col-dan']
        }
    },
    props: {
        item: {
            type: Number
        }
    },
    methods: {
        toggleAlert() {
            this.openDial = false
        },
        alertToggle(){
            this.openDial = true
        }
    }
}
