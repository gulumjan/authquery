import scss from "./News.module.scss";

const News = () => {
  return (
    <section className={scss.News}>
      <div className="container">
        <div className={scss.content}>
          <h1>News</h1>
        </div>
      </div>
    </section>
  );
};

export default News;
