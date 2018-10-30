import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
title = 'Sample-Charts ';
lineChart: any;

BarChart: any;

ngOnInit()
{
  this.lineChart = new Chart('lineChart', {
    type: 'line',
    data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'No. of Items Solid in Months',
      data: [ 9, 7,5, 2, 10, 15, 16, 3, 1, 9],
     // fill: false,
      //lineTension: 0.2,
      borderColor: "red",
      borderWidth: '1'
    }]
  },
  Options: {
    title:{
      text: 'Line Chart',
      display: true
        },
        responsive: false,
        display: true,

                scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
            
            }

           }

  });

      this.BarChart = new Chart('barChart', {
          type: 'bar',
          data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [{
                  label: "Bar Datasets",
                  data: [6, 8, 7, 10, 6, 4],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.5)',
                      'rgba(54, 162, 255, 0.5)',
                      'rgba(255, 99, 132, 0.5)',
                      'rgba(54, 162, 255, 0.5)',
                      'rgba(255, 99, 132, 0.5)',
                      'rgba(54, 162, 255, 0.5)',
                  ],
             
              
                  borderColor:'green',
                  borderWidth: 1,
                 
              }]
          },
          options:{
            title:{
                text:"Bar combined Line Chart",
                display: true,
            },
            responsive: false,
            display: true
        }
      })


} 
}


