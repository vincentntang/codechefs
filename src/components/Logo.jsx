// import React, { Component } from "react";

// const Logo = () => (
// <svg
//   viewBox="0 0 453 157"
//   xmlns="http://www.w3.org/2000/svg"
//   fillRule="evenodd"
//   clipRule="evenodd"
//   strokeLinejoin="round"
//   strokeMiterlimit="2"
// >
// <defs>
//     <filter id="glow" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
//       <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
//       <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5"/>
//       <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
//       <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter2"/>
//       <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="7"/>
//       <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"/>
//       <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter3"/>
//       <feGaussianBlur in="shadowOffsetOuter3" result="shadowBlurOuter3" stdDeviation="1"/>
//       <feColorMatrix in="shadowBlurOuter3" result="shadowMatrixOuter3" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
//       <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter4"/>
//       <feGaussianBlur in="shadowOffsetOuter4" result="shadowBlurOuter4" stdDeviation="1"/>
//       <feColorMatrix in="shadowBlurOuter4" result="shadowMatrixOuter4" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.69678442 0"/>
//       <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter5"/>
//       <feGaussianBlur in="shadowOffsetOuter5" result="shadowBlurOuter5" stdDeviation="8"/>
//       <feColorMatrix in="shadowBlurOuter5" result="shadowMatrixOuter5" values="0 0 0 0 0.314369351 0 0 0 0 0.8883757 0 0 0 0 0.759899616 0 0 0 0.649371603 0"/>
//       <feMerge>
//         <feMergeNode in="shadowMatrixOuter1"/>
//         <feMergeNode in="shadowMatrixOuter2"/>
//         <feMergeNode in="shadowMatrixOuter3"/>
//         <feMergeNode in="shadowMatrixOuter4"/>
//         <feMergeNode in="shadowMatrixOuter5"/>
//       </feMerge>
//     </filter>

//     <path
//         id="path-1"
//         d="M19.529 745.666h753.378v579.257H19.529z"
//         transform="matrix(.59962 0 0 .2694 106.619 595.988)"
//       />
//       <path
//         id="path-2"
//         d="M0 16.022h7.663v13.934c-1.486 1.068-3.379 1.904-5.677 2.507a27.755 27.755 0 01-7.071.905c-3.065 0-5.979-.451-8.743-1.358a18.709 18.709 0 01-7.279-4.389c-2.09-2.019-3.762-4.643-5.016-7.871-1.254-3.228-1.881-7.141-1.881-11.739 0-4.782.707-8.789 2.124-12.017 1.417-3.228 3.239-5.827 5.47-7.802 2.228-1.974 4.712-3.389 7.453-4.25 2.74-.858 5.435-1.288 8.081-1.288 2.787 0 5.144.233 7.071.696 1.926.465 3.518 1 4.772 1.602v14.49H-.696v-7.941a28 28 0 00-4.458-.348c-1.812 0-3.495.337-5.052 1.01-1.556.673-2.914 1.707-4.075 3.1-1.16 1.393-2.067 3.146-2.717 5.259-.65 2.114-.975 4.61-.975 7.489 0 2.508.302 4.796.906 6.862.603 2.066 1.486 3.843 2.647 5.33a11.952 11.952 0 004.249 3.447c1.672.813 3.576 1.219 5.712 1.219 1.533 0 3.02-.139 4.459-.417v-8.43z"
//         fill="#47cab0"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 382.913 834.775)"
//       />
//       <path
//         id="path-3"
//         d="M0 0c0 2.368.104 4.574.314 6.617.209 2.045.603 3.821 1.184 5.331.58 1.509 1.417 2.705 2.508 3.587 1.091.882 2.544 1.323 4.353 1.323 1.626 0 2.973-.336 4.042-1.01 1.068-.672 1.926-1.706 2.578-3.1.65-1.393 1.101-3.145 1.358-5.259.254-2.113.384-4.61.384-7.489 0-2.275-.082-4.435-.244-6.479-.164-2.042-.536-3.832-1.117-5.364-.58-1.533-1.427-2.752-2.542-3.657-1.114-.905-2.6-1.358-4.459-1.358-3.251 0-5.457 1.416-6.617 4.249C.58-9.775 0-5.573 0 0m-10.031 0c0-3.947.371-7.5 1.114-10.658.743-3.159 1.882-5.817 3.414-7.977 1.532-2.159 3.449-3.82 5.747-4.981 2.299-1.16 5.004-1.741 8.115-1.741 3.345 0 6.177.626 8.499 1.881a15.502 15.502 0 015.678 5.224c1.463 2.229 2.531 4.901 3.205 8.011.672 3.113 1.01 6.526 1.01 10.241 0 7.942-1.522 14.154-4.563 18.635-3.042 4.482-7.652 6.722-13.829 6.722-3.342 0-6.188-.626-8.533-1.88a15.43 15.43 0 01-5.713-5.226c-1.463-2.229-2.519-4.899-3.168-8.01-.651-3.112-.976-6.525-.976-10.241"
//         fill="#47cab0"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 409.684 842.786)"
//       />
//       <path
//         id="path-4"
//         d="M0-33.229c-.883 0-1.741.035-2.577.104a92.63 92.63 0 00-1.881.173V-.278c.184.046.463.081.835.105.371.023.755.046 1.149.068l1.151.07C-.952-.01-.65 0-.418 0c2.693 0 4.842-.499 6.444-1.499 1.602-.997 2.797-2.309 3.587-3.935.79-1.625 1.3-3.459 1.533-5.503.232-2.043.349-4.086.349-6.131a50.23 50.23 0 00-.314-5.503c-.209-1.904-.697-3.646-1.463-5.224-.767-1.58-1.916-2.879-3.448-3.901-1.534-1.021-3.623-1.533-6.27-1.533m-14.002-7.803c.417-.046 1.149-.116 2.194-.209 1.044-.092 2.229-.175 3.553-.244 1.324-.069 2.693-.127 4.11-.173 1.416-.047 2.682-.07 3.796-.07 4.32 0 7.896.626 10.728 1.88 2.833 1.254 5.074 2.985 6.724 5.191 1.647 2.206 2.797 4.806 3.448 7.802.649 2.995.975 6.258.975 9.787 0 3.205-.326 6.34-.975 9.405-.651 3.066-1.823 5.794-3.518 8.185-1.696 2.394-4.04 4.32-7.036 5.783C7.001 7.768 3.158 8.499-1.532 8.499c-.743 0-1.697-.024-2.857-.069a214.37 214.37 0 01-3.553-.174c-1.207-.07-2.369-.14-3.483-.21-1.114-.069-1.974-.151-2.577-.244v-48.834z"
//         fill="#47cab0"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 459.793 859.435)"
//       />
//       <path
//         id="path-5"
//         d="M0-48.765h31.975v8.499H9.543v11.355h20.689v8.499H9.543v11.913h22.78V0H0v-48.765z"
//         fill="#47cab0"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 489.506 868.732)"
//       />
//       <path
//         id="path-6"
//         d="M0 16.021h7.663v13.934c-1.486 1.068-3.379 1.905-5.677 2.507a27.756 27.756 0 01-7.071.906c-3.065 0-5.979-.452-8.743-1.359a18.719 18.719 0 01-7.279-4.388c-2.09-2.02-3.762-4.643-5.016-7.871-1.254-3.228-1.881-7.141-1.881-11.74 0-4.782.707-8.789 2.124-12.017 1.417-3.227 3.239-5.826 5.47-7.802 2.228-1.973 4.712-3.389 7.453-4.249 2.74-.859 5.435-1.289 8.081-1.289 2.787 0 5.144.233 7.071.696 1.926.466 3.518 1 4.772 1.603v14.49H-.696V-8.5a28 28 0 00-4.458-.348c-1.812 0-3.495.338-5.052 1.01-1.556.673-2.914 1.707-4.075 3.1-1.16 1.394-2.067 3.147-2.717 5.259-.65 2.114-.975 4.611-.975 7.489 0 2.508.302 4.796.906 6.863.603 2.066 1.486 3.842 2.647 5.33a11.962 11.962 0 004.249 3.447c1.672.813 3.576 1.219 5.712 1.219 1.533 0 3.02-.14 4.459-.417v-8.431z"
//         fill="#fff"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 382.913 897.463)"
//       />
//       <path
//         id="path-7"
//         d="M0 7.941h-15.744v20.412h-9.543v-48.765h9.543V-.558H0v-19.854h9.544v48.765H0V7.941z"
//         fill="#fff"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 425.916 901.501)"
//       />
//       <path
//         id="path-8"
//         d="M0-48.765h31.975v8.499H9.543v11.355h20.689v8.499H9.543v11.913h22.78V0H0v-48.765z"
//         fill="#fff"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 445.668 928.88)"
//       />
//       <path
//         id="path-9"
//         d="M0-48.765h30.93v8.499H9.543v12.052h19.854v8.499H9.543V0H0v-48.765z"
//         fill="#fff"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 489.496 928.866)"
//       />
//       <path
//         id="path-10"
//         d="M0 16.859h7.662v6.896c.14.047.279.095.419.14 1.068.465 2.239.848 3.519 1.149a17.65 17.65 0 004.075.453c2.599 0 4.62-.523 6.06-1.568 1.439-1.044 2.16-2.449 2.16-4.215 0-1.577-.592-2.855-1.777-3.831-1.184-.974-2.647-1.834-4.389-2.577a105.945 105.945 0 00-5.712-2.229 27.163 27.163 0 01-5.713-2.822 15.73 15.73 0 01-4.389-4.284C.731 2.254.14.024.14-2.716c0-2.091.406-4.006 1.218-5.747a13.238 13.238 0 013.413-4.494c1.463-1.254 3.216-2.229 5.261-2.926 2.043-.696 4.32-1.045 6.826-1.045 2.833 0 5.62.256 8.36.766 2.741.512 4.922 1.209 6.55 2.09V.07h-7.664v-7.733c-.14 0-.279-.023-.418-.07a26.447 26.447 0 00-3.309-.661 25.948 25.948 0 00-3.519-.244c-2.228 0-3.982.442-5.258 1.323-1.28.883-1.916 2.068-1.916 3.554 0 1.533.592 2.786 1.776 3.762 1.185.974 2.647 1.857 4.389 2.646a99.804 99.804 0 005.713 2.368 30.096 30.096 0 015.711 2.892 15.762 15.762 0 014.39 4.284c1.184 1.72 1.775 3.878 1.775 6.48 0 2.507-.464 4.702-1.393 6.583a13.314 13.314 0 01-3.9 4.737c-1.673 1.277-3.648 2.228-5.922 2.855-2.277.628-4.737.941-7.385.941-1.766 0-3.401-.14-4.91-.417a32.373 32.373 0 01-4.18-1.046 28.252 28.252 0 01-3.38-1.323A55.327 55.327 0 010 29.816V16.859z"
//         fill="#fff"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 526.96 897.043)"
//       />
//       <path
//         id="path-11"
//         d="M0-79.136v22.31c0 6.139-4.994 11.132-11.133 11.132v12.251C-4.994-33.443 0-28.449 0-22.31V-.001c0 12.895 10.489 23.384 23.383 23.384v-12.25c-6.139 0-11.133-4.995-11.133-11.134V-22.31c0-6.827-2.941-12.98-7.623-17.258 4.682-4.279 7.623-10.431 7.623-17.258v-22.31c0-6.139 4.994-11.133 11.133-11.133v-12.25C10.489-102.519 0-92.03 0-79.136"
//         fill="#47cab0"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 141.29 912.638)"
//       />
//       <path
//         id="path-12"
//         d="M0-34.516v-22.31C0-69.72-10.489-80.209-23.383-80.209v12.25c6.139 0 11.133 4.994 11.133 11.133v22.31c0 6.827 2.941 12.979 7.623 17.258C-9.309-12.98-12.25-6.828-12.25 0v22.309c0 6.139-4.994 11.134-11.133 11.134v12.25C-10.489 45.693 0 35.204 0 22.309V0c0-6.139 4.994-11.133 11.133-11.133v-12.251C4.994-23.384 0-28.377 0-34.516"
//         fill="#47cab0"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 336.52 890.327)"
//       />
//       <path
//         id="path-13"
//         d="M0 59.809c27.495 0 39.947-9.93 39.947-12.944V10.2c-4.654-1.204-7.945-3.038-11.189-5.337a26.63 26.63 0 01-5.127.532l-.368.001c-5.902 0-10.753-1.229-14.426-3.652C4.625 3.359-.042 3.943-4.966 3.492c-4.75-.44-8.775-1.613-11.976-3.492-3.453 4.996-8.573 8.68-15.027 11.021-2.519.914-5.362 1.728-7.978 1.874v33.97c0 3.014 12.452 12.944 39.947 12.944"
//         fill="#fff"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 238.57 875.613)"
//       />
//       <path
//         id="path-14"
//         d="M0 19.998C-.711 7.984-9.027 1.697-14.477.572c-.234 5.396-2.955 9.58-5.949 11.357.036-.119 3.535-11.97-3.288-19.036-6.265-6.489-14.288-5.825-17.313-5.278.056 3.231-1.161 6.521-3.17 8.446 0-4.767-2.709-11.934-7.243-15.678-3.692-3.049-9.647-6.845-19.686-5.693-16.092 1.847-20.169 16.475-20.716 20.935l-3.532-1.553a25.524 25.524 0 00-10.372-2.199c-4.995 0-10.938 1.404-15.395 4.161-7.465 4.619-12.153 11.597-12.747 20.937-.651 10.255 3.491 18.009 11.284 23.91 5.773 4.369 13.746 5.579 21.891 3.308 6.859-1.914 11.803-6.285 13.922-12.305 1.865-5.299 1.958-12.394.227-17.256 5.161 2.35 8.278 12.099 5.725 19.35a7.482 7.482 0 01-.098.263c1.778 1.1 4.819 2.393 9.654 2.84 6.513.604 12.344-1.014 16.408-4.562 5.193-4.531 8.226-10.966 8.538-18.118 3.769 6.643 1.35 17.865-4.39 22.872-.29.253-.589.502-.895.743 2.172.653 4.964.974 8.299.942 11.761-.103 18.366-10.067 20.11-13.119.624 3.984-1.016 11.508-7.067 15.622 5.191 2.409 13.629 1.902 19.745-1.103C-2.754 36.536.475 28.02 0 19.998"
//         fill="#fff"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 305.468 835.74)"
//       />
//       <path
//         id="path-15"
//         d="M0 59.809c27.495 0 39.947-9.93 39.947-12.944V10.2c-4.654-1.204-7.945-3.038-11.189-5.337a26.63 26.63 0 01-5.127.532l-.368.001c-5.902 0-10.753-1.229-14.426-3.652C4.625 3.359-.042 3.943-4.966 3.492c-4.75-.44-8.775-1.613-11.976-3.492-3.453 4.996-8.573 8.68-15.027 11.021-2.519.914-5.362 1.728-7.978 1.874v33.97c0 3.014 12.452 12.944 39.947 12.944"
//         fill="#fff"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 238.57 875.613)"
//       />
//       <path
//         id="path-16"
//         d="M0 19.998C-.711 7.984-9.027 1.697-14.477.572c-.234 5.396-2.955 9.58-5.949 11.357.036-.119 3.535-11.97-3.288-19.036-6.265-6.489-14.288-5.825-17.313-5.278.056 3.231-1.161 6.521-3.17 8.446 0-4.767-2.709-11.934-7.243-15.678-3.692-3.049-9.647-6.845-19.686-5.693-16.092 1.847-20.169 16.475-20.716 20.935l-3.532-1.553a25.524 25.524 0 00-10.372-2.199c-4.995 0-10.938 1.404-15.395 4.161-7.465 4.619-12.153 11.597-12.747 20.937-.651 10.255 3.491 18.009 11.284 23.91 5.773 4.369 13.746 5.579 21.891 3.308 6.859-1.914 11.803-6.285 13.922-12.305 1.865-5.299 1.958-12.394.227-17.256 5.161 2.35 8.278 12.099 5.725 19.35a7.482 7.482 0 01-.098.263c1.778 1.1 4.819 2.393 9.654 2.84 6.513.604 12.344-1.014 16.408-4.562 5.193-4.531 8.226-10.966 8.538-18.118 3.769 6.643 1.35 17.865-4.39 22.872-.29.253-.589.502-.895.743 2.172.653 4.964.974 8.299.942 11.761-.103 18.366-10.067 20.11-13.119.624 3.984-1.016 11.508-7.067 15.622 5.191 2.409 13.629 1.902 19.745-1.103C-2.754 36.536.475 28.02 0 19.998"
//         fill="#fff"
//         fillRule="nonzero"
//         transform="matrix(1 0 0 1 305.468 835.74)"
//       />
//   </defs>
//   <g transform="translate(-118 -796)">
//     <g id="schedule-location" fill="none" fillRule="evenodd">
//       {/* <g id="ocation">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-1"/>
//         <use fill="#FFF" xlinkHref="#path-1"/>
//       </g> */}
//       <g id="L">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-2"/>
//         <use fill="#FFF" xlinkHref="#path-2"/>
//       </g>
//       <g id="et">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-3"/>
//         <use fill="#FFF" xlinkHref="#path-3"/>
//       </g>
//       <g id="chedule">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-4"/>
//         <use fill="#FFF" xlinkHref="#path-4"/>
//       </g>
//       <g id="S">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-5"/>
//         <use fill="#FFF" xlinkHref="#path-5"/>
//       </g>
//       <g id="6">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-6"/>
//         <use fill="#FFF" xlinkHref="#path-6"/>
//       </g>
//       <g id="7">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-7"/>
//         <use fill="#FFF" xlinkHref="#path-7"/>
//       </g>
//       <g id="8">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-8"/>
//         <use fill="#FFF" xlinkHref="#path-8"/>
//       </g>
//       <g id="9">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-9"/>
//         <use fill="#FFF" xlinkHref="#path-9"/>
//       </g>
//       <g id="10">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-10"/>
//         <use fill="#FFF" xlinkHref="#path-10"/>
//       </g>
//       <g id="11">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-11"/>
//         <use fill="#FFF" xlinkHref="#path-11"/>
//       </g>
//       <g id="12">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-12"/>
//         <use fill="#FFF" xlinkHref="#path-12"/>
//       </g>
//       <g id="13">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-13"/>
//         <use fill="#FFF" xlinkHref="#path-13"/>
//       </g>
//       <g id="14">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-14"/>
//         <use fill="#FFF" xlinkHref="#path-14"/>
//       </g>
//       <g id="15">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-15"/>
//         <use fill="#FFF" xlinkHref="#path-15"/>
//       </g>
//       <g id="16">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-16"/>
//         <use fill="#FFF" xlinkHref="#path-16"/>
//       </g>
//     </g>
//     {/* <g id="Artboard3">
//       <g id="ocation">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-1"/>
//         <use fill="#FFF" xlinkHref="#path-1"/>
//       </g>
//       <g id="L">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-2"/>
//         <use fill="#FFF" xlinkHref="#path-2"/>
//       </g>
//       <g id="et">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-3"/>
//         <use fill="#FFF" xlinkHref="#path-3"/>
//       </g>
//       <g id="chedule">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-4"/>
//         <use fill="#FFF" xlinkHref="#path-4"/>
//       </g>
//       <g id="S">
//         <use fill="#000" filter="url(#glow)" xlinkHref="#path-5"/>
//         <use fill="#FFF" xlinkHref="#path-5"/>
//       </g>

//     </g> */}
//   </g>
// </svg>


// )

// export default Logo;


// // https://9elements.com/blog/creating-an-animated-svg-neon-light-effect/


// {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 327 178" >
//   <title>Schedule &amp; Location</title>
//   <defs>
//     <filter id="glow" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
//       <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
//       <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5"/>
//       <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
//       <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter2"/>
//       <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="7"/>
//       <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"/>
//       <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter3"/>
//       <feGaussianBlur in="shadowOffsetOuter3" result="shadowBlurOuter3" stdDeviation="10"/>
//       <feColorMatrix in="shadowBlurOuter3" result="shadowMatrixOuter3" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
//       <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter4"/>
//       <feGaussianBlur in="shadowOffsetOuter4" result="shadowBlurOuter4" stdDeviation="1"/>
//       <feColorMatrix in="shadowBlurOuter4" result="shadowMatrixOuter4" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.69678442 0"/>
//       <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter5"/>
//       <feGaussianBlur in="shadowOffsetOuter5" result="shadowBlurOuter5" stdDeviation="8"/>
//       <feColorMatrix in="shadowBlurOuter5" result="shadowMatrixOuter5" values="0 0 0 0 0.314369351 0 0 0 0 0.8883757 0 0 0 0 0.759899616 0 0 0 0.649371603 0"/>
//       <feMerge>
//         <feMergeNode in="shadowMatrixOuter1"/>
//         <feMergeNode in="shadowMatrixOuter2"/>
//         <feMergeNode in="shadowMatrixOuter3"/>
//         <feMergeNode in="shadowMatrixOuter4"/>
//         <feMergeNode in="shadowMatrixOuter5"/>
//       </feMerge>
//     </filter>
    
//     <path id="path-1" d="M271.2 118.7c-2 .3-3.3-.4-3.3-2.1 0-.7.3-1.8.8-3l5.1-11.7c.8-2 3-6.9 6.7-7.4 2-.3 3.3.4 3.3 2.2 0 .6-.2 1.7-.7 2.9l-5.2 11.7c-.8 2-3 7-6.7 7.4zm-38.1-.5c-1 2-3.1 6-6.3 6.4-2 .3-3.4-.4-3.4-2.2 0-.6.3-1.7.8-2.9l5.2-11.7c.8-2 3-7 6.7-7.4 2-.3 3.3.4 3.3 2.1 0 .8-.3 1.7-.8 3l-5.5 12.7zm52-18l-5.4 12c-.9 2.3-3.6 7.9-8.5 8.5-2.7.4-4.7-.4-5.3-2.5-1.5 2-3.6 3.7-6 4-2.6.4-4.4-.4-5-2.5-1.4 2-3.5 3.6-5.8 4-3 .3-5-.4-5.5-2.6-1.6 2-3.6 3.8-6 4-2.7.4-4.5-.4-5-2.6-1.4 2-3.3 3.8-5.8 4.1-3 .4-5-.6-5.4-3a14.4 14.4 0 0 1-8.5 4.9c-6 .8-9.8-2.6-6.2-10.7l4-8.7c.9-2.2 3.5-7.8 8.2-8.4 4.1-.6 5.8 2.1 4.1 6.2l-.6 1.7c-.8 2-3.1 1.8-2.4 0l.7-1.7c.7-1.8 1.4-4.7-1.8-4.2-3.6.4-5.6 5.4-6.4 7.3l-3.7 8.4c-2.5 5.5-.7 8.7 4 8 4.8-.6 8.2-5.1 9.4-7.5l5.3-12c1-2.3 3.7-7.9 8.6-8.5 2.2-.3 4 .4 4.7 2l.7-1.7c.6-1.4 2.7-1 2 .6l-8 18.7a9.2 9.2 0 0 0-.8 3c0 1.8 1 2.4 3 2.2 3.9-.6 6-5.7 6.6-7.1l7.5-17.4-2 .2c-1.5.2-1-1.9.6-2l2.3-.4 3.5-8c.6-1.5 2.7-1 2 .5l-3 7.2 3.6-.5c1.4-.2.7 2-.7 2.1l-4 .6-7.8 18.2a9.2 9.2 0 0 0-.8 3c0 1.7 1.4 2.3 3.6 2 4-.5 6-5.7 6.7-7v-.1l8-18.7c.6-1.5 2.7-1 2 .6l-8 18.7a9.1 9.1 0 0 0-.8 3c0 1.7 1 2.3 3 2.1 4-.5 6-5.7 6.6-7.1L272 101c.9-2.2 3.6-7.9 8.5-8.5 3.3-.4 5.5.8 5.5 3.9 0 1.1-.3 2.3-1 3.8zM267.8 90c-1.2.1-1.8-.7-1.6-1.8.2-1 1.2-2.1 2.2-2.3 1.1-.1 2 .7 1.7 1.8a3 3 0 0 1-2.3 2.3zM200 105c2-.2 3.4.5 3.4 2.2 0 .7-.3 1.8-.8 3l-5.2 11.7c-.8 2-3 6.9-6.7 7.4-2 .2-3.3-.4-3.3-2.2 0-.6.3-1.7.8-2.9l5.1-11.8c.8-1.9 3-6.8 6.7-7.3m-8.5 6.4c1-2.2 3.6-7.8 8.5-8.4 3.3-.5 5.5.7 5.5 3.8 0 1.2-.3 2.4-1 3.8l-5.3 12.1c-.9 2.2-3.6 7.8-8.5 8.5-3.3.4-5.5-.8-5.5-3.9 0-1.1.3-2.3 1-3.8l5.3-12zm116.5-4c.6-1.2 2.3-.8 1.8.5-1 2.8-4.1 8-8.5 8.6-3.1.4-5-.7-5-3.8 0-1.2.2-2.4.9-3.9l5.2-12c.5-1.1.8-2.3.8-3 0-1.6-1.4-2.5-3.3-2-3.2.6-5.3 4.2-6.3 6.2L288 111c-1 2.4-4.2 8-8.8 8.6-1.5.2-1.4-1.8 0-2 3.6-.4 5.6-4.7 6.7-7.1l8.1-18.8c.5-1.3 2.4-1 2.1.3 1.1-1 2.3-1.8 3.7-2 3.3-.7 5.5.7 5.5 3.8 0 1.2-.3 2.3-1 3.8l-5.2 12a9.2 9.2 0 0 0-.8 3c0 1.7 1 2.4 3 2.1 4-.5 6-5.8 6.6-7.1z"/>
//     <path id="path-2" d="M140.1 143.6c-6.2.9-12.5-.9-12.5-5 0-3.6 3.7-6.3 9.7-7.1 6.4-.9 12.2 2 18.1 6.2a34.2 34.2 0 0 1-15.3 6m5.2-19.8c-8.8-3-12.8-11.5-8.7-21a27.3 27.3 0 0 1 33.1-14.5c3.7 1.4 8 3.7 10.6 7l-4.4 10.2-5 12-1.4 2.8a30 30 0 0 1-24.2 3.5m36.3-26.5l.8 1.8c.2.6.5.7.9.7.5 0 1.1-.7 1-1.2V98c-.4-1-.9-2.2-1.5-3 2.7-5.8 5.6-10.5 8.5-11 1.8-.1 2.6 1.2 2.6 4-.1 9.2-9.3 22.7-21.4 30.6l.3-.6 5-12 3.8-8.6m28.3 36.2c-1-.5-2.4.8-1 1.7 1.6 1.2 2.9 2.7 2.6 5.9-.7 5.2-6 11.4-15 12.6-15.6 2-26.7-8.4-37.5-16.3 4.4-3.7 8.4-8.7 11.9-15.4 14.1-8 25-23.5 25.1-34.3 0-4-1.4-6.3-4.4-6-4 .6-7.3 5.4-10.2 11.4a25.4 25.4 0 0 0-10.5-6.8 29.8 29.8 0 0 0-36.2 16c-4.6 10.5-.4 20.4 9.5 23.6 7.9 2.7 16.1 1.3 23.6-2.2a44 44 0 0 1-10.5 12.5c-6.4-4.6-12.8-8-20-7-5.4.7-12 4-12 9.6 0 5.5 6.8 8 14.8 6.9 5.7-.7 11.6-2.8 17-6.9l1.8 1.4c10.3 7.8 21.2 17.8 37.5 15.7 10.6-1.4 16.5-8.8 17.2-14.8.3-3.4-.9-6.2-3.7-7.6"/>
//     <path id="path-3" d="M210.7 66.2c0 7.8 6.3 16 20.5 14.3 13.6-1.8 21-13.6 21-20.3 0-2.1-.6-3.8-1.5-5.3 2 .8 4.2 1.4 6.7 1 5-.6 8.2-5.1 8.2-8.7 0-2-.7-3.5-2.5-4.4-1.3-.6-2.6 1.5-1.1 2 1 .6 1.5 1.5 1.5 2.7 0 2.5-2.3 5.8-6 6.3-4 .5-7.8-1.9-12-2.8-1.2-.4-2.5-.5-4.2-.4h-.4c-3 .5-6.3 2.6-8 5.7-1.2 2 .6 2.6 1.6 1.3a8.6 8.6 0 0 1 6.4-4.8h3.3c5.4 1 5.7 6.5 5.7 7.7 0 6-6.8 16.3-18.7 17.9-12.4 1.5-18.5-5.4-18.5-12.5 0-7.4 7.1-15.1 15.2-16.5h.7c.8-.2 1.1-.8 1.1-1.3s-.3-1-1.1-.8h-.5c-6.7.7-9.8-3.5-9.8-7.3 0-6.7 6.3-12.6 14.6-13.7C241 25.3 246 30 246 35c0 3.8-2.8 7.5-7.2 8.1-3.4.4-6.5-1.3-6.5-4.5 0-1 .4-1.7.8-2.4 1-1.1-.6-2-1.7-.9-.9 1.2-1 2.1-1 3.4 0 4.6 3.4 7 8.4 6.4 5.6-.7 9.1-5.6 9.1-10.5 0-5.7-6-11.3-15.1-10.1-9.4 1.2-16.7 8.2-16.7 15.8 0 3.6 2.3 7.5 6.7 8.8-7 3.3-12.2 10.6-12.2 17.2"/>
//     <path id="path-4" d="M131.8 46.4c.8-2 3-6.9 6.7-7.4 2-.2 3.3.4 3.3 2.2 0 .7-.3 1.7-.8 2.9l-5.2 12-.3.7c-1 2.1-3.1 6-6.4 6.4-1.9.3-3.3-.4-3.3-2.1 0-.7.3-1.8.8-3l5.2-11.7zm-17 2.2c.9-1.9 2.9-6.8 6.5-7.3 3.2-.4 2.5 2.4 1.8 4.2-1.7 4.3-3.7 6.6-7 7-1 .2-2.3-.1-2.7-.4l1.5-3.5zm71.9-9.5c.8-1.9 2.8-6.8 6.4-7.3 3.2-.4 2.5 2.4 1.8 4.2-1.7 4.3-3.7 6.6-7 7-1 .2-2.3-.1-2.7-.5l1.5-3.4zM129 65.2c2.6-.3 4.5-2.1 5.9-4 .5 2.1 2.3 3 5 2.6 2.4-.3 4.5-2 6-4 .5 2 2.5 2.9 5.3 2.5 2.5-.3 4.4-2.2 5.8-4 .5 2 2.3 3 5 2.6 2.4-.3 4.4-2 6-4 .4 2 2.2 2.9 4.9 2.5 2.8-.4 5.2-2.8 6.7-5.2.9 2.8 3.6 3.9 7.3 3.4 5-.7 9.5-5 11.2-9 .6-1.4-1.2-1.7-1.8-.6-1.2 2.4-4.6 7-9.4 7.5-4.7.7-6.5-2.5-4-8l1.2-3c.9.7 2.3 1 3.7.8 4.2-.6 7-3.4 9.3-9.2 1.6-4.1 0-6.9-4.1-6.3-4.8.6-7.4 6.2-8.3 8.4l-3.9 8.7a18 18 0 0 0-1 3.2c-.1 0-.2 0-.2.2-.6 1.3-2.7 6.6-6.7 7.1-1.9.3-3-.4-3-2.1 0-.7.3-1.8.8-3l15.5-35.8c.7-1.6-1.4-2-2-.6l-15.5 35.8c-.6 1.4-2.7 6.6-6.7 7.1-1.8.3-3-.4-3-2 0-.7.4-1.8.9-3l8-18.8c.7-1.6-1.4-2-2-.6l-8 18.7-.4.8c-1 2-3.1 6-6.3 6.4-2 .2-3.4-.4-3.4-2.2 0-.6.3-1.7.8-2.9l8.2-18.7c.6-1.6-1.5-2-2-.6l-8.2 18.7c-.6 1.5-2.7 6.7-6.7 7.2-1.9.2-3-.4-3-2.2 0-.6.4-1.7.9-3l15.4-35.8c.7-1.6-1.4-2-2-.6L143.2 39c-.7-1.6-2.5-2.3-4.7-2-4.9.6-7.6 6.3-8.6 8.5l-5.3 12c-1.2 2.4-4.6 7-9.3 7.6-4.8.6-6.6-2.6-4.2-8l1.3-3c1 .6 2.4.9 3.7.7 4.3-.6 7-3.4 9.3-9.2 1.6-4.1 0-6.9-4.1-6.3-4.8.6-7.3 6.2-8.3 8.4l-3.9 8.7a18 18 0 0 0-1 3.2l-.2.2c-.6 1.3-2.7 6.6-6.7 7.1-1.9.3-3-.4-3-2.1 0-.7.4-1.8.9-3l5.2-12c.7-1.4 1-2.6 1-3.8 0-3-2.3-4.3-5.5-3.9-1.3.2-2.5 1-3.7 2l7.3-16.6c.8-1.7-1.5-2-2-.6L85.9 62.7c-1.2 2.3-4.6 6.9-9.4 7.5-4.7.6-6.5-2.5-4-8l3.7-8.4c.8-2 2.8-6.9 6.4-7.4 3.1-.4 2.5 2.4 1.8 4.2l-.8 1.7c-.7 1.8 1.6 2.1 2.4 0l.7-1.6c1.6-4.1 0-6.8-4.1-6.3-4.8.6-7.4 6.2-8.3 8.4l-3.9 8.8c-3.6 8 0 11.4 6.1 10.6 5-.7 9.5-5 11.2-9l5.5-12.6c1-2 3.4-6 6.6-6.5 2-.2 3.3.5 3.3 2.2 0 .6-.3 1.8-.8 3l-5.3 12c-.6 1.4-.9 2.6-.9 3.8 0 3 2 4.3 5.1 3.8 2.9-.3 5.2-2.7 6.8-5.1.8 2.7 3.6 3.8 7.3 3.3 3.2-.5 6.3-2.4 8.5-4.9.4 2.5 2.4 3.4 5.3 3z"/>
//     <path id="path-5" d="M70.4 25.6c3.7-.5 6.6 1.6 6.6 5 0 2-1.6 5-4.7 5.6-1.6.2-1.6 2.2 0 2 4.4-.7 6.9-5 6.9-8 0-5.2-4.7-7.2-8.9-6.6-5 .6-11.8 5.8-11.8 13.6 0 7.4 4.5 13.5 4.5 20.5 0 13.4-11.5 22.6-21.7 24-10 1.2-19.1-4.5-19.1-14.8 0-9.4 6.7-18.6 17.2-20C48 45.8 52 49.7 52 55.3c0 2-.8 4.1-2.5 5.9-1.4 1.5.2 2.5 1.5 1.3 2-2.2 3.2-5 3.2-7.5 0-6.6-4.8-11.6-14.6-10.3A23 23 0 0 0 20 67.2c0 11.5 9.6 18.1 21.3 16.6 11.2-1.5 23.8-11.5 23.8-26.4 0-8-4.4-13.3-4.4-20.5 0-6.4 5.5-10.8 9.7-11.3"/>
  
//   </defs>
//   <g id="schedule-location" fill="none" fillRule="evenodd">
//     <g id="ocation">
//       <use fill="#000" filter="url(#glow)"/>
//       <use fill="#FFF" xlinkHref="#path-1"/>
//     </g>
//     <g id="L">
//       <use fill="#000" filter="url(#glow)" xlinkHref="#path-2"/>
//       <use fill="#FFF" xlinkHref="#path-2"/>
//     </g>
//     <g id="et">
//       <use fill="#000" filter="url(#glow)" xlinkHref="#path-3"/>
//       <use fill="#FFF" xlinkHref="#path-3"/>
//     </g>
//     <g id="chedule">
//       <use fill="#000" filter="url(#glow)" xlinkHref="#path-4"/>
//       <use fill="#FFF" xlinkHref="#path-4"/>
//     </g>
//     <g id="S">
//       <use fill="#000" filter="url(#glow)" xlinkHref="#path-5"/>
//       <use fill="#FFF" xlinkHref="#path-5"/>
//     </g>
//   </g>
// </svg> */}