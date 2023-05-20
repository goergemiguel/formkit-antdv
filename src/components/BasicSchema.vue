<script setup lang="ts">
const schema = [
    {
        $formkit: 'text',
        label: 'First Name',
        name: 'firstName',
        help: 'The persons first name',
        required: true, // renders label with asterisk
        validation: 'required',
    },
    {
        $formkit: 'number',
        label: 'How many cups of water?',
        name: 'cupsOfWater',
        help: 'Cups of water you drink in a day',
        required: true,
        validation: 'required',
    },
    {
        $formkit: 'password',
        label: 'Password',
        name: 'password',
        help: 'Choose a secure password',
        required: true,
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'checkbox',
        name: 'isLoveFormKit',
        label: 'I Love Formkit',
        validation: 'required',
    },
    {
        $formkit: 'checkbox',
        name: 'selectedFruit',
        antProps: {
            options: [
                { label: 'Apples', value: 'apples' },
                { label: 'Oranges', value: 'oranges' },
                { label: 'Bananas', value: 'bananas' },
            ],
        },
        validation: 'min:2',
        validationVisibility: 'live',
        validationMessages: {
            min: 'Please select at least 2 fruits',
        },
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'radio',
        name: 'favouriteFramework',
        label: 'What is your favourite framework?',
        antProps: {
            options: [
                { label: 'Vue', value: 'vue' },
                { label: 'React', value: 'react' },
                { label: 'Svelte', value: 'svelte' },
            ],
        },
        validation: 'required',
    },
    {
        $formkit: 'radio',
        name: 'favouriteNBATeam',
        label: 'What is your favourite NBA Team?',
        antProps: {
            optionType: 'button',
            options: [
                { label: 'LA Lakers', value: 'LAL' },
                { label: 'Chicago Bulls', value: 'CHI' },
                { label: 'Golden State Warriors', value: 'GSW' },
            ],
        },
        validation: 'required',
    },
    {
        $formkit: 'radio',
        name: 'chosenLocation',
        label: 'Which Country/City are you currently staying at?',
        antProps: {
            optionType: 'button',
            buttonStyle: 'solid',
            options: [
                { label: 'Hong Kong', value: 'hong_kong' },
                { label: 'Philippines', value: 'philippines' },
                { label: 'Vietnam', value: 'vietnam' },
            ],
        },
        required: true,
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'datepicker',
        name: 'dateOfBirth',
        label: 'Date of Birth',
        help: 'The date person is born in DD/MM/YYYY',
        antProps: {
            format: 'DD/MM/YYYY',
        },
        required: true,
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'textarea',
        name: 'selfDescription',
        label: 'Description',
        help: 'Some description about self',
        antProps: {
            rows: 5,
        },
        required: true,
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'select',
        name: 'favouriteFood',
        label: 'Favourite Food',
        help: 'Select your favourite dish',
        antProps: {
            options: [
                { label: 'Chicken Wings', value: 'chicken_wings' },
                { label: 'Spaghetti', value: 'spaghetti' },
                { label: 'Beef Stew', value: 'beef_stew' },
            ],
        },
        required: true,
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'toggle',
        name: 'isResidentInHongKong',
        label: 'Resident of Hong Kong?',
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'button',
        label: 'Default Button',
    },
    {
        $formkit: 'button',
        label: 'Primary Button',
        antProps: {
            type: 'primary',
        },
    },
]
</script>

<template>
    <FormKit type="group" name="basicSchema">
        <FormKitSchema :schema="schema" />
    </FormKit>
</template>
