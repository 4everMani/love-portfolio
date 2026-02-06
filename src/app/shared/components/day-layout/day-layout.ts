import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentService, DayData } from '../../../core/services/content.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-day-layout',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './day-layout.html',
  styleUrl: './day-layout.scss',
  // animations: [
  //   trigger('fade', [transition(':enter', [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))])]),
  //   trigger('slideUp', [transition(':enter', [style({ transform: 'translateY(30px)', opacity: 0 }), animate('800ms 300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))])]),
  //   trigger('staggerFade', [transition(':enter', [query('.msg-item', [style({ opacity: 0, transform: 'translateX(-20px)' }), stagger(150, [animate('500ms 800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))])], { optional: true })])])
  // ]
  animations: [
    trigger('fade', [
      transition(':enter', [style({ opacity: 0 }), animate('1.2s ease-out', style({ opacity: 1 }))])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(40px)', opacity: 0 }),
        animate('800ms 400ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class DayLayout implements OnInit {

  private route = inject(ActivatedRoute);
  private contentSvc = inject(ContentService);
  day!: DayData;
  ngOnInit() { this.route.data.subscribe(d => this.day = this.contentSvc.getDay(d['dayId'])); }
}
