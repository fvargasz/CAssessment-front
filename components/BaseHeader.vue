<script setup lang="ts">

const emit = defineEmits(['logUser']);

const handleLogin = (formData : any) => {
  // TODO: implement
}

const handleRegister = (formData : any) => {
  // TODO: implement
}

</script>

<template>
  <header class="w-full px-4 py-6">
    <nav class="flex items-center justify-between max-w-7xl mx-auto text-primary_white">
      <!-- Left side link -->
      <div class="flex items-center space-x-2 ">
        <Icon name="ion:paper-airplane" class="h-8 w-8 text-primary_white" />
        <h1 class="text-2xl font-bold ">SkyJourney</h1>
      </div>

      <!-- Right side Links -->
      <div class="hidden md:flex items-center space-x-6">
        <LoginMenu  @login="handleLogin" @register="handleRegister"/>
      </div>
    </nav>
  </header>
</template>
