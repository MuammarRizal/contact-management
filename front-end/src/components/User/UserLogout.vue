<template></template>

<script setup>
import { useLocalStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
import { logoutUser } from "../../lib/api/auth.api";
import { onBeforeMount } from "vue";

const router = useRouter();
const token = useLocalStorage("token");

const onUserLogout = async () => {
  try {
    const response = await logoutUser(token.value);
    if (response.status === 200) {
      token.value = "";
      router.push("/login");
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  onUserLogout();
});
</script>
