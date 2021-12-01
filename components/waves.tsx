import { WaveAccent } from "@interfaces/interfaces";

export default function Waves(): JSX.Element {
  // accent variables, from darkest to brightest colors
  const accents: WaveAccent = {
    color1: "#88c0d0",
    color2: "#78b1c8",
    color3: "#6ca1c0",
    color4: "#6391b7",
    color5: "#5e81ac",
  };

  return (
    <svg
      className="vw-100"
      id="visual"
      viewBox="0 0 900 200"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <path
        d="M0 167L21.5 167.5C43 168 86 169 128.8 166.5C171.7 164 214.3 158 257.2 149.5C300 141 343 130 385.8 129.3C428.7 128.7 471.3 138.3 514.2 146.3C557 154.3 600 160.7 642.8 166.2C685.7 171.7 728.3 176.3 771.2 175C814 173.7 857 166.3 878.5 162.7L900 159L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
        fill={accents.color5}
      ></path>
      <path
        d="M0 117L21.5 120.8C43 124.7 86 132.3 128.8 129.3C171.7 126.3 214.3 112.7 257.2 107.3C300 102 343 105 385.8 103.7C428.7 102.3 471.3 96.7 514.2 103C557 109.3 600 127.7 642.8 127.3C685.7 127 728.3 108 771.2 98.8C814 89.7 857 90.3 878.5 90.7L900 91L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
        fill={accents.color4}
      ></path>
      <path
        d="M0 107L21.5 104C43 101 86 95 128.8 97.2C171.7 99.3 214.3 109.7 257.2 112.5C300 115.3 343 110.7 385.8 106.8C428.7 103 471.3 100 514.2 100.2C557 100.3 600 103.7 642.8 102.5C685.7 101.3 728.3 95.7 771.2 90.2C814 84.7 857 79.3 878.5 76.7L900 74L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
        fill={accents.color3}
      ></path>
      <path
        d="M0 82L21.5 79.3C43 76.7 86 71.3 128.8 70.7C171.7 70 214.3 74 257.2 75C300 76 343 74 385.8 68C428.7 62 471.3 52 514.2 48.5C557 45 600 48 642.8 54.2C685.7 60.3 728.3 69.7 771.2 69.3C814 69 857 59 878.5 54L900 49L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
        fill={accents.color2}
      ></path>
      <path
        d="M0 55L21.5 51.3C43 47.7 86 40.3 128.8 37.3C171.7 34.3 214.3 35.7 257.2 36C300 36.3 343 35.7 385.8 35.2C428.7 34.7 471.3 34.3 514.2 32.8C557 31.3 600 28.7 642.8 30.5C685.7 32.3 728.3 38.7 771.2 38.2C814 37.7 857 30.3 878.5 26.7L900 23L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
        fill={accents.color1}
      ></path>
    </svg>
  );
}
