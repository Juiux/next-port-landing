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
        className="sidebar-section w-full selectable-section ripple-bg-ripdark text-left"
        onClick={handleClick}
      >
        <p className="font-semibold">{props.title}</p>
        <p className="text-sm opacity-60 z-0">{props.date}</p>
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
        className="card-section w-full ripple-bg-ripdark text-left flex flex-col h-full"
        onClick={handleClick}
      >
        <p className="font-semibold">{props.title}</p>
        <p className="text-sm opacity-60 z-0">{props.date}</p>
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
