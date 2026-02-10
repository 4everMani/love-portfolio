import { Injectable } from '@angular/core';
import { MESSAGE } from './message';

export interface DayData {
  id: string; title: string; subtitle: string; bgImage: string;
  messages: string[]; affirmation: string; nextRoute: string; bgVideo: any
}



@Injectable({ providedIn: 'root' })
export class ContentService {
  private data: Record<string, DayData> = {
    'rose-day': {
      id: 'rose-day', title: 'Happy Rose Day', subtitle: 'My future wife, Ananya 🌹',
      bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000',
      messages: [MESSAGE.ROSE_DAY2],
      affirmation: 'I choose you. Today and always. ❤️', nextRoute: '/propose-day',
      bgVideo: 'assets/videos/rose.mp4',
    },
    'propose-day': {
      id: 'propose-day', title: 'Happy Propose Day', subtitle: 'My beautiful Ananya❤️',
      bgImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000',
      messages: [MESSAGE.PROPOSE],
      affirmation: 'I choose us, always.', nextRoute: '/chocolate-day',
      bgVideo: 'assets/videos/prapose.mp4',
    },
    'chocolate-day': {
      id: 'chocolate-day', title: 'Happy Chocolate Day', subtitle: 'My precious Ananya 🍫❤️',
      bgImage: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1000',
      messages: [MESSAGE.CHOCOLATE],
      affirmation: 'You are the joy in my everyday.', nextRoute: '/teddy-day',
      bgVideo: 'assets/videos/chocolate.mp4',
    },
    'teddy-day': {
      id: 'teddy-day', title: 'Happy Teddy Day', subtitle: 'My adorable Ananya 🧸❤️',
      bgImage: 'https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=1000',
      messages: [MESSAGE.TEDDY],
      affirmation: 'Lean on me whenever you need.', nextRoute: '/promise-day',
      bgVideo: 'assets/videos/teddy.mp4',
    },
    'promise-day': {
      id: 'promise-day', title: 'To the Heart I Want to Keep Forever 🤍', subtitle: 'Happy Promise Day, My Ananya ❤️',
      bgImage: 'https://images.unsplash.com/photo-1516589174184-c68524c14e44?q=80&w=1000',
      messages: [MESSAGE.PROMISE],
      affirmation: 'My heart is a promise kept.', nextRoute: '/hug-day',
      bgVideo: 'assets/videos/promise.mp4',
    },
    'hug-day': {
      id: 'hug-day', title: 'Hug Day', subtitle: 'Safety & Comfort',
      bgImage: 'https://images.unsplash.com/photo-1494203484021-3c454dac695d?q=80&w=1000',
      messages: ['In my arms, the world is quiet.', 'I am here for the hard days.', 'You are never alone.'],
      affirmation: 'You are home to me.', nextRoute: '/kiss-day',
      bgVideo: 'assets/videos/hug.mp4',
    },
    'kiss-day': {
      id: 'kiss-day', title: 'Kiss Day', subtitle: 'Intimacy & Trust',
      bgImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000',
      messages: ['I cherish our closeness.', 'Trust is the foundation of us.', 'Your warmth is all I need.'],
      affirmation: 'We are beautifully intertwined.', nextRoute: '/valentines-day',
      bgVideo: 'assets/videos/kiss.mp4',
    },
    'valentines-day': {
      id: 'valentines-day', title: 'Valentine’s Day', subtitle: 'Partnership & Choice',
      bgImage: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=1000',
      messages: ['You are my everything.', 'Proud to walk beside you.', 'I love you eternally.'],
      affirmation: 'Today and forever, you are mine.', nextRoute: '/forever-letter',
      bgVideo: 'assets/videos/valentine.mp4',
    }
  };
  getDay(id: string) { return this.data[id]; }
}