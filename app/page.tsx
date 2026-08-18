const events = [
  { name: 'Midnight Garden', date: 'September 14, 2026', guests: '18 / 40' },
  { name: 'After Hours', date: 'October 02, 2026', guests: '7 / 24' },
];

export default function HomePage() {
  return (
    <main className="shell">
      <nav className="nav"><span className="wordmark">Private<span>Party</span></span><button className="wallet-button" type="button">Connect wallet</button></nav>
      <section className="intro"><p className="eyebrow">Midnight / private by default</p><h1>Be there.<br /><em>Stay yours.</em></h1><p className="lede">RSVP without putting your name on a guest list. Midnight proves your place is real while keeping your identity yours.</p><div className="privacy-row"><span><b className="dot private" />Private: your RSVP</span><span><b className="dot public" />Public: the count</span><span><b className="dot selective" />Selective: check-in</span></div></section>
      <section className="events" aria-labelledby="events-title"><div className="section-heading"><div><p className="eyebrow">Open invitations</p><h2 id="events-title">Find your people</h2></div><button className="text-button" type="button">Create a party <span aria-hidden="true">↗</span></button></div><div className="event-grid">{events.map((event, index) => <article className="event-card" key={event.name}><div className={`event-art art-${index + 1}`}><span>{index === 0 ? '14' : '02'}</span></div><div className="event-info"><p className="event-date">{event.date}</p><h3>{event.name}</h3><p className="event-capacity">{event.guests} attending <span>·</span> RSVP private</p><button className="rsvp-button" type="button">View invitation <span aria-hidden="true">→</span></button></div></article>)}</div></section>
      <footer><span>Built on Midnight</span><span>Your attendance is yours to reveal.</span></footer>
    </main>
  );
}