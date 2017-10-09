<template id="list-template">
    <div class="list__pg">
        <h2 class="name__list">{{ text }}</h2>
        <!--<span>{{ count }}</span>-->
        <!--<div class="user" v-for="user in list">-->
            <!--<ul>-->
                <!--<li v-for="(prop, key) in user">{{ key }}: {{ prop }}</li>-->
            <!--</ul>-->
        <!--</div>-->
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'List',
        data() {
            return {
                text: 'List User',
                list: []
            }
        },
        // method for List component
        methods: {
            getAllUser() {
                axios({
                    method:'get',
                    url:'./user.json',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => {
                        this.list = [...response.data];
                        // console.log(this.list);
                    })
                    .catch(error => {
                        let err = new Error(error);
                        console.log(err);
                    });
            }
        },
        // computed for List component
        computed: {
            count() {
                return (this.list.length);
            }
        },
        // mounted for List component
        mounted() {
            this.getAllUser();
        }
    }
</script>

<style>
    .list__pg {
        margin: 60px auto;
        bottom: 0;
        border: 1px solid lightsteelblue;
        color: #afafaf;
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        width: 940px;
    }

    .name__list {
        text-align: center;
    }
</style>