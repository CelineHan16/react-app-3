function ArticleList(props) {
  return props.src.map((article) => (
    <article>
      <h3>
        <a href={article.url}>{article.title}</a>
      </h3>
      <p>{article.teaser}</p>
    </article>
  ));
}

export default ArticleList;