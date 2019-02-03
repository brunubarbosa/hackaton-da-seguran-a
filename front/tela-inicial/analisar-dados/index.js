$( document ).ready(function() {

  //PRIMEIRO GRAFICO


  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Maria da Penha", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: 'Percentual segmentado por bairro',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });






  new Chart(document.getElementById("doughnut-chart"), {
      type: 'doughnut',
      data: {
        labels: ["Jundiapeba", "Bras Cubas", "Sabaúna"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Retirada de dados por guarnição'
        }
      }
  });



  //segundo

  new Chart(document.getElementById("myChart2-1"), {
      type: 'bar',
      data: {
        labels: ["Jundiapeba", "Bras Cubas", "Sabaúna"],
        datasets: [
          {
            label: "Violência Doméstica",
            backgroundColor: "#3e95cd",
            data: [133,221,783,2478]
          }, {
            label: "Lei do Silêncio",
            backgroundColor: "#8e5ea2",
            data: [408,547,675,734]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Distritos com mais ocorrências por natureza'
        }
      }
  });






//////////////////////////////

  

  var ctx = document.getElementById("copia1").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito"],
            datasets: [{
                label: 'Qtde Vítimas',
                data: [22, 29, 30, 21, 25, 23, 29, 24],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          title: {
            display: true,
            text: 'Quantidade de vítimas por setor do município'
          }
         
        }
    });

////////////////////////////////////////////////////


  //terceiro

  new Chart(document.getElementById("mixed-chart"), {
      type: 'bar',
      data: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [{
            label: "Mogi",
            type: "line",
            borderColor: "#8e5ea2",
            data: [408,547,675,734],
            fill: false
          }, {
            label: "Jundiapeba",
            type: "line",
            borderColor: "#3e95cd",
            data: [133,221,783,2478],
            fill: false
          }, {
            label: "Jardim universo",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            data: [408,547,675,734],
          }, {
            label: "Local do evento",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            backgroundColorHover: "#3e95cd",
            data: [133,221,783,2478]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Indíce de ocorrência deste evento'
        },
        legend: { display: false }
      }
  });





  new Chart(document.getElementById("line-chart"), {
      type: 'line',
      data: {
        labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
        datasets: [{ 
            data: [86,114,106,106,107,111,133,221,783,2478],
            label: "Jundiapeba",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [282,350,411,502,635,809,947,1402,3700,5267],
            label: "Braz cubas",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [168,170,178,190,203,276,408,547,675,734],
            label: "César de Souza",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [40,20,10,16,24,38,74,167,508,784],
            label: "Butujuru",
            borderColor: "#e8c3b9",
            fill: false
          }, { 
            data: [6,3,2,2,7,26,82,172,312,433],
            label: "Vila Brasileira",
            borderColor: "#c45850",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Indice de ocorrência'
        }
      }
    });





    //quarto

    new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
        labels: ["Jundiapeba", "Braz Cubas", "César de Souza", "Butujuru", "Vila Brasileira"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Segmentação por delito'
        }
      }
  });


    new Chart(document.getElementById("copia2"), {
      type: 'doughnut',
      data: {
        labels: ["Jundiapeba", "Braz cubas", "César de Souza", "Butujuru", "Vila Brasileira"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Local da divisão'
        }
      }
  });

});
