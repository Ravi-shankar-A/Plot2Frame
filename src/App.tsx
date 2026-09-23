import { useState } from 'react'
import './App.css'

type Story = {
  title: string
  author: string
  location: string
  genre: string
  format: string
  excerpt: string
  image: string
  length: string
  signal: string
  provenance: 'Verified life' | 'Film adaptation' | 'Traditional epic' | 'Original submission'
  body: string
}

const stories: Story[] = [
  {
    title: 'Three Monsoons', author: 'Anjali, 42', location: 'Alappuzha, Kerala', genre: 'Family saga', format: 'Feature film',
    excerpt: 'The first flood took the rice. The second took the blue plastic chair. By the third, Anjali’s father had stopped saying the water would go down.', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=85', length: '2,540 words', signal: 'Multi-generational', provenance: 'Original submission', body: 'A fictional composite written for this prototype. Anjali remembers her family measuring floodwater against the kitchen wall, marking each year with a pencil. Her brother wants to move to Dubai. Her father keeps repairing the same boat. The argument is never really about the boat; it is about who gets to decide when a life is finished.',
  },
  {
    title: 'The Bus That Waited', author: 'Rafiq, 29', location: 'Bengaluru, Karnataka', genre: 'Human drama', format: 'Short film',
    excerpt: 'Every night, Rafiq leaves the window seat empty. His passengers think he is being polite. Only the old tea seller knows who used to sit there.', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85', length: '1,180 words', signal: 'One impossible night', provenance: 'Original submission', body: 'A fictional composite written for this prototype. Rafiq drives the last bus on a route that was renumbered years ago. He still stops outside a shuttered hospital at 2:10 a.m., though nobody gets in. On the night he finally sees someone in the window seat, he has to decide whether grief is something to carry or something to return.',
  },
  {
    title: 'Letters to No One', author: 'Meera, 67', location: 'Kolkata, West Bengal', genre: 'Memory', format: 'Limited series',
    excerpt: 'Meera has written the same address on 312 envelopes. She knows the house was demolished. She keeps writing anyway.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85', length: '3,100 words', signal: 'Based on lived experience', provenance: 'Original submission', body: 'A fictional composite inspired by the memory of Partition survivors. Meera writes after everyone else has gone to sleep, using the good blue ink she saves for bank forms. She never asks whether her friend is alive. The returned letter is not a miracle; it is a mistake at a sorting office. That is what makes opening it so difficult.',
  },
  {
    title: 'The Last Cinema Ticket', author: 'Thomas, 54', location: 'Kottayam, Kerala', genre: 'Coming of age', format: 'Feature film',
    excerpt: 'The theatre has one week left before demolition. Thomas lies about a broken projector so the regulars can have one more Sunday show.', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85', length: '2,760 words', signal: 'Place as character', provenance: 'Original submission', body: 'A fictional composite about a disappearing single-screen theatre. Thomas knows which seats squeak and which families bring food in newspaper. A schoolgirl comes every Sunday because the theatre is the only place her father speaks to her without checking his phone. The final screening is not a grand event. Half the seats are empty, and the power cuts out before the interval.',
  },
  {
    title: 'The Tin Box', author: 'Savitri, 61', location: 'Pune, Maharashtra', genre: 'Family drama', format: 'Short film',
    excerpt: 'After her husband dies, Savitri finds a railway ticket in a steel box. It is dated three years before they met.', image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1200&q=85', length: '940 words', signal: 'A late discovery', provenance: 'Original submission', body: 'A fictional composite. Savitri is not looking for a secret when she opens the tin box; she is looking for the receipt for a pressure cooker. The ticket leads to a town her husband never mentioned. Her daughter wants the truth immediately. Savitri wants to know whether some parts of a marriage are allowed to remain private after death.',
  },
  {
    title: 'Platform 4 at 6:20', author: 'Joseph, 38', location: 'Chennai, Tamil Nadu', genre: 'Human drama', format: 'Short film',
    excerpt: 'A railway cleaner keeps finding the same child’s red hairclip after the morning rush. Then a woman asks him to keep one safe.', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=85', length: '1,460 words', signal: 'A quiet encounter', provenance: 'Original submission', body: 'A fictional composite. Joseph works before sunrise and knows the platform by sound: the tea glasses, the announcement that never works, the loose sheet of metal near the stairs. The hairclip becomes a small reason to pay attention. When the woman returns for it, she does not tell him why it matters. He does not ask in front of her daughter.',
  },
  {
    title: 'The Wedding Video', author: 'Nisha, 31', location: 'Kozhikode, Kerala', genre: 'Memory', format: 'Limited series',
    excerpt: 'A damaged wedding tape is the only recording of Nisha’s mother laughing. Her brothers want to throw it away.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85', length: '2,020 words', signal: 'What survives', provenance: 'Original submission', body: 'A fictional composite. The tape has a white line through the middle and a voice from the videographer asking everyone to move closer. Nisha remembers her mother as tired, not joyful, so the laugh unsettles her. Repairing the cassette becomes a family argument about whether memory belongs to the person who lived it or the people left behind.',
  },
  {
    title: 'The Spare Key', author: 'Farooq, 46', location: 'Hyderabad, Telangana', genre: 'Family drama', format: 'Feature film',
    excerpt: 'For eleven years, Farooq keeps the spare key to a neighbor’s locked room. One afternoon, someone finally comes back for it.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85', length: '2,380 words', signal: 'A promise kept too long', provenance: 'Original submission', body: 'A fictional composite about the promises people make in passing. Farooq was asked to water a neighbor’s plants for one week. The week became a decade. The room is still exactly as it was, except for the dust and the calendar. When the key is requested, Farooq realizes he has been guarding a room that was never his to remember.',
  },
  {
    title: 'Amaran', author: 'Major Mukund Varadarajan', location: 'Shopian, Jammu and Kashmir', genre: 'True story', format: 'Film adaptation',
    excerpt: 'A soldier, a marriage, and the ordinary courage behind a uniform: the life of Major Mukund Varadarajan, remembered through the people who loved him.', image: 'https://images.unsplash.com/photo-1580130732478-4e339fb6836f?auto=format&fit=crop&w=1200&q=85', length: 'Verified account', signal: 'Based on a real life', provenance: 'Film adaptation', body: 'Amaran is a film adaptation of the life of Major Mukund Varadarajan, an Indian Army officer of 44 Rashtriya Rifles who was killed in action in Shopian in April 2014 and awarded the Ashoka Chakra posthumously. The film also foregrounds his relationship with Indhu Rebecca Varghese. This listing separates the documented life from the film’s dramatized scenes and dialogue.',
  },
  {
    title: 'The Ramayana', author: 'Traditional epic', location: 'South Asia', genre: 'Epic tradition', format: 'Epic adaptation',
    excerpt: 'A prince leaves a kingdom, a family crosses a forest, and a rescue becomes a journey through duty, loyalty, and the cost of power.', image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=85', length: 'Oral and literary tradition', signal: 'Many regional tellings', provenance: 'Traditional epic', body: 'The Ramayana is a major South Asian epic with many Sanskrit, Tamil, Telugu, Malayalam, Hindi, and other regional tellings. This is not presented as a verified modern biography. For filmmakers, its value is in the enduring narrative architecture: exile, devotion, moral choice, conflict, return, and the different meanings each culture gives those events.',
  },
  {
    title: 'The Mahabharata', author: 'Traditional epic', location: 'South Asia', genre: 'Epic tradition', format: 'Epic adaptation',
    excerpt: 'A family inheritance becomes a war, and every victory asks what justice costs the people who survive it.', image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85', length: 'Oral and literary tradition', signal: 'Generations of retelling', provenance: 'Traditional epic', body: 'The Mahabharata is one of the foundational Sanskrit epics of South Asia, shaped through centuries of transmission and interpretation. It contains the Pandavas, Kauravas, Krishna, and the Kurukshetra conflict, but this product labels it as traditional epic rather than verified real-life history. Its screen power comes from its moral complexity, family politics, and many competing points of view.',
  },
]

const filmProof = [
  { title: 'Amaran', person: 'Major Mukund Varadarajan', note: 'A soldier’s documented life became a story of service, love, and sacrifice.' },
  { title: 'Dangal', person: 'The Phogat family', note: 'A family’s wrestling journey became a story about ambition, gender, and discipline.' },
  { title: 'Pad Man', person: 'Arunachalam Muruganantham', note: 'An everyday problem became a story about invention, shame, and dignity.' },
  { title: 'Neerja', person: 'Neerja Bhanot', note: 'A flight attendant’s courage became a tightly contained human thriller.' },
]

function App() {
  const [activeGenre, setActiveGenre] = useState('All stories')
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [sent, setSent] = useState(false)
  const genres = ['All stories', 'True story', 'Epic tradition', 'Family saga', 'Family drama', 'Human drama', 'Memory', 'Coming of age']
  const visibleStories = activeGenre === 'All stories' ? stories : stories.filter((story) => story.genre === activeGenre)

  return (
    <main>
      <nav className="nav shell"><a className="brand" href="#top"><span>plot</span>2frame</a><div className="nav-links"><a href="#discover">Discover</a><a href="#proof">Why it works</a><a href="#submit">Submit a story</a></div><button className="nav-action" type="button" onClick={() => document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })}>Browse stories <span>↗</span></button></nav>
      <section className="hero shell" id="top"><div className="hero-copy"><p className="eyebrow">For stories that sound like somebody</p><h1>Your life has a<br /><em>first scene.</em></h1><p className="hero-lede">The cracked cup. The missed train. The thing your grandmother says every time it rains. Start there. A filmmaker may be looking for exactly that.</p><div className="hero-actions"><a className="button button-dark" href="#discover">Read a story <span>↓</span></a><a className="text-link" href="#submit">Tell yours <span>↗</span></a></div><div className="hero-note"><span className="avatar-stack"><i>R</i><i>M</i><i>A</i></span><span><strong>Small stories, honestly told</strong><br />read by people who make films</span></div></div><div className="hero-art"><div className="hero-image"><img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1300&q=85" alt="A filmmaker looking through a camera in a warm cinema" /></div><div className="film-card"><span>Featured story</span><strong>The Bus That Waited</strong><small>Human drama · Bengaluru</small></div><div className="scribble">every life<br />has a frame</div></div></section>
      <section className="proof-strip shell"><span>Real lives, old epics, and things that happened last Tuesday</span><span className="proof-line"></span><span>Read the label before the story</span></section>
      <section className="section shell" id="discover"><div className="section-heading"><div><p className="eyebrow">The open reel</p><h2>Come in. Read slowly.</h2></div><p className="section-intro">Some are documented. Some are inherited.<br />Some are waiting for their first honest draft.</p></div><div className="filters">{genres.map((genre) => <button className={activeGenre === genre ? 'filter active' : 'filter'} type="button" key={genre} onClick={() => setActiveGenre(genre)}>{genre}</button>)}</div><div className="story-grid">{visibleStories.map((story) => <article className="story-card" key={story.title} onClick={() => { setSelectedStory(story); setSent(false) }}><div className="story-image"><img src={story.image} alt="" /><span className="format">{story.format}</span><span className="length">{story.length}</span></div><div className="story-body"><p className="card-kicker">{story.genre} <span>·</span> {story.signal}</p><h3>{story.title}</h3><p>{story.excerpt}</p><div className="story-byline"><span>{story.author} · {story.location}</span><span className="arrow">↗</span></div></div></article>)}</div></section>
      <section className="proof-section" id="proof"><div className="shell"><div className="section-heading"><div><p className="eyebrow">This has happened before</p><h2>One life. One film.<br /><em>A world opened up.</em></h2></div><p className="section-intro">The strongest screen stories often begin with a person who never thought their life was extraordinary.</p></div><div className="film-list">{filmProof.map((film, index) => <div className="film-row" key={film.title}><span className="film-number">0{index + 1}</span><div><h3>{film.title}</h3><p>{film.note}</p></div><span className="film-person">Based on {film.person}</span><span className="film-arrow">↗</span></div>)}</div></div></section>
      <section className="submit-section shell" id="submit"><div><p className="eyebrow">For the people with the story</p><h2>Start with what<br /><em>actually happened.</em></h2></div><div className="submit-copy"><p>You do not need a logline. You do not need a poster. Tell us what you remember, and let the right filmmaker find the shape inside it.</p><button className="button button-accent" type="button" onClick={() => alert('Story submission is the next step to connect to a real form.')}>Share your story <span>↗</span></button><small>Your contact stays private until you choose to connect.</small></div></section>
      <footer className="footer shell"><a className="brand" href="#top"><span>plot</span>2frame</a><span>Real lives. Better stories.</span><span>© 2026</span></footer>
      {selectedStory && <div className="modal-backdrop" onClick={() => setSelectedStory(null)}><section className="story-modal" onClick={(event) => event.stopPropagation()}><button className="close" type="button" aria-label="Close story" onClick={() => setSelectedStory(null)}>×</button><img src={selectedStory.image} alt="" /><div className="modal-content"><p className="card-kicker">{selectedStory.provenance} · {selectedStory.genre}</p><h2>{selectedStory.title}</h2><p className="modal-meta">{selectedStory.author} · {selectedStory.location} · {selectedStory.length}</p><p>{selectedStory.body}</p><div className="truth-note"><strong>How to read this</strong><span>{selectedStory.provenance === 'Traditional epic' ? 'A cultural and literary tradition, open to interpretation and regional retelling.' : selectedStory.provenance === 'Film adaptation' ? 'A real person or event adapted for cinema. Documented facts and dramatized scenes should be kept distinct.' : selectedStory.provenance === 'Original submission' ? 'A prototype composite story. A real submission would require consent and verification before publication.' : 'A documented account submitted by its storyteller, subject to verification and consent.'}</span></div>{sent ? <div className="sent-state"><strong>Interest sent.</strong><span>The storyteller can review your note before choosing to connect.</span></div> : <><label htmlFor="interest">Why does this story stay with you?</label><textarea id="interest" placeholder="A few honest lines..." /><button className="button button-dark full" type="button" onClick={() => setSent(true)}>I'm interested <span>↗</span></button></>}</div></section></div>}
    </main>
  )
}

export default App
