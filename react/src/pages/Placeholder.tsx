type PlaceholderProps = {
  title: string
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-lg font-medium text-white">{title}</h1>
      <p className="text-sm text-paragraph">This section is coming soon.</p>
    </div>
  )
}
