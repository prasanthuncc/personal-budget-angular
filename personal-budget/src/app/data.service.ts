import {AfterViewInit, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SimpleDataModel} from "./models/charts.models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private d3Data: any;
  private d3Colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]
  private dataSource = {
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
    this.dataSource = this.budgetData();
    this.d3Data = this.dataSource.labels.map((label, index) => ({
      name: label,
      // @ts-ignore
      value: this.dataSource.datasets[0].data[index].toString(), // Convert value to string
      color: this.d3Colors[index]
    }));

  }

  public getBudgetData() {
    if (this.dataSource.datasets[0].data && this.dataSource.datasets[0].data.length === 0) {
      return this.budgetData();
    } else {
      console.log('Using cached data')
      return this.dataSource;
    }
  }

  public getBudgetDataForD3() {
    if (this.dataSource.datasets[0].data && this.dataSource.datasets[0].data.length === 0) {
      this.d3Data = this.dataSource.labels.map((label, index) => ({
        name: label,
        // @ts-ignore
        value: this.dataSource.datasets[0].data[index].toString(), // Convert value to string
        color: this.d3Colors[index]
      }));
      return this.d3Data;
    } else {
      console.log('Using cached data')
      return this.d3Data;
    }
  }

  private budgetData() {
    console.log('Loading chart data')
    this.http.get('http://localhost:3000/budget').subscribe((res: any) => {
      for (let i = 0; i < res.myBudget.length; i++) {
        // @ts-ignore
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        // @ts-ignore
        this.dataSource.labels[i] = res.myBudget[i].title;
      }
    })
    return this.dataSource;
  }

}
