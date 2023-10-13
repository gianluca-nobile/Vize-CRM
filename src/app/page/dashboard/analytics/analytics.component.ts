import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js/auto";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit{

  salesChart: any;
  earningChart:any;
  productSalesChart: any;

  ngOnInit(): void {
    this.generateSalesChart();
    this.generateEarningChart();
    this.generateProductSalesChart();
  }

  generateSalesChart(){
    this.salesChart = new Chart('sales', {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "My Revenue",
            data: [380, 200, 500, 300, 200, 400, 100, 380, 200, 500, 300, 200],
            backgroundColor: "#C457D4",
            hoverBackgroundColor: this.getRgbFromHex("#C457D4"),
          },
        ],
      },

      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }

  generateEarningChart(){
    this.earningChart = new Chart('earning', {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "My Revenue",
            data: [380, 200, 500, 300, 200, 400, 100, 380, 200, 500, 300, 200],
            backgroundColor: "#C457D4",
            hoverBackgroundColor: this.getRgbFromHex("#C457D4"),
            borderColor: '#C457D4',
          },
        ],
      },

      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }

  generateProductSalesChart(){
    this.productSalesChart = new Chart('products', {
      type: "doughnut",
      data: {
        labels: ["Transcription", "Text Boost", "Other"],
        datasets: [
          {
            label: "My Revenue",
            data: [380, 200, 500],
            backgroundColor: [
              "#FF7286",
              "#FF56AF",
              "#C457D4",
            ],
            hoverBackgroundColor: [
              this.getRgbFromHex("#FF7286"),  // Hover color for "Transcription"
              this.getRgbFromHex("#FF56AF"),  // Hover color for "Text Boost"
              this.getRgbFromHex("#C457D4"),  // Hover color for "Other"
            ],
          },
        ],
      },

      options: {
        responsive: true,
      },
    });
  }

  getRgbFromHex(hexColor: string){

    // Livello di opacità desiderato (ad esempio, 50%)
    const opacity = 0.5;

    // Estrai i valori R, G e B dal colore esadecimale
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Crea il colore RGB con opacità
    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    return rgbaColor

  }

}
