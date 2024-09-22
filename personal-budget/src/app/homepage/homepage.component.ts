import {AfterViewInit, Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Chart} from 'chart.js/auto'


@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#3bfd19',
          '#0937f1',
          '#545657',
          '#ff0000',
        ]
      }
    ],
    labels: []
  };


  constructor(private http: HttpClient) {
  }

  ngAfterViewInit(): void {
    console.log('Loading chart data')
    this.http.get('http://localhost:3000/budget').subscribe((res: any) => {

      for (let i = 0; i < res.myBudget.length; i++) {
        // @ts-ignore
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        // @ts-ignore
        this.dataSource.labels[i] = res.myBudget[i].title;
      }
      this.createChart();
    })
  }

  createChart() {
    if (typeof document !== 'undefined') {
      let ctx = document.getElementById('myChart');
      // @ts-ignore
      let myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
      });
    }
  }

}
