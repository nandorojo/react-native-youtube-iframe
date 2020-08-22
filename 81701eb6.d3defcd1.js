(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Type",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(70)),i={id:"component-ref-methods",title:"Player Functions"},c={unversionedId:"component-ref-methods",id:"component-ref-methods",isDocsHomePage:!1,title:"Player Functions",description:"export const Type = ({children, color}) => (",source:"@site/../docs/ref_methods.mdx",permalink:"/react-native-youtube-iframe/component-ref-methods",editUrl:"https://github.com/LonelyCpp/react-native-youtube-iframe/edit/master/docs/../docs/ref_methods.mdx",sidebar:"someSidebar",previous:{title:"Props",permalink:"/react-native-youtube-iframe/component-props"},next:{title:"Module Methods",permalink:"/react-native-youtube-iframe/module-methods"}},l=[{value:"Basic usage",id:"basic-usage",children:[]},{value:"<code>getDuration</code>",id:"getduration",children:[]},{value:"<code>getCurrentTime</code>",id:"getcurrenttime",children:[]},{value:"<code>isMuted</code>",id:"ismuted",children:[]},{value:"<code>getVolume</code>",id:"getvolume",children:[]},{value:"<code>getPlaybackRate</code>",id:"getplaybackrate",children:[]},{value:"<code>getAvailablePlaybackRates</code>",id:"getavailableplaybackrates",children:[]},{value:"<code>seekTo</code>",id:"seekto",children:[]}],s=function(e){var t=e.children;e.color;return Object(o.b)("span",{style:{backgroundColor:"#25c2a0",borderRadius:"20px",color:"#fff",padding:"0.2em 0.4em 0.2em 0.4em",fontSize:"0.8em"}},t)},u={rightToc:l,Type:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"basic-usage"},"Basic usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, {useRef} from 'react';\nimport YoutubePlayer, {YoutubeIframeRef} from \"react-native-youtube-iframe\";\n\nconst App = () => {\n\n  const playerRef = useRef();\n\n  // typescript\n  // const playerRef = useRef<YoutubeIframeRef>(null);\n\n  return (\n    <YoutubePlayer\n        ref={playerRef}\n        height={400}\n        width={400}\n        videoId={'AVAc1gYLZK0'}\n      />\n\n    <Button\n        title=\"log details\"\n        onPress={() => {\n          playerRef.current?.getCurrentTime().then(\n            currentTime => console.log({currentTime})\n          );\n\n          playerRef.current?.getDuration().then(\n            getDuration => console.log({getDuration})\n          );\n        }}\n      />\n  );\n};\n")),Object(o.b)("h3",{id:"getduration"},Object(o.b)("inlineCode",{parentName:"h3"},"getDuration")),Object(o.b)(s,{mdxType:"Type"},"function(): Promise[Number]"),Object(o.b)("p",null,"returns a promise that resolves to the total duration of the video"),Object(o.b)("p",null,"If the currently playing video is a live event, the getDuration() function will resolve the elapsed time since the live video stream began. Specifically, this is the amount of time that the video has streamed without being reset or interrupted. In addition, this duration is commonly longer than the actual event time since streaming may begin before the event's start time."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"getDuration() will return 0 until the video's metadata is loaded, which normally happens just after the video starts playing."))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getcurrenttime"},Object(o.b)("inlineCode",{parentName:"h3"},"getCurrentTime")),Object(o.b)(s,{mdxType:"Type"},"function(): Promise[Number]"),Object(o.b)("p",null,"returns a promise that resolves to the elapsed time in seconds since the video started playing."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ismuted"},Object(o.b)("inlineCode",{parentName:"h3"},"isMuted")),Object(o.b)(s,{mdxType:"Type"},"function(): Promise[Boolean]"),Object(o.b)("p",null,"returns a promise that resolves to true if the video is muted, false if not."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getvolume"},Object(o.b)("inlineCode",{parentName:"h3"},"getVolume")),Object(o.b)(s,{mdxType:"Type"},"function(): Promise[Number]"),Object(o.b)("p",null,"returns a promise that resolves to the player's current volume, an integer between 0 and 100. Note that ",Object(o.b)("inlineCode",{parentName:"p"},"getVolume()")," will return the volume even if the player is muted."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getplaybackrate"},Object(o.b)("inlineCode",{parentName:"h3"},"getPlaybackRate")),Object(o.b)(s,{mdxType:"Type"},"function(): Promise[Number]"),Object(o.b)("p",null,"returns a promise that resolves to the current playback rate of the video."),Object(o.b)("p",null,"The default playback rate is 1, which indicates that the video is playing at normal speed. Playback rates may include values like 0.25, 0.5, 1, 1.5, and 2."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getavailableplaybackrates"},Object(o.b)("inlineCode",{parentName:"h3"},"getAvailablePlaybackRates")),Object(o.b)(s,{mdxType:"Type"},"function(): Promise[Array[Number]]"),Object(o.b)("p",null,"returns a promise that resolves to a list of available playback rates."),Object(o.b)("p",null,"The array of numbers are ordered from slowest to fastest playback speed. Even if the player does not support variable playback speeds, the array should always contain at least one value (1)."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"seekto"},Object(o.b)("inlineCode",{parentName:"h3"},"seekTo")),Object(o.b)(s,{mdxType:"Type"},"function(seconds:Number, allowSeekAhead:Boolean):Void"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"seekTo(seconds:Number, allowSeekAhead:Boolean):Void")),Object(o.b)("p",null,"Seeks to a specified time in the video. If the player is paused when the function is called, it will remain paused. If the function is called from another state (playing, video cued, etc.), the player will play the video.\nThe seconds parameter identifies the time to which the player should advance."),Object(o.b)("p",null,"The player will advance to the closest keyframe before that time unless the player has already downloaded the portion of the video to which the user is seeking."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.google.com/youtube/iframe_api_reference#seekTo"}),"https://developers.google.com/youtube/iframe_api_reference#seekTo")))}d.isMDXComponent=!0},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);