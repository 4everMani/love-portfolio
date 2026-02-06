import { Routes } from '@angular/router';
import { DayLayout } from './shared/components/day-layout/day-layout';
import { ForeverLetter } from './pages/forever-letter/forever-letter';
import { Home } from './pages/home/home';
import { valentineGuard } from './core/valentine.guard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'rose-day', canActivate: [valentineGuard], component: DayLayout, data: { dayId: 'rose-day' } },
    { path: 'propose-day', canActivate: [valentineGuard], component: DayLayout, data: { dayId: 'propose-day' } },
    { path: 'chocolate-day', canActivate: [valentineGuard], component: DayLayout, data: { dayId: 'chocolate-day' } },
    { path: 'teddy-day', canActivate: [valentineGuard], component: DayLayout, data: { dayId: 'teddy-day' } },
    { path: 'promise-day', canActivate: [valentineGuard], component: DayLayout, data: { dayId: 'promise-day' } },
    { path: 'hug-day', canActivate: [valentineGuard], component: DayLayout, data: { dayId: 'hug-day' } },
    { path: 'kiss-day', canActivate: [valentineGuard], component: DayLayout, data: { dayId: 'kiss-day' } },
    { path: 'valentines-day', canActivate: [valentineGuard], component: DayLayout, data: { dayId: 'valentines-day' } },
    { path: 'forever-letter', canActivate: [valentineGuard], component: ForeverLetter }
];
