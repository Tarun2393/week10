import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    serverName ='Test Server';

    serverCreated = false;

    servers = [ ];


    onCreatedServer() {
      this.serverCreated = true;

      this.servers.push(this.serverName);

  }





}
