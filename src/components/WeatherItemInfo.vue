<template>
    <div class="info">
        <p class="date">{{new Date(cityInfo.dt * 1000).toLocaleTimeString("en-US", {month: 'short', day: 'numeric', hour: "2-digit", minute: "2-digit" })}}</p>
        <p class="name">{{cityInfo.name}}, {{cityInfo.sys.country}}</p>
        <div class="temp">
            <img :src="`http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}.png`" alt="weather icon">
            <span>{{ Math.round(cityInfo.main.temp) }}°C</span>
        </div>
        <p class="additional">Feels like {{Math.round(cityInfo.main.feels_like)}}°C. {{cityInfo.weather[0].description}}</p>
        <ul>
            <li>
                <svg viewBox="0 0 1000 1000" :style="`transform: rotate(${cityInfo.wind.deg + 180}deg);`">
                    <g>
                        <path data-v-47880d39=""
                              d="M510.5,749.6c-14.9-9.9-38.1-9.9-53.1,1.7l-262,207.3c-14.9,11.6-21.6,6.6-14.9-11.6L474,48.1c5-16.6,14.9-18.2,21.6,0l325,898.7c6.6,16.6-1.7,23.2-14.9,11.6L510.5,749.6z"></path>
                        <path data-v-47880d39=""
                              d="M817.2,990c-8.3,0-16.6-3.3-26.5-9.9L497.2,769.5c-5-3.3-18.2-3.3-23.2,0L210.3,976.7c-19.9,16.6-41.5,14.9-51.4,0c-6.6-9.9-8.3-21.6-3.3-38.1L449.1,39.8C459,13.3,477.3,10,483.9,10c6.6,0,24.9,3.3,34.8,29.8l325,898.7c5,14.9,5,28.2-1.7,38.1C837.1,985,827.2,990,817.2,990z M485.6,716.4c14.9,0,28.2,5,39.8,11.6l255.4,182.4L485.6,92.9l-267,814.2l223.9-177.4C454.1,721.4,469,716.4,485.6,716.4z"></path>
                    </g>
                </svg>
                {{cityInfo.wind.speed}}m/s
            </li>
            <li>Humidity: {{cityInfo.main.humidity}}%</li>
            <li>
                <svg viewBox="0 0 96 96">
                    <g data-v-7bdd0738="" transform="translate(0,96) scale(0.100000,-0.100000)"
                       fill="#48484a" stroke="none">
                        <path data-v-7bdd0738="" d="M351 854 c-98 -35 -179 -108 -227 -202 -27 -53 -29 -65 -29 -172 0
                                            -107 2 -119 29 -172 38 -75 104 -141 180 -181 58 -31 66 -32 176 -32 110 0
                                            118 1 175 32 77 40 138 101 178 178 31 57 32 65 32 175 0 110 -1 118 -32 176
                                            -40 76 -106 142 -181 179 -49 25 -71 29 -157 32 -73 2 -112 -1 -144 -13z m259
                                            -80 c73 -34 126 -86 161 -159 24 -50 29 -73 29 -135 0 -62 -5 -85 -29 -135
                                            -57 -119 -161 -185 -291 -185 -130 0 -234 66 -291 185 -24 50 -29 73 -29 135
                                            0 130 66 234 185 291 82 40 184 41 265 3z"></path>
                        <path data-v-7bdd0738="" d="M545 600 c-35 -35 -68 -60 -80 -60 -27 0 -45 -18 -45 -45 0 -33 -50
                                            -75 -89 -75 -18 0 -41 -5 -53 -11 -20 -11 -20 -11 3 -35 12 -13 33 -24 46 -24
                                            17 0 23 -6 23 -23 0 -13 10 -33 23 -45 30 -28 47 -13 47 43 0 32 6 47 28 68
                                            15 15 37 27 48 27 26 0 44 18 44 44 0 12 26 47 60 81 l60 61 -28 27 -28 27
                                            -59 -60z"></path>
                    </g>
                </svg>
                {{cityInfo.main.pressure}}hPa
            </li>
            <li>Visibility: {{cityInfo.visibility / 1000}}km</li>
        </ul>
    </div>
</template>

<script>

export default {
    
    props: {
        cityInfo: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.weather-item .info {
    margin-top: 10px;
    min-width: fit-content;

    .date {
        color: darkorange;
        font-size: 14px;
    }

    .name {
        font-size: 24px;
        color: black;
    }

    .temp {
        display: flex;
        align-items: center;
        margin: 5px 0;

        span {
            font-size: 32px;
        }
    }

    .additional {
        font-weight: bold;
        font-size: 18px;
    }

    ul {
        border-left: 1px solid darkorange;
        margin-top: 10px;
        padding-left: 20px;
        columns: 2;
        width: fit-content;

        li {
            list-style: none;
            padding: 2px 0;

            svg {
                max-width: 15px;
                max-height: 15px;
            }
        }
    }
}
</style>