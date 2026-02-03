 const tabs = document.querySelectorAll(".nav-link");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      contents.forEach(content => content.classList.remove("active"));

      const target = tab.dataset.tab;
      document.getElementById(target).classList.add("active");
    });
  });




const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      data: [50, 40, 10, 35, 50, 65, 40],

      backgroundColor: [
      
        '#36A2EB',
        '#36A2EB',
        '#36A2EB',
        '#FFCE56',
       '#36A2EB',
        '#36A2EB',
        '#36A2EB',

       
      ],
      borderColor: [
      
        '#36A2EB',
        '#36A2EB',
        '#36A2EB',
        '#FFCE56',
       '#36A2EB',
        '#36A2EB',
        '#36A2EB',

      
      ],
      borderWidth: 1,
    }]
  },

  options: {
     responsive: true,
  maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
     scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 20  
      }
    }
  }
  }
});


const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      data: [50, 40, 10, 35, 50, 65, 40],

      backgroundColor: [
      
        '#36A2EB',
        '#36A2EB',
        '#36A2EB',
        '#FFCE56',
       '#36A2EB',
        '#36A2EB',
        '#36A2EB',

       
      ],
      borderColor: [
      
        '#36A2EB',
        '#36A2EB',
        '#36A2EB',
        '#FFCE56',
       '#36A2EB',
        '#36A2EB',
        '#36A2EB',

      
      ],
      borderWidth: 1,
    }]
  },

  options: {
     responsive: true,
  maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
     scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 20  
      }
    }
  }
  }
});
// ///////////////////////////


document.addEventListener('DOMContentLoaded', (event) => {
    // تشغيل عداد الأرقام
    new PureCounter();

    // كود الـ Chart الأول
    const ctx = document.getElementById('myChart');
    if(ctx) {
        new Chart(ctx, { /* الإعدادات بتاعتك هنا */ });
    }

    // كود الـ Chart الثاني
    const ctx2 = document.getElementById('myChart2');
    if(ctx2) {
        new Chart(ctx2, { /* الإعدادات بتاعتك هنا */ });
    }
});