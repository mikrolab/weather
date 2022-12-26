import {onMounted, ref} from "vue";
import axios from "axios";

export function useCityWeather() {

    const cityList = ref([])
    
    const getCityList = async (city) => {
        cityList.value.push( await getCityInfo(city));
    }
    
    const getCityInfo = async (city= 'Kyiv') => {
        let cityInfo = {};
        let currentWeather = await fetchWeather(city);
        let currentForecast = await fetchForecast(city);

        cityInfo[city] = {'current': currentWeather}
        cityInfo[city].forecast = {'date': [], 'temperature': []};
        currentForecast.list.forEach((el) => {
            cityInfo[city].forecast.date.push(new Date(el.dt * 1000).toLocaleTimeString("en-US", {month: 'numeric', day: 'numeric',hour: "2-digit" }));
            cityInfo[city].forecast.temperature.push(Math.round(el.main.temp));
        })
        
        return cityInfo;
    }
    
    const changeCity = async (id, city) => {
        cityList.value[id] = await getCityInfo(city);
    }
    
    const fetchWeather = async (city) => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: city,
                    units: 'metric',
                    appid: "ef3b59aad930b144f088cb7253f4eeff"
                }
            });
            return response.data

        } catch (e) {
            alert('Can`t find city')
        }
    }

    const fetchForecast = async (city) => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
                params: {
                    q: city,
                    units: 'metric',
                    appid: "ef3b59aad930b144f088cb7253f4eeff"
                }
            });
            return response.data

        } catch (e) {
            alert('Can`t find city 1')
        }
    }

    onMounted(getCityList)

    return {
        cityList,
        getCityList,
        changeCity
    }
}