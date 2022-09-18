import blog, { ga, redirects } from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "Leo Office Tutorials",
  description: "Mein Blog über die neusten Videos und Themen auf meinem YouTube Kanal.",
  avatar: "lot.jpg",
  avatarClass: "rounded-full",
  author: "Leonhard Krause",
  links: [
    { title: "Impressum", url:"https://leoofficetutorials.com/impressum"}, 
    { title: "Email", url: "mailto:leoofficetutorials@gmail.com" },
    { title: "YouTube", url: "https://youtube.com/Leoofficetutorials" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/leo-office-tutorials-937104217"},
    { title: "Twitter", url: "https://twitter.com/LeoTutorials"},
    { title: "Facebook", url: "https://business.facebook.com/Leo-Office-Tutorials-228106565837208/"},
    { title: "TikTok", url: "https://www.tiktok.com/@leoofficetutorials"},
    { title: "Instagram", url: "https://www.instagram.com/leo_officetutorials/"}
  ],
  lang: "de",
  dateStyle: "long",
  favicon: "favicon.ico",
  middlewares: [
    // If you want to set up Google Analytics, paste your GA key here.
    ga(String(Deno.env.get("GA_CODE"))),
  ]
});
