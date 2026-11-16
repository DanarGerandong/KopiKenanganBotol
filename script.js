function renderPage() {
  const config = configData;
  const { profile, categories, social } = config;
  const theme = profile.theme;

  document.body.style.backgroundColor = theme.backgroundColor;
  document.body.style.color = theme.textColor;

  if (theme.backgroundImage) {
    document.body.style.backgroundImage = `url('${theme.backgroundImage}')`;
    document.body.classList.add('with-background-image');
  }

  const container = document.createElement('div');
  container.className = 'container fade-in';

  const logoTopLeft = document.createElement('img');
  logoTopLeft.src = 'Logo KopKen Botol.png';
  logoTopLeft.alt = 'Logo KopKen Botol';
  logoTopLeft.className = 'logo-top-left';
  document.body.appendChild(logoTopLeft);

  const categoriesSection = document.createElement('div');
  categoriesSection.className = 'categories-section';

  categories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';

    const header = document.createElement('div');
    header.className = 'category-header';

    if (category.headerImage) {
      const headerImgLeft = document.createElement('img');
      headerImgLeft.src = category.headerImage;
      headerImgLeft.alt = '';
      headerImgLeft.className = 'header-image';
      header.appendChild(headerImgLeft);

      const headerText = document.createElement('span');
      headerText.className = 'header-text';
      headerText.textContent = category.title;
      header.appendChild(headerText);

      const headerImgRight = document.createElement('img');
      headerImgRight.src = category.headerImage;
      headerImgRight.alt = '';
      headerImgRight.className = 'header-image';
      header.appendChild(headerImgRight);
    } else {
      header.textContent = category.title;
    }

    categoryDiv.appendChild(header);

    const linksDiv = document.createElement('div');
    linksDiv.className = 'category-links';

    category.links.forEach(link => {
      const linkButton = document.createElement('a');
      linkButton.href = link.url;
      linkButton.target = '_blank';
      linkButton.rel = 'noopener noreferrer';
      linkButton.className = 'link-button';
      linkButton.style.backgroundColor = theme.buttonColor || '#8B4513';
      linkButton.style.color = '#ffffff';

      let iconHTML = '';
      if (link.image) {
        iconHTML = `<img src="${link.image}" alt="${link.title}" class="link-icon-image">`;
      } else if (link.icon) {
        iconHTML = `<span class="link-icon">${link.icon}</span>`;
      }

      linkButton.innerHTML = `
        ${iconHTML}
        <span>${link.title}</span>
      `;

      linkButton.addEventListener('mouseenter', () => {
        linkButton.style.backgroundColor = theme.buttonHoverColor || '#A0522D';
      });

      linkButton.addEventListener('mouseleave', () => {
        linkButton.style.backgroundColor = theme.buttonColor || '#8B4513';
      });

      linksDiv.appendChild(linkButton);
    });

    categoryDiv.appendChild(linksDiv);
    categoriesSection.appendChild(categoryDiv);
  });

  container.appendChild(categoriesSection);

  const socialSection = document.createElement('div');
  socialSection.className = 'social-section';
  socialSection.innerHTML = `
    <div class="social-item">
      <span>📧</span>
      <span>${social.email}</span>
    </div>
    <div class="social-item">
      <span>📱</span>
      <span>${social.phone}</span>
    </div>
  `;

  container.appendChild(socialSection);
  document.body.appendChild(container);
}

renderPage();
