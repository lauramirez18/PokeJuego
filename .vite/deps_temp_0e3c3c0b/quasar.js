import {
  KeepAlive,
  Teleport,
  Transition,
  TransitionGroup,
  computed,
  createApp,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  isRef,
  markRaw,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  provide,
  reactive,
  ref,
  shallowReactive,
  toRaw,
  unref,
  vShow,
  watch,
  withDirectives
} from "./chunk-FRAIUV63.js";
import "./chunk-PZ5AY32C.js";

// node_modules/quasar/dist/quasar.client.js
var attachPoint = null;
function getAttachPoint() {
  if (attachPoint !== null) return attachPoint;
  return attachPoint = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
if (typeof __QUASAR_SSR__ !== "boolean") {
  getAttachPoint().__QUASAR_SSR__ = false;
}
if (typeof __QUASAR_SSR_CLIENT__ !== "boolean") {
  getAttachPoint().__QUASAR_SSR_CLIENT__ = false;
}
if (typeof __QUASAR_SSR_PWA__ !== "boolean") {
  getAttachPoint().__QUASAR_SSR_PWA__ = false;
}
function injectProp(target2, propName, get2, set2) {
  Object.defineProperty(target2, propName, {
    get: get2,
    set: set2,
    enumerable: true
  });
  return target2;
}
function injectMultipleProps(target2, props4) {
  for (const key in props4) {
    injectProp(target2, key, props4[key]);
  }
  return target2;
}
var isRuntimeSsrPreHydration = false ? { value: true } : ref(
  __QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)
);
var preHydrationBrowser;
function getMatch(userAgent2, platformMatch) {
  const match = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(userAgent2) || /(opr)[\/]([\w.]+)/.exec(userAgent2) || /(vivaldi)[\/]([\w.]+)/.exec(userAgent2) || /(chrome|crios)[\/]([\w.]+)/.exec(userAgent2) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent2) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent2) || /(firefox|fxios)[\/]([\w.]+)/.exec(userAgent2) || /(webkit)[\/]([\w.]+)/.exec(userAgent2) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent2) || [];
  return {
    browser: match[5] || match[3] || match[1] || "",
    version: match[4] || match[2] || "0",
    platform: platformMatch[0] || ""
  };
}
function getPlatformMatch(userAgent2) {
  return /(ipad)/.exec(userAgent2) || /(ipod)/.exec(userAgent2) || /(windows phone)/.exec(userAgent2) || /(iphone)/.exec(userAgent2) || /(kindle)/.exec(userAgent2) || /(silk)/.exec(userAgent2) || /(android)/.exec(userAgent2) || /(win)/.exec(userAgent2) || /(mac)/.exec(userAgent2) || /(linux)/.exec(userAgent2) || /(cros)/.exec(userAgent2) || /(playbook)/.exec(userAgent2) || /(bb)/.exec(userAgent2) || /(blackberry)/.exec(userAgent2) || [];
}
var hasTouch = false ? false : "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function getPlatform(UA) {
  const userAgent2 = UA.toLowerCase();
  const platformMatch = getPlatformMatch(userAgent2);
  const matched = getMatch(userAgent2, platformMatch);
  const browser = {
    mobile: false,
    desktop: false,
    cordova: false,
    capacitor: false,
    nativeMobile: false,
    // nativeMobileWrapper: void 0,
    electron: false,
    bex: false,
    linux: false,
    mac: false,
    win: false,
    cros: false,
    chrome: false,
    firefox: false,
    opera: false,
    safari: false,
    vivaldi: false,
    edge: false,
    edgeChromium: false,
    ie: false,
    webkit: false,
    android: false,
    ios: false,
    ipad: false,
    iphone: false,
    ipod: false,
    kindle: false,
    winphone: false,
    blackberry: false,
    playbook: false,
    silk: false
  };
  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.version, 10);
  }
  if (matched.platform) {
    browser[matched.platform] = true;
  }
  const knownMobiles = browser.android || browser.ios || browser.bb || browser.blackberry || browser.ipad || browser.iphone || browser.ipod || browser.kindle || browser.playbook || browser.silk || browser["windows phone"];
  if (knownMobiles === true || userAgent2.indexOf("mobile") !== -1) {
    browser.mobile = true;
  } else {
    browser.desktop = true;
  }
  if (browser["windows phone"]) {
    browser.winphone = true;
    delete browser["windows phone"];
  }
  if (browser.edga || browser.edgios || browser.edg) {
    browser.edge = true;
    matched.browser = "edge";
  } else if (browser.crios) {
    browser.chrome = true;
    matched.browser = "chrome";
  } else if (browser.fxios) {
    browser.firefox = true;
    matched.browser = "firefox";
  }
  if (browser.ipod || browser.ipad || browser.iphone) {
    browser.ios = true;
  }
  if (browser.vivaldi) {
    matched.browser = "vivaldi";
    browser.vivaldi = true;
  }
  if (
    // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
    browser.chrome || browser.opr || browser.safari || browser.vivaldi || browser.mobile === true && browser.ios !== true && knownMobiles !== true
  ) {
    browser.webkit = true;
  }
  if (browser.opr) {
    matched.browser = "opera";
    browser.opera = true;
  }
  if (browser.safari) {
    if (browser.blackberry || browser.bb) {
      matched.browser = "blackberry";
      browser.blackberry = true;
    } else if (browser.playbook) {
      matched.browser = "playbook";
      browser.playbook = true;
    } else if (browser.android) {
      matched.browser = "android";
      browser.android = true;
    } else if (browser.kindle) {
      matched.browser = "kindle";
      browser.kindle = true;
    } else if (browser.silk) {
      matched.browser = "silk";
      browser.silk = true;
    }
  }
  browser.name = matched.browser;
  browser.platform = matched.platform;
  if (true) {
    if (userAgent2.indexOf("electron") !== -1) {
      browser.electron = true;
    } else if (document.location.href.indexOf("-extension://") !== -1) {
      browser.bex = true;
    } else {
      if (window.Capacitor !== void 0) {
        browser.capacitor = true;
        browser.nativeMobile = true;
        browser.nativeMobileWrapper = "capacitor";
      } else if (window._cordovaNative !== void 0 || window.cordova !== void 0) {
        browser.cordova = true;
        browser.nativeMobile = true;
        browser.nativeMobileWrapper = "cordova";
      }
      if (isRuntimeSsrPreHydration.value === true) {
        preHydrationBrowser = { is: { ...browser } };
      }
      if (hasTouch === true && browser.mac === true && (browser.desktop === true && browser.safari === true || browser.nativeMobile === true && browser.android !== true && browser.ios !== true && browser.ipad !== true)) {
        delete browser.mac;
        delete browser.desktop;
        const platform = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
        Object.assign(browser, {
          mobile: true,
          ios: true,
          platform,
          [platform]: true
        });
      }
      if (browser.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile) {
        delete browser.desktop;
        browser.mobile = true;
      }
    }
  }
  return browser;
}
var userAgent = false ? "" : navigator.userAgent || navigator.vendor || window.opera;
var ssrClient = {
  has: {
    touch: false,
    webStorage: false
  },
  within: { iframe: false }
};
var client = false ? ssrClient : {
  userAgent,
  is: getPlatform(userAgent),
  has: {
    touch: hasTouch
  },
  within: {
    iframe: window.self !== window.top
  }
};
var Platform = {
  install(opts) {
    const { $q } = opts;
    if (false) {
      $q.platform = this.parseSSR(opts.ssrContext);
    } else if (isRuntimeSsrPreHydration.value === true) {
      opts.onSSRHydrated.push(() => {
        Object.assign($q.platform, client);
        isRuntimeSsrPreHydration.value = false;
      });
      $q.platform = reactive(this);
    } else {
      $q.platform = this;
    }
  }
};
if (false) {
  Platform.parseSSR = (ssrContext) => {
    const userAgent2 = ssrContext.req.headers["user-agent"] || ssrContext.req.headers["User-Agent"] || "";
    return {
      ...client,
      userAgent: userAgent2,
      is: getPlatform(userAgent2)
    };
  };
} else {
  let hasWebStorage;
  injectProp(client.has, "webStorage", () => {
    if (hasWebStorage !== void 0) {
      return hasWebStorage;
    }
    try {
      if (window.localStorage) {
        hasWebStorage = true;
        return true;
      }
    } catch (_) {
    }
    hasWebStorage = false;
    return false;
  });
  Object.assign(Platform, client);
  if (isRuntimeSsrPreHydration.value === true) {
    Object.assign(Platform, preHydrationBrowser, ssrClient);
    preHydrationBrowser = null;
  }
}
var Platform_default = Platform;
function createComponent(raw) {
  return markRaw(defineComponent(raw));
}
function createDirective(raw) {
  return markRaw(raw);
}
var createReactivePlugin = false ? (state, plugin) => {
  Object.assign(plugin, state);
  return plugin;
} : (state, plugin) => {
  const reactiveState = reactive(state);
  for (const name2 in state) {
    injectProp(
      plugin,
      name2,
      () => reactiveState[name2],
      (val) => {
        reactiveState[name2] = val;
      }
    );
  }
  return plugin;
};
var listenOpts = {
  hasPassive: false,
  passiveCapture: true,
  notPassiveCapture: true
};
try {
  const opts = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(listenOpts, {
        hasPassive: true,
        passive: { passive: true },
        notPassive: { passive: false },
        passiveCapture: { passive: true, capture: true },
        notPassiveCapture: { passive: false, capture: true }
      });
    }
  });
  window.addEventListener("qtest", null, opts);
  window.removeEventListener("qtest", null, opts);
} catch (_) {
}
function noop() {
}
function leftClick(e) {
  return e.button === 0;
}
function middleClick(e) {
  return e.button === 1;
}
function rightClick(e) {
  return e.button === 2;
}
function position(e) {
  if (e.touches && e.touches[0]) {
    e = e.touches[0];
  } else if (e.changedTouches && e.changedTouches[0]) {
    e = e.changedTouches[0];
  } else if (e.targetTouches && e.targetTouches[0]) {
    e = e.targetTouches[0];
  }
  return {
    top: e.clientY,
    left: e.clientX
  };
}
function getEventPath(e) {
  if (e.path) {
    return e.path;
  }
  if (e.composedPath) {
    return e.composedPath();
  }
  const path = [];
  let el = e.target;
  while (el) {
    path.push(el);
    if (el.tagName === "HTML") {
      path.push(document);
      path.push(window);
      return path;
    }
    el = el.parentElement;
  }
}
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
function getMouseWheelDistance(e) {
  let x = e.deltaX, y = e.deltaY;
  if ((x || y) && e.deltaMode) {
    const multiplier = e.deltaMode === 1 ? LINE_HEIGHT : PAGE_HEIGHT;
    x *= multiplier;
    y *= multiplier;
  }
  if (e.shiftKey && !x) {
    [y, x] = [x, y];
  }
  return { x, y };
}
function stop(e) {
  e.stopPropagation();
}
function prevent(e) {
  e.cancelable !== false && e.preventDefault();
}
function stopAndPrevent(e) {
  e.cancelable !== false && e.preventDefault();
  e.stopPropagation();
}
function preventDraggable(el, status) {
  if (el === void 0 || status === true && el.__dragPrevented === true) {
    return;
  }
  const fn = status === true ? (el2) => {
    el2.__dragPrevented = true;
    el2.addEventListener("dragstart", prevent, listenOpts.notPassiveCapture);
  } : (el2) => {
    delete el2.__dragPrevented;
    el2.removeEventListener("dragstart", prevent, listenOpts.notPassiveCapture);
  };
  el.querySelectorAll("a, img").forEach(fn);
}
function addEvt(ctx, targetName, events) {
  const name2 = `__q_${targetName}_evt`;
  ctx[name2] = ctx[name2] !== void 0 ? ctx[name2].concat(events) : events;
  events.forEach((evt) => {
    evt[0].addEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
  });
}
function cleanEvt(ctx, targetName) {
  const name2 = `__q_${targetName}_evt`;
  if (ctx[name2] !== void 0) {
    ctx[name2].forEach((evt) => {
      evt[0].removeEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
    });
    ctx[name2] = void 0;
  }
}
var event_default = {
  listenOpts,
  leftClick,
  middleClick,
  rightClick,
  position,
  getEventPath,
  getMouseWheelDistance,
  stop,
  prevent,
  stopAndPrevent,
  preventDraggable
};
function debounce_default(fn, wait = 250, immediate) {
  let timer2 = null;
  function debounced() {
    const args = arguments;
    const later = () => {
      timer2 = null;
      if (immediate !== true) {
        fn.apply(this, args);
      }
    };
    if (timer2 !== null) {
      clearTimeout(timer2);
    } else if (immediate === true) {
      fn.apply(this, args);
    }
    timer2 = setTimeout(later, wait);
  }
  debounced.cancel = () => {
    timer2 !== null && clearTimeout(timer2);
  };
  return debounced;
}
var SIZE_LIST = ["sm", "md", "lg", "xl"];
var { passive } = listenOpts;
var Screen_default = createReactivePlugin({
  width: 0,
  height: 0,
  name: "xs",
  sizes: {
    sm: 600,
    md: 1024,
    lg: 1440,
    xl: 1920
  },
  lt: {
    sm: true,
    md: true,
    lg: true,
    xl: true
  },
  gt: {
    xs: false,
    sm: false,
    md: false,
    lg: false
  },
  xs: true,
  sm: false,
  md: false,
  lg: false,
  xl: false
}, {
  setSizes: noop,
  setDebounce: noop,
  install({ $q, onSSRHydrated }) {
    $q.screen = this;
    if (false) return;
    if (this.__installed === true) {
      if ($q.config.screen !== void 0) {
        if ($q.config.screen.bodyClasses === false) {
          document.body.classList.remove(`screen--${this.name}`);
        } else {
          this.__update(true);
        }
      }
      return;
    }
    const { visualViewport } = window;
    const target2 = visualViewport || window;
    const scrollingElement = document.scrollingElement || document.documentElement;
    const getSize = visualViewport === void 0 || client.is.mobile === true ? () => [
      Math.max(window.innerWidth, scrollingElement.clientWidth),
      Math.max(window.innerHeight, scrollingElement.clientHeight)
    ] : () => [
      visualViewport.width * visualViewport.scale + window.innerWidth - scrollingElement.clientWidth,
      visualViewport.height * visualViewport.scale + window.innerHeight - scrollingElement.clientHeight
    ];
    const classes = $q.config.screen !== void 0 && $q.config.screen.bodyClasses === true;
    this.__update = (force) => {
      const [w, h138] = getSize();
      if (h138 !== this.height) {
        this.height = h138;
      }
      if (w !== this.width) {
        this.width = w;
      } else if (force !== true) {
        return;
      }
      let s = this.sizes;
      this.gt.xs = w >= s.sm;
      this.gt.sm = w >= s.md;
      this.gt.md = w >= s.lg;
      this.gt.lg = w >= s.xl;
      this.lt.sm = w < s.sm;
      this.lt.md = w < s.md;
      this.lt.lg = w < s.lg;
      this.lt.xl = w < s.xl;
      this.xs = this.lt.sm;
      this.sm = this.gt.xs === true && this.lt.md === true;
      this.md = this.gt.sm === true && this.lt.lg === true;
      this.lg = this.gt.md === true && this.lt.xl === true;
      this.xl = this.gt.lg;
      s = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl";
      if (s !== this.name) {
        if (classes === true) {
          document.body.classList.remove(`screen--${this.name}`);
          document.body.classList.add(`screen--${s}`);
        }
        this.name = s;
      }
    };
    let updateEvt, updateSizes = {}, updateDebounce = 16;
    this.setSizes = (sizes) => {
      SIZE_LIST.forEach((name2) => {
        if (sizes[name2] !== void 0) {
          updateSizes[name2] = sizes[name2];
        }
      });
    };
    this.setDebounce = (deb) => {
      updateDebounce = deb;
    };
    const start = () => {
      const style2 = getComputedStyle(document.body);
      if (style2.getPropertyValue("--q-size-sm")) {
        SIZE_LIST.forEach((name2) => {
          this.sizes[name2] = parseInt(style2.getPropertyValue(`--q-size-${name2}`), 10);
        });
      }
      this.setSizes = (sizes) => {
        SIZE_LIST.forEach((name2) => {
          if (sizes[name2]) {
            this.sizes[name2] = sizes[name2];
          }
        });
        this.__update(true);
      };
      this.setDebounce = (delay) => {
        updateEvt !== void 0 && target2.removeEventListener("resize", updateEvt, passive);
        updateEvt = delay > 0 ? debounce_default(this.__update, delay) : this.__update;
        target2.addEventListener("resize", updateEvt, passive);
      };
      this.setDebounce(updateDebounce);
      if (Object.keys(updateSizes).length !== 0) {
        this.setSizes(updateSizes);
        updateSizes = void 0;
      } else {
        this.__update();
      }
      classes === true && this.name === "xs" && document.body.classList.add("screen--xs");
    };
    if (isRuntimeSsrPreHydration.value === true) {
      onSSRHydrated.push(start);
    } else {
      start();
    }
  }
});
var Plugin = createReactivePlugin({
  isActive: false,
  mode: false
}, {
  __media: void 0,
  set(val) {
    if (false) return;
    Plugin.mode = val;
    if (val === "auto") {
      if (Plugin.__media === void 0) {
        Plugin.__media = window.matchMedia("(prefers-color-scheme: dark)");
        Plugin.__updateMedia = () => {
          Plugin.set("auto");
        };
        Plugin.__media.addListener(Plugin.__updateMedia);
      }
      val = Plugin.__media.matches;
    } else if (Plugin.__media !== void 0) {
      Plugin.__media.removeListener(Plugin.__updateMedia);
      Plugin.__media = void 0;
    }
    Plugin.isActive = val === true;
    document.body.classList.remove(`body--${val === true ? "light" : "dark"}`);
    document.body.classList.add(`body--${val === true ? "dark" : "light"}`);
  },
  toggle() {
    if (true) {
      Plugin.set(Plugin.isActive === false);
    }
  },
  install({ $q, ssrContext }) {
    const { dark } = $q.config;
    if (false) {
      this.isActive = dark === true;
      $q.dark = {
        isActive: false,
        mode: false,
        set: (val) => {
          ssrContext._meta.bodyClasses = ssrContext._meta.bodyClasses.replace(" body--light", "").replace(" body--dark", "") + ` body--${val === true ? "dark" : "light"}`;
          $q.dark.isActive = val === true;
          $q.dark.mode = val;
        },
        toggle: () => {
          $q.dark.set($q.dark.isActive === false);
        }
      };
      $q.dark.set(dark);
      return;
    }
    $q.dark = this;
    if (this.__installed !== true) {
      this.set(dark !== void 0 ? dark : false);
    }
  }
});
var Dark_default = Plugin;
function setCssVar(propName, value2, element = document.body) {
  if (typeof propName !== "string") {
    throw new TypeError("Expected a string as propName");
  }
  if (typeof value2 !== "string") {
    throw new TypeError("Expected a string as value");
  }
  if (!(element instanceof Element)) {
    throw new TypeError("Expected a DOM element");
  }
  element.style.setProperty(`--q-${propName}`, value2);
}
var lastKeyCompositionStatus = false;
function onKeyDownComposition(evt) {
  lastKeyCompositionStatus = evt.isComposing === true;
}
function shouldIgnoreKey(evt) {
  return lastKeyCompositionStatus === true || evt !== Object(evt) || evt.isComposing === true || evt.qKeyEvent === true;
}
function isKeyCode(evt, keyCodes4) {
  return shouldIgnoreKey(evt) === true ? false : [].concat(keyCodes4).includes(evt.keyCode);
}
function getMobilePlatform(is) {
  if (is.ios === true) return "ios";
  if (is.android === true) return "android";
}
function getBodyClasses({ is, has: has2, within }, cfg) {
  const cls = [
    is.desktop === true ? "desktop" : "mobile",
    `${has2.touch === false ? "no-" : ""}touch`
  ];
  if (is.mobile === true) {
    const mobile = getMobilePlatform(is);
    mobile !== void 0 && cls.push("platform-" + mobile);
  }
  if (is.nativeMobile === true) {
    const type = is.nativeMobileWrapper;
    cls.push(type);
    cls.push("native-mobile");
    if (is.ios === true && (cfg[type] === void 0 || cfg[type].iosStatusBarPadding !== false)) {
      cls.push("q-ios-padding");
    }
  } else if (is.electron === true) {
    cls.push("electron");
  } else if (is.bex === true) {
    cls.push("bex");
  }
  within.iframe === true && cls.push("within-iframe");
  return cls;
}
function applyClientSsrCorrections() {
  const { is } = client;
  const classes = document.body.className;
  const classList = new Set(classes.replace(/ {2}/g, " ").split(" "));
  if (is.nativeMobile !== true && is.electron !== true && is.bex !== true) {
    if (is.desktop === true) {
      classList.delete("mobile");
      classList.delete("platform-ios");
      classList.delete("platform-android");
      classList.add("desktop");
    } else if (is.mobile === true) {
      classList.delete("desktop");
      classList.add("mobile");
      classList.delete("platform-ios");
      classList.delete("platform-android");
      const mobile = getMobilePlatform(is);
      if (mobile !== void 0) {
        classList.add(`platform-${mobile}`);
      }
    }
  }
  if (client.has.touch === true) {
    classList.delete("no-touch");
    classList.add("touch");
  }
  if (client.within.iframe === true) {
    classList.add("within-iframe");
  }
  const newCls = Array.from(classList).join(" ");
  if (classes !== newCls) {
    document.body.className = newCls;
  }
}
function setColors(brand) {
  for (const color in brand) {
    setCssVar(color, brand[color]);
  }
}
var Body_default = {
  install(opts) {
    if (false) {
      const { $q, ssrContext } = opts;
      const cls = getBodyClasses($q.platform, $q.config);
      if ($q.config.screen !== void 0 && $q.config.screen.bodyClass === true) {
        cls.push("screen--xs");
      }
      ssrContext._meta.bodyClasses += cls.join(" ");
      const brand = $q.config.brand;
      if (brand !== void 0) {
        const vars = Object.keys(brand).map((key) => `--q-${key}:${brand[key]};`).join("");
        ssrContext._meta.endingHeadTags += `<style>:root{${vars}}</style>`;
      }
      return;
    }
    if (this.__installed === true) return;
    if (isRuntimeSsrPreHydration.value === true) {
      applyClientSsrCorrections();
    } else {
      const { $q } = opts;
      $q.config.brand !== void 0 && setColors($q.config.brand);
      const cls = getBodyClasses(client, $q.config);
      document.body.classList.add.apply(document.body.classList, cls);
    }
    if (client.is.ios === true) {
      document.body.addEventListener("touchstart", noop);
    }
    window.addEventListener("keydown", onKeyDownComposition, true);
  }
};
var getTrue = () => true;
function filterInvalidPath(path) {
  return typeof path === "string" && path !== "" && path !== "/" && path !== "#/";
}
function normalizeExitPath(path) {
  path.startsWith("#") === true && (path = path.substring(1));
  path.startsWith("/") === false && (path = "/" + path);
  path.endsWith("/") === true && (path = path.substring(0, path.length - 1));
  return "#" + path;
}
function getShouldExitFn(cfg) {
  if (cfg.backButtonExit === false) {
    return () => false;
  }
  if (cfg.backButtonExit === "*") {
    return getTrue;
  }
  const exitPaths = ["#/"];
  Array.isArray(cfg.backButtonExit) === true && exitPaths.push(
    ...cfg.backButtonExit.filter(filterInvalidPath).map(normalizeExitPath)
  );
  return () => exitPaths.includes(window.location.hash);
}
var History_default = {
  __history: [],
  add: noop,
  remove: noop,
  install({ $q }) {
    if (this.__installed === true) return;
    const { cordova: cordova2, capacitor } = client.is;
    if (cordova2 !== true && capacitor !== true) {
      return;
    }
    const qConf = $q.config[cordova2 === true ? "cordova" : "capacitor"];
    if (qConf !== void 0 && qConf.backButton === false) {
      return;
    }
    if (
      // if we're on Capacitor mode
      capacitor === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)
    ) {
      return;
    }
    this.add = (entry) => {
      if (entry.condition === void 0) {
        entry.condition = getTrue;
      }
      this.__history.push(entry);
    };
    this.remove = (entry) => {
      const index = this.__history.indexOf(entry);
      if (index >= 0) {
        this.__history.splice(index, 1);
      }
    };
    const shouldExit = getShouldExitFn(
      Object.assign(
        { backButtonExit: true },
        qConf
      )
    );
    const backHandler = () => {
      if (this.__history.length) {
        const entry = this.__history[this.__history.length - 1];
        if (entry.condition() === true) {
          this.__history.pop();
          entry.handler();
        }
      } else if (shouldExit() === true) {
        navigator.app.exitApp();
      } else {
        window.history.back();
      }
    };
    if (cordova2 === true) {
      document.addEventListener("deviceready", () => {
        document.addEventListener("backbutton", backHandler, false);
      });
    } else {
      window.Capacitor.Plugins.App.addListener("backButton", backHandler);
    }
  }
};
var en_US_default = {
  isoName: "en-US",
  nativeName: "English (US)",
  label: {
    clear: "Clear",
    ok: "OK",
    cancel: "Cancel",
    close: "Close",
    set: "Set",
    select: "Select",
    reset: "Reset",
    remove: "Remove",
    update: "Update",
    create: "Create",
    search: "Search",
    filter: "Filter",
    refresh: "Refresh",
    expand: (label) => label ? `Expand "${label}"` : "Expand",
    collapse: (label) => label ? `Collapse "${label}"` : "Collapse"
  },
  date: {
    days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    firstDayOfWeek: 0,
    // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false,
    pluralDay: "days"
  },
  table: {
    noData: "No data available",
    noResults: "No matching records found",
    loading: "Loading...",
    selectedRecords: (rows) => rows === 1 ? "1 record selected." : (rows === 0 ? "No" : rows) + " records selected.",
    recordsPerPage: "Records per page:",
    allRows: "All",
    pagination: (start, end, total) => start + "-" + end + " of " + total,
    columns: "Columns"
  },
  editor: {
    url: "URL",
    bold: "Bold",
    italic: "Italic",
    strikethrough: "Strikethrough",
    underline: "Underline",
    unorderedList: "Unordered List",
    orderedList: "Ordered List",
    subscript: "Subscript",
    superscript: "Superscript",
    hyperlink: "Hyperlink",
    toggleFullscreen: "Toggle Fullscreen",
    quote: "Quote",
    left: "Left align",
    center: "Center align",
    right: "Right align",
    justify: "Justify align",
    print: "Print",
    outdent: "Decrease indentation",
    indent: "Increase indentation",
    removeFormat: "Remove formatting",
    formatting: "Formatting",
    fontSize: "Font Size",
    align: "Align",
    hr: "Insert Horizontal Rule",
    undo: "Undo",
    redo: "Redo",
    heading1: "Heading 1",
    heading2: "Heading 2",
    heading3: "Heading 3",
    heading4: "Heading 4",
    heading5: "Heading 5",
    heading6: "Heading 6",
    paragraph: "Paragraph",
    code: "Code",
    size1: "Very small",
    size2: "A bit small",
    size3: "Normal",
    size4: "Medium-large",
    size5: "Big",
    size6: "Very big",
    size7: "Maximum",
    defaultFont: "Default Font",
    viewSource: "View Source"
  },
  tree: {
    noNodes: "No nodes available",
    noResults: "No matching nodes found"
  }
};
function getLocale() {
  if (false) return;
  const val = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof val === "string") {
    return val.split(/[-_]/).map((v, i) => i === 0 ? v.toLowerCase() : i > 1 || v.length < 4 ? v.toUpperCase() : v[0].toUpperCase() + v.slice(1).toLowerCase()).join("-");
  }
}
var Plugin2 = createReactivePlugin({
  __qLang: {}
}, {
  // props: object
  // __langConfig: object
  getLocale,
  set(langObject = en_US_default, ssrContext) {
    const lang = {
      ...langObject,
      rtl: langObject.rtl === true,
      getLocale
    };
    if (false) {
      if (ssrContext === void 0) {
        console.error("SSR ERROR: second param required: Lang.set(lang, ssrContext)");
        return;
      }
      lang.set = ssrContext.$q.lang.set;
      if (ssrContext.$q.config.lang === void 0 || ssrContext.$q.config.lang.noHtmlAttrs !== true) {
        const dir = lang.rtl === true ? "rtl" : "ltr";
        const attrs = `lang=${lang.isoName} dir=${dir}`;
        ssrContext._meta.htmlAttrs = ssrContext.__qPrevLang !== void 0 ? ssrContext._meta.htmlAttrs.replace(ssrContext.__qPrevLang, attrs) : attrs;
        ssrContext.__qPrevLang = attrs;
      }
      ssrContext.$q.lang = lang;
    } else {
      lang.set = Plugin2.set;
      if (Plugin2.__langConfig === void 0 || Plugin2.__langConfig.noHtmlAttrs !== true) {
        const el = document.documentElement;
        el.setAttribute("dir", lang.rtl === true ? "rtl" : "ltr");
        el.setAttribute("lang", lang.isoName);
      }
      Object.assign(Plugin2.__qLang, lang);
    }
  },
  install({ $q, lang, ssrContext }) {
    if (false) {
      const initialLang = lang || en_US_default;
      $q.lang = {};
      $q.lang.set = (langObject) => {
        this.set(langObject, ssrContext);
      };
      $q.lang.set(initialLang);
      if (this.props === void 0 || this.props.isoName !== initialLang.isoName) {
        this.props = { ...initialLang };
      }
    } else {
      $q.lang = Plugin2.__qLang;
      Plugin2.__langConfig = $q.config.lang;
      if (this.__installed === true) {
        lang !== void 0 && this.set(lang);
      } else {
        this.props = new Proxy(this.__qLang, {
          get() {
            return Reflect.get(...arguments);
          },
          ownKeys(target2) {
            return Reflect.ownKeys(target2).filter((key) => key !== "set" && key !== "getLocale");
          }
        });
        this.set(lang || en_US_default);
      }
    }
  }
});
var Lang_default = Plugin2;
var material_icons_default = {
  name: "material-icons",
  type: {
    positive: "check_circle",
    negative: "warning",
    info: "info",
    warning: "priority_high"
  },
  arrow: {
    up: "arrow_upward",
    right: "arrow_forward",
    down: "arrow_downward",
    left: "arrow_back",
    dropdown: "arrow_drop_down"
  },
  chevron: {
    left: "chevron_left",
    right: "chevron_right"
  },
  colorPicker: {
    spectrum: "gradient",
    tune: "tune",
    palette: "style"
  },
  pullToRefresh: {
    icon: "refresh"
  },
  carousel: {
    left: "chevron_left",
    right: "chevron_right",
    up: "keyboard_arrow_up",
    down: "keyboard_arrow_down",
    navigationIcon: "lens"
  },
  chip: {
    remove: "cancel",
    selected: "check"
  },
  datetime: {
    arrowLeft: "chevron_left",
    arrowRight: "chevron_right",
    now: "access_time",
    today: "today"
  },
  editor: {
    bold: "format_bold",
    italic: "format_italic",
    strikethrough: "strikethrough_s",
    underline: "format_underlined",
    unorderedList: "format_list_bulleted",
    orderedList: "format_list_numbered",
    subscript: "vertical_align_bottom",
    superscript: "vertical_align_top",
    hyperlink: "link",
    toggleFullscreen: "fullscreen",
    quote: "format_quote",
    left: "format_align_left",
    center: "format_align_center",
    right: "format_align_right",
    justify: "format_align_justify",
    print: "print",
    outdent: "format_indent_decrease",
    indent: "format_indent_increase",
    removeFormat: "format_clear",
    formatting: "text_format",
    fontSize: "format_size",
    align: "format_align_left",
    hr: "remove",
    undo: "undo",
    redo: "redo",
    heading: "format_size",
    code: "code",
    size: "format_size",
    font: "font_download",
    viewSource: "code"
  },
  expansionItem: {
    icon: "keyboard_arrow_down",
    denseIcon: "arrow_drop_down"
  },
  fab: {
    icon: "add",
    activeIcon: "close"
  },
  field: {
    clear: "cancel",
    error: "error"
  },
  pagination: {
    first: "first_page",
    prev: "keyboard_arrow_left",
    next: "keyboard_arrow_right",
    last: "last_page"
  },
  rating: {
    icon: "grade"
  },
  stepper: {
    done: "check",
    active: "edit",
    error: "warning"
  },
  tabs: {
    left: "chevron_left",
    right: "chevron_right",
    up: "keyboard_arrow_up",
    down: "keyboard_arrow_down"
  },
  table: {
    arrowUp: "arrow_upward",
    warning: "warning",
    firstPage: "first_page",
    prevPage: "chevron_left",
    nextPage: "chevron_right",
    lastPage: "last_page"
  },
  tree: {
    icon: "play_arrow"
  },
  uploader: {
    done: "done",
    clear: "clear",
    add: "add_box",
    upload: "cloud_upload",
    removeQueue: "clear_all",
    removeUploaded: "done_all"
  }
};
var Plugin3 = createReactivePlugin({
  iconMapFn: null,
  __qIconSet: {}
}, {
  // props: object
  set(setObject, ssrContext) {
    const def = { ...setObject };
    if (false) {
      if (ssrContext === void 0) {
        console.error("SSR ERROR: second param required: IconSet.set(iconSet, ssrContext)");
        return;
      }
      def.set = ssrContext.$q.iconSet.set;
      Object.assign(ssrContext.$q.iconSet, def);
    } else {
      def.set = Plugin3.set;
      Object.assign(Plugin3.__qIconSet, def);
    }
  },
  install({ $q, iconSet, ssrContext }) {
    if (false) {
      const initialSet = iconSet || material_icons_default;
      $q.iconMapFn = ssrContext.$q.config.iconMapFn || this.iconMapFn || null;
      $q.iconSet = {};
      $q.iconSet.set = (setObject) => {
        this.set(setObject, ssrContext);
      };
      $q.iconSet.set(initialSet);
      if (this.props === void 0 || this.props.name !== initialSet.name) {
        this.props = { ...initialSet };
      }
    } else {
      if ($q.config.iconMapFn !== void 0) {
        this.iconMapFn = $q.config.iconMapFn;
      }
      $q.iconSet = this.__qIconSet;
      injectProp($q, "iconMapFn", () => this.iconMapFn, (val) => {
        this.iconMapFn = val;
      });
      if (this.__installed === true) {
        iconSet !== void 0 && this.set(iconSet);
      } else {
        this.props = new Proxy(this.__qIconSet, {
          get() {
            return Reflect.get(...arguments);
          },
          ownKeys(target2) {
            return Reflect.ownKeys(target2).filter((key) => key !== "set");
          }
        });
        this.set(iconSet || material_icons_default);
      }
    }
  }
});
var IconSet_default = Plugin3;
var quasarKey = "_q_";
var timelineKey = "_q_t_";
var stepperKey = "_q_s_";
var layoutKey = "_q_l_";
var pageContainerKey = "_q_pc_";
var fabKey = "_q_f_";
var formKey = "_q_fo_";
var tabsKey = "_q_tabs_";
var uploaderKey = "_q_u_";
function emptyRenderFn() {
}
var globalConfig = {};
var globalConfigIsFrozen = false;
function freezeGlobalConfig() {
  globalConfigIsFrozen = true;
}
function isDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a !== null && b !== null && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor) {
      return false;
    }
    let length, i;
    if (a.constructor === Array) {
      length = a.length;
      if (length !== b.length) {
        return false;
      }
      for (i = length; i-- !== 0; ) {
        if (isDeepEqual(a[i], b[i]) !== true) {
          return false;
        }
      }
      return true;
    }
    if (a.constructor === Map) {
      if (a.size !== b.size) {
        return false;
      }
      let iter = a.entries();
      i = iter.next();
      while (i.done !== true) {
        if (b.has(i.value[0]) !== true) {
          return false;
        }
        i = iter.next();
      }
      iter = a.entries();
      i = iter.next();
      while (i.done !== true) {
        if (isDeepEqual(i.value[1], b.get(i.value[0])) !== true) {
          return false;
        }
        i = iter.next();
      }
      return true;
    }
    if (a.constructor === Set) {
      if (a.size !== b.size) {
        return false;
      }
      const iter = a.entries();
      i = iter.next();
      while (i.done !== true) {
        if (b.has(i.value[0]) !== true) {
          return false;
        }
        i = iter.next();
      }
      return true;
    }
    if (a.buffer != null && a.buffer.constructor === ArrayBuffer) {
      length = a.length;
      if (length !== b.length) {
        return false;
      }
      for (i = length; i-- !== 0; ) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    if (a.constructor === RegExp) {
      return a.source === b.source && a.flags === b.flags;
    }
    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf();
    }
    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString();
    }
    const keys = Object.keys(a).filter((key) => a[key] !== void 0);
    length = keys.length;
    if (length !== Object.keys(b).filter((key) => b[key] !== void 0).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (isDeepEqual(a[key], b[key]) !== true) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function isObject(v) {
  return v !== null && typeof v === "object" && Array.isArray(v) !== true;
}
function isDate(v) {
  return Object.prototype.toString.call(v) === "[object Date]";
}
function isRegexp(v) {
  return Object.prototype.toString.call(v) === "[object RegExp]";
}
function isNumber(v) {
  return typeof v === "number" && isFinite(v);
}
var is_default = {
  deepEqual: isDeepEqual,
  object: isObject,
  date: isDate,
  regexp: isRegexp,
  number: isNumber
};
var autoInstalledPlugins = [
  Platform_default,
  Body_default,
  Dark_default,
  Screen_default,
  History_default,
  Lang_default,
  IconSet_default
];
function createChildApp(appCfg, parentApp) {
  const app2 = createApp(appCfg);
  app2.config.globalProperties = parentApp.config.globalProperties;
  const { reload, ...appContext } = parentApp._context;
  Object.assign(app2._context, appContext);
  return app2;
}
function installPlugins(pluginOpts, pluginList) {
  pluginList.forEach((Plugin11) => {
    Plugin11.install(pluginOpts);
    Plugin11.__installed = true;
  });
}
function prepareApp(app2, uiOpts, pluginOpts) {
  app2.config.globalProperties.$q = pluginOpts.$q;
  app2.provide(quasarKey, pluginOpts.$q);
  installPlugins(pluginOpts, autoInstalledPlugins);
  uiOpts.components !== void 0 && Object.values(uiOpts.components).forEach((c) => {
    if (isObject(c) === true && c.name !== void 0) {
      app2.component(c.name, c);
    }
  });
  uiOpts.directives !== void 0 && Object.values(uiOpts.directives).forEach((d) => {
    if (isObject(d) === true && d.name !== void 0) {
      app2.directive(d.name, d);
    }
  });
  uiOpts.plugins !== void 0 && installPlugins(
    pluginOpts,
    Object.values(uiOpts.plugins).filter(
      (p) => typeof p.install === "function" && autoInstalledPlugins.includes(p) === false
    )
  );
  if (isRuntimeSsrPreHydration.value === true) {
    pluginOpts.$q.onSSRHydrated = () => {
      pluginOpts.onSSRHydrated.forEach((fn) => {
        fn();
      });
      pluginOpts.$q.onSSRHydrated = () => {
      };
    };
  }
}
var install_quasar_default = false ? function(parentApp, opts = {}, ssrContext) {
  const $q = {
    version: "2.17.0",
    config: opts.config || {}
  };
  Object.assign(ssrContext, {
    $q,
    _meta: {
      htmlAttrs: "",
      headTags: "",
      endingHeadTags: "",
      bodyClasses: "",
      bodyAttrs: "data-server-rendered",
      bodyTags: ""
    }
  });
  if (ssrContext._modules === void 0) {
    ssrContext._modules = [];
  }
  if (ssrContext.onRendered === void 0) {
    ssrContext.onRendered = () => {
    };
  }
  parentApp.config.globalProperties.ssrContext = ssrContext;
  prepareApp(parentApp, opts, {
    parentApp,
    $q,
    lang: opts.lang,
    iconSet: opts.iconSet,
    ssrContext
  });
} : function(parentApp, opts = {}) {
  const $q = { version: "2.17.0" };
  if (globalConfigIsFrozen === false) {
    if (opts.config !== void 0) {
      Object.assign(globalConfig, opts.config);
    }
    $q.config = { ...globalConfig };
    freezeGlobalConfig();
  } else {
    $q.config = opts.config || {};
  }
  prepareApp(parentApp, opts, {
    parentApp,
    $q,
    lang: opts.lang,
    iconSet: opts.iconSet,
    onSSRHydrated: []
  });
};
var units = ["B", "KB", "MB", "GB", "TB", "PB"];
function humanStorageSize(bytes, decimals = 1) {
  let u = 0;
  while (parseInt(bytes, 10) >= 1024 && u < units.length - 1) {
    bytes /= 1024;
    ++u;
  }
  return `${bytes.toFixed(decimals)}${units[u]}`;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function between(v, min, max) {
  return max <= min ? min : Math.min(max, Math.max(min, v));
}
function normalizeToInterval(v, min, max) {
  if (max <= min) {
    return min;
  }
  const size2 = max - min + 1;
  let index = min + (v - min) % size2;
  if (index < min) {
    index = size2 + index;
  }
  return index === 0 ? 0 : index;
}
function pad(v, length = 2, char = "0") {
  if (v === void 0 || v === null) {
    return v;
  }
  const val = "" + v;
  return val.length >= length ? val : new Array(length - val.length + 1).join(char) + val;
}
var format_default = {
  humanStorageSize,
  capitalize,
  between,
  normalizeToInterval,
  pad
};
var xhr = false ? null : XMLHttpRequest;
var open = false ? null : xhr.prototype.open;
var positionValues = ["top", "right", "bottom", "left"];
var stack = [];
var highjackCount = 0;
function translate({ p, pos, active, horiz, reverse, dir }) {
  let x = 1, y = 1;
  if (horiz === true) {
    if (reverse === true) {
      x = -1;
    }
    if (pos === "bottom") {
      y = -1;
    }
    return { transform: `translate3d(${x * (p - 100)}%,${active ? 0 : y * -200}%,0)` };
  }
  if (reverse === true) {
    y = -1;
  }
  if (pos === "right") {
    x = -1;
  }
  return { transform: `translate3d(${active ? 0 : dir * x * -200}%,${y * (p - 100)}%,0)` };
}
function inc(p, amount) {
  if (typeof amount !== "number") {
    if (p < 25) {
      amount = Math.random() * 3 + 3;
    } else if (p < 65) {
      amount = Math.random() * 3;
    } else if (p < 85) {
      amount = Math.random() * 2;
    } else if (p < 99) {
      amount = 0.6;
    } else {
      amount = 0;
    }
  }
  return between(p + amount, 0, 100);
}
function highjackAjax(stackEntry) {
  highjackCount++;
  stack.push(stackEntry);
  if (highjackCount > 1) return;
  xhr.prototype.open = function(_, url) {
    const stopStack = [];
    const loadStart = () => {
      stack.forEach((entry) => {
        if (entry.hijackFilter.value === null || entry.hijackFilter.value(url) === true) {
          entry.start();
          stopStack.push(entry.stop);
        }
      });
    };
    const loadEnd = () => {
      stopStack.forEach((stop2) => {
        stop2();
      });
    };
    this.addEventListener("loadstart", loadStart, { once: true });
    this.addEventListener("loadend", loadEnd, { once: true });
    open.apply(this, arguments);
  };
}
function restoreAjax(start) {
  stack = stack.filter((entry) => entry.start !== start);
  highjackCount = Math.max(0, highjackCount - 1);
  if (highjackCount === 0) {
    xhr.prototype.open = open;
  }
}
var QAjaxBar_default = createComponent({
  name: "QAjaxBar",
  props: {
    position: {
      type: String,
      default: "top",
      validator: (val) => positionValues.includes(val)
    },
    size: {
      type: String,
      default: "2px"
    },
    color: String,
    skipHijack: Boolean,
    reverse: Boolean,
    hijackFilter: Function
  },
  emits: ["start", "stop"],
  setup(props4, { emit }) {
    const { proxy } = getCurrentInstance();
    const progress = ref(0);
    const onScreen = ref(false);
    const animate = ref(true);
    let sessions = 0, timer2 = null, speed;
    const classes = computed(
      () => `q-loading-bar q-loading-bar--${props4.position}` + (props4.color !== void 0 ? ` bg-${props4.color}` : "") + (animate.value === true ? "" : " no-transition")
    );
    const horizontal = computed(() => props4.position === "top" || props4.position === "bottom");
    const sizeProp = computed(() => horizontal.value === true ? "height" : "width");
    const style2 = computed(() => {
      const active = onScreen.value;
      const obj = translate({
        p: progress.value,
        pos: props4.position,
        active,
        horiz: horizontal.value,
        reverse: proxy.$q.lang.rtl === true && ["top", "bottom"].includes(props4.position) ? props4.reverse === false : props4.reverse,
        dir: proxy.$q.lang.rtl === true ? -1 : 1
      });
      obj[sizeProp.value] = props4.size;
      obj.opacity = active ? 1 : 0;
      return obj;
    });
    const attributes = computed(() => onScreen.value === true ? {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": progress.value
    } : { "aria-hidden": "true" });
    function start(newSpeed = 300) {
      const oldSpeed = speed;
      speed = Math.max(0, newSpeed) || 0;
      sessions++;
      if (sessions > 1) {
        if (oldSpeed === 0 && newSpeed > 0) {
          planNextStep();
        } else if (timer2 !== null && oldSpeed > 0 && newSpeed <= 0) {
          clearTimeout(timer2);
          timer2 = null;
        }
        return sessions;
      }
      timer2 !== null && clearTimeout(timer2);
      emit("start");
      progress.value = 0;
      timer2 = setTimeout(() => {
        timer2 = null;
        animate.value = true;
        newSpeed > 0 && planNextStep();
      }, onScreen._value === true ? 500 : 1);
      if (onScreen._value !== true) {
        onScreen.value = true;
        animate.value = false;
      }
      return sessions;
    }
    function increment(amount) {
      if (sessions > 0) {
        progress.value = inc(progress.value, amount);
      }
      return sessions;
    }
    function stop2() {
      sessions = Math.max(0, sessions - 1);
      if (sessions > 0) {
        return sessions;
      }
      if (timer2 !== null) {
        clearTimeout(timer2);
        timer2 = null;
      }
      emit("stop");
      const end = () => {
        animate.value = true;
        progress.value = 100;
        timer2 = setTimeout(() => {
          timer2 = null;
          onScreen.value = false;
        }, 1e3);
      };
      if (progress.value === 0) {
        timer2 = setTimeout(end, 1);
      } else {
        end();
      }
      return sessions;
    }
    function planNextStep() {
      if (progress.value < 100) {
        timer2 = setTimeout(() => {
          timer2 = null;
          increment();
          planNextStep();
        }, speed);
      }
    }
    let hijacked;
    onMounted(() => {
      if (props4.skipHijack !== true) {
        hijacked = true;
        highjackAjax({
          start,
          stop: stop2,
          hijackFilter: computed(() => props4.hijackFilter || null)
        });
      }
    });
    onBeforeUnmount(() => {
      timer2 !== null && clearTimeout(timer2);
      hijacked === true && restoreAjax(start);
    });
    Object.assign(proxy, { start, stop: stop2, increment });
    return () => h("div", {
      class: classes.value,
      style: style2.value,
      ...attributes.value
    });
  }
});
var useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
};
var useSizeProps = {
  size: String
};
function use_size_default(props4, sizes = useSizeDefaults) {
  return computed(() => props4.size !== void 0 ? { fontSize: props4.size in sizes ? `${sizes[props4.size]}px` : props4.size } : null);
}
function hSlot(slot, otherwise) {
  return slot !== void 0 ? slot() || otherwise : otherwise;
}
function hUniqueSlot(slot, otherwise) {
  if (slot !== void 0) {
    const vnode = slot();
    if (vnode !== void 0 && vnode !== null) {
      return vnode.slice();
    }
  }
  return otherwise;
}
function hMergeSlot(slot, source) {
  return slot !== void 0 ? source.concat(slot()) : source;
}
function hMergeSlotSafely(slot, source) {
  if (slot === void 0) {
    return source;
  }
  return source !== void 0 ? source.concat(slot()) : slot();
}
function hDir(tag, data, children, key, condition, getDirsFn) {
  data.key = key + condition;
  const vnode = h(tag, data, children);
  return condition === true ? withDirectives(vnode, getDirsFn()) : vnode;
}
var defaultViewBox = "0 0 24 24";
var sameFn = (i) => i;
var ionFn = (i) => `ionicons ${i}`;
var libMap = {
  "mdi-": (i) => `mdi ${i}`,
  "icon-": sameFn,
  // fontawesome equiv
  "bt-": (i) => `bt ${i}`,
  "eva-": (i) => `eva ${i}`,
  "ion-md": ionFn,
  "ion-ios": ionFn,
  "ion-logo": ionFn,
  "iconfont ": sameFn,
  "ti-": (i) => `themify-icon ${i}`,
  "bi-": (i) => `bootstrap-icons ${i}`
};
var matMap = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
};
var symMap = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
};
var libRE = new RegExp("^(" + Object.keys(libMap).join("|") + ")");
var matRE = new RegExp("^(" + Object.keys(matMap).join("|") + ")");
var symRE = new RegExp("^(" + Object.keys(symMap).join("|") + ")");
var mRE = /^[Mm]\s?[-+]?\.?\d/;
var imgRE = /^img:/;
var svgUseRE = /^svguse:/;
var ionRE = /^ion-/;
var faRE = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var QIcon_default = createComponent({
  name: "QIcon",
  props: {
    ...useSizeProps,
    tag: {
      type: String,
      default: "i"
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },
  setup(props4, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = use_size_default(props4);
    const classes = computed(
      () => "q-icon" + (props4.left === true ? " on-left" : "") + (props4.right === true ? " on-right" : "") + (props4.color !== void 0 ? ` text-${props4.color}` : "")
    );
    const type = computed(() => {
      let cls;
      let icon = props4.name;
      if (icon === "none" || !icon) {
        return { none: true };
      }
      if ($q.iconMapFn !== null) {
        const res = $q.iconMapFn(icon);
        if (res !== void 0) {
          if (res.icon !== void 0) {
            icon = res.icon;
            if (icon === "none" || !icon) {
              return { none: true };
            }
          } else {
            return {
              cls: res.cls,
              content: res.content !== void 0 ? res.content : " "
            };
          }
        }
      }
      if (mRE.test(icon) === true) {
        const [def, viewBox = defaultViewBox] = icon.split("|");
        return {
          svg: true,
          viewBox,
          nodes: def.split("&&").map((path) => {
            const [d, style2, transform] = path.split("@@");
            return h("path", { style: style2, d, transform });
          })
        };
      }
      if (imgRE.test(icon) === true) {
        return {
          img: true,
          src: icon.substring(4)
        };
      }
      if (svgUseRE.test(icon) === true) {
        const [def, viewBox = defaultViewBox] = icon.split("|");
        return {
          svguse: true,
          src: def.substring(7),
          viewBox
        };
      }
      let content = " ";
      const matches = icon.match(libRE);
      if (matches !== null) {
        cls = libMap[matches[1]](icon);
      } else if (faRE.test(icon) === true) {
        cls = icon;
      } else if (ionRE.test(icon) === true) {
        cls = `ionicons ion-${$q.platform.is.ios === true ? "ios" : "md"}${icon.substring(3)}`;
      } else if (symRE.test(icon) === true) {
        cls = "notranslate material-symbols";
        const matches2 = icon.match(symRE);
        if (matches2 !== null) {
          icon = icon.substring(6);
          cls += symMap[matches2[1]];
        }
        content = icon;
      } else {
        cls = "notranslate material-icons";
        const matches2 = icon.match(matRE);
        if (matches2 !== null) {
          icon = icon.substring(2);
          cls += matMap[matches2[1]];
        }
        content = icon;
      }
      return {
        cls,
        content
      };
    });
    return () => {
      const data = {
        class: classes.value,
        style: sizeStyle.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      if (type.value.none === true) {
        return h(props4.tag, data, hSlot(slots.default));
      }
      if (type.value.img === true) {
        return h(props4.tag, data, hMergeSlot(slots.default, [
          h("img", { src: type.value.src })
        ]));
      }
      if (type.value.svg === true) {
        return h(props4.tag, data, hMergeSlot(slots.default, [
          h("svg", {
            viewBox: type.value.viewBox || "0 0 24 24"
          }, type.value.nodes)
        ]));
      }
      if (type.value.svguse === true) {
        return h(props4.tag, data, hMergeSlot(slots.default, [
          h("svg", {
            viewBox: type.value.viewBox
          }, [
            h("use", { "xlink:href": type.value.src })
          ])
        ]));
      }
      if (type.value.cls !== void 0) {
        data.class += " " + type.value.cls;
      }
      return h(props4.tag, data, hMergeSlot(slots.default, [
        type.value.content
      ]));
    };
  }
});
var QAvatar_default = createComponent({
  name: "QAvatar",
  props: {
    ...useSizeProps,
    fontSize: String,
    color: String,
    textColor: String,
    icon: String,
    square: Boolean,
    rounded: Boolean
  },
  setup(props4, { slots }) {
    const sizeStyle = use_size_default(props4);
    const classes = computed(
      () => "q-avatar" + (props4.color ? ` bg-${props4.color}` : "") + (props4.textColor ? ` text-${props4.textColor} q-chip--colored` : "") + (props4.square === true ? " q-avatar--square" : props4.rounded === true ? " rounded-borders" : "")
    );
    const contentStyle = computed(() => props4.fontSize ? { fontSize: props4.fontSize } : null);
    return () => {
      const icon = props4.icon !== void 0 ? [h(QIcon_default, { name: props4.icon })] : void 0;
      return h("div", {
        class: classes.value,
        style: sizeStyle.value
      }, [
        h("div", {
          class: "q-avatar__content row flex-center overflow-hidden",
          style: contentStyle.value
        }, hMergeSlotSafely(slots.default, icon))
      ]);
    };
  }
});
var alignValues = ["top", "middle", "bottom"];
var QBadge_default = createComponent({
  name: "QBadge",
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: (v) => alignValues.includes(v)
    }
  },
  setup(props4, { slots }) {
    const style2 = computed(() => {
      return props4.align !== void 0 ? { verticalAlign: props4.align } : null;
    });
    const classes = computed(() => {
      const text = props4.outline === true ? props4.color || props4.textColor : props4.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${props4.multiLine === true ? "multi" : "single"}-line` + (props4.outline === true ? " q-badge--outline" : props4.color !== void 0 ? ` bg-${props4.color}` : "") + (text !== void 0 ? ` text-${text}` : "") + (props4.floating === true ? " q-badge--floating" : "") + (props4.rounded === true ? " q-badge--rounded" : "") + (props4.transparent === true ? " q-badge--transparent" : "");
    });
    return () => h("div", {
      class: classes.value,
      style: style2.value,
      role: "status",
      "aria-label": props4.label
    }, hMergeSlot(slots.default, props4.label !== void 0 ? [props4.label] : []));
  }
});
var useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};
function use_dark_default(props4, $q) {
  return computed(() => props4.dark === null ? $q.dark.isActive : props4.dark);
}
var QBanner_default = createComponent({
  name: "QBanner",
  props: {
    ...useDarkProps,
    inlineActions: Boolean,
    dense: Boolean,
    rounded: Boolean
  },
  setup(props4, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = use_dark_default(props4, $q);
    const classes = computed(
      () => "q-banner row items-center" + (props4.dense === true ? " q-banner--dense" : "") + (isDark.value === true ? " q-banner--dark q-dark" : "") + (props4.rounded === true ? " rounded-borders" : "")
    );
    const actionClass = computed(
      () => `q-banner__actions row items-center justify-end col-${props4.inlineActions === true ? "auto" : "all"}`
    );
    return () => {
      const child = [
        h("div", {
          class: "q-banner__avatar col-auto row items-center self-start"
        }, hSlot(slots.avatar)),
        h("div", {
          class: "q-banner__content col text-body2"
        }, hSlot(slots.default))
      ];
      const actions = hSlot(slots.action);
      actions !== void 0 && child.push(
        h("div", { class: actionClass.value }, actions)
      );
      return h("div", {
        class: classes.value + (props4.inlineActions === false && actions !== void 0 ? " q-banner--top-padding" : ""),
        role: "alert"
      }, child);
    };
  }
});
var QBar_default = createComponent({
  name: "QBar",
  props: {
    ...useDarkProps,
    dense: Boolean
  },
  setup(props4, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = use_dark_default(props4, $q);
    const classes = computed(
      () => `q-bar row no-wrap items-center q-bar--${props4.dense === true ? "dense" : "standard"}  q-bar--${isDark.value === true ? "dark" : "light"}`
    );
    return () => h("div", {
      class: classes.value,
      role: "toolbar"
    }, hSlot(slots.default));
  }
});
var alignMap = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
};
var alignValues2 = Object.keys(alignMap);
var useAlignProps = {
  align: {
    type: String,
    validator: (v) => alignValues2.includes(v)
  }
};
function use_align_default(props4) {
  return computed(() => {
    const align = props4.align === void 0 ? props4.vertical === true ? "stretch" : "left" : props4.align;
    return `${props4.vertical === true ? "items" : "justify"}-${alignMap[align]}`;
  });
}
function getParentProxy(proxy) {
  if (Object(proxy.$parent) === proxy.$parent) {
    return proxy.$parent;
  }
  let { parent } = proxy.$;
  while (Object(parent) === parent) {
    if (Object(parent.proxy) === parent.proxy) {
      return parent.proxy;
    }
    parent = parent.parent;
  }
}
function fillNormalizedVNodes(children, vnode) {
  if (typeof vnode.type === "symbol") {
    if (Array.isArray(vnode.children) === true) {
      vnode.children.forEach((child) => {
        fillNormalizedVNodes(children, child);
      });
    }
  } else {
    children.add(vnode);
  }
}
function getNormalizedVNodes(vnodes) {
  const children = /* @__PURE__ */ new Set();
  vnodes.forEach((vnode) => {
    fillNormalizedVNodes(children, vnode);
  });
  return Array.from(children);
}
function vmHasRouter(vm2) {
  return vm2.appContext.config.globalProperties.$router !== void 0;
}
function vmIsDestroyed(vm2) {
  return vm2.isUnmounted === true || vm2.isDeactivated === true;
}
var disabledValues = ["", true];
var QBreadcrumbs_default = createComponent({
  name: "QBreadcrumbs",
  props: {
    ...useAlignProps,
    separator: {
      type: String,
      default: "/"
    },
    separatorColor: String,
    activeColor: {
      type: String,
      default: "primary"
    },
    gutter: {
      type: String,
      validator: (v) => ["none", "xs", "sm", "md", "lg", "xl"].includes(v),
      default: "sm"
    }
  },
  setup(props4, { slots }) {
    const alignClass = use_align_default(props4);
    const classes = computed(
      () => `flex items-center ${alignClass.value}${props4.gutter === "none" ? "" : ` q-gutter-${props4.gutter}`}`
    );
    const sepClass = computed(() => props4.separatorColor ? ` text-${props4.separatorColor}` : "");
    const activeClass = computed(() => ` text-${props4.activeColor}`);
    return () => {
      if (slots.default === void 0) return;
      const vnodes = getNormalizedVNodes(
        hSlot(slots.default)
      );
      if (vnodes.length === 0) return;
      let els = 1;
      const child = [], len = vnodes.filter((c) => c.type !== void 0 && c.type.name === "QBreadcrumbsEl").length, separator = slots.separator !== void 0 ? slots.separator : () => props4.separator;
      vnodes.forEach((comp) => {
        if (comp.type !== void 0 && comp.type.name === "QBreadcrumbsEl") {
          const middle = els < len;
          const disabled = comp.props !== null && disabledValues.includes(comp.props.disable);
          const cls = (middle === true ? "" : " q-breadcrumbs--last") + (disabled !== true && middle === true ? activeClass.value : "");
          els++;
          child.push(
            h("div", {
              class: `flex items-center${cls}`
            }, [comp])
          );
          if (middle === true) {
            child.push(
              h("div", {
                class: "q-breadcrumbs__separator" + sepClass.value
              }, separator())
            );
          }
        } else {
          child.push(comp);
        }
      });
      return h("div", {
        class: "q-breadcrumbs"
      }, [
        h("div", { class: classes.value }, child)
      ]);
    };
  }
});
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key], outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue) {
        return false;
      }
    } else if (Array.isArray(outerValue) === false || outerValue.length !== innerValue.length || innerValue.some((value2, i) => value2 !== outerValue[i])) {
      return false;
    }
  }
  return true;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) === true ? a.length === b.length && a.every((value2, i) => value2 === b[i]) : a.length === 1 && a[0] === b;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) === true ? isEquivalentArray(a, b) : Array.isArray(b) === true ? isEquivalentArray(b, a) : a === b;
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (isSameRouteLocationParamsValue(a[key], b[key]) === false) {
      return false;
    }
  }
  return true;
}
var useRouterLinkNonMatchingProps = {
  // router-link
  to: [String, Object],
  replace: Boolean,
  // regular <a> link
  href: String,
  target: String,
  // state
  disable: Boolean
};
var useRouterLinkProps = {
  ...useRouterLinkNonMatchingProps,
  // router-link
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  }
};
function use_router_link_default({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
  const vm2 = getCurrentInstance();
  const { props: props4, proxy, emit } = vm2;
  const hasRouter = vmHasRouter(vm2);
  const hasHrefLink = computed(() => props4.disable !== true && props4.href !== void 0);
  const hasRouterLinkProps = useDisableForRouterLinkProps === true ? computed(
    () => hasRouter === true && props4.disable !== true && hasHrefLink.value !== true && props4.to !== void 0 && props4.to !== null && props4.to !== ""
  ) : computed(
    () => hasRouter === true && hasHrefLink.value !== true && props4.to !== void 0 && props4.to !== null && props4.to !== ""
  );
  const resolvedLink = computed(() => hasRouterLinkProps.value === true ? getLink(props4.to) : null);
  const hasRouterLink = computed(() => resolvedLink.value !== null);
  const hasLink = computed(() => hasHrefLink.value === true || hasRouterLink.value === true);
  const linkTag = computed(() => props4.type === "a" || hasLink.value === true ? "a" : props4.tag || fallbackTag || "div");
  const linkAttrs = computed(() => hasHrefLink.value === true ? {
    href: props4.href,
    target: props4.target
  } : hasRouterLink.value === true ? {
    href: resolvedLink.value.href,
    target: props4.target
  } : {});
  const linkActiveIndex = computed(() => {
    if (hasRouterLink.value === false) {
      return -1;
    }
    const { matched } = resolvedLink.value, { length } = matched, routeMatched = matched[length - 1];
    if (routeMatched === void 0) {
      return -1;
    }
    const currentMatched = proxy.$route.matched;
    if (currentMatched.length === 0) {
      return -1;
    }
    const index = currentMatched.findIndex(
      isSameRouteRecord.bind(null, routeMatched)
    );
    if (index !== -1) {
      return index;
    }
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(
        isSameRouteRecord.bind(null, matched[length - 2])
      ) : index
    );
  });
  const linkIsActive = computed(
    () => hasRouterLink.value === true && linkActiveIndex.value !== -1 && includesParams(proxy.$route.params, resolvedLink.value.params)
  );
  const linkIsExactActive = computed(
    () => linkIsActive.value === true && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params)
  );
  const linkClass = computed(() => hasRouterLink.value === true ? linkIsExactActive.value === true ? ` ${props4.exactActiveClass} ${props4.activeClass}` : props4.exact === true ? "" : linkIsActive.value === true ? ` ${props4.activeClass}` : "" : "");
  function getLink(to) {
    try {
      return proxy.$router.resolve(to);
    } catch (_) {
    }
    return null;
  }
  function navigateToRouterLink(e, { returnRouterError, to = props4.to, replace = props4.replace } = {}) {
    if (props4.disable === true) {
      e.preventDefault();
      return Promise.resolve(false);
    }
    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || props4.target === "_blank"
    ) {
      return Promise.resolve(false);
    }
    e.preventDefault();
    const promise = proxy.$router[replace === true ? "replace" : "push"](to);
    return returnRouterError === true ? promise : promise.then(() => {
    }).catch(() => {
    });
  }
  function navigateOnClick(e) {
    if (hasRouterLink.value === true) {
      const go = (opts) => navigateToRouterLink(e, opts);
      emit("click", e, go);
      e.defaultPrevented !== true && go();
    } else {
      emit("click", e);
    }
  }
  return {
    hasRouterLink,
    hasHrefLink,
    hasLink,
    linkTag,
    resolvedLink,
    linkIsActive,
    linkIsExactActive,
    linkClass,
    linkAttrs,
    getLink,
    navigateToRouterLink,
    navigateOnClick
  };
}
var QBreadcrumbsEl_default = createComponent({
  name: "QBreadcrumbsEl",
  props: {
    ...useRouterLinkProps,
    label: String,
    icon: String,
    tag: {
      type: String,
      default: "span"
    }
  },
  emits: ["click"],
  setup(props4, { slots }) {
    const { linkTag, linkAttrs, linkClass, navigateOnClick } = use_router_link_default();
    const data = computed(() => {
      return {
        class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (props4.disable !== true ? "q-link--focusable" + linkClass.value : "q-breadcrumbs__el--disable"),
        ...linkAttrs.value,
        onClick: navigateOnClick
      };
    });
    const iconClass = computed(
      () => "q-breadcrumbs__el-icon" + (props4.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : "")
    );
    return () => {
      const child = [];
      props4.icon !== void 0 && child.push(
        h(QIcon_default, {
          class: iconClass.value,
          name: props4.icon
        })
      );
      props4.label !== void 0 && child.push(props4.label);
      return h(
        linkTag.value,
        { ...data.value },
        hMergeSlot(slots.default, child)
      );
    };
  }
});
var useSpinnerProps = {
  size: {
    type: [String, Number],
    default: "1em"
  },
  color: String
};
function useSpinner(props4) {
  return {
    cSize: computed(() => props4.size in useSizeDefaults ? `${useSizeDefaults[props4.size]}px` : props4.size),
    classes: computed(
      () => "q-spinner" + (props4.color ? ` text-${props4.color}` : "")
    )
  };
}
var QSpinner_default = createComponent({
  name: "QSpinner",
  props: {
    ...useSpinnerProps,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value + " q-spinner-mat",
      width: cSize.value,
      height: cSize.value,
      viewBox: "25 25 50 50"
    }, [
      h("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": props4.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
function offset(el) {
  if (el === window) {
    return { top: 0, left: 0 };
  }
  const { top, left } = el.getBoundingClientRect();
  return { top, left };
}
function style(el, property) {
  return window.getComputedStyle(el).getPropertyValue(property);
}
function height(el) {
  return el === window ? window.innerHeight : el.getBoundingClientRect().height;
}
function width(el) {
  return el === window ? window.innerWidth : el.getBoundingClientRect().width;
}
function css(element, css2) {
  const style2 = element.style;
  for (const prop in css2) {
    style2[prop] = css2[prop];
  }
}
function cssBatch(elements, style2) {
  elements.forEach((el) => css(el, style2));
}
function ready(fn) {
  if (typeof fn !== "function") {
    return;
  }
  if (document.readyState !== "loading") {
    return fn();
  }
  document.addEventListener("DOMContentLoaded", fn, false);
}
function getElement(el) {
  if (el === void 0 || el === null) {
    return void 0;
  }
  if (typeof el === "string") {
    try {
      return document.querySelector(el) || void 0;
    } catch (err) {
      return void 0;
    }
  }
  const target2 = unref(el);
  if (target2) {
    return target2.$el || target2;
  }
}
function childHasFocus(el, focusedEl) {
  if (el === void 0 || el === null || el.contains(focusedEl) === true) {
    return true;
  }
  for (let next = el.nextElementSibling; next !== null; next = next.nextElementSibling) {
    if (next.contains(focusedEl)) {
      return true;
    }
  }
  return false;
}
var dom_default = {
  offset,
  style,
  height,
  width,
  css,
  cssBatch,
  ready
};
function throttle_default(fn, limit = 250) {
  let wait = false, result;
  return function() {
    if (wait === false) {
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
      result = fn.apply(this, arguments);
    }
    return result;
  };
}
function showRipple(evt, el, ctx, forceCenter) {
  ctx.modifiers.stop === true && stop(evt);
  const color = ctx.modifiers.color;
  let center = ctx.modifiers.center;
  center = center === true || forceCenter === true;
  const node = document.createElement("span"), innerNode = document.createElement("span"), pos = position(evt), { left, top, width: width3, height: height2 } = el.getBoundingClientRect(), diameter2 = Math.sqrt(width3 * width3 + height2 * height2), radius2 = diameter2 / 2, centerX = `${(width3 - diameter2) / 2}px`, x = center ? centerX : `${pos.left - left - radius2}px`, centerY = `${(height2 - diameter2) / 2}px`, y = center ? centerY : `${pos.top - top - radius2}px`;
  innerNode.className = "q-ripple__inner";
  css(innerNode, {
    height: `${diameter2}px`,
    width: `${diameter2}px`,
    transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`,
    opacity: 0
  });
  node.className = `q-ripple${color ? " text-" + color : ""}`;
  node.setAttribute("dir", "ltr");
  node.appendChild(innerNode);
  el.appendChild(node);
  const abort = () => {
    node.remove();
    clearTimeout(timer2);
  };
  ctx.abort.push(abort);
  let timer2 = setTimeout(() => {
    innerNode.classList.add("q-ripple__inner--enter");
    innerNode.style.transform = `translate3d(${centerX},${centerY},0) scale3d(1,1,1)`;
    innerNode.style.opacity = 0.2;
    timer2 = setTimeout(() => {
      innerNode.classList.remove("q-ripple__inner--enter");
      innerNode.classList.add("q-ripple__inner--leave");
      innerNode.style.opacity = 0;
      timer2 = setTimeout(() => {
        node.remove();
        ctx.abort.splice(ctx.abort.indexOf(abort), 1);
      }, 275);
    }, 250);
  }, 50);
}
function updateModifiers(ctx, { modifiers, value: value2, arg }) {
  const cfg = Object.assign({}, ctx.cfg.ripple, modifiers, value2);
  ctx.modifiers = {
    early: cfg.early === true,
    stop: cfg.stop === true,
    center: cfg.center === true,
    color: cfg.color || arg,
    keyCodes: [].concat(cfg.keyCodes || 13)
  };
}
var Ripple_default = createDirective(
  false ? { name: "ripple", getSSRProps: noop_ssr_directive_transform_default } : {
    name: "ripple",
    beforeMount(el, binding) {
      const cfg = binding.instance.$.appContext.config.globalProperties.$q.config || {};
      if (cfg.ripple === false) {
        return;
      }
      const ctx = {
        cfg,
        enabled: binding.value !== false,
        modifiers: {},
        abort: [],
        start(evt) {
          if (ctx.enabled === true && evt.qSkipRipple !== true && evt.type === (ctx.modifiers.early === true ? "pointerdown" : "click")) {
            showRipple(evt, el, ctx, evt.qKeyEvent === true);
          }
        },
        keystart: throttle_default((evt) => {
          if (ctx.enabled === true && evt.qSkipRipple !== true && isKeyCode(evt, ctx.modifiers.keyCodes) === true && evt.type === `key${ctx.modifiers.early === true ? "down" : "up"}`) {
            showRipple(evt, el, ctx, true);
          }
        }, 300)
      };
      updateModifiers(ctx, binding);
      el.__qripple = ctx;
      addEvt(ctx, "main", [
        [el, "pointerdown", "start", "passive"],
        [el, "click", "start", "passive"],
        [el, "keydown", "keystart", "passive"],
        [el, "keyup", "keystart", "passive"]
      ]);
    },
    updated(el, binding) {
      if (binding.oldValue !== binding.value) {
        const ctx = el.__qripple;
        if (ctx !== void 0) {
          ctx.enabled = binding.value !== false;
          if (ctx.enabled === true && Object(binding.value) === binding.value) {
            updateModifiers(ctx, binding);
          }
        }
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qripple;
      if (ctx !== void 0) {
        ctx.abort.forEach((fn) => {
          fn();
        });
        cleanEvt(ctx, "main");
        delete el._qripple;
      }
    }
  }
);
var btnPadding = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};
var defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
var formTypes = ["button", "submit", "reset"];
var mediaTypeRE = /[^\s]\/[^\s]/;
var btnDesignOptions = ["flat", "outline", "push", "unelevated"];
function getBtnDesign(props4, defaultValue) {
  if (props4.flat === true) return "flat";
  if (props4.outline === true) return "outline";
  if (props4.push === true) return "push";
  if (props4.unelevated === true) return "unelevated";
  return defaultValue;
}
function getBtnDesignAttr(props4) {
  const design = getBtnDesign(props4);
  return design !== void 0 ? { [design]: true } : {};
}
var nonRoundBtnProps = {
  ...useSizeProps,
  ...useRouterLinkNonMatchingProps,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...btnDesignOptions.reduce(
    (acc, val) => (acc[val] = Boolean) && acc,
    {}
  ),
  square: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  align: {
    ...useAlignProps.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};
var useBtnProps = {
  ...nonRoundBtnProps,
  round: Boolean
};
function use_btn_default(props4) {
  const sizeStyle = use_size_default(props4, defaultSizes);
  const alignClass = use_align_default(props4);
  const { hasRouterLink, hasLink, linkTag, linkAttrs, navigateOnClick } = use_router_link_default({
    fallbackTag: "button"
  });
  const style2 = computed(() => {
    const obj = props4.fab === false && props4.fabMini === false ? sizeStyle.value : {};
    return props4.padding !== void 0 ? Object.assign({}, obj, {
      padding: props4.padding.split(/\s+/).map((v) => v in btnPadding ? btnPadding[v] + "px" : v).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : obj;
  });
  const isRounded = computed(
    () => props4.rounded === true || props4.fab === true || props4.fabMini === true
  );
  const isActionable = computed(
    () => props4.disable !== true && props4.loading !== true
  );
  const tabIndex = computed(() => isActionable.value === true ? props4.tabindex || 0 : -1);
  const design = computed(() => getBtnDesign(props4, "standard"));
  const attributes = computed(() => {
    const acc = { tabindex: tabIndex.value };
    if (hasLink.value === true) {
      Object.assign(acc, linkAttrs.value);
    } else if (formTypes.includes(props4.type) === true) {
      acc.type = props4.type;
    }
    if (linkTag.value === "a") {
      if (props4.disable === true) {
        acc["aria-disabled"] = "true";
      } else if (acc.href === void 0) {
        acc.role = "button";
      }
      if (hasRouterLink.value !== true && mediaTypeRE.test(props4.type) === true) {
        acc.type = props4.type;
      }
    } else if (props4.disable === true) {
      acc.disabled = "";
      acc["aria-disabled"] = "true";
    }
    if (props4.loading === true && props4.percentage !== void 0) {
      Object.assign(acc, {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": props4.percentage
      });
    }
    return acc;
  });
  const classes = computed(() => {
    let colors;
    if (props4.color !== void 0) {
      if (props4.flat === true || props4.outline === true) {
        colors = `text-${props4.textColor || props4.color}`;
      } else {
        colors = `bg-${props4.color} text-${props4.textColor || "white"}`;
      }
    } else if (props4.textColor) {
      colors = `text-${props4.textColor}`;
    }
    const shape = props4.round === true ? "round" : `rectangle${isRounded.value === true ? " q-btn--rounded" : props4.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${design.value} q-btn--${shape}` + (colors !== void 0 ? " " + colors : "") + (isActionable.value === true ? " q-btn--actionable q-focusable q-hoverable" : props4.disable === true ? " disabled" : "") + (props4.fab === true ? " q-btn--fab" : props4.fabMini === true ? " q-btn--fab-mini" : "") + (props4.noCaps === true ? " q-btn--no-uppercase" : "") + (props4.dense === true ? " q-btn--dense" : "") + (props4.stretch === true ? " no-border-radius self-stretch" : "") + (props4.glossy === true ? " glossy" : "") + (props4.square ? " q-btn--square" : "");
  });
  const innerClasses = computed(
    () => alignClass.value + (props4.stack === true ? " column" : " row") + (props4.noWrap === true ? " no-wrap text-no-wrap" : "") + (props4.loading === true ? " q-btn__content--hidden" : "")
  );
  return {
    classes,
    style: style2,
    innerClasses,
    attributes,
    hasLink,
    linkTag,
    navigateOnClick,
    isActionable
  };
}
var { passiveCapture } = listenOpts;
var touchTarget = null;
var keyboardTarget = null;
var mouseTarget = null;
var QBtn_default = createComponent({
  name: "QBtn",
  props: {
    ...useBtnProps,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const {
      classes,
      style: style2,
      innerClasses,
      attributes,
      hasLink,
      linkTag,
      navigateOnClick,
      isActionable
    } = use_btn_default(props4);
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    let localTouchTargetEl = null, avoidMouseRipple, mouseTimer = null;
    const hasLabel = computed(
      () => props4.label !== void 0 && props4.label !== null && props4.label !== ""
    );
    const ripple = computed(() => props4.disable === true || props4.ripple === false ? false : {
      keyCodes: hasLink.value === true ? [13, 32] : [13],
      ...props4.ripple === true ? {} : props4.ripple
    });
    const rippleProps = computed(() => ({ center: props4.round }));
    const percentageStyle = computed(() => {
      const val = Math.max(0, Math.min(100, props4.percentage));
      return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
    });
    const onEvents = computed(() => {
      if (props4.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstart: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        };
      }
      if (isActionable.value === true) {
        const acc = {
          onClick,
          onKeydown: onKeydown2,
          onMousedown
        };
        if (proxy.$q.platform.has.touch === true) {
          const suffix = props4.onTouchstart !== void 0 ? "" : "Passive";
          acc[`onTouchstart${suffix}`] = onTouchstart;
        }
        return acc;
      }
      return {
        // needed; especially for disabled <a> tags
        onClick: stopAndPrevent
      };
    });
    const nodeProps = computed(() => ({
      ref: rootRef,
      class: "q-btn q-btn-item non-selectable no-outline " + classes.value,
      style: style2.value,
      ...attributes.value,
      ...onEvents.value
    }));
    function onClick(e) {
      if (rootRef.value === null) return;
      if (e !== void 0) {
        if (e.defaultPrevented === true) {
          return;
        }
        const el = document.activeElement;
        if (props4.type === "submit" && el !== document.body && rootRef.value.contains(el) === false && el.contains(rootRef.value) === false) {
          rootRef.value.focus();
          const onClickCleanup = () => {
            document.removeEventListener("keydown", stopAndPrevent, true);
            document.removeEventListener("keyup", onClickCleanup, passiveCapture);
            rootRef.value !== null && rootRef.value.removeEventListener("blur", onClickCleanup, passiveCapture);
          };
          document.addEventListener("keydown", stopAndPrevent, true);
          document.addEventListener("keyup", onClickCleanup, passiveCapture);
          rootRef.value.addEventListener("blur", onClickCleanup, passiveCapture);
        }
      }
      navigateOnClick(e);
    }
    function onKeydown2(e) {
      if (rootRef.value === null) return;
      emit("keydown", e);
      if (isKeyCode(e, [13, 32]) === true && keyboardTarget !== rootRef.value) {
        keyboardTarget !== null && cleanup();
        if (e.defaultPrevented !== true) {
          rootRef.value.focus();
          keyboardTarget = rootRef.value;
          rootRef.value.classList.add("q-btn--active");
          document.addEventListener("keyup", onPressEnd, true);
          rootRef.value.addEventListener("blur", onPressEnd, passiveCapture);
        }
        stopAndPrevent(e);
      }
    }
    function onTouchstart(e) {
      if (rootRef.value === null) return;
      emit("touchstart", e);
      if (e.defaultPrevented === true) return;
      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup();
        touchTarget = rootRef.value;
        localTouchTargetEl = e.target;
        localTouchTargetEl.addEventListener("touchcancel", onPressEnd, passiveCapture);
        localTouchTargetEl.addEventListener("touchend", onPressEnd, passiveCapture);
      }
      avoidMouseRipple = true;
      mouseTimer !== null && clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        mouseTimer = null;
        avoidMouseRipple = false;
      }, 200);
    }
    function onMousedown(e) {
      if (rootRef.value === null) return;
      e.qSkipRipple = avoidMouseRipple === true;
      emit("mousedown", e);
      if (e.defaultPrevented !== true && mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup();
        mouseTarget = rootRef.value;
        rootRef.value.classList.add("q-btn--active");
        document.addEventListener("mouseup", onPressEnd, passiveCapture);
      }
    }
    function onPressEnd(e) {
      if (rootRef.value === null) return;
      if (e !== void 0 && e.type === "blur" && document.activeElement === rootRef.value) {
        return;
      }
      if (e !== void 0 && e.type === "keyup") {
        if (keyboardTarget === rootRef.value && isKeyCode(e, [13, 32]) === true) {
          const evt = new MouseEvent("click", e);
          evt.qKeyEvent = true;
          e.defaultPrevented === true && prevent(evt);
          e.cancelBubble === true && stop(evt);
          rootRef.value.dispatchEvent(evt);
          stopAndPrevent(e);
          e.qKeyEvent = true;
        }
        emit("keyup", e);
      }
      cleanup();
    }
    function cleanup(destroying) {
      const blurTarget = blurTargetRef.value;
      if (destroying !== true && (touchTarget === rootRef.value || mouseTarget === rootRef.value) && blurTarget !== null && blurTarget !== document.activeElement) {
        blurTarget.setAttribute("tabindex", -1);
        blurTarget.focus();
      }
      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener("touchcancel", onPressEnd, passiveCapture);
          localTouchTargetEl.removeEventListener("touchend", onPressEnd, passiveCapture);
        }
        touchTarget = localTouchTargetEl = null;
      }
      if (mouseTarget === rootRef.value) {
        document.removeEventListener("mouseup", onPressEnd, passiveCapture);
        mouseTarget = null;
      }
      if (keyboardTarget === rootRef.value) {
        document.removeEventListener("keyup", onPressEnd, true);
        rootRef.value !== null && rootRef.value.removeEventListener("blur", onPressEnd, passiveCapture);
        keyboardTarget = null;
      }
      rootRef.value !== null && rootRef.value.classList.remove("q-btn--active");
    }
    function onLoadingEvt(evt) {
      stopAndPrevent(evt);
      evt.qSkipRipple = true;
    }
    onBeforeUnmount(() => {
      cleanup(true);
    });
    Object.assign(proxy, {
      click: (e) => {
        if (isActionable.value === true) {
          onClick(e);
        }
      }
    });
    return () => {
      let inner = [];
      props4.icon !== void 0 && inner.push(
        h(QIcon_default, {
          name: props4.icon,
          left: props4.stack !== true && hasLabel.value === true,
          role: "img"
        })
      );
      hasLabel.value === true && inner.push(
        h("span", { class: "block" }, [props4.label])
      );
      inner = hMergeSlot(slots.default, inner);
      if (props4.iconRight !== void 0 && props4.round === false) {
        inner.push(
          h(QIcon_default, {
            name: props4.iconRight,
            right: props4.stack !== true && hasLabel.value === true,
            role: "img"
          })
        );
      }
      const child = [
        h("span", {
          class: "q-focus-helper",
          ref: blurTargetRef
        })
      ];
      if (props4.loading === true && props4.percentage !== void 0) {
        child.push(
          h("span", {
            class: "q-btn__progress absolute-full overflow-hidden" + (props4.darkPercentage === true ? " q-btn__progress--dark" : "")
          }, [
            h("span", {
              class: "q-btn__progress-indicator fit block",
              style: percentageStyle.value
            })
          ])
        );
      }
      child.push(
        h("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + innerClasses.value
        }, inner)
      );
      props4.loading !== null && child.push(
        h(Transition, {
          name: "q-transition--fade"
        }, () => props4.loading === true ? [
          h("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, slots.loading !== void 0 ? slots.loading() : [h(QSpinner_default)])
        ] : null)
      );
      return withDirectives(
        h(
          linkTag.value,
          nodeProps.value,
          child
        ),
        [[
          Ripple_default,
          ripple.value,
          void 0,
          rippleProps.value
        ]]
      );
    };
  }
});
var QBtnGroup_default = createComponent({
  name: "QBtnGroup",
  props: {
    unelevated: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    square: Boolean,
    push: Boolean,
    stretch: Boolean,
    glossy: Boolean,
    spread: Boolean
  },
  setup(props4, { slots }) {
    const classes = computed(() => {
      const cls = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((t) => props4[t] === true).map((t) => `q-btn-group--${t}`).join(" ");
      return `q-btn-group row no-wrap${cls.length !== 0 ? " " + cls : ""}` + (props4.spread === true ? " q-btn-group--spread" : " inline");
    });
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
function clearSelection() {
  if (window.getSelection !== void 0) {
    const selection = window.getSelection();
    if (selection.empty !== void 0) {
      selection.empty();
    } else if (selection.removeAllRanges !== void 0) {
      selection.removeAllRanges();
      Platform_default.is.mobile !== true && selection.addRange(document.createRange());
    }
  } else if (document.selection !== void 0) {
    document.selection.empty();
  }
}
var useAnchorStaticProps = {
  /* SSR does not know about Element */
  target: false ? { default: true } : {
    type: [Boolean, String, Element],
    default: true
  },
  noParentEvent: Boolean
};
var useAnchorProps = {
  ...useAnchorStaticProps,
  contextMenu: Boolean
};
function use_anchor_default({
  showing,
  avoidEmit,
  // required for QPopupProxy (true)
  configureAnchorEl
  // optional
}) {
  const { props: props4, proxy, emit } = getCurrentInstance();
  const anchorEl = ref(null);
  let touchTimer = null;
  function canShow(evt) {
    return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
  }
  const anchorEvents = {};
  if (configureAnchorEl === void 0) {
    Object.assign(anchorEvents, {
      hide(evt) {
        proxy.hide(evt);
      },
      toggle(evt) {
        proxy.toggle(evt);
        evt.qAnchorHandled = true;
      },
      toggleKey(evt) {
        isKeyCode(evt, 13) === true && anchorEvents.toggle(evt);
      },
      contextClick(evt) {
        proxy.hide(evt);
        prevent(evt);
        nextTick(() => {
          proxy.show(evt);
          evt.qAnchorHandled = true;
        });
      },
      prevent,
      mobileTouch(evt) {
        anchorEvents.mobileCleanup(evt);
        if (canShow(evt) !== true) {
          return;
        }
        proxy.hide(evt);
        anchorEl.value.classList.add("non-selectable");
        const target2 = evt.target;
        addEvt(anchorEvents, "anchor", [
          [target2, "touchmove", "mobileCleanup", "passive"],
          [target2, "touchend", "mobileCleanup", "passive"],
          [target2, "touchcancel", "mobileCleanup", "passive"],
          [anchorEl.value, "contextmenu", "prevent", "notPassive"]
        ]);
        touchTimer = setTimeout(() => {
          touchTimer = null;
          proxy.show(evt);
          evt.qAnchorHandled = true;
        }, 300);
      },
      mobileCleanup(evt) {
        anchorEl.value.classList.remove("non-selectable");
        if (touchTimer !== null) {
          clearTimeout(touchTimer);
          touchTimer = null;
        }
        if (showing.value === true && evt !== void 0) {
          clearSelection();
        }
      }
    });
    configureAnchorEl = function(context = props4.contextMenu) {
      if (props4.noParentEvent === true || anchorEl.value === null) return;
      let evts;
      if (context === true) {
        if (proxy.$q.platform.is.mobile === true) {
          evts = [
            [anchorEl.value, "touchstart", "mobileTouch", "passive"]
          ];
        } else {
          evts = [
            [anchorEl.value, "mousedown", "hide", "passive"],
            [anchorEl.value, "contextmenu", "contextClick", "notPassive"]
          ];
        }
      } else {
        evts = [
          [anchorEl.value, "click", "toggle", "passive"],
          [anchorEl.value, "keyup", "toggleKey", "passive"]
        ];
      }
      addEvt(anchorEvents, "anchor", evts);
    };
  }
  function unconfigureAnchorEl() {
    cleanEvt(anchorEvents, "anchor");
  }
  function setAnchorEl(el) {
    anchorEl.value = el;
    while (anchorEl.value.classList.contains("q-anchor--skip")) {
      anchorEl.value = anchorEl.value.parentNode;
    }
    configureAnchorEl();
  }
  function pickAnchorEl() {
    if (props4.target === false || props4.target === "" || proxy.$el.parentNode === null) {
      anchorEl.value = null;
    } else if (props4.target === true) {
      setAnchorEl(proxy.$el.parentNode);
    } else {
      let el = props4.target;
      if (typeof props4.target === "string") {
        try {
          el = document.querySelector(props4.target);
        } catch (err) {
          el = void 0;
        }
      }
      if (el !== void 0 && el !== null) {
        anchorEl.value = el.$el || el;
        configureAnchorEl();
      } else {
        anchorEl.value = null;
        console.error(`Anchor: target "${props4.target}" not found`);
      }
    }
  }
  watch(() => props4.contextMenu, (val) => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
      configureAnchorEl(val);
    }
  });
  watch(() => props4.target, () => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
    }
    pickAnchorEl();
  });
  watch(() => props4.noParentEvent, (val) => {
    if (anchorEl.value !== null) {
      if (val === true) {
        unconfigureAnchorEl();
      } else {
        configureAnchorEl();
      }
    }
  });
  onMounted(() => {
    pickAnchorEl();
    if (avoidEmit !== true && props4.modelValue === true && anchorEl.value === null) {
      emit("update:modelValue", false);
    }
  });
  onBeforeUnmount(() => {
    touchTimer !== null && clearTimeout(touchTimer);
    unconfigureAnchorEl();
  });
  return {
    anchorEl,
    canShow,
    anchorEvents
  };
}
function use_scroll_target_default(props4, configureScrollTarget) {
  const localScrollTarget = ref(null);
  let scrollFn;
  function changeScrollEvent(scrollTarget, fn) {
    const fnProp = `${fn !== void 0 ? "add" : "remove"}EventListener`;
    const fnHandler = fn !== void 0 ? fn : scrollFn;
    if (scrollTarget !== window) {
      scrollTarget[fnProp]("scroll", fnHandler, listenOpts.passive);
    }
    window[fnProp]("scroll", fnHandler, listenOpts.passive);
    scrollFn = fn;
  }
  function unconfigureScrollTarget() {
    if (localScrollTarget.value !== null) {
      changeScrollEvent(localScrollTarget.value);
      localScrollTarget.value = null;
    }
  }
  const noParentEventWatcher = watch(() => props4.noParentEvent, () => {
    if (localScrollTarget.value !== null) {
      unconfigureScrollTarget();
      configureScrollTarget();
    }
  });
  onBeforeUnmount(noParentEventWatcher);
  return {
    localScrollTarget,
    unconfigureScrollTarget,
    changeScrollEvent
  };
}
var useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
};
var useModelToggleEmits = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function use_model_toggle_default({
  showing,
  canShow,
  // optional
  hideOnRouteChange,
  // optional
  handleShow,
  // optional
  handleHide,
  // optional
  processOnMount
  // optional
}) {
  const vm2 = getCurrentInstance();
  const { props: props4, emit, proxy } = vm2;
  let payload;
  function toggle(evt) {
    if (showing.value === true) {
      hide(evt);
    } else {
      show(evt);
    }
  }
  function show(evt) {
    if (props4.disable === true || evt !== void 0 && evt.qAnchorHandled === true || canShow !== void 0 && canShow(evt) !== true) {
      return;
    }
    const listener = props4["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", true);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props4.modelValue === null || listener === false || false) {
      processShow(evt);
    }
  }
  function processShow(evt) {
    if (showing.value === true) {
      return;
    }
    showing.value = true;
    emit("beforeShow", evt);
    if (handleShow !== void 0) {
      handleShow(evt);
    } else {
      emit("show", evt);
    }
  }
  function hide(evt) {
    if (props4.disable === true) {
      return;
    }
    const listener = props4["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", false);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props4.modelValue === null || listener === false || false) {
      processHide(evt);
    }
  }
  function processHide(evt) {
    if (showing.value === false) {
      return;
    }
    showing.value = false;
    emit("beforeHide", evt);
    if (handleHide !== void 0) {
      handleHide(evt);
    } else {
      emit("hide", evt);
    }
  }
  function processModelChange(val) {
    if (props4.disable === true && val === true) {
      if (props4["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", false);
      }
    } else if (val === true !== showing.value) {
      const fn = val === true ? processShow : processHide;
      fn(payload);
    }
  }
  watch(() => props4.modelValue, processModelChange);
  if (hideOnRouteChange !== void 0 && vmHasRouter(vm2) === true) {
    watch(() => proxy.$route.fullPath, () => {
      if (hideOnRouteChange.value === true && showing.value === true) {
        hide();
      }
    });
  }
  processOnMount === true && onMounted(() => {
    processModelChange(props4.modelValue);
  });
  const publicMethods = { show, hide, toggle };
  Object.assign(proxy, publicMethods);
  return publicMethods;
}
var queue = [];
var waitFlags = [];
function clearFlag(flag) {
  waitFlags = waitFlags.filter((entry) => entry !== flag);
}
function addFocusWaitFlag(flag) {
  clearFlag(flag);
  waitFlags.push(flag);
}
function removeFocusWaitFlag(flag) {
  clearFlag(flag);
  if (waitFlags.length === 0 && queue.length !== 0) {
    queue[queue.length - 1]();
    queue = [];
  }
}
function addFocusFn(fn) {
  if (waitFlags.length === 0) {
    fn();
  } else {
    queue.push(fn);
  }
}
function removeFocusFn(fn) {
  queue = queue.filter((entry) => entry !== fn);
}
var nodesList = [];
var portalTypeList = [];
var portalIndex = 1;
var target = false ? void 0 : document.body;
function createGlobalNode(id3, portalType) {
  const el = document.createElement("div");
  el.id = portalType !== void 0 ? `q-portal--${portalType}--${portalIndex++}` : id3;
  if (globalConfig.globalNodes !== void 0) {
    const cls = globalConfig.globalNodes.class;
    if (cls !== void 0) {
      el.className = cls;
    }
  }
  target.appendChild(el);
  nodesList.push(el);
  portalTypeList.push(portalType);
  return el;
}
function removeGlobalNode(el) {
  const nodeIndex = nodesList.indexOf(el);
  nodesList.splice(nodeIndex, 1);
  portalTypeList.splice(nodeIndex, 1);
  el.remove();
}
function changeGlobalNodesTarget(newTarget) {
  if (newTarget === target) {
    return;
  }
  target = newTarget;
  if (target === document.body || portalTypeList.reduce((acc, type) => type === "dialog" ? acc + 1 : acc, 0) < 2) {
    nodesList.forEach((node) => {
      if (node.contains(target) === false) {
        target.appendChild(node);
      }
    });
    return;
  }
  const lastDialogIndex = portalTypeList.lastIndexOf("dialog");
  for (let i = 0; i < nodesList.length; i++) {
    const el = nodesList[i];
    if ((i === lastDialogIndex || portalTypeList[i] !== "dialog") && el.contains(target) === false) {
      target.appendChild(el);
    }
  }
}
var portalProxyList = [];
function getPortalProxy(el) {
  return portalProxyList.find(
    (proxy) => proxy.contentEl !== null && proxy.contentEl.contains(el)
  );
}
function closePortalMenus(proxy, evt) {
  do {
    if (proxy.$options.name === "QMenu") {
      proxy.hide(evt);
      if (proxy.$props.separateClosePopup === true) {
        return getParentProxy(proxy);
      }
    } else if (proxy.__qPortal === true) {
      const parent = getParentProxy(proxy);
      if (parent !== void 0 && parent.$options.name === "QPopupProxy") {
        proxy.hide(evt);
        return parent;
      } else {
        return proxy;
      }
    }
    proxy = getParentProxy(proxy);
  } while (proxy !== void 0 && proxy !== null);
}
function closePortals(proxy, evt, depth) {
  while (depth !== 0 && proxy !== void 0 && proxy !== null) {
    if (proxy.__qPortal === true) {
      depth--;
      if (proxy.$options.name === "QMenu") {
        proxy = closePortalMenus(proxy, evt);
        continue;
      }
      proxy.hide(evt);
    }
    proxy = getParentProxy(proxy);
  }
}
var QPortal = createComponent({
  name: "QPortal",
  setup(_, { slots }) {
    return () => slots.default();
  }
});
function isOnGlobalDialog(vm2) {
  vm2 = vm2.parent;
  while (vm2 !== void 0 && vm2 !== null) {
    if (vm2.type.name === "QGlobalDialog") {
      return true;
    }
    if (vm2.type.name === "QDialog" || vm2.type.name === "QMenu") {
      return false;
    }
    vm2 = vm2.parent;
  }
  return false;
}
function use_portal_default(vm2, innerRef, renderPortalContent, type) {
  const portalIsActive = ref(false);
  const portalIsAccessible = ref(false);
  if (false) {
    return {
      portalIsActive,
      portalIsAccessible,
      showPortal: noop,
      hidePortal: noop,
      renderPortal: noop
    };
  }
  let portalEl = null;
  const focusObj = {};
  const onGlobalDialog = type === "dialog" && isOnGlobalDialog(vm2);
  function showPortal(isReady) {
    if (isReady === true) {
      removeFocusWaitFlag(focusObj);
      portalIsAccessible.value = true;
      return;
    }
    portalIsAccessible.value = false;
    if (portalIsActive.value === false) {
      if (onGlobalDialog === false && portalEl === null) {
        portalEl = createGlobalNode(false, type);
      }
      portalIsActive.value = true;
      portalProxyList.push(vm2.proxy);
      addFocusWaitFlag(focusObj);
    }
  }
  function hidePortal(isReady) {
    portalIsAccessible.value = false;
    if (isReady !== true) return;
    removeFocusWaitFlag(focusObj);
    portalIsActive.value = false;
    const index = portalProxyList.indexOf(vm2.proxy);
    if (index !== -1) {
      portalProxyList.splice(index, 1);
    }
    if (portalEl !== null) {
      removeGlobalNode(portalEl);
      portalEl = null;
    }
  }
  onUnmounted(() => {
    hidePortal(true);
  });
  vm2.proxy.__qPortal = true;
  injectProp(vm2.proxy, "contentEl", () => innerRef.value);
  return {
    showPortal,
    hidePortal,
    portalIsActive,
    portalIsAccessible,
    renderPortal: () => onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [h(Teleport, { to: portalEl }, h(QPortal, renderPortalContent))] : void 0
  };
}
var useTransitionProps = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function use_transition_default(props4, defaultShowFn = () => {
}, defaultHideFn = () => {
}) {
  return {
    transitionProps: computed(() => {
      const show = `q-transition--${props4.transitionShow || defaultShowFn()}`;
      const hide = `q-transition--${props4.transitionHide || defaultHideFn()}`;
      return {
        appear: true,
        enterFromClass: `${show}-enter-from`,
        enterActiveClass: `${show}-enter-active`,
        enterToClass: `${show}-enter-to`,
        leaveFromClass: `${hide}-leave-from`,
        leaveActiveClass: `${hide}-leave-active`,
        leaveToClass: `${hide}-leave-to`
      };
    }),
    transitionStyle: computed(() => `--q-transition-duration: ${props4.transitionDuration}ms`)
  };
}
function use_tick_default() {
  let tickFn;
  const vm2 = getCurrentInstance();
  function removeTick() {
    tickFn = void 0;
  }
  onDeactivated(removeTick);
  onBeforeUnmount(removeTick);
  return {
    removeTick,
    registerTick(fn) {
      tickFn = fn;
      nextTick(() => {
        if (tickFn === fn) {
          vmIsDestroyed(vm2) === false && tickFn();
          tickFn = void 0;
        }
      });
    }
  };
}
function use_timeout_default() {
  let timer2 = null;
  const vm2 = getCurrentInstance();
  function removeTimeout() {
    if (timer2 !== null) {
      clearTimeout(timer2);
      timer2 = null;
    }
  }
  onDeactivated(removeTimeout);
  onBeforeUnmount(removeTimeout);
  return {
    removeTimeout,
    registerTimeout(fn, delay) {
      removeTimeout(timer2);
      if (vmIsDestroyed(vm2) === false) {
        timer2 = setTimeout(() => {
          timer2 = null;
          fn();
        }, delay);
      }
    }
  };
}
var scrollTargetProp = false ? {} : [Element, String];
var scrollTargets = false ? [] : [null, document, document.body, document.scrollingElement, document.documentElement];
function getScrollTarget(el, targetEl) {
  let target2 = getElement(targetEl);
  if (target2 === void 0) {
    if (el === void 0 || el === null) {
      return window;
    }
    target2 = el.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return scrollTargets.includes(target2) ? window : target2;
}
function getScrollHeight(el) {
  return (el === window ? document.body : el).scrollHeight;
}
function getScrollWidth(el) {
  return (el === window ? document.body : el).scrollWidth;
}
function getVerticalScrollPosition(scrollTarget) {
  return scrollTarget === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : scrollTarget.scrollTop;
}
function getHorizontalScrollPosition(scrollTarget) {
  return scrollTarget === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : scrollTarget.scrollLeft;
}
function animVerticalScrollTo(el, to, duration2 = 0) {
  const prevTime = arguments[3] === void 0 ? performance.now() : arguments[3];
  const pos = getVerticalScrollPosition(el);
  if (duration2 <= 0) {
    if (pos !== to) {
      setScroll(el, to);
    }
    return;
  }
  requestAnimationFrame((nowTime) => {
    const frameTime = nowTime - prevTime;
    const newPos = pos + (to - pos) / Math.max(frameTime, duration2) * frameTime;
    setScroll(el, newPos);
    if (newPos !== to) {
      animVerticalScrollTo(el, to, duration2 - frameTime, nowTime);
    }
  });
}
function animHorizontalScrollTo(el, to, duration2 = 0) {
  const prevTime = arguments[3] === void 0 ? performance.now() : arguments[3];
  const pos = getHorizontalScrollPosition(el);
  if (duration2 <= 0) {
    if (pos !== to) {
      setHorizontalScroll(el, to);
    }
    return;
  }
  requestAnimationFrame((nowTime) => {
    const frameTime = nowTime - prevTime;
    const newPos = pos + (to - pos) / Math.max(frameTime, duration2) * frameTime;
    setHorizontalScroll(el, newPos);
    if (newPos !== to) {
      animHorizontalScrollTo(el, to, duration2 - frameTime, nowTime);
    }
  });
}
function setScroll(scrollTarget, offset2) {
  if (scrollTarget === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, offset2);
    return;
  }
  scrollTarget.scrollTop = offset2;
}
function setHorizontalScroll(scrollTarget, offset2) {
  if (scrollTarget === window) {
    window.scrollTo(offset2, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  scrollTarget.scrollLeft = offset2;
}
function setVerticalScrollPosition(scrollTarget, offset2, duration2) {
  if (duration2) {
    animVerticalScrollTo(scrollTarget, offset2, duration2);
    return;
  }
  setScroll(scrollTarget, offset2);
}
function setHorizontalScrollPosition(scrollTarget, offset2, duration2) {
  if (duration2) {
    animHorizontalScrollTo(scrollTarget, offset2, duration2);
    return;
  }
  setHorizontalScroll(scrollTarget, offset2);
}
var size;
function getScrollbarWidth() {
  if (size !== void 0) {
    return size;
  }
  const inner = document.createElement("p"), outer = document.createElement("div");
  css(inner, {
    width: "100%",
    height: "200px"
  });
  css(outer, {
    position: "absolute",
    top: "0px",
    left: "0px",
    visibility: "hidden",
    width: "200px",
    height: "150px",
    overflow: "hidden"
  });
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  let w2 = inner.offsetWidth;
  if (w1 === w2) {
    w2 = outer.clientWidth;
  }
  outer.remove();
  size = w1 - w2;
  return size;
}
function hasScrollbar(el, onY = true) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  return onY ? el.scrollHeight > el.clientHeight && (el.classList.contains("scroll") || el.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(el)["overflow-y"])) : el.scrollWidth > el.clientWidth && (el.classList.contains("scroll") || el.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(el)["overflow-x"]));
}
var scroll_default = {
  getScrollTarget,
  getScrollHeight,
  getScrollWidth,
  getVerticalScrollPosition,
  getHorizontalScrollPosition,
  animVerticalScrollTo,
  animHorizontalScrollTo,
  setVerticalScrollPosition,
  setHorizontalScrollPosition,
  getScrollbarWidth,
  hasScrollbar
};
var handlers = [];
var escDown;
function onKeydown(evt) {
  escDown = evt.keyCode === 27;
}
function onBlur() {
  if (escDown === true) {
    escDown = false;
  }
}
function onKeyup(evt) {
  if (escDown === true) {
    escDown = false;
    if (isKeyCode(evt, 27) === true) {
      handlers[handlers.length - 1](evt);
    }
  }
}
function update(action) {
  window[action]("keydown", onKeydown);
  window[action]("blur", onBlur);
  window[action]("keyup", onKeyup);
  escDown = false;
}
function addEscapeKey(fn) {
  if (client.is.desktop === true) {
    handlers.push(fn);
    if (handlers.length === 1) {
      update("addEventListener");
    }
  }
}
function removeEscapeKey(fn) {
  const index = handlers.indexOf(fn);
  if (index !== -1) {
    handlers.splice(index, 1);
    if (handlers.length === 0) {
      update("removeEventListener");
    }
  }
}
var handlers2 = [];
function trigger(e) {
  handlers2[handlers2.length - 1](e);
}
function addFocusout(fn) {
  if (client.is.desktop === true) {
    handlers2.push(fn);
    if (handlers2.length === 1) {
      document.body.addEventListener("focusin", trigger);
    }
  }
}
function removeFocusout(fn) {
  const index = handlers2.indexOf(fn);
  if (index !== -1) {
    handlers2.splice(index, 1);
    if (handlers2.length === 0) {
      document.body.removeEventListener("focusin", trigger);
    }
  }
}
var timer = null;
var { notPassiveCapture } = listenOpts;
var registeredList = [];
function globalHandler(evt) {
  if (timer !== null) {
    clearTimeout(timer);
    timer = null;
  }
  const target2 = evt.target;
  if (target2 === void 0 || target2.nodeType === 8 || target2.classList.contains("no-pointer-events") === true) {
    return;
  }
  let portalIndex2 = portalProxyList.length - 1;
  while (portalIndex2 >= 0) {
    const proxy = portalProxyList[portalIndex2].$;
    if (proxy.type.name === "QTooltip") {
      portalIndex2--;
      continue;
    }
    if (proxy.type.name !== "QDialog") {
      break;
    }
    if (proxy.props.seamless !== true) {
      return;
    }
    portalIndex2--;
  }
  for (let i = registeredList.length - 1; i >= 0; i--) {
    const state = registeredList[i];
    if ((state.anchorEl.value === null || state.anchorEl.value.contains(target2) === false) && (target2 === document.body || state.innerRef.value !== null && state.innerRef.value.contains(target2) === false)) {
      evt.qClickOutside = true;
      state.onClickOutside(evt);
    } else {
      return;
    }
  }
}
function addClickOutside(clickOutsideProps) {
  registeredList.push(clickOutsideProps);
  if (registeredList.length === 1) {
    document.addEventListener("mousedown", globalHandler, notPassiveCapture);
    document.addEventListener("touchstart", globalHandler, notPassiveCapture);
  }
}
function removeClickOutside(clickOutsideProps) {
  const index = registeredList.findIndex((h138) => h138 === clickOutsideProps);
  if (index !== -1) {
    registeredList.splice(index, 1);
    if (registeredList.length === 0) {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      document.removeEventListener("mousedown", globalHandler, notPassiveCapture);
      document.removeEventListener("touchstart", globalHandler, notPassiveCapture);
    }
  }
}
var vpLeft;
var vpTop;
function validatePosition(pos) {
  const parts = pos.split(" ");
  if (parts.length !== 2) {
    return false;
  }
  if (["top", "center", "bottom"].includes(parts[0]) !== true) {
    console.error("Anchor/Self position must start with one of top/center/bottom");
    return false;
  }
  if (["left", "middle", "right", "start", "end"].includes(parts[1]) !== true) {
    console.error("Anchor/Self position must end with one of left/middle/right/start/end");
    return false;
  }
  return true;
}
function validateOffset(val) {
  if (!val) {
    return true;
  }
  if (val.length !== 2) {
    return false;
  }
  if (typeof val[0] !== "number" || typeof val[1] !== "number") {
    return false;
  }
  return true;
}
var horizontalPos = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((pos) => {
  horizontalPos[`${pos}#ltr`] = pos;
  horizontalPos[`${pos}#rtl`] = pos;
});
function parsePosition(pos, rtl) {
  const parts = pos.split(" ");
  return {
    vertical: parts[0],
    horizontal: horizontalPos[`${parts[1]}#${rtl === true ? "rtl" : "ltr"}`]
  };
}
function getAnchorProps(el, offset2) {
  let { top, left, right, bottom, width: width3, height: height2 } = el.getBoundingClientRect();
  if (offset2 !== void 0) {
    top -= offset2[1];
    left -= offset2[0];
    bottom += offset2[1];
    right += offset2[0];
    width3 += offset2[0];
    height2 += offset2[1];
  }
  return {
    top,
    bottom,
    height: height2,
    left,
    right,
    width: width3,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  };
}
function getAbsoluteAnchorProps(el, absoluteOffset, offset2) {
  let { top, left } = el.getBoundingClientRect();
  top += absoluteOffset.top;
  left += absoluteOffset.left;
  if (offset2 !== void 0) {
    top += offset2[1];
    left += offset2[0];
  }
  return {
    top,
    bottom: top + 1,
    height: 1,
    left,
    right: left + 1,
    width: 1,
    middle: left,
    center: top
  };
}
function getTargetProps(width3, height2) {
  return {
    top: 0,
    center: height2 / 2,
    bottom: height2,
    left: 0,
    middle: width3 / 2,
    right: width3
  };
}
function getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin) {
  return {
    top: anchorProps[anchorOrigin.vertical] - targetProps[selfOrigin.vertical],
    left: anchorProps[anchorOrigin.horizontal] - targetProps[selfOrigin.horizontal]
  };
}
function setPosition(cfg, retryNumber = 0) {
  if (cfg.targetEl === null || cfg.anchorEl === null || retryNumber > 5) {
    return;
  }
  if (cfg.targetEl.offsetHeight === 0 || cfg.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      setPosition(cfg, retryNumber + 1);
    }, 10);
    return;
  }
  const {
    targetEl,
    offset: offset2,
    anchorEl,
    anchorOrigin,
    selfOrigin,
    absoluteOffset,
    fit,
    cover,
    maxHeight,
    maxWidth
  } = cfg;
  if (client.is.ios === true && window.visualViewport !== void 0) {
    const el = document.body.style;
    const { offsetLeft: left, offsetTop: top } = window.visualViewport;
    if (left !== vpLeft) {
      el.setProperty("--q-pe-left", left + "px");
      vpLeft = left;
    }
    if (top !== vpTop) {
      el.setProperty("--q-pe-top", top + "px");
      vpTop = top;
    }
  }
  const { scrollLeft, scrollTop } = targetEl;
  const anchorProps = absoluteOffset === void 0 ? getAnchorProps(anchorEl, cover === true ? [0, 0] : offset2) : getAbsoluteAnchorProps(anchorEl, absoluteOffset, offset2);
  Object.assign(targetEl.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth,
    maxHeight,
    visibility: "visible"
  });
  const { offsetWidth: origElWidth, offsetHeight: origElHeight } = targetEl;
  const { elWidth, elHeight } = fit === true || cover === true ? { elWidth: Math.max(anchorProps.width, origElWidth), elHeight: cover === true ? Math.max(anchorProps.height, origElHeight) : origElHeight } : { elWidth: origElWidth, elHeight: origElHeight };
  let elStyle = { maxWidth, maxHeight };
  if (fit === true || cover === true) {
    elStyle.minWidth = anchorProps.width + "px";
    if (cover === true) {
      elStyle.minHeight = anchorProps.height + "px";
    }
  }
  Object.assign(targetEl.style, elStyle);
  const targetProps = getTargetProps(elWidth, elHeight);
  let props4 = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
  if (absoluteOffset === void 0 || offset2 === void 0) {
    applyBoundaries(props4, anchorProps, targetProps, anchorOrigin, selfOrigin);
  } else {
    const { top, left } = props4;
    applyBoundaries(props4, anchorProps, targetProps, anchorOrigin, selfOrigin);
    let hasChanged = false;
    if (props4.top !== top) {
      hasChanged = true;
      const offsetY = 2 * offset2[1];
      anchorProps.center = anchorProps.top -= offsetY;
      anchorProps.bottom -= offsetY + 2;
    }
    if (props4.left !== left) {
      hasChanged = true;
      const offsetX = 2 * offset2[0];
      anchorProps.middle = anchorProps.left -= offsetX;
      anchorProps.right -= offsetX + 2;
    }
    if (hasChanged === true) {
      props4 = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
      applyBoundaries(props4, anchorProps, targetProps, anchorOrigin, selfOrigin);
    }
  }
  elStyle = {
    top: props4.top + "px",
    left: props4.left + "px"
  };
  if (props4.maxHeight !== void 0) {
    elStyle.maxHeight = props4.maxHeight + "px";
    if (anchorProps.height > props4.maxHeight) {
      elStyle.minHeight = elStyle.maxHeight;
    }
  }
  if (props4.maxWidth !== void 0) {
    elStyle.maxWidth = props4.maxWidth + "px";
    if (anchorProps.width > props4.maxWidth) {
      elStyle.minWidth = elStyle.maxWidth;
    }
  }
  Object.assign(targetEl.style, elStyle);
  if (targetEl.scrollTop !== scrollTop) {
    targetEl.scrollTop = scrollTop;
  }
  if (targetEl.scrollLeft !== scrollLeft) {
    targetEl.scrollLeft = scrollLeft;
  }
}
function applyBoundaries(props4, anchorProps, targetProps, anchorOrigin, selfOrigin) {
  const currentHeight = targetProps.bottom, currentWidth = targetProps.right, margin = getScrollbarWidth(), innerHeight = window.innerHeight - margin, innerWidth = document.body.clientWidth;
  if (props4.top < 0 || props4.top + currentHeight > innerHeight) {
    if (selfOrigin.vertical === "center") {
      props4.top = anchorProps[anchorOrigin.vertical] > innerHeight / 2 ? Math.max(0, innerHeight - currentHeight) : 0;
      props4.maxHeight = Math.min(currentHeight, innerHeight);
    } else if (anchorProps[anchorOrigin.vertical] > innerHeight / 2) {
      const anchorY = Math.min(
        innerHeight,
        anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top
      );
      props4.maxHeight = Math.min(currentHeight, anchorY);
      props4.top = Math.max(0, anchorY - currentHeight);
    } else {
      props4.top = Math.max(
        0,
        anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom
      );
      props4.maxHeight = Math.min(currentHeight, innerHeight - props4.top);
    }
  }
  if (props4.left < 0 || props4.left + currentWidth > innerWidth) {
    props4.maxWidth = Math.min(currentWidth, innerWidth);
    if (selfOrigin.horizontal === "middle") {
      props4.left = anchorProps[anchorOrigin.horizontal] > innerWidth / 2 ? Math.max(0, innerWidth - currentWidth) : 0;
    } else if (anchorProps[anchorOrigin.horizontal] > innerWidth / 2) {
      const anchorX = Math.min(
        innerWidth,
        anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left
      );
      props4.maxWidth = Math.min(currentWidth, anchorX);
      props4.left = Math.max(0, anchorX - props4.maxWidth);
    } else {
      props4.left = Math.max(
        0,
        anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right
      );
      props4.maxWidth = Math.min(currentWidth, innerWidth - props4.left);
    }
  }
}
var QMenu_default = createComponent({
  name: "QMenu",
  inheritAttrs: false,
  props: {
    ...useAnchorProps,
    ...useModelToggleProps,
    ...useDarkProps,
    ...useTransitionProps,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: validatePosition
    },
    self: {
      type: String,
      validator: validatePosition
    },
    offset: {
      type: Array,
      validator: validateOffset
    },
    scrollTarget: scrollTargetProp,
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  emits: [
    ...useModelToggleEmits,
    "click",
    "escapeKey"
  ],
  setup(props4, { slots, emit, attrs }) {
    let refocusTarget = null, absoluteOffset, unwatchPosition, avoidAutoClose;
    const vm2 = getCurrentInstance();
    const { proxy } = vm2;
    const { $q } = proxy;
    const innerRef = ref(null);
    const showing = ref(false);
    const hideOnRouteChange = computed(
      () => props4.persistent !== true && props4.noRouteDismiss !== true
    );
    const isDark = use_dark_default(props4, $q);
    const { registerTick, removeTick } = use_tick_default();
    const { registerTimeout } = use_timeout_default();
    const { transitionProps, transitionStyle } = use_transition_default(props4);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = use_scroll_target_default(props4, configureScrollTarget);
    const { anchorEl, canShow } = use_anchor_default({ showing });
    const { hide } = use_model_toggle_default({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    const { showPortal, hidePortal, renderPortal } = use_portal_default(vm2, innerRef, renderPortalContent, "menu");
    const clickOutsideProps = {
      anchorEl,
      innerRef,
      onClickOutside(e) {
        if (props4.persistent !== true && showing.value === true) {
          hide(e);
          if (
            // always prevent touch event
            e.type === "touchstart" || e.target.classList.contains("q-dialog__backdrop")
          ) {
            stopAndPrevent(e);
          }
          return true;
        }
      }
    };
    const anchorOrigin = computed(
      () => parsePosition(
        props4.anchor || (props4.cover === true ? "center middle" : "bottom start"),
        $q.lang.rtl
      )
    );
    const selfOrigin = computed(() => props4.cover === true ? anchorOrigin.value : parsePosition(props4.self || "top start", $q.lang.rtl));
    const menuClass = computed(
      () => (props4.square === true ? " q-menu--square" : "") + (isDark.value === true ? " q-menu--dark q-dark" : "")
    );
    const onEvents = computed(() => props4.autoClose === true ? { onClick: onAutoClose } : {});
    const handlesFocus = computed(
      () => showing.value === true && props4.persistent !== true
    );
    watch(handlesFocus, (val) => {
      if (val === true) {
        addEscapeKey(onEscapeKey);
        addClickOutside(clickOutsideProps);
      } else {
        removeEscapeKey(onEscapeKey);
        removeClickOutside(clickOutsideProps);
      }
    });
    function focus() {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node && node.contains(document.activeElement) !== true) {
          node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
          node.focus({ preventScroll: true });
        }
      });
    }
    function handleShow(evt) {
      refocusTarget = props4.noRefocus === false ? document.activeElement : null;
      addFocusout(onFocusout);
      showPortal();
      configureScrollTarget();
      absoluteOffset = void 0;
      if (evt !== void 0 && (props4.touchPosition || props4.contextMenu)) {
        const pos = position(evt);
        if (pos.left !== void 0) {
          const { top, left } = anchorEl.value.getBoundingClientRect();
          absoluteOffset = { left: pos.left - left, top: pos.top - top };
        }
      }
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props4.self + "|" + props4.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      if (props4.noFocus !== true) {
        document.activeElement.blur();
      }
      registerTick(() => {
        updatePosition();
        props4.noFocus !== true && focus();
      });
      registerTimeout(() => {
        if ($q.platform.is.ios === true) {
          avoidAutoClose = props4.autoClose;
          innerRef.value.click();
        }
        updatePosition();
        showPortal(true);
        emit("show", evt);
      }, props4.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup(true);
      if (refocusTarget !== null && // menu was hidden from code or ESC plugin
      (evt === void 0 || evt.qClickOutside !== true)) {
        ((evt && evt.type.indexOf("key") === 0 ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])') : void 0) || refocusTarget).focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props4.transitionDuration);
    }
    function anchorCleanup(hiding) {
      absoluteOffset = void 0;
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      if (hiding === true || showing.value === true) {
        removeFocusout(onFocusout);
        unconfigureScrollTarget();
        removeClickOutside(clickOutsideProps);
        removeEscapeKey(onEscapeKey);
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props4.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props4.scrollTarget);
        changeScrollEvent(localScrollTarget.value, updatePosition);
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        closePortalMenus(proxy, e);
        emit("click", e);
      } else {
        avoidAutoClose = false;
      }
    }
    function onFocusout(evt) {
      if (handlesFocus.value === true && props4.noFocus !== true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus();
      }
    }
    function onEscapeKey(evt) {
      emit("escapeKey");
      hide(evt);
    }
    function updatePosition() {
      setPosition({
        targetEl: innerRef.value,
        offset: props4.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        absoluteOffset,
        fit: props4.fit,
        cover: props4.cover,
        maxHeight: props4.maxHeight,
        maxWidth: props4.maxWidth
      });
    }
    function renderPortalContent() {
      return h(
        Transition,
        transitionProps.value,
        () => showing.value === true ? h("div", {
          role: "menu",
          ...attrs,
          ref: innerRef,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + menuClass.value,
            attrs.class
          ],
          style: [
            attrs.style,
            transitionStyle.value
          ],
          ...onEvents.value
        }, hSlot(slots.default)) : null
      );
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(proxy, { focus, updatePosition });
    return renderPortal;
  }
});
var buf;
var bufIdx = 0;
var hexBytes = new Array(256);
for (let i = 0; i < 256; i++) {
  hexBytes[i] = (i + 256).toString(16).substring(1);
}
var randomBytes = (() => {
  const lib = typeof crypto !== "undefined" ? crypto : typeof window !== "undefined" ? window.crypto || window.msCrypto : void 0;
  if (lib !== void 0) {
    if (lib.randomBytes !== void 0) {
      return lib.randomBytes;
    }
    if (lib.getRandomValues !== void 0) {
      return (n) => {
        const bytes = new Uint8Array(n);
        lib.getRandomValues(bytes);
        return bytes;
      };
    }
  }
  return (n) => {
    const r = [];
    for (let i = n; i > 0; i--) {
      r.push(Math.floor(Math.random() * 256));
    }
    return r;
  };
})();
var BUFFER_SIZE = 4096;
function uid_default() {
  if (buf === void 0 || bufIdx + 16 > BUFFER_SIZE) {
    bufIdx = 0;
    buf = randomBytes(BUFFER_SIZE);
  }
  const b = Array.prototype.slice.call(buf, bufIdx, bufIdx += 16);
  b[6] = b[6] & 15 | 64;
  b[8] = b[8] & 63 | 128;
  return hexBytes[b[0]] + hexBytes[b[1]] + hexBytes[b[2]] + hexBytes[b[3]] + "-" + hexBytes[b[4]] + hexBytes[b[5]] + "-" + hexBytes[b[6]] + hexBytes[b[7]] + "-" + hexBytes[b[8]] + hexBytes[b[9]] + "-" + hexBytes[b[10]] + hexBytes[b[11]] + hexBytes[b[12]] + hexBytes[b[13]] + hexBytes[b[14]] + hexBytes[b[15]];
}
function parseValue(val) {
  return val === void 0 || val === null ? null : val;
}
function getId(val, required) {
  return val === void 0 || val === null ? required === true ? `f_${uid_default()}` : null : val;
}
function use_id_default({ getValue, required = true } = {}) {
  if (isRuntimeSsrPreHydration.value === true) {
    const id3 = getValue !== void 0 ? ref(parseValue(getValue())) : ref(null);
    if (required === true && id3.value === null) {
      onMounted(() => {
        id3.value = `f_${uid_default()}`;
      });
    }
    if (getValue !== void 0) {
      watch(getValue, (newId) => {
        id3.value = getId(newId, required);
      });
    }
    return id3;
  }
  return getValue !== void 0 ? computed(() => getId(getValue(), required)) : ref(`f_${uid_default()}`);
}
var btnPropsList = Object.keys(nonRoundBtnProps);
function passBtnProps(props4) {
  return btnPropsList.reduce((acc, key) => {
    const val = props4[key];
    if (val !== void 0) {
      acc[key] = val;
    }
    return acc;
  }, {});
}
var QBtnDropdown_default = createComponent({
  name: "QBtnDropdown",
  props: {
    ...nonRoundBtnProps,
    ...useTransitionProps,
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    menuAnchor: {
      type: String,
      default: "bottom end"
    },
    menuSelf: {
      type: String,
      default: "top end"
    },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean,
    toggleAriaLabel: String
  },
  emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const showing = ref(props4.modelValue);
    const menuRef = ref(null);
    const targetUid = use_id_default();
    const ariaAttrs = computed(() => {
      const acc = {
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true",
        "aria-controls": targetUid.value,
        "aria-label": props4.toggleAriaLabel || proxy.$q.lang.label[showing.value === true ? "collapse" : "expand"](props4.label)
      };
      if (props4.disable === true || (props4.split === false && props4.disableMainBtn === true || props4.disableDropdown === true)) {
        acc["aria-disabled"] = "true";
      }
      return acc;
    });
    const iconClass = computed(
      () => "q-btn-dropdown__arrow" + (showing.value === true && props4.noIconAnimation === false ? " rotate-180" : "") + (props4.split === false ? " q-btn-dropdown__arrow-container" : "")
    );
    const btnDesignAttr = computed(() => getBtnDesignAttr(props4));
    const btnProps = computed(() => passBtnProps(props4));
    watch(() => props4.modelValue, (val) => {
      menuRef.value !== null && menuRef.value[val ? "show" : "hide"]();
    });
    watch(() => props4.split, hide);
    function onBeforeShow(e) {
      showing.value = true;
      emit("beforeShow", e);
    }
    function onShow(e) {
      emit("show", e);
      emit("update:modelValue", true);
    }
    function onBeforeHide(e) {
      showing.value = false;
      emit("beforeHide", e);
    }
    function onHide(e) {
      emit("hide", e);
      emit("update:modelValue", false);
    }
    function onClick(e) {
      emit("click", e);
    }
    function onClickHide(e) {
      stop(e);
      hide();
      emit("click", e);
    }
    function toggle(evt) {
      menuRef.value !== null && menuRef.value.toggle(evt);
    }
    function show(evt) {
      menuRef.value !== null && menuRef.value.show(evt);
    }
    function hide(evt) {
      menuRef.value !== null && menuRef.value.hide(evt);
    }
    Object.assign(proxy, {
      show,
      hide,
      toggle
    });
    onMounted(() => {
      props4.modelValue === true && show();
    });
    return () => {
      const Arrow = [
        h(QIcon_default, {
          class: iconClass.value,
          name: props4.dropdownIcon || proxy.$q.iconSet.arrow.dropdown
        })
      ];
      props4.disableDropdown !== true && Arrow.push(
        h(QMenu_default, {
          ref: menuRef,
          id: targetUid.value,
          class: props4.contentClass,
          style: props4.contentStyle,
          cover: props4.cover,
          fit: true,
          persistent: props4.persistent,
          noRouteDismiss: props4.noRouteDismiss,
          autoClose: props4.autoClose,
          anchor: props4.menuAnchor,
          self: props4.menuSelf,
          offset: props4.menuOffset,
          separateClosePopup: true,
          transitionShow: props4.transitionShow,
          transitionHide: props4.transitionHide,
          transitionDuration: props4.transitionDuration,
          onBeforeShow,
          onShow,
          onBeforeHide,
          onHide
        }, slots.default)
      );
      if (props4.split === false) {
        return h(QBtn_default, {
          class: "q-btn-dropdown q-btn-dropdown--simple",
          ...btnProps.value,
          ...ariaAttrs.value,
          disable: props4.disable === true || props4.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick
        }, {
          default: () => hSlot(slots.label, []).concat(Arrow),
          loading: slots.loading
        });
      }
      return h(QBtnGroup_default, {
        class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
        rounded: props4.rounded,
        square: props4.square,
        ...btnDesignAttr.value,
        glossy: props4.glossy,
        stretch: props4.stretch
      }, () => [
        h(QBtn_default, {
          class: "q-btn-dropdown--current",
          ...btnProps.value,
          disable: props4.disable === true || props4.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick: onClickHide
        }, {
          default: slots.label,
          loading: slots.loading
        }),
        h(QBtn_default, {
          class: "q-btn-dropdown__arrow-container q-anchor--skip",
          ...ariaAttrs.value,
          ...btnDesignAttr.value,
          disable: props4.disable === true || props4.disableDropdown === true,
          rounded: props4.rounded,
          color: props4.color,
          textColor: props4.textColor,
          dense: props4.dense,
          size: props4.size,
          padding: props4.padding,
          ripple: props4.ripple
        }, () => Arrow)
      ]);
    };
  }
});
var useFormProps = {
  name: String
};
function useFormAttrs(props4) {
  return computed(() => ({
    type: "hidden",
    name: props4.name,
    value: props4.modelValue
  }));
}
function useFormInject(formAttrs = {}) {
  return (child, action, className) => {
    child[action](
      h("input", {
        class: "hidden" + (className || ""),
        ...formAttrs.value
      })
    );
  };
}
function useFormInputNameAttr(props4) {
  return computed(() => props4.name || props4.for);
}
var QBtnToggle_default = createComponent({
  name: "QBtnToggle",
  props: {
    ...useFormProps,
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: (v) => v.every(
        (opt) => ("label" in opt || "icon" in opt || "slot" in opt) && "value" in opt
      )
    },
    // To avoid seeing the active raise shadow through
    // the transparent button, give it a color (even white)
    color: String,
    textColor: String,
    toggleColor: {
      type: String,
      default: "primary"
    },
    toggleTextColor: String,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    padding: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    readonly: Boolean,
    disable: Boolean,
    stack: Boolean,
    stretch: Boolean,
    spread: Boolean,
    clearable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "clear", "click"],
  setup(props4, { slots, emit }) {
    const hasActiveValue = computed(
      () => props4.options.find((opt) => opt.value === props4.modelValue) !== void 0
    );
    const formAttrs = computed(() => ({
      type: "hidden",
      name: props4.name,
      value: props4.modelValue
    }));
    const injectFormInput = useFormInject(formAttrs);
    const btnDesignAttr = computed(() => getBtnDesignAttr(props4));
    const btnOptionDesign = computed(() => ({
      rounded: props4.rounded,
      dense: props4.dense,
      ...btnDesignAttr.value
    }));
    const btnOptions = computed(() => props4.options.map((item, i) => {
      const { attrs, value: value2, slot, ...opt } = item;
      return {
        slot,
        props: {
          key: i,
          "aria-pressed": value2 === props4.modelValue ? "true" : "false",
          ...attrs,
          ...opt,
          ...btnOptionDesign.value,
          disable: props4.disable === true || opt.disable === true,
          // Options that come from the button specific options first, then from general props
          color: value2 === props4.modelValue ? mergeOpt(opt, "toggleColor") : mergeOpt(opt, "color"),
          textColor: value2 === props4.modelValue ? mergeOpt(opt, "toggleTextColor") : mergeOpt(opt, "textColor"),
          noCaps: mergeOpt(opt, "noCaps") === true,
          noWrap: mergeOpt(opt, "noWrap") === true,
          size: mergeOpt(opt, "size"),
          padding: mergeOpt(opt, "padding"),
          ripple: mergeOpt(opt, "ripple"),
          stack: mergeOpt(opt, "stack") === true,
          stretch: mergeOpt(opt, "stretch") === true,
          onClick(e) {
            set2(value2, item, e);
          }
        }
      };
    }));
    function set2(value2, opt, e) {
      if (props4.readonly !== true) {
        if (props4.modelValue === value2) {
          if (props4.clearable === true) {
            emit("update:modelValue", null, null);
            emit("clear");
          }
        } else {
          emit("update:modelValue", value2, opt);
        }
        emit("click", e);
      }
    }
    function mergeOpt(opt, key) {
      return opt[key] === void 0 ? props4[key] : opt[key];
    }
    function getContent() {
      const child = btnOptions.value.map((opt) => {
        return h(QBtn_default, opt.props, opt.slot !== void 0 ? slots[opt.slot] : void 0);
      });
      if (props4.name !== void 0 && props4.disable !== true && hasActiveValue.value === true) {
        injectFormInput(child, "push");
      }
      return hMergeSlot(slots.default, child);
    }
    return () => h(QBtnGroup_default, {
      class: "q-btn-toggle",
      ...btnDesignAttr.value,
      rounded: props4.rounded,
      stretch: props4.stretch,
      glossy: props4.glossy,
      spread: props4.spread
    }, getContent);
  }
});
var QCard_default = createComponent({
  name: "QCard",
  props: {
    ...useDarkProps,
    tag: {
      type: String,
      default: "div"
    },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },
  setup(props4, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = use_dark_default(props4, $q);
    const classes = computed(
      () => "q-card" + (isDark.value === true ? " q-card--dark q-dark" : "") + (props4.bordered === true ? " q-card--bordered" : "") + (props4.square === true ? " q-card--square no-border-radius" : "") + (props4.flat === true ? " q-card--flat no-shadow" : "")
    );
    return () => h(props4.tag, { class: classes.value }, hSlot(slots.default));
  }
});
var QCardSection_default = createComponent({
  name: "QCardSection",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    horizontal: Boolean
  },
  setup(props4, { slots }) {
    const classes = computed(
      () => `q-card__section q-card__section--${props4.horizontal === true ? "horiz row no-wrap" : "vert"}`
    );
    return () => h(props4.tag, { class: classes.value }, hSlot(slots.default));
  }
});
var QCardActions_default = createComponent({
  name: "QCardActions",
  props: {
    ...useAlignProps,
    vertical: Boolean
  },
  setup(props4, { slots }) {
    const alignClass = use_align_default(props4);
    const classes = computed(
      () => `q-card__actions ${alignClass.value} q-card__actions--${props4.vertical === true ? "vert column" : "horiz row"}`
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
var modifiersAll = {
  left: true,
  right: true,
  up: true,
  down: true,
  horizontal: true,
  vertical: true
};
var directionList = Object.keys(modifiersAll);
modifiersAll.all = true;
function getModifierDirections(mod2) {
  const dir = {};
  for (const direction of directionList) {
    if (mod2[direction] === true) {
      dir[direction] = true;
    }
  }
  if (Object.keys(dir).length === 0) {
    return modifiersAll;
  }
  if (dir.horizontal === true) {
    dir.left = dir.right = true;
  } else if (dir.left === true && dir.right === true) {
    dir.horizontal = true;
  }
  if (dir.vertical === true) {
    dir.up = dir.down = true;
  } else if (dir.up === true && dir.down === true) {
    dir.vertical = true;
  }
  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true;
  }
  return dir;
}
var avoidNodeNamesList = ["INPUT", "TEXTAREA"];
function shouldStart(evt, ctx) {
  return ctx.event === void 0 && evt.target !== void 0 && evt.target.draggable !== true && typeof ctx.handler === "function" && avoidNodeNamesList.includes(evt.target.nodeName.toUpperCase()) === false && (evt.qClonedBy === void 0 || evt.qClonedBy.indexOf(ctx.uid) === -1);
}
function parseArg(arg) {
  const data = [0.06, 6, 50];
  if (typeof arg === "string" && arg.length) {
    arg.split(":").forEach((val, index) => {
      const v = parseFloat(val);
      v && (data[index] = v);
    });
  }
  return data;
}
var TouchSwipe_default = createDirective(
  false ? { name: "touch-swipe", getSSRProps: noop_ssr_directive_transform_default } : {
    name: "touch-swipe",
    beforeMount(el, { value: value2, arg, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      const mouseCapture = modifiers.mouseCapture === true ? "Capture" : "";
      const ctx = {
        handler: value2,
        sensitivity: parseArg(arg),
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", `notPassive${mouseCapture}`],
              [document, "mouseup", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target2 = evt.target;
            addEvt(ctx, "temp", [
              [target2, "touchmove", "move", "notPassiveCapture"],
              [target2, "touchcancel", "end", "notPassiveCapture"],
              [target2, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          const pos = position(evt);
          ctx.event = {
            x: pos.left,
            y: pos.top,
            time: Date.now(),
            mouse: mouseEvent === true,
            dir: false
          };
        },
        move(evt) {
          if (ctx.event === void 0) {
            return;
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            return;
          }
          const time = Date.now() - ctx.event.time;
          if (time === 0) {
            return;
          }
          const pos = position(evt), distX = pos.left - ctx.event.x, absX = Math.abs(distX), distY = pos.top - ctx.event.y, absY = Math.abs(distY);
          if (ctx.event.mouse !== true) {
            if (absX < ctx.sensitivity[1] && absY < ctx.sensitivity[1]) {
              ctx.end(evt);
              return;
            }
          } else if (window.getSelection().toString() !== "") {
            ctx.end(evt);
            return;
          } else if (absX < ctx.sensitivity[2] && absY < ctx.sensitivity[2]) {
            return;
          }
          const velX = absX / time, velY = absY / time;
          if (ctx.direction.vertical === true && absX < absY && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = distY < 0 ? "up" : "down";
          }
          if (ctx.direction.horizontal === true && absX > absY && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = distX < 0 ? "left" : "right";
          }
          if (ctx.direction.up === true && absX < absY && distY < 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "up";
          }
          if (ctx.direction.down === true && absX < absY && distY > 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "down";
          }
          if (ctx.direction.left === true && absX > absY && distX < 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "left";
          }
          if (ctx.direction.right === true && absX > absY && distX > 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "right";
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            if (ctx.event.mouse === true) {
              document.body.classList.add("no-pointer-events--children");
              document.body.classList.add("non-selectable");
              clearSelection();
              ctx.styleCleanup = (withDelay) => {
                ctx.styleCleanup = void 0;
                document.body.classList.remove("non-selectable");
                const remove2 = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelay === true) {
                  setTimeout(remove2, 50);
                } else {
                  remove2();
                }
              };
            }
            ctx.handler({
              evt,
              touch: ctx.event.mouse !== true,
              mouse: ctx.event.mouse,
              direction: ctx.event.dir,
              duration: time,
              distance: {
                x: absX,
                y: absY
              }
            });
          } else {
            ctx.end(evt);
          }
        },
        end(evt) {
          if (ctx.event === void 0) {
            return;
          }
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          ctx.styleCleanup !== void 0 && ctx.styleCleanup(true);
          evt !== void 0 && ctx.event.dir !== false && stopAndPrevent(evt);
          ctx.event = void 0;
        }
      };
      el.__qtouchswipe = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
        // cannot be passive (ex: iOS scroll)
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof bindings.value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchswipe;
      }
    }
  }
);
function use_render_cache_default() {
  let cache = /* @__PURE__ */ Object.create(null);
  return {
    getCache: false ? (_, defaultValue) => typeof defaultValue === "function" ? defaultValue() : defaultValue : (key, defaultValue) => cache[key] === void 0 ? cache[key] = typeof defaultValue === "function" ? defaultValue() : defaultValue : cache[key],
    setCache(key, obj) {
      cache[key] = obj;
    },
    hasCache(key) {
      return Object.hasOwnProperty.call(cache, key);
    },
    clearCache(key) {
      if (key !== void 0) {
        delete cache[key];
      } else {
        cache = /* @__PURE__ */ Object.create(null);
      }
    }
  };
}
var usePanelChildProps = {
  name: { required: true },
  disable: Boolean
};
var PanelWrapper = {
  setup(_, { slots }) {
    return () => h("div", {
      class: "q-panel scroll",
      role: "tabpanel"
    }, hSlot(slots.default));
  }
};
var usePanelProps = {
  modelValue: {
    required: true
  },
  animated: Boolean,
  infinite: Boolean,
  swipeable: Boolean,
  vertical: Boolean,
  transitionPrev: String,
  transitionNext: String,
  transitionDuration: {
    type: [String, Number],
    default: 300
  },
  keepAlive: Boolean,
  keepAliveInclude: [String, Array, RegExp],
  keepAliveExclude: [String, Array, RegExp],
  keepAliveMax: Number
};
var usePanelEmits = ["update:modelValue", "beforeTransition", "transition"];
function use_panel_default() {
  const { props: props4, emit, proxy } = getCurrentInstance();
  const { getCache } = use_render_cache_default();
  const { registerTimeout } = use_timeout_default();
  let panels, forcedPanelTransition;
  const panelIndex = ref(null);
  const panelTransition = ref(null);
  function onSwipe(evt) {
    const dir = props4.vertical === true ? "up" : "left";
    goToPanelByOffset((proxy.$q.lang.rtl === true ? -1 : 1) * (evt.direction === dir ? 1 : -1));
  }
  const panelDirectives = computed(() => {
    return [[
      TouchSwipe_default,
      onSwipe,
      void 0,
      {
        horizontal: props4.vertical !== true,
        vertical: props4.vertical,
        mouse: true
      }
    ]];
  });
  const transitionPrev = computed(
    () => props4.transitionPrev || `slide-${props4.vertical === true ? "down" : "right"}`
  );
  const transitionNext = computed(
    () => props4.transitionNext || `slide-${props4.vertical === true ? "up" : "left"}`
  );
  const transitionStyle = computed(
    () => `--q-transition-duration: ${props4.transitionDuration}ms`
  );
  const contentKey = computed(() => typeof props4.modelValue === "string" || typeof props4.modelValue === "number" ? props4.modelValue : String(props4.modelValue));
  const keepAliveProps = computed(() => ({
    include: props4.keepAliveInclude,
    exclude: props4.keepAliveExclude,
    max: props4.keepAliveMax
  }));
  const needsUniqueKeepAliveWrapper = computed(
    () => props4.keepAliveInclude !== void 0 || props4.keepAliveExclude !== void 0
  );
  watch(() => props4.modelValue, (newVal, oldVal) => {
    const index = isValidPanelName(newVal) === true ? getPanelIndex(newVal) : -1;
    if (forcedPanelTransition !== true) {
      updatePanelTransition(
        index === -1 ? 0 : index < getPanelIndex(oldVal) ? -1 : 1
      );
    }
    if (panelIndex.value !== index) {
      panelIndex.value = index;
      emit("beforeTransition", newVal, oldVal);
      registerTimeout(() => {
        emit("transition", newVal, oldVal);
      }, props4.transitionDuration);
    }
  });
  function nextPanel() {
    goToPanelByOffset(1);
  }
  function previousPanel() {
    goToPanelByOffset(-1);
  }
  function goToPanel(name2) {
    emit("update:modelValue", name2);
  }
  function isValidPanelName(name2) {
    return name2 !== void 0 && name2 !== null && name2 !== "";
  }
  function getPanelIndex(name2) {
    return panels.findIndex((panel) => {
      return panel.props.name === name2 && panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function getEnabledPanels() {
    return panels.filter((panel) => {
      return panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function updatePanelTransition(direction) {
    const val = direction !== 0 && props4.animated === true && panelIndex.value !== -1 ? "q-transition--" + (direction === -1 ? transitionPrev.value : transitionNext.value) : null;
    if (panelTransition.value !== val) {
      panelTransition.value = val;
    }
  }
  function goToPanelByOffset(direction, startIndex = panelIndex.value) {
    let index = startIndex + direction;
    while (index !== -1 && index < panels.length) {
      const opt = panels[index];
      if (opt !== void 0 && opt.props.disable !== "" && opt.props.disable !== true) {
        updatePanelTransition(direction);
        forcedPanelTransition = true;
        emit("update:modelValue", opt.props.name);
        setTimeout(() => {
          forcedPanelTransition = false;
        });
        return;
      }
      index += direction;
    }
    if (props4.infinite === true && panels.length !== 0 && startIndex !== -1 && startIndex !== panels.length) {
      goToPanelByOffset(direction, direction === -1 ? panels.length : -1);
    }
  }
  function updatePanelIndex() {
    const index = getPanelIndex(props4.modelValue);
    if (panelIndex.value !== index) {
      panelIndex.value = index;
    }
    return true;
  }
  function getPanelContentChild() {
    const panel = isValidPanelName(props4.modelValue) === true && updatePanelIndex() && panels[panelIndex.value];
    return props4.keepAlive === true ? [
      h(KeepAlive, keepAliveProps.value, [
        h(
          needsUniqueKeepAliveWrapper.value === true ? getCache(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value })) : PanelWrapper,
          { key: contentKey.value, style: transitionStyle.value },
          () => panel
        )
      ])
    ] : [
      h("div", {
        class: "q-panel scroll",
        style: transitionStyle.value,
        key: contentKey.value,
        role: "tabpanel"
      }, [panel])
    ];
  }
  function getPanelContent() {
    if (panels.length === 0) {
      return;
    }
    return props4.animated === true ? [h(Transition, { name: panelTransition.value }, getPanelContentChild)] : getPanelContentChild();
  }
  function updatePanelsList(slots) {
    panels = getNormalizedVNodes(
      hSlot(slots.default, [])
    ).filter(
      (panel) => panel.props !== null && panel.props.slot === void 0 && isValidPanelName(panel.props.name) === true
    );
    return panels.length;
  }
  function getPanels() {
    return panels;
  }
  Object.assign(proxy, {
    next: nextPanel,
    previous: previousPanel,
    goTo: goToPanel
  });
  return {
    panelIndex,
    panelDirectives,
    updatePanelsList,
    updatePanelIndex,
    getPanelContent,
    getEnabledPanels,
    getPanels,
    isValidPanelName,
    keepAliveProps,
    needsUniqueKeepAliveWrapper,
    goToPanelByOffset,
    goToPanel,
    nextPanel,
    previousPanel
  };
}
var counter = 0;
var useFullscreenProps = {
  fullscreen: Boolean,
  noRouteFullscreenExit: Boolean
};
var useFullscreenEmits = ["update:fullscreen", "fullscreen"];
function use_fullscreen_default() {
  const vm2 = getCurrentInstance();
  const { props: props4, emit, proxy } = vm2;
  let historyEntry, fullscreenFillerNode, container;
  const inFullscreen = ref(false);
  vmHasRouter(vm2) === true && watch(() => proxy.$route.fullPath, () => {
    props4.noRouteFullscreenExit !== true && exitFullscreen();
  });
  watch(() => props4.fullscreen, (v) => {
    if (inFullscreen.value !== v) {
      toggleFullscreen();
    }
  });
  watch(inFullscreen, (v) => {
    emit("update:fullscreen", v);
    emit("fullscreen", v);
  });
  function toggleFullscreen() {
    if (inFullscreen.value === true) {
      exitFullscreen();
    } else {
      setFullscreen();
    }
  }
  function setFullscreen() {
    if (inFullscreen.value === true) {
      return;
    }
    inFullscreen.value = true;
    container = proxy.$el.parentNode;
    container.replaceChild(fullscreenFillerNode, proxy.$el);
    document.body.appendChild(proxy.$el);
    counter++;
    if (counter === 1) {
      document.body.classList.add("q-body--fullscreen-mixin");
    }
    historyEntry = {
      handler: exitFullscreen
    };
    History_default.add(historyEntry);
  }
  function exitFullscreen() {
    if (inFullscreen.value !== true) {
      return;
    }
    if (historyEntry !== void 0) {
      History_default.remove(historyEntry);
      historyEntry = void 0;
    }
    container.replaceChild(proxy.$el, fullscreenFillerNode);
    inFullscreen.value = false;
    counter = Math.max(0, counter - 1);
    if (counter === 0) {
      document.body.classList.remove("q-body--fullscreen-mixin");
      if (proxy.$el.scrollIntoView !== void 0) {
        setTimeout(() => {
          proxy.$el.scrollIntoView();
        });
      }
    }
  }
  onBeforeMount(() => {
    fullscreenFillerNode = document.createElement("span");
  });
  onMounted(() => {
    props4.fullscreen === true && setFullscreen();
  });
  onBeforeUnmount(exitFullscreen);
  Object.assign(proxy, {
    toggleFullscreen,
    setFullscreen,
    exitFullscreen
  });
  return {
    inFullscreen,
    toggleFullscreen
  };
}
var navigationPositionOptions = ["top", "right", "bottom", "left"];
var controlTypeOptions = ["regular", "flat", "outline", "push", "unelevated"];
var QCarousel_default = createComponent({
  name: "QCarousel",
  props: {
    ...useDarkProps,
    ...usePanelProps,
    ...useFullscreenProps,
    transitionPrev: {
      // usePanelParentProps override
      type: String,
      default: "fade"
    },
    transitionNext: {
      // usePanelParentProps override
      type: String,
      default: "fade"
    },
    height: String,
    padding: Boolean,
    controlColor: String,
    controlTextColor: String,
    controlType: {
      type: String,
      validator: (v) => controlTypeOptions.includes(v),
      default: "flat"
    },
    autoplay: [Number, Boolean],
    arrows: Boolean,
    prevIcon: String,
    nextIcon: String,
    navigation: Boolean,
    navigationPosition: {
      type: String,
      validator: (v) => navigationPositionOptions.includes(v)
    },
    navigationIcon: String,
    navigationActiveIcon: String,
    thumbnails: Boolean
  },
  emits: [
    ...useFullscreenEmits,
    ...usePanelEmits
  ],
  setup(props4, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = use_dark_default(props4, $q);
    let timer2 = null, panelsLen;
    const {
      updatePanelsList,
      getPanelContent,
      panelDirectives,
      goToPanel,
      previousPanel,
      nextPanel,
      getEnabledPanels,
      panelIndex
    } = use_panel_default();
    const { inFullscreen } = use_fullscreen_default();
    const style2 = computed(() => inFullscreen.value !== true && props4.height !== void 0 ? { height: props4.height } : {});
    const direction = computed(() => props4.vertical === true ? "vertical" : "horizontal");
    const navigationPosition = computed(
      () => props4.navigationPosition || (props4.vertical === true ? "right" : "bottom")
    );
    const classes = computed(
      () => `q-carousel q-panel-parent q-carousel--with${props4.padding === true ? "" : "out"}-padding` + (inFullscreen.value === true ? " fullscreen" : "") + (isDark.value === true ? " q-carousel--dark q-dark" : "") + (props4.arrows === true ? ` q-carousel--arrows-${direction.value}` : "") + (props4.navigation === true ? ` q-carousel--navigation-${navigationPosition.value}` : "")
    );
    const arrowIcons = computed(() => {
      const ico = [
        props4.prevIcon || $q.iconSet.carousel[props4.vertical === true ? "up" : "left"],
        props4.nextIcon || $q.iconSet.carousel[props4.vertical === true ? "down" : "right"]
      ];
      return props4.vertical === false && $q.lang.rtl === true ? ico.reverse() : ico;
    });
    const navIcon = computed(() => props4.navigationIcon || $q.iconSet.carousel.navigationIcon);
    const navActiveIcon = computed(() => props4.navigationActiveIcon || navIcon.value);
    const controlProps = computed(() => ({
      color: props4.controlColor,
      textColor: props4.controlTextColor,
      round: true,
      [props4.controlType]: true,
      dense: true
    }));
    watch(() => props4.modelValue, () => {
      if (props4.autoplay) {
        startTimer();
      }
    });
    watch(() => props4.autoplay, (val) => {
      if (val) {
        startTimer();
      } else if (timer2 !== null) {
        clearTimeout(timer2);
        timer2 = null;
      }
    });
    function startTimer() {
      const duration2 = isNumber(props4.autoplay) === true ? Math.abs(props4.autoplay) : 5e3;
      timer2 !== null && clearTimeout(timer2);
      timer2 = setTimeout(() => {
        timer2 = null;
        if (duration2 >= 0) {
          nextPanel();
        } else {
          previousPanel();
        }
      }, duration2);
    }
    onMounted(() => {
      props4.autoplay && startTimer();
    });
    onBeforeUnmount(() => {
      timer2 !== null && clearTimeout(timer2);
    });
    function getNavigationContainer(type, mapping) {
      return h("div", {
        class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${type} q-carousel__navigation--${navigationPosition.value}` + (props4.controlColor !== void 0 ? ` text-${props4.controlColor}` : "")
      }, [
        h("div", {
          class: "q-carousel__navigation-inner flex flex-center no-wrap"
        }, getEnabledPanels().map(mapping))
      ]);
    }
    function getContent() {
      const node = [];
      if (props4.navigation === true) {
        const fn = slots["navigation-icon"] !== void 0 ? slots["navigation-icon"] : (opts) => h(QBtn_default, {
          key: "nav" + opts.name,
          class: `q-carousel__navigation-icon q-carousel__navigation-icon--${opts.active === true ? "" : "in"}active`,
          ...opts.btnProps,
          onClick: opts.onClick
        });
        const maxIndex = panelsLen - 1;
        node.push(
          getNavigationContainer("buttons", (panel, index) => {
            const name2 = panel.props.name;
            const active = panelIndex.value === index;
            return fn({
              index,
              maxIndex,
              name: name2,
              active,
              btnProps: {
                icon: active === true ? navActiveIcon.value : navIcon.value,
                size: "sm",
                ...controlProps.value
              },
              onClick: () => {
                goToPanel(name2);
              }
            });
          })
        );
      } else if (props4.thumbnails === true) {
        const color = props4.controlColor !== void 0 ? ` text-${props4.controlColor}` : "";
        node.push(getNavigationContainer("thumbnails", (panel) => {
          const slide = panel.props;
          return h("img", {
            key: "tmb#" + slide.name,
            class: `q-carousel__thumbnail q-carousel__thumbnail--${slide.name === props4.modelValue ? "" : "in"}active` + color,
            src: slide.imgSrc || slide["img-src"],
            onClick: () => {
              goToPanel(slide.name);
            }
          });
        }));
      }
      if (props4.arrows === true && panelIndex.value >= 0) {
        if (props4.infinite === true || panelIndex.value > 0) {
          node.push(
            h("div", {
              key: "prev",
              class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${direction.value} absolute flex flex-center`
            }, [
              h(QBtn_default, {
                icon: arrowIcons.value[0],
                ...controlProps.value,
                onClick: previousPanel
              })
            ])
          );
        }
        if (props4.infinite === true || panelIndex.value < panelsLen - 1) {
          node.push(
            h("div", {
              key: "next",
              class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${direction.value} absolute flex flex-center`
            }, [
              h(QBtn_default, {
                icon: arrowIcons.value[1],
                ...controlProps.value,
                onClick: nextPanel
              })
            ])
          );
        }
      }
      return hMergeSlot(slots.control, node);
    }
    return () => {
      panelsLen = updatePanelsList(slots);
      return h("div", {
        class: classes.value,
        style: style2.value
      }, [
        hDir(
          "div",
          { class: "q-carousel__slides-container" },
          getPanelContent(),
          "sl-cont",
          props4.swipeable,
          () => panelDirectives.value
        )
      ].concat(getContent()));
    };
  }
});
var QCarouselSlide_default = createComponent({
  name: "QCarouselSlide",
  props: {
    ...usePanelChildProps,
    imgSrc: String
  },
  setup(props4, { slots }) {
    const style2 = computed(() => props4.imgSrc ? { backgroundImage: `url("${props4.imgSrc}")` } : {});
    return () => h("div", {
      class: "q-carousel__slide",
      style: style2.value
    }, hSlot(slots.default));
  }
});
var QCarouselControl_default = createComponent({
  name: "QCarouselControl",
  props: {
    position: {
      type: String,
      default: "bottom-right",
      validator: (v) => [
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
        "top",
        "right",
        "bottom",
        "left"
      ].includes(v)
    },
    offset: {
      type: Array,
      default: () => [18, 18],
      validator: (v) => v.length === 2
    }
  },
  setup(props4, { slots }) {
    const classes = computed(() => `q-carousel__control absolute absolute-${props4.position}`);
    const style2 = computed(() => ({
      margin: `${props4.offset[1]}px ${props4.offset[0]}px`
    }));
    return () => h("div", {
      class: classes.value,
      style: style2.value
    }, hSlot(slots.default));
  }
});
var QChatMessage_default = createComponent({
  name: "QChatMessage",
  props: {
    sent: Boolean,
    label: String,
    bgColor: String,
    textColor: String,
    name: String,
    avatar: String,
    text: Array,
    stamp: String,
    size: String,
    labelHtml: Boolean,
    nameHtml: Boolean,
    textHtml: Boolean,
    stampHtml: Boolean
  },
  setup(props4, { slots }) {
    const op = computed(() => props4.sent === true ? "sent" : "received");
    const textClass = computed(
      () => `q-message-text-content q-message-text-content--${op.value}` + (props4.textColor !== void 0 ? ` text-${props4.textColor}` : "")
    );
    const messageClass = computed(
      () => `q-message-text q-message-text--${op.value}` + (props4.bgColor !== void 0 ? ` text-${props4.bgColor}` : "")
    );
    const containerClass = computed(
      () => "q-message-container row items-end no-wrap" + (props4.sent === true ? " reverse" : "")
    );
    const sizeClass = computed(() => props4.size !== void 0 ? `col-${props4.size}` : "");
    const domProps = computed(() => ({
      msg: props4.textHtml === true ? "innerHTML" : "textContent",
      stamp: props4.stampHtml === true ? "innerHTML" : "textContent",
      name: props4.nameHtml === true ? "innerHTML" : "textContent",
      label: props4.labelHtml === true ? "innerHTML" : "textContent"
    }));
    function wrapStamp(node) {
      if (slots.stamp !== void 0) {
        return [node, h("div", { class: "q-message-stamp" }, slots.stamp())];
      }
      if (props4.stamp) {
        return [
          node,
          h("div", {
            class: "q-message-stamp",
            [domProps.value.stamp]: props4.stamp
          })
        ];
      }
      return [node];
    }
    function getText(contentList, withSlots) {
      const content = withSlots === true ? contentList.length > 1 ? (text) => text : (text) => h("div", [text]) : (text) => h("div", { [domProps.value.msg]: text });
      return contentList.map((msg, index) => h("div", {
        key: index,
        class: messageClass.value
      }, [
        h("div", { class: textClass.value }, wrapStamp(content(msg)))
      ]));
    }
    return () => {
      const container = [];
      if (slots.avatar !== void 0) {
        container.push(slots.avatar());
      } else if (props4.avatar !== void 0) {
        container.push(
          h("img", {
            class: `q-message-avatar q-message-avatar--${op.value}`,
            src: props4.avatar,
            "aria-hidden": "true"
          })
        );
      }
      const msg = [];
      if (slots.name !== void 0) {
        msg.push(
          h("div", { class: `q-message-name q-message-name--${op.value}` }, slots.name())
        );
      } else if (props4.name !== void 0) {
        msg.push(
          h("div", {
            class: `q-message-name q-message-name--${op.value}`,
            [domProps.value.name]: props4.name
          })
        );
      }
      if (slots.default !== void 0) {
        msg.push(
          getText(
            getNormalizedVNodes(slots.default()),
            true
          )
        );
      } else if (props4.text !== void 0) {
        msg.push(getText(props4.text));
      }
      container.push(
        h("div", { class: sizeClass.value }, msg)
      );
      const child = [];
      if (slots.label !== void 0) {
        child.push(
          h("div", { class: "q-message-label" }, slots.label())
        );
      } else if (props4.label !== void 0) {
        child.push(
          h("div", {
            class: "q-message-label",
            [domProps.value.label]: props4.label
          })
        );
      }
      child.push(
        h("div", { class: containerClass.value }, container)
      );
      return h("div", {
        class: `q-message q-message-${op.value}`
      }, child);
    };
  }
});
function use_refocus_target_default(props4, rootRef) {
  const refocusRef = ref(null);
  const refocusTargetEl = computed(() => {
    if (props4.disable === true) {
      return null;
    }
    return h("span", {
      ref: refocusRef,
      class: "no-outline",
      tabindex: -1
    });
  });
  function refocusTarget(e) {
    const root = rootRef.value;
    if (e !== void 0 && e.type.indexOf("key") === 0) {
      if (root !== null && document.activeElement !== root && root.contains(document.activeElement) === true) {
        root.focus();
      }
    } else if (refocusRef.value !== null && (e === void 0 || root !== null && root.contains(e.target) === true)) {
      refocusRef.value.focus();
    }
  }
  return {
    refocusTargetEl,
    refocusTarget
  };
}
var option_sizes_default = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
};
var useCheckboxProps = {
  ...useDarkProps,
  ...useSizeProps,
  ...useFormProps,
  modelValue: {
    required: true,
    default: null
  },
  val: {},
  trueValue: { default: true },
  falseValue: { default: false },
  indeterminateValue: { default: null },
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,
  toggleOrder: {
    type: String,
    validator: (v) => v === "tf" || v === "ft"
  },
  toggleIndeterminate: Boolean,
  label: String,
  leftLabel: Boolean,
  color: String,
  keepColor: Boolean,
  dense: Boolean,
  disable: Boolean,
  tabindex: [String, Number]
};
var useCheckboxEmits = ["update:modelValue"];
function use_checkbox_default(type, getInner) {
  const { props: props4, slots, emit, proxy } = getCurrentInstance();
  const { $q } = proxy;
  const isDark = use_dark_default(props4, $q);
  const rootRef = ref(null);
  const { refocusTargetEl, refocusTarget } = use_refocus_target_default(props4, rootRef);
  const sizeStyle = use_size_default(props4, option_sizes_default);
  const modelIsArray = computed(
    () => props4.val !== void 0 && Array.isArray(props4.modelValue)
  );
  const index = computed(() => {
    const val = toRaw(props4.val);
    return modelIsArray.value === true ? props4.modelValue.findIndex((opt) => toRaw(opt) === val) : -1;
  });
  const isTrue = computed(() => modelIsArray.value === true ? index.value !== -1 : toRaw(props4.modelValue) === toRaw(props4.trueValue));
  const isFalse = computed(() => modelIsArray.value === true ? index.value === -1 : toRaw(props4.modelValue) === toRaw(props4.falseValue));
  const isIndeterminate = computed(
    () => isTrue.value === false && isFalse.value === false
  );
  const tabindex = computed(() => props4.disable === true ? -1 : props4.tabindex || 0);
  const classes = computed(
    () => `q-${type} cursor-pointer no-outline row inline no-wrap items-center` + (props4.disable === true ? " disabled" : "") + (isDark.value === true ? ` q-${type}--dark` : "") + (props4.dense === true ? ` q-${type}--dense` : "") + (props4.leftLabel === true ? " reverse" : "")
  );
  const innerClass = computed(() => {
    const state = isTrue.value === true ? "truthy" : isFalse.value === true ? "falsy" : "indet";
    const color = props4.color !== void 0 && (props4.keepColor === true || (type === "toggle" ? isTrue.value === true : isFalse.value !== true)) ? ` text-${props4.color}` : "";
    return `q-${type}__inner relative-position non-selectable q-${type}__inner--${state}${color}`;
  });
  const formAttrs = computed(() => {
    const prop = { type: "checkbox" };
    props4.name !== void 0 && Object.assign(prop, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": isTrue.value,
      "^checked": isTrue.value === true ? "checked" : void 0,
      name: props4.name,
      value: modelIsArray.value === true ? props4.val : props4.trueValue
    });
    return prop;
  });
  const injectFormInput = useFormInject(formAttrs);
  const attributes = computed(() => {
    const attrs = {
      tabindex: tabindex.value,
      role: type === "toggle" ? "switch" : "checkbox",
      "aria-label": props4.label,
      "aria-checked": isIndeterminate.value === true ? "mixed" : isTrue.value === true ? "true" : "false"
    };
    if (props4.disable === true) {
      attrs["aria-disabled"] = "true";
    }
    return attrs;
  });
  function onClick(e) {
    if (e !== void 0) {
      stopAndPrevent(e);
      refocusTarget(e);
    }
    if (props4.disable !== true) {
      emit("update:modelValue", getNextValue(), e);
    }
  }
  function getNextValue() {
    if (modelIsArray.value === true) {
      if (isTrue.value === true) {
        const val = props4.modelValue.slice();
        val.splice(index.value, 1);
        return val;
      }
      return props4.modelValue.concat([props4.val]);
    }
    if (isTrue.value === true) {
      if (props4.toggleOrder !== "ft" || props4.toggleIndeterminate === false) {
        return props4.falseValue;
      }
    } else if (isFalse.value === true) {
      if (props4.toggleOrder === "ft" || props4.toggleIndeterminate === false) {
        return props4.trueValue;
      }
    } else {
      return props4.toggleOrder !== "ft" ? props4.trueValue : props4.falseValue;
    }
    return props4.indeterminateValue;
  }
  function onKeydown2(e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      stopAndPrevent(e);
    }
  }
  function onKeyup2(e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      onClick(e);
    }
  }
  const getInnerContent = getInner(isTrue, isIndeterminate);
  Object.assign(proxy, { toggle: onClick });
  return () => {
    const inner = getInnerContent();
    props4.disable !== true && injectFormInput(
      inner,
      "unshift",
      ` q-${type}__native absolute q-ma-none q-pa-none`
    );
    const child = [
      h("div", {
        class: innerClass.value,
        style: sizeStyle.value,
        "aria-hidden": "true"
      }, inner)
    ];
    if (refocusTargetEl.value !== null) {
      child.push(refocusTargetEl.value);
    }
    const label = props4.label !== void 0 ? hMergeSlot(slots.default, [props4.label]) : hSlot(slots.default);
    label !== void 0 && child.push(
      h("div", {
        class: `q-${type}__label q-anchor--skip`
      }, label)
    );
    return h("div", {
      ref: rootRef,
      class: classes.value,
      ...attributes.value,
      onClick,
      onKeydown: onKeydown2,
      onKeyup: onKeyup2
    }, child);
  };
}
var createBgNode = () => h("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  h("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    h("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    h("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]);
var QCheckbox_default = createComponent({
  name: "QCheckbox",
  props: useCheckboxProps,
  emits: useCheckboxEmits,
  setup(props4) {
    const bgNode = createBgNode();
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(
        () => (isTrue.value === true ? props4.checkedIcon : isIndeterminate.value === true ? props4.indeterminateIcon : props4.uncheckedIcon) || null
      );
      return () => icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          h(QIcon_default, {
            class: "q-checkbox__icon",
            name: icon.value
          })
        ])
      ] : [bgNode];
    }
    return use_checkbox_default("checkbox", getInner);
  }
});
var defaultSizes2 = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
var QChip_default = createComponent({
  name: "QChip",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    dense: Boolean,
    icon: String,
    iconRight: String,
    iconRemove: String,
    iconSelected: String,
    label: [String, Number],
    color: String,
    textColor: String,
    modelValue: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    removeAriaLabel: String,
    tabindex: [String, Number],
    disable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "update:selected", "remove", "click"],
  setup(props4, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = use_dark_default(props4, $q);
    const sizeStyle = use_size_default(props4, defaultSizes2);
    const hasLeftIcon = computed(() => props4.selected === true || props4.icon !== void 0);
    const leftIcon = computed(() => props4.selected === true ? props4.iconSelected || $q.iconSet.chip.selected : props4.icon);
    const removeIcon = computed(() => props4.iconRemove || $q.iconSet.chip.remove);
    const isClickable = computed(
      () => props4.disable === false && (props4.clickable === true || props4.selected !== null)
    );
    const classes = computed(() => {
      const text = props4.outline === true ? props4.color || props4.textColor : props4.textColor;
      return "q-chip row inline no-wrap items-center" + (props4.outline === false && props4.color !== void 0 ? ` bg-${props4.color}` : "") + (text ? ` text-${text} q-chip--colored` : "") + (props4.disable === true ? " disabled" : "") + (props4.dense === true ? " q-chip--dense" : "") + (props4.outline === true ? " q-chip--outline" : "") + (props4.selected === true ? " q-chip--selected" : "") + (isClickable.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (props4.square === true ? " q-chip--square" : "") + (isDark.value === true ? " q-chip--dark q-dark" : "");
    });
    const attributes = computed(() => {
      const chip = props4.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: props4.tabindex || 0 };
      const remove2 = {
        ...chip,
        role: "button",
        "aria-hidden": "false",
        "aria-label": props4.removeAriaLabel || $q.lang.label.remove
      };
      return { chip, remove: remove2 };
    });
    function onKeyup2(e) {
      e.keyCode === 13 && onClick(e);
    }
    function onClick(e) {
      if (!props4.disable) {
        emit("update:selected", !props4.selected);
        emit("click", e);
      }
    }
    function onRemove(e) {
      if (e.keyCode === void 0 || e.keyCode === 13) {
        stopAndPrevent(e);
        if (props4.disable === false) {
          emit("update:modelValue", false);
          emit("remove");
        }
      }
    }
    function getContent() {
      const child = [];
      isClickable.value === true && child.push(
        h("div", { class: "q-focus-helper" })
      );
      hasLeftIcon.value === true && child.push(
        h(QIcon_default, {
          class: "q-chip__icon q-chip__icon--left",
          name: leftIcon.value
        })
      );
      const label = props4.label !== void 0 ? [h("div", { class: "ellipsis" }, [props4.label])] : void 0;
      child.push(
        h("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, hMergeSlotSafely(slots.default, label))
      );
      props4.iconRight && child.push(
        h(QIcon_default, {
          class: "q-chip__icon q-chip__icon--right",
          name: props4.iconRight
        })
      );
      props4.removable === true && child.push(
        h(QIcon_default, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: removeIcon.value,
          ...attributes.value.remove,
          onClick: onRemove,
          onKeyup: onRemove
        })
      );
      return child;
    }
    return () => {
      if (props4.modelValue === false) return;
      const data = {
        class: classes.value,
        style: sizeStyle.value
      };
      isClickable.value === true && Object.assign(
        data,
        attributes.value.chip,
        { onClick, onKeyup: onKeyup2 }
      );
      return hDir(
        "div",
        data,
        getContent(),
        "ripple",
        props4.ripple !== false && props4.disable !== true,
        () => [[Ripple_default, props4.ripple]]
      );
    };
  }
});
var useCircularCommonProps = {
  ...useSizeProps,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  color: String,
  centerColor: String,
  trackColor: String,
  fontSize: String,
  rounded: Boolean,
  // ratio
  thickness: {
    type: Number,
    default: 0.2,
    validator: (v) => v >= 0 && v <= 1
  },
  angle: {
    type: Number,
    default: 0
  },
  showValue: Boolean,
  reverse: Boolean,
  instantFeedback: Boolean
};
var radius = 50;
var diameter = 2 * radius;
var circumference = diameter * Math.PI;
var strokeDashArray = Math.round(circumference * 1e3) / 1e3;
var QCircularProgress_default = createComponent({
  name: "QCircularProgress",
  props: {
    ...useCircularCommonProps,
    value: {
      type: Number,
      default: 0
    },
    animationSpeed: {
      type: [String, Number],
      default: 600
    },
    indeterminate: Boolean
  },
  setup(props4, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = use_size_default(props4);
    const svgStyle = computed(() => {
      const angle = ($q.lang.rtl === true ? -1 : 1) * props4.angle;
      return {
        transform: props4.reverse !== ($q.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - angle}deg)` : `rotate3d(0, 0, 1, ${angle - 90}deg)`
      };
    });
    const circleStyle = computed(() => props4.instantFeedback !== true && props4.indeterminate !== true ? { transition: `stroke-dashoffset ${props4.animationSpeed}ms ease 0s, stroke ${props4.animationSpeed}ms ease` } : "");
    const viewBox = computed(() => diameter / (1 - props4.thickness / 2));
    const viewBoxAttr = computed(
      () => `${viewBox.value / 2} ${viewBox.value / 2} ${viewBox.value} ${viewBox.value}`
    );
    const normalized = computed(() => between(props4.value, props4.min, props4.max));
    const range = computed(() => props4.max - props4.min);
    const strokeWidth = computed(() => props4.thickness / 2 * viewBox.value);
    const strokeDashOffset = computed(() => {
      const dashRatio = (props4.max - normalized.value) / range.value;
      const dashGap = props4.rounded === true && normalized.value < props4.max && dashRatio < 0.25 ? strokeWidth.value / 2 * (1 - dashRatio / 0.25) : 0;
      return circumference * dashRatio + dashGap;
    });
    function getCircle({ thickness, offset: offset2, color, cls, rounded }) {
      return h("circle", {
        class: "q-circular-progress__" + cls + (color !== void 0 ? ` text-${color}` : ""),
        style: circleStyle.value,
        fill: "transparent",
        stroke: "currentColor",
        "stroke-width": thickness,
        "stroke-dasharray": strokeDashArray,
        "stroke-dashoffset": offset2,
        "stroke-linecap": rounded,
        cx: viewBox.value,
        cy: viewBox.value,
        r: radius
      });
    }
    return () => {
      const svgChild = [];
      props4.centerColor !== void 0 && props4.centerColor !== "transparent" && svgChild.push(
        h("circle", {
          class: `q-circular-progress__center text-${props4.centerColor}`,
          fill: "currentColor",
          r: radius - strokeWidth.value / 2,
          cx: viewBox.value,
          cy: viewBox.value
        })
      );
      props4.trackColor !== void 0 && props4.trackColor !== "transparent" && svgChild.push(
        getCircle({
          cls: "track",
          thickness: strokeWidth.value,
          offset: 0,
          color: props4.trackColor
        })
      );
      svgChild.push(
        getCircle({
          cls: "circle",
          thickness: strokeWidth.value,
          offset: strokeDashOffset.value,
          color: props4.color,
          rounded: props4.rounded === true ? "round" : void 0
        })
      );
      const child = [
        h("svg", {
          class: "q-circular-progress__svg",
          style: svgStyle.value,
          viewBox: viewBoxAttr.value,
          "aria-hidden": "true"
        }, svgChild)
      ];
      props4.showValue === true && child.push(
        h("div", {
          class: "q-circular-progress__text absolute-full row flex-center content-center",
          style: { fontSize: props4.fontSize }
        }, slots.default !== void 0 ? slots.default() : [h("div", normalized.value)])
      );
      return h("div", {
        class: `q-circular-progress q-circular-progress--${props4.indeterminate === true ? "in" : ""}determinate`,
        style: sizeStyle.value,
        role: "progressbar",
        "aria-valuemin": props4.min,
        "aria-valuemax": props4.max,
        "aria-valuenow": props4.indeterminate === true ? void 0 : normalized.value
      }, hMergeSlotSafely(slots.internal, child));
    };
  }
});
function getChanges(evt, ctx, isFinal) {
  const pos = position(evt);
  let dir, distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y, absX = Math.abs(distX), absY = Math.abs(distY);
  const direction = ctx.direction;
  if (direction.horizontal === true && direction.vertical !== true) {
    dir = distX < 0 ? "left" : "right";
  } else if (direction.horizontal !== true && direction.vertical === true) {
    dir = distY < 0 ? "up" : "down";
  } else if (direction.up === true && distY < 0) {
    dir = "up";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.down === true && distY > 0) {
    dir = "down";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.left === true && distX < 0) {
    dir = "left";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  } else if (direction.right === true && distX > 0) {
    dir = "right";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  }
  let synthetic = false;
  if (dir === void 0 && isFinal === false) {
    if (ctx.event.isFirst === true || ctx.event.lastDir === void 0) {
      return {};
    }
    dir = ctx.event.lastDir;
    synthetic = true;
    if (dir === "left" || dir === "right") {
      pos.left -= distX;
      absX = 0;
      distX = 0;
    } else {
      pos.top -= distY;
      absY = 0;
      distY = 0;
    }
  }
  return {
    synthetic,
    payload: {
      evt,
      touch: ctx.event.mouse !== true,
      mouse: ctx.event.mouse === true,
      position: pos,
      direction: dir,
      isFirst: ctx.event.isFirst,
      isFinal: isFinal === true,
      duration: Date.now() - ctx.event.time,
      distance: {
        x: absX,
        y: absY
      },
      offset: {
        x: distX,
        y: distY
      },
      delta: {
        x: pos.left - ctx.event.lastX,
        y: pos.top - ctx.event.lastY
      }
    }
  };
}
var uid = 0;
var TouchPan_default = createDirective(
  false ? { name: "touch-pan", getSSRProps: noop_ssr_directive_transform_default } : {
    name: "touch-pan",
    beforeMount(el, { value: value2, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      function handleEvent(evt, mouseEvent) {
        if (modifiers.mouse === true && mouseEvent === true) {
          stopAndPrevent(evt);
        } else {
          modifiers.stop === true && stop(evt);
          modifiers.prevent === true && prevent(evt);
        }
      }
      const ctx = {
        uid: "qvtp_" + uid++,
        handler: value2,
        modifiers,
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", "notPassiveCapture"],
              [document, "mouseup", "end", "passiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target2 = evt.target;
            addEvt(ctx, "temp", [
              [target2, "touchmove", "move", "notPassiveCapture"],
              [target2, "touchcancel", "end", "passiveCapture"],
              [target2, "touchend", "end", "passiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          ctx.lastEvt = evt;
          if (mouseEvent === true || modifiers.stop === true) {
            if (ctx.direction.all !== true && (mouseEvent !== true || ctx.modifiers.mouseAllDir !== true && ctx.modifiers.mousealldir !== true)) {
              const clone2 = evt.type.indexOf("mouse") !== -1 ? new MouseEvent(evt.type, evt) : new TouchEvent(evt.type, evt);
              evt.defaultPrevented === true && prevent(clone2);
              evt.cancelBubble === true && stop(clone2);
              Object.assign(clone2, {
                qKeyEvent: evt.qKeyEvent,
                qClickOutside: evt.qClickOutside,
                qAnchorHandled: evt.qAnchorHandled,
                qClonedBy: evt.qClonedBy === void 0 ? [ctx.uid] : evt.qClonedBy.concat(ctx.uid)
              });
              ctx.initialEvent = {
                target: evt.target,
                event: clone2
              };
            }
            stop(evt);
          }
          const { left, top } = position(evt);
          ctx.event = {
            x: left,
            y: top,
            time: Date.now(),
            mouse: mouseEvent === true,
            detected: false,
            isFirst: true,
            isFinal: false,
            lastX: left,
            lastY: top
          };
        },
        move(evt) {
          if (ctx.event === void 0) {
            return;
          }
          const pos = position(evt), distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y;
          if (distX === 0 && distY === 0) {
            return;
          }
          ctx.lastEvt = evt;
          const isMouseEvt = ctx.event.mouse === true;
          const start = () => {
            handleEvent(evt, isMouseEvt);
            let cursor;
            if (modifiers.preserveCursor !== true && modifiers.preservecursor !== true) {
              cursor = document.documentElement.style.cursor || "";
              document.documentElement.style.cursor = "grabbing";
            }
            isMouseEvt === true && document.body.classList.add("no-pointer-events--children");
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = (withDelayedFn) => {
              ctx.styleCleanup = void 0;
              if (cursor !== void 0) {
                document.documentElement.style.cursor = cursor;
              }
              document.body.classList.remove("non-selectable");
              if (isMouseEvt === true) {
                const remove2 = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelayedFn !== void 0) {
                  setTimeout(() => {
                    remove2();
                    withDelayedFn();
                  }, 50);
                } else {
                  remove2();
                }
              } else if (withDelayedFn !== void 0) {
                withDelayedFn();
              }
            };
          };
          if (ctx.event.detected === true) {
            ctx.event.isFirst !== true && handleEvent(evt, ctx.event.mouse);
            const { payload, synthetic } = getChanges(evt, ctx, false);
            if (payload !== void 0) {
              if (ctx.handler(payload) === false) {
                ctx.end(evt);
              } else {
                if (ctx.styleCleanup === void 0 && ctx.event.isFirst === true) {
                  start();
                }
                ctx.event.lastX = payload.position.left;
                ctx.event.lastY = payload.position.top;
                ctx.event.lastDir = synthetic === true ? void 0 : payload.direction;
                ctx.event.isFirst = false;
              }
            }
            return;
          }
          if (ctx.direction.all === true || isMouseEvt === true && (ctx.modifiers.mouseAllDir === true || ctx.modifiers.mousealldir === true)) {
            start();
            ctx.event.detected = true;
            ctx.move(evt);
            return;
          }
          const absX = Math.abs(distX), absY = Math.abs(distY);
          if (absX !== absY) {
            if (ctx.direction.horizontal === true && absX > absY || ctx.direction.vertical === true && absX < absY || ctx.direction.up === true && absX < absY && distY < 0 || ctx.direction.down === true && absX < absY && distY > 0 || ctx.direction.left === true && absX > absY && distX < 0 || ctx.direction.right === true && absX > absY && distX > 0) {
              ctx.event.detected = true;
              ctx.move(evt);
            } else {
              ctx.end(evt, true);
            }
          }
        },
        end(evt, abort) {
          if (ctx.event === void 0) {
            return;
          }
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          if (abort === true) {
            ctx.styleCleanup !== void 0 && ctx.styleCleanup();
            if (ctx.event.detected !== true && ctx.initialEvent !== void 0) {
              ctx.initialEvent.target.dispatchEvent(ctx.initialEvent.event);
            }
          } else if (ctx.event.detected === true) {
            ctx.event.isFirst === true && ctx.handler(getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx).payload);
            const { payload } = getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx, true);
            const fn = () => {
              ctx.handler(payload);
            };
            if (ctx.styleCleanup !== void 0) {
              ctx.styleCleanup(fn);
            } else {
              fn();
            }
          }
          ctx.event = void 0;
          ctx.initialEvent = void 0;
          ctx.lastEvt = void 0;
        }
      };
      el.__qtouchpan = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
        // cannot be passive (ex: iOS scroll)
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        ctx.event !== void 0 && ctx.end();
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchpan;
      }
    }
  }
);
var markerPrefixClass = "q-slider__marker-labels";
var defaultMarkerConvertFn = (v) => ({ value: v });
var defaultMarkerLabelRenderFn = ({ marker }) => h("div", {
  key: marker.value,
  style: marker.style,
  class: marker.classes
}, marker.label);
var keyCodes = [34, 37, 40, 33, 39, 38];
var useSliderProps = {
  ...useDarkProps,
  ...useFormProps,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  innerMin: Number,
  innerMax: Number,
  step: {
    type: Number,
    default: 1,
    validator: (v) => v >= 0
  },
  snap: Boolean,
  vertical: Boolean,
  reverse: Boolean,
  color: String,
  markerLabelsClass: String,
  label: Boolean,
  labelColor: String,
  labelTextColor: String,
  labelAlways: Boolean,
  switchLabelSide: Boolean,
  markers: [Boolean, Number],
  markerLabels: [Boolean, Array, Object, Function],
  switchMarkerLabelsSide: Boolean,
  trackImg: String,
  trackColor: String,
  innerTrackImg: String,
  innerTrackColor: String,
  selectionColor: String,
  selectionImg: String,
  thumbSize: {
    type: String,
    default: "20px"
  },
  trackSize: {
    type: String,
    default: "4px"
  },
  disable: Boolean,
  readonly: Boolean,
  dense: Boolean,
  tabindex: [String, Number],
  thumbColor: String,
  thumbPath: {
    type: String,
    default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
  }
};
var useSliderEmits = ["pan", "update:modelValue", "change"];
function use_slider_default({ updateValue: updateValue2, updatePosition, getDragging, formAttrs }) {
  const { props: props4, emit, slots, proxy: { $q } } = getCurrentInstance();
  const isDark = use_dark_default(props4, $q);
  const injectFormInput = useFormInject(formAttrs);
  const active = ref(false);
  const preventFocus = ref(false);
  const focus = ref(false);
  const dragging = ref(false);
  const axis = computed(() => props4.vertical === true ? "--v" : "--h");
  const labelSide = computed(() => "-" + (props4.switchLabelSide === true ? "switched" : "standard"));
  const isReversed = computed(() => props4.vertical === true ? props4.reverse === true : props4.reverse !== ($q.lang.rtl === true));
  const innerMin = computed(() => isNaN(props4.innerMin) === true || props4.innerMin < props4.min ? props4.min : props4.innerMin);
  const innerMax = computed(() => isNaN(props4.innerMax) === true || props4.innerMax > props4.max ? props4.max : props4.innerMax);
  const editable = computed(() => props4.disable !== true && props4.readonly !== true && innerMin.value < innerMax.value);
  const roundValueFn = computed(() => {
    if (props4.step === 0) {
      return (v) => v;
    }
    const decimals = (String(props4.step).trim().split(".")[1] || "").length;
    return (v) => parseFloat(v.toFixed(decimals));
  });
  const keyStep = computed(() => props4.step === 0 ? 1 : props4.step);
  const tabindex = computed(() => editable.value === true ? props4.tabindex || 0 : -1);
  const trackLen = computed(() => props4.max - props4.min);
  const innerBarLen = computed(() => innerMax.value - innerMin.value);
  const innerMinRatio = computed(() => convertModelToRatio(innerMin.value));
  const innerMaxRatio = computed(() => convertModelToRatio(innerMax.value));
  const positionProp = computed(() => props4.vertical === true ? isReversed.value === true ? "bottom" : "top" : isReversed.value === true ? "right" : "left");
  const sizeProp = computed(() => props4.vertical === true ? "height" : "width");
  const thicknessProp = computed(() => props4.vertical === true ? "width" : "height");
  const orientation = computed(() => props4.vertical === true ? "vertical" : "horizontal");
  const attributes = computed(() => {
    const acc = {
      role: "slider",
      "aria-valuemin": innerMin.value,
      "aria-valuemax": innerMax.value,
      "aria-orientation": orientation.value,
      "data-step": props4.step
    };
    if (props4.disable === true) {
      acc["aria-disabled"] = "true";
    } else if (props4.readonly === true) {
      acc["aria-readonly"] = "true";
    }
    return acc;
  });
  const classes = computed(
    () => `q-slider q-slider${axis.value} q-slider--${active.value === true ? "" : "in"}active inline no-wrap ` + (props4.vertical === true ? "row" : "column") + (props4.disable === true ? " disabled" : " q-slider--enabled" + (editable.value === true ? " q-slider--editable" : "")) + (focus.value === "both" ? " q-slider--focus" : "") + (props4.label || props4.labelAlways === true ? " q-slider--label" : "") + (props4.labelAlways === true ? " q-slider--label-always" : "") + (isDark.value === true ? " q-slider--dark" : "") + (props4.dense === true ? " q-slider--dense q-slider--dense" + axis.value : "")
  );
  function getPositionClass(name2) {
    const cls = "q-slider__" + name2;
    return `${cls} ${cls}${axis.value} ${cls}${axis.value}${labelSide.value}`;
  }
  function getAxisClass(name2) {
    const cls = "q-slider__" + name2;
    return `${cls} ${cls}${axis.value}`;
  }
  const selectionBarClass = computed(() => {
    const color = props4.selectionColor || props4.color;
    return "q-slider__selection absolute" + (color !== void 0 ? ` text-${color}` : "");
  });
  const markerClass = computed(() => getAxisClass("markers") + " absolute overflow-hidden");
  const trackContainerClass = computed(() => getAxisClass("track-container"));
  const pinClass = computed(() => getPositionClass("pin"));
  const labelClass = computed(() => getPositionClass("label"));
  const textContainerClass = computed(() => getPositionClass("text-container"));
  const markerLabelsContainerClass = computed(
    () => getPositionClass("marker-labels-container") + (props4.markerLabelsClass !== void 0 ? ` ${props4.markerLabelsClass}` : "")
  );
  const trackClass = computed(
    () => "q-slider__track relative-position no-outline" + (props4.trackColor !== void 0 ? ` bg-${props4.trackColor}` : "")
  );
  const trackStyle = computed(() => {
    const acc = { [thicknessProp.value]: props4.trackSize };
    if (props4.trackImg !== void 0) {
      acc.backgroundImage = `url(${props4.trackImg}) !important`;
    }
    return acc;
  });
  const innerBarClass = computed(
    () => "q-slider__inner absolute" + (props4.innerTrackColor !== void 0 ? ` bg-${props4.innerTrackColor}` : "")
  );
  const innerBarStyle = computed(() => {
    const innerDiff = innerMaxRatio.value - innerMinRatio.value;
    const acc = {
      [positionProp.value]: `${100 * innerMinRatio.value}%`,
      [sizeProp.value]: innerDiff === 0 ? "2px" : `${100 * innerDiff}%`
    };
    if (props4.innerTrackImg !== void 0) {
      acc.backgroundImage = `url(${props4.innerTrackImg}) !important`;
    }
    return acc;
  });
  function convertRatioToModel(ratio) {
    const { min, max, step } = props4;
    let model = min + ratio * (max - min);
    if (step > 0) {
      const modulo = (model - innerMin.value) % step;
      model += (Math.abs(modulo) >= step / 2 ? (modulo < 0 ? -1 : 1) * step : 0) - modulo;
    }
    model = roundValueFn.value(model);
    return between(model, innerMin.value, innerMax.value);
  }
  function convertModelToRatio(model) {
    return trackLen.value === 0 ? 0 : (model - props4.min) / trackLen.value;
  }
  function getDraggingRatio(evt, dragging2) {
    const pos = position(evt), val = props4.vertical === true ? between((pos.top - dragging2.top) / dragging2.height, 0, 1) : between((pos.left - dragging2.left) / dragging2.width, 0, 1);
    return between(
      isReversed.value === true ? 1 - val : val,
      innerMinRatio.value,
      innerMaxRatio.value
    );
  }
  const markerStep = computed(
    () => isNumber(props4.markers) === true ? props4.markers : keyStep.value
  );
  const markerTicks = computed(() => {
    const acc = [];
    const step = markerStep.value;
    const max = props4.max;
    let value2 = props4.min;
    do {
      acc.push(value2);
      value2 += step;
    } while (value2 < max);
    acc.push(max);
    return acc;
  });
  const markerLabelClass = computed(() => {
    const prefix = ` ${markerPrefixClass}${axis.value}-`;
    return markerPrefixClass + `${prefix}${props4.switchMarkerLabelsSide === true ? "switched" : "standard"}${prefix}${isReversed.value === true ? "rtl" : "ltr"}`;
  });
  const markerLabelsList = computed(() => {
    if (props4.markerLabels === false) {
      return null;
    }
    return getMarkerList(props4.markerLabels).map((entry, index) => ({
      index,
      value: entry.value,
      label: entry.label || entry.value,
      classes: markerLabelClass.value + (entry.classes !== void 0 ? " " + entry.classes : ""),
      style: {
        ...getMarkerLabelStyle(entry.value),
        ...entry.style || {}
      }
    }));
  });
  const markerScope = computed(() => ({
    markerList: markerLabelsList.value,
    markerMap: markerLabelsMap.value,
    classes: markerLabelClass.value,
    // TODO ts definition
    getStyle: getMarkerLabelStyle
  }));
  const markerStyle = computed(() => {
    const size2 = innerBarLen.value === 0 ? "2px" : 100 * markerStep.value / innerBarLen.value;
    return {
      ...innerBarStyle.value,
      backgroundSize: props4.vertical === true ? `2px ${size2}%` : `${size2}% 2px`
    };
  });
  function getMarkerList(def) {
    if (def === false) {
      return null;
    }
    if (def === true) {
      return markerTicks.value.map(defaultMarkerConvertFn);
    }
    if (typeof def === "function") {
      return markerTicks.value.map((value2) => {
        const item = def(value2);
        return isObject(item) === true ? { ...item, value: value2 } : { value: value2, label: item };
      });
    }
    const filterFn = ({ value: value2 }) => value2 >= props4.min && value2 <= props4.max;
    if (Array.isArray(def) === true) {
      return def.map((item) => isObject(item) === true ? item : { value: item }).filter(filterFn);
    }
    return Object.keys(def).map((key) => {
      const item = def[key];
      const value2 = Number(key);
      return isObject(item) === true ? { ...item, value: value2 } : { value: value2, label: item };
    }).filter(filterFn);
  }
  function getMarkerLabelStyle(val) {
    return { [positionProp.value]: `${100 * (val - props4.min) / trackLen.value}%` };
  }
  const markerLabelsMap = computed(() => {
    if (props4.markerLabels === false) {
      return null;
    }
    const acc = {};
    markerLabelsList.value.forEach((entry) => {
      acc[entry.value] = entry;
    });
    return acc;
  });
  function getMarkerLabelsContent() {
    if (slots["marker-label-group"] !== void 0) {
      return slots["marker-label-group"](markerScope.value);
    }
    const fn = slots["marker-label"] || defaultMarkerLabelRenderFn;
    return markerLabelsList.value.map((marker) => fn({
      marker,
      ...markerScope.value
    }));
  }
  const panDirective = computed(() => {
    return [[
      TouchPan_default,
      onPan,
      void 0,
      {
        [orientation.value]: true,
        prevent: true,
        stop: true,
        mouse: true,
        mouseAllDir: true
      }
    ]];
  });
  function onPan(event) {
    if (event.isFinal === true) {
      if (dragging.value !== void 0) {
        updatePosition(event.evt);
        event.touch === true && updateValue2(true);
        dragging.value = void 0;
        emit("pan", "end");
      }
      active.value = false;
      focus.value = false;
    } else if (event.isFirst === true) {
      dragging.value = getDragging(event.evt);
      updatePosition(event.evt);
      updateValue2();
      active.value = true;
      emit("pan", "start");
    } else {
      updatePosition(event.evt);
      updateValue2();
    }
  }
  function onBlur2() {
    focus.value = false;
  }
  function onActivate(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue2();
    preventFocus.value = true;
    active.value = true;
    document.addEventListener("mouseup", onDeactivate, true);
  }
  function onDeactivate() {
    preventFocus.value = false;
    active.value = false;
    updateValue2(true);
    onBlur2();
    document.removeEventListener("mouseup", onDeactivate, true);
  }
  function onMobileClick(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue2(true);
  }
  function onKeyup2(evt) {
    if (keyCodes.includes(evt.keyCode)) {
      updateValue2(true);
    }
  }
  function getTextContainerStyle(ratio) {
    if (props4.vertical === true) {
      return null;
    }
    const p = $q.lang.rtl !== props4.reverse ? 1 - ratio : ratio;
    return {
      transform: `translateX(calc(${2 * p - 1} * ${props4.thumbSize} / 2 + ${50 - 100 * p}%))`
    };
  }
  function getThumbRenderFn(thumb) {
    const focusClass = computed(() => preventFocus.value === false && (focus.value === thumb.focusValue || focus.value === "both") ? " q-slider--focus" : "");
    const classes2 = computed(
      () => `q-slider__thumb q-slider__thumb${axis.value} q-slider__thumb${axis.value}-${isReversed.value === true ? "rtl" : "ltr"} absolute non-selectable` + focusClass.value + (thumb.thumbColor.value !== void 0 ? ` text-${thumb.thumbColor.value}` : "")
    );
    const style2 = computed(() => ({
      width: props4.thumbSize,
      height: props4.thumbSize,
      [positionProp.value]: `${100 * thumb.ratio.value}%`,
      zIndex: focus.value === thumb.focusValue ? 2 : void 0
    }));
    const pinColor = computed(() => thumb.labelColor.value !== void 0 ? ` text-${thumb.labelColor.value}` : "");
    const textContainerStyle = computed(() => getTextContainerStyle(thumb.ratio.value));
    const textClass = computed(() => "q-slider__text" + (thumb.labelTextColor.value !== void 0 ? ` text-${thumb.labelTextColor.value}` : ""));
    return () => {
      const thumbContent = [
        h("svg", {
          class: "q-slider__thumb-shape absolute-full",
          viewBox: "0 0 20 20",
          "aria-hidden": "true"
        }, [
          h("path", { d: props4.thumbPath })
        ]),
        h("div", { class: "q-slider__focus-ring fit" })
      ];
      if (props4.label === true || props4.labelAlways === true) {
        thumbContent.push(
          h("div", {
            class: pinClass.value + " absolute fit no-pointer-events" + pinColor.value
          }, [
            h("div", {
              class: labelClass.value,
              style: { minWidth: props4.thumbSize }
            }, [
              h("div", {
                class: textContainerClass.value,
                style: textContainerStyle.value
              }, [
                h("span", { class: textClass.value }, thumb.label.value)
              ])
            ])
          ])
        );
        if (props4.name !== void 0 && props4.disable !== true) {
          injectFormInput(thumbContent, "push");
        }
      }
      return h("div", {
        class: classes2.value,
        style: style2.value,
        ...thumb.getNodeData()
      }, thumbContent);
    };
  }
  function getContent(selectionBarStyle, trackContainerTabindex, trackContainerEvents, injectThumb) {
    const trackContent = [];
    props4.innerTrackColor !== "transparent" && trackContent.push(
      h("div", {
        key: "inner",
        class: innerBarClass.value,
        style: innerBarStyle.value
      })
    );
    props4.selectionColor !== "transparent" && trackContent.push(
      h("div", {
        key: "selection",
        class: selectionBarClass.value,
        style: selectionBarStyle.value
      })
    );
    props4.markers !== false && trackContent.push(
      h("div", {
        key: "marker",
        class: markerClass.value,
        style: markerStyle.value
      })
    );
    injectThumb(trackContent);
    const content = [
      hDir(
        "div",
        {
          key: "trackC",
          class: trackContainerClass.value,
          tabindex: trackContainerTabindex.value,
          ...trackContainerEvents.value
        },
        [
          h("div", {
            class: trackClass.value,
            style: trackStyle.value
          }, trackContent)
        ],
        "slide",
        editable.value,
        () => panDirective.value
      )
    ];
    if (props4.markerLabels !== false) {
      const action = props4.switchMarkerLabelsSide === true ? "unshift" : "push";
      content[action](
        h("div", {
          key: "markerL",
          class: markerLabelsContainerClass.value
        }, getMarkerLabelsContent())
      );
    }
    return content;
  }
  onBeforeUnmount(() => {
    document.removeEventListener("mouseup", onDeactivate, true);
  });
  return {
    state: {
      active,
      focus,
      preventFocus,
      dragging,
      editable,
      classes,
      tabindex,
      attributes,
      roundValueFn,
      keyStep,
      trackLen,
      innerMin,
      innerMinRatio,
      innerMax,
      innerMaxRatio,
      positionProp,
      sizeProp,
      isReversed
    },
    methods: {
      onActivate,
      onMobileClick,
      onBlur: onBlur2,
      onKeyup: onKeyup2,
      getContent,
      getThumbRenderFn,
      convertRatioToModel,
      convertModelToRatio,
      getDraggingRatio
    }
  };
}
var getNodeData = () => ({});
var QSlider_default = createComponent({
  name: "QSlider",
  props: {
    ...useSliderProps,
    modelValue: {
      required: true,
      default: null,
      validator: (v) => typeof v === "number" || v === null
    },
    labelValue: [String, Number]
  },
  emits: useSliderEmits,
  setup(props4, { emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const { state, methods } = use_slider_default({
      updateValue: updateValue2,
      updatePosition,
      getDragging,
      formAttrs: useFormAttrs(props4)
    });
    const rootRef = ref(null);
    const curRatio = ref(0);
    const model = ref(0);
    function normalizeModel() {
      model.value = props4.modelValue === null ? state.innerMin.value : between(props4.modelValue, state.innerMin.value, state.innerMax.value);
    }
    watch(
      () => `${props4.modelValue}|${state.innerMin.value}|${state.innerMax.value}`,
      normalizeModel
    );
    normalizeModel();
    const modelRatio = computed(() => methods.convertModelToRatio(model.value));
    const ratio = computed(() => state.active.value === true ? curRatio.value : modelRatio.value);
    const selectionBarStyle = computed(() => {
      const acc = {
        [state.positionProp.value]: `${100 * state.innerMinRatio.value}%`,
        [state.sizeProp.value]: `${100 * (ratio.value - state.innerMinRatio.value)}%`
      };
      if (props4.selectionImg !== void 0) {
        acc.backgroundImage = `url(${props4.selectionImg}) !important`;
      }
      return acc;
    });
    const getThumb = methods.getThumbRenderFn({
      focusValue: true,
      getNodeData,
      ratio,
      label: computed(() => props4.labelValue !== void 0 ? props4.labelValue : model.value),
      thumbColor: computed(() => props4.thumbColor || props4.color),
      labelColor: computed(() => props4.labelColor),
      labelTextColor: computed(() => props4.labelTextColor)
    });
    const trackContainerEvents = computed(() => {
      if (state.editable.value !== true) {
        return {};
      }
      return $q.platform.is.mobile === true ? { onClick: methods.onMobileClick } : {
        onMousedown: methods.onActivate,
        onFocus,
        onBlur: methods.onBlur,
        onKeydown: onKeydown2,
        onKeyup: methods.onKeyup
      };
    });
    function updateValue2(change) {
      if (model.value !== props4.modelValue) {
        emit("update:modelValue", model.value);
      }
      change === true && emit("change", model.value);
    }
    function getDragging() {
      return rootRef.value.getBoundingClientRect();
    }
    function updatePosition(event, dragging = state.dragging.value) {
      const ratio2 = methods.getDraggingRatio(event, dragging);
      model.value = methods.convertRatioToModel(ratio2);
      curRatio.value = props4.snap !== true || props4.step === 0 ? ratio2 : methods.convertModelToRatio(model.value);
    }
    function onFocus() {
      state.focus.value = true;
    }
    function onKeydown2(evt) {
      if (!keyCodes.includes(evt.keyCode)) {
        return;
      }
      stopAndPrevent(evt);
      const stepVal = ([34, 33].includes(evt.keyCode) ? 10 : 1) * state.keyStep.value, offset2 = ([34, 37, 40].includes(evt.keyCode) ? -1 : 1) * (state.isReversed.value === true ? -1 : 1) * (props4.vertical === true ? -1 : 1) * stepVal;
      model.value = between(
        state.roundValueFn.value(model.value + offset2),
        state.innerMin.value,
        state.innerMax.value
      );
      updateValue2();
    }
    return () => {
      const content = methods.getContent(
        selectionBarStyle,
        state.tabindex,
        trackContainerEvents,
        (node) => {
          node.push(getThumb());
        }
      );
      return h("div", {
        ref: rootRef,
        class: state.classes.value + (props4.modelValue === null ? " q-slider--no-value" : ""),
        ...state.attributes.value,
        "aria-valuenow": props4.modelValue
      }, content);
    };
  }
});
function use_hydration_default() {
  const isHydrated = ref(!isRuntimeSsrPreHydration.value);
  if (isHydrated.value === false) {
    onMounted(() => {
      isHydrated.value = true;
    });
  }
  return { isHydrated };
}
var hasObserver = typeof ResizeObserver !== "undefined";
var resizeProps = hasObserver === true ? {} : {
  style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
  url: "about:blank"
};
var QResizeObserver_default = createComponent({
  name: "QResizeObserver",
  props: {
    debounce: {
      type: [String, Number],
      default: 100
    }
  },
  emits: ["resize"],
  setup(props4, { emit }) {
    if (false) {
      return noop;
    }
    let timer2 = null, targetEl, size2 = { width: -1, height: -1 };
    function trigger3(immediately) {
      if (immediately === true || props4.debounce === 0 || props4.debounce === "0") {
        emitEvent();
      } else if (timer2 === null) {
        timer2 = setTimeout(emitEvent, props4.debounce);
      }
    }
    function emitEvent() {
      if (timer2 !== null) {
        clearTimeout(timer2);
        timer2 = null;
      }
      if (targetEl) {
        const { offsetWidth: width3, offsetHeight: height2 } = targetEl;
        if (width3 !== size2.width || height2 !== size2.height) {
          size2 = { width: width3, height: height2 };
          emit("resize", size2);
        }
      }
    }
    const { proxy } = getCurrentInstance();
    proxy.trigger = trigger3;
    if (hasObserver === true) {
      let observer;
      const init = (stop2) => {
        targetEl = proxy.$el.parentNode;
        if (targetEl) {
          observer = new ResizeObserver(trigger3);
          observer.observe(targetEl);
          emitEvent();
        } else if (stop2 !== true) {
          nextTick(() => {
            init(true);
          });
        }
      };
      onMounted(() => {
        init();
      });
      onBeforeUnmount(() => {
        timer2 !== null && clearTimeout(timer2);
        if (observer !== void 0) {
          if (observer.disconnect !== void 0) {
            observer.disconnect();
          } else if (targetEl) {
            observer.unobserve(targetEl);
          }
        }
      });
      return noop;
    } else {
      let cleanup = function() {
        if (timer2 !== null) {
          clearTimeout(timer2);
          timer2 = null;
        }
        if (curDocView !== void 0) {
          if (curDocView.removeEventListener !== void 0) {
            curDocView.removeEventListener("resize", trigger3, listenOpts.passive);
          }
          curDocView = void 0;
        }
      }, onObjLoad = function() {
        cleanup();
        if (targetEl && targetEl.contentDocument) {
          curDocView = targetEl.contentDocument.defaultView;
          curDocView.addEventListener("resize", trigger3, listenOpts.passive);
          emitEvent();
        }
      };
      const { isHydrated } = use_hydration_default();
      let curDocView;
      onMounted(() => {
        nextTick(() => {
          targetEl = proxy.$el;
          targetEl && onObjLoad();
        });
      });
      onBeforeUnmount(cleanup);
      return () => {
        if (isHydrated.value === true) {
          return h("object", {
            class: "q--avoid-card-border",
            style: resizeProps.style,
            tabindex: -1,
            // fix for Firefox
            type: "text/html",
            data: resizeProps.url,
            "aria-hidden": "true",
            onLoad: onObjLoad
          });
        }
      };
    }
  }
});
var rtlHasScrollBug = false;
if (!__QUASAR_SSR__) {
  const scroller = document.createElement("div");
  scroller.setAttribute("dir", "rtl");
  Object.assign(scroller.style, {
    width: "1px",
    height: "1px",
    overflow: "auto"
  });
  const spacer = document.createElement("div");
  Object.assign(spacer.style, {
    width: "1000px",
    height: "1px"
  });
  document.body.appendChild(scroller);
  scroller.appendChild(spacer);
  scroller.scrollLeft = -1e3;
  rtlHasScrollBug = scroller.scrollLeft >= 0;
  scroller.remove();
}
function getIndicatorClass(color, top, vertical) {
  const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
}
var alignValues3 = ["left", "center", "right", "justify"];
var QTabs_default = createComponent({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (v) => alignValues3.includes(v)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array]
  },
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const { registerTick: registerScrollTick } = use_tick_default();
    const { registerTick: registerUpdateArrowsTick } = use_tick_default();
    const { registerTick: registerAnimateTick } = use_tick_default();
    const { registerTimeout: registerFocusTimeout, removeTimeout: removeFocusTimeout } = use_timeout_default();
    const { registerTimeout: registerScrollToTabTimeout, removeTimeout: removeScrollToTabTimeout } = use_timeout_default();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const currentModel = ref(props4.modelValue);
    const scrollable = ref(false);
    const leftArrow = ref(true);
    const rightArrow = ref(false);
    const justify = ref(false);
    const tabDataList = [];
    const tabDataListLen = ref(0);
    const hasFocus = ref(false);
    let animateTimer = null, scrollTimer = null, unwatchRoute;
    const tabProps = computed(() => ({
      activeClass: props4.activeClass,
      activeColor: props4.activeColor,
      activeBgColor: props4.activeBgColor,
      indicatorClass: getIndicatorClass(
        props4.indicatorColor,
        props4.switchIndicator,
        props4.vertical
      ),
      narrowIndicator: props4.narrowIndicator,
      inlineLabel: props4.inlineLabel,
      noCaps: props4.noCaps
    }));
    const hasActiveTab = computed(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;
      for (let i = 0; i < len; i++) {
        if (tabDataList[i].name.value === val) {
          return true;
        }
      }
      return false;
    });
    const alignClass = computed(() => {
      const align = scrollable.value === true ? "left" : justify.value === true ? "justify" : props4.align;
      return `q-tabs__content--align-${align}`;
    });
    const classes = computed(
      () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props4.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${props4.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${props4.mobileArrows === true ? "" : "out"}-arrows` + (props4.dense === true ? " q-tabs--dense" : "") + (props4.shrink === true ? " col-shrink" : "") + (props4.stretch === true ? " self-stretch" : "")
    );
    const innerClass = computed(
      () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props4.contentClass !== void 0 ? ` ${props4.contentClass}` : "")
    );
    const domProps = computed(() => props4.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" });
    const isRTL = computed(() => props4.vertical !== true && $q.lang.rtl === true);
    const rtlPosCorrection = computed(() => rtlHasScrollBug === false && isRTL.value === true);
    watch(isRTL, updateArrows);
    watch(() => props4.modelValue, (name2) => {
      updateModel2({ name: name2, setCurrent: true, skipEmit: true });
    });
    watch(() => props4.outsideArrows, recalculateScroll);
    function updateModel2({ name: name2, setCurrent, skipEmit }) {
      if (currentModel.value === name2) return;
      if (skipEmit !== true && props4["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", name2);
      }
      if (setCurrent === true || props4["onUpdate:modelValue"] === void 0) {
        animate(currentModel.value, name2);
        currentModel.value = name2;
      }
    }
    function recalculateScroll() {
      registerScrollTick(() => {
        updateContainer({
          width: rootRef.value.offsetWidth,
          height: rootRef.value.offsetHeight
        });
      });
    }
    function updateContainer(domSize) {
      if (domProps.value === void 0 || contentRef.value === null) return;
      const size2 = domSize[domProps.value.container], scrollSize = Math.min(
        contentRef.value[domProps.value.scroll],
        Array.prototype.reduce.call(
          contentRef.value.children,
          (acc, el) => acc + (el[domProps.value.content] || 0),
          0
        )
      ), scroll = size2 > 0 && scrollSize > size2;
      scrollable.value = scroll;
      scroll === true && registerUpdateArrowsTick(updateArrows);
      justify.value = size2 < parseInt(props4.breakpoint, 10);
    }
    function animate(oldName, newName) {
      const oldTab = oldName !== void 0 && oldName !== null && oldName !== "" ? tabDataList.find((tab) => tab.name.value === oldName) : null, newTab = newName !== void 0 && newName !== null && newName !== "" ? tabDataList.find((tab) => tab.name.value === newName) : null;
      if (hadActivated === true) {
        hadActivated = false;
      } else if (oldTab && newTab) {
        const oldEl = oldTab.tabIndicatorRef.value, newEl = newTab.tabIndicatorRef.value;
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
          animateTimer = null;
        }
        oldEl.style.transition = "none";
        oldEl.style.transform = "none";
        newEl.style.transition = "none";
        newEl.style.transform = "none";
        const oldPos = oldEl.getBoundingClientRect(), newPos = newEl.getBoundingClientRect();
        newEl.style.transform = props4.vertical === true ? `translate3d(0,${oldPos.top - newPos.top}px,0) scale3d(1,${newPos.height ? oldPos.height / newPos.height : 1},1)` : `translate3d(${oldPos.left - newPos.left}px,0,0) scale3d(${newPos.width ? oldPos.width / newPos.width : 1},1,1)`;
        registerAnimateTick(() => {
          animateTimer = setTimeout(() => {
            animateTimer = null;
            newEl.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)";
            newEl.style.transform = "none";
          }, 70);
        });
      }
      if (newTab && scrollable.value === true) {
        scrollToTabEl(newTab.rootRef.value);
      }
    }
    function scrollToTabEl(el) {
      const { left, width: width3, top, height: height2 } = contentRef.value.getBoundingClientRect(), newPos = el.getBoundingClientRect();
      let offset2 = props4.vertical === true ? newPos.top - top : newPos.left - left;
      if (offset2 < 0) {
        contentRef.value[props4.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(offset2);
        updateArrows();
        return;
      }
      offset2 += props4.vertical === true ? newPos.height - height2 : newPos.width - width3;
      if (offset2 > 0) {
        contentRef.value[props4.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(offset2);
        updateArrows();
      }
    }
    function updateArrows() {
      const content = contentRef.value;
      if (content === null) return;
      const rect = content.getBoundingClientRect(), pos = props4.vertical === true ? content.scrollTop : Math.abs(content.scrollLeft);
      if (isRTL.value === true) {
        leftArrow.value = Math.ceil(pos + rect.width) < content.scrollWidth - 1;
        rightArrow.value = pos > 0;
      } else {
        leftArrow.value = pos > 0;
        rightArrow.value = props4.vertical === true ? Math.ceil(pos + rect.height) < content.scrollHeight : Math.ceil(pos + rect.width) < content.scrollWidth;
      }
    }
    function animScrollTo(value2) {
      scrollTimer !== null && clearInterval(scrollTimer);
      scrollTimer = setInterval(() => {
        if (scrollTowards(value2) === true) {
          stopAnimScroll();
        }
      }, 5);
    }
    function scrollToStart() {
      animScrollTo(rtlPosCorrection.value === true ? Number.MAX_SAFE_INTEGER : 0);
    }
    function scrollToEnd() {
      animScrollTo(rtlPosCorrection.value === true ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function stopAnimScroll() {
      if (scrollTimer !== null) {
        clearInterval(scrollTimer);
        scrollTimer = null;
      }
    }
    function onKbdNavigate(keyCode, fromEl) {
      const tabs = Array.prototype.filter.call(
        contentRef.value.children,
        (el) => el === fromEl || el.matches && el.matches(".q-tab.q-focusable") === true
      );
      const len = tabs.length;
      if (len === 0) return;
      if (keyCode === 36) {
        scrollToTabEl(tabs[0]);
        tabs[0].focus();
        return true;
      }
      if (keyCode === 35) {
        scrollToTabEl(tabs[len - 1]);
        tabs[len - 1].focus();
        return true;
      }
      const dirPrev = keyCode === (props4.vertical === true ? 38 : 37);
      const dirNext = keyCode === (props4.vertical === true ? 40 : 39);
      const dir = dirPrev === true ? -1 : dirNext === true ? 1 : void 0;
      if (dir !== void 0) {
        const rtlDir = isRTL.value === true ? -1 : 1;
        const index = tabs.indexOf(fromEl) + dir * rtlDir;
        if (index >= 0 && index < len) {
          scrollToTabEl(tabs[index]);
          tabs[index].focus({ preventScroll: true });
        }
        return true;
      }
    }
    const posFn = computed(() => rtlPosCorrection.value === true ? { get: (content) => Math.abs(content.scrollLeft), set: (content, pos) => {
      content.scrollLeft = -pos;
    } } : props4.vertical === true ? { get: (content) => content.scrollTop, set: (content, pos) => {
      content.scrollTop = pos;
    } } : { get: (content) => content.scrollLeft, set: (content, pos) => {
      content.scrollLeft = pos;
    } });
    function scrollTowards(value2) {
      const content = contentRef.value, { get: get2, set: set2 } = posFn.value;
      let done = false, pos = get2(content);
      const direction = value2 < pos ? -1 : 1;
      pos += direction * 5;
      if (pos < 0) {
        done = true;
        pos = 0;
      } else if (direction === -1 && pos <= value2 || direction === 1 && pos >= value2) {
        done = true;
        pos = value2;
      }
      set2(content, pos);
      updateArrows();
      return done;
    }
    function hasQueryIncluded(targetQuery, matchingQuery) {
      for (const key in targetQuery) {
        if (targetQuery[key] !== matchingQuery[key]) {
          return false;
        }
      }
      return true;
    }
    function updateActiveRoute() {
      let name2 = null, bestScore = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const list = tabDataList.filter((tab) => tab.routeData !== void 0 && tab.routeData.hasRouterLink.value === true);
      const { hash: currentHash, query: currentQuery } = proxy.$route;
      const currentQueryLen = Object.keys(currentQuery).length;
      for (const tab of list) {
        const exact = tab.routeData.exact.value === true;
        if (tab.routeData[exact === true ? "linkIsExactActive" : "linkIsActive"].value !== true) {
          continue;
        }
        const { hash, query, matched, href: href2 } = tab.routeData.resolvedLink.value;
        const queryLen = Object.keys(query).length;
        if (exact === true) {
          if (hash !== currentHash) {
            continue;
          }
          if (queryLen !== currentQueryLen || hasQueryIncluded(currentQuery, query) === false) {
            continue;
          }
          name2 = tab.name.value;
          break;
        }
        if (hash !== "" && hash !== currentHash) {
          continue;
        }
        if (queryLen !== 0 && hasQueryIncluded(query, currentQuery) === false) {
          continue;
        }
        const newScore = {
          matchedLen: matched.length,
          queryDiff: currentQueryLen - queryLen,
          hrefLen: href2.length - hash.length
        };
        if (newScore.matchedLen > bestScore.matchedLen) {
          name2 = tab.name.value;
          bestScore = newScore;
          continue;
        } else if (newScore.matchedLen !== bestScore.matchedLen) {
          continue;
        }
        if (newScore.queryDiff < bestScore.queryDiff) {
          name2 = tab.name.value;
          bestScore = newScore;
        } else if (newScore.queryDiff !== bestScore.queryDiff) {
          continue;
        }
        if (newScore.hrefLen > bestScore.hrefLen) {
          name2 = tab.name.value;
          bestScore = newScore;
        }
      }
      if (name2 === null && tabDataList.some((tab) => tab.routeData === void 0 && tab.name.value === currentModel.value) === true) {
        hadActivated = false;
        return;
      }
      updateModel2({ name: name2, setCurrent: true });
    }
    function onFocusin(e) {
      removeFocusTimeout();
      if (hasFocus.value !== true && rootRef.value !== null && e.target && typeof e.target.closest === "function") {
        const tab = e.target.closest(".q-tab");
        if (tab && rootRef.value.contains(tab) === true) {
          hasFocus.value = true;
          scrollable.value === true && scrollToTabEl(tab);
        }
      }
    }
    function onFocusout() {
      registerFocusTimeout(() => {
        hasFocus.value = false;
      }, 30);
    }
    function verifyRouteModel() {
      if ($tabs.avoidRouteWatcher === false) {
        registerScrollToTabTimeout(updateActiveRoute);
      } else {
        removeScrollToTabTimeout();
      }
    }
    function watchRoute() {
      if (unwatchRoute === void 0) {
        const unwatch = watch(() => proxy.$route.fullPath, verifyRouteModel);
        unwatchRoute = () => {
          unwatch();
          unwatchRoute = void 0;
        };
      }
    }
    function registerTab(tabData) {
      tabDataList.push(tabData);
      tabDataListLen.value++;
      recalculateScroll();
      if (tabData.routeData === void 0 || proxy.$route === void 0) {
        registerScrollToTabTimeout(() => {
          if (scrollable.value === true) {
            const value2 = currentModel.value;
            const newTab = value2 !== void 0 && value2 !== null && value2 !== "" ? tabDataList.find((tab) => tab.name.value === value2) : null;
            newTab && scrollToTabEl(newTab.rootRef.value);
          }
        });
      } else {
        watchRoute();
        if (tabData.routeData.hasRouterLink.value === true) {
          verifyRouteModel();
        }
      }
    }
    function unregisterTab(tabData) {
      tabDataList.splice(tabDataList.indexOf(tabData), 1);
      tabDataListLen.value--;
      recalculateScroll();
      if (unwatchRoute !== void 0 && tabData.routeData !== void 0) {
        if (tabDataList.every((tab) => tab.routeData === void 0) === true) {
          unwatchRoute();
        }
        verifyRouteModel();
      }
    }
    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,
      registerTab,
      unregisterTab,
      verifyRouteModel,
      updateModel: updateModel2,
      onKbdNavigate,
      avoidRouteWatcher: false
      // false | string (uid)
    };
    provide(tabsKey, $tabs);
    function cleanup() {
      animateTimer !== null && clearTimeout(animateTimer);
      stopAnimScroll();
      unwatchRoute !== void 0 && unwatchRoute();
    }
    let hadRouteWatcher, hadActivated;
    onBeforeUnmount(cleanup);
    onDeactivated(() => {
      hadRouteWatcher = unwatchRoute !== void 0;
      cleanup();
    });
    onActivated(() => {
      if (hadRouteWatcher === true) {
        watchRoute();
        hadActivated = true;
        verifyRouteModel();
      }
      recalculateScroll();
    });
    return () => {
      return h("div", {
        ref: rootRef,
        class: classes.value,
        role: "tablist",
        onFocusin,
        onFocusout
      }, [
        h(QResizeObserver_default, { onResize: updateContainer }),
        h("div", {
          ref: contentRef,
          class: innerClass.value,
          onScroll: updateArrows
        }, hSlot(slots.default)),
        h(QIcon_default, {
          class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (leftArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props4.leftIcon || $q.iconSet.tabs[props4.vertical === true ? "up" : "left"],
          onMousedownPassive: scrollToStart,
          onTouchstartPassive: scrollToStart,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        }),
        h(QIcon_default, {
          class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (rightArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props4.rightIcon || $q.iconSet.tabs[props4.vertical === true ? "down" : "right"],
          onMousedownPassive: scrollToEnd,
          onTouchstartPassive: scrollToEnd,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        })
      ]);
    };
  }
});
var id = 0;
var useTabEmits = ["click", "keydown"];
var useTabProps = {
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: {
    type: [Number, String],
    default: () => `t_${id++}`
  },
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  ripple: {
    type: [Boolean, Object],
    default: true
  }
};
function use_tab_default(props4, slots, emit, routeData) {
  const $tabs = inject(tabsKey, emptyRenderFn);
  if ($tabs === emptyRenderFn) {
    console.error("QTab/QRouteTab component needs to be child of QTabs");
    return emptyRenderFn;
  }
  const { proxy } = getCurrentInstance();
  const blurTargetRef = ref(null);
  const rootRef = ref(null);
  const tabIndicatorRef = ref(null);
  const ripple = computed(() => props4.disable === true || props4.ripple === false ? false : Object.assign(
    { keyCodes: [13, 32], early: true },
    props4.ripple === true ? {} : props4.ripple
  ));
  const isActive = computed(() => $tabs.currentModel.value === props4.name);
  const classes = computed(
    () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props4.icon && props4.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props4.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props4.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (routeData !== void 0 ? routeData.linkClass.value : "")
  );
  const innerClass = computed(
    () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props4.contentClass !== void 0 ? ` ${props4.contentClass}` : "")
  );
  const tabIndex = computed(() => props4.disable === true || $tabs.hasFocus.value === true || isActive.value === false && $tabs.hasActiveTab.value === true ? -1 : props4.tabindex || 0);
  function onClick(e, keyboard) {
    if (keyboard !== true && blurTargetRef.value !== null) {
      blurTargetRef.value.focus();
    }
    if (props4.disable === true) {
      if (routeData !== void 0 && routeData.hasRouterLink.value === true) {
        stopAndPrevent(e);
      }
      return;
    }
    if (routeData === void 0) {
      $tabs.updateModel({ name: props4.name });
      emit("click", e);
      return;
    }
    if (routeData.hasRouterLink.value === true) {
      const go = (opts = {}) => {
        let hardError;
        const reqId = opts.to === void 0 || isDeepEqual(opts.to, props4.to) === true ? $tabs.avoidRouteWatcher = uid_default() : null;
        return routeData.navigateToRouterLink(e, { ...opts, returnRouterError: true }).catch((err) => {
          hardError = err;
        }).then((softError) => {
          if (reqId === $tabs.avoidRouteWatcher) {
            $tabs.avoidRouteWatcher = false;
            if (hardError === void 0 && (softError === void 0 || softError.message !== void 0 && softError.message.startsWith("Avoided redundant navigation") === true)) {
              $tabs.updateModel({ name: props4.name });
            }
          }
          if (opts.returnRouterError === true) {
            return hardError !== void 0 ? Promise.reject(hardError) : softError;
          }
        });
      };
      emit("click", e, go);
      e.defaultPrevented !== true && go();
      return;
    }
    emit("click", e);
  }
  function onKeydown2(e) {
    if (isKeyCode(e, [13, 32])) {
      onClick(e, true);
    } else if (shouldIgnoreKey(e) !== true && e.keyCode >= 35 && e.keyCode <= 40 && e.altKey !== true && e.metaKey !== true) {
      $tabs.onKbdNavigate(e.keyCode, proxy.$el) === true && stopAndPrevent(e);
    }
    emit("keydown", e);
  }
  function getContent() {
    const narrow = $tabs.tabProps.value.narrowIndicator, content = [], indicator = h("div", {
      ref: tabIndicatorRef,
      class: [
        "q-tab__indicator",
        $tabs.tabProps.value.indicatorClass
      ]
    });
    props4.icon !== void 0 && content.push(
      h(QIcon_default, {
        class: "q-tab__icon",
        name: props4.icon
      })
    );
    props4.label !== void 0 && content.push(
      h("div", { class: "q-tab__label" }, props4.label)
    );
    props4.alert !== false && content.push(
      props4.alertIcon !== void 0 ? h(QIcon_default, {
        class: "q-tab__alert-icon",
        color: props4.alert !== true ? props4.alert : void 0,
        name: props4.alertIcon
      }) : h("div", {
        class: "q-tab__alert" + (props4.alert !== true ? ` text-${props4.alert}` : "")
      })
    );
    narrow === true && content.push(indicator);
    const node = [
      h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef }),
      h("div", { class: innerClass.value }, hMergeSlot(slots.default, content))
    ];
    narrow === false && node.push(indicator);
    return node;
  }
  const tabData = {
    name: computed(() => props4.name),
    rootRef,
    tabIndicatorRef,
    routeData
  };
  onBeforeUnmount(() => {
    $tabs.unregisterTab(tabData);
  });
  onMounted(() => {
    $tabs.registerTab(tabData);
  });
  function renderTab(tag, customData) {
    const data = {
      ref: rootRef,
      class: classes.value,
      tabindex: tabIndex.value,
      role: "tab",
      "aria-selected": isActive.value === true ? "true" : "false",
      "aria-disabled": props4.disable === true ? "true" : void 0,
      onClick,
      onKeydown: onKeydown2,
      ...customData
    };
    return withDirectives(
      h(tag, data, getContent()),
      [[Ripple_default, ripple.value]]
    );
  }
  return { renderTab, $tabs };
}
var QTab_default = createComponent({
  name: "QTab",
  props: useTabProps,
  emits: useTabEmits,
  setup(props4, { slots, emit }) {
    const { renderTab } = use_tab_default(props4, slots, emit);
    return () => renderTab("div");
  }
});
var QTabPanels_default = createComponent({
  name: "QTabPanels",
  props: {
    ...usePanelProps,
    ...useDarkProps
  },
  emits: usePanelEmits,
  setup(props4, { slots }) {
    const vm2 = getCurrentInstance();
    const isDark = use_dark_default(props4, vm2.proxy.$q);
    const { updatePanelsList, getPanelContent, panelDirectives } = use_panel_default();
    const classes = computed(
      () => "q-tab-panels q-panel-parent" + (isDark.value === true ? " q-tab-panels--dark q-dark" : "")
    );
    return () => {
      updatePanelsList(slots);
      return hDir(
        "div",
        { class: classes.value },
        getPanelContent(),
        "pan",
        props4.swipeable,
        () => panelDirectives.value
      );
    };
  }
});
var QTabPanel_default = createComponent({
  name: "QTabPanel",
  props: usePanelChildProps,
  setup(_, { slots }) {
    return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, hSlot(slots.default));
  }
});
var hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;
var hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/;
var hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
var rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/;
var rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
var testPattern = {
  date: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v),
  time: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v),
  fulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v),
  timeOrFulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v),
  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
  email: (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
  hexColor: (v) => hex.test(v),
  hexaColor: (v) => hexa.test(v),
  hexOrHexaColor: (v) => hexOrHexa.test(v),
  rgbColor: (v) => rgb.test(v),
  rgbaColor: (v) => rgba.test(v),
  rgbOrRgbaColor: (v) => rgb.test(v) || rgba.test(v),
  hexOrRgbColor: (v) => hex.test(v) || rgb.test(v),
  hexaOrRgbaColor: (v) => hexa.test(v) || rgba.test(v),
  anyColor: (v) => hexOrHexa.test(v) || rgb.test(v) || rgba.test(v)
};
var patterns_default = {
  testPattern
};
var reRGBA = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function rgbToHex({ r, g, b, a }) {
  const alpha = a !== void 0;
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  if (r > 255 || g > 255 || b > 255 || alpha && a > 100) {
    throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  }
  a = alpha ? (Math.round(255 * a / 100) | 1 << 8).toString(16).slice(1) : "";
  return "#" + (b | g << 8 | r << 16 | 1 << 24).toString(16).slice(1) + a;
}
function rgbToString({ r, g, b, a }) {
  return `rgb${a !== void 0 ? "a" : ""}(${r},${g},${b}${a !== void 0 ? "," + a / 100 : ""})`;
}
function hexToRgb(hex2) {
  if (typeof hex2 !== "string") {
    throw new TypeError("Expected a string");
  }
  hex2 = hex2.replace(/^#/, "");
  if (hex2.length === 3) {
    hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2];
  } else if (hex2.length === 4) {
    hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2] + hex2[3] + hex2[3];
  }
  const num = parseInt(hex2, 16);
  return hex2.length > 6 ? { r: num >> 24 & 255, g: num >> 16 & 255, b: num >> 8 & 255, a: Math.round((num & 255) / 2.55) } : { r: num >> 16, g: num >> 8 & 255, b: num & 255 };
}
function hsvToRgb({ h: h138, s, v, a }) {
  let r, g, b;
  s = s / 100;
  v = v / 100;
  h138 = h138 / 360;
  const i = Math.floor(h138 * 6), f = h138 * 6 - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a
  };
}
function rgbToHsv({ r, g, b, a }) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min, s = max === 0 ? 0 : d / max, v = max / 255;
  let h138;
  switch (max) {
    case min:
      h138 = 0;
      break;
    case r:
      h138 = g - b + d * (g < b ? 6 : 0);
      h138 /= 6 * d;
      break;
    case g:
      h138 = b - r + d * 2;
      h138 /= 6 * d;
      break;
    case b:
      h138 = r - g + d * 4;
      h138 /= 6 * d;
      break;
  }
  return {
    h: Math.round(h138 * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
    a
  };
}
function textToRgb(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  const color = str.replace(/ /g, "");
  const m = reRGBA.exec(color);
  if (m === null) {
    return hexToRgb(color);
  }
  const rgb2 = {
    r: Math.min(255, parseInt(m[2], 10)),
    g: Math.min(255, parseInt(m[3], 10)),
    b: Math.min(255, parseInt(m[4], 10))
  };
  if (m[1]) {
    const alpha = parseFloat(m[5]);
    rgb2.a = Math.min(1, isNaN(alpha) === true ? 1 : alpha) * 100;
  }
  return rgb2;
}
function lighten(color, percent) {
  if (typeof color !== "string") {
    throw new TypeError("Expected a string as color");
  }
  if (typeof percent !== "number") {
    throw new TypeError("Expected a numeric percent");
  }
  const rgb2 = textToRgb(color), t = percent < 0 ? 0 : 255, p = Math.abs(percent) / 100, R = rgb2.r, G = rgb2.g, B = rgb2.b;
  return "#" + (16777216 + (Math.round((t - R) * p) + R) * 65536 + (Math.round((t - G) * p) + G) * 256 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}
function luminosity(color) {
  if (typeof color !== "string" && (!color || color.r === void 0)) {
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  }
  const rgb2 = typeof color === "string" ? textToRgb(color) : color, r = rgb2.r / 255, g = rgb2.g / 255, b = rgb2.b / 255, R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4), B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
function brightness(color) {
  if (typeof color !== "string" && (!color || color.r === void 0)) {
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  }
  const rgb2 = typeof color === "string" ? textToRgb(color) : color;
  return (rgb2.r * 299 + rgb2.g * 587 + rgb2.b * 114) / 1e3;
}
function blend(fgColor, bgColor) {
  if (typeof fgColor !== "string" && (!fgColor || fgColor.r === void 0)) {
    throw new TypeError("Expected a string or a {r, g, b[, a]} object as fgColor");
  }
  if (typeof bgColor !== "string" && (!bgColor || bgColor.r === void 0)) {
    throw new TypeError("Expected a string or a {r, g, b[, a]} object as bgColor");
  }
  const rgb1 = typeof fgColor === "string" ? textToRgb(fgColor) : fgColor, r1 = rgb1.r / 255, g1 = rgb1.g / 255, b1 = rgb1.b / 255, a1 = rgb1.a !== void 0 ? rgb1.a / 100 : 1, rgb2 = typeof bgColor === "string" ? textToRgb(bgColor) : bgColor, r2 = rgb2.r / 255, g2 = rgb2.g / 255, b2 = rgb2.b / 255, a2 = rgb2.a !== void 0 ? rgb2.a / 100 : 1, a = a1 + a2 * (1 - a1), r = Math.round((r1 * a1 + r2 * a2 * (1 - a1)) / a * 255), g = Math.round((g1 * a1 + g2 * a2 * (1 - a1)) / a * 255), b = Math.round((b1 * a1 + b2 * a2 * (1 - a1)) / a * 255);
  const ret = { r, g, b, a: Math.round(a * 100) };
  return typeof fgColor === "string" ? rgbToHex(ret) : ret;
}
function changeAlpha(color, offset2) {
  if (typeof color !== "string") {
    throw new TypeError("Expected a string as color");
  }
  if (offset2 === void 0 || offset2 < -1 || offset2 > 1) {
    throw new TypeError("Expected offset to be between -1 and 1");
  }
  const { r, g, b, a } = textToRgb(color);
  const alpha = a !== void 0 ? a / 100 : 0;
  return rgbToHex({
    r,
    g,
    b,
    a: Math.round(Math.min(1, Math.max(0, alpha + offset2)) * 100)
  });
}
function getPaletteColor(colorName) {
  if (typeof colorName !== "string") {
    throw new TypeError("Expected a string as color");
  }
  const el = document.createElement("div");
  el.className = `text-${colorName} invisible fixed no-pointer-events`;
  document.body.appendChild(el);
  const result = getComputedStyle(el).getPropertyValue("color");
  el.remove();
  return rgbToHex(textToRgb(result));
}
var colors_default = {
  rgbToHex,
  hexToRgb,
  hsvToRgb,
  rgbToHsv,
  textToRgb,
  lighten,
  luminosity,
  brightness,
  blend,
  changeAlpha,
  getPaletteColor
};
var palette = [
  "rgb(255,204,204)",
  "rgb(255,230,204)",
  "rgb(255,255,204)",
  "rgb(204,255,204)",
  "rgb(204,255,230)",
  "rgb(204,255,255)",
  "rgb(204,230,255)",
  "rgb(204,204,255)",
  "rgb(230,204,255)",
  "rgb(255,204,255)",
  "rgb(255,153,153)",
  "rgb(255,204,153)",
  "rgb(255,255,153)",
  "rgb(153,255,153)",
  "rgb(153,255,204)",
  "rgb(153,255,255)",
  "rgb(153,204,255)",
  "rgb(153,153,255)",
  "rgb(204,153,255)",
  "rgb(255,153,255)",
  "rgb(255,102,102)",
  "rgb(255,179,102)",
  "rgb(255,255,102)",
  "rgb(102,255,102)",
  "rgb(102,255,179)",
  "rgb(102,255,255)",
  "rgb(102,179,255)",
  "rgb(102,102,255)",
  "rgb(179,102,255)",
  "rgb(255,102,255)",
  "rgb(255,51,51)",
  "rgb(255,153,51)",
  "rgb(255,255,51)",
  "rgb(51,255,51)",
  "rgb(51,255,153)",
  "rgb(51,255,255)",
  "rgb(51,153,255)",
  "rgb(51,51,255)",
  "rgb(153,51,255)",
  "rgb(255,51,255)",
  "rgb(255,0,0)",
  "rgb(255,128,0)",
  "rgb(255,255,0)",
  "rgb(0,255,0)",
  "rgb(0,255,128)",
  "rgb(0,255,255)",
  "rgb(0,128,255)",
  "rgb(0,0,255)",
  "rgb(128,0,255)",
  "rgb(255,0,255)",
  "rgb(245,0,0)",
  "rgb(245,123,0)",
  "rgb(245,245,0)",
  "rgb(0,245,0)",
  "rgb(0,245,123)",
  "rgb(0,245,245)",
  "rgb(0,123,245)",
  "rgb(0,0,245)",
  "rgb(123,0,245)",
  "rgb(245,0,245)",
  "rgb(214,0,0)",
  "rgb(214,108,0)",
  "rgb(214,214,0)",
  "rgb(0,214,0)",
  "rgb(0,214,108)",
  "rgb(0,214,214)",
  "rgb(0,108,214)",
  "rgb(0,0,214)",
  "rgb(108,0,214)",
  "rgb(214,0,214)",
  "rgb(163,0,0)",
  "rgb(163,82,0)",
  "rgb(163,163,0)",
  "rgb(0,163,0)",
  "rgb(0,163,82)",
  "rgb(0,163,163)",
  "rgb(0,82,163)",
  "rgb(0,0,163)",
  "rgb(82,0,163)",
  "rgb(163,0,163)",
  "rgb(92,0,0)",
  "rgb(92,46,0)",
  "rgb(92,92,0)",
  "rgb(0,92,0)",
  "rgb(0,92,46)",
  "rgb(0,92,92)",
  "rgb(0,46,92)",
  "rgb(0,0,92)",
  "rgb(46,0,92)",
  "rgb(92,0,92)",
  "rgb(255,255,255)",
  "rgb(205,205,205)",
  "rgb(178,178,178)",
  "rgb(153,153,153)",
  "rgb(127,127,127)",
  "rgb(102,102,102)",
  "rgb(76,76,76)",
  "rgb(51,51,51)",
  "rgb(25,25,25)",
  "rgb(0,0,0)"
];
var thumbPath = "M5 5 h10 v10 h-10 v-10 z";
var alphaTrackImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
var QColor_default = createComponent({
  name: "QColor",
  props: {
    ...useDarkProps,
    ...useFormProps,
    modelValue: String,
    defaultValue: String,
    defaultView: {
      type: String,
      default: "spectrum",
      validator: (v) => ["spectrum", "tune", "palette"].includes(v)
    },
    formatModel: {
      type: String,
      default: "auto",
      validator: (v) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(v)
    },
    palette: Array,
    noHeader: Boolean,
    noHeaderTabs: Boolean,
    noFooter: Boolean,
    square: Boolean,
    flat: Boolean,
    bordered: Boolean,
    disable: Boolean,
    readonly: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(props4, { emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = use_dark_default(props4, $q);
    const { getCache } = use_render_cache_default();
    const spectrumRef = ref(null);
    const errorIconRef = ref(null);
    const forceHex = computed(() => props4.formatModel === "auto" ? null : props4.formatModel.indexOf("hex") !== -1);
    const forceAlpha = computed(() => props4.formatModel === "auto" ? null : props4.formatModel.indexOf("a") !== -1);
    const topView = ref(
      props4.formatModel === "auto" ? props4.modelValue === void 0 || props4.modelValue === null || props4.modelValue === "" || props4.modelValue.startsWith("#") ? "hex" : "rgb" : props4.formatModel.startsWith("hex") ? "hex" : "rgb"
    );
    const view = ref(props4.defaultView);
    const model = ref(parseModel(props4.modelValue || props4.defaultValue));
    const editable = computed(() => props4.disable !== true && props4.readonly !== true);
    const isHex = computed(
      () => props4.modelValue === void 0 || props4.modelValue === null || props4.modelValue === "" || props4.modelValue.startsWith("#")
    );
    const isOutputHex = computed(() => forceHex.value !== null ? forceHex.value : isHex.value);
    const formAttrs = computed(() => ({
      type: "hidden",
      name: props4.name,
      value: model.value[isOutputHex.value === true ? "hex" : "rgb"]
    }));
    const injectFormInput = useFormInject(formAttrs);
    const hasAlpha = computed(() => forceAlpha.value !== null ? forceAlpha.value : model.value.a !== void 0);
    const currentBgColor = computed(() => ({
      backgroundColor: model.value.rgb || "#000"
    }));
    const headerClass = computed(() => {
      const light = model.value.a !== void 0 && model.value.a < 65 ? true : luminosity(model.value) > 0.4;
      return `q-color-picker__header-content q-color-picker__header-content--${light ? "light" : "dark"}`;
    });
    const spectrumStyle = computed(() => ({
      background: `hsl(${model.value.h},100%,50%)`
    }));
    const spectrumPointerStyle = computed(() => ({
      top: `${100 - model.value.v}%`,
      [$q.lang.rtl === true ? "right" : "left"]: `${model.value.s}%`
    }));
    const computedPalette = computed(() => props4.palette !== void 0 && props4.palette.length !== 0 ? props4.palette : palette);
    const classes = computed(
      () => "q-color-picker" + (props4.bordered === true ? " q-color-picker--bordered" : "") + (props4.square === true ? " q-color-picker--square no-border-radius" : "") + (props4.flat === true ? " q-color-picker--flat no-shadow" : "") + (props4.disable === true ? " disabled" : "") + (isDark.value === true ? " q-color-picker--dark q-dark" : "")
    );
    const attributes = computed(() => props4.disable === true ? { "aria-disabled": "true" } : {});
    const spectrumDirective = computed(() => {
      return [[
        TouchPan_default,
        onSpectrumPan,
        void 0,
        { prevent: true, stop: true, mouse: true }
      ]];
    });
    watch(() => props4.modelValue, (v) => {
      const localModel = parseModel(v || props4.defaultValue);
      if (localModel.hex !== model.value.hex) {
        model.value = localModel;
      }
    });
    watch(() => props4.defaultValue, (v) => {
      if (!props4.modelValue && v) {
        const localModel = parseModel(v);
        if (localModel.hex !== model.value.hex) {
          model.value = localModel;
        }
      }
    });
    function updateModel2(rgb2, change) {
      model.value.hex = rgbToHex(rgb2);
      model.value.rgb = rgbToString(rgb2);
      model.value.r = rgb2.r;
      model.value.g = rgb2.g;
      model.value.b = rgb2.b;
      model.value.a = rgb2.a;
      const value2 = model.value[isOutputHex.value === true ? "hex" : "rgb"];
      emit("update:modelValue", value2);
      change === true && emit("change", value2);
    }
    function parseModel(v) {
      const alpha = forceAlpha.value !== void 0 ? forceAlpha.value : props4.formatModel === "auto" ? null : props4.formatModel.indexOf("a") !== -1;
      if (typeof v !== "string" || v.length === 0 || testPattern.anyColor(v.replace(/ /g, "")) !== true) {
        return {
          h: 0,
          s: 0,
          v: 0,
          r: 0,
          g: 0,
          b: 0,
          a: alpha === true ? 100 : void 0,
          hex: void 0,
          rgb: void 0
        };
      }
      const model2 = textToRgb(v);
      if (alpha === true && model2.a === void 0) {
        model2.a = 100;
      }
      model2.hex = rgbToHex(model2);
      model2.rgb = rgbToString(model2);
      return Object.assign(model2, rgbToHsv(model2));
    }
    function changeSpectrum(left, top, change) {
      const panel = spectrumRef.value;
      if (panel === null) return;
      const width3 = panel.clientWidth, height2 = panel.clientHeight, rect = panel.getBoundingClientRect();
      let x = Math.min(width3, Math.max(0, left - rect.left));
      if ($q.lang.rtl === true) {
        x = width3 - x;
      }
      const y = Math.min(height2, Math.max(0, top - rect.top)), s = Math.round(100 * x / width3), v = Math.round(100 * Math.max(0, Math.min(1, -(y / height2) + 1))), rgb2 = hsvToRgb({
        h: model.value.h,
        s,
        v,
        a: hasAlpha.value === true ? model.value.a : void 0
      });
      model.value.s = s;
      model.value.v = v;
      updateModel2(rgb2, change);
    }
    function onHue(val, change) {
      const h138 = Math.round(val);
      const rgb2 = hsvToRgb({
        h: h138,
        s: model.value.s,
        v: model.value.v,
        a: hasAlpha.value === true ? model.value.a : void 0
      });
      model.value.h = h138;
      updateModel2(rgb2, change);
    }
    function onHueChange(val) {
      onHue(val, true);
    }
    function onNumericChange(value2, formatModel, max, evt, change) {
      evt !== void 0 && stop(evt);
      if (!/^[0-9]+$/.test(value2)) {
        change === true && proxy.$forceUpdate();
        return;
      }
      const val = Math.floor(Number(value2));
      if (val < 0 || val > max) {
        change === true && proxy.$forceUpdate();
        return;
      }
      const rgb2 = {
        r: formatModel === "r" ? val : model.value.r,
        g: formatModel === "g" ? val : model.value.g,
        b: formatModel === "b" ? val : model.value.b,
        a: hasAlpha.value === true ? formatModel === "a" ? val : model.value.a : void 0
      };
      if (formatModel !== "a") {
        const hsv = rgbToHsv(rgb2);
        model.value.h = hsv.h;
        model.value.s = hsv.s;
        model.value.v = hsv.v;
      }
      updateModel2(rgb2, change);
      if (evt !== void 0 && change !== true && evt.target.selectionEnd !== void 0) {
        const index = evt.target.selectionEnd;
        nextTick(() => {
          evt.target.setSelectionRange(index, index);
        });
      }
    }
    function onEditorChange(evt, change) {
      let rgb2;
      const inp = evt.target.value;
      stop(evt);
      if (topView.value === "hex") {
        if (inp.length !== (hasAlpha.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(inp)) {
          return true;
        }
        rgb2 = hexToRgb(inp);
      } else {
        let model2;
        if (!inp.endsWith(")")) {
          return true;
        } else if (hasAlpha.value !== true && inp.startsWith("rgb(")) {
          model2 = inp.substring(4, inp.length - 1).split(",").map((n) => parseInt(n, 10));
          if (model2.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(inp)) {
            return true;
          }
        } else if (hasAlpha.value === true && inp.startsWith("rgba(")) {
          model2 = inp.substring(5, inp.length - 1).split(",");
          if (model2.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(inp)) {
            return true;
          }
          for (let i = 0; i < 3; i++) {
            const v2 = parseInt(model2[i], 10);
            if (v2 < 0 || v2 > 255) {
              return true;
            }
            model2[i] = v2;
          }
          const v = parseFloat(model2[3]);
          if (v < 0 || v > 1) {
            return true;
          }
          model2[3] = v;
        } else {
          return true;
        }
        if (model2[0] < 0 || model2[0] > 255 || model2[1] < 0 || model2[1] > 255 || model2[2] < 0 || model2[2] > 255 || hasAlpha.value === true && (model2[3] < 0 || model2[3] > 1)) {
          return true;
        }
        rgb2 = {
          r: model2[0],
          g: model2[1],
          b: model2[2],
          a: hasAlpha.value === true ? model2[3] * 100 : void 0
        };
      }
      const hsv = rgbToHsv(rgb2);
      model.value.h = hsv.h;
      model.value.s = hsv.s;
      model.value.v = hsv.v;
      updateModel2(rgb2, change);
      if (change !== true) {
        const index = evt.target.selectionEnd;
        nextTick(() => {
          evt.target.setSelectionRange(index, index);
        });
      }
    }
    function onPalettePick(color) {
      const def = parseModel(color);
      const rgb2 = { r: def.r, g: def.g, b: def.b, a: def.a };
      if (rgb2.a === void 0) {
        rgb2.a = model.value.a;
      }
      model.value.h = def.h;
      model.value.s = def.s;
      model.value.v = def.v;
      updateModel2(rgb2, true);
    }
    function onSpectrumPan(evt) {
      if (evt.isFinal) {
        changeSpectrum(
          evt.position.left,
          evt.position.top,
          true
        );
      } else {
        onSpectrumChange(evt);
      }
    }
    const onSpectrumChange = throttle_default(
      (evt) => {
        changeSpectrum(evt.position.left, evt.position.top);
      },
      20
    );
    function onSpectrumClick(evt) {
      changeSpectrum(
        evt.pageX - window.pageXOffset,
        evt.pageY - window.pageYOffset,
        true
      );
    }
    function onActivate(evt) {
      changeSpectrum(
        evt.pageX - window.pageXOffset,
        evt.pageY - window.pageYOffset
      );
    }
    function updateErrorIcon(val) {
      if (errorIconRef.value !== null) {
        errorIconRef.value.$el.style.opacity = val ? 1 : 0;
      }
    }
    function setTopView(val) {
      topView.value = val;
    }
    function getHeader() {
      const child = [];
      props4.noHeaderTabs !== true && child.push(
        h(QTabs_default, {
          class: "q-color-picker__header-tabs",
          modelValue: topView.value,
          dense: true,
          align: "justify",
          "onUpdate:modelValue": setTopView
        }, () => [
          h(QTab_default, {
            label: "HEX" + (hasAlpha.value === true ? "A" : ""),
            name: "hex",
            ripple: false
          }),
          h(QTab_default, {
            label: "RGB" + (hasAlpha.value === true ? "A" : ""),
            name: "rgb",
            ripple: false
          })
        ])
      );
      child.push(
        h("div", {
          class: "q-color-picker__header-banner row flex-center no-wrap"
        }, [
          h("input", {
            class: "fit",
            value: model.value[topView.value],
            ...editable.value !== true ? { readonly: true } : {},
            ...getCache("topIn", {
              onInput: (evt) => {
                updateErrorIcon(onEditorChange(evt) === true);
              },
              onChange: stop,
              onBlur: (evt) => {
                onEditorChange(evt, true) === true && proxy.$forceUpdate();
                updateErrorIcon(false);
              }
            })
          }),
          h(QIcon_default, {
            ref: errorIconRef,
            class: "q-color-picker__error-icon absolute no-pointer-events",
            name: $q.iconSet.type.negative
          })
        ])
      );
      return h("div", {
        class: "q-color-picker__header relative-position overflow-hidden"
      }, [
        h("div", { class: "q-color-picker__header-bg absolute-full" }),
        h("div", {
          class: headerClass.value,
          style: currentBgColor.value
        }, child)
      ]);
    }
    function getContent() {
      return h(QTabPanels_default, {
        modelValue: view.value,
        animated: true
      }, () => [
        h(QTabPanel_default, {
          class: "q-color-picker__spectrum-tab overflow-hidden",
          name: "spectrum"
        }, getSpectrumTab),
        h(QTabPanel_default, {
          class: "q-pa-md q-color-picker__tune-tab",
          name: "tune"
        }, getTuneTab),
        h(QTabPanel_default, {
          class: "q-color-picker__palette-tab",
          name: "palette"
        }, getPaletteTab)
      ]);
    }
    function setView(val) {
      view.value = val;
    }
    function getFooter() {
      return h("div", {
        class: "q-color-picker__footer relative-position overflow-hidden"
      }, [
        h(QTabs_default, {
          class: "absolute-full",
          modelValue: view.value,
          dense: true,
          align: "justify",
          "onUpdate:modelValue": setView
        }, () => [
          h(QTab_default, {
            icon: $q.iconSet.colorPicker.spectrum,
            name: "spectrum",
            ripple: false
          }),
          h(QTab_default, {
            icon: $q.iconSet.colorPicker.tune,
            name: "tune",
            ripple: false
          }),
          h(QTab_default, {
            icon: $q.iconSet.colorPicker.palette,
            name: "palette",
            ripple: false
          })
        ])
      ]);
    }
    function getSpectrumTab() {
      const data = {
        ref: spectrumRef,
        class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (editable.value !== true ? " readonly" : ""),
        style: spectrumStyle.value,
        ...editable.value === true ? {
          onClick: onSpectrumClick,
          onMousedown: onActivate
        } : {}
      };
      const child = [
        h("div", { style: { paddingBottom: "100%" } }),
        h("div", { class: "q-color-picker__spectrum-white absolute-full" }),
        h("div", { class: "q-color-picker__spectrum-black absolute-full" }),
        h("div", {
          class: "absolute",
          style: spectrumPointerStyle.value
        }, [
          model.value.hex !== void 0 ? h("div", { class: "q-color-picker__spectrum-circle" }) : null
        ])
      ];
      const sliders = [
        h(QSlider_default, {
          class: "q-color-picker__hue non-selectable",
          modelValue: model.value.h,
          min: 0,
          max: 360,
          trackSize: "8px",
          innerTrackColor: "transparent",
          selectionColor: "transparent",
          readonly: editable.value !== true,
          thumbPath,
          "onUpdate:modelValue": onHue,
          onChange: onHueChange
        })
      ];
      hasAlpha.value === true && sliders.push(
        h(QSlider_default, {
          class: "q-color-picker__alpha non-selectable",
          modelValue: model.value.a,
          min: 0,
          max: 100,
          trackSize: "8px",
          trackColor: "white",
          innerTrackColor: "transparent",
          selectionColor: "transparent",
          trackImg: alphaTrackImg,
          readonly: editable.value !== true,
          hideSelection: true,
          thumbPath,
          ...getCache("alphaSlide", {
            "onUpdate:modelValue": (value2) => onNumericChange(value2, "a", 100),
            onChange: (value2) => onNumericChange(value2, "a", 100, void 0, true)
          })
        })
      );
      return [
        hDir("div", data, child, "spec", editable.value, () => spectrumDirective.value),
        h("div", { class: "q-color-picker__sliders" }, sliders)
      ];
    }
    function getTuneTab() {
      return [
        h("div", { class: "row items-center no-wrap" }, [
          h("div", "R"),
          h(QSlider_default, {
            modelValue: model.value.r,
            min: 0,
            max: 255,
            color: "red",
            dark: isDark.value,
            readonly: editable.value !== true,
            ...getCache("rSlide", {
              "onUpdate:modelValue": (value2) => onNumericChange(value2, "r", 255),
              onChange: (value2) => onNumericChange(value2, "r", 255, void 0, true)
            })
          }),
          h("input", {
            value: model.value.r,
            maxlength: 3,
            readonly: editable.value !== true,
            onChange: stop,
            ...getCache("rIn", {
              onInput: (evt) => onNumericChange(evt.target.value, "r", 255, evt),
              onBlur: (evt) => onNumericChange(evt.target.value, "r", 255, evt, true)
            })
          })
        ]),
        h("div", { class: "row items-center no-wrap" }, [
          h("div", "G"),
          h(QSlider_default, {
            modelValue: model.value.g,
            min: 0,
            max: 255,
            color: "green",
            dark: isDark.value,
            readonly: editable.value !== true,
            ...getCache("gSlide", {
              "onUpdate:modelValue": (value2) => onNumericChange(value2, "g", 255),
              onChange: (value2) => onNumericChange(value2, "g", 255, void 0, true)
            })
          }),
          h("input", {
            value: model.value.g,
            maxlength: 3,
            readonly: editable.value !== true,
            onChange: stop,
            ...getCache("gIn", {
              onInput: (evt) => onNumericChange(evt.target.value, "g", 255, evt),
              onBlur: (evt) => onNumericChange(evt.target.value, "g", 255, evt, true)
            })
          })
        ]),
        h("div", { class: "row items-center no-wrap" }, [
          h("div", "B"),
          h(QSlider_default, {
            modelValue: model.value.b,
            min: 0,
            max: 255,
            color: "blue",
            readonly: editable.value !== true,
            dark: isDark.value,
            ...getCache("bSlide", {
              "onUpdate:modelValue": (value2) => onNumericChange(value2, "b", 255),
              onChange: (value2) => onNumericChange(value2, "b", 255, void 0, true)
            })
          }),
          h("input", {
            value: model.value.b,
            maxlength: 3,
            readonly: editable.value !== true,
            onChange: stop,
            ...getCache("bIn", {
              onInput: (evt) => onNumericChange(evt.target.value, "b", 255, evt),
              onBlur: (evt) => onNumericChange(evt.target.value, "b", 255, evt, true)
            })
          })
        ]),
        hasAlpha.value === true ? h("div", { class: "row items-center no-wrap" }, [
          h("div", "A"),
          h(QSlider_default, {
            modelValue: model.value.a,
            color: "grey",
            readonly: editable.value !== true,
            dark: isDark.value,
            ...getCache("aSlide", {
              "onUpdate:modelValue": (value2) => onNumericChange(value2, "a", 100),
              onChange: (value2) => onNumericChange(value2, "a", 100, void 0, true)
            })
          }),
          h("input", {
            value: model.value.a,
            maxlength: 3,
            readonly: editable.value !== true,
            onChange: stop,
            ...getCache("aIn", {
              onInput: (evt) => onNumericChange(evt.target.value, "a", 100, evt),
              onBlur: (evt) => onNumericChange(evt.target.value, "a", 100, evt, true)
            })
          })
        ]) : null
      ];
    }
    function getPaletteTab() {
      const fn = (color) => h("div", {
        class: "q-color-picker__cube col-auto",
        style: { backgroundColor: color },
        ...editable.value === true ? getCache("palette#" + color, {
          onClick: () => {
            onPalettePick(color);
          }
        }) : {}
      });
      return [
        h("div", {
          class: "row items-center q-color-picker__palette-rows" + (editable.value === true ? " q-color-picker__palette-rows--editable" : "")
        }, computedPalette.value.map(fn))
      ];
    }
    return () => {
      const child = [getContent()];
      if (props4.name !== void 0 && props4.disable !== true) {
        injectFormInput(child, "push");
      }
      props4.noHeader !== true && child.unshift(
        getHeader()
      );
      props4.noFooter !== true && child.push(
        getFooter()
      );
      return h("div", {
        class: classes.value,
        ...attributes.value
      }, child);
    };
  }
});
var breaks = [
  -61,
  9,
  38,
  199,
  426,
  686,
  756,
  818,
  1111,
  1181,
  1210,
  1635,
  2060,
  2097,
  2192,
  2262,
  2324,
  2394,
  2456,
  3178
];
function toJalaali(gy, gm, gd) {
  if (Object.prototype.toString.call(gy) === "[object Date]") {
    gd = gy.getDate();
    gm = gy.getMonth() + 1;
    gy = gy.getFullYear();
  }
  return d2j(g2d(gy, gm, gd));
}
function toGregorian(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd));
}
function isLeapJalaaliYear(jy) {
  return jalCalLeap(jy) === 0;
}
function jalaaliMonthLength(jy, jm) {
  if (jm <= 6) return 31;
  if (jm <= 11) return 30;
  if (isLeapJalaaliYear(jy)) return 30;
  return 29;
}
function jalCalLeap(jy) {
  const bl = breaks.length;
  let jp = breaks[0], jm, jump, leap, n, i;
  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error("Invalid Jalaali year " + jy);
  }
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    jp = jm;
  }
  n = jy - jp;
  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }
  return leap;
}
function jalCal(jy, withoutLeap) {
  const bl = breaks.length, gy = jy + 621;
  let leapJ = -14, jp = breaks[0], jm, jump, leap, n, i;
  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error("Invalid Jalaali year " + jy);
  }
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  n = jy - jp;
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  }
  const leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  if (!withoutLeap) {
    if (jump - n < 6) {
      n = n - jump + div(jump + 4, 33) * 33;
    }
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
      leap = 4;
    }
  }
  return {
    leap,
    gy,
    march
  };
}
function j2d(jy, jm, jd) {
  const r = jalCal(jy, true);
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}
function d2j(jdn) {
  const gy = d2g(jdn).gy;
  let jy = gy - 621, jd, jm, k;
  const r = jalCal(jy, false), jdn1f = g2d(gy, 3, r.march);
  k = jdn - jdn1f;
  if (k >= 0) {
    if (k <= 185) {
      jm = 1 + div(k, 31);
      jd = mod(k, 31) + 1;
      return {
        jy,
        jm,
        jd
      };
    } else {
      k -= 186;
    }
  } else {
    jy -= 1;
    k += 179;
    if (r.leap === 1) {
      k += 1;
    }
  }
  jm = 7 + div(k, 30);
  jd = mod(k, 30) + 1;
  return {
    jy,
    jm,
    jd
  };
}
function g2d(gy, gm, gd) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
function d2g(jdn) {
  let j = 4 * jdn + 139361631;
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308, gd = div(mod(i, 153), 5) + 1, gm = mod(div(i, 153), 12) + 1, gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return {
    gy,
    gm,
    gd
  };
}
function div(a, b) {
  return ~~(a / b);
}
function mod(a, b) {
  return a - ~~(a / b) * b;
}
var calendars = ["gregorian", "persian"];
var useDatetimeProps = {
  // should define modelValue in the target component
  mask: {
    type: String
  },
  locale: Object,
  calendar: {
    type: String,
    validator: (v) => calendars.includes(v),
    default: "gregorian"
  },
  landscape: Boolean,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  readonly: Boolean,
  disable: Boolean
};
var useDatetimeEmits = ["update:modelValue"];
function getDayHash(date) {
  return date.year + "/" + pad(date.month) + "/" + pad(date.day);
}
function use_datetime_default(props4, $q) {
  const editable = computed(() => {
    return props4.disable !== true && props4.readonly !== true;
  });
  const tabindex = computed(() => {
    return editable.value === true ? 0 : -1;
  });
  const headerClass = computed(() => {
    const cls = [];
    props4.color !== void 0 && cls.push(`bg-${props4.color}`);
    props4.textColor !== void 0 && cls.push(`text-${props4.textColor}`);
    return cls.join(" ");
  });
  function getLocale2() {
    return props4.locale !== void 0 ? { ...$q.lang.date, ...props4.locale } : $q.lang.date;
  }
  function getCurrentDate(dateOnly) {
    const d = /* @__PURE__ */ new Date();
    const timeFill = dateOnly === true ? null : 0;
    if (props4.calendar === "persian") {
      const jDate = toJalaali(d);
      return {
        year: jDate.jy,
        month: jDate.jm,
        day: jDate.jd
      };
    }
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      hour: timeFill,
      minute: timeFill,
      second: timeFill,
      millisecond: timeFill
    };
  }
  return {
    editable,
    tabindex,
    headerClass,
    getLocale: getLocale2,
    getCurrentDate
  };
}
var MILLISECONDS_IN_DAY = 864e5;
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var defaultMask = "YYYY-MM-DDTHH:mm:ss.SSSZ";
var token = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g;
var reverseToken = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g;
var regexStore = {};
function getRegexData(mask, dateLocale) {
  const days = "(" + dateLocale.days.join("|") + ")", key = mask + days;
  if (regexStore[key] !== void 0) {
    return regexStore[key];
  }
  const daysShort = "(" + dateLocale.daysShort.join("|") + ")", months = "(" + dateLocale.months.join("|") + ")", monthsShort = "(" + dateLocale.monthsShort.join("|") + ")";
  const map = {};
  let index = 0;
  const regexText = mask.replace(reverseToken, (match) => {
    index++;
    switch (match) {
      case "YY":
        map.YY = index;
        return "(-?\\d{1,2})";
      case "YYYY":
        map.YYYY = index;
        return "(-?\\d{1,4})";
      case "M":
        map.M = index;
        return "(\\d{1,2})";
      case "Mo":
        map.M = index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "MM":
        map.M = index;
        return "(\\d{2})";
      case "MMM":
        map.MMM = index;
        return monthsShort;
      case "MMMM":
        map.MMMM = index;
        return months;
      case "D":
        map.D = index;
        return "(\\d{1,2})";
      case "Do":
        map.D = index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        map.D = index;
        return "(\\d{2})";
      case "H":
        map.H = index;
        return "(\\d{1,2})";
      case "HH":
        map.H = index;
        return "(\\d{2})";
      case "h":
        map.h = index;
        return "(\\d{1,2})";
      case "hh":
        map.h = index;
        return "(\\d{2})";
      case "m":
        map.m = index;
        return "(\\d{1,2})";
      case "mm":
        map.m = index;
        return "(\\d{2})";
      case "s":
        map.s = index;
        return "(\\d{1,2})";
      case "ss":
        map.s = index;
        return "(\\d{2})";
      case "S":
        map.S = index;
        return "(\\d{1})";
      case "SS":
        map.S = index;
        return "(\\d{2})";
      case "SSS":
        map.S = index;
        return "(\\d{3})";
      case "A":
        map.A = index;
        return "(AM|PM)";
      case "a":
        map.a = index;
        return "(am|pm)";
      case "aa":
        map.aa = index;
        return "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return daysShort;
      case "dddd":
        return days;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "do":
        index++;
        return "(\\d{1}(st|nd|rd|th))";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "DDDo":
        index++;
        return "(\\d{1,3}(st|nd|rd|th))";
      case "w":
        return "(\\d{1,2})";
      case "wo":
        index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "ww":
        return "(\\d{2})";
      case "Z":
        map.Z = index;
        return "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        map.ZZ = index;
        return "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        map.X = index;
        return "(-?\\d+)";
      case "x":
        map.x = index;
        return "(-?\\d{4,})";
      default:
        index--;
        if (match[0] === "[") {
          match = match.substring(1, match.length - 1);
        }
        return match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  });
  const res = { map, regex: new RegExp("^" + regexText) };
  regexStore[key] = res;
  return res;
}
function getDateLocale(paramDateLocale, langProps) {
  return paramDateLocale !== void 0 ? paramDateLocale : langProps !== void 0 ? langProps.date : en_US_default.date;
}
function formatTimezone(offset2, delimeter = "") {
  const sign = offset2 > 0 ? "-" : "+", absOffset = Math.abs(offset2), hours = Math.floor(absOffset / 60), minutes = absOffset % 60;
  return sign + pad(hours) + delimeter + pad(minutes);
}
function applyYearMonthDayChange(date, mod2, sign) {
  let year = date.getFullYear(), month = date.getMonth();
  const day = date.getDate();
  if (mod2.year !== void 0) {
    year += sign * mod2.year;
    delete mod2.year;
  }
  if (mod2.month !== void 0) {
    month += sign * mod2.month;
    delete mod2.month;
  }
  date.setDate(1);
  date.setMonth(2);
  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(Math.min(day, daysInMonth(date)));
  if (mod2.date !== void 0) {
    date.setDate(date.getDate() + sign * mod2.date);
    delete mod2.date;
  }
  return date;
}
function applyYearMonthDay(date, mod2, middle) {
  const year = mod2.year !== void 0 ? mod2.year : date[`get${middle}FullYear`](), month = mod2.month !== void 0 ? mod2.month - 1 : date[`get${middle}Month`](), maxDay = new Date(year, month + 1, 0).getDate(), day = Math.min(maxDay, mod2.date !== void 0 ? mod2.date : date[`get${middle}Date`]());
  date[`set${middle}Date`](1);
  date[`set${middle}Month`](2);
  date[`set${middle}FullYear`](year);
  date[`set${middle}Month`](month);
  date[`set${middle}Date`](day);
  delete mod2.year;
  delete mod2.month;
  delete mod2.date;
  return date;
}
function getChange(date, rawMod, sign) {
  const mod2 = normalizeMod(rawMod), d = new Date(date), t = mod2.year !== void 0 || mod2.month !== void 0 || mod2.date !== void 0 ? applyYearMonthDayChange(d, mod2, sign) : d;
  for (const key in mod2) {
    const op = capitalize(key);
    t[`set${op}`](t[`get${op}`]() + sign * mod2[key]);
  }
  return t;
}
function normalizeMod(mod2) {
  const acc = { ...mod2 };
  if (mod2.years !== void 0) {
    acc.year = mod2.years;
    delete acc.years;
  }
  if (mod2.months !== void 0) {
    acc.month = mod2.months;
    delete acc.months;
  }
  if (mod2.days !== void 0) {
    acc.date = mod2.days;
    delete acc.days;
  }
  if (mod2.day !== void 0) {
    acc.date = mod2.day;
    delete acc.day;
  }
  if (mod2.hour !== void 0) {
    acc.hours = mod2.hour;
    delete acc.hour;
  }
  if (mod2.minute !== void 0) {
    acc.minutes = mod2.minute;
    delete acc.minute;
  }
  if (mod2.second !== void 0) {
    acc.seconds = mod2.second;
    delete acc.second;
  }
  if (mod2.millisecond !== void 0) {
    acc.milliseconds = mod2.millisecond;
    delete acc.millisecond;
  }
  return acc;
}
function adjustDate(date, rawMod, utc) {
  const mod2 = normalizeMod(rawMod), middle = utc === true ? "UTC" : "", d = new Date(date), t = mod2.year !== void 0 || mod2.month !== void 0 || mod2.date !== void 0 ? applyYearMonthDay(d, mod2, middle) : d;
  for (const key in mod2) {
    const op = key.charAt(0).toUpperCase() + key.slice(1);
    t[`set${middle}${op}`](mod2[key]);
  }
  return t;
}
function extractDate(str, mask, dateLocale) {
  const d = __splitDate(str, mask, dateLocale);
  const date = new Date(
    d.year,
    d.month === null ? null : d.month - 1,
    d.day === null ? 1 : d.day,
    d.hour,
    d.minute,
    d.second,
    d.millisecond
  );
  const tzOffset = date.getTimezoneOffset();
  return d.timezoneOffset === null || d.timezoneOffset === tzOffset ? date : getChange(date, { minutes: d.timezoneOffset - tzOffset }, 1);
}
function __splitDate(str, mask, dateLocale, calendar, defaultModel) {
  const date = {
    year: null,
    month: null,
    day: null,
    hour: null,
    minute: null,
    second: null,
    millisecond: null,
    timezoneOffset: null,
    dateHash: null,
    timeHash: null
  };
  defaultModel !== void 0 && Object.assign(date, defaultModel);
  if (str === void 0 || str === null || str === "" || typeof str !== "string") {
    return date;
  }
  if (mask === void 0) {
    mask = defaultMask;
  }
  const langOpts = getDateLocale(dateLocale, Lang_default.props), months = langOpts.months, monthsShort = langOpts.monthsShort;
  const { regex, map } = getRegexData(mask, langOpts);
  const match = str.match(regex);
  if (match === null) {
    return date;
  }
  let tzString = "";
  if (map.X !== void 0 || map.x !== void 0) {
    const stamp = parseInt(match[map.X !== void 0 ? map.X : map.x], 10);
    if (isNaN(stamp) === true || stamp < 0) {
      return date;
    }
    const d = new Date(stamp * (map.X !== void 0 ? 1e3 : 1));
    date.year = d.getFullYear();
    date.month = d.getMonth() + 1;
    date.day = d.getDate();
    date.hour = d.getHours();
    date.minute = d.getMinutes();
    date.second = d.getSeconds();
    date.millisecond = d.getMilliseconds();
  } else {
    if (map.YYYY !== void 0) {
      date.year = parseInt(match[map.YYYY], 10);
    } else if (map.YY !== void 0) {
      const y = parseInt(match[map.YY], 10);
      date.year = y < 0 ? y : 2e3 + y;
    }
    if (map.M !== void 0) {
      date.month = parseInt(match[map.M], 10);
      if (date.month < 1 || date.month > 12) {
        return date;
      }
    } else if (map.MMM !== void 0) {
      date.month = monthsShort.indexOf(match[map.MMM]) + 1;
    } else if (map.MMMM !== void 0) {
      date.month = months.indexOf(match[map.MMMM]) + 1;
    }
    if (map.D !== void 0) {
      date.day = parseInt(match[map.D], 10);
      if (date.year === null || date.month === null || date.day < 1) {
        return date;
      }
      const maxDay = calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
      if (date.day > maxDay) {
        return date;
      }
    }
    if (map.H !== void 0) {
      date.hour = parseInt(match[map.H], 10) % 24;
    } else if (map.h !== void 0) {
      date.hour = parseInt(match[map.h], 10) % 12;
      if (map.A && match[map.A] === "PM" || map.a && match[map.a] === "pm" || map.aa && match[map.aa] === "p.m.") {
        date.hour += 12;
      }
      date.hour = date.hour % 24;
    }
    if (map.m !== void 0) {
      date.minute = parseInt(match[map.m], 10) % 60;
    }
    if (map.s !== void 0) {
      date.second = parseInt(match[map.s], 10) % 60;
    }
    if (map.S !== void 0) {
      date.millisecond = parseInt(match[map.S], 10) * 10 ** (3 - match[map.S].length);
    }
    if (map.Z !== void 0 || map.ZZ !== void 0) {
      tzString = map.Z !== void 0 ? match[map.Z].replace(":", "") : match[map.ZZ];
      date.timezoneOffset = (tzString[0] === "+" ? -1 : 1) * (60 * tzString.slice(1, 3) + 1 * tzString.slice(3, 5));
    }
  }
  date.dateHash = pad(date.year, 6) + "/" + pad(date.month) + "/" + pad(date.day);
  date.timeHash = pad(date.hour) + ":" + pad(date.minute) + ":" + pad(date.second) + tzString;
  return date;
}
function isValid(date) {
  return typeof date === "number" ? true : isNaN(Date.parse(date)) === false;
}
function buildDate(mod2, utc) {
  return adjustDate(/* @__PURE__ */ new Date(), mod2, utc);
}
function getDayOfWeek(date) {
  const dow = new Date(date).getDay();
  return dow === 0 ? 7 : dow;
}
function getWeekOfYear(date) {
  const thursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  thursday.setDate(thursday.getDate() - (thursday.getDay() + 6) % 7 + 3);
  const firstThursday = new Date(thursday.getFullYear(), 0, 4);
  firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
  const ds = thursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  thursday.setHours(thursday.getHours() - ds);
  const weekDiff = (thursday - firstThursday) / (MILLISECONDS_IN_DAY * 7);
  return 1 + Math.floor(weekDiff);
}
function getDayIdentifier(date) {
  return date.getFullYear() * 1e4 + date.getMonth() * 100 + date.getDate();
}
function getDateIdentifier(date, onlyDate) {
  const d = new Date(date);
  return onlyDate === true ? getDayIdentifier(d) : d.getTime();
}
function isBetweenDates(date, from, to, opts = {}) {
  const d1 = getDateIdentifier(from, opts.onlyDate), d2 = getDateIdentifier(to, opts.onlyDate), cur = getDateIdentifier(date, opts.onlyDate);
  return (cur > d1 || opts.inclusiveFrom === true && cur === d1) && (cur < d2 || opts.inclusiveTo === true && cur === d2);
}
function addToDate(date, mod2) {
  return getChange(date, mod2, 1);
}
function subtractFromDate(date, mod2) {
  return getChange(date, mod2, -1);
}
function startOfDate(date, unit, utc) {
  const t = new Date(date), prefix = `set${utc === true ? "UTC" : ""}`;
  switch (unit) {
    case "year":
    case "years":
      t[`${prefix}Month`](0);
    case "month":
    case "months":
      t[`${prefix}Date`](1);
    case "day":
    case "days":
    case "date":
      t[`${prefix}Hours`](0);
    case "hour":
    case "hours":
      t[`${prefix}Minutes`](0);
    case "minute":
    case "minutes":
      t[`${prefix}Seconds`](0);
    case "second":
    case "seconds":
      t[`${prefix}Milliseconds`](0);
  }
  return t;
}
function endOfDate(date, unit, utc) {
  const t = new Date(date), prefix = `set${utc === true ? "UTC" : ""}`;
  switch (unit) {
    case "year":
    case "years":
      t[`${prefix}Month`](11);
    case "month":
    case "months":
      t[`${prefix}Date`](daysInMonth(t));
    case "day":
    case "days":
    case "date":
      t[`${prefix}Hours`](23);
    case "hour":
    case "hours":
      t[`${prefix}Minutes`](59);
    case "minute":
    case "minutes":
      t[`${prefix}Seconds`](59);
    case "second":
    case "seconds":
      t[`${prefix}Milliseconds`](999);
  }
  return t;
}
function getMaxDate(date) {
  let t = new Date(date);
  Array.prototype.slice.call(arguments, 1).forEach((d) => {
    t = Math.max(t, new Date(d));
  });
  return t;
}
function getMinDate(date) {
  let t = new Date(date);
  Array.prototype.slice.call(arguments, 1).forEach((d) => {
    t = Math.min(t, new Date(d));
  });
  return t;
}
function getDiff(t, sub, interval) {
  return (t.getTime() - t.getTimezoneOffset() * MILLISECONDS_IN_MINUTE - (sub.getTime() - sub.getTimezoneOffset() * MILLISECONDS_IN_MINUTE)) / interval;
}
function getDateDiff(date, subtract, unit = "days") {
  const t = new Date(date), sub = new Date(subtract);
  switch (unit) {
    case "years":
    case "year":
      return t.getFullYear() - sub.getFullYear();
    case "months":
    case "month":
      return (t.getFullYear() - sub.getFullYear()) * 12 + t.getMonth() - sub.getMonth();
    case "days":
    case "day":
    case "date":
      return getDiff(startOfDate(t, "day"), startOfDate(sub, "day"), MILLISECONDS_IN_DAY);
    case "hours":
    case "hour":
      return getDiff(startOfDate(t, "hour"), startOfDate(sub, "hour"), MILLISECONDS_IN_HOUR);
    case "minutes":
    case "minute":
      return getDiff(startOfDate(t, "minute"), startOfDate(sub, "minute"), MILLISECONDS_IN_MINUTE);
    case "seconds":
    case "second":
      return getDiff(startOfDate(t, "second"), startOfDate(sub, "second"), 1e3);
  }
}
function getDayOfYear(date) {
  return getDateDiff(date, startOfDate(date, "year"), "days") + 1;
}
function inferDateFormat(date) {
  return isDate(date) === true ? "date" : typeof date === "number" ? "number" : "string";
}
function getDateBetween(date, min, max) {
  const t = new Date(date);
  if (min) {
    const low = new Date(min);
    if (t < low) {
      return low;
    }
  }
  if (max) {
    const high = new Date(max);
    if (t > high) {
      return high;
    }
  }
  return t;
}
function isSameDate(date, date2, unit) {
  const t = new Date(date), d = new Date(date2);
  if (unit === void 0) {
    return t.getTime() === d.getTime();
  }
  switch (unit) {
    case "second":
    case "seconds":
      if (t.getSeconds() !== d.getSeconds()) {
        return false;
      }
    case "minute":
    case "minutes":
      if (t.getMinutes() !== d.getMinutes()) {
        return false;
      }
    case "hour":
    case "hours":
      if (t.getHours() !== d.getHours()) {
        return false;
      }
    case "day":
    case "days":
    case "date":
      if (t.getDate() !== d.getDate()) {
        return false;
      }
    case "month":
    case "months":
      if (t.getMonth() !== d.getMonth()) {
        return false;
      }
    case "year":
    case "years":
      if (t.getFullYear() !== d.getFullYear()) {
        return false;
      }
      break;
    default:
      throw new Error(`date isSameDate unknown unit ${unit}`);
  }
  return true;
}
function daysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
function getOrdinal(n) {
  if (n >= 11 && n <= 13) {
    return `${n}th`;
  }
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
  }
  return `${n}th`;
}
var formatter = {
  // Year: 00, 01, ..., 99
  YY(date, dateLocale, forcedYear) {
    const y = this.YYYY(date, dateLocale, forcedYear) % 100;
    return y >= 0 ? pad(y) : "-" + pad(Math.abs(y));
  },
  // Year: 1900, 1901, ..., 2099
  YYYY(date, _dateLocale, forcedYear) {
    return forcedYear !== void 0 && forcedYear !== null ? forcedYear : date.getFullYear();
  },
  // Month: 1, 2, ..., 12
  M(date) {
    return date.getMonth() + 1;
  },
  // Month: 1st, 2nd, ..., 12th
  Mo(date) {
    return getOrdinal(date.getMonth() + 1);
  },
  // Month: 01, 02, ..., 12
  MM(date) {
    return pad(date.getMonth() + 1);
  },
  // Month Short Name: Jan, Feb, ...
  MMM(date, dateLocale) {
    return dateLocale.monthsShort[date.getMonth()];
  },
  // Month Name: January, February, ...
  MMMM(date, dateLocale) {
    return dateLocale.months[date.getMonth()];
  },
  // Quarter: 1, 2, 3, 4
  Q(date) {
    return Math.ceil((date.getMonth() + 1) / 3);
  },
  // Quarter: 1st, 2nd, 3rd, 4th
  Qo(date) {
    return getOrdinal(this.Q(date));
  },
  // Day of month: 1, 2, ..., 31
  D(date) {
    return date.getDate();
  },
  // Day of month: 1st, 2nd, ..., 31st
  Do(date) {
    return getOrdinal(date.getDate());
  },
  // Day of month: 01, 02, ..., 31
  DD(date) {
    return pad(date.getDate());
  },
  // Day of year: 1, 2, ..., 366
  DDD(date) {
    return getDayOfYear(date);
  },
  // Day of year: 1st, 2nd, ..., 366th
  DDDo(date) {
    return getOrdinal(getDayOfYear(date));
  },
  // Day of year: 001, 002, ..., 366
  DDDD(date) {
    return pad(getDayOfYear(date), 3);
  },
  // Day of week: 0, 1, ..., 6
  d(date) {
    return date.getDay();
  },
  // Day of week: 0th, 1st, ..., 6th
  do(date) {
    return getOrdinal(date.getDay());
  },
  // Day of week: Su, Mo, ...
  dd(date, dateLocale) {
    return dateLocale.days[date.getDay()].slice(0, 2);
  },
  // Day of week: Sun, Mon, ...
  ddd(date, dateLocale) {
    return dateLocale.daysShort[date.getDay()];
  },
  // Day of week: Sunday, Monday, ...
  dddd(date, dateLocale) {
    return dateLocale.days[date.getDay()];
  },
  // Day of ISO week: 1, 2, ..., 7
  E(date) {
    return date.getDay() || 7;
  },
  // Week of Year: 1 2 ... 52 53
  w(date) {
    return getWeekOfYear(date);
  },
  // Week of Year: 1st 2nd ... 52nd 53rd
  wo(date) {
    return getOrdinal(getWeekOfYear(date));
  },
  // Week of Year: 01 02 ... 52 53
  ww(date) {
    return pad(getWeekOfYear(date));
  },
  // Hour: 0, 1, ... 23
  H(date) {
    return date.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH(date) {
    return pad(date.getHours());
  },
  // Hour: 1, 2, ..., 12
  h(date) {
    const hours = date.getHours();
    return hours === 0 ? 12 : hours > 12 ? hours % 12 : hours;
  },
  // Hour: 01, 02, ..., 12
  hh(date) {
    return pad(this.h(date));
  },
  // Minute: 0, 1, ..., 59
  m(date) {
    return date.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm(date) {
    return pad(date.getMinutes());
  },
  // Second: 0, 1, ..., 59
  s(date) {
    return date.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss(date) {
    return pad(date.getSeconds());
  },
  // 1/10 of second: 0, 1, ..., 9
  S(date) {
    return Math.floor(date.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS(date) {
    return pad(Math.floor(date.getMilliseconds() / 10));
  },
  // Millisecond: 000, 001, ..., 999
  SSS(date) {
    return pad(date.getMilliseconds(), 3);
  },
  // Meridiem: AM, PM
  A(date) {
    return date.getHours() < 12 ? "AM" : "PM";
  },
  // Meridiem: am, pm
  a(date) {
    return date.getHours() < 12 ? "am" : "pm";
  },
  // Meridiem: a.m., p.m.
  aa(date) {
    return date.getHours() < 12 ? "a.m." : "p.m.";
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z(date, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset, ":");
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ(date, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset);
  },
  // Seconds timestamp: 512969520
  X(date) {
    return Math.floor(date.getTime() / 1e3);
  },
  // Milliseconds timestamp: 512969520900
  x(date) {
    return date.getTime();
  }
};
function formatDate(val, mask, dateLocale, __forcedYear, __forcedTimezoneOffset) {
  if (val !== 0 && !val || val === Infinity || val === -Infinity) {
    return;
  }
  const date = new Date(val);
  if (isNaN(date)) {
    return;
  }
  if (mask === void 0) {
    mask = defaultMask;
  }
  const locale = getDateLocale(dateLocale, Lang_default.props);
  return mask.replace(
    token,
    (match, text) => match in formatter ? formatter[match](date, locale, __forcedYear, __forcedTimezoneOffset) : text === void 0 ? match : text.split("\\]").join("]")
  );
}
function clone(date) {
  return isDate(date) === true ? new Date(date.getTime()) : date;
}
var date_default = {
  isValid,
  extractDate,
  buildDate,
  getDayOfWeek,
  getWeekOfYear,
  isBetweenDates,
  addToDate,
  subtractFromDate,
  adjustDate,
  startOfDate,
  endOfDate,
  getMaxDate,
  getMinDate,
  getDateDiff,
  getDayOfYear,
  inferDateFormat,
  getDateBetween,
  isSameDate,
  daysInMonth,
  formatDate,
  clone
};
var yearsInterval = 20;
var views = ["Calendar", "Years", "Months"];
var viewIsValid = (v) => views.includes(v);
var yearMonthValidator = (v) => /^-?[\d]+\/[0-1]\d$/.test(v);
var lineStr = " — ";
function getMonthHash(date) {
  return date.year + "/" + pad(date.month);
}
var QDate_default = createComponent({
  name: "QDate",
  props: {
    ...useDatetimeProps,
    ...useFormProps,
    ...useDarkProps,
    modelValue: {
      required: true,
      validator: (val) => typeof val === "string" || Array.isArray(val) === true || Object(val) === val || val === null
    },
    multiple: Boolean,
    range: Boolean,
    title: String,
    subtitle: String,
    mask: {
      ...useDatetimeProps.mask,
      // this mask is forced
      // when using persian calendar
      default: "YYYY/MM/DD"
    },
    defaultYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    yearsInMonthView: Boolean,
    events: [Array, Function],
    eventColor: [String, Function],
    emitImmediately: Boolean,
    options: [Array, Function],
    navigationMinYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    navigationMaxYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    noUnset: Boolean,
    firstDayOfWeek: [String, Number],
    todayBtn: Boolean,
    minimal: Boolean,
    defaultView: {
      type: String,
      default: "Calendar",
      validator: viewIsValid
    }
  },
  emits: [
    ...useDatetimeEmits,
    "rangeStart",
    "rangeEnd",
    "navigation"
  ],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = use_dark_default(props4, $q);
    const { getCache } = use_render_cache_default();
    const { tabindex, headerClass, getLocale: getLocale2, getCurrentDate } = use_datetime_default(props4, $q);
    let lastEmitValue;
    const formAttrs = useFormAttrs(props4);
    const injectFormInput = useFormInject(formAttrs);
    const blurTargetRef = ref(null);
    const innerMask = ref(getMask());
    const innerLocale = ref(getLocale2());
    const mask = computed(() => getMask());
    const locale = computed(() => getLocale2());
    const today = computed(() => getCurrentDate());
    const viewModel = ref(getViewModel(innerMask.value, innerLocale.value));
    const view = ref(props4.defaultView);
    const direction = computed(() => $q.lang.rtl === true ? "right" : "left");
    const monthDirection = ref(direction.value);
    const yearDirection = ref(direction.value);
    const year = viewModel.value.year;
    const startYear = ref(year - year % yearsInterval - (year < 0 ? yearsInterval : 0));
    const editRange = ref(null);
    const classes = computed(() => {
      const type = props4.landscape === true ? "landscape" : "portrait";
      return `q-date q-date--${type} q-date--${type}-${props4.minimal === true ? "minimal" : "standard"}` + (isDark.value === true ? " q-date--dark q-dark" : "") + (props4.bordered === true ? " q-date--bordered" : "") + (props4.square === true ? " q-date--square no-border-radius" : "") + (props4.flat === true ? " q-date--flat no-shadow" : "") + (props4.disable === true ? " disabled" : props4.readonly === true ? " q-date--readonly" : "");
    });
    const computedColor = computed(() => {
      return props4.color || "primary";
    });
    const computedTextColor = computed(() => {
      return props4.textColor || "white";
    });
    const isImmediate = computed(
      () => props4.emitImmediately === true && props4.multiple !== true && props4.range !== true
    );
    const normalizedModel = computed(() => Array.isArray(props4.modelValue) === true ? props4.modelValue : props4.modelValue !== null && props4.modelValue !== void 0 ? [props4.modelValue] : []);
    const daysModel = computed(
      () => normalizedModel.value.filter((date) => typeof date === "string").map((date) => decodeString(date, innerMask.value, innerLocale.value)).filter(
        (date) => date.dateHash !== null && date.day !== null && date.month !== null && date.year !== null
      )
    );
    const rangeModel = computed(() => {
      const fn = (date) => decodeString(date, innerMask.value, innerLocale.value);
      return normalizedModel.value.filter((date) => isObject(date) === true && date.from !== void 0 && date.to !== void 0).map((range) => ({ from: fn(range.from), to: fn(range.to) })).filter((range) => range.from.dateHash !== null && range.to.dateHash !== null && range.from.dateHash < range.to.dateHash);
    });
    const getNativeDateFn = computed(() => props4.calendar !== "persian" ? (model) => new Date(model.year, model.month - 1, model.day) : (model) => {
      const gDate = toGregorian(model.year, model.month, model.day);
      return new Date(gDate.gy, gDate.gm - 1, gDate.gd);
    });
    const encodeObjectFn = computed(() => props4.calendar === "persian" ? getDayHash : (date, mask2, locale2) => formatDate(
      new Date(
        date.year,
        date.month - 1,
        date.day,
        date.hour,
        date.minute,
        date.second,
        date.millisecond
      ),
      mask2 === void 0 ? innerMask.value : mask2,
      locale2 === void 0 ? innerLocale.value : locale2,
      date.year,
      date.timezoneOffset
    ));
    const daysInModel = computed(
      () => daysModel.value.length + rangeModel.value.reduce(
        (acc, range) => acc + 1 + getDateDiff(
          getNativeDateFn.value(range.to),
          getNativeDateFn.value(range.from)
        ),
        0
      )
    );
    const headerTitle = computed(() => {
      if (props4.title !== void 0 && props4.title !== null && props4.title.length !== 0) {
        return props4.title;
      }
      if (editRange.value !== null) {
        const model2 = editRange.value.init;
        const date2 = getNativeDateFn.value(model2);
        return innerLocale.value.daysShort[date2.getDay()] + ", " + innerLocale.value.monthsShort[model2.month - 1] + " " + model2.day + lineStr + "?";
      }
      if (daysInModel.value === 0) {
        return lineStr;
      }
      if (daysInModel.value > 1) {
        return `${daysInModel.value} ${innerLocale.value.pluralDay}`;
      }
      const model = daysModel.value[0];
      const date = getNativeDateFn.value(model);
      if (isNaN(date.valueOf()) === true) {
        return lineStr;
      }
      if (innerLocale.value.headerTitle !== void 0) {
        return innerLocale.value.headerTitle(date, model);
      }
      return innerLocale.value.daysShort[date.getDay()] + ", " + innerLocale.value.monthsShort[model.month - 1] + " " + model.day;
    });
    const minSelectedModel = computed(() => {
      const model = daysModel.value.concat(rangeModel.value.map((range) => range.from)).sort((a, b) => a.year - b.year || a.month - b.month);
      return model[0];
    });
    const maxSelectedModel = computed(() => {
      const model = daysModel.value.concat(rangeModel.value.map((range) => range.to)).sort((a, b) => b.year - a.year || b.month - a.month);
      return model[0];
    });
    const headerSubtitle = computed(() => {
      if (props4.subtitle !== void 0 && props4.subtitle !== null && props4.subtitle.length !== 0) {
        return props4.subtitle;
      }
      if (daysInModel.value === 0) {
        return lineStr;
      }
      if (daysInModel.value > 1) {
        const from = minSelectedModel.value;
        const to = maxSelectedModel.value;
        const month = innerLocale.value.monthsShort;
        return month[from.month - 1] + (from.year !== to.year ? " " + from.year + lineStr + month[to.month - 1] + " " : from.month !== to.month ? lineStr + month[to.month - 1] : "") + " " + to.year;
      }
      return daysModel.value[0].year;
    });
    const dateArrow = computed(() => {
      const val = [$q.iconSet.datetime.arrowLeft, $q.iconSet.datetime.arrowRight];
      return $q.lang.rtl === true ? val.reverse() : val;
    });
    const computedFirstDayOfWeek = computed(() => props4.firstDayOfWeek !== void 0 ? Number(props4.firstDayOfWeek) : innerLocale.value.firstDayOfWeek);
    const daysOfWeek = computed(() => {
      const days2 = innerLocale.value.daysShort, first = computedFirstDayOfWeek.value;
      return first > 0 ? days2.slice(first, 7).concat(days2.slice(0, first)) : days2;
    });
    const daysInMonth2 = computed(() => {
      const date = viewModel.value;
      return props4.calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
    });
    const evtColor = computed(() => typeof props4.eventColor === "function" ? props4.eventColor : () => props4.eventColor);
    const minNav = computed(() => {
      if (props4.navigationMinYearMonth === void 0) {
        return null;
      }
      const data = props4.navigationMinYearMonth.split("/");
      return { year: parseInt(data[0], 10), month: parseInt(data[1], 10) };
    });
    const maxNav = computed(() => {
      if (props4.navigationMaxYearMonth === void 0) {
        return null;
      }
      const data = props4.navigationMaxYearMonth.split("/");
      return { year: parseInt(data[0], 10), month: parseInt(data[1], 10) };
    });
    const navBoundaries = computed(() => {
      const data = {
        month: { prev: true, next: true },
        year: { prev: true, next: true }
      };
      if (minNav.value !== null && minNav.value.year >= viewModel.value.year) {
        data.year.prev = false;
        if (minNav.value.year === viewModel.value.year && minNav.value.month >= viewModel.value.month) {
          data.month.prev = false;
        }
      }
      if (maxNav.value !== null && maxNav.value.year <= viewModel.value.year) {
        data.year.next = false;
        if (maxNav.value.year === viewModel.value.year && maxNav.value.month <= viewModel.value.month) {
          data.month.next = false;
        }
      }
      return data;
    });
    const daysMap = computed(() => {
      const map = {};
      daysModel.value.forEach((entry) => {
        const hash = getMonthHash(entry);
        if (map[hash] === void 0) {
          map[hash] = [];
        }
        map[hash].push(entry.day);
      });
      return map;
    });
    const rangeMap = computed(() => {
      const map = {};
      rangeModel.value.forEach((entry) => {
        const hashFrom = getMonthHash(entry.from);
        const hashTo = getMonthHash(entry.to);
        if (map[hashFrom] === void 0) {
          map[hashFrom] = [];
        }
        map[hashFrom].push({
          from: entry.from.day,
          to: hashFrom === hashTo ? entry.to.day : void 0,
          range: entry
        });
        if (hashFrom < hashTo) {
          let hash;
          const { year: year2, month } = entry.from;
          const cur = month < 12 ? { year: year2, month: month + 1 } : { year: year2 + 1, month: 1 };
          while ((hash = getMonthHash(cur)) <= hashTo) {
            if (map[hash] === void 0) {
              map[hash] = [];
            }
            map[hash].push({
              from: void 0,
              to: hash === hashTo ? entry.to.day : void 0,
              range: entry
            });
            cur.month++;
            if (cur.month > 12) {
              cur.year++;
              cur.month = 1;
            }
          }
        }
      });
      return map;
    });
    const rangeView = computed(() => {
      if (editRange.value === null) {
        return;
      }
      const { init, initHash, final, finalHash } = editRange.value;
      const [from, to] = initHash <= finalHash ? [init, final] : [final, init];
      const fromHash = getMonthHash(from);
      const toHash = getMonthHash(to);
      if (fromHash !== viewMonthHash.value && toHash !== viewMonthHash.value) {
        return;
      }
      const view2 = {};
      if (fromHash === viewMonthHash.value) {
        view2.from = from.day;
        view2.includeFrom = true;
      } else {
        view2.from = 1;
      }
      if (toHash === viewMonthHash.value) {
        view2.to = to.day;
        view2.includeTo = true;
      } else {
        view2.to = daysInMonth2.value;
      }
      return view2;
    });
    const viewMonthHash = computed(() => getMonthHash(viewModel.value));
    const selectionDaysMap = computed(() => {
      const map = {};
      if (props4.options === void 0) {
        for (let i = 1; i <= daysInMonth2.value; i++) {
          map[i] = true;
        }
        return map;
      }
      const fn = typeof props4.options === "function" ? props4.options : (date) => props4.options.includes(date);
      for (let i = 1; i <= daysInMonth2.value; i++) {
        const dayHash = viewMonthHash.value + "/" + pad(i);
        map[i] = fn(dayHash);
      }
      return map;
    });
    const eventDaysMap = computed(() => {
      const map = {};
      if (props4.events === void 0) {
        for (let i = 1; i <= daysInMonth2.value; i++) {
          map[i] = false;
        }
      } else {
        const fn = typeof props4.events === "function" ? props4.events : (date) => props4.events.includes(date);
        for (let i = 1; i <= daysInMonth2.value; i++) {
          const dayHash = viewMonthHash.value + "/" + pad(i);
          map[i] = fn(dayHash) === true && evtColor.value(dayHash);
        }
      }
      return map;
    });
    const viewDays = computed(() => {
      let date, endDay;
      const { year: year2, month } = viewModel.value;
      if (props4.calendar !== "persian") {
        date = new Date(year2, month - 1, 1);
        endDay = new Date(year2, month - 1, 0).getDate();
      } else {
        const gDate = toGregorian(year2, month, 1);
        date = new Date(gDate.gy, gDate.gm - 1, gDate.gd);
        let prevJM = month - 1;
        let prevJY = year2;
        if (prevJM === 0) {
          prevJM = 12;
          prevJY--;
        }
        endDay = jalaaliMonthLength(prevJY, prevJM);
      }
      return {
        days: date.getDay() - computedFirstDayOfWeek.value - 1,
        endDay
      };
    });
    const days = computed(() => {
      const res = [];
      const { days: days2, endDay } = viewDays.value;
      const len = days2 < 0 ? days2 + 7 : days2;
      if (len < 6) {
        for (let i = endDay - len; i <= endDay; i++) {
          res.push({ i, fill: true });
        }
      }
      const index = res.length;
      for (let i = 1; i <= daysInMonth2.value; i++) {
        const day = { i, event: eventDaysMap.value[i], classes: [] };
        if (selectionDaysMap.value[i] === true) {
          day.in = true;
          day.flat = true;
        }
        res.push(day);
      }
      if (daysMap.value[viewMonthHash.value] !== void 0) {
        daysMap.value[viewMonthHash.value].forEach((day) => {
          const i = index + day - 1;
          Object.assign(res[i], {
            selected: true,
            unelevated: true,
            flat: false,
            color: computedColor.value,
            textColor: computedTextColor.value
          });
        });
      }
      if (rangeMap.value[viewMonthHash.value] !== void 0) {
        rangeMap.value[viewMonthHash.value].forEach((entry) => {
          if (entry.from !== void 0) {
            const from = index + entry.from - 1;
            const to = index + (entry.to || daysInMonth2.value) - 1;
            for (let day = from; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
            Object.assign(res[from], {
              rangeFrom: true,
              flat: false
            });
            entry.to !== void 0 && Object.assign(res[to], {
              rangeTo: true,
              flat: false
            });
          } else if (entry.to !== void 0) {
            const to = index + entry.to - 1;
            for (let day = index; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
            Object.assign(res[to], {
              flat: false,
              rangeTo: true
            });
          } else {
            const to = index + daysInMonth2.value - 1;
            for (let day = index; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
          }
        });
      }
      if (rangeView.value !== void 0) {
        const from = index + rangeView.value.from - 1;
        const to = index + rangeView.value.to - 1;
        for (let day = from; day <= to; day++) {
          res[day].color = computedColor.value;
          res[day].editRange = true;
        }
        if (rangeView.value.includeFrom === true) {
          res[from].editRangeFrom = true;
        }
        if (rangeView.value.includeTo === true) {
          res[to].editRangeTo = true;
        }
      }
      if (viewModel.value.year === today.value.year && viewModel.value.month === today.value.month) {
        res[index + today.value.day - 1].today = true;
      }
      const left = res.length % 7;
      if (left > 0) {
        const afterDays = 7 - left;
        for (let i = 1; i <= afterDays; i++) {
          res.push({ i, fill: true });
        }
      }
      res.forEach((day) => {
        let cls = "q-date__calendar-item ";
        if (day.fill === true) {
          cls += "q-date__calendar-item--fill";
        } else {
          cls += `q-date__calendar-item--${day.in === true ? "in" : "out"}`;
          if (day.range !== void 0) {
            cls += ` q-date__range${day.rangeTo === true ? "-to" : day.rangeFrom === true ? "-from" : ""}`;
          }
          if (day.editRange === true) {
            cls += ` q-date__edit-range${day.editRangeFrom === true ? "-from" : ""}${day.editRangeTo === true ? "-to" : ""}`;
          }
          if (day.range !== void 0 || day.editRange === true) {
            cls += ` text-${day.color}`;
          }
        }
        day.classes = cls;
      });
      return res;
    });
    const attributes = computed(() => props4.disable === true ? { "aria-disabled": "true" } : {});
    watch(() => props4.modelValue, (v) => {
      if (lastEmitValue === v) {
        lastEmitValue = 0;
      } else {
        const model = getViewModel(innerMask.value, innerLocale.value);
        updateViewModel(model.year, model.month, model);
      }
    });
    watch(view, () => {
      if (blurTargetRef.value !== null && proxy.$el.contains(document.activeElement) === true) {
        blurTargetRef.value.focus();
      }
    });
    watch(() => viewModel.value.year + "|" + viewModel.value.month, () => {
      emit("navigation", { year: viewModel.value.year, month: viewModel.value.month });
    });
    watch(mask, (val) => {
      updateValue2(val, innerLocale.value, "mask");
      innerMask.value = val;
    });
    watch(locale, (val) => {
      updateValue2(innerMask.value, val, "locale");
      innerLocale.value = val;
    });
    function setToday() {
      const { year: year2, month, day } = today.value;
      const date = {
        // contains more props than needed (hour, minute, second, millisecond)
        // but those aren't used in the processing of this "date" variable
        ...viewModel.value,
        // overwriting with today's date
        year: year2,
        month,
        day
      };
      const monthMap = daysMap.value[getMonthHash(date)];
      if (monthMap === void 0 || monthMap.includes(date.day) === false) {
        addToModel(date);
      }
      setCalendarTo(date.year, date.month);
    }
    function setView(viewMode) {
      if (viewIsValid(viewMode) === true) {
        view.value = viewMode;
      }
    }
    function offsetCalendar(type, descending) {
      if (["month", "year"].includes(type)) {
        const fn = type === "month" ? goToMonth : goToYear;
        fn(descending === true ? -1 : 1);
      }
    }
    function setCalendarTo(year2, month) {
      view.value = "Calendar";
      updateViewModel(year2, month);
    }
    function setEditingRange(from, to) {
      if (props4.range === false || !from) {
        editRange.value = null;
        return;
      }
      const init = Object.assign({ ...viewModel.value }, from);
      const final = to !== void 0 ? Object.assign({ ...viewModel.value }, to) : init;
      editRange.value = {
        init,
        initHash: getDayHash(init),
        final,
        finalHash: getDayHash(final)
      };
      setCalendarTo(init.year, init.month);
    }
    function getMask() {
      return props4.calendar === "persian" ? "YYYY/MM/DD" : props4.mask;
    }
    function decodeString(date, mask2, locale2) {
      return __splitDate(
        date,
        mask2,
        locale2,
        props4.calendar,
        {
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0
        }
      );
    }
    function getViewModel(mask2, locale2) {
      const model = Array.isArray(props4.modelValue) === true ? props4.modelValue : props4.modelValue ? [props4.modelValue] : [];
      if (model.length === 0) {
        return getDefaultViewModel();
      }
      const target2 = model[model.length - 1];
      const decoded = decodeString(
        target2.from !== void 0 ? target2.from : target2,
        mask2,
        locale2
      );
      return decoded.dateHash === null ? getDefaultViewModel() : decoded;
    }
    function getDefaultViewModel() {
      let year2, month;
      if (props4.defaultYearMonth !== void 0) {
        const d = props4.defaultYearMonth.split("/");
        year2 = parseInt(d[0], 10);
        month = parseInt(d[1], 10);
      } else {
        const d = today.value !== void 0 ? today.value : getCurrentDate();
        year2 = d.year;
        month = d.month;
      }
      return {
        year: year2,
        month,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        dateHash: year2 + "/" + pad(month) + "/01"
      };
    }
    function goToMonth(offset2) {
      let year2 = viewModel.value.year;
      let month = Number(viewModel.value.month) + offset2;
      if (month === 13) {
        month = 1;
        year2++;
      } else if (month === 0) {
        month = 12;
        year2--;
      }
      updateViewModel(year2, month);
      isImmediate.value === true && emitImmediately("month");
    }
    function goToYear(offset2) {
      const year2 = Number(viewModel.value.year) + offset2;
      updateViewModel(year2, viewModel.value.month);
      isImmediate.value === true && emitImmediately("year");
    }
    function setYear(year2) {
      updateViewModel(year2, viewModel.value.month);
      view.value = props4.defaultView === "Years" ? "Months" : "Calendar";
      isImmediate.value === true && emitImmediately("year");
    }
    function setMonth(month) {
      updateViewModel(viewModel.value.year, month);
      view.value = "Calendar";
      isImmediate.value === true && emitImmediately("month");
    }
    function toggleDate(date, monthHash) {
      const month = daysMap.value[monthHash];
      const fn = month !== void 0 && month.includes(date.day) === true ? removeFromModel : addToModel;
      fn(date);
    }
    function getShortDate(date) {
      return { year: date.year, month: date.month, day: date.day };
    }
    function updateViewModel(year2, month, time) {
      if (minNav.value !== null && year2 <= minNav.value.year) {
        if (month < minNav.value.month || year2 < minNav.value.year) {
          month = minNav.value.month;
        }
        year2 = minNav.value.year;
      }
      if (maxNav.value !== null && year2 >= maxNav.value.year) {
        if (month > maxNav.value.month || year2 > maxNav.value.year) {
          month = maxNav.value.month;
        }
        year2 = maxNav.value.year;
      }
      if (time !== void 0) {
        const { hour, minute, second, millisecond, timezoneOffset, timeHash } = time;
        Object.assign(viewModel.value, { hour, minute, second, millisecond, timezoneOffset, timeHash });
      }
      const newHash = year2 + "/" + pad(month) + "/01";
      if (newHash !== viewModel.value.dateHash) {
        monthDirection.value = viewModel.value.dateHash < newHash === ($q.lang.rtl !== true) ? "left" : "right";
        if (year2 !== viewModel.value.year) {
          yearDirection.value = monthDirection.value;
        }
        nextTick(() => {
          startYear.value = year2 - year2 % yearsInterval - (year2 < 0 ? yearsInterval : 0);
          Object.assign(viewModel.value, {
            year: year2,
            month,
            day: 1,
            dateHash: newHash
          });
        });
      }
    }
    function emitValue(val, action, date) {
      const value2 = val !== null && val.length === 1 && props4.multiple === false ? val[0] : val;
      lastEmitValue = value2;
      const { reason, details } = getEmitParams(action, date);
      emit("update:modelValue", value2, reason, details);
    }
    function emitImmediately(reason) {
      const date = daysModel.value[0] !== void 0 && daysModel.value[0].dateHash !== null ? { ...daysModel.value[0] } : { ...viewModel.value };
      nextTick(() => {
        date.year = viewModel.value.year;
        date.month = viewModel.value.month;
        const maxDay = props4.calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
        date.day = Math.min(Math.max(1, date.day), maxDay);
        const value2 = encodeEntry(date);
        lastEmitValue = value2;
        const { details } = getEmitParams("", date);
        emit("update:modelValue", value2, reason, details);
      });
    }
    function getEmitParams(action, date) {
      return date.from !== void 0 ? {
        reason: `${action}-range`,
        details: {
          ...getShortDate(date.target),
          from: getShortDate(date.from),
          to: getShortDate(date.to)
        }
      } : {
        reason: `${action}-day`,
        details: getShortDate(date)
      };
    }
    function encodeEntry(date, mask2, locale2) {
      return date.from !== void 0 ? { from: encodeObjectFn.value(date.from, mask2, locale2), to: encodeObjectFn.value(date.to, mask2, locale2) } : encodeObjectFn.value(date, mask2, locale2);
    }
    function addToModel(date) {
      let value2;
      if (props4.multiple === true) {
        if (date.from !== void 0) {
          const fromHash = getDayHash(date.from);
          const toHash = getDayHash(date.to);
          const days2 = daysModel.value.filter((day) => day.dateHash < fromHash || day.dateHash > toHash);
          const ranges = rangeModel.value.filter(({ from, to }) => to.dateHash < fromHash || from.dateHash > toHash);
          value2 = days2.concat(ranges).concat(date).map((entry) => encodeEntry(entry));
        } else {
          const model = normalizedModel.value.slice();
          model.push(encodeEntry(date));
          value2 = model;
        }
      } else {
        value2 = encodeEntry(date);
      }
      emitValue(value2, "add", date);
    }
    function removeFromModel(date) {
      if (props4.noUnset === true) {
        return;
      }
      let model = null;
      if (props4.multiple === true && Array.isArray(props4.modelValue) === true) {
        const val = encodeEntry(date);
        if (date.from !== void 0) {
          model = props4.modelValue.filter(
            (date2) => date2.from !== void 0 ? date2.from !== val.from && date2.to !== val.to : true
          );
        } else {
          model = props4.modelValue.filter((date2) => date2 !== val);
        }
        if (model.length === 0) {
          model = null;
        }
      }
      emitValue(model, "remove", date);
    }
    function updateValue2(mask2, locale2, reason) {
      const model = daysModel.value.concat(rangeModel.value).map((entry) => encodeEntry(entry, mask2, locale2)).filter((entry) => {
        return entry.from !== void 0 ? entry.from.dateHash !== null && entry.to.dateHash !== null : entry.dateHash !== null;
      });
      emit("update:modelValue", (props4.multiple === true ? model : model[0]) || null, reason);
    }
    function getHeader() {
      if (props4.minimal === true) return;
      return h("div", {
        class: "q-date__header " + headerClass.value
      }, [
        h("div", {
          class: "relative-position"
        }, [
          h(Transition, {
            name: "q-transition--fade"
          }, () => h("div", {
            key: "h-yr-" + headerSubtitle.value,
            class: "q-date__header-subtitle q-date__header-link " + (view.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            ...getCache("vY", {
              onClick() {
                view.value = "Years";
              },
              onKeyup(e) {
                e.keyCode === 13 && (view.value = "Years");
              }
            })
          }, [headerSubtitle.value]))
        ]),
        h("div", {
          class: "q-date__header-title relative-position flex no-wrap"
        }, [
          h("div", {
            class: "relative-position col"
          }, [
            h(Transition, {
              name: "q-transition--fade"
            }, () => h("div", {
              key: "h-sub" + headerTitle.value,
              class: "q-date__header-title-label q-date__header-link " + (view.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"),
              tabindex: tabindex.value,
              ...getCache("vC", {
                onClick() {
                  view.value = "Calendar";
                },
                onKeyup(e) {
                  e.keyCode === 13 && (view.value = "Calendar");
                }
              })
            }, [headerTitle.value]))
          ]),
          props4.todayBtn === true ? h(QBtn_default, {
            class: "q-date__header-today self-start",
            icon: $q.iconSet.datetime.today,
            flat: true,
            size: "sm",
            round: true,
            tabindex: tabindex.value,
            onClick: setToday
          }) : null
        ])
      ]);
    }
    function getNavigation({ label, type, key, dir, goTo, boundaries, cls }) {
      return [
        h("div", {
          class: "row items-center q-date__arrow"
        }, [
          h(QBtn_default, {
            round: true,
            dense: true,
            size: "sm",
            flat: true,
            icon: dateArrow.value[0],
            tabindex: tabindex.value,
            disable: boundaries.prev === false,
            ...getCache("go-#" + type, { onClick() {
              goTo(-1);
            } })
          })
        ]),
        h("div", {
          class: "relative-position overflow-hidden flex flex-center" + cls
        }, [
          h(Transition, {
            name: "q-transition--jump-" + dir
          }, () => h("div", { key }, [
            h(QBtn_default, {
              flat: true,
              dense: true,
              noCaps: true,
              label,
              tabindex: tabindex.value,
              ...getCache("view#" + type, { onClick: () => {
                view.value = type;
              } })
            })
          ]))
        ]),
        h("div", {
          class: "row items-center q-date__arrow"
        }, [
          h(QBtn_default, {
            round: true,
            dense: true,
            size: "sm",
            flat: true,
            icon: dateArrow.value[1],
            tabindex: tabindex.value,
            disable: boundaries.next === false,
            ...getCache("go+#" + type, { onClick() {
              goTo(1);
            } })
          })
        ])
      ];
    }
    const renderViews = {
      Calendar: () => [
        h("div", {
          key: "calendar-view",
          class: "q-date__view q-date__calendar"
        }, [
          h("div", {
            class: "q-date__navigation row items-center no-wrap"
          }, getNavigation({
            label: innerLocale.value.months[viewModel.value.month - 1],
            type: "Months",
            key: viewModel.value.month,
            dir: monthDirection.value,
            goTo: goToMonth,
            boundaries: navBoundaries.value.month,
            cls: " col"
          }).concat(getNavigation({
            label: viewModel.value.year,
            type: "Years",
            key: viewModel.value.year,
            dir: yearDirection.value,
            goTo: goToYear,
            boundaries: navBoundaries.value.year,
            cls: ""
          }))),
          h("div", {
            class: "q-date__calendar-weekdays row items-center no-wrap"
          }, daysOfWeek.value.map((day) => h("div", { class: "q-date__calendar-item" }, [h("div", day)]))),
          h("div", {
            class: "q-date__calendar-days-container relative-position overflow-hidden"
          }, [
            h(Transition, {
              name: "q-transition--slide-" + monthDirection.value
            }, () => h("div", {
              key: viewMonthHash.value,
              class: "q-date__calendar-days fit"
            }, days.value.map((day) => h("div", { class: day.classes }, [
              day.in === true ? h(
                QBtn_default,
                {
                  class: day.today === true ? "q-date__today" : "",
                  dense: true,
                  flat: day.flat,
                  unelevated: day.unelevated,
                  color: day.color,
                  textColor: day.textColor,
                  label: day.i,
                  tabindex: tabindex.value,
                  ...getCache("day#" + day.i, {
                    onClick: () => {
                      onDayClick(day.i);
                    },
                    onMouseover: () => {
                      onDayMouseover(day.i);
                    }
                  })
                },
                day.event !== false ? () => h("div", { class: "q-date__event bg-" + day.event }) : null
              ) : h("div", "" + day.i)
            ]))))
          ])
        ])
      ],
      Months() {
        const currentYear = viewModel.value.year === today.value.year;
        const isDisabled = (month) => {
          return minNav.value !== null && viewModel.value.year === minNav.value.year && minNav.value.month > month || maxNav.value !== null && viewModel.value.year === maxNav.value.year && maxNav.value.month < month;
        };
        const content = innerLocale.value.monthsShort.map((month, i) => {
          const active = viewModel.value.month === i + 1;
          return h("div", {
            class: "q-date__months-item flex flex-center"
          }, [
            h(QBtn_default, {
              class: currentYear === true && today.value.month === i + 1 ? "q-date__today" : null,
              flat: active !== true,
              label: month,
              unelevated: active,
              color: active === true ? computedColor.value : null,
              textColor: active === true ? computedTextColor.value : null,
              tabindex: tabindex.value,
              disable: isDisabled(i + 1),
              ...getCache("month#" + i, { onClick: () => {
                setMonth(i + 1);
              } })
            })
          ]);
        });
        props4.yearsInMonthView === true && content.unshift(
          h("div", { class: "row no-wrap full-width" }, [
            getNavigation({
              label: viewModel.value.year,
              type: "Years",
              key: viewModel.value.year,
              dir: yearDirection.value,
              goTo: goToYear,
              boundaries: navBoundaries.value.year,
              cls: " col"
            })
          ])
        );
        return h("div", {
          key: "months-view",
          class: "q-date__view q-date__months flex flex-center"
        }, content);
      },
      Years() {
        const start = startYear.value, stop2 = start + yearsInterval, years = [];
        const isDisabled = (year2) => {
          return minNav.value !== null && minNav.value.year > year2 || maxNav.value !== null && maxNav.value.year < year2;
        };
        for (let i = start; i <= stop2; i++) {
          const active = viewModel.value.year === i;
          years.push(
            h("div", {
              class: "q-date__years-item flex flex-center"
            }, [
              h(QBtn_default, {
                key: "yr" + i,
                class: today.value.year === i ? "q-date__today" : null,
                flat: !active,
                label: i,
                dense: true,
                unelevated: active,
                color: active === true ? computedColor.value : null,
                textColor: active === true ? computedTextColor.value : null,
                tabindex: tabindex.value,
                disable: isDisabled(i),
                ...getCache("yr#" + i, { onClick: () => {
                  setYear(i);
                } })
              })
            ])
          );
        }
        return h("div", {
          class: "q-date__view q-date__years flex flex-center"
        }, [
          h("div", {
            class: "col-auto"
          }, [
            h(QBtn_default, {
              round: true,
              dense: true,
              flat: true,
              icon: dateArrow.value[0],
              tabindex: tabindex.value,
              disable: isDisabled(start),
              ...getCache("y-", { onClick: () => {
                startYear.value -= yearsInterval;
              } })
            })
          ]),
          h("div", {
            class: "q-date__years-content col self-stretch row items-center"
          }, years),
          h("div", {
            class: "col-auto"
          }, [
            h(QBtn_default, {
              round: true,
              dense: true,
              flat: true,
              icon: dateArrow.value[1],
              tabindex: tabindex.value,
              disable: isDisabled(stop2),
              ...getCache("y+", { onClick: () => {
                startYear.value += yearsInterval;
              } })
            })
          ])
        ]);
      }
    };
    function onDayClick(dayIndex) {
      const day = { ...viewModel.value, day: dayIndex };
      if (props4.range === false) {
        toggleDate(day, viewMonthHash.value);
        return;
      }
      if (editRange.value === null) {
        const dayProps = days.value.find((day2) => day2.fill !== true && day2.i === dayIndex);
        if (props4.noUnset !== true && dayProps.range !== void 0) {
          removeFromModel({ target: day, from: dayProps.range.from, to: dayProps.range.to });
          return;
        }
        if (dayProps.selected === true) {
          removeFromModel(day);
          return;
        }
        const initHash = getDayHash(day);
        editRange.value = {
          init: day,
          initHash,
          final: day,
          finalHash: initHash
        };
        emit("rangeStart", getShortDate(day));
      } else {
        const initHash = editRange.value.initHash, finalHash = getDayHash(day), payload = initHash <= finalHash ? { from: editRange.value.init, to: day } : { from: day, to: editRange.value.init };
        editRange.value = null;
        addToModel(initHash === finalHash ? day : { target: day, ...payload });
        emit("rangeEnd", {
          from: getShortDate(payload.from),
          to: getShortDate(payload.to)
        });
      }
    }
    function onDayMouseover(dayIndex) {
      if (editRange.value !== null) {
        const final = { ...viewModel.value, day: dayIndex };
        Object.assign(editRange.value, {
          final,
          finalHash: getDayHash(final)
        });
      }
    }
    Object.assign(proxy, {
      setToday,
      setView,
      offsetCalendar,
      setCalendarTo,
      setEditingRange
    });
    return () => {
      const content = [
        h("div", {
          class: "q-date__content col relative-position"
        }, [
          h(Transition, {
            name: "q-transition--fade"
          }, renderViews[view.value])
        ])
      ];
      const def = hSlot(slots.default);
      def !== void 0 && content.push(
        h("div", { class: "q-date__actions" }, def)
      );
      if (props4.name !== void 0 && props4.disable !== true) {
        injectFormInput(content, "push");
      }
      return h("div", {
        class: classes.value,
        ...attributes.value
      }, [
        getHeader(),
        h("div", {
          ref: blurTargetRef,
          class: "q-date__main col column",
          tabindex: -1
        }, content)
      ]);
    };
  }
});
function use_history_default(showing, hide, hideOnRouteChange) {
  let historyEntry;
  function removeFromHistory() {
    if (historyEntry !== void 0) {
      History_default.remove(historyEntry);
      historyEntry = void 0;
    }
  }
  onBeforeUnmount(() => {
    showing.value === true && removeFromHistory();
  });
  return {
    removeFromHistory,
    addToHistory() {
      historyEntry = {
        condition: () => hideOnRouteChange.value === true,
        handler: hide
      };
      History_default.add(historyEntry);
    }
  };
}
var registered = 0;
var scrollPositionX;
var scrollPositionY;
var maxScrollTop;
var vpPendingUpdate = false;
var bodyLeft;
var bodyTop;
var href;
var closeTimer = null;
function onWheel(e) {
  if (shouldPreventScroll(e)) {
    stopAndPrevent(e);
  }
}
function shouldPreventScroll(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) {
    return true;
  }
  const path = getEventPath(e), shift = e.shiftKey && !e.deltaX, scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY), delta = shift || scrollY ? e.deltaY : e.deltaX;
  for (let index = 0; index < path.length; index++) {
    const el = path[index];
    if (hasScrollbar(el, scrollY)) {
      return scrollY ? delta < 0 && el.scrollTop === 0 ? true : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight : delta < 0 && el.scrollLeft === 0 ? true : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth;
    }
  }
  return true;
}
function onAppleScroll(e) {
  if (e.target === document) {
    document.scrollingElement.scrollTop = document.scrollingElement.scrollTop;
  }
}
function onAppleResize(evt) {
  if (vpPendingUpdate === true) {
    return;
  }
  vpPendingUpdate = true;
  requestAnimationFrame(() => {
    vpPendingUpdate = false;
    const { height: height2 } = evt.target, { clientHeight, scrollTop } = document.scrollingElement;
    if (maxScrollTop === void 0 || height2 !== window.innerHeight) {
      maxScrollTop = clientHeight - height2;
      document.scrollingElement.scrollTop = scrollTop;
    }
    if (scrollTop > maxScrollTop) {
      document.scrollingElement.scrollTop -= Math.ceil((scrollTop - maxScrollTop) / 8);
    }
  });
}
function apply(action) {
  const body = document.body, hasViewport = window.visualViewport !== void 0;
  if (action === "add") {
    const { overflowY, overflowX } = window.getComputedStyle(body);
    scrollPositionX = getHorizontalScrollPosition(window);
    scrollPositionY = getVerticalScrollPosition(window);
    bodyLeft = body.style.left;
    bodyTop = body.style.top;
    href = window.location.href;
    body.style.left = `-${scrollPositionX}px`;
    body.style.top = `-${scrollPositionY}px`;
    if (overflowX !== "hidden" && (overflowX === "scroll" || body.scrollWidth > window.innerWidth)) {
      body.classList.add("q-body--force-scrollbar-x");
    }
    if (overflowY !== "hidden" && (overflowY === "scroll" || body.scrollHeight > window.innerHeight)) {
      body.classList.add("q-body--force-scrollbar-y");
    }
    body.classList.add("q-body--prevent-scroll");
    document.qScrollPrevented = true;
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.scrollTo(0, 0);
        window.visualViewport.addEventListener("resize", onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.addEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
        window.scrollTo(0, 0);
      } else {
        window.addEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
      }
    }
  }
  if (client.is.desktop === true && client.is.mac === true) {
    window[`${action}EventListener`]("wheel", onWheel, listenOpts.notPassive);
  }
  if (action === "remove") {
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.visualViewport.removeEventListener("resize", onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.removeEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
      } else {
        window.removeEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
      }
    }
    body.classList.remove("q-body--prevent-scroll");
    body.classList.remove("q-body--force-scrollbar-x");
    body.classList.remove("q-body--force-scrollbar-y");
    document.qScrollPrevented = false;
    body.style.left = bodyLeft;
    body.style.top = bodyTop;
    if (window.location.href === href) {
      window.scrollTo(scrollPositionX, scrollPositionY);
    }
    maxScrollTop = void 0;
  }
}
function prevent_scroll_default(state) {
  let action = "add";
  if (state === true) {
    registered++;
    if (closeTimer !== null) {
      clearTimeout(closeTimer);
      closeTimer = null;
      return;
    }
    if (registered > 1) {
      return;
    }
  } else {
    if (registered === 0) {
      return;
    }
    registered--;
    if (registered > 0) {
      return;
    }
    action = "remove";
    if (client.is.ios === true && client.is.nativeMobile === true) {
      closeTimer !== null && clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        apply(action);
        closeTimer = null;
      }, 100);
      return;
    }
  }
  apply(action);
}
function use_prevent_scroll_default() {
  let currentState;
  return {
    preventBodyScroll(state) {
      if (state !== currentState && (currentState !== void 0 || state === true)) {
        currentState = state;
        prevent_scroll_default(state);
      }
    }
  };
}
var maximizedModals = 0;
var positionClass = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
};
var defaultTransitions = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
};
var QDialog_default = createComponent({
  name: "QDialog",
  inheritAttrs: false,
  props: {
    ...useModelToggleProps,
    ...useTransitionProps,
    transitionShow: String,
    // override useTransitionProps
    transitionHide: String,
    // override useTransitionProps
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    backdropFilter: String,
    position: {
      type: String,
      default: "standard",
      validator: (val) => ["standard", "top", "bottom", "left", "right"].includes(val)
    }
  },
  emits: [
    ...useModelToggleEmits,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(props4, { slots, emit, attrs }) {
    const vm2 = getCurrentInstance();
    const innerRef = ref(null);
    const showing = ref(false);
    const animating = ref(false);
    let shakeTimeout = null, refocusTarget = null, isMaximized, avoidAutoClose;
    const hideOnRouteChange = computed(
      () => props4.persistent !== true && props4.noRouteDismiss !== true && props4.seamless !== true
    );
    const { preventBodyScroll } = use_prevent_scroll_default();
    const { registerTimeout } = use_timeout_default();
    const { registerTick, removeTick } = use_tick_default();
    const { transitionProps, transitionStyle } = use_transition_default(
      props4,
      () => defaultTransitions[props4.position][0],
      () => defaultTransitions[props4.position][1]
    );
    const backdropStyle = computed(() => transitionStyle.value + (props4.backdropFilter !== void 0 ? `;backdrop-filter:${props4.backdropFilter};-webkit-backdrop-filter:${props4.backdropFilter}` : ""));
    const { showPortal, hidePortal, portalIsAccessible, renderPortal } = use_portal_default(
      vm2,
      innerRef,
      renderPortalContent,
      "dialog"
    );
    const { hide } = use_model_toggle_default({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide,
      processOnMount: true
    });
    const { addToHistory, removeFromHistory } = use_history_default(showing, hide, hideOnRouteChange);
    const classes = computed(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props4.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${props4.position} ${positionClass[props4.position]}` + (animating.value === true ? " q-dialog__inner--animating" : "") + (props4.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (props4.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (props4.square === true ? " q-dialog__inner--square" : "")
    );
    const useBackdrop = computed(() => showing.value === true && props4.seamless !== true);
    const onEvents = computed(() => props4.autoClose === true ? { onClick: onAutoClose } : {});
    const rootClasses = computed(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value === true ? "modal" : "seamless"}`,
      attrs.class
    ]);
    watch(() => props4.maximized, (state) => {
      showing.value === true && updateMaximized(state);
    });
    watch(useBackdrop, (val) => {
      preventBodyScroll(val);
      if (val === true) {
        addFocusout(onFocusChange);
        addEscapeKey(onEscapeKey);
      } else {
        removeFocusout(onFocusChange);
        removeEscapeKey(onEscapeKey);
      }
    });
    function handleShow(evt) {
      addToHistory();
      refocusTarget = props4.noRefocus === false && document.activeElement !== null ? document.activeElement : null;
      updateMaximized(props4.maximized);
      showPortal();
      animating.value = true;
      if (props4.noFocus !== true) {
        document.activeElement !== null && document.activeElement.blur();
        registerTick(focus);
      } else {
        removeTick();
      }
      registerTimeout(() => {
        if (vm2.proxy.$q.platform.is.ios === true) {
          if (props4.seamless !== true && document.activeElement) {
            const { top, bottom } = document.activeElement.getBoundingClientRect(), { innerHeight } = window, height2 = window.visualViewport !== void 0 ? window.visualViewport.height : innerHeight;
            if (top > 0 && bottom > height2 / 2) {
              document.scrollingElement.scrollTop = Math.min(
                document.scrollingElement.scrollHeight - height2,
                bottom >= innerHeight ? Infinity : Math.ceil(document.scrollingElement.scrollTop + bottom - height2 / 2)
              );
            }
            document.activeElement.scrollIntoView();
          }
          avoidAutoClose = true;
          innerRef.value.click();
          avoidAutoClose = false;
        }
        showPortal(true);
        animating.value = false;
        emit("show", evt);
      }, props4.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      removeFromHistory();
      cleanup(true);
      animating.value = true;
      hidePortal();
      if (refocusTarget !== null) {
        ((evt && evt.type.indexOf("key") === 0 ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])') : void 0) || refocusTarget).focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal(true);
        animating.value = false;
        emit("hide", evt);
      }, props4.transitionDuration);
    }
    function focus(selector) {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node === null) return;
        if (selector !== void 0) {
          const target2 = node.querySelector(selector);
          if (target2 !== null) {
            target2.focus({ preventScroll: true });
            return;
          }
        }
        if (node.contains(document.activeElement) !== true) {
          node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
          node.focus({ preventScroll: true });
        }
      });
    }
    function shake(focusTarget) {
      if (focusTarget && typeof focusTarget.focus === "function") {
        focusTarget.focus({ preventScroll: true });
      } else {
        focus();
      }
      emit("shake");
      const node = innerRef.value;
      if (node !== null) {
        node.classList.remove("q-animate--scale");
        node.classList.add("q-animate--scale");
        shakeTimeout !== null && clearTimeout(shakeTimeout);
        shakeTimeout = setTimeout(() => {
          shakeTimeout = null;
          if (innerRef.value !== null) {
            node.classList.remove("q-animate--scale");
            focus();
          }
        }, 170);
      }
    }
    function onEscapeKey() {
      if (props4.seamless !== true) {
        if (props4.persistent === true || props4.noEscDismiss === true) {
          props4.maximized !== true && props4.noShake !== true && shake();
        } else {
          emit("escapeKey");
          hide();
        }
      }
    }
    function cleanup(hiding) {
      if (shakeTimeout !== null) {
        clearTimeout(shakeTimeout);
        shakeTimeout = null;
      }
      if (hiding === true || showing.value === true) {
        updateMaximized(false);
        if (props4.seamless !== true) {
          preventBodyScroll(false);
          removeFocusout(onFocusChange);
          removeEscapeKey(onEscapeKey);
        }
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function updateMaximized(active) {
      if (active === true) {
        if (isMaximized !== true) {
          maximizedModals < 1 && document.body.classList.add("q-body--dialog");
          maximizedModals++;
          isMaximized = true;
        }
      } else if (isMaximized === true) {
        if (maximizedModals < 2) {
          document.body.classList.remove("q-body--dialog");
        }
        maximizedModals--;
        isMaximized = false;
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        hide(e);
        emit("click", e);
      }
    }
    function onBackdropClick(e) {
      if (props4.persistent !== true && props4.noBackdropDismiss !== true) {
        hide(e);
      } else if (props4.noShake !== true) {
        shake();
      }
    }
    function onFocusChange(evt) {
      if (props4.allowFocusOutside !== true && portalIsAccessible.value === true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus('[tabindex]:not([tabindex="-1"])');
      }
    }
    Object.assign(vm2.proxy, {
      // expose public methods
      focus,
      shake,
      // private but needed by QSelect
      __updateRefocusTarget(target2) {
        refocusTarget = target2 || null;
      }
    });
    onBeforeUnmount(cleanup);
    function renderPortalContent() {
      return h("div", {
        role: "dialog",
        "aria-modal": useBackdrop.value === true ? "true" : "false",
        ...attrs,
        class: rootClasses.value
      }, [
        h(Transition, {
          name: "q-transition--fade",
          appear: true
        }, () => useBackdrop.value === true ? h("div", {
          class: "q-dialog__backdrop fixed-full",
          style: backdropStyle.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: onBackdropClick
        }) : null),
        h(
          Transition,
          transitionProps.value,
          () => showing.value === true ? h("div", {
            ref: innerRef,
            class: classes.value,
            style: transitionStyle.value,
            tabindex: -1,
            ...onEvents.value
          }, hSlot(slots.default)) : null
        )
      ]);
    }
    return renderPortal;
  }
});
var duration = 150;
var QDrawer_default = createComponent({
  name: "QDrawer",
  inheritAttrs: false,
  props: {
    ...useModelToggleProps,
    ...useDarkProps,
    side: {
      type: String,
      default: "left",
      validator: (v) => ["left", "right"].includes(v)
    },
    width: {
      type: Number,
      default: 300
    },
    mini: Boolean,
    miniToOverlay: Boolean,
    miniWidth: {
      type: Number,
      default: 57
    },
    noMiniAnimation: Boolean,
    breakpoint: {
      type: Number,
      default: 1023
    },
    showIfAbove: Boolean,
    behavior: {
      type: String,
      validator: (v) => ["default", "desktop", "mobile"].includes(v),
      default: "default"
    },
    bordered: Boolean,
    elevated: Boolean,
    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  },
  emits: [
    ...useModelToggleEmits,
    "onLayout",
    "miniState"
  ],
  setup(props4, { slots, emit, attrs }) {
    const vm2 = getCurrentInstance();
    const { proxy: { $q } } = vm2;
    const isDark = use_dark_default(props4, $q);
    const { preventBodyScroll } = use_prevent_scroll_default();
    const { registerTimeout, removeTimeout } = use_timeout_default();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QDrawer needs to be child of QLayout");
      return emptyRenderFn;
    }
    let lastDesktopState, timerMini = null, layoutTotalWidthWatcher;
    const belowBreakpoint = ref(
      props4.behavior === "mobile" || props4.behavior !== "desktop" && $layout.totalWidth.value <= props4.breakpoint
    );
    const isMini = computed(
      () => props4.mini === true && belowBreakpoint.value !== true
    );
    const size2 = computed(() => isMini.value === true ? props4.miniWidth : props4.width);
    const showing = ref(
      props4.showIfAbove === true && belowBreakpoint.value === false ? true : props4.modelValue === true
    );
    const hideOnRouteChange = computed(
      () => props4.persistent !== true && (belowBreakpoint.value === true || onScreenOverlay.value === true)
    );
    function handleShow(evt, noEvent) {
      addToHistory();
      evt !== false && $layout.animate();
      applyPosition(0);
      if (belowBreakpoint.value === true) {
        const otherInstance = $layout.instances[otherSide.value];
        if (otherInstance !== void 0 && otherInstance.belowBreakpoint === true) {
          otherInstance.hide(false);
        }
        applyBackdrop(1);
        $layout.isContainer.value !== true && preventBodyScroll(true);
      } else {
        applyBackdrop(0);
        evt !== false && setScrollable(false);
      }
      registerTimeout(() => {
        evt !== false && setScrollable(true);
        noEvent !== true && emit("show", evt);
      }, duration);
    }
    function handleHide(evt, noEvent) {
      removeFromHistory();
      evt !== false && $layout.animate();
      applyBackdrop(0);
      applyPosition(stateDirection.value * size2.value);
      cleanup();
      if (noEvent !== true) {
        registerTimeout(() => {
          emit("hide", evt);
        }, duration);
      } else {
        removeTimeout();
      }
    }
    const { show, hide } = use_model_toggle_default({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide
    });
    const { addToHistory, removeFromHistory } = use_history_default(showing, hide, hideOnRouteChange);
    const instance = {
      belowBreakpoint,
      hide
    };
    const rightSide = computed(() => props4.side === "right");
    const stateDirection = computed(
      () => ($q.lang.rtl === true ? -1 : 1) * (rightSide.value === true ? 1 : -1)
    );
    const flagBackdropBg = ref(0);
    const flagPanning = ref(false);
    const flagMiniAnimate = ref(false);
    const flagContentPosition = ref(
      // starting with "hidden" for SSR
      size2.value * stateDirection.value
    );
    const otherSide = computed(() => rightSide.value === true ? "left" : "right");
    const offset2 = computed(() => showing.value === true && belowBreakpoint.value === false && props4.overlay === false ? props4.miniToOverlay === true ? props4.miniWidth : size2.value : 0);
    const fixed = computed(
      () => props4.overlay === true || props4.miniToOverlay === true || $layout.view.value.indexOf(rightSide.value ? "R" : "L") !== -1 || $q.platform.is.ios === true && $layout.isContainer.value === true
    );
    const onLayout = computed(
      () => props4.overlay === false && showing.value === true && belowBreakpoint.value === false
    );
    const onScreenOverlay = computed(
      () => props4.overlay === true && showing.value === true && belowBreakpoint.value === false
    );
    const backdropClass = computed(
      () => "fullscreen q-drawer__backdrop" + (showing.value === false && flagPanning.value === false ? " hidden" : "")
    );
    const backdropStyle = computed(() => ({
      backgroundColor: `rgba(0,0,0,${flagBackdropBg.value * 0.4})`
    }));
    const headerSlot = computed(() => rightSide.value === true ? $layout.rows.value.top[2] === "r" : $layout.rows.value.top[0] === "l");
    const footerSlot = computed(() => rightSide.value === true ? $layout.rows.value.bottom[2] === "r" : $layout.rows.value.bottom[0] === "l");
    const aboveStyle = computed(() => {
      const css2 = {};
      if ($layout.header.space === true && headerSlot.value === false) {
        if (fixed.value === true) {
          css2.top = `${$layout.header.offset}px`;
        } else if ($layout.header.space === true) {
          css2.top = `${$layout.header.size}px`;
        }
      }
      if ($layout.footer.space === true && footerSlot.value === false) {
        if (fixed.value === true) {
          css2.bottom = `${$layout.footer.offset}px`;
        } else if ($layout.footer.space === true) {
          css2.bottom = `${$layout.footer.size}px`;
        }
      }
      return css2;
    });
    const style2 = computed(() => {
      const style3 = {
        width: `${size2.value}px`,
        transform: `translateX(${flagContentPosition.value}px)`
      };
      return belowBreakpoint.value === true ? style3 : Object.assign(style3, aboveStyle.value);
    });
    const contentClass = computed(
      () => "q-drawer__content fit " + ($layout.isContainer.value !== true ? "scroll" : "overflow-auto")
    );
    const classes = computed(
      () => `q-drawer q-drawer--${props4.side}` + (flagMiniAnimate.value === true ? " q-drawer--mini-animate" : "") + (props4.bordered === true ? " q-drawer--bordered" : "") + (isDark.value === true ? " q-drawer--dark q-dark" : "") + (flagPanning.value === true ? " no-transition" : showing.value === true ? "" : " q-layout--prevent-focus") + (belowBreakpoint.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${isMini.value === true ? "mini" : "standard"}` + (fixed.value === true || onLayout.value !== true ? " fixed" : "") + (props4.overlay === true || props4.miniToOverlay === true ? " q-drawer--on-top" : "") + (headerSlot.value === true ? " q-drawer--top-padding" : ""))
    );
    const openDirective = computed(() => {
      const dir = $q.lang.rtl === true ? props4.side : otherSide.value;
      return [[
        TouchPan_default,
        onOpenPan,
        void 0,
        {
          [dir]: true,
          mouse: true
        }
      ]];
    });
    const contentCloseDirective = computed(() => {
      const dir = $q.lang.rtl === true ? otherSide.value : props4.side;
      return [[
        TouchPan_default,
        onClosePan,
        void 0,
        {
          [dir]: true,
          mouse: true
        }
      ]];
    });
    const backdropCloseDirective = computed(() => {
      const dir = $q.lang.rtl === true ? otherSide.value : props4.side;
      return [[
        TouchPan_default,
        onClosePan,
        void 0,
        {
          [dir]: true,
          mouse: true,
          mouseAllDir: true
        }
      ]];
    });
    function updateBelowBreakpoint() {
      updateLocal(belowBreakpoint, props4.behavior === "mobile" || props4.behavior !== "desktop" && $layout.totalWidth.value <= props4.breakpoint);
    }
    watch(belowBreakpoint, (val) => {
      if (val === true) {
        lastDesktopState = showing.value;
        showing.value === true && hide(false);
      } else if (props4.overlay === false && props4.behavior !== "mobile" && lastDesktopState !== false) {
        if (showing.value === true) {
          applyPosition(0);
          applyBackdrop(0);
          cleanup();
        } else {
          show(false);
        }
      }
    });
    watch(() => props4.side, (newSide, oldSide) => {
      if ($layout.instances[oldSide] === instance) {
        $layout.instances[oldSide] = void 0;
        $layout[oldSide].space = false;
        $layout[oldSide].offset = 0;
      }
      $layout.instances[newSide] = instance;
      $layout[newSide].size = size2.value;
      $layout[newSide].space = onLayout.value;
      $layout[newSide].offset = offset2.value;
    });
    watch($layout.totalWidth, () => {
      if ($layout.isContainer.value === true || document.qScrollPrevented !== true) {
        updateBelowBreakpoint();
      }
    });
    watch(
      () => props4.behavior + props4.breakpoint,
      updateBelowBreakpoint
    );
    watch($layout.isContainer, (val) => {
      showing.value === true && preventBodyScroll(val !== true);
      val === true && updateBelowBreakpoint();
    });
    watch($layout.scrollbarWidth, () => {
      applyPosition(showing.value === true ? 0 : void 0);
    });
    watch(offset2, (val) => {
      updateLayout("offset", val);
    });
    watch(onLayout, (val) => {
      emit("onLayout", val);
      updateLayout("space", val);
    });
    watch(rightSide, () => {
      applyPosition();
    });
    watch(size2, (val) => {
      applyPosition();
      updateSizeOnLayout(props4.miniToOverlay, val);
    });
    watch(() => props4.miniToOverlay, (val) => {
      updateSizeOnLayout(val, size2.value);
    });
    watch(() => $q.lang.rtl, () => {
      applyPosition();
    });
    watch(() => props4.mini, () => {
      if (props4.noMiniAnimation) return;
      if (props4.modelValue === true) {
        animateMini();
        $layout.animate();
      }
    });
    watch(isMini, (val) => {
      emit("miniState", val);
    });
    function applyPosition(position2) {
      if (position2 === void 0) {
        nextTick(() => {
          position2 = showing.value === true ? 0 : size2.value;
          applyPosition(stateDirection.value * position2);
        });
      } else {
        if ($layout.isContainer.value === true && rightSide.value === true && (belowBreakpoint.value === true || Math.abs(position2) === size2.value)) {
          position2 += stateDirection.value * $layout.scrollbarWidth.value;
        }
        flagContentPosition.value = position2;
      }
    }
    function applyBackdrop(x) {
      flagBackdropBg.value = x;
    }
    function setScrollable(v) {
      const action = v === true ? "remove" : $layout.isContainer.value !== true ? "add" : "";
      action !== "" && document.body.classList[action]("q-body--drawer-toggle");
    }
    function animateMini() {
      timerMini !== null && clearTimeout(timerMini);
      if (vm2.proxy && vm2.proxy.$el) {
        vm2.proxy.$el.classList.add("q-drawer--mini-animate");
      }
      flagMiniAnimate.value = true;
      timerMini = setTimeout(() => {
        timerMini = null;
        flagMiniAnimate.value = false;
        if (vm2 && vm2.proxy && vm2.proxy.$el) {
          vm2.proxy.$el.classList.remove("q-drawer--mini-animate");
        }
      }, 150);
    }
    function onOpenPan(evt) {
      if (showing.value !== false) {
        return;
      }
      const width3 = size2.value, position2 = between(evt.distance.x, 0, width3);
      if (evt.isFinal === true) {
        const opened = position2 >= Math.min(75, width3);
        if (opened === true) {
          show();
        } else {
          $layout.animate();
          applyBackdrop(0);
          applyPosition(stateDirection.value * width3);
        }
        flagPanning.value = false;
        return;
      }
      applyPosition(
        ($q.lang.rtl === true ? rightSide.value !== true : rightSide.value) ? Math.max(width3 - position2, 0) : Math.min(0, position2 - width3)
      );
      applyBackdrop(
        between(position2 / width3, 0, 1)
      );
      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }
    function onClosePan(evt) {
      if (showing.value !== true) {
        return;
      }
      const width3 = size2.value, dir = evt.direction === props4.side, position2 = ($q.lang.rtl === true ? dir !== true : dir) ? between(evt.distance.x, 0, width3) : 0;
      if (evt.isFinal === true) {
        const opened = Math.abs(position2) < Math.min(75, width3);
        if (opened === true) {
          $layout.animate();
          applyBackdrop(1);
          applyPosition(0);
        } else {
          hide();
        }
        flagPanning.value = false;
        return;
      }
      applyPosition(stateDirection.value * position2);
      applyBackdrop(between(1 - position2 / width3, 0, 1));
      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }
    function cleanup() {
      preventBodyScroll(false);
      setScrollable(true);
    }
    function updateLayout(prop, val) {
      $layout.update(props4.side, prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function updateSizeOnLayout(miniToOverlay, size3) {
      updateLayout("size", miniToOverlay === true ? props4.miniWidth : size3);
    }
    $layout.instances[props4.side] = instance;
    updateSizeOnLayout(props4.miniToOverlay, size2.value);
    updateLayout("space", onLayout.value);
    updateLayout("offset", offset2.value);
    if (props4.showIfAbove === true && props4.modelValue !== true && showing.value === true && props4["onUpdate:modelValue"] !== void 0) {
      emit("update:modelValue", true);
    }
    onMounted(() => {
      emit("onLayout", onLayout.value);
      emit("miniState", isMini.value);
      lastDesktopState = props4.showIfAbove === true;
      const fn = () => {
        const action = showing.value === true ? handleShow : handleHide;
        action(false, true);
      };
      if ($layout.totalWidth.value !== 0) {
        nextTick(fn);
        return;
      }
      layoutTotalWidthWatcher = watch($layout.totalWidth, () => {
        layoutTotalWidthWatcher();
        layoutTotalWidthWatcher = void 0;
        if (showing.value === false && props4.showIfAbove === true && belowBreakpoint.value === false) {
          show(false);
        } else {
          fn();
        }
      });
    });
    onBeforeUnmount(() => {
      layoutTotalWidthWatcher !== void 0 && layoutTotalWidthWatcher();
      if (timerMini !== null) {
        clearTimeout(timerMini);
        timerMini = null;
      }
      showing.value === true && cleanup();
      if ($layout.instances[props4.side] === instance) {
        $layout.instances[props4.side] = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = [];
      if (belowBreakpoint.value === true) {
        props4.noSwipeOpen === false && child.push(
          withDirectives(
            h("div", {
              key: "open",
              class: `q-drawer__opener fixed-${props4.side}`,
              "aria-hidden": "true"
            }),
            openDirective.value
          )
        );
        child.push(
          hDir(
            "div",
            {
              ref: "backdrop",
              class: backdropClass.value,
              style: backdropStyle.value,
              "aria-hidden": "true",
              onClick: hide
            },
            void 0,
            "backdrop",
            props4.noSwipeBackdrop !== true && showing.value === true,
            () => backdropCloseDirective.value
          )
        );
      }
      const mini = isMini.value === true && slots.mini !== void 0;
      const content = [
        h(
          "div",
          {
            ...attrs,
            key: "" + mini,
            // required otherwise Vue will not diff correctly
            class: [
              contentClass.value,
              attrs.class
            ]
          },
          mini === true ? slots.mini() : hSlot(slots.default)
        )
      ];
      if (props4.elevated === true && showing.value === true) {
        content.push(
          h("div", {
            class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
          })
        );
      }
      child.push(
        hDir(
          "aside",
          { ref: "content", class: classes.value, style: style2.value },
          content,
          "contentclose",
          props4.noSwipeClose !== true && belowBreakpoint.value === true,
          () => contentCloseDirective.value
        )
      );
      return h("div", { class: "q-drawer-container" }, child);
    };
  }
});
function getBlockElement(el, parent) {
  if (parent && el === parent) {
    return null;
  }
  const nodeName = el.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(nodeName) === true) {
    return el;
  }
  const style2 = window.getComputedStyle ? window.getComputedStyle(el) : el.currentStyle, display = style2.display;
  if (display === "block" || display === "table") {
    return el;
  }
  return getBlockElement(el.parentNode);
}
function isChildOf(el, parent, orSame) {
  return !el || el === document.body ? false : orSame === true && el === parent || (parent === document ? document.body : parent).contains(el.parentNode);
}
function createRange(node, chars, range) {
  if (!range) {
    range = document.createRange();
    range.selectNode(node);
    range.setStart(node, 0);
  }
  if (chars.count === 0) {
    range.setEnd(node, chars.count);
  } else if (chars.count > 0) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.length < chars.count) {
        chars.count -= node.textContent.length;
      } else {
        range.setEnd(node, chars.count);
        chars.count = 0;
      }
    } else {
      for (let lp = 0; chars.count !== 0 && lp < node.childNodes.length; lp++) {
        range = createRange(node.childNodes[lp], chars, range);
      }
    }
  }
  return range;
}
var urlRegex = /^https?:\/\//;
var Caret = class {
  constructor(el, eVm) {
    this.el = el;
    this.eVm = eVm;
    this._range = null;
  }
  get selection() {
    if (this.el) {
      const sel = document.getSelection();
      if (isChildOf(sel.anchorNode, this.el, true) && isChildOf(sel.focusNode, this.el, true)) {
        return sel;
      }
    }
    return null;
  }
  get hasSelection() {
    return this.selection !== null ? this.selection.toString().length !== 0 : false;
  }
  get range() {
    const sel = this.selection;
    if (sel !== null && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
    return this._range;
  }
  get parent() {
    const range = this.range;
    if (range !== null) {
      const node = range.startContainer;
      return node.nodeType === document.ELEMENT_NODE ? node : node.parentNode;
    }
    return null;
  }
  get blockParent() {
    const parent = this.parent;
    if (parent !== null) {
      return getBlockElement(parent, this.el);
    }
    return null;
  }
  save(range = this.range) {
    if (range !== null) {
      this._range = range;
    }
  }
  restore(range = this._range) {
    const r = document.createRange(), sel = document.getSelection();
    if (range !== null) {
      r.setStart(range.startContainer, range.startOffset);
      r.setEnd(range.endContainer, range.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    } else {
      sel.selectAllChildren(this.el);
      sel.collapseToEnd();
    }
  }
  savePosition() {
    let charCount = -1, node;
    const selection = document.getSelection(), parentEl = this.el.parentNode;
    if (selection.focusNode && isChildOf(selection.focusNode, parentEl)) {
      node = selection.focusNode;
      charCount = selection.focusOffset;
      while (node && node !== parentEl) {
        if (node !== this.el && node.previousSibling) {
          node = node.previousSibling;
          charCount += node.textContent.length;
        } else {
          node = node.parentNode;
        }
      }
    }
    this.savedPos = charCount;
  }
  restorePosition(length = 0) {
    if (this.savedPos > 0 && this.savedPos < length) {
      const selection = window.getSelection(), range = createRange(this.el, { count: this.savedPos });
      if (range) {
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
  hasParent(name2, spanLevel) {
    const el = spanLevel ? this.parent : this.blockParent;
    return el !== null ? el.nodeName.toLowerCase() === name2.toLowerCase() : false;
  }
  hasParents(list, recursive, el = this.parent) {
    if (el === null) {
      return false;
    }
    if (list.includes(el.nodeName.toLowerCase()) === true) {
      return true;
    }
    return recursive === true ? this.hasParents(list, recursive, el.parentNode) : false;
  }
  is(cmd, param) {
    if (this.selection === null) {
      return false;
    }
    switch (cmd) {
      case "formatBlock":
        return param === "DIV" && this.parent === this.el || this.hasParent(param, param === "PRE");
      case "link":
        return this.hasParent("A", true);
      case "fontSize":
        return document.queryCommandValue(cmd) === param;
      case "fontName":
        const res = document.queryCommandValue(cmd);
        return res === `"${param}"` || res === param;
      case "fullscreen":
        return this.eVm.inFullscreen.value;
      case "viewsource":
        return this.eVm.isViewingSource.value;
      case void 0:
        return false;
      default:
        const state = document.queryCommandState(cmd);
        return param !== void 0 ? state === param : state;
    }
  }
  getParentAttribute(attrib) {
    if (this.parent !== null) {
      return this.parent.getAttribute(attrib);
    }
    return null;
  }
  can(name2) {
    if (name2 === "outdent") {
      return this.hasParents(["blockquote", "li"], true);
    }
    if (name2 === "indent") {
      return this.hasParents(["li"], true);
    }
    if (name2 === "link") {
      return this.selection !== null || this.is("link");
    }
  }
  apply(cmd, param, done = noop) {
    if (cmd === "formatBlock") {
      if (["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(param) && this.is(cmd, param)) {
        cmd = "outdent";
        param = null;
      }
      if (param === "PRE" && this.is(cmd, "PRE")) {
        param = "P";
      }
    } else if (cmd === "print") {
      done();
      const win = window.open();
      win.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `);
      win.print();
      win.close();
      return;
    } else if (cmd === "link") {
      const link = this.getParentAttribute("href");
      if (link === null) {
        const selection = this.selectWord(this.selection);
        const url = selection ? selection.toString() : "";
        if (!url.length) {
          if (!this.range || !this.range.cloneContents().querySelector("img")) {
            return;
          }
        }
        this.eVm.editLinkUrl.value = urlRegex.test(url) ? url : "https://";
        document.execCommand("createLink", false, this.eVm.editLinkUrl.value);
        this.save(selection.getRangeAt(0));
      } else {
        this.eVm.editLinkUrl.value = link;
        this.range.selectNodeContents(this.parent);
        this.save();
      }
      return;
    } else if (cmd === "fullscreen") {
      this.eVm.toggleFullscreen();
      done();
      return;
    } else if (cmd === "viewsource") {
      this.eVm.isViewingSource.value = this.eVm.isViewingSource.value === false;
      this.eVm.setContent(this.eVm.props.modelValue);
      done();
      return;
    }
    document.execCommand(cmd, false, param);
    done();
  }
  selectWord(sel) {
    if (sel === null || sel.isCollapsed !== true || /* IE 11 */
    sel.modify === void 0) {
      return sel;
    }
    const range = document.createRange();
    range.setStart(sel.anchorNode, sel.anchorOffset);
    range.setEnd(sel.focusNode, sel.focusOffset);
    const direction = range.collapsed ? ["backward", "forward"] : ["forward", "backward"];
    range.detach();
    const endNode = sel.focusNode, endOffset = sel.focusOffset;
    sel.collapse(sel.anchorNode, sel.anchorOffset);
    sel.modify("move", direction[0], "character");
    sel.modify("move", direction[1], "word");
    sel.extend(endNode, endOffset);
    sel.modify("extend", direction[1], "character");
    sel.modify("extend", direction[0], "word");
    return sel;
  }
};
var QTooltip_default = createComponent({
  name: "QTooltip",
  inheritAttrs: false,
  props: {
    ...useAnchorStaticProps,
    ...useModelToggleProps,
    ...useTransitionProps,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },
    transitionShow: {
      ...useTransitionProps.transitionShow,
      default: "jump-down"
    },
    transitionHide: {
      ...useTransitionProps.transitionHide,
      default: "jump-up"
    },
    anchor: {
      type: String,
      default: "bottom middle",
      validator: validatePosition
    },
    self: {
      type: String,
      default: "top middle",
      validator: validatePosition
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: validateOffset
    },
    scrollTarget: scrollTargetProp,
    delay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    },
    persistent: Boolean
  },
  emits: [
    ...useModelToggleEmits
  ],
  setup(props4, { slots, emit, attrs }) {
    let unwatchPosition, observer;
    const vm2 = getCurrentInstance();
    const { proxy: { $q } } = vm2;
    const innerRef = ref(null);
    const showing = ref(false);
    const anchorOrigin = computed(() => parsePosition(props4.anchor, $q.lang.rtl));
    const selfOrigin = computed(() => parsePosition(props4.self, $q.lang.rtl));
    const hideOnRouteChange = computed(() => props4.persistent !== true);
    const { registerTick, removeTick } = use_tick_default();
    const { registerTimeout } = use_timeout_default();
    const { transitionProps, transitionStyle } = use_transition_default(props4);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = use_scroll_target_default(props4, configureScrollTarget);
    const { anchorEl, canShow, anchorEvents } = use_anchor_default({ showing, configureAnchorEl });
    const { show, hide } = use_model_toggle_default({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    Object.assign(anchorEvents, { delayShow, delayHide });
    const { showPortal, hidePortal, renderPortal } = use_portal_default(vm2, innerRef, renderPortalContent, "tooltip");
    if ($q.platform.is.mobile === true) {
      const clickOutsideProps = {
        anchorEl,
        innerRef,
        onClickOutside(e) {
          hide(e);
          if (e.target.classList.contains("q-dialog__backdrop")) {
            stopAndPrevent(e);
          }
          return true;
        }
      };
      const hasClickOutside = computed(
        () => (
          // it doesn't has external model
          // (null is the default value)
          props4.modelValue === null && props4.persistent !== true && showing.value === true
        )
      );
      watch(hasClickOutside, (val) => {
        const fn = val === true ? addClickOutside : removeClickOutside;
        fn(clickOutsideProps);
      });
      onBeforeUnmount(() => {
        removeClickOutside(clickOutsideProps);
      });
    }
    function handleShow(evt) {
      showPortal();
      registerTick(() => {
        observer = new MutationObserver(() => updatePosition());
        observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
        updatePosition();
        configureScrollTarget();
      });
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props4.self + "|" + props4.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      registerTimeout(() => {
        showPortal(true);
        emit("show", evt);
      }, props4.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup();
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props4.transitionDuration);
    }
    function anchorCleanup() {
      if (observer !== void 0) {
        observer.disconnect();
        observer = void 0;
      }
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      unconfigureScrollTarget();
      cleanEvt(anchorEvents, "tooltipTemp");
    }
    function updatePosition() {
      setPosition({
        targetEl: innerRef.value,
        offset: props4.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        maxHeight: props4.maxHeight,
        maxWidth: props4.maxWidth
      });
    }
    function delayShow(evt) {
      if ($q.platform.is.mobile === true) {
        clearSelection();
        document.body.classList.add("non-selectable");
        const target2 = anchorEl.value;
        const evts = ["touchmove", "touchcancel", "touchend", "click"].map((e) => [target2, e, "delayHide", "passiveCapture"]);
        addEvt(anchorEvents, "tooltipTemp", evts);
      }
      registerTimeout(() => {
        show(evt);
      }, props4.delay);
    }
    function delayHide(evt) {
      if ($q.platform.is.mobile === true) {
        cleanEvt(anchorEvents, "tooltipTemp");
        clearSelection();
        setTimeout(() => {
          document.body.classList.remove("non-selectable");
        }, 10);
      }
      registerTimeout(() => {
        hide(evt);
      }, props4.hideDelay);
    }
    function configureAnchorEl() {
      if (props4.noParentEvent === true || anchorEl.value === null) return;
      const evts = $q.platform.is.mobile === true ? [
        [anchorEl.value, "touchstart", "delayShow", "passive"]
      ] : [
        [anchorEl.value, "mouseenter", "delayShow", "passive"],
        [anchorEl.value, "mouseleave", "delayHide", "passive"]
      ];
      addEvt(anchorEvents, "anchor", evts);
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props4.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props4.scrollTarget);
        const fn = props4.noParentEvent === true ? updatePosition : hide;
        changeScrollEvent(localScrollTarget.value, fn);
      }
    }
    function getTooltipContent() {
      return showing.value === true ? h("div", {
        ...attrs,
        ref: innerRef,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          attrs.class
        ],
        style: [
          attrs.style,
          transitionStyle.value
        ],
        role: "tooltip"
      }, hSlot(slots.default)) : null;
    }
    function renderPortalContent() {
      return h(Transition, transitionProps.value, getTooltipContent);
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(vm2.proxy, { updatePosition });
    return renderPortal;
  }
});
var QItem_default = createComponent({
  name: "QItem",
  props: {
    ...useDarkProps,
    ...useRouterLinkProps,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(props4, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = use_dark_default(props4, $q);
    const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = use_router_link_default();
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    const isActionable = computed(
      () => props4.clickable === true || hasLink.value === true || props4.tag === "label"
    );
    const isClickable = computed(
      () => props4.disable !== true && isActionable.value === true
    );
    const classes = computed(
      () => "q-item q-item-type row no-wrap" + (props4.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props4.active === null ? linkClass.value : props4.active === true ? ` q-item--active${props4.activeClass !== void 0 ? ` ${props4.activeClass}` : ""}` : "") + (props4.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props4.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props4.focused === true ? " q-manual-focusable--focused" : "") : "")
    );
    const style2 = computed(() => {
      if (props4.insetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: 16 + props4.insetLevel * 56 + "px"
      };
    });
    function onClick(e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null) {
          if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          } else if (document.activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }
        navigateOnClick(e);
      }
    }
    function onKeyup2(e) {
      if (isClickable.value === true && isKeyCode(e, [13, 32]) === true) {
        stopAndPrevent(e);
        e.qKeyEvent = true;
        const evt = new MouseEvent("click", e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }
      emit("keyup", e);
    }
    function getContent() {
      const child = hUniqueSlot(slots.default, []);
      isClickable.value === true && child.unshift(
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef })
      );
      return child;
    }
    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style2.value,
        role: "listitem",
        onClick,
        onKeyup: onKeyup2
      };
      if (isClickable.value === true) {
        data.tabindex = props4.tabindex || "0";
        Object.assign(data, linkAttrs.value);
      } else if (isActionable.value === true) {
        data["aria-disabled"] = "true";
      }
      return h(
        linkTag.value,
        data,
        getContent()
      );
    };
  }
});
var QItemSection_default = createComponent({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(props4, { slots }) {
    const classes = computed(
      () => `q-item__section column q-item__section--${props4.avatar === true || props4.side === true || props4.thumbnail === true ? "side" : "main"}` + (props4.top === true ? " q-item__section--top justify-start" : " justify-center") + (props4.avatar === true ? " q-item__section--avatar" : "") + (props4.thumbnail === true ? " q-item__section--thumbnail" : "") + (props4.noWrap === true ? " q-item__section--nowrap" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
function run(e, btn, eVm) {
  if (btn.handler) {
    btn.handler(e, eVm, eVm.caret);
  } else {
    eVm.runCmd(btn.cmd, btn.param);
  }
}
function getGroup(children) {
  return h("div", { class: "q-editor__toolbar-group" }, children);
}
function getBtn(eVm, btn, clickHandler, active = false) {
  const toggled = active || (btn.type === "toggle" ? btn.toggled ? btn.toggled(eVm) : btn.cmd && eVm.caret.is(btn.cmd, btn.param) : false), child = [];
  if (btn.tip && eVm.$q.platform.is.desktop) {
    const Key = btn.key ? h("div", [
      h("small", `(CTRL + ${String.fromCharCode(btn.key)})`)
    ]) : null;
    child.push(
      h(QTooltip_default, { delay: 1e3 }, () => [
        h("div", { innerHTML: btn.tip }),
        Key
      ])
    );
  }
  return h(QBtn_default, {
    ...eVm.buttonProps.value,
    icon: btn.icon !== null ? btn.icon : void 0,
    color: toggled ? btn.toggleColor || eVm.props.toolbarToggleColor : btn.color || eVm.props.toolbarColor,
    textColor: toggled && !eVm.props.toolbarPush ? null : btn.textColor || eVm.props.toolbarTextColor,
    label: btn.label,
    disable: btn.disable ? typeof btn.disable === "function" ? btn.disable(eVm) : true : false,
    size: "sm",
    onClick(e) {
      clickHandler && clickHandler();
      run(e, btn, eVm);
    }
  }, () => child);
}
function getDropdown(eVm, btn) {
  const onlyIcons = btn.list === "only-icons";
  let label = btn.label, icon = btn.icon !== null ? btn.icon : void 0, contentClass, Items;
  function closeDropdown() {
    Dropdown.component.proxy.hide();
  }
  if (onlyIcons) {
    Items = btn.options.map((btn2) => {
      const active = btn2.type === void 0 ? eVm.caret.is(btn2.cmd, btn2.param) : false;
      if (active) {
        label = btn2.tip;
        icon = btn2.icon !== null ? btn2.icon : void 0;
      }
      return getBtn(eVm, btn2, closeDropdown, active);
    });
    contentClass = eVm.toolbarBackgroundClass.value;
    Items = [
      getGroup(Items)
    ];
  } else {
    const activeClass = eVm.props.toolbarToggleColor !== void 0 ? `text-${eVm.props.toolbarToggleColor}` : null;
    const inactiveClass = eVm.props.toolbarTextColor !== void 0 ? `text-${eVm.props.toolbarTextColor}` : null;
    const noIcons = btn.list === "no-icons";
    Items = btn.options.map((btn2) => {
      const disable = btn2.disable ? btn2.disable(eVm) : false;
      const active = btn2.type === void 0 ? eVm.caret.is(btn2.cmd, btn2.param) : false;
      if (active) {
        label = btn2.tip;
        icon = btn2.icon !== null ? btn2.icon : void 0;
      }
      const htmlTip = btn2.htmlTip;
      return h(QItem_default, {
        active,
        activeClass,
        clickable: true,
        disable,
        dense: true,
        onClick(e) {
          closeDropdown();
          eVm.contentRef.value !== null && eVm.contentRef.value.focus();
          eVm.caret.restore();
          run(e, btn2, eVm);
        }
      }, () => [
        noIcons === true ? null : h(
          QItemSection_default,
          {
            class: active ? activeClass : inactiveClass,
            side: true
          },
          () => h(QIcon_default, { name: btn2.icon !== null ? btn2.icon : void 0 })
        ),
        h(
          QItemSection_default,
          htmlTip ? () => h("div", { class: "text-no-wrap", innerHTML: btn2.htmlTip }) : btn2.tip ? () => h("div", { class: "text-no-wrap" }, btn2.tip) : void 0
        )
      ]);
    });
    contentClass = [eVm.toolbarBackgroundClass.value, inactiveClass];
  }
  const highlight = btn.highlight && label !== btn.label;
  const Dropdown = h(QBtnDropdown_default, {
    ...eVm.buttonProps.value,
    noCaps: true,
    noWrap: true,
    color: highlight ? eVm.props.toolbarToggleColor : eVm.props.toolbarColor,
    textColor: highlight && !eVm.props.toolbarPush ? null : eVm.props.toolbarTextColor,
    label: btn.fixedLabel ? btn.label : label,
    icon: btn.fixedIcon ? btn.icon !== null ? btn.icon : void 0 : icon,
    contentClass,
    onShow: (evt) => eVm.emit("dropdownShow", evt),
    onHide: (evt) => eVm.emit("dropdownHide", evt),
    onBeforeShow: (evt) => eVm.emit("dropdownBeforeShow", evt),
    onBeforeHide: (evt) => eVm.emit("dropdownBeforeHide", evt)
  }, () => Items);
  return Dropdown;
}
function getToolbar(eVm) {
  if (eVm.caret) {
    return eVm.buttons.value.filter((f) => {
      return !eVm.isViewingSource.value || f.find((fb) => fb.cmd === "viewsource");
    }).map((group) => getGroup(
      group.map((btn) => {
        if (eVm.isViewingSource.value && btn.cmd !== "viewsource") {
          return false;
        }
        if (btn.type === "slot") {
          return hSlot(eVm.slots[btn.slot]);
        }
        if (btn.type === "dropdown") {
          return getDropdown(eVm, btn);
        }
        return getBtn(eVm, btn);
      })
    ));
  }
}
function getFonts(defaultFont, defaultFontLabel, defaultFontIcon, fonts = {}) {
  const aliases = Object.keys(fonts);
  if (aliases.length === 0) {
    return {};
  }
  const def = {
    default_font: {
      cmd: "fontName",
      param: defaultFont,
      icon: defaultFontIcon,
      tip: defaultFontLabel
    }
  };
  aliases.forEach((alias) => {
    const name2 = fonts[alias];
    def[alias] = {
      cmd: "fontName",
      param: name2,
      icon: defaultFontIcon,
      tip: name2,
      htmlTip: `<font face="${name2}">${name2}</font>`
    };
  });
  return def;
}
function getLinkEditor(eVm) {
  if (eVm.caret) {
    const color = eVm.props.toolbarColor || eVm.props.toolbarTextColor;
    let link = eVm.editLinkUrl.value;
    const updateLink = () => {
      eVm.caret.restore();
      if (link !== eVm.editLinkUrl.value) {
        document.execCommand("createLink", false, link === "" ? " " : link);
      }
      eVm.editLinkUrl.value = null;
    };
    return [
      h("div", { class: `q-mx-xs text-${color}` }, `${eVm.$q.lang.editor.url}: `),
      h("input", {
        key: "qedt_btm_input",
        class: "col q-editor__link-input",
        value: link,
        onInput: (evt) => {
          stop(evt);
          link = evt.target.value;
        },
        onKeydown: (evt) => {
          if (shouldIgnoreKey(evt) === true) {
            return;
          }
          switch (evt.keyCode) {
            case 13:
              prevent(evt);
              return updateLink();
            case 27:
              prevent(evt);
              eVm.caret.restore();
              if (!eVm.editLinkUrl.value || eVm.editLinkUrl.value === "https://") {
                document.execCommand("unlink");
              }
              eVm.editLinkUrl.value = null;
              break;
          }
        }
      }),
      getGroup([
        h(QBtn_default, {
          key: "qedt_btm_rem",
          tabindex: -1,
          ...eVm.buttonProps.value,
          label: eVm.$q.lang.label.remove,
          noCaps: true,
          onClick: () => {
            eVm.caret.restore();
            document.execCommand("unlink");
            eVm.editLinkUrl.value = null;
          }
        }),
        h(QBtn_default, {
          key: "qedt_btm_upd",
          ...eVm.buttonProps.value,
          label: eVm.$q.lang.label.update,
          noCaps: true,
          onClick: updateLink
        })
      ])
    ];
  }
}
var listenerRE = /^on[A-Z]/;
function use_split_attrs_default() {
  const { attrs, vnode } = getCurrentInstance();
  const acc = {
    listeners: ref({}),
    attributes: ref({})
  };
  function update6() {
    const attributes = {};
    const listeners = {};
    for (const key in attrs) {
      if (key !== "class" && key !== "style" && listenerRE.test(key) === false) {
        attributes[key] = attrs[key];
      }
    }
    for (const key in vnode.props) {
      if (listenerRE.test(key) === true) {
        listeners[key] = vnode.props[key];
      }
    }
    acc.attributes.value = attributes;
    acc.listeners.value = listeners;
  }
  onBeforeUpdate(update6);
  update6();
  return acc;
}
var toString = Object.prototype.toString;
var hasOwn = Object.prototype.hasOwnProperty;
var notPlainObject = new Set(
  ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((name2) => "[object " + name2 + "]")
);
function isPlainObject(obj) {
  if (obj !== Object(obj) || notPlainObject.has(toString.call(obj)) === true) {
    return false;
  }
  if (obj.constructor && hasOwn.call(obj, "constructor") === false && hasOwn.call(obj.constructor.prototype, "isPrototypeOf") === false) {
    return false;
  }
  let key;
  for (key in obj) {
  }
  return key === void 0 || hasOwn.call(obj, key);
}
function extend() {
  let options, name2, src, copy, copyIsArray, clone2, target2 = arguments[0] || {}, i = 1, deep = false;
  const length = arguments.length;
  if (typeof target2 === "boolean") {
    deep = target2;
    target2 = arguments[1] || {};
    i = 2;
  }
  if (Object(target2) !== target2 && typeof target2 !== "function") {
    target2 = {};
  }
  if (length === i) {
    target2 = this;
    i--;
  }
  for (; i < length; i++) {
    if ((options = arguments[i]) !== null) {
      for (name2 in options) {
        src = target2[name2];
        copy = options[name2];
        if (target2 === copy) {
          continue;
        }
        if (deep === true && copy && ((copyIsArray = Array.isArray(copy)) || isPlainObject(copy) === true)) {
          if (copyIsArray === true) {
            clone2 = Array.isArray(src) === true ? src : [];
          } else {
            clone2 = isPlainObject(src) === true ? src : {};
          }
          target2[name2] = extend(deep, clone2, copy);
        } else if (copy !== void 0) {
          target2[name2] = copy;
        }
      }
    }
  }
  return target2;
}
var QEditor_default = createComponent({
  name: "QEditor",
  props: {
    ...useDarkProps,
    ...useFullscreenProps,
    modelValue: {
      type: String,
      required: true
    },
    readonly: Boolean,
    disable: Boolean,
    minHeight: {
      type: String,
      default: "10rem"
    },
    maxHeight: String,
    height: String,
    definitions: Object,
    fonts: Object,
    placeholder: String,
    toolbar: {
      type: Array,
      validator: (v) => v.length === 0 || v.every((group) => group.length),
      // long line on purpose for API validation purposes:
      default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]]
    },
    toolbarColor: String,
    toolbarBg: String,
    toolbarTextColor: String,
    toolbarToggleColor: {
      type: String,
      default: "primary"
    },
    toolbarOutline: Boolean,
    toolbarPush: Boolean,
    toolbarRounded: Boolean,
    paragraphTag: {
      type: String,
      validator: (v) => ["div", "p"].includes(v),
      default: "div"
    },
    contentStyle: Object,
    contentClass: [Object, Array, String],
    square: Boolean,
    flat: Boolean,
    dense: Boolean
  },
  emits: [
    ...useFullscreenEmits,
    "update:modelValue",
    "keydown",
    "click",
    "focus",
    "blur",
    "dropdownShow",
    "dropdownHide",
    "dropdownBeforeShow",
    "dropdownBeforeHide",
    "linkShow",
    "linkHide"
  ],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = use_dark_default(props4, $q);
    const { inFullscreen, toggleFullscreen } = use_fullscreen_default();
    const splitAttrs = use_split_attrs_default();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const editLinkUrl = ref(null);
    const isViewingSource = ref(false);
    const editable = computed(() => !props4.readonly && !props4.disable);
    let defaultFont, offsetBottom;
    let lastEmit = props4.modelValue;
    if (true) {
      document.execCommand("defaultParagraphSeparator", false, props4.paragraphTag);
      defaultFont = window.getComputedStyle(document.body).fontFamily;
    }
    const toolbarBackgroundClass = computed(() => props4.toolbarBg ? ` bg-${props4.toolbarBg}` : "");
    const buttonProps = computed(() => {
      const flat = props4.toolbarOutline !== true && props4.toolbarPush !== true;
      return {
        type: "a",
        flat,
        noWrap: true,
        outline: props4.toolbarOutline,
        push: props4.toolbarPush,
        rounded: props4.toolbarRounded,
        dense: true,
        color: props4.toolbarColor,
        disable: !editable.value,
        size: "sm"
      };
    });
    const buttonDef = computed(() => {
      const e = $q.lang.editor, i = $q.iconSet.editor;
      return {
        bold: { cmd: "bold", icon: i.bold, tip: e.bold, key: 66 },
        italic: { cmd: "italic", icon: i.italic, tip: e.italic, key: 73 },
        strike: { cmd: "strikeThrough", icon: i.strikethrough, tip: e.strikethrough, key: 83 },
        underline: { cmd: "underline", icon: i.underline, tip: e.underline, key: 85 },
        unordered: { cmd: "insertUnorderedList", icon: i.unorderedList, tip: e.unorderedList },
        ordered: { cmd: "insertOrderedList", icon: i.orderedList, tip: e.orderedList },
        subscript: { cmd: "subscript", icon: i.subscript, tip: e.subscript, htmlTip: "x<subscript>2</subscript>" },
        superscript: { cmd: "superscript", icon: i.superscript, tip: e.superscript, htmlTip: "x<superscript>2</superscript>" },
        link: { cmd: "link", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("link"), icon: i.hyperlink, tip: e.hyperlink, key: 76 },
        fullscreen: { cmd: "fullscreen", icon: i.toggleFullscreen, tip: e.toggleFullscreen, key: 70 },
        viewsource: { cmd: "viewsource", icon: i.viewSource, tip: e.viewSource },
        quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: i.quote, tip: e.quote, key: 81 },
        left: { cmd: "justifyLeft", icon: i.left, tip: e.left },
        center: { cmd: "justifyCenter", icon: i.center, tip: e.center },
        right: { cmd: "justifyRight", icon: i.right, tip: e.right },
        justify: { cmd: "justifyFull", icon: i.justify, tip: e.justify },
        print: { type: "no-state", cmd: "print", icon: i.print, tip: e.print, key: 80 },
        outdent: { type: "no-state", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("outdent"), cmd: "outdent", icon: i.outdent, tip: e.outdent },
        indent: { type: "no-state", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("indent"), cmd: "indent", icon: i.indent, tip: e.indent },
        removeFormat: { type: "no-state", cmd: "removeFormat", icon: i.removeFormat, tip: e.removeFormat },
        hr: { type: "no-state", cmd: "insertHorizontalRule", icon: i.hr, tip: e.hr },
        undo: { type: "no-state", cmd: "undo", icon: i.undo, tip: e.undo, key: 90 },
        redo: { type: "no-state", cmd: "redo", icon: i.redo, tip: e.redo, key: 89 },
        h1: { cmd: "formatBlock", param: "H1", icon: i.heading1 || i.heading, tip: e.heading1, htmlTip: `<h1 class="q-ma-none">${e.heading1}</h1>` },
        h2: { cmd: "formatBlock", param: "H2", icon: i.heading2 || i.heading, tip: e.heading2, htmlTip: `<h2 class="q-ma-none">${e.heading2}</h2>` },
        h3: { cmd: "formatBlock", param: "H3", icon: i.heading3 || i.heading, tip: e.heading3, htmlTip: `<h3 class="q-ma-none">${e.heading3}</h3>` },
        h4: { cmd: "formatBlock", param: "H4", icon: i.heading4 || i.heading, tip: e.heading4, htmlTip: `<h4 class="q-ma-none">${e.heading4}</h4>` },
        h5: { cmd: "formatBlock", param: "H5", icon: i.heading5 || i.heading, tip: e.heading5, htmlTip: `<h5 class="q-ma-none">${e.heading5}</h5>` },
        h6: { cmd: "formatBlock", param: "H6", icon: i.heading6 || i.heading, tip: e.heading6, htmlTip: `<h6 class="q-ma-none">${e.heading6}</h6>` },
        p: { cmd: "formatBlock", param: props4.paragraphTag, icon: i.heading, tip: e.paragraph },
        code: { cmd: "formatBlock", param: "PRE", icon: i.code, htmlTip: `<code>${e.code}</code>` },
        "size-1": { cmd: "fontSize", param: "1", icon: i.size1 || i.size, tip: e.size1, htmlTip: `<font size="1">${e.size1}</font>` },
        "size-2": { cmd: "fontSize", param: "2", icon: i.size2 || i.size, tip: e.size2, htmlTip: `<font size="2">${e.size2}</font>` },
        "size-3": { cmd: "fontSize", param: "3", icon: i.size3 || i.size, tip: e.size3, htmlTip: `<font size="3">${e.size3}</font>` },
        "size-4": { cmd: "fontSize", param: "4", icon: i.size4 || i.size, tip: e.size4, htmlTip: `<font size="4">${e.size4}</font>` },
        "size-5": { cmd: "fontSize", param: "5", icon: i.size5 || i.size, tip: e.size5, htmlTip: `<font size="5">${e.size5}</font>` },
        "size-6": { cmd: "fontSize", param: "6", icon: i.size6 || i.size, tip: e.size6, htmlTip: `<font size="6">${e.size6}</font>` },
        "size-7": { cmd: "fontSize", param: "7", icon: i.size7 || i.size, tip: e.size7, htmlTip: `<font size="7">${e.size7}</font>` }
      };
    });
    const buttons = computed(() => {
      const userDef = props4.definitions || {};
      const def = props4.definitions || props4.fonts ? extend(
        true,
        {},
        buttonDef.value,
        userDef,
        getFonts(
          defaultFont,
          $q.lang.editor.defaultFont,
          $q.iconSet.editor.font,
          props4.fonts
        )
      ) : buttonDef.value;
      return props4.toolbar.map(
        (group) => group.map((token2) => {
          if (token2.options) {
            return {
              type: "dropdown",
              icon: token2.icon,
              label: token2.label,
              size: "sm",
              dense: true,
              fixedLabel: token2.fixedLabel,
              fixedIcon: token2.fixedIcon,
              highlight: token2.highlight,
              list: token2.list,
              options: token2.options.map((item) => def[item])
            };
          }
          const obj = def[token2];
          if (obj) {
            return obj.type === "no-state" || userDef[token2] && (obj.cmd === void 0 || buttonDef.value[obj.cmd] && buttonDef.value[obj.cmd].type === "no-state") ? obj : Object.assign({ type: "toggle" }, obj);
          } else {
            return {
              type: "slot",
              slot: token2
            };
          }
        })
      );
    });
    const eVm = {
      $q,
      props: props4,
      slots,
      emit,
      // caret (will get injected after mount)
      inFullscreen,
      toggleFullscreen,
      runCmd,
      isViewingSource,
      editLinkUrl,
      toolbarBackgroundClass,
      buttonProps,
      contentRef,
      buttons,
      setContent
    };
    watch(() => props4.modelValue, (v) => {
      if (lastEmit !== v) {
        lastEmit = v;
        setContent(v, true);
      }
    });
    watch(editLinkUrl, (v) => {
      emit(`link${v ? "Show" : "Hide"}`);
    });
    const hasToolbar = computed(() => props4.toolbar && props4.toolbar.length !== 0);
    const keys = computed(() => {
      const k = {}, add = (btn) => {
        if (btn.key) {
          k[btn.key] = {
            cmd: btn.cmd,
            param: btn.param
          };
        }
      };
      buttons.value.forEach((group) => {
        group.forEach((token2) => {
          if (token2.options) {
            token2.options.forEach(add);
          } else {
            add(token2);
          }
        });
      });
      return k;
    });
    const innerStyle = computed(() => inFullscreen.value ? props4.contentStyle : [
      {
        minHeight: props4.minHeight,
        height: props4.height,
        maxHeight: props4.maxHeight
      },
      props4.contentStyle
    ]);
    const classes = computed(
      () => `q-editor q-editor--${isViewingSource.value === true ? "source" : "default"}` + (props4.disable === true ? " disabled" : "") + (inFullscreen.value === true ? " fullscreen column" : "") + (props4.square === true ? " q-editor--square no-border-radius" : "") + (props4.flat === true ? " q-editor--flat" : "") + (props4.dense === true ? " q-editor--dense" : "") + (isDark.value === true ? " q-editor--dark q-dark" : "")
    );
    const innerClass = computed(() => [
      props4.contentClass,
      "q-editor__content",
      { col: inFullscreen.value, "overflow-auto": inFullscreen.value || props4.maxHeight }
    ]);
    const attributes = computed(() => props4.disable === true ? { "aria-disabled": "true" } : {});
    function onInput() {
      if (contentRef.value !== null) {
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        const val = contentRef.value[prop];
        if (val !== props4.modelValue) {
          lastEmit = val;
          emit("update:modelValue", val);
        }
      }
    }
    function onKeydown2(e) {
      emit("keydown", e);
      if (e.ctrlKey !== true || shouldIgnoreKey(e) === true) {
        refreshToolbar();
        return;
      }
      const key = e.keyCode;
      const target2 = keys.value[key];
      if (target2 !== void 0) {
        const { cmd, param } = target2;
        stopAndPrevent(e);
        runCmd(cmd, param, false);
      }
    }
    function onClick(e) {
      refreshToolbar();
      emit("click", e);
    }
    function onBlur2(e) {
      if (contentRef.value !== null) {
        const { scrollTop, scrollHeight } = contentRef.value;
        offsetBottom = scrollHeight - scrollTop;
      }
      eVm.caret.save();
      emit("blur", e);
    }
    function onFocus(e) {
      nextTick(() => {
        if (contentRef.value !== null && offsetBottom !== void 0) {
          contentRef.value.scrollTop = contentRef.value.scrollHeight - offsetBottom;
        }
      });
      emit("focus", e);
    }
    function onFocusin(e) {
      const root = rootRef.value;
      if (root !== null && root.contains(e.target) === true && (e.relatedTarget === null || root.contains(e.relatedTarget) !== true)) {
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        eVm.caret.restorePosition(contentRef.value[prop].length);
        refreshToolbar();
      }
    }
    function onFocusout(e) {
      const root = rootRef.value;
      if (root !== null && root.contains(e.target) === true && (e.relatedTarget === null || root.contains(e.relatedTarget) !== true)) {
        eVm.caret.savePosition();
        refreshToolbar();
      }
    }
    function onPointerStart() {
      offsetBottom = void 0;
    }
    function onSelectionchange(e) {
      eVm.caret.save();
    }
    function setContent(v, restorePosition) {
      if (contentRef.value !== null) {
        if (restorePosition === true) {
          eVm.caret.savePosition();
        }
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        contentRef.value[prop] = v;
        if (restorePosition === true) {
          eVm.caret.restorePosition(contentRef.value[prop].length);
          refreshToolbar();
        }
      }
    }
    function runCmd(cmd, param, update6 = true) {
      focus();
      eVm.caret.restore();
      eVm.caret.apply(cmd, param, () => {
        focus();
        eVm.caret.save();
        if (update6) {
          refreshToolbar();
        }
      });
    }
    function refreshToolbar() {
      setTimeout(() => {
        editLinkUrl.value = null;
        proxy.$forceUpdate();
      }, 1);
    }
    function focus() {
      addFocusFn(() => {
        contentRef.value !== null && contentRef.value.focus({ preventScroll: true });
      });
    }
    function getContentEl() {
      return contentRef.value;
    }
    onMounted(() => {
      eVm.caret = proxy.caret = new Caret(contentRef.value, eVm);
      setContent(props4.modelValue);
      refreshToolbar();
      document.addEventListener("selectionchange", onSelectionchange);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("selectionchange", onSelectionchange);
    });
    Object.assign(proxy, {
      runCmd,
      refreshToolbar,
      focus,
      getContentEl
    });
    return () => {
      let toolbars;
      if (hasToolbar.value) {
        const bars = [
          h("div", {
            key: "qedt_top",
            class: "q-editor__toolbar row no-wrap scroll-x" + toolbarBackgroundClass.value
          }, getToolbar(eVm))
        ];
        editLinkUrl.value !== null && bars.push(
          h("div", {
            key: "qedt_btm",
            class: "q-editor__toolbar row no-wrap items-center scroll-x" + toolbarBackgroundClass.value
          }, getLinkEditor(eVm))
        );
        toolbars = h("div", {
          key: "toolbar_ctainer",
          class: "q-editor__toolbars-container"
        }, bars);
      }
      return h("div", {
        ref: rootRef,
        class: classes.value,
        style: { height: inFullscreen.value === true ? "100%" : null },
        ...attributes.value,
        onFocusin,
        onFocusout
      }, [
        toolbars,
        h("div", {
          ref: contentRef,
          style: innerStyle.value,
          class: innerClass.value,
          contenteditable: editable.value,
          placeholder: props4.placeholder,
          ...false ? { innerHTML: props4.modelValue } : {},
          ...splitAttrs.listeners.value,
          onInput,
          onKeydown: onKeydown2,
          onClick,
          onBlur: onBlur2,
          onFocus,
          // clean saved scroll position
          onMousedown: onPointerStart,
          onTouchstartPassive: onPointerStart
        })
      ]);
    };
  }
});
var QItemLabel_default = createComponent({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(props4, { slots }) {
    const parsedLines = computed(() => parseInt(props4.lines, 10));
    const classes = computed(
      () => "q-item__label" + (props4.overline === true ? " q-item__label--overline text-overline" : "") + (props4.caption === true ? " q-item__label--caption text-caption" : "") + (props4.header === true ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : "")
    );
    const style2 = computed(() => {
      return props4.lines !== void 0 && parsedLines.value > 1 ? {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": parsedLines.value
      } : null;
    });
    return () => h("div", {
      style: style2.value,
      class: classes.value
    }, hSlot(slots.default));
  }
});
var QSlideTransition_default = createComponent({
  name: "QSlideTransition",
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: ["show", "hide"],
  setup(props4, { slots, emit }) {
    let animating = false, doneFn, element;
    let timer2 = null, timerFallback = null, animListener, lastEvent;
    function cleanup() {
      doneFn && doneFn();
      doneFn = null;
      animating = false;
      if (timer2 !== null) {
        clearTimeout(timer2);
        timer2 = null;
      }
      if (timerFallback !== null) {
        clearTimeout(timerFallback);
        timerFallback = null;
      }
      element !== void 0 && element.removeEventListener("transitionend", animListener);
      animListener = null;
    }
    function begin(el, height2, done) {
      if (height2 !== void 0) {
        el.style.height = `${height2}px`;
      }
      el.style.transition = `height ${props4.duration}ms cubic-bezier(.25, .8, .50, 1)`;
      animating = true;
      doneFn = done;
    }
    function end(el, event) {
      el.style.overflowY = null;
      el.style.height = null;
      el.style.transition = null;
      cleanup();
      event !== lastEvent && emit(event);
    }
    function onEnter(el, done) {
      let pos = 0;
      element = el;
      if (animating === true) {
        cleanup();
        pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
      } else {
        lastEvent = "hide";
        el.style.overflowY = "hidden";
      }
      begin(el, pos, done);
      timer2 = setTimeout(() => {
        timer2 = null;
        el.style.height = `${el.scrollHeight}px`;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "show");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props4.duration * 1.1);
      }, 100);
    }
    function onLeave(el, done) {
      let pos;
      element = el;
      if (animating === true) {
        cleanup();
      } else {
        lastEvent = "show";
        el.style.overflowY = "hidden";
        pos = el.scrollHeight;
      }
      begin(el, pos, done);
      timer2 = setTimeout(() => {
        timer2 = null;
        el.style.height = 0;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "hide");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props4.duration * 1.1);
      }, 100);
    }
    onBeforeUnmount(() => {
      animating === true && cleanup();
    });
    return () => h(Transition, {
      css: false,
      appear: props4.appear,
      onEnter,
      onLeave
    }, slots.default);
  }
});
var insetMap = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
};
var margins = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
};
var QSeparator_default = createComponent({
  name: "QSeparator",
  props: {
    ...useDarkProps,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(props4) {
    const vm2 = getCurrentInstance();
    const isDark = use_dark_default(props4, vm2.proxy.$q);
    const orientation = computed(() => props4.vertical === true ? "vertical" : "horizontal");
    const orientClass = computed(() => ` q-separator--${orientation.value}`);
    const insetClass = computed(() => props4.inset !== false ? `${orientClass.value}-${insetMap[props4.inset]}` : "");
    const classes = computed(
      () => `q-separator${orientClass.value}${insetClass.value}` + (props4.color !== void 0 ? ` bg-${props4.color}` : "") + (isDark.value === true ? " q-separator--dark" : "")
    );
    const style2 = computed(() => {
      const acc = {};
      if (props4.size !== void 0) {
        acc[props4.vertical === true ? "width" : "height"] = props4.size;
      }
      if (props4.spaced !== false) {
        const size2 = props4.spaced === true ? `${margins.md}px` : props4.spaced in margins ? `${margins[props4.spaced]}px` : props4.spaced;
        const dir = props4.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
        acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size2;
      }
      return acc;
    });
    return () => h("hr", {
      class: classes.value,
      style: style2.value,
      "aria-orientation": orientation.value
    });
  }
});
var itemGroups = shallowReactive({});
var LINK_PROPS = Object.keys(useRouterLinkProps);
var QExpansionItem_default = createComponent({
  name: "QExpansionItem",
  props: {
    ...useRouterLinkProps,
    ...useModelToggleProps,
    ...useDarkProps,
    icon: String,
    label: String,
    labelLines: [Number, String],
    caption: String,
    captionLines: [Number, String],
    dense: Boolean,
    toggleAriaLabel: String,
    expandIcon: String,
    expandedIcon: String,
    expandIconClass: [Array, String, Object],
    duration: {},
    headerInsetLevel: Number,
    contentInsetLevel: Number,
    expandSeparator: Boolean,
    defaultOpened: Boolean,
    hideExpandIcon: Boolean,
    expandIconToggle: Boolean,
    switchToggleSide: Boolean,
    denseToggle: Boolean,
    group: String,
    popup: Boolean,
    headerStyle: [Array, String, Object],
    headerClass: [Array, String, Object]
  },
  emits: [
    ...useModelToggleEmits,
    "click",
    "afterShow",
    "afterHide"
  ],
  setup(props4, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = use_dark_default(props4, $q);
    const showing = ref(
      props4.modelValue !== null ? props4.modelValue : props4.defaultOpened
    );
    const blurTargetRef = ref(null);
    const targetUid = use_id_default();
    const { show, hide, toggle } = use_model_toggle_default({ showing });
    let uniqueId, exitGroup;
    const classes = computed(
      () => `q-expansion-item q-item-type q-expansion-item--${showing.value === true ? "expanded" : "collapsed"} q-expansion-item--${props4.popup === true ? "popup" : "standard"}`
    );
    const contentStyle = computed(() => {
      if (props4.contentInsetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: props4.contentInsetLevel * 56 + "px"
      };
    });
    const hasLink = computed(
      () => props4.disable !== true && (props4.href !== void 0 || props4.to !== void 0 && props4.to !== null && props4.to !== "")
    );
    const linkProps = computed(() => {
      const acc = {};
      LINK_PROPS.forEach((key) => {
        acc[key] = props4[key];
      });
      return acc;
    });
    const isClickable = computed(
      () => hasLink.value === true || props4.expandIconToggle !== true
    );
    const expansionIcon = computed(() => props4.expandedIcon !== void 0 && showing.value === true ? props4.expandedIcon : props4.expandIcon || $q.iconSet.expansionItem[props4.denseToggle === true ? "denseIcon" : "icon"]);
    const activeToggleIcon = computed(
      () => props4.disable !== true && (hasLink.value === true || props4.expandIconToggle === true)
    );
    const headerSlotScope = computed(() => ({
      expanded: showing.value === true,
      detailsId: targetUid.value,
      toggle,
      show,
      hide
    }));
    const toggleAriaAttrs = computed(() => {
      const toggleAriaLabel = props4.toggleAriaLabel !== void 0 ? props4.toggleAriaLabel : $q.lang.label[showing.value === true ? "collapse" : "expand"](props4.label);
      return {
        role: "button",
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-controls": targetUid.value,
        "aria-label": toggleAriaLabel
      };
    });
    watch(() => props4.group, (name2) => {
      exitGroup !== void 0 && exitGroup();
      name2 !== void 0 && enterGroup();
    });
    function onHeaderClick(e) {
      hasLink.value !== true && toggle(e);
      emit("click", e);
    }
    function toggleIconKeyboard(e) {
      e.keyCode === 13 && toggleIcon(e, true);
    }
    function toggleIcon(e, keyboard) {
      keyboard !== true && blurTargetRef.value !== null && blurTargetRef.value.focus();
      toggle(e);
      stopAndPrevent(e);
    }
    function onShow() {
      emit("afterShow");
    }
    function onHide() {
      emit("afterHide");
    }
    function enterGroup() {
      if (uniqueId === void 0) {
        uniqueId = uid_default();
      }
      if (showing.value === true) {
        itemGroups[props4.group] = uniqueId;
      }
      const show2 = watch(showing, (val) => {
        if (val === true) {
          itemGroups[props4.group] = uniqueId;
        } else if (itemGroups[props4.group] === uniqueId) {
          delete itemGroups[props4.group];
        }
      });
      const group = watch(
        () => itemGroups[props4.group],
        (val, oldVal) => {
          if (oldVal === uniqueId && val !== void 0 && val !== uniqueId) {
            hide();
          }
        }
      );
      exitGroup = () => {
        show2();
        group();
        if (itemGroups[props4.group] === uniqueId) {
          delete itemGroups[props4.group];
        }
        exitGroup = void 0;
      };
    }
    function getToggleIcon() {
      const data = {
        class: [
          `q-focusable relative-position cursor-pointer${props4.denseToggle === true && props4.switchToggleSide === true ? " items-end" : ""}`,
          props4.expandIconClass
        ],
        side: props4.switchToggleSide !== true,
        avatar: props4.switchToggleSide
      };
      const child = [
        h(QIcon_default, {
          class: "q-expansion-item__toggle-icon" + (props4.expandedIcon === void 0 && showing.value === true ? " q-expansion-item__toggle-icon--rotated" : ""),
          name: expansionIcon.value
        })
      ];
      if (activeToggleIcon.value === true) {
        Object.assign(data, {
          tabindex: 0,
          ...toggleAriaAttrs.value,
          onClick: toggleIcon,
          onKeyup: toggleIconKeyboard
        });
        child.unshift(
          h("div", {
            ref: blurTargetRef,
            class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
            tabindex: -1
          })
        );
      }
      return h(QItemSection_default, data, () => child);
    }
    function getHeaderChild() {
      let child;
      if (slots.header !== void 0) {
        child = [].concat(slots.header(headerSlotScope.value));
      } else {
        child = [
          h(QItemSection_default, () => [
            h(QItemLabel_default, { lines: props4.labelLines }, () => props4.label || ""),
            props4.caption ? h(QItemLabel_default, { lines: props4.captionLines, caption: true }, () => props4.caption) : null
          ])
        ];
        props4.icon && child[props4.switchToggleSide === true ? "push" : "unshift"](
          h(QItemSection_default, {
            side: props4.switchToggleSide === true,
            avatar: props4.switchToggleSide !== true
          }, () => h(QIcon_default, { name: props4.icon }))
        );
      }
      if (props4.disable !== true && props4.hideExpandIcon !== true) {
        child[props4.switchToggleSide === true ? "unshift" : "push"](
          getToggleIcon()
        );
      }
      return child;
    }
    function getHeader() {
      const data = {
        ref: "item",
        style: props4.headerStyle,
        class: props4.headerClass,
        dark: isDark.value,
        disable: props4.disable,
        dense: props4.dense,
        insetLevel: props4.headerInsetLevel
      };
      if (isClickable.value === true) {
        data.clickable = true;
        data.onClick = onHeaderClick;
        Object.assign(
          data,
          hasLink.value === true ? linkProps.value : toggleAriaAttrs.value
        );
      }
      return h(QItem_default, data, getHeaderChild);
    }
    function getTransitionChild() {
      return withDirectives(
        h("div", {
          key: "e-content",
          class: "q-expansion-item__content relative-position",
          style: contentStyle.value,
          id: targetUid.value
        }, hSlot(slots.default)),
        [[
          vShow,
          showing.value
        ]]
      );
    }
    function getContent() {
      const node = [
        getHeader(),
        h(QSlideTransition_default, {
          duration: props4.duration,
          onShow,
          onHide
        }, getTransitionChild)
      ];
      if (props4.expandSeparator === true) {
        node.push(
          h(QSeparator_default, {
            class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
            dark: isDark.value
          }),
          h(QSeparator_default, {
            class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
            dark: isDark.value
          })
        );
      }
      return node;
    }
    props4.group !== void 0 && enterGroup();
    onBeforeUnmount(() => {
      exitGroup !== void 0 && exitGroup();
    });
    return () => h("div", { class: classes.value }, [
      h("div", { class: "q-expansion-item__container relative-position" }, getContent())
    ]);
  }
});
var labelPositions = ["top", "right", "bottom", "left"];
var useFabProps = {
  type: {
    type: String,
    default: "a"
  },
  outline: Boolean,
  push: Boolean,
  flat: Boolean,
  unelevated: Boolean,
  color: String,
  textColor: String,
  glossy: Boolean,
  square: Boolean,
  padding: String,
  label: {
    type: [String, Number],
    default: ""
  },
  labelPosition: {
    type: String,
    default: "right",
    validator: (v) => labelPositions.includes(v)
  },
  externalLabel: Boolean,
  hideLabel: {
    type: Boolean
  },
  labelClass: [Array, String, Object],
  labelStyle: [Array, String, Object],
  disable: Boolean,
  tabindex: [Number, String]
};
function use_fab_default(props4, showing) {
  return {
    formClass: computed(
      () => `q-fab--form-${props4.square === true ? "square" : "rounded"}`
    ),
    stacked: computed(
      () => props4.externalLabel === false && ["top", "bottom"].includes(props4.labelPosition)
    ),
    labelProps: computed(() => {
      if (props4.externalLabel === true) {
        const hideLabel = props4.hideLabel === null ? showing.value === false : props4.hideLabel;
        return {
          action: "push",
          data: {
            class: [
              props4.labelClass,
              `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${props4.labelPosition}` + (hideLabel === true ? " q-fab__label--external-hidden" : "")
            ],
            style: props4.labelStyle
          }
        };
      }
      return {
        action: ["left", "top"].includes(props4.labelPosition) ? "unshift" : "push",
        data: {
          class: [
            props4.labelClass,
            `q-fab__label q-fab__label--internal q-fab__label--internal-${props4.labelPosition}` + (props4.hideLabel === true ? " q-fab__label--internal-hidden" : "")
          ],
          style: props4.labelStyle
        }
      };
    })
  };
}
var directions = ["up", "right", "down", "left"];
var alignValues4 = ["left", "center", "right"];
var QFab_default = createComponent({
  name: "QFab",
  props: {
    ...useFabProps,
    ...useModelToggleProps,
    icon: String,
    activeIcon: String,
    hideIcon: Boolean,
    hideLabel: {
      ...useFabProps.hideLabel,
      default: null
    },
    direction: {
      type: String,
      default: "right",
      validator: (v) => directions.includes(v)
    },
    persistent: Boolean,
    verticalActionsAlign: {
      type: String,
      default: "center",
      validator: (v) => alignValues4.includes(v)
    }
  },
  emits: useModelToggleEmits,
  setup(props4, { slots }) {
    const triggerRef = ref(null);
    const showing = ref(props4.modelValue === true);
    const targetUid = use_id_default();
    const { proxy: { $q } } = getCurrentInstance();
    const { formClass, labelProps } = use_fab_default(props4, showing);
    const hideOnRouteChange = computed(() => props4.persistent !== true);
    const { hide, toggle } = use_model_toggle_default({
      showing,
      hideOnRouteChange
    });
    const slotScope = computed(() => ({ opened: showing.value }));
    const classes = computed(
      () => `q-fab z-fab row inline justify-center q-fab--align-${props4.verticalActionsAlign} ${formClass.value}` + (showing.value === true ? " q-fab--opened" : " q-fab--closed")
    );
    const actionClass = computed(
      () => `q-fab__actions flex no-wrap inline q-fab__actions--${props4.direction} q-fab__actions--${showing.value === true ? "opened" : "closed"}`
    );
    const actionAttrs = computed(() => {
      const attrs = {
        id: targetUid.value,
        role: "menu"
      };
      if (showing.value !== true) {
        attrs["aria-hidden"] = "true";
      }
      return attrs;
    });
    const iconHolderClass = computed(
      () => `q-fab__icon-holder  q-fab__icon-holder--${showing.value === true ? "opened" : "closed"}`
    );
    function getIcon(kebab, camel) {
      const slotFn = slots[kebab];
      const classes2 = `q-fab__${kebab} absolute-full`;
      return slotFn === void 0 ? h(QIcon_default, { class: classes2, name: props4[camel] || $q.iconSet.fab[camel] }) : h("div", { class: classes2 }, slotFn(slotScope.value));
    }
    function getTriggerContent() {
      const child = [];
      props4.hideIcon !== true && child.push(
        h("div", { class: iconHolderClass.value }, [
          getIcon("icon", "icon"),
          getIcon("active-icon", "activeIcon")
        ])
      );
      if (props4.label !== "" || slots.label !== void 0) {
        child[labelProps.value.action](
          h("div", labelProps.value.data, slots.label !== void 0 ? slots.label(slotScope.value) : [props4.label])
        );
      }
      return hMergeSlot(slots.tooltip, child);
    }
    provide(fabKey, {
      showing,
      onChildClick(evt) {
        hide(evt);
        if (triggerRef.value !== null) {
          triggerRef.value.$el.focus();
        }
      }
    });
    return () => h("div", {
      class: classes.value
    }, [
      h(QBtn_default, {
        ref: triggerRef,
        class: formClass.value,
        ...props4,
        noWrap: true,
        stack: props4.stacked,
        align: void 0,
        icon: void 0,
        label: void 0,
        noCaps: true,
        fab: true,
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true",
        "aria-controls": targetUid.value,
        onClick: toggle
      }, getTriggerContent),
      h("div", { class: actionClass.value, ...actionAttrs.value }, hSlot(slots.default))
    ]);
  }
});
var anchorMap = {
  start: "self-end",
  center: "self-center",
  end: "self-start"
};
var anchorValues = Object.keys(anchorMap);
var QFabAction_default = createComponent({
  name: "QFabAction",
  props: {
    ...useFabProps,
    icon: {
      type: String,
      default: ""
    },
    anchor: {
      type: String,
      validator: (v) => anchorValues.includes(v)
    },
    to: [String, Object],
    replace: Boolean
  },
  emits: ["click"],
  setup(props4, { slots, emit }) {
    const $fab = inject(fabKey, () => ({
      showing: { value: true },
      onChildClick: noop
    }));
    const { formClass, labelProps } = use_fab_default(props4, $fab.showing);
    const classes = computed(() => {
      const align = anchorMap[props4.anchor];
      return formClass.value + (align !== void 0 ? ` ${align}` : "");
    });
    const isDisabled = computed(
      () => props4.disable === true || $fab.showing.value !== true
    );
    function click(e) {
      $fab.onChildClick(e);
      emit("click", e);
    }
    function getContent() {
      const child = [];
      if (slots.icon !== void 0) {
        child.push(slots.icon());
      } else if (props4.icon !== "") {
        child.push(
          h(QIcon_default, { name: props4.icon })
        );
      }
      if (props4.label !== "" || slots.label !== void 0) {
        child[labelProps.value.action](
          h("div", labelProps.value.data, slots.label !== void 0 ? slots.label() : [props4.label])
        );
      }
      return hMergeSlot(slots.default, child);
    }
    const vm2 = getCurrentInstance();
    Object.assign(vm2.proxy, { click });
    return () => h(QBtn_default, {
      class: classes.value,
      ...props4,
      noWrap: true,
      stack: props4.stacked,
      icon: void 0,
      label: void 0,
      noCaps: true,
      fabMini: true,
      disable: isDisabled.value,
      onClick: click
    }, getContent);
  }
});
function use_form_child_default({ validate, resetValidation, requiresQForm }) {
  const $form = inject(formKey, false);
  if ($form !== false) {
    const { props: props4, proxy } = getCurrentInstance();
    Object.assign(proxy, { validate, resetValidation });
    watch(() => props4.disable, (val) => {
      if (val === true) {
        typeof resetValidation === "function" && resetValidation();
        $form.unbindComponent(proxy);
      } else {
        $form.bindComponent(proxy);
      }
    });
    onMounted(() => {
      props4.disable !== true && $form.bindComponent(proxy);
    });
    onBeforeUnmount(() => {
      props4.disable !== true && $form.unbindComponent(proxy);
    });
  } else if (requiresQForm === true) {
    console.error("Parent QForm not found on useFormChild()!");
  }
}
var lazyRulesValues = [true, false, "ondemand"];
var useValidateProps = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    default: false,
    // statement unneeded but avoids future vue implementation changes
    validator: (v) => lazyRulesValues.includes(v)
  }
};
function use_validate_default(focused, innerLoading) {
  const { props: props4, proxy } = getCurrentInstance();
  const innerError = ref(false);
  const innerErrorMessage = ref(null);
  const isDirtyModel = ref(false);
  use_form_child_default({ validate, resetValidation });
  let validateIndex = 0, unwatchRules;
  const hasRules = computed(
    () => props4.rules !== void 0 && props4.rules !== null && props4.rules.length !== 0
  );
  const canDebounceValidate = computed(() => props4.disable !== true && hasRules.value === true && innerLoading.value === false);
  const hasError = computed(
    () => props4.error === true || innerError.value === true
  );
  const errorMessage = computed(() => typeof props4.errorMessage === "string" && props4.errorMessage.length !== 0 ? props4.errorMessage : innerErrorMessage.value);
  watch(() => props4.modelValue, () => {
    isDirtyModel.value = true;
    if (canDebounceValidate.value === true && props4.lazyRules === false) {
      debouncedValidate();
    }
  });
  function onRulesChange() {
    if (props4.lazyRules !== "ondemand" && canDebounceValidate.value === true && isDirtyModel.value === true) {
      debouncedValidate();
    }
  }
  watch(() => props4.reactiveRules, (val) => {
    if (val === true) {
      if (unwatchRules === void 0) {
        unwatchRules = watch(() => props4.rules, onRulesChange, { immediate: true, deep: true });
      }
    } else if (unwatchRules !== void 0) {
      unwatchRules();
      unwatchRules = void 0;
    }
  }, { immediate: true });
  watch(() => props4.lazyRules, onRulesChange);
  watch(focused, (val) => {
    if (val === true) {
      isDirtyModel.value = true;
    } else if (canDebounceValidate.value === true && props4.lazyRules !== "ondemand") {
      debouncedValidate();
    }
  });
  function resetValidation() {
    validateIndex++;
    innerLoading.value = false;
    isDirtyModel.value = false;
    innerError.value = false;
    innerErrorMessage.value = null;
    debouncedValidate.cancel();
  }
  function validate(val = props4.modelValue) {
    if (props4.disable === true || hasRules.value === false) {
      return true;
    }
    const index = ++validateIndex;
    const setDirty = innerLoading.value !== true ? () => {
      isDirtyModel.value = true;
    } : () => {
    };
    const update6 = (err, msg) => {
      err === true && setDirty();
      innerError.value = err;
      innerErrorMessage.value = msg || null;
      innerLoading.value = false;
    };
    const promises = [];
    for (let i = 0; i < props4.rules.length; i++) {
      const rule = props4.rules[i];
      let res;
      if (typeof rule === "function") {
        res = rule(val, testPattern);
      } else if (typeof rule === "string" && testPattern[rule] !== void 0) {
        res = testPattern[rule](val);
      }
      if (res === false || typeof res === "string") {
        update6(true, res);
        return false;
      } else if (res !== true && res !== void 0) {
        promises.push(res);
      }
    }
    if (promises.length === 0) {
      update6(false);
      return true;
    }
    innerLoading.value = true;
    return Promise.all(promises).then(
      (res) => {
        if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
          index === validateIndex && update6(false);
          return true;
        }
        const msg = res.find((r) => r === false || typeof r === "string");
        index === validateIndex && update6(msg !== void 0, msg);
        return msg === void 0;
      },
      (e) => {
        if (index === validateIndex) {
          console.error(e);
          update6(true);
        }
        return false;
      }
    );
  }
  const debouncedValidate = debounce_default(validate, 0);
  onBeforeUnmount(() => {
    unwatchRules !== void 0 && unwatchRules();
    debouncedValidate.cancel();
  });
  Object.assign(proxy, { resetValidation, validate });
  injectProp(proxy, "hasError", () => hasError.value);
  return {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    validate,
    resetValidation
  };
}
function fieldValueIsFilled(val) {
  return val !== void 0 && val !== null && ("" + val).length !== 0;
}
var useNonInputFieldProps = {
  ...useDarkProps,
  ...useValidateProps,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String
};
var useFieldProps = {
  ...useNonInputFieldProps,
  maxlength: [Number, String]
};
var useFieldEmits = ["update:modelValue", "clear", "focus", "blur"];
function useFieldState({ requiredForAttr = true, tagProp, changeEvent = false } = {}) {
  const { props: props4, proxy } = getCurrentInstance();
  const isDark = use_dark_default(props4, proxy.$q);
  const targetUid = use_id_default({
    required: requiredForAttr,
    getValue: () => props4.for
  });
  return {
    requiredForAttr,
    changeEvent,
    tag: tagProp === true ? computed(() => props4.tag) : { value: "label" },
    isDark,
    editable: computed(
      () => props4.disable !== true && props4.readonly !== true
    ),
    innerLoading: ref(false),
    focused: ref(false),
    hasPopupOpen: false,
    splitAttrs: use_split_attrs_default(),
    targetUid,
    rootRef: ref(null),
    targetRef: ref(null),
    controlRef: ref(null)
    /**
         * user supplied additionals:
    
         * innerValue - computed
         * floatingLabel - computed
         * inputRef - computed
    
         * fieldClass - computed
         * hasShadow - computed
    
         * controlEvents - Object with fn(e)
    
         * getControl - fn
         * getInnerAppend - fn
         * getControlChild - fn
         * getShadowControl - fn
         * showPopup - fn
         */
  };
}
function use_field_default(state) {
  const { props: props4, emit, slots, attrs, proxy } = getCurrentInstance();
  const { $q } = proxy;
  let focusoutTimer = null;
  if (state.hasValue === void 0) {
    state.hasValue = computed(() => fieldValueIsFilled(props4.modelValue));
  }
  if (state.emitValue === void 0) {
    state.emitValue = (value2) => {
      emit("update:modelValue", value2);
    };
  }
  if (state.controlEvents === void 0) {
    state.controlEvents = {
      onFocusin: onControlFocusin,
      onFocusout: onControlFocusout
    };
  }
  Object.assign(state, {
    clearValue,
    onControlFocusin,
    onControlFocusout,
    focus
  });
  if (state.computedCounter === void 0) {
    state.computedCounter = computed(() => {
      if (props4.counter !== false) {
        const len = typeof props4.modelValue === "string" || typeof props4.modelValue === "number" ? ("" + props4.modelValue).length : Array.isArray(props4.modelValue) === true ? props4.modelValue.length : 0;
        const max = props4.maxlength !== void 0 ? props4.maxlength : props4.maxValues;
        return len + (max !== void 0 ? " / " + max : "");
      }
    });
  }
  const {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    resetValidation
  } = use_validate_default(state.focused, state.innerLoading);
  const floatingLabel = state.floatingLabel !== void 0 ? computed(() => props4.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true) : computed(() => props4.stackLabel === true || state.focused.value === true || state.hasValue.value === true);
  const shouldRenderBottom = computed(
    () => props4.bottomSlots === true || props4.hint !== void 0 || hasRules.value === true || props4.counter === true || props4.error !== null
  );
  const styleType = computed(() => {
    if (props4.filled === true) {
      return "filled";
    }
    if (props4.outlined === true) {
      return "outlined";
    }
    if (props4.borderless === true) {
      return "borderless";
    }
    if (props4.standout) {
      return "standout";
    }
    return "standard";
  });
  const classes = computed(
    () => `q-field row no-wrap items-start q-field--${styleType.value}` + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props4.rounded === true ? " q-field--rounded" : "") + (props4.square === true ? " q-field--square" : "") + (floatingLabel.value === true ? " q-field--float" : "") + (hasLabel.value === true ? " q-field--labeled" : "") + (props4.dense === true ? " q-field--dense" : "") + (props4.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (state.isDark.value === true ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value === true ? " q-field--focused" : "") + (hasError.value === true ? " q-field--error" : "") + (hasError.value === true || state.focused.value === true ? " q-field--highlighted" : "") + (props4.hideBottomSpace !== true && shouldRenderBottom.value === true ? " q-field--with-bottom" : "") + (props4.disable === true ? " q-field--disabled" : props4.readonly === true ? " q-field--readonly" : "")
  );
  const contentClass = computed(
    () => "q-field__control relative-position row no-wrap" + (props4.bgColor !== void 0 ? ` bg-${props4.bgColor}` : "") + (hasError.value === true ? " text-negative" : typeof props4.standout === "string" && props4.standout.length !== 0 && state.focused.value === true ? ` ${props4.standout}` : props4.color !== void 0 ? ` text-${props4.color}` : "")
  );
  const hasLabel = computed(
    () => props4.labelSlot === true || props4.label !== void 0
  );
  const labelClass = computed(
    () => "q-field__label no-pointer-events absolute ellipsis" + (props4.labelColor !== void 0 && hasError.value !== true ? ` text-${props4.labelColor}` : "")
  );
  const controlSlotScope = computed(() => ({
    id: state.targetUid.value,
    editable: state.editable.value,
    focused: state.focused.value,
    floatingLabel: floatingLabel.value,
    modelValue: props4.modelValue,
    emitValue: state.emitValue
  }));
  const attributes = computed(() => {
    const acc = {};
    if (state.targetUid.value) {
      acc.for = state.targetUid.value;
    }
    if (props4.disable === true) {
      acc["aria-disabled"] = "true";
    }
    return acc;
  });
  function focusHandler() {
    const el = document.activeElement;
    let target2 = state.targetRef !== void 0 && state.targetRef.value;
    if (target2 && (el === null || el.id !== state.targetUid.value)) {
      target2.hasAttribute("tabindex") === true || (target2 = target2.querySelector("[tabindex]"));
      if (target2 && target2 !== el) {
        target2.focus({ preventScroll: true });
      }
    }
  }
  function focus() {
    addFocusFn(focusHandler);
  }
  function blur() {
    removeFocusFn(focusHandler);
    const el = document.activeElement;
    if (el !== null && state.rootRef.value.contains(el)) {
      el.blur();
    }
  }
  function onControlFocusin(e) {
    if (focusoutTimer !== null) {
      clearTimeout(focusoutTimer);
      focusoutTimer = null;
    }
    if (state.editable.value === true && state.focused.value === false) {
      state.focused.value = true;
      emit("focus", e);
    }
  }
  function onControlFocusout(e, then) {
    focusoutTimer !== null && clearTimeout(focusoutTimer);
    focusoutTimer = setTimeout(() => {
      focusoutTimer = null;
      if (document.hasFocus() === true && (state.hasPopupOpen === true || state.controlRef === void 0 || state.controlRef.value === null || state.controlRef.value.contains(document.activeElement) !== false)) {
        return;
      }
      if (state.focused.value === true) {
        state.focused.value = false;
        emit("blur", e);
      }
      then !== void 0 && then();
    });
  }
  function clearValue(e) {
    stopAndPrevent(e);
    if ($q.platform.is.mobile !== true) {
      const el = state.targetRef !== void 0 && state.targetRef.value || state.rootRef.value;
      el.focus();
    } else if (state.rootRef.value.contains(document.activeElement) === true) {
      document.activeElement.blur();
    }
    if (props4.type === "file") {
      state.inputRef.value.value = null;
    }
    emit("update:modelValue", null);
    state.changeEvent === true && emit("change", null);
    emit("clear", props4.modelValue);
    nextTick(() => {
      const isDirty = isDirtyModel.value;
      resetValidation();
      isDirtyModel.value = isDirty;
    });
  }
  function onClearableKeyup(evt) {
    [13, 32].includes(evt.keyCode) && clearValue(evt);
  }
  function getContent() {
    const node = [];
    slots.prepend !== void 0 && node.push(
      h("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: prevent
      }, slots.prepend())
    );
    node.push(
      h("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, getControlContainer())
    );
    hasError.value === true && props4.noErrorIcon === false && node.push(
      getInnerAppendNode("error", [
        h(QIcon_default, { name: $q.iconSet.field.error, color: "negative" })
      ])
    );
    if (props4.loading === true || state.innerLoading.value === true) {
      node.push(
        getInnerAppendNode(
          "inner-loading-append",
          slots.loading !== void 0 ? slots.loading() : [h(QSpinner_default, { color: props4.color })]
        )
      );
    } else if (props4.clearable === true && state.hasValue.value === true && state.editable.value === true) {
      node.push(
        getInnerAppendNode("inner-clearable-append", [
          h(QIcon_default, {
            class: "q-field__focusable-action",
            name: props4.clearIcon || $q.iconSet.field.clear,
            tabindex: 0,
            role: "button",
            "aria-hidden": "false",
            "aria-label": $q.lang.label.clear,
            onKeyup: onClearableKeyup,
            onClick: clearValue
          })
        ])
      );
    }
    slots.append !== void 0 && node.push(
      h("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: prevent
      }, slots.append())
    );
    state.getInnerAppend !== void 0 && node.push(
      getInnerAppendNode("inner-append", state.getInnerAppend())
    );
    state.getControlChild !== void 0 && node.push(
      state.getControlChild()
    );
    return node;
  }
  function getControlContainer() {
    const node = [];
    props4.prefix !== void 0 && props4.prefix !== null && node.push(
      h("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, props4.prefix)
    );
    if (state.getShadowControl !== void 0 && state.hasShadow.value === true) {
      node.push(
        state.getShadowControl()
      );
    }
    if (state.getControl !== void 0) {
      node.push(state.getControl());
    } else if (slots.rawControl !== void 0) {
      node.push(slots.rawControl());
    } else if (slots.control !== void 0) {
      node.push(
        h("div", {
          ref: state.targetRef,
          class: "q-field__native row",
          tabindex: -1,
          ...state.splitAttrs.attributes.value,
          "data-autofocus": props4.autofocus === true || void 0
        }, slots.control(controlSlotScope.value))
      );
    }
    hasLabel.value === true && node.push(
      h("div", {
        class: labelClass.value
      }, hSlot(slots.label, props4.label))
    );
    props4.suffix !== void 0 && props4.suffix !== null && node.push(
      h("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, props4.suffix)
    );
    return node.concat(hSlot(slots.default));
  }
  function getBottom() {
    let msg, key;
    if (hasError.value === true) {
      if (errorMessage.value !== null) {
        msg = [h("div", { role: "alert" }, errorMessage.value)];
        key = `q--slot-error-${errorMessage.value}`;
      } else {
        msg = hSlot(slots.error);
        key = "q--slot-error";
      }
    } else if (props4.hideHint !== true || state.focused.value === true) {
      if (props4.hint !== void 0) {
        msg = [h("div", props4.hint)];
        key = `q--slot-hint-${props4.hint}`;
      } else {
        msg = hSlot(slots.hint);
        key = "q--slot-hint";
      }
    }
    const hasCounter = props4.counter === true || slots.counter !== void 0;
    if (props4.hideBottomSpace === true && hasCounter === false && msg === void 0) {
      return;
    }
    const main = h("div", {
      key,
      class: "q-field__messages col"
    }, msg);
    return h("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (props4.hideBottomSpace !== true ? "animated" : "stale"),
      onClick: prevent
    }, [
      props4.hideBottomSpace === true ? main : h(Transition, { name: "q-transition--field-message" }, () => main),
      hasCounter === true ? h("div", {
        class: "q-field__counter"
      }, slots.counter !== void 0 ? slots.counter() : state.computedCounter.value) : null
    ]);
  }
  function getInnerAppendNode(key, content) {
    return content === null ? null : h("div", {
      key,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, content);
  }
  let shouldActivate = false;
  onDeactivated(() => {
    shouldActivate = true;
  });
  onActivated(() => {
    shouldActivate === true && props4.autofocus === true && proxy.focus();
  });
  props4.autofocus === true && onMounted(() => {
    proxy.focus();
  });
  onBeforeUnmount(() => {
    focusoutTimer !== null && clearTimeout(focusoutTimer);
  });
  Object.assign(proxy, { focus, blur });
  return function renderField() {
    const labelAttrs = state.getControl === void 0 && slots.control === void 0 ? {
      ...state.splitAttrs.attributes.value,
      "data-autofocus": props4.autofocus === true || void 0,
      ...attributes.value
    } : attributes.value;
    return h(state.tag.value, {
      ref: state.rootRef,
      class: [
        classes.value,
        attrs.class
      ],
      style: attrs.style,
      ...labelAttrs
    }, [
      slots.before !== void 0 ? h("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: prevent
      }, slots.before()) : null,
      h("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        h("div", {
          ref: state.controlRef,
          class: contentClass.value,
          tabindex: -1,
          ...state.controlEvents
        }, getContent()),
        shouldRenderBottom.value === true ? getBottom() : null
      ]),
      slots.after !== void 0 ? h("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: prevent
      }, slots.after()) : null
    ]);
  };
}
var QField_default = createComponent({
  name: "QField",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    tag: {
      type: String,
      default: "label"
    }
  },
  emits: useFieldEmits,
  setup() {
    return use_field_default(
      useFieldState({ tagProp: true })
    );
  }
});
function filterFiles(files, rejectedFiles, failedPropValidation, filterFn) {
  const acceptedFiles = [];
  files.forEach((file) => {
    if (filterFn(file) === true) {
      acceptedFiles.push(file);
    } else {
      rejectedFiles.push({ failedPropValidation, file });
    }
  });
  return acceptedFiles;
}
function stopAndPreventDrag(e) {
  e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy");
  stopAndPrevent(e);
}
var useFileProps = {
  multiple: Boolean,
  accept: String,
  capture: String,
  maxFileSize: [Number, String],
  maxTotalSize: [Number, String],
  maxFiles: [Number, String],
  filter: Function
};
var useFileEmits = ["rejected"];
function use_file_default({
  editable,
  dnd,
  getFileInput,
  addFilesToQueue
}) {
  const { props: props4, emit, proxy } = getCurrentInstance();
  const dndRef = ref(null);
  const extensions = computed(() => props4.accept !== void 0 ? props4.accept.split(",").map((ext) => {
    ext = ext.trim();
    if (ext === "*") {
      return "*/";
    } else if (ext.endsWith("/*")) {
      ext = ext.slice(0, ext.length - 1);
    }
    return ext.toUpperCase();
  }) : null);
  const maxFilesNumber = computed(() => parseInt(props4.maxFiles, 10));
  const maxTotalSizeNumber = computed(() => parseInt(props4.maxTotalSize, 10));
  function pickFiles(e) {
    if (editable.value) {
      if (e !== Object(e)) {
        e = { target: null };
      }
      if (e.target !== null && e.target.matches('input[type="file"]') === true) {
        e.clientX === 0 && e.clientY === 0 && stop(e);
      } else {
        const input = getFileInput();
        input && input !== e.target && input.click(e);
      }
    }
  }
  function addFiles(files) {
    if (editable.value && files) {
      addFilesToQueue(null, files);
    }
  }
  function processFiles(e, filesToProcess, currentFileList, append) {
    let files = Array.from(filesToProcess || e.target.files);
    const rejectedFiles = [];
    const done = () => {
      if (rejectedFiles.length !== 0) {
        emit("rejected", rejectedFiles);
      }
    };
    if (props4.accept !== void 0 && extensions.value.indexOf("*/") === -1) {
      files = filterFiles(files, rejectedFiles, "accept", (file) => {
        return extensions.value.some((ext) => file.type.toUpperCase().startsWith(ext) || file.name.toUpperCase().endsWith(ext));
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props4.maxFileSize !== void 0) {
      const maxFileSize = parseInt(props4.maxFileSize, 10);
      files = filterFiles(files, rejectedFiles, "max-file-size", (file) => {
        return file.size <= maxFileSize;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props4.multiple !== true && files.length !== 0) {
      files = [files[0]];
    }
    files.forEach((file) => {
      file.__key = file.webkitRelativePath + file.lastModified + file.name + file.size;
    });
    if (append === true) {
      const filenameMap = currentFileList.map((entry) => entry.__key);
      files = filterFiles(files, rejectedFiles, "duplicate", (file) => {
        return filenameMap.includes(file.__key) === false;
      });
    }
    if (files.length === 0) {
      return done();
    }
    if (props4.maxTotalSize !== void 0) {
      let size2 = append === true ? currentFileList.reduce((total, file) => total + file.size, 0) : 0;
      files = filterFiles(files, rejectedFiles, "max-total-size", (file) => {
        size2 += file.size;
        return size2 <= maxTotalSizeNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (typeof props4.filter === "function") {
      const filteredFiles = props4.filter(files);
      files = filterFiles(files, rejectedFiles, "filter", (file) => {
        return filteredFiles.includes(file);
      });
    }
    if (props4.maxFiles !== void 0) {
      let filesNumber = append === true ? currentFileList.length : 0;
      files = filterFiles(files, rejectedFiles, "max-files", () => {
        filesNumber++;
        return filesNumber <= maxFilesNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    done();
    if (files.length !== 0) {
      return files;
    }
  }
  function onDragover(e) {
    stopAndPreventDrag(e);
    dnd.value !== true && (dnd.value = true);
  }
  function onDragleave(e) {
    stopAndPrevent(e);
    const gone = e.relatedTarget !== null || client.is.safari !== true ? e.relatedTarget !== dndRef.value : document.elementsFromPoint(e.clientX, e.clientY).includes(dndRef.value) === false;
    gone === true && (dnd.value = false);
  }
  function onDrop(e) {
    stopAndPreventDrag(e);
    const files = e.dataTransfer.files;
    if (files.length !== 0) {
      addFilesToQueue(null, files);
    }
    dnd.value = false;
  }
  function getDndNode(type) {
    if (dnd.value === true) {
      return h("div", {
        ref: dndRef,
        class: `q-${type}__dnd absolute-full`,
        onDragenter: stopAndPreventDrag,
        onDragover: stopAndPreventDrag,
        onDragleave,
        onDrop
      });
    }
  }
  Object.assign(proxy, { pickFiles, addFiles });
  return {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  };
}
function use_file_dom_props_default(props4, typeGuard) {
  function getFormDomProps() {
    const model = props4.modelValue;
    try {
      const dt = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      if (Object(model) === model) {
        ("length" in model ? Array.from(model) : [model]).forEach((file) => {
          dt.items.add(file);
        });
      }
      return {
        files: dt.files
      };
    } catch (e) {
      return {
        files: void 0
      };
    }
  }
  return typeGuard === true ? computed(() => {
    if (props4.type !== "file") {
      return;
    }
    return getFormDomProps();
  }) : computed(getFormDomProps);
}
var QFile_default = createComponent({
  name: "QFile",
  inheritAttrs: false,
  props: {
    ...useNonInputFieldProps,
    ...useFormProps,
    ...useFileProps,
    /* SSR does not know about File & FileList */
    modelValue: false ? {} : [File, FileList, Array],
    append: Boolean,
    useChips: Boolean,
    displayValue: [String, Number],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    counterLabel: Function,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...useFieldEmits,
    ...useFileEmits
  ],
  setup(props4, { slots, emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const state = useFieldState();
    const inputRef = ref(null);
    const dnd = ref(false);
    const nameProp = useFormInputNameAttr(props4);
    const {
      pickFiles,
      onDragover,
      onDragleave,
      processFiles,
      getDndNode
    } = use_file_default({ editable: state.editable, dnd, getFileInput, addFilesToQueue });
    const formDomProps = use_file_dom_props_default(props4);
    const innerValue = computed(() => Object(props4.modelValue) === props4.modelValue ? "length" in props4.modelValue ? Array.from(props4.modelValue) : [props4.modelValue] : []);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const selectedString = computed(
      () => innerValue.value.map((file) => file.name).join(", ")
    );
    const totalSize = computed(
      () => humanStorageSize(
        innerValue.value.reduce((acc, file) => acc + file.size, 0)
      )
    );
    const counterProps = computed(() => ({
      totalSize: totalSize.value,
      filesNumber: innerValue.value.length,
      maxFiles: props4.maxFiles
    }));
    const inputAttrs = computed(() => ({
      tabindex: -1,
      type: "file",
      title: "",
      // try to remove default tooltip,
      accept: props4.accept,
      capture: props4.capture,
      name: nameProp.value,
      ...attrs,
      id: state.targetUid.value,
      disabled: state.editable.value !== true
    }));
    const fieldClass = computed(
      () => "q-file q-field--auto-height" + (dnd.value === true ? " q-file--dnd" : "")
    );
    const isAppending = computed(
      () => props4.multiple === true && props4.append === true
    );
    function removeAtIndex(index) {
      const files = innerValue.value.slice();
      files.splice(index, 1);
      emitValue(files);
    }
    function removeFile(file) {
      const index = innerValue.value.indexOf(file);
      if (index !== -1) {
        removeAtIndex(index);
      }
    }
    function emitValue(files) {
      emit("update:modelValue", props4.multiple === true ? files : files[0]);
    }
    function onKeydown2(e) {
      e.keyCode === 13 && prevent(e);
    }
    function onKeyup2(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        pickFiles(e);
      }
    }
    function getFileInput() {
      return inputRef.value;
    }
    function addFilesToQueue(e, fileList) {
      const files = processFiles(e, fileList, innerValue.value, isAppending.value);
      const fileInput = getFileInput();
      if (fileInput !== void 0 && fileInput !== null) {
        fileInput.value = "";
      }
      if (files === void 0) return;
      if (props4.multiple === true ? props4.modelValue && files.every((f) => innerValue.value.includes(f)) : props4.modelValue === files[0]) {
        return;
      }
      emitValue(
        isAppending.value === true ? innerValue.value.concat(files) : files
      );
    }
    function getFiller() {
      return [
        h("input", {
          class: [props4.inputClass, "q-file__filler"],
          style: props4.inputStyle
        })
      ];
    }
    function getSelection() {
      if (slots.file !== void 0) {
        return innerValue.value.length === 0 ? getFiller() : innerValue.value.map(
          (file, index) => slots.file({ index, file, ref: this })
        );
      }
      if (slots.selected !== void 0) {
        return innerValue.value.length === 0 ? getFiller() : slots.selected({ files: innerValue.value, ref: this });
      }
      if (props4.useChips === true) {
        return innerValue.value.length === 0 ? getFiller() : innerValue.value.map((file, i) => h(QChip_default, {
          key: "file-" + i,
          removable: state.editable.value,
          dense: true,
          textColor: props4.color,
          tabindex: props4.tabindex,
          onRemove: () => {
            removeAtIndex(i);
          }
        }, () => h("span", {
          class: "ellipsis",
          textContent: file.name
        })));
      }
      const textContent = props4.displayValue !== void 0 ? props4.displayValue : selectedString.value;
      return textContent.length !== 0 ? [
        h("div", {
          class: props4.inputClass,
          style: props4.inputStyle,
          textContent
        })
      ] : getFiller();
    }
    function getInput() {
      const data = {
        ref: inputRef,
        ...inputAttrs.value,
        ...formDomProps.value,
        class: "q-field__input fit absolute-full cursor-pointer",
        onChange: addFilesToQueue
      };
      if (props4.multiple === true) {
        data.multiple = true;
      }
      return h("input", data);
    }
    Object.assign(state, {
      fieldClass,
      emitValue,
      hasValue,
      inputRef,
      innerValue,
      floatingLabel: computed(
        () => hasValue.value === true || fieldValueIsFilled(props4.displayValue)
      ),
      computedCounter: computed(() => {
        if (props4.counterLabel !== void 0) {
          return props4.counterLabel(counterProps.value);
        }
        const max = props4.maxFiles;
        return `${innerValue.value.length}${max !== void 0 ? " / " + max : ""} (${totalSize.value})`;
      }),
      getControlChild: () => getDndNode("file"),
      getControl: () => {
        const data = {
          ref: state.targetRef,
          class: "q-field__native row items-center cursor-pointer",
          tabindex: props4.tabindex
        };
        if (state.editable.value === true) {
          Object.assign(data, { onDragover, onDragleave, onKeydown: onKeydown2, onKeyup: onKeyup2 });
        }
        return h("div", data, [getInput()].concat(getSelection()));
      }
    });
    Object.assign(proxy, {
      removeAtIndex,
      removeFile,
      getNativeElement: () => inputRef.value
      // deprecated
    });
    injectProp(proxy, "nativeEl", () => inputRef.value);
    return use_field_default(state);
  }
});
var QFooter_default = createComponent({
  name: "QFooter",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props4, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QFooter needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size2 = ref(parseInt(props4.heightHint, 10));
    const revealed = ref(true);
    const windowHeight = ref(
      isRuntimeSsrPreHydration.value === true || $layout.isContainer.value === true ? 0 : window.innerHeight
    );
    const fixed = computed(
      () => props4.reveal === true || $layout.view.value.indexOf("F") !== -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const containerHeight = computed(() => $layout.isContainer.value === true ? $layout.containerHeight.value : windowHeight.value);
    const offset2 = computed(() => {
      if (props4.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size2.value : 0;
      }
      const offset3 = $layout.scroll.value.position + containerHeight.value + size2.value - $layout.height.value;
      return offset3 > 0 ? offset3 : 0;
    });
    const hidden = computed(
      () => props4.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props4.modelValue === true && hidden.value === true && props4.reveal === true
    );
    const classes = computed(
      () => "q-footer q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-bottom" + (props4.bordered === true ? " q-footer--bordered" : "") + (hidden.value === true ? " q-footer--hidden" : "") + (props4.modelValue !== true ? " q-layout--prevent-focus" + (fixed.value !== true ? " hidden" : "") : "")
    );
    const style2 = computed(() => {
      const view = $layout.rows.value.bottom, css2 = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css2[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css2[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css2;
    });
    function updateLayout(prop, val) {
      $layout.update("footer", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height: height2 }) {
      updateLocal(size2, height2);
      updateLayout("size", height2);
    }
    function updateRevealed() {
      if (props4.reveal !== true) return;
      const { direction, position: position2, inflectionPoint } = $layout.scroll.value;
      updateLocal(revealed, direction === "up" || position2 - inflectionPoint < 100 || $layout.height.value - containerHeight.value - position2 - size2.value < 300);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props4.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset2, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props4.reveal, (val) => {
      val === false && updateLocal(revealed, props4.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch([size2, $layout.scroll, $layout.height], updateRevealed);
    watch(() => $q.screen.height, (val) => {
      $layout.isContainer.value !== true && updateLocal(windowHeight, val);
    });
    const instance = {};
    $layout.instances.footer = instance;
    props4.modelValue === true && updateLayout("size", size2.value);
    updateLayout("space", props4.modelValue);
    updateLayout("offset", offset2.value);
    onBeforeUnmount(() => {
      if ($layout.instances.footer === instance) {
        $layout.instances.footer = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hMergeSlot(slots.default, [
        h(QResizeObserver_default, {
          debounce: 0,
          onResize
        })
      ]);
      props4.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      return h("footer", {
        class: classes.value,
        style: style2.value,
        onFocusin
      }, child);
    };
  }
});
var QForm_default = createComponent({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(props4, { slots, emit }) {
    const vm2 = getCurrentInstance();
    const rootRef = ref(null);
    let validateIndex = 0;
    const registeredComponents = [];
    function validate(shouldFocus) {
      const focus2 = typeof shouldFocus === "boolean" ? shouldFocus : props4.noErrorFocus !== true;
      const index = ++validateIndex;
      const emitEvent = (res, ref73) => {
        emit(`validation${res === true ? "Success" : "Error"}`, ref73);
      };
      const validateComponent = (comp) => {
        const valid = comp.validate();
        return typeof valid.then === "function" ? valid.then(
          (valid2) => ({ valid: valid2, comp }),
          (err) => ({ valid: false, comp, err })
        ) : Promise.resolve({ valid, comp });
      };
      const errorsPromise = props4.greedy === true ? Promise.all(registeredComponents.map(validateComponent)).then((res) => res.filter((r) => r.valid !== true)) : registeredComponents.reduce(
        (acc, comp) => acc.then(() => {
          return validateComponent(comp).then((r) => {
            if (r.valid === false) {
              return Promise.reject(r);
            }
          });
        }),
        Promise.resolve()
      ).catch((error) => [error]);
      return errorsPromise.then((errors) => {
        if (errors === void 0 || errors.length === 0) {
          index === validateIndex && emitEvent(true);
          return true;
        }
        if (index === validateIndex) {
          const { comp, err } = errors[0];
          err !== void 0 && console.error(err);
          emitEvent(false, comp);
          if (focus2 === true) {
            const activeError = errors.find(({ comp: comp2 }) => typeof comp2.focus === "function" && vmIsDestroyed(comp2.$) === false);
            if (activeError !== void 0) {
              activeError.comp.focus();
            }
          }
        }
        return false;
      });
    }
    function resetValidation() {
      validateIndex++;
      registeredComponents.forEach((comp) => {
        typeof comp.resetValidation === "function" && comp.resetValidation();
      });
    }
    function submit(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      const index = validateIndex + 1;
      validate().then((val) => {
        if (index === validateIndex && val === true) {
          if (props4.onSubmit !== void 0) {
            emit("submit", evt);
          } else if (evt !== void 0 && evt.target !== void 0 && typeof evt.target.submit === "function") {
            evt.target.submit();
          }
        }
      });
    }
    function reset(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      emit("reset");
      nextTick(() => {
        resetValidation();
        if (props4.autofocus === true && props4.noResetFocus !== true) {
          focus();
        }
      });
    }
    function focus() {
      addFocusFn(() => {
        if (rootRef.value === null) return;
        const target2 = rootRef.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || rootRef.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || rootRef.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(rootRef.value.querySelectorAll("[tabindex]"), (el) => el.tabIndex !== -1);
        target2 !== null && target2 !== void 0 && target2.focus({ preventScroll: true });
      });
    }
    provide(formKey, {
      bindComponent(vmProxy) {
        registeredComponents.push(vmProxy);
      },
      unbindComponent(vmProxy) {
        const index = registeredComponents.indexOf(vmProxy);
        if (index !== -1) {
          registeredComponents.splice(index, 1);
        }
      }
    });
    let shouldActivate = false;
    onDeactivated(() => {
      shouldActivate = true;
    });
    onActivated(() => {
      shouldActivate === true && props4.autofocus === true && focus();
    });
    onMounted(() => {
      props4.autofocus === true && focus();
    });
    Object.assign(vm2.proxy, {
      validate,
      resetValidation,
      submit,
      reset,
      focus,
      getValidationComponents: () => registeredComponents
    });
    return () => h("form", {
      class: "q-form",
      ref: rootRef,
      onSubmit: submit,
      onReset: reset
    }, hSlot(slots.default));
  }
});
var QFormChildMixin_default = {
  inject: {
    [formKey]: {
      default: noop
    }
  },
  watch: {
    disable(val) {
      const $form = this.$.provides[formKey];
      if ($form !== void 0) {
        if (val === true) {
          this.resetValidation();
          $form.unbindComponent(this);
        } else {
          $form.bindComponent(this);
        }
      }
    }
  },
  methods: {
    validate() {
    },
    resetValidation() {
    }
  },
  mounted() {
    const $form = this.$.provides[formKey];
    $form !== void 0 && this.disable !== true && $form.bindComponent(this);
  },
  beforeUnmount() {
    const $form = this.$.provides[formKey];
    $form !== void 0 && this.disable !== true && $form.unbindComponent(this);
  }
};
var QHeader_default = createComponent({
  name: "QHeader",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props4, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QHeader needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size2 = ref(parseInt(props4.heightHint, 10));
    const revealed = ref(true);
    const fixed = computed(
      () => props4.reveal === true || $layout.view.value.indexOf("H") !== -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const offset2 = computed(() => {
      if (props4.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size2.value : 0;
      }
      const offset3 = size2.value - $layout.scroll.value.position;
      return offset3 > 0 ? offset3 : 0;
    });
    const hidden = computed(
      () => props4.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props4.modelValue === true && hidden.value === true && props4.reveal === true
    );
    const classes = computed(
      () => "q-header q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-top" + (props4.bordered === true ? " q-header--bordered" : "") + (hidden.value === true ? " q-header--hidden" : "") + (props4.modelValue !== true ? " q-layout--prevent-focus" : "")
    );
    const style2 = computed(() => {
      const view = $layout.rows.value.top, css2 = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css2[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css2[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css2;
    });
    function updateLayout(prop, val) {
      $layout.update("header", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height: height2 }) {
      updateLocal(size2, height2);
      updateLayout("size", height2);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props4.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset2, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props4.reveal, (val) => {
      val === false && updateLocal(revealed, props4.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch($layout.scroll, (scroll) => {
      props4.reveal === true && updateLocal(
        revealed,
        scroll.direction === "up" || scroll.position <= props4.revealOffset || scroll.position - scroll.inflectionPoint < 100
      );
    });
    const instance = {};
    $layout.instances.header = instance;
    props4.modelValue === true && updateLayout("size", size2.value);
    updateLayout("space", props4.modelValue);
    updateLayout("offset", offset2.value);
    onBeforeUnmount(() => {
      if ($layout.instances.header === instance) {
        $layout.instances.header = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      props4.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      child.push(
        h(QResizeObserver_default, {
          debounce: 0,
          onResize
        })
      );
      return h("header", {
        class: classes.value,
        style: style2.value,
        onFocusin
      }, child);
    };
  }
});
var useRatioProps = {
  ratio: [String, Number]
};
function use_ratio_default(props4, naturalRatio) {
  return computed(() => {
    const ratio = Number(
      props4.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );
    return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
  });
}
var defaultRatio = 1.7778;
var QImg_default = createComponent({
  name: "QImg",
  props: {
    ...useRatioProps,
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,
    draggable: Boolean,
    loading: {
      type: String,
      default: "lazy"
    },
    loadingShowDelay: {
      type: [Number, String],
      default: 0
    },
    fetchpriority: {
      type: String,
      default: "auto"
    },
    width: String,
    height: String,
    initialRatio: {
      type: [Number, String],
      default: defaultRatio
    },
    placeholderSrc: String,
    errorSrc: String,
    fit: {
      type: String,
      default: "cover"
    },
    position: {
      type: String,
      default: "50% 50%"
    },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String
  },
  emits: ["load", "error"],
  setup(props4, { slots, emit }) {
    const naturalRatio = ref(props4.initialRatio);
    const ratioStyle = use_ratio_default(props4, naturalRatio);
    const vm2 = getCurrentInstance();
    const { registerTimeout: registerLoadTimeout, removeTimeout: removeLoadTimeout } = use_timeout_default();
    const { registerTimeout: registerLoadShowTimeout, removeTimeout: removeLoadShowTimeout } = use_timeout_default();
    const placeholderImg = computed(() => props4.placeholderSrc !== void 0 ? { src: props4.placeholderSrc } : null);
    const errorImg = computed(() => props4.errorSrc !== void 0 ? { src: props4.errorSrc, __qerror: true } : null);
    const images = [
      ref(null),
      ref(placeholderImg.value)
    ];
    const position2 = ref(0);
    const isLoading = ref(false);
    const hasError = ref(false);
    const classes = computed(
      () => `q-img q-img--${props4.noNativeMenu === true ? "no-" : ""}menu`
    );
    const style2 = computed(() => ({
      width: props4.width,
      height: props4.height
    }));
    const imgClass = computed(
      () => `q-img__image ${props4.imgClass !== void 0 ? props4.imgClass + " " : ""}q-img__image--with${props4.noTransition === true ? "out" : ""}-transition q-img__image--`
    );
    const imgStyle = computed(() => ({
      ...props4.imgStyle,
      objectFit: props4.fit,
      objectPosition: props4.position
    }));
    function setLoading() {
      removeLoadShowTimeout();
      if (props4.loadingShowDelay === 0) {
        isLoading.value = true;
        return;
      }
      registerLoadShowTimeout(() => {
        isLoading.value = true;
      }, props4.loadingShowDelay);
    }
    function clearLoading() {
      removeLoadShowTimeout();
      isLoading.value = false;
    }
    function onLoad({ target: target2 }) {
      if (vmIsDestroyed(vm2) === false) {
        removeLoadTimeout();
        naturalRatio.value = target2.naturalHeight === 0 ? 0.5 : target2.naturalWidth / target2.naturalHeight;
        waitForCompleteness(target2, 1);
      }
    }
    function waitForCompleteness(target2, count) {
      if (count === 1e3 || vmIsDestroyed(vm2) === true) return;
      if (target2.complete === true) {
        onReady(target2);
      } else {
        registerLoadTimeout(() => {
          waitForCompleteness(target2, count + 1);
        }, 50);
      }
    }
    function onReady(target2) {
      if (vmIsDestroyed(vm2) === true) return;
      position2.value = position2.value ^ 1;
      images[position2.value].value = null;
      clearLoading();
      if (target2.getAttribute("__qerror") !== "true") {
        hasError.value = false;
      }
      emit("load", target2.currentSrc || target2.src);
    }
    function onError(err) {
      removeLoadTimeout();
      clearLoading();
      hasError.value = true;
      images[position2.value].value = errorImg.value;
      images[position2.value ^ 1].value = placeholderImg.value;
      emit("error", err);
    }
    function getImage(index) {
      const img = images[index].value;
      const data = {
        key: "img_" + index,
        class: imgClass.value,
        style: imgStyle.value,
        alt: props4.alt,
        crossorigin: props4.crossorigin,
        decoding: props4.decoding,
        referrerpolicy: props4.referrerpolicy,
        height: props4.height,
        width: props4.width,
        loading: props4.loading,
        fetchpriority: props4.fetchpriority,
        "aria-hidden": "true",
        draggable: props4.draggable,
        ...img
      };
      if (position2.value === index) {
        Object.assign(data, {
          class: data.class + "current",
          onLoad,
          onError
        });
      } else {
        data.class += "loaded";
      }
      return h(
        "div",
        { class: "q-img__container absolute-full", key: "img" + index },
        h("img", data)
      );
    }
    function getContent() {
      if (isLoading.value === false) {
        return h("div", {
          key: "content",
          class: "q-img__content absolute-full q-anchor--skip"
        }, hSlot(slots[hasError.value === true ? "error" : "default"]));
      }
      return h("div", {
        key: "loading",
        class: "q-img__loading absolute-full flex flex-center"
      }, slots.loading !== void 0 ? slots.loading() : props4.noSpinner === true ? void 0 : [
        h(QSpinner_default, {
          color: props4.spinnerColor,
          size: props4.spinnerSize
        })
      ]);
    }
    if (true) {
      let watchSrc = function() {
        watch(
          () => props4.src || props4.srcset || props4.sizes ? {
            src: props4.src,
            srcset: props4.srcset,
            sizes: props4.sizes
          } : null,
          (imgProps) => {
            removeLoadTimeout();
            hasError.value = false;
            if (imgProps === null) {
              clearLoading();
              images[position2.value ^ 1].value = placeholderImg.value;
            } else {
              setLoading();
            }
            images[position2.value].value = imgProps;
          },
          { immediate: true }
        );
      };
      if (isRuntimeSsrPreHydration.value === true) {
        onMounted(watchSrc);
      } else {
        watchSrc();
      }
    }
    return () => {
      const content = [];
      if (ratioStyle.value !== null) {
        content.push(
          h("div", { key: "filler", style: ratioStyle.value })
        );
      }
      if (images[0].value !== null) {
        content.push(
          getImage(0)
        );
      }
      if (images[1].value !== null) {
        content.push(
          getImage(1)
        );
      }
      content.push(
        h(Transition, { name: "q-transition--fade" }, getContent)
      );
      return h("div", {
        key: "main",
        class: classes.value,
        style: style2.value,
        role: "img",
        "aria-label": props4.alt
      }, content);
    };
  }
});
var { passive: passive2 } = listenOpts;
var QInfiniteScroll_default = createComponent({
  name: "QInfiniteScroll",
  props: {
    offset: {
      type: Number,
      default: 500
    },
    debounce: {
      type: [String, Number],
      default: 100
    },
    scrollTarget: scrollTargetProp,
    initialIndex: {
      type: Number,
      default: 0
    },
    disable: Boolean,
    reverse: Boolean
  },
  emits: ["load"],
  setup(props4, { slots, emit }) {
    const isFetching = ref(false);
    const isWorking = ref(true);
    const rootRef = ref(null);
    const loadingRef = ref(null);
    let index = props4.initialIndex;
    let localScrollTarget, poll;
    const classes = computed(
      () => "q-infinite-scroll__loading" + (isFetching.value === true ? "" : " invisible")
    );
    function immediatePoll() {
      if (props4.disable === true || isFetching.value === true || isWorking.value === false) {
        return;
      }
      const scrollHeight = getScrollHeight(localScrollTarget), scrollPosition = getVerticalScrollPosition(localScrollTarget), containerHeight = height(localScrollTarget);
      if (props4.reverse === false) {
        if (Math.round(scrollPosition + containerHeight + props4.offset) >= Math.round(scrollHeight)) {
          trigger3();
        }
      } else if (Math.round(scrollPosition) <= props4.offset) {
        trigger3();
      }
    }
    function trigger3() {
      if (props4.disable === true || isFetching.value === true || isWorking.value === false) {
        return;
      }
      index++;
      isFetching.value = true;
      const heightBefore = getScrollHeight(localScrollTarget);
      emit("load", index, (isDone) => {
        if (isWorking.value === true) {
          isFetching.value = false;
          nextTick(() => {
            if (props4.reverse === true) {
              const heightAfter = getScrollHeight(localScrollTarget), scrollPosition = getVerticalScrollPosition(localScrollTarget), heightDifference = heightAfter - heightBefore;
              setVerticalScrollPosition(localScrollTarget, scrollPosition + heightDifference);
            }
            if (isDone === true) {
              stop2();
            } else if (rootRef.value) {
              rootRef.value.closest("body") && poll();
            }
          });
        }
      });
    }
    function reset() {
      index = 0;
    }
    function resume() {
      if (isWorking.value === false) {
        isWorking.value = true;
        localScrollTarget.addEventListener("scroll", poll, passive2);
      }
      immediatePoll();
    }
    function stop2() {
      if (isWorking.value === true) {
        isWorking.value = false;
        isFetching.value = false;
        localScrollTarget.removeEventListener("scroll", poll, passive2);
        if (poll !== void 0 && poll.cancel !== void 0) {
          poll.cancel();
        }
      }
    }
    function updateScrollTarget() {
      if (localScrollTarget && isWorking.value === true) {
        localScrollTarget.removeEventListener("scroll", poll, passive2);
      }
      localScrollTarget = getScrollTarget(rootRef.value, props4.scrollTarget);
      if (isWorking.value === true) {
        localScrollTarget.addEventListener("scroll", poll, passive2);
        if (props4.reverse === true) {
          const scrollHeight = getScrollHeight(localScrollTarget), containerHeight = height(localScrollTarget);
          setVerticalScrollPosition(localScrollTarget, scrollHeight - containerHeight);
        }
        immediatePoll();
      }
    }
    function setIndex(newIndex) {
      index = newIndex;
    }
    function setDebounce(val) {
      val = parseInt(val, 10);
      const oldPoll = poll;
      poll = val <= 0 ? immediatePoll : debounce_default(immediatePoll, isNaN(val) === true ? 100 : val);
      if (localScrollTarget && isWorking.value === true) {
        if (oldPoll !== void 0) {
          localScrollTarget.removeEventListener("scroll", oldPoll, passive2);
        }
        localScrollTarget.addEventListener("scroll", poll, passive2);
      }
    }
    function updateSvgAnimations(isRetry) {
      if (renderLoadingSlot.value === true) {
        if (loadingRef.value === null) {
          isRetry !== true && nextTick(() => {
            updateSvgAnimations(true);
          });
          return;
        }
        const action = `${isFetching.value === true ? "un" : ""}pauseAnimations`;
        Array.from(loadingRef.value.getElementsByTagName("svg")).forEach((el) => {
          el[action]();
        });
      }
    }
    const renderLoadingSlot = computed(() => props4.disable !== true && isWorking.value === true);
    watch([isFetching, renderLoadingSlot], () => {
      updateSvgAnimations();
    });
    watch(() => props4.disable, (val) => {
      if (val === true) {
        stop2();
      } else {
        resume();
      }
    });
    watch(() => props4.reverse, () => {
      if (isFetching.value === false && isWorking.value === true) {
        immediatePoll();
      }
    });
    watch(() => props4.scrollTarget, updateScrollTarget);
    watch(() => props4.debounce, setDebounce);
    let scrollPos = false;
    onActivated(() => {
      if (scrollPos !== false && localScrollTarget) {
        setVerticalScrollPosition(localScrollTarget, scrollPos);
      }
    });
    onDeactivated(() => {
      scrollPos = localScrollTarget ? getVerticalScrollPosition(localScrollTarget) : false;
    });
    onBeforeUnmount(() => {
      if (isWorking.value === true) {
        localScrollTarget.removeEventListener("scroll", poll, passive2);
      }
    });
    onMounted(() => {
      setDebounce(props4.debounce);
      updateScrollTarget();
      isFetching.value === false && updateSvgAnimations();
    });
    const vm2 = getCurrentInstance();
    Object.assign(vm2.proxy, {
      poll: () => {
        poll !== void 0 && poll();
      },
      trigger: trigger3,
      stop: stop2,
      reset,
      resume,
      setIndex,
      updateScrollTarget
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      if (renderLoadingSlot.value === true) {
        child[props4.reverse === false ? "push" : "unshift"](
          h("div", { ref: loadingRef, class: classes.value }, hSlot(slots.loading))
        );
      }
      return h("div", {
        class: "q-infinite-scroll",
        ref: rootRef
      }, child);
    };
  }
});
var QInnerLoading_default = createComponent({
  name: "QInnerLoading",
  props: {
    ...useDarkProps,
    ...useTransitionProps,
    showing: Boolean,
    color: String,
    size: {
      type: [String, Number],
      default: "42px"
    },
    label: String,
    labelClass: String,
    labelStyle: [String, Array, Object]
  },
  setup(props4, { slots }) {
    const vm2 = getCurrentInstance();
    const isDark = use_dark_default(props4, vm2.proxy.$q);
    const { transitionProps, transitionStyle } = use_transition_default(props4);
    const classes = computed(
      () => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (isDark.value === true ? " q-inner-loading--dark" : "")
    );
    const labelClass = computed(
      () => "q-inner-loading__label" + (props4.labelClass !== void 0 ? ` ${props4.labelClass}` : "")
    );
    function getInner() {
      const child = [
        h(QSpinner_default, {
          size: props4.size,
          color: props4.color
        })
      ];
      if (props4.label !== void 0) {
        child.push(
          h("div", {
            class: labelClass.value,
            style: props4.labelStyle
          }, [props4.label])
        );
      }
      return child;
    }
    function getContent() {
      return props4.showing === true ? h(
        "div",
        { class: classes.value, style: transitionStyle.value },
        slots.default !== void 0 ? slots.default() : getInner()
      ) : null;
    }
    return () => h(Transition, transitionProps.value, getContent);
  }
});
var NAMED_MASKS = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
};
var TOKENS = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleLowerCase() }
};
var KEYS = Object.keys(TOKENS);
KEYS.forEach((key) => {
  TOKENS[key].regex = new RegExp(TOKENS[key].pattern);
});
var tokenRegexMask = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + KEYS.join("") + "])|(.)", "g");
var escRegex = /[.*+?^${}()|[\]\\]/g;
var MARKER = String.fromCharCode(1);
var useMaskProps = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function use_mask_default(props4, emit, emitValue, inputRef) {
  let maskMarked, maskReplaced, computedMask, computedUnmask, pastedTextStart, selectionAnchor;
  const hasMask = ref(null);
  const innerValue = ref(getInitialMaskedValue());
  function getIsTypeText() {
    return props4.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(props4.type);
  }
  watch(() => props4.type + props4.autogrow, updateMaskInternals);
  watch(() => props4.mask, (v) => {
    if (v !== void 0) {
      updateMaskValue(innerValue.value, true);
    } else {
      const val = unmaskValue(innerValue.value);
      updateMaskInternals();
      props4.modelValue !== val && emit("update:modelValue", val);
    }
  });
  watch(() => props4.fillMask + props4.reverseFillMask, () => {
    hasMask.value === true && updateMaskValue(innerValue.value, true);
  });
  watch(() => props4.unmaskedValue, () => {
    hasMask.value === true && updateMaskValue(innerValue.value);
  });
  function getInitialMaskedValue() {
    updateMaskInternals();
    if (hasMask.value === true) {
      const masked = maskValue(unmaskValue(props4.modelValue));
      return props4.fillMask !== false ? fillWithMask(masked) : masked;
    }
    return props4.modelValue;
  }
  function getPaddedMaskMarked(size2) {
    if (size2 < maskMarked.length) {
      return maskMarked.slice(-size2);
    }
    let pad2 = "", localMaskMarked = maskMarked;
    const padPos = localMaskMarked.indexOf(MARKER);
    if (padPos !== -1) {
      for (let i = size2 - localMaskMarked.length; i > 0; i--) {
        pad2 += MARKER;
      }
      localMaskMarked = localMaskMarked.slice(0, padPos) + pad2 + localMaskMarked.slice(padPos);
    }
    return localMaskMarked;
  }
  function updateMaskInternals() {
    hasMask.value = props4.mask !== void 0 && props4.mask.length !== 0 && getIsTypeText();
    if (hasMask.value === false) {
      computedUnmask = void 0;
      maskMarked = "";
      maskReplaced = "";
      return;
    }
    const localComputedMask = NAMED_MASKS[props4.mask] === void 0 ? props4.mask : NAMED_MASKS[props4.mask], fillChar = typeof props4.fillMask === "string" && props4.fillMask.length !== 0 ? props4.fillMask.slice(0, 1) : "_", fillCharEscaped = fillChar.replace(escRegex, "\\$&"), unmask = [], extract = [], mask = [];
    let firstMatch = props4.reverseFillMask === true, unmaskChar = "", negateChar = "";
    localComputedMask.replace(tokenRegexMask, (_, char1, esc, token2, char2) => {
      if (token2 !== void 0) {
        const c = TOKENS[token2];
        mask.push(c);
        negateChar = c.negate;
        if (firstMatch === true) {
          extract.push("(?:" + negateChar + "+)?(" + c.pattern + "+)?(?:" + negateChar + "+)?(" + c.pattern + "+)?");
          firstMatch = false;
        }
        extract.push("(?:" + negateChar + "+)?(" + c.pattern + ")?");
      } else if (esc !== void 0) {
        unmaskChar = "\\" + (esc === "\\" ? "" : esc);
        mask.push(esc);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      } else {
        const c = char1 !== void 0 ? char1 : char2;
        unmaskChar = c === "\\" ? "\\\\\\\\" : c.replace(escRegex, "\\\\$&");
        mask.push(c);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      }
    });
    const unmaskMatcher = new RegExp(
      "^" + unmask.join("") + "(" + (unmaskChar === "" ? "." : "[^" + unmaskChar + "]") + "+)?" + (unmaskChar === "" ? "" : "[" + unmaskChar + "]*") + "$"
    ), extractLast = extract.length - 1, extractMatcher = extract.map((re, index) => {
      if (index === 0 && props4.reverseFillMask === true) {
        return new RegExp("^" + fillCharEscaped + "*" + re);
      } else if (index === extractLast) {
        return new RegExp(
          "^" + re + "(" + (negateChar === "" ? "." : negateChar) + "+)?" + (props4.reverseFillMask === true ? "$" : fillCharEscaped + "*")
        );
      }
      return new RegExp("^" + re);
    });
    computedMask = mask;
    computedUnmask = (val) => {
      const unmaskMatch = unmaskMatcher.exec(props4.reverseFillMask === true ? val : val.slice(0, mask.length + 1));
      if (unmaskMatch !== null) {
        val = unmaskMatch.slice(1).join("");
      }
      const extractMatch = [], extractMatcherLength = extractMatcher.length;
      for (let i = 0, str = val; i < extractMatcherLength; i++) {
        const m = extractMatcher[i].exec(str);
        if (m === null) {
          break;
        }
        str = str.slice(m.shift().length);
        extractMatch.push(...m);
      }
      if (extractMatch.length !== 0) {
        return extractMatch.join("");
      }
      return val;
    };
    maskMarked = mask.map((v) => typeof v === "string" ? v : MARKER).join("");
    maskReplaced = maskMarked.split(MARKER).join(fillChar);
  }
  function updateMaskValue(rawVal, updateMaskInternalsFlag, inputType) {
    const inp = inputRef.value, end = inp.selectionEnd, endReverse = inp.value.length - end, unmasked = unmaskValue(rawVal);
    updateMaskInternalsFlag === true && updateMaskInternals();
    const preMasked = maskValue(unmasked), masked = props4.fillMask !== false ? fillWithMask(preMasked) : preMasked, changed2 = innerValue.value !== masked;
    inp.value !== masked && (inp.value = masked);
    changed2 === true && (innerValue.value = masked);
    document.activeElement === inp && nextTick(() => {
      if (masked === maskReplaced) {
        const cursor = props4.reverseFillMask === true ? maskReplaced.length : 0;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (inputType === "insertFromPaste" && props4.reverseFillMask !== true) {
        const maxEnd = inp.selectionEnd;
        let cursor = end - 1;
        for (let i = pastedTextStart; i <= cursor && i < maxEnd; i++) {
          if (maskMarked[i] !== MARKER) {
            cursor++;
          }
        }
        moveCursor.right(inp, cursor);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(inputType) !== -1) {
        const cursor = props4.reverseFillMask === true ? end === 0 ? masked.length > preMasked.length ? 1 : 0 : Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1 : end;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (props4.reverseFillMask === true) {
        if (changed2 === true) {
          const cursor = Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse + 1)));
          if (cursor === 1 && end === 1) {
            inp.setSelectionRange(cursor, cursor, "forward");
          } else {
            moveCursor.rightReverse(inp, cursor);
          }
        } else {
          const cursor = masked.length - endReverse;
          inp.setSelectionRange(cursor, cursor, "backward");
        }
      } else {
        if (changed2 === true) {
          const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
          moveCursor.right(inp, cursor);
        } else {
          const cursor = end - 1;
          moveCursor.right(inp, cursor);
        }
      }
    });
    const val = props4.unmaskedValue === true ? unmaskValue(masked) : masked;
    if (String(props4.modelValue) !== val && (props4.modelValue !== null || val !== "")) {
      emitValue(val, true);
    }
  }
  function moveCursorForPaste(inp, start, end) {
    const preMasked = maskValue(unmaskValue(inp.value));
    start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
    pastedTextStart = start;
    inp.setSelectionRange(start, end, "forward");
  }
  const moveCursor = {
    left(inp, cursor) {
      const noMarkBefore = maskMarked.slice(cursor - 1).indexOf(MARKER) === -1;
      let i = Math.max(0, cursor - 1);
      for (; i >= 0; i--) {
        if (maskMarked[i] === MARKER) {
          cursor = i;
          noMarkBefore === true && cursor++;
          break;
        }
      }
      if (i < 0 && maskMarked[cursor] !== void 0 && maskMarked[cursor] !== MARKER) {
        return moveCursor.right(inp, 0);
      }
      cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
    },
    right(inp, cursor) {
      const limit = inp.value.length;
      let i = Math.min(limit, cursor + 1);
      for (; i <= limit; i++) {
        if (maskMarked[i] === MARKER) {
          cursor = i;
          break;
        } else if (maskMarked[i - 1] === MARKER) {
          cursor = i;
        }
      }
      if (i > limit && maskMarked[cursor - 1] !== void 0 && maskMarked[cursor - 1] !== MARKER) {
        return moveCursor.left(inp, limit);
      }
      inp.setSelectionRange(cursor, cursor, "forward");
    },
    leftReverse(inp, cursor) {
      const localMaskMarked = getPaddedMaskMarked(inp.value.length);
      let i = Math.max(0, cursor - 1);
      for (; i >= 0; i--) {
        if (localMaskMarked[i - 1] === MARKER) {
          cursor = i;
          break;
        } else if (localMaskMarked[i] === MARKER) {
          cursor = i;
          if (i === 0) {
            break;
          }
        }
      }
      if (i < 0 && localMaskMarked[cursor] !== void 0 && localMaskMarked[cursor] !== MARKER) {
        return moveCursor.rightReverse(inp, 0);
      }
      cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
    },
    rightReverse(inp, cursor) {
      const limit = inp.value.length, localMaskMarked = getPaddedMaskMarked(limit), noMarkBefore = localMaskMarked.slice(0, cursor + 1).indexOf(MARKER) === -1;
      let i = Math.min(limit, cursor + 1);
      for (; i <= limit; i++) {
        if (localMaskMarked[i - 1] === MARKER) {
          cursor = i;
          cursor > 0 && noMarkBefore === true && cursor--;
          break;
        }
      }
      if (i > limit && localMaskMarked[cursor - 1] !== void 0 && localMaskMarked[cursor - 1] !== MARKER) {
        return moveCursor.leftReverse(inp, limit);
      }
      inp.setSelectionRange(cursor, cursor, "forward");
    }
  };
  function onMaskedClick(e) {
    emit("click", e);
    selectionAnchor = void 0;
  }
  function onMaskedKeydown(e) {
    emit("keydown", e);
    if (shouldIgnoreKey(e) === true || e.altKey === true) {
      return;
    }
    const inp = inputRef.value, start = inp.selectionStart, end = inp.selectionEnd;
    if (!e.shiftKey) {
      selectionAnchor = void 0;
    }
    if (e.keyCode === 37 || e.keyCode === 39) {
      if (e.shiftKey && selectionAnchor === void 0) {
        selectionAnchor = inp.selectionDirection === "forward" ? start : end;
      }
      const fn = moveCursor[(e.keyCode === 39 ? "right" : "left") + (props4.reverseFillMask === true ? "Reverse" : "")];
      e.preventDefault();
      fn(inp, selectionAnchor === start ? end : start);
      if (e.shiftKey) {
        const cursor = inp.selectionStart;
        inp.setSelectionRange(Math.min(selectionAnchor, cursor), Math.max(selectionAnchor, cursor), "forward");
      }
    } else if (e.keyCode === 8 && props4.reverseFillMask !== true && start === end) {
      moveCursor.left(inp, start);
      inp.setSelectionRange(inp.selectionStart, end, "backward");
    } else if (e.keyCode === 46 && props4.reverseFillMask === true && start === end) {
      moveCursor.rightReverse(inp, end);
      inp.setSelectionRange(start, inp.selectionEnd, "forward");
    }
  }
  function maskValue(val) {
    if (val === void 0 || val === null || val === "") {
      return "";
    }
    if (props4.reverseFillMask === true) {
      return maskValueReverse(val);
    }
    const mask = computedMask;
    let valIndex = 0, output = "";
    for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
      const valChar = val[valIndex], maskDef = mask[maskIndex];
      if (typeof maskDef === "string") {
        output += maskDef;
        valChar === maskDef && valIndex++;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
        valIndex++;
      } else {
        return output;
      }
    }
    return output;
  }
  function maskValueReverse(val) {
    const mask = computedMask, firstTokenIndex = maskMarked.indexOf(MARKER);
    let valIndex = val.length - 1, output = "";
    for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex !== -1; maskIndex--) {
      const maskDef = mask[maskIndex];
      let valChar = val[valIndex];
      if (typeof maskDef === "string") {
        output = maskDef + output;
        valChar === maskDef && valIndex--;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        do {
          output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
          valIndex--;
          valChar = val[valIndex];
        } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
      } else {
        return output;
      }
    }
    return output;
  }
  function unmaskValue(val) {
    return typeof val !== "string" || computedUnmask === void 0 ? typeof val === "number" ? computedUnmask("" + val) : val : computedUnmask(val);
  }
  function fillWithMask(val) {
    if (maskReplaced.length - val.length <= 0) {
      return val;
    }
    return props4.reverseFillMask === true && val.length !== 0 ? maskReplaced.slice(0, -val.length) + val : val + maskReplaced.slice(val.length);
  }
  return {
    innerValue,
    hasMask,
    moveCursorForPaste,
    updateMaskValue,
    onMaskedKeydown,
    onMaskedClick
  };
}
function use_key_composition_default(onInput) {
  return function onComposition(e) {
    if (e.type === "compositionend" || e.type === "change") {
      if (e.target.qComposing !== true) return;
      e.target.qComposing = false;
      onInput(e);
    } else if (e.type === "compositionstart") {
      e.target.qComposing = true;
    }
  };
}
var QInput_default = createComponent({
  name: "QInput",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    ...useMaskProps,
    ...useFormProps,
    // override of useFieldProps > modelValue
    modelValue: false ? {} : [String, Number, FileList],
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    // makes a textarea
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...useFieldEmits,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(props4, { emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const temp = {};
    let emitCachedValue = NaN, typedNumber, stopValueWatcher, emitTimer = null, emitValueFn;
    const inputRef = ref(null);
    const nameProp = useFormInputNameAttr(props4);
    const {
      innerValue,
      hasMask,
      moveCursorForPaste,
      updateMaskValue,
      onMaskedKeydown,
      onMaskedClick
    } = use_mask_default(props4, emit, emitValue, inputRef);
    const formDomProps = use_file_dom_props_default(
      props4,
      /* type guard */
      true
    );
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const onComposition = use_key_composition_default(onInput);
    const state = useFieldState({ changeEvent: true });
    const isTextarea = computed(
      () => props4.type === "textarea" || props4.autogrow === true
    );
    const isTypeText = computed(
      () => isTextarea.value === true || ["text", "search", "url", "tel", "password"].includes(props4.type)
    );
    const onEvents = computed(() => {
      const evt = {
        ...state.splitAttrs.listeners.value,
        onInput,
        onPaste,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange,
        onBlur: onFinishEditing,
        onFocus: stop
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      if (hasMask.value === true) {
        evt.onKeydown = onMaskedKeydown;
        evt.onClick = onMaskedClick;
      }
      if (props4.autogrow === true) {
        evt.onAnimationend = onAnimationend;
      }
      return evt;
    });
    const inputAttrs = computed(() => {
      const attrs2 = {
        tabindex: 0,
        "data-autofocus": props4.autofocus === true || void 0,
        rows: props4.type === "textarea" ? 6 : void 0,
        "aria-label": props4.label,
        name: nameProp.value,
        ...state.splitAttrs.attributes.value,
        id: state.targetUid.value,
        maxlength: props4.maxlength,
        disabled: props4.disable === true,
        readonly: props4.readonly === true
      };
      if (isTextarea.value === false) {
        attrs2.type = props4.type;
      }
      if (props4.autogrow === true) {
        attrs2.rows = 1;
      }
      return attrs2;
    });
    watch(() => props4.type, () => {
      if (inputRef.value) {
        inputRef.value.value = props4.modelValue;
      }
    });
    watch(() => props4.modelValue, (v) => {
      if (hasMask.value === true) {
        if (stopValueWatcher === true) {
          stopValueWatcher = false;
          if (String(v) === emitCachedValue) {
            return;
          }
        }
        updateMaskValue(v);
      } else if (innerValue.value !== v) {
        innerValue.value = v;
        if (props4.type === "number" && temp.hasOwnProperty("value") === true) {
          if (typedNumber === true) {
            typedNumber = false;
          } else {
            delete temp.value;
          }
        }
      }
      props4.autogrow === true && nextTick(adjustHeight);
    });
    watch(() => props4.autogrow, (val) => {
      if (val === true) {
        nextTick(adjustHeight);
      } else if (inputRef.value !== null && attrs.rows > 0) {
        inputRef.value.style.height = "auto";
      }
    });
    watch(() => props4.dense, () => {
      props4.autogrow === true && nextTick(adjustHeight);
    });
    function focus() {
      addFocusFn(() => {
        const el = document.activeElement;
        if (inputRef.value !== null && inputRef.value !== el && (el === null || el.id !== state.targetUid.value)) {
          inputRef.value.focus({ preventScroll: true });
        }
      });
    }
    function select() {
      inputRef.value !== null && inputRef.value.select();
    }
    function onPaste(e) {
      if (hasMask.value === true && props4.reverseFillMask !== true) {
        const inp = e.target;
        moveCursorForPaste(inp, inp.selectionStart, inp.selectionEnd);
      }
      emit("paste", e);
    }
    function onInput(e) {
      if (!e || !e.target) {
        return;
      }
      if (props4.type === "file") {
        emit("update:modelValue", e.target.files);
        return;
      }
      const val = e.target.value;
      if (e.target.qComposing === true) {
        temp.value = val;
        return;
      }
      if (hasMask.value === true) {
        updateMaskValue(val, false, e.inputType);
      } else {
        emitValue(val);
        if (isTypeText.value === true && e.target === document.activeElement) {
          const { selectionStart, selectionEnd } = e.target;
          if (selectionStart !== void 0 && selectionEnd !== void 0) {
            nextTick(() => {
              if (e.target === document.activeElement && val.indexOf(e.target.value) === 0) {
                e.target.setSelectionRange(selectionStart, selectionEnd);
              }
            });
          }
        }
      }
      props4.autogrow === true && adjustHeight();
    }
    function onAnimationend(e) {
      emit("animationend", e);
      adjustHeight();
    }
    function emitValue(val, stopWatcher) {
      emitValueFn = () => {
        emitTimer = null;
        if (props4.type !== "number" && temp.hasOwnProperty("value") === true) {
          delete temp.value;
        }
        if (props4.modelValue !== val && emitCachedValue !== val) {
          emitCachedValue = val;
          stopWatcher === true && (stopValueWatcher = true);
          emit("update:modelValue", val);
          nextTick(() => {
            emitCachedValue === val && (emitCachedValue = NaN);
          });
        }
        emitValueFn = void 0;
      };
      if (props4.type === "number") {
        typedNumber = true;
        temp.value = val;
      }
      if (props4.debounce !== void 0) {
        emitTimer !== null && clearTimeout(emitTimer);
        temp.value = val;
        emitTimer = setTimeout(emitValueFn, props4.debounce);
      } else {
        emitValueFn();
      }
    }
    function adjustHeight() {
      requestAnimationFrame(() => {
        const inp = inputRef.value;
        if (inp !== null) {
          const parentStyle = inp.parentNode.style;
          const { scrollTop } = inp;
          const { overflowY, maxHeight } = $q.platform.is.firefox === true ? {} : window.getComputedStyle(inp);
          const changeOverflow = overflowY !== void 0 && overflowY !== "scroll";
          changeOverflow === true && (inp.style.overflowY = "hidden");
          parentStyle.marginBottom = inp.scrollHeight - 1 + "px";
          inp.style.height = "1px";
          inp.style.height = inp.scrollHeight + "px";
          changeOverflow === true && (inp.style.overflowY = parseInt(maxHeight, 10) < inp.scrollHeight ? "auto" : "hidden");
          parentStyle.marginBottom = "";
          inp.scrollTop = scrollTop;
        }
      });
    }
    function onChange(e) {
      onComposition(e);
      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }
      emitValueFn !== void 0 && emitValueFn();
      emit("change", e.target.value);
    }
    function onFinishEditing(e) {
      e !== void 0 && stop(e);
      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }
      emitValueFn !== void 0 && emitValueFn();
      typedNumber = false;
      stopValueWatcher = false;
      delete temp.value;
      props4.type !== "file" && setTimeout(() => {
        if (inputRef.value !== null) {
          inputRef.value.value = innerValue.value !== void 0 ? innerValue.value : "";
        }
      });
    }
    function getCurValue() {
      return temp.hasOwnProperty("value") === true ? temp.value : innerValue.value !== void 0 ? innerValue.value : "";
    }
    onBeforeUnmount(() => {
      onFinishEditing();
    });
    onMounted(() => {
      props4.autogrow === true && adjustHeight();
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props4.autogrow === true ? " q-textarea--autogrow" : "")
      ),
      hasShadow: computed(
        () => props4.type !== "file" && typeof props4.shadowText === "string" && props4.shadowText.length !== 0
      ),
      inputRef,
      emitValue,
      hasValue,
      floatingLabel: computed(
        () => hasValue.value === true && (props4.type !== "number" || isNaN(innerValue.value) === false) || fieldValueIsFilled(props4.displayValue)
      ),
      getControl: () => {
        return h(isTextarea.value === true ? "textarea" : "input", {
          ref: inputRef,
          class: [
            "q-field__native q-placeholder",
            props4.inputClass
          ],
          style: props4.inputStyle,
          ...inputAttrs.value,
          ...onEvents.value,
          ...props4.type !== "file" ? { value: getCurValue() } : formDomProps.value
        });
      },
      getShadowControl: () => {
        return h("div", {
          class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (isTextarea.value === true ? "" : " text-no-wrap")
        }, [
          h("span", { class: "invisible" }, getCurValue()),
          h("span", props4.shadowText)
        ]);
      }
    });
    const renderFn = use_field_default(state);
    Object.assign(proxy, {
      focus,
      select,
      getNativeElement: () => inputRef.value
      // deprecated
    });
    injectProp(proxy, "nativeEl", () => inputRef.value);
    return renderFn;
  }
});
var defaultCfg = {
  threshold: 0,
  root: null,
  rootMargin: "0px"
};
function update2(el, ctx, value2) {
  let handler, cfg, changed2;
  if (typeof value2 === "function") {
    handler = value2;
    cfg = defaultCfg;
    changed2 = ctx.cfg === void 0;
  } else {
    handler = value2.handler;
    cfg = Object.assign({}, defaultCfg, value2.cfg);
    changed2 = ctx.cfg === void 0 || isDeepEqual(ctx.cfg, cfg) === false;
  }
  if (ctx.handler !== handler) {
    ctx.handler = handler;
  }
  if (changed2 === true) {
    ctx.cfg = cfg;
    ctx.observer !== void 0 && ctx.observer.unobserve(el);
    ctx.observer = new IntersectionObserver(([entry]) => {
      if (typeof ctx.handler === "function") {
        if (entry.rootBounds === null && document.body.contains(el) === true) {
          ctx.observer.unobserve(el);
          ctx.observer.observe(el);
          return;
        }
        const res = ctx.handler(entry, ctx.observer);
        if (res === false || ctx.once === true && entry.isIntersecting === true) {
          destroy(el);
        }
      }
    }, cfg);
    ctx.observer.observe(el);
  }
}
function destroy(el) {
  const ctx = el.__qvisible;
  if (ctx !== void 0) {
    ctx.observer !== void 0 && ctx.observer.unobserve(el);
    delete el.__qvisible;
  }
}
var Intersection_default = createDirective(
  false ? { name: "intersection", getSSRProps: noop_ssr_directive_transform_default } : {
    name: "intersection",
    mounted(el, { modifiers, value: value2 }) {
      const ctx = {
        once: modifiers.once === true
      };
      update2(el, ctx, value2);
      el.__qvisible = ctx;
    },
    updated(el, binding) {
      const ctx = el.__qvisible;
      ctx !== void 0 && update2(el, ctx, binding.value);
    },
    beforeUnmount: destroy
  }
);
var QIntersection_default = createComponent({
  name: "QIntersection",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    once: Boolean,
    transition: String,
    transitionDuration: {
      type: [String, Number],
      default: 300
    },
    ssrPrerender: Boolean,
    margin: String,
    threshold: [Number, Array],
    root: {
      default: null
    },
    disable: Boolean,
    onVisibility: Function
  },
  setup(props4, { slots, emit }) {
    const showing = ref(isRuntimeSsrPreHydration.value === true ? props4.ssrPrerender : false);
    const intersectionProps = computed(() => props4.root !== void 0 || props4.margin !== void 0 || props4.threshold !== void 0 ? {
      handler: trigger3,
      cfg: {
        root: props4.root,
        rootMargin: props4.margin,
        threshold: props4.threshold
      }
    } : trigger3);
    const hasDirective = computed(
      () => props4.disable !== true && (isRuntimeSsrPreHydration.value !== true || props4.once !== true || props4.ssrPrerender !== true)
    );
    const directives = computed(() => {
      return [[
        Intersection_default,
        intersectionProps.value,
        void 0,
        { once: props4.once }
      ]];
    });
    const transitionStyle = computed(
      () => `--q-transition-duration: ${props4.transitionDuration}ms`
    );
    function trigger3(entry) {
      if (showing.value !== entry.isIntersecting) {
        showing.value = entry.isIntersecting;
        props4.onVisibility !== void 0 && emit("visibility", showing.value);
      }
    }
    function getContent() {
      if (showing.value === true) {
        return [h("div", { key: "content", style: transitionStyle.value }, hSlot(slots.default))];
      }
      if (slots.hidden !== void 0) {
        return [h("div", { key: "hidden", style: transitionStyle.value }, slots.hidden())];
      }
    }
    return () => {
      const child = props4.transition ? [
        h(Transition, {
          name: "q-transition--" + props4.transition
        }, getContent)
      ] : getContent();
      return hDir(
        props4.tag,
        { class: "q-intersection" },
        child,
        "main",
        hasDirective.value,
        () => directives.value
      );
    };
  }
});
var roleAttrExceptions = ["ul", "ol"];
var QList_default = createComponent({
  name: "QList",
  props: {
    ...useDarkProps,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props4, { slots }) {
    const vm2 = getCurrentInstance();
    const isDark = use_dark_default(props4, vm2.proxy.$q);
    const role = computed(
      () => roleAttrExceptions.includes(props4.tag) ? null : "list"
    );
    const classes = computed(
      () => "q-list" + (props4.bordered === true ? " q-list--bordered" : "") + (props4.dense === true ? " q-list--dense" : "") + (props4.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props4.padding === true ? " q-list--padding" : "")
    );
    return () => h(props4.tag, { class: classes.value, role: role.value }, hSlot(slots.default));
  }
});
var keyCodes2 = [34, 37, 40, 33, 39, 38];
var commonPropsName = Object.keys(useCircularCommonProps);
var QKnob_default = createComponent({
  name: "QKnob",
  props: {
    ...useFormProps,
    ...useCircularCommonProps,
    modelValue: {
      type: Number,
      required: true
    },
    innerMin: Number,
    innerMax: Number,
    step: {
      type: Number,
      default: 1,
      validator: (v) => v >= 0
    },
    tabindex: {
      type: [Number, String],
      default: 0
    },
    disable: Boolean,
    readonly: Boolean
  },
  emits: ["update:modelValue", "change", "dragValue"],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const model = ref(props4.modelValue);
    const dragging = ref(false);
    const innerMin = computed(() => isNaN(props4.innerMin) === true || props4.innerMin < props4.min ? props4.min : props4.innerMin);
    const innerMax = computed(() => isNaN(props4.innerMax) === true || props4.innerMax > props4.max ? props4.max : props4.innerMax);
    let centerPosition;
    function normalizeModel() {
      model.value = props4.modelValue === null ? innerMin.value : between(props4.modelValue, innerMin.value, innerMax.value);
      updateValue2(true);
    }
    watch(
      () => `${props4.modelValue}|${innerMin.value}|${innerMax.value}`,
      normalizeModel
    );
    normalizeModel();
    const editable = computed(() => props4.disable === false && props4.readonly === false);
    const classes = computed(
      () => "q-knob non-selectable" + (editable.value === true ? " q-knob--editable" : props4.disable === true ? " disabled" : "")
    );
    const decimals = computed(() => (String(props4.step).trim().split(".")[1] || "").length);
    const step = computed(() => props4.step === 0 ? 1 : props4.step);
    const instantFeedback = computed(() => props4.instantFeedback === true || dragging.value === true);
    const onEvents = $q.platform.is.mobile === true ? computed(() => editable.value === true ? { onClick } : {}) : computed(() => editable.value === true ? {
      onMousedown,
      onClick,
      onKeydown: onKeydown2,
      onKeyup: onKeyup2
    } : {});
    const attrs = computed(() => editable.value === true ? { tabindex: props4.tabindex } : { [`aria-${props4.disable === true ? "disabled" : "readonly"}`]: "true" });
    const circularProps = computed(() => {
      const agg = {};
      commonPropsName.forEach((name2) => {
        agg[name2] = props4[name2];
      });
      return agg;
    });
    function pan(event) {
      if (event.isFinal) {
        updatePosition(event.evt, true);
        dragging.value = false;
      } else if (event.isFirst) {
        updateCenterPosition();
        dragging.value = true;
        updatePosition(event.evt);
      } else {
        updatePosition(event.evt);
      }
    }
    const directives = computed(() => {
      return [[
        TouchPan_default,
        pan,
        void 0,
        { prevent: true, stop: true, mouse: true }
      ]];
    });
    function updateCenterPosition() {
      const { top, left, width: width3, height: height2 } = proxy.$el.getBoundingClientRect();
      centerPosition = {
        top: top + height2 / 2,
        left: left + width3 / 2
      };
    }
    function onMousedown(evt) {
      updateCenterPosition();
      updatePosition(evt);
    }
    function onClick(evt) {
      updateCenterPosition();
      updatePosition(evt, true);
    }
    function onKeydown2(evt) {
      if (!keyCodes2.includes(evt.keyCode)) {
        return;
      }
      stopAndPrevent(evt);
      const stepVal = ([34, 33].includes(evt.keyCode) ? 10 : 1) * step.value, offset2 = [34, 37, 40].includes(evt.keyCode) ? -stepVal : stepVal;
      model.value = between(
        parseFloat((model.value + offset2).toFixed(decimals.value)),
        innerMin.value,
        innerMax.value
      );
      updateValue2();
    }
    function updatePosition(evt, change) {
      const pos = position(evt), height2 = Math.abs(pos.top - centerPosition.top), distance = Math.sqrt(
        height2 ** 2 + Math.abs(pos.left - centerPosition.left) ** 2
      );
      let angle = Math.asin(height2 / distance) * (180 / Math.PI);
      if (pos.top < centerPosition.top) {
        angle = centerPosition.left < pos.left ? 90 - angle : 270 + angle;
      } else {
        angle = centerPosition.left < pos.left ? angle + 90 : 270 - angle;
      }
      if ($q.lang.rtl === true) {
        angle = normalizeToInterval(-angle - props4.angle, 0, 360);
      } else if (props4.angle) {
        angle = normalizeToInterval(angle - props4.angle, 0, 360);
      }
      if (props4.reverse === true) {
        angle = 360 - angle;
      }
      let newModel = props4.min + angle / 360 * (props4.max - props4.min);
      if (step.value !== 0) {
        const modulo = newModel % step.value;
        newModel = newModel - modulo + (Math.abs(modulo) >= step.value / 2 ? (modulo < 0 ? -1 : 1) * step.value : 0);
        newModel = parseFloat(newModel.toFixed(decimals.value));
      }
      newModel = between(newModel, innerMin.value, innerMax.value);
      emit("dragValue", newModel);
      if (model.value !== newModel) {
        model.value = newModel;
      }
      updateValue2(change);
    }
    function onKeyup2(evt) {
      if (keyCodes2.includes(evt.keyCode)) {
        updateValue2(true);
      }
    }
    function updateValue2(change) {
      props4.modelValue !== model.value && emit("update:modelValue", model.value);
      change === true && emit("change", model.value);
    }
    const formAttrs = useFormAttrs(props4);
    function getNameInput() {
      return h("input", formAttrs.value);
    }
    return () => {
      const data = {
        class: classes.value,
        role: "slider",
        "aria-valuemin": innerMin.value,
        "aria-valuemax": innerMax.value,
        "aria-valuenow": props4.modelValue,
        ...attrs.value,
        ...circularProps.value,
        value: model.value,
        instantFeedback: instantFeedback.value,
        ...onEvents.value
      };
      const child = {
        default: slots.default
      };
      if (editable.value === true && props4.name !== void 0) {
        child.internal = getNameInput;
      }
      return hDir(
        QCircularProgress_default,
        data,
        child,
        "knob",
        editable.value,
        () => directives.value
      );
    };
  }
});
var { passive: passive3 } = listenOpts;
var axisValues = ["both", "horizontal", "vertical"];
var QScrollObserver_default = createComponent({
  name: "QScrollObserver",
  props: {
    axis: {
      type: String,
      validator: (v) => axisValues.includes(v),
      default: "vertical"
    },
    debounce: [String, Number],
    scrollTarget: scrollTargetProp
  },
  emits: ["scroll"],
  setup(props4, { emit }) {
    const scroll = {
      position: {
        top: 0,
        left: 0
      },
      direction: "down",
      directionChanged: false,
      delta: {
        top: 0,
        left: 0
      },
      inflectionPoint: {
        top: 0,
        left: 0
      }
    };
    let clearTimer = null, localScrollTarget, parentEl;
    watch(() => props4.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function emitEvent() {
      clearTimer !== null && clearTimer();
      const top = Math.max(0, getVerticalScrollPosition(localScrollTarget));
      const left = getHorizontalScrollPosition(localScrollTarget);
      const delta = {
        top: top - scroll.position.top,
        left: left - scroll.position.left
      };
      if (props4.axis === "vertical" && delta.top === 0 || props4.axis === "horizontal" && delta.left === 0) {
        return;
      }
      const curDir = Math.abs(delta.top) >= Math.abs(delta.left) ? delta.top < 0 ? "up" : "down" : delta.left < 0 ? "left" : "right";
      scroll.position = { top, left };
      scroll.directionChanged = scroll.direction !== curDir;
      scroll.delta = delta;
      if (scroll.directionChanged === true) {
        scroll.direction = curDir;
        scroll.inflectionPoint = scroll.position;
      }
      emit("scroll", { ...scroll });
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(parentEl, props4.scrollTarget);
      localScrollTarget.addEventListener("scroll", trigger3, passive3);
      trigger3(true);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", trigger3, passive3);
        localScrollTarget = void 0;
      }
    }
    function trigger3(immediately) {
      if (immediately === true || props4.debounce === 0 || props4.debounce === "0") {
        emitEvent();
      } else if (clearTimer === null) {
        const [timer2, fn] = props4.debounce ? [setTimeout(emitEvent, props4.debounce), clearTimeout] : [requestAnimationFrame(emitEvent), cancelAnimationFrame];
        clearTimer = () => {
          fn(timer2);
          clearTimer = null;
        };
      }
    }
    const { proxy } = getCurrentInstance();
    watch(() => proxy.$q.lang.rtl, emitEvent);
    onMounted(() => {
      parentEl = proxy.$el.parentNode;
      configureScrollTarget();
    });
    onBeforeUnmount(() => {
      clearTimer !== null && clearTimer();
      unconfigureScrollTarget();
    });
    Object.assign(proxy, {
      trigger: trigger3,
      getPosition: () => scroll
    });
    return noop;
  }
});
var QLayout_default = createComponent({
  name: "QLayout",
  props: {
    container: Boolean,
    view: {
      type: String,
      default: "hhh lpr fff",
      validator: (v) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
    },
    onScroll: Function,
    onScrollHeight: Function,
    onResize: Function
  },
  setup(props4, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const rootRef = ref(null);
    const height2 = ref($q.screen.height);
    const width3 = ref(props4.container === true ? 0 : $q.screen.width);
    const scroll = ref({ position: 0, direction: "down", inflectionPoint: 0 });
    const containerHeight = ref(0);
    const scrollbarWidth = ref(isRuntimeSsrPreHydration.value === true ? 0 : getScrollbarWidth());
    const classes = computed(
      () => "q-layout q-layout--" + (props4.container === true ? "containerized" : "standard")
    );
    const style2 = computed(() => props4.container === false ? { minHeight: $q.screen.height + "px" } : null);
    const targetStyle = computed(() => scrollbarWidth.value !== 0 ? { [$q.lang.rtl === true ? "left" : "right"]: `${scrollbarWidth.value}px` } : null);
    const targetChildStyle = computed(() => scrollbarWidth.value !== 0 ? {
      [$q.lang.rtl === true ? "right" : "left"]: 0,
      [$q.lang.rtl === true ? "left" : "right"]: `-${scrollbarWidth.value}px`,
      width: `calc(100% + ${scrollbarWidth.value}px)`
    } : null);
    function onPageScroll(data) {
      if (props4.container === true || document.qScrollPrevented !== true) {
        const info = {
          position: data.position.top,
          direction: data.direction,
          directionChanged: data.directionChanged,
          inflectionPoint: data.inflectionPoint.top,
          delta: data.delta.top
        };
        scroll.value = info;
        props4.onScroll !== void 0 && emit("scroll", info);
      }
    }
    function onPageResize(data) {
      const { height: newHeight, width: newWidth } = data;
      let resized = false;
      if (height2.value !== newHeight) {
        resized = true;
        height2.value = newHeight;
        props4.onScrollHeight !== void 0 && emit("scrollHeight", newHeight);
        updateScrollbarWidth();
      }
      if (width3.value !== newWidth) {
        resized = true;
        width3.value = newWidth;
      }
      if (resized === true && props4.onResize !== void 0) {
        emit("resize", data);
      }
    }
    function onContainerResize({ height: height3 }) {
      if (containerHeight.value !== height3) {
        containerHeight.value = height3;
        updateScrollbarWidth();
      }
    }
    function updateScrollbarWidth() {
      if (props4.container === true) {
        const width4 = height2.value > containerHeight.value ? getScrollbarWidth() : 0;
        if (scrollbarWidth.value !== width4) {
          scrollbarWidth.value = width4;
        }
      }
    }
    let animateTimer = null;
    const $layout = {
      instances: {},
      view: computed(() => props4.view),
      isContainer: computed(() => props4.container),
      rootRef,
      height: height2,
      containerHeight,
      scrollbarWidth,
      totalWidth: computed(() => width3.value + scrollbarWidth.value),
      rows: computed(() => {
        const rows = props4.view.toLowerCase().split(" ");
        return {
          top: rows[0].split(""),
          middle: rows[1].split(""),
          bottom: rows[2].split("")
        };
      }),
      header: reactive({ size: 0, offset: 0, space: false }),
      right: reactive({ size: 300, offset: 0, space: false }),
      footer: reactive({ size: 0, offset: 0, space: false }),
      left: reactive({ size: 300, offset: 0, space: false }),
      scroll,
      animate() {
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
        } else {
          document.body.classList.add("q-body--layout-animate");
        }
        animateTimer = setTimeout(() => {
          animateTimer = null;
          document.body.classList.remove("q-body--layout-animate");
        }, 155);
      },
      update(part, prop, val) {
        $layout[part][prop] = val;
      }
    };
    provide(layoutKey, $layout);
    if (getScrollbarWidth() > 0) {
      let restoreScrollbar = function() {
        timer2 = null;
        el.classList.remove("hide-scrollbar");
      }, hideScrollbar = function() {
        if (timer2 === null) {
          if (el.scrollHeight > $q.screen.height) {
            return;
          }
          el.classList.add("hide-scrollbar");
        } else {
          clearTimeout(timer2);
        }
        timer2 = setTimeout(restoreScrollbar, 300);
      }, updateScrollEvent = function(action) {
        if (timer2 !== null && action === "remove") {
          clearTimeout(timer2);
          restoreScrollbar();
        }
        window[`${action}EventListener`]("resize", hideScrollbar);
      };
      let timer2 = null;
      const el = document.body;
      watch(
        () => props4.container !== true ? "add" : "remove",
        updateScrollEvent
      );
      props4.container !== true && updateScrollEvent("add");
      onUnmounted(() => {
        updateScrollEvent("remove");
      });
    }
    return () => {
      const content = hMergeSlot(slots.default, [
        h(QScrollObserver_default, { onScroll: onPageScroll }),
        h(QResizeObserver_default, { onResize: onPageResize })
      ]);
      const layout = h("div", {
        class: classes.value,
        style: style2.value,
        ref: props4.container === true ? void 0 : rootRef,
        tabindex: -1
      }, content);
      if (props4.container === true) {
        return h("div", {
          class: "q-layout-container overflow-hidden",
          ref: rootRef
        }, [
          h(QResizeObserver_default, { onResize: onContainerResize }),
          h("div", {
            class: "absolute-full",
            style: targetStyle.value
          }, [
            h("div", {
              class: "scroll",
              style: targetChildStyle.value
            }, [layout])
          ])
        ]);
      }
      return layout;
    };
  }
});
var separatorValues = ["horizontal", "vertical", "cell", "none"];
var QMarkupTable_default = createComponent({
  name: "QMarkupTable",
  props: {
    ...useDarkProps,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    wrapCells: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (v) => separatorValues.includes(v)
    }
  },
  setup(props4, { slots }) {
    const vm2 = getCurrentInstance();
    const isDark = use_dark_default(props4, vm2.proxy.$q);
    const classes = computed(
      () => `q-markup-table q-table__container q-table__card q-table--${props4.separator}-separator` + (isDark.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (props4.dense === true ? " q-table--dense" : "") + (props4.flat === true ? " q-table--flat" : "") + (props4.bordered === true ? " q-table--bordered" : "") + (props4.square === true ? " q-table--square" : "") + (props4.wrapCells === false ? " q-table--no-wrap" : "")
    );
    return () => h("div", {
      class: classes.value
    }, [
      h("table", { class: "q-table" }, hSlot(slots.default))
    ]);
  }
});
var QNoSsr_default = createComponent({
  name: "QNoSsr",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    placeholder: String
  },
  setup(props4, { slots }) {
    const { isHydrated } = use_hydration_default();
    return () => {
      if (isHydrated.value === true) {
        const node2 = hSlot(slots.default);
        return node2 === void 0 ? node2 : node2.length > 1 ? h(props4.tag, {}, node2) : node2[0];
      }
      const data = {
        class: "q-no-ssr-placeholder"
      };
      const node = hSlot(slots.placeholder);
      if (node !== void 0) {
        return node.length > 1 ? h(props4.tag, data, node) : node[0];
      }
      if (props4.placeholder !== void 0) {
        return h(props4.tag, data, props4.placeholder);
      }
    };
  }
});
var createSvg = () => h("svg", {
  key: "svg",
  class: "q-radio__bg absolute non-selectable",
  viewBox: "0 0 24 24"
}, [
  h("path", {
    d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
  }),
  h("path", {
    class: "q-radio__check",
    d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
  })
]);
var QRadio_default = createComponent({
  name: "QRadio",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    ...useFormProps,
    modelValue: { required: true },
    val: { required: true },
    label: String,
    leftLabel: Boolean,
    checkedIcon: String,
    uncheckedIcon: String,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const isDark = use_dark_default(props4, proxy.$q);
    const sizeStyle = use_size_default(props4, option_sizes_default);
    const rootRef = ref(null);
    const { refocusTargetEl, refocusTarget } = use_refocus_target_default(props4, rootRef);
    const isTrue = computed(() => toRaw(props4.modelValue) === toRaw(props4.val));
    const classes = computed(
      () => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (props4.disable === true ? " disabled" : "") + (isDark.value === true ? " q-radio--dark" : "") + (props4.dense === true ? " q-radio--dense" : "") + (props4.leftLabel === true ? " reverse" : "")
    );
    const innerClass = computed(() => {
      const color = props4.color !== void 0 && (props4.keepColor === true || isTrue.value === true) ? ` text-${props4.color}` : "";
      return `q-radio__inner relative-position q-radio__inner--${isTrue.value === true ? "truthy" : "falsy"}${color}`;
    });
    const icon = computed(
      () => (isTrue.value === true ? props4.checkedIcon : props4.uncheckedIcon) || null
    );
    const tabindex = computed(() => props4.disable === true ? -1 : props4.tabindex || 0);
    const formAttrs = computed(() => {
      const prop = { type: "radio" };
      props4.name !== void 0 && Object.assign(prop, {
        // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
        ".checked": isTrue.value === true,
        "^checked": isTrue.value === true ? "checked" : void 0,
        name: props4.name,
        value: props4.val
      });
      return prop;
    });
    const injectFormInput = useFormInject(formAttrs);
    function onClick(e) {
      if (e !== void 0) {
        stopAndPrevent(e);
        refocusTarget(e);
      }
      if (props4.disable !== true && isTrue.value !== true) {
        emit("update:modelValue", props4.val, e);
      }
    }
    function onKeydown2(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        stopAndPrevent(e);
      }
    }
    function onKeyup2(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        onClick(e);
      }
    }
    Object.assign(proxy, { set: onClick });
    const svg = createSvg();
    return () => {
      const content = icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
        }, [
          h(QIcon_default, {
            class: "q-radio__icon",
            name: icon.value
          })
        ])
      ] : [svg];
      props4.disable !== true && injectFormInput(
        content,
        "unshift",
        " q-radio__native q-ma-none q-pa-none"
      );
      const child = [
        h("div", {
          class: innerClass.value,
          style: sizeStyle.value,
          "aria-hidden": "true"
        }, content)
      ];
      if (refocusTargetEl.value !== null) {
        child.push(refocusTargetEl.value);
      }
      const label = props4.label !== void 0 ? hMergeSlot(slots.default, [props4.label]) : hSlot(slots.default);
      label !== void 0 && child.push(
        h("div", {
          class: "q-radio__label q-anchor--skip"
        }, label)
      );
      return h("div", {
        ref: rootRef,
        class: classes.value,
        tabindex: tabindex.value,
        role: "radio",
        "aria-label": props4.label,
        "aria-checked": isTrue.value === true ? "true" : "false",
        "aria-disabled": props4.disable === true ? "true" : void 0,
        onClick,
        onKeydown: onKeydown2,
        onKeyup: onKeyup2
      }, child);
    };
  }
});
var QToggle_default = createComponent({
  name: "QToggle",
  props: {
    ...useCheckboxProps,
    icon: String,
    iconColor: String
  },
  emits: useCheckboxEmits,
  setup(props4) {
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(
        () => (isTrue.value === true ? props4.checkedIcon : isIndeterminate.value === true ? props4.indeterminateIcon : props4.uncheckedIcon) || props4.icon
      );
      const color = computed(() => isTrue.value === true ? props4.iconColor : null);
      return () => [
        h("div", { class: "q-toggle__track" }),
        h(
          "div",
          {
            class: "q-toggle__thumb absolute flex flex-center no-wrap"
          },
          icon.value !== void 0 ? [
            h(QIcon_default, {
              name: icon.value,
              color: color.value
            })
          ] : void 0
        )
      ];
    }
    return use_checkbox_default("toggle", getInner);
  }
});
var components = {
  radio: QRadio_default,
  checkbox: QCheckbox_default,
  toggle: QToggle_default
};
var typeValues = Object.keys(components);
function getPropValueFn(userPropName, defaultPropName) {
  if (typeof userPropName === "function") return userPropName;
  const propName = userPropName !== void 0 ? userPropName : defaultPropName;
  return (opt) => opt[propName];
}
var QOptionGroup_default = createComponent({
  name: "QOptionGroup",
  props: {
    ...useDarkProps,
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      validator: (opts) => opts.every(isObject),
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    name: String,
    type: {
      type: String,
      default: "radio",
      validator: (v) => typeValues.includes(v)
    },
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    size: String,
    leftLabel: Boolean,
    inline: Boolean,
    disable: Boolean
  },
  emits: ["update:modelValue"],
  setup(props4, { emit, slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const arrayModel = Array.isArray(props4.modelValue);
    if (props4.type === "radio") {
      if (arrayModel === true) {
        console.error("q-option-group: model should not be array");
      }
    } else if (arrayModel === false) {
      console.error("q-option-group: model should be array in your case");
    }
    const isDark = use_dark_default(props4, $q);
    const component = computed(() => components[props4.type]);
    const getOptionValue = computed(() => getPropValueFn(props4.optionValue, "value"));
    const getOptionLabel = computed(() => getPropValueFn(props4.optionLabel, "label"));
    const getOptionDisable = computed(() => getPropValueFn(props4.optionDisable, "disable"));
    const innerOptions = computed(() => props4.options.map((opt) => ({
      val: getOptionValue.value(opt),
      name: opt.name === void 0 ? props4.name : opt.name,
      disable: props4.disable || getOptionDisable.value(opt),
      leftLabel: opt.leftLabel === void 0 ? props4.leftLabel : opt.leftLabel,
      color: opt.color === void 0 ? props4.color : opt.color,
      checkedIcon: opt.checkedIcon,
      uncheckedIcon: opt.uncheckedIcon,
      dark: opt.dark === void 0 ? isDark.value : opt.dark,
      size: opt.size === void 0 ? props4.size : opt.size,
      dense: props4.dense,
      keepColor: opt.keepColor === void 0 ? props4.keepColor : opt.keepColor
    })));
    const classes = computed(
      () => "q-option-group q-gutter-x-sm" + (props4.inline === true ? " q-option-group--inline" : "")
    );
    const attrs = computed(() => {
      const attrs2 = { role: "group" };
      if (props4.type === "radio") {
        attrs2.role = "radiogroup";
        if (props4.disable === true) {
          attrs2["aria-disabled"] = "true";
        }
      }
      return attrs2;
    });
    function onUpdateModelValue(value2) {
      emit("update:modelValue", value2);
    }
    return () => h("div", {
      class: classes.value,
      ...attrs.value
    }, props4.options.map((opt, i) => {
      const child = slots["label-" + i] !== void 0 ? () => slots["label-" + i](opt) : slots.label !== void 0 ? () => slots.label(opt) : void 0;
      return h("div", [
        h(component.value, {
          label: child === void 0 ? getOptionLabel.value(opt) : null,
          modelValue: props4.modelValue,
          "onUpdate:modelValue": onUpdateModelValue,
          ...innerOptions.value[i]
        }, child)
      ]);
    }));
  }
});
var QPage_default = createComponent({
  name: "QPage",
  props: {
    padding: Boolean,
    styleFn: Function
  },
  setup(props4, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPage needs to be a deep child of QLayout");
      return emptyRenderFn;
    }
    const $pageContainer = inject(pageContainerKey, emptyRenderFn);
    if ($pageContainer === emptyRenderFn) {
      console.error("QPage needs to be child of QPageContainer");
      return emptyRenderFn;
    }
    const style2 = computed(() => {
      const offset2 = ($layout.header.space === true ? $layout.header.size : 0) + ($layout.footer.space === true ? $layout.footer.size : 0);
      if (typeof props4.styleFn === "function") {
        const height2 = $layout.isContainer.value === true ? $layout.containerHeight.value : $q.screen.height;
        return props4.styleFn(offset2, height2);
      }
      return {
        minHeight: $layout.isContainer.value === true ? $layout.containerHeight.value - offset2 + "px" : $q.screen.height === 0 ? offset2 !== 0 ? `calc(100vh - ${offset2}px)` : "100vh" : $q.screen.height - offset2 + "px"
      };
    });
    const classes = computed(
      () => `q-page${props4.padding === true ? " q-layout-padding" : ""}`
    );
    return () => h("main", {
      class: classes.value,
      style: style2.value
    }, hSlot(slots.default));
  }
});
var QPageContainer_default = createComponent({
  name: "QPageContainer",
  setup(_, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPageContainer needs to be child of QLayout");
      return emptyRenderFn;
    }
    provide(pageContainerKey, true);
    const style2 = computed(() => {
      const css2 = {};
      if ($layout.header.space === true) {
        css2.paddingTop = `${$layout.header.size}px`;
      }
      if ($layout.right.space === true) {
        css2[`padding${$q.lang.rtl === true ? "Left" : "Right"}`] = `${$layout.right.size}px`;
      }
      if ($layout.footer.space === true) {
        css2.paddingBottom = `${$layout.footer.size}px`;
      }
      if ($layout.left.space === true) {
        css2[`padding${$q.lang.rtl === true ? "Right" : "Left"}`] = `${$layout.left.size}px`;
      }
      return css2;
    });
    return () => h("div", {
      class: "q-page-container",
      style: style2.value
    }, hSlot(slots.default));
  }
});
var usePageStickyProps = {
  position: {
    type: String,
    default: "bottom-right",
    validator: (v) => [
      "top-right",
      "top-left",
      "bottom-right",
      "bottom-left",
      "top",
      "right",
      "bottom",
      "left"
    ].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  },
  expand: Boolean
};
function use_page_sticky_default() {
  const { props: props4, proxy: { $q } } = getCurrentInstance();
  const $layout = inject(layoutKey, emptyRenderFn);
  if ($layout === emptyRenderFn) {
    console.error("QPageSticky needs to be child of QLayout");
    return emptyRenderFn;
  }
  const attach = computed(() => {
    const pos = props4.position;
    return {
      top: pos.indexOf("top") !== -1,
      right: pos.indexOf("right") !== -1,
      bottom: pos.indexOf("bottom") !== -1,
      left: pos.indexOf("left") !== -1,
      vertical: pos === "top" || pos === "bottom",
      horizontal: pos === "left" || pos === "right"
    };
  });
  const top = computed(() => $layout.header.offset);
  const right = computed(() => $layout.right.offset);
  const bottom = computed(() => $layout.footer.offset);
  const left = computed(() => $layout.left.offset);
  const style2 = computed(() => {
    let posX = 0, posY = 0;
    const side = attach.value;
    const dir = $q.lang.rtl === true ? -1 : 1;
    if (side.top === true && top.value !== 0) {
      posY = `${top.value}px`;
    } else if (side.bottom === true && bottom.value !== 0) {
      posY = `${-bottom.value}px`;
    }
    if (side.left === true && left.value !== 0) {
      posX = `${dir * left.value}px`;
    } else if (side.right === true && right.value !== 0) {
      posX = `${-dir * right.value}px`;
    }
    const css2 = { transform: `translate(${posX}, ${posY})` };
    if (props4.offset) {
      css2.margin = `${props4.offset[1]}px ${props4.offset[0]}px`;
    }
    if (side.vertical === true) {
      if (left.value !== 0) {
        css2[$q.lang.rtl === true ? "right" : "left"] = `${left.value}px`;
      }
      if (right.value !== 0) {
        css2[$q.lang.rtl === true ? "left" : "right"] = `${right.value}px`;
      }
    } else if (side.horizontal === true) {
      if (top.value !== 0) {
        css2.top = `${top.value}px`;
      }
      if (bottom.value !== 0) {
        css2.bottom = `${bottom.value}px`;
      }
    }
    return css2;
  });
  const classes = computed(
    () => `q-page-sticky row flex-center fixed-${props4.position} q-page-sticky--${props4.expand === true ? "expand" : "shrink"}`
  );
  function getStickyContent(slots) {
    const content = hSlot(slots.default);
    return h(
      "div",
      {
        class: classes.value,
        style: style2.value
      },
      props4.expand === true ? content : [h("div", content)]
    );
  }
  return {
    $layout,
    getStickyContent
  };
}
var QPageScroller_default = createComponent({
  name: "QPageScroller",
  props: {
    ...usePageStickyProps,
    scrollOffset: {
      type: Number,
      default: 1e3
    },
    reverse: Boolean,
    duration: {
      type: Number,
      default: 300
    },
    offset: {
      ...usePageStickyProps.offset,
      default: () => [18, 18]
    }
  },
  emits: ["click"],
  setup(props4, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const { $layout, getStickyContent } = use_page_sticky_default();
    const rootRef = ref(null);
    let heightWatcher;
    const scrollHeight = computed(() => $layout.height.value - ($layout.isContainer.value === true ? $layout.containerHeight.value : $q.screen.height));
    function isVisible() {
      return props4.reverse === true ? scrollHeight.value - $layout.scroll.value.position > props4.scrollOffset : $layout.scroll.value.position > props4.scrollOffset;
    }
    const showing = ref(isVisible());
    function updateVisibility() {
      const newVal = isVisible();
      if (showing.value !== newVal) {
        showing.value = newVal;
      }
    }
    function updateReverse() {
      if (props4.reverse === true) {
        if (heightWatcher === void 0) {
          heightWatcher = watch(scrollHeight, updateVisibility);
        }
      } else {
        cleanup();
      }
    }
    watch($layout.scroll, updateVisibility);
    watch(() => props4.reverse, updateReverse);
    function cleanup() {
      if (heightWatcher !== void 0) {
        heightWatcher();
        heightWatcher = void 0;
      }
    }
    function onClick(e) {
      const target2 = getScrollTarget(
        $layout.isContainer.value === true ? rootRef.value : $layout.rootRef.value
      );
      setVerticalScrollPosition(
        target2,
        props4.reverse === true ? $layout.height.value : 0,
        props4.duration
      );
      emit("click", e);
    }
    function getContent() {
      return showing.value === true ? h("div", {
        ref: rootRef,
        class: "q-page-scroller",
        onClick
      }, getStickyContent(slots)) : null;
    }
    updateReverse();
    onBeforeUnmount(cleanup);
    return () => h(
      Transition,
      { name: "q-transition--fade" },
      getContent
    );
  }
});
var QPageSticky_default = createComponent({
  name: "QPageSticky",
  props: usePageStickyProps,
  setup(_, { slots }) {
    const { getStickyContent } = use_page_sticky_default();
    return () => getStickyContent(slots);
  }
});
function getBool(val, otherwise) {
  return [true, false].includes(val) ? val : otherwise;
}
var QPagination_default = createComponent({
  name: "QPagination",
  props: {
    ...useDarkProps,
    modelValue: {
      type: Number,
      required: true
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      required: true
    },
    maxPages: {
      type: [Number, String],
      default: 0,
      validator: (v) => (typeof v === "string" ? parseInt(v, 10) : v) >= 0
    },
    inputStyle: [Array, String, Object],
    inputClass: [Array, String, Object],
    size: String,
    disable: Boolean,
    input: Boolean,
    iconPrev: String,
    iconNext: String,
    iconFirst: String,
    iconLast: String,
    toFn: Function,
    boundaryLinks: {
      type: Boolean,
      default: null
    },
    boundaryNumbers: {
      type: Boolean,
      default: null
    },
    directionLinks: {
      type: Boolean,
      default: null
    },
    ellipses: {
      type: Boolean,
      default: null
    },
    ripple: {
      type: [Boolean, Object],
      default: null
    },
    round: Boolean,
    rounded: Boolean,
    flat: Boolean,
    outline: Boolean,
    unelevated: Boolean,
    push: Boolean,
    glossy: Boolean,
    color: {
      type: String,
      default: "primary"
    },
    textColor: String,
    activeDesign: {
      type: String,
      default: "",
      values: (v) => v === "" || btnDesignOptions.includes(v)
    },
    activeColor: String,
    activeTextColor: String,
    gutter: String,
    padding: {
      type: String,
      default: "3px 2px"
    }
  },
  emits: ["update:modelValue"],
  setup(props4, { emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = use_dark_default(props4, $q);
    const minProp = computed(() => parseInt(props4.min, 10));
    const maxProp = computed(() => parseInt(props4.max, 10));
    const maxPagesProp = computed(() => parseInt(props4.maxPages, 10));
    const inputPlaceholder = computed(() => model.value + " / " + maxProp.value);
    const boundaryLinksProp = computed(() => getBool(props4.boundaryLinks, props4.input));
    const boundaryNumbersProp = computed(() => getBool(props4.boundaryNumbers, !props4.input));
    const directionLinksProp = computed(() => getBool(props4.directionLinks, props4.input));
    const ellipsesProp = computed(() => getBool(props4.ellipses, !props4.input));
    const newPage = ref(null);
    const model = computed({
      get: () => props4.modelValue,
      set: (val) => {
        val = parseInt(val, 10);
        if (props4.disable || isNaN(val)) {
          return;
        }
        const value2 = between(val, minProp.value, maxProp.value);
        if (props4.modelValue !== value2) {
          emit("update:modelValue", value2);
        }
      }
    });
    watch(() => `${minProp.value}|${maxProp.value}`, () => {
      model.value = props4.modelValue;
    });
    const classes = computed(
      () => "q-pagination row no-wrap items-center" + (props4.disable === true ? " disabled" : "")
    );
    const gutterProp = computed(() => props4.gutter in btnPadding ? `${btnPadding[props4.gutter]}px` : props4.gutter || null);
    const gutterStyle = computed(() => gutterProp.value !== null ? `--q-pagination-gutter-parent:-${gutterProp.value};--q-pagination-gutter-child:${gutterProp.value}` : null);
    const icons = computed(() => {
      const ico = [
        props4.iconFirst || $q.iconSet.pagination.first,
        props4.iconPrev || $q.iconSet.pagination.prev,
        props4.iconNext || $q.iconSet.pagination.next,
        props4.iconLast || $q.iconSet.pagination.last
      ];
      return $q.lang.rtl === true ? ico.reverse() : ico;
    });
    const attrs = computed(() => ({
      "aria-disabled": props4.disable === true ? "true" : "false",
      role: "navigation"
    }));
    const btnDesignProp = computed(() => getBtnDesign(props4, "flat"));
    const btnProps = computed(() => ({
      [btnDesignProp.value]: true,
      round: props4.round,
      rounded: props4.rounded,
      padding: props4.padding,
      color: props4.color,
      textColor: props4.textColor,
      size: props4.size,
      ripple: props4.ripple !== null ? props4.ripple : true
    }));
    const btnActiveDesignProp = computed(() => {
      const acc = { [btnDesignProp.value]: false };
      if (props4.activeDesign !== "") {
        acc[props4.activeDesign] = true;
      }
      return acc;
    });
    const activeBtnProps = computed(() => ({
      ...btnActiveDesignProp.value,
      color: props4.activeColor || props4.color,
      textColor: props4.activeTextColor || props4.textColor
    }));
    const btnConfig = computed(() => {
      let maxPages = Math.max(
        maxPagesProp.value,
        1 + (ellipsesProp.value ? 2 : 0) + (boundaryNumbersProp.value ? 2 : 0)
      );
      const acc = {
        pgFrom: minProp.value,
        pgTo: maxProp.value,
        ellipsesStart: false,
        ellipsesEnd: false,
        boundaryStart: false,
        boundaryEnd: false,
        marginalStyle: {
          minWidth: `${Math.max(2, String(maxProp.value).length)}em`
        }
      };
      if (maxPagesProp.value && maxPages < maxProp.value - minProp.value + 1) {
        maxPages = 1 + Math.floor(maxPages / 2) * 2;
        acc.pgFrom = Math.max(minProp.value, Math.min(maxProp.value - maxPages + 1, props4.modelValue - Math.floor(maxPages / 2)));
        acc.pgTo = Math.min(maxProp.value, acc.pgFrom + maxPages - 1);
        if (boundaryNumbersProp.value) {
          acc.boundaryStart = true;
          acc.pgFrom++;
        }
        if (ellipsesProp.value && acc.pgFrom > minProp.value + (boundaryNumbersProp.value ? 1 : 0)) {
          acc.ellipsesStart = true;
          acc.pgFrom++;
        }
        if (boundaryNumbersProp.value) {
          acc.boundaryEnd = true;
          acc.pgTo--;
        }
        if (ellipsesProp.value && acc.pgTo < maxProp.value - (boundaryNumbersProp.value ? 1 : 0)) {
          acc.ellipsesEnd = true;
          acc.pgTo--;
        }
      }
      return acc;
    });
    function set2(value2) {
      model.value = value2;
    }
    function setByOffset(offset2) {
      model.value = model.value + offset2;
    }
    const inputEvents = computed(() => {
      function updateModel2() {
        model.value = newPage.value;
        newPage.value = null;
      }
      return {
        "onUpdate:modelValue": (val) => {
          newPage.value = val;
        },
        onKeyup: (e) => {
          isKeyCode(e, 13) === true && updateModel2();
        },
        onBlur: updateModel2
      };
    });
    function getBtn2(cfg, page, active) {
      const data = {
        "aria-label": page,
        "aria-current": "false",
        ...btnProps.value,
        ...cfg
      };
      if (active === true) {
        Object.assign(data, {
          "aria-current": "true",
          ...activeBtnProps.value
        });
      }
      if (page !== void 0) {
        if (props4.toFn !== void 0) {
          data.to = props4.toFn(page);
        } else {
          data.onClick = () => {
            set2(page);
          };
        }
      }
      return h(QBtn_default, data);
    }
    Object.assign(proxy, { set: set2, setByOffset });
    return () => {
      const contentStart = [];
      const contentEnd = [];
      let contentMiddle;
      if (boundaryLinksProp.value === true) {
        contentStart.push(
          getBtn2({
            key: "bls",
            disable: props4.disable || props4.modelValue <= minProp.value,
            icon: icons.value[0]
          }, minProp.value)
        );
        contentEnd.unshift(
          getBtn2({
            key: "ble",
            disable: props4.disable || props4.modelValue >= maxProp.value,
            icon: icons.value[3]
          }, maxProp.value)
        );
      }
      if (directionLinksProp.value === true) {
        contentStart.push(
          getBtn2({
            key: "bdp",
            disable: props4.disable || props4.modelValue <= minProp.value,
            icon: icons.value[1]
          }, props4.modelValue - 1)
        );
        contentEnd.unshift(
          getBtn2({
            key: "bdn",
            disable: props4.disable || props4.modelValue >= maxProp.value,
            icon: icons.value[2]
          }, props4.modelValue + 1)
        );
      }
      if (props4.input !== true) {
        contentMiddle = [];
        const { pgFrom, pgTo, marginalStyle: style2 } = btnConfig.value;
        if (btnConfig.value.boundaryStart === true) {
          const active = minProp.value === props4.modelValue;
          contentStart.push(
            getBtn2({
              key: "bns",
              style: style2,
              disable: props4.disable,
              label: minProp.value
            }, minProp.value, active)
          );
        }
        if (btnConfig.value.boundaryEnd === true) {
          const active = maxProp.value === props4.modelValue;
          contentEnd.unshift(
            getBtn2({
              key: "bne",
              style: style2,
              disable: props4.disable,
              label: maxProp.value
            }, maxProp.value, active)
          );
        }
        if (btnConfig.value.ellipsesStart === true) {
          contentStart.push(
            getBtn2({
              key: "bes",
              style: style2,
              disable: props4.disable,
              label: "…",
              ripple: false
            }, pgFrom - 1)
          );
        }
        if (btnConfig.value.ellipsesEnd === true) {
          contentEnd.unshift(
            getBtn2({
              key: "bee",
              style: style2,
              disable: props4.disable,
              label: "…",
              ripple: false
            }, pgTo + 1)
          );
        }
        for (let i = pgFrom; i <= pgTo; i++) {
          contentMiddle.push(
            getBtn2({
              key: `bpg${i}`,
              style: style2,
              disable: props4.disable,
              label: i
            }, i, i === props4.modelValue)
          );
        }
      }
      return h("div", {
        class: classes.value,
        ...attrs.value
      }, [
        h("div", {
          class: "q-pagination__content row no-wrap items-center",
          style: gutterStyle.value
        }, [
          ...contentStart,
          props4.input === true ? h(QInput_default, {
            class: "inline",
            style: { width: `${inputPlaceholder.value.length / 1.5}em` },
            type: "number",
            dense: true,
            value: newPage.value,
            disable: props4.disable,
            dark: isDark.value,
            borderless: true,
            inputClass: props4.inputClass,
            inputStyle: props4.inputStyle,
            placeholder: inputPlaceholder.value,
            min: minProp.value,
            max: maxProp.value,
            ...inputEvents.value
          }) : h("div", {
            class: "q-pagination__middle row justify-center"
          }, contentMiddle),
          ...contentEnd
        ])
      ]);
    };
  }
});
function frame_debounce_default(fn) {
  let wait = false, frame, callArgs;
  function debounced() {
    callArgs = arguments;
    if (wait === true) return;
    wait = true;
    frame = window.requestAnimationFrame(() => {
      fn.apply(this, callArgs);
      callArgs = void 0;
      wait = false;
    });
  }
  debounced.cancel = () => {
    window.cancelAnimationFrame(frame);
    wait = false;
  };
  return debounced;
}
var { passive: passive4 } = listenOpts;
var QParallax_default = createComponent({
  name: "QParallax",
  props: {
    src: String,
    height: {
      type: Number,
      default: 500
    },
    speed: {
      type: Number,
      default: 1,
      validator: (v) => v >= 0 && v <= 1
    },
    scrollTarget: scrollTargetProp,
    onScroll: Function
  },
  setup(props4, { slots, emit }) {
    const percentScrolled = ref(0);
    const rootRef = ref(null);
    const mediaParentRef = ref(null);
    const mediaRef = ref(null);
    let isWorking, mediaEl, mediaHeight, resizeHandler, observer, localScrollTarget;
    watch(() => props4.height, () => {
      isWorking === true && updatePos();
    });
    watch(() => props4.scrollTarget, () => {
      if (isWorking === true) {
        stop2();
        start();
      }
    });
    let update6 = (percentage) => {
      percentScrolled.value = percentage;
      props4.onScroll !== void 0 && emit("scroll", percentage);
    };
    function updatePos() {
      let containerTop, containerHeight, containerBottom;
      if (localScrollTarget === window) {
        containerTop = 0;
        containerBottom = containerHeight = window.innerHeight;
      } else {
        containerTop = offset(localScrollTarget).top;
        containerHeight = height(localScrollTarget);
        containerBottom = containerTop + containerHeight;
      }
      const top = offset(rootRef.value).top;
      const bottom = top + props4.height;
      if (observer !== void 0 || bottom > containerTop && top < containerBottom) {
        const percent = (containerBottom - top) / (props4.height + containerHeight);
        setPos((mediaHeight - props4.height) * percent * props4.speed);
        update6(percent);
      }
    }
    let setPos = (offset2) => {
      mediaEl.style.transform = `translate3d(-50%,${Math.round(offset2)}px,0)`;
    };
    function onResize() {
      mediaHeight = mediaEl.naturalHeight || mediaEl.videoHeight || height(mediaEl);
      isWorking === true && updatePos();
    }
    function start() {
      isWorking = true;
      localScrollTarget = getScrollTarget(rootRef.value, props4.scrollTarget);
      localScrollTarget.addEventListener("scroll", updatePos, passive4);
      window.addEventListener("resize", resizeHandler, passive4);
      updatePos();
    }
    function stop2() {
      if (isWorking === true) {
        isWorking = false;
        localScrollTarget.removeEventListener("scroll", updatePos, passive4);
        window.removeEventListener("resize", resizeHandler, passive4);
        localScrollTarget = void 0;
        setPos.cancel();
        update6.cancel();
        resizeHandler.cancel();
      }
    }
    onMounted(() => {
      setPos = frame_debounce_default(setPos);
      update6 = frame_debounce_default(update6);
      resizeHandler = frame_debounce_default(onResize);
      mediaEl = slots.media !== void 0 ? mediaParentRef.value.children[0] : mediaRef.value;
      mediaEl.onload = mediaEl.onloadstart = mediaEl.loadedmetadata = onResize;
      onResize();
      mediaEl.style.display = "initial";
      if (window.IntersectionObserver !== void 0) {
        observer = new IntersectionObserver((entries) => {
          const fn = entries[0].isIntersecting === true ? start : stop2;
          fn();
        });
        observer.observe(rootRef.value);
      } else {
        start();
      }
    });
    onBeforeUnmount(() => {
      stop2();
      observer !== void 0 && observer.disconnect();
      mediaEl.onload = mediaEl.onloadstart = mediaEl.loadedmetadata = null;
    });
    return () => {
      return h("div", {
        ref: rootRef,
        class: "q-parallax",
        style: { height: `${props4.height}px` }
      }, [
        h("div", {
          ref: mediaParentRef,
          class: "q-parallax__media absolute-full"
        }, slots.media !== void 0 ? slots.media() : [
          h("img", {
            ref: mediaRef,
            src: props4.src
          })
        ]),
        h(
          "div",
          { class: "q-parallax__content absolute-full column flex-center" },
          slots.content !== void 0 ? slots.content({ percentScrolled: percentScrolled.value }) : hSlot(slots.default)
        )
      ]);
    };
  }
});
function cloneDeep(data, hash = /* @__PURE__ */ new WeakMap()) {
  if (Object(data) !== data) return data;
  if (hash.has(data)) return hash.get(data);
  const result = data instanceof Date ? new Date(data) : data instanceof RegExp ? new RegExp(data.source, data.flags) : data instanceof Set ? /* @__PURE__ */ new Set() : data instanceof Map ? /* @__PURE__ */ new Map() : typeof data.constructor !== "function" ? /* @__PURE__ */ Object.create(null) : data.prototype !== void 0 && typeof data.prototype.constructor === "function" ? data : new data.constructor();
  if (typeof data.constructor === "function" && typeof data.valueOf === "function") {
    const val = data.valueOf();
    if (Object(val) !== val) {
      const result2 = new data.constructor(val);
      hash.set(data, result2);
      return result2;
    }
  }
  hash.set(data, result);
  if (data instanceof Set) {
    data.forEach((val) => {
      result.add(cloneDeep(val, hash));
    });
  } else if (data instanceof Map) {
    data.forEach((val, key) => {
      result.set(key, cloneDeep(val, hash));
    });
  }
  return Object.assign(
    result,
    ...Object.keys(data).map((key) => ({ [key]: cloneDeep(data[key], hash) }))
  );
}
var QPopupEdit_default = createComponent({
  name: "QPopupEdit",
  props: {
    modelValue: {
      required: true
    },
    title: String,
    buttons: Boolean,
    labelSet: String,
    labelCancel: String,
    color: {
      type: String,
      default: "primary"
    },
    validate: {
      type: Function,
      default: () => true
    },
    autoSave: Boolean,
    /* menu props overrides */
    cover: {
      type: Boolean,
      default: true
    },
    /* end of menu props */
    disable: Boolean
  },
  emits: [
    "update:modelValue",
    "save",
    "cancel",
    "beforeShow",
    "show",
    "beforeHide",
    "hide"
  ],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const menuRef = ref(null);
    const initialValue = ref("");
    const currentModel = ref("");
    let validated = false;
    const scope = computed(() => {
      return injectProp({
        initialValue: initialValue.value,
        validate: props4.validate,
        set: set2,
        cancel,
        updatePosition
      }, "value", () => currentModel.value, (val) => {
        currentModel.value = val;
      });
    });
    function set2() {
      if (props4.validate(currentModel.value) === false) {
        return;
      }
      if (hasModelChanged() === true) {
        emit("save", currentModel.value, initialValue.value);
        emit("update:modelValue", currentModel.value);
      }
      closeMenu();
    }
    function cancel() {
      if (hasModelChanged() === true) {
        emit("cancel", currentModel.value, initialValue.value);
      }
      closeMenu();
    }
    function updatePosition() {
      nextTick(() => {
        menuRef.value.updatePosition();
      });
    }
    function hasModelChanged() {
      return isDeepEqual(currentModel.value, initialValue.value) === false;
    }
    function closeMenu() {
      validated = true;
      menuRef.value.hide();
    }
    function onBeforeShow() {
      validated = false;
      initialValue.value = cloneDeep(props4.modelValue);
      currentModel.value = cloneDeep(props4.modelValue);
      emit("beforeShow");
    }
    function onShow() {
      emit("show");
    }
    function onBeforeHide() {
      if (validated === false && hasModelChanged() === true) {
        if (props4.autoSave === true && props4.validate(currentModel.value) === true) {
          emit("save", currentModel.value, initialValue.value);
          emit("update:modelValue", currentModel.value);
        } else {
          emit("cancel", currentModel.value, initialValue.value);
        }
      }
      emit("beforeHide");
    }
    function onHide() {
      emit("hide");
    }
    function getContent() {
      const child = slots.default !== void 0 ? [].concat(slots.default(scope.value)) : [];
      props4.title && child.unshift(
        h("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, props4.title)
      );
      props4.buttons === true && child.push(
        h("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [
          h(QBtn_default, {
            flat: true,
            color: props4.color,
            label: props4.labelCancel || $q.lang.label.cancel,
            onClick: cancel
          }),
          h(QBtn_default, {
            flat: true,
            color: props4.color,
            label: props4.labelSet || $q.lang.label.set,
            onClick: set2
          })
        ])
      );
      return child;
    }
    Object.assign(proxy, {
      set: set2,
      cancel,
      show(e) {
        menuRef.value !== null && menuRef.value.show(e);
      },
      hide(e) {
        menuRef.value !== null && menuRef.value.hide(e);
      },
      updatePosition
    });
    return () => {
      if (props4.disable === true) return;
      return h(QMenu_default, {
        ref: menuRef,
        class: "q-popup-edit",
        cover: props4.cover,
        onBeforeShow,
        onShow,
        onBeforeHide,
        onHide,
        onEscapeKey: cancel
      }, getContent);
    };
  }
});
var QPopupProxy_default = createComponent({
  name: "QPopupProxy",
  props: {
    ...useAnchorProps,
    breakpoint: {
      type: [String, Number],
      default: 450
    }
  },
  emits: ["show", "hide"],
  setup(props4, { slots, emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const showing = ref(false);
    const popupRef = ref(null);
    const breakpoint = computed(() => parseInt(props4.breakpoint, 10));
    const { canShow } = use_anchor_default({ showing });
    function getType() {
      return $q.screen.width < breakpoint.value || $q.screen.height < breakpoint.value ? "dialog" : "menu";
    }
    const type = ref(getType());
    const popupProps = computed(
      () => type.value === "menu" ? { maxHeight: "99vh" } : {}
    );
    watch(() => getType(), (val) => {
      if (showing.value !== true) {
        type.value = val;
      }
    });
    function onShow(evt) {
      showing.value = true;
      emit("show", evt);
    }
    function onHide(evt) {
      showing.value = false;
      type.value = getType();
      emit("hide", evt);
    }
    Object.assign(proxy, {
      show(evt) {
        canShow(evt) === true && popupRef.value.show(evt);
      },
      hide(evt) {
        popupRef.value.hide(evt);
      },
      toggle(evt) {
        popupRef.value.toggle(evt);
      }
    });
    injectProp(proxy, "currentComponent", () => ({
      type: type.value,
      ref: popupRef.value
    }));
    return () => {
      const data = {
        ref: popupRef,
        ...popupProps.value,
        ...attrs,
        onShow,
        onHide
      };
      let component;
      if (type.value === "dialog") {
        component = QDialog_default;
      } else {
        component = QMenu_default;
        Object.assign(data, {
          target: props4.target,
          contextMenu: props4.contextMenu,
          noParentEvent: true,
          separateClosePopup: true
        });
      }
      return h(component, data, slots.default);
    };
  }
});
var defaultSizes3 = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
function width2(val, reverse, $q) {
  return {
    transform: reverse === true ? `translateX(${$q.lang.rtl === true ? "-" : ""}100%) scale3d(${-val},1,1)` : `scale3d(${val},1,1)`
  };
}
var QLinearProgress_default = createComponent({
  name: "QLinearProgress",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    value: {
      type: Number,
      default: 0
    },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: {
      type: [String, Number],
      default: 2100
    },
    instantFeedback: Boolean
  },
  setup(props4, { slots }) {
    const { proxy } = getCurrentInstance();
    const isDark = use_dark_default(props4, proxy.$q);
    const sizeStyle = use_size_default(props4, defaultSizes3);
    const motion = computed(() => props4.indeterminate === true || props4.query === true);
    const widthReverse = computed(() => props4.reverse !== props4.query);
    const style2 = computed(() => ({
      ...sizeStyle.value !== null ? sizeStyle.value : {},
      "--q-linear-progress-speed": `${props4.animationSpeed}ms`
    }));
    const classes = computed(
      () => "q-linear-progress" + (props4.color !== void 0 ? ` text-${props4.color}` : "") + (props4.reverse === true || props4.query === true ? " q-linear-progress--reverse" : "") + (props4.rounded === true ? " rounded-borders" : "")
    );
    const trackStyle = computed(() => width2(props4.buffer !== void 0 ? props4.buffer : 1, widthReverse.value, proxy.$q));
    const transitionSuffix = computed(() => `with${props4.instantFeedback === true ? "out" : ""}-transition`);
    const trackClass = computed(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${transitionSuffix.value} q-linear-progress__track--${isDark.value === true ? "dark" : "light"}` + (props4.trackColor !== void 0 ? ` bg-${props4.trackColor}` : "")
    );
    const modelStyle = computed(() => width2(motion.value === true ? 1 : props4.value, widthReverse.value, proxy.$q));
    const modelClass = computed(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${transitionSuffix.value} q-linear-progress__model--${motion.value === true ? "in" : ""}determinate`
    );
    const stripeStyle = computed(() => ({ width: `${props4.value * 100}%` }));
    const stripeClass = computed(
      () => `q-linear-progress__stripe absolute-${props4.reverse === true ? "right" : "left"} q-linear-progress__stripe--${transitionSuffix.value}`
    );
    return () => {
      const child = [
        h("div", {
          class: trackClass.value,
          style: trackStyle.value
        }),
        h("div", {
          class: modelClass.value,
          style: modelStyle.value
        })
      ];
      props4.stripe === true && motion.value === false && child.push(
        h("div", {
          class: stripeClass.value,
          style: stripeStyle.value
        })
      );
      return h("div", {
        class: classes.value,
        style: style2.value,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 1,
        "aria-valuenow": props4.indeterminate === true ? void 0 : props4.value
      }, hMergeSlot(slots.default, child));
    };
  }
});
var PULLER_HEIGHT = 40;
var OFFSET_TOP = 20;
var QPullToRefresh_default = createComponent({
  name: "QPullToRefresh",
  props: {
    color: String,
    bgColor: String,
    icon: String,
    noMouse: Boolean,
    disable: Boolean,
    scrollTarget: scrollTargetProp
  },
  emits: ["refresh"],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const state = ref("pull");
    const pullRatio = ref(0);
    const pulling = ref(false);
    const pullPosition = ref(-PULLER_HEIGHT);
    const animating = ref(false);
    const positionCSS = ref({});
    const style2 = computed(() => ({
      opacity: pullRatio.value,
      transform: `translateY(${pullPosition.value}px) rotate(${pullRatio.value * 360}deg)`
    }));
    const classes = computed(
      () => "q-pull-to-refresh__puller row flex-center" + (animating.value === true ? " q-pull-to-refresh__puller--animating" : "") + (props4.bgColor !== void 0 ? ` bg-${props4.bgColor}` : "")
    );
    function pull(event) {
      if (event.isFinal === true) {
        if (pulling.value === true) {
          pulling.value = false;
          if (state.value === "pulled") {
            state.value = "refreshing";
            animateTo({ pos: OFFSET_TOP });
            trigger3();
          } else if (state.value === "pull") {
            animateTo({ pos: -PULLER_HEIGHT, ratio: 0 });
          }
        }
        return;
      }
      if (animating.value === true || state.value === "refreshing") {
        return false;
      }
      if (event.isFirst === true) {
        if (getVerticalScrollPosition(localScrollTarget) !== 0 || event.direction !== "down") {
          if (pulling.value === true) {
            pulling.value = false;
            state.value = "pull";
            animateTo({ pos: -PULLER_HEIGHT, ratio: 0 });
          }
          return false;
        }
        pulling.value = true;
        const { top, left } = $el.getBoundingClientRect();
        positionCSS.value = {
          top: top + "px",
          left: left + "px",
          width: window.getComputedStyle($el).getPropertyValue("width")
        };
      }
      prevent(event.evt);
      const distance = Math.min(140, Math.max(0, event.distance.y));
      pullPosition.value = distance - PULLER_HEIGHT;
      pullRatio.value = between(distance / (OFFSET_TOP + PULLER_HEIGHT), 0, 1);
      const newState = pullPosition.value > OFFSET_TOP ? "pulled" : "pull";
      if (state.value !== newState) {
        state.value = newState;
      }
    }
    const directives = computed(() => {
      const modifiers = { down: true };
      if (props4.noMouse !== true) {
        modifiers.mouse = true;
      }
      return [[
        TouchPan_default,
        pull,
        void 0,
        modifiers
      ]];
    });
    const contentClass = computed(
      () => `q-pull-to-refresh__content${pulling.value === true ? " no-pointer-events" : ""}`
    );
    function trigger3() {
      emit("refresh", () => {
        animateTo({ pos: -PULLER_HEIGHT, ratio: 0 }, () => {
          state.value = "pull";
        });
      });
    }
    let $el, localScrollTarget, timer2 = null;
    function animateTo({ pos, ratio }, done) {
      animating.value = true;
      pullPosition.value = pos;
      if (ratio !== void 0) {
        pullRatio.value = ratio;
      }
      timer2 !== null && clearTimeout(timer2);
      timer2 = setTimeout(() => {
        timer2 = null;
        animating.value = false;
        done && done();
      }, 300);
    }
    function updateScrollTarget() {
      localScrollTarget = getScrollTarget($el, props4.scrollTarget);
    }
    watch(() => props4.scrollTarget, updateScrollTarget);
    onMounted(() => {
      $el = proxy.$el;
      updateScrollTarget();
    });
    onBeforeUnmount(() => {
      timer2 !== null && clearTimeout(timer2);
    });
    Object.assign(proxy, { trigger: trigger3, updateScrollTarget });
    return () => {
      const child = [
        h("div", { class: contentClass.value }, hSlot(slots.default)),
        h("div", {
          class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top",
          style: positionCSS.value
        }, [
          h("div", {
            class: classes.value,
            style: style2.value
          }, [
            state.value !== "refreshing" ? h(QIcon_default, {
              name: props4.icon || $q.iconSet.pullToRefresh.icon,
              color: props4.color,
              size: "32px"
            }) : h(QSpinner_default, {
              size: "24px",
              color: props4.color
            })
          ])
        ])
      ];
      return hDir(
        "div",
        { class: "q-pull-to-refresh" },
        child,
        "main",
        props4.disable === false,
        () => directives.value
      );
    };
  }
});
var dragType = {
  MIN: 0,
  RANGE: 1,
  MAX: 2
};
var QRange_default = createComponent({
  name: "QRange",
  props: {
    ...useSliderProps,
    modelValue: {
      type: Object,
      default: () => ({ min: null, max: null }),
      validator: (v) => "min" in v && "max" in v
    },
    dragRange: Boolean,
    dragOnlyRange: Boolean,
    leftLabelColor: String,
    leftLabelTextColor: String,
    rightLabelColor: String,
    rightLabelTextColor: String,
    leftLabelValue: [String, Number],
    rightLabelValue: [String, Number],
    leftThumbColor: String,
    rightThumbColor: String
  },
  emits: useSliderEmits,
  setup(props4, { emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const { state, methods } = use_slider_default({
      updateValue: updateValue2,
      updatePosition,
      getDragging,
      formAttrs: computed(() => ({
        type: "hidden",
        name: props4.name,
        value: `${props4.modelValue.min}|${props4.modelValue.max}`
      }))
    });
    const rootRef = ref(null);
    const curMinRatio = ref(0);
    const curMaxRatio = ref(0);
    const model = ref({ min: 0, max: 0 });
    function normalizeModel() {
      model.value.min = props4.modelValue.min === null ? state.innerMin.value : between(props4.modelValue.min, state.innerMin.value, state.innerMax.value);
      model.value.max = props4.modelValue.max === null ? state.innerMax.value : between(props4.modelValue.max, state.innerMin.value, state.innerMax.value);
    }
    watch(
      () => `${props4.modelValue.min}|${props4.modelValue.max}|${state.innerMin.value}|${state.innerMax.value}`,
      normalizeModel
    );
    normalizeModel();
    const modelMinRatio = computed(() => methods.convertModelToRatio(model.value.min));
    const modelMaxRatio = computed(() => methods.convertModelToRatio(model.value.max));
    const ratioMin = computed(() => state.active.value === true ? curMinRatio.value : modelMinRatio.value);
    const ratioMax = computed(() => state.active.value === true ? curMaxRatio.value : modelMaxRatio.value);
    const selectionBarStyle = computed(() => {
      const acc = {
        [state.positionProp.value]: `${100 * ratioMin.value}%`,
        [state.sizeProp.value]: `${100 * (ratioMax.value - ratioMin.value)}%`
      };
      if (props4.selectionImg !== void 0) {
        acc.backgroundImage = `url(${props4.selectionImg}) !important`;
      }
      return acc;
    });
    const trackContainerEvents = computed(() => {
      if (state.editable.value !== true) {
        return {};
      }
      if ($q.platform.is.mobile === true) {
        return { onClick: methods.onMobileClick };
      }
      const evt = { onMousedown: methods.onActivate };
      if (props4.dragRange === true || props4.dragOnlyRange === true) {
        Object.assign(evt, {
          onFocus: () => {
            state.focus.value = "both";
          },
          onBlur: methods.onBlur,
          onKeydown: onKeydown2,
          onKeyup: methods.onKeyup
        });
      }
      return evt;
    });
    function getEvents(side) {
      return $q.platform.is.mobile !== true && state.editable.value === true && props4.dragOnlyRange !== true ? {
        onFocus: () => {
          state.focus.value = side;
        },
        onBlur: methods.onBlur,
        onKeydown: onKeydown2,
        onKeyup: methods.onKeyup
      } : {};
    }
    const thumbTabindex = computed(() => props4.dragOnlyRange !== true ? state.tabindex.value : null);
    const trackContainerTabindex = computed(() => $q.platform.is.mobile !== true && (props4.dragRange || props4.dragOnlyRange === true) ? state.tabindex.value : null);
    const minThumbRef = ref(null);
    const minEvents = computed(() => getEvents("min"));
    const getMinThumb = methods.getThumbRenderFn({
      focusValue: "min",
      getNodeData: () => ({
        ref: minThumbRef,
        key: "tmin",
        ...minEvents.value,
        tabindex: thumbTabindex.value
      }),
      ratio: ratioMin,
      label: computed(() => props4.leftLabelValue !== void 0 ? props4.leftLabelValue : model.value.min),
      thumbColor: computed(() => props4.leftThumbColor || props4.thumbColor || props4.color),
      labelColor: computed(() => props4.leftLabelColor || props4.labelColor),
      labelTextColor: computed(() => props4.leftLabelTextColor || props4.labelTextColor)
    });
    const maxEvents = computed(() => getEvents("max"));
    const getMaxThumb = methods.getThumbRenderFn({
      focusValue: "max",
      getNodeData: () => ({
        ...maxEvents.value,
        key: "tmax",
        tabindex: thumbTabindex.value
      }),
      ratio: ratioMax,
      label: computed(() => props4.rightLabelValue !== void 0 ? props4.rightLabelValue : model.value.max),
      thumbColor: computed(() => props4.rightThumbColor || props4.thumbColor || props4.color),
      labelColor: computed(() => props4.rightLabelColor || props4.labelColor),
      labelTextColor: computed(() => props4.rightLabelTextColor || props4.labelTextColor)
    });
    function updateValue2(change) {
      if (model.value.min !== props4.modelValue.min || model.value.max !== props4.modelValue.max) {
        emit("update:modelValue", { ...model.value });
      }
      change === true && emit("change", { ...model.value });
    }
    function getDragging(event) {
      const { left, top, width: width3, height: height2 } = rootRef.value.getBoundingClientRect(), sensitivity = props4.dragOnlyRange === true ? 0 : props4.vertical === true ? minThumbRef.value.offsetHeight / (2 * height2) : minThumbRef.value.offsetWidth / (2 * width3);
      const dragging = {
        left,
        top,
        width: width3,
        height: height2,
        valueMin: model.value.min,
        valueMax: model.value.max,
        ratioMin: modelMinRatio.value,
        ratioMax: modelMaxRatio.value
      };
      const ratio = methods.getDraggingRatio(event, dragging);
      if (props4.dragOnlyRange !== true && ratio < dragging.ratioMin + sensitivity) {
        dragging.type = dragType.MIN;
      } else if (props4.dragOnlyRange === true || ratio < dragging.ratioMax - sensitivity) {
        if (props4.dragRange === true || props4.dragOnlyRange === true) {
          dragging.type = dragType.RANGE;
          Object.assign(dragging, {
            offsetRatio: ratio,
            offsetModel: methods.convertRatioToModel(ratio),
            rangeValue: dragging.valueMax - dragging.valueMin,
            rangeRatio: dragging.ratioMax - dragging.ratioMin
          });
        } else {
          dragging.type = dragging.ratioMax - ratio < ratio - dragging.ratioMin ? dragType.MAX : dragType.MIN;
        }
      } else {
        dragging.type = dragType.MAX;
      }
      return dragging;
    }
    function updatePosition(event, dragging = state.dragging.value) {
      let pos;
      const ratio = methods.getDraggingRatio(event, dragging);
      const localModel = methods.convertRatioToModel(ratio);
      switch (dragging.type) {
        case dragType.MIN:
          if (ratio <= dragging.ratioMax) {
            pos = {
              minR: ratio,
              maxR: dragging.ratioMax,
              min: localModel,
              max: dragging.valueMax
            };
            state.focus.value = "min";
          } else {
            pos = {
              minR: dragging.ratioMax,
              maxR: ratio,
              min: dragging.valueMax,
              max: localModel
            };
            state.focus.value = "max";
          }
          break;
        case dragType.MAX:
          if (ratio >= dragging.ratioMin) {
            pos = {
              minR: dragging.ratioMin,
              maxR: ratio,
              min: dragging.valueMin,
              max: localModel
            };
            state.focus.value = "max";
          } else {
            pos = {
              minR: ratio,
              maxR: dragging.ratioMin,
              min: localModel,
              max: dragging.valueMin
            };
            state.focus.value = "min";
          }
          break;
        case dragType.RANGE:
          const ratioDelta = ratio - dragging.offsetRatio, minR = between(dragging.ratioMin + ratioDelta, state.innerMinRatio.value, state.innerMaxRatio.value - dragging.rangeRatio), modelDelta = localModel - dragging.offsetModel, min = between(dragging.valueMin + modelDelta, state.innerMin.value, state.innerMax.value - dragging.rangeValue);
          pos = {
            minR,
            maxR: minR + dragging.rangeRatio,
            min: state.roundValueFn.value(min),
            max: state.roundValueFn.value(min + dragging.rangeValue)
          };
          state.focus.value = "both";
          break;
      }
      model.value = model.value.min === null || model.value.max === null ? { min: pos.min || props4.min, max: pos.max || props4.max } : { min: pos.min, max: pos.max };
      if (props4.snap !== true || props4.step === 0) {
        curMinRatio.value = pos.minR;
        curMaxRatio.value = pos.maxR;
      } else {
        curMinRatio.value = methods.convertModelToRatio(model.value.min);
        curMaxRatio.value = methods.convertModelToRatio(model.value.max);
      }
    }
    function onKeydown2(evt) {
      if (!keyCodes.includes(evt.keyCode)) {
        return;
      }
      stopAndPrevent(evt);
      const stepVal = ([34, 33].includes(evt.keyCode) ? 10 : 1) * state.keyStep.value, offset2 = ([34, 37, 40].includes(evt.keyCode) ? -1 : 1) * (state.isReversed.value === true ? -1 : 1) * (props4.vertical === true ? -1 : 1) * stepVal;
      if (state.focus.value === "both") {
        const interval = model.value.max - model.value.min;
        const min = between(
          state.roundValueFn.value(model.value.min + offset2),
          state.innerMin.value,
          state.innerMax.value - interval
        );
        model.value = {
          min,
          max: state.roundValueFn.value(min + interval)
        };
      } else if (state.focus.value === false) {
        return;
      } else {
        const which = state.focus.value;
        model.value = {
          ...model.value,
          [which]: between(
            state.roundValueFn.value(model.value[which] + offset2),
            which === "min" ? state.innerMin.value : model.value.min,
            which === "max" ? state.innerMax.value : model.value.max
          )
        };
      }
      updateValue2();
    }
    return () => {
      const content = methods.getContent(
        selectionBarStyle,
        trackContainerTabindex,
        trackContainerEvents,
        (node) => {
          node.push(
            getMinThumb(),
            getMaxThumb()
          );
        }
      );
      return h("div", {
        ref: rootRef,
        class: "q-range " + state.classes.value + (props4.modelValue.min === null || props4.modelValue.max === null ? " q-slider--no-value" : ""),
        ...state.attributes.value,
        "aria-valuenow": props4.modelValue.min + "|" + props4.modelValue.max
      }, content);
    };
  }
});
var QRating_default = createComponent({
  name: "QRating",
  props: {
    ...useSizeProps,
    ...useFormProps,
    modelValue: {
      type: Number,
      required: true
    },
    max: {
      type: [String, Number],
      default: 5
    },
    icon: [String, Array],
    iconHalf: [String, Array],
    iconSelected: [String, Array],
    iconAriaLabel: [String, Array],
    color: [String, Array],
    colorHalf: [String, Array],
    colorSelected: [String, Array],
    noReset: Boolean,
    noDimming: Boolean,
    readonly: Boolean,
    disable: Boolean
  },
  emits: ["update:modelValue"],
  setup(props4, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = use_size_default(props4);
    const formAttrs = useFormAttrs(props4);
    const injectFormInput = useFormInject(formAttrs);
    const mouseModel = ref(0);
    let iconRefs = {};
    const editable = computed(
      () => props4.readonly !== true && props4.disable !== true
    );
    const classes = computed(
      () => `q-rating row inline items-center q-rating--${editable.value === true ? "" : "non-"}editable` + (props4.noDimming === true ? " q-rating--no-dimming" : "") + (props4.disable === true ? " disabled" : "") + (props4.color !== void 0 && Array.isArray(props4.color) === false ? ` text-${props4.color}` : "")
    );
    const iconData = computed(() => {
      const iconLen = Array.isArray(props4.icon) === true ? props4.icon.length : 0, selIconLen = Array.isArray(props4.iconSelected) === true ? props4.iconSelected.length : 0, halfIconLen = Array.isArray(props4.iconHalf) === true ? props4.iconHalf.length : 0, colorLen = Array.isArray(props4.color) === true ? props4.color.length : 0, selColorLen = Array.isArray(props4.colorSelected) === true ? props4.colorSelected.length : 0, halfColorLen = Array.isArray(props4.colorHalf) === true ? props4.colorHalf.length : 0;
      return {
        iconLen,
        icon: iconLen > 0 ? props4.icon[iconLen - 1] : props4.icon,
        selIconLen,
        selIcon: selIconLen > 0 ? props4.iconSelected[selIconLen - 1] : props4.iconSelected,
        halfIconLen,
        halfIcon: halfIconLen > 0 ? props4.iconHalf[selIconLen - 1] : props4.iconHalf,
        colorLen,
        color: colorLen > 0 ? props4.color[colorLen - 1] : props4.color,
        selColorLen,
        selColor: selColorLen > 0 ? props4.colorSelected[selColorLen - 1] : props4.colorSelected,
        halfColorLen,
        halfColor: halfColorLen > 0 ? props4.colorHalf[halfColorLen - 1] : props4.colorHalf
      };
    });
    const iconLabel = computed(() => {
      if (typeof props4.iconAriaLabel === "string") {
        const label = props4.iconAriaLabel.length !== 0 ? `${props4.iconAriaLabel} ` : "";
        return (i) => `${label}${i}`;
      }
      if (Array.isArray(props4.iconAriaLabel) === true) {
        const iMax = props4.iconAriaLabel.length;
        if (iMax > 0) {
          return (i) => props4.iconAriaLabel[Math.min(i, iMax) - 1];
        }
      }
      return (i, label) => `${label} ${i}`;
    });
    const stars = computed(() => {
      const acc = [], icons = iconData.value, ceil = Math.ceil(props4.modelValue), tabindex = editable.value === true ? 0 : null;
      const halfIndex = props4.iconHalf === void 0 || ceil === props4.modelValue ? -1 : ceil;
      for (let i = 1; i <= props4.max; i++) {
        const active = mouseModel.value === 0 && props4.modelValue >= i || mouseModel.value > 0 && mouseModel.value >= i, half = halfIndex === i && mouseModel.value < i, exSelected = mouseModel.value > 0 && (half === true ? ceil : props4.modelValue) >= i && mouseModel.value < i, color = half === true ? i <= icons.halfColorLen ? props4.colorHalf[i - 1] : icons.halfColor : icons.selColor !== void 0 && active === true ? i <= icons.selColorLen ? props4.colorSelected[i - 1] : icons.selColor : i <= icons.colorLen ? props4.color[i - 1] : icons.color, name2 = (half === true ? i <= icons.halfIconLen ? props4.iconHalf[i - 1] : icons.halfIcon : icons.selIcon !== void 0 && (active === true || exSelected === true) ? i <= icons.selIconLen ? props4.iconSelected[i - 1] : icons.selIcon : i <= icons.iconLen ? props4.icon[i - 1] : icons.icon) || $q.iconSet.rating.icon;
        acc.push({
          name: (half === true ? i <= icons.halfIconLen ? props4.iconHalf[i - 1] : icons.halfIcon : icons.selIcon !== void 0 && (active === true || exSelected === true) ? i <= icons.selIconLen ? props4.iconSelected[i - 1] : icons.selIcon : i <= icons.iconLen ? props4.icon[i - 1] : icons.icon) || $q.iconSet.rating.icon,
          attrs: {
            tabindex,
            role: "radio",
            "aria-checked": props4.modelValue === i ? "true" : "false",
            "aria-label": iconLabel.value(i, name2)
          },
          iconClass: "q-rating__icon" + (active === true || half === true ? " q-rating__icon--active" : "") + (exSelected === true ? " q-rating__icon--exselected" : "") + (mouseModel.value === i ? " q-rating__icon--hovered" : "") + (color !== void 0 ? ` text-${color}` : "")
        });
      }
      return acc;
    });
    const attributes = computed(() => {
      const attrs = { role: "radiogroup" };
      if (props4.disable === true) {
        attrs["aria-disabled"] = "true";
      }
      if (props4.readonly === true) {
        attrs["aria-readonly"] = "true";
      }
      return attrs;
    });
    function set2(value2) {
      if (editable.value === true) {
        const model = between(parseInt(value2, 10), 1, parseInt(props4.max, 10)), newVal = props4.noReset !== true && props4.modelValue === model ? 0 : model;
        newVal !== props4.modelValue && emit("update:modelValue", newVal);
        mouseModel.value = 0;
      }
    }
    function setHoverValue(value2) {
      if (editable.value === true) {
        mouseModel.value = value2;
      }
    }
    function onKeyup2(e, i) {
      switch (e.keyCode) {
        case 13:
        case 32:
          set2(i);
          return stopAndPrevent(e);
        case 37:
        case 40:
          if (iconRefs[`rt${i - 1}`]) {
            iconRefs[`rt${i - 1}`].focus();
          }
          return stopAndPrevent(e);
        case 39:
        case 38:
          if (iconRefs[`rt${i + 1}`]) {
            iconRefs[`rt${i + 1}`].focus();
          }
          return stopAndPrevent(e);
      }
    }
    function resetMouseModel() {
      mouseModel.value = 0;
    }
    onBeforeUpdate(() => {
      iconRefs = {};
    });
    return () => {
      const child = [];
      stars.value.forEach(({ iconClass, name: name2, attrs }, index) => {
        const i = index + 1;
        child.push(
          h("div", {
            key: i,
            ref: (el) => {
              iconRefs[`rt${i}`] = el;
            },
            class: "q-rating__icon-container flex flex-center",
            ...attrs,
            onClick() {
              set2(i);
            },
            onMouseover() {
              setHoverValue(i);
            },
            onMouseout: resetMouseModel,
            onFocus() {
              setHoverValue(i);
            },
            onBlur: resetMouseModel,
            onKeyup(e) {
              onKeyup2(e, i);
            }
          }, hMergeSlot(
            slots[`tip-${i}`],
            [h(QIcon_default, { class: iconClass, name: name2 })]
          ))
        );
      });
      if (props4.name !== void 0 && props4.disable !== true) {
        injectFormInput(child, "push");
      }
      return h("div", {
        class: classes.value,
        style: sizeStyle.value,
        ...attributes.value
      }, child);
    };
  }
});
var QResponsive_default = createComponent({
  name: "QResponsive",
  props: useRatioProps,
  setup(props4, { slots }) {
    const ratioStyle = use_ratio_default(props4);
    return () => h("div", {
      class: "q-responsive"
    }, [
      h("div", {
        class: "q-responsive__filler overflow-hidden"
      }, [
        h("div", { style: ratioStyle.value })
      ]),
      h("div", {
        class: "q-responsive__content absolute-full fit"
      }, hSlot(slots.default))
    ]);
  }
});
var ScrollAreaControls_default = createComponent({
  props: [
    "store",
    "barStyle",
    "verticalBarStyle",
    "horizontalBarStyle"
  ],
  setup(props4) {
    return () => [
      h("div", {
        class: props4.store.scroll.vertical.barClass.value,
        style: [props4.barStyle, props4.verticalBarStyle],
        "aria-hidden": "true",
        onMousedown: props4.store.onVerticalMousedown
      }),
      h("div", {
        class: props4.store.scroll.horizontal.barClass.value,
        style: [props4.barStyle, props4.horizontalBarStyle],
        "aria-hidden": "true",
        onMousedown: props4.store.onHorizontalMousedown
      }),
      withDirectives(
        h("div", {
          ref: props4.store.scroll.vertical.ref,
          class: props4.store.scroll.vertical.thumbClass.value,
          style: props4.store.scroll.vertical.style.value,
          "aria-hidden": "true"
        }),
        props4.store.thumbVertDir
      ),
      withDirectives(
        h("div", {
          ref: props4.store.scroll.horizontal.ref,
          class: props4.store.scroll.horizontal.thumbClass.value,
          style: props4.store.scroll.horizontal.style.value,
          "aria-hidden": "true"
        }),
        props4.store.thumbHorizDir
      )
    ];
  }
});
var axisList = ["vertical", "horizontal"];
var dirProps = {
  vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" },
  horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" }
};
var panOpts = {
  prevent: true,
  mouse: true,
  mouseAllDir: true
};
var getMinThumbSize = (size2) => size2 >= 250 ? 50 : Math.ceil(size2 / 5);
var QScrollArea_default = createComponent({
  name: "QScrollArea",
  props: {
    ...useDarkProps,
    thumbStyle: Object,
    verticalThumbStyle: Object,
    horizontalThumbStyle: Object,
    barStyle: [Array, String, Object],
    verticalBarStyle: [Array, String, Object],
    horizontalBarStyle: [Array, String, Object],
    verticalOffset: {
      type: Array,
      default: [0, 0]
    },
    horizontalOffset: {
      type: Array,
      default: [0, 0]
    },
    contentStyle: [Array, String, Object],
    contentActiveStyle: [Array, String, Object],
    delay: {
      type: [String, Number],
      default: 1e3
    },
    visible: {
      type: Boolean,
      default: null
    },
    tabindex: [String, Number],
    onScroll: Function
  },
  setup(props4, { slots, emit }) {
    const tempShowing = ref(false);
    const panning = ref(false);
    const hover = ref(false);
    const container = {
      vertical: ref(0),
      horizontal: ref(0)
    };
    const scroll = {
      vertical: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      },
      horizontal: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      }
    };
    const { proxy } = getCurrentInstance();
    const isDark = use_dark_default(props4, proxy.$q);
    let timer2 = null, panRefPos;
    const targetRef = ref(null);
    const classes = computed(
      () => "q-scrollarea" + (isDark.value === true ? " q-scrollarea--dark" : "")
    );
    Object.assign(container, {
      verticalInner: computed(() => container.vertical.value - props4.verticalOffset[0] - props4.verticalOffset[1]),
      horizontalInner: computed(() => container.horizontal.value - props4.horizontalOffset[0] - props4.horizontalOffset[1])
    });
    scroll.vertical.percentage = computed(() => {
      const diff2 = scroll.vertical.size.value - container.vertical.value;
      if (diff2 <= 0) {
        return 0;
      }
      const p = between(scroll.vertical.position.value / diff2, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.vertical.thumbHidden = computed(() => (props4.visible === null ? hover.value : props4.visible) !== true && tempShowing.value === false && panning.value === false || scroll.vertical.size.value <= container.vertical.value + 1);
    scroll.vertical.thumbStart = computed(() => props4.verticalOffset[0] + scroll.vertical.percentage.value * (container.verticalInner.value - scroll.vertical.thumbSize.value));
    scroll.vertical.thumbSize = computed(
      () => Math.round(
        between(
          container.verticalInner.value * container.verticalInner.value / scroll.vertical.size.value,
          getMinThumbSize(container.verticalInner.value),
          container.verticalInner.value
        )
      )
    );
    scroll.vertical.style = computed(() => ({
      ...props4.thumbStyle,
      ...props4.verticalThumbStyle,
      top: `${scroll.vertical.thumbStart.value}px`,
      height: `${scroll.vertical.thumbSize.value}px`,
      right: `${props4.horizontalOffset[1]}px`
    }));
    scroll.vertical.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : ""));
    scroll.vertical.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
    scroll.horizontal.percentage = computed(() => {
      const diff2 = scroll.horizontal.size.value - container.horizontal.value;
      if (diff2 <= 0) {
        return 0;
      }
      const p = between(Math.abs(scroll.horizontal.position.value) / diff2, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.horizontal.thumbHidden = computed(() => (props4.visible === null ? hover.value : props4.visible) !== true && tempShowing.value === false && panning.value === false || scroll.horizontal.size.value <= container.horizontal.value + 1);
    scroll.horizontal.thumbStart = computed(() => props4.horizontalOffset[0] + scroll.horizontal.percentage.value * (container.horizontalInner.value - scroll.horizontal.thumbSize.value));
    scroll.horizontal.thumbSize = computed(
      () => Math.round(
        between(
          container.horizontalInner.value * container.horizontalInner.value / scroll.horizontal.size.value,
          getMinThumbSize(container.horizontalInner.value),
          container.horizontalInner.value
        )
      )
    );
    scroll.horizontal.style = computed(() => ({
      ...props4.thumbStyle,
      ...props4.horizontalThumbStyle,
      [proxy.$q.lang.rtl === true ? "right" : "left"]: `${scroll.horizontal.thumbStart.value}px`,
      width: `${scroll.horizontal.thumbSize.value}px`,
      bottom: `${props4.verticalOffset[1]}px`
    }));
    scroll.horizontal.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : ""));
    scroll.horizontal.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
    const mainStyle = computed(() => scroll.vertical.thumbHidden.value === true && scroll.horizontal.thumbHidden.value === true ? props4.contentStyle : props4.contentActiveStyle);
    function getScroll() {
      const info = {};
      axisList.forEach((axis) => {
        const data = scroll[axis];
        Object.assign(info, {
          [axis + "Position"]: data.position.value,
          [axis + "Percentage"]: data.percentage.value,
          [axis + "Size"]: data.size.value,
          [axis + "ContainerSize"]: container[axis].value,
          [axis + "ContainerInnerSize"]: container[axis + "Inner"].value
        });
      });
      return info;
    }
    const emitScroll = debounce_default(() => {
      const info = getScroll();
      info.ref = proxy;
      emit("scroll", info);
    }, 0);
    function localSetScrollPosition(axis, offset2, duration2) {
      if (axisList.includes(axis) === false) {
        console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
        return;
      }
      const fn = axis === "vertical" ? setVerticalScrollPosition : setHorizontalScrollPosition;
      fn(targetRef.value, offset2, duration2);
    }
    function updateContainer({ height: height2, width: width3 }) {
      let change = false;
      if (container.vertical.value !== height2) {
        container.vertical.value = height2;
        change = true;
      }
      if (container.horizontal.value !== width3) {
        container.horizontal.value = width3;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScroll({ position: position2 }) {
      let change = false;
      if (scroll.vertical.position.value !== position2.top) {
        scroll.vertical.position.value = position2.top;
        change = true;
      }
      if (scroll.horizontal.position.value !== position2.left) {
        scroll.horizontal.position.value = position2.left;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScrollSize({ height: height2, width: width3 }) {
      if (scroll.horizontal.size.value !== width3) {
        scroll.horizontal.size.value = width3;
        startTimer();
      }
      if (scroll.vertical.size.value !== height2) {
        scroll.vertical.size.value = height2;
        startTimer();
      }
    }
    function onPanThumb(e, axis) {
      const data = scroll[axis];
      if (e.isFirst === true) {
        if (data.thumbHidden.value === true) {
          return;
        }
        panRefPos = data.position.value;
        panning.value = true;
      } else if (panning.value !== true) {
        return;
      }
      if (e.isFinal === true) {
        panning.value = false;
      }
      const dProp = dirProps[axis];
      const multiplier = (data.size.value - container[axis].value) / (container[axis + "Inner"].value - data.thumbSize.value);
      const distance = e.distance[dProp.dist];
      const pos = panRefPos + (e.direction === dProp.dir ? 1 : -1) * distance * multiplier;
      setScroll3(pos, axis);
    }
    function onMousedown(evt, axis) {
      const data = scroll[axis];
      if (data.thumbHidden.value !== true) {
        const startOffset = axis === "vertical" ? props4.verticalOffset[0] : props4.horizontalOffset[0];
        const offset2 = evt[dirProps[axis].offset] - startOffset;
        const thumbStart = data.thumbStart.value - startOffset;
        if (offset2 < thumbStart || offset2 > thumbStart + data.thumbSize.value) {
          const targetThumbStart = offset2 - data.thumbSize.value / 2;
          const percentage = between(targetThumbStart / (container[axis + "Inner"].value - data.thumbSize.value), 0, 1);
          setScroll3(percentage * Math.max(0, data.size.value - container[axis].value), axis);
        }
        if (data.ref.value !== null) {
          data.ref.value.dispatchEvent(new MouseEvent(evt.type, evt));
        }
      }
    }
    function startTimer() {
      tempShowing.value = true;
      timer2 !== null && clearTimeout(timer2);
      timer2 = setTimeout(() => {
        timer2 = null;
        tempShowing.value = false;
      }, props4.delay);
      props4.onScroll !== void 0 && emitScroll();
    }
    function setScroll3(offset2, axis) {
      targetRef.value[dirProps[axis].scroll] = offset2;
    }
    let mouseEventTimer = null;
    function onMouseenter() {
      if (mouseEventTimer !== null) {
        clearTimeout(mouseEventTimer);
      }
      mouseEventTimer = setTimeout(() => {
        mouseEventTimer = null;
        hover.value = true;
      }, proxy.$q.platform.is.ios ? 50 : 0);
    }
    function onMouseleave() {
      if (mouseEventTimer !== null) {
        clearTimeout(mouseEventTimer);
        mouseEventTimer = null;
      }
      hover.value = false;
    }
    let scrollPosition = null;
    watch(() => proxy.$q.lang.rtl, (rtl) => {
      if (targetRef.value !== null) {
        setHorizontalScrollPosition(
          targetRef.value,
          Math.abs(scroll.horizontal.position.value) * (rtl === true ? -1 : 1)
        );
      }
    });
    onDeactivated(() => {
      scrollPosition = {
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      };
    });
    onActivated(() => {
      if (scrollPosition === null) return;
      const scrollTarget = targetRef.value;
      if (scrollTarget !== null) {
        setHorizontalScrollPosition(scrollTarget, scrollPosition.left);
        setVerticalScrollPosition(scrollTarget, scrollPosition.top);
      }
    });
    onBeforeUnmount(emitScroll.cancel);
    Object.assign(proxy, {
      getScrollTarget: () => targetRef.value,
      getScroll,
      getScrollPosition: () => ({
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      }),
      getScrollPercentage: () => ({
        top: scroll.vertical.percentage.value,
        left: scroll.horizontal.percentage.value
      }),
      setScrollPosition: localSetScrollPosition,
      setScrollPercentage(axis, percentage, duration2) {
        localSetScrollPosition(
          axis,
          percentage * (scroll[axis].size.value - container[axis].value) * (axis === "horizontal" && proxy.$q.lang.rtl === true ? -1 : 1),
          duration2
        );
      }
    });
    const store = {
      scroll,
      thumbVertDir: [[
        TouchPan_default,
        (e) => {
          onPanThumb(e, "vertical");
        },
        void 0,
        { vertical: true, ...panOpts }
      ]],
      thumbHorizDir: [[
        TouchPan_default,
        (e) => {
          onPanThumb(e, "horizontal");
        },
        void 0,
        { horizontal: true, ...panOpts }
      ]],
      onVerticalMousedown(evt) {
        onMousedown(evt, "vertical");
      },
      onHorizontalMousedown(evt) {
        onMousedown(evt, "horizontal");
      }
    };
    return () => {
      return h("div", {
        class: classes.value,
        onMouseenter,
        onMouseleave
      }, [
        h("div", {
          ref: targetRef,
          class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
          tabindex: props4.tabindex !== void 0 ? props4.tabindex : void 0
        }, [
          h("div", {
            class: "q-scrollarea__content absolute",
            style: mainStyle.value
          }, hMergeSlot(slots.default, [
            h(QResizeObserver_default, {
              debounce: 0,
              onResize: updateScrollSize
            })
          ])),
          h(QScrollObserver_default, {
            axis: "both",
            onScroll: updateScroll
          })
        ]),
        h(QResizeObserver_default, {
          debounce: 0,
          onResize: updateContainer
        }),
        h(ScrollAreaControls_default, {
          store,
          barStyle: props4.barStyle,
          verticalBarStyle: props4.verticalBarStyle,
          horizontalBarStyle: props4.horizontalBarStyle
        })
      ]);
    };
  }
});
var aggBucketSize = 1e3;
var scrollToEdges = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
];
var filterProto = Array.prototype.filter;
var setOverflowAnchor = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? noop : function(contentEl, index) {
  if (contentEl === null) {
    return;
  }
  if (contentEl._qOverflowAnimationFrame !== void 0) {
    cancelAnimationFrame(contentEl._qOverflowAnimationFrame);
  }
  contentEl._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (contentEl === null) {
      return;
    }
    contentEl._qOverflowAnimationFrame = void 0;
    const children = contentEl.children || [];
    filterProto.call(children, (el2) => el2.dataset && el2.dataset.qVsAnchor !== void 0).forEach((el2) => {
      delete el2.dataset.qVsAnchor;
    });
    const el = children[index];
    if (el && el.dataset) {
      el.dataset.qVsAnchor = "";
    }
  });
};
function sumFn(acc, h138) {
  return acc + h138;
}
function getScrollDetails(parent, child, beforeRef, afterRef, horizontal, rtl, stickyStart, stickyEnd) {
  const parentCalc = parent === window ? document.scrollingElement || document.documentElement : parent, propElSize = horizontal === true ? "offsetWidth" : "offsetHeight", details = {
    scrollStart: 0,
    scrollViewSize: -stickyStart - stickyEnd,
    scrollMaxSize: 0,
    offsetStart: -stickyStart,
    offsetEnd: -stickyEnd
  };
  if (horizontal === true) {
    if (parent === window) {
      details.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
      details.scrollViewSize += document.documentElement.clientWidth;
    } else {
      details.scrollStart = parentCalc.scrollLeft;
      details.scrollViewSize += parentCalc.clientWidth;
    }
    details.scrollMaxSize = parentCalc.scrollWidth;
    if (rtl === true) {
      details.scrollStart = (rtlHasScrollBug === true ? details.scrollMaxSize - details.scrollViewSize : 0) - details.scrollStart;
    }
  } else {
    if (parent === window) {
      details.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
      details.scrollViewSize += document.documentElement.clientHeight;
    } else {
      details.scrollStart = parentCalc.scrollTop;
      details.scrollViewSize += parentCalc.clientHeight;
    }
    details.scrollMaxSize = parentCalc.scrollHeight;
  }
  if (beforeRef !== null) {
    for (let el = beforeRef.previousElementSibling; el !== null; el = el.previousElementSibling) {
      if (el.classList.contains("q-virtual-scroll--skip") === false) {
        details.offsetStart += el[propElSize];
      }
    }
  }
  if (afterRef !== null) {
    for (let el = afterRef.nextElementSibling; el !== null; el = el.nextElementSibling) {
      if (el.classList.contains("q-virtual-scroll--skip") === false) {
        details.offsetEnd += el[propElSize];
      }
    }
  }
  if (child !== parent) {
    const parentRect = parentCalc.getBoundingClientRect(), childRect = child.getBoundingClientRect();
    if (horizontal === true) {
      details.offsetStart += childRect.left - parentRect.left;
      details.offsetEnd -= childRect.width;
    } else {
      details.offsetStart += childRect.top - parentRect.top;
      details.offsetEnd -= childRect.height;
    }
    if (parent !== window) {
      details.offsetStart += details.scrollStart;
    }
    details.offsetEnd += details.scrollMaxSize - details.offsetStart;
  }
  return details;
}
function setScroll2(parent, scroll, horizontal, rtl) {
  if (scroll === "end") {
    scroll = (parent === window ? document.body : parent)[horizontal === true ? "scrollWidth" : "scrollHeight"];
  }
  if (parent === window) {
    if (horizontal === true) {
      if (rtl === true) {
        scroll = (rtlHasScrollBug === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - scroll;
      }
      window.scrollTo(scroll, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    } else {
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, scroll);
    }
  } else if (horizontal === true) {
    if (rtl === true) {
      scroll = (rtlHasScrollBug === true ? parent.scrollWidth - parent.offsetWidth : 0) - scroll;
    }
    parent.scrollLeft = scroll;
  } else {
    parent.scrollTop = scroll;
  }
}
function sumSize(sizeAgg, size2, from, to) {
  if (from >= to) {
    return 0;
  }
  const lastTo = size2.length, fromAgg = Math.floor(from / aggBucketSize), toAgg = Math.floor((to - 1) / aggBucketSize) + 1;
  let total = sizeAgg.slice(fromAgg, toAgg).reduce(sumFn, 0);
  if (from % aggBucketSize !== 0) {
    total -= size2.slice(fromAgg * aggBucketSize, from).reduce(sumFn, 0);
  }
  if (to % aggBucketSize !== 0 && to !== lastTo) {
    total -= size2.slice(to, toAgg * aggBucketSize).reduce(sumFn, 0);
  }
  return total;
}
var commonVirtScrollProps = {
  virtualScrollSliceSize: {
    type: [Number, String],
    default: 10
  },
  virtualScrollSliceRatioBefore: {
    type: [Number, String],
    default: 1
  },
  virtualScrollSliceRatioAfter: {
    type: [Number, String],
    default: 1
  },
  virtualScrollItemSize: {
    type: [Number, String],
    default: 24
  },
  virtualScrollStickySizeStart: {
    type: [Number, String],
    default: 0
  },
  virtualScrollStickySizeEnd: {
    type: [Number, String],
    default: 0
  },
  tableColspan: [Number, String]
};
var commonVirtScrollPropsList = Object.keys(commonVirtScrollProps);
var useVirtualScrollProps = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...commonVirtScrollProps
};
function useVirtualScroll({
  virtualScrollLength,
  getVirtualScrollTarget,
  getVirtualScrollEl,
  virtualScrollItemSizeComputed
  // optional
}) {
  const vm2 = getCurrentInstance();
  const { props: props4, emit, proxy } = vm2;
  const { $q } = proxy;
  let prevScrollStart, prevToIndex, localScrollViewSize, virtualScrollSizesAgg = [], virtualScrollSizes;
  const virtualScrollPaddingBefore = ref(0);
  const virtualScrollPaddingAfter = ref(0);
  const virtualScrollSliceSizeComputed = ref({});
  const beforeRef = ref(null);
  const afterRef = ref(null);
  const contentRef = ref(null);
  const virtualScrollSliceRange = ref({ from: 0, to: 0 });
  const colspanAttr = computed(() => props4.tableColspan !== void 0 ? props4.tableColspan : 100);
  if (virtualScrollItemSizeComputed === void 0) {
    virtualScrollItemSizeComputed = computed(() => props4.virtualScrollItemSize);
  }
  const needsReset = computed(() => virtualScrollItemSizeComputed.value + ";" + props4.virtualScrollHorizontal);
  const needsSliceRecalc = computed(
    () => needsReset.value + ";" + props4.virtualScrollSliceRatioBefore + ";" + props4.virtualScrollSliceRatioAfter
  );
  watch(needsSliceRecalc, () => {
    setVirtualScrollSize();
  });
  watch(needsReset, reset);
  function reset() {
    localResetVirtualScroll(prevToIndex, true);
  }
  function refresh(toIndex) {
    localResetVirtualScroll(toIndex === void 0 ? prevToIndex : toIndex);
  }
  function scrollTo(toIndex, edge) {
    const scrollEl = getVirtualScrollTarget();
    if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
      return;
    }
    const scrollDetails = getScrollDetails(
      scrollEl,
      getVirtualScrollEl(),
      beforeRef.value,
      afterRef.value,
      props4.virtualScrollHorizontal,
      $q.lang.rtl,
      props4.virtualScrollStickySizeStart,
      props4.virtualScrollStickySizeEnd
    );
    localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
    setVirtualScrollSliceRange(
      scrollEl,
      scrollDetails,
      Math.min(virtualScrollLength.value - 1, Math.max(0, parseInt(toIndex, 10) || 0)),
      0,
      scrollToEdges.indexOf(edge) !== -1 ? edge : prevToIndex !== -1 && toIndex > prevToIndex ? "end" : "start"
    );
  }
  function localOnVirtualScrollEvt() {
    const scrollEl = getVirtualScrollTarget();
    if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
      return;
    }
    const scrollDetails = getScrollDetails(
      scrollEl,
      getVirtualScrollEl(),
      beforeRef.value,
      afterRef.value,
      props4.virtualScrollHorizontal,
      $q.lang.rtl,
      props4.virtualScrollStickySizeStart,
      props4.virtualScrollStickySizeEnd
    ), listLastIndex = virtualScrollLength.value - 1, listEndOffset = scrollDetails.scrollMaxSize - scrollDetails.offsetStart - scrollDetails.offsetEnd - virtualScrollPaddingAfter.value;
    if (prevScrollStart === scrollDetails.scrollStart) {
      return;
    }
    if (scrollDetails.scrollMaxSize <= 0) {
      setVirtualScrollSliceRange(scrollEl, scrollDetails, 0, 0);
      return;
    }
    localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
    updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
    const scrollMaxStart = Math.floor(scrollDetails.scrollMaxSize - Math.max(scrollDetails.scrollViewSize, scrollDetails.offsetEnd) - Math.min(virtualScrollSizes[listLastIndex], scrollDetails.scrollViewSize / 2));
    if (scrollMaxStart > 0 && Math.ceil(scrollDetails.scrollStart) >= scrollMaxStart) {
      setVirtualScrollSliceRange(
        scrollEl,
        scrollDetails,
        listLastIndex,
        scrollDetails.scrollMaxSize - scrollDetails.offsetEnd - virtualScrollSizesAgg.reduce(sumFn, 0)
      );
      return;
    }
    let toIndex = 0, listOffset = scrollDetails.scrollStart - scrollDetails.offsetStart, offset2 = listOffset;
    if (listOffset <= listEndOffset && listOffset + scrollDetails.scrollViewSize >= virtualScrollPaddingBefore.value) {
      listOffset -= virtualScrollPaddingBefore.value;
      toIndex = virtualScrollSliceRange.value.from;
      offset2 = listOffset;
    } else {
      for (let j = 0; listOffset >= virtualScrollSizesAgg[j] && toIndex < listLastIndex; j++) {
        listOffset -= virtualScrollSizesAgg[j];
        toIndex += aggBucketSize;
      }
    }
    while (listOffset > 0 && toIndex < listLastIndex) {
      listOffset -= virtualScrollSizes[toIndex];
      if (listOffset > -scrollDetails.scrollViewSize) {
        toIndex++;
        offset2 = listOffset;
      } else {
        offset2 = virtualScrollSizes[toIndex] + listOffset;
      }
    }
    setVirtualScrollSliceRange(
      scrollEl,
      scrollDetails,
      toIndex,
      offset2
    );
  }
  function setVirtualScrollSliceRange(scrollEl, scrollDetails, toIndex, offset2, align) {
    const alignForce = typeof align === "string" && align.indexOf("-force") !== -1;
    const alignEnd = alignForce === true ? align.replace("-force", "") : align;
    const alignRange = alignEnd !== void 0 ? alignEnd : "start";
    let from = Math.max(0, toIndex - virtualScrollSliceSizeComputed.value[alignRange]), to = from + virtualScrollSliceSizeComputed.value.total;
    if (to > virtualScrollLength.value) {
      to = virtualScrollLength.value;
      from = Math.max(0, to - virtualScrollSliceSizeComputed.value.total);
    }
    prevScrollStart = scrollDetails.scrollStart;
    const rangeChanged = from !== virtualScrollSliceRange.value.from || to !== virtualScrollSliceRange.value.to;
    if (rangeChanged === false && alignEnd === void 0) {
      emitScroll(toIndex);
      return;
    }
    const { activeElement } = document;
    const contentEl = contentRef.value;
    if (rangeChanged === true && contentEl !== null && contentEl !== activeElement && contentEl.contains(activeElement) === true) {
      contentEl.addEventListener("focusout", onBlurRefocusFn);
      setTimeout(() => {
        contentEl !== null && contentEl.removeEventListener("focusout", onBlurRefocusFn);
      });
    }
    setOverflowAnchor(contentEl, toIndex - from);
    const sizeBefore = alignEnd !== void 0 ? virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0) : 0;
    if (rangeChanged === true) {
      const tempTo = to >= virtualScrollSliceRange.value.from && from <= virtualScrollSliceRange.value.to ? virtualScrollSliceRange.value.to : to;
      virtualScrollSliceRange.value = { from, to: tempTo };
      virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, from);
      virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
      requestAnimationFrame(() => {
        if (virtualScrollSliceRange.value.to !== to && prevScrollStart === scrollDetails.scrollStart) {
          virtualScrollSliceRange.value = { from: virtualScrollSliceRange.value.from, to };
          virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
        }
      });
    }
    requestAnimationFrame(() => {
      if (prevScrollStart !== scrollDetails.scrollStart) {
        return;
      }
      if (rangeChanged === true) {
        updateVirtualScrollSizes(from);
      }
      const sizeAfter = virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0), posStart = sizeAfter + scrollDetails.offsetStart + virtualScrollPaddingBefore.value, posEnd = posStart + virtualScrollSizes[toIndex];
      let scrollPosition = posStart + offset2;
      if (alignEnd !== void 0) {
        const sizeDiff = sizeAfter - sizeBefore;
        const scrollStart = scrollDetails.scrollStart + sizeDiff;
        scrollPosition = alignForce !== true && scrollStart < posStart && posEnd < scrollStart + scrollDetails.scrollViewSize ? scrollStart : alignEnd === "end" ? posEnd - scrollDetails.scrollViewSize : posStart - (alignEnd === "start" ? 0 : Math.round((scrollDetails.scrollViewSize - virtualScrollSizes[toIndex]) / 2));
      }
      prevScrollStart = scrollPosition;
      setScroll2(
        scrollEl,
        scrollPosition,
        props4.virtualScrollHorizontal,
        $q.lang.rtl
      );
      emitScroll(toIndex);
    });
  }
  function updateVirtualScrollSizes(from) {
    const contentEl = contentRef.value;
    if (contentEl) {
      const children = filterProto.call(
        contentEl.children,
        (el) => el.classList && el.classList.contains("q-virtual-scroll--skip") === false
      ), childrenLength = children.length, sizeFn = props4.virtualScrollHorizontal === true ? (el) => el.getBoundingClientRect().width : (el) => el.offsetHeight;
      let index = from, size2, diff2;
      for (let i = 0; i < childrenLength; ) {
        size2 = sizeFn(children[i]);
        i++;
        while (i < childrenLength && children[i].classList.contains("q-virtual-scroll--with-prev") === true) {
          size2 += sizeFn(children[i]);
          i++;
        }
        diff2 = size2 - virtualScrollSizes[index];
        if (diff2 !== 0) {
          virtualScrollSizes[index] += diff2;
          virtualScrollSizesAgg[Math.floor(index / aggBucketSize)] += diff2;
        }
        index++;
      }
    }
  }
  function onBlurRefocusFn() {
    contentRef.value !== null && contentRef.value !== void 0 && contentRef.value.focus();
  }
  function localResetVirtualScroll(toIndex, fullReset) {
    const defaultSize = 1 * virtualScrollItemSizeComputed.value;
    if (fullReset === true || Array.isArray(virtualScrollSizes) === false) {
      virtualScrollSizes = [];
    }
    const oldVirtualScrollSizesLength = virtualScrollSizes.length;
    virtualScrollSizes.length = virtualScrollLength.value;
    for (let i = virtualScrollLength.value - 1; i >= oldVirtualScrollSizesLength; i--) {
      virtualScrollSizes[i] = defaultSize;
    }
    const jMax = Math.floor((virtualScrollLength.value - 1) / aggBucketSize);
    virtualScrollSizesAgg = [];
    for (let j = 0; j <= jMax; j++) {
      let size2 = 0;
      const iMax = Math.min((j + 1) * aggBucketSize, virtualScrollLength.value);
      for (let i = j * aggBucketSize; i < iMax; i++) {
        size2 += virtualScrollSizes[i];
      }
      virtualScrollSizesAgg.push(size2);
    }
    prevToIndex = -1;
    prevScrollStart = void 0;
    virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, virtualScrollSliceRange.value.from);
    virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, virtualScrollSliceRange.value.to, virtualScrollLength.value);
    if (toIndex >= 0) {
      updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
      nextTick(() => {
        scrollTo(toIndex);
      });
    } else {
      onVirtualScrollEvt();
    }
  }
  function setVirtualScrollSize(scrollViewSize) {
    if (scrollViewSize === void 0 && typeof window !== "undefined") {
      const scrollEl = getVirtualScrollTarget();
      if (scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
        scrollViewSize = getScrollDetails(
          scrollEl,
          getVirtualScrollEl(),
          beforeRef.value,
          afterRef.value,
          props4.virtualScrollHorizontal,
          $q.lang.rtl,
          props4.virtualScrollStickySizeStart,
          props4.virtualScrollStickySizeEnd
        ).scrollViewSize;
      }
    }
    localScrollViewSize = scrollViewSize;
    const virtualScrollSliceRatioBefore = parseFloat(props4.virtualScrollSliceRatioBefore) || 0;
    const virtualScrollSliceRatioAfter = parseFloat(props4.virtualScrollSliceRatioAfter) || 0;
    const multiplier = 1 + virtualScrollSliceRatioBefore + virtualScrollSliceRatioAfter;
    const view = scrollViewSize === void 0 || scrollViewSize <= 0 ? 1 : Math.ceil(scrollViewSize / virtualScrollItemSizeComputed.value);
    const baseSize = Math.max(
      1,
      view,
      Math.ceil((props4.virtualScrollSliceSize > 0 ? props4.virtualScrollSliceSize : 10) / multiplier)
    );
    virtualScrollSliceSizeComputed.value = {
      total: Math.ceil(baseSize * multiplier),
      start: Math.ceil(baseSize * virtualScrollSliceRatioBefore),
      center: Math.ceil(baseSize * (0.5 + virtualScrollSliceRatioBefore)),
      end: Math.ceil(baseSize * (1 + virtualScrollSliceRatioBefore)),
      view
    };
  }
  function padVirtualScroll(tag, content) {
    const paddingSize = props4.virtualScrollHorizontal === true ? "width" : "height";
    const style2 = {
      ["--q-virtual-scroll-item-" + paddingSize]: virtualScrollItemSizeComputed.value + "px"
    };
    return [
      tag === "tbody" ? h(tag, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: beforeRef
      }, [
        h("tr", [
          h("td", {
            style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style2 },
            colspan: colspanAttr.value
          })
        ])
      ]) : h(tag, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: beforeRef,
        style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style2 }
      }),
      h(tag, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: contentRef,
        tabindex: -1
      }, content.flat()),
      tag === "tbody" ? h(tag, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: afterRef
      }, [
        h("tr", [
          h("td", {
            style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style2 },
            colspan: colspanAttr.value
          })
        ])
      ]) : h(tag, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: afterRef,
        style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style2 }
      })
    ];
  }
  function emitScroll(index) {
    if (prevToIndex !== index) {
      props4.onVirtualScroll !== void 0 && emit("virtualScroll", {
        index,
        from: virtualScrollSliceRange.value.from,
        to: virtualScrollSliceRange.value.to - 1,
        direction: index < prevToIndex ? "decrease" : "increase",
        ref: proxy
      });
      prevToIndex = index;
    }
  }
  setVirtualScrollSize();
  const onVirtualScrollEvt = debounce_default(
    localOnVirtualScrollEvt,
    $q.platform.is.ios === true ? 120 : 35
  );
  onBeforeMount(() => {
    setVirtualScrollSize();
  });
  let shouldActivate = false;
  onDeactivated(() => {
    shouldActivate = true;
  });
  onActivated(() => {
    if (shouldActivate !== true) return;
    const scrollEl = getVirtualScrollTarget();
    if (prevScrollStart !== void 0 && scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
      setScroll2(
        scrollEl,
        prevScrollStart,
        props4.virtualScrollHorizontal,
        $q.lang.rtl
      );
    } else {
      scrollTo(prevToIndex);
    }
  });
  __QUASAR_SSR__ || onBeforeUnmount(() => {
    onVirtualScrollEvt.cancel();
  });
  Object.assign(proxy, { scrollTo, reset, refresh });
  return {
    virtualScrollSliceRange,
    virtualScrollSliceSizeComputed,
    setVirtualScrollSize,
    onVirtualScrollEvt,
    localResetVirtualScroll,
    padVirtualScroll,
    scrollTo,
    reset,
    refresh
  };
}
var validateNewValueMode = (v) => ["add", "add-unique", "toggle"].includes(v);
var reEscapeList = ".*+?^${}()|[]\\";
var fieldPropsList = Object.keys(useFieldProps);
function getPropValueFn2(userPropName, defaultPropName) {
  if (typeof userPropName === "function") return userPropName;
  const propName = userPropName !== void 0 ? userPropName : defaultPropName;
  return (opt) => opt !== null && typeof opt === "object" && propName in opt ? opt[propName] : opt;
}
var QSelect_default = createComponent({
  name: "QSelect",
  inheritAttrs: false,
  props: {
    ...useVirtualScrollProps,
    ...useFormProps,
    ...useFieldProps,
    // override of useFieldProps > modelValue
    modelValue: {
      required: true
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: {
      type: Boolean,
      default: null
    },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    popupNoRouteDismiss: Boolean,
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: validateNewValueMode
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    disableTabSelection: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    autocomplete: String,
    transitionShow: {},
    transitionHide: {},
    transitionDuration: {},
    behavior: {
      type: String,
      validator: (v) => ["default", "menu", "dialog"].includes(v),
      default: "default"
    },
    // override of useVirtualScrollProps > virtualScrollItemSize (no default)
    virtualScrollItemSize: useVirtualScrollProps.virtualScrollItemSize.type,
    onNewValue: Function,
    onFilter: Function
  },
  emits: [
    ...useFieldEmits,
    "add",
    "remove",
    "inputValue",
    "keyup",
    "keypress",
    "keydown",
    "popupShow",
    "popupHide",
    "filterAbort"
  ],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const menu = ref(false);
    const dialog = ref(false);
    const optionIndex = ref(-1);
    const inputValue = ref("");
    const dialogFieldFocused = ref(false);
    const innerLoadingIndicator = ref(false);
    let filterTimer = null, inputValueTimer = null, innerValueCache, hasDialog, userInputValue, filterId = null, defaultInputValue, transitionShowComputed, searchBuffer, searchBufferExp;
    const inputRef = ref(null);
    const targetRef = ref(null);
    const menuRef = ref(null);
    const dialogRef = ref(null);
    const menuContentRef = ref(null);
    const nameProp = useFormInputNameAttr(props4);
    const onComposition = use_key_composition_default(onInput);
    const virtualScrollLength = computed(() => props4.options.length);
    const virtualScrollItemSizeComputed = computed(() => props4.virtualScrollItemSize === void 0 ? props4.optionsDense === true ? 24 : 48 : props4.virtualScrollItemSize);
    const {
      virtualScrollSliceRange,
      virtualScrollSliceSizeComputed,
      localResetVirtualScroll,
      padVirtualScroll,
      onVirtualScrollEvt,
      scrollTo,
      setVirtualScrollSize
    } = useVirtualScroll({
      virtualScrollLength,
      getVirtualScrollTarget,
      getVirtualScrollEl,
      virtualScrollItemSizeComputed
    });
    const state = useFieldState();
    const innerValue = computed(() => {
      const mapNull = props4.mapOptions === true && props4.multiple !== true, val = props4.modelValue !== void 0 && (props4.modelValue !== null || mapNull === true) ? props4.multiple === true && Array.isArray(props4.modelValue) ? props4.modelValue : [props4.modelValue] : [];
      if (props4.mapOptions === true) {
        const cache = props4.mapOptions === true && innerValueCache !== void 0 ? innerValueCache : [];
        const values = val.map((v) => getOption(v, cache));
        return props4.modelValue === null && mapNull === true ? values.filter((v) => v !== null) : values;
      }
      return val;
    });
    const innerFieldProps = computed(() => {
      const acc = {};
      fieldPropsList.forEach((key) => {
        const val = props4[key];
        if (val !== void 0) {
          acc[key] = val;
        }
      });
      return acc;
    });
    const isOptionsDark = computed(() => props4.optionsDark === null ? state.isDark.value : props4.optionsDark);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const computedInputClass = computed(() => {
      let cls = "q-field__input q-placeholder col";
      if (props4.hideSelected === true || innerValue.value.length === 0) {
        return [cls, props4.inputClass];
      }
      cls += " q-field__input--padding";
      return props4.inputClass === void 0 ? cls : [cls, props4.inputClass];
    });
    const menuContentClass = computed(
      () => (props4.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (props4.popupContentClass ? " " + props4.popupContentClass : "")
    );
    const noOptions = computed(() => virtualScrollLength.value === 0);
    const selectedString = computed(
      () => innerValue.value.map((opt) => getOptionLabel.value(opt)).join(", ")
    );
    const ariaCurrentValue = computed(() => props4.displayValue !== void 0 ? props4.displayValue : selectedString.value);
    const needsHtmlFn = computed(() => props4.optionsHtml === true ? () => true : (opt) => opt !== void 0 && opt !== null && opt.html === true);
    const valueAsHtml = computed(() => props4.displayValueHtml === true || props4.displayValue === void 0 && (props4.optionsHtml === true || innerValue.value.some(needsHtmlFn.value)));
    const tabindex = computed(() => state.focused.value === true ? props4.tabindex : -1);
    const comboboxAttrs = computed(() => {
      const attrs = {
        tabindex: props4.tabindex,
        role: "combobox",
        "aria-label": props4.label,
        "aria-readonly": props4.readonly === true ? "true" : "false",
        "aria-autocomplete": props4.useInput === true ? "list" : "none",
        "aria-expanded": menu.value === true ? "true" : "false",
        "aria-controls": `${state.targetUid.value}_lb`
      };
      if (optionIndex.value >= 0) {
        attrs["aria-activedescendant"] = `${state.targetUid.value}_${optionIndex.value}`;
      }
      return attrs;
    });
    const listboxAttrs = computed(() => ({
      id: `${state.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": props4.multiple === true ? "true" : "false"
    }));
    const selectedScope = computed(() => {
      return innerValue.value.map((opt, i) => ({
        index: i,
        opt,
        html: needsHtmlFn.value(opt),
        selected: true,
        removeAtIndex: removeAtIndexAndFocus,
        toggleOption,
        tabindex: tabindex.value
      }));
    });
    const optionScope = computed(() => {
      if (virtualScrollLength.value === 0) {
        return [];
      }
      const { from, to } = virtualScrollSliceRange.value;
      return props4.options.slice(from, to).map((opt, i) => {
        const disable = isOptionDisabled.value(opt) === true;
        const active = isOptionSelected(opt) === true;
        const index = from + i;
        const itemProps = {
          clickable: true,
          active,
          activeClass: computedOptionsSelectedClass.value,
          manualFocus: true,
          focused: false,
          disable,
          tabindex: -1,
          dense: props4.optionsDense,
          dark: isOptionsDark.value,
          role: "option",
          "aria-selected": active === true ? "true" : "false",
          id: `${state.targetUid.value}_${index}`,
          onClick: () => {
            toggleOption(opt);
          }
        };
        if (disable !== true) {
          optionIndex.value === index && (itemProps.focused = true);
          if ($q.platform.is.desktop === true) {
            itemProps.onMousemove = () => {
              menu.value === true && setOptionIndex(index);
            };
          }
        }
        return {
          index,
          opt,
          html: needsHtmlFn.value(opt),
          label: getOptionLabel.value(opt),
          selected: itemProps.active,
          focused: itemProps.focused,
          toggleOption,
          setOptionIndex,
          itemProps
        };
      });
    });
    const dropdownArrowIcon = computed(() => props4.dropdownIcon !== void 0 ? props4.dropdownIcon : $q.iconSet.arrow.dropdown);
    const squaredMenu = computed(
      () => props4.optionsCover === false && props4.outlined !== true && props4.standout !== true && props4.borderless !== true && props4.rounded !== true
    );
    const computedOptionsSelectedClass = computed(() => props4.optionsSelectedClass !== void 0 ? props4.optionsSelectedClass : props4.color !== void 0 ? `text-${props4.color}` : "");
    const getOptionValue = computed(() => getPropValueFn2(props4.optionValue, "value"));
    const getOptionLabel = computed(() => getPropValueFn2(props4.optionLabel, "label"));
    const isOptionDisabled = computed(() => getPropValueFn2(props4.optionDisable, "disable"));
    const innerOptionsValue = computed(() => innerValue.value.map(getOptionValue.value));
    const inputControlEvents = computed(() => {
      const evt = {
        onInput,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: onComposition,
        onKeydown: onTargetKeydown,
        onKeyup: onTargetAutocomplete,
        onKeypress: onTargetKeypress,
        onFocus: selectInputText,
        onClick(e) {
          hasDialog === true && stop(e);
        }
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      return evt;
    });
    watch(innerValue, (val) => {
      innerValueCache = val;
      if (props4.useInput === true && props4.fillInput === true && props4.multiple !== true && state.innerLoading.value !== true && (dialog.value !== true && menu.value !== true || hasValue.value !== true)) {
        userInputValue !== true && resetInputValue();
        if (dialog.value === true || menu.value === true) {
          filter("");
        }
      }
    }, { immediate: true });
    watch(() => props4.fillInput, resetInputValue);
    watch(menu, updateMenu);
    watch(virtualScrollLength, rerenderMenu);
    function getEmittingOptionValue(opt) {
      return props4.emitValue === true ? getOptionValue.value(opt) : opt;
    }
    function removeAtIndex(index) {
      if (index !== -1 && index < innerValue.value.length) {
        if (props4.multiple === true) {
          const model = props4.modelValue.slice();
          emit("remove", { index, value: model.splice(index, 1)[0] });
          emit("update:modelValue", model);
        } else {
          emit("update:modelValue", null);
        }
      }
    }
    function removeAtIndexAndFocus(index) {
      removeAtIndex(index);
      state.focus();
    }
    function add(opt, unique) {
      const val = getEmittingOptionValue(opt);
      if (props4.multiple !== true) {
        props4.fillInput === true && updateInputValue(
          getOptionLabel.value(opt),
          true,
          true
        );
        emit("update:modelValue", val);
        return;
      }
      if (innerValue.value.length === 0) {
        emit("add", { index: 0, value: val });
        emit("update:modelValue", props4.multiple === true ? [val] : val);
        return;
      }
      if (unique === true && isOptionSelected(opt) === true) {
        return;
      }
      if (props4.maxValues !== void 0 && props4.modelValue.length >= props4.maxValues) {
        return;
      }
      const model = props4.modelValue.slice();
      emit("add", { index: model.length, value: val });
      model.push(val);
      emit("update:modelValue", model);
    }
    function toggleOption(opt, keepOpen) {
      if (state.editable.value !== true || opt === void 0 || isOptionDisabled.value(opt) === true) {
        return;
      }
      const optValue = getOptionValue.value(opt);
      if (props4.multiple !== true) {
        if (keepOpen !== true) {
          updateInputValue(
            props4.fillInput === true ? getOptionLabel.value(opt) : "",
            true,
            true
          );
          hidePopup();
        }
        targetRef.value !== null && targetRef.value.focus();
        if (innerValue.value.length === 0 || isDeepEqual(getOptionValue.value(innerValue.value[0]), optValue) !== true) {
          emit("update:modelValue", props4.emitValue === true ? optValue : opt);
        }
        return;
      }
      (hasDialog !== true || dialogFieldFocused.value === true) && state.focus();
      selectInputText();
      if (innerValue.value.length === 0) {
        const val = props4.emitValue === true ? optValue : opt;
        emit("add", { index: 0, value: val });
        emit("update:modelValue", props4.multiple === true ? [val] : val);
        return;
      }
      const model = props4.modelValue.slice(), index = innerOptionsValue.value.findIndex((v) => isDeepEqual(v, optValue));
      if (index !== -1) {
        emit("remove", { index, value: model.splice(index, 1)[0] });
      } else {
        if (props4.maxValues !== void 0 && model.length >= props4.maxValues) {
          return;
        }
        const val = props4.emitValue === true ? optValue : opt;
        emit("add", { index: model.length, value: val });
        model.push(val);
      }
      emit("update:modelValue", model);
    }
    function setOptionIndex(index) {
      if ($q.platform.is.desktop !== true) return;
      const val = index !== -1 && index < virtualScrollLength.value ? index : -1;
      if (optionIndex.value !== val) {
        optionIndex.value = val;
      }
    }
    function moveOptionSelection(offset2 = 1, skipInputValue) {
      if (menu.value === true) {
        let index = optionIndex.value;
        do {
          index = normalizeToInterval(
            index + offset2,
            -1,
            virtualScrollLength.value - 1
          );
        } while (index !== -1 && index !== optionIndex.value && isOptionDisabled.value(props4.options[index]) === true);
        if (optionIndex.value !== index) {
          setOptionIndex(index);
          scrollTo(index);
          if (skipInputValue !== true && props4.useInput === true && props4.fillInput === true) {
            setInputValue(
              index >= 0 ? getOptionLabel.value(props4.options[index]) : defaultInputValue,
              true
            );
          }
        }
      }
    }
    function getOption(value2, valueCache) {
      const fn = (opt) => isDeepEqual(getOptionValue.value(opt), value2);
      return props4.options.find(fn) || valueCache.find(fn) || value2;
    }
    function isOptionSelected(opt) {
      const val = getOptionValue.value(opt);
      return innerOptionsValue.value.find((v) => isDeepEqual(v, val)) !== void 0;
    }
    function selectInputText(e) {
      if (props4.useInput === true && targetRef.value !== null && (e === void 0 || targetRef.value === e.target && e.target.value === selectedString.value)) {
        targetRef.value.select();
      }
    }
    function onTargetKeyup(e) {
      if (isKeyCode(e, 27) === true && menu.value === true) {
        stop(e);
        hidePopup();
        resetInputValue();
      }
      emit("keyup", e);
    }
    function onTargetAutocomplete(e) {
      const { value: value2 } = e.target;
      if (e.keyCode !== void 0) {
        onTargetKeyup(e);
        return;
      }
      e.target.value = "";
      if (filterTimer !== null) {
        clearTimeout(filterTimer);
        filterTimer = null;
      }
      if (inputValueTimer !== null) {
        clearTimeout(inputValueTimer);
        inputValueTimer = null;
      }
      resetInputValue();
      if (typeof value2 === "string" && value2.length !== 0) {
        const needle = value2.toLocaleLowerCase();
        const findFn = (extractFn) => {
          const option = props4.options.find((opt) => extractFn.value(opt).toLocaleLowerCase() === needle);
          if (option === void 0) {
            return false;
          }
          if (innerValue.value.indexOf(option) === -1) {
            toggleOption(option);
          } else {
            hidePopup();
          }
          return true;
        };
        const fillFn = (afterFilter) => {
          if (findFn(getOptionValue) === true) {
            return;
          }
          if (findFn(getOptionLabel) === true || afterFilter === true) {
            return;
          }
          filter(value2, true, () => fillFn(true));
        };
        fillFn();
      } else {
        state.clearValue(e);
      }
    }
    function onTargetKeypress(e) {
      emit("keypress", e);
    }
    function onTargetKeydown(e) {
      emit("keydown", e);
      if (shouldIgnoreKey(e) === true) {
        return;
      }
      const newValueModeValid = inputValue.value.length !== 0 && (props4.newValueMode !== void 0 || props4.onNewValue !== void 0);
      const tabShouldSelect = e.shiftKey !== true && props4.disableTabSelection !== true && props4.multiple !== true && (optionIndex.value !== -1 || newValueModeValid === true);
      if (e.keyCode === 27) {
        prevent(e);
        return;
      }
      if (e.keyCode === 9 && tabShouldSelect === false) {
        closeMenu();
        return;
      }
      if (e.target === void 0 || e.target.id !== state.targetUid.value || state.editable.value !== true) return;
      if (e.keyCode === 40 && state.innerLoading.value !== true && menu.value === false) {
        stopAndPrevent(e);
        showPopup();
        return;
      }
      if (e.keyCode === 8 && (props4.useChips === true || props4.clearable === true) && props4.hideSelected !== true && inputValue.value.length === 0) {
        if (props4.multiple === true && Array.isArray(props4.modelValue) === true) {
          removeAtIndex(props4.modelValue.length - 1);
        } else if (props4.multiple !== true && props4.modelValue !== null) {
          emit("update:modelValue", null);
        }
        return;
      }
      if ((e.keyCode === 35 || e.keyCode === 36) && (typeof inputValue.value !== "string" || inputValue.value.length === 0)) {
        stopAndPrevent(e);
        optionIndex.value = -1;
        moveOptionSelection(e.keyCode === 36 ? 1 : -1, props4.multiple);
      }
      if ((e.keyCode === 33 || e.keyCode === 34) && virtualScrollSliceSizeComputed.value !== void 0) {
        stopAndPrevent(e);
        optionIndex.value = Math.max(
          -1,
          Math.min(
            virtualScrollLength.value,
            optionIndex.value + (e.keyCode === 33 ? -1 : 1) * virtualScrollSliceSizeComputed.value.view
          )
        );
        moveOptionSelection(e.keyCode === 33 ? 1 : -1, props4.multiple);
      }
      if (e.keyCode === 38 || e.keyCode === 40) {
        stopAndPrevent(e);
        moveOptionSelection(e.keyCode === 38 ? -1 : 1, props4.multiple);
      }
      const optionsLength = virtualScrollLength.value;
      if (searchBuffer === void 0 || searchBufferExp < Date.now()) {
        searchBuffer = "";
      }
      if (optionsLength > 0 && props4.useInput !== true && e.key !== void 0 && e.key.length === 1 && e.altKey === false && e.ctrlKey === false && e.metaKey === false && (e.keyCode !== 32 || searchBuffer.length !== 0)) {
        menu.value !== true && showPopup(e);
        const char = e.key.toLocaleLowerCase(), keyRepeat = searchBuffer.length === 1 && searchBuffer[0] === char;
        searchBufferExp = Date.now() + 1500;
        if (keyRepeat === false) {
          stopAndPrevent(e);
          searchBuffer += char;
        }
        const searchRe = new RegExp("^" + searchBuffer.split("").map((l) => reEscapeList.indexOf(l) !== -1 ? "\\" + l : l).join(".*"), "i");
        let index = optionIndex.value;
        if (keyRepeat === true || index < 0 || searchRe.test(getOptionLabel.value(props4.options[index])) !== true) {
          do {
            index = normalizeToInterval(index + 1, -1, optionsLength - 1);
          } while (index !== optionIndex.value && (isOptionDisabled.value(props4.options[index]) === true || searchRe.test(getOptionLabel.value(props4.options[index])) !== true));
        }
        if (optionIndex.value !== index) {
          nextTick(() => {
            setOptionIndex(index);
            scrollTo(index);
            if (index >= 0 && props4.useInput === true && props4.fillInput === true) {
              setInputValue(getOptionLabel.value(props4.options[index]), true);
            }
          });
        }
        return;
      }
      if (e.keyCode !== 13 && (e.keyCode !== 32 || props4.useInput === true || searchBuffer !== "") && (e.keyCode !== 9 || tabShouldSelect === false)) return;
      e.keyCode !== 9 && stopAndPrevent(e);
      if (optionIndex.value !== -1 && optionIndex.value < optionsLength) {
        toggleOption(props4.options[optionIndex.value]);
        return;
      }
      if (newValueModeValid === true) {
        const done = (val, mode) => {
          if (mode) {
            if (validateNewValueMode(mode) !== true) {
              return;
            }
          } else {
            mode = props4.newValueMode;
          }
          updateInputValue("", props4.multiple !== true, true);
          if (val === void 0 || val === null) {
            return;
          }
          const fn = mode === "toggle" ? toggleOption : add;
          fn(val, mode === "add-unique");
          if (props4.multiple !== true) {
            targetRef.value !== null && targetRef.value.focus();
            hidePopup();
          }
        };
        if (props4.onNewValue !== void 0) {
          emit("newValue", inputValue.value, done);
        } else {
          done(inputValue.value);
        }
        if (props4.multiple !== true) {
          return;
        }
      }
      if (menu.value === true) {
        closeMenu();
      } else if (state.innerLoading.value !== true) {
        showPopup();
      }
    }
    function getVirtualScrollEl() {
      return hasDialog === true ? menuContentRef.value : menuRef.value !== null && menuRef.value.contentEl !== null ? menuRef.value.contentEl : void 0;
    }
    function getVirtualScrollTarget() {
      return getVirtualScrollEl();
    }
    function getSelection() {
      if (props4.hideSelected === true) {
        return [];
      }
      if (slots["selected-item"] !== void 0) {
        return selectedScope.value.map((scope) => slots["selected-item"](scope)).slice();
      }
      if (slots.selected !== void 0) {
        return [].concat(slots.selected());
      }
      if (props4.useChips === true) {
        return selectedScope.value.map((scope, i) => h(QChip_default, {
          key: "option-" + i,
          removable: state.editable.value === true && isOptionDisabled.value(scope.opt) !== true,
          dense: true,
          textColor: props4.color,
          tabindex: tabindex.value,
          onRemove() {
            scope.removeAtIndex(i);
          }
        }, () => h("span", {
          class: "ellipsis",
          [scope.html === true ? "innerHTML" : "textContent"]: getOptionLabel.value(scope.opt)
        })));
      }
      return [
        h("span", {
          [valueAsHtml.value === true ? "innerHTML" : "textContent"]: ariaCurrentValue.value
        })
      ];
    }
    function getAllOptions() {
      if (noOptions.value === true) {
        return slots["no-option"] !== void 0 ? slots["no-option"]({ inputValue: inputValue.value }) : void 0;
      }
      const fn = slots.option !== void 0 ? slots.option : (scope) => {
        return h(QItem_default, {
          key: scope.index,
          ...scope.itemProps
        }, () => {
          return h(
            QItemSection_default,
            () => h(
              QItemLabel_default,
              () => h("span", {
                [scope.html === true ? "innerHTML" : "textContent"]: scope.label
              })
            )
          );
        });
      };
      let options = padVirtualScroll("div", optionScope.value.map(fn));
      if (slots["before-options"] !== void 0) {
        options = slots["before-options"]().concat(options);
      }
      return hMergeSlot(slots["after-options"], options);
    }
    function getInput(fromDialog, isTarget) {
      const attrs = isTarget === true ? { ...comboboxAttrs.value, ...state.splitAttrs.attributes.value } : void 0;
      const data = {
        ref: isTarget === true ? targetRef : void 0,
        key: "i_t",
        class: computedInputClass.value,
        style: props4.inputStyle,
        value: inputValue.value !== void 0 ? inputValue.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...attrs,
        id: isTarget === true ? state.targetUid.value : void 0,
        maxlength: props4.maxlength,
        autocomplete: props4.autocomplete,
        "data-autofocus": fromDialog === true || props4.autofocus === true || void 0,
        disabled: props4.disable === true,
        readonly: props4.readonly === true,
        ...inputControlEvents.value
      };
      if (fromDialog !== true && hasDialog === true) {
        if (Array.isArray(data.class) === true) {
          data.class = [...data.class, "no-pointer-events"];
        } else {
          data.class += " no-pointer-events";
        }
      }
      return h("input", data);
    }
    function onInput(e) {
      if (filterTimer !== null) {
        clearTimeout(filterTimer);
        filterTimer = null;
      }
      if (inputValueTimer !== null) {
        clearTimeout(inputValueTimer);
        inputValueTimer = null;
      }
      if (e && e.target && e.target.qComposing === true) {
        return;
      }
      setInputValue(e.target.value || "");
      userInputValue = true;
      defaultInputValue = inputValue.value;
      if (state.focused.value !== true && (hasDialog !== true || dialogFieldFocused.value === true)) {
        state.focus();
      }
      if (props4.onFilter !== void 0) {
        filterTimer = setTimeout(() => {
          filterTimer = null;
          filter(inputValue.value);
        }, props4.inputDebounce);
      }
    }
    function setInputValue(val, emitImmediately) {
      if (inputValue.value !== val) {
        inputValue.value = val;
        if (emitImmediately === true || props4.inputDebounce === 0 || props4.inputDebounce === "0") {
          emit("inputValue", val);
        } else {
          inputValueTimer = setTimeout(() => {
            inputValueTimer = null;
            emit("inputValue", val);
          }, props4.inputDebounce);
        }
      }
    }
    function updateInputValue(val, noFiltering, internal) {
      userInputValue = internal !== true;
      if (props4.useInput === true) {
        setInputValue(val, true);
        if (noFiltering === true || internal !== true) {
          defaultInputValue = val;
        }
        noFiltering !== true && filter(val);
      }
    }
    function filter(val, keepClosed, afterUpdateFn) {
      if (props4.onFilter === void 0 || keepClosed !== true && state.focused.value !== true) {
        return;
      }
      if (state.innerLoading.value === true) {
        emit("filterAbort");
      } else {
        state.innerLoading.value = true;
        innerLoadingIndicator.value = true;
      }
      if (val !== "" && props4.multiple !== true && innerValue.value.length !== 0 && userInputValue !== true && val === getOptionLabel.value(innerValue.value[0])) {
        val = "";
      }
      const localFilterId = setTimeout(() => {
        menu.value === true && (menu.value = false);
      }, 10);
      filterId !== null && clearTimeout(filterId);
      filterId = localFilterId;
      emit(
        "filter",
        val,
        (fn, afterFn) => {
          if ((keepClosed === true || state.focused.value === true) && filterId === localFilterId) {
            clearTimeout(filterId);
            typeof fn === "function" && fn();
            innerLoadingIndicator.value = false;
            nextTick(() => {
              state.innerLoading.value = false;
              if (state.editable.value === true) {
                if (keepClosed === true) {
                  menu.value === true && hidePopup();
                } else if (menu.value === true) {
                  updateMenu(true);
                } else {
                  menu.value = true;
                }
              }
              typeof afterFn === "function" && nextTick(() => {
                afterFn(proxy);
              });
              typeof afterUpdateFn === "function" && nextTick(() => {
                afterUpdateFn(proxy);
              });
            });
          }
        },
        () => {
          if (state.focused.value === true && filterId === localFilterId) {
            clearTimeout(filterId);
            state.innerLoading.value = false;
            innerLoadingIndicator.value = false;
          }
          menu.value === true && (menu.value = false);
        }
      );
    }
    function getMenu() {
      return h(QMenu_default, {
        ref: menuRef,
        class: menuContentClass.value,
        style: props4.popupContentStyle,
        modelValue: menu.value,
        fit: props4.menuShrink !== true,
        cover: props4.optionsCover === true && noOptions.value !== true && props4.useInput !== true,
        anchor: props4.menuAnchor,
        self: props4.menuSelf,
        offset: props4.menuOffset,
        dark: isOptionsDark.value,
        noParentEvent: true,
        noRefocus: true,
        noFocus: true,
        noRouteDismiss: props4.popupNoRouteDismiss,
        square: squaredMenu.value,
        transitionShow: props4.transitionShow,
        transitionHide: props4.transitionHide,
        transitionDuration: props4.transitionDuration,
        separateClosePopup: true,
        ...listboxAttrs.value,
        onScrollPassive: onVirtualScrollEvt,
        onBeforeShow: onControlPopupShow,
        onBeforeHide: onMenuBeforeHide,
        onShow: onMenuShow
      }, getAllOptions);
    }
    function onMenuBeforeHide(e) {
      onControlPopupHide(e);
      closeMenu();
    }
    function onMenuShow() {
      setVirtualScrollSize();
    }
    function onDialogFieldFocus(e) {
      stop(e);
      targetRef.value !== null && targetRef.value.focus();
      dialogFieldFocused.value = true;
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function onDialogFieldBlur(e) {
      stop(e);
      nextTick(() => {
        dialogFieldFocused.value = false;
      });
    }
    function getDialog() {
      const content = [
        h(QField_default, {
          class: `col-auto ${state.fieldClass.value}`,
          ...innerFieldProps.value,
          for: state.targetUid.value,
          dark: isOptionsDark.value,
          square: true,
          loading: innerLoadingIndicator.value,
          itemAligned: false,
          filled: true,
          stackLabel: inputValue.value.length !== 0,
          ...state.splitAttrs.listeners.value,
          onFocus: onDialogFieldFocus,
          onBlur: onDialogFieldBlur
        }, {
          ...slots,
          rawControl: () => state.getControl(true),
          before: void 0,
          after: void 0
        })
      ];
      menu.value === true && content.push(
        h("div", {
          ref: menuContentRef,
          class: menuContentClass.value + " scroll",
          style: props4.popupContentStyle,
          ...listboxAttrs.value,
          onClick: prevent,
          onScrollPassive: onVirtualScrollEvt
        }, getAllOptions())
      );
      return h(QDialog_default, {
        ref: dialogRef,
        modelValue: dialog.value,
        position: props4.useInput === true ? "top" : void 0,
        transitionShow: transitionShowComputed,
        transitionHide: props4.transitionHide,
        transitionDuration: props4.transitionDuration,
        noRouteDismiss: props4.popupNoRouteDismiss,
        onBeforeShow: onControlPopupShow,
        onBeforeHide: onDialogBeforeHide,
        onHide: onDialogHide,
        onShow: onDialogShow
      }, () => h("div", {
        class: "q-select__dialog" + (isOptionsDark.value === true ? " q-select__dialog--dark q-dark" : "") + (dialogFieldFocused.value === true ? " q-select__dialog--focused" : "")
      }, content));
    }
    function onDialogBeforeHide(e) {
      onControlPopupHide(e);
      if (dialogRef.value !== null) {
        dialogRef.value.__updateRefocusTarget(
          state.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
        );
      }
      state.focused.value = false;
    }
    function onDialogHide(e) {
      hidePopup();
      state.focused.value === false && emit("blur", e);
      resetInputValue();
    }
    function onDialogShow() {
      const el = document.activeElement;
      if ((el === null || el.id !== state.targetUid.value) && targetRef.value !== null && targetRef.value !== el) {
        targetRef.value.focus();
      }
      setVirtualScrollSize();
    }
    function closeMenu() {
      if (dialog.value === true) {
        return;
      }
      optionIndex.value = -1;
      if (menu.value === true) {
        menu.value = false;
      }
      if (state.focused.value === false) {
        if (filterId !== null) {
          clearTimeout(filterId);
          filterId = null;
        }
        if (state.innerLoading.value === true) {
          emit("filterAbort");
          state.innerLoading.value = false;
          innerLoadingIndicator.value = false;
        }
      }
    }
    function showPopup(e) {
      if (state.editable.value !== true) {
        return;
      }
      if (hasDialog === true) {
        state.onControlFocusin(e);
        dialog.value = true;
        nextTick(() => {
          state.focus();
        });
      } else {
        state.focus();
      }
      if (props4.onFilter !== void 0) {
        filter(inputValue.value);
      } else if (noOptions.value !== true || slots["no-option"] !== void 0) {
        menu.value = true;
      }
    }
    function hidePopup() {
      dialog.value = false;
      closeMenu();
    }
    function resetInputValue() {
      props4.useInput === true && updateInputValue(
        props4.multiple !== true && props4.fillInput === true && innerValue.value.length !== 0 ? getOptionLabel.value(innerValue.value[0]) || "" : "",
        true,
        true
      );
    }
    function updateMenu(show) {
      let optionIndex2 = -1;
      if (show === true) {
        if (innerValue.value.length !== 0) {
          const val = getOptionValue.value(innerValue.value[0]);
          optionIndex2 = props4.options.findIndex((v) => isDeepEqual(getOptionValue.value(v), val));
        }
        localResetVirtualScroll(optionIndex2);
      }
      setOptionIndex(optionIndex2);
    }
    function rerenderMenu(newLength, oldLength) {
      if (menu.value === true && state.innerLoading.value === false) {
        localResetVirtualScroll(-1, true);
        nextTick(() => {
          if (menu.value === true && state.innerLoading.value === false) {
            if (newLength > oldLength) {
              localResetVirtualScroll();
            } else {
              updateMenu(true);
            }
          }
        });
      }
    }
    function updateMenuPosition() {
      if (dialog.value === false && menuRef.value !== null) {
        menuRef.value.updatePosition();
      }
    }
    function onControlPopupShow(e) {
      e !== void 0 && stop(e);
      emit("popupShow", e);
      state.hasPopupOpen = true;
      state.onControlFocusin(e);
    }
    function onControlPopupHide(e) {
      e !== void 0 && stop(e);
      emit("popupHide", e);
      state.hasPopupOpen = false;
      state.onControlFocusout(e);
    }
    function updatePreState() {
      hasDialog = $q.platform.is.mobile !== true && props4.behavior !== "dialog" ? false : props4.behavior !== "menu" && (props4.useInput === true ? slots["no-option"] !== void 0 || props4.onFilter !== void 0 || noOptions.value === false : true);
      transitionShowComputed = $q.platform.is.ios === true && hasDialog === true && props4.useInput === true ? "fade" : props4.transitionShow;
    }
    onBeforeUpdate(updatePreState);
    onUpdated(updateMenuPosition);
    updatePreState();
    onBeforeUnmount(() => {
      filterTimer !== null && clearTimeout(filterTimer);
      inputValueTimer !== null && clearTimeout(inputValueTimer);
    });
    Object.assign(proxy, {
      showPopup,
      hidePopup,
      removeAtIndex,
      add,
      toggleOption,
      getOptionIndex: () => optionIndex.value,
      setOptionIndex,
      moveOptionSelection,
      filter,
      updateMenuPosition,
      updateInputValue,
      isOptionSelected,
      getEmittingOptionValue,
      isOptionDisabled: (...args) => isOptionDisabled.value.apply(null, args) === true,
      getOptionValue: (...args) => getOptionValue.value.apply(null, args),
      getOptionLabel: (...args) => getOptionLabel.value.apply(null, args)
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-select q-field--auto-height q-select--with${props4.useInput !== true ? "out" : ""}-input q-select--with${props4.useChips !== true ? "out" : ""}-chips q-select--${props4.multiple === true ? "multiple" : "single"}`
      ),
      inputRef,
      targetRef,
      hasValue,
      showPopup,
      floatingLabel: computed(
        () => props4.hideSelected !== true && hasValue.value === true || typeof inputValue.value === "number" || inputValue.value.length !== 0 || fieldValueIsFilled(props4.displayValue)
      ),
      getControlChild: () => {
        if (state.editable.value !== false && (dialog.value === true || noOptions.value !== true || slots["no-option"] !== void 0)) {
          return hasDialog === true ? getDialog() : getMenu();
        } else if (state.hasPopupOpen === true) {
          state.hasPopupOpen = false;
        }
      },
      controlEvents: {
        onFocusin(e) {
          state.onControlFocusin(e);
        },
        onFocusout(e) {
          state.onControlFocusout(e, () => {
            resetInputValue();
            closeMenu();
          });
        },
        onClick(e) {
          prevent(e);
          if (hasDialog !== true && menu.value === true) {
            closeMenu();
            targetRef.value !== null && targetRef.value.focus();
            return;
          }
          showPopup(e);
        }
      },
      getControl: (fromDialog) => {
        const child = getSelection();
        const isTarget = fromDialog === true || dialog.value !== true || hasDialog !== true;
        if (props4.useInput === true) {
          child.push(getInput(fromDialog, isTarget));
        } else if (state.editable.value === true) {
          const attrs2 = isTarget === true ? comboboxAttrs.value : void 0;
          child.push(
            h("input", {
              ref: isTarget === true ? targetRef : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: isTarget === true ? state.targetUid.value : void 0,
              value: ariaCurrentValue.value,
              readonly: true,
              "data-autofocus": fromDialog === true || props4.autofocus === true || void 0,
              ...attrs2,
              onKeydown: onTargetKeydown,
              onKeyup: onTargetKeyup,
              onKeypress: onTargetKeypress
            })
          );
          if (isTarget === true && typeof props4.autocomplete === "string" && props4.autocomplete.length !== 0) {
            child.push(
              h("input", {
                class: "q-select__autocomplete-input",
                autocomplete: props4.autocomplete,
                tabindex: -1,
                onKeyup: onTargetAutocomplete
              })
            );
          }
        }
        if (nameProp.value !== void 0 && props4.disable !== true && innerOptionsValue.value.length !== 0) {
          const opts = innerOptionsValue.value.map((value2) => h("option", { value: value2, selected: true }));
          child.push(
            h("select", {
              class: "hidden",
              name: nameProp.value,
              multiple: props4.multiple
            }, opts)
          );
        }
        const attrs = props4.useInput === true || isTarget !== true ? void 0 : state.splitAttrs.attributes.value;
        return h("div", {
          class: "q-field__native row items-center",
          ...attrs,
          ...state.splitAttrs.listeners.value
        }, child);
      },
      getInnerAppend: () => props4.loading !== true && innerLoadingIndicator.value !== true && props4.hideDropdownIcon !== true ? [
        h(QIcon_default, {
          class: "q-select__dropdown-icon" + (menu.value === true ? " rotate-180" : ""),
          name: dropdownArrowIcon.value
        })
      ] : null
    });
    return use_field_default(state);
  }
});
var skeletonTypes = [
  "text",
  "rect",
  "circle",
  "QBtn",
  "QBadge",
  "QChip",
  "QToolbar",
  "QCheckbox",
  "QRadio",
  "QToggle",
  "QSlider",
  "QRange",
  "QInput",
  "QAvatar"
];
var skeletonAnimations = [
  "wave",
  "pulse",
  "pulse-x",
  "pulse-y",
  "fade",
  "blink",
  "none"
];
var QSkeleton_default = createComponent({
  name: "QSkeleton",
  props: {
    ...useDarkProps,
    tag: {
      type: String,
      default: "div"
    },
    type: {
      type: String,
      validator: (v) => skeletonTypes.includes(v),
      default: "rect"
    },
    animation: {
      type: String,
      validator: (v) => skeletonAnimations.includes(v),
      default: "wave"
    },
    animationSpeed: {
      type: [String, Number],
      default: 1500
    },
    square: Boolean,
    bordered: Boolean,
    size: String,
    width: String,
    height: String
  },
  setup(props4, { slots }) {
    const vm2 = getCurrentInstance();
    const isDark = use_dark_default(props4, vm2.proxy.$q);
    const style2 = computed(() => {
      const size2 = props4.size !== void 0 ? [props4.size, props4.size] : [props4.width, props4.height];
      return {
        "--q-skeleton-speed": `${props4.animationSpeed}ms`,
        width: size2[0],
        height: size2[1]
      };
    });
    const classes = computed(
      () => `q-skeleton q-skeleton--${isDark.value === true ? "dark" : "light"} q-skeleton--type-${props4.type}` + (props4.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${props4.animation}` : "") + (props4.square === true ? " q-skeleton--square" : "") + (props4.bordered === true ? " q-skeleton--bordered" : "")
    );
    return () => h(props4.tag, {
      class: classes.value,
      style: style2.value
    }, hSlot(slots.default));
  }
});
var slotsDef = [
  ["left", "center", "start", "width"],
  ["right", "center", "end", "width"],
  ["top", "start", "center", "height"],
  ["bottom", "end", "center", "height"]
];
var QSlideItem_default = createComponent({
  name: "QSlideItem",
  props: {
    ...useDarkProps,
    leftColor: String,
    rightColor: String,
    topColor: String,
    bottomColor: String,
    onSlide: Function
  },
  emits: ["action", "top", "right", "bottom", "left"],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = use_dark_default(props4, $q);
    const { getCache } = use_render_cache_default();
    const contentRef = ref(null);
    let timer2 = null, pan = {}, dirRefs = {}, dirContentRefs = {};
    const langDir = computed(() => $q.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" });
    const classes = computed(
      () => "q-slide-item q-item-type overflow-hidden" + (isDark.value === true ? " q-slide-item--dark q-dark" : "")
    );
    function reset() {
      contentRef.value.style.transform = "translate(0,0)";
    }
    function emitSlide(side, ratio, isReset) {
      props4.onSlide !== void 0 && emit("slide", { side, ratio, isReset });
    }
    function onPan(evt) {
      const node = contentRef.value;
      if (evt.isFirst) {
        pan = {
          dir: null,
          size: { left: 0, right: 0, top: 0, bottom: 0 },
          scale: 0
        };
        node.classList.add("no-transition");
        slotsDef.forEach((slotName) => {
          if (slots[slotName[0]] !== void 0) {
            const node2 = dirContentRefs[slotName[0]];
            node2.style.transform = "scale(1)";
            pan.size[slotName[0]] = node2.getBoundingClientRect()[slotName[3]];
          }
        });
        pan.axis = evt.direction === "up" || evt.direction === "down" ? "Y" : "X";
      } else if (evt.isFinal) {
        node.classList.remove("no-transition");
        if (pan.scale === 1) {
          node.style.transform = `translate${pan.axis}(${pan.dir * 100}%)`;
          timer2 !== null && clearTimeout(timer2);
          timer2 = setTimeout(() => {
            timer2 = null;
            emit(pan.showing, { reset });
            emit("action", { side: pan.showing, reset });
          }, 230);
        } else {
          node.style.transform = "translate(0,0)";
          emitSlide(pan.showing, 0, true);
        }
        return;
      } else {
        evt.direction = pan.axis === "X" ? evt.offset.x < 0 ? "left" : "right" : evt.offset.y < 0 ? "up" : "down";
      }
      if (slots.left === void 0 && evt.direction === langDir.value.right || slots.right === void 0 && evt.direction === langDir.value.left || slots.top === void 0 && evt.direction === "down" || slots.bottom === void 0 && evt.direction === "up") {
        node.style.transform = "translate(0,0)";
        return;
      }
      let showing, dir, dist;
      if (pan.axis === "X") {
        dir = evt.direction === "left" ? -1 : 1;
        showing = dir === 1 ? langDir.value.left : langDir.value.right;
        dist = evt.distance.x;
      } else {
        dir = evt.direction === "up" ? -2 : 2;
        showing = dir === 2 ? "top" : "bottom";
        dist = evt.distance.y;
      }
      if (pan.dir !== null && Math.abs(dir) !== Math.abs(pan.dir)) {
        return;
      }
      if (pan.dir !== dir) {
        ["left", "right", "top", "bottom"].forEach((d) => {
          if (dirRefs[d]) {
            dirRefs[d].style.visibility = showing === d ? "visible" : "hidden";
          }
        });
        pan.showing = showing;
        pan.dir = dir;
      }
      pan.scale = Math.max(0, Math.min(1, (dist - 40) / pan.size[showing]));
      node.style.transform = `translate${pan.axis}(${dist * dir / Math.abs(dir)}px)`;
      dirContentRefs[showing].style.transform = `scale(${pan.scale})`;
      emitSlide(showing, pan.scale, false);
    }
    onBeforeUpdate(() => {
      dirRefs = {};
      dirContentRefs = {};
    });
    onBeforeUnmount(() => {
      timer2 !== null && clearTimeout(timer2);
    });
    Object.assign(proxy, { reset });
    return () => {
      const content = [], slotsList = {
        left: slots[langDir.value.right] !== void 0,
        right: slots[langDir.value.left] !== void 0,
        up: slots.bottom !== void 0,
        down: slots.top !== void 0
      }, dirs = Object.keys(slotsList).filter((key) => slotsList[key] === true);
      slotsDef.forEach((slotName) => {
        const dir = slotName[0];
        if (slots[dir] !== void 0) {
          content.push(
            h("div", {
              key: dir,
              ref: (el) => {
                dirRefs[dir] = el;
              },
              class: `q-slide-item__${dir} absolute-full row no-wrap items-${slotName[1]} justify-${slotName[2]}` + (props4[dir + "Color"] !== void 0 ? ` bg-${props4[dir + "Color"]}` : "")
            }, [
              h("div", { ref: (el) => {
                dirContentRefs[dir] = el;
              } }, slots[dir]())
            ])
          );
        }
      });
      const node = h("div", {
        key: `${dirs.length === 0 ? "only-" : ""} content`,
        ref: contentRef,
        class: "q-slide-item__content"
      }, hSlot(slots.default));
      if (dirs.length === 0) {
        content.push(node);
      } else {
        content.push(
          withDirectives(node, getCache("dir#" + dirs.join(""), () => {
            const modifiers = {
              prevent: true,
              stop: true,
              mouse: true
            };
            dirs.forEach((dir) => {
              modifiers[dir] = true;
            });
            return [[
              TouchPan_default,
              onPan,
              void 0,
              modifiers
            ]];
          }))
        );
      }
      return h("div", { class: classes.value }, content);
    };
  }
});
var QSpace_default = createComponent({
  name: "QSpace",
  setup() {
    const space = h("div", { class: "q-space" });
    return () => space;
  }
});
var innerHTML = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
var QSpinnerAudio_default = createComponent({
  name: "QSpinnerAudio",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      fill: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 55 80",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML
    });
  }
});
var innerHTML2 = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
var QSpinnerBall_default = createComponent({
  name: "QSpinnerBall",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      stroke: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 57 57",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML2
    });
  }
});
var innerHTML3 = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
var QSpinnerBars_default = createComponent({
  name: "QSpinnerBars",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      fill: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 135 140",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML3
    });
  }
});
var innerHTML4 = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
var QSpinnerBox_default = createComponent({
  name: "QSpinnerBox",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML4
    });
  }
});
var innerHTML5 = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
var QSpinnerClock_default = createComponent({
  name: "QSpinnerClock",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML5
    });
  }
});
var innerHTML6 = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
var QSpinnerComment_default = createComponent({
  name: "QSpinnerComment",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      innerHTML: innerHTML6
    });
  }
});
var innerHTML7 = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
var QSpinnerCube_default = createComponent({
  name: "QSpinnerCube",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      innerHTML: innerHTML7
    });
  }
});
var innerHTML8 = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
var QSpinnerDots_default = createComponent({
  name: "QSpinnerDots",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      fill: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 120 30",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML8
    });
  }
});
var innerHTML9 = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
var QSpinnerFacebook_default = createComponent({
  name: "QSpinnerFacebook",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      innerHTML: innerHTML9
    });
  }
});
var innerHTML10 = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
var QSpinnerGears_default = createComponent({
  name: "QSpinnerGears",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML10
    });
  }
});
var innerHTML11 = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
var QSpinnerGrid_default = createComponent({
  name: "QSpinnerGrid",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      fill: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 105 105",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML11
    });
  }
});
var innerHTML12 = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
var QSpinnerHearts_default = createComponent({
  name: "QSpinnerHearts",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      fill: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 140 64",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML12
    });
  }
});
var innerHTML13 = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
var QSpinnerHourglass_default = createComponent({
  name: "QSpinnerHourglass",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML13
    });
  }
});
var innerHTML14 = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
var QSpinnerInfinity_default = createComponent({
  name: "QSpinnerInfinity",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      innerHTML: innerHTML14
    });
  }
});
var innerHTML15 = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
var QSpinnerIos_default = createComponent({
  name: "QSpinnerIos",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      stroke: "currentColor",
      fill: "currentColor",
      viewBox: "0 0 64 64",
      innerHTML: innerHTML15
    });
  }
});
var innerHTML16 = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
var QSpinnerOrbit_default = createComponent({
  name: "QSpinnerOrbit",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML16
    });
  }
});
var innerHTML17 = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
var QSpinnerOval_default = createComponent({
  name: "QSpinnerOval",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      stroke: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 38 38",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML17
    });
  }
});
var innerHTML18 = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
var QSpinnerPie_default = createComponent({
  name: "QSpinnerPie",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML18
    });
  }
});
var innerHTML19 = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
var QSpinnerPuff_default = createComponent({
  name: "QSpinnerPuff",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      stroke: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 44 44",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML19
    });
  }
});
var innerHTML20 = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
var QSpinnerRadio_default = createComponent({
  name: "QSpinnerRadio",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML20
    });
  }
});
var innerHTML21 = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
var QSpinnerRings_default = createComponent({
  name: "QSpinnerRings",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      stroke: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 45 45",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML21
    });
  }
});
var innerHTML22 = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
var QSpinnerTail_default = createComponent({
  name: "QSpinnerTail",
  props: useSpinnerProps,
  setup(props4) {
    const { cSize, classes } = useSpinner(props4);
    return () => h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 38 38",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: innerHTML22
    });
  }
});
var QSplitter_default = createComponent({
  name: "QSplitter",
  props: {
    ...useDarkProps,
    modelValue: {
      type: Number,
      required: true
    },
    reverse: Boolean,
    unit: {
      type: String,
      default: "%",
      validator: (v) => ["%", "px"].includes(v)
    },
    limits: {
      type: Array,
      validator: (v) => {
        if (v.length !== 2) return false;
        if (typeof v[0] !== "number" || typeof v[1] !== "number") return false;
        return v[0] >= 0 && v[0] <= v[1];
      }
    },
    emitImmediately: Boolean,
    horizontal: Boolean,
    disable: Boolean,
    beforeClass: [Array, String, Object],
    afterClass: [Array, String, Object],
    separatorClass: [Array, String, Object],
    separatorStyle: [Array, String, Object]
  },
  emits: ["update:modelValue"],
  setup(props4, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = use_dark_default(props4, $q);
    const rootRef = ref(null);
    const sideRefs = {
      before: ref(null),
      after: ref(null)
    };
    const classes = computed(
      () => `q-splitter no-wrap ${props4.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${props4.disable === true ? "disabled" : "workable"}` + (isDark.value === true ? " q-splitter--dark" : "")
    );
    const propName = computed(() => props4.horizontal === true ? "height" : "width");
    const side = computed(() => props4.reverse !== true ? "before" : "after");
    const computedLimits = computed(() => props4.limits !== void 0 ? props4.limits : props4.unit === "%" ? [10, 90] : [50, Infinity]);
    function getCSSValue(value2) {
      return (props4.unit === "%" ? value2 : Math.round(value2)) + props4.unit;
    }
    const styles = computed(() => ({
      [side.value]: {
        [propName.value]: getCSSValue(props4.modelValue)
      }
    }));
    let __dir, __maxValue, __value, __multiplier, __normalized;
    function pan(evt) {
      if (evt.isFirst === true) {
        const size2 = rootRef.value.getBoundingClientRect()[propName.value];
        __dir = props4.horizontal === true ? "up" : "left";
        __maxValue = props4.unit === "%" ? 100 : size2;
        __value = Math.min(__maxValue, computedLimits.value[1], Math.max(computedLimits.value[0], props4.modelValue));
        __multiplier = (props4.reverse !== true ? 1 : -1) * (props4.horizontal === true ? 1 : $q.lang.rtl === true ? -1 : 1) * (props4.unit === "%" ? size2 === 0 ? 0 : 100 / size2 : 1);
        rootRef.value.classList.add("q-splitter--active");
        return;
      }
      if (evt.isFinal === true) {
        if (__normalized !== props4.modelValue) {
          emit("update:modelValue", __normalized);
        }
        rootRef.value.classList.remove("q-splitter--active");
        return;
      }
      const val = __value + __multiplier * (evt.direction === __dir ? -1 : 1) * evt.distance[props4.horizontal === true ? "y" : "x"];
      __normalized = Math.min(__maxValue, computedLimits.value[1], Math.max(computedLimits.value[0], val));
      sideRefs[side.value].value.style[propName.value] = getCSSValue(__normalized);
      if (props4.emitImmediately === true && props4.modelValue !== __normalized) {
        emit("update:modelValue", __normalized);
      }
    }
    const sepDirective = computed(() => {
      return [[
        TouchPan_default,
        pan,
        void 0,
        {
          [props4.horizontal === true ? "vertical" : "horizontal"]: true,
          prevent: true,
          stop: true,
          mouse: true,
          mouseAllDir: true
        }
      ]];
    });
    function normalize2(val, limits) {
      if (val < limits[0]) {
        emit("update:modelValue", limits[0]);
      } else if (val > limits[1]) {
        emit("update:modelValue", limits[1]);
      }
    }
    watch(() => props4.modelValue, (v) => {
      normalize2(v, computedLimits.value);
    });
    watch(() => props4.limits, () => {
      nextTick(() => {
        normalize2(props4.modelValue, computedLimits.value);
      });
    });
    return () => {
      const child = [
        h("div", {
          ref: sideRefs.before,
          class: [
            "q-splitter__panel q-splitter__before" + (props4.reverse === true ? " col" : ""),
            props4.beforeClass
          ],
          style: styles.value.before
        }, hSlot(slots.before)),
        h("div", {
          class: [
            "q-splitter__separator",
            props4.separatorClass
          ],
          style: props4.separatorStyle,
          "aria-disabled": props4.disable === true ? "true" : void 0
        }, [
          hDir(
            "div",
            { class: "q-splitter__separator-area absolute-full" },
            hSlot(slots.separator),
            "sep",
            props4.disable !== true,
            () => sepDirective.value
          )
        ]),
        h("div", {
          ref: sideRefs.after,
          class: [
            "q-splitter__panel q-splitter__after" + (props4.reverse === true ? "" : " col"),
            props4.afterClass
          ],
          style: styles.value.after
        }, hSlot(slots.after))
      ];
      return h("div", {
        class: classes.value,
        ref: rootRef
      }, hMergeSlot(slots.default, child));
    };
  }
});
var StepHeader_default = createComponent({
  name: "StepHeader",
  props: {
    stepper: {},
    step: {},
    goToPanel: Function
  },
  setup(props4, { attrs }) {
    const { proxy: { $q } } = getCurrentInstance();
    const blurRef = ref(null);
    const isActive = computed(() => props4.stepper.modelValue === props4.step.name);
    const isDisable = computed(() => {
      const opt = props4.step.disable;
      return opt === true || opt === "";
    });
    const isError = computed(() => {
      const opt = props4.step.error;
      return opt === true || opt === "";
    });
    const isDone = computed(() => {
      const opt = props4.step.done;
      return isDisable.value === false && (opt === true || opt === "");
    });
    const headerNav = computed(() => {
      const opt = props4.step.headerNav, nav = opt === true || opt === "" || opt === void 0;
      return isDisable.value === false && props4.stepper.headerNav && nav;
    });
    const hasPrefix = computed(() => {
      return props4.step.prefix && (isActive.value === false || props4.stepper.activeIcon === "none") && (isError.value === false || props4.stepper.errorIcon === "none") && (isDone.value === false || props4.stepper.doneIcon === "none");
    });
    const icon = computed(() => {
      const defaultIcon = props4.step.icon || props4.stepper.inactiveIcon;
      if (isActive.value === true) {
        const icon2 = props4.step.activeIcon || props4.stepper.activeIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.active;
      }
      if (isError.value === true) {
        const icon2 = props4.step.errorIcon || props4.stepper.errorIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.error;
      }
      if (isDisable.value === false && isDone.value === true) {
        const icon2 = props4.step.doneIcon || props4.stepper.doneIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.done;
      }
      return defaultIcon;
    });
    const color = computed(() => {
      const errorColor = isError.value === true ? props4.step.errorColor || props4.stepper.errorColor : void 0;
      if (isActive.value === true) {
        const color2 = props4.step.activeColor || props4.stepper.activeColor || props4.step.color;
        return color2 !== void 0 ? color2 : errorColor;
      }
      if (errorColor !== void 0) {
        return errorColor;
      }
      if (isDisable.value === false && isDone.value === true) {
        return props4.step.doneColor || props4.stepper.doneColor || props4.step.color || props4.stepper.inactiveColor;
      }
      return props4.step.color || props4.stepper.inactiveColor;
    });
    const classes = computed(() => {
      return "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (color.value !== void 0 ? ` text-${color.value}` : "") + (isError.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (hasPrefix.value === true ? "prefix" : "icon") : "") + (isActive.value === true ? " q-stepper__tab--active" : "") + (isDone.value === true ? " q-stepper__tab--done" : "") + (headerNav.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (isDisable.value === true ? " q-stepper__tab--disabled" : "");
    });
    const ripple = computed(() => props4.stepper.headerNav !== true ? false : headerNav.value);
    function onActivate() {
      blurRef.value !== null && blurRef.value.focus();
      isActive.value === false && props4.goToPanel(props4.step.name);
    }
    function onKeyup2(e) {
      if (e.keyCode === 13 && isActive.value === false) {
        props4.goToPanel(props4.step.name);
      }
    }
    return () => {
      const data = { class: classes.value };
      if (headerNav.value === true) {
        data.onClick = onActivate;
        data.onKeyup = onKeyup2;
        Object.assign(
          data,
          isDisable.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: attrs.tabindex || 0 }
        );
      }
      const child = [
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurRef }),
        h("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [
          h("span", { class: "row flex-center" }, [
            hasPrefix.value === true ? props4.step.prefix : h(QIcon_default, { name: icon.value })
          ])
        ])
      ];
      if (props4.step.title !== void 0 && props4.step.title !== null) {
        const content = [
          h("div", { class: "q-stepper__title" }, props4.step.title)
        ];
        if (props4.step.caption !== void 0 && props4.step.caption !== null) {
          content.push(
            h("div", { class: "q-stepper__caption" }, props4.step.caption)
          );
        }
        child.push(
          h("div", {
            class: "q-stepper__label q-stepper__line relative-position"
          }, content)
        );
      }
      return withDirectives(
        h("div", data, child),
        [[Ripple_default, ripple.value]]
      );
    };
  }
});
function getStepWrapper(slots) {
  return h("div", {
    class: "q-stepper__step-content"
  }, [
    h("div", {
      class: "q-stepper__step-inner"
    }, hSlot(slots.default))
  ]);
}
var PanelWrapper2 = {
  setup(_, { slots }) {
    return () => getStepWrapper(slots);
  }
};
var QStep_default = createComponent({
  name: "QStep",
  props: {
    ...usePanelChildProps,
    icon: String,
    color: String,
    title: {
      type: String,
      required: true
    },
    caption: String,
    prefix: [String, Number],
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String,
    headerNav: {
      type: Boolean,
      default: true
    },
    done: Boolean,
    error: Boolean,
    onScroll: [Function, Array]
  },
  setup(props4, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $stepper = inject(stepperKey, emptyRenderFn);
    if ($stepper === emptyRenderFn) {
      console.error("QStep needs to be a child of QStepper");
      return emptyRenderFn;
    }
    const { getCache } = use_render_cache_default();
    const rootRef = ref(null);
    const isActive = computed(() => $stepper.value.modelValue === props4.name);
    const scrollEvent = computed(() => $q.platform.is.ios !== true && $q.platform.is.chrome === true || isActive.value !== true || $stepper.value.vertical !== true ? {} : {
      onScroll(e) {
        const { target: target2 } = e;
        if (target2.scrollTop > 0) {
          target2.scrollTop = 0;
        }
        props4.onScroll !== void 0 && emit("scroll", e);
      }
    });
    const contentKey = computed(() => typeof props4.name === "string" || typeof props4.name === "number" ? props4.name : String(props4.name));
    function getStepContent() {
      const vertical = $stepper.value.vertical;
      if (vertical === true && $stepper.value.keepAlive === true) {
        return h(
          KeepAlive,
          $stepper.value.keepAliveProps.value,
          isActive.value === true ? [
            h(
              $stepper.value.needsUniqueKeepAliveWrapper.value === true ? getCache(contentKey.value, () => ({ ...PanelWrapper2, name: contentKey.value })) : PanelWrapper2,
              { key: contentKey.value },
              slots.default
            )
          ] : void 0
        );
      }
      return vertical !== true || isActive.value === true ? getStepWrapper(slots) : void 0;
    }
    return () => h(
      "div",
      { ref: rootRef, class: "q-stepper__step", role: "tabpanel", ...scrollEvent.value },
      $stepper.value.vertical === true ? [
        h(StepHeader_default, {
          stepper: $stepper.value,
          step: props4,
          goToPanel: $stepper.value.goToPanel
        }),
        $stepper.value.animated === true ? h(QSlideTransition_default, getStepContent) : getStepContent()
      ] : [getStepContent()]
    );
  }
});
var camelRE = /(-\w)/g;
function camelizeProps(props4) {
  const acc = {};
  for (const key in props4) {
    const newKey = key.replace(camelRE, (m) => m[1].toUpperCase());
    acc[newKey] = props4[key];
  }
  return acc;
}
var QStepper_default = createComponent({
  name: "QStepper",
  props: {
    ...useDarkProps,
    ...usePanelProps,
    flat: Boolean,
    bordered: Boolean,
    alternativeLabels: Boolean,
    headerNav: Boolean,
    contracted: Boolean,
    headerClass: String,
    inactiveColor: String,
    inactiveIcon: String,
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String
  },
  emits: usePanelEmits,
  setup(props4, { slots }) {
    const vm2 = getCurrentInstance();
    const isDark = use_dark_default(props4, vm2.proxy.$q);
    const {
      updatePanelsList,
      isValidPanelName,
      updatePanelIndex,
      getPanelContent,
      getPanels,
      panelDirectives,
      goToPanel,
      keepAliveProps,
      needsUniqueKeepAliveWrapper
    } = use_panel_default();
    provide(stepperKey, computed(() => ({
      goToPanel,
      keepAliveProps,
      needsUniqueKeepAliveWrapper,
      ...props4
    })));
    const classes = computed(
      () => `q-stepper q-stepper--${props4.vertical === true ? "vertical" : "horizontal"}` + (props4.flat === true ? " q-stepper--flat" : "") + (props4.bordered === true ? " q-stepper--bordered" : "") + (isDark.value === true ? " q-stepper--dark q-dark" : "")
    );
    const headerClasses = computed(
      () => `q-stepper__header row items-stretch justify-between q-stepper__header--${props4.alternativeLabels === true ? "alternative" : "standard"}-labels` + (props4.flat === false || props4.bordered === true ? " q-stepper__header--border" : "") + (props4.contracted === true ? " q-stepper__header--contracted" : "") + (props4.headerClass !== void 0 ? ` ${props4.headerClass}` : "")
    );
    function getContent() {
      const top = hSlot(slots.message, []);
      if (props4.vertical === true) {
        isValidPanelName(props4.modelValue) && updatePanelIndex();
        const content = h("div", {
          class: "q-stepper__content"
        }, hSlot(slots.default));
        return top === void 0 ? [content] : top.concat(content);
      }
      return [
        h(
          "div",
          { class: headerClasses.value },
          getPanels().map((panel) => {
            const step = camelizeProps(panel.props);
            return h(StepHeader_default, {
              key: step.name,
              stepper: props4,
              step,
              goToPanel
            });
          })
        ),
        top,
        hDir(
          "div",
          { class: "q-stepper__content q-panel-parent" },
          getPanelContent(),
          "cont",
          props4.swipeable,
          () => panelDirectives.value
        )
      ];
    }
    return () => {
      updatePanelsList(slots);
      return h("div", {
        class: classes.value
      }, hMergeSlot(slots.navigation, getContent()));
    };
  }
});
var QStepperNavigation_default = createComponent({
  name: "QStepperNavigation",
  setup(_, { slots }) {
    return () => h("div", { class: "q-stepper__nav" }, hSlot(slots.default));
  }
});
var QTh_default = createComponent({
  name: "QTh",
  props: {
    props: Object,
    autoWidth: Boolean
  },
  emits: ["click"],
  setup(props4, { slots, emit }) {
    const vm2 = getCurrentInstance();
    const { proxy: { $q } } = vm2;
    const onClick = (evt) => {
      emit("click", evt);
    };
    return () => {
      if (props4.props === void 0) {
        return h("th", {
          class: props4.autoWidth === true ? "q-table--col-auto-width" : "",
          onClick
        }, hSlot(slots.default));
      }
      let col, child;
      const name2 = vm2.vnode.key;
      if (name2) {
        col = props4.props.colsMap[name2];
        if (col === void 0) return;
      } else {
        col = props4.props.col;
      }
      if (col.sortable === true) {
        const action = col.align === "right" ? "unshift" : "push";
        child = hUniqueSlot(slots.default, []);
        child[action](
          h(QIcon_default, {
            class: col.__iconClass,
            name: $q.iconSet.table.arrowUp
          })
        );
      } else {
        child = hSlot(slots.default);
      }
      const data = {
        class: col.__thClass + (props4.autoWidth === true ? " q-table--col-auto-width" : ""),
        style: col.headerStyle,
        onClick: (evt) => {
          col.sortable === true && props4.props.sort(col);
          onClick(evt);
        }
      };
      return h("th", data, child);
    };
  }
});
function get_table_middle_default(props4, content) {
  return h("div", props4, [
    h("table", { class: "q-table" }, content)
  ]);
}
var comps = {
  list: QList_default,
  table: QMarkupTable_default
};
var typeOptions = ["list", "table", "__qtable"];
var QVirtualScroll_default = createComponent({
  name: "QVirtualScroll",
  props: {
    ...useVirtualScrollProps,
    type: {
      type: String,
      default: "list",
      validator: (v) => typeOptions.includes(v)
    },
    items: {
      type: Array,
      default: () => []
    },
    itemsFn: Function,
    itemsSize: Number,
    scrollTarget: scrollTargetProp
  },
  setup(props4, { slots, attrs }) {
    let localScrollTarget;
    const rootRef = ref(null);
    const virtualScrollLength = computed(() => props4.itemsSize >= 0 && props4.itemsFn !== void 0 ? parseInt(props4.itemsSize, 10) : Array.isArray(props4.items) ? props4.items.length : 0);
    const {
      virtualScrollSliceRange,
      localResetVirtualScroll,
      padVirtualScroll,
      onVirtualScrollEvt
    } = useVirtualScroll({
      virtualScrollLength,
      getVirtualScrollTarget,
      getVirtualScrollEl
    });
    const virtualScrollScope = computed(() => {
      if (virtualScrollLength.value === 0) {
        return [];
      }
      const mapFn = (item, i) => ({
        index: virtualScrollSliceRange.value.from + i,
        item
      });
      return props4.itemsFn === void 0 ? props4.items.slice(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to).map(mapFn) : props4.itemsFn(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to - virtualScrollSliceRange.value.from).map(mapFn);
    });
    const classes = computed(
      () => "q-virtual-scroll q-virtual-scroll" + (props4.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (props4.scrollTarget !== void 0 ? "" : " scroll")
    );
    const attributes = computed(() => props4.scrollTarget !== void 0 ? {} : { tabindex: 0 });
    watch(virtualScrollLength, () => {
      localResetVirtualScroll();
    });
    watch(() => props4.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function getVirtualScrollEl() {
      return rootRef.value.$el || rootRef.value;
    }
    function getVirtualScrollTarget() {
      return localScrollTarget;
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(getVirtualScrollEl(), props4.scrollTarget);
      localScrollTarget.addEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
        localScrollTarget = void 0;
      }
    }
    function __getVirtualChildren() {
      let child = padVirtualScroll(
        props4.type === "list" ? "div" : "tbody",
        virtualScrollScope.value.map(slots.default)
      );
      if (slots.before !== void 0) {
        child = slots.before().concat(child);
      }
      return hMergeSlot(slots.after, child);
    }
    onBeforeMount(() => {
      localResetVirtualScroll();
    });
    onMounted(() => {
      configureScrollTarget();
    });
    onActivated(() => {
      configureScrollTarget();
    });
    onDeactivated(() => {
      unconfigureScrollTarget();
    });
    onBeforeUnmount(() => {
      unconfigureScrollTarget();
    });
    return () => {
      if (slots.default === void 0) {
        console.error("QVirtualScroll: default scoped slot is required for rendering");
        return;
      }
      return props4.type === "__qtable" ? get_table_middle_default(
        { ref: rootRef, class: "q-table__middle " + classes.value },
        __getVirtualChildren()
      ) : h(comps[props4.type], {
        ...attrs,
        ref: rootRef,
        class: [attrs.class, classes.value],
        ...attributes.value
      }, __getVirtualChildren);
    };
  }
});
function sortDate(a, b) {
  return new Date(a) - new Date(b);
}
var useTableSortProps = {
  sortMethod: Function,
  binaryStateSort: Boolean,
  columnSortOrder: {
    type: String,
    validator: (v) => v === "ad" || v === "da",
    default: "ad"
  }
};
function useTableSort(props4, computedPagination, colList, setPagination) {
  const columnToSort = computed(() => {
    const { sortBy } = computedPagination.value;
    return sortBy ? colList.value.find((def) => def.name === sortBy) || null : null;
  });
  const computedSortMethod = computed(() => props4.sortMethod !== void 0 ? props4.sortMethod : (data, sortBy, descending) => {
    const col = colList.value.find((def) => def.name === sortBy);
    if (col === void 0 || col.field === void 0) {
      return data;
    }
    const dir = descending === true ? -1 : 1, val = typeof col.field === "function" ? (v) => col.field(v) : (v) => v[col.field];
    return data.sort((a, b) => {
      let A = val(a), B = val(b);
      if (col.rawSort !== void 0) {
        return col.rawSort(A, B, a, b) * dir;
      }
      if (A === null || A === void 0) {
        return -1 * dir;
      }
      if (B === null || B === void 0) {
        return 1 * dir;
      }
      if (col.sort !== void 0) {
        return col.sort(A, B, a, b) * dir;
      }
      if (isNumber(A) === true && isNumber(B) === true) {
        return (A - B) * dir;
      }
      if (isDate(A) === true && isDate(B) === true) {
        return sortDate(A, B) * dir;
      }
      if (typeof A === "boolean" && typeof B === "boolean") {
        return (A - B) * dir;
      }
      [A, B] = [A, B].map((s) => (s + "").toLocaleString().toLowerCase());
      return A < B ? -1 * dir : A === B ? 0 : dir;
    });
  });
  function sort(col) {
    let sortOrder = props4.columnSortOrder;
    if (isObject(col) === true) {
      if (col.sortOrder) {
        sortOrder = col.sortOrder;
      }
      col = col.name;
    } else {
      const def = colList.value.find((def2) => def2.name === col);
      if (def !== void 0 && def.sortOrder) {
        sortOrder = def.sortOrder;
      }
    }
    let { sortBy, descending } = computedPagination.value;
    if (sortBy !== col) {
      sortBy = col;
      descending = sortOrder === "da";
    } else if (props4.binaryStateSort === true) {
      descending = !descending;
    } else if (descending === true) {
      if (sortOrder === "ad") {
        sortBy = null;
      } else {
        descending = false;
      }
    } else {
      if (sortOrder === "ad") {
        descending = true;
      } else {
        sortBy = null;
      }
    }
    setPagination({ sortBy, descending, page: 1 });
  }
  return {
    columnToSort,
    computedSortMethod,
    sort
  };
}
var useTableFilterProps = {
  filter: [String, Object],
  filterMethod: Function
};
function useTableFilter(props4, setPagination) {
  const computedFilterMethod = computed(() => props4.filterMethod !== void 0 ? props4.filterMethod : (rows, terms, cols, cellValue) => {
    const lowerTerms = terms ? terms.toLowerCase() : "";
    return rows.filter(
      (row) => cols.some((col) => {
        const val = cellValue(col, row) + "";
        const haystack = val === "undefined" || val === "null" ? "" : val.toLowerCase();
        return haystack.indexOf(lowerTerms) !== -1;
      })
    );
  });
  watch(
    () => props4.filter,
    () => {
      nextTick(() => {
        setPagination({ page: 1 }, true);
      });
    },
    { deep: true }
  );
  return { computedFilterMethod };
}
function samePagination(oldPag, newPag) {
  for (const prop in newPag) {
    if (newPag[prop] !== oldPag[prop]) {
      return false;
    }
  }
  return true;
}
function fixPagination(p) {
  if (p.page < 1) {
    p.page = 1;
  }
  if (p.rowsPerPage !== void 0 && p.rowsPerPage < 1) {
    p.rowsPerPage = 0;
  }
  return p;
}
var useTablePaginationProps = {
  pagination: Object,
  rowsPerPageOptions: {
    type: Array,
    default: () => [5, 7, 10, 15, 20, 25, 50, 0]
  },
  "onUpdate:pagination": [Function, Array]
};
function useTablePaginationState(vm2, getCellValue) {
  const { props: props4, emit } = vm2;
  const innerPagination = ref(
    Object.assign({
      sortBy: null,
      descending: false,
      page: 1,
      rowsPerPage: props4.rowsPerPageOptions.length !== 0 ? props4.rowsPerPageOptions[0] : 5
    }, props4.pagination)
  );
  const computedPagination = computed(() => {
    const pag = props4["onUpdate:pagination"] !== void 0 ? { ...innerPagination.value, ...props4.pagination } : innerPagination.value;
    return fixPagination(pag);
  });
  const isServerSide = computed(() => computedPagination.value.rowsNumber !== void 0);
  function sendServerRequest(pagination) {
    requestServerInteraction({
      pagination,
      filter: props4.filter
    });
  }
  function requestServerInteraction(prop = {}) {
    nextTick(() => {
      emit("request", {
        pagination: prop.pagination || computedPagination.value,
        filter: prop.filter || props4.filter,
        getCellValue
      });
    });
  }
  function setPagination(val, forceServerRequest) {
    const newPagination = fixPagination({
      ...computedPagination.value,
      ...val
    });
    if (samePagination(computedPagination.value, newPagination) === true) {
      if (isServerSide.value === true && forceServerRequest === true) {
        sendServerRequest(newPagination);
      }
      return;
    }
    if (isServerSide.value === true) {
      sendServerRequest(newPagination);
      return;
    }
    if (props4.pagination !== void 0 && props4["onUpdate:pagination"] !== void 0) {
      emit("update:pagination", newPagination);
    } else {
      innerPagination.value = newPagination;
    }
  }
  return {
    innerPagination,
    computedPagination,
    isServerSide,
    requestServerInteraction,
    setPagination
  };
}
function useTablePagination(vm2, innerPagination, computedPagination, isServerSide, setPagination, filteredSortedRowsNumber) {
  const { props: props4, emit, proxy: { $q } } = vm2;
  const computedRowsNumber = computed(() => isServerSide.value === true ? computedPagination.value.rowsNumber || 0 : filteredSortedRowsNumber.value);
  const firstRowIndex = computed(() => {
    const { page, rowsPerPage } = computedPagination.value;
    return (page - 1) * rowsPerPage;
  });
  const lastRowIndex = computed(() => {
    const { page, rowsPerPage } = computedPagination.value;
    return page * rowsPerPage;
  });
  const isFirstPage = computed(() => computedPagination.value.page === 1);
  const pagesNumber = computed(() => computedPagination.value.rowsPerPage === 0 ? 1 : Math.max(
    1,
    Math.ceil(computedRowsNumber.value / computedPagination.value.rowsPerPage)
  ));
  const isLastPage = computed(() => lastRowIndex.value === 0 ? true : computedPagination.value.page >= pagesNumber.value);
  const computedRowsPerPageOptions = computed(() => {
    const opts = props4.rowsPerPageOptions.includes(innerPagination.value.rowsPerPage) ? props4.rowsPerPageOptions : [innerPagination.value.rowsPerPage].concat(props4.rowsPerPageOptions);
    return opts.map((count) => ({
      label: count === 0 ? $q.lang.table.allRows : "" + count,
      value: count
    }));
  });
  watch(pagesNumber, (lastPage2, oldLastPage) => {
    if (lastPage2 === oldLastPage) {
      return;
    }
    const currentPage = computedPagination.value.page;
    if (lastPage2 && !currentPage) {
      setPagination({ page: 1 });
    } else if (lastPage2 < currentPage) {
      setPagination({ page: lastPage2 });
    }
  });
  function firstPage() {
    setPagination({ page: 1 });
  }
  function prevPage() {
    const { page } = computedPagination.value;
    if (page > 1) {
      setPagination({ page: page - 1 });
    }
  }
  function nextPage() {
    const { page, rowsPerPage } = computedPagination.value;
    if (lastRowIndex.value > 0 && page * rowsPerPage < computedRowsNumber.value) {
      setPagination({ page: page + 1 });
    }
  }
  function lastPage() {
    setPagination({ page: pagesNumber.value });
  }
  if (props4["onUpdate:pagination"] !== void 0) {
    emit("update:pagination", { ...computedPagination.value });
  }
  return {
    firstRowIndex,
    lastRowIndex,
    isFirstPage,
    isLastPage,
    pagesNumber,
    computedRowsPerPageOptions,
    computedRowsNumber,
    firstPage,
    prevPage,
    nextPage,
    lastPage
  };
}
var useTableRowSelectionProps = {
  selection: {
    type: String,
    default: "none",
    validator: (v) => ["single", "multiple", "none"].includes(v)
  },
  selected: {
    type: Array,
    default: () => []
  }
};
var useTableRowSelectionEmits = ["update:selected", "selection"];
function useTableRowSelection(props4, emit, computedRows, getRowKey) {
  const selectedKeys = computed(() => {
    const keys = {};
    props4.selected.map(getRowKey.value).forEach((key) => {
      keys[key] = true;
    });
    return keys;
  });
  const hasSelectionMode = computed(() => {
    return props4.selection !== "none";
  });
  const singleSelection = computed(() => {
    return props4.selection === "single";
  });
  const multipleSelection = computed(() => {
    return props4.selection === "multiple";
  });
  const allRowsSelected = computed(
    () => computedRows.value.length !== 0 && computedRows.value.every(
      (row) => selectedKeys.value[getRowKey.value(row)] === true
    )
  );
  const someRowsSelected = computed(
    () => allRowsSelected.value !== true && computedRows.value.some((row) => selectedKeys.value[getRowKey.value(row)] === true)
  );
  const rowsSelectedNumber = computed(() => props4.selected.length);
  function isRowSelected(key) {
    return selectedKeys.value[key] === true;
  }
  function clearSelection2() {
    emit("update:selected", []);
  }
  function updateSelection(keys, rows, added, evt) {
    emit("selection", { rows, added, keys, evt });
    const payload = singleSelection.value === true ? added === true ? rows : [] : added === true ? props4.selected.concat(rows) : props4.selected.filter(
      (row) => keys.includes(getRowKey.value(row)) === false
    );
    emit("update:selected", payload);
  }
  return {
    hasSelectionMode,
    singleSelection,
    multipleSelection,
    allRowsSelected,
    someRowsSelected,
    rowsSelectedNumber,
    isRowSelected,
    clearSelection: clearSelection2,
    updateSelection
  };
}
function getVal(val) {
  return Array.isArray(val) ? val.slice() : [];
}
var useTableRowExpandProps = {
  expanded: Array
  // v-model:expanded
};
var useTableRowExpandEmits = ["update:expanded"];
function useTableRowExpand(props4, emit) {
  const innerExpanded = ref(getVal(props4.expanded));
  watch(() => props4.expanded, (val) => {
    innerExpanded.value = getVal(val);
  });
  function isRowExpanded(key) {
    return innerExpanded.value.includes(key);
  }
  function setExpanded(val) {
    if (props4.expanded !== void 0) {
      emit("update:expanded", val);
    } else {
      innerExpanded.value = val;
    }
  }
  function updateExpanded(key, add) {
    const target2 = innerExpanded.value.slice();
    const index = target2.indexOf(key);
    if (add === true) {
      if (index === -1) {
        target2.push(key);
        setExpanded(target2);
      }
    } else if (index !== -1) {
      target2.splice(index, 1);
      setExpanded(target2);
    }
  }
  return {
    isRowExpanded,
    setExpanded,
    updateExpanded
  };
}
var useTableColumnSelectionProps = {
  visibleColumns: Array
};
function useTableColumnSelection(props4, computedPagination, hasSelectionMode) {
  const colList = computed(() => {
    if (props4.columns !== void 0) {
      return props4.columns;
    }
    const row = props4.rows[0];
    return row !== void 0 ? Object.keys(row).map((name2) => ({
      name: name2,
      label: name2.toUpperCase(),
      field: name2,
      align: isNumber(row[name2]) ? "right" : "left",
      sortable: true
    })) : [];
  });
  const computedCols = computed(() => {
    const { sortBy, descending } = computedPagination.value;
    const cols = props4.visibleColumns !== void 0 ? colList.value.filter((col) => col.required === true || props4.visibleColumns.includes(col.name) === true) : colList.value;
    return cols.map((col) => {
      const align = col.align || "right";
      const alignClass = `text-${align}`;
      return {
        ...col,
        align,
        __iconClass: `q-table__sort-icon q-table__sort-icon--${align}`,
        __thClass: alignClass + (col.headerClasses !== void 0 ? " " + col.headerClasses : "") + (col.sortable === true ? " sortable" : "") + (col.name === sortBy ? ` sorted ${descending === true ? "sort-desc" : ""}` : ""),
        __tdStyle: col.style !== void 0 ? typeof col.style !== "function" ? () => col.style : col.style : () => null,
        __tdClass: col.classes !== void 0 ? typeof col.classes !== "function" ? () => alignClass + " " + col.classes : (row) => alignClass + " " + col.classes(row) : () => alignClass
      };
    });
  });
  const computedColsMap = computed(() => {
    const names = {};
    computedCols.value.forEach((col) => {
      names[col.name] = col;
    });
    return names;
  });
  const computedColspan = computed(() => {
    return props4.tableColspan !== void 0 ? props4.tableColspan : computedCols.value.length + (hasSelectionMode.value === true ? 1 : 0);
  });
  return {
    colList,
    computedCols,
    computedColsMap,
    computedColspan
  };
}
var bottomClass = "q-table__bottom row items-center";
var virtScrollPassthroughProps = {};
commonVirtScrollPropsList.forEach((p) => {
  virtScrollPassthroughProps[p] = {};
});
var QTable_default = createComponent({
  name: "QTable",
  props: {
    rows: {
      type: Array,
      required: true
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    columns: Array,
    loading: Boolean,
    iconFirstPage: String,
    iconPrevPage: String,
    iconNextPage: String,
    iconLastPage: String,
    title: String,
    hideHeader: Boolean,
    grid: Boolean,
    gridHeader: Boolean,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (v) => ["horizontal", "vertical", "cell", "none"].includes(v)
    },
    wrapCells: Boolean,
    virtualScroll: Boolean,
    virtualScrollTarget: {},
    ...virtScrollPassthroughProps,
    noDataLabel: String,
    noResultsLabel: String,
    loadingLabel: String,
    selectedRowsLabel: Function,
    rowsPerPageLabel: String,
    paginationLabel: Function,
    color: {
      type: String,
      default: "grey-8"
    },
    titleClass: [String, Array, Object],
    tableStyle: [String, Array, Object],
    tableClass: [String, Array, Object],
    tableHeaderStyle: [String, Array, Object],
    tableHeaderClass: [String, Array, Object],
    cardContainerClass: [String, Array, Object],
    cardContainerStyle: [String, Array, Object],
    cardStyle: [String, Array, Object],
    cardClass: [String, Array, Object],
    hideBottom: Boolean,
    hideSelectedBanner: Boolean,
    hideNoData: Boolean,
    hidePagination: Boolean,
    onRowClick: Function,
    onRowDblclick: Function,
    onRowContextmenu: Function,
    ...useDarkProps,
    ...useFullscreenProps,
    ...useTableColumnSelectionProps,
    ...useTableFilterProps,
    ...useTablePaginationProps,
    ...useTableRowExpandProps,
    ...useTableRowSelectionProps,
    ...useTableSortProps
  },
  emits: [
    "request",
    "virtualScroll",
    ...useFullscreenEmits,
    ...useTableRowExpandEmits,
    ...useTableRowSelectionEmits
  ],
  setup(props4, { slots, emit }) {
    const vm2 = getCurrentInstance();
    const { proxy: { $q } } = vm2;
    const isDark = use_dark_default(props4, $q);
    const { inFullscreen, toggleFullscreen } = use_fullscreen_default();
    const getRowKey = computed(() => typeof props4.rowKey === "function" ? props4.rowKey : (row) => row[props4.rowKey]);
    const rootRef = ref(null);
    const virtScrollRef = ref(null);
    const hasVirtScroll = computed(() => props4.grid !== true && props4.virtualScroll === true);
    const cardDefaultClass = computed(
      () => " q-table__card" + (isDark.value === true ? " q-table__card--dark q-dark" : "") + (props4.square === true ? " q-table--square" : "") + (props4.flat === true ? " q-table--flat" : "") + (props4.bordered === true ? " q-table--bordered" : "")
    );
    const __containerClass = computed(
      () => `q-table__container q-table--${props4.separator}-separator column no-wrap` + (props4.grid === true ? " q-table--grid" : cardDefaultClass.value) + (isDark.value === true ? " q-table--dark" : "") + (props4.dense === true ? " q-table--dense" : "") + (props4.wrapCells === false ? " q-table--no-wrap" : "") + (inFullscreen.value === true ? " fullscreen scroll" : "")
    );
    const containerClass = computed(
      () => __containerClass.value + (props4.loading === true ? " q-table--loading" : "")
    );
    watch(
      () => props4.tableStyle + props4.tableClass + props4.tableHeaderStyle + props4.tableHeaderClass + __containerClass.value,
      () => {
        hasVirtScroll.value === true && virtScrollRef.value !== null && virtScrollRef.value.reset();
      }
    );
    const {
      innerPagination,
      computedPagination,
      isServerSide,
      requestServerInteraction,
      setPagination
    } = useTablePaginationState(vm2, getCellValue);
    const { computedFilterMethod } = useTableFilter(props4, setPagination);
    const { isRowExpanded, setExpanded, updateExpanded } = useTableRowExpand(props4, emit);
    const filteredSortedRows = computed(() => {
      let rows = props4.rows;
      if (isServerSide.value === true || rows.length === 0) {
        return rows;
      }
      const { sortBy, descending } = computedPagination.value;
      if (props4.filter) {
        rows = computedFilterMethod.value(rows, props4.filter, computedCols.value, getCellValue);
      }
      if (columnToSort.value !== null) {
        rows = computedSortMethod.value(
          props4.rows === rows ? rows.slice() : rows,
          sortBy,
          descending
        );
      }
      return rows;
    });
    const filteredSortedRowsNumber = computed(() => filteredSortedRows.value.length);
    const computedRows = computed(() => {
      let rows = filteredSortedRows.value;
      if (isServerSide.value === true) {
        return rows;
      }
      const { rowsPerPage } = computedPagination.value;
      if (rowsPerPage !== 0) {
        if (firstRowIndex.value === 0 && props4.rows !== rows) {
          if (rows.length > lastRowIndex.value) {
            rows = rows.slice(0, lastRowIndex.value);
          }
        } else {
          rows = rows.slice(firstRowIndex.value, lastRowIndex.value);
        }
      }
      return rows;
    });
    const {
      hasSelectionMode,
      singleSelection,
      multipleSelection,
      allRowsSelected,
      someRowsSelected,
      rowsSelectedNumber,
      isRowSelected,
      clearSelection: clearSelection2,
      updateSelection
    } = useTableRowSelection(props4, emit, computedRows, getRowKey);
    const { colList, computedCols, computedColsMap, computedColspan } = useTableColumnSelection(props4, computedPagination, hasSelectionMode);
    const { columnToSort, computedSortMethod, sort } = useTableSort(props4, computedPagination, colList, setPagination);
    const {
      firstRowIndex,
      lastRowIndex,
      isFirstPage,
      isLastPage,
      pagesNumber,
      computedRowsPerPageOptions,
      computedRowsNumber,
      firstPage,
      prevPage,
      nextPage,
      lastPage
    } = useTablePagination(vm2, innerPagination, computedPagination, isServerSide, setPagination, filteredSortedRowsNumber);
    const nothingToDisplay = computed(() => computedRows.value.length === 0);
    const virtProps = computed(() => {
      const acc = {};
      commonVirtScrollPropsList.forEach((p) => {
        acc[p] = props4[p];
      });
      if (acc.virtualScrollItemSize === void 0) {
        acc.virtualScrollItemSize = props4.dense === true ? 28 : 48;
      }
      return acc;
    });
    function resetVirtualScroll() {
      hasVirtScroll.value === true && virtScrollRef.value.reset();
    }
    function getBody() {
      if (props4.grid === true) {
        return getGridBody();
      }
      const header = props4.hideHeader !== true ? getTHead : null;
      if (hasVirtScroll.value === true) {
        const topRow = slots["top-row"];
        const bottomRow = slots["bottom-row"];
        const virtSlots = {
          default: (props5) => getTBodyTR(props5.item, slots.body, props5.index)
        };
        if (topRow !== void 0) {
          const topContent = h("tbody", topRow({ cols: computedCols.value }));
          virtSlots.before = header === null ? () => topContent : () => [header()].concat(topContent);
        } else if (header !== null) {
          virtSlots.before = header;
        }
        if (bottomRow !== void 0) {
          virtSlots.after = () => h("tbody", bottomRow({ cols: computedCols.value }));
        }
        return h(QVirtualScroll_default, {
          ref: virtScrollRef,
          class: props4.tableClass,
          style: props4.tableStyle,
          ...virtProps.value,
          scrollTarget: props4.virtualScrollTarget,
          items: computedRows.value,
          type: "__qtable",
          tableColspan: computedColspan.value,
          onVirtualScroll: onVScroll
        }, virtSlots);
      }
      const child = [
        getTBody()
      ];
      if (header !== null) {
        child.unshift(header());
      }
      return get_table_middle_default({
        class: ["q-table__middle scroll", props4.tableClass],
        style: props4.tableStyle
      }, child);
    }
    function scrollTo(toIndex, edge) {
      if (virtScrollRef.value !== null) {
        virtScrollRef.value.scrollTo(toIndex, edge);
        return;
      }
      toIndex = parseInt(toIndex, 10);
      const rowEl = rootRef.value.querySelector(`tbody tr:nth-of-type(${toIndex + 1})`);
      if (rowEl !== null) {
        const scrollTarget = rootRef.value.querySelector(".q-table__middle.scroll");
        const offsetTop = rowEl.offsetTop - props4.virtualScrollStickySizeStart;
        const direction = offsetTop < scrollTarget.scrollTop ? "decrease" : "increase";
        scrollTarget.scrollTop = offsetTop;
        emit("virtualScroll", {
          index: toIndex,
          from: 0,
          to: innerPagination.value.rowsPerPage - 1,
          direction
        });
      }
    }
    function onVScroll(info) {
      emit("virtualScroll", info);
    }
    function getProgress() {
      return [
        h(QLinearProgress_default, {
          class: "q-table__linear-progress",
          color: props4.color,
          dark: isDark.value,
          indeterminate: true,
          trackColor: "transparent"
        })
      ];
    }
    function getTBodyTR(row, bodySlot, pageIndex) {
      const key = getRowKey.value(row), selected = isRowSelected(key);
      if (bodySlot !== void 0) {
        return bodySlot(
          getBodyScope({
            key,
            row,
            pageIndex,
            __trClass: selected ? "selected" : ""
          })
        );
      }
      const bodyCell = slots["body-cell"], child = computedCols.value.map((col) => {
        const bodyCellCol = slots[`body-cell-${col.name}`], slot = bodyCellCol !== void 0 ? bodyCellCol : bodyCell;
        return slot !== void 0 ? slot(getBodyCellScope({ key, row, pageIndex, col })) : h("td", {
          class: col.__tdClass(row),
          style: col.__tdStyle(row)
        }, getCellValue(col, row));
      });
      if (hasSelectionMode.value === true) {
        const slot = slots["body-selection"];
        const content = slot !== void 0 ? slot(getBodySelectionScope({ key, row, pageIndex })) : [
          h(QCheckbox_default, {
            modelValue: selected,
            color: props4.color,
            dark: isDark.value,
            dense: props4.dense,
            "onUpdate:modelValue": (adding, evt) => {
              updateSelection([key], [row], adding, evt);
            }
          })
        ];
        child.unshift(
          h("td", { class: "q-table--col-auto-width" }, content)
        );
      }
      const data = { key, class: { selected } };
      if (props4.onRowClick !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onClick = (evt) => {
          emit("rowClick", evt, row, pageIndex);
        };
      }
      if (props4.onRowDblclick !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onDblclick = (evt) => {
          emit("rowDblclick", evt, row, pageIndex);
        };
      }
      if (props4.onRowContextmenu !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onContextmenu = (evt) => {
          emit("rowContextmenu", evt, row, pageIndex);
        };
      }
      return h("tr", data, child);
    }
    function getTBody() {
      const body = slots.body, topRow = slots["top-row"], bottomRow = slots["bottom-row"];
      let child = computedRows.value.map(
        (row, pageIndex) => getTBodyTR(row, body, pageIndex)
      );
      if (topRow !== void 0) {
        child = topRow({ cols: computedCols.value }).concat(child);
      }
      if (bottomRow !== void 0) {
        child = child.concat(bottomRow({ cols: computedCols.value }));
      }
      return h("tbody", child);
    }
    function getBodyScope(data) {
      injectBodyCommonScope(data);
      data.cols = data.cols.map(
        (col) => injectProp({ ...col }, "value", () => getCellValue(col, data.row))
      );
      return data;
    }
    function getBodyCellScope(data) {
      injectBodyCommonScope(data);
      injectProp(data, "value", () => getCellValue(data.col, data.row));
      return data;
    }
    function getBodySelectionScope(data) {
      injectBodyCommonScope(data);
      return data;
    }
    function injectBodyCommonScope(data) {
      Object.assign(data, {
        cols: computedCols.value,
        colsMap: computedColsMap.value,
        sort,
        rowIndex: firstRowIndex.value + data.pageIndex,
        color: props4.color,
        dark: isDark.value,
        dense: props4.dense
      });
      hasSelectionMode.value === true && injectProp(
        data,
        "selected",
        () => isRowSelected(data.key),
        (adding, evt) => {
          updateSelection([data.key], [data.row], adding, evt);
        }
      );
      injectProp(
        data,
        "expand",
        () => isRowExpanded(data.key),
        (adding) => {
          updateExpanded(data.key, adding);
        }
      );
    }
    function getCellValue(col, row) {
      const val = typeof col.field === "function" ? col.field(row) : row[col.field];
      return col.format !== void 0 ? col.format(val, row) : val;
    }
    const marginalsScope = computed(() => ({
      pagination: computedPagination.value,
      pagesNumber: pagesNumber.value,
      isFirstPage: isFirstPage.value,
      isLastPage: isLastPage.value,
      firstPage,
      prevPage,
      nextPage,
      lastPage,
      inFullscreen: inFullscreen.value,
      toggleFullscreen
    }));
    function getTopDiv() {
      const top = slots.top, topLeft = slots["top-left"], topRight = slots["top-right"], topSelection = slots["top-selection"], hasSelection = hasSelectionMode.value === true && topSelection !== void 0 && rowsSelectedNumber.value > 0, topClass = "q-table__top relative-position row items-center";
      if (top !== void 0) {
        return h("div", { class: topClass }, [top(marginalsScope.value)]);
      }
      let child;
      if (hasSelection === true) {
        child = topSelection(marginalsScope.value).slice();
      } else {
        child = [];
        if (topLeft !== void 0) {
          child.push(
            h("div", { class: "q-table__control" }, [
              topLeft(marginalsScope.value)
            ])
          );
        } else if (props4.title) {
          child.push(
            h("div", { class: "q-table__control" }, [
              h("div", {
                class: ["q-table__title", props4.titleClass]
              }, props4.title)
            ])
          );
        }
      }
      if (topRight !== void 0) {
        child.push(
          h("div", { class: "q-table__separator col" })
        );
        child.push(
          h("div", { class: "q-table__control" }, [
            topRight(marginalsScope.value)
          ])
        );
      }
      if (child.length === 0) {
        return;
      }
      return h("div", { class: topClass }, child);
    }
    const headerSelectedValue = computed(() => someRowsSelected.value === true ? null : allRowsSelected.value);
    function getTHead() {
      const child = getTHeadTR();
      if (props4.loading === true && slots.loading === void 0) {
        child.push(
          h("tr", { class: "q-table__progress" }, [
            h("th", {
              class: "relative-position",
              colspan: computedColspan.value
            }, getProgress())
          ])
        );
      }
      return h("thead", child);
    }
    function getTHeadTR() {
      const header = slots.header, headerCell = slots["header-cell"];
      if (header !== void 0) {
        return header(
          getHeaderScope({ header: true })
        ).slice();
      }
      const child = computedCols.value.map((col) => {
        const headerCellCol = slots[`header-cell-${col.name}`], slot = headerCellCol !== void 0 ? headerCellCol : headerCell, props5 = getHeaderScope({ col });
        return slot !== void 0 ? slot(props5) : h(QTh_default, {
          key: col.name,
          props: props5
        }, () => col.label);
      });
      if (singleSelection.value === true && props4.grid !== true) {
        child.unshift(
          h("th", { class: "q-table--col-auto-width" }, " ")
        );
      } else if (multipleSelection.value === true) {
        const slot = slots["header-selection"];
        const content = slot !== void 0 ? slot(getHeaderScope({})) : [
          h(QCheckbox_default, {
            color: props4.color,
            modelValue: headerSelectedValue.value,
            dark: isDark.value,
            dense: props4.dense,
            "onUpdate:modelValue": onMultipleSelectionSet
          })
        ];
        child.unshift(
          h("th", { class: "q-table--col-auto-width" }, content)
        );
      }
      return [
        h("tr", {
          class: props4.tableHeaderClass,
          style: props4.tableHeaderStyle
        }, child)
      ];
    }
    function getHeaderScope(data) {
      Object.assign(data, {
        cols: computedCols.value,
        sort,
        colsMap: computedColsMap.value,
        color: props4.color,
        dark: isDark.value,
        dense: props4.dense
      });
      if (multipleSelection.value === true) {
        injectProp(
          data,
          "selected",
          () => headerSelectedValue.value,
          onMultipleSelectionSet
        );
      }
      return data;
    }
    function onMultipleSelectionSet(val) {
      if (someRowsSelected.value === true) {
        val = false;
      }
      updateSelection(
        computedRows.value.map(getRowKey.value),
        computedRows.value,
        val
      );
    }
    const navIcon = computed(() => {
      const ico = [
        props4.iconFirstPage || $q.iconSet.table.firstPage,
        props4.iconPrevPage || $q.iconSet.table.prevPage,
        props4.iconNextPage || $q.iconSet.table.nextPage,
        props4.iconLastPage || $q.iconSet.table.lastPage
      ];
      return $q.lang.rtl === true ? ico.reverse() : ico;
    });
    function getBottomDiv() {
      if (props4.hideBottom === true) {
        return;
      }
      if (nothingToDisplay.value === true) {
        if (props4.hideNoData === true) {
          return;
        }
        const message = props4.loading === true ? props4.loadingLabel || $q.lang.table.loading : props4.filter ? props4.noResultsLabel || $q.lang.table.noResults : props4.noDataLabel || $q.lang.table.noData;
        const noData = slots["no-data"];
        const children = noData !== void 0 ? [noData({ message, icon: $q.iconSet.table.warning, filter: props4.filter })] : [
          h(QIcon_default, {
            class: "q-table__bottom-nodata-icon",
            name: $q.iconSet.table.warning
          }),
          message
        ];
        return h("div", { class: bottomClass + " q-table__bottom--nodata" }, children);
      }
      const bottom = slots.bottom;
      if (bottom !== void 0) {
        return h("div", { class: bottomClass }, [bottom(marginalsScope.value)]);
      }
      const child = props4.hideSelectedBanner !== true && hasSelectionMode.value === true && rowsSelectedNumber.value > 0 ? [
        h("div", { class: "q-table__control" }, [
          h("div", [
            (props4.selectedRowsLabel || $q.lang.table.selectedRecords)(rowsSelectedNumber.value)
          ])
        ])
      ] : [];
      if (props4.hidePagination !== true) {
        return h("div", {
          class: bottomClass + " justify-end"
        }, getPaginationDiv(child));
      }
      if (child.length !== 0) {
        return h("div", { class: bottomClass }, child);
      }
    }
    function onPagSelection(pag) {
      setPagination({
        page: 1,
        rowsPerPage: pag.value
      });
    }
    function getPaginationDiv(child) {
      let control;
      const { rowsPerPage } = computedPagination.value, paginationLabel = props4.paginationLabel || $q.lang.table.pagination, paginationSlot = slots.pagination, hasOpts = props4.rowsPerPageOptions.length > 1;
      child.push(
        h("div", { class: "q-table__separator col" })
      );
      if (hasOpts === true) {
        child.push(
          h("div", { class: "q-table__control" }, [
            h("span", { class: "q-table__bottom-item" }, [
              props4.rowsPerPageLabel || $q.lang.table.recordsPerPage
            ]),
            h(QSelect_default, {
              class: "q-table__select inline q-table__bottom-item",
              color: props4.color,
              modelValue: rowsPerPage,
              options: computedRowsPerPageOptions.value,
              displayValue: rowsPerPage === 0 ? $q.lang.table.allRows : rowsPerPage,
              dark: isDark.value,
              borderless: true,
              dense: true,
              optionsDense: true,
              optionsCover: true,
              "onUpdate:modelValue": onPagSelection
            })
          ])
        );
      }
      if (paginationSlot !== void 0) {
        control = paginationSlot(marginalsScope.value);
      } else {
        control = [
          h("span", rowsPerPage !== 0 ? { class: "q-table__bottom-item" } : {}, [
            rowsPerPage ? paginationLabel(firstRowIndex.value + 1, Math.min(lastRowIndex.value, computedRowsNumber.value), computedRowsNumber.value) : paginationLabel(1, filteredSortedRowsNumber.value, computedRowsNumber.value)
          ])
        ];
        if (rowsPerPage !== 0 && pagesNumber.value > 1) {
          const btnProps = {
            color: props4.color,
            round: true,
            dense: true,
            flat: true
          };
          if (props4.dense === true) {
            btnProps.size = "sm";
          }
          pagesNumber.value > 2 && control.push(
            h(QBtn_default, {
              key: "pgFirst",
              ...btnProps,
              icon: navIcon.value[0],
              disable: isFirstPage.value,
              onClick: firstPage
            })
          );
          control.push(
            h(QBtn_default, {
              key: "pgPrev",
              ...btnProps,
              icon: navIcon.value[1],
              disable: isFirstPage.value,
              onClick: prevPage
            }),
            h(QBtn_default, {
              key: "pgNext",
              ...btnProps,
              icon: navIcon.value[2],
              disable: isLastPage.value,
              onClick: nextPage
            })
          );
          pagesNumber.value > 2 && control.push(
            h(QBtn_default, {
              key: "pgLast",
              ...btnProps,
              icon: navIcon.value[3],
              disable: isLastPage.value,
              onClick: lastPage
            })
          );
        }
      }
      child.push(
        h("div", { class: "q-table__control" }, control)
      );
      return child;
    }
    function getGridHeader() {
      const child = props4.gridHeader === true ? [
        h("table", { class: "q-table" }, [
          getTHead(h)
        ])
      ] : props4.loading === true && slots.loading === void 0 ? getProgress(h) : void 0;
      return h("div", { class: "q-table__middle" }, child);
    }
    function getGridBody() {
      const item = slots.item !== void 0 ? slots.item : (scope) => {
        const child = scope.cols.map(
          (col) => h("div", { class: "q-table__grid-item-row" }, [
            h("div", { class: "q-table__grid-item-title" }, [col.label]),
            h("div", { class: "q-table__grid-item-value" }, [col.value])
          ])
        );
        if (hasSelectionMode.value === true) {
          const slot = slots["body-selection"];
          const content = slot !== void 0 ? slot(scope) : [
            h(QCheckbox_default, {
              modelValue: scope.selected,
              color: props4.color,
              dark: isDark.value,
              dense: props4.dense,
              "onUpdate:modelValue": (adding, evt) => {
                updateSelection([scope.key], [scope.row], adding, evt);
              }
            })
          ];
          child.unshift(
            h("div", { class: "q-table__grid-item-row" }, content),
            h(QSeparator_default, { dark: isDark.value })
          );
        }
        const data = {
          class: [
            "q-table__grid-item-card" + cardDefaultClass.value,
            props4.cardClass
          ],
          style: props4.cardStyle
        };
        if (props4.onRowClick !== void 0 || props4.onRowDblclick !== void 0) {
          data.class[0] += " cursor-pointer";
          if (props4.onRowClick !== void 0) {
            data.onClick = (evt) => {
              emit("RowClick", evt, scope.row, scope.pageIndex);
            };
          }
          if (props4.onRowDblclick !== void 0) {
            data.onDblclick = (evt) => {
              emit("RowDblclick", evt, scope.row, scope.pageIndex);
            };
          }
        }
        return h("div", {
          class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (scope.selected === true ? " q-table__grid-item--selected" : "")
        }, [
          h("div", data, child)
        ]);
      };
      return h("div", {
        class: [
          "q-table__grid-content row",
          props4.cardContainerClass
        ],
        style: props4.cardContainerStyle
      }, computedRows.value.map((row, pageIndex) => {
        return item(getBodyScope({
          key: getRowKey.value(row),
          row,
          pageIndex
        }));
      }));
    }
    Object.assign(vm2.proxy, {
      requestServerInteraction,
      setPagination,
      firstPage,
      prevPage,
      nextPage,
      lastPage,
      isRowSelected,
      clearSelection: clearSelection2,
      isRowExpanded,
      setExpanded,
      sort,
      resetVirtualScroll,
      scrollTo,
      getCellValue
    });
    injectMultipleProps(vm2.proxy, {
      filteredSortedRows: () => filteredSortedRows.value,
      computedRows: () => computedRows.value,
      computedRowsNumber: () => computedRowsNumber.value
    });
    return () => {
      const child = [getTopDiv()];
      const data = { ref: rootRef, class: containerClass.value };
      if (props4.grid === true) {
        child.push(getGridHeader());
      } else {
        Object.assign(data, {
          class: [data.class, props4.cardClass],
          style: props4.cardStyle
        });
      }
      child.push(
        getBody(),
        getBottomDiv()
      );
      if (props4.loading === true && slots.loading !== void 0) {
        child.push(
          slots.loading()
        );
      }
      return h("div", data, child);
    };
  }
});
var QTr_default = createComponent({
  name: "QTr",
  props: {
    props: Object,
    noHover: Boolean
  },
  setup(props4, { slots }) {
    const classes = computed(
      () => "q-tr" + (props4.props === void 0 || props4.props.header === true ? "" : " " + props4.props.__trClass) + (props4.noHover === true ? " q-tr--no-hover" : "")
    );
    return () => h("tr", { class: classes.value }, hSlot(slots.default));
  }
});
var QTd_default = createComponent({
  name: "QTd",
  props: {
    props: Object,
    autoWidth: Boolean,
    noHover: Boolean
  },
  setup(props4, { slots }) {
    const vm2 = getCurrentInstance();
    const classes = computed(
      () => "q-td" + (props4.autoWidth === true ? " q-table--col-auto-width" : "") + (props4.noHover === true ? " q-td--no-hover" : "") + " "
    );
    return () => {
      if (props4.props === void 0) {
        return h("td", { class: classes.value }, hSlot(slots.default));
      }
      const name2 = vm2.vnode.key;
      const col = (props4.props.colsMap !== void 0 ? props4.props.colsMap[name2] : null) || props4.props.col;
      if (col === void 0) return;
      const { row } = props4.props;
      return h("td", {
        class: classes.value + col.__tdClass(row),
        style: col.__tdStyle(row)
      }, hSlot(slots.default));
    };
  }
});
var QRouteTab_default = createComponent({
  name: "QRouteTab",
  props: {
    ...useRouterLinkProps,
    ...useTabProps
  },
  emits: useTabEmits,
  setup(props4, { slots, emit }) {
    const routeData = use_router_link_default({
      useDisableForRouterLinkProps: false
    });
    const { renderTab, $tabs } = use_tab_default(
      props4,
      slots,
      emit,
      {
        exact: computed(() => props4.exact),
        ...routeData
      }
    );
    watch(
      () => `${props4.name} | ${props4.exact} | ${(routeData.resolvedLink.value || {}).href}`,
      $tabs.verifyRouteModel
    );
    return () => renderTab(routeData.linkTag.value, routeData.linkAttrs.value);
  }
});
function getViewByModel(model, withSeconds) {
  if (model.hour !== null) {
    if (model.minute === null) {
      return "minute";
    } else if (withSeconds === true && model.second === null) {
      return "second";
    }
  }
  return "hour";
}
function getCurrentTime() {
  const d = /* @__PURE__ */ new Date();
  return {
    hour: d.getHours(),
    minute: d.getMinutes(),
    second: d.getSeconds(),
    millisecond: d.getMilliseconds()
  };
}
var QTime_default = createComponent({
  name: "QTime",
  props: {
    ...useDarkProps,
    ...useFormProps,
    ...useDatetimeProps,
    modelValue: {
      required: true,
      validator: (val) => typeof val === "string" || val === null
    },
    mask: {
      ...useDatetimeProps.mask,
      default: null
    },
    format24h: {
      type: Boolean,
      default: null
    },
    defaultDate: {
      type: String,
      validator: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v)
    },
    options: Function,
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    withSeconds: Boolean,
    nowBtn: Boolean
  },
  emits: useDatetimeEmits,
  setup(props4, { slots, emit }) {
    const vm2 = getCurrentInstance();
    const { $q } = vm2.proxy;
    const isDark = use_dark_default(props4, $q);
    const { tabindex, headerClass, getLocale: getLocale2, getCurrentDate } = use_datetime_default(props4, $q);
    const formAttrs = useFormAttrs(props4);
    const injectFormInput = useFormInject(formAttrs);
    let draggingClockRect, dragCache;
    const clockRef = ref(null);
    const mask = computed(() => getMask());
    const locale = computed(() => getLocale2());
    const defaultDateModel = computed(() => getDefaultDateModel());
    const model = __splitDate(
      props4.modelValue,
      mask.value,
      // initial mask
      locale.value,
      // initial locale
      props4.calendar,
      defaultDateModel.value
    );
    const view = ref(getViewByModel(model));
    const innerModel = ref(model);
    const isAM = ref(model.hour === null || model.hour < 12);
    const classes = computed(
      () => `q-time q-time--${props4.landscape === true ? "landscape" : "portrait"}` + (isDark.value === true ? " q-time--dark q-dark" : "") + (props4.disable === true ? " disabled" : props4.readonly === true ? " q-time--readonly" : "") + (props4.bordered === true ? " q-time--bordered" : "") + (props4.square === true ? " q-time--square no-border-radius" : "") + (props4.flat === true ? " q-time--flat no-shadow" : "")
    );
    const stringModel = computed(() => {
      const time = innerModel.value;
      return {
        hour: time.hour === null ? "--" : computedFormat24h.value === true ? pad(time.hour) : String(
          isAM.value === true ? time.hour === 0 ? 12 : time.hour : time.hour > 12 ? time.hour - 12 : time.hour
        ),
        minute: time.minute === null ? "--" : pad(time.minute),
        second: time.second === null ? "--" : pad(time.second)
      };
    });
    const computedFormat24h = computed(() => props4.format24h !== null ? props4.format24h : $q.lang.date.format24h);
    const pointerStyle = computed(() => {
      const forHour = view.value === "hour", divider = forHour === true ? 12 : 60, amount = innerModel.value[view.value], degrees = Math.round(amount * (360 / divider)) - 180;
      let transform = `rotate(${degrees}deg) translateX(-50%)`;
      if (forHour === true && computedFormat24h.value === true && innerModel.value.hour >= 12) {
        transform += " scale(.7)";
      }
      return { transform };
    });
    const minLink = computed(() => innerModel.value.hour !== null);
    const secLink = computed(() => minLink.value === true && innerModel.value.minute !== null);
    const hourInSelection = computed(() => props4.hourOptions !== void 0 ? (val) => props4.hourOptions.includes(val) : props4.options !== void 0 ? (val) => props4.options(val, null, null) : null);
    const minuteInSelection = computed(() => props4.minuteOptions !== void 0 ? (val) => props4.minuteOptions.includes(val) : props4.options !== void 0 ? (val) => props4.options(innerModel.value.hour, val, null) : null);
    const secondInSelection = computed(() => props4.secondOptions !== void 0 ? (val) => props4.secondOptions.includes(val) : props4.options !== void 0 ? (val) => props4.options(innerModel.value.hour, innerModel.value.minute, val) : null);
    const validHours = computed(() => {
      if (hourInSelection.value === null) {
        return null;
      }
      const am = getValidValues(0, 11, hourInSelection.value);
      const pm = getValidValues(12, 11, hourInSelection.value);
      return { am, pm, values: am.values.concat(pm.values) };
    });
    const validMinutes = computed(() => minuteInSelection.value !== null ? getValidValues(0, 59, minuteInSelection.value) : null);
    const validSeconds = computed(() => secondInSelection.value !== null ? getValidValues(0, 59, secondInSelection.value) : null);
    const viewValidOptions = computed(() => {
      switch (view.value) {
        case "hour":
          return validHours.value;
        case "minute":
          return validMinutes.value;
        case "second":
          return validSeconds.value;
      }
    });
    const positions = computed(() => {
      let start, end, offset2 = 0, step = 1;
      const values = viewValidOptions.value !== null ? viewValidOptions.value.values : void 0;
      if (view.value === "hour") {
        if (computedFormat24h.value === true) {
          start = 0;
          end = 23;
        } else {
          start = 0;
          end = 11;
          if (isAM.value === false) {
            offset2 = 12;
          }
        }
      } else {
        start = 0;
        end = 55;
        step = 5;
      }
      const pos = [];
      for (let val = start, index = start; val <= end; val += step, index++) {
        const actualVal = val + offset2, disable = values !== void 0 && values.includes(actualVal) === false, label = view.value === "hour" && val === 0 ? computedFormat24h.value === true ? "00" : "12" : val;
        pos.push({ val: actualVal, index, disable, label });
      }
      return pos;
    });
    const clockDirectives = computed(() => {
      return [[
        TouchPan_default,
        onPan,
        void 0,
        {
          stop: true,
          prevent: true,
          mouse: true
        }
      ]];
    });
    watch(() => props4.modelValue, (v) => {
      const model2 = __splitDate(
        v,
        mask.value,
        locale.value,
        props4.calendar,
        defaultDateModel.value
      );
      if (model2.dateHash !== innerModel.value.dateHash || model2.timeHash !== innerModel.value.timeHash) {
        innerModel.value = model2;
        if (model2.hour === null) {
          view.value = "hour";
        } else {
          isAM.value = model2.hour < 12;
        }
      }
    });
    watch([mask, locale], () => {
      nextTick(() => {
        updateValue2();
      });
    });
    function setNow() {
      const date = {
        ...getCurrentDate(),
        ...getCurrentTime()
      };
      updateValue2(date);
      Object.assign(innerModel.value, date);
      view.value = "hour";
    }
    function getValidValues(start, count, testFn) {
      const values = Array.apply(null, { length: count + 1 }).map((_, index) => {
        const i = index + start;
        return {
          index: i,
          val: testFn(i) === true
          // force boolean
        };
      }).filter((v) => v.val === true).map((v) => v.index);
      return {
        min: values[0],
        max: values[values.length - 1],
        values,
        threshold: count + 1
      };
    }
    function getWheelDist(a, b, threshold) {
      const diff2 = Math.abs(a - b);
      return Math.min(diff2, threshold - diff2);
    }
    function getNormalizedClockValue(val, { min, max, values, threshold }) {
      if (val === min) {
        return min;
      }
      if (val < min || val > max) {
        return getWheelDist(val, min, threshold) <= getWheelDist(val, max, threshold) ? min : max;
      }
      const index = values.findIndex((v) => val <= v), before = values[index - 1], after = values[index];
      return val - before <= after - val ? before : after;
    }
    function getMask() {
      return props4.calendar !== "persian" && props4.mask !== null ? props4.mask : `HH:mm${props4.withSeconds === true ? ":ss" : ""}`;
    }
    function getDefaultDateModel() {
      if (typeof props4.defaultDate !== "string") {
        const date = getCurrentDate(true);
        date.dateHash = getDayHash(date);
        return date;
      }
      return __splitDate(props4.defaultDate, "YYYY/MM/DD", void 0, props4.calendar);
    }
    function shouldAbortInteraction() {
      return vmIsDestroyed(vm2) === true || viewValidOptions.value !== null && (viewValidOptions.value.values.length === 0 || view.value === "hour" && computedFormat24h.value !== true && validHours.value[isAM.value === true ? "am" : "pm"].values.length === 0);
    }
    function getClockRect() {
      const clock = clockRef.value, { top, left, width: width3 } = clock.getBoundingClientRect(), dist = width3 / 2;
      return {
        top: top + dist,
        left: left + dist,
        dist: dist * 0.7
      };
    }
    function onPan(event) {
      if (shouldAbortInteraction() === true) {
        return;
      }
      if (event.isFirst === true) {
        draggingClockRect = getClockRect();
        dragCache = updateClock(event.evt, draggingClockRect);
        return;
      }
      dragCache = updateClock(event.evt, draggingClockRect, dragCache);
      if (event.isFinal === true) {
        draggingClockRect = false;
        dragCache = null;
        goToNextView();
      }
    }
    function goToNextView() {
      if (view.value === "hour") {
        view.value = "minute";
      } else if (props4.withSeconds && view.value === "minute") {
        view.value = "second";
      }
    }
    function updateClock(evt, clockRect, cacheVal) {
      const pos = position(evt), height2 = Math.abs(pos.top - clockRect.top), distance = Math.sqrt(
        Math.pow(Math.abs(pos.top - clockRect.top), 2) + Math.pow(Math.abs(pos.left - clockRect.left), 2)
      );
      let val, angle = Math.asin(height2 / distance) * (180 / Math.PI);
      if (pos.top < clockRect.top) {
        angle = clockRect.left < pos.left ? 90 - angle : 270 + angle;
      } else {
        angle = clockRect.left < pos.left ? angle + 90 : 270 - angle;
      }
      if (view.value === "hour") {
        val = angle / 30;
        if (validHours.value !== null) {
          const am = computedFormat24h.value !== true ? isAM.value === true : validHours.value.am.values.length !== 0 && validHours.value.pm.values.length !== 0 ? distance >= clockRect.dist : validHours.value.am.values.length !== 0;
          val = getNormalizedClockValue(
            val + (am === true ? 0 : 12),
            validHours.value[am === true ? "am" : "pm"]
          );
        } else {
          val = Math.round(val);
          if (computedFormat24h.value === true) {
            if (distance < clockRect.dist) {
              if (val < 12) {
                val += 12;
              }
            } else if (val === 12) {
              val = 0;
            }
          } else if (isAM.value === true && val === 12) {
            val = 0;
          } else if (isAM.value === false && val !== 12) {
            val += 12;
          }
        }
        if (computedFormat24h.value === true) {
          isAM.value = val < 12;
        }
      } else {
        val = Math.round(angle / 6) % 60;
        if (view.value === "minute" && validMinutes.value !== null) {
          val = getNormalizedClockValue(val, validMinutes.value);
        } else if (view.value === "second" && validSeconds.value !== null) {
          val = getNormalizedClockValue(val, validSeconds.value);
        }
      }
      if (cacheVal !== val) {
        setModel[view.value](val);
      }
      return val;
    }
    const setView = {
      hour() {
        view.value = "hour";
      },
      minute() {
        view.value = "minute";
      },
      second() {
        view.value = "second";
      }
    };
    function setAmOnKey(e) {
      e.keyCode === 13 && setAm();
    }
    function setPmOnKey(e) {
      e.keyCode === 13 && setPm();
    }
    function onClick(evt) {
      if (shouldAbortInteraction() !== true) {
        if ($q.platform.is.desktop !== true) {
          updateClock(evt, getClockRect());
        }
        goToNextView();
      }
    }
    function onMousedown(evt) {
      if (shouldAbortInteraction() !== true) {
        updateClock(evt, getClockRect());
      }
    }
    function onKeyupHour(e) {
      if (e.keyCode === 13) {
        view.value = "hour";
      } else if ([37, 39].includes(e.keyCode)) {
        const payload = e.keyCode === 37 ? -1 : 1;
        if (validHours.value !== null) {
          const values = computedFormat24h.value === true ? validHours.value.values : validHours.value[isAM.value === true ? "am" : "pm"].values;
          if (values.length === 0) return;
          if (innerModel.value.hour === null) {
            setHour(values[0]);
          } else {
            const index = (values.length + values.indexOf(innerModel.value.hour) + payload) % values.length;
            setHour(values[index]);
          }
        } else {
          const wrap = computedFormat24h.value === true ? 24 : 12, offset2 = computedFormat24h.value !== true && isAM.value === false ? 12 : 0, val = innerModel.value.hour === null ? -payload : innerModel.value.hour;
          setHour(offset2 + (24 + val + payload) % wrap);
        }
      }
    }
    function onKeyupMinute(e) {
      if (e.keyCode === 13) {
        view.value = "minute";
      } else if ([37, 39].includes(e.keyCode)) {
        const payload = e.keyCode === 37 ? -1 : 1;
        if (validMinutes.value !== null) {
          const values = validMinutes.value.values;
          if (values.length === 0) return;
          if (innerModel.value.minute === null) {
            setMinute(values[0]);
          } else {
            const index = (values.length + values.indexOf(innerModel.value.minute) + payload) % values.length;
            setMinute(values[index]);
          }
        } else {
          const val = innerModel.value.minute === null ? -payload : innerModel.value.minute;
          setMinute((60 + val + payload) % 60);
        }
      }
    }
    function onKeyupSecond(e) {
      if (e.keyCode === 13) {
        view.value = "second";
      } else if ([37, 39].includes(e.keyCode)) {
        const payload = e.keyCode === 37 ? -1 : 1;
        if (validSeconds.value !== null) {
          const values = validSeconds.value.values;
          if (values.length === 0) return;
          if (innerModel.value.seconds === null) {
            setSecond(values[0]);
          } else {
            const index = (values.length + values.indexOf(innerModel.value.second) + payload) % values.length;
            setSecond(values[index]);
          }
        } else {
          const val = innerModel.value.second === null ? -payload : innerModel.value.second;
          setSecond((60 + val + payload) % 60);
        }
      }
    }
    function setHour(hour) {
      if (innerModel.value.hour !== hour) {
        innerModel.value.hour = hour;
        verifyAndUpdate();
      }
    }
    function setMinute(minute) {
      if (innerModel.value.minute !== minute) {
        innerModel.value.minute = minute;
        verifyAndUpdate();
      }
    }
    function setSecond(second) {
      if (innerModel.value.second !== second) {
        innerModel.value.second = second;
        verifyAndUpdate();
      }
    }
    const setModel = {
      hour: setHour,
      minute: setMinute,
      second: setSecond
    };
    function setAm() {
      if (isAM.value === false) {
        isAM.value = true;
        if (innerModel.value.hour !== null) {
          innerModel.value.hour -= 12;
          verifyAndUpdate();
        }
      }
    }
    function setPm() {
      if (isAM.value === true) {
        isAM.value = false;
        if (innerModel.value.hour !== null) {
          innerModel.value.hour += 12;
          verifyAndUpdate();
        }
      }
    }
    function goToViewWhenHasModel(newView) {
      const model2 = props4.modelValue;
      if (view.value !== newView && model2 !== void 0 && model2 !== null && model2 !== "" && typeof model2 !== "string") {
        view.value = newView;
      }
    }
    function verifyAndUpdate() {
      if (hourInSelection.value !== null && hourInSelection.value(innerModel.value.hour) !== true) {
        innerModel.value = __splitDate();
        goToViewWhenHasModel("hour");
        return;
      }
      if (minuteInSelection.value !== null && minuteInSelection.value(innerModel.value.minute) !== true) {
        innerModel.value.minute = null;
        innerModel.value.second = null;
        goToViewWhenHasModel("minute");
        return;
      }
      if (props4.withSeconds === true && secondInSelection.value !== null && secondInSelection.value(innerModel.value.second) !== true) {
        innerModel.value.second = null;
        goToViewWhenHasModel("second");
        return;
      }
      if (innerModel.value.hour === null || innerModel.value.minute === null || props4.withSeconds === true && innerModel.value.second === null) {
        return;
      }
      updateValue2();
    }
    function updateValue2(obj) {
      const date = Object.assign({ ...innerModel.value }, obj);
      const val = props4.calendar === "persian" ? pad(date.hour) + ":" + pad(date.minute) + (props4.withSeconds === true ? ":" + pad(date.second) : "") : formatDate(
        new Date(
          date.year,
          date.month === null ? null : date.month - 1,
          date.day,
          date.hour,
          date.minute,
          date.second,
          date.millisecond
        ),
        mask.value,
        locale.value,
        date.year,
        date.timezoneOffset
      );
      date.changed = val !== props4.modelValue;
      emit("update:modelValue", val, date);
    }
    function getHeader() {
      const label = [
        h("div", {
          class: "q-time__link " + (view.value === "hour" ? "q-time__link--active" : "cursor-pointer"),
          tabindex: tabindex.value,
          onClick: setView.hour,
          onKeyup: onKeyupHour
        }, stringModel.value.hour),
        h("div", ":"),
        h(
          "div",
          minLink.value === true ? {
            class: "q-time__link " + (view.value === "minute" ? "q-time__link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            onKeyup: onKeyupMinute,
            onClick: setView.minute
          } : { class: "q-time__link" },
          stringModel.value.minute
        )
      ];
      if (props4.withSeconds === true) {
        label.push(
          h("div", ":"),
          h(
            "div",
            secLink.value === true ? {
              class: "q-time__link " + (view.value === "second" ? "q-time__link--active" : "cursor-pointer"),
              tabindex: tabindex.value,
              onKeyup: onKeyupSecond,
              onClick: setView.second
            } : { class: "q-time__link" },
            stringModel.value.second
          )
        );
      }
      const child = [
        h("div", {
          class: "q-time__header-label row items-center no-wrap",
          dir: "ltr"
        }, label)
      ];
      computedFormat24h.value === false && child.push(
        h("div", {
          class: "q-time__header-ampm column items-between no-wrap"
        }, [
          h("div", {
            class: "q-time__link " + (isAM.value === true ? "q-time__link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            onClick: setAm,
            onKeyup: setAmOnKey
          }, "AM"),
          h("div", {
            class: "q-time__link " + (isAM.value !== true ? "q-time__link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            onClick: setPm,
            onKeyup: setPmOnKey
          }, "PM")
        ])
      );
      return h("div", {
        class: "q-time__header flex flex-center no-wrap " + headerClass.value
      }, child);
    }
    function getClock() {
      const current = innerModel.value[view.value];
      return h("div", {
        class: "q-time__content col relative-position"
      }, [
        h(Transition, {
          name: "q-transition--scale"
        }, () => h("div", {
          key: "clock" + view.value,
          class: "q-time__container-parent absolute-full"
        }, [
          h("div", {
            ref: clockRef,
            class: "q-time__container-child fit overflow-hidden"
          }, [
            withDirectives(
              h("div", {
                class: "q-time__clock cursor-pointer non-selectable",
                onClick,
                onMousedown
              }, [
                h("div", { class: "q-time__clock-circle fit" }, [
                  h("div", {
                    class: "q-time__clock-pointer" + (innerModel.value[view.value] === null ? " hidden" : props4.color !== void 0 ? ` text-${props4.color}` : ""),
                    style: pointerStyle.value
                  }),
                  positions.value.map((pos) => h("div", {
                    class: `q-time__clock-position row flex-center q-time__clock-pos-${pos.index}` + (pos.val === current ? " q-time__clock-position--active " + headerClass.value : pos.disable === true ? " q-time__clock-position--disable" : "")
                  }, [h("span", pos.label)]))
                ])
              ]),
              clockDirectives.value
            )
          ])
        ])),
        props4.nowBtn === true ? h(QBtn_default, {
          class: "q-time__now-button absolute",
          icon: $q.iconSet.datetime.now,
          unelevated: true,
          size: "sm",
          round: true,
          color: props4.color,
          textColor: props4.textColor,
          tabindex: tabindex.value,
          onClick: setNow
        }) : null
      ]);
    }
    vm2.proxy.setNow = setNow;
    return () => {
      const child = [getClock()];
      const def = hSlot(slots.default);
      def !== void 0 && child.push(
        h("div", { class: "q-time__actions" }, def)
      );
      if (props4.name !== void 0 && props4.disable !== true) {
        injectFormInput(child, "push");
      }
      return h("div", {
        class: classes.value,
        tabindex: -1
      }, [
        getHeader(),
        h("div", { class: "q-time__main col overflow-auto" }, child)
      ]);
    };
  }
});
var QTimeline_default = createComponent({
  name: "QTimeline",
  props: {
    ...useDarkProps,
    color: {
      type: String,
      default: "primary"
    },
    side: {
      type: String,
      default: "right",
      validator: (v) => ["left", "right"].includes(v)
    },
    layout: {
      type: String,
      default: "dense",
      validator: (v) => ["dense", "comfortable", "loose"].includes(v)
    }
  },
  setup(props4, { slots }) {
    const vm2 = getCurrentInstance();
    const isDark = use_dark_default(props4, vm2.proxy.$q);
    provide(timelineKey, props4);
    const classes = computed(
      () => `q-timeline q-timeline--${props4.layout} q-timeline--${props4.layout}--${props4.side}` + (isDark.value === true ? " q-timeline--dark" : "")
    );
    return () => h("ul", { class: classes.value }, hSlot(slots.default));
  }
});
var QTimelineEntry_default = createComponent({
  name: "QTimelineEntry",
  props: {
    heading: Boolean,
    tag: {
      type: String,
      default: "h3"
    },
    side: {
      type: String,
      default: "right",
      validator: (v) => ["left", "right"].includes(v)
    },
    icon: String,
    avatar: String,
    color: String,
    title: String,
    subtitle: String,
    body: String
  },
  setup(props4, { slots }) {
    const $timeline = inject(timelineKey, emptyRenderFn);
    if ($timeline === emptyRenderFn) {
      console.error("QTimelineEntry needs to be child of QTimeline");
      return emptyRenderFn;
    }
    const classes = computed(
      () => `q-timeline__entry q-timeline__entry--${props4.side}` + (props4.icon !== void 0 || props4.avatar !== void 0 ? " q-timeline__entry--icon" : "")
    );
    const dotClass = computed(
      () => `q-timeline__dot text-${props4.color || $timeline.color}`
    );
    const reverse = computed(
      () => $timeline.layout === "comfortable" && $timeline.side === "left"
    );
    return () => {
      const child = hUniqueSlot(slots.default, []);
      if (props4.body !== void 0) {
        child.unshift(props4.body);
      }
      if (props4.heading === true) {
        const content2 = [
          h("div"),
          h("div"),
          h(
            props4.tag,
            { class: "q-timeline__heading-title" },
            child
          )
        ];
        return h("div", {
          class: "q-timeline__heading"
        }, reverse.value === true ? content2.reverse() : content2);
      }
      let dot;
      if (props4.icon !== void 0) {
        dot = [
          h(QIcon_default, {
            class: "row items-center justify-center",
            name: props4.icon
          })
        ];
      } else if (props4.avatar !== void 0) {
        dot = [
          h("img", {
            class: "q-timeline__dot-img",
            src: props4.avatar
          })
        ];
      }
      const content = [
        h("div", { class: "q-timeline__subtitle" }, [
          h("span", {}, hSlot(slots.subtitle, [props4.subtitle]))
        ]),
        h("div", { class: dotClass.value }, dot),
        h("div", { class: "q-timeline__content" }, [
          h("h6", { class: "q-timeline__title" }, hSlot(slots.title, [props4.title]))
        ].concat(child))
      ];
      return h("li", {
        class: classes.value
      }, reverse.value === true ? content.reverse() : content);
    };
  }
});
var QToolbar_default = createComponent({
  name: "QToolbar",
  props: {
    inset: Boolean
  },
  setup(props4, { slots }) {
    const classes = computed(
      () => "q-toolbar row no-wrap items-center" + (props4.inset === true ? " q-toolbar--inset" : "")
    );
    return () => h("div", { class: classes.value, role: "toolbar" }, hSlot(slots.default));
  }
});
var QToolbarTitle_default = createComponent({
  name: "QToolbarTitle",
  props: {
    shrink: Boolean
  },
  setup(props4, { slots }) {
    const classes = computed(
      () => "q-toolbar__title ellipsis" + (props4.shrink === true ? " col-shrink" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
var tickStrategyOptions = ["none", "strict", "leaf", "leaf-filtered"];
var QTree_default = createComponent({
  name: "QTree",
  props: {
    ...useDarkProps,
    nodes: {
      type: Array,
      required: true
    },
    nodeKey: {
      type: String,
      required: true
    },
    labelKey: {
      type: String,
      default: "label"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    dense: Boolean,
    color: String,
    controlColor: String,
    textColor: String,
    selectedColor: String,
    icon: String,
    tickStrategy: {
      type: String,
      default: "none",
      validator: (v) => tickStrategyOptions.includes(v)
    },
    ticked: Array,
    // v-model:ticked
    expanded: Array,
    // v-model:expanded
    selected: {},
    // v-model:selected
    noSelectionUnset: Boolean,
    defaultExpandAll: Boolean,
    accordion: Boolean,
    filter: String,
    filterMethod: Function,
    duration: {},
    noConnectors: Boolean,
    noTransition: Boolean,
    noNodesLabel: String,
    noResultsLabel: String
  },
  emits: [
    "update:expanded",
    "update:ticked",
    "update:selected",
    "lazyLoad",
    "afterShow",
    "afterHide"
  ],
  setup(props4, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = use_dark_default(props4, $q);
    const lazy = ref({});
    const innerTicked = ref(props4.ticked || []);
    const innerExpanded = ref(props4.expanded || []);
    let blurTargets = {};
    onBeforeUpdate(() => {
      blurTargets = {};
    });
    const classes = computed(
      () => `q-tree q-tree--${props4.dense === true ? "dense" : "standard"}` + (props4.noConnectors === true ? " q-tree--no-connectors" : "") + (isDark.value === true ? " q-tree--dark" : "") + (props4.color !== void 0 ? ` text-${props4.color}` : "")
    );
    const hasSelection = computed(() => props4.selected !== void 0);
    const computedIcon = computed(() => props4.icon || $q.iconSet.tree.icon);
    const computedControlColor = computed(() => props4.controlColor || props4.color);
    const textColorClass = computed(() => props4.textColor !== void 0 ? ` text-${props4.textColor}` : "");
    const selectedColorClass = computed(() => {
      const color = props4.selectedColor || props4.color;
      return color ? ` text-${color}` : "";
    });
    const computedFilterMethod = computed(() => props4.filterMethod !== void 0 ? props4.filterMethod : (node, filter) => {
      const filt = filter.toLowerCase();
      return node[props4.labelKey] && node[props4.labelKey].toLowerCase().indexOf(filt) !== -1;
    });
    const meta = computed(() => {
      const meta2 = {};
      const travel = (node, parent) => {
        const tickStrategy = node.tickStrategy || (parent ? parent.tickStrategy : props4.tickStrategy);
        const key = node[props4.nodeKey], isParent = node[props4.childrenKey] && Array.isArray(node[props4.childrenKey]) && node[props4.childrenKey].length !== 0, selectable = node.disabled !== true && hasSelection.value === true && node.selectable !== false, expandable = node.disabled !== true && node.expandable !== false, hasTicking = tickStrategy !== "none", strictTicking = tickStrategy === "strict", leafFilteredTicking = tickStrategy === "leaf-filtered", leafTicking = tickStrategy === "leaf" || tickStrategy === "leaf-filtered";
        let tickable = node.disabled !== true && node.tickable !== false;
        if (leafTicking === true && tickable === true && parent && parent.tickable !== true) {
          tickable = false;
        }
        let localLazy = node.lazy;
        if (localLazy === true && lazy.value[key] !== void 0 && Array.isArray(node[props4.childrenKey]) === true) {
          localLazy = lazy.value[key];
        }
        const m = {
          key,
          parent,
          isParent,
          lazy: localLazy,
          disabled: node.disabled,
          link: node.disabled !== true && (selectable === true || expandable === true && (isParent === true || localLazy === true)),
          children: [],
          matchesFilter: props4.filter ? computedFilterMethod.value(node, props4.filter) : true,
          selected: key === props4.selected && selectable === true,
          selectable,
          expanded: isParent === true ? innerExpanded.value.includes(key) : false,
          expandable,
          noTick: node.noTick === true || strictTicking !== true && localLazy && localLazy !== "loaded",
          tickable,
          tickStrategy,
          hasTicking,
          strictTicking,
          leafFilteredTicking,
          leafTicking,
          ticked: strictTicking === true ? innerTicked.value.includes(key) : isParent === true ? false : innerTicked.value.includes(key)
        };
        meta2[key] = m;
        if (isParent === true) {
          m.children = node[props4.childrenKey].map((n) => travel(n, m));
          if (props4.filter) {
            if (m.matchesFilter !== true) {
              m.matchesFilter = m.children.some((n) => n.matchesFilter);
            } else if (m.noTick !== true && m.disabled !== true && m.tickable === true && leafFilteredTicking === true && m.children.every((n) => n.matchesFilter !== true || n.noTick === true || n.tickable !== true) === true) {
              m.tickable = false;
            }
          }
          if (m.matchesFilter === true) {
            if (m.noTick !== true && strictTicking !== true && m.children.every((n) => n.noTick) === true) {
              m.noTick = true;
            }
            if (leafTicking) {
              m.ticked = false;
              m.indeterminate = m.children.some((node2) => node2.indeterminate === true);
              m.tickable = m.tickable === true && m.children.some((node2) => node2.tickable);
              if (m.indeterminate !== true) {
                const sel = m.children.reduce((acc, meta3) => meta3.ticked === true ? acc + 1 : acc, 0);
                if (sel === m.children.length) {
                  m.ticked = true;
                } else if (sel > 0) {
                  m.indeterminate = true;
                }
              }
              if (m.indeterminate === true) {
                m.indeterminateNextState = m.children.every((meta3) => meta3.tickable !== true || meta3.ticked !== true);
              }
            }
          }
        }
        return m;
      };
      props4.nodes.forEach((node) => travel(node, null));
      return meta2;
    });
    watch(() => props4.ticked, (val) => {
      innerTicked.value = val;
    });
    watch(() => props4.expanded, (val) => {
      innerExpanded.value = val;
    });
    function getNodeByKey(key) {
      const reduce = [].reduce;
      const find = (result, node) => {
        if (result || !node) {
          return result;
        }
        if (Array.isArray(node) === true) {
          return reduce.call(Object(node), find, result);
        }
        if (node[props4.nodeKey] === key) {
          return node;
        }
        if (node[props4.childrenKey]) {
          return find(null, node[props4.childrenKey]);
        }
      };
      return find(null, props4.nodes);
    }
    function getTickedNodes() {
      return innerTicked.value.map((key) => getNodeByKey(key));
    }
    function getExpandedNodes() {
      return innerExpanded.value.map((key) => getNodeByKey(key));
    }
    function isExpanded(key) {
      return key && meta.value[key] ? meta.value[key].expanded : false;
    }
    function collapseAll() {
      if (props4.expanded !== void 0) {
        emit("update:expanded", []);
      } else {
        innerExpanded.value = [];
      }
    }
    function expandAll() {
      const expanded = [];
      const travel = (node) => {
        if (node[props4.childrenKey] && node[props4.childrenKey].length !== 0) {
          if (node.expandable !== false && node.disabled !== true) {
            expanded.push(node[props4.nodeKey]);
            node[props4.childrenKey].forEach(travel);
          }
        }
      };
      props4.nodes.forEach(travel);
      if (props4.expanded !== void 0) {
        emit("update:expanded", expanded);
      } else {
        innerExpanded.value = expanded;
      }
    }
    function setExpanded(key, state, node = getNodeByKey(key), m = meta.value[key]) {
      if (m.lazy && m.lazy !== "loaded") {
        if (m.lazy === "loading") {
          return;
        }
        lazy.value[key] = "loading";
        if (Array.isArray(node[props4.childrenKey]) !== true) {
          node[props4.childrenKey] = [];
        }
        emit("lazyLoad", {
          node,
          key,
          done: (children) => {
            lazy.value[key] = "loaded";
            node[props4.childrenKey] = Array.isArray(children) === true ? children : [];
            nextTick(() => {
              const localMeta = meta.value[key];
              if (localMeta && localMeta.isParent === true) {
                localSetExpanded(key, true);
              }
            });
          },
          fail: () => {
            delete lazy.value[key];
            if (node[props4.childrenKey].length === 0) {
              delete node[props4.childrenKey];
            }
          }
        });
      } else if (m.isParent === true && m.expandable === true) {
        localSetExpanded(key, state);
      }
    }
    function localSetExpanded(key, state) {
      let target2 = innerExpanded.value;
      const shouldEmit = props4.expanded !== void 0;
      if (shouldEmit === true) {
        target2 = target2.slice();
      }
      if (state) {
        if (props4.accordion) {
          if (meta.value[key]) {
            const collapse = [];
            if (meta.value[key].parent) {
              meta.value[key].parent.children.forEach((m) => {
                if (m.key !== key && m.expandable === true) {
                  collapse.push(m.key);
                }
              });
            } else {
              props4.nodes.forEach((node) => {
                const k = node[props4.nodeKey];
                if (k !== key) {
                  collapse.push(k);
                }
              });
            }
            if (collapse.length !== 0) {
              target2 = target2.filter((k) => collapse.includes(k) === false);
            }
          }
        }
        target2 = target2.concat([key]).filter((key2, index, self2) => self2.indexOf(key2) === index);
      } else {
        target2 = target2.filter((k) => k !== key);
      }
      if (shouldEmit === true) {
        emit("update:expanded", target2);
      } else {
        innerExpanded.value = target2;
      }
    }
    function isTicked(key) {
      return key && meta.value[key] ? meta.value[key].ticked : false;
    }
    function setTicked(keys, state) {
      let target2 = innerTicked.value;
      const shouldEmit = props4.ticked !== void 0;
      if (shouldEmit === true) {
        target2 = target2.slice();
      }
      if (state) {
        target2 = target2.concat(keys).filter((key, index, self2) => self2.indexOf(key) === index);
      } else {
        target2 = target2.filter((k) => keys.includes(k) === false);
      }
      if (shouldEmit === true) {
        emit("update:ticked", target2);
      }
    }
    function getSlotScope(node, meta2, key) {
      const scope = { tree: proxy, node, key, color: props4.color, dark: isDark.value };
      injectProp(
        scope,
        "expanded",
        () => {
          return meta2.expanded;
        },
        (val) => {
          val !== meta2.expanded && setExpanded(key, val);
        }
      );
      injectProp(
        scope,
        "ticked",
        () => {
          return meta2.ticked;
        },
        (val) => {
          val !== meta2.ticked && setTicked([key], val);
        }
      );
      return scope;
    }
    function getChildren(nodes) {
      return (props4.filter ? nodes.filter((n) => meta.value[n[props4.nodeKey]].matchesFilter) : nodes).map((child) => getNode(child));
    }
    function getNodeMedia(node) {
      if (node.icon !== void 0) {
        return h(QIcon_default, {
          class: "q-tree__icon q-mr-sm",
          name: node.icon,
          color: node.iconColor
        });
      }
      const src = node.img || node.avatar;
      if (src) {
        return h("img", {
          class: `q-tree__${node.img ? "img" : "avatar"} q-mr-sm`,
          src
        });
      }
    }
    function onShow() {
      emit("afterShow");
    }
    function onHide() {
      emit("afterHide");
    }
    function getNode(node) {
      const key = node[props4.nodeKey], m = meta.value[key], header = node.header ? slots[`header-${node.header}`] || slots["default-header"] : slots["default-header"];
      const children = m.isParent === true ? getChildren(node[props4.childrenKey]) : [];
      const isParent = children.length !== 0 || m.lazy && m.lazy !== "loaded";
      let body = node.body ? slots[`body-${node.body}`] || slots["default-body"] : slots["default-body"];
      const slotScope = header !== void 0 || body !== void 0 ? getSlotScope(node, m, key) : null;
      if (body !== void 0) {
        body = h("div", { class: "q-tree__node-body relative-position" }, [
          h("div", { class: textColorClass.value }, [
            body(slotScope)
          ])
        ]);
      }
      return h("div", {
        key,
        class: `q-tree__node relative-position q-tree__node--${isParent === true ? "parent" : "child"}`
      }, [
        h("div", {
          class: "q-tree__node-header relative-position row no-wrap items-center" + (m.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (m.selected === true ? " q-tree__node--selected" : "") + (m.disabled === true ? " q-tree__node--disabled" : ""),
          tabindex: m.link === true ? 0 : -1,
          ariaExpanded: children.length > 0 ? m.expanded : null,
          role: "treeitem",
          onClick: (e) => {
            onClick(node, m, e);
          },
          onKeypress(e) {
            if (shouldIgnoreKey(e) !== true) {
              if (e.keyCode === 13) {
                onClick(node, m, e, true);
              } else if (e.keyCode === 32) {
                onExpandClick(node, m, e, true);
              }
            }
          }
        }, [
          h("div", {
            class: "q-focus-helper",
            tabindex: -1,
            ref: (el) => {
              blurTargets[m.key] = el;
            }
          }),
          m.lazy === "loading" ? h(QSpinner_default, {
            class: "q-tree__spinner",
            color: computedControlColor.value
          }) : isParent === true ? h(QIcon_default, {
            class: "q-tree__arrow" + (m.expanded === true ? " q-tree__arrow--rotate" : ""),
            name: computedIcon.value,
            onClick(e) {
              onExpandClick(node, m, e);
            }
          }) : null,
          m.hasTicking === true && m.noTick !== true ? h(QCheckbox_default, {
            class: "q-tree__tickbox",
            modelValue: m.indeterminate === true ? null : m.ticked,
            color: computedControlColor.value,
            dark: isDark.value,
            dense: true,
            keepColor: true,
            disable: m.tickable !== true,
            onKeydown: stopAndPrevent,
            "onUpdate:modelValue": (v) => {
              onTickedClick(m, v);
            }
          }) : null,
          h("div", {
            class: "q-tree__node-header-content col row no-wrap items-center" + (m.selected === true ? selectedColorClass.value : textColorClass.value)
          }, [
            header ? header(slotScope) : [
              getNodeMedia(node),
              h("div", node[props4.labelKey])
            ]
          ])
        ]),
        isParent === true ? props4.noTransition === true ? m.expanded === true ? h("div", {
          class: "q-tree__node-collapsible" + textColorClass.value,
          key: `${key}__q`
        }, [
          body,
          h("div", {
            class: "q-tree__children" + (m.disabled === true ? " q-tree__node--disabled" : ""),
            role: "group"
          }, children)
        ]) : null : h(QSlideTransition_default, {
          duration: props4.duration,
          onShow,
          onHide
        }, () => withDirectives(
          h("div", {
            class: "q-tree__node-collapsible" + textColorClass.value,
            key: `${key}__q`
          }, [
            body,
            h("div", {
              class: "q-tree__children" + (m.disabled === true ? " q-tree__node--disabled" : ""),
              role: "group"
            }, children)
          ]),
          [[vShow, m.expanded]]
        )) : body
      ]);
    }
    function blur(key) {
      const blurTarget = blurTargets[key];
      blurTarget && blurTarget.focus();
    }
    function onClick(node, meta2, e, keyboard) {
      keyboard !== true && meta2.selectable !== false && blur(meta2.key);
      if (hasSelection.value && meta2.selectable) {
        if (props4.noSelectionUnset === false) {
          emit("update:selected", meta2.key !== props4.selected ? meta2.key : null);
        } else if (meta2.key !== props4.selected) {
          emit("update:selected", meta2.key === void 0 ? null : meta2.key);
        }
      } else {
        onExpandClick(node, meta2, e, keyboard);
      }
      if (typeof node.handler === "function") {
        node.handler(node);
      }
    }
    function onExpandClick(node, meta2, e, keyboard) {
      if (e !== void 0) {
        stopAndPrevent(e);
      }
      keyboard !== true && meta2.selectable !== false && blur(meta2.key);
      setExpanded(meta2.key, !meta2.expanded, node, meta2);
    }
    function onTickedClick(meta2, state) {
      if (meta2.indeterminate === true) {
        state = meta2.indeterminateNextState;
      }
      if (meta2.strictTicking) {
        setTicked([meta2.key], state);
      } else if (meta2.leafTicking) {
        const keys = [];
        const travel = (meta3) => {
          if (meta3.isParent) {
            if (state !== true && meta3.noTick !== true && meta3.tickable === true) {
              keys.push(meta3.key);
            }
            if (meta3.leafTicking === true) {
              meta3.children.forEach(travel);
            }
          } else if (meta3.noTick !== true && meta3.tickable === true && (meta3.leafFilteredTicking !== true || meta3.matchesFilter === true)) {
            keys.push(meta3.key);
          }
        };
        travel(meta2);
        setTicked(keys, state);
      }
    }
    props4.defaultExpandAll === true && expandAll();
    Object.assign(proxy, {
      getNodeByKey,
      getTickedNodes,
      getExpandedNodes,
      isExpanded,
      collapseAll,
      expandAll,
      setExpanded,
      isTicked,
      setTicked
    });
    return () => {
      const children = getChildren(props4.nodes);
      return h(
        "div",
        {
          class: classes.value,
          role: "tree"
        },
        children.length === 0 ? props4.filter ? props4.noResultsLabel || $q.lang.tree.noResults : props4.noNodesLabel || $q.lang.tree.noNodes : children
      );
    };
  }
});
function getProgressLabel(p) {
  return (p * 100).toFixed(2) + "%";
}
var coreProps = {
  ...useDarkProps,
  ...useFileProps,
  label: String,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  noThumbnails: Boolean,
  thumbnailFit: {
    type: String,
    default: "cover"
  },
  autoUpload: Boolean,
  hideUploadBtn: Boolean,
  disable: Boolean,
  readonly: Boolean
};
var coreEmits = [
  ...useFileEmits,
  "start",
  "finish",
  "added",
  "removed"
];
function getRenderer(getPlugin, expose) {
  const vm2 = getCurrentInstance();
  const { props: props4, slots, emit, proxy } = vm2;
  const { $q } = proxy;
  const isDark = use_dark_default(props4, $q);
  function updateFileStatus(file, status, uploadedSize) {
    file.__status = status;
    if (status === "idle") {
      file.__uploaded = 0;
      file.__progress = 0;
      file.__sizeLabel = humanStorageSize(file.size);
      file.__progressLabel = "0.00%";
      return;
    }
    if (status === "failed") {
      proxy.$forceUpdate();
      return;
    }
    file.__uploaded = status === "uploaded" ? file.size : uploadedSize;
    file.__progress = status === "uploaded" ? 1 : Math.min(0.9999, file.__uploaded / file.size);
    file.__progressLabel = getProgressLabel(file.__progress);
    proxy.$forceUpdate();
  }
  const editable = computed(() => props4.disable !== true && props4.readonly !== true);
  const dnd = ref(false);
  const rootRef = ref(null);
  const inputRef = ref(null);
  const state = {
    files: ref([]),
    queuedFiles: ref([]),
    uploadedFiles: ref([]),
    uploadedSize: ref(0),
    updateFileStatus,
    isAlive: () => vmIsDestroyed(vm2) === false
  };
  const {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  } = use_file_default({ editable, dnd, getFileInput, addFilesToQueue });
  Object.assign(state, getPlugin({
    props: props4,
    slots,
    emit,
    helpers: state,
    exposeApi: (obj) => {
      Object.assign(state, obj);
    }
  }));
  if (state.isBusy === void 0) {
    state.isBusy = ref(false);
  }
  const uploadSize = ref(0);
  const uploadProgress = computed(() => uploadSize.value === 0 ? 0 : state.uploadedSize.value / uploadSize.value);
  const uploadProgressLabel = computed(() => getProgressLabel(uploadProgress.value));
  const uploadSizeLabel = computed(() => humanStorageSize(uploadSize.value));
  const canAddFiles = computed(
    () => editable.value === true && state.isUploading.value !== true && (props4.multiple === true || state.queuedFiles.value.length === 0) && (props4.maxFiles === void 0 || state.files.value.length < maxFilesNumber.value) && (props4.maxTotalSize === void 0 || uploadSize.value < maxTotalSizeNumber.value)
  );
  const canUpload = computed(
    () => editable.value === true && state.isBusy.value !== true && state.isUploading.value !== true && state.queuedFiles.value.length !== 0
  );
  provide(uploaderKey, renderInput);
  const classes = computed(
    () => "q-uploader column no-wrap" + (isDark.value === true ? " q-uploader--dark q-dark" : "") + (props4.bordered === true ? " q-uploader--bordered" : "") + (props4.square === true ? " q-uploader--square no-border-radius" : "") + (props4.flat === true ? " q-uploader--flat no-shadow" : "") + (props4.disable === true ? " disabled q-uploader--disable" : "") + (dnd.value === true ? " q-uploader--dnd" : "")
  );
  const colorClass = computed(
    () => "q-uploader__header" + (props4.color !== void 0 ? ` bg-${props4.color}` : "") + (props4.textColor !== void 0 ? ` text-${props4.textColor}` : "")
  );
  watch(state.isUploading, (newVal, oldVal) => {
    if (oldVal === false && newVal === true) {
      emit("start");
    } else if (oldVal === true && newVal === false) {
      emit("finish");
    }
  });
  function reset() {
    if (props4.disable === false) {
      state.abort();
      state.uploadedSize.value = 0;
      uploadSize.value = 0;
      revokeImgURLs();
      state.files.value = [];
      state.queuedFiles.value = [];
      state.uploadedFiles.value = [];
    }
  }
  function removeUploadedFiles() {
    if (props4.disable === false) {
      batchRemoveFiles(["uploaded"], () => {
        state.uploadedFiles.value = [];
      });
    }
  }
  function removeQueuedFiles() {
    batchRemoveFiles(["idle", "failed"], ({ size: size2 }) => {
      uploadSize.value -= size2;
      state.queuedFiles.value = [];
    });
  }
  function batchRemoveFiles(statusList, cb) {
    if (props4.disable === true) {
      return;
    }
    const removed = {
      files: [],
      size: 0
    };
    const localFiles = state.files.value.filter((f) => {
      if (statusList.indexOf(f.__status) === -1) {
        return true;
      }
      removed.size += f.size;
      removed.files.push(f);
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
      return false;
    });
    if (removed.files.length !== 0) {
      state.files.value = localFiles;
      cb(removed);
      emit("removed", removed.files);
    }
  }
  function removeFile(file) {
    if (props4.disable) return;
    if (file.__status === "uploaded") {
      state.uploadedFiles.value = state.uploadedFiles.value.filter((f) => f.__key !== file.__key);
    } else if (file.__status === "uploading") {
      file.__abort();
    } else {
      uploadSize.value -= file.size;
    }
    state.files.value = state.files.value.filter((f) => {
      if (f.__key !== file.__key) {
        return true;
      }
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
      return false;
    });
    state.queuedFiles.value = state.queuedFiles.value.filter((f) => f.__key !== file.__key);
    emit("removed", [file]);
  }
  function revokeImgURLs() {
    state.files.value.forEach((f) => {
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
    });
  }
  function getFileInput() {
    return inputRef.value || rootRef.value.getElementsByClassName("q-uploader__input")[0];
  }
  function addFilesToQueue(e, fileList) {
    const localFiles = processFiles(e, fileList, state.files.value, true);
    const fileInput = getFileInput();
    if (fileInput !== void 0 && fileInput !== null) {
      fileInput.value = "";
    }
    if (localFiles === void 0) return;
    localFiles.forEach((file) => {
      state.updateFileStatus(file, "idle");
      uploadSize.value += file.size;
      if (props4.noThumbnails !== true && file.type.toUpperCase().startsWith("IMAGE")) {
        const img = new Image();
        img.src = window.URL.createObjectURL(file);
        file.__img = img;
      }
    });
    state.files.value = state.files.value.concat(localFiles);
    state.queuedFiles.value = state.queuedFiles.value.concat(localFiles);
    emit("added", localFiles);
    props4.autoUpload === true && state.upload();
  }
  function upload() {
    canUpload.value === true && state.upload();
  }
  function getBtn2(show, icon, fn) {
    if (show === true) {
      const data = {
        type: "a",
        key: icon,
        icon: $q.iconSet.uploader[icon],
        flat: true,
        dense: true
      };
      let child = void 0;
      if (icon === "add") {
        data.onClick = pickFiles;
        child = renderInput;
      } else {
        data.onClick = fn;
      }
      return h(QBtn_default, data, child);
    }
  }
  function renderInput() {
    return h("input", {
      ref: inputRef,
      class: "q-uploader__input overflow-hidden absolute-full",
      tabindex: -1,
      type: "file",
      title: "",
      // try to remove default tooltip
      accept: props4.accept,
      multiple: props4.multiple === true ? "multiple" : void 0,
      capture: props4.capture,
      onMousedown: stop,
      // need to stop refocus from QBtn
      onClick: pickFiles,
      onChange: addFilesToQueue
    });
  }
  function getHeader() {
    if (slots.header !== void 0) {
      return slots.header(publicApi);
    }
    return [
      h("div", {
        class: "q-uploader__header-content column"
      }, [
        h("div", {
          class: "flex flex-center no-wrap q-gutter-xs"
        }, [
          getBtn2(state.queuedFiles.value.length !== 0, "removeQueue", removeQueuedFiles),
          getBtn2(state.uploadedFiles.value.length !== 0, "removeUploaded", removeUploadedFiles),
          state.isUploading.value === true ? h(QSpinner_default, { class: "q-uploader__spinner" }) : null,
          h("div", { class: "col column justify-center" }, [
            props4.label !== void 0 ? h("div", { class: "q-uploader__title" }, [props4.label]) : null,
            h("div", { class: "q-uploader__subtitle" }, [
              uploadSizeLabel.value + " / " + uploadProgressLabel.value
            ])
          ]),
          getBtn2(canAddFiles.value, "add"),
          getBtn2(props4.hideUploadBtn === false && canUpload.value === true, "upload", state.upload),
          getBtn2(state.isUploading.value, "clear", state.abort)
        ])
      ])
    ];
  }
  function getList() {
    if (slots.list !== void 0) {
      return slots.list(publicApi);
    }
    return state.files.value.map((file) => h("div", {
      key: file.__key,
      class: "q-uploader__file relative-position" + (props4.noThumbnails !== true && file.__img !== void 0 ? " q-uploader__file--img" : "") + (file.__status === "failed" ? " q-uploader__file--failed" : file.__status === "uploaded" ? " q-uploader__file--uploaded" : ""),
      style: props4.noThumbnails !== true && file.__img !== void 0 ? { backgroundImage: 'url("' + file.__img.src + '")', backgroundSize: props4.thumbnailFit } : null
    }, [
      h("div", {
        class: "q-uploader__file-header row flex-center no-wrap"
      }, [
        file.__status === "failed" ? h(QIcon_default, {
          class: "q-uploader__file-status",
          name: $q.iconSet.type.negative,
          color: "negative"
        }) : null,
        h("div", { class: "q-uploader__file-header-content col" }, [
          h("div", { class: "q-uploader__title" }, [file.name]),
          h("div", {
            class: "q-uploader__subtitle row items-center no-wrap"
          }, [
            file.__sizeLabel + " / " + file.__progressLabel
          ])
        ]),
        file.__status === "uploading" ? h(QCircularProgress_default, {
          value: file.__progress,
          min: 0,
          max: 1,
          indeterminate: file.__progress === 0
        }) : h(QBtn_default, {
          round: true,
          dense: true,
          flat: true,
          icon: $q.iconSet.uploader[file.__status === "uploaded" ? "done" : "clear"],
          onClick: () => {
            removeFile(file);
          }
        })
      ])
    ]));
  }
  onBeforeUnmount(() => {
    state.isUploading.value === true && state.abort();
    state.files.value.length !== 0 && revokeImgURLs();
  });
  const publicApi = {};
  for (const key in state) {
    if (isRef(state[key]) === true) {
      injectProp(publicApi, key, () => state[key].value);
    } else {
      publicApi[key] = state[key];
    }
  }
  Object.assign(publicApi, {
    upload,
    reset,
    removeUploadedFiles,
    removeQueuedFiles,
    removeFile,
    pickFiles,
    addFiles
  });
  injectMultipleProps(publicApi, {
    canAddFiles: () => canAddFiles.value,
    canUpload: () => canUpload.value,
    uploadSizeLabel: () => uploadSizeLabel.value,
    uploadProgressLabel: () => uploadProgressLabel.value
  });
  expose({
    ...state,
    upload,
    reset,
    removeUploadedFiles,
    removeQueuedFiles,
    removeFile,
    pickFiles,
    addFiles,
    canAddFiles,
    canUpload,
    uploadSizeLabel,
    uploadProgressLabel
  });
  return () => {
    const children = [
      h("div", { class: colorClass.value }, getHeader()),
      h("div", { class: "q-uploader__list scroll" }, getList()),
      getDndNode("uploader")
    ];
    state.isBusy.value === true && children.push(
      h("div", {
        class: "q-uploader__overlay absolute-full flex flex-center"
      }, [h(QSpinner_default)])
    );
    const data = { ref: rootRef, class: classes.value };
    if (canAddFiles.value === true) {
      Object.assign(data, { onDragover, onDragleave });
    }
    return h("div", data, children);
  };
}
var trueFn = () => true;
function get_emits_object_default(emitsArray) {
  const emitsObject = {};
  emitsArray.forEach((val) => {
    emitsObject[val] = trueFn;
  });
  return emitsObject;
}
var coreEmitsObject = get_emits_object_default(coreEmits);
var create_uploader_component_default = ({ name: name2, props: props4, emits: emits3, injectPlugin: injectPlugin2 }) => createComponent({
  name: name2,
  props: {
    ...coreProps,
    ...props4
  },
  emits: isObject(emits3) === true ? { ...coreEmitsObject, ...emits3 } : [...coreEmits, ...emits3],
  setup(_, { expose }) {
    return getRenderer(injectPlugin2, expose);
  }
});
function getFn(prop) {
  return typeof prop === "function" ? prop : () => prop;
}
var name = "QUploader";
var props = {
  url: [Function, String],
  method: {
    type: [Function, String],
    default: "POST"
  },
  fieldName: {
    type: [Function, String],
    default: () => (file) => file.name
  },
  headers: [Function, Array],
  formFields: [Function, Array],
  withCredentials: [Function, Boolean],
  sendRaw: [Function, Boolean],
  batch: [Function, Boolean],
  factory: Function
};
var emits = ["factoryFailed", "uploaded", "failed", "uploading"];
function injectPlugin({ props: props4, emit, helpers }) {
  const xhrs = ref([]);
  const promises = ref([]);
  const workingThreads = ref(0);
  const xhrProps = computed(() => ({
    url: getFn(props4.url),
    method: getFn(props4.method),
    headers: getFn(props4.headers),
    formFields: getFn(props4.formFields),
    fieldName: getFn(props4.fieldName),
    withCredentials: getFn(props4.withCredentials),
    sendRaw: getFn(props4.sendRaw),
    batch: getFn(props4.batch)
  }));
  const isUploading = computed(() => workingThreads.value > 0);
  const isBusy = computed(() => promises.value.length !== 0);
  let abortPromises;
  function abort() {
    xhrs.value.forEach((x) => {
      x.abort();
    });
    if (promises.value.length !== 0) {
      abortPromises = true;
    }
  }
  function upload() {
    const queue2 = helpers.queuedFiles.value.slice(0);
    helpers.queuedFiles.value = [];
    if (xhrProps.value.batch(queue2)) {
      runFactory(queue2);
    } else {
      queue2.forEach((file) => {
        runFactory([file]);
      });
    }
  }
  function runFactory(files) {
    workingThreads.value++;
    if (typeof props4.factory !== "function") {
      performUpload(files, {});
      return;
    }
    const res = props4.factory(files);
    if (!res) {
      emit(
        "factoryFailed",
        new Error("QUploader: factory() does not return properly"),
        files
      );
      workingThreads.value--;
    } else if (typeof res.catch === "function" && typeof res.then === "function") {
      promises.value.push(res);
      const failed = (err) => {
        if (helpers.isAlive() === true) {
          promises.value = promises.value.filter((p) => p !== res);
          if (promises.value.length === 0) {
            abortPromises = false;
          }
          helpers.queuedFiles.value = helpers.queuedFiles.value.concat(files);
          files.forEach((f) => {
            helpers.updateFileStatus(f, "failed");
          });
          emit("factoryFailed", err, files);
          workingThreads.value--;
        }
      };
      res.then((factory) => {
        if (abortPromises === true) {
          failed(new Error("Aborted"));
        } else if (helpers.isAlive() === true) {
          promises.value = promises.value.filter((p) => p !== res);
          performUpload(files, factory);
        }
      }).catch(failed);
    } else {
      performUpload(files, res || {});
    }
  }
  function performUpload(files, factory) {
    const form = new FormData(), xhr2 = new XMLHttpRequest();
    const getProp2 = (name2, arg) => {
      return factory[name2] !== void 0 ? getFn(factory[name2])(arg) : xhrProps.value[name2](arg);
    };
    const url = getProp2("url", files);
    if (!url) {
      console.error("q-uploader: invalid or no URL specified");
      workingThreads.value--;
      return;
    }
    const fields = getProp2("formFields", files);
    fields !== void 0 && fields.forEach((field) => {
      form.append(field.name, field.value);
    });
    let uploadIndex = 0, uploadIndexSize = 0, localUploadedSize = 0, maxUploadSize = 0, aborted;
    xhr2.upload.addEventListener("progress", (e) => {
      if (aborted === true) return;
      const loaded = Math.min(maxUploadSize, e.loaded);
      helpers.uploadedSize.value += loaded - localUploadedSize;
      localUploadedSize = loaded;
      let size2 = localUploadedSize - uploadIndexSize;
      for (let i = uploadIndex; size2 > 0 && i < files.length; i++) {
        const file = files[i], uploaded = size2 > file.size;
        if (uploaded) {
          size2 -= file.size;
          uploadIndex++;
          uploadIndexSize += file.size;
          helpers.updateFileStatus(file, "uploading", file.size);
        } else {
          helpers.updateFileStatus(file, "uploading", size2);
          return;
        }
      }
    }, false);
    xhr2.onreadystatechange = () => {
      if (xhr2.readyState < 4) {
        return;
      }
      if (xhr2.status && xhr2.status < 400) {
        helpers.uploadedFiles.value = helpers.uploadedFiles.value.concat(files);
        files.forEach((f) => {
          helpers.updateFileStatus(f, "uploaded");
        });
        emit("uploaded", { files, xhr: xhr2 });
      } else {
        aborted = true;
        helpers.uploadedSize.value -= localUploadedSize;
        helpers.queuedFiles.value = helpers.queuedFiles.value.concat(files);
        files.forEach((f) => {
          helpers.updateFileStatus(f, "failed");
        });
        emit("failed", { files, xhr: xhr2 });
      }
      workingThreads.value--;
      xhrs.value = xhrs.value.filter((x) => x !== xhr2);
    };
    xhr2.open(
      getProp2("method", files),
      url
    );
    if (getProp2("withCredentials", files) === true) {
      xhr2.withCredentials = true;
    }
    const headers = getProp2("headers", files);
    headers !== void 0 && headers.forEach((head) => {
      xhr2.setRequestHeader(head.name, head.value);
    });
    const sendRaw = getProp2("sendRaw", files);
    files.forEach((file) => {
      helpers.updateFileStatus(file, "uploading", 0);
      if (sendRaw !== true) {
        form.append(getProp2("fieldName", file), file, file.name);
      }
      file.xhr = xhr2;
      file.__abort = () => {
        xhr2.abort();
      };
      maxUploadSize += file.size;
    });
    emit("uploading", { files, xhr: xhr2 });
    xhrs.value.push(xhr2);
    if (sendRaw === true) {
      xhr2.send(new Blob(files));
    } else {
      xhr2.send(form);
    }
  }
  return {
    isUploading,
    isBusy,
    abort,
    upload
  };
}
var xhr_uploader_plugin_default = {
  name,
  props,
  emits,
  injectPlugin
};
var QUploader_default = create_uploader_component_default(xhr_uploader_plugin_default);
var QUploaderAddTrigger_default = createComponent({
  name: "QUploaderAddTrigger",
  setup() {
    const $trigger = inject(uploaderKey, emptyRenderFn);
    if ($trigger === emptyRenderFn) {
      console.error("QUploaderAddTrigger needs to be child of QUploader");
    }
    return $trigger;
  }
});
var QVideo_default = createComponent({
  name: "QVideo",
  props: {
    ...useRatioProps,
    src: {
      type: String,
      required: true
    },
    title: String,
    fetchpriority: {
      type: String,
      default: "auto"
    },
    loading: {
      type: String,
      default: "eager"
    },
    referrerpolicy: {
      type: String,
      default: "strict-origin-when-cross-origin"
    }
  },
  setup(props4) {
    const ratioStyle = use_ratio_default(props4);
    const classes = computed(
      () => "q-video" + (props4.ratio !== void 0 ? " q-video--responsive" : "")
    );
    return () => h("div", {
      class: classes.value,
      style: ratioStyle.value
    }, [
      h("iframe", {
        src: props4.src,
        title: props4.title,
        fetchpriority: props4.fetchpriority,
        loading: props4.loading,
        referrerpolicy: props4.referrerpolicy,
        frameborder: "0",
        allowfullscreen: true
      })
    ]);
  }
});
function getDepth(value2) {
  if (value2 === false) {
    return 0;
  }
  if (value2 === true || value2 === void 0) {
    return 1;
  }
  const depth = parseInt(value2, 10);
  return isNaN(depth) ? 0 : depth;
}
var ClosePopup_default = createDirective(
  false ? { name: "close-popup", getSSRProps: noop_ssr_directive_transform_default } : {
    name: "close-popup",
    beforeMount(el, { value: value2 }) {
      const ctx = {
        depth: getDepth(value2),
        handler(evt) {
          ctx.depth !== 0 && setTimeout(() => {
            const proxy = getPortalProxy(el);
            if (proxy !== void 0) {
              closePortals(proxy, evt, ctx.depth);
            }
          });
        },
        handlerKey(evt) {
          isKeyCode(evt, 13) === true && ctx.handler(evt);
        }
      };
      el.__qclosepopup = ctx;
      el.addEventListener("click", ctx.handler);
      el.addEventListener("keyup", ctx.handlerKey);
    },
    updated(el, { value: value2, oldValue }) {
      if (value2 !== oldValue) {
        el.__qclosepopup.depth = getDepth(value2);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qclosepopup;
      el.removeEventListener("click", ctx.handler);
      el.removeEventListener("keyup", ctx.handlerKey);
      delete el.__qclosepopup;
    }
  }
);
var id2 = 0;
var offsetBase = void 0;
function getAbsolutePosition(el, resize) {
  if (offsetBase === void 0) {
    offsetBase = document.createElement("div");
    offsetBase.style.cssText = "position: absolute; left: 0; top: 0";
    document.body.appendChild(offsetBase);
  }
  const boundingRect = el.getBoundingClientRect();
  const baseRect = offsetBase.getBoundingClientRect();
  const { marginLeft, marginRight, marginTop, marginBottom } = window.getComputedStyle(el);
  const marginH = parseInt(marginLeft, 10) + parseInt(marginRight, 10);
  const marginV = parseInt(marginTop, 10) + parseInt(marginBottom, 10);
  return {
    left: boundingRect.left - baseRect.left,
    top: boundingRect.top - baseRect.top,
    width: boundingRect.right - boundingRect.left,
    height: boundingRect.bottom - boundingRect.top,
    widthM: boundingRect.right - boundingRect.left + (resize === true ? 0 : marginH),
    heightM: boundingRect.bottom - boundingRect.top + (resize === true ? 0 : marginV),
    marginH: resize === true ? marginH : 0,
    marginV: resize === true ? marginV : 0
  };
}
function getAbsoluteSize(el) {
  return {
    width: el.scrollWidth,
    height: el.scrollHeight
  };
}
var styleEdges = ["Top", "Right", "Bottom", "Left"];
var styleBorderRadiuses = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
var reStyleSkipKey = /-block|-inline|block-|inline-/;
var reStyleSkipRule = /(-block|-inline|block-|inline-).*:/;
function getComputedStyle2(el, props4) {
  const style2 = window.getComputedStyle(el);
  const fixed = {};
  for (let i = 0; i < props4.length; i++) {
    const prop = props4[i];
    if (style2[prop] === "") {
      if (prop === "cssText") {
        const styleLen = style2.length;
        let val = "";
        for (let i2 = 0; i2 < styleLen; i2++) {
          if (reStyleSkipKey.test(style2[i2]) !== true) {
            val += style2[i2] + ": " + style2[style2[i2]] + "; ";
          }
        }
        fixed[prop] = val;
      } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(prop) !== -1) {
        const suffix = prop.replace("border", "");
        let val = "";
        for (let j = 0; j < styleEdges.length; j++) {
          const subProp = "border" + styleEdges[j] + suffix;
          val += style2[subProp] + " ";
        }
        fixed[prop] = val;
      } else if (prop === "borderRadius") {
        let val1 = "";
        let val2 = "";
        for (let j = 0; j < styleBorderRadiuses.length; j++) {
          const val = style2[styleBorderRadiuses[j]].split(" ");
          val1 += val[0] + " ";
          val2 += (val[1] === void 0 ? val[0] : val[1]) + " ";
        }
        fixed[prop] = val1 + "/ " + val2;
      } else {
        fixed[prop] = style2[prop];
      }
    } else {
      if (prop === "cssText") {
        fixed[prop] = style2[prop].split(";").filter((val) => reStyleSkipRule.test(val) !== true).join(";");
      } else {
        fixed[prop] = style2[prop];
      }
    }
  }
  return fixed;
}
var zIndexPositions = ["absolute", "fixed", "relative", "sticky"];
function getMaxZIndex(elStart) {
  let el = elStart;
  let maxIndex = 0;
  while (el !== null && el !== document) {
    const { position: position2, zIndex } = window.getComputedStyle(el);
    const zIndexNum = Number(zIndex);
    if (zIndexNum > maxIndex && (el === elStart || zIndexPositions.includes(position2) === true)) {
      maxIndex = zIndexNum;
    }
    el = el.parentNode;
  }
  return maxIndex;
}
function normalizeElements(opts) {
  return {
    from: opts.from,
    to: opts.to !== void 0 ? opts.to : opts.from
  };
}
function normalizeOptions(options) {
  if (typeof options === "number") {
    options = {
      duration: options
    };
  } else if (typeof options === "function") {
    options = {
      onEnd: options
    };
  }
  return {
    ...options,
    waitFor: options.waitFor === void 0 ? 0 : options.waitFor,
    duration: isNaN(options.duration) === true ? 300 : parseInt(options.duration, 10),
    easing: typeof options.easing === "string" && options.easing.length !== 0 ? options.easing : "ease-in-out",
    delay: isNaN(options.delay) === true ? 0 : parseInt(options.delay, 10),
    fill: typeof options.fill === "string" && options.fill.length !== 0 ? options.fill : "none",
    resize: options.resize === true,
    // account for UMD too where modifiers will be lowercased to work
    useCSS: options.useCSS === true || options.usecss === true,
    // account for UMD too where modifiers will be lowercased to work
    hideFromClone: options.hideFromClone === true || options.hidefromclone === true,
    // account for UMD too where modifiers will be lowercased to work
    keepToClone: options.keepToClone === true || options.keeptoclone === true,
    tween: options.tween === true,
    tweenFromOpacity: isNaN(options.tweenFromOpacity) === true ? 0.6 : parseFloat(options.tweenFromOpacity),
    tweenToOpacity: isNaN(options.tweenToOpacity) === true ? 0.5 : parseFloat(options.tweenToOpacity)
  };
}
function getElement2(element) {
  const type = typeof element;
  return type === "function" ? element() : type === "string" ? document.querySelector(element) : element;
}
function isValidElement(element) {
  return element && element.ownerDocument === document && element.parentNode !== null;
}
function morph(_options) {
  let cancel = () => false;
  let cancelStatus = false;
  let endElementTo = true;
  const elements = normalizeElements(_options);
  const options = normalizeOptions(_options);
  const elFrom = getElement2(elements.from);
  if (isValidElement(elFrom) !== true) {
    return cancel;
  }
  typeof elFrom.qMorphCancel === "function" && elFrom.qMorphCancel();
  let animationFromClone = void 0;
  let animationFromTween = void 0;
  let animationToClone = void 0;
  let animationTo = void 0;
  const elFromParent = elFrom.parentNode;
  const elFromNext = elFrom.nextElementSibling;
  const elFromPosition = getAbsolutePosition(elFrom, options.resize);
  const {
    width: elFromParentWidthBefore,
    height: elFromParentHeightBefore
  } = getAbsoluteSize(elFromParent);
  const {
    borderWidth: elFromBorderWidth,
    borderStyle: elFromBorderStyle,
    borderColor: elFromBorderColor,
    borderRadius: elFromBorderRadius,
    backgroundColor: elFromBackground,
    transform: elFromTransform,
    position: elFromPositioningType,
    cssText: elFromCssText
  } = getComputedStyle2(elFrom, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]);
  const elFromClassSaved = elFrom.classList.toString();
  const elFromStyleSaved = elFrom.style.cssText;
  const elFromClone = elFrom.cloneNode(true);
  const elFromTween = options.tween === true ? elFrom.cloneNode(true) : void 0;
  if (elFromTween !== void 0) {
    elFromTween.className = elFromTween.classList.toString().split(" ").filter((c) => /^bg-/.test(c) === false).join(" ");
  }
  options.hideFromClone === true && elFromClone.classList.add("q-morph--internal");
  elFromClone.setAttribute("aria-hidden", "true");
  elFromClone.style.transition = "none";
  elFromClone.style.animation = "none";
  elFromClone.style.pointerEvents = "none";
  elFromParent.insertBefore(elFromClone, elFromNext);
  elFrom.qMorphCancel = () => {
    cancelStatus = true;
    elFromClone.remove();
    elFromTween !== void 0 && elFromTween.remove();
    options.hideFromClone === true && elFromClone.classList.remove("q-morph--internal");
    elFrom.qMorphCancel = void 0;
  };
  const calculateFinalState = () => {
    const elTo = getElement2(elements.to);
    if (cancelStatus === true || isValidElement(elTo) !== true) {
      typeof elFrom.qMorphCancel === "function" && elFrom.qMorphCancel();
      return;
    }
    elFrom !== elTo && typeof elTo.qMorphCancel === "function" && elTo.qMorphCancel();
    options.keepToClone !== true && elTo.classList.add("q-morph--internal");
    elFromClone.classList.add("q-morph--internal");
    const {
      width: elFromParentWidthAfter,
      height: elFromParentHeightAfter
    } = getAbsoluteSize(elFromParent);
    const {
      width: elToParentWidthBefore,
      height: elToParentHeightBefore
    } = getAbsoluteSize(elTo.parentNode);
    options.hideFromClone !== true && elFromClone.classList.remove("q-morph--internal");
    elTo.qMorphCancel = () => {
      cancelStatus = true;
      elFromClone.remove();
      elFromTween !== void 0 && elFromTween.remove();
      options.hideFromClone === true && elFromClone.classList.remove("q-morph--internal");
      options.keepToClone !== true && elTo.classList.remove("q-morph--internal");
      elFrom.qMorphCancel = void 0;
      elTo.qMorphCancel = void 0;
    };
    const animate = () => {
      if (cancelStatus === true) {
        typeof elTo.qMorphCancel === "function" && elTo.qMorphCancel();
        return;
      }
      if (options.hideFromClone !== true) {
        elFromClone.classList.add("q-morph--internal");
        elFromClone.innerHTML = "";
        elFromClone.style.left = 0;
        elFromClone.style.right = "unset";
        elFromClone.style.top = 0;
        elFromClone.style.bottom = "unset";
        elFromClone.style.transform = "none";
      }
      if (options.keepToClone !== true) {
        elTo.classList.remove("q-morph--internal");
      }
      const elToParent = elTo.parentNode;
      const {
        width: elToParentWidthAfter,
        height: elToParentHeightAfter
      } = getAbsoluteSize(elToParent);
      const elToClone = elTo.cloneNode(options.keepToClone);
      elToClone.setAttribute("aria-hidden", "true");
      if (options.keepToClone !== true) {
        elToClone.style.left = 0;
        elToClone.style.right = "unset";
        elToClone.style.top = 0;
        elToClone.style.bottom = "unset";
        elToClone.style.transform = "none";
        elToClone.style.pointerEvents = "none";
      }
      elToClone.classList.add("q-morph--internal");
      const elToNext = elTo === elFrom && elFromParent === elToParent ? elFromClone : elTo.nextElementSibling;
      elToParent.insertBefore(elToClone, elToNext);
      const {
        borderWidth: elToBorderWidth,
        borderStyle: elToBorderStyle,
        borderColor: elToBorderColor,
        borderRadius: elToBorderRadius,
        backgroundColor: elToBackground,
        transform: elToTransform,
        position: elToPositioningType,
        cssText: elToCssText
      } = getComputedStyle2(elTo, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]);
      const elToClassSaved = elTo.classList.toString();
      const elToStyleSaved = elTo.style.cssText;
      elTo.style.cssText = elToCssText;
      elTo.style.transform = "none";
      elTo.style.animation = "none";
      elTo.style.transition = "none";
      elTo.className = elToClassSaved.split(" ").filter((c) => /^bg-/.test(c) === false).join(" ");
      const elToPosition = getAbsolutePosition(elTo, options.resize);
      const deltaX = elFromPosition.left - elToPosition.left;
      const deltaY = elFromPosition.top - elToPosition.top;
      const scaleX = elFromPosition.width / (elToPosition.width > 0 ? elToPosition.width : 10);
      const scaleY = elFromPosition.height / (elToPosition.height > 0 ? elToPosition.height : 100);
      const elFromParentWidthDiff = elFromParentWidthBefore - elFromParentWidthAfter;
      const elFromParentHeightDiff = elFromParentHeightBefore - elFromParentHeightAfter;
      const elToParentWidthDiff = elToParentWidthAfter - elToParentWidthBefore;
      const elToParentHeightDiff = elToParentHeightAfter - elToParentHeightBefore;
      const elFromCloneWidth = Math.max(elFromPosition.widthM, elFromParentWidthDiff);
      const elFromCloneHeight = Math.max(elFromPosition.heightM, elFromParentHeightDiff);
      const elToCloneWidth = Math.max(elToPosition.widthM, elToParentWidthDiff);
      const elToCloneHeight = Math.max(elToPosition.heightM, elToParentHeightDiff);
      const elSharedSize = elFrom === elTo && ["absolute", "fixed"].includes(elToPositioningType) === false && ["absolute", "fixed"].includes(elFromPositioningType) === false;
      let elToNeedsFixedPosition = elToPositioningType === "fixed";
      let parent = elToParent;
      while (elToNeedsFixedPosition !== true && parent !== document) {
        elToNeedsFixedPosition = window.getComputedStyle(parent).position === "fixed";
        parent = parent.parentNode;
      }
      if (options.hideFromClone !== true) {
        elFromClone.style.display = "block";
        elFromClone.style.flex = "0 0 auto";
        elFromClone.style.opacity = 0;
        elFromClone.style.minWidth = "unset";
        elFromClone.style.maxWidth = "unset";
        elFromClone.style.minHeight = "unset";
        elFromClone.style.maxHeight = "unset";
        elFromClone.classList.remove("q-morph--internal");
      }
      if (options.keepToClone !== true) {
        elToClone.style.display = "block";
        elToClone.style.flex = "0 0 auto";
        elToClone.style.opacity = 0;
        elToClone.style.minWidth = "unset";
        elToClone.style.maxWidth = "unset";
        elToClone.style.minHeight = "unset";
        elToClone.style.maxHeight = "unset";
      }
      elToClone.classList.remove("q-morph--internal");
      if (typeof options.classes === "string") {
        elTo.className += " " + options.classes;
      }
      if (typeof options.style === "string") {
        elTo.style.cssText += " " + options.style;
      } else if (isObject(options.style) === true) {
        for (const prop in options.style) {
          elTo.style[prop] = options.style[prop];
        }
      }
      const elFromZIndex = getMaxZIndex(elFromClone);
      const elToZIndex = getMaxZIndex(elTo);
      const documentScroll = elToNeedsFixedPosition === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      elTo.style.position = elToNeedsFixedPosition === true ? "fixed" : "absolute";
      elTo.style.left = `${elToPosition.left - documentScroll.scrollLeft}px`;
      elTo.style.right = "unset";
      elTo.style.top = `${elToPosition.top - documentScroll.scrollTop}px`;
      elTo.style.margin = 0;
      if (options.resize === true) {
        elTo.style.minWidth = "unset";
        elTo.style.maxWidth = "unset";
        elTo.style.minHeight = "unset";
        elTo.style.maxHeight = "unset";
        elTo.style.overflow = "hidden";
        elTo.style.overflowX = "hidden";
        elTo.style.overflowY = "hidden";
      }
      document.body.appendChild(elTo);
      if (elFromTween !== void 0) {
        elFromTween.style.cssText = elFromCssText;
        elFromTween.style.transform = "none";
        elFromTween.style.animation = "none";
        elFromTween.style.transition = "none";
        elFromTween.style.position = elTo.style.position;
        elFromTween.style.left = `${elFromPosition.left - documentScroll.scrollLeft}px`;
        elFromTween.style.right = "unset";
        elFromTween.style.top = `${elFromPosition.top - documentScroll.scrollTop}px`;
        elFromTween.style.margin = 0;
        elFromTween.style.pointerEvents = "none";
        if (options.resize === true) {
          elFromTween.style.minWidth = "unset";
          elFromTween.style.maxWidth = "unset";
          elFromTween.style.minHeight = "unset";
          elFromTween.style.maxHeight = "unset";
          elFromTween.style.overflow = "hidden";
          elFromTween.style.overflowX = "hidden";
          elFromTween.style.overflowY = "hidden";
        }
        document.body.appendChild(elFromTween);
      }
      const commonCleanup = (aborted) => {
        if (elFrom === elTo && endElementTo !== true) {
          elTo.style.cssText = elFromStyleSaved;
          elTo.className = elFromClassSaved;
        } else {
          elTo.style.cssText = elToStyleSaved;
          elTo.className = elToClassSaved;
        }
        elToClone.parentNode === elToParent && elToParent.insertBefore(elTo, elToClone);
        elFromClone.remove();
        elToClone.remove();
        elFromTween !== void 0 && elFromTween.remove();
        cancel = () => false;
        elFrom.qMorphCancel = void 0;
        elTo.qMorphCancel = void 0;
        if (typeof options.onEnd === "function") {
          options.onEnd(endElementTo === true ? "to" : "from", aborted === true);
        }
      };
      if (options.useCSS !== true && typeof elTo.animate === "function") {
        const resizeFrom = options.resize === true ? {
          transform: `translate(${deltaX}px, ${deltaY}px)`,
          width: `${elFromCloneWidth}px`,
          height: `${elFromCloneHeight}px`
        } : {
          transform: `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`
        };
        const resizeTo = options.resize === true ? {
          width: `${elToCloneWidth}px`,
          height: `${elToCloneHeight}px`
        } : {};
        const resizeFromTween = options.resize === true ? {
          width: `${elFromCloneWidth}px`,
          height: `${elFromCloneHeight}px`
        } : {};
        const resizeToTween = options.resize === true ? {
          transform: `translate(${-1 * deltaX}px, ${-1 * deltaY}px)`,
          width: `${elToCloneWidth}px`,
          height: `${elToCloneHeight}px`
        } : {
          transform: `translate(${-1 * deltaX}px, ${-1 * deltaY}px) scale(${1 / scaleX}, ${1 / scaleY})`
        };
        const tweenFrom = elFromTween !== void 0 ? { opacity: options.tweenToOpacity } : { backgroundColor: elFromBackground };
        const tweenTo = elFromTween !== void 0 ? { opacity: 1 } : { backgroundColor: elToBackground };
        animationTo = elTo.animate([
          {
            margin: 0,
            borderWidth: elFromBorderWidth,
            borderStyle: elFromBorderStyle,
            borderColor: elFromBorderColor,
            borderRadius: elFromBorderRadius,
            zIndex: elFromZIndex,
            transformOrigin: "0 0",
            ...resizeFrom,
            ...tweenFrom
          },
          {
            margin: 0,
            borderWidth: elToBorderWidth,
            borderStyle: elToBorderStyle,
            borderColor: elToBorderColor,
            borderRadius: elToBorderRadius,
            zIndex: elToZIndex,
            transformOrigin: "0 0",
            transform: elToTransform,
            ...resizeTo,
            ...tweenTo
          }
        ], {
          duration: options.duration,
          easing: options.easing,
          fill: options.fill,
          delay: options.delay
        });
        animationFromTween = elFromTween === void 0 ? void 0 : elFromTween.animate([
          {
            opacity: options.tweenFromOpacity,
            margin: 0,
            borderWidth: elFromBorderWidth,
            borderStyle: elFromBorderStyle,
            borderColor: elFromBorderColor,
            borderRadius: elFromBorderRadius,
            zIndex: elFromZIndex,
            transformOrigin: "0 0",
            transform: elFromTransform,
            ...resizeFromTween
          },
          {
            opacity: 0,
            margin: 0,
            borderWidth: elToBorderWidth,
            borderStyle: elToBorderStyle,
            borderColor: elToBorderColor,
            borderRadius: elToBorderRadius,
            zIndex: elToZIndex,
            transformOrigin: "0 0",
            ...resizeToTween
          }
        ], {
          duration: options.duration,
          easing: options.easing,
          fill: options.fill,
          delay: options.delay
        });
        animationFromClone = options.hideFromClone === true || elSharedSize === true ? void 0 : elFromClone.animate([
          {
            margin: `${elFromParentHeightDiff < 0 ? elFromParentHeightDiff / 2 : 0}px ${elFromParentWidthDiff < 0 ? elFromParentWidthDiff / 2 : 0}px`,
            width: `${elFromCloneWidth + elFromPosition.marginH}px`,
            height: `${elFromCloneHeight + elFromPosition.marginV}px`
          },
          {
            margin: 0,
            width: 0,
            height: 0
          }
        ], {
          duration: options.duration,
          easing: options.easing,
          fill: options.fill,
          delay: options.delay
        });
        animationToClone = options.keepToClone === true ? void 0 : elToClone.animate([
          elSharedSize === true ? {
            margin: `${elFromParentHeightDiff < 0 ? elFromParentHeightDiff / 2 : 0}px ${elFromParentWidthDiff < 0 ? elFromParentWidthDiff / 2 : 0}px`,
            width: `${elFromCloneWidth + elFromPosition.marginH}px`,
            height: `${elFromCloneHeight + elFromPosition.marginV}px`
          } : {
            margin: 0,
            width: 0,
            height: 0
          },
          {
            margin: `${elToParentHeightDiff < 0 ? elToParentHeightDiff / 2 : 0}px ${elToParentWidthDiff < 0 ? elToParentWidthDiff / 2 : 0}px`,
            width: `${elToCloneWidth + elToPosition.marginH}px`,
            height: `${elToCloneHeight + elToPosition.marginV}px`
          }
        ], {
          duration: options.duration,
          easing: options.easing,
          fill: options.fill,
          delay: options.delay
        });
        const cleanup = (abort) => {
          animationFromClone !== void 0 && animationFromClone.cancel();
          animationFromTween !== void 0 && animationFromTween.cancel();
          animationToClone !== void 0 && animationToClone.cancel();
          animationTo.cancel();
          animationTo.removeEventListener("finish", cleanup);
          animationTo.removeEventListener("cancel", cleanup);
          commonCleanup(abort);
          animationFromClone = void 0;
          animationFromTween = void 0;
          animationToClone = void 0;
          animationTo = void 0;
        };
        elFrom.qMorphCancel = () => {
          elFrom.qMorphCancel = void 0;
          cancelStatus = true;
          cleanup();
        };
        elTo.qMorphCancel = () => {
          elTo.qMorphCancel = void 0;
          cancelStatus = true;
          cleanup();
        };
        animationTo.addEventListener("finish", cleanup);
        animationTo.addEventListener("cancel", cleanup);
        cancel = (abort) => {
          if (cancelStatus === true || animationTo === void 0) {
            return false;
          }
          if (abort === true) {
            cleanup(true);
            return true;
          }
          endElementTo = endElementTo !== true;
          animationFromClone !== void 0 && animationFromClone.reverse();
          animationFromTween !== void 0 && animationFromTween.reverse();
          animationToClone !== void 0 && animationToClone.reverse();
          animationTo.reverse();
          return true;
        };
      } else {
        const qAnimId = `q-morph-anim-${++id2}`;
        const style2 = document.createElement("style");
        const resizeFrom = options.resize === true ? `
            transform: translate(${deltaX}px, ${deltaY}px);
            width: ${elFromCloneWidth}px;
            height: ${elFromCloneHeight}px;
          ` : `transform: translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY});`;
        const resizeTo = options.resize === true ? `
            width: ${elToCloneWidth}px;
            height: ${elToCloneHeight}px;
          ` : "";
        const resizeFromTween = options.resize === true ? `
            width: ${elFromCloneWidth}px;
            height: ${elFromCloneHeight}px;
          ` : "";
        const resizeToTween = options.resize === true ? `
            transform: translate(${-1 * deltaX}px, ${-1 * deltaY}px);
            width: ${elToCloneWidth}px;
            height: ${elToCloneHeight}px;
          ` : `transform: translate(${-1 * deltaX}px, ${-1 * deltaY}px) scale(${1 / scaleX}, ${1 / scaleY});`;
        const tweenFrom = elFromTween !== void 0 ? `opacity: ${options.tweenToOpacity};` : `background-color: ${elFromBackground};`;
        const tweenTo = elFromTween !== void 0 ? "opacity: 1;" : `background-color: ${elToBackground};`;
        const keyframesFromTween = elFromTween === void 0 ? "" : `
            @keyframes ${qAnimId}-from-tween {
              0% {
                opacity: ${options.tweenFromOpacity};
                margin: 0;
                border-width: ${elFromBorderWidth};
                border-style: ${elFromBorderStyle};
                border-color: ${elFromBorderColor};
                border-radius: ${elFromBorderRadius};
                z-index: ${elFromZIndex};
                transform-origin: 0 0;
                transform: ${elFromTransform};
                ${resizeFromTween}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${elToBorderWidth};
                border-style: ${elToBorderStyle};
                border-color: ${elToBorderColor};
                border-radius: ${elToBorderRadius};
                z-index: ${elToZIndex};
                transform-origin: 0 0;
                ${resizeToTween}
              }
            }
          `;
        const keyframesFrom = options.hideFromClone === true || elSharedSize === true ? "" : `
            @keyframes ${qAnimId}-from {
              0% {
                margin: ${elFromParentHeightDiff < 0 ? elFromParentHeightDiff / 2 : 0}px ${elFromParentWidthDiff < 0 ? elFromParentWidthDiff / 2 : 0}px;
                width: ${elFromCloneWidth + elFromPosition.marginH}px;
                height: ${elFromCloneHeight + elFromPosition.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `;
        const keyframeToStart = elSharedSize === true ? `
            margin: ${elFromParentHeightDiff < 0 ? elFromParentHeightDiff / 2 : 0}px ${elFromParentWidthDiff < 0 ? elFromParentWidthDiff / 2 : 0}px;
            width: ${elFromCloneWidth + elFromPosition.marginH}px;
            height: ${elFromCloneHeight + elFromPosition.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `;
        const keyframesTo = options.keepToClone === true ? "" : `
            @keyframes ${qAnimId}-to {
              0% {
                ${keyframeToStart}
              }

              100% {
                margin: ${elToParentHeightDiff < 0 ? elToParentHeightDiff / 2 : 0}px ${elToParentWidthDiff < 0 ? elToParentWidthDiff / 2 : 0}px;
                width: ${elToCloneWidth + elToPosition.marginH}px;
                height: ${elToCloneHeight + elToPosition.marginV}px;
              }
            }
          `;
        style2.innerHTML = `
          @keyframes ${qAnimId} {
            0% {
              margin: 0;
              border-width: ${elFromBorderWidth};
              border-style: ${elFromBorderStyle};
              border-color: ${elFromBorderColor};
              border-radius: ${elFromBorderRadius};
              background-color: ${elFromBackground};
              z-index: ${elFromZIndex};
              transform-origin: 0 0;
              ${resizeFrom}
              ${tweenFrom}
            }

            100% {
              margin: 0;
              border-width: ${elToBorderWidth};
              border-style: ${elToBorderStyle};
              border-color: ${elToBorderColor};
              border-radius: ${elToBorderRadius};
              background-color: ${elToBackground};
              z-index: ${elToZIndex};
              transform-origin: 0 0;
              transform: ${elToTransform};
              ${resizeTo}
              ${tweenTo}
            }
          }

          ${keyframesFrom}

          ${keyframesFromTween}

          ${keyframesTo}
        `;
        document.head.appendChild(style2);
        let animationDirection = "normal";
        elFromClone.style.animation = `${options.duration}ms ${options.easing} ${options.delay}ms ${animationDirection} ${options.fill} ${qAnimId}-from`;
        if (elFromTween !== void 0) {
          elFromTween.style.animation = `${options.duration}ms ${options.easing} ${options.delay}ms ${animationDirection} ${options.fill} ${qAnimId}-from-tween`;
        }
        elToClone.style.animation = `${options.duration}ms ${options.easing} ${options.delay}ms ${animationDirection} ${options.fill} ${qAnimId}-to`;
        elTo.style.animation = `${options.duration}ms ${options.easing} ${options.delay}ms ${animationDirection} ${options.fill} ${qAnimId}`;
        const cleanup = (evt) => {
          if (evt === Object(evt) && evt.animationName !== qAnimId) {
            return;
          }
          elTo.removeEventListener("animationend", cleanup);
          elTo.removeEventListener("animationcancel", cleanup);
          commonCleanup();
          style2.remove();
        };
        elFrom.qMorphCancel = () => {
          elFrom.qMorphCancel = void 0;
          cancelStatus = true;
          cleanup();
        };
        elTo.qMorphCancel = () => {
          elTo.qMorphCancel = void 0;
          cancelStatus = true;
          cleanup();
        };
        elTo.addEventListener("animationend", cleanup);
        elTo.addEventListener("animationcancel", cleanup);
        cancel = (abort) => {
          if (cancelStatus === true || !elTo || !elFromClone || !elToClone) {
            return false;
          }
          if (abort === true) {
            cleanup();
            return true;
          }
          endElementTo = endElementTo !== true;
          animationDirection = animationDirection === "normal" ? "reverse" : "normal";
          elFromClone.style.animationDirection = animationDirection;
          elFromTween.style.animationDirection = animationDirection;
          elToClone.style.animationDirection = animationDirection;
          elTo.style.animationDirection = animationDirection;
          return true;
        };
      }
    };
    if (options.waitFor > 0 || options.waitFor === "transitionend" || options.waitFor === Object(options.waitFor) && typeof options.waitFor.then === "function") {
      const delayPromise = options.waitFor > 0 ? new Promise((resolve) => setTimeout(resolve, options.waitFor)) : options.waitFor === "transitionend" ? new Promise((resolve) => {
        const endFn = () => {
          if (timer2 !== null) {
            clearTimeout(timer2);
            timer2 = null;
          }
          if (elTo) {
            elTo.removeEventListener("transitionend", endFn);
            elTo.removeEventListener("transitioncancel", endFn);
          }
          resolve();
        };
        let timer2 = setTimeout(endFn, 400);
        elTo.addEventListener("transitionend", endFn);
        elTo.addEventListener("transitioncancel", endFn);
      }) : options.waitFor;
      delayPromise.then(animate).catch(() => {
        typeof elTo.qMorphCancel === "function" && elTo.qMorphCancel();
      });
    } else {
      animate();
    }
  };
  typeof _options.onToggle === "function" && _options.onToggle();
  requestAnimationFrame(calculateFinalState);
  return (abort) => cancel(abort);
}
var morphGroups = {};
var props2 = [
  "duration",
  "delay",
  "easing",
  "fill",
  "classes",
  "style",
  "duration",
  "resize",
  "useCSS",
  "hideFromClone",
  "keepToClone",
  "tween",
  "tweenFromOpacity",
  "tweenToOpacity",
  "waitFor",
  "onEnd"
];
var mods = [
  "resize",
  "useCSS",
  "hideFromClone",
  "keepToClone",
  "tween"
];
function changeClass(ctx, action) {
  if (ctx.clsAction !== action) {
    ctx.clsAction = action;
    ctx.el.classList[action]("q-morph--invisible");
  }
}
function trigger2(group) {
  if (group.animating === true || group.queue.length < 2) {
    return;
  }
  const [from, to] = group.queue;
  group.animating = true;
  from.animating = true;
  to.animating = true;
  changeClass(from, "remove");
  changeClass(to, "remove");
  const cancelFn = morph({
    from: from.el,
    to: to.el,
    onToggle() {
      changeClass(from, "add");
      changeClass(to, "remove");
    },
    ...to.opts,
    onEnd(dir, aborted) {
      to.opts.onEnd !== void 0 && to.opts.onEnd(dir, aborted);
      if (aborted === true) {
        return;
      }
      from.animating = false;
      to.animating = false;
      group.animating = false;
      group.cancel = void 0;
      group.queue.shift();
      trigger2(group);
    }
  });
  group.cancel = () => {
    cancelFn(true);
    group.cancel = void 0;
  };
}
function updateModifiers2(mod2, ctx) {
  const opts = ctx.opts;
  mods.forEach((name2) => {
    opts[name2] = mod2[name2] === true;
  });
}
function insertArgs(arg, ctx) {
  const opts = typeof arg === "string" && arg.length !== 0 ? arg.split(":") : [];
  ctx.name = opts[0];
  ctx.group = opts[1];
  Object.assign(ctx.opts, {
    duration: isNaN(opts[2]) === true ? 300 : parseFloat(opts[2]),
    waitFor: opts[3]
  });
}
function updateArgs(arg, ctx) {
  if (arg.group !== void 0) {
    ctx.group = arg.group;
  }
  if (arg.name !== void 0) {
    ctx.name = arg.name;
  }
  const opts = ctx.opts;
  props2.forEach((name2) => {
    if (arg[name2] !== void 0) {
      opts[name2] = arg[name2];
    }
  });
}
function updateModel(name2, ctx) {
  if (ctx.name === name2) {
    const group = morphGroups[ctx.group];
    if (group === void 0) {
      morphGroups[ctx.group] = {
        name: ctx.group,
        model: name2,
        queue: [ctx],
        animating: false
      };
      changeClass(ctx, "remove");
    } else if (group.model !== name2) {
      group.model = name2;
      group.queue.push(ctx);
      if (group.animating === false && group.queue.length === 2) {
        trigger2(group);
      }
    }
    return;
  }
  if (ctx.animating === false) {
    changeClass(ctx, "add");
  }
}
function updateValue(ctx, value2) {
  let model;
  if (Object(value2) === value2) {
    model = "" + value2.model;
    updateArgs(value2, ctx);
    updateModifiers2(value2, ctx);
  } else {
    model = "" + value2;
  }
  if (model !== ctx.model) {
    ctx.model = model;
    updateModel(model, ctx);
  } else if (ctx.animating === false && ctx.clsAction !== void 0) {
    ctx.el.classList[ctx.clsAction]("q-morph--invisible");
  }
}
var Morph_default = createDirective(
  false ? {
    name: "morph",
    getSSRProps: (binding) => {
      const name2 = binding.arg ? binding.arg.split(":")[0] : false;
      return {
        class: name2 === binding.value ? "" : "q-morph--invisible"
      };
    }
  } : {
    name: "morph",
    mounted(el, binding) {
      const ctx = {
        el,
        animating: false,
        opts: {}
      };
      updateModifiers2(binding.modifiers, ctx);
      insertArgs(binding.arg, ctx);
      updateValue(ctx, binding.value);
      el.__qmorph = ctx;
    },
    updated(el, binding) {
      updateValue(el.__qmorph, binding.value);
    },
    beforeUnmount(el) {
      const ctx = el.__qmorph;
      const group = morphGroups[ctx.group];
      if (group !== void 0) {
        const index = group.queue.indexOf(ctx);
        if (index !== -1) {
          group.queue = group.queue.filter((item) => item !== ctx);
          if (group.queue.length === 0) {
            group.cancel !== void 0 && group.cancel();
            delete morphGroups[ctx.group];
          }
        }
      }
      if (ctx.clsAction === "add") {
        el.classList.remove("q-morph--invisible");
      }
      delete el.__qmorph;
    }
  }
);
var defaultCfg2 = {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true,
  attributeOldValue: true,
  characterDataOldValue: true
};
function update3(el, ctx, value2) {
  ctx.handler = value2;
  ctx.observer !== void 0 && ctx.observer.disconnect();
  ctx.observer = new MutationObserver((list) => {
    if (typeof ctx.handler === "function") {
      const res = ctx.handler(list);
      if (res === false || ctx.once === true) {
        destroy2(el);
      }
    }
  });
  ctx.observer.observe(el, ctx.opts);
}
function destroy2(el) {
  const ctx = el.__qmutation;
  if (ctx !== void 0) {
    ctx.observer !== void 0 && ctx.observer.disconnect();
    delete el.__qmutation;
  }
}
var Mutation_default = createDirective(
  false ? { name: "mutation", getSSRProps: noop_ssr_directive_transform_default } : {
    name: "mutation",
    mounted(el, { modifiers: { once, ...mod2 }, value: value2 }) {
      const ctx = {
        once,
        opts: Object.keys(mod2).length === 0 ? defaultCfg2 : mod2
      };
      update3(el, ctx, value2);
      el.__qmutation = ctx;
    },
    updated(el, { oldValue, value: value2 }) {
      const ctx = el.__qmutation;
      if (ctx !== void 0 && oldValue !== value2) {
        update3(el, ctx, value2);
      }
    },
    beforeUnmount: destroy2
  }
);
var { passive: passive5 } = listenOpts;
function update4(ctx, { value: value2, oldValue }) {
  if (typeof value2 !== "function") {
    ctx.scrollTarget.removeEventListener("scroll", ctx.scroll, passive5);
    return;
  }
  ctx.handler = value2;
  if (typeof oldValue !== "function") {
    ctx.scrollTarget.addEventListener("scroll", ctx.scroll, passive5);
    ctx.scroll();
  }
}
var ScrollFire_default = createDirective(
  false ? { name: "scroll-fire", getSSRProps: noop_ssr_directive_transform_default } : {
    name: "scroll-fire",
    mounted(el, binding) {
      const ctx = {
        scrollTarget: getScrollTarget(el),
        scroll: debounce_default(() => {
          let containerBottom, elBottom;
          if (ctx.scrollTarget === window) {
            elBottom = el.getBoundingClientRect().bottom;
            containerBottom = window.innerHeight;
          } else {
            elBottom = offset(el).top + height(el);
            containerBottom = offset(ctx.scrollTarget).top + height(ctx.scrollTarget);
          }
          if (elBottom > 0 && elBottom < containerBottom) {
            ctx.scrollTarget.removeEventListener("scroll", ctx.scroll, passive5);
            ctx.handler(el);
          }
        }, 25)
      };
      update4(ctx, binding);
      el.__qscrollfire = ctx;
    },
    updated(el, binding) {
      if (binding.value !== binding.oldValue) {
        update4(el.__qscrollfire, binding);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qscrollfire;
      ctx.scrollTarget.removeEventListener("scroll", ctx.scroll, passive5);
      ctx.scroll.cancel();
      delete el.__qscrollfire;
    }
  }
);
function update5(ctx, { value: value2, oldValue }) {
  if (typeof value2 !== "function") {
    ctx.scrollTarget.removeEventListener("scroll", ctx.scroll, listenOpts.passive);
    return;
  }
  ctx.handler = value2;
  if (typeof oldValue !== "function") {
    ctx.scrollTarget.addEventListener("scroll", ctx.scroll, listenOpts.passive);
  }
}
var Scroll_default = createDirective(
  false ? { name: "scroll", getSSRProps: noop_ssr_directive_transform_default } : {
    name: "scroll",
    mounted(el, binding) {
      const ctx = {
        scrollTarget: getScrollTarget(el),
        scroll() {
          ctx.handler(
            getVerticalScrollPosition(ctx.scrollTarget),
            getHorizontalScrollPosition(ctx.scrollTarget)
          );
        }
      };
      update5(ctx, binding);
      el.__qscroll = ctx;
    },
    updated(el, binding) {
      if (el.__qscroll !== void 0 && binding.oldValue !== binding.value) {
        update5(el.__qscroll, binding);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qscroll;
      ctx.scrollTarget.removeEventListener("scroll", ctx.scroll, listenOpts.passive);
      delete el.__qscroll;
    }
  }
);
var TouchHold_default = createDirective(
  false ? { name: "touch-hold", getSSRProps: noop_ssr_directive_transform_default } : {
    name: "touch-hold",
    beforeMount(el, binding) {
      const { modifiers } = binding;
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      const ctx = {
        handler: binding.value,
        noop,
        mouseStart(evt) {
          if (typeof ctx.handler === "function" && leftClick(evt) === true) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", "passiveCapture"],
              [document, "click", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (evt.target !== void 0 && typeof ctx.handler === "function") {
            const target2 = evt.target;
            addEvt(ctx, "temp", [
              [target2, "touchmove", "move", "passiveCapture"],
              [target2, "touchcancel", "end", "notPassiveCapture"],
              [target2, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          ctx.origin = position(evt);
          const startTime = Date.now();
          if (client.is.mobile === true) {
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = (withDelay) => {
              ctx.styleCleanup = void 0;
              const remove2 = () => {
                document.body.classList.remove("non-selectable");
              };
              if (withDelay === true) {
                clearSelection();
                setTimeout(remove2, 10);
              } else {
                remove2();
              }
            };
          }
          ctx.triggered = false;
          ctx.sensitivity = mouseEvent === true ? ctx.mouseSensitivity : ctx.touchSensitivity;
          ctx.timer = setTimeout(() => {
            ctx.timer = void 0;
            clearSelection();
            ctx.triggered = true;
            ctx.handler({
              evt,
              touch: mouseEvent !== true,
              mouse: mouseEvent === true,
              position: ctx.origin,
              duration: Date.now() - startTime
            });
          }, ctx.duration);
        },
        move(evt) {
          const { top, left } = position(evt);
          if (ctx.timer !== void 0 && (Math.abs(left - ctx.origin.left) >= ctx.sensitivity || Math.abs(top - ctx.origin.top) >= ctx.sensitivity)) {
            clearTimeout(ctx.timer);
            ctx.timer = void 0;
          }
        },
        end(evt) {
          cleanEvt(ctx, "temp");
          ctx.styleCleanup !== void 0 && ctx.styleCleanup(ctx.triggered);
          if (ctx.triggered === true) {
            evt !== void 0 && stopAndPrevent(evt);
          } else if (ctx.timer !== void 0) {
            clearTimeout(ctx.timer);
            ctx.timer = void 0;
          }
        }
      };
      const data = [600, 5, 7];
      if (typeof binding.arg === "string" && binding.arg.length !== 0) {
        binding.arg.split(":").forEach((val, index) => {
          const v = parseInt(val, 10);
          v && (data[index] = v);
        });
      }
      [ctx.duration, ctx.touchSensitivity, ctx.mouseSensitivity] = data;
      el.__qtouchhold = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchend", "noop", "notPassiveCapture"]
      ]);
    },
    updated(el, binding) {
      const ctx = el.__qtouchhold;
      if (ctx !== void 0 && binding.oldValue !== binding.value) {
        typeof binding.value !== "function" && ctx.end();
        ctx.handler = binding.value;
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchhold;
      if (ctx !== void 0) {
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        ctx.timer !== void 0 && clearTimeout(ctx.timer);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchhold;
      }
    }
  }
);
var keyCodes3 = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  delete: [8, 46]
};
var keyRegex = new RegExp(`^([\\d+]+|${Object.keys(keyCodes3).join("|")})$`, "i");
function shouldEnd(evt, origin) {
  const { top, left } = position(evt);
  return Math.abs(left - origin.left) >= 7 || Math.abs(top - origin.top) >= 7;
}
var TouchRepeat_default = createDirective(
  false ? { name: "touch-repeat", getSSRProps: noop_ssr_directive_transform_default } : {
    name: "touch-repeat",
    beforeMount(el, { modifiers, value: value2, arg }) {
      const keyboard = Object.keys(modifiers).reduce((acc, key) => {
        if (keyRegex.test(key) === true) {
          const keyCode = isNaN(parseInt(key, 10)) ? keyCodes3[key.toLowerCase()] : parseInt(key, 10);
          keyCode >= 0 && acc.push(keyCode);
        }
        return acc;
      }, []);
      if (modifiers.mouse !== true && client.has.touch !== true && keyboard.length === 0) {
        return;
      }
      const durations = typeof arg === "string" && arg.length !== 0 ? arg.split(":").map((val) => parseInt(val, 10)) : [0, 600, 300];
      const durationsLast = durations.length - 1;
      const ctx = {
        keyboard,
        handler: value2,
        noop,
        mouseStart(evt) {
          if (ctx.event === void 0 && typeof ctx.handler === "function" && leftClick(evt) === true) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", "passiveCapture"],
              [document, "click", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        keyboardStart(evt) {
          if (typeof ctx.handler === "function" && isKeyCode(evt, keyboard) === true) {
            if (durations[0] === 0 || ctx.event !== void 0) {
              stopAndPrevent(evt);
              el.focus();
              if (ctx.event !== void 0) {
                return;
              }
            }
            addEvt(ctx, "temp", [
              [document, "keyup", "end", "notPassiveCapture"],
              [document, "click", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, false, true);
          }
        },
        touchStart(evt) {
          if (evt.target !== void 0 && typeof ctx.handler === "function") {
            const target2 = evt.target;
            addEvt(ctx, "temp", [
              [target2, "touchmove", "move", "passiveCapture"],
              [target2, "touchcancel", "end", "notPassiveCapture"],
              [target2, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent, keyboardEvent) {
          if (keyboardEvent !== true) {
            ctx.origin = position(evt);
          }
          function styleCleanup(withDelay) {
            ctx.styleCleanup = void 0;
            document.documentElement.style.cursor = "";
            const remove2 = () => {
              document.body.classList.remove("non-selectable");
            };
            if (withDelay === true) {
              clearSelection();
              setTimeout(remove2, 10);
            } else {
              remove2();
            }
          }
          if (client.is.mobile === true) {
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = styleCleanup;
          }
          ctx.event = {
            touch: mouseEvent !== true && keyboardEvent !== true,
            mouse: mouseEvent === true,
            keyboard: keyboardEvent === true,
            startTime: Date.now(),
            repeatCount: 0
          };
          const fn = () => {
            ctx.timer = void 0;
            if (ctx.event === void 0) {
              return;
            }
            if (ctx.event.repeatCount === 0) {
              ctx.event.evt = evt;
              if (keyboardEvent === true) {
                ctx.event.keyCode = evt.keyCode;
              } else {
                ctx.event.position = position(evt);
              }
              if (client.is.mobile !== true) {
                document.documentElement.style.cursor = "pointer";
                document.body.classList.add("non-selectable");
                clearSelection();
                ctx.styleCleanup = styleCleanup;
              }
            }
            ctx.event.duration = Date.now() - ctx.event.startTime;
            ctx.event.repeatCount += 1;
            ctx.handler(ctx.event);
            const index = durationsLast < ctx.event.repeatCount ? durationsLast : ctx.event.repeatCount;
            ctx.timer = setTimeout(fn, durations[index]);
          };
          if (durations[0] === 0) {
            fn();
          } else {
            ctx.timer = setTimeout(fn, durations[0]);
          }
        },
        move(evt) {
          if (ctx.event !== void 0 && ctx.timer !== void 0 && shouldEnd(evt, ctx.origin) === true) {
            clearTimeout(ctx.timer);
            ctx.timer = void 0;
          }
        },
        end(evt) {
          if (ctx.event === void 0) {
            return;
          }
          ctx.styleCleanup !== void 0 && ctx.styleCleanup(true);
          evt !== void 0 && ctx.event.repeatCount > 0 && stopAndPrevent(evt);
          cleanEvt(ctx, "temp");
          if (ctx.timer !== void 0) {
            clearTimeout(ctx.timer);
            ctx.timer = void 0;
          }
          ctx.event = void 0;
        }
      };
      el.__qtouchrepeat = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchend", "noop", "passiveCapture"]
      ]);
      if (keyboard.length !== 0) {
        const capture = modifiers.keyCapture === true || modifiers.keycapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "keydown", "keyboardStart", `notPassive${capture}`]
        ]);
      }
    },
    updated(el, { oldValue, value: value2 }) {
      const ctx = el.__qtouchrepeat;
      if (ctx !== void 0 && oldValue !== value2) {
        typeof value2 !== "function" && ctx.end();
        ctx.handler = value2;
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchrepeat;
      if (ctx !== void 0) {
        ctx.timer !== void 0 && clearTimeout(ctx.timer);
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchrepeat;
      }
    }
  }
);
function getCssVar(propName, element = document.body) {
  if (typeof propName !== "string") {
    throw new TypeError("Expected a string as propName");
  }
  if (!(element instanceof Element)) {
    throw new TypeError("Expected a DOM element");
  }
  return getComputedStyle(element).getPropertyValue(`--q-${propName}`).trim() || null;
}
var metaValue;
function getProp() {
  return client.is.winphone ? "msapplication-navbutton-color" : client.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function getMetaTag(v) {
  const els = document.getElementsByTagName("META");
  for (const i in els) {
    if (els[i].name === v) {
      return els[i];
    }
  }
}
function setColor(hexColor) {
  if (metaValue === void 0) {
    metaValue = getProp();
  }
  let metaTag = getMetaTag(metaValue);
  const newTag = metaTag === void 0;
  if (newTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", metaValue);
  }
  metaTag.setAttribute("content", hexColor);
  if (newTag) {
    document.head.appendChild(metaTag);
  }
}
var AddressbarColor_default = {
  set: client.is.mobile === true && (client.is.nativeMobile === true || client.is.winphone === true || client.is.safari === true || client.is.webkit === true || client.is.vivaldi === true) ? (hexColor) => {
    const val = hexColor || getCssVar("primary");
    if (client.is.nativeMobile === true && window.StatusBar) {
      window.StatusBar.backgroundColorByHexString(val);
    } else {
      setColor(val);
    }
  } : noop,
  install({ $q }) {
    $q.addressbarColor = this;
    $q.config.addressbarColor && this.set($q.config.addressbarColor);
  }
};
var prefixes = {};
function assignFn(fn) {
  Object.assign(Plugin4, {
    request: fn,
    exit: fn,
    toggle: fn
  });
}
function getFullscreenElement() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function updateEl() {
  const newEl = Plugin4.activeEl = Plugin4.isActive === false ? null : getFullscreenElement();
  changeGlobalNodesTarget(
    newEl === null || newEl === document.documentElement ? document.body : newEl
  );
}
function togglePluginState() {
  Plugin4.isActive = Plugin4.isActive === false;
  updateEl();
}
function promisify(target2, fn) {
  try {
    const res = target2[fn]();
    return res === void 0 ? Promise.resolve() : res;
  } catch (err) {
    return Promise.reject(err);
  }
}
var Plugin4 = createReactivePlugin({
  isActive: false,
  activeEl: null
}, {
  isCapable: false,
  install({ $q }) {
    $q.fullscreen = this;
  }
});
if (false) {
  assignFn(() => Promise.resolve());
} else {
  prefixes.request = [
    "requestFullscreen",
    "msRequestFullscreen",
    "mozRequestFullScreen",
    "webkitRequestFullscreen"
  ].find((request) => document.documentElement[request] !== void 0);
  Plugin4.isCapable = prefixes.request !== void 0;
  if (Plugin4.isCapable === false) {
    assignFn(() => Promise.reject("Not capable"));
  } else {
    Object.assign(Plugin4, {
      request(target2) {
        const el = target2 || document.documentElement;
        const { activeEl } = Plugin4;
        if (el === activeEl) {
          return Promise.resolve();
        }
        const queue2 = activeEl !== null && el.contains(activeEl) === true ? Plugin4.exit() : Promise.resolve();
        return queue2.finally(() => promisify(el, prefixes.request));
      },
      exit() {
        return Plugin4.isActive === true ? promisify(document, prefixes.exit) : Promise.resolve();
      },
      toggle(target2) {
        return Plugin4.isActive === true ? Plugin4.exit() : Plugin4.request(target2);
      }
    });
    prefixes.exit = [
      "exitFullscreen",
      "msExitFullscreen",
      "mozCancelFullScreen",
      "webkitExitFullscreen"
    ].find((exit) => document[exit]);
    Plugin4.isActive = Boolean(getFullscreenElement());
    Plugin4.isActive === true && updateEl();
    [
      "onfullscreenchange",
      "onmsfullscreenchange",
      "onwebkitfullscreenchange"
    ].forEach((evt) => {
      document[evt] = togglePluginState;
    });
  }
}
var AppFullscreen_default = Plugin4;
var Plugin5 = createReactivePlugin({
  appVisible: true
}, {
  install({ $q }) {
    if (false) {
      this.appVisible = $q.appVisible = true;
      return;
    }
    injectProp($q, "appVisible", () => this.appVisible);
  }
});
if (true) {
  let prop, evt;
  if (typeof document.hidden !== "undefined") {
    prop = "hidden";
    evt = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    prop = "msHidden";
    evt = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    prop = "webkitHidden";
    evt = "webkitvisibilitychange";
  }
  if (evt && typeof document[prop] !== "undefined") {
    const update6 = () => {
      Plugin5.appVisible = !document[prop];
    };
    document.addEventListener(evt, update6, false);
  }
}
var AppVisibility_default = Plugin5;
var BottomSheetComponent_default = createComponent({
  name: "BottomSheetComponent",
  props: {
    ...useDarkProps,
    title: String,
    message: String,
    actions: Array,
    grid: Boolean,
    cardClass: [String, Array, Object],
    cardStyle: [String, Array, Object]
  },
  emits: ["ok", "hide"],
  setup(props4, { emit }) {
    const { proxy } = getCurrentInstance();
    const isDark = use_dark_default(props4, proxy.$q);
    const dialogRef = ref(null);
    function show() {
      dialogRef.value.show();
    }
    function hide() {
      dialogRef.value.hide();
    }
    function onOk(action) {
      emit("ok", action);
      hide();
    }
    function onHide() {
      emit("hide");
    }
    function getGrid() {
      return props4.actions.map((action) => {
        const img = action.avatar || action.img;
        return action.label === void 0 ? h(QSeparator_default, {
          class: "col-all",
          dark: isDark.value
        }) : h("div", {
          class: [
            "q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position",
            action.class
          ],
          style: action.style,
          tabindex: 0,
          role: "listitem",
          onClick() {
            onOk(action);
          },
          onKeyup(e) {
            e.keyCode === 13 && onOk(action);
          }
        }, [
          h("div", { class: "q-focus-helper" }),
          action.icon ? h(QIcon_default, { name: action.icon, color: action.color }) : img ? h("img", {
            class: action.avatar ? "q-bottom-sheet__avatar" : "",
            src: img
          }) : h("div", { class: "q-bottom-sheet__empty-icon" }),
          h("div", action.label)
        ]);
      });
    }
    function getList() {
      return props4.actions.map((action) => {
        const img = action.avatar || action.img;
        return action.label === void 0 ? h(QSeparator_default, { spaced: true, dark: isDark.value }) : h(QItem_default, {
          class: ["q-bottom-sheet__item", action.classes],
          style: action.style,
          tabindex: 0,
          clickable: true,
          dark: isDark.value,
          onClick() {
            onOk(action);
          }
        }, () => [
          h(
            QItemSection_default,
            { avatar: true },
            () => action.icon ? h(QIcon_default, { name: action.icon, color: action.color }) : img ? h("img", {
              class: action.avatar ? "q-bottom-sheet__avatar" : "",
              src: img
            }) : null
          ),
          h(QItemSection_default, () => action.label)
        ]);
      });
    }
    function getCardContent() {
      const child = [];
      props4.title && child.push(
        h(QCardSection_default, {
          class: "q-dialog__title"
        }, () => props4.title)
      );
      props4.message && child.push(
        h(QCardSection_default, {
          class: "q-dialog__message"
        }, () => props4.message)
      );
      child.push(
        props4.grid === true ? h("div", {
          class: "row items-stretch justify-start",
          role: "list"
        }, getGrid()) : h("div", {
          role: "list"
        }, getList())
      );
      return child;
    }
    function getContent() {
      return [
        h(QCard_default, {
          class: [
            `q-bottom-sheet q-bottom-sheet--${props4.grid === true ? "grid" : "list"}` + (isDark.value === true ? " q-bottom-sheet--dark q-dark" : ""),
            props4.cardClass
          ],
          style: props4.cardStyle
        }, getCardContent)
      ];
    }
    Object.assign(proxy, { show, hide });
    return () => h(QDialog_default, {
      ref: dialogRef,
      position: "bottom",
      onHide
    }, getContent);
  }
});
function merge(target2, source) {
  for (const key in source) {
    if (key !== "spinner" && Object(source[key]) === source[key]) {
      target2[key] = Object(target2[key]) !== target2[key] ? {} : { ...target2[key] };
      merge(target2[key], source[key]);
    } else {
      target2[key] = source[key];
    }
  }
}
function create_dialog_default(DefaultComponent, supportsCustomComponent, parentApp) {
  return (pluginProps) => {
    if (false) {
      return ssrAPI;
    }
    let DialogComponent, props4;
    const isCustom = supportsCustomComponent === true && pluginProps.component !== void 0;
    if (isCustom === true) {
      const { component, componentProps } = pluginProps;
      DialogComponent = typeof component === "string" ? parentApp.component(component) : component;
      props4 = componentProps || {};
    } else {
      const { class: klass, style: style2, ...otherProps } = pluginProps;
      DialogComponent = DefaultComponent;
      props4 = otherProps;
      klass !== void 0 && (otherProps.cardClass = klass);
      style2 !== void 0 && (otherProps.cardStyle = style2);
    }
    let vm2, emittedOK = false;
    const dialogRef = ref(null);
    const el = createGlobalNode(false, "dialog");
    const applyState = (cmd) => {
      if (dialogRef.value !== null && dialogRef.value[cmd] !== void 0) {
        dialogRef.value[cmd]();
        return;
      }
      const target2 = vm2.$.subTree;
      if (target2 && target2.component) {
        if (target2.component.proxy && target2.component.proxy[cmd]) {
          target2.component.proxy[cmd]();
          return;
        }
        if (target2.component.subTree && target2.component.subTree.component && target2.component.subTree.component.proxy && target2.component.subTree.component.proxy[cmd]) {
          target2.component.subTree.component.proxy[cmd]();
          return;
        }
      }
      console.error("[Quasar] Incorrectly defined Dialog component");
    };
    const okFns = [], cancelFns = [], API = {
      onOk(fn) {
        okFns.push(fn);
        return API;
      },
      onCancel(fn) {
        cancelFns.push(fn);
        return API;
      },
      onDismiss(fn) {
        okFns.push(fn);
        cancelFns.push(fn);
        return API;
      },
      hide() {
        applyState("hide");
        return API;
      },
      update(componentProps) {
        if (vm2 !== null) {
          if (isCustom === true) {
            Object.assign(props4, componentProps);
          } else {
            const { class: klass, style: style2, ...cfg } = componentProps;
            klass !== void 0 && (cfg.cardClass = klass);
            style2 !== void 0 && (cfg.cardStyle = style2);
            merge(props4, cfg);
          }
          vm2.$forceUpdate();
        }
        return API;
      }
    };
    const onOk = (data) => {
      emittedOK = true;
      okFns.forEach((fn) => {
        fn(data);
      });
    };
    const onHide = () => {
      app2.unmount(el);
      removeGlobalNode(el);
      app2 = null;
      vm2 = null;
      if (emittedOK !== true) {
        cancelFns.forEach((fn) => {
          fn();
        });
      }
    };
    let app2 = createChildApp({
      name: "QGlobalDialog",
      setup: () => () => h(DialogComponent, {
        ...props4,
        ref: dialogRef,
        onOk,
        onHide,
        onVnodeMounted(...args) {
          if (typeof props4.onVnodeMounted === "function") {
            props4.onVnodeMounted(...args);
          }
          nextTick(() => applyState("show"));
        }
      })
    }, parentApp);
    vm2 = app2.mount(el);
    return API;
  };
}
var BottomSheet_default = {
  install({ $q, parentApp }) {
    $q.bottomSheet = this.create = create_dialog_default(BottomSheetComponent_default, false, parentApp);
  }
};
function encode(string) {
  return encodeURIComponent(string);
}
function decode(string) {
  return decodeURIComponent(string);
}
function stringifyCookieValue(value2) {
  return encode(value2 === Object(value2) ? JSON.stringify(value2) : "" + value2);
}
function read(string) {
  if (string === "") {
    return string;
  }
  if (string.indexOf('"') === 0) {
    string = string.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  }
  string = decode(string.replace(/\+/g, " "));
  try {
    const parsed = JSON.parse(string);
    if (parsed === Object(parsed) || Array.isArray(parsed) === true) {
      string = parsed;
    }
  } catch (_) {
  }
  return string;
}
function getString(msOffset) {
  const time = /* @__PURE__ */ new Date();
  time.setMilliseconds(time.getMilliseconds() + msOffset);
  return time.toUTCString();
}
function parseExpireString(str) {
  let timestamp = 0;
  const days = str.match(/(\d+)d/);
  const hours = str.match(/(\d+)h/);
  const minutes = str.match(/(\d+)m/);
  const seconds = str.match(/(\d+)s/);
  if (days) {
    timestamp += days[1] * 864e5;
  }
  if (hours) {
    timestamp += hours[1] * 36e5;
  }
  if (minutes) {
    timestamp += minutes[1] * 6e4;
  }
  if (seconds) {
    timestamp += seconds[1] * 1e3;
  }
  return timestamp === 0 ? str : getString(timestamp);
}
function set(key, val, opts = {}, ssr) {
  let expire, expireValue;
  if (opts.expires !== void 0) {
    if (Object.prototype.toString.call(opts.expires) === "[object Date]") {
      expire = opts.expires.toUTCString();
    } else if (typeof opts.expires === "string") {
      expire = parseExpireString(opts.expires);
    } else {
      expireValue = parseFloat(opts.expires);
      expire = isNaN(expireValue) === false ? getString(expireValue * 864e5) : opts.expires;
    }
  }
  const keyValue = `${encode(key)}=${stringifyCookieValue(val)}`;
  const cookie = [
    keyValue,
    expire !== void 0 ? "; Expires=" + expire : "",
    // use expires attribute, max-age is not supported by IE
    opts.path ? "; Path=" + opts.path : "",
    opts.domain ? "; Domain=" + opts.domain : "",
    opts.sameSite ? "; SameSite=" + opts.sameSite : "",
    opts.httpOnly ? "; HttpOnly" : "",
    opts.secure ? "; Secure" : "",
    opts.other ? "; " + opts.other : ""
  ].join("");
  if (ssr) {
    if (ssr.req.qCookies) {
      ssr.req.qCookies.push(cookie);
    } else {
      ssr.req.qCookies = [cookie];
    }
    ssr.res.setHeader("Set-Cookie", ssr.req.qCookies);
    let all = ssr.req.headers.cookie || "";
    if (expire !== void 0 && expireValue < 0) {
      const val2 = get(key, ssr);
      if (val2 !== void 0) {
        all = all.replace(`${key}=${val2}; `, "").replace(`; ${key}=${val2}`, "").replace(`${key}=${val2}`, "");
      }
    } else {
      all = all ? `${keyValue}; ${all}` : cookie;
    }
    ssr.req.headers.cookie = all;
  } else {
    document.cookie = cookie;
  }
}
function get(key, ssr) {
  const cookieSource = ssr ? ssr.req.headers : document, cookies = cookieSource.cookie ? cookieSource.cookie.split("; ") : [], l = cookies.length;
  let result = key ? null : {}, i = 0, parts, name2, cookie;
  for (; i < l; i++) {
    parts = cookies[i].split("=");
    name2 = decode(parts.shift());
    cookie = parts.join("=");
    if (!key) {
      result[name2] = cookie;
    } else if (key === name2) {
      result = read(cookie);
      break;
    }
  }
  return result;
}
function remove(key, options, ssr) {
  set(
    key,
    "",
    { expires: -1, ...options },
    ssr
  );
}
function has(key, ssr) {
  return get(key, ssr) !== null;
}
function getObject(ssr) {
  return {
    get: (key) => get(key, ssr),
    set: (key, val, opts) => set(key, val, opts, ssr),
    has: (key) => has(key, ssr),
    remove: (key, options) => remove(key, options, ssr),
    getAll: () => get(null, ssr)
  };
}
var Plugin6 = {
  install({ $q, ssrContext }) {
    $q.cookies = false ? getObject(ssrContext) : this;
  }
};
if (__QUASAR_SSR__) {
  Plugin6.parseSSR = (ssrContext) => {
    if (ssrContext !== void 0) {
      return getObject(ssrContext);
    }
  };
}
if (true) {
  Object.assign(Plugin6, getObject());
}
var Cookies_default = Plugin6;
var DialogPluginComponent_default = createComponent({
  name: "DialogPluginComponent",
  props: {
    ...useDarkProps,
    title: String,
    message: String,
    prompt: Object,
    options: Object,
    progress: [Boolean, Object],
    html: Boolean,
    ok: {
      type: [String, Object, Boolean],
      default: true
    },
    cancel: [String, Object, Boolean],
    focus: {
      type: String,
      default: "ok",
      validator: (v) => ["ok", "cancel", "none"].includes(v)
    },
    stackButtons: Boolean,
    color: String,
    cardClass: [String, Array, Object],
    cardStyle: [String, Array, Object]
  },
  emits: ["ok", "hide"],
  setup(props4, { emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = use_dark_default(props4, $q);
    const dialogRef = ref(null);
    const model = ref(
      props4.prompt !== void 0 ? props4.prompt.model : props4.options !== void 0 ? props4.options.model : void 0
    );
    const classes = computed(
      () => "q-dialog-plugin" + (isDark.value === true ? " q-dialog-plugin--dark q-dark" : "") + (props4.progress !== false ? " q-dialog-plugin--progress" : "")
    );
    const vmColor = computed(
      () => props4.color || (isDark.value === true ? "amber" : "primary")
    );
    const spinner = computed(() => props4.progress === false ? null : isObject(props4.progress) === true ? {
      component: props4.progress.spinner || QSpinner_default,
      props: { color: props4.progress.color || vmColor.value }
    } : {
      component: QSpinner_default,
      props: { color: vmColor.value }
    });
    const hasForm = computed(
      () => props4.prompt !== void 0 || props4.options !== void 0
    );
    const formProps = computed(() => {
      if (hasForm.value !== true) {
        return {};
      }
      const { model: model2, isValid: isValid2, items, ...formProps2 } = props4.prompt !== void 0 ? props4.prompt : props4.options;
      return formProps2;
    });
    const okLabel = computed(() => isObject(props4.ok) === true ? $q.lang.label.ok : props4.ok === true ? $q.lang.label.ok : props4.ok);
    const cancelLabel = computed(() => isObject(props4.cancel) === true ? $q.lang.label.cancel : props4.cancel === true ? $q.lang.label.cancel : props4.cancel);
    const okDisabled = computed(() => {
      if (props4.prompt !== void 0) {
        return props4.prompt.isValid !== void 0 && props4.prompt.isValid(model.value) !== true;
      }
      if (props4.options !== void 0) {
        return props4.options.isValid !== void 0 && props4.options.isValid(model.value) !== true;
      }
      return false;
    });
    const okProps = computed(() => ({
      color: vmColor.value,
      label: okLabel.value,
      ripple: false,
      disable: okDisabled.value,
      ...isObject(props4.ok) === true ? props4.ok : { flat: true },
      "data-autofocus": props4.focus === "ok" && hasForm.value !== true || void 0,
      onClick: onOk
    }));
    const cancelProps = computed(() => ({
      color: vmColor.value,
      label: cancelLabel.value,
      ripple: false,
      ...isObject(props4.cancel) === true ? props4.cancel : { flat: true },
      "data-autofocus": props4.focus === "cancel" && hasForm.value !== true || void 0,
      onClick: onCancel
    }));
    watch(() => props4.prompt && props4.prompt.model, onUpdateModel);
    watch(() => props4.options && props4.options.model, onUpdateModel);
    function show() {
      dialogRef.value.show();
    }
    function hide() {
      dialogRef.value.hide();
    }
    function onOk() {
      emit("ok", toRaw(model.value));
      hide();
    }
    function onCancel() {
      hide();
    }
    function onDialogHide() {
      emit("hide");
    }
    function onUpdateModel(val) {
      model.value = val;
    }
    function onInputKeyup(evt) {
      if (okDisabled.value !== true && props4.prompt.type !== "textarea" && isKeyCode(evt, 13) === true) {
        onOk();
      }
    }
    function getSection(classes2, text) {
      return props4.html === true ? h(QCardSection_default, {
        class: classes2,
        innerHTML: text
      }) : h(QCardSection_default, { class: classes2 }, () => text);
    }
    function getPrompt() {
      return [
        h(QInput_default, {
          color: vmColor.value,
          dense: true,
          autofocus: true,
          dark: isDark.value,
          ...formProps.value,
          modelValue: model.value,
          "onUpdate:modelValue": onUpdateModel,
          onKeyup: onInputKeyup
        })
      ];
    }
    function getOptions() {
      return [
        h(QOptionGroup_default, {
          color: vmColor.value,
          options: props4.options.items,
          dark: isDark.value,
          ...formProps.value,
          modelValue: model.value,
          "onUpdate:modelValue": onUpdateModel
        })
      ];
    }
    function getButtons() {
      const child = [];
      props4.cancel && child.push(
        h(QBtn_default, cancelProps.value)
      );
      props4.ok && child.push(
        h(QBtn_default, okProps.value)
      );
      return h(QCardActions_default, {
        class: props4.stackButtons === true ? "items-end" : "",
        vertical: props4.stackButtons,
        align: "right"
      }, () => child);
    }
    function getCardContent() {
      const child = [];
      props4.title && child.push(
        getSection("q-dialog__title", props4.title)
      );
      props4.progress !== false && child.push(
        h(
          QCardSection_default,
          { class: "q-dialog__progress" },
          () => h(spinner.value.component, spinner.value.props)
        )
      );
      props4.message && child.push(
        getSection("q-dialog__message", props4.message)
      );
      if (props4.prompt !== void 0) {
        child.push(
          h(
            QCardSection_default,
            { class: "scroll q-dialog-plugin__form" },
            getPrompt
          )
        );
      } else if (props4.options !== void 0) {
        child.push(
          h(QSeparator_default, { dark: isDark.value }),
          h(
            QCardSection_default,
            { class: "scroll q-dialog-plugin__form" },
            getOptions
          ),
          h(QSeparator_default, { dark: isDark.value })
        );
      }
      if (props4.ok || props4.cancel) {
        child.push(getButtons());
      }
      return child;
    }
    function getContent() {
      return [
        h(QCard_default, {
          class: [
            classes.value,
            props4.cardClass
          ],
          style: props4.cardStyle,
          dark: isDark.value
        }, getCardContent)
      ];
    }
    Object.assign(proxy, { show, hide });
    return () => h(QDialog_default, {
      ref: dialogRef,
      onHide: onDialogHide
    }, getContent);
  }
});
var Dialog_default = {
  install({ $q, parentApp }) {
    $q.dialog = this.create = create_dialog_default(DialogPluginComponent_default, true, parentApp);
  }
};
var app;
var vm;
var uid2 = 0;
var timeout = null;
var props3 = {};
var activeGroups = {};
var originalDefaults = {
  group: "__default_quasar_group__",
  delay: 0,
  message: false,
  html: false,
  spinnerSize: 80,
  spinnerColor: "",
  messageColor: "",
  backgroundColor: "",
  boxClass: "",
  spinner: QSpinner_default,
  customClass: ""
};
var defaults = { ...originalDefaults };
function registerProps(opts) {
  if (opts && opts.group !== void 0 && activeGroups[opts.group] !== void 0) {
    return Object.assign(activeGroups[opts.group], opts);
  }
  const newProps = isObject(opts) === true && opts.ignoreDefaults === true ? { ...originalDefaults, ...opts } : { ...defaults, ...opts };
  activeGroups[newProps.group] = newProps;
  return newProps;
}
var Plugin7 = createReactivePlugin({
  isActive: false
}, {
  show(opts) {
    if (false) return;
    props3 = registerProps(opts);
    const { group } = props3;
    Plugin7.isActive = true;
    if (app !== void 0) {
      props3.uid = uid2;
      vm.$forceUpdate();
    } else {
      props3.uid = ++uid2;
      timeout !== null && clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        const el = createGlobalNode("q-loading");
        app = createChildApp({
          name: "QLoading",
          setup() {
            onMounted(() => {
              prevent_scroll_default(true);
            });
            function onAfterLeave() {
              if (Plugin7.isActive !== true && app !== void 0) {
                prevent_scroll_default(false);
                app.unmount(el);
                removeGlobalNode(el);
                app = void 0;
                vm = void 0;
              }
            }
            function getContent() {
              if (Plugin7.isActive !== true) {
                return null;
              }
              const content = [
                h(props3.spinner, {
                  class: "q-loading__spinner",
                  color: props3.spinnerColor,
                  size: props3.spinnerSize
                })
              ];
              props3.message && content.push(
                h("div", {
                  class: "q-loading__message" + (props3.messageColor ? ` text-${props3.messageColor}` : ""),
                  [props3.html === true ? "innerHTML" : "textContent"]: props3.message
                })
              );
              return h("div", {
                class: "q-loading fullscreen flex flex-center z-max " + props3.customClass.trim(),
                key: props3.uid
              }, [
                h("div", {
                  class: "q-loading__backdrop" + (props3.backgroundColor ? ` bg-${props3.backgroundColor}` : "")
                }),
                h("div", {
                  class: "q-loading__box column items-center " + props3.boxClass
                }, content)
              ]);
            }
            return () => h(Transition, {
              name: "q-transition--fade",
              appear: true,
              onAfterLeave
            }, getContent);
          }
        }, Plugin7.__parentApp);
        vm = app.mount(el);
      }, props3.delay);
    }
    return (paramProps) => {
      if (paramProps === void 0 || Object(paramProps) !== paramProps) {
        Plugin7.hide(group);
        return;
      }
      Plugin7.show({ ...paramProps, group });
    };
  },
  hide(group) {
    if (Plugin7.isActive === true) {
      if (group === void 0) {
        activeGroups = {};
      } else if (activeGroups[group] === void 0) {
        return;
      } else {
        delete activeGroups[group];
        const keys = Object.keys(activeGroups);
        if (keys.length !== 0) {
          const lastGroup = keys[keys.length - 1];
          Plugin7.show({ group: lastGroup });
          return;
        }
      }
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      Plugin7.isActive = false;
    }
  },
  setDefaults(opts) {
    if (true) {
      isObject(opts) === true && Object.assign(defaults, opts);
    }
  },
  install({ $q, parentApp }) {
    $q.loading = this;
    if (true) {
      Plugin7.__parentApp = parentApp;
      if ($q.config.loading !== void 0) {
        this.setDefaults($q.config.loading);
      }
    }
  }
});
var Loading_default = Plugin7;
var barRef = ref(null);
var Plugin8 = createReactivePlugin({
  isActive: false
}, {
  start: noop,
  stop: noop,
  increment: noop,
  setDefaults: noop,
  install({ $q, parentApp }) {
    $q.loadingBar = this;
    if (false) return;
    if (this.__installed === true) {
      if ($q.config.loadingBar !== void 0) {
        this.setDefaults($q.config.loadingBar);
      }
      return;
    }
    const props4 = ref(
      $q.config.loadingBar !== void 0 ? { ...$q.config.loadingBar } : {}
    );
    function onStart() {
      Plugin8.isActive = true;
    }
    function onStop() {
      Plugin8.isActive = false;
    }
    const el = createGlobalNode("q-loading-bar");
    createChildApp({
      name: "LoadingBar",
      // hide App from Vue devtools
      devtools: { hide: true },
      setup: () => () => h(QAjaxBar_default, { ...props4.value, onStart, onStop, ref: barRef })
    }, parentApp).mount(el);
    Object.assign(this, {
      start(speed) {
        barRef.value.start(speed);
      },
      stop() {
        barRef.value.stop();
      },
      increment() {
        barRef.value.increment.apply(null, arguments);
      },
      setDefaults(opts) {
        if (isObject(opts) === true) {
          Object.assign(props4.value, opts);
        }
      }
    });
  }
});
var LoadingBar_default = Plugin8;
var updateId = null;
var currentClientMeta;
var clientList = [];
function normalize(meta) {
  if (meta.title) {
    meta.title = meta.titleTemplate ? meta.titleTemplate(meta.title) : meta.title;
    delete meta.titleTemplate;
  }
  ;
  [["meta", "content"], ["link", "href"]].forEach((type) => {
    const metaType = meta[type[0]], metaProp = type[1];
    for (const name2 in metaType) {
      const metaLink = metaType[name2];
      if (metaLink.template) {
        if (Object.keys(metaLink).length === 1) {
          delete metaType[name2];
        } else {
          metaLink[metaProp] = metaLink.template(metaLink[metaProp] || "");
          delete metaLink.template;
        }
      }
    }
  });
}
function changed(old, def) {
  if (Object.keys(old).length !== Object.keys(def).length) {
    return true;
  }
  for (const key in old) {
    if (old[key] !== def[key]) {
      return true;
    }
  }
}
function bodyFilter(name2) {
  return ["class", "style"].includes(name2) === false;
}
function htmlFilter(name2) {
  return ["lang", "dir"].includes(name2) === false;
}
function diff(meta, other) {
  const add = {}, remove2 = {};
  if (meta === void 0) {
    return { add: other, remove: remove2 };
  }
  if (meta.title !== other.title) {
    add.title = other.title;
  }
  ;
  ["meta", "link", "script", "htmlAttr", "bodyAttr"].forEach((type) => {
    const old = meta[type], cur = other[type];
    remove2[type] = [];
    if (old === void 0 || old === null) {
      add[type] = cur;
      return;
    }
    add[type] = {};
    for (const key in old) {
      if (cur.hasOwnProperty(key) === false) {
        remove2[type].push(key);
      }
    }
    for (const key in cur) {
      if (old.hasOwnProperty(key) === false) {
        add[type][key] = cur[key];
      } else if (changed(old[key], cur[key]) === true) {
        remove2[type].push(key);
        add[type][key] = cur[key];
      }
    }
  });
  return { add, remove: remove2 };
}
function apply2({ add, remove: remove2 }) {
  if (add.title) {
    document.title = add.title;
  }
  if (Object.keys(remove2).length !== 0) {
    ["meta", "link", "script"].forEach((type) => {
      remove2[type].forEach((name2) => {
        document.head.querySelector(`${type}[data-qmeta="${name2}"]`).remove();
      });
    });
    remove2.htmlAttr.filter(htmlFilter).forEach((name2) => {
      document.documentElement.removeAttribute(name2);
    });
    remove2.bodyAttr.filter(bodyFilter).forEach((name2) => {
      document.body.removeAttribute(name2);
    });
  }
  ;
  ["meta", "link", "script"].forEach((type) => {
    const metaType = add[type];
    for (const name2 in metaType) {
      const tag = document.createElement(type);
      for (const att in metaType[name2]) {
        if (att !== "innerHTML") {
          tag.setAttribute(att, metaType[name2][att]);
        }
      }
      tag.setAttribute("data-qmeta", name2);
      if (type === "script") {
        tag.innerHTML = metaType[name2].innerHTML || "";
      }
      document.head.appendChild(tag);
    }
  });
  Object.keys(add.htmlAttr).filter(htmlFilter).forEach((name2) => {
    document.documentElement.setAttribute(name2, add.htmlAttr[name2] || "");
  });
  Object.keys(add.bodyAttr).filter(bodyFilter).forEach((name2) => {
    document.body.setAttribute(name2, add.bodyAttr[name2] || "");
  });
}
function updateClientMeta() {
  updateId = null;
  const data = {
    title: "",
    titleTemplate: null,
    meta: {},
    link: {},
    script: {},
    htmlAttr: {},
    bodyAttr: {}
  };
  for (let i = 0; i < clientList.length; i++) {
    const { active, val } = clientList[i];
    if (active === true) {
      extend(true, data, val);
    }
  }
  normalize(data);
  apply2(diff(currentClientMeta, data));
  currentClientMeta = data;
}
function planClientUpdate() {
  updateId !== null && clearTimeout(updateId);
  updateId = setTimeout(updateClientMeta, 50);
}
var Meta_default = {
  install(opts) {
    if (false) {
      const { ssrContext } = opts;
      ssrContext.__qMetaList = [];
      ssrContext.onRendered(() => {
        injectServerMeta(ssrContext);
      });
    } else if (this.__installed !== true && isRuntimeSsrPreHydration.value === true) {
      currentClientMeta = window.__Q_META__;
      document.getElementById("qmeta-init").remove();
    }
  }
};
var uid3 = 0;
var defaults2 = {};
var groups = {};
var notificationsList = {};
var positionClass2 = {};
var emptyRE = /^\s*$/;
var notifRefs = [];
var invalidTimeoutValues = [void 0, null, true, false, ""];
var positionList = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "top",
  "bottom",
  "left",
  "right",
  "center"
];
var badgePositions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right"
];
var notifTypes = {
  positive: {
    icon: ($q) => $q.iconSet.type.positive,
    color: "positive"
  },
  negative: {
    icon: ($q) => $q.iconSet.type.negative,
    color: "negative"
  },
  warning: {
    icon: ($q) => $q.iconSet.type.warning,
    color: "warning",
    textColor: "dark"
  },
  info: {
    icon: ($q) => $q.iconSet.type.info,
    color: "info"
  },
  ongoing: {
    group: false,
    timeout: 0,
    spinner: true,
    color: "grey-8"
  }
};
function addNotification(config, $q, originalApi) {
  if (!config) {
    return logError("parameter required");
  }
  let Api;
  const notif = { textColor: "white" };
  if (config.ignoreDefaults !== true) {
    Object.assign(notif, defaults2);
  }
  if (isObject(config) === false) {
    if (notif.type) {
      Object.assign(notif, notifTypes[notif.type]);
    }
    config = { message: config };
  }
  Object.assign(notif, notifTypes[config.type || notif.type], config);
  if (typeof notif.icon === "function") {
    notif.icon = notif.icon($q);
  }
  if (!notif.spinner) {
    notif.spinner = false;
  } else {
    if (notif.spinner === true) {
      notif.spinner = QSpinner_default;
    }
    notif.spinner = markRaw(notif.spinner);
  }
  notif.meta = {
    hasMedia: Boolean(notif.spinner !== false || notif.icon || notif.avatar),
    hasText: hasContent(notif.message) || hasContent(notif.caption)
  };
  if (notif.position) {
    if (positionList.includes(notif.position) === false) {
      return logError("wrong position", config);
    }
  } else {
    notif.position = "bottom";
  }
  if (invalidTimeoutValues.includes(notif.timeout) === true) {
    notif.timeout = 5e3;
  } else {
    const t = Number(notif.timeout);
    if (isNaN(t) || t < 0) {
      return logError("wrong timeout", config);
    }
    notif.timeout = Number.isFinite(t) ? t : 0;
  }
  if (notif.timeout === 0) {
    notif.progress = false;
  } else if (notif.progress === true) {
    notif.meta.progressClass = "q-notification__progress" + (notif.progressClass ? ` ${notif.progressClass}` : "");
    notif.meta.progressStyle = {
      animationDuration: `${notif.timeout + 1e3}ms`
    };
  }
  const actions = (Array.isArray(config.actions) === true ? config.actions : []).concat(
    config.ignoreDefaults !== true && Array.isArray(defaults2.actions) === true ? defaults2.actions : []
  ).concat(
    notifTypes[config.type] !== void 0 && Array.isArray(notifTypes[config.type].actions) === true ? notifTypes[config.type].actions : []
  );
  const { closeBtn } = notif;
  closeBtn && actions.push({
    label: typeof closeBtn === "string" ? closeBtn : $q.lang.label.close
  });
  notif.actions = actions.map(({ handler, noDismiss, ...item }) => ({
    flat: true,
    ...item,
    onClick: typeof handler === "function" ? () => {
      handler();
      noDismiss !== true && dismiss();
    } : () => {
      dismiss();
    }
  }));
  if (notif.multiLine === void 0) {
    notif.multiLine = notif.actions.length > 1;
  }
  Object.assign(notif.meta, {
    class: `q-notification row items-stretch q-notification--${notif.multiLine === true ? "multi-line" : "standard"}` + (notif.color !== void 0 ? ` bg-${notif.color}` : "") + (notif.textColor !== void 0 ? ` text-${notif.textColor}` : "") + (notif.classes !== void 0 ? ` ${notif.classes}` : ""),
    wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (notif.multiLine === true ? "column no-wrap justify-center" : "row items-center"),
    contentClass: "q-notification__content row items-center" + (notif.multiLine === true ? "" : " col"),
    leftClass: notif.meta.hasText === true ? "additional" : "single",
    attrs: {
      role: "alert",
      ...notif.attrs
    }
  });
  if (notif.group === false) {
    notif.group = void 0;
    notif.meta.group = void 0;
  } else {
    if (notif.group === void 0 || notif.group === true) {
      notif.group = [
        notif.message,
        notif.caption,
        notif.multiline
      ].concat(
        notif.actions.map((props4) => `${props4.label}*${props4.icon}`)
      ).join("|");
    }
    notif.meta.group = notif.group + "|" + notif.position;
  }
  if (notif.actions.length === 0) {
    notif.actions = void 0;
  } else {
    notif.meta.actionsClass = "q-notification__actions row items-center " + (notif.multiLine === true ? "justify-end" : "col-auto") + (notif.meta.hasMedia === true ? " q-notification__actions--with-media" : "");
  }
  if (originalApi !== void 0) {
    if (originalApi.notif.meta.timer) {
      clearTimeout(originalApi.notif.meta.timer);
      originalApi.notif.meta.timer = void 0;
    }
    notif.meta.uid = originalApi.notif.meta.uid;
    const index = notificationsList[notif.position].value.indexOf(originalApi.notif);
    notificationsList[notif.position].value[index] = notif;
  } else {
    const original = groups[notif.meta.group];
    if (original === void 0) {
      notif.meta.uid = uid3++;
      notif.meta.badge = 1;
      if (["left", "right", "center"].indexOf(notif.position) !== -1) {
        notificationsList[notif.position].value.splice(
          Math.floor(notificationsList[notif.position].value.length / 2),
          0,
          notif
        );
      } else {
        const action = notif.position.indexOf("top") !== -1 ? "unshift" : "push";
        notificationsList[notif.position].value[action](notif);
      }
      if (notif.group !== void 0) {
        groups[notif.meta.group] = notif;
      }
    } else {
      if (original.meta.timer) {
        clearTimeout(original.meta.timer);
        original.meta.timer = void 0;
      }
      if (notif.badgePosition !== void 0) {
        if (badgePositions.includes(notif.badgePosition) === false) {
          return logError("wrong badgePosition", config);
        }
      } else {
        notif.badgePosition = `top-${notif.position.indexOf("left") !== -1 ? "right" : "left"}`;
      }
      notif.meta.uid = original.meta.uid;
      notif.meta.badge = original.meta.badge + 1;
      notif.meta.badgeClass = `q-notification__badge q-notification__badge--${notif.badgePosition}` + (notif.badgeColor !== void 0 ? ` bg-${notif.badgeColor}` : "") + (notif.badgeTextColor !== void 0 ? ` text-${notif.badgeTextColor}` : "") + (notif.badgeClass ? ` ${notif.badgeClass}` : "");
      const index = notificationsList[notif.position].value.indexOf(original);
      notificationsList[notif.position].value[index] = groups[notif.meta.group] = notif;
    }
  }
  const dismiss = () => {
    removeNotification(notif);
    Api = void 0;
  };
  if (notif.timeout > 0) {
    notif.meta.timer = setTimeout(() => {
      notif.meta.timer = void 0;
      dismiss();
    }, notif.timeout + /* show duration */
    1e3);
  }
  if (notif.group !== void 0) {
    return (props4) => {
      if (props4 !== void 0) {
        logError("trying to update a grouped one which is forbidden", config);
      } else {
        dismiss();
      }
    };
  }
  Api = {
    dismiss,
    config,
    notif
  };
  if (originalApi !== void 0) {
    Object.assign(originalApi, Api);
    return;
  }
  return (props4) => {
    if (Api !== void 0) {
      if (props4 === void 0) {
        Api.dismiss();
      } else {
        const newNotif = Object.assign({}, Api.config, props4, {
          group: false,
          position: notif.position
        });
        addNotification(newNotif, $q, Api);
      }
    }
  };
}
function removeNotification(notif) {
  if (notif.meta.timer) {
    clearTimeout(notif.meta.timer);
    notif.meta.timer = void 0;
  }
  const index = notificationsList[notif.position].value.indexOf(notif);
  if (index !== -1) {
    if (notif.group !== void 0) {
      delete groups[notif.meta.group];
    }
    const el = notifRefs["" + notif.meta.uid];
    if (el) {
      const { width: width3, height: height2 } = getComputedStyle(el);
      el.style.left = `${el.offsetLeft}px`;
      el.style.width = width3;
      el.style.height = height2;
    }
    notificationsList[notif.position].value.splice(index, 1);
    if (typeof notif.onDismiss === "function") {
      notif.onDismiss();
    }
  }
}
function hasContent(str) {
  return str !== void 0 && str !== null && emptyRE.test(str) !== true;
}
function logError(error, config) {
  console.error(`Notify: ${error}`, config);
  return false;
}
function getComponent() {
  return createComponent({
    name: "QNotifications",
    // hide App from Vue devtools
    devtools: { hide: true },
    setup() {
      return () => h("div", { class: "q-notifications" }, positionList.map((pos) => {
        return h(TransitionGroup, {
          key: pos,
          class: positionClass2[pos],
          tag: "div",
          name: `q-notification--${pos}`
        }, () => notificationsList[pos].value.map((notif) => {
          const meta = notif.meta;
          const mainChild = [];
          if (meta.hasMedia === true) {
            if (notif.spinner !== false) {
              mainChild.push(
                h(notif.spinner, {
                  class: "q-notification__spinner q-notification__spinner--" + meta.leftClass,
                  color: notif.spinnerColor,
                  size: notif.spinnerSize
                })
              );
            } else if (notif.icon) {
              mainChild.push(
                h(QIcon_default, {
                  class: "q-notification__icon q-notification__icon--" + meta.leftClass,
                  name: notif.icon,
                  color: notif.iconColor,
                  size: notif.iconSize,
                  role: "img"
                })
              );
            } else if (notif.avatar) {
              mainChild.push(
                h(QAvatar_default, {
                  class: "q-notification__avatar q-notification__avatar--" + meta.leftClass
                }, () => h("img", { src: notif.avatar, "aria-hidden": "true" }))
              );
            }
          }
          if (meta.hasText === true) {
            let msgChild;
            const msgData = { class: "q-notification__message col" };
            if (notif.html === true) {
              msgData.innerHTML = notif.caption ? `<div>${notif.message}</div><div class="q-notification__caption">${notif.caption}</div>` : notif.message;
            } else {
              const msgNode = [notif.message];
              msgChild = notif.caption ? [
                h("div", msgNode),
                h("div", { class: "q-notification__caption" }, [notif.caption])
              ] : msgNode;
            }
            mainChild.push(
              h("div", msgData, msgChild)
            );
          }
          const child = [
            h("div", { class: meta.contentClass }, mainChild)
          ];
          notif.progress === true && child.push(
            h("div", {
              key: `${meta.uid}|p|${meta.badge}`,
              class: meta.progressClass,
              style: meta.progressStyle
            })
          );
          notif.actions !== void 0 && child.push(
            h("div", {
              class: meta.actionsClass
            }, notif.actions.map((props4) => h(QBtn_default, props4)))
          );
          meta.badge > 1 && child.push(
            h("div", {
              key: `${meta.uid}|${meta.badge}`,
              class: notif.meta.badgeClass,
              style: notif.badgeStyle
            }, [meta.badge])
          );
          return h("div", {
            ref: (el) => {
              notifRefs["" + meta.uid] = el;
            },
            key: meta.uid,
            class: meta.class,
            ...meta.attrs
          }, [
            h("div", { class: meta.wrapperClass }, child)
          ]);
        }));
      }));
    }
  });
}
var Notify_default = {
  setDefaults(opts) {
    if (true) {
      isObject(opts) === true && Object.assign(defaults2, opts);
    }
  },
  registerType(typeName, typeOpts) {
    if (isObject(typeOpts) === true) {
      notifTypes[typeName] = typeOpts;
    }
  },
  install({ $q, parentApp }) {
    $q.notify = this.create = false ? noop : (opts) => addNotification(opts, $q);
    $q.notify.setDefaults = this.setDefaults;
    $q.notify.registerType = this.registerType;
    if ($q.config.notify !== void 0) {
      this.setDefaults($q.config.notify);
    }
    if (this.__installed !== true) {
      positionList.forEach((pos) => {
        notificationsList[pos] = ref([]);
        const vert = ["left", "center", "right"].includes(pos) === true ? "center" : pos.indexOf("top") !== -1 ? "top" : "bottom", align = pos.indexOf("left") !== -1 ? "start" : pos.indexOf("right") !== -1 ? "end" : "center", classes = ["left", "right"].includes(pos) ? `items-${pos === "left" ? "start" : "end"} justify-center` : pos === "center" ? "flex-center" : `items-${align}`;
        positionClass2[pos] = `q-notifications__list q-notifications__list--${vert} fixed column no-wrap ${classes}`;
      });
      const el = createGlobalNode("q-notify");
      createChildApp(getComponent(), parentApp).mount(el);
    }
  }
};
function encode2(value2) {
  if (isDate(value2) === true) {
    return "__q_date|" + value2.getTime();
  }
  if (isRegexp(value2) === true) {
    return "__q_expr|" + value2.source;
  }
  if (typeof value2 === "number") {
    return "__q_numb|" + value2;
  }
  if (typeof value2 === "boolean") {
    return "__q_bool|" + (value2 ? "1" : "0");
  }
  if (typeof value2 === "string") {
    return "__q_strn|" + value2;
  }
  if (typeof value2 === "function") {
    return "__q_strn|" + value2.toString();
  }
  if (value2 === Object(value2)) {
    return "__q_objt|" + JSON.stringify(value2);
  }
  return value2;
}
function decode2(value2) {
  const length = value2.length;
  if (length < 9) {
    return value2;
  }
  const type = value2.substring(0, 8);
  const source = value2.substring(9);
  switch (type) {
    case "__q_date":
      const number = Number(source);
      return new Date(Number.isNaN(number) === true ? source : number);
    case "__q_expr":
      return new RegExp(source);
    case "__q_numb":
      return Number(source);
    case "__q_bool":
      return Boolean(source === "1");
    case "__q_strn":
      return "" + source;
    case "__q_objt":
      return JSON.parse(source);
    default:
      return value2;
  }
}
function getEmptyStorage() {
  const getVal2 = () => null;
  return {
    has: () => false,
    // alias for hasItem; TODO: remove in Qv3
    hasItem: () => false,
    getLength: () => 0,
    getItem: getVal2,
    getIndex: getVal2,
    getKey: getVal2,
    getAll: () => {
    },
    getAllKeys: () => [],
    set: noop,
    // alias for setItem; TODO: remove in Qv3
    setItem: noop,
    remove: noop,
    // alias for removeItem; TODO: remove in Qv3
    removeItem: noop,
    clear: noop,
    isEmpty: () => true
  };
}
function getStorage(type) {
  const webStorage = window[type + "Storage"], get2 = (key) => {
    const item = webStorage.getItem(key);
    return item ? decode2(item) : null;
  };
  const hasItem = (key) => webStorage.getItem(key) !== null;
  const setItem = (key, value2) => {
    webStorage.setItem(key, encode2(value2));
  };
  const removeItem = (key) => {
    webStorage.removeItem(key);
  };
  return {
    has: hasItem,
    // TODO: remove in Qv3
    hasItem,
    getLength: () => webStorage.length,
    getItem: get2,
    getIndex: (index) => {
      return index < webStorage.length ? get2(webStorage.key(index)) : null;
    },
    getKey: (index) => {
      return index < webStorage.length ? webStorage.key(index) : null;
    },
    getAll: () => {
      let key;
      const result = {}, len = webStorage.length;
      for (let i = 0; i < len; i++) {
        key = webStorage.key(i);
        result[key] = get2(key);
      }
      return result;
    },
    getAllKeys: () => {
      const result = [], len = webStorage.length;
      for (let i = 0; i < len; i++) {
        result.push(webStorage.key(i));
      }
      return result;
    },
    set: setItem,
    // TODO: remove in Qv3
    setItem,
    remove: removeItem,
    // TODO: remove in Qv3
    removeItem,
    clear: () => {
      webStorage.clear();
    },
    isEmpty: () => webStorage.length === 0
  };
}
var storage = client.has.webStorage === false ? getEmptyStorage() : getStorage("local");
var Plugin9 = {
  install({ $q }) {
    $q.localStorage = storage;
  }
};
Object.assign(Plugin9, storage);
var LocalStorage_default = Plugin9;
var storage2 = client.has.webStorage === false ? getEmptyStorage() : getStorage("session");
var Plugin10 = {
  install({ $q }) {
    $q.sessionStorage = storage2;
  }
};
Object.assign(Plugin10, storage2);
var SessionStorage_default = Plugin10;
function useDialogPluginComponent() {
  const { emit, proxy } = getCurrentInstance();
  const dialogRef = ref(null);
  function show() {
    dialogRef.value.show();
  }
  function hide() {
    dialogRef.value.hide();
  }
  function onDialogOK(payload) {
    emit("ok", payload);
    hide();
  }
  function onDialogHide() {
    emit("hide");
  }
  Object.assign(proxy, { show, hide });
  return {
    dialogRef,
    onDialogHide,
    onDialogOK,
    onDialogCancel: hide
  };
}
var emits2 = ["ok", "hide"];
useDialogPluginComponent.emits = emits2;
useDialogPluginComponent.emitsObject = get_emits_object_default(emits2);
function use_meta_default(metaOptions) {
  if (false) {
    const ssrContext = useSSRContext();
    ssrContext.__qMetaList.push(
      typeof metaOptions === "function" ? metaOptions() : metaOptions
    );
  } else {
    const meta = { active: true };
    if (typeof metaOptions === "function") {
      const content = computed(metaOptions);
      meta.val = content.value;
      watch(content, (val) => {
        meta.val = val;
        meta.active === true && planClientUpdate();
      });
    } else {
      meta.val = metaOptions;
    }
    clientList.push(meta);
    planClientUpdate();
    onActivated(() => {
      meta.active = true;
      planClientUpdate();
    });
    onDeactivated(() => {
      meta.active = false;
      planClientUpdate();
    });
    onUnmounted(() => {
      clientList.splice(clientList.indexOf(meta), 1);
      planClientUpdate();
    });
  }
}
function useQuasar() {
  return inject(quasarKey);
}
function use_interval_default() {
  let timer2 = null;
  const vm2 = getCurrentInstance();
  function removeInterval() {
    if (timer2 !== null) {
      clearInterval(timer2);
      timer2 = null;
    }
  }
  onDeactivated(removeInterval);
  onBeforeUnmount(removeInterval);
  return {
    removeInterval,
    registerInterval(fn, delay) {
      removeInterval(timer2);
      if (vmIsDestroyed(vm2) === false) {
        timer2 = setInterval(fn, delay);
      }
    }
  };
}
function fallback(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.contentEditable = "true";
  area.style.position = "fixed";
  const fn = () => {
  };
  addFocusout(fn);
  document.body.appendChild(area);
  area.focus();
  area.select();
  const res = document.execCommand("copy");
  area.remove();
  removeFocusout(fn);
  return res;
}
function copy_to_clipboard_default(text) {
  return navigator.clipboard !== void 0 ? navigator.clipboard.writeText(text) : new Promise((resolve, reject) => {
    const res = fallback(text);
    if (res) {
      resolve(true);
    } else {
      reject(res);
    }
  });
}
var create_meta_mixin_default = (metaOptions) => {
  if (false) {
    return {
      created: typeof metaOptions === "function" ? function() {
        this.ssrContext.__qMetaList.push(
          metaOptions.call(this) || {}
        );
      } : function() {
        this.ssrContext.__qMetaList.push(metaOptions);
      }
    };
  }
  const mixin = {
    activated() {
      this.__qMeta.active = true;
      planClientUpdate();
    },
    deactivated() {
      this.__qMeta.active = false;
      planClientUpdate();
    },
    unmounted() {
      clientList.splice(clientList.indexOf(this.__qMeta), 1);
      planClientUpdate();
      this.__qMeta = void 0;
    }
  };
  if (typeof metaOptions === "function") {
    Object.assign(mixin, {
      computed: {
        __qMetaOptions() {
          return metaOptions.call(this) || {};
        }
      },
      watch: {
        __qMetaOptions(val) {
          this.__qMeta.val = val;
          this.__qMeta.active === true && planClientUpdate();
        }
      },
      created() {
        this.__qMeta = { active: true, val: this.__qMetaOptions };
        clientList.push(this.__qMeta);
        planClientUpdate();
      }
    });
  } else {
    mixin.created = function() {
      this.__qMeta = { active: true, val: metaOptions };
      clientList.push(this.__qMeta);
      planClientUpdate();
    };
  }
  return mixin;
};
var EventBus = class {
  constructor() {
    this.__stack = {};
  }
  on(name2, callback, ctx) {
    (this.__stack[name2] || (this.__stack[name2] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  }
  once(name2, callback, ctx) {
    const listener = (...args) => {
      this.off(name2, listener);
      callback.apply(ctx, args);
    };
    listener.__callback = callback;
    return this.on(name2, listener, ctx);
  }
  emit(name2) {
    const list = this.__stack[name2];
    if (list !== void 0) {
      const params = [].slice.call(arguments, 1);
      list.forEach((entry) => {
        entry.fn.apply(entry.ctx, params);
      });
    }
    return this;
  }
  off(name2, callback) {
    const list = this.__stack[name2];
    if (list === void 0) {
      return this;
    }
    if (callback === void 0) {
      delete this.__stack[name2];
      return this;
    }
    const liveEvents = list.filter(
      (entry) => entry.fn !== callback && entry.fn.__callback !== callback
    );
    if (liveEvents.length !== 0) {
      this.__stack[name2] = liveEvents;
    } else {
      delete this.__stack[name2];
    }
    return this;
  }
};
function clean(link) {
  setTimeout(() => {
    window.URL.revokeObjectURL(link.href);
  }, 1e4);
  link.remove();
}
function export_file_default(fileName, rawData, opts = {}) {
  const { mimeType, byteOrderMark, encoding } = typeof opts === "string" ? { mimeType: opts } : opts;
  const data = encoding !== void 0 ? new TextEncoder(encoding).encode([rawData]) : rawData;
  const blobData = byteOrderMark !== void 0 ? [byteOrderMark, data] : [data];
  const blob = new Blob(blobData, { type: mimeType || "application/octet-stream" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", fileName);
  if (typeof link.download === "undefined") {
    link.setAttribute("target", "_blank");
  }
  link.classList.add("hidden");
  link.style.position = "fixed";
  document.body.appendChild(link);
  try {
    link.click();
    clean(link);
    return true;
  } catch (err) {
    clean(link);
    return err;
  }
}
function parseFeatures(winFeatures) {
  const cfg = Object.assign({ noopener: true }, winFeatures);
  const feat = [];
  for (const key in cfg) {
    const value2 = cfg[key];
    if (value2 === true) {
      feat.push(key);
    } else if (isNumber(value2) || typeof value2 === "string" && value2 !== "") {
      feat.push(key + "=" + value2);
    }
  }
  return feat.join(",");
}
function openWindow(url, reject, windowFeatures) {
  let open2 = window.open;
  if (Platform_default.is.cordova === true) {
    if (cordova !== void 0 && cordova.InAppBrowser !== void 0 && cordova.InAppBrowser.open !== void 0) {
      open2 = cordova.InAppBrowser.open;
    } else if (navigator !== void 0 && navigator.app !== void 0) {
      return navigator.app.loadUrl(url, {
        openExternal: true
      });
    }
  }
  const win = open2(url, "_blank", parseFeatures(windowFeatures));
  if (win) {
    Platform_default.is.desktop && win.focus();
    return win;
  } else {
    reject && reject();
  }
}
var open_url_default = (url, reject, windowFeatures) => {
  if (Platform_default.is.ios === true && window.SafariViewController !== void 0) {
    window.SafariViewController.isAvailable((available) => {
      if (available) {
        window.SafariViewController.show(
          { url },
          noop,
          reject
        );
      } else {
        openWindow(url, reject, windowFeatures);
      }
    });
    return;
  }
  return openWindow(url, reject, windowFeatures);
};
function parsePromises(sequentialPromises) {
  const isList = Array.isArray(sequentialPromises);
  if (isList === true) {
    const totalJobs = sequentialPromises.length;
    return {
      isList,
      totalJobs,
      resultAggregator: Array(totalJobs).fill(null)
    };
  }
  const resultKeys = Object.keys(sequentialPromises);
  const resultAggregator = {};
  resultKeys.forEach((keyName) => {
    resultAggregator[keyName] = null;
  });
  return {
    isList,
    totalJobs: resultKeys.length,
    resultAggregator,
    resultKeys
  };
}
function runSequentialPromises(sequentialPromises, { threadsNumber = 1, abortOnFail = true } = {}) {
  let jobIndex = -1, hasAborted = false;
  const { isList, totalJobs, resultAggregator, resultKeys } = parsePromises(sequentialPromises);
  const getPromiseThread = () => new Promise((resolve, reject) => {
    function runNextPromise() {
      const currentJobIndex = ++jobIndex;
      if (hasAborted === true || currentJobIndex >= totalJobs) {
        resolve();
        return;
      }
      const key = isList === true ? currentJobIndex : resultKeys[currentJobIndex];
      sequentialPromises[key](resultAggregator).then((value2) => {
        if (hasAborted === true) {
          resolve();
          return;
        }
        resultAggregator[key] = { key, status: "fulfilled", value: value2 };
        setTimeout(runNextPromise);
      }).catch((reason) => {
        if (hasAborted === true) {
          resolve();
          return;
        }
        const result = { key, status: "rejected", reason };
        resultAggregator[key] = result;
        if (abortOnFail === true) {
          hasAborted = true;
          reject({ ...result, resultAggregator });
          return;
        }
        setTimeout(runNextPromise);
      });
    }
    runNextPromise();
  });
  const threads = Array(threadsNumber).fill(getPromiseThread());
  return Promise.all(threads).then(() => resultAggregator);
}
var Quasar = {
  version: "2.17.0",
  install: install_quasar_default,
  // TODO: remove in Qv3 (should only be used through the plugin)
  // We provide a deprecated fallback here
  lang: Lang_default,
  // TODO: remove in Qv3 (should only be used through the plugin)
  // We provide a deprecated fallback here
  iconSet: IconSet_default
};
export {
  AddressbarColor_default as AddressbarColor,
  AppFullscreen_default as AppFullscreen,
  AppVisibility_default as AppVisibility,
  BottomSheet_default as BottomSheet,
  ClosePopup_default as ClosePopup,
  Cookies_default as Cookies,
  Dark_default as Dark,
  Dialog_default as Dialog,
  EventBus,
  IconSet_default as IconSet,
  Intersection_default as Intersection,
  Lang_default as Lang,
  Loading_default as Loading,
  LoadingBar_default as LoadingBar,
  LocalStorage_default as LocalStorage,
  Meta_default as Meta,
  Morph_default as Morph,
  Mutation_default as Mutation,
  Notify_default as Notify,
  Platform_default as Platform,
  QAjaxBar_default as QAjaxBar,
  QAvatar_default as QAvatar,
  QBadge_default as QBadge,
  QBanner_default as QBanner,
  QBar_default as QBar,
  QBreadcrumbs_default as QBreadcrumbs,
  QBreadcrumbsEl_default as QBreadcrumbsEl,
  QBtn_default as QBtn,
  QBtnDropdown_default as QBtnDropdown,
  QBtnGroup_default as QBtnGroup,
  QBtnToggle_default as QBtnToggle,
  QCard_default as QCard,
  QCardActions_default as QCardActions,
  QCardSection_default as QCardSection,
  QCarousel_default as QCarousel,
  QCarouselControl_default as QCarouselControl,
  QCarouselSlide_default as QCarouselSlide,
  QChatMessage_default as QChatMessage,
  QCheckbox_default as QCheckbox,
  QChip_default as QChip,
  QCircularProgress_default as QCircularProgress,
  QColor_default as QColor,
  QDate_default as QDate,
  QDialog_default as QDialog,
  QDrawer_default as QDrawer,
  QEditor_default as QEditor,
  QExpansionItem_default as QExpansionItem,
  QFab_default as QFab,
  QFabAction_default as QFabAction,
  QField_default as QField,
  QFile_default as QFile,
  QFooter_default as QFooter,
  QForm_default as QForm,
  QFormChildMixin_default as QFormChildMixin,
  QHeader_default as QHeader,
  QIcon_default as QIcon,
  QImg_default as QImg,
  QInfiniteScroll_default as QInfiniteScroll,
  QInnerLoading_default as QInnerLoading,
  QInput_default as QInput,
  QIntersection_default as QIntersection,
  QItem_default as QItem,
  QItemLabel_default as QItemLabel,
  QItemSection_default as QItemSection,
  QKnob_default as QKnob,
  QLayout_default as QLayout,
  QLinearProgress_default as QLinearProgress,
  QList_default as QList,
  QMarkupTable_default as QMarkupTable,
  QMenu_default as QMenu,
  QNoSsr_default as QNoSsr,
  QOptionGroup_default as QOptionGroup,
  QPage_default as QPage,
  QPageContainer_default as QPageContainer,
  QPageScroller_default as QPageScroller,
  QPageSticky_default as QPageSticky,
  QPagination_default as QPagination,
  QParallax_default as QParallax,
  QPopupEdit_default as QPopupEdit,
  QPopupProxy_default as QPopupProxy,
  QPullToRefresh_default as QPullToRefresh,
  QRadio_default as QRadio,
  QRange_default as QRange,
  QRating_default as QRating,
  QResizeObserver_default as QResizeObserver,
  QResponsive_default as QResponsive,
  QRouteTab_default as QRouteTab,
  QScrollArea_default as QScrollArea,
  QScrollObserver_default as QScrollObserver,
  QSelect_default as QSelect,
  QSeparator_default as QSeparator,
  QSkeleton_default as QSkeleton,
  QSlideItem_default as QSlideItem,
  QSlideTransition_default as QSlideTransition,
  QSlider_default as QSlider,
  QSpace_default as QSpace,
  QSpinner_default as QSpinner,
  QSpinnerAudio_default as QSpinnerAudio,
  QSpinnerBall_default as QSpinnerBall,
  QSpinnerBars_default as QSpinnerBars,
  QSpinnerBox_default as QSpinnerBox,
  QSpinnerClock_default as QSpinnerClock,
  QSpinnerComment_default as QSpinnerComment,
  QSpinnerCube_default as QSpinnerCube,
  QSpinnerDots_default as QSpinnerDots,
  QSpinnerFacebook_default as QSpinnerFacebook,
  QSpinnerGears_default as QSpinnerGears,
  QSpinnerGrid_default as QSpinnerGrid,
  QSpinnerHearts_default as QSpinnerHearts,
  QSpinnerHourglass_default as QSpinnerHourglass,
  QSpinnerInfinity_default as QSpinnerInfinity,
  QSpinnerIos_default as QSpinnerIos,
  QSpinnerOrbit_default as QSpinnerOrbit,
  QSpinnerOval_default as QSpinnerOval,
  QSpinnerPie_default as QSpinnerPie,
  QSpinnerPuff_default as QSpinnerPuff,
  QSpinnerRadio_default as QSpinnerRadio,
  QSpinnerRings_default as QSpinnerRings,
  QSpinnerTail_default as QSpinnerTail,
  QSplitter_default as QSplitter,
  QStep_default as QStep,
  QStepper_default as QStepper,
  QStepperNavigation_default as QStepperNavigation,
  QTab_default as QTab,
  QTabPanel_default as QTabPanel,
  QTabPanels_default as QTabPanels,
  QTable_default as QTable,
  QTabs_default as QTabs,
  QTd_default as QTd,
  QTh_default as QTh,
  QTime_default as QTime,
  QTimeline_default as QTimeline,
  QTimelineEntry_default as QTimelineEntry,
  QToggle_default as QToggle,
  QToolbar_default as QToolbar,
  QToolbarTitle_default as QToolbarTitle,
  QTooltip_default as QTooltip,
  QTr_default as QTr,
  QTree_default as QTree,
  QUploader_default as QUploader,
  QUploaderAddTrigger_default as QUploaderAddTrigger,
  QVideo_default as QVideo,
  QVirtualScroll_default as QVirtualScroll,
  Quasar,
  Ripple_default as Ripple,
  Screen_default as Screen,
  Scroll_default as Scroll,
  ScrollFire_default as ScrollFire,
  SessionStorage_default as SessionStorage,
  TouchHold_default as TouchHold,
  TouchPan_default as TouchPan,
  TouchRepeat_default as TouchRepeat,
  TouchSwipe_default as TouchSwipe,
  cloneDeep as clone,
  colors_default as colors,
  copy_to_clipboard_default as copyToClipboard,
  create_meta_mixin_default as createMetaMixin,
  create_uploader_component_default as createUploaderComponent,
  date_default as date,
  debounce_default as debounce,
  dom_default as dom,
  event_default as event,
  export_file_default as exportFile,
  extend,
  format_default as format,
  frame_debounce_default as frameDebounce,
  getCssVar,
  is_default as is,
  morph,
  noop,
  open_url_default as openURL,
  patterns_default as patterns,
  runSequentialPromises,
  scroll_default as scroll,
  setCssVar,
  throttle_default as throttle,
  uid_default as uid,
  useDialogPluginComponent,
  use_form_child_default as useFormChild,
  use_hydration_default as useHydration,
  use_id_default as useId,
  use_interval_default as useInterval,
  use_meta_default as useMeta,
  useQuasar,
  use_render_cache_default as useRenderCache,
  use_split_attrs_default as useSplitAttrs,
  use_tick_default as useTick,
  use_timeout_default as useTimeout
};
/*! Bundled license information:

quasar/dist/quasar.client.js:
  (*!
   * Quasar Framework v2.17.0
   * (c) 2015-present Razvan Stoenescu
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=quasar.js.map
