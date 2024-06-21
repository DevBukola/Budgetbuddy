// const userData = {
//     expenses: [
//       { category: 'Food', amount: 100 },
//       { category: 'Transportation', amount: 50 },
//       { category: 'Housing', amount: 200 },
//       { category: 'Food', amount: 50 },
//       { category: 'Entertainment', amount: 75 }
//     ]
//   };
  
//   function loadChartData() {
//     const ctx = document.getElementById('expense-chart').getContext('2d');
//     const categories = [...new Set(userData.expenses.map(expense => expense.category))];
//     const data = categories.map(category => {
//       return userData.expenses.filter(expense => expense.category === category)
//         .reduce((sum, expense) => sum + expense.amount, 0);
//     });
  
//     new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: categories,
//         datasets: [{
//           label: 'Expenses by Category',
//           data: data,
//           backgroundColor: ['#ff6f00', '#007bff', '#ffcc00', '#33cc33', '#ff3366'],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: true,
//         aspectRatio: 1,
//         width: 500,
//         height: 300,
//         legend: {
//           position: 'top'
//         },
//         scale: {
//           ticks: {
//             beginAtZero: false
//           }
//         }
//       }
//     });
//   }
  
//   // Initialize chart data on page load
//   document.addEventListener('DOMContentLoaded', () => {
//     loadChartData();
//   });





//THIS//
document.addEventListener('DOMContentLoaded', () => {
  // Load user data from localStorage
  const storedData = localStorage.getItem('userData');
  const userData = storedData ? JSON.parse(storedData) : { expenses: [] };

  // Process data for chart
  const categories = [...new Set(userData.expenses.map(expense => expense.category))];
  const data = categories.map(category => {
    return userData.expenses.filter(expense => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0);
  });

  // Create chart
  const ctx = document.getElementById('expense-chart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: categories,
      datasets: [{
        label: 'Expenses by Category',
        data: data,
        backgroundColor: ['#ff6f00', '#007bff', '#ffcc00', '#33cc33', '#ff3366'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
