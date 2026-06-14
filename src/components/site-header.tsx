import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const HIDE_AFTER = 2200;

    const show = () => {
      setVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setVisible(false), HIDE_AFTER);
    };

    const onScroll = () => show();
    const onMove = () => show();
    const onTouch = () => show();

    // initial hide countdown
    timer = setTimeout(() => setVisible(false), HIDE_AFTER);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("keydown", onMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("keydown", onMove);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-background/75 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
      }`}
      onMouseEnter={() => setVisible(true)}
    >
      <div className="px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Alicia Strömmer — home"
          className="inline-flex items-center transition-transform hover:-translate-y-0.5"
        >
          <svg
            viewBox="0 0 48 45"
            aria-hidden="true"
            className="h-7 w-auto"
            fill="none"
          >
            <path
              d="M0.000167944 37L12.9962 10.18H19.3322L24.8402 37H19.7282L18.6122 31.24H8.28017L5.54417 37H0.000167944ZM10.2962 26.92H17.7842L15.2282 13.636L16.5602 13.78L10.2962 26.92ZM32.5411 37.432C30.7411 37.432 29.0971 37.12 27.6091 36.496C26.1451 35.872 24.9091 34.996 23.9011 33.868C22.9171 32.716 22.2331 31.384 21.8491 29.872L26.0611 28.288C26.5171 29.824 27.3211 31.024 28.4731 31.888C29.6491 32.728 31.0051 33.148 32.5411 33.148C33.4771 33.148 34.2931 32.992 34.9891 32.68C35.6851 32.344 36.2131 31.9 36.5731 31.348C36.9571 30.796 37.1491 30.184 37.1491 29.512C37.1491 28.816 36.9331 28.228 36.5011 27.748C36.0931 27.268 35.4331 26.884 34.5211 26.596L29.7691 25.012C27.8731 24.388 26.4571 23.488 25.5211 22.312C24.5851 21.136 24.1171 19.708 24.1171 18.028C24.1171 16.468 24.5251 15.064 25.3411 13.816C26.1811 12.568 27.3091 11.584 28.7251 10.864C30.1411 10.12 31.7491 9.748 33.5491 9.748C35.2291 9.748 36.7411 10.036 38.0851 10.612C39.4291 11.188 40.5451 11.98 41.4331 12.988C42.3451 13.996 42.9691 15.184 43.3051 16.552L39.1291 18.136C38.7691 16.84 38.0851 15.832 37.0771 15.112C36.0691 14.392 34.8571 14.032 33.4411 14.032C32.5771 14.032 31.8091 14.188 31.1371 14.5C30.4651 14.788 29.9371 15.196 29.5531 15.724C29.1931 16.252 29.0131 16.876 29.0131 17.596C29.0131 18.316 29.2291 18.94 29.6611 19.468C30.1171 19.972 30.8131 20.38 31.7491 20.692L36.2491 22.24C38.2171 22.888 39.6811 23.788 40.6411 24.94C41.6011 26.092 42.0811 27.508 42.0811 29.188C42.0811 30.7 41.6611 32.08 40.8211 33.328C39.9811 34.576 38.8411 35.572 37.4011 36.316C35.9851 37.06 34.3651 37.432 32.5411 37.432Z"
              fill="currentColor"
            />
            <circle cx="44.9722" cy="34" r="3" fill="var(--color-primary)" />
          </svg>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          <a
            href="mailto:alicia@strommer.se"
            aria-label="Email Alicia"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/85 hover:text-primary hover:bg-primary-soft transition-colors"
          >
            <svg viewBox="0 0 36 36" fill="currentColor" aria-hidden="true" className="h-[22px] w-[22px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.30769 0C3.70523 0 0 3.70523 0 8.30769V27.6923C0 32.2948 3.70523 36 8.30769 36H27.6923C32.2948 36 36 32.2948 36 27.6923V8.30769C36 3.70523 32.2948 0 27.6923 0H8.30769ZM9.522 12.4837H26.4517L17.9917 19.1949L9.522 12.4837ZM8.30769 13.2895L17.5652 20.6238C17.6873 20.7201 17.8383 20.7724 17.9938 20.7724C18.1492 20.7724 18.3002 20.7201 18.4223 20.6238L27.6522 13.2951V23.5385H8.30769V13.2895Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/alicia-str%C3%B6mmer-45691215a/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Alicia on LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/85 hover:text-primary hover:bg-primary-soft transition-colors"
          >
            <svg viewBox="0 0 36 36" fill="currentColor" aria-hidden="true" className="h-[22px] w-[22px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M30.2106 35.6778H6.02874C2.83582 35.6778 0.238281 33.0858 0.238281 29.8994V5.77846C0.238281 2.592 2.83582 0 6.02874 0H30.2106C33.4026 0 36.0001 2.592 36.0001 5.77846V29.9003C36.0001 33.0868 33.4026 35.6778 30.2106 35.6778ZM12.3297 14.1055H7.54167V29.4951H12.3297V14.1055ZM9.93243 12.0037C10.6669 12.0037 11.3709 11.7115 11.8903 11.1921C12.4096 10.6727 12.702 9.96873 12.7035 9.23261C12.702 8.49813 12.4096 7.79415 11.8903 7.27478C11.3709 6.75542 10.6669 6.463 9.93243 6.46154C9.19757 6.46178 8.49288 6.75381 7.97326 7.27344C7.45363 7.79306 7.1616 8.49775 7.16136 9.23261C7.1616 9.96747 7.45363 10.6722 7.97326 11.1918C8.49288 11.7114 9.19757 12.0034 9.93243 12.0037ZM30.2383 29.496V21.0591C30.2383 16.9135 29.3383 13.7243 24.5014 13.7243C22.1761 13.7243 20.6152 14.9982 19.9737 16.2074H19.909V14.1055H15.3241V29.4951H20.1038V21.8797C20.1038 19.8711 20.4851 17.928 22.9746 17.928C25.4226 17.928 25.4586 20.2246 25.4586 22.0089V29.4951H30.2383V29.496Z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
