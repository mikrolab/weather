import { createApp } from 'vue'
import App from "./App"
import VueApexCharts from "vue3-apexcharts";
import router from "@/router/router";

const app = createApp(App);
app.use(VueApexCharts);

app
    .use(router)
    .mount('#app')
