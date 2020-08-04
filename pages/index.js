import Head from 'next/head';
import { useState, useLayoutEffect } from 'react';

const Home = () => {
  const titleWords = ['Web 3.0:', 'Research.', 'Develop.', 'Ship.'];
  const initialWordIdx = -1;
  let titleInterval = null;

  const [highlightedWordIdx, setHighlightedWordIdx] = useState(initialWordIdx);

  useLayoutEffect(() => {
    titleInterval = setInterval(() => {
      let nextIdxToHighlight = highlightedWordIdx + 1;

      if (highlightedWordIdx > titleWords.length) {
        nextIdxToHighlight = initialWordIdx;
      }

      setHighlightedWordIdx(nextIdxToHighlight);
    }, 3000);

    return () => clearInterval(titleInterval);
  }, [titleWords, titleInterval]);

  return (
    <div className="container">
      <Head>
        <title>
          Research. Develop. Ship. Web 3.0 for the best blockchain teams |
          Atomik Labs
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          {titleWords.map((word, idx) => (
            <span className={ idx === highlightedWordIdx ? 'animated' : ''} key={word+idx}>{word}</span>
          ))}
        </h1>
      </main>

      <footer>
        <p>
          <img src="/logo.png" alt="Atomik Labs logo" /> Atomik Labs
        </p>
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

        main {
          padding: 5rem 0;
          flex: 1;
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

        footer img {
          max-height: 3rem;
          vertical-align: middle;
          margin-left: 0.5rem;
        }

        footer a {
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
          font-size: 4rem;
        }

        h2 {
          font-size: 3rem;
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

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid, .title {
            width: 100%;
            flex-direction: column;
          }
        }

        .animated {
          color: #f35626;
          background-image: linear-gradient(92deg, #f35626, #feab3a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: hue 3s infinite linear;
        }

        @keyframes hue {
          from {
            filter: hue-rotate(0deg);
          }
          to {
            filter: hue-rotate(-180deg);
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
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
