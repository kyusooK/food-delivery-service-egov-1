<template>

    <v-card outlined>
        <v-card-title>
            OrderDetail
        </v-card-title>

        <v-card-text>
            <String label="As" v-model="value.as" :editMode="editMode"/>
            <String label="Qw" v-model="value.qw" :editMode="editMode"/>
            <String label="Er" v-model="value.er" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions v-if="inList">
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script>

    export default {
        name: 'OrderDetail',
        components:{},
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean,
            inList: Boolean,
            label: String,
        },
        data: () => ({
        }),
        async created() {
            if(!Object.values(this.value)[0]) {
                this.$emit('input', {});
                this.newValue = {
                    'as': '',
                    'qw': '',
                    'er': '',
                }
            }
            if(typeof this.value === 'object') {
                if(!('as' in this.value)) {
                    this.value.as = '';
                }
                if(!('qw' in this.value)) {
                    this.value.qw = '';
                }
                if(!('er' in this.value)) {
                    this.value.er = '';
                }
            }
        },
        watch: {
            value(val) {
                this.$emit('input', val);
            },
            newValue(val) {
                this.$emit('input', val);
            },
        },

        methods: {
            edit() {
                this.editMode = true;
            },
            async add() {
                this.editMode = false;
                this.$emit('input', this.value);

                if(this.isNew){
                    this.$emit('add', this.value);
                } else {
                    this.$emit('edit', this.value);
                }
            },
            async remove(){
                this.editMode = false;
                this.isDeleted = true;

                this.$emit('input', this.value);
                this.$emit('delete', this.value);
            },
            change(){
                this.$emit('change', this.value);
            },
        }
    }
</script>

