const PROJECTS = [
    {
        id: 1,
        title: "Criativos iGaming",
        category: "Crash Game",
        thumbnailUrl: "images/PROJETOS/CASSINO SLOTS IMAGE.png",
        imageUrl: "images/PROJETOS/CASSINO SLOTS IMAGE.png",
        description: "Arte para jogos de slots, desenvolvida para experiências de cassino.",
        fullDescription: "A narrativa visual explora movimento, competição e recompensas, criando composições dinâmicas que convidam o usuário a interagir com a plataforma.",
        tags: ["Crash Game", "Multiplayer", "Cyberpunk"],
        image: "linear-gradient(45deg, #2a0f45 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net/gallery/245352657/CRIATIVOS-IGAMING",
        details: [
            "Personagens 3D carismáticos para gerar identificação imediata.",
            "Tipografia forte e dinâmica para reforçar mensagens promocionais",
            "Composição centrada no personagem, com o cenário como suporte narrativo."
        ]
    },
    {
        id: 2,
        title: "Peças institucionais",
        category: "Video Slot",
        thumbnailUrl: "images/institucional%20art.png",
        imageUrl: "images/institucional%20art.png",
        description: "Peças visuais institucionais criadas para eventos corporativos.",
        fullDescription: "Conjunto de peças institucionais desenvolvidas para eventos e materiais de comunicação da empresa.",
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
        title: "landing pages",
        category: "Instant Win",
        thumbnailUrl: "images/PROJETOS/criativos.png",
        imageUrl: "images/PROJETOS/criativos.png",
        description: "Landing pages de alta conversão com estética sci‑fi e shaders wireframe.",
        fullDescription: "Landing pages otimizadas para conversão, com estética retro‑futurista e efeitos wireframe que reforçam a narrativa visual em dispositivos móveis e desktop.",
        tags: ["Instant Win", "Procedural", "Sci-Fi"],
        image: "linear-gradient(45deg, #0f2a45 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net/gallery/248605695/Pressel-Landing-Page-de-Conversao",
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
        thumbnailUrl: "images/PROJETOS/borb doodlew.png",
        imageUrl: "images/PROJETOS/borb doodlew.png",
        description: "Série de ilustrações doodle e experiências narrativas interativas.",
        fullDescription: "Experiência narrativa interativa com ilustrações doodle, explorando cenários lúdicos e texturas pintadas à mão para criar uma atmosfera única.",
        tags: ["Interactive", "Story", "Horror"],
        image: "linear-gradient(45deg, #1f0f45 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net/gallery/220459373/Doodle-art",
        details: [
            "Created branching dialogue system with visual nodes.",
            "Illustrated 50+ hand-painted backgrounds."
        ]
    },
    {
        id: 5, 
        title: "Website Commerce",
        category: "Table Game",
        thumbnailUrl: "images/PROJETOS/visual commerce.png",
        imageUrl: "images/PROJETOS/visual commerce.png",
        description: "Website de comércio visual com foco em experiência de compra imersiva.",
        fullDescription: "Reimaginação moderna de e‑commerce com UI holográfica e interações visuais que destacam produtos e melhoram a conversão.",
        tags: ["Table Game", "UI Design", "Holographic"],
        image: "linear-gradient(45deg, #0f453f 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net/gallery/250373661/WEBSITE-NORTHEN-HOSUE",
        details: [
            "Prototype built with Three.js for real-time dice physics.",
            "Developed custom shader for holographic overlays."
        ]
    },
    {
        id: 6,
        title: "Branding",
        category: "Jackpot System",
        thumbnailUrl: "images/marketplace.png",
        imageUrl: "images/marketplace.png",
        description: "Sistema visual de marca e identidade para marketplace.",
        fullDescription: "Sistema visual coeso para identidade de marca, incluindo métricas visuais, animações e sequências de celebração para campanhas de alto impacto.",
        tags: ["Jackpot", "VFX", "System Design"],
        image: "linear-gradient(45deg, #453a0f 0%, #120626 100%)",
        behanceUrl: "https://www.behance.net/gallery/220167369/PIC-NIC-SN-",
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
const modalDetails = document.getElementById('modalDetails');
const modalCoverImage = document.getElementById('modalCoverImage');
const launchProjectBtn = document.getElementById('launchProjectBtn');
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
                    <button class="btn btn-outline" type="button">Ver detalhes</button>
                </div>
            </div>

            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
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
    const buttonLeft = carousel.querySelector('.carousel-button-left');
    const buttonRight = carousel.querySelector('.carousel-button-right');
    const indicators = Array.from(carousel.querySelectorAll('.carousel-indicator'));
    
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.carousel-slide'));
    if (slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Clone slides for infinite scroll
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        clone.classList.add('clone');
        track.appendChild(clone);
    });

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('current-slide', index === currentIndex % totalSlides);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Button event listeners
    if (buttonRight) {
        buttonRight.addEventListener('click', nextSlide);
    }
    if (buttonLeft) {
        buttonLeft.addEventListener('click', prevSlide);
    }

    // Indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Auto-play carousel
    let autoplayInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });

    // Initial update
    updateCarousel();
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('scroll', updateActiveNav);

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    observeFadeElements();
    setupHeroCarousel();
    updateProgressBar();
    updateActiveNav();
    initSkillsNetwork();
});

// Skills Network Animation
function initSkillsNetwork() {
    const canvas = document.getElementById('skills-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const pills = document.querySelectorAll('.skill-pill');
    const core = document.querySelector('.skills-core');
    const network = document.querySelector('.skills-network');

    let mouseX = 0;
    let mouseY = 0;
    let energyWaves = [];

    function resizeCanvas() {
        const rect = network.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    function createEnergyWave(x, y) {
        energyWaves.push({
            x: x,
            y: y,
            radius: 0,
            maxRadius: 200,
            opacity: 1,
            speed: 2
        });
    }

    function updateEnergyWaves() {
        energyWaves = energyWaves.filter(wave => {
            wave.radius += wave.speed;
            wave.opacity -= 0.02;
            return wave.opacity > 0;
        });
    }

    function drawEnergyWaves() {
        energyWaves.forEach(wave => {
            ctx.save();
            ctx.globalAlpha = wave.opacity;
            ctx.strokeStyle = `rgba(138, 60, 255, ${wave.opacity * 0.3})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        });
    }

    function drawConnections() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const coreRect = core.getBoundingClientRect();
        const networkRect = network.getBoundingClientRect();

        const coreX = coreRect.left + coreRect.width / 2 - networkRect.left;
        const coreY = coreRect.top + coreRect.height / 2 - networkRect.top;

        pills.forEach((pill, index) => {
            const pillRect = pill.getBoundingClientRect();
            const pillX = pillRect.left + pillRect.width / 2 - networkRect.left;
            const pillY = pillRect.top + pillRect.height / 2 - networkRect.top;

            // Create animated gradient
            const time = Date.now() * 0.001;
            const offset = Math.sin(time + index) * 0.5 + 0.5;

            const gradient = ctx.createLinearGradient(coreX, coreY, pillX, pillY);
            gradient.addColorStop(0, `rgba(138, 60, 255, ${0.4 + offset * 0.3})`);
            gradient.addColorStop(0.5, `rgba(255, 71, 218, ${0.3 + offset * 0.2})`);
            gradient.addColorStop(1, `rgba(66, 232, 255, ${0.2 + offset * 0.1})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2 + Math.sin(time * 2 + index) * 0.3;
            ctx.shadowColor = 'rgba(138, 60, 255, 0.3)';
            ctx.shadowBlur = 8;

            // Draw flowing line with animation
            const distance = Math.sqrt((pillX - coreX) ** 2 + (pillY - coreY) ** 2);
            const steps = 50;
            const flowSpeed = 0.02;

            ctx.beginPath();
            for (let i = 0; i <= steps; i++) {
                const t = i / steps;
                const x = coreX + (pillX - coreX) * t;
                const y = coreY + (pillY - coreY) * t;

                // Add wave effect
                const wave = Math.sin(t * Math.PI * 4 + time * flowSpeed + index) * 3;
                const perpX = -(pillY - coreY) / distance * wave;
                const perpY = (pillX - coreX) / distance * wave;

                if (i === 0) {
                    ctx.moveTo(x + perpX, y + perpY);
                } else {
                    ctx.lineTo(x + perpX, y + perpY);
                }
            }
            ctx.stroke();

            // Reset shadow
            ctx.shadowBlur = 0;
        });

        drawEnergyWaves();
    }

    function animate() {
        updateEnergyWaves();
        drawConnections();
        requestAnimationFrame(animate);
    }

    // Mouse interaction
    network.addEventListener('mousemove', (e) => {
        const rect = network.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

        // Parallax effect on pills
        pills.forEach((pill, index) => {
            const pillRect = pill.getBoundingClientRect();
            const pillCenterX = pillRect.left + pillRect.width / 2 - rect.left;
            const pillCenterY = pillRect.top + pillRect.height / 2 - rect.top;

            const deltaX = (mouseX - pillCenterX) * 0.02;
            const deltaY = (mouseY - pillCenterY) * 0.02;

            pill.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });

        // Create energy wave on mouse move
        if (Math.random() < 0.05) { // 5% chance per move
            createEnergyWave(mouseX, mouseY);
        }
    });

    network.addEventListener('mouseleave', () => {
        pills.forEach(pill => {
            pill.style.transform = '';
        });
    });

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
}