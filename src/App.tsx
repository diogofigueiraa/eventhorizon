import { useState } from 'react'
import './App.css'

const events = [
  {
    id: '1',
    title: 'Midnight Jazz Sessions',
    category: 'Music',
    date: 'June 15, 2026 · 20:00',
    location: 'The Blue Note Lounge, Downton',
    price: '£25 - 80',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80',
  },
  {
    id: '2',
    title: 'Future Tech Summit 2026',
    category: 'Tech',
    date: 'July 22, 2026 - 16:00',
    location: 'Convent Garden, London',
    price: '£150 - 400',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: '3',
    title: 'Abstract Art Workshop',
    category: 'Art',
    date: 'June 29, 2026 · 14:00',
    location: 'Creative Loft Studio',
    price: '£60',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
  },
]

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function IconFilter() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function IconHeart() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function IconBook() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
    </svg>
  )
}

function IconUser() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeNav, setActiveNav] = useState<'search' | 'saved' | 'bookings' | 'profile'>('search')

  return (
    <div className="app">
      <header className="header">
        <button type="button" className="header-btn" aria-label="Open menu">
          <IconMenu />
        </button>
        <h1 className="header-logo">EventHorizon</h1>
        <button type="button" className="header-avatar" aria-label="Profile">
          <IconUser />
        </button>
      </header>

      <main className="main">
        <section className="hero">
          <h2 className="hero-title">
            Find your next <span className="hero-title-accent">experience.</span>
          </h2>
          <p className="hero-desc">
            Discover concerts, workshops, conferences, and festivals happening around you. Book tickets seamlessly.
          </p>
          <div className="search-bar">
            <span className="search-bar-icon search-bar-icon-left" aria-hidden>
              <IconFilter />
            </span>
            <input
              type="search"
              className="search-bar-input"
              placeholder="Search by name, category, or..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search events"
            />
            <span className="search-bar-icon search-bar-icon-right" aria-hidden>
              <IconSearch />
            </span>
          </div>
        </section>

        <section className="events">
          <div className="events-head">
            <h3 className="events-title">Upcoming Events</h3>
            <a href="#view-all" className="events-view-all">View all</a>
          </div>
          <ul className="event-list">
            {events.map((event) => (
              <li key={event.id} className="event-card">
                <div className="event-card-image-wrap">
                  <img src={event.image} alt="" className="event-card-image" />
                  <span className="event-card-tag">{event.category}</span>
                </div>
                <div className="event-card-body">
                  <h4 className="event-card-title">{event.title}</h4>
                  <div className="event-card-meta">
                    <span className="event-card-meta-item">
                      <IconCalendar />
                      {event.date}
                    </span>
                    <span className="event-card-meta-item">
                      <IconLocation />
                      {event.location}
                    </span>
                  </div>
                  <div className="event-card-footer">
                    <span className="event-card-price">{event.price}</span>
                    <a href={`#event-${event.id}`} className="event-card-link">
                      View Details
                      <IconChevronRight />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="cta">
          <h3 className="cta-title">Curate your own events</h3>
          <p className="cta-desc">
            Join thousands of organizers who use EventHorizon to manage tickets, attendees, and payments.
          </p>
          <button type="button" className="cta-btn">Get started as organizer</button>
        </section>
      </main>

      <nav className="bottom-nav" aria-label="Main navigation">
        <button
          type="button"
          className={`bottom-nav-item ${activeNav === 'search' ? 'active' : ''}`}
          onClick={() => setActiveNav('search')}
          aria-current={activeNav === 'search' ? 'page' : undefined}
        >
          <IconSearch />
          <span>Search</span>
        </button>
        <button
          type="button"
          className={`bottom-nav-item ${activeNav === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveNav('saved')}
          aria-current={activeNav === 'saved' ? 'page' : undefined}
        >
          <IconHeart />
          <span>Saved</span>
        </button>
        <button
          type="button"
          className={`bottom-nav-item ${activeNav === 'bookings' ? 'active' : ''}`}
          onClick={() => setActiveNav('bookings')}
          aria-current={activeNav === 'bookings' ? 'page' : undefined}
        >
          <IconBook />
          <span>Bookings</span>
        </button>
        <button
          type="button"
          className={`bottom-nav-item ${activeNav === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveNav('profile')}
          aria-current={activeNav === 'profile' ? 'page' : undefined}
        >
          <IconUser />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  )
}
