(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{218:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return c}));var a=n(2),o=n(6),r=(n(0),n(218)),s={id:"gesture-composition",title:"Composing gestures",sidebar_label:"Composing gestures"},i={unversionedId:"gesture-composition",id:"gesture-composition",isDocsHomePage:!1,title:"Composing gestures",description:"Composing gestures is much simpler in RNGH2, you don't need to create a ref for every gesture that depends on another one. Instead you can use Race, Simultaneous and Exclusive methods provided by the Gesture object.",source:"@site/docs/gesture-composition.md",slug:"/gesture-composition",permalink:"/react-native-gesture-handler/docs/next/gesture-composition",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/gesture-composition.md",version:"current",sidebar_label:"Composing gestures",sidebar:"docs",previous:{title:"Quick start",permalink:"/react-native-gesture-handler/docs/next/quickstart/quickstart"},next:{title:"Manual gestures",permalink:"/react-native-gesture-handler/docs/next/manual-gestures/manual-gestures"}},u=[{value:"Race",id:"race",children:[]},{value:"Simultaneous",id:"simultaneous",children:[]},{value:"Exclusive",id:"exclusive",children:[]},{value:"Composition vs <code>simultaneousWithExternalGesture</code> and <code>requireExternalGestureToFail</code>",id:"composition-vs-simultaneouswithexternalgesture-and-requireexternalgesturetofail",children:[]}],l={rightToc:u};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Composing gestures is much simpler in RNGH2, you don't need to create a ref for every gesture that depends on another one. Instead you can use ",Object(r.b)("inlineCode",{parentName:"p"},"Race"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Simultaneous")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Exclusive")," methods provided by the ",Object(r.b)("inlineCode",{parentName:"p"},"Gesture")," object."),Object(r.b)("h2",{id:"race"},"Race"),Object(r.b)("p",null,"Only one of the provided gestures can become active at the same time. The first gesture to become active will cancel the rest of the gestures. It accepts variable number of arguments.\nIt is the equivalent to having more than one gesture handler without defining ",Object(r.b)("inlineCode",{parentName:"p"},"simultaneousHandlers")," and ",Object(r.b)("inlineCode",{parentName:"p"},"waitFor")," props."),Object(r.b)("p",null,"For example, lets say that you have a component that you want to make draggable but you also want to show additional options on long press. Presumably you would not want the component to move after the long press activates. You can accomplish this using ",Object(r.b)("inlineCode",{parentName:"p"},"Race"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: the ",Object(r.b)("inlineCode",{parentName:"p"},"useSharedValue")," and ",Object(r.b)("inlineCode",{parentName:"p"},"useAnimatedStyle")," are part of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-reanimated")),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const offset = useSharedValue({ x: 0, y: 0 });\nconst start = useSharedValue({ x: 0, y: 0 });\nconst popupPosition = useSharedValue({ x: 0, y: 0 });\nconst popupAlpha = useSharedValue(0);\n\nconst animatedStyles = useAnimatedStyle(() => {\n  return {\n    transform: [{ translateX: offset.value.x }, { translateY: offset.value.y }],\n  };\n});\n\nconst animatedPopupStyles = useAnimatedStyle(() => {\n  return {\n    transform: [\n      { translateX: popupPosition.value.x },\n      { translateY: popupPosition.value.y },\n    ],\n    opacity: popupAlpha.value,\n  };\n});\n\nconst dragGesture = Gesture.Pan()\n  .onStart((_e) => {\n    popupAlpha.value = withTiming(0);\n  })\n  .onUpdate((e) => {\n    offset.value = {\n      x: e.translationX + start.value.x,\n      y: e.translationY + start.value.y,\n    };\n  })\n  .onEnd(() => {\n    start.value = {\n      x: offset.value.x,\n      y: offset.value.y,\n    };\n  });\n\nconst longPressGesture = Gesture.LongPress().onStart((_event) => {\n  popupPosition.value = { x: offset.value.x, y: offset.value.y };\n  popupAlpha.value = withTiming(1);\n});\n\nconst composed = Gesture.Race(dragGesture, longPressGesture);\n\nreturn (\n  <Animated.View>\n    <Popup style={animatedPopupStyles} />\n    <GestureDetector gesture={composed}>\n      <Component style={animatedStyles} />\n    </GestureDetector>\n  </Animated.View>\n);\n")),Object(r.b)("h2",{id:"simultaneous"},"Simultaneous"),Object(r.b)("p",null,"All of the provided gestures can activate at the same time. Activation of one will not cancel the other.\nIt is the equivalent to having some gesture handlers, each with ",Object(r.b)("inlineCode",{parentName:"p"},"simultaneousHandlers")," prop set to the other handlers."),Object(r.b)("p",null,"For example, if you want to make a gallery app, you might want user to be able to zoom, rotate and pan around photos. You can do it with ",Object(r.b)("inlineCode",{parentName:"p"},"Simultaneous"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: the ",Object(r.b)("inlineCode",{parentName:"p"},"useSharedValue")," and ",Object(r.b)("inlineCode",{parentName:"p"},"useAnimatedStyle")," are part of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-reanimated")),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const offset = useSharedValue({ x: 0, y: 0 });\nconst start = useSharedValue({ x: 0, y: 0 });\nconst scale = useSharedValue(1);\nconst savedScale = useSharedValue(1);\nconst rotation = useSharedValue(0);\nconst savedRotation = useSharedValue(0);\n\nconst animatedStyles = useAnimatedStyle(() => {\n  return {\n    transform: [\n      { translateX: offset.value.x },\n      { translateY: offset.value.y },\n      { scale: scale.value },\n      { rotateZ: `${rotation.value}rad` },\n    ],\n  };\n});\n\nconst dragGesture = Gesture.Pan()\n  .averageTouches(true)\n  .onUpdate((e) => {\n    offset.value = {\n      x: e.translationX + start.value.x,\n      y: e.translationY + start.value.y,\n    };\n  })\n  .onEnd(() => {\n    start.value = {\n      x: offset.value.x,\n      y: offset.value.y,\n    };\n  });\n\nconst zoomGesture = Gesture.Pinch()\n  .onUpdate((event) => {\n    scale.value = savedScale.value * event.scale;\n  })\n  .onEnd(() => {\n    savedScale.value = scale.value;\n  });\n\nconst rotateGesture = Gesture.Rotation()\n  .onUpdate((event) => {\n    rotation.value = savedRotation.value + event.rotation;\n  })\n  .onEnd(() => {\n    savedRotation.value = rotation.value;\n  });\n\nconst composed = Gesture.Simultaneous(\n  dragGesture,\n  Gesture.Simultaneous(zoomGesture, rotateGesture)\n);\n\nreturn (\n  <Animated.View>\n    <GestureDetector gesture={composed}>\n      <Photo style={animatedStyles} />\n    </GestureDetector>\n  </Animated.View>\n);\n")),Object(r.b)("h2",{id:"exclusive"},"Exclusive"),Object(r.b)("p",null,"Only one of the provided gestures can become active, with the first one having a higher priority than the second one (if both gestures are still possible, the second one will wait for the first one to fail before it activates), second one having a higher priority than the third one, and so on.\nIt is equivalent to having some gesture handlers where the second one has the ",Object(r.b)("inlineCode",{parentName:"p"},"waitFor")," prop set to the first handler, third one has the ",Object(r.b)("inlineCode",{parentName:"p"},"waitFor")," prop set to the first and the second one, and so on."),Object(r.b)("p",null,"For example, if you want to make a component that responds to single tap as well as to a double tap, you can accomplish that using ",Object(r.b)("inlineCode",{parentName:"p"},"Exclusive"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: the ",Object(r.b)("inlineCode",{parentName:"p"},"useSharedValue")," and ",Object(r.b)("inlineCode",{parentName:"p"},"useAnimatedStyle")," are part of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-reanimated")),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const singleTap = Gesture.Tap().onEnd((_event, success) => {\n  if (success) {\n    console.log('single tap!');\n  }\n});\nconst doubleTap = Gesture.Tap()\n  .numberOfTaps(2)\n  .onEnd((_event, success) => {\n    if (success) {\n      console.log('double tap!');\n    }\n  });\n\nconst taps = Gesture.Exclusive(doubleTap, singleTap);\n\nreturn (\n  <GestureDetector gesture={taps}>\n    <Component />\n  </GestureDetector>\n);\n")),Object(r.b)("h2",{id:"composition-vs-simultaneouswithexternalgesture-and-requireexternalgesturetofail"},"Composition vs ",Object(r.b)("inlineCode",{parentName:"h2"},"simultaneousWithExternalGesture")," and ",Object(r.b)("inlineCode",{parentName:"h2"},"requireExternalGestureToFail")),Object(r.b)("p",null,"You may have noticed that gesture composition described above requires you to mount all of the composed gestures under a single ",Object(r.b)("inlineCode",{parentName:"p"},"GestureDetector"),", effectively attaching them to the same underlying component. If you want to make a relation between gestures that are attached to separate ",Object(r.b)("inlineCode",{parentName:"p"},"GestureDetectors"),", we have a separate mechanism for that: ",Object(r.b)("inlineCode",{parentName:"p"},"simultaneousWithExternalGesture")," and ",Object(r.b)("inlineCode",{parentName:"p"},"requireExternalGestureToFail")," methods that are available on every base gesture. They work exactly the same way as ",Object(r.b)("inlineCode",{parentName:"p"},"simultaneousHandlers")," and ",Object(r.b)("inlineCode",{parentName:"p"},"waitFor")," on gesture handlers, that is they just mark the relation between the gestures without joining them into single object."))}c.isMDXComponent=!0}}]);