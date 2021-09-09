import css from "./footer.module.css";
export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`container ${css.footer_flex}`}>
      <div className={css.footer_blocks}>
              <h1 className={css.footer_h1}>Homefast</h1>
              <link className={css.footer_a} to="/">About as</link>
              <link className={css.footer_a} to="/">Our Awards</link>
              <link className={css.footer_a} to="/">Corporate</link>
              <link className={css.footer_a} to="/">Advertisement</link>
              <link className={css.footer_a} to="/">Human Resources</link>
              <link className={css.footer_a} to="/">Sitemap</link>
          </div>
          <div className={css.footer_blocks}>
              <h1 className={css.footer_h1}>Homefast</h1>
              <link className={css.footer_a} to="/">About as</link>
              <link className={css.footer_a} to="/">Our Awards</link>
              <link className={css.footer_a} to="/">Corporate</link>
              <link className={css.footer_a} to="/">Advertisement</link>
              <link className={css.footer_a} to="/">Human Resources</link>
              <link className={css.footer_a} to="/">Sitemap</link>
          </div>
          <div className={css.footer_blocks}>
              <h1 className={css.footer_h1}>Homefast</h1>
              <link className={css.footer_a} to="/">About as</link>
              <link className={css.footer_a} to="/">Our Awards</link>
              <link className={css.footer_a} to="/">Corporate</link>
              <link className={css.footer_a} to="/">Advertisement</link>
              <link className={css.footer_a} to="/">Human Resources</link>
              <link className={css.footer_a} to="/">Sitemap</link>
          </div>
      </div>
    </footer>
  );
};
