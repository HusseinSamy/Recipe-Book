import { Component } from "@angular/core";


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent{

  display = false;
  buttonLogs:number[] = [];
  logCount = 0;

  constructor()
  {

  }
  onButtonClick()
  {
    this.logCount++;
    this.buttonLogs.push(this.logCount);
    this.display = !this.display;
  }
}