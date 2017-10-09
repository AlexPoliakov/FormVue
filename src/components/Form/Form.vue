<template>
    <div class="form__pg">
        <h2 class="name__form">{{ text }}</h2>
        <div class="about" v-if="userShow">
            <h3>{{ userMessageData }}</h3>
        </div>
        <label for="name">First name:
            <input type="text" id="name" autofocus v-validate="'required'" placeholder="First name" v-model="user.firstName">
        </label>
        <label for="username">Username:
            <input type="text" id="username" required placeholder="Last name" v-model="user.lastName">
        </label>
        <label for="email">Email:
            <input type="email" id="email" required placeholder="Email" v-model="user.email">
        </label>
        <label for="photo">Picture:
            <input type="text" id="photo" required placeholder="http://" v-model="user.picture">
        </label>
        <div class="form__photo">
            <img class="avatar" v-if='havePhoto' :src="user.picture" alt="No image">
            <a class="link_pic" v-else href="https://imgur.com/" target="_blank">
                Add avatar
            </a>
        </div>
        <label for="age">Your age:
            <input type="number" id="age" required placeholder="Age" v-model="user.age">
        </label>
        <label for="activity">Activity:
            <input type="checkbox" id="activity" required v-model="user.isActive">Yes
        </label>
        <label for="level">Access level:
            <input type="select" id="level" list="your_level" required placeholder="Access level" v-model="user.accessLevel">
            <datalist id="your_level">
                <option value=""></option>
                <option value="user"></option>
                <option value="admin"></option>
                <option value="guest"></option>
            </datalist>
        </label>
        <label for="balance">Balance:
            <input type="text" id="balance" required placeholder="Balance" v-model="user.balance">
        </label>
        <label for="phone">Phone:
            <input type="tel" id="phone" required placeholder="Phone" v-model="user.phone">
        </label>
        <label for="address">Address:
            <input type="text" id="address" required placeholder="Address" v-model="user.address">
        </label>
        <label for="company">Company:
            <input type="text" id="company" required placeholder="Company" v-model="user.company">
        </label>
        <label for="bio">Biography:
            <textarea id="bio" required placeholder="Biography" v-model="user.about"></textarea>
        </label>
        <label for="date">Date registration:
            <input type="date" id="date" required placeholder="Date registration" v-model="user.registered">
        </label>
        <button class="add_user" v-if="!show" @click="saveUser">
            <i class="ion-person-add"></i>
        </button>
        <div class="search">
            <pre>{{ user }}</pre>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';

    export default {
        name: 'Form',
//        model: {
//            prop: 'user'
//        },
        props: {
            user: {
                type: Object
            }
        },
        data() {
            return {
                text: 'Registration Form',
                show: false,
                messageUser: ''
            }
        },
        // computed for Form component
        computed: {
            havePhoto() {
                return this.user.picture !== '';
            },
            userMessageData() {
                return `User: ${this.user.firstName} ${this.user.lastName} tel.: ${this.user.phone}`;
            },
            userShow() {
                return (this.user.firstName && this.user.lastName);
            }
        },
        // method for Form component
        methods: {
            clearForm() {
                for (let key in this.user) {
                    this.user[key] = '';
                }
            },
            saveUser() {
                for (let prop in this.user) {
                    if (this.user[prop] === '') {
                        if (prop === "_id" || prop === "isActive") continue;
                        alert(`Empty field: ${prop}`)
                        return;
                    }
                }
                EventBus.$emit('addUser', this.user);
                this.clearForm();

            },
            setUserDate(obj) {
                console.dir(obj);
            },
            getUser() {
                let options = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                axios({
                    method: 'get',
                    url: 'http://localhost:3000/user',
                    timeout: 1000
                })
                    .then(response => {
                        this.user = response.data[0];
                        this.setUserDate(this.user);
                    })
                    .catch(error => {
                        let err = new Error(error);
                        console.log(err);
                    });

            }
        },
        // created for Form component
        created() {
//            this.getUser();
        }
    }
</script>

<style scope>
    @import "form.css";
</style>