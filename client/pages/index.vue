<template>
	<h1>Hello World</h1>
	<button @click="send">Envoyer</button>
</template>

<script setup lang="ts">

async function send() {
	const response = await $fetch('http://localhost:8000/exemples', {
		method: 'POST',
		body: { name: 'Hello from Nuxt' }
	})
	console.log(response)
}

</script>
