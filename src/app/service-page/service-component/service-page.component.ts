import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, find, map, of } from 'rxjs';
import { RequestService } from 'src/app/request.service';

export type DoctorType = {
  fullname: string;
  class: string; // type of doctor
  email: string;
  address?: {
    longitude: string;
    latitude: string;
  };
  rating: number;
  profileImgUrl?: string;
  additionalInfo: {
    about?: string;
    qualifications?: string[];
    services?: string[];
    reviews: ReviewType[];
    fees?: any;
  };
};

export type ReviewType = {
  username: string;
  comment: string;
  datePublish: Date;
};

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css'],
})
export class ServicePageComponent implements OnInit {

  public rating: any;
  public increase: any;
  public decrease: any;
  
  public dataSelect$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  dataCard: any = [];
  index: any = this.dataCard.index;

  constructor(private reqService: RequestService) {}

  ngOnInit(): void {
    this.reqService.getUsers().subscribe((data: any) => {
      this.dataCard = data;
    });
  }

  sortByAZ(value: any) {
    switch(value) {
      case "rating":
        console.log(value)
        break
      case "increase":
        console.log(value)
        break
      case "decrease":
        console.log(value)
        break
      default:
        return value
    }
  }

  // onSelect(id: any) {
  //   const ofData = of(this.dataCard);
  //   ofData.pipe(
  //     map((item: any) => {return item}),
  //     filter(item => item.id !== id)
  //   ).subscribe((selectItem: any) => {
  //     console.log(selectItem);
  //   })
  // }

  onSelect(id: number) {
    this.reqService
      .getUsers()
      .pipe(find((item: any) => item.id === id))
      .subscribe((selectItem) => {
        this.dataSelect$.next(selectItem);
        console.log(selectItem);
      });
  }
}
