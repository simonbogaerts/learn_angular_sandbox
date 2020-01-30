import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log.model';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: Log[];
  selectedLog: Log;
  loaded: boolean = false;

  constructor(private service: LogService) {}

  ngOnInit() {
    this.service.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedLog = { id: null, text: null, date: null };
      }
    });

    this.service.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded = true;
    });
  }

  onSelect(log: Log) {
    this.service.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Log) {
    if (confirm('Are you sure?')) {
      this.service.deleteLog(log);
    }
  }
}
