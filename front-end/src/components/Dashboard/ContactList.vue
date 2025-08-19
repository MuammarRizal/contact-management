<template>
  <div>
    <div class="flex items-center mb-6">
      <i class="fas fa-users text-blue-400 text-2xl mr-3"></i>
      <h1 class="text-2xl font-bold text-white">My Contacts</h1>
    </div>

    <!-- Search form -->
    <div
      class="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 p-6 mb-8 animate-fade-in"
    >
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <i class="fas fa-search text-blue-400 mr-3"></i>
          <h2 class="text-xl font-semibold text-white">Search Contacts</h2>
        </div>
        <button
          type="button"
          id="toggleSearchForm"
          class="text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-full focus:outline-none transition-all duration-200"
        >
          <i class="fas fa-chevron-down text-lg" id="toggleSearchIcon"></i>
        </button>
      </div>
      <div id="searchFormContent" class="mt-4">
        <form>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label
                for="search_name"
                class="block text-gray-300 text-sm font-medium mb-2"
                >Name</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <i class="fas fa-user text-gray-500"></i>
                </div>
                <input
                  type="text"
                  id="search_name"
                  name="search_name"
                  class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Search by name"
                />
              </div>
            </div>
            <div>
              <label
                for="search_email"
                class="block text-gray-300 text-sm font-medium mb-2"
                >Email</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <i class="fas fa-envelope text-gray-500"></i>
                </div>
                <input
                  type="text"
                  id="search_email"
                  name="search_email"
                  class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Search by email"
                />
              </div>
            </div>
            <div>
              <label
                for="search_phone"
                class="block text-gray-300 text-sm font-medium mb-2"
                >Phone</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <i class="fas fa-phone text-gray-500"></i>
                </div>
                <input
                  type="text"
                  id="search_phone"
                  name="search_phone"
                  class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Search by phone"
                />
              </div>
            </div>
          </div>
          <div class="mt-5 text-right">
            <button
              type="submit"
              class="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5"
            >
              <i class="fas fa-search mr-2"></i> Search
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Create New Contact Card -->
      <div
        class="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom overflow-hidden border-2 border-dashed border-gray-700 card-hover animate-fade-in"
      >
        <RouterLink to="/dashboard/contacts/create" class="block p-6 h-full">
          <div
            class="flex flex-col items-center justify-center h-full text-center"
          >
            <div
              class="w-20 h-20 bg-gradient rounded-full flex items-center justify-center mb-5 shadow-lg transform transition-transform duration-300 hover:scale-110"
            >
              <i class="fas fa-user-plus text-3xl text-white"></i>
            </div>
            <h2 class="text-xl font-semibold text-white mb-3">
              Create New Contact
            </h2>
            <p class="text-gray-300">Add a new contact to your list</p>
          </div>
        </RouterLink>
      </div>

      <!-- Contact Card 1 -->
      <div v-for="contact in contacts" :key="contact.id">
        <ContactCard
          :id="contact.id"
          :first_name="contact.first_name"
          :last_name="contact.last_name"
          :email="contact.email"
          :phone="contact.phone"
          :onDeleteHandler="onDeleteHandler"
        />
      </div>
    </div>
    <Pagination :total_page="total_page" :page="page" />
  </div>
</template>

<script setup>
import { useLocalStorage } from "@vueuse/core";
import { deleteContact, getAllContacts } from "../../lib/api/contact.api";
import { errorAlert, SuccessAlert, warnAlert } from "../../lib/alerts/alert";
import { onBeforeMount, ref, watch, computed } from "vue";
import ContactCard from "../ContactCard.vue";
import { RouterLink, useRoute } from "vue-router";
import Pagination from "../Pagination.vue";

const contacts = ref([]);
const route = useRoute();
const token = useLocalStorage("token").value;
const total_page = ref(1);
const page = ref(1);
const pageParams = computed(() => route.query.page || 1);

const getContacts = async (page) => {
  try {
    const response = await getAllContacts(token, page);
    const data = await response.json();

    if (data.errors) {
      errorAlert(data.errors);
      return [];
    }
    return data;
  } catch (error) {
    console.log(error);
    errorAlert(error.message);
    return [];
  }
};

const onDeleteHandler = async (id) => {
  try {
    const confirm = await warnAlert("Apa Anda Yakin Ingin Menghapus ? ");
    if (!confirm.isConfirmed) {
      return;
    }
    const response = await deleteContact(token, id);
    const data = await response.json();
    if (data.errors) {
      errorAlert(data.errors);
      return;
    }
    SuccessAlert("Data Berhasil Terhapus");
    contacts.value = await getContacts();
  } catch (error) {
    console.log(error);
    errorAlert(error.message);
  }
};

const loadContacts = async (page) => {
  const result = await getContacts(page);
  contacts.value = result.data;
  total_page.value = result.paging.total_page;
  page.value = result.paging.page;
};
watch(pageParams, async (newValue, oldValue) => {
  const data = await getContacts(newValue);
  contacts.value = data.data;
});

onBeforeMount(async () => {
  const data = await getContacts(pageParams.value);
  contacts.value = data.data;
  total_page.value = data.paging.total_page;
  page.value = data.paging.page;
});
</script>
