import { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const initialTickets = [
  {
    id: 1,
    title: 'Checkout button not responding',
    description:
      'Customers report that clicking the checkout button on mobile Safari does nothing.',
    customer: 'Amina Rahman',
    priority: 'High',
    status: 'Open',
    createdAt: '2026-03-01 09:15 AM',
  },
  {
    id: 2,
    title: 'Invoice PDF missing order ID',
    description:
      'Generated invoices are downloadable, but the order ID field is blank in the PDF.',
    customer: 'Nabil Hossain',
    priority: 'Medium',
    status: 'Open',
    createdAt: '2026-03-01 11:42 AM',
  },
  {
    id: 3,
    title: 'Password reset email delayed',
    description:
      'Reset emails are reaching users after 10-15 minutes instead of immediately.',
    customer: 'Farzana Akter',
    priority: 'High',
    status: 'Open',
    createdAt: '2026-03-02 08:03 AM',
  },
  {
    id: 4,
    title: 'Product image not loading',
    description:
      'Main image on product detail page fails to load for selected categories.',
    customer: 'Imran Kabir',
    priority: 'Low',
    status: 'Open',
    createdAt: '2026-03-02 10:18 AM',
  },
  {
    id: 5,
    title: 'Unable to apply discount code',
    description:
      'Promo code SAVE20 shows invalid even when campaign is active and eligible.',
    customer: 'Raisa Sultana',
    priority: 'High',
    status: 'Open',
    createdAt: '2026-03-02 01:27 PM',
  },
  {
    id: 6,
    title: 'Order history page freezes',
    description:
      'Order history becomes unresponsive when filtering by date range.',
    customer: 'Sohan Mirza',
    priority: 'Medium',
    status: 'Open',
    createdAt: '2026-03-02 04:09 PM',
  },
  {
    id: 7,
    title: 'Address form validation error',
    description:
      'Postal code field throws invalid error for valid six-digit inputs.',
    customer: 'Tahmina Islam',
    priority: 'Medium',
    status: 'Open',
    createdAt: '2026-03-03 09:51 AM',
  },
  {
    id: 8,
    title: 'Search returns unrelated items',
    description:
      'Searching exact product names returns items from unrelated categories.',
    customer: 'Sabbir Hasan',
    priority: 'Low',
    status: 'Open',
    createdAt: '2026-03-03 12:05 PM',
  },
  {
    id: 9,
    title: 'Double payment charged',
    description:
      'A customer was charged twice for a single checkout attempt.',
    customer: 'Nusrat Jahan',
    priority: 'Critical',
    status: 'Open',
    createdAt: '2026-03-03 02:43 PM',
  },
  {
    id: 10,
    title: 'Profile photo upload fails',
    description:
      'Uploading JPG profile photos fails with a generic network error.',
    customer: 'Rafid Chowdhury',
    priority: 'Low',
    status: 'Open',
    createdAt: '2026-03-03 05:28 PM',
  },
  {
    id: 11,
    title: 'Cart item quantity resets',
    description:
      'Cart quantity resets to one after page refresh for logged-in users.',
    customer: 'Mim Ahmed',
    priority: 'High',
    status: 'Open',
    createdAt: '2026-03-04 10:36 AM',
  },
  {
    id: 12,
    title: 'Live chat widget overlaps menu',
    description:
      'Support chat bubble overlaps the bottom navigation menu on Android.',
    customer: 'Rony Karim',
    priority: 'Medium',
    status: 'Open',
    createdAt: '2026-03-04 03:12 PM',
  },
]

function App() {
  const [tickets, setTickets] = useState(initialTickets)
  const [inProgressTickets, setInProgressTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])

  const inProgressCount = inProgressTickets.length
  const resolvedCount = resolvedTickets.length

  const openTickets = useMemo(
    () => tickets.filter((ticket) => !inProgressTickets.some((item) => item.id === ticket.id)),
    [tickets, inProgressTickets],
  )

  const handleAssignTicket = (ticket) => {
    if (inProgressTickets.some((item) => item.id === ticket.id)) {
      toast.info('This ticket is already in progress.')
      return
    }

    setInProgressTickets((prev) => [...prev, ticket])
    toast.success(`Ticket #${ticket.id} is now in progress.`)
  }

  const handleCompleteTicket = (ticketId) => {
    const selectedTicket = inProgressTickets.find((ticket) => ticket.id === ticketId)

    if (!selectedTicket) {
      return
    }

    setInProgressTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId))
    setResolvedTickets((prev) => [...prev, { ...selectedTicket, status: 'Resolved' }])
    setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId))

    toast.success(`Ticket #${ticketId} has been resolved.`)
  }

  const handleNewTicketClick = () => {
    toast.info('Ticket form integration is ready for the next feature.')
  }

  return (
    <div className="support-app">
      <header className="navbar">
        <div className="brand-wrap">
          <div className="brand-dot" aria-hidden="true" />
          <h1>Customer Support Zone</h1>
        </div>

        <nav>
          <a href="#tickets">Tickets</a>
          <a href="#status">Status</a>
          <a href="#resolved">Resolved</a>
          <button type="button" className="new-ticket-btn" onClick={handleNewTicketClick}>
            New Ticket
          </button>
        </nav>
      </header>

      <section className="banner panel-animate">
        <div className="banner-copy">
          <p className="banner-label">Support Dashboard</p>
          <h2>Track customer tickets without missing a single update.</h2>
          <p className="banner-note">Click any ticket card to move it into active task processing.</p>
        </div>

        <div className="stats-wrap">
          <article>
            <p>In Progress</p>
            <strong>{inProgressCount}</strong>
          </article>
          <article>
            <p>Resolved</p>
            <strong>{resolvedCount}</strong>
          </article>
        </div>
      </section>

      <main className="main-content panel-animate">
        <section id="tickets" className="ticket-panel">
          <div className="section-heading">
            <h3>Customer Tickets</h3>
            <span>{openTickets.length} open</span>
          </div>

          <div className="ticket-grid">
            {openTickets.map((ticket) => (
              <article
                key={ticket.id}
                className="ticket-card"
                style={{ animationDelay: `${ticket.id * 40}ms` }}
                onClick={() => handleAssignTicket(ticket)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    handleAssignTicket(ticket)
                  }
                }}
              >
                <div className="ticket-meta">
                  <span>#{ticket.id}</span>
                  <span className={`priority ${ticket.priority.toLowerCase()}`}>{ticket.priority}</span>
                </div>
                <h4>{ticket.title}</h4>
                <p>{ticket.description}</p>
                <footer>
                  <small className="ticket-customer">{ticket.customer}</small>
                  <small className="ticket-status">{ticket.status}</small>
                  <small>{ticket.createdAt}</small>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <aside id="status" className="status-panel">
          <section>
            <div className="section-heading">
              <h3>Task Status</h3>
              <span>{inProgressCount} running</span>
            </div>

            <div className="status-list">
              {inProgressTickets.length === 0 ? (
                <p className="empty-state">No active tasks yet. Pick a ticket from the left.</p>
              ) : (
                inProgressTickets.map((ticket) => (
                  <article key={ticket.id} className="status-item">
                    <p>{ticket.title}</p>
                    <button type="button" onClick={() => handleCompleteTicket(ticket.id)}>
                      Complete
                    </button>
                  </article>
                ))
              )}
            </div>
          </section>

          <section id="resolved">
            <div className="section-heading">
              <h3>Resolved List</h3>
              <span>{resolvedCount} done</span>
            </div>

            <div className="resolved-list">
              {resolvedTickets.length === 0 ? (
                <p className="empty-state">Resolved tickets will appear here.</p>
              ) : (
                resolvedTickets.map((ticket) => (
                  <article key={ticket.id} className="resolved-item">
                    <p>{ticket.title}</p>
                    <small>by {ticket.customer}</small>
                  </article>
                ))
              )}
            </div>
          </section>
        </aside>
      </main>

      <footer className="footer">
        <p>Customer Support Zone</p>
        <small>Fast responses. Better trust. Happier customers.</small>
      </footer>

      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </div>
  )
}

export default App
