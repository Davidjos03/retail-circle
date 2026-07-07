import { Link } from 'react-router-dom'
import LeadCard from '../components/leads/LeadCard'
import { mockLeads } from '../data/leads'

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Home</h1>
        <p className="mt-1 text-neutral-400">
          Latest matched leads. See all on the{' '}
          <Link to="/leads" className="text-brand hover:underline">
            Leads
          </Link>{' '}
          page.
        </p>
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Recent Leads</h2>
          <Link to="/leads" className="text-sm text-brand hover:underline">
            View all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {mockLeads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      </section>
    </div>
  )
}
