import {AfterViewInit, Component} from '@angular/core';
import {Chart} from 'chart.js/auto'
import {DataService} from "../data.service";


@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements AfterViewInit {


  constructor(private data: DataService) {
  }

  ngAfterViewInit(): void {
    let dataSource = this.data.getBudgetData()
    this.createChart(dataSource);
  }

  createChart(dataSource: any) {
    if (typeof document !== 'undefined') {
      let ctx = document.getElementById('myChart');
      // @ts-ignore
      let myPieChart = new Chart(ctx, {
        type: 'pie',
        data: dataSource
      });
    }
  }

}
