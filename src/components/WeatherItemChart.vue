<template>
    
    <div class="chart">
        <apexchart
                v-if="this.tempInfo"
                type="line"
                :options="chartOptions"
                :series="series"
        ></apexchart>
    </div>
</template>

<script>
export default {
    props: {
        tempInfo: {
            type: Object,
            required: true
        },
    },
    data: function () {
        return {
            series: [{
                name: "Temperature",
                data: this.tempInfo.temperature
            }],
            chartOptions: {
                chart: {
                    height: '100%',
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    foreColor: '#6D6D6D',
                    toolbar: {
                        show: false,
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        type: 'vertical',
                        shadeIntensity: 1,
                        opacityFrom: 1,
                        opacityTo: 1,
                        colorStops: [
                            {
                                offset: 10,
                                color: "#fc440b",
                                opacity: 1
                            },
                            {
                                offset: 55,
                                color: "#ffce63",
                                opacity: 1
                            },
                            {
                                offset: 90,
                                color: "#0a95f9",
                                opacity: 1
                            }
                        ]
                    }
                },
                grid: {
                    borderColor: '#6D6D6D'
                },
                stroke: {
                    curve: 'smooth'
                },
                yaxis: {
                    min: -50,
                    max: 50
                },
                title: {
                    text: 'Hourly temperature graph',
                    align: 'center'
                },
                xaxis: {
                    type: 'category',
                    tickAmount: 10,
                    categories: this.tempInfo.date,
                    labels: {
                        show: true
                    }
                }
            },
            isLoading: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.weather-item .chart {
    width: 100%;
}

</style>