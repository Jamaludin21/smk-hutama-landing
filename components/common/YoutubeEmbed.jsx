// TIDAK perlu "use client"
function extractYouTubeId (urlOrId = '') {
  if (!urlOrId) return ''
  if (/^[\w-]{11}$/.test(urlOrId)) return urlOrId // sudah ID
  try {
    const u = new URL(urlOrId)
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1)
    if (u.hostname.includes('youtube.com')) return u.searchParams.get('v') || ''
  } catch {
    // not a URL, fallback
  }
  return urlOrId
}

export default function YouTubeEmbed ({ urlOrId, title = 'YouTube video' }) {
  const id = extractYouTubeId(urlOrId)
  const src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`

  return (
    <div className='aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-black/5'>
      <iframe
        title={title}
        src={src}
        loading='lazy'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        referrerPolicy='strict-origin-when-cross-origin'
        className='h-full w-full'
      />
    </div>
  )
}
