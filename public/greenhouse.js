// ═══════════════════════════════════════════════
// PHRASE POOLS
// ═══════════════════════════════════════════════

// Main phrases — inserted between company and job title
// Scale: 1 = safe/professional, 10 = spicy/surprising, 12 = transcendent
const phrases = [
  // 1 — corporate boilerplate
  { text: 'is hiring a', weight: 1 },
  { text: 'is seeking a', weight: 1 },
  { text: 'has an opening for a', weight: 1 },
  { text: 'is recruiting a', weight: 1 },
  { text: 'is looking for a', weight: 1 },
  { text: 'has a role open for a', weight: 1 },
  { text: 'is staffing up for a', weight: 1 },
  { text: 'wants to bring on a', weight: 1 },
  // 2 — slightly warm
  { text: 'is searching for a', weight: 2 },
  { text: 'is hoping to find a', weight: 2 },
  { text: 'could really use a', weight: 2 },
  { text: 'wants to hire a', weight: 2 },
  { text: 'is adding a', weight: 2 },
  { text: 'needs a', weight: 2 },
  { text: 'is bringing on a', weight: 2 },
  // 3 — casual
  { text: 'is on the lookout for a', weight: 3 },
  { text: 'is picking up a', weight: 3 },
  { text: 'would like to find a', weight: 3 },
  { text: 'is scouting for a', weight: 3 },
  { text: 'has room for a', weight: 3 },
  { text: 'is making space for a', weight: 3 },
  { text: 'wants a', weight: 3 },
  // 4 — human
  { text: 'is on the hunt for a', weight: 4 },
  { text: 'is ready to meet their next', weight: 4 },
  { text: 'is building out a team and needs a', weight: 4 },
  { text: 'just posted a listing for a', weight: 4 },
  { text: 'would very much like a', weight: 4 },
  { text: 'is shopping around for a', weight: 4 },
  // 5 — personality showing
  { text: 'has been meaning to hire a', weight: 5 },
  { text: 'finally got budget for a', weight: 5 },
  { text: 'has a spot open and it\'s for a', weight: 5 },
  { text: 'just convinced the board they need a', weight: 5 },
  { text: 'would very much like to find a', weight: 5 },
  { text: 'could use some help from a', weight: 5 },
  { text: 'put the word out for a', weight: 5 },
  // 6 — editorial voice
  { text: 'is quietly desperate for a', weight: 6 },
  { text: 'is sending up a flare for a', weight: 6 },
  { text: 'is holding a candle for a', weight: 6 },
  { text: 'seems to really want a', weight: 6 },
  { text: 'has been whispering about needing a', weight: 6 },
  { text: 'is casting a net for a', weight: 6 },
  { text: 'is putting on its best face to attract a', weight: 6 },
  // 7 — theatrical
  { text: 'is holding auditions for a', weight: 7 },
  { text: 'has opened the gates for a', weight: 7 },
  { text: 'has rolled out the red carpet for a', weight: 7 },
  { text: 'is accepting suitors for the role of', weight: 7 },
  { text: 'has lit the bat signal for a', weight: 7 },
  { text: 'just fired someone and urgently needs a', weight: 7 },
  { text: 'is in the market for a', weight: 7 },
  // 8 — conspiratorial
  { text: 'has been losing sleep over finding a', weight: 8 },
  { text: 'is manifesting a', weight: 8 },
  { text: 'won\'t stop talking about how much they need a', weight: 8 },
  { text: 'made a vision board and on it was a', weight: 8 },
  { text: 'has reportedly been seen pacing about needing a', weight: 8 },
  { text: 'is breathing heavily in anticipation of a', weight: 8 },
  // 9 — absurd
  { text: 'will not rest until they find a', weight: 9 },
  { text: 'is having dreams about the perfect', weight: 9 },
  { text: 'has entered the bargaining phase over a', weight: 9 },
  { text: 'drew a pentagram and summoned a listing for a', weight: 9 },
  { text: 'scrawled on a napkin at 2am that they need a', weight: 9 },
  { text: 'has been standing outside yelling about needing a', weight: 9 },
  // 10 — unhinged
  { text: 'is down catastrophically bad for a', weight: 10 },
  { text: 'would sell a kidney for a halfway decent', weight: 10 },
  { text: 'has a shrine in the break room dedicated to finding a', weight: 10 },
  { text: 'is in a parasocial relationship with the idea of a', weight: 10 },
  { text: 'woke up in a cold sweat needing a', weight: 10 },
  // 12 — the impossible ones
  { text: 'is offering its firstborn in exchange for a', weight: 12 },
  { text: 'has entered the astral plane to locate a', weight: 12 },
  { text: 'left a voicemail from the future begging for a', weight: 12 },
]

// Intro phrases — shown before the company name on ~30% of posts
const introPhrases = [
  // 1 — invisible, functional
  { text: 'New:', weight: 1 },
  { text: 'Now open —', weight: 1 },
  { text: 'Posted today —', weight: 1 },
  { text: 'Open role —', weight: 1 },
  { text: 'Listing:', weight: 1 },
  { text: 'Available now —', weight: 1 },
  { text: 'Just in —', weight: 1 },
  // 2 — gentle nudge
  { text: 'It looks like', weight: 2 },
  { text: 'Heads up —', weight: 2 },
  { text: 'Worth a look —', weight: 2 },
  { text: 'Take note:', weight: 2 },
  { text: 'Check this out —', weight: 2 },
  { text: 'Interesting one —', weight: 2 },
  { text: 'Here\'s something:', weight: 2 },
  { text: 'For your radar —', weight: 2 },
  // 3 — conversational
  { text: 'By the way,', weight: 3 },
  { text: 'Oh hey —', weight: 3 },
  { text: 'Did you see?', weight: 3 },
  { text: 'I heard', weight: 3 },
  { text: 'Word on the street:', weight: 3 },
  { text: 'Apparently,', weight: 3 },
  { text: 'Not to bother you but', weight: 3 },
  { text: 'Just so you know,', weight: 3 },
  // 4 — personality
  { text: 'This one\'s good —', weight: 4 },
  { text: 'Don\'t sleep on this:', weight: 4 },
  { text: 'You might like this —', weight: 4 },
  { text: 'If you\'re curious,', weight: 4 },
  { text: 'Oh this is interesting —', weight: 4 },
  { text: 'Between you and me,', weight: 4 },
  { text: 'I noticed', weight: 4 },
  { text: 'While you were gone,', weight: 4 },
  // 5 — urgent / social
  { text: 'Hurry!', weight: 5 },
  { text: 'Act fast —', weight: 5 },
  { text: 'Before it\'s gone —', weight: 5 },
  { text: 'Drop everything:', weight: 5 },
  { text: 'Stop scrolling.', weight: 5 },
  { text: 'Pay attention —', weight: 5 },
  { text: 'You\'re going to want to see this:', weight: 5 },
  // 6 — insider
  { text: 'A little bird told me', weight: 6 },
  { text: 'Confidentially,', weight: 6 },
  { text: 'Off the record —', weight: 6 },
  { text: 'Don\'t tell anyone but', weight: 6 },
  { text: 'I probably shouldn\'t share this, but', weight: 6 },
  { text: 'This just leaked:', weight: 6 },
  // 7 — dramatic
  { text: 'Breaking news —', weight: 7 },
  { text: 'URGENT:', weight: 7 },
  { text: 'This changes everything:', weight: 7 },
  { text: 'Brace yourself —', weight: 7 },
  { text: 'The prophecy foretold:', weight: 7 },
  { text: 'Alert alert alert —', weight: 7 },
  // 8 — absurd
  { text: 'I shouldn\'t be telling you this but', weight: 8 },
  { text: 'They asked me not to share this —', weight: 8 },
  { text: 'My sources are unimpeachable:', weight: 8 },
  { text: 'I intercepted this transmission —', weight: 8 },
  { text: 'This arrived by carrier pigeon:', weight: 8 },
  { text: 'Forwarding from a dead drop —', weight: 8 },
  // 9 — chaotic
  { text: 'The stars have aligned and', weight: 9 },
  { text: 'My therapist would hate this but', weight: 9 },
  { text: 'I blacked out and when I came to,', weight: 9 },
  { text: 'In a fever dream I saw that', weight: 9 },
  { text: 'The algorithm has spoken:', weight: 9 },
  { text: 'Against all odds,', weight: 9 },
  // 10 — unhinged
  { text: 'I can\'t explain how I know this but', weight: 10 },
  { text: 'The walls are talking and they said', weight: 10 },
  { text: 'Astral projection update:', weight: 10 },
  { text: 'A ghost whispered to me that', weight: 10 },
]

// Unit phrases — replace "results" in the count display
// Each has singular + plural forms for proper grammar
// Refreshes on every filter change and page load
const unitPhrases = [
  // 1 — standard
  { s: 'result', p: 'results', weight: 1 },
  { s: 'listing', p: 'listings', weight: 1 },
  { s: 'opening', p: 'openings', weight: 1 },
  { s: 'position', p: 'positions', weight: 1 },
  { s: 'role', p: 'roles', weight: 1 },
  // 2 — slight personality
  { s: 'opportunity', p: 'opportunities', weight: 2 },
  { s: 'option', p: 'options', weight: 2 },
  { s: 'match', p: 'matches', weight: 2 },
  { s: 'lead', p: 'leads', weight: 2 },
  // 3 — casual
  { s: 'possibility', p: 'possibilities', weight: 3 },
  { s: 'prospect', p: 'prospects', weight: 3 },
  { s: 'door ajar', p: 'doors ajar', weight: 3 },
  { s: 'open seat', p: 'open seats', weight: 3 },
  // 4 — editorial
  { s: 'thing worth reading', p: 'things worth reading', weight: 4 },
  { s: 'reason to update your resume', p: 'reasons to update your resume', weight: 4 },
  { s: 'invitation', p: 'invitations', weight: 4 },
  // 5 — personality
  { s: 'cry for help', p: 'cries for help', weight: 5 },
  { s: 'open wound in an org chart', p: 'open wounds in an org chart', weight: 5 },
  { s: 'empty desk', p: 'empty desks', weight: 5 },
  // 6 — theatrical
  { s: 'siren calling', p: 'sirens calling', weight: 6 },
  { s: 'flare in the sky', p: 'flares in the sky', weight: 6 },
  { s: 'distress signal', p: 'distress signals', weight: 6 },
  // 7 — conspiratorial
  { s: 'whisper', p: 'whispers', weight: 7 },
  { s: 'coded transmission', p: 'coded transmissions', weight: 7 },
  { s: 'lead from the informant', p: 'leads from the informant', weight: 7 },
  // 8 — absurd
  { s: 'vision', p: 'visions', weight: 8 },
  { s: 'prophecy', p: 'prophecies', weight: 8 },
  // 9 — unhinged
  { s: 'tremor in the job market', p: 'tremors in the job market', weight: 9 },
  { s: 'symptom of late capitalism', p: 'symptoms of late capitalism', weight: 9 },
  // 10
  { s: 'hallucination (but real)', p: 'hallucinations (but real)', weight: 10 },
]


// ═══════════════════════════════════════════════
// KEYWORDS FOR HIGHLIGHTING
// ═══════════════════════════════════════════════

const keywords = [
  'react', 'next.js', 'nextjs', 'typescript', 'javascript', 'python', 'rust', 'go',
  'aws', 'gcp', 'azure', 'node', 'node.js', 'docker', 'kubernetes', 'terraform',
  'sql', 'postgres', 'postgresql', 'mongodb', 'redis', 'graphql', 'rest', 'api',
  'frontend', 'backend', 'full-stack', 'fullstack', 'serverless', 'devops',
  'llm', 'ml', 'machine learning', 'ai', 'nlp', 'pytorch', 'tensorflow',
  'figma', 'product', 'ux', 'ui', 'design systems',
  'rails', 'django', 'fastapi', 'express', 'vue', 'angular', 'svelte'
]


// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════

const activeFilters = {
  type: new Set(),
  category: new Set()
}

let allJobs = []
let currentPage = 1      // which page we've loaded up to
let hasMore = true        // does the API have more pages?
let isLoading = false     // prevent double-clicks while fetching

// Track used phrases per render to prevent repeats
let usedPhrases = new Set()
let usedIntroPhrases = new Set()

// Budget: how many weight-8+ phrases remain this render
let highMainBudget = 0
let highIntroBudget = 0


// ═══════════════════════════════════════════════
// WEIGHTED SELECTION ENGINE
// ═══════════════════════════════════════════════

// Lower weights get picked much more often.
// A weight-1 phrase is ~8x more likely than a weight-8.
// Formula: selectionWeight = 1 / (weight ^ 1.5)
//
// Approximate relative probabilities:
//   weight 1  → 1.000  (baseline)
//   weight 2  → 0.354
//   weight 3  → 0.192
//   weight 4  → 0.125
//   weight 5  → 0.089
//   weight 6  → 0.068
//   weight 7  → 0.054
//   weight 8  → 0.044
//   weight 9  → 0.037
//   weight 10 → 0.032
//   weight 12 → 0.024

function weightedPick(pool, usedSet, highBudgetRef) {
  // Build candidates: exclude already-used phrases
  let candidates = pool.filter(p => !usedSet.has(p.text))

  // If we've used everything, reset (safety valve)
  if (candidates.length === 0) {
    usedSet.clear()
    candidates = pool
  }

  // If high budget is spent, exclude weight >= 8
  if (highBudgetRef.value <= 0) {
    const lowCandidates = candidates.filter(p => p.weight < 8)
    if (lowCandidates.length > 0) candidates = lowCandidates
  }

  // Calculate weighted probabilities
  const weighted = candidates.map(p => ({
    ...p,
    selectionWeight: 1 / Math.pow(p.weight, 1.5)
  }))

  const totalWeight = weighted.reduce((sum, p) => sum + p.selectionWeight, 0)
  let roll = Math.random() * totalWeight

  for (const p of weighted) {
    roll -= p.selectionWeight
    if (roll <= 0) {
      usedSet.add(p.text)
      // Deduct from high budget if applicable
      if (p.weight >= 8) highBudgetRef.value--
      return p.text
    }
  }

  // Fallback (shouldn't hit this)
  const fallback = weighted[weighted.length - 1]
  usedSet.add(fallback.text)
  return fallback.text
}

// Mutable ref objects so weightedPick can decrement them
const mainBudget = { value: 1 }
const introBudget = { value: 1 }

function resetPhraseState() {
  usedPhrases.clear()
  usedIntroPhrases.clear()
  mainBudget.value = 1    // allow 1 high-weight main phrase per render
  introBudget.value = 1   // allow 1 high-weight intro phrase per render
}


// ═══════════════════════════════════════════════
// PHRASE GENERATORS
// ═══════════════════════════════════════════════

function randomPhrase() {
  return weightedPick(phrases, usedPhrases, mainBudget)
}

function randomIntroPhrase() {
  return weightedPick(introPhrases, usedIntroPhrases, introBudget)
}

function randomUnit(count) {
  const pick = unitPhrases[Math.floor(Math.random() * unitPhrases.length)]
  return count === 1 ? pick.s : pick.p
}

// Returns an intro ~30% of the time, empty string otherwise
function maybeIntro() {
  if (Math.random() < 0.3) {
    return `<div class="intro">${randomIntroPhrase()}</div>`
  }
  return ''
}


// ═══════════════════════════════════════════════
// KEYWORD HIGHLIGHTING
// ═══════════════════════════════════════════════

function highlightKeywords(text) {
  let result = text
  keywords.forEach(kw => {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`\\b(${escaped})\\b`, 'gi')
    result = result.replace(regex, '<span class="kw">$1</span>')
  })
  return result
}

function staggerHighlights(element, text) {
  element.innerHTML = highlightKeywords(text)
  setTimeout(() => element.classList.add('visible'), 20)
  const spans = element.querySelectorAll('.kw')
  spans.forEach((span, i) => {
    span.style.opacity = '0'
    span.style.transition = 'opacity 0.4s'
    span.style.borderBottom = 'none'
    setTimeout(() => {
      span.style.opacity = '1'
      span.style.borderBottom = '1px solid #555'
    }, 300 + i * 150)
  })
}


// ═══════════════════════════════════════════════
// API CALLS
// ═══════════════════════════════════════════════

async function getJobs(page = 1) {
  const response = await fetch(`/jobs?page=${page}`)
  const data = await response.json()
  // data is now { jobs: [...], hasMore: true/false }
  return data
}

// Load the next page, append to allJobs, re-render
async function loadMore() {
  if (isLoading || !hasMore) return    // guard against double-clicks or end of data

  isLoading = true
  const btn = document.getElementById('load-more-btn')
  if (btn) btn.textContent = 'LOADING...'

  currentPage++                        // advance to next page
  const data = await getJobs(currentPage)

  allJobs = [...allJobs, ...data.jobs] // append new jobs to existing array
  hasMore = data.hasMore               // update whether more pages exist

  // Rebuild filters in case new jobs introduced new categories/types
  document.getElementById('filter-row-type').innerHTML = ''
  document.getElementById('filter-row-category').innerHTML = ''
  buildFilters(allJobs)

  // Re-apply current filters (which calls renderJobs)
  applyFilters()

  isLoading = false
}

// UPDATED: relative URL + try/catch for graceful error handling
async function summarize(btn, job) {
  btn.textContent = 'LOADING...'
  try {
    const response = await fetch('/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job)
    })
    if (!response.ok) throw new Error(`Server returned ${response.status}`)
    const data = await response.json()
    if (!data.summary) throw new Error('No summary returned')
    const summaryDiv = btn.closest('.user').querySelector('.summary')
    btn.style.opacity = '0'
    btn.style.pointerEvents = 'none'
    staggerHighlights(summaryDiv, data.summary)
  } catch (err) {
    // Graceful error — show unavailable state
    btn.textContent = 'UNAVAILABLE'
    btn.style.color = '#444'
    btn.style.borderColor = '#222'
    btn.style.cursor = 'default'
    btn.onclick = null
  }
}


// ═══════════════════════════════════════════════
// FILTERS
// ═══════════════════════════════════════════════

function buildFilters(jobs) {
  const types = [...new Set(jobs.map(j => j.type))]
  const categories = [...new Set(jobs.map(j => j.category))]

  const typeRow = document.getElementById('filter-row-type')
  const catRow = document.getElementById('filter-row-category')

  types.forEach(type => {
    const count = jobs.filter(j => j.type === type).length
    const btn = document.createElement('button')
    btn.className = 'filter-btn'
    btn.innerHTML = `<span class="filter-label">${type.replace('_', ' ')}</span><span class="filter-count-num">${count}</span>`
    btn.dataset.field = 'type'
    btn.dataset.value = type
    if (activeFilters.type.has(type)) btn.classList.add('active')
    btn.onclick = () => toggleFilter(btn, 'type', type)
    typeRow.appendChild(btn)
  })

  categories.forEach(cat => {
    const count = jobs.filter(j => j.category === cat).length
    const btn = document.createElement('button')
    btn.className = 'filter-btn'
    btn.innerHTML = `<span class="filter-label">${cat}</span><span class="filter-count-num">${count}</span>`
    btn.dataset.field = 'category'
    btn.dataset.value = cat
    if (activeFilters.category.has(cat)) btn.classList.add('active')
    btn.onclick = () => toggleFilter(btn, 'category', cat)
    catRow.appendChild(btn)
  })
}

function toggleFilter(btn, field, value) {
  if (activeFilters[field].has(value)) {
    activeFilters[field].delete(value)
    btn.classList.remove('active')
  } else {
    activeFilters[field].add(value)
    btn.classList.add('active')
  }
  applyFilters()
  // ADDED: update mobile hamburger count
  updateHamburgerCount()
}

function applyFilters() {
  let filtered = allJobs
  if (activeFilters.type.size > 0) {
    filtered = filtered.filter(job => activeFilters.type.has(job.type))
  }
  if (activeFilters.category.size > 0) {
    filtered = filtered.filter(job => activeFilters.category.has(job.category))
  }
  renderJobs(filtered)
}


// ═══════════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════════

function renderJobs(jobs) {
  const output = document.getElementById('output')
  const count = document.getElementById('filter-count')
  const mobileCount = document.getElementById('sidebar-count-mobile')

  // Reset phrase tracking for this render pass
  resetPhraseState()

  const unitText = randomUnit(jobs.length)

  // Desktop count (sidebar footer)
  count.innerHTML = `<em>${jobs.length}</em> ${unitText}`

  // ADDED: mobile count (sidebar top)
  if (mobileCount) {
    mobileCount.innerHTML = `<em>${jobs.length}</em> ${unitText}`
  }

  // Easter egg: exactly 1 result
  if (jobs.length === 1) {
    count.innerHTML += `<span class="easter-egg">you found it</span>`
  }

  if (jobs.length === 0) {
    output.innerHTML = '<div class="no-results">No results match the active filters.</div>'
    return
  }

  output.innerHTML = jobs.map(job => `
    <div class="user">
      ${maybeIntro()}
      <div class="sentence">
        <em><a href="${job.url}" target="_blank" style="color: inherit; text-decoration: none; border-bottom: 1px solid #444;">${job.company}</a></em> ${randomPhrase()} <em>${job.title}</em>
      </div>
      <div class="pills">
        <span class="pill">${job.category}</span>
        <span class="pill">${job.type.replace('_', ' ')}</span>
        <span class="pill">${job.location}</span>
        <button onclick="summarize(this, ${JSON.stringify(job).replace(/"/g, '&quot;')})" class="summarize-btn">MORE INFO</button>
      </div>
      <div class="summary"></div>
    </div>
  `).join('')

  // Append Load More button if there are more pages
  if (hasMore) {
    output.innerHTML += `
      <button id="load-more-btn" class="load-more" onclick="loadMore()">
        Load more
      </button>
    `
  }
}


// ═══════════════════════════════════════════════
// TICKER TAPE
// ═══════════════════════════════════════════════

function buildTicker() {
  const items = ['NOW HIRING', 'REMOTE JOBS', 'NEW LISTINGS', 'APPLY NOW', 'FRESH ROLES', 'WHO\'S HIRING', 'GO REMOTE', 'START TODAY']
  const segment = document.getElementById('ticker-content')
  const clone = document.getElementById('ticker-clone')

  for (let i = 0; i < 20; i++) {
    const el = document.createElement('span')
    el.className = 'ticker-item'
    el.textContent = items[i % items.length]
    segment.appendChild(el)
  }

  clone.innerHTML = segment.innerHTML
}


// ═══════════════════════════════════════════════
// MOBILE
// ═══════════════════════════════════════════════

// Toggle filter panel open/closed
function toggleMobileFilters() {
  document.getElementById('sidebar').classList.toggle('open')
  document.getElementById('sidebar-overlay').classList.toggle('open')
}

// Update hamburger button to show active filter count
function updateHamburgerCount() {
  const el = document.getElementById('hamburger-count')
  if (!el) return
  const total = activeFilters.type.size + activeFilters.category.size
  el.textContent = total
  el.style.color = total > 0 ? '#e8e8e8' : '#555'
}

// Show scroll-to-top after scrolling past first screen
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scroll-top')
  if (!btn) return
  if (window.scrollY > window.innerHeight * 0.5) {
    btn.classList.add('visible')
  } else {
    btn.classList.remove('visible')
  }
})


// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════

async function init() {
  buildTicker()
  const data = await getJobs(1)    // fetch page 1
  allJobs = data.jobs              // data.jobs is the array
  hasMore = data.hasMore           // data.hasMore is the boolean
  buildFilters(allJobs)
  renderJobs(allJobs)
}

init()
