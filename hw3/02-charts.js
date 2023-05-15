const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

const url = 'https://thronesapi.com/api/v2/Characters';

const fetchCharacters = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const characters = data.filter((char) => char.family !== null);
    const families = {};
    for (let i = 0; i < characters.length; i++) {
      const family = characters[i].family;
      if (families[family]) {
        families[family]++;
      } else {
        families[family] = 1;
      }
    }
    const chartData = {
      labels: Object.keys(families),
      datasets: [
        {
          label: 'Number of Characters',
          data: Object.values(families),
          backgroundColor: backgroundColors.slice(0, Object.keys(families).length),
          borderColor: borderColors.slice(0, Object.keys(families).length),
          borderWidth: 1,
        },
      ],
    };
    const donutChart = document.querySelector('.donut-chart');
    new Chart(donutChart, {
      type: 'doughnut',
      data: chartData,
    });
  } catch (error) {
    console.error(error);
  }
};

fetchCharacters();
