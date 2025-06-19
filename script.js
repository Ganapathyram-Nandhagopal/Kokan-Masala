// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Close mobile menu
    if (navMenu) {
      navMenu.classList.remove("active")
    }

    // Handle smooth scrolling
    const href = link.getAttribute("href")
    if (href && href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Calculate offset for fixed navbar
        const navbarHeight = document.querySelector(".navbar").offsetHeight
        const targetPosition = targetElement.offsetTop - navbarHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    }
  })
})

// Enhanced smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href").substring(1)
    const target = document.getElementById(targetId)

    if (target) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight
      const targetPosition = target.offsetTop - navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (navMenu && navToggle) {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove("active")
    }
  }
})

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)"
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      navbar.style.boxShadow = "none"
    }
  }
})

// Active navigation highlighting
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  const navbarHeight = document.querySelector(".navbar").offsetHeight

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - navbarHeight - 100
    const sectionHeight = section.offsetHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
}

window.addEventListener("scroll", updateActiveNav)
window.addEventListener("load", updateActiveNav)

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add fade-in class to elements and observe them
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".feature-card, .menu-item, .testimonial-card, .contact-card")

  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

// Order button functionality
document.querySelectorAll(".btn").forEach((button) => {
  if (button.textContent.includes("Order")) {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      alert("Order functionality would be implemented here. This could redirect to an ordering system or open a modal.")
    })
  }
})

// Enhanced menu button functionality
document.querySelectorAll(".nav-cta, .btn-primary").forEach((button) => {
  if (button.textContent.includes("Order") || button.textContent.includes("Explore Menu")) {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      const menuSection = document.getElementById("menu")
      if (menuSection) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight
        const targetPosition = menuSection.offsetTop - navbarHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  }
})

// Add loading animation for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")

  images.forEach((img) => {
    img.addEventListener("load", () => {
      img.style.opacity = "1"
    })

    // Set initial opacity
    img.style.opacity = "0"
    img.style.transition = "opacity 0.3s ease"

    // If image is already loaded (cached)
    if (img.complete) {
      img.style.opacity = "1"
    }
  })
})

// Debug function to check if sections exist
function debugNavigation() {
  console.log("Checking navigation sections:")
  const sections = ["home", "about", "menu", "services", "contact"]

  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId)
    console.log(`${sectionId}:`, element ? "Found" : "Missing")
  })
}

// Call debug function on load
window.addEventListener("load", debugNavigation)
