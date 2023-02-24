<template>
    <select class="select w-full max-w-xs" v-model="locale">
        <option disabled selected>🌐 {{ locale }}</option>
        <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale.code">
            {{ locale.name }}
        </option>
    </select>
</template>
<script setup>
const { locale, locales } = useI18n()

const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})
</script>