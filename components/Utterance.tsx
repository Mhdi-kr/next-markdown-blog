import { useEffect } from "react";

export const Utterance = (props: { className: string }) => {
    useEffect(() => {
        let script = document.createElement("script");
        let anchor = document.getElementById("inject-comments-for-uterances")!;
        script.setAttribute("src", "https://utteranc.es/client.js");
        script.setAttribute("crossorigin", "anonymous");
        script.setAttribute("async", "true");
        script.setAttribute("repo", "Mhdi-kr/personal-website");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", "github-light");
        anchor.appendChild(script);
    });
    return <div id="inject-comments-for-uterances" className={props.className}></div>;
};
