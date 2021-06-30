import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesktopAppService } from 'src/app/services/desktop-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableData: any = [];
  headerKey: any = [];
  jsonData: any = [];
  limitData = 50;
  isDataLoad = false;
  @ViewChild('tableScroll')
  tableScroll: ElementRef;

  constructor(private desktopService: DesktopAppService) { }

  ngOnInit(): void {
    this.getTableDataValues();
  }

  getTableDataValues(): void {
    this.desktopService.getJsonData()
      .subscribe((d: any) => {
        if (d) {
          this.tableData = d;
          Object.keys(this.tableData[0]).forEach(d => {
            this.headerKey.push(d);
          });
        }
      });
  }
}
