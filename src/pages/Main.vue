<template>
    <div>
        <button class="new-block" @click="addCity">Add new block</button>
        <div class="weather-list">
            <WeatherItem
                    v-for="city in cityList"
                    :city-info="city"
                    :key="city.id"
                    @changeCity="changeCity"
                    @favoriteCity="changeFavorite"
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
    data: function () {
        return {};
    },

    setup(props) {
        const {cityList, getCityList, changeCity, changeFavorite} = useCityWeather();
        return {
            cityList,
            getCityList,
            changeCity,
            changeFavorite
        }
    },

    methods: {
        changeCity(cityInfo, newCityName) {
            this.changeCity(this.cityList.indexOf(cityInfo), newCityName)
        },
        addCity() {
            if (this.cityList.length < 5) {
                let name = Object.keys(this.cityList[this.cityList.length - 1])[0];
                this.getCityList(name);
            } else {
                console.log('max lenght 5')
            }
        },
        changeFavorite(cityInfo) {
            this.changeFavorite(this.cityList.indexOf(cityInfo))
        }
    },
};
</script>

<style lang="scss" scoped>

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

.weather-list {
    margin-top: 20px;
}
</style>