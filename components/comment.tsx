import { Giscus } from "@giscus/react";
import { useTheme } from "next-themes";

export default function Comment() {
  const {theme, setTheme} = useTheme();
  
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
        theme={"transparent_" + theme}
      />
    </div>
  );
}
