import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {NotificationService} from "../../services/notification/notification.service";

@Component({
  selector: 'app-notification-info',
  templateUrl: './notification-info.component.html',
  styleUrls: ['./notification-info.component.css']
})
export class NotificationInfoComponent implements OnInit {

  notificationMsg : {type: string, title: string, content: string} = {type: '', title: '', content: ''}

  notifySub: Subscription | undefined
  private timer1: any;
  private timer2: any;


  constructor(private notify: NotificationService) { }

  ngOnInit(): void {
    this.showToast()
  }

  showToast(): void {
    this.notifySub = this.notify.notification.subscribe(value => {
      if (value){
        if (typeof value.content !== 'string'){
          // @ts-ignore
          value.content = undefined;
        }

        this.notificationMsg = value;

        const toast = document.querySelector(".toast") as HTMLElement;
        const progress = document.querySelector(".progress") as HTMLElement;
        const closeIcon = document.querySelector(".close") as HTMLElement;


        if (toast && progress && closeIcon){
          toast.classList.add("active");
          progress.classList.add("active");
          toast.classList.remove("d-none");

          this.timer1 = setTimeout(() => {
            toast.classList.remove("active");
          }, 3000); // 1s = 1000 milliseconds

          this.timer2 = setTimeout(() => {
            progress.classList.remove("active");
            toast.classList.add("d-none");
          }, 3300);

          closeIcon.addEventListener("click", () => {
            toast.classList.remove("active");

            setTimeout(() => {
              progress.classList.remove("active");
              toast.classList.add("d-none");
            }, 300);

            clearTimeout(this.timer1);
            clearTimeout(this.timer2);
          });
        }
      }
    })
  }

  getIconType(type: string){
    if (type === 'danger'){
      return "bi bi-exclamation-octagon"
    }else if (type === 'info'){
      return "bi bi-info-circle"
    }else if (type === 'success'){
      return "bi bi-check2-circle"
    }else {
      return "bi bi-question-circle"
    }
  }

}
