(function ($) {
  ("use strict");
  $.fn.andSelf = function () {
    return this.addBack.apply(this, arguments);
  };
  $(function () {
    if ($("#transaction-history").length) {
      var areaData = {
        labels: ["Adidas Samba", "Converse comme", "Nike Air", "Nike Zion"],
        datasets: [
          {
            data: [25, 23, 20, 10],
            backgroundColor: ["#333300", "#00d25b", "#ffab00", "#ff6600"],
          },
        ],
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 70,
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
      };
      var transactionhistoryChartPlugins = {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = 1;
          ctx.font = fontSize + "rem sans-serif";
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#ffffff";

          var text = "1420",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2.4;

          ctx.fillText(text, textX, textY);

          ctx.restore();
          var fontSize = 0.95;
          ctx.font = fontSize + "rem sans-serif";
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#6c7293";

          var texts = "Total",
            textsX = Math.round((width - ctx.measureText(text).width) / 2),
            textsY = height / 1.7;

          ctx.fillText(texts, textsX, textsY);
          ctx.save();
        },
      };
      var transactionhistoryChartCanvas = $("#transaction-history")
        .get(0)
        .getContext("2d");
      var transactionhistoryChart = new Chart(transactionhistoryChartCanvas, {
        type: "doughnut",
        data: areaData,
        options: areaOptions,
        plugins: transactionhistoryChartPlugins,
      });
    }
  });
  // const branchhh = document.querySelector("#branchhh");
  // if (branchhh) {
  //   const a = branchhh.dataset.myVariable;
  //   console.log(branchhh);
  //   console.log(a);
  // } else {
  //   console.log("đẹo cọ");
  // }
})(jQuery);
