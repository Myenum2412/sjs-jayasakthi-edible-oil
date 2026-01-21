(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sjs-jayasakthi-edible-oil/src/components/Home/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HeroSection() {
    _s();
    const videoRef = __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "HeroSection.useEffect": ()=>{
            // Ensure video plays on mobile devices
            const video = videoRef.current;
            if (video) {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch({
                        "HeroSection.useEffect": ()=>{
                            // Auto-play was prevented, try again on user interaction
                            const handleInteraction = {
                                "HeroSection.useEffect.handleInteraction": ()=>{
                                    video.play().catch({
                                        "HeroSection.useEffect.handleInteraction": ()=>{}
                                    }["HeroSection.useEffect.handleInteraction"]);
                                    document.removeEventListener("touchstart", handleInteraction);
                                    document.removeEventListener("click", handleInteraction);
                                }
                            }["HeroSection.useEffect.handleInteraction"];
                            document.addEventListener("touchstart", handleInteraction, {
                                once: true
                            });
                            document.addEventListener("click", handleInteraction, {
                                once: true
                            });
                        }
                    }["HeroSection.useEffect"]);
                }
            }
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "overflow-hidden relative h-[90vh] max-md:h-[80vh]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-24 md:pb-32 lg:pb-36 lg:pt-72 h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] max-w-screen-xl mx-auto h-full w-full  ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: videoRef,
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true,
                            preload: "auto",
                            className: "size-full object-cover opacity-100",
                            src: "/intro.mp4",
                            onLoadedData: (e)=>{
                                // Force play on mobile devices when video is loaded
                                const video = e.currentTarget;
                                video.play().catch(()=>{
                                // Silently handle play promise rejection
                                });
                            }
                        }, void 0, false, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/Home/hero-section.tsx",
                            lineNumber: 34,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/Home/hero-section.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/Home/hero-section.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/Home/hero-section.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/Home/hero-section.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(HeroSection, "PdMsmLAy5JKU3vCrhAlqGYQfKuA=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Carousel",
    ()=>Carousel,
    "CarouselContent",
    ()=>CarouselContent,
    "CarouselItem",
    ()=>CarouselItem,
    "CarouselNext",
    ()=>CarouselNext,
    "CarouselPrevious",
    ()=>CarouselPrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CarouselContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useCarousel() {
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
_s(useCarousel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const Carousel = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = _s1(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref)=>{
    _s1();
    const [carouselRef, api] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    const [canScrollPrev, setCanScrollPrev] = __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [canScrollNext, setCanScrollNext] = __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const onSelect = __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Carousel.useCallback[onSelect]": (api)=>{
            if (!api) {
                return;
            }
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }
    }["Carousel.useCallback[onSelect]"], []);
    const scrollPrev = __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Carousel.useCallback[scrollPrev]": ()=>{
            api?.scrollPrev();
        }
    }["Carousel.useCallback[scrollPrev]"], [
        api
    ]);
    const scrollNext = __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Carousel.useCallback[scrollNext]": ()=>{
            api?.scrollNext();
        }
    }["Carousel.useCallback[scrollNext]"], [
        api
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Carousel.useCallback[handleKeyDown]": (event)=>{
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
            }
        }
    }["Carousel.useCallback[handleKeyDown]"], [
        scrollPrev,
        scrollNext
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Carousel.useEffect": ()=>{
            if (!api || !setApi) {
                return;
            }
            setApi(api);
        }
    }["Carousel.useEffect"], [
        api,
        setApi
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Carousel.useEffect": ()=>{
            if (!api) {
                return;
            }
            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);
            return ({
                "Carousel.useEffect": ()=>{
                    api?.off("select", onSelect);
                }
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], [
        api,
        onSelect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContext.Provider, {
        value: {
            carouselRef,
            api: api,
            opts,
            orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            onKeyDownCapture: handleKeyDown,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
            lineNumber: 137,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
        lineNumber: 124,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
})), "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = Carousel;
Carousel.displayName = "Carousel";
const CarouselContent = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { carouselRef, orientation } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: carouselRef,
        className: "overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", orientation === "horizontal" ? "-ml-10" : "-mt-10 flex-col", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
})), "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
});
_c3 = CarouselContent;
CarouselContent.displayName = "CarouselContent";
const CarouselItem = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = _s3(({ className, ...props }, ref)=>{
    _s3();
    const { orientation } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "group",
        "aria-roledescription": "slide",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
})), "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
});
_c5 = CarouselItem;
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = /*#__PURE__*/ _s4(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = _s4(({ className, variant = "outline", size = "icon", ...props }, ref)=>{
    _s4();
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        variant: variant,
        size: size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Previous slide"
            }, void 0, false, {
                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
})), "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
});
_c7 = CarouselPrevious;
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = /*#__PURE__*/ _s5(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = _s5(({ className, variant = "outline", size = "icon", ...props }, ref)=>{
    _s5();
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        variant: variant,
        size: size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Next slide"
            }, void 0, false, {
                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
})), "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
});
_c9 = CarouselNext;
CarouselNext.displayName = "CarouselNext";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Carousel$React.forwardRef");
__turbopack_context__.k.register(_c1, "Carousel");
__turbopack_context__.k.register(_c2, "CarouselContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "CarouselContent");
__turbopack_context__.k.register(_c4, "CarouselItem$React.forwardRef");
__turbopack_context__.k.register(_c5, "CarouselItem");
__turbopack_context__.k.register(_c6, "CarouselPrevious$React.forwardRef");
__turbopack_context__.k.register(_c7, "CarouselPrevious");
__turbopack_context__.k.register(_c8, "CarouselNext$React.forwardRef");
__turbopack_context__.k.register(_c9, "CarouselNext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sjs-jayasakthi-edible-oil/src/components/ui/spotlight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spotlight",
    ()=>Spotlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const Spotlight = ({ className, fill })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0", className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 3787 2842",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: "url(#filter)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "1924.71",
                    cy: "273.501",
                    rx: "1924.71",
                    ry: "273.501",
                    transform: "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",
                    fill: fill || "white",
                    fillOpacity: "0.21"
                }, void 0, false, {
                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/spotlight.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/spotlight.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: "filter",
                    x: "0.860352",
                    y: "0.838989",
                    width: "3785.16",
                    height: "2840.26",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }, void 0, false, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/spotlight.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape"
                        }, void 0, false, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/spotlight.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            stdDeviation: "151",
                            result: "effect1_foregroundBlur_1065_8"
                        }, void 0, false, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/spotlight.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/spotlight.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/spotlight.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/spotlight.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Spotlight;
var _c;
__turbopack_context__.k.register(_c, "Spotlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductsCarousel",
    ()=>ProductsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/components/ui/carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$spotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/components/ui/spotlight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const ProductsCarousel = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ProductsCarousel({ products = __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productsData"], title = "Our Best Selling Products", description = "Discover our best selling products and see why they are the best." }) {
    _s();
    const [carouselApi, setCarouselApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [canScrollPrev, setCanScrollPrev] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollNext, setCanScrollNext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleScrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductsCarousel.ProductsCarousel.useCallback[handleScrollPrev]": ()=>{
            carouselApi?.scrollPrev();
        }
    }["ProductsCarousel.ProductsCarousel.useCallback[handleScrollPrev]"], [
        carouselApi
    ]);
    const handleScrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductsCarousel.ProductsCarousel.useCallback[handleScrollNext]": ()=>{
            carouselApi?.scrollNext();
        }
    }["ProductsCarousel.ProductsCarousel.useCallback[handleScrollNext]"], [
        carouselApi
    ]);
    const handleScrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductsCarousel.ProductsCarousel.useCallback[handleScrollTo]": (index)=>{
            carouselApi?.scrollTo(index);
        }
    }["ProductsCarousel.ProductsCarousel.useCallback[handleScrollTo]"], [
        carouselApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsCarousel.ProductsCarousel.useEffect": ()=>{
            if (!carouselApi) {
                return;
            }
            const updateSelection = {
                "ProductsCarousel.ProductsCarousel.useEffect.updateSelection": ()=>{
                    setCanScrollPrev(carouselApi.canScrollPrev());
                    setCanScrollNext(carouselApi.canScrollNext());
                    setCurrentSlide(carouselApi.selectedScrollSnap());
                }
            }["ProductsCarousel.ProductsCarousel.useEffect.updateSelection"];
            updateSelection();
            carouselApi.on("select", updateSelection);
            return ({
                "ProductsCarousel.ProductsCarousel.useEffect": ()=>{
                    carouselApi.off("select", updateSelection);
                }
            })["ProductsCarousel.ProductsCarousel.useEffect"];
        }
    }["ProductsCarousel.ProductsCarousel.useEffect"], [
        carouselApi
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex items-end justify-between md:mb-14 lg:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-medium md:text-4xl lg:text-5xl",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left mt-2",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden shrink-0 gap-2 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "icon",
                                    variant: "ghost",
                                    onClick: handleScrollPrev,
                                    disabled: !canScrollPrev,
                                    className: "disabled:pointer-events-auto bg-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "size-5 text-primary "
                                    }, void 0, false, {
                                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "icon",
                                    variant: "ghost",
                                    onClick: handleScrollNext,
                                    disabled: !canScrollNext,
                                    className: "disabled:pointer-events-auto bg-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "size-5 text-primary "
                                    }, void 0, false, {
                                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                        setApi: setCarouselApi,
                        opts: {
                            breakpoints: {
                                "(max-width: 768px)": {
                                    dragFree: true
                                }
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselContent"], {
                            className: "ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]",
                            children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
                                    className: "max-w-[320px] pl-[20px] lg:max-w-[360px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `/products/${product.id.toString()}`,
                                        className: "group rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$spotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spotlight"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("opacity-0 group-hover:opacity-100 transition-opacity duration-500", "-top-40 -left-40"),
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: product.image,
                                                    alt: product.name,
                                                    className: "absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 h-full bg-gradient-to-b from-primary/0 to-black/80 mix-blend-multiply "
                                                }, void 0, false, {
                                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4",
                                                            children: product.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-8 line-clamp-2 md:mb-12 lg:mb-9",
                                                            children: product.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-sm",
                                                            children: [
                                                                "Read more",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "ml-2 size-5 transition-transform group-hover:translate-x-1 "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this)
                                }, product.id.toString(), false, {
                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex justify-center gap-2",
                        children: products.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-primary/20"}`,
                                onClick: ()=>handleScrollTo(index),
                                "aria-label": `Go to slide ${index + 1}`
                            }, product.id, false, {
                                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/gallery4.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}, "p4cp0Gv+fnHkJFOwfAyXtOnNtL0=")), "p4cp0Gv+fnHkJFOwfAyXtOnNtL0=");
_c1 = ProductsCarousel;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductsCarousel$memo");
__turbopack_context__.k.register(_c1, "ProductsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sjs-jayasakthi-edible-oil/src/components/ui/infinite-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteSlider",
    ()=>InfiniteSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function InfiniteSlider({ children, gap = 16, speed = 100, speedOnHover, direction = 'horizontal', reverse = false, className }) {
    _s();
    const [currentSpeed, setCurrentSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(speed);
    const [ref, { width, height }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const translation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteSlider.useEffect": ()=>{
            let controls;
            const size = direction === 'horizontal' ? width : height;
            const contentSize = size + gap;
            const from = reverse ? -contentSize / 2 : 0;
            const to = reverse ? 0 : -contentSize / 2;
            const distanceToTravel = Math.abs(to - from);
            const duration = distanceToTravel / currentSpeed;
            if (isTransitioning) {
                const remainingDistance = Math.abs(translation.get() - to);
                const transitionDuration = remainingDistance / currentSpeed;
                controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(translation, [
                    translation.get(),
                    to
                ], {
                    ease: 'linear',
                    duration: transitionDuration,
                    onComplete: {
                        "InfiniteSlider.useEffect": ()=>{
                            setIsTransitioning(false);
                            setKey({
                                "InfiniteSlider.useEffect": (prevKey)=>prevKey + 1
                            }["InfiniteSlider.useEffect"]);
                        }
                    }["InfiniteSlider.useEffect"]
                });
            } else {
                controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(translation, [
                    from,
                    to
                ], {
                    ease: 'linear',
                    duration: duration,
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 0,
                    onRepeat: {
                        "InfiniteSlider.useEffect": ()=>{
                            translation.set(from);
                        }
                    }["InfiniteSlider.useEffect"]
                });
            }
            return controls?.stop;
        }
    }["InfiniteSlider.useEffect"], [
        key,
        translation,
        currentSpeed,
        width,
        height,
        gap,
        isTransitioning,
        direction,
        reverse
    ]);
    const hoverProps = speedOnHover ? {
        onHoverStart: ()=>{
            setIsTransitioning(true);
            setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: ()=>{
            setIsTransitioning(true);
            setCurrentSpeed(speed);
        }
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('overflow-hidden', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex w-max",
            style: {
                ...direction === 'horizontal' ? {
                    x: translation
                } : {
                    y: translation
                },
                gap: `${gap}px`,
                flexDirection: direction === 'horizontal' ? 'row' : 'column'
            },
            ref: ref,
            ...hoverProps,
            children: [
                children,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/infinite-slider.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/infinite-slider.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(InfiniteSlider, "g8QDN6SkoZnK236RraBTPexdTY0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = InfiniteSlider;
var _c;
__turbopack_context__.k.register(_c, "InfiniteSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sjs-jayasakthi-edible-oil/src/components/ui/progressive-blur.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GRADIENT_ANGLES",
    ()=>GRADIENT_ANGLES,
    "ProgressiveBlur",
    ()=>ProgressiveBlur
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const GRADIENT_ANGLES = {
    top: 0,
    right: 90,
    bottom: 180,
    left: 270
};
function ProgressiveBlur({ direction = 'bottom', blurLayers = 8, className, blurIntensity = 0.25, ...props }) {
    const layers = Math.max(blurLayers, 2);
    const segmentSize = 1 / (blurLayers + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative', className),
        children: Array.from({
            length: layers
        }).map((_, index)=>{
            const angle = GRADIENT_ANGLES[direction];
            const gradientStops = [
                index * segmentSize,
                (index + 1) * segmentSize,
                (index + 2) * segmentSize,
                (index + 3) * segmentSize
            ].map((pos, posIndex)=>`rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`);
            const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(', ')})`;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none absolute inset-0 rounded-[inherit]",
                style: {
                    maskImage: gradient,
                    WebkitMaskImage: gradient,
                    backdropFilter: `blur(${index * blurIntensity}px)`,
                    WebkitBackdropFilter: `blur(${index * blurIntensity}px)`
                },
                ...props
            }, index, false, {
                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/progressive-blur.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/ui/progressive-blur.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = ProgressiveBlur;
var _c;
__turbopack_context__.k.register(_c, "ProgressiveBlur");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Faq2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as MinusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sjs-jayasakthi-edible-oil/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const faqItems = [
    {
        id: '1',
        question: 'What is Sri Jayasakthi Edible Oils Pvt. Ltd. and when was it established?',
        answer: 'Sri Jayasakthi Edible Oils Pvt. Ltd. is a leading manufacturer and supplier of premium-quality edible and non-edible oils in India. The company was established in 1985 and has over 40 years of experience in the edible oil industry, serving wholesalers, retailers, and industrial clients across Southern India and beyond.',
        category: 'Company Overview'
    },
    {
        id: '2',
        question: 'What types of oils does Sri Jayasakthi Edible Oils manufacture?',
        answer: 'The company manufactures a wide range of edible and non-edible oils, including refined palm olien, pure coconut oil, roasted coconut oil, and high-grade castor oil. Each product is processed using advanced refining technology to ensure purity, quality, and nutritional value.',
        category: 'Products'
    },
    {
        id: '3',
        question: 'What is the production capacity of Sri Jayasakthi Edible Oils?',
        answer: 'Sri Jayasakthi Edible Oils has a robust production capacity of 3,000 tonnes per month for refined palm olien and other edible oils. Additionally, the company produces 200 tonnes per month of coconut oil and roasted coconut oil, and 200 tonnes per month of castor oil.',
        category: 'Manufacturing'
    },
    {
        id: '4',
        question: 'How does the company ensure oil purity and quality?',
        answer: 'The company combines traditional oil extraction expertise with modern refining and filtering technologies. Dedicated R&D and quality assurance teams monitor every stage of production to preserve natural taste, aroma, and nutritional value while maintaining strict quality standards.',
        category: 'Manufacturing'
    },
    {
        id: '5',
        question: 'Where are Sri Jayasakthi Edible Oils products distributed?',
        answer: 'Sri Jayasakthi Edible Oils products are distributed across Southern India and supplied nationwide through a strong distribution network that serves wholesalers, retailers, and industrial buyers.',
        category: 'general'
    },
    {
        id: '6',
        question: 'What makes Sri Jayasakthi Edible Oils a trusted brand?',
        answer: 'With over four decades of industry experience, large-scale manufacturing capacity, advanced technology, ethical sourcing, and a strong commitment to quality and purity, Sri Jayasakthi Edible Oils has earned long-term trust among customers and business partners.',
        category: 'general'
    },
    {
        id: '7',
        question: 'Does the company follow sustainable and ethical practices?',
        answer: 'Yes. Sri Jayasakthi Edible Oils follows sustainable sourcing and ethical business practices. The company is committed to supporting farmers, empowering communities, and ensuring environmentally responsible manufacturing.',
        category: 'Manufacturing'
    },
    {
        id: '8',
        question: 'What is the mission of Sri Jayasakthi Edible Oils Pvt. Ltd.?',
        answer: 'The mission of Sri Jayasakthi Edible Oils is to deliver pure, authentic, and superior-quality oils through innovation, integrity, and sustainable manufacturing practices while ensuring customer satisfaction and long-term trust.',
        category: 'Company Overview'
    },
    {
        id: '9',
        question: 'What is the long-term vision of the company?',
        answer: 'The company’s vision is to become India’s most trusted and sustainable edible oil manufacturer, set new benchmarks in quality and purity, and expand into global markets while preserving the heritage of Indian oil craftsmanship.',
        category: 'Company Overview'
    },
    {
        id: '10',
        question: 'How can customers or distributors contact Sri Jayasakthi Edible Oils for support?',
        answer: 'Customers, distributors, and business partners can reach out to Sri Jayasakthi Edible Oils through the official website or contact channels provided by the company for product inquiries, bulk orders, and business support.',
        category: 'Support'
    }
];
const categories = [
    {
        id: 'all',
        label: 'All'
    },
    {
        id: 'general',
        label: 'General'
    },
    {
        id: 'Company Overview',
        label: 'Company Overview'
    },
    {
        id: 'Products',
        label: 'Products'
    },
    {
        id: 'Manufacturing',
        label: 'Manufacturing'
    },
    {
        id: 'Support',
        label: 'Support'
    }
];
function Faq2({ showViewMore = false, initialItemsCount = 2 }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!showViewMore);
    const filteredFaqs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Faq2.useMemo[filteredFaqs]": ()=>activeCategory === 'all' ? faqItems : faqItems.filter({
                "Faq2.useMemo[filteredFaqs]": (item)=>item.category === activeCategory
            }["Faq2.useMemo[filteredFaqs]"])
    }["Faq2.useMemo[filteredFaqs]"], [
        activeCategory
    ]);
    // Determine which FAQs to display
    const displayedFaqs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Faq2.useMemo[displayedFaqs]": ()=>{
            if (!showViewMore || showAll) {
                return filteredFaqs;
            }
            return filteredFaqs.slice(0, initialItemsCount);
        }
    }["Faq2.useMemo[displayedFaqs]"], [
        filteredFaqs,
        showViewMore,
        showAll,
        initialItemsCount
    ]);
    const toggleExpand = (id)=>{
        setExpandedId(expandedId === id ? null : id);
    };
    const handleViewMore = ()=>{
        router.push('/contact');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq-section",
        className: "bg-background py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-w-6xl px-4 md:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 flex flex-col items-center relative",
                    children: [
                        showViewMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 md:right-4 z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleViewMore,
                                variant: "outline",
                                size: "sm",
                                className: "group flex items-center gap-2 rounded-full border-primary/50 bg-background/80 backdrop-blur-sm px-3 py-2 text-xs font-medium text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer md:px-4 md:text-sm",
                                "aria-label": "View more FAQs on contact page",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "View More"
                                    }, void 0, false, {
                                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sm:hidden",
                                        children: "More"
                                    }, void 0, false, {
                                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-foreground mb-6 text-center text-4xl font-bold tracking-tight md:text-5xl pr-20 md:pr-0",
                            children: "Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground max-w-2xl text-center",
                            children: "Find answers to common questions about our products, services, and company."
                        }, void 0, false, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 flex flex-wrap justify-center gap-2",
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategory(category.id),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full px-4 py-2 text-sm font-medium transition-all', activeCategory === category.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'),
                            children: category.label
                        }, category.id, false, {
                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6 md:grid-cols-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: displayedFaqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                transition: {
                                    duration: 0.3,
                                    delay: index * 0.05
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-border h-fit overflow-hidden rounded-xl border', expandedId === faq.id ? 'shadow-3xl bg-card/50' : 'bg-card/50'),
                                style: {
                                    minHeight: '88px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleExpand(faq.id),
                                        className: "flex w-full items-center justify-between p-6 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-foreground text-lg font-medium",
                                                children: faq.question
                                            }, void 0, false, {
                                                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-4 flex-shrink-0",
                                                children: expandedId === faq.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__["MinusIcon"], {
                                                    className: "text-primary h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                                                    className: "text-primary h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: expandedId === faq.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            animate: {
                                                height: 'auto',
                                                opacity: 1
                                            },
                                            exit: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            className: "overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-border border-t px-6 pt-2 pb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground",
                                                    children: faq.answer
                                                }, void 0, false, {
                                                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                                lineNumber: 226,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                            lineNumber: 219,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, faq.id, true, {
                                fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sjs-jayasakthi-edible-oil/src/components/mvpblocks/faq-2.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(Faq2, "eqbZugQAJFNbYg2/MSQN6VdWVQU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sjs$2d$jayasakthi$2d$edible$2d$oil$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Faq2;
var _c;
__turbopack_context__.k.register(_c, "Faq2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sjs-jayasakthi-edible-oil_src_components_a79de2f5._.js.map