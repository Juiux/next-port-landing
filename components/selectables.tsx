import Link from "next/link";

export const handleClick = () => {
  const el = document.getElementById("main-part");
  if (el !== null) {
    el.scrollTop = 0;
  }
};

export default function Selectables(props: any) {
  return (
    <Link href={`/posts/${props.id}`} passHref>
      <button
        className="sidebar-section selectable-section w-full text-left"
        onClick={handleClick}
      >
        <p className="font-semibold">{props.title}</p>
        <p className="z-0 text-sm opacity-60">{props.date}</p>
        <p className="mt-1 mb-2 text-sm">{props.desc}</p>
        <div className="tagsbs">
          {props.tag.map((children: any, index: any) => (
            <span className="tagsb" key={index}>
              {children}
            </span>
          ))}
        </div>
      </button>
    </Link>
  );
}

export function CardSelectables(props: any) {
  return (
    <Link href={`/posts/${props.id}`} passHref>
      <button
        className="card-section flex h-full w-full flex-col text-left"
        onClick={handleClick}
      >
        <p className="font-semibold">{props.title}</p>
        <p className="z-0 text-sm opacity-60">{props.date}</p>
        <p className="mt-1 mb-2 text-sm">{props.desc}</p>
        <div className="tagsbs mt-auto">
          {props.tag.map((children: any, index: any) => (
            <span className="tagsb" key={index}>
              {children}
            </span>
          ))}
        </div>
      </button>
    </Link>
  );
}

export function CardEduSelectables(props: any) {
  return (
    <a
      aria-label={props.title}
      href={props.href}
      className="card-section flex h-full w-full flex-col text-left text-nord-light-text hover:text-nord-light-text dark:text-nord-dark-text dark:hover:text-nord-dark-text"
    >
      <p className="font-semibold">{props.title}</p>
      <p className="z-0 text-sm opacity-60">
        {props.day}, {props.time}
      </p>
      <p className="z-0 text-sm">Dosen Pengajar:</p>
      <ul className="mt-0">
        {props.lect.map((e: any, index: any) => {
          return (
            <li className="text-sm" key={index}>
              {e}
            </li>
          );
        })}
      </ul>
    </a>
  );
}
