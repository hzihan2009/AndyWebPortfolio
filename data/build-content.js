// Edit this file for project copy, screenshot paths, and an optional live URL.
// Empty image paths keep the placeholders. No adoption figures are assumed.
window.buildContent = {
  intro: "Some things I've built started with a problem I kept running into.",
  context: "A lot of my technical work comes from communities I'm already part of, especially Mississauga Chess Club, where I've volunteered for around three years.",
  member: {
    problem: "Tournament registration and check-in used to rely heavily on manual work. On busy nights, things could get crowded and disorganized. Through volunteering, I saw that friction directly and wanted to make the process easier for players.",
    built: "I built the MCC Member App so members can handle parts of registration and check-in before arriving, rather than doing everything at the club.",
    features: ["Log in with their own account.", "Register for the tournament or event they plan to compete in.", "Check in online before arriving.", "Access their club and member information."],
    connection: "The app connects to the tournament administration system, so organizers can see who has registered and checked in.",
    learning: "More about what I learned here soon.", // Andy has not supplied a specific lesson yet.
    screenshots: [
      { label: 'Login screen', src: 'images/MCCLogin.jpg', alt: 'MCC Member App login screen', width: 1080, height: 2089 },
      { label: 'Online check-in', src: 'images/MCCCheckIn.jpg', alt: 'MCC Member App online check-in screen', width: 1080, height: 2085 },
      { label: 'Member information', src: 'images/MCCMember.jpg', alt: 'MCC Member App member information screen', width: 1080, height: 2098 },
      { label: 'Member statistics', src: 'images/MCCStats.jpg', alt: 'MCC Member App statistics screen', width: 1080, height: 2105 },
    ],
  },
  admin: {
    intro: "The organizer-facing half of the same system. While members register and check in through the app, tournament organizers use this side to manage the tournament.",
    operations: "Organizers can see which members are participating, manage registration and check-in status, and keep player information up to date. They can also manage or remove members when needed and track tournament participation.",
    workflows: "The system supports pairing-related workflows, player tracking, and name-card management. Its connection to the member app gives organizers better visibility into who has registered or checked in.",
    impact: "The goal is less friction on tournament nights: members can handle parts of the process before arriving, and organizers have a clearer view of who's participating.",
    screenshots: [
      { label: 'Member management', src: 'images/MCCAdminMember.png', alt: 'MCC administration member management screen', width: 1177, height: 904 },
      { label: 'Tournament player list', src: 'images/MCCAdminPlayerList.png', alt: 'MCC tournament administration player list', width: 1143, height: 897 },
    ],
  },
  solve: {
    intro: "Alongside MCC, I also help keep SolveXchange's technical side running.",
    responsibilities: "As Chief of IT Operations, I manage and maintain the website, make technical updates and improvements, and support the organization's technical needs. I'm also working with a partner on an app that's still in development.",
    liveUrl: '', // Fill with the verified full HTTPS website URL when available.
    screenshots: [
      { label: 'SolveXchange website', src: 'images/SolveXchange1.png', alt: 'SolveXchange website homepage', width: 1905, height: 911 },
      { label: 'SolveXchange FAQ', src: 'images/SolveXchange2.png', alt: 'SolveXchange website frequently asked questions', width: 1905, height: 911 },
    ],
  },
  closing: "I like projects where the software has a clear reason to exist—usually because I've seen the problem myself.",
};
