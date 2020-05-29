<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
        <v-text-field
            v-model="name"
            :counter="30"
            :rules="nameRules"
            label="Nombre y Apellido"
            required
        ></v-text-field>

        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Correo Electronico"
            required
        ></v-text-field>

        <v-textarea
            :counter="300"
            name="peticion"
            filled
            label="Peticion de Oracion"
            auto-grow
            autocomplete="oracion"
            v-model="peticion"
            :rules="peticionRules"
            required
        ></v-textarea>

        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Debe estar de acuerdo con nuestra politica de confidencialidad!']"
            label="Estas de Acuerdo?"
            required
        ></v-checkbox>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
        >
            Enviar
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
        >
            Borrar
        </v-btn>
    </v-form>
</template>

<style scoped>
    form .v-form{
        color: white;
    }
</style>

<script>
    export default {
        name: 'PxOracionesForm',

        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Porfavor ingrese su Nombre',
                v => (v && v.length <= 30) || 'No puede colocar mas de 30 Letras',
            ],
            email: '',
            emailRules: [
                v => !!v || 'Su Correo Electronico es requerido',
                v => /.+@.+\..+/.test(v) || 'Debe ser un Email Valido...',
            ],

            peticion: '',
            peticionRules: [
                v => !!v || 'Su Peticion es requerida',
                v => (v && v.length <= 300) || 'No puede colocar mas de 255 Letras',
            ],


            checkbox: false,
            }),

            methods: {
            validate () {
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>