"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[194],{600:(e,t,a)=>{a.d(t,{LF:()=>l,Nt:()=>n,UM:()=>m,dk:()=>v,ir:()=>c,q8:()=>r});var s=a(154);const i={accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGMzMjFlMTM3OTU5MzE3MmE5MjY1NzgzZWEzYTUyNyIsInN1YiI6IjY2MmNjNjVkNTExZDA5MDEyN2M0YzAxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-PkgOUvGNjz06k4JKIG7Ya_5suCi_NdRIWusKqGE3s")},c=e=>e?"".concat("https://image.tmdb.org/t/p/w500").concat(e):"https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg",o=s.A.create({baseURL:"https://api.themoviedb.org/3",headers:i}),n=async()=>(await o.get("trending/movie/day")).data,r=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a="search/movie?query=".concat(e,"&page=").concat(t);return(await o.get(a)).data},l=async e=>{const t="movie/".concat(e);return(await o.get(t)).data},v=async e=>{const t="movie/".concat(e,"/credits");return(await o.get(t)).data},m=async e=>{const t="movie/".concat(e,"/reviews");return(await o.get(t)).data}},953:(e,t,a)=>{a.d(t,{g:()=>m});a(43);var s=a(475),i=a(600);const c="MovieItem_MovieItem__b2hKs",o="MovieItem_image__XvW+C";var n=a(579);const r=e=>{let{movie:t}=e;return(0,n.jsxs)(s.N_,{to:"/movies/".concat(t.id),className:c,children:[(0,n.jsx)("img",{src:(0,i.ir)(t.poster_path),alt:t.title,className:o}),(0,n.jsx)("h2",{children:t.title}),(0,n.jsx)("p",{children:t.overview})]})},l="MovieList_movieList__uFrOZ",v="MovieList_container__sSMe5",m=e=>{let{movies:t}=e;return(0,n.jsx)("div",{className:v,children:(0,n.jsx)("div",{className:l,children:t&&t.map((e=>(0,n.jsx)(r,{movie:e},e.id)))})})}},194:(e,t,a)=>{a.r(t),a.d(t,{HomePage:()=>l,default:()=>v});var s=a(43),i=a(216),c=a(953),o=a(253),n=a(600),r=a(579);const l=()=>{const[e,t]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const e=await(0,n.Nt)();t(e.results)}catch(e){alert("Sorry, something went wrong. Please try again later.")}})()}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.g,{movies:e}),(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(o.a,{}),children:(0,r.jsx)(i.sv,{})})]})},v=l}}]);
//# sourceMappingURL=194.8051b6d4.chunk.js.map