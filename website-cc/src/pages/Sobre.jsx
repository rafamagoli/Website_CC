import FAQ from '../sections/faq/FAQ.jsx'

export default function Sobre() {
  return (
    <div
      style={{
        marginTop: '-64px',
        paddingTop: '64px',
        background:
          'radial-gradient(circle at 15% 20%, rgba(83, 104, 69, 0.03) 0%, transparent 50%), radial-gradient(circle at 85% 80%, rgba(241, 174, 47, 0.05) 0%, transparent 50%), linear-gradient(135deg, #fafafa 0%, var(--color-secondary-3) 50%, #f8f8f8 100%)',
      }}
    >
      <FAQ />
    </div>
  )
}
