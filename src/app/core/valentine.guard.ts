// src/app/core/valentine.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const valentineGuard: CanActivateFn = (route) => {
    const router = inject(Router);
    const today = new Date();
    const currentMonth = today.getMonth(); // 1 = February
    const currentDate = today.getDate();

    // Mapping days to their unlock dates in February
    const unlockSchedule: Record<string, number> = {
        'rose-day': 7,
        'propose-day': 8,
        'chocolate-day': 9,
        'teddy-day': 10,
        'promise-day': 11,
        'hug-day': 12,
        'kiss-day': 13,
        'valentines-day': 14,
        'forever-letter': 14
    };

    const dayId = route.data['dayId'];
    const unlockDay = unlockSchedule[dayId];

    // Logic: Unlock if it's past the date, or if we're not in Feb yet (for testing)
    // To strictly lock, use: if (currentMonth === 1 && currentDate < unlockDay)
    if (currentMonth === 1 && currentDate < unlockDay) {
        alert(`Patience, my love. This part of our journey opens on February ${unlockDay}.`);
        return false;
    }

    return true;
};