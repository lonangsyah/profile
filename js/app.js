/* ============================================
   APP — Main Application Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initNavigation();
  initScrollReveal();
});

// ════════════════════════════════════════
//  RENDER ALL SECTIONS
// ════════════════════════════════════════

function renderAll() {
  renderHero();
  renderAbout();
  renderEducation();
  renderResearchInterests();
  renderTechnologies();
  renderPublications();
  renderGrants();
  renderProjects();
  renderCertifications();
  renderTeaching();
  renderContact();
}

// ════════════════════════════════════════
//  HERO
// ════════════════════════════════════════

function renderHero() {
  const d = siteData.profile;
  const el = document.getElementById('hero-content');
  if (!el) return;

  const keywordsHtml = d.keywords.map(k => `<span class="hero__keyword">${k}</span>`).join('');
  const socialHtml = renderSocialIcons(d.social);

  el.innerHTML = `
    <div class="hero__greeting">Hello, I'm</div>
    <h1 class="hero__name">${d.name}</h1>
    <p class="hero__title">${d.title}<br><span style="font-size: var(--fs-base); color: var(--color-text-tertiary);">${d.institution}</span></p>
    <div class="hero__keywords">${keywordsHtml}</div>
    <div class="hero__actions">
      <a href="#publications" class="btn btn--primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        View Publications
      </a>
      <a href="#contact" class="btn btn--outline">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        Contact Me
      </a>
    </div>
    <div class="hero__social">
      <div class="icon-links">${socialHtml}</div>
    </div>
  `;
}

// ════════════════════════════════════════
//  ABOUT
// ════════════════════════════════════════

function renderAbout() {
  const d = siteData.profile;
  const el = document.getElementById('about-content');
  if (!el) return;

  const bioHtml = d.bio.map(p => `<p>${p}</p>`).join('');
  const tagsHtml = d.keywords.map(k => `<span class="badge badge--accent">${k}</span>`).join('');

  el.innerHTML = `
    <div class="about__bio">
      ${bioHtml}
      <div class="about__interests">
        <div class="about__interests-label">Research Interests</div>
        <div class="about__tags">${tagsHtml}</div>
      </div>
      <div class="about__cv">
        <a href="${d.resumeUrl}" class="btn btn--outline btn--sm" download>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download CV / Resume
        </a>
      </div>
    </div>
  `;
}

// ════════════════════════════════════════
//  EDUCATION
// ════════════════════════════════════════

function renderEducation() {
  const el = document.getElementById('education-content');
  if (!el) return;

  const items = siteData.education.map(e => `
    <div class="timeline__item reveal">
      <div class="timeline__dot"></div>
      <div class="timeline__content">
        <div class="timeline__year">${e.year}</div>
        <div class="timeline__title">${e.degree}</div>
        <div class="timeline__institution">${e.institution}</div>
        <div class="timeline__details">${e.program}${e.gpa ? ' — ' + e.gpa : ''}</div>
      </div>
    </div>
  `).join('');

  el.innerHTML = `<div class="timeline">${items}</div>`;
}

// ════════════════════════════════════════
//  RESEARCH INTERESTS
// ════════════════════════════════════════

function renderResearchInterests() {
  const el = document.getElementById('research-content');
  if (!el) return;

  const cards = siteData.researchInterests.map((r, i) => `
    <div class="card research-card reveal reveal-delay-${(i % 4) + 1}">
      <span class="research-card__icon">${r.icon}</span>
      <div class="card__title">${r.title}</div>
      <div class="card__text">${r.description}</div>
      <div class="research-card__keywords">
        ${r.keywords.map(k => `<span class="tag">${k}</span>`).join('')}
      </div>
    </div>
  `).join('');

  el.innerHTML = `<div class="grid grid--2">${cards}</div>`;
}

// ════════════════════════════════════════
//  TECHNOLOGIES
// ════════════════════════════════════════

function renderTechnologies() {
  const el = document.getElementById('tech-content');
  if (!el) return;

  let html = '';
  for (const [category, items] of Object.entries(siteData.technologies)) {
    const techItems = items.map(t => `
      <div class="tech-item">
        <div class="tech-item__icon">
          <img src="${t.icon}" alt="${t.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span style=\\'font-size:1.5rem\\'>⚙️</span>'">
        </div>
        <span class="tech-item__label">${t.name}</span>
      </div>
    `).join('');

    html += `
      <div class="tech-category reveal">
        <div class="tech-category__title">${category}</div>
        <div class="tech-grid">${techItems}</div>
      </div>
    `;
  }

  el.innerHTML = html;
}

// ════════════════════════════════════════
//  PUBLICATIONS
// ════════════════════════════════════════

function renderPublications() {
  const el = document.getElementById('publications-content');
  if (!el) return;

  // Get unique years and topics
  const years = [...new Set(siteData.publications.map(p => p.year))].sort((a, b) => b - a);
  const topics = [...new Set(siteData.publications.flatMap(p => p.topics))].sort();

  const filterHtml = `
    <div class="filter-bar" id="pub-filters">
      <button class="filter-btn filter-btn--active" data-filter="all" onclick="filterPublications('all', this)">All</button>
      ${years.map(y => `<button class="filter-btn" data-filter="${y}" onclick="filterPublications(${y}, this)">${y}</button>`).join('')}
      ${topics.map(t => `<button class="filter-btn" data-filter="${t}" onclick="filterPublications('${t}', this)">${t}</button>`).join('')}
    </div>
  `;

  const pubsHtml = siteData.publications.map(p => {
    const statusClass = p.status === 'Published' ? 'badge--published' :
                        p.status === 'Under Review' ? 'badge--review' : 'badge--preprint';

    return `
      <div class="pub-item reveal" data-year="${p.year}" data-topics="${p.topics.join(',')}">
        <div class="pub-item__header">
          <div>
            <div class="pub-item__title">${p.title}</div>
            <div class="pub-item__venue">${p.venue}</div>
            <div class="pub-item__authors">${p.authors} · ${p.year}</div>
          </div>
          <span class="badge ${statusClass}">${p.status}</span>
        </div>
        <div class="pub-item__actions">
          <a href="${p.doi}" target="_blank" rel="noopener" class="btn btn--sm btn--outline">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            View Paper
          </a>
          <button class="btn btn--sm btn--ghost" onclick="copyBibtex(this, \`${p.bibtex.replace(/`/g, '\\`').replace(/\n/g, '\\n')}\`)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            BibTeX
          </button>
        </div>
      </div>
    `;
  }).join('');

  el.innerHTML = filterHtml + pubsHtml;
}

function filterPublications(filter, btn) {
  // Update active button
  document.querySelectorAll('#pub-filters .filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
  btn.classList.add('filter-btn--active');

  // Filter items
  document.querySelectorAll('#publications-content .pub-item').forEach(item => {
    if (filter === 'all') {
      item.classList.remove('pub-item--hidden');
    } else if (typeof filter === 'number') {
      item.classList.toggle('pub-item--hidden', parseInt(item.dataset.year) !== filter);
    } else {
      item.classList.toggle('pub-item--hidden', !item.dataset.topics.includes(filter));
    }
  });
}

function copyBibtex(btn, bibtex) {
  navigator.clipboard.writeText(bibtex).then(() => {
    showToast('BibTeX copied to clipboard!');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
    setTimeout(() => { btn.innerHTML = originalText; }, 2000);
  });
}

// ════════════════════════════════════════
//  GRANTS
// ════════════════════════════════════════

function renderGrants() {
  const el = document.getElementById('grants-content');
  if (!el) return;

  const items = siteData.grants.map(g => {
    const statusClass = g.status === 'Active' ? 'badge--active' : 'badge--completed';
    return `
      <div class="grant-item reveal">
        <div class="grant-item__info">
          <div class="grant-item__name">${g.name}</div>
          <div class="grant-item__details">${g.funder} · ${g.year}</div>
        </div>
        <div class="grant-item__meta">
          ${g.value ? `<span style="font-weight:600; font-size: var(--fs-sm); color: var(--color-text-primary);">${g.value}</span>` : ''}
          <span class="badge ${statusClass}">${g.status}</span>
        </div>
      </div>
    `;
  }).join('');

  el.innerHTML = items;
}

// ════════════════════════════════════════
//  PROJECTS
// ════════════════════════════════════════

function renderProjects() {
  const el = document.getElementById('projects-content');
  if (!el) return;

  const categories = ['All', ...new Set(siteData.projects.map(p => p.category))];
  const filterHtml = `
    <div class="filter-bar" id="project-filters">
      ${categories.map((c, i) => `
        <button class="filter-btn ${i === 0 ? 'filter-btn--active' : ''}" data-filter="${c}" onclick="filterProjects('${c}', this)">${c}</button>
      `).join('')}
    </div>
  `;

  const cardsHtml = siteData.projects.map(p => `
    <div class="card project-card reveal" data-category="${p.category}">
      <div class="project-card__image" style="display:flex; align-items:center; justify-content:center; font-size:2.5rem; color: var(--color-accent);">
        ${p.category === 'NLP' ? '💬' : p.category === 'Deep Learning' ? '🔬' : p.category === 'Machine Learning' ? '🧠' : '✨'}
      </div>
      <div class="card__title">${p.title}</div>
      <div class="card__text">${p.description}</div>
      <div class="project-card__tech">
        ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="project-card__links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn--sm btn--outline">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          GitHub
        </a>` : ''}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn--sm btn--primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Live Demo
        </a>` : ''}
      </div>
    </div>
  `).join('');

  el.innerHTML = filterHtml + `<div class="grid grid--2" id="projects-grid">${cardsHtml}</div>`;
}

function filterProjects(category, btn) {
  document.querySelectorAll('#project-filters .filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
  btn.classList.add('filter-btn--active');

  document.querySelectorAll('#projects-grid .project-card').forEach(card => {
    if (category === 'All') {
      card.classList.remove('card--hidden');
    } else {
      card.classList.toggle('card--hidden', card.dataset.category !== category);
    }
  });
}

// ════════════════════════════════════════
//  CERTIFICATIONS
// ════════════════════════════════════════

function renderCertifications() {
  const el = document.getElementById('certifications-content');
  if (!el) return;

  const cards = siteData.certifications.map((c, i) => `
    <div class="card cert-card reveal reveal-delay-${(i % 4) + 1}">
      <div class="cert-card__logo">${c.logo}</div>
      <div class="cert-card__info">
        <div class="card__title">${c.name}</div>
        <div class="cert-card__issuer">${c.issuer} · ${c.year}</div>
        <div class="cert-card__actions">
          <span class="badge badge--accent">${c.category}</span>
          ${c.link ? `<a href="${c.link}" target="_blank" rel="noopener" class="btn btn--sm btn--ghost">Verify →</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  el.innerHTML = `<div class="grid grid--2">${cards}</div>`;
}

// ════════════════════════════════════════
//  TEACHING
// ════════════════════════════════════════

function renderTeaching() {
  const el = document.getElementById('teaching-content');
  if (!el) return;

  const d = siteData.teaching;

  const coursesHtml = d.courses.map(c => `
    <div class="teaching-item reveal">
      <div class="teaching-item__info">
        <div class="teaching-item__name">${c.name}</div>
        <div class="teaching-item__semester">${c.semester}</div>
      </div>
      <div class="teaching-item__meta">
        ${c.materialsUrl ? `<a href="${c.materialsUrl}" class="btn btn--sm btn--ghost">Materials →</a>` : '<span class="tag">In-person</span>'}
      </div>
    </div>
  `).join('');

  const statsHtml = `
    <div class="teaching__stats reveal">
      <div class="teaching__stat">
        <span class="teaching__stat-number">${d.stats.undergraduateStudents}+</span>
        <span class="teaching__stat-label">Undergrad Students Supervised</span>
      </div>
      <div class="teaching__stat">
        <span class="teaching__stat-number">${d.stats.graduateStudents}+</span>
        <span class="teaching__stat-label">Graduate Students Supervised</span>
      </div>
      <div class="teaching__stat">
        <span class="teaching__stat-number">${d.stats.totalCourses}+</span>
        <span class="teaching__stat-label">Courses Taught</span>
      </div>
    </div>
  `;

  el.innerHTML = coursesHtml + statsHtml;
}

// ════════════════════════════════════════
//  CONTACT
// ════════════════════════════════════════

function renderContact() {
  const el = document.getElementById('contact-content');
  if (!el) return;

  const d = siteData.contact;
  const social = siteData.profile.social;

  el.innerHTML = `
    <div class="contact__grid">
      <div class="contact__info">
        <div class="contact__info-item">
          <div class="contact__info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <div>
            <div class="contact__info-label">Email</div>
            <div class="contact__info-value">
              <a href="mailto:${d.email}">${d.email}</a>
            </div>
          </div>
        </div>
        <div class="contact__info-item">
          <div class="contact__info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div>
            <div class="contact__info-label">Office</div>
            <div class="contact__info-value">${d.office}</div>
          </div>
        </div>
        <div class="contact__info-item">
          <div class="contact__info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
          <div>
            <div class="contact__info-label">Research Lab</div>
            <div class="contact__info-value">${d.labAddress}</div>
          </div>
        </div>
        <div class="contact__profiles">
          <div class="contact__profiles-label">Academic Profiles</div>
          <div class="icon-links">
            ${renderSocialIcons(social)}
          </div>
        </div>
      </div>
      <div class="contact__form">
        <form id="contact-form" onsubmit="handleContactSubmit(event)">
          <div class="form-group">
            <label class="form-label" for="contact-name">Name</label>
            <input class="form-input" type="text" id="contact-name" name="name" placeholder="Your full name" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-email">Email</label>
            <input class="form-input" type="email" id="contact-email" name="email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-message">Message</label>
            <textarea class="form-textarea" id="contact-message" name="message" placeholder="Your message..." required></textarea>
          </div>
          <button type="submit" class="btn btn--primary" style="width:100%; justify-content:center;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  `;
}

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#contact-name').value;
  // Show success message
  showToast(`Thank you, ${name}! Your message has been received.`);
  form.reset();
}

// ════════════════════════════════════════
//  PORTFOLIO TABS
// ════════════════════════════════════════

function switchPortfolioTab(tabName, btn) {
  // Update tab buttons
  document.querySelectorAll('.portfolio-tab').forEach(t => t.classList.remove('portfolio-tab--active'));
  btn.classList.add('portfolio-tab--active');

  // Update panels
  document.querySelectorAll('.portfolio-panel').forEach(p => p.classList.remove('portfolio-panel--active'));
  document.getElementById(`panel-${tabName}`).classList.add('portfolio-panel--active');
}

// ════════════════════════════════════════
//  NAVIGATION
// ════════════════════════════════════════

function initNavigation() {
  // ── Active section highlighting ──
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.navbar__link[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('navbar__link--active',
            link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-30% 0px -70% 0px' });

  sections.forEach(section => observer.observe(section));

  // ── Mobile menu ──
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinksContainer.classList.toggle('open');
    });

    // Close menu on link click
    navLinksContainer.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinksContainer.classList.remove('open');
      });
    });
  }

  // ── Navbar scroll effect ──
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
      navbar.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
  });
}

// ════════════════════════════════════════
//  SCROLL REVEAL
// ════════════════════════════════════════

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ════════════════════════════════════════
//  UTILITY FUNCTIONS
// ════════════════════════════════════════

function renderSocialIcons(social) {
  const icons = {
    googleScholar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>`,
    linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
    scopus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.201 18.6c-2.64 0-4.026-1.38-4.344-2.76l1.836-.78c.264.96 1.02 1.74 2.46 1.74 1.272 0 2.148-.636 2.148-1.668 0-1.14-.876-1.56-2.28-2.1l-.588-.228c-1.848-.72-3.06-1.62-3.06-3.54 0-1.764 1.344-3.108 3.444-3.108 1.5 0 2.58.516 3.348 1.884l-1.728.96c-.396-.708-.828-1.044-1.62-1.044-.744 0-1.212.468-1.212 1.08 0 .756.468 1.068 1.728 1.536l.588.228c2.172.84 3.408 1.716 3.408 3.66 0 2.136-1.68 3.144-3.96 3.144h-.168z"/></svg>`,
    researchGate: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c-1.76 0-3.186 1.426-3.186 3.186s1.426 3.186 3.186 3.186S22.772 4.946 22.772 3.186 21.346 0 19.586 0zM7.304 2.449c-3.795 0-6.873 2.608-6.873 6.674 0 3.318 2.156 5.972 5.275 6.56v.004c-.626.29-1.258.875-1.633 1.77-.462 1.1-.534 2.496-.534 3.93v.114c0 .39.316.707.706.707h4.762c.39 0 .707-.317.707-.707v-.114c0-1.434-.072-2.83-.534-3.93-.375-.895-1.007-1.48-1.633-1.77v-.004c3.119-.588 5.275-3.242 5.275-6.56 0-4.066-3.078-6.674-6.873-6.674H7.304zm0 2.156h1.35c2.602 0 4.523 1.676 4.523 4.518 0 2.842-1.921 4.518-4.523 4.518H7.304c-2.602 0-4.523-1.676-4.523-4.518 0-2.842 1.921-4.518 4.523-4.518z"/></svg>`,
    orcid: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.05-2.544 4.05-3.713 0-1.903-1.381-3.731-4.05-3.731h-2.297z"/></svg>`
  };

  return Object.entries(social).map(([key, url]) => {
    const label = key.replace(/([A-Z])/g, ' $1').trim();
    return `<a href="${url}" target="_blank" rel="noopener" class="icon-link" aria-label="${label}" title="${label}">${icons[key] || ''}</a>`;
  }).join('');
}

function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
