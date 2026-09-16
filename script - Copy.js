(function() {
  // ========== FULLY DRAGGABLE WHATSAPP BUTTON ==========
  // ===== DRAGGABLE WHATSAPP BUTTON =====

const whatsappBtn = document.getElementById("draggableWhatsapp");

if (whatsappBtn) {

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    whatsappBtn.style.left = (window.innerWidth - 90) + "px";
    whatsappBtn.style.top = (window.innerHeight - 120) + "px";
    whatsappBtn.style.right = "auto";
    whatsappBtn.style.bottom = "auto";

    function startDrag(e) {
        isDragging = true;

        const rect = whatsappBtn.getBoundingClientRect();

        if (e.type === "touchstart") {
            offsetX = e.touches[0].clientX - rect.left;
            offsetY = e.touches[0].clientY - rect.top;
        } else {
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        }
    }

    function drag(e) {

        if (!isDragging) return;

        let clientX;
        let clientY;

        if (e.type === "touchmove") {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        whatsappBtn.style.left = (clientX - offsetX) + "px";
        whatsappBtn.style.top = (clientY - offsetY) + "px";

        e.preventDefault();
    }

    function stopDrag() {
        isDragging = false;
    }

    whatsappBtn.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);

    whatsappBtn.addEventListener("touchstart", startDrag, { passive: false });
    document.addEventListener("touchmove", drag, { passive: false });
    document.addEventListener("touchend", stopDrag);
}
  // UPDATED: The image URL for the second carousel slide is now working correctly.
  const carouselData = [
    {
      title: "In the headlights of digital growth",
      excerpt: "Seventy strategies, 18 campaigns, three mystical regions. Witness a journey of adventure, conversion, and brand transformation.",
      date: "30TH MAY 2026",
      readTime: "3 min read",
      category: "FEATURED STORY",
      bgImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      title: "From 2 stars to 5 stars: The review revolution",
      excerpt: "How a small business transformed their online reputation and became a market leader within 30 days.",
      date: "28TH MAY 2026",
      readTime: "5 min read",
      category: "REVIEW MANAGEMENT",
      bgImage: "https://res.cloudinary.com/dqbqud8gh/image/upload/WhatsApp_Image_2026-05-31_at_21.13.38_ililk1.jpg"
    },
    {
      title: "SEO in 2026: Voice search & AI overviews",
      excerpt: "Master the latest SEO trends including voice search optimization and featured snippets to dominate Google rankings.",
      date: "25TH MAY 2026",
      readTime: "8 min read",
      category: "SEO STRATEGY",
      bgImage: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      title: "Organic social media growth without ads",
      excerpt: "Build an engaged community on Instagram, LinkedIn, and Facebook using content strategies that attract loyal followers naturally.",
      date: "22ND MAY 2026",
      readTime: "7 min read",
      category: "SOCIAL MEDIA",
      bgImage: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      title: "High-performance websites in 2026",
      excerpt: "Speed, mobile optimization, and user experience can double your conversions. Learn the essentials of modern web design.",
      date: "20TH MAY 2026",
      readTime: "6 min read",
      category: "WEB DEVELOPMENT",
      bgImage: "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  const blogData = [
    {
      title: "How to Get More 5-Star Reviews & Boost Your Ratings",
      excerpt: "Discover proven strategies to collect authentic customer reviews and turn satisfied customers into advocates.",
      date: "MAY 28, 2026",
      readTime: "6 min read",
      category: "Review Management",
      image: "https://res.cloudinary.com/dqbqud8gh/image/upload/WhatsApp_Image_2026-05-31_at_21.13.38_ililk1.jpg"
    },
    {
      title: "SEO in 2026: Voice Search, AI & Featured Snippets",
      excerpt: "Master the latest SEO trends including voice search optimization and featured snippets to dominate rankings.",
      date: "MAY 25, 2026",
      readTime: "8 min read",
      category: "SEO",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "7 Digital Marketing Strategies That Actually Work",
      excerpt: "From content marketing to social media ads, learn proven strategies delivering real ROI for businesses.",
      date: "MAY 22, 2026",
      readTime: "10 min read",
      category: "Digital Marketing",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Organic Social Media Growth Without Ads",
      excerpt: "Build an engaged community on Instagram, LinkedIn, and Facebook using content that resonates.",
      date: "MAY 18, 2026",
      readTime: "7 min read",
      category: "Social Media",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Why Your Business Needs a High-Performance Website",
      excerpt: "Speed, mobile optimization, and user experience can double your conversions.",
      date: "MAY 15, 2026",
      readTime: "6 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "How to Build a Trustworthy Brand Identity",
      excerpt: "From logo design to brand voice, create a cohesive identity that builds customer confidence.",
      date: "MAY 10, 2026",
      readTime: "9 min read",
      category: "Branding",
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  // Build Carousel
  const container = document.getElementById('carouselContainer');
  const dotsContainer = document.getElementById('carouselDots');
  let currentIndex = 0;
  let autoInterval;
  let timerProgressElement;
  let isTransitioning = false;
  const SLIDE_DURATION = 4000;

  if (container && dotsContainer) {
    function buildCarousel() {
      carouselData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.setAttribute('data-index', index);
        slide.innerHTML = `
          <div class="carousel-bg" style="background-image: url('${item.bgImage}');"></div>
          <div class="carousel-overlay"></div>
          <div class="carousel-content">
            <span class="carousel-category">${item.category}</span>
            <h1 class="carousel-title">${item.title}</h1>
            <p class="carousel-excerpt">${item.excerpt}</p>
            <div class="carousel-meta">
              <span><i class="far fa-calendar-alt"></i> ${item.date}</span>
              <span><i class="far fa-clock"></i> ${item.readTime}</span>
            </div>
            <a href="#" class="carousel-btn">EXPLORE THIS STORY →</a>
          </div>
        `;
        container.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });
    }

    function goToSlide(index) {
      if (isTransitioning || index === currentIndex) return;
      isTransitioning = true;
      const slides = document.querySelectorAll('.carousel-slide');
      const dots = document.querySelectorAll('.dot');
      slides[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');
      currentIndex = index;
      slides[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
      resetTimer();
      setTimeout(() => { isTransitioning = false; }, 1000);
    }

    function nextSlide() {
      let next = currentIndex + 1;
      if (next >= carouselData.length) next = 0;
      goToSlide(next);
    }

    function resetTimer() {
      if (timerProgressElement) {
        timerProgressElement.style.animation = 'none';
        timerProgressElement.offsetHeight;
        timerProgressElement.style.animation = 'progressForward 4s linear forwards';
      }
    }

    function startAutoRotation() {
      if (autoInterval) clearInterval(autoInterval);
      autoInterval = setInterval(() => { nextSlide(); }, SLIDE_DURATION);
    }

    buildCarousel();
    startAutoRotation();
    setTimeout(() => {
      timerProgressElement = document.getElementById('timerProgress');
      if (timerProgressElement) {
        timerProgressElement.style.animation = 'progressForward 4s linear forwards';
      }
    }, 100);
  }

  // Build Blog Grid
  const grid = document.getElementById('blogGrid');
  if (grid) {
    grid.innerHTML = '';
    blogData.forEach(blog => {
      const card = document.createElement('div');
      card.className = 'blog-card';
      card.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}">
        <div class="blog-card-content">
          <span class="blog-card-category">${blog.category}</span>
          <h3 class="blog-card-title">${blog.title}</h3>
          <p class="blog-card-excerpt">${blog.excerpt.substring(0, 100)}...</p>
          <div class="blog-card-meta">
            <span><i class="far fa-calendar-alt"></i> ${blog.date}</span>
            <span><i class="far fa-clock"></i> ${blog.readTime}</span>
            <a href="#" class="read-more">Read →</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
})();