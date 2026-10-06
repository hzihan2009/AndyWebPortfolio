// All bracketed values and empty image paths are intentional placeholders.
// Images go in public/images; use paths such as /images/andy.jpg below.
export interface Photo { src: string; alt: string; placeholder: string; }
export const home = {
  areas: [
    { title: 'Chess', href: '/chess', summary: 'Competition, community, and a game I keep coming back to.' },
    { title: 'Music', href: '/music', summary: 'Piano, saxophone, and what’s in my headphones.' },
    { title: 'Things I build', href: '/build', summary: 'Software that grew out of problems I noticed at my chess club, plus my work with SolveXchange.' },
  ],
  intro: "I'm a Grade 12 student who likes building things, playing chess, and having music somewhere in the background. This is a little corner of the internet for the things I make, the things I'm into, and whatever I'm curious about lately.",
  heroPhoto: { src: '', alt: '', placeholder: 'A photo of me, eventually.' } satisfies Photo,
  updated: 'October 2026',
  lately: [
    { label: 'Building', value: 'Improving the MCC Member App' },
    { label: 'Listening', value: "[I'll choose this later]" },
    { label: 'Learning', value: "[I'll choose this later]" },
  ],
  chess: {
    copy: "I've played competitive chess for around eight years and still compete nationally and internationally. Over time, chess also became more than just playing tournaments — I've volunteered in the chess community, helped run events, and became a National Arbiter.",
    highlights: ['Top 10, North American U16 Youth Chess Championship', 'Top 10, Pan-American School U17 Chess Championship'],
    // Add real stories later; empty means no extra section is shown.
    stories: [] as { title: string; text: string }[],
  },
  projects: [
    { title: 'MCC Member App', description: 'A mobile app for club members that supports tournament registration and online check-in.', image: { src: '', alt: '', placeholder: 'Member app screenshot' } satisfies Photo, format: 'mobile' },
    { title: 'MCC Tournament Administration System', description: 'An administrative system used for tournament check-in, player management, and name-card operations.', image: { src: '', alt: '', placeholder: 'Tournament system screenshot' } satisfies Photo, format: 'desktop' },
  ],
  solvexchange: "I help maintain and improve the organization's website and technical systems.",
  facts: ['[personal fact]', '[personal fact]', "[something I'm currently curious about]"],
  // Add real values to activate links. Leave empty to display a labeled placeholder.
  contact: { email: '', github: '', linkedin: '' },
};
