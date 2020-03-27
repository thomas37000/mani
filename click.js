function useTemplate() {
    // get the template
    // const template = document.querySelector('#article-template');
  
    // prepare the data
    const articlesData = [
      {title: 'Merci', content: 'Votre formulaire a bien été envoyé.'},
    ]
  
    // for each article
    for (let i = 0; i < articlesData.length; i++) {
      // get article data
      const articleData = articlesData[i]
  
      // clone content of the template
      const article = template.content.cloneNode(true);
  
      // fill article title
      article.querySelector('h1').textContent = articleData.title
  
      // TODO: fill article content
  
      document.body.appendChild(article)
    }
  }
  