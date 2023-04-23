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
            backgroundColor: ["rgba(155,128,151,1"],
            hoverBackgroundColor: "#fb4f83",
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
            backgroundColor: "rgba(155,128,151,1)",
            hoverBackgroundColor: "#fb4f83",
            borderColor: 'rgb(155,128,151,1)',
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
              "rgba(155,128,151,1",
              "rgba(254,111,162,1",
              "rgba(244,164,111,1)",
            ],
            hoverBackgroundColor: "#ff90b8",
          },
        ],
      },

      options: {
        responsive: true,
      },
    });
  }

}
