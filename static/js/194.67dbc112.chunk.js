"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[194],{600:(t,e,a)=>{a.d(e,{LF:()=>m,Nt:()=>n,UM:()=>l,dk:()=>v,ir:()=>c,q8:()=>r});var i=a(154);const s={accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGMzMjFlMTM3OTU5MzE3MmE5MjY1NzgzZWEzYTUyNyIsInN1YiI6IjY2MmNjNjVkNTExZDA5MDEyN2M0YzAxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-PkgOUvGNjz06k4JKIG7Ya_5suCi_NdRIWusKqGE3s")},c=t=>t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):"https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg",o=i.A.create({baseURL:"https://api.themoviedb.org/3",headers:s}),n=async()=>(await o.get("trending/movie/day")).data,r=async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a="search/movie?query=".concat(t,"&page=").concat(e);return(await o.get(a)).data},m=async t=>{const e="movie/".concat(t);return(await o.get(e)).data},v=async t=>{const e="movie/".concat(t,"/credits");return(await o.get(e)).data},l=async t=>{const e="movie/".concat(t,"/reviews");return(await o.get(e)).data}},953:(t,e,a)=>{a.d(e,{g:()=>l});a(43);var i=a(475),s=a(600);const c="MovieItem_MovieItem__b2hKs",o="MovieItem_image__XvW+C";var n=a(579);const r=t=>{let{movie:e}=t;return(0,n.jsxs)(i.N_,{to:"/movies/".concat(e.id),className:c,children:[(0,n.jsx)("img",{src:(0,s.ir)(e.poster_path),alt:e.title,className:o}),(0,n.jsx)("h2",{children:e.title}),(0,n.jsx)("p",{children:e.overview})]})},m="MovieList_movieList__uFrOZ",v="MovieList_container__sSMe5",l=t=>{let{movies:e}=t;return(0,n.jsx)("div",{className:v,children:(0,n.jsx)("div",{className:m,children:e&&e.map((t=>(0,n.jsx)(r,{movie:t},t.id)))})})}},194:(t,e,a)=>{a.r(e),a.d(e,{HomePage:()=>n,default:()=>r});var i=a(43),s=a(953),c=a(600),o=a(579);const n=()=>{const[t,e]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(async()=>{try{const t=await(0,c.Nt)();e(t.results)}catch(t){alert("Sorry, something went wrong. Please try again later.")}})()}),[]),(0,o.jsx)("div",{children:(0,o.jsx)(s.g,{movies:t})})},r=n}}]);
//# sourceMappingURL=194.67dbc112.chunk.js.map