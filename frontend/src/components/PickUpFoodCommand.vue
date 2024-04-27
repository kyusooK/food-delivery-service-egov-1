<template>
    <v-card outlined>
        <v-card-title>
            PickUpFood
        </v-card-title>

        <v-card-text>
            <String label="RiderId" v-model="value.riderId" :editMode="editMode"/>
            <String label="OrderId" v-model="value.orderId" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="pickUpFood"
            >
                PickUpFood
            </v-btn>
            
            <v-btn
                    color="primary"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
   
    export default {
        name: 'PickUpFoodCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.riderId = '';
            this.value.orderId = '';
        },
        watch: {
        },
        methods: {
            pickUpFood() {
                this.$emit('pickUpFood', this.value);
            },
            close() {
                this.$emit('closeDialog');
            },
            change() {
                this.$emit('input', this.value);
            },
        }
    }
</script>

