import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const fireworks = [
  { x: "11%", y: "18%", delay: "0s", color: "#f2d44e" },
  { x: "30%", y: "12%", delay: ".55s", color: "#ffd85d" },
  { x: "52%", y: "20%", delay: "1.1s", color: "#fff0ac" },
  { x: "75%", y: "13%", delay: ".2s", color: "#e5ad32" },
  { x: "89%", y: "30%", delay: "1.4s", color: "#f5c05c" },
  { x: "16%", y: "63%", delay: "1.7s", color: "#ffd85d" },
  { x: "84%", y: "66%", delay: ".85s", color: "#f2d44e" },
];

const girls = [
  { label: "Manon", src: "/katseye-manon.png", tone: "#81703c" },
  { label: "Daniela", src: "/katseye-daniela.jpg", tone: "#b09544" },
  { label: "Sophia", src: "/katseye-sophia.jpg", tone: "#8d7535" },
  { label: "Megan", src: "/katseye-megan.jpg", tone: "#575243" },
  { label: "Lara", src: "/katseye-lara.jpg", tone: "#b8a36c" },
  { label: "Yoonchae", src: "/katseye-yoonchae.jpg", tone: "#6f603a" },
];

function Figure({ src, label, className, tone, delay = 0 }) {
  return (
    <div
      className={[styles.figure, className].join(" ")}
      style={{ "--tone": tone, "--delay": delay + "s" }}
      aria-label={label}
    >
      <div className={styles.figureBounce}>
        <div className={styles.head}>
          <img src={src} alt={label} />
        </div>
        <div className={styles.neck} />
        <div className={styles.torso}>
          <span className={styles.armLeft} />
          <span className={styles.armRight} />
        </div>
        <div className={styles.legs}>
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function Dachshund({ leaving, onTailClick }) {
  return (
    <div className={leaving ? styles.dogLeaving : styles.dog}>
      <svg
        className={styles.dogDrawing}
        viewBox="0 0 560 300"
        role="img"
        aria-label="Desenho de um cachorro salsicha preto visto de lado"
      >
        <defs>
          <linearGradient id="coat" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#34322b" />
            <stop offset=".45" stopColor="#171611" />
            <stop offset="1" stopColor="#090908" />
          </linearGradient>
          <linearGradient id="ear" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3a372d" />
            <stop offset="1" stopColor="#171611" />
          </linearGradient>
        </defs>
        <ellipse
          cx="285"
          cy="274"
          rx="225"
          ry="13"
          fill="#c6a348"
          opacity=".18"
        />
        <path
          d="M161 190 Q144 165 157 140 Q177 112 225 119 L342 121 Q379 122 393 154 L396 211 Q383 234 345 236 L204 233 Q163 229 161 190Z"
          fill="url(#coat)"
          stroke="#575143"
          strokeWidth="3"
        />
        <path
          d="M197 210 Q211 229 211 260 L184 260 Q174 238 174 209Z"
          fill="#141310"
          stroke="#494438"
          strokeWidth="3"
        />
        <path
          d="M259 222 Q272 238 269 261 L244 261 Q236 240 237 223Z"
          fill="#100f0d"
          stroke="#494438"
          strokeWidth="3"
        />
        <path
          d="M339 211 Q351 232 351 261 L327 261 Q319 237 317 213Z"
          fill="#151410"
          stroke="#494438"
          strokeWidth="3"
        />
        <path
          d="M382 203 Q400 223 399 260 L371 260 Q364 235 365 202Z"
          fill="#0e0d0b"
          stroke="#494438"
          strokeWidth="3"
        />
        <path
          d="M183 255 Q198 259 210 254 M245 256 Q258 261 270 256 M327 256 Q342 260 352 256 M373 256 Q388 260 400 255"
          stroke="#9c793e"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M373 137 Q399 104 441 114 Q471 119 481 144 L503 155 Q526 162 520 179 Q514 194 493 193 L449 190 Q420 207 395 189 Q373 172 373 137Z"
          fill="url(#coat)"
          stroke="#575143"
          strokeWidth="3"
        />
        <path
          d="M392 131 Q376 155 389 205 Q401 218 421 206 Q430 195 420 165 Q415 139 392 131Z"
          fill="url(#ear)"
          stroke="#5b4c35"
          strokeWidth="3"
        />
        <path
          d="M441 174 Q469 195 494 193"
          stroke="#ac884a"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="468" cy="144" r="5" fill="#fff2c3" />
        <circle cx="469" cy="143" r="2" fill="#171611" />
        <ellipse cx="515" cy="169" rx="8" ry="6" fill="#06070c" />
        <path
          d="M195 137 Q263 112 342 139"
          fill="none"
          stroke="#9e874e"
          strokeWidth="5"
          opacity=".25"
          strokeLinecap="round"
        />
        <path
          d="M434 205 Q445 208 457 201"
          fill="none"
          stroke="#867348"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <button
        className={styles.tailButton}
        type="button"
        onClick={onTailClick}
        disabled={leaving}
        aria-label="Clique no rabo do cachorro para abrir a surpresa"
      >
        <svg viewBox="0 0 128 95" aria-hidden="true">
          <path
            d="M113 72 Q82 65 56 40 Q28 18 15 25"
            fill="none"
            stroke="#524a3a"
            strokeWidth="23"
            strokeLinecap="round"
          />
          <path
            d="M113 72 Q82 65 56 40 Q28 18 15 25"
            fill="none"
            stroke="#151410"
            strokeWidth="17"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Home() {
  const [scene, setScene] = useState("dog");
  const [hasPhoto, setHasPhoto] = useState(true);

  useEffect(() => {
    if (scene === "leaving") {
      const timer = setTimeout(() => setScene("banner"), 780);
      return () => clearTimeout(timer);
    }
    if (scene === "banner") {
      const timer = setTimeout(() => setScene("love"), 7200);
      return () => clearTimeout(timer);
    }
  }, [scene]);

  return (
    <>
      <Head>
        <title>Seis meses com você ♥</title>
        <meta
          name="description"
          content="Uma pequena surpresa de seis meses de namoro."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.page}>
        <div className={styles.aurora} aria-hidden="true" />
        <div className={styles.sparkles} aria-hidden="true">
          {Array.from({ length: 15 }, (_, i) => (
            <span key={i} style={{ "--i": i }} />
          ))}
        </div>

        {(scene === "dog" || scene === "leaving") && (
          <section
            className={styles.intro}
            aria-label="Surpresa do salsichinha"
          >
            <div className={styles.bubble}>
              clique no meu rabinho <span>↙</span>
            </div>
            <Dachshund
              leaving={scene === "leaving"}
              onTailClick={() => setScene("leaving")}
            />
            <div className={styles.floor} aria-hidden="true" />
          </section>
        )}

        {scene === "banner" && (
          <section
            className={styles.celebration}
            aria-label="Feliz seis meses de namoro"
          >
            <div className={styles.fireworks} aria-hidden="true">
              {fireworks.map((firework, index) => (
                <span
                  className={styles.firework}
                  key={index}
                  style={{
                    "--x": firework.x,
                    "--y": firework.y,
                    "--start": firework.delay,
                    "--color": firework.color,
                  }}
                >
                  {Array.from({ length: 12 }, (_, ray) => (
                    <i key={ray} style={{ "--ray": ray }} />
                  ))}
                </span>
              ))}
            </div>
            <div className={styles.confetti} aria-hidden="true">
              {Array.from({ length: 36 }, (_, i) => (
                <span key={i} style={{ "--i": i }} />
              ))}
            </div>
            <div className={styles.stage}>
              <Figure
                src="/pedro-pascal.jpg"
                label="Pedro Pascal"
                className={styles.leftCarrier}
                tone="#786229"
                delay={0.1}
              />
              <Figure
                src="/justin-bieber.png"
                label="Justin Bieber"
                className={styles.rightCarrier}
                tone="#5b512e"
                delay={0.25}
              />
              <div className={styles.banner}>
                <h1>
                  Feliz seis meses
                  <br />
                  <em>de namoro</em> <span>✦</span>
                </h1>
              </div>
              <div className={styles.girls}>
                {girls.map((girl, index) => (
                  <Figure
                    key={girl.label}
                    src={girl.src}
                    label={girl.label + " do KATSEYE"}
                    className={styles.girl}
                    tone={girl.tone}
                    delay={0.55 + index * 0.12}
                  />
                ))}
              </div>
            </div>
            <button
              className={styles.skip}
              type="button"
              onClick={() => setScene("love")}
              aria-label="Ver a mensagem final"
            >
              →
            </button>
          </section>
        )}

        {scene === "love" && (
          <section className={styles.love} aria-label="Te amo infinito">
            <div className={styles.heartBurst} aria-hidden="true">
              ♥
            </div>
            <h1>
              te amo <em>infinito</em>
              <span>∞</span>
              <span className={styles.loveHeart} aria-hidden="true">
                ♥
              </span>
            </h1>
            <div className={styles.photoFrame}>
              {hasPhoto ? (
                <img
                  src="/foto-casal.jpg"
                  alt="Foto do casal"
                  onError={() => setHasPhoto(false)}
                />
              ) : (
                <div className={styles.photoPlaceholder}>♥</div>
              )}
            </div>
            <button
              className={styles.replay}
              type="button"
              onClick={() => {
                setHasPhoto(true);
                setScene("dog");
              }}
              aria-label="Ver surpresa novamente"
            >
              ↺
            </button>
          </section>
        )}

        <details className={styles.credits}>
          <summary aria-label="Créditos das fotografias">ⓘ</summary>
          <div>
            Fotos:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Pedro_Pascal_at_SXSW_2025_01_(cropped).jpg">
              Pedro Pascal / Bea Phi (CC BY-SA 4.0)
            </a>{" "}
            ·{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Justin_Bieber_(cropped).png">
              Justin Bieber / Rudy Mancuso (CC BY 3.0)
            </a>{" "}
            ·{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Katseye_in_Seattle.jpg">
              KATSEYE / David Lee (CC BY 4.0)
            </a>{" "}
            ·{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Manon_2024.png">
              Manon / 티비텐 (CC BY 3.0)
            </a>
          </div>
        </details>
      </main>
    </>
  );
}
