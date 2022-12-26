import { createApp } from 'vue'
import App from "./App"
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(VueApexCharts);

app.mount('#app')
