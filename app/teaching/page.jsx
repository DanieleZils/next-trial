'use client';
import Link from 'next/link';
import { Reveal, RevealImage } from '../components/reveal';

export default function Teaching() {
  return (
    <main className="relative w-full bg-background min-h-screen">
      {/* Philosophy */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-24">
        <Reveal className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
            In the Studio
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-balance">
            Teaching Philosophy
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-8">
            <RevealImage
              src="/fixed.jpg"
              alt="Becca Kasdan teaching"
              ratio="aspect-[4/3]"
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Reveal delay={120}>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                I take the time to set up personal meetings with my students before they begin their studies
                and discuss their learning objectives and musical interests. Together we collaborate on
                choosing repertoire that interests and excites them. As a result, I teach a wide variety of
                genres, composers from underrepresented backgrounds, and I am constantly learning new works
                alongside my students which I enjoy immensely. Beyond studio lessons, I am constantly creating
                and finding opportunities for my students to perform and explore multi-faceted careers as
                emerging artists. I encourage my students to explore performing opportunities in the community,
                as I believe that performing frequently is a critical part to musical advancement. Furthermore, I
                strongly believe that if you can convey the characters, emotions, and technique in an engaging
                performance to audiences not familiar with classical music, you have not only fully learned the
                piece, but you have made a meaningful contribution to the community and perhaps inspired others
                to share in your musical passion. My unique method of teaching encompasses a thoughtful and
                diligent approach to musical technique, a high standard of musical excellence, a commitment to
                community outreach and performance, public speaking preparation, and a collaborative experience
                that is student-centered and fosters a life-long appreciation and passion for music.
              </p>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={120}>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                My goal as a teacher is to inspire each of my students to become their own teacher by developing
                as creative and thoughtful musicians. I believe that communicating with students in a kind and
                respectful manner is of the utmost importance to foster a love of learning and performing and to
                instill life-long practice skills. I urge my students to constantly be creative in their approach to
                practicing and music-making by offering a variety of ways to practice technical passages and
                encourage students to decide their own musical phrasing and characters within a piece. I also
                emphasize freedom and physical relaxation in playing and enjoy problem solving alongside students
                to ensure ease and comfort when playing. I particularly look forward to studio lessons because they
                offer a unique experience of really understanding a student&apos;s goals, personality, and learning
                style. I cultivate a meaningful relationship with each student ensuring that they feel safe, valued,
                and inspired.
              </p>
            </Reveal>
            <RevealImage
              src="/Teachingbecca.png"
              alt="Becca Kasdan with a student"
              ratio="aspect-[4/3]"
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Reveal>
              <Link
                href="/contact"
                className="inline-block bg-primary text-primary-foreground text-xs uppercase tracking-[0.18em] px-8 py-3.5 hover:bg-primary/90 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto w-24 border-t border-border" />

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <Reveal className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
            Experience
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium text-balance">
            Current and Previous Teaching
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <RevealImage
              src="/smallerstairs.jpg"
              alt="Becca Kasdan"
              ratio="aspect-[3/4]"
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-8">
            <Reveal>
              <h3 className="font-serif text-xl md:text-2xl">Teaching Associate &mdash; Brown University</h3>
              <a href="https://music.brown.edu/" target="_blank" rel="noreferrer" className="link-underline text-sm uppercase tracking-[0.14em] text-primary">Learn More</a>
            </Reveal>
            <Reveal>
              <h3 className="font-serif text-xl md:text-2xl">String Faculty &mdash; New England Conservatory Preparatory / Expanded Education</h3>
              <a href="https://necmusic.edu/expanded-education/nec-prep/" target="_blank" rel="noreferrer" className="link-underline text-sm uppercase tracking-[0.14em] text-primary">Learn More</a>
            </Reveal>
            <Reveal>
              <h3 className="font-serif text-xl md:text-2xl">Violin Faculty &mdash; Project STEP</h3>
              <a href="https://www.projectstep.org/" target="_blank" rel="noreferrer" className="link-underline text-sm uppercase tracking-[0.14em] text-primary">Learn More</a>
            </Reveal>

            <Reveal className="border-t border-border pt-8">
              <h3 className="font-serif text-xl md:text-2xl mb-3">Summer Teaching</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Faculty &mdash; Easton Chamber Music Festival in Massachusetts</p>
              <a href="http://eastonchambermusicfestival.org/index.html" target="_blank" rel="noreferrer" className="link-underline text-sm text-primary">eastonchambermusicfestival.org</a>
            </Reveal>

            <Reveal className="border-t border-border pt-8">
              <h3 className="font-serif text-xl md:text-2xl mb-3">Masterclasses &amp; Lectures</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Virginia Tech (preparatory and collegiate), DePaul University School of Music, Tonebase Violin
                (sightreading skills and tips). I have lectured on String Quartet Pedagogy in Higher Education at
                the Paul Rolland String Pedagogy Workshop (2021) and the American String Teacher&apos;s
                Association (ASTA) National Conference (2022). I received my Level 1 Rolland Certification in 2021.
                I am also available for Public Speaking Workshops for Presenting Music in Community Settings.
                Past masterclasses have been given at the University of Illinois Urbana-Champaign and for the
                Peabody String Sinfonia in Baltimore, MD.
              </p>
            </Reveal>

            <Reveal className="border-t border-border pt-8 space-y-6">
              <h3 className="font-serif text-xl md:text-2xl">Previous Teaching</h3>
              <div>
                <h4 className="font-semibold text-base">Faculty &mdash; Rhode Island Philharmonic Summer Chamber Music Workshop</h4>
                <a href="https://www.riphil.org/music-school/summer-2023-workshops" target="_blank" rel="noreferrer" className="link-underline text-sm uppercase tracking-[0.14em] text-primary">riphil.org</a>
              </div>
              <div>
                <h4 className="font-semibold text-base">Community MusicWorks, Resident Musician &mdash; Providence, RI</h4>
                <a href="https://communitymusicworks.org/" target="_blank" rel="noreferrer" className="link-underline text-sm uppercase tracking-[0.14em] text-primary">Learn More</a>
              </div>
              <div>
                <h4 className="font-semibold text-base">Faculty at Luzerne Music Center, Senior Session in New York</h4>
                <a href="https://www.luzernemusic.org/" target="_blank" rel="noreferrer" className="link-underline text-sm text-primary">luzernemusic.org</a>
              </div>
              <div>
                <h4 className="font-semibold text-base">Core Teaching Artist at Apollo&apos;s Fire &mdash; Cleveland Baroque Orchestra, Matteson, IL Side-by-Side Program</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  Taught elementary beginner group string classes (violin, viola, cello) and high school string
                  students; performed in side-by-side concerts with students; designed elementary school curriculum.
                </p>
                <a href="https://apollosfire.org/side-by-side/" target="_blank" rel="noreferrer" className="link-underline text-sm text-primary">apollosfire.org/side-by-side</a>
              </div>
              <div>
                <h4 className="font-semibold text-base">University of Illinois Urbana-Champaign, Violin Teaching Assistant</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  Taught the following courses to Music Majors and Non-Music Majors at the Undergraduate and
                  Graduate levels: MUSC 110 &mdash; Violin; MUSC 410 &mdash; Advanced Violin; MUSC 450 &mdash;
                  Chamber Music; Violin Scale Technique Class.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base">Coordinator &amp; Violin Instructor at the Illinois Community Music Academy</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  Violin Lessons: Middle School&ndash;Adult; led Youth Orchestra Sectionals; directed Curriculum
                  Meetings for ICMA instructors.
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Violin Teaching Assistant to Violaine Melancon at McGill University, Undergraduate Etude Lessons
                (2019&ndash;2020). Guest Violin Workshop for Aphasia Group of Middle Tennessee, Vanderbilt
                University Medical Center (2020). Studio Teaching in Baltimore, MD (2015&ndash;2018).
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
