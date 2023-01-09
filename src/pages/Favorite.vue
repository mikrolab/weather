<template>
    <div>
        <div class="weather-list" v-if="!!cityListFavorite.length">
            <WeatherItem
                    v-for="city in cityListFavorite"
                    :city-info="city"
                    :key="city.id"
                    @favoriteCity="changeFavorite"
                    favorite-page="true"
            />
        </div>
        <div class="empty" v-else>
            <h1>You do not have selected cities, this can be done on the main page</h1>
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
        const {cityList, cityListFavorite, changeFavorite} = useCityWeather();
        return {
            cityList,
            cityListFavorite,
            changeFavorite
        }
    },

    methods: {
        changeFavorite(cityInfo) {
            this.changeFavorite(this.cityList.indexOf(cityInfo))
        },
    },
};
</script>

<style lang="scss" scoped>
.weather-list {
    margin-top: 20px;
}

.empty {
    text-align: center;
}
</style>