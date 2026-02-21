require('dotenv').config()
const express = require('express')
const fetch = require('node-fetch')
const Anthropic = require('@anthropic-ai/sdk')
const app = express()

const anthropic = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY })

app.use(express.static('public'))
app.use(express.json())

app.get('/jobs', async (req, res) => {
  // Accept ?page=1, ?page=2, etc. Default to 1.
  const page = parseInt(req.query.page) || 1
  const limit = 20

  // Remotive uses 0-based offset: page 1 = skip 0, page 2 = skip 20, etc.
  const offset = (page - 1) * limit

  const response = await fetch(`https://remotive.com/api/remote-jobs?limit=${limit}&offset=${offset}`)
  const data = await response.json()

  const simplified = data.jobs.map(job => ({
    title: job.title,
    company: job.company_name,
    category: job.category,
    type: job.job_type,
    tags: job.tags,
    location: job.candidate_required_location || 'Remote',
    url: job.url,
  }))

  // Send back the jobs AND whether there are more to load
  res.json({
    jobs: simplified,
    hasMore: simplified.length === limit
  })
})

app.post('/summarize', async (req, res) => {
  const job = req.body

  const message = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 512,
    messages: [{
      role: 'user',
     content: `Summarize this job listing in 2-3 sentences. Rules:
- Do not include a header or label
- Do not restate the job title or company name  
- Focus on what the work involves and what skills are needed
- Naturally incorporate any of these tags that are relevant technical or skill terms: ${job.tags ? job.tags.join(', ') : ''}
- Ignore tags that are generic or non-technical
- Be specific and direct

Job data: ${JSON.stringify(job)}`
    }]
  })

  res.json({ summary: message.content[0].text })
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})