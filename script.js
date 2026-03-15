const PROJECTS = [
    {
        id: 1,
        title: "Cassino Slots",
        category: "Crash Game",
        thumbnailUrl: "images/Rabbit.image.png",
        imageUrl: "images/Rabbit.image.png",
        description: "Art to slots games, personally developed for cassino games",
        fullDescription: "A revolutionary art style to crash game, slots social art, the visual style focuses on high contrast neon elements against deep void backgrounds to maximize visual immersion.",
        tags: ["Crash Game", "Multiplayer", "Cyberpunk"],
        image: "linear-gradient(45deg, #2a0f45 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net",
        details: [
            "Implemented responsive UI components for desktop and mobile.",
            "Collaborated with sound designers to sync visuals to audio cues.",
            "Integrated multiplayer lobby and real-time leaderboards."
        ]
    },
    {
        id: 2,
        title: "Peças institucionais",
        category: "Video Slot",
        thumbnailUrl: "images/institucional art.png",
        imageUrl: "images/institucional art.png",
        description: "Patch developed to events from company",
        fullDescription: "A set of institutional visual pieces developed for company events and communication materials.",
        tags: ["Slots", "3D Animation", "Mobile First"],
        image: "linear-gradient(45deg, #450f1f 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net/gallery/239044541/Happy-children-day-art",
        details: [
            "Created templated animations for quarterly campaigns.",
            "Ensured assets scaled correctly across print and digital."
        ]
    },
    {
        id: 3,
        title: "Cassino ao vivo",
        category: "Instant Win",
        thumbnailUrl: "images/cassino ao vivo.png",
        imageUrl: "images/cassino ao vivo.png",
        description: "Procedurally generated runner game with instant betting mechanics.",
        fullDescription: "Players bet on how far the runner will go in this procedurally generated sci-fi world. The visual style uses a unique wireframe aesthetic blended with realistic lighting effects to create a retro-futuristic vibe.",
        tags: ["Instant Win", "Procedural", "Sci-Fi"],
        image: "linear-gradient(45deg, #0f2a45 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net",
        details: [
            "Designed wireframe shaders using GLSL.",
            "Built asset pipeline to support procedural environments.",
            "Optimized for 60fps on mobile browsers."
        ]
    },
    {
        id: 4,
        title: "Doodle art",
        category: "Interactive Story",
        thumbnailUrl: "images/borb doodlew.png",
        imageUrl: "images/borb doodlew.png",
        description: "Narrative-driven bonus round experience for premium slots.",
        fullDescription: "A fully interactive bonus game where players explore a haunted manor to uncover multipliers. The art direction leans heavily into gothic horror with stylized, hand-painted textures and atmospheric lighting.",
        tags: ["Interactive", "Story", "Horror"],
        image: "linear-gradient(45deg, #1f0f45 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net",
        details: [
            "Created branching dialogue system with visual nodes.",
            "Illustrated 50+ hand-painted backgrounds."
        ]
    },
    {
        id: 5,
        title: "Criativos visuais",
        category: "Table Game",
        thumbnailUrl: "images/criativos png.png",
        imageUrl: "images/criativos png.png",
        description: "Modern reimagining of classic dice games with holographic UI.",
        fullDescription: "We stripped away the felt table and replaced it with a holographic projection interface. Physics-based dice rolls combined with clean, data-driven UI elements create a sophisticated gaming experience for the modern player.",
        tags: ["Table Game", "UI Design", "Holographic"],
        image: "linear-gradient(45deg, #0f453f 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net",
        details: [
            "Prototype built with Three.js for real-time dice physics.",
            "Developed custom shader for holographic overlays."
        ]
    },
    {
        id: 6,
        title: "Marketplace",
        category: "Jackpot System",
        thumbnailUrl: "images/marketplace.png",
        imageUrl: "images/marketplace.png",
        description: "Network-wide progressive jackpot UI and celebration effects.",
        fullDescription: "A cohesive visual system for a multi-game jackpot network. Includes the design of the jackpot meters, trigger animations, and the massive 'Big Win' celebration sequences that take over the screen.",
        tags: ["Jackpot", "VFX", "System Design"],
        image: "linear-gradient(45deg, #453a0f 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net",
        details: [
            "Implemented live updating jackpot meters with SVG animations.",
            "Designed victory sequences that trigger across all connected games."
        ]
    }
];

const progressBar = document.getElementById('progressBar');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const projectsGrid = document.getElementById('projectsGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalHeader = document.getElementById('modalHeader');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const modalDetails = document.getElementById('modalDetails');
const modalCoverImage = document.getElementById('modalCoverImage');
const launchProjectBtn = document.getElementById('launchProjectBtn');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const orb1 = document.getElementById('orb1');
const orb2 = document.getElementById('orb2');

function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    progressBar.style.transform = `scaleX(${scrollPercent})`;
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
}

if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
}

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle?.classList.remove('active');
        mobileMenu?.classList.remove('active');
        document.body.style.overflow = '';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);

        if (!target) return;

        e.preventDefault();

        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;

    if (orb1) {
        orb1.style.transform = `translate(${x * 2}px, ${y * 2}px)`;
    }

    if (orb2) {
        orb2.style.transform = `translate(${-x * 2}px, ${-y * 2}px)`;
    }
});

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

function observeFadeElements() {
    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}

function renderProjects() {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = PROJECTS.map(project => `
        <div class="project-card fade-in" data-project-id="${project.id}">
            <div class="project-image">
                <div
                    class="project-bg"
                    style="background: ${project.thumbnailUrl || project.imageUrl
                        ? `url('${project.thumbnailUrl || project.imageUrl}') center/cover no-repeat`
                        : project.image};"
                ></div>

                <div class="project-overlay"></div>

                <div class="project-hover-content">
                    <p class="project-category">${project.category}</p>
                    <button class="btn btn-outline" type="button">View Details</button>
                </div>
            </div>

            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>

            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId, 10);
            const project = PROJECTS.find(p => p.id === projectId);

            if (project) {
                openModal(project);
                trackProjectView(projectId);
            }
        });
    });

    observeFadeElements();
}

function openModal(project) {
    if (!modalOverlay) return;

    if (project.imageUrl) {
        modalCoverImage.src = project.imageUrl;
        modalCoverImage.alt = project.title;
        modalHeader.style.backgroundImage = `url('${project.imageUrl}')`;
        modalHeader.style.backgroundSize = 'cover';
        modalHeader.style.backgroundPosition = 'center';
    } else {
        modalHeader.style.background = project.image;
    }

    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.fullDescription;
    modalTags.innerHTML = project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');
    modalDetails.innerHTML = project.details.map(detail => `<p>${detail}</p>`).join('');

    if (launchProjectBtn && project.behanceUrl) {
        launchProjectBtn.dataset.url = project.behanceUrl;
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose?.addEventListener('click', closeModal);

modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

launchProjectBtn?.addEventListener('click', () => {
    const url = launchProjectBtn.dataset.url;
    if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
        closeModal();
    }
});

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name')?.value.trim(),
        email: document.getElementById('email')?.value.trim(),
        message: document.getElementById('message')?.value.trim()
    };

    if (!formData.name || !formData.email || !formData.message) {
        showToast('Please fill in all fields');
        return;
    }

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to send');
        }

        showToast('Message sent! Thanks for reaching out.');
        contactForm.reset();
    } catch (error) {
        showToast('Failed to send message. Please try again.');
    } finally {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }
});

function showToast(message) {
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

async function trackProjectView(projectId) {
    try {
        await fetch(`/api/projects/${projectId}/view`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ projectId })
        });
    } catch (error) {
        console.log('Failed to track view');
    }
}

function setupHeroCarousel() {
    const carousel = document.getElementById('heroCarousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.carousel-slide'));
    if (slides.length === 0) return;

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        clone.classList.add('clone');
        track.appendChild(clone);
    });
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('scroll', updateActiveNav);

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    observeFadeElements();
    setupHeroCarousel();
    updateProgressBar();
    updateActiveNav();
});