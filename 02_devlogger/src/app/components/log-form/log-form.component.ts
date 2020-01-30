import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Log } from 'src/app/models/log.model';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;
  isNew: boolean = true;

  constructor(private service: LogService) {}

  ngOnInit() {
    this.service.selectedLog.subscribe(log => {
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit() {
    if (this.isNew) {
      const newLog = {
        id: this.GenerateId(),
        text: this.text,
        date: new Date()
      };

      this.service.addLog(newLog);
    } else {
      const updatedLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };

      this.service.updateLog(updatedLog);
    }

    this.clearState();
  }

  clearState() {
    this.isNew = true;
    this.id = null;
    this.text = null;
    this.date = null;
    this.service.clearState();
  }

  GenerateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
