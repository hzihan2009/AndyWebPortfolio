import type { Photo } from './home';
// Empty image paths are intentional future assets. No artwork is assumed.
export const music = {
  intro: 'Music is almost always somewhere in the background for me. What I listen to changes a lot depending on my mood, but most of it falls somewhere around indie pop, pop rock, and pop punk.',
  moods: 'The 1975 is often the more atmospheric, chill, indie side of what I listen to. All Time Low is the louder, more energetic pop-punk side. I like moving between the two.',
  rotation: [
    { artist: 'The 1975', note: 'Favorite album: Being Funny in a Foreign Language', label: 'Favorite songs', selections: ['About You', 'If You’re Too Shy (Let Me Know)', 'The Sound'] },
    { artist: 'All Time Low', note: 'For the louder side of things.', label: 'Favorite albums', selections: ['Don’t Panic', 'Wake Up, Sunshine'] },
    { artist: 'Other rotation', note: 'A few more artists I rotate through depending on my mood.', label: 'Artists', selections: ['Valley', 'The Band CAMINO', 'COIN'] },
  ],
  piano: {
    reflection: "I've played piano for around twelve years. These days I mainly play it as a hobby—something I come back to when I want to relax, rest, or clear my mind.",
    background: 'I completed RCM Level 10, and I still play today. I enjoy having a reason to sit down and slow down for a while.',
    photo: { src: '', alt: '', placeholder: 'A piano photo, soon.' } satisfies Photo,
  },
  saxophone: {
    copy: 'I played tenor saxophone for about three years at school, starting in Junior Concert Band and later joining Senior Concert Band. I’m not in concert band now, but it’s part of my musical background.',
    photo: { src: '', alt: '', placeholder: 'Room for a future band photo.' } satisfies Photo,
  },
  art: {
    // Placeholder copy, not a statement about Andy's art practice.
    copy: 'More here soon.',
    images: [
      { src: '', alt: '', placeholder: 'More here soon.' },
      { src: '', alt: '', placeholder: 'More here soon.' },
    ] satisfies Photo[], // Add up to four real images with meaningful alt text.
  },
};
