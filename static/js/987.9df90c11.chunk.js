"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[987],{600:(e,t,a)=>{a.d(t,{LF:()=>l,Nt:()=>n,UM:()=>m,dk:()=>v,ir:()=>c,q8:()=>r});var s=a(154);const i={accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGMzMjFlMTM3OTU5MzE3MmE5MjY1NzgzZWEzYTUyNyIsInN1YiI6IjY2MmNjNjVkNTExZDA5MDEyN2M0YzAxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-PkgOUvGNjz06k4JKIG7Ya_5suCi_NdRIWusKqGE3s")},c=e=>e?"".concat("https://image.tmdb.org/t/p/w500").concat(e):"https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg",o=s.A.create({baseURL:"https://api.themoviedb.org/3",headers:i}),n=async()=>(await o.get("trending/movie/day")).data,r=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a="search/movie?query=".concat(e,"&page=").concat(t);return(await o.get(a)).data},l=async e=>{const t="movie/".concat(e);return(await o.get(t)).data},v=async e=>{const t="movie/".concat(e,"/credits");return(await o.get(t)).data},m=async e=>{const t="movie/".concat(e,"/reviews");return(await o.get(t)).data}},953:(e,t,a)=>{a.d(t,{g:()=>m});a(43);var s=a(475),i=a(600);const c="MovieItem_MovieItem__b2hKs",o="MovieItem_image__XvW+C";var n=a(579);const r=e=>{let{movie:t}=e;return(0,n.jsxs)(s.N_,{to:"/movies/".concat(t.id),className:c,children:[(0,n.jsx)("img",{src:(0,i.ir)(t.poster_path),alt:t.title,className:o}),(0,n.jsx)("h2",{children:t.title}),(0,n.jsx)("p",{children:t.overview})]})},l="MovieList_movieList__uFrOZ",v="MovieList_container__sSMe5",m=e=>{let{movies:t}=e;return(0,n.jsx)("div",{className:v,children:(0,n.jsx)("div",{className:l,children:t&&t.map((e=>(0,n.jsx)(r,{movie:e},e.id)))})})}},987:(e,t,a)=>{a.r(t),a.d(t,{MoviesPage:()=>h,default:()=>u});var s=a(43),i=a(475),c=a(216),o=a(253),n=a(953),r=a(600);const l="MoviesPage_form__2deBf",v="MoviesPage_input__16dJ5",m="MoviesPage_button__AUtxX";var d=a(579);const h=()=>{const[e,t]=(0,s.useState)([]),[a,h]=(0,i.ok)(),u=a.get("query")||"",[_,g]=(0,s.useState)(u);(0,s.useEffect)((()=>{t([])}),[]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h({query:_}),t([]),(async e=>{try{const a=await(0,r.q8)(e,1);t((e=>[...e,...a.results]))}catch(a){alert("Sorry, something went wrong. Please try again later.")}})(_)},className:l,children:[(0,d.jsx)("input",{type:"text",value:_,onChange:e=>{g(e.target.value)},placeholder:"Search movies",className:v}),(0,d.jsx)("button",{type:"submit",className:m,children:"Search"})]}),(0,d.jsx)(n.g,{movies:e}),(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(o.a,{}),children:(0,d.jsx)(c.sv,{})})]})},u=h}}]);
//# sourceMappingURL=987.9df90c11.chunk.js.map