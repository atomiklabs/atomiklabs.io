import Head from 'next/head';
import { useState, useEffect } from 'react';

const Home = () => {
  const wordAnimationDurationInMs = 3000;
  const titleWords = ['Explore.', 'Develop.', 'Ship.'];
  let titleInterval = null;

  const [highlightedWordIdx, setHighlightedWordIdx] = useState(0);
  const [isTitleIntervalSuspended, setIsTitleIntervalSuspended] = useState(
    false,
  );

  useEffect(() => {
    titleInterval = setInterval(() => {
      if (isTitleIntervalSuspended) {
        return;
      }

      let nextIdxToHighlight = highlightedWordIdx + 1;

      if (highlightedWordIdx > titleWords.length) {
        nextIdxToHighlight = -1;
      }

      setHighlightedWordIdx(nextIdxToHighlight);
    }, wordAnimationDurationInMs);

    return () => clearInterval(titleInterval);
  }, [titleWords, titleInterval, isTitleIntervalSuspended, highlightedWordIdx]);

  return (
    <div className="container">
      <Head>
        <title>
          Explore. Develop. Ship. Web 3.0 solutions for the best blockchain
          teams and decentralised systems | Atomik Labs
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <p>
          <img src="/logo.png" alt="Atomik Labs logo" /> Atomik Labs
        </p>
      </header>

      <main>
        <h1 className="title">
          {titleWords.map((word, idx) => (
            <a
              onMouseEnter={() => {
                setIsTitleIntervalSuspended(true);
                setHighlightedWordIdx(idx);
              }}
              onMouseLeave={() => {
                setIsTitleIntervalSuspended(false);
                setHighlightedWordIdx(idx);
              }}
              href={`#${word}`}
              className={
                !isTitleIntervalSuspended && idx === highlightedWordIdx
                  ? 'animated'
                  : ''
              }
              key={word + idx}
            >
              {word}
            </a>
          ))}
        </h1>
      </main>

      <article>
        <section id={titleWords[0]} className="card">
          <h2>{titleWords[0]}</h2>
          <p>
            We are happy to share our expertise with you. You can learn about
            the blockchain and decentralised systems. You will find us
            describing various problems of different levels (basic, moderate,
            advanced).
          </p>
        </section>
        <section id={titleWords[1]} className="card">
          <h2>{titleWords[1]}</h2>
        </section>
        <section id={titleWords[2]} className="card">
          <h2>{titleWords[2]}</h2>
        </section>
      </article>

      <footer>
        <p>Web 3.0: blockchain &amp; decentralised systems.</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header {
          display: flex;
          width: 100%;
          justify-content: flex-start;
          font-weight: 600;
          font-size: 1.25rem;
          position: sticky;
          top: 0;
          background: #fff;
          z-index: 50;
          box-shadow: 0 0 2rem 0 #fff;
        }

        header img {
          max-height: 3rem;
          vertical-align: middle;
          margin-left: 0.5rem;
        }

        header a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        main {
          margin-top: -5.5rem;
          flex: 1 1 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          font-size: 1rem;
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          display: flex;
          flex-direction: column;
          margin: 0;
          line-height: 1.15;
        }

        .title span {
          display: inline-block;
        }

        h1 {
          font-size: 5rem;
        }

        h2 {
          font-size: 4rem;
        }

        .title img {
          align-self: center;
          margin-top: 2rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid,
          .title {
            width: 100%;
            flex-direction: column;
          }
        }

        .animated,
        main a:hover {
          color: #f35626;
          background-image: linear-gradient(92deg, #f35626, #feab3a);
          -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
          animation: hue ${wordAnimationDurationInMs / 1000}s infinite linear;
        }

        main a:hover {
          text-decoration: underline;
        }

        @keyframes hue {
          from {
            filter: hue-rotate(0deg);
          }
          to {
            filter: hue-rotate(-360deg);
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 16px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
