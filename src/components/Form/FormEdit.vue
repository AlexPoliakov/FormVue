<template>
    <!--<user-form v-model="user"></user-form>-->
</template>

<script>
    import Form from './Form.vue'
    const userDefault = {
        _id: null,
        isActive: false,
        balance: '',
        picture: 'http://placehold.it/128x128',
        age: 0,
        eyeColor: '',
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        about: '',
        registered: ''
    };
    export default {
        name: 'FormEdit',
        date() {
            return {
                user: userDefault
            }
        },
        components: {
            Form
        }
    }
</script>
