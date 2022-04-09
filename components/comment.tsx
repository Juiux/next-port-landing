import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Comment() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="p-5">
      <Giscus
        repo="irvanmalik48/blog"
        repoId="MDEwOlJlcG9zaXRvcnkzMjQ5MTA0MTE="
        category="Comments"
        categoryId="DIC_kwDOE129S84B_1u5"
        mapping="pathname"
        reactionsEnabled="0"
        emitMetadata="0"
        theme={`https://giscus.app/themes/${theme}.css`}
      />
    </div>
  );
}
