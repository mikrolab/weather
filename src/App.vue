<template>
    <div class="weather">
        <img class="logo" src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
             alt="Open Weather">
        <button class="new-block" @click="AddCity">Add new block</button>
        <div class="weather-list">
            <WeatherItem
                v-for="city in cityList"
                :city-info="city"
                :key="city.id"
                @changeCity="changeCity"
            />
        </div>
    </div>
</template>

<script>
import WeatherItem from "@/components/WeatherItem";
import {useCityWeather} from "@/hooks/useCityWeather";
export default {
    components: {
        WeatherItem
    },
    data: function() {
        return {
        };
    },

    setup (props) {
        const {cityList, getCityList, changeCity} = useCityWeather();
        return {
            cityList,
            getCityList,
            changeCity
        }
    },
    
    methods: {
        changeCity(cityInfo, newCityName) {
            this.changeCity(this.cityList.indexOf(cityInfo), newCityName)
        },
        AddCity() {
            if (this.cityList.length < 5) {
                let name = Object.keys(this.cityList[this.cityList.length - 1])[0];
                this.getCityList(name);
            } else {
                console.log('max lenght ')
            }
        }
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.logo {
    margin: 0 auto;
    max-width: 200px;
    max-height: 200px;
}

.new-block {
    display: block;
    width: fit-content;
    border: 1px solid darkblue;
    padding: 10px 20px;
    outline: none;
    background-color: #37c1ee;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #1ba3d0;
    }
}

.weather {
    display: flex;
    flex-flow: column;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    &-list {
        margin-top: 20px;
    }
}
</style>