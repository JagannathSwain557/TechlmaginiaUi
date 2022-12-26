import { AfterViewInit,Component, OnInit, ViewChild,  } from '@angular/core';
import{ Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables)


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
PieChart=[];
  ngOnInit(): void {
    this.RenderChart();
    this.barChart();
  }
  RenderChart(){
    const ctx = document.getElementById('myChart');
    new Chart("piechart", {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 15, 2, 3],
          backgroundColor:[
            'Red',
            'Blue',
            'Yellow',
            'Green',
            'Purple',
            'Orange'
          ],
          borderColor:[
           'rgba(255,99,132,1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  barChart(){
    const ctx = document.getElementById('myChart');
    new Chart("barchart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'data1',
          data: [12, 19, 3, 15, 2, 3],
          backgroundColor:[
            'Red',
            'Blue',
            'Yellow',
            'Green',
            'Purple',
            'Orange'
        ],
          borderColor:
           'rgba(255,99,132,1)'
          ,
          borderWidth: 2
        },
        {
          label: 'data3',
          data: [10, 9, 8, 25, 12, 9],
          backgroundColor:[
            'Red',
            'Blue',
            'Yellow',
            'Green',
            'Purple',
            'Orange'
        ],
          borderColor:
           'rgba(255,99,132,1)'
          ,
          borderWidth: 2
        },
        {
          label: 'data3',
          data: [22, 29, 13, 25, 12, 13],
          backgroundColor:[
            'Red',
            'Blue',
            'Yellow',
            'Green',
            'Purple',
            'Orange'
        ],
          borderColor:
           'rgba(255,99,132,1)'
          ,
          borderWidth: 2
        },
        
      ],
        
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}