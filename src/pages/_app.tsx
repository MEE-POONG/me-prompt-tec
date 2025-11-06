import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'thai'],
  variable: '--font-prompt',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${prompt.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
