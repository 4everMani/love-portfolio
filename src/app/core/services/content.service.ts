import { Injectable } from '@angular/core';

export interface DayData {
  id: string; title: string; subtitle: string; bgImage: string;
  messages: string[]; affirmation: string; nextRoute: string; bgVideo: any
}

@Injectable({ providedIn: 'root' })
export class ContentService {
  private data: Record<string, DayData> = {
    'rose-day': {
      id: 'rose-day', title: 'Rose Day', subtitle: 'Admiration & Appreciation',
      bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000',
      messages: ['I admire the grace you carry.', 'Your kindness is a gift.', 'You make my world bloom.'],
      affirmation: 'You are noticed and deeply loved.', nextRoute: '/propose-day',
      bgVideo: 'https://drive.google.com/drive/folders/11-0kxqjX5uxM1-NMEWsVKr7n1dJF383r?usp=sharing',
    },
    'propose-day': {
      id: 'propose-day', title: 'Propose Day', subtitle: 'The Daily Choice',
      bgImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000',
      messages: ['I choose you today.', 'I want every tomorrow with you.', 'My "Yes" is permanent.'],
      affirmation: 'I choose us, always.', nextRoute: '/chocolate-day',
      bgVideo: 'assets/videos/prapose.mp4',
    },
    'chocolate-day': {
      id: 'chocolate-day', title: 'Chocolate Day', subtitle: 'Joy & Sweetness',
      bgImage: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1000',
      messages: ['You make life sweet.', 'Your smile is my favorite treat.', 'Happiness is being with you.'],
      affirmation: 'You are the joy in my everyday.', nextRoute: '/teddy-day',
      bgVideo: 'https://drive.google.com/uc?export=download&id=1UT2Pw08LkByMWMEcmWqQoZeXj2lBP1b0',
    },
    'teddy-day': {
      id: 'teddy-day', title: 'Teddy Day', subtitle: 'Care & Soft Love',
      bgImage: 'https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=1000',
      messages: ['I am your safe space.', 'Lean on me whenever you need.', 'My love is your soft place to land.'],
      affirmation: 'You are protected and cared for.', nextRoute: '/promise-day',
      bgVideo: 'assets/videos/teddy.mp4',
    },
    'promise-day': {
      id: 'promise-day', title: 'Promise Day', subtitle: 'Trust & Commitment',
      bgImage: 'https://images.unsplash.com/photo-1516589174184-c68524c14e44?q=80&w=1000',
      messages: ['I promise to listen.', 'I promise to respect your peace.', 'I promise to grow with you.'],
      affirmation: 'My heart is a promise kept.', nextRoute: '/hug-day',
      bgVideo: 'assets/videos/promise2.mp4',
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
      bgVideo: 'assets/videos/val.mp4',
    }
  };
  getDay(id: string) { return this.data[id]; }
}