<template>
  <highcharts :options="chartOptions" />
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  props: {
    complitionRate: {
      type: Number,
      required: true,
      validator: (value) => {
        return (typeof value === "number" && value >= 0 && value <= 1) || null;
      },
    },
  },

  components: { highcharts: Chart },

  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        title: {
          text: 'אחוז השלמה של הגמו"ש',
        },
        tooltip: {
          pointFormat: "<b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              connectorColor: "silver",
            },
          },
        },
        series: [
          {
            data: [
              { name: "סיים", y: this.complitionRate * 100 },
              { name: "נשאר", y: (1 - this.complitionRate) * 100 },
            ],
          },
        ],
      },
    };
  },
};
</script>
