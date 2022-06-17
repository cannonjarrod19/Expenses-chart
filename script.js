
let xValues = ["mon", 'tue', ' wed', 'thu', 'fri', 'sat', 'sun']
let yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]

let myChart = new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
          data: yValues, 
          backgroundColor: 'hsl(10, 79%, 65%)',
          hoverBackgroundColor: 'hsl(186, 34%, 60%)',
        }]
      },
      options: {
        tooltips: {
            displayColors: false,
            mode: 'nearest',
        },
        legend: {
            display: false,
          },
        scales: {
            
            xAxes: [{
                gridLines: {
                   display: false
                }
             }],
            yAxes: [{
                gridLines: {
                   display: false
                },
                ticks: {
                    display: false
                }
             }]
        },
        onHover: (event, chartElement) => {
            const target = event.native ? event.native.target : event.target;
            target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        }
     }
  });
  
