import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent {
  id = 100;
  status = 'online';

  getData()
  {
    return {id: this.id , status: this.status}
  }

}

