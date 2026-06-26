'use client';
import Image from 'next/image';
import { Reveal } from '../components/reveal';

const eventGroups = [
  {
    heading: 'Upcoming Events',
    events: [
      {
        title: 'Easton Chamber Music Festival Faculty Concert',
        date: 'Friday, June 26, 2026 · 7:30 PM',
        lines: ['Amy Beach Piano Quintet'],
      },
      {
        title: 'Easton Chamber Music Festival Faculty Concert',
        date: 'Saturday, June 27, 2026 · 7:30 PM',
        lines: ['Samuel Barber, Dover Beach, Op. 3 for voice and string quartet', 'Paul Juon, Piano Sextet, Op. 22'],
      },
      {
        title: 'Chamber Music Concert, First Church Recital Series',
        date: 'Saturday, April 24, 2027 · 3 PM',
        lines: [
          'Brahms Piano Quintet with Andrei Baumann, Jesse Holstein, Gillian Gallagher, and Adrienne Taylor',
          '6 Eliot St, Boston, MA 02130',
        ],
      },
      {
        title: 'Arts in the Village Concert Series',
        date: 'Sunday, November 7, 2027 · 2:30 PM',
        lines: [
          'Piano Trio recital program with Victor Cayres and Eugene Kim',
          'Goff Memorial Hall, 124 Bay State Road, Rehoboth, MA',
        ],
      },
    ],
  },
  {
    heading: 'Past 2026 Events',
    events: [
      {
        title: 'Rhode Island Philharmonic',
        date: 'Saturday, March 14, 2026 · 7:30 PM',
        lines: ['Works by Missy Mazzoli, Beethoven, Tchaikovsky', 'The VETS, 1 Ave of the Arts, Providence RI 02903'],
        link: { href: 'https://riphil.org', label: 'Tickets & Information' },
      },
      {
        title: 'Rhode Island Philharmonic',
        date: 'Friday, March 13, 2026 · 6:30 PM',
        lines: ['Works by Missy Mazzoli, Beethoven, Tchaikovsky', 'The VETS, 1 Ave of the Arts, Providence RI 02903'],
        link: { href: 'https://riphil.org', label: 'Tickets & Information' },
      },
      {
        title: 'New England Conservatory Expanded Education Faculty Recital',
        date: 'Thursday, February 19, 2026 · 8 PM',
        lines: [
          'With Victor Cayres, piano, and Eugene Kim, cello',
          'Program: Works by Elgar, Amy Beach, Turina, Adrienne Albert, and Ilan Rechtman',
          'Williams Hall, 290 Huntington Ave, Boston, MA 02115',
        ],
      },
    ],
  },
  {
    heading: 'Past 2025 Events',
    events: [
      {
        title: "RI Philharmonic – Handel's Messiah",
        date: 'Sunday, December 14, 2025 · 3 PM',
        lines: ['VETS Memorial Auditorium, Providence RI'],
        link: { href: 'https://www.thevetsri.com/events/detail/handels-messiah-25', label: 'Learn More' },
      },
      {
        title: "A Child's Christmas in Wales with the Aurea Ensemble",
        date: 'Sunday, December 7, 2025 · 3 PM',
        lines: ['Sarah Whitney, violin; Consuelo Sherba, viola; Emmanuel Feldman, cello', "St Martin's Episcopal Church, 50 Orchard Ave, Providence RI 02906"],
      },
      {
        title: 'Bach Marathon',
        date: 'Friday, November 7, 2025 · 7 PM, all night!',
        lines: ['Manning Chapel, 21 Prospect St, Providence, RI 02912', 'Free and no tickets required'],
      },
      {
        title: 'Chamber Concert, Fauré Piano Quartet',
        date: 'Saturday, October 25, 2025 · 3 PM',
        lines: ['First Church, 6 Eliot Street, Jamaica Plain, MA 02130'],
      },
      {
        title: 'Brown Faculty Chamber Concert',
        date: 'Sunday, October 5, 2025 · 2 PM',
        lines: [
          'Grant Recital Hall, 105 Benevolent St, Providence, RI 02906',
          'Program: Frank Bridge Phantasy for piano quartet; Korngold quartet for 2 violins, cello, piano left hand',
          'Performers: Becca Kasdan (violin), Jesse Holstein (violin/viola), Megan Koch (cello), Andrew Welch (piano)',
          'Free admission, no ticket reservations required',
        ],
      },
      {
        title: 'Newport Pocket Concerts',
        date: 'Sunday, September 21, 2025 · 11 AM–12 PM',
        lines: ['Solo violin performance of Berlin cabaret music', 'Belmont Chapel, 30 Warner St, Newport, RI 02840'],
        link: { href: 'https://pci.jotform.com/form/252384992740163', label: 'Tickets & Information' },
      },
      {
        title: 'Rhode Island Philharmonic – Pops concert with conductor Troy Quinn',
        date: 'Friday, July 11, 2025 · 8 PM',
        lines: ['Narragansett Beach'],
      },
    ],
  },
  {
    heading: '2024 – 2025 Events',
    events: [
      {
        title: 'MusicWorks Collective Season Finale Concerts',
        date: 'June 7, 2025 · 7 PM',
        lines: ['Works by Tchaikovsky, Jennifer Higdon, and Nikos Skalkotas', '1326 Westminster St. Providence RI'],
      },
      {
        title: 'Korngold Suite for 2 violins, cello and piano, other chamber works TBA',
        date: 'April 27, 2025',
        lines: ['Dedham / Falmouth MA'],
      },
      {
        title: 'MusicWorks Collective Concert',
        date: 'April 5 & 6, 2025 · 7 PM',
        lines: ['1326 Westminster St. Providence, RI'],
      },
      {
        title: 'Mendelssohn Octet with the Isidore Quartet',
        date: 'March 15, 2025 · 7 PM',
        lines: ['1326 Westminster St. Providence, RI'],
      },
      {
        title: 'Brown University Faculty Recital with Jesse Holstein (violin) and Andrew Welch (piano)',
        date: 'March 3, 2025 · 7 PM',
        lines: [
          'Works by Leclair, Bacewicz, Shostakovich, and Moszkowski',
          "Brown University's Grant Hall",
          'March 6, 2025 · 7 PM — Bell Street Congregation in Providence RI',
        ],
      },
      {
        title: 'MusicWorks Collective Concert',
        date: 'January 26, 2025 · 7 PM',
        lines: ["Featuring Jeremy Eicher's book, Time's Echo", 'Works by Shostakovich, Britten, and Strauss', '1326 Westminster St. Providence'],
      },
      {
        title: 'Violins of Hope Opening Concert',
        date: 'November 9, 2024 · 7 PM',
        lines: [
          'Works by Korngold, Robert Dauber, John Williams, Joseph Achron, Kurt Weill, Gershwin, Ignace Lilien with Pianist Andrei Baumann',
          'Jewish Alliance of Greater Rhode Island, 401 Elmgrove Ave. Providence RI 02906',
        ],
      },
      {
        title: 'Violins of Hope Pre-Concert and Discussion',
        date: 'November 8, 2024 · Following Shabbat Service',
        lines: ['Temple Sinai, Sharon MA'],
      },
      {
        title: 'Bach Marathon',
        date: 'November 1, 2024 · 7 PM',
        lines: ['Manning Chapel, Brown University'],
      },
      {
        title: 'MusicWorks Collective in Concert',
        date: 'October 27, 2024 · 3 PM',
        lines: ['Works by Wang Lu, Jessie Montgomery, Josef Suk, Reena Esmail', 'Lindemann Performing Arts Center, Brown University'],
      },
      {
        title: 'Community MusicWorks Sonata Series Concert',
        date: 'October 17, 2024 · 7 PM',
        lines: ['Playing works by Jesús García Leoz and Korngold with pianist Eliko Akahori'],
        link: { href: 'https://communitymusicworks.org/event/sonata-series-event-1-2/', label: 'Learn More' },
      },
      {
        title: 'Community MusicWorks Grand Opening',
        date: 'September 28, 2024 · 2–7 PM',
        lines: ['New Commission by composer Wang Lu', '1326 Westminster Street, Providence'],
        link: { href: 'https://communitymusicworks.org/event/cmw-grand-opening-celebration/', label: 'Learn More' },
      },
    ],
  },
  {
    heading: '2023 – 2024 Events',
    events: [
      {
        title: 'Luzerne Music Center Faculty Performances',
        date: 'July 26 · Aug 2 · Aug 9, 2024 · 7:30 PM',
        lines: [],
        link: { href: 'https://www.luzernemusic.org/2023-season', label: 'Learn More' },
      },
      {
        title: 'Luzerne Music Center Faculty Artist Series',
        date: 'July 21 · July 28 · Aug 4, 2024 · 7:30 PM (EST)',
        lines: ['203 Lake Tour Road, Lake Luzerne, NY'],
        link: { href: 'https://www.luzernemusic.org/2023-season', label: 'Learn More' },
      },
      {
        title: 'Easton Chamber Music Festival Faculty Concerts',
        date: 'June 23 & 24, 2024 · 7:30 PM (EST)',
        lines: ['Covenant Congregational Church, 204 Center St., Easton MA'],
        link: { href: 'http://eastonchambermusicfestival.org/concerts.html', label: 'Learn More' },
      },
      {
        title: 'Easton Chamber Music Festival Faculty Performances',
        date: 'June 21 & 22, 2024 · 7:30 PM',
        lines: [],
        link: { href: 'https://eastonchambermusicfestival.org/concerts.html', label: 'Learn More' },
      },
      {
        title: 'Tonebase Violin',
        date: 'June 20, 2024 · 3 PM (EST), virtual',
        lines: ['Sight Reading Skills and Tips'],
        link: { href: 'https://www.tonebase.co/violin', label: 'Learn More' },
      },
      {
        title: 'MusicWorks Collective Providence Tour',
        date: 'April 6, 2024 · 5 PM',
        lines: ['Works by William Grant Still, Jose Elizondo, and more!', 'The Avery, 18 Luongo Square, Providence, RI 02903 — Public, no tickets required, 21+'],
        link: { href: 'https://communitymusicworks.org/events-calendar/', label: 'Learn More' },
      },
      {
        title: 'MusicWorks Collective Providence Tour',
        date: 'April 6, 2024 · 2:30 PM',
        lines: ['Works by William Grant Still, Jose Elizondo, and more!', "Providence Children's Museum, 100 South St — Museum admission required, all ages welcome"],
        link: { href: 'https://communitymusicworks.org/events-calendar/', label: 'Learn More' },
      },
      {
        title: 'MusicWorks Collective Providence Tour',
        date: 'April 5, 2024 · 5:30 PM',
        lines: ['Works by William Grant Still, Jose Elizondo, and more!', 'Community MusicWorks Phase II, Providence RI — Private Concert'],
        link: { href: 'https://communitymusicworks.org/events-calendar/', label: 'Learn More' },
      },
      {
        title: 'MusicWorks Collective Providence Tour',
        date: 'April 4, 2024 · 1 PM',
        lines: ['Works by William Grant Still, Jose Elizondo, and more!', 'Rhode Island Free Clinic, Providence RI — Private Concert'],
        link: { href: 'https://communitymusicworks.org/events-calendar/', label: 'Learn More' },
      },
      {
        title: 'MusicWorks Collective Providence Tour',
        date: 'April 3, 2024 · 1 PM',
        lines: ['Works by William Grant Still, Jose Elizondo, and more!', 'The Providence Athenaeum, 251 Benefit St — Open to the public, no tickets required'],
        link: { href: 'https://communitymusicworks.org/events-calendar/', label: 'Learn More' },
      },
      {
        title: 'MusicWorks Collective Providence Tour',
        date: 'April 2, 2024 · 11 AM',
        lines: ['Works by William Grant Still, Jose Elizondo, and more!', 'John Hope Settlement House, Providence RI — Private Concert'],
        link: { href: 'https://communitymusicworks.org/events-calendar/', label: 'Learn More' },
      },
      {
        title: 'Songs of Refuge Concert, Community MusicWorks',
        date: 'December 2, 2023 · 7 PM',
        lines: ['Bell St Chapel, Providence, RI'],
        link: { href: 'https://communitymusicworks.org/event/musicworks-collective-and-guests-songs-of-refuge/', label: 'Learn More' },
      },
      {
        title: 'Rhode Island Civic Chorale and Orchestra',
        date: 'November 18, 2023 · 7 PM',
        lines: ['Church of St. Sebastian, Providence, RI 02096'],
        link: { href: 'https://ricco.org/spring-2021/', label: 'Learn More' },
      },
      {
        title: 'Community MusicWorks Sonata Series',
        date: 'October 26, 2023 · 7 PM',
        lines: ['Dora Pejačević Violin Sonata No. 1 in D major, Op. 26 with Pianist Andrei Baumann', 'Music Mansion, 88 Meeting St, Providence, RI 02906'],
        link: { href: 'https://www.eventbrite.com/e/sonata-series-event-1-tickets-732842019207?aff=oddtdtcreator', label: 'Purchase Tickets' },
      },
      {
        title: 'Sonata Series with pianist Andrei Bauman',
        date: 'Saturday, October 21, 2023 · 3 PM',
        lines: ['Dora Pejačević Violin Sonata Op. 26', 'Unitarian Church Jamaica Plain, 775 Centre St., Boston, MA 02130'],
      },
      {
        title: 'Community MusicWorks – MusicWorks Collective Concert',
        date: 'September 9, 2023 · 4 PM',
        lines: [
          'Works by Manuel Ponce, Adrienne Taylor, and Coleridge Taylor Perkinson',
          'Temple to Music, Roger Williams Park, Providence, RI 02910 — Admission free, no reservations',
        ],
        link: { href: 'https://communitymusicworks.org/', label: 'Learn More' },
      },
      {
        title: 'MusicWorks Collective Season Opening Concert',
        date: 'September 8, 2023 · 7 PM',
        lines: [
          'Works by Manuel Ponce, Adrienne Taylor, and Coleridge Taylor Perkinson',
          'Touisset Point Community Club, 10 Touisset Road, Warren, RI 02885 — Admission free, no reservations',
        ],
        link: { href: 'https://communitymusicworks.org/event/musicworks-collective-season-opener-2/', label: 'Learn More' },
      },
    ],
  },
];

function EventCard({ event, past = false }) {
  return (
    <Reveal>
      <article className={`group border-l border-border pl-6 md:pl-8 pb-10 relative ${past ? 'opacity-60' : ''}`}>
        <span className={`absolute left-0 top-1.5 -translate-x-1/2 h-2 w-2 rounded-full ${past ? 'bg-muted-foreground/50' : 'bg-primary'}`} />
        <p className={`text-[11px] uppercase tracking-[0.18em] mb-2 ${past ? 'text-muted-foreground' : 'text-primary'}`}>{event.date}</p>
        <h3 className="font-serif text-xl md:text-2xl leading-snug mb-3 text-foreground">{event.title}</h3>
        {event.lines.length > 0 && (
          <div className="space-y-1">
            {event.lines.map((line, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        )}
        {event.link && (
          <a
            href={event.link.href}
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-block mt-3 text-sm uppercase tracking-[0.14em] text-primary"
          >
            {event.link.label}
          </a>
        )}
      </article>
    </Reveal>
  );
}

export default function UpcomingEvents() {
  return (
    <main className="relative w-full min-h-screen bg-background">
      {/* Banner */}
      <section className="relative mt-20 h-[calc(66vh-5rem)] md:h-[calc(65vh-5rem)] w-full overflow-hidden">
        <Image
          src="/eventtwo.jpg"
          alt="Becca Kasdan in concert"
          fill
          quality={90}
          sizes="100vw"
          priority
          className="object-cover object-[center_25%] md:object-top animate-[heroZoom_2000ms_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/25" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-16 md:pb-16">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/70 mb-3 animate-[fadeUp_900ms_ease-out_200ms_both]">Calendar</p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-white leading-none animate-[fadeUp_1000ms_ease-out_400ms_both]">Events</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {eventGroups.map((group, gi) => (
          <section key={gi} className={gi > 0 ? 'mt-16' : ''}>
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-10">{group.heading}</h2>
            </Reveal>
            <div>
              {group.events.map((event, ei) => (
                <EventCard key={ei} event={event} past={gi > 0} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
