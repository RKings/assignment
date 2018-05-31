<template>
   <div class="contact-form">
       <div class="contact-form__wrapper">
           <h1 class="contact-form__title">
               We would love to hear from you
           </h1>
           <div class="contact-form__form">
                <div class="contact-form__notice" v-if="submitted && ($v.$invalid || formSend)">
                    <div class="contact-form__notice-icon" :class="{'contact-form__notice-icon--check' : formSend }"></div><span>{{noticeMessage}}</span>
                </div>
               <form @submit.prevent="submit" v-if="!formSend">
                    <div class="contact-form__form-wrapper">
                        <div class="contact-form__input" :class="{'contact-form__input--checked':!$v.firstName.$invalid}">
                            <input v-model.trim="$v.firstName.$model" type="text" placeholder="First name">
                            <div class="contact-form__input-validation-fail" v-if="submitted && $v.firstName.$invalid">
                                <div class="contact-form__arrow"></div>
                                <span>We need your first name.</span>
                            </div>
                        </div>
                        <div class="contact-form__input" :class="{'contact-form__input--checked':!$v.surname.$invalid}">
                            <input v-model.trim="$v.surname.$model" type="text" placeholder="Last name">
                            <div class="contact-form__input-validation-fail" v-if="submitted && $v.surname.$invalid">
                                <div class="contact-form__arrow"></div>
                                <span>We need your last name.</span>
                            </div>
                        </div>
                        <div class="contact-form__input" :class="{'contact-form__input--checked':!$v.eMail.$invalid}">
                            <input v-model.trim="$v.eMail.$model" type="email" placeholder="Your E-mail">
                            <div class="contact-form__input-validation-fail" v-if="submitted && $v.eMail.$invalid">
                                <div class="contact-form__arrow"></div>
                                <span>Please use a valid e-mail address.</span>
                            </div>
                        </div>
                        <div class="contact-form__input">
                            <input v-model.trim="$v.telephone.$model" type="tel" placeholder="Your Phone number (optional)">
                        </div>
                        <div class="contact-form__input" :class="{'contact-form__input--checked':!$v.message.$invalid}">
                            <textarea v-model.trim="$v.message.$model" placeholder="Your message..."></textarea>
                            <div class="contact-form__input-validation-fail" v-if="submitted && $v.message.$invalid">
                                <div class="contact-form__arrow"></div>
                                <span>Sorry, your message can’t be empty.</span>
                            </div>
                        </div>
                    </div>
                   <input type="submit" value="Send">
               </form>
           </div>
       </div>
   </div> 
</template>

<script>
    import { required, minLength, email } from 'vuelidate/lib/validators'

    export default {
        name: 'dept-contact-form',
        data() {
            return {
                firstName: '',
                surname: '',
                eMail: '',
                telephone: null,
                message: '',
                submitted: false,
                noticeMessage: 'Please complete the form and try again.',
                successMessage: 'Thank you, we have received your message.',
                errorMessage: 'Something went wrong, please try again.',
                formSend: false
            }
        },
        validations: {
            firstName: {
                required,
                minLength: minLength(2)
            },
            surname: {
                required,
                between: minLength(2)
            },
            eMail: {
                required,
                email
            },
            telephone: {

            },
            message: {
                required
            }
        },
        methods: {
            submit() {
                this.submitted = true;

                if(this.$v.$invalid == false) {
                    // Normally add a request
                    this.feedback('success');
                }
            },
            feedback(data) {
                if(data == 'success') {
                    this.formSend = true;
                    this.noticeMessage = this.successMessage;
                } else {
                    this.noticeMessage = this.errorMessage;
                }
            }
        }
    }
</script>