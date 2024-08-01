import React from "react";
// import { Jost } from "next/font/google";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const About = () => {
  const cardsData = [
    {
      icon: (
        <div>
          <svg
            className="fill-white"
            style={{ fill: "#fff", width: "90px", height: "90px" }}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            height="512"
            viewBox="0 0 512 512"
            width="512"
          >
            <g>
              <path d="m504.5 234.44h-102.965c-1.122-21.653-7.086-42.898-17.417-61.866-1.981-3.638-6.536-4.98-10.174-2.999s-4.98 6.536-2.999 10.174c9.136 16.774 14.461 35.541 15.567 54.691h-53.251c-3.784-39.276-36.975-70.086-77.226-70.086s-73.442 30.81-77.226 70.086h-53.255c3.907-68.441 60.938-122.925 130.481-122.925 37.336 0 72.976 15.995 97.781 43.883 2.753 3.094 7.493 3.373 10.588.62s3.373-7.494.62-10.588c-27.649-31.086-67.374-48.915-108.989-48.915-77.816 0-141.579 61.209-145.503 137.925h-103.032c-4.142 0-7.5 3.358-7.5 7.5v242.009h.071c0 4.142 3.358 7.5 7.5 7.5h59.991c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-52.562v-227.009h187.688l-46.874 227.009h-53.855c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h402.541c4.142 0 7.5-3.358 7.5-7.5v-242.009c0-4.142-3.358-7.5-7.5-7.5zm-310.604 0c3.717-30.987 30.167-55.086 62.139-55.086s58.422 24.099 62.139 55.086zm69.639 242.009v-22.435c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v22.435h-77.405l46.874-227.009h75.991l46.874 227.009zm233.465 0h-140.814l-46.874-227.009h187.688z"></path>
              <path d="m256.035 387.314c-4.142 0-7.5 3.358-7.5 7.5v24.936c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-24.936c0-4.142-3.358-7.5-7.5-7.5z"></path>
              <path d="m256.035 327.662c-4.142 0-7.5 3.358-7.5 7.5v24.935c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-24.935c0-4.142-3.358-7.5-7.5-7.5z"></path>
              <path d="m256.035 268.351c-4.142 0-7.5 3.358-7.5 7.5v24.935c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-24.935c0-4.142-3.358-7.5-7.5-7.5z"></path>
              <path d="m74.429 426.542h-21.112c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h21.112c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
              <path d="m105.81 423.109c0 4.142 3.358 7.5 7.5 7.5h21.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.113c-4.143 0-7.5 3.358-7.5 7.5z"></path>
              <path d="m443.109 307.169h21.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.113c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
              <path d="m373.118 288.215h21.112c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.112c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
              <path d="m356.12 333.139h21.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.113c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
              <path d="m256.035 76.583c4.142 0 7.5-3.358 7.5-7.5v-41.032c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v41.032c0 4.142 3.358 7.5 7.5 7.5z"></path>
              <path d="m43.694 215.042h41.112c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-41.112c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
              <path d="m417.936 207.542c0 4.142 3.358 7.5 7.5 7.5h41.112c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-41.112c-4.143 0-7.5 3.358-7.5 7.5z"></path>
              <path d="m138.307 115.312c1.464 1.461 3.381 2.191 5.298 2.191 1.922 0 3.844-.734 5.309-2.202 2.926-2.932 2.921-7.681-.01-10.607l-30.296-30.237c-2.933-2.926-7.682-2.921-10.607.01-2.926 2.932-2.921 7.681.01 10.607z"></path>
              <path d="m368.395 117.503c1.917 0 3.834-.73 5.298-2.191l30.491-30.432c2.932-2.926 2.936-7.675.01-10.607-2.927-2.932-7.675-2.936-10.607-.01l-30.491 30.432c-2.932 2.926-2.936 7.675-.01 10.607 1.465 1.467 3.387 2.201 5.309 2.201z"></path>
              <path d="m81.738 151.059 18.739 10.798c1.18.68 2.467 1.003 3.738 1.003 2.594 0 5.117-1.348 6.505-3.757 2.068-3.589.835-8.175-2.754-10.243l-18.739-10.798c-3.589-2.067-8.175-.835-10.243 2.754-2.067 3.589-.835 8.175 2.754 10.243z"></path>
              <path d="m401.28 159.103c1.389 2.409 3.911 3.757 6.505 3.757 1.271 0 2.558-.323 3.738-1.003l18.739-10.798c3.589-2.068 4.822-6.654 2.754-10.243s-6.654-4.82-10.243-2.754l-18.739 10.798c-3.589 2.068-4.822 6.654-2.754 10.243z"></path>
              <path d="m189.36 83.762c1.11 3.044 3.984 4.933 7.046 4.933.853 0 1.721-.146 2.569-.456 3.892-1.419 5.896-5.724 4.477-9.615l-7.4-20.293c-1.419-3.892-5.723-5.896-9.615-4.477s-5.896 5.724-4.477 9.615z"></path>
              <path d="m313.096 88.239c.848.31 1.715.456 2.569.456 3.062 0 5.937-1.889 7.047-4.933l7.4-20.293c1.419-3.892-.585-8.196-4.477-9.615-3.89-1.42-8.197.584-9.616 4.477l-7.399 20.293c-1.42 3.891.584 8.196 4.476 9.615z"></path>
              <path d="m98.736 398.129v-16.5h21.137c2.401 0 4.657-1.15 6.068-3.093s1.807-4.444 1.064-6.727l-28.637-88.04c-1.005-3.089-3.884-5.18-7.132-5.18s-6.127 2.091-7.132 5.18l-28.637 88.04c-.743 2.283-.347 4.784 1.064 6.727s3.667 3.093 6.068 3.093h21.137v16.5c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5zm-25.811-31.501 18.311-56.293 18.311 56.293z"></path>
              <path d="m140.31 288.609h21.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.113c-4.142 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"></path>
              <path d="m383.324 420.792c1.411 1.941 3.666 3.09 6.066 3.09h21.137v16.266c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-16.266h21.137c2.4 0 4.655-1.149 6.066-3.09 1.412-1.941 1.808-4.441 1.067-6.724l-28.637-88.274c-1.003-3.092-3.883-5.186-7.134-5.186s-6.131 2.094-7.134 5.186l-28.637 88.274c-.739 2.283-.342 4.783 1.069 6.724zm34.704-68.379 18.319 56.469h-36.639z"></path>
            </g>
          </svg>
        </div>
      ),

      title: "Design",

      Desc: "Praesent metus tellus, elementum eu, semper Vestibulum volutpat pretium libero",
    },
    {
      icon: (
        <div>
          <svg
            style={{ fill: "#fff", width: "90px", height: "90px" }}
            xmlns="http://www.w3.org/2000/svg"
            height="512"
            viewBox="0 0 60 60"
            width="512"
          >
            <path
              id="Shape"
              d="m2 21c-.5581336-.1826512-1.17153979-.0251377-1.57262009.4038252-.4010803.4289629-.51707441 1.0515567-.29737991 1.5961748 3.19 7.11 8.81 15 15.67 20.09-4.1415534.4046105-8.17615492 1.5529983-11.91 3.39-.53168872.3125679-.85818369.8832411-.85818369 1.5s.32649497 1.1874321.85818369 1.5c4.91015017 2.4886229 10.3810366 3.6634165 15.88 3.41-.8237638 1.6903087-1.4189855 3.4826995-1.77 5.33-.0881589.5304869.1086561 1.0683092.5183984 1.4165902.4097422.3482809.9722468.4558802 1.4816016.2834098 3.6020232-1.0223748 6.7657495-3.205346 9-6.21v5.29c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-5.29c2.2405168 2.9981541 5.4018295 5.1794599 9 6.21.5093548.1724704 1.0718594.0648711 1.4816016-.2834098.4097423-.348281.6065573-.8861033.5183984-1.4165902-.3448733-1.8321711-.9299195-3.610846-1.74-5.29 5.4987361.2506795 10.9689334-.9239662 15.88-3.41.5316887-.3125679.8581837-.8832411.8581837-1.5s-.326495-1.1874321-.8581837-1.5c-3.7404716-1.8543178-7.7856602-3.0163778-11.94-3.43 6.8-4.98 12.42-12.83 15.67-20.09.2196945-.5446181.1037004-1.1672119-.2973799-1.5961748s-1.0144865-.5864764-1.5726201-.4038252c-7.43 2.39-15.9 7.14-21.65 13.37 1.8-11-.68-23.63-5-33.46-.2345216-.54844082-.7735206-.90416726-1.37-.90416726s-1.1354784.35572644-1.37.90416726c-4.25 9.64-6.85 22.32-5 33.46-5.61-6.15-14.06-10.94-21.61-13.37zm3.35 27c7.25-3.35 16.53-4.6 23.06 0-6.52 4.63-15.87 3.32-23.06 0zm14.82 9.76c.4012316-1.8051223 1.0756662-3.5384194 2-5.14 2.2128602-.3893151 4.3391264-1.1680432 6.28-2.3-1.23 3.68-4.63 6.09-8.28 7.44zm19.66 0c-3.64-1.34-7-3.75-8.33-7.44 1.9400564 1.1336938 4.0666419 1.9125388 6.28 2.3.9417559 1.5986184 1.633105 3.3320499 2.05 5.14zm-8.24-9.76c6.52-4.63 15.87-3.32 23.06 0-7.25 3.35-16.53 4.6-23.06 0zm26-24.74c-3.72 7.62-9.59 15.29-16.88 19.74-2.6244994.1130394-5.2035989.7238787-7.6 1.8.9836974-1.9954645 1.7707447-4.0819771 2.35-6.23 5.27-7.13 13.92-12.42 22.09-15.31zm-27.59-20.47c5.47 13.21 7.76 31.37 0 43.48-7.76-12.12-5.46-30.27 0-43.48zm-3.11 42.05c-2.3964011-1.0761213-4.9755006-1.6869606-7.6-1.8-7.29-4.49-13.17-12.18-16.84-19.78 8.19 2.9 16.83 8.19 22.09 15.35.5792553 2.1480229 1.3663026 4.2345355 2.35 6.23z"
            ></path>
          </svg>
        </div>
      ),

      title: "Innovation",

      Desc: "Praesent metus tellus, elementum eu, semper Vestibulum volutpat pretium libero",
    },
    {
      icon: (
        <div>
          <svg
            className="fill-white"
            style={{ fill: "#fff", width: "90px", height: "90px" }}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            height="512"
            viewBox="0 0 512 512"
            width="512"
          >
            <g>
              <path d="m504.5 234.44h-102.965c-1.122-21.653-7.086-42.898-17.417-61.866-1.981-3.638-6.536-4.98-10.174-2.999s-4.98 6.536-2.999 10.174c9.136 16.774 14.461 35.541 15.567 54.691h-53.251c-3.784-39.276-36.975-70.086-77.226-70.086s-73.442 30.81-77.226 70.086h-53.255c3.907-68.441 60.938-122.925 130.481-122.925 37.336 0 72.976 15.995 97.781 43.883 2.753 3.094 7.493 3.373 10.588.62s3.373-7.494.62-10.588c-27.649-31.086-67.374-48.915-108.989-48.915-77.816 0-141.579 61.209-145.503 137.925h-103.032c-4.142 0-7.5 3.358-7.5 7.5v242.009h.071c0 4.142 3.358 7.5 7.5 7.5h59.991c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-52.562v-227.009h187.688l-46.874 227.009h-53.855c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h402.541c4.142 0 7.5-3.358 7.5-7.5v-242.009c0-4.142-3.358-7.5-7.5-7.5zm-310.604 0c3.717-30.987 30.167-55.086 62.139-55.086s58.422 24.099 62.139 55.086zm69.639 242.009v-22.435c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v22.435h-77.405l46.874-227.009h75.991l46.874 227.009zm233.465 0h-140.814l-46.874-227.009h187.688z"></path>
              <path d="m256.035 387.314c-4.142 0-7.5 3.358-7.5 7.5v24.936c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-24.936c0-4.142-3.358-7.5-7.5-7.5z"></path>
              <path d="m256.035 327.662c-4.142 0-7.5 3.358-7.5 7.5v24.935c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-24.935c0-4.142-3.358-7.5-7.5-7.5z"></path>
              <path d="m256.035 268.351c-4.142 0-7.5 3.358-7.5 7.5v24.935c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-24.935c0-4.142-3.358-7.5-7.5-7.5z"></path>
              <path d="m74.429 426.542h-21.112c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h21.112c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
              <path d="m105.81 423.109c0 4.142 3.358 7.5 7.5 7.5h21.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.113c-4.143 0-7.5 3.358-7.5 7.5z"></path>
              <path d="m443.109 307.169h21.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.113c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
              <path d="m373.118 288.215h21.112c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.112c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
              <path d="m356.12 333.139h21.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.113c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
              <path d="m256.035 76.583c4.142 0 7.5-3.358 7.5-7.5v-41.032c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v41.032c0 4.142 3.358 7.5 7.5 7.5z"></path>
              <path d="m43.694 215.042h41.112c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-41.112c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
              <path d="m417.936 207.542c0 4.142 3.358 7.5 7.5 7.5h41.112c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-41.112c-4.143 0-7.5 3.358-7.5 7.5z"></path>
              <path d="m138.307 115.312c1.464 1.461 3.381 2.191 5.298 2.191 1.922 0 3.844-.734 5.309-2.202 2.926-2.932 2.921-7.681-.01-10.607l-30.296-30.237c-2.933-2.926-7.682-2.921-10.607.01-2.926 2.932-2.921 7.681.01 10.607z"></path>
              <path d="m368.395 117.503c1.917 0 3.834-.73 5.298-2.191l30.491-30.432c2.932-2.926 2.936-7.675.01-10.607-2.927-2.932-7.675-2.936-10.607-.01l-30.491 30.432c-2.932 2.926-2.936 7.675-.01 10.607 1.465 1.467 3.387 2.201 5.309 2.201z"></path>
              <path d="m81.738 151.059 18.739 10.798c1.18.68 2.467 1.003 3.738 1.003 2.594 0 5.117-1.348 6.505-3.757 2.068-3.589.835-8.175-2.754-10.243l-18.739-10.798c-3.589-2.067-8.175-.835-10.243 2.754-2.067 3.589-.835 8.175 2.754 10.243z"></path>
              <path d="m401.28 159.103c1.389 2.409 3.911 3.757 6.505 3.757 1.271 0 2.558-.323 3.738-1.003l18.739-10.798c3.589-2.068 4.822-6.654 2.754-10.243s-6.654-4.82-10.243-2.754l-18.739 10.798c-3.589 2.068-4.822 6.654-2.754 10.243z"></path>
              <path d="m189.36 83.762c1.11 3.044 3.984 4.933 7.046 4.933.853 0 1.721-.146 2.569-.456 3.892-1.419 5.896-5.724 4.477-9.615l-7.4-20.293c-1.419-3.892-5.723-5.896-9.615-4.477s-5.896 5.724-4.477 9.615z"></path>
              <path d="m313.096 88.239c.848.31 1.715.456 2.569.456 3.062 0 5.937-1.889 7.047-4.933l7.4-20.293c1.419-3.892-.585-8.196-4.477-9.615-3.89-1.42-8.197.584-9.616 4.477l-7.399 20.293c-1.42 3.891.584 8.196 4.476 9.615z"></path>
              <path d="m98.736 398.129v-16.5h21.137c2.401 0 4.657-1.15 6.068-3.093s1.807-4.444 1.064-6.727l-28.637-88.04c-1.005-3.089-3.884-5.18-7.132-5.18s-6.127 2.091-7.132 5.18l-28.637 88.04c-.743 2.283-.347 4.784 1.064 6.727s3.667 3.093 6.068 3.093h21.137v16.5c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5zm-25.811-31.501 18.311-56.293 18.311 56.293z"></path>
              <path d="m140.31 288.609h21.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.113c-4.142 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"></path>
              <path d="m383.324 420.792c1.411 1.941 3.666 3.09 6.066 3.09h21.137v16.266c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-16.266h21.137c2.4 0 4.655-1.149 6.066-3.09 1.412-1.941 1.808-4.441 1.067-6.724l-28.637-88.274c-1.003-3.092-3.883-5.186-7.134-5.186s-6.131 2.094-7.134 5.186l-28.637 88.274c-.739 2.283-.342 4.783 1.069 6.724zm34.704-68.379 18.319 56.469h-36.639z"></path>
            </g>
          </svg>
        </div>
      ),

      title: "Journey",

      Desc: "Praesent metus tellus, elementum eu, semper Vestibulum volutpat pretium libero",
    },
  ];

  return (
    <section className="flex flex-col items-center">
      {/* banner section */}
      <div
        className={` w-full h-[230px] md:h-[403px] bg-cover py-16 flex gap-0 md:gap-7 flex-col justify-center items-center bg-center bg-[url("about1.jpg")]`}
      >
        <h1 className="text-[35px] lg:text-[46px] font-medium text-white">
          About Us
        </h1>
        <p className="text-[16px] text-white">DREAM LESS. ADVENTURE MORE.</p>
      </div>
      <div className="p-5 container ">
        <p className="py-5">
          Into Wild Himalaya Adventure Tours & Travels is an outdoor adventure
          tour agency located in Manali, Himachal Pradesh. We essentially
          operate within the Indian Himalayan range including Manali,
          Leh/Ladakh, Zanskar, Garhwal, Sikkim, Kinnaur & Spiti Valley.
        </p>
        <p className="py-5">
          Made up of outdoor adventure lovers, we aim to take individuals to
          outstanding locations and explore off the beaten track but most of all
          Into Wild Himalaya’s style and soul of travelling is about having fun.
          We are happy if you are and we will always endeavour to meet the needs
          of every traveller.
        </p>
        <p className="py-5">
          With over a decade of experience and meticulous planning, our top
          activities are Himalayan motorbike tours and Himalayan trekking trips,
          Indian cultural tours and cycling packages, however, it doesn’t stop
          there. We also offer adventure courses to all levels from beginner to
          experienced, various outdoor adventure pursuits including paragliding,
          rappelling and rock climbing, to name a few, as well as offer special
          yoga and honeymoon packages for those that may want a quiet and
          therapeutic trip.{" "}
        </p>
        <p className="py-5">
          The Himalaya’s are filled with terrific surroundings and we want to
          share these places with you, whether it is in Himachal Pradesh,
          Garhwal, Uttarakhand, Leh/Ladakh, Zanskar, Sikkim or even other
          locations in India, you choose where you want to go and we will get
          you there. There are also opportunities to visit areas in Nepal &
          Tibet.{" "}
        </p>
        <p className="py-5">
          Into Wild Himalaya also has its own camp based in Kalath, Manali, that
          can accommodate all age groups and offers even more activities such as
          river rafting, team building exercises and navigational skills. It is
          a perfect location for school summer adventure programs, families that
          wish to camp in luxury or even a place for an organised event.
        </p>
      </div>
      {/* our story section */}
      <div className="  block md:flex md:flex-row-reverse md:items-center md:px-6 lg:p-14 lg:px-28 ">
        <div className="px-4 flex flex-col gap-5   mt-9 md:w-[50%] ">
          <div className=" flex justify-center lg:p-3">
            <img
              className="w-full hover:scale-95 hover:duration-500 duration-500 rounded"
              src="green.jpg"
              alt="our stroy"
            />
          </div>
        </div>
        <div className="px-4 md:w-[50%]">
          <h1
            className={` font-medium leading-10 my-5 text-[30px] lg:text-[40px]`}
          >
            Green Tourism
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-5  h-0 border border-green-400"></div>
            <h3
              className={`text-[#969696]  font-medium tracking-[3.2px] text-[16px]`}
            >
              THE HIGH STRESS FAVOUTIRE
            </h3>
          </div>
          <div className="mt-8">
            <p className={`leading-[1.6] text-[15px]  text-[#969696] my-3`}>
              Green Tourism or Ecotourism was developed in the 1980s and is
              usually based on the natural world and only involving small groups
              of visitors. The strategy also aims to have a low impact on local
              resources than mass tourism (Byrne et al, 2009).ï¿½Ecotourism is
              predominantly focused on ecological conservation and educating
              travellers on local environments and natural surroundings.
              Specific to a category of vacation such as adventure or cultural,
              whereas sustainability applies to all types of tourism.
            </p>
            <p className={` my-3 leading-[1.6] text-[15px]  text-[#969696]`}>
              WH tours/packages not only are aimed to purely view and experience
              the nature surrounding but also to understand the importance of
              the natural world and in preserving that.
            </p>
          </div>
        </div>
      </div>
      {/* Who We Are ? section */}

      <div className="  block md:flex md:flex-row md:items-center md:px-6 lg:p-14 lg:px-28 ">
        <div className="px-4 flex flex-col gap-5   mt-9 md:w-[50%] ">
          <div className=" flex justify-center lg:p-3">
            <img
              className="w-full hover:scale-95 hover:duration-500 duration-500 rounded"
              src="aboutus.jpg"
              alt="our stroy"
            />
          </div>
        </div>
        <div className="px-4 md:w-[50%]">
          <h1
            className={` font-medium leading-10 my-5 text-[30px] lg:text-[40px]`}
          >
            Our Mission:
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-5  h-0 border border-orange-500"></div>

            <h3
              className={`text-[#969696]  font-medium tracking-[3.2px] text-[16px]`}
            >
              THE HIGH STRESS FAVOUTIRE
            </h3>
          </div>

          <div className="mt-8">
            <p className={`leading-[1.6] text-[15px]  text-[#969696] my-3`}>
              To provide tourism in the most remote areas of the Himalayas and
              giving both domestic and foreign tourists the opportunity to
              experience and explore various cultures, traditions, religions and
              environments of India. We also endeavour to benefit local
              communities and protect the environment in which they live in.
            </p>

            <p className={` my-3 leading-[1.6] text-[15px]  text-[#969696]`}>
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              Vivamus consectetuer hendrerit lacus. In hac habitasse platea
              dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="  block md:flex md:flex-row-reverse md:items-center md:px-6 lg:p-14 lg:px-28 ">
        <div className="px-4 flex flex-col gap-5   mt-9 md:w-[50%] ">
          <div className=" flex justify-center lg:p-3">
            <img
              className="w-full hover:scale-95 hover:duration-500 duration-500 rounded-lg"
              src="bleif.jpg"
              alt="our stroy"
            />
          </div>
        </div>
        <div className="px-4 md:w-[50%]">
          <h1
            className={` font-medium leading-10 my-5 text-[30px] lg:text-[40px]`}
          >
            OUR BELIEFS:
          </h1>

          <div className="mt-8">
            <p className={`leading-[1.6] text-[15px]  text-[#969696] my-3`}>
              We believe that each small step can make big changes; giving
              employment to locals, teaching the importance of the environment
              and how to protect it.
            </p>
          </div>
        </div>
      </div>

      <div className="  block md:flex md:flex-row md:items-center md:px-6 lg:p-14 lg:px-28 ">
        <div className="px-4 flex flex-col gap-5   mt-9 md:w-[50%] ">
          <div className=" flex justify-center lg:p-3">
            <img
              className="w-full hover:scale-95 hover:duration-500 duration-500 rounded-lg"
              src="strategy.jpg"
              alt="our stroy"
            />
          </div>
        </div>
        <div className="px-4  md:w-[50%]">
          <h1
            className={` font-medium leading-10 my-5 text-[30px] lg:text-[40px] rounded-lg`}
          >
            OUR STRATEGY:
          </h1>

          <div className="mt-8">
            <p className={`leading-[1.6] text-[15px]  text-[#969696] my-3`}>
              Our strategy is to explore new Himalayan regions, valleys,
              villages, cultures and create programs which can best suit the
              needs of both foreign and domestic tourists. ï¿½According to the
              programs demand we do hire local guides and other required people
              from the local community to not only help us but to help them in
              return by raising personal and community economic growth. For the
              whole trip we do buy all the goods and requirements from small
              local businesses to ensure sure that the regions we are travelling
              through, that the money remains within that region so that the
              economy of the area can get the benefit from us. If local
              communities start getting good economic development, then they can
              provide good education to their kids, which will secure their
              future in many ways.
            </p>
          </div>
        </div>
      </div>

      <div className="  block md:flex md:flex-row-reverse md:items-center md:px-6 lg:p-14 lg:px-28 ">
        <div className="px-4 flex flex-col gap-5   mt-9 md:w-[50%] ">
          <div className=" flex justify-center lg:p-3">
            <img
              className="w-full hover:scale-95 hover:duration-500 duration-500 rounded-lg"
              src="Sustainable.jpg"
              alt="our stroy"
            />
          </div>
        </div>

        <div className="px-4 md:w-[50%]">
          <h1
            className={` font-medium leading-10 my-5 text-[30px] lg:text-[40px]`}
          >
            Sustainable Travel
          </h1>

          <div className="mt-8">
            <p className={`leading-[1.6] text-[15px]  text-[#969696] my-3`}>
              Sustainability is often associated with development ‘meeting the
              needs of the present without compromising the ability of future
              generations to meet their own needs (1987 UN Convention on
              Environment and Development). Tourism in mountains has a long
              history and attracts more and more visitors each year therefore
              thinking sustainably is becoming an increasing strategy to help
              preserve.ï¿½ Into Wild Himalaya Adventure Tour & Travels strives
              for sustainable tourism; focusing on travel that has minimal
              impact on the environment and local communities as well as
              benefiting the economy. We ensure that every trek and tour is kept
              clean, following the Leave No Trace principles, as well as
              protecting the local nature and biodiversity of the area clients
              travel through. We also ensure that local communities are
              benefited in the following ways:
            </p>
            <p>
              {" "}
              We buy our requirements from local goods and services such as food
              and equipment. - Hiring experienced locals for IWH organised tours
              as well as locals within the regions our trips are running
              through. We also like to ensure your money stays where you spend
              it. - During the treks we use local resources like vegetables and
              milk from the villages en route. - On some of our treks we do like
              to use villagers houses as a home stay, which is a good way to be
              immersed within their culture and environment without harm. This
              also benefits the community as a whole by boosting local economic
              development and protecting the longevity of their culture and
              traditions. To be sustainable, as mentioned previously, is to not
              compromise the ability of future generations therefore IWH
              endeavours to teach youths and raise awareness of the importance
              of protecting the environment. We believe in the ethics that if
              you want to see a change, make a change in your child.” In raising
              awareness and sharing knowledge of the environment we live in,
              helps to protect it as a child from any nation can make a big
              change for the present and the future. Therefore we do organise a
              few activities for school groups below: - Adventure camping
              programs for school groups which teaches the benefits of tree
              plantation to prevent deforestation and how this helps the Earth
              and us. ï¿½ - The importance to not litter and the banning of
              plastics. - The seven principles of LNT (Leave No Trace)
            </p>
          </div>
        </div>
      </div>

      {/* journey , innovation, design section */}
      <div className=' text-white py-16 bg-cover bg-center bg-fixed md:py-32 my-5 w-full bg-[url("https://campic-store-demo.myshopify.com/cdn/shop/files/about1.3.jpg?v=1691030524")] flex gap-5 flex-col md:flex-row md:justify-center'>
        {cardsData.map((data) => {
          return (
            <>
              <div className="flex flex-col items-center gap-5   ">
                <div>{data?.icon}</div>
                <h1 className="text-center text-3xl font-medium">
                  {data?.title}
                </h1>
                <div className="w-16 border-b-2 border-white"></div>
                <p className=" max-w-[400px] text-center text-lg">
                  {data?.Desc}
                </p>
              </div>
            </>
          );
        })}
      </div>

      {/* behind the brands section */}
      <div className="px-4 lg:px-28 mt-6">
        <h1 className="text-center text-[55px] font-medium leading-[1.2] mb-4">
          Meet Our Team
        </h1>
        <p className="text-center mb-4">
          We are a female-founded, 100% woman-led team of collaborative dreamers
          who value innovation, curiosity and free-thinking fearlessness in
          everything that we do. We take immeasurable pride in our work,
          intentionally stitching love into the very fiber and fabric of our
          designs. We are small, but we are a mighty group of talented
          individuals dedicated to bringing you otherworldly designs with
          imagery to match.
        </p>
      </div>
      <div className="w-[50px] text-orange-500 border-b-2 border-orange-500"></div>
      <div className="my-8 grid md:grid-cols-2">
        <div className="cursor-pointer relative img_teams flex flex-col items-center h-[500px]  overflow-hidden">
          <div className=" gap-3 iconss   absolute  w-full h-full top-0 grid place-items-center ">
            <div className="flex gap-3 ">
              <FaFacebook
                className="hover:text-orange-500 z-50 text-white"
                size={40}
              />
              <FaInstagramSquare
                className="hover:text-orange-500 z-50 text-white"
                size={40}
              />
              <FaTwitterSquare
                className="hover:text-orange-500 z-50 text-white"
                size={40}
              />
            </div>
          </div>
          <div className="w-[300px] h-[400px]  flex justify-center ">
            <img
              className="object-cover w-[300px] h-[400px] object-center "
              src="https://images.unsplash.com/photo-1597698063932-9450882bb1be?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluJTIwY2xpbWJpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <h1 className="text-center text-xl font-medium my-2">
            Adrian Stone{" "}
          </h1>
          <p className="text-center text-[#969696]">ceo</p>
        </div>

        <div className="cursor-pointer relative img_teams flex flex-col items-center h-[500px] max-w-[400px]  ">
          <div className=" gap-3 iconss hidden  absolute  w-full h-full top-0 grid place-items-center ">
            <div className="flex gap-3 ">
              <FaFacebook
                className="hover:text-orange-500 z-50 text-white"
                size={40}
              />
              <FaInstagramSquare
                className="hover:text-orange-500 z-50 text-white"
                size={40}
              />
              <FaTwitterSquare
                className="hover:text-orange-500 z-50 text-white"
                size={40}
              />
            </div>
          </div>

          <div className="w-[300px] h-[400px]  flex justify-center ">
            <img
              className="object-cover w-[300px] h-[400px]"
              src="https://images.unsplash.com/photo-1501535033-a594139be346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyZWtraW5nfGVufDB8fDB8fHww"
              alt=""
            />
          </div>

          <h1 className="text-center text-xl font-medium my-2">Ferguson</h1>
          <p className="text-center text-[#969696]">Designer</p>
        </div>

        <div className="cursor-pointer relative img_teams flex flex-col items-center h-[500px] max-w-[400px]">
          <div className=" gap-3 iconss   absolute  w-full h-full top-0 grid place-items-center ">
            <div className="flex gap-3 ">
              <FaFacebook
                className="hover:text-orange-500 z-50 text-white "
                size={40}
              />
              <FaInstagramSquare
                className="hover:text-orange-500 z-50 text-white "
                size={40}
              />
              <FaTwitterSquare
                className="hover:text-orange-500 z-50 text-white "
                size={40}
              />
            </div>
          </div>
          <div className="w-[300px] h-[400px] md:w-[400px] flex justify-center  ">
            <img
              className="object-cover w-[300px] h-[400px]"
              src="https://images.unsplash.com/photo-1605247940972-3d0718fc7ae7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRyZWtraW5nfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <h1 className="text-center text-xl font-medium my-2">Saga Norén</h1>
          <p className="text-center text-[#969696]">Developer</p>
        </div>

        <div className="cursor-pointer relative img_teams flex flex-col items-center h-[500px] max-w-[400px]">
          <div className=" gap-3 iconss hidden   absolute  w-full h-full top-0 grid place-items-center ">
            <div className="flex gap-3 ">
              <FaFacebook
                className="hover:text-orange-500 z-50 text-white"
                size={40}
              />
              <FaInstagramSquare
                className="hover:text-orange-500 z-50 text-white"
                size={40}
              />
              <FaTwitterSquare
                className="hover:text-orange-500 z-50 text-white"
                size={40}
              />
            </div>
          </div>
          <div className="w-[300px] h-[400px] flex justify-center ">
            <img
              className="object-cover w-[300px] h-[400px]"
              src="https://plus.unsplash.com/premium_photo-1669047670502-48486fe959f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRyZWtraW5nfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <h1 className="text-center text-xl font-medium my-2">Karen Ryan</h1>
          <p className="text-center text-[#969696]">Developer</p>
        </div>
      </div>
    </section>
  );
};

export default About;
