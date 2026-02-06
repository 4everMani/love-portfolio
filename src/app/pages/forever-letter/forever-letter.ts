import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forever-letter',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './forever-letter.html',
  styleUrl: './forever-letter.scss',
})
export class ForeverLetter {

  today = new Date();
}
