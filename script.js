/**
 * Vinhomes Grand Park - Static Landing Page JavaScript
 * Strictly Vanilla JavaScript, no external dependencies needed.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const siteHeader = document.querySelector('.site-header');
  
  const handleScroll = () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile navbar auto-close upon clicking a nav link
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .hero-cta-btn');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Use Bootstrap Collapse if available
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        } else {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // 3. Highlight active nav link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  
  const highlightNavLink = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.navbar-nav .nav-link[href*="${sectionId}"]`);
      
      if (activeLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          activeLink.classList.add('active');
        } else {
          activeLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNavLink, { passive: true });
  highlightNavLink();

  // 4. Contact / Lead form handling (Chức năng "Đăng ký tư vấn" & Hiển thị Popup)
  const contactForm = document.getElementById('contactForm');
  const successModalElement = document.getElementById('consultationSuccessModal');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('fullName');
      const phoneInput = document.getElementById('phoneNumber');
      
      if (!nameInput.value.trim()) {
        nameInput.focus();
        alert('Vui lòng nhập họ và tên của Quý khách.');
        return;
      }

      if (!phoneInput.value.trim()) {
        phoneInput.focus();
        alert('Vui lòng nhập số điện thoại để chuyên viên tư vấn liên hệ.');
        return;
      }

      // Hiển thị Popup Bootstrap Modal với icon like và thông điệp
      if (successModalElement && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        const modalInstance = bootstrap.Modal.getInstance(successModalElement) || new bootstrap.Modal(successModalElement);
        modalInstance.show();
      } else {
        // Dự phòng trong trường hợp không có Bootstrap Modal
        alert('Email đã được gửi cho admin. Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.');
      }

      // Reset form sau khi gửi thành công
      contactForm.reset();
    });
  }
});
