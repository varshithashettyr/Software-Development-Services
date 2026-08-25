import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type KeyboardEvent,
} from "react";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
  CalendarDays,
  Mail,
  CalendarCheck,
  Plane,
  FileText,
  //Money,
  Activity,
  Award,
  Layers,
  RefreshCw,
  Network,
  MonitorCheck,
  UserCheck,
  TrendingUp,
  FileSignature,
  Vault,
  Workflow,
  StickyNote,
  GraduationCap,
  Target,
  Users,
  ClipboardCheck,
  Truck,
  Monitor,
  UsersRound,
  LockKeyhole,
  Bot,
  ShieldAlert,
  MessageSquare,
  Globe,
  Video,
  Share2,
   Accessibility,
  Boxes,
  Bug,
  Cloud,
  CloudCog,
  CloudUpload,
  Code2,
  Database,
  FileBarChart,
  FileCheck,
  GitBranch,
  ListChecks,
  Palette,
  PenTool,
  PlugZap,
  Rocket,
  ServerCog,
  TestTube,
  SearchCheck,
  Lightbulb,
  Map,
  UserCog,
  FolderOpen,
  LayoutTemplate,
  FileSpreadsheet,
  BarChart3,
  Megaphone,
  FlaskConical,
  GitMerge,
  MonitorCog,
  Scale,
  Gauge,
  Mic2,
  BadgeDollarSign,
  SpellCheck,
  BriefcaseBusiness,
  Presentation,
  X,
  ChevronRight,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import { serviceCategories } from "../../data/brickwork";

type SubKeyService = {
  name: string;
  href: string;
  icon: ElementType;
};

type KeyService = {
  name: string;
  href: string;
  subServices: SubKeyService[];
  color: string;
  icon: ElementType;
};

const LOGO_COLORS = {
  blue: "#0072CE",
  green: "#78BE20",
  orange: "#FF8200",
  pink: "#E00070",
};

function shuffleBrandColors(colors: string[]): string[] {
  const next = [...colors];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

function getActiveRingColor(angleDeg: number): string {
  const normalizedAngle = ((angleDeg % 360) + 360) % 360;

  // Painted ring quadrants (0° = right, clockwise, y-down):
  // Blue: top → right, Green: right → bottom,
  // Orange: bottom → left, Pink: left → top
  if (normalizedAngle >= 0 && normalizedAngle < 90) {
    return LOGO_COLORS.green;
  } else if (normalizedAngle >= 90 && normalizedAngle < 180) {
    return LOGO_COLORS.orange;
  } else if (normalizedAngle >= 180 && normalizedAngle < 270) {
    return LOGO_COLORS.pink;
  } else {
    return LOGO_COLORS.blue;
  }
}

function ITNetworkBackground() {
  const circuits = [
    "M0 105 H105 L150 150 H250", "M0 205 H75 L125 255 H220", "M0 390 H115 L165 340 H255", "M0 505 H95 L145 455 H235",
    "M820 105 H715 L670 150 H570", "M820 205 H745 L695 255 H600", "M820 390 H705 L655 340 H565", "M820 505 H725 L675 455 H585",
    "M90 0 V65 L145 120", "M245 0 V75 L300 130", "M575 0 V75 L520 130", "M730 0 V70 L675 125",
    "M90 610 V535 L145 480", "M245 610 V545 L300 490", "M575 610 V545 L520 490", "M730 610 V535 L675 480",
    "M0 300 H120 L170 250 H285", "M820 300 H700 L650 350 H535"
  ];
  const nodes = [
    [105,105,LOGO_COLORS.green],[150,150,LOGO_COLORS.green],[75,205,LOGO_COLORS.green],[125,255,LOGO_COLORS.blue],
    [115,390,LOGO_COLORS.green],[165,340,LOGO_COLORS.green],[95,505,LOGO_COLORS.green],[145,455,LOGO_COLORS.blue],
    [715,105,LOGO_COLORS.green],[670,150,LOGO_COLORS.green],[745,205,LOGO_COLORS.green],[695,255,LOGO_COLORS.blue],
    [705,390,LOGO_COLORS.green],[655,340,LOGO_COLORS.green],[725,505,LOGO_COLORS.green],[675,455,LOGO_COLORS.blue],
    [120,300,LOGO_COLORS.green],[700,300,LOGO_COLORS.green]
  ];
  const packets = [
    {path:circuits[0],color:LOGO_COLORS.green,duration:4.2,delay:0},
    {path:circuits[4],color:LOGO_COLORS.green,duration:4.8,delay:1},
    {path:circuits[2],color:LOGO_COLORS.green,duration:4.5,delay:1.8},
    {path:circuits[6],color:LOGO_COLORS.green,duration:5,delay:.7},
    {path:circuits[8],color:LOGO_COLORS.green,duration:3.8,delay:1.4},
    {path:circuits[15],color:LOGO_COLORS.green,duration:4.6,delay:2}
  ];
  const particles=Array.from({length:55},(_,i)=>({x:15+((i*137)%790),y:15+((i*83)%580),r:i%8===0?1.7:i%3===0?1.1:.7}));
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div className="absolute inset-0" style={{background:`radial-gradient(circle at 50% 48%,rgba(255,255,255,.98) 0%,rgba(236,247,241,.98) 32%,rgba(211,235,220,.98) 70%,rgba(188,219,199,1) 100%)`}} animate={{scale:[1,1.015,1]}} transition={{duration:18,repeat:Infinity,ease:"easeInOut"}} />
      <div className="absolute inset-0" style={{backgroundImage:`linear-gradient(rgba(55,112,74,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(55,112,74,.045) 1px,transparent 1px)`,backgroundSize:"44px 44px",maskImage:"radial-gradient(circle at center,#000 15%,rgba(0,0,0,.7) 58%,transparent 100%)",WebkitMaskImage:"radial-gradient(circle at center,#000 15%,rgba(0,0,0,.7) 58%,transparent 100%)"}} />
      <motion.div className="absolute -left-32 top-[-100px] h-[430px] w-[430px] rounded-full blur-3xl" style={{background:"rgba(120,190,32,.22)"}} animate={{x:[0,70,0],y:[0,40,0],scale:[1,1.12,1],opacity:[.45,.75,.45]}} transition={{duration:13,repeat:Infinity,ease:"easeInOut"}} />
      <motion.div className="absolute -right-32 bottom-[-150px] h-[480px] w-[480px] rounded-full blur-3xl" style={{background:"rgba(45,125,76,.18)"}} animate={{x:[0,-60,0],y:[0,-35,0],scale:[1,1.1,1],opacity:[.35,.7,.35]}} transition={{duration:15,repeat:Infinity,ease:"easeInOut"}} />
      <motion.div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{background:"radial-gradient(circle,rgba(120,190,32,.18),transparent 70%)"}} animate={{scale:[.9,1.08,.9],opacity:[.35,.65,.35]}} transition={{duration:10,repeat:Infinity,ease:"easeInOut"}} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 820 610" preserveAspectRatio="none" fill="none">
        <defs>
          <filter id="green-node-glow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="green-packet-glow" x="-300%" y="-300%" width="700%" height="700%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="green-signal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#78BE20" stopOpacity="0"/><stop offset=".45" stopColor="#A7E45C" stopOpacity=".8"/><stop offset=".5" stopColor="#fff"/><stop offset=".55" stopColor="#A7E45C" stopOpacity=".8"/><stop offset="1" stopColor="#78BE20" stopOpacity="0"/></linearGradient>
        </defs>
        {circuits.map((path,i)=><motion.path key={i} d={path} stroke={i%4===0?"#78BE20":"#4C9460"} strokeWidth={i%5===0?1.5:1} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 12" opacity=".35" animate={{strokeDashoffset:[0,-90],opacity:[.16,.5,.16]}} transition={{duration:4+i%4,repeat:Infinity,ease:"linear",delay:i*.12}} />)}
        {packets.map((p,i)=><motion.path key={`packet-${i}`} d={p.path} stroke={p.color} strokeWidth="3" strokeLinecap="round" strokeDasharray="2 100" opacity=".9" filter="url(#green-packet-glow)" animate={{strokeDashoffset:[0,-220]}} transition={{duration:p.duration,delay:p.delay,repeat:Infinity,ease:"linear"}} />)}
        {nodes.map(([x,y,color],i)=><g key={`node-${i}`}><motion.circle cx={x} cy={y} r="10" fill={color} opacity=".12" filter="url(#green-node-glow)" animate={{r:[6,14,6],opacity:[.05,.28,.05]}} transition={{duration:2.5+i%4*.4,delay:i*.12,repeat:Infinity,ease:"easeInOut"}}/><motion.circle cx={x} cy={y} r="3" fill={color} filter="url(#green-node-glow)" animate={{r:[2,5,2],opacity:[.35,1,.35]}} transition={{duration:2+i%3*.4,delay:i*.1,repeat:Infinity,ease:"easeInOut"}}/><circle cx={x} cy={y} r="1.1" fill="#fff" opacity=".9"/></g>)}
        <motion.circle cx="410" cy="305" r="145" fill="none" stroke="#78BE20" strokeWidth="1" strokeDasharray="2 18" opacity=".18" animate={{rotate:360}} style={{transformOrigin:"410px 305px"}} transition={{duration:26,repeat:Infinity,ease:"linear"}} />
        <motion.circle cx="410" cy="305" r="185" fill="none" stroke="#4C9460" strokeWidth="1" strokeDasharray="3 22" opacity=".14" animate={{rotate:-360}} style={{transformOrigin:"410px 305px"}} transition={{duration:34,repeat:Infinity,ease:"linear"}} />
        <motion.circle cx="410" cy="305" r="225" fill="none" stroke="#78BE20" strokeWidth="1" strokeDasharray="1 30" opacity=".09" animate={{rotate:360}} style={{transformOrigin:"410px 305px"}} transition={{duration:42,repeat:Infinity,ease:"linear"}} />
        <motion.path d="M0 155 H150 L205 210 H360" stroke="url(#green-signal)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 105" animate={{strokeDashoffset:[0,-210]}} transition={{duration:4,repeat:Infinity,ease:"linear"}} />
        <motion.path d="M820 390 H700 L645 335 H500" stroke="url(#green-signal)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 105" animate={{strokeDashoffset:[0,-210]}} transition={{duration:4.5,repeat:Infinity,ease:"linear"}} />
        {particles.map((p,i)=><motion.circle key={`particle-${i}`} cx={p.x} cy={p.y} r={p.r} fill={i%4===0?"#78BE20":i%4===1?"#4C9460":"#fff"} animate={{opacity:[.05,.45,.05],y:[p.y,p.y-7,p.y],scale:[.7,1.3,.7]}} transition={{duration:3+i%5*.7,delay:i*.08,repeat:Infinity,ease:"easeInOut"}} />)}
        {[110,275,680,750,90,250,640,735].map((x,i)=>{const y=[120,95,105,215,390,450,410,470][i];const s=[15,12,17,11,14,11,15,12][i];const pts=Array.from({length:6},(_,j)=>{const a=Math.PI/3*j;return `${x+Math.cos(a)*s},${y+Math.sin(a)*s}`}).join(" ");return <motion.polygon key={`hex-${i}`} points={pts} fill="none" stroke="#78BE20" strokeWidth="1" strokeDasharray="3 6" opacity=".22" animate={{rotate:[0,i%2? -360:360],opacity:[.08,.3,.08]}} style={{transformOrigin:`${x}px ${y}px`}} transition={{rotate:{duration:24+i*2,repeat:Infinity,ease:"linear"},opacity:{duration:4,repeat:Infinity,ease:"easeInOut"}}}/>})}
      </svg>
      <svg className="absolute bottom-0 left-0 h-[28%] w-full" viewBox="0 0 820 190" preserveAspectRatio="none" fill="none">
        <defs><linearGradient id="green-wave" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#4C9460" stopOpacity=".08"/><stop offset=".45" stopColor="#78BE20" stopOpacity=".5"/><stop offset="1" stopColor="#78BE20" stopOpacity=".7"/></linearGradient></defs>
        {Array.from({length:14},(_,i)=>{const pts=[];for(let x=0;x<=820;x+=20){const n=x/820;const y=112+i*3+Math.sin(n*Math.PI*2+i*.14)*22+Math.sin(n*Math.PI*5+i*.1)*7;pts.push(`${x},${y.toFixed(1)}`)}return <motion.path key={i} d={`M ${pts.join(" L ")}`} stroke="url(#green-wave)" strokeWidth={i%4===0?1.5:.7} opacity={.18+i*.025} strokeDasharray="1 8" animate={{strokeDashoffset:[0,i%2?-120:120]}} transition={{duration:5+i*.3,repeat:Infinity,ease:"linear"}}/>})}
        <motion.path d="M0 118 C100 70 175 82 255 120 C340 162 410 165 485 116 C575 60 670 72 820 112" stroke="#78BE20" strokeWidth="2" opacity=".38" strokeDasharray="2 75" animate={{strokeDashoffset:[0,-820]}} transition={{duration:8,repeat:Infinity,ease:"linear"}} />
      </svg>
      <motion.div className="absolute left-[-25%] top-[28%] h-px w-[22%] rotate-[10deg]" style={{background:"linear-gradient(90deg,transparent,rgba(180,240,110,.95),transparent)",boxShadow:"0 0 16px rgba(120,190,32,.7)"}} animate={{x:["0%","620%"],opacity:[0,1,0]}} transition={{duration:9,repeat:Infinity,repeatDelay:2,ease:"easeInOut"}} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(20,65,40,.08)_100%)]" />
    </div>
  );
}

export function ServicesExplorer() {
  // const executiveAdmin = serviceCategories.find(
  //   (service) =>
  //     service.title.trim().toLowerCase() === "executive admin services"
  // );

  const baseKeyServices: KeyService[] = [
  {
    name: "UI and UX Design",
    href: "https://www.brickworkindia.com/software-development/ui-ux-design",
    color: LOGO_COLORS.green,
    icon: Palette,
    subServices: [
      ["User Experience (UX) Research", SearchCheck],
      ["Wireframing and Interaction Design", PenTool],
      ["Usability Testing and Optimization", Gauge],
      ["Accessibility-Compliant UX Design", Accessibility],
    ].map(([name, icon]) => ({
      name: name as string,
      href: "https://www.brickworkindia.com/software-development/ui-ux-design",
      icon: icon as ElementType,
    })),
  },

  {
    name: "Application Development",
    href: "https://www.brickworkindia.com/software-development/app-development",
    color: LOGO_COLORS.green,
    icon: Code2,
    subServices: [
      ["API Integration Services", PlugZap],
      ["SaaS and Cloud Application Integration", CloudCog],
      ["Third-Party System Integration", GitMerge],
      ["Data Integration and Synchronization", Database],
      ["Integration Testing and Validation", ClipboardCheck],
    ].map(([name, icon]) => ({
      name: name as string,
      href: "https://www.brickworkindia.com/software-development/app-development",
      icon: icon as ElementType,
    })),
  },

  {
    name: "Cloud Application Development",
    href: "https://www.brickworkindia.com/software-development/cloud-application-development",
    color: LOGO_COLORS.green,
    icon: Cloud,
    subServices: [
      ["Cloud-Native Application Development", CloudCog],
      ["Microservices Architecture Development", Boxes],
      ["Cloud Migration Services", CloudUpload],
    ].map(([name, icon]) => ({
      name: name as string,
      href: "https://www.brickworkindia.com/software-development/cloud-application-development",
      icon: icon as ElementType,
    })),
  },

  {
    name: "DevOps and CI/CD Enablement",
    href: "https://www.brickworkindia.com/software-development/devops-ci-cd",
    color: LOGO_COLORS.green,
    icon: GitBranch,
    subServices: [
      ["CI/CD Pipeline Implementation", Workflow],
      ["DevOps Automation and Tooling", Bot],
      ["Infrastructure as Code", ServerCog],
      ["Cloud Monitoring and Observability", MonitorCheck],
      ["Continuous Deployment Optimization", Rocket],
    ].map(([name, icon]) => ({
      name: name as string,
      href: "https://www.brickworkindia.com/software-development/devops-ci-cd",
      icon: icon as ElementType,
    })),
  },

  {
    name: "User Acceptance Services",
    href: "https://www.brickworkindia.com/software-development/user-acceptance",
    color: LOGO_COLORS.green,
    icon: UserCheck,
    subServices: [
      ["Test Planning and Strategy", ClipboardCheck],
      ["Test Scenario Design", FileCheck],
      ["Test Execution Coordination", ListChecks],
      ["Defect Tracking and Resolution", Bug],
      ["Go-Live Readiness Assessment", Rocket],
      ["Release Validation and Documentation", FileText],
    ].map(([name, icon]) => ({
      name: name as string,
      href: "https://www.brickworkindia.com/software-development/user-acceptance",
      icon: icon as ElementType,
    })),
  },

  {
    name: "Quality Assurance and User Validation",
    href: "https://www.brickworkindia.com/software-development/quality-assurance-qa-testing",
    color: LOGO_COLORS.green,
    icon: ShieldCheck,
    subServices: [
      ["Manual and Automated QA Testing", TestTube],
      ["Functional and Regression Testing", ClipboardCheck],
      ["API and Integration Testing", PlugZap],
      ["Performance and Load Testing", Gauge],
      ["Defect Tracking and QA Reporting", FileBarChart],
    ].map(([name, icon]) => ({
      name: name as string,
      href: "https://www.brickworkindia.com/software-development/quality-assurance-qa-testing",
      icon: icon as ElementType,
    })),
  },
];

  // const shuffledPalette = shuffleBrandColors(
  //   Object.values(LOGO_COLORS)
  // );

  // const keyServices: KeyService[] = baseKeyServices.map(
  //   (service, index) => ({
  //     ...service,
  //     color: shuffledPalette[index % shuffledPalette.length],
  //   })
  // );

  const palette = Object.values(LOGO_COLORS);

const keyServices: KeyService[] = baseKeyServices.map(
  (service, index) => ({
    ...service,
    color: palette[index % palette.length],
  })
);

  const [activeService, setActiveService] = useState<string | null>(null);
  const [isHoveredOver, setIsHoveredOver] = useState(false);
  const [stageViewportWidth, setStageViewportWidth] = useState(2000);
  const stageViewportRef = useRef<HTMLDivElement>(null);
  const suppressLeaveRef = useRef(false);

  const selectedService =
    keyServices.find((service) => service.name === activeService) ?? null;

  const openService = (
    serviceName: string,
    pillEl?: HTMLElement | null
  ) => {
    setActiveService(serviceName);
    setIsHoveredOver(true);

    if (!pillEl) return;

    const pillRect = pillEl.getBoundingClientRect();
    const viewportH = window.innerHeight;

    if (pillRect.top > viewportH * 0.5) {
      const section = document.getElementById("services");
      if (!section) return;

      suppressLeaveRef.current = true;
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.setTimeout(() => {
        suppressLeaveRef.current = false;
      }, 900);
    }
  };

  const closeAllServices = () => {
    if (suppressLeaveRef.current) return;
    setActiveService(null);
    setIsHoveredOver(false);
  };

  const handleKeyDown = (
    e: KeyboardEvent,
    serviceName: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openService(
        serviceName,
        e.currentTarget as HTMLElement
      );
    }
  };

  const orbitRotation = useMotionValue(0);

  const counterRotation = useTransform(
    orbitRotation,
    (value) => -value
  );

  const animControls =
    useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    animControls.current = animate(
      orbitRotation,
      360,
      {
        duration: 75,
        repeat: Infinity,
        ease: "linear",
      }
    );

    return () => {
      animControls.current?.stop();
    };
  }, [orbitRotation]);

  useEffect(() => {
    if (isHoveredOver) {
      animControls.current?.pause();
    } else {
      animControls.current?.play();
    }
  }, [isHoveredOver]);

  useEffect(() => {
    const el = stageViewportRef.current;
    if (!el) return;

    const updateWidth = () => {
      setStageViewportWidth(el.getBoundingClientRect().width);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // if (!executiveAdmin) {
  //   return null;
  // }

  /*
   * =========================================================
   * DESKTOP GEOMETRY
   * =========================================================
   */

  const STAGE_SIZE = 820;
  const CENTER_XY = STAGE_SIZE / 2;
  const ORBIT_RADIUS = 315;
  const CENTER_RADIUS = 100;

  const CARD_WIDTH = 222;
  const CARD_HEIGHT = 64;
  const HUB_VISUAL_SPAN = (ORBIT_RADIUS * 2 + CARD_WIDTH) * 1.1;
  const fitScale =
    stageViewportWidth < 40
      ? 1
      : Math.min(
          1,
          Math.max(0.58, stageViewportWidth / HUB_VISUAL_SPAN)
        );

  const servicePositions = keyServices.map((_, index) => {
    const angle =
      -90 + index * (360 / keyServices.length);

    const radians = (angle * Math.PI) / 180;

    return {
      x:
        CENTER_XY +
        ORBIT_RADIUS * Math.cos(radians),

      y:
        CENTER_XY +
        ORBIT_RADIUS * Math.sin(radians),

      angle,
      radians,
    };
  });

  /*
   * =========================================================
   * MOBILE GEOMETRY
   *
   * IMPORTANT:
   * ONLY MOBILE VALUES ARE REDUCED.
   * Desktop values above are untouched.
   * =========================================================
   */

  const MOBILE_STAGE_WIDTH = 430;
  const MOBILE_STAGE_HEIGHT = 430;

  const MOBILE_CENTER_X =
    MOBILE_STAGE_WIDTH / 2;

  const MOBILE_CENTER_Y =
    MOBILE_STAGE_HEIGHT / 2;

  /*
   * Smaller ellipse so all 7 cards remain
   * comfortably inside the mobile viewport.
   */
  const MOBILE_ORBIT_X = 132;
  const MOBILE_ORBIT_Y = 118;

  /*
   * Smaller fixed center.
   * The center itself NEVER rotates.
   */
  const MOBILE_CENTER_SIZE = 76;

  /*
   * Smaller cards prevent adjacent cards
   * from touching/overlapping during rotation.
   */
  const MOBILE_CARD_WIDTH = 92;
  const MOBILE_CARD_HEIGHT = 34;

  const mobileServicePositions = keyServices.map(
    (_, index) => {
      const angle =
        -90 + index * (360 / keyServices.length);

      const radians =
        (angle * Math.PI) / 180;

      return {
        x:
          MOBILE_CENTER_X +
          MOBILE_ORBIT_X * Math.cos(radians),

        y:
          MOBILE_CENTER_Y +
          MOBILE_ORBIT_Y * Math.sin(radians),

        angle,
        radians,
      };
    }
  );

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-slate-950
        pt-6
        pb-2
        sm:pt-6
        sm:pb-0
        lg:pt-6
        lg:pb-4
        text-white
      "
    >
      <style>{`
        @keyframes pulseFlow {
          0% {
            stroke-dashoffset: 24;
          }

          100% {
            stroke-dashoffset: 0;
          }
        }

        .animate-spoke-flow {
          animation:
            pulseFlow
            1.2s
            linear
            infinite;
        }

        @media (max-width: 1023px) {
          .mobile-service-scroll {
            scrollbar-width: thin;
            scrollbar-color: rgba(148,163,184,.55) rgba(15,23,42,.45);
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
          }

          .mobile-service-scroll::-webkit-scrollbar {
            width: 5px;
          }

          .mobile-service-scroll::-webkit-scrollbar-track {
            background: rgba(15,23,42,.45);
            border-radius: 999px;
          }

          .mobile-service-scroll::-webkit-scrollbar-thumb {
            background: rgba(148,163,184,.55);
            border-radius: 999px;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="
              mt-2
              text-balance
              text-2xl
              font-black
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Software Development 
          </h2>
        </div>

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div className="mx-auto mt-3 w-full sm:mt-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              bg-slate-950
              shadow-2xl
              backdrop-blur-2xl
              sm:rounded-[2.5rem]
            "
            onMouseLeave={closeAllServices}
          >

            {/* BRAND TOP BAR */}

            <div
              className="
                absolute
                inset-x-0
                top-0
                z-[100]
                h-[3px]
              "
              style={{
                background:
                  `linear-gradient(
                    90deg,
                    ${LOGO_COLORS.blue},
                    ${LOGO_COLORS.green},
                    ${LOGO_COLORS.orange},
                    ${LOGO_COLORS.pink}
                  )`,
              }}
            />

            {/* =================================================
                DESKTOP VERSION
            ================================================== */}

            <div
              className="
                relative
                hidden
                min-h-[500px]
                items-stretch
                overflow-hidden
                lg:flex
              "
            >

              <ITNetworkBackground />

              {/* DESKTOP STAGE */}

              <div
                ref={stageViewportRef}
                className="
                  relative
                  z-20
                  flex
                  min-h-0
                  min-w-0
                  flex-1
                  items-center
                  justify-center
                  overflow-hidden
                  bg-transparent
                "
              >
              <motion.div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                "
                style={{
                  width: `${STAGE_SIZE}px`,
                  height: `${STAGE_SIZE}px`,
                  transformOrigin: "center center",
                }}
                animate={{
                  scale: fitScale,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* ROTATING ORBIT */}

                <motion.div
                  className="absolute inset-0"
                  style={{
                    rotate: orbitRotation,
                    transformOrigin:
                      "50% 50%",
                  }}
                >

                  {/* CONNECTOR SVG */}

                  <svg
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      h-full
                      w-full
                      overflow-visible
                    "
                    viewBox={`0 0 ${STAGE_SIZE} ${STAGE_SIZE}`}
                    fill="none"
                  >

                    <defs>
                      {servicePositions.map(
                        (_, index) => (
                          <filter
                            id={`glow-spoke-${index}`}
                            key={`filter-${index}`}
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                          >
                            <feGaussianBlur
                              stdDeviation="3"
                              result="blur"
                            />

                            <feComposite
                              in="SourceGraphic"
                              in2="blur"
                              operator="over"
                            />
                          </filter>
                        )
                      )}
                    </defs>

                    {servicePositions.map(
                      (position, index) => {
                        const service =
                          keyServices[index];

                        const isHovered =
                          activeService ===
                          service.name;

                        const activeSliceColor =
                          isHovered
                            ? service.color
                            : getActiveRingColor(
                                position.angle
                              );

                        const startX =
                          CENTER_XY +
                          CENTER_RADIUS *
                            Math.cos(
                              position.radians
                            );

                        const startY =
                          CENTER_XY +
                          CENTER_RADIUS *
                            Math.sin(
                              position.radians
                            );

                        return (
                          <g
                            key={`spoke-${index}`}
                          >

                            <line
                              x1={startX}
                              y1={startY}
                              x2={position.x}
                              y2={position.y}
                              stroke={
                                service.color
                              }
                              strokeWidth={
                                isHovered
                                  ? "2.5"
                                  : "1.2"
                              }
                              opacity={
                                isHovered
                                  ? 0.9
                                  : 0.3
                              }
                              className="
                                transition-all
                                duration-300
                              "
                            />

                            <line
                              x1={startX}
                              y1={startY}
                              x2={position.x}
                              y2={position.y}
                              stroke={
                                service.color
                              }
                              strokeWidth={
                                isHovered
                                  ? "4"
                                  : "2"
                              }
                              strokeDasharray="6 12"
                              strokeLinecap="round"
                              opacity={
                                isHovered
                                  ? 1
                                  : 0.75
                              }
                              filter={
                                isHovered
                                  ? `url(#glow-spoke-${index})`
                                  : undefined
                              }
                              className="
                                animate-spoke-flow
                                transition-all
                                duration-300
                              "
                            />

                            {isHovered && (
                              <circle
                                cx={
                                  (startX +
                                    position.x) /
                                  2
                                }
                                cy={
                                  (startY +
                                    position.y) /
                                  2
                                }
                                r="4"
                                fill="#FFFFFF"
                                filter={`url(#glow-spoke-${index})`}
                              />
                            )}

                          </g>
                        );
                      }
                    )}

                  </svg>

                  {/* DESKTOP KEY SERVICE CARDS */}

                  {keyServices.map(
                    (service, index) => {
                      const position =
                        servicePositions[index];

                      const isActive =
                        activeService ===
                        service.name;

                      const nodeRingColor =
                        service.color;

                      const ServiceIcon =
                        service.icon;

                      return (
                        <div
                          key={service.name}
                          className="
                            absolute
                            z-30
                          "
                          style={{
                            left:
                              `${position.x -
                                CARD_WIDTH / 2}px`,
                            top:
                              `${position.y -
                                CARD_HEIGHT / 2}px`,
                            width:
                              `${CARD_WIDTH}px`,
                            height:
                              `${CARD_HEIGHT}px`,
                          }}
                        >

                          <motion.div
                            className="
                              h-full
                              w-full
                            "
                            style={{
                              rotate:
                                counterRotation,
                              transformOrigin:
                                "50% 50%",
                            }}
                          >

                            <a
                              href={service.href}
                              target="_blank"
                              rel="noreferrer"

                              // onClick={(e) => {
                              //   e.preventDefault();
                              //   openService(
                              //     service.name,
                              //     e.currentTarget
                              //   );
                              // }}

                              onMouseEnter={(e) =>
                                openService(
                                  service.name,
                                  e.currentTarget
                                )
                              }

                              onFocus={(e) =>
                                openService(
                                  service.name,
                                  e.currentTarget
                                )
                              }

                              onKeyDown={(e) =>
                                handleKeyDown(
                                  e,
                                  service.name
                                )
                              }

                              tabIndex={0}
                              aria-expanded={
                                isActive
                              }

                              className="
                                group
                                relative
                                flex
                                h-full
                                w-full
                                items-center
                                justify-between
                                rounded-full
                                border
                                bg-slate-900/90
                                pl-2
                                pr-4
                                shadow-xl
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:bg-slate-900
                                focus:outline-none
                                focus:ring-2
                                focus:ring-blue-500
                              "

                              style={{
                                borderColor:
                                  isActive
                                    ? service.color
                                    : "rgba(71,85,105,.6)",

                                boxShadow:
                                  isActive
                                    ? `0 0 32px -2px ${service.color}B0,
                                       0 0 12px 0 ${service.color}60`
                                    : `0 8px 20px -6px rgba(0,0,0,.6)`,
                              }}
                            >

                              <div
                                className="
                                  flex
                                  size-11
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  text-white
                                  shadow-md
                                  transition-transform
                                  duration-300
                                  group-hover:scale-110
                                "
                                style={{
                                  backgroundColor:
                                    nodeRingColor,
                                }}
                              >
                                <ServiceIcon
                                  className="size-5"
                                  strokeWidth={2.2}
                                />
                              </div>

                              <div
                                className="
                                  flex
                                  flex-1
                                  items-center
                                  justify-start
                                  pl-3
                                "
                              >
                                <span
                                  className="
                                    text-sm
                                    font-bold
                                    leading-tight
                                    text-slate-100
                                    transition-colors
                                    duration-200
                                    group-hover:text-white
                                  "
                                >
                                  {service.name}
                                </span>
                              </div>

                              <ChevronRight
                                className="
                                  size-4
                                  shrink-0
                                  text-slate-500
                                  transition-all
                                  duration-300
                                  group-hover:translate-x-1
                                  group-hover:text-white
                                "
                              />

                            </a>

                          </motion.div>
                        </div>
                      );
                    }
                  )}

                </motion.div>

                {/* =================================================
                    FIXED CENTER HUB
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    z-10
                    flex
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                    justify-center
                  "
                >

                  <div
                    className="
                      relative
                      flex
                      size-[220px]
                      items-center
                      justify-center
                    "
                  >

                    <motion.svg
                      className="
                        absolute
                        inset-0
                        size-full
                        overflow-visible
                      "
                      viewBox="0 0 200 200"
                      fill="none"
                      style={{
                        rotate:
                          orbitRotation,
                        transformOrigin:
                          "50% 50%",
                      }}
                    >
                      <path
                        d="M 100,10 A 90,90 0 0,1 190,100 L 165,100 A 65,65 0 0,0 100,35 Z"
                        fill={
                          LOGO_COLORS.blue
                        }
                      />

                      <path
                        d="M 190,100 A 90,90 0 0,1 100,190 L 100,165 A 65,65 0 0,0 165,100 Z"
                        fill={
                          LOGO_COLORS.green
                        }
                      />

                      <path
                        d="M 100,190 A 90,90 0 0,1 10,100 L 35,100 A 65,65 0 0,0 100,165 Z"
                        fill={
                          LOGO_COLORS.orange
                        }
                      />

                      <path
                        d="M 10,100 A 90,90 0 0,1 100,10 L 100,35 A 65,65 0 0,0 35,100 Z"
                        fill={
                          LOGO_COLORS.pink
                        }
                      />
                    </motion.svg>

                    {/* CENTER ITSELF DOES NOT ROTATE */}

                    <a
                      href="https://www.brickworkindia.com/services/software-development"
                      target="_blank"
                      rel="noreferrer"
                      title="Global Business Support Services & Business Process Outsourcing | Brickwork"
                      className="
                        pointer-events-auto
                        group
                        relative
                        flex
                        size-[132px]
                        overflow-hidden
                        flex-col
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-500/40
                        bg-slate-950/90
                        p-4
                        text-center
                        shadow-[0_0_25px_rgba(0,114,206,0.25)]
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:border-blue-400
                        hover:shadow-[0_0_35px_rgba(0,114,206,0.6)]
                      "
                    >

                      <motion.svg
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          size-full
                          opacity-40
                          transition-opacity
                          group-hover:opacity-75
                        "
                        viewBox="0 0 100 100"
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          stroke="rgba(59,130,246,.3)"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          fill="none"
                        />

                        <circle
                          cx="50"
                          cy="50"
                          r="32"
                          stroke="rgba(224,0,112,.2)"
                          strokeWidth="1"
                          strokeDasharray="6 4"
                          fill="none"
                        />

                        <circle
                          cx="50"
                          cy="50"
                          r="4"
                          fill="#0072CE"
                        />

                        <circle
                          cx="82"
                          cy="50"
                          r="2.5"
                          fill="#78BE20"
                        />

                        <circle
                          cx="50"
                          cy="18"
                          r="2.5"
                          fill="#FF8200"
                        />

                        <circle
                          cx="18"
                          cy="50"
                          r="2.5"
                          fill="#E00070"
                        />
                      </motion.svg>

                      <div
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-gradient-to-tr
                          from-blue-600/20
                          via-transparent
                          to-pink-600/20
                          opacity-30
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                      />

                      <span
                        className="
                          relative
                          z-10
                          text-sm
                          font-black
                          leading-tight
                          text-white
                          transition-colors
                          duration-200
                          group-hover:text-blue-200
                        "
                      >
                        Software Development
                      </span>

                    </a>
                  </div>
                </div>

              </motion.div>
              </div>

              {/* =================================================
                  DESKTOP RIGHT DRAWER
              ================================================== */}

              <AnimatePresence>
                {selectedService && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 80,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 80,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="
                      relative
                      z-40
                      flex
                      w-[min(400px,38%)]
                      min-w-[320px]
                      max-w-[400px]
                      shrink-0
                      flex-col
                      self-stretch
                      border-l
                      border-slate-700/80
                      bg-slate-900/90
                      p-7
                      text-white
                      shadow-2xl
                      backdrop-blur-2xl
                    "
                  >

                    {/* DRAWER HEADER */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-700/80
                        pb-6
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >

                        <span
                          className="
                            flex
                            size-12
                            items-center
                            justify-center
                            rounded-2xl
                            text-white
                            shadow-xl
                            ring-2
                            ring-white/20
                          "
                          style={{
                            background:
                              selectedService.color,
                          }}
                        >
                          <selectedService.icon
                            className="size-6"
                          />
                        </span>

                        <div>
                          <h3
                            className="
                              text-2xl
                              font-black
                              leading-tight
                              text-white
                            "
                          >
                            {selectedService.name}
                          </h3>
                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={
                          closeAllServices
                        }
                        aria-label="Close details drawer"
                        className="
                          rounded-full
                          p-2.5
                          text-slate-400
                          transition-colors
                          hover:bg-slate-800
                          hover:text-white
                        "
                      >
                        <X className="size-5" />
                      </button>

                    </div>

                    {/* SUB SERVICES */}

                    <div
                      className="
                        mt-6
                        flex-1
                        space-y-3
                        overflow-y-auto
                        pr-2
                      "
                    >

                      <div
                        className="
                          mb-2
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <p
                          className="
                            text-xs
                            font-extrabold
                            uppercase
                            tracking-wider
                            text-slate-400
                          "
                        >
                          Specialized Capabilities
                        </p>
                      </div>

                      {selectedService.subServices.map(
                        (subService, idx) => {
                          const SubIcon =
                            subService.icon;

                          return (
                            <motion.a
                              key={idx}
                              href={
                                subService.href
                              }
                              target="_blank"
                              rel="noreferrer"
                              initial={{
                                opacity: 0,
                                y: 20,
                                scale: 0.96,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                              }}
                              transition={{
                                duration: 0.3,
                                delay:
                                  idx * 0.07,
                                ease: [
                                  0.22,
                                  1,
                                  0.36,
                                  1,
                                ],
                              }}
                              className="
                                group
                                relative
                                flex
                                items-center
                                justify-between
                                rounded-2xl
                                border
                                border-slate-700/60
                                bg-slate-800/80
                                p-4
                                transition-all
                                duration-300
                                hover:scale-[1.02]
                                hover:border-slate-500
                                hover:bg-slate-800
                                hover:shadow-lg
                              "
                            >

                              <div
                                className="
                                  absolute
                                  left-0
                                  top-2
                                  bottom-2
                                  w-1
                                  rounded-r-full
                                  opacity-0
                                  transition-opacity
                                  duration-300
                                  group-hover:opacity-100
                                "
                                style={{
                                  background:
                                    selectedService.color,
                                }}
                              />

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-4
                                  pl-1
                                "
                              >

                                <span
                                  className="
                                    flex
                                    size-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    transition-all
                                    duration-300
                                    group-hover:scale-110
                                  "
                                  style={{
                                    backgroundColor: `${selectedService.color}22`,
                                    color: selectedService.color,
                                    border: `1px solid ${selectedService.color}55`,
                                    boxShadow: `0 0 16px ${selectedService.color}22`,
                                  }}
                                >
                                  <SubIcon
                                    className="size-5"
                                    strokeWidth={2.2}
                                  />
                                </span>

                                <span
                                  className="
                                    text-[12px]
                                    font-bold
                                    leading-snug
                                    text-white
                                    transition-colors
                                    duration-200
                                    group-hover:text-white
                                  "
                                >
                                  {subService.name}
                                </span>

                              </div>

                              <ArrowUpRight
                                className="
                                  size-5
                                  text-slate-400
                                  opacity-60
                                  transition-all
                                  duration-300
                                  group-hover:-translate-y-0.5
                                  group-hover:translate-x-0.5
                                  group-hover:text-white
                                  group-hover:opacity-100
                                "
                              />

                            </motion.a>
                          );
                        }
                      )}

                    </div>

                    {/* DRAWER FOOTER */}

                    <div
                      className="
                        border-t
                        border-slate-700/80
                        pt-5
                      "
                    >
                      <a
                        href={
                          selectedService.href
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          px-5
                          py-3.5
                          text-[10px]
                          font-bold
                          text-white
                          shadow-xl
                          transition-all
                          duration-200
                          hover:opacity-95
                          active:scale-[0.98]
                        "
                        style={{
                          background:
                            selectedService.color,
                        }}
                      >
                        <span>
                          Explore Full Executive Capability
                        </span>

                        <ArrowRight className="size-4" />
                      </a>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* =================================================
                MOBILE CREATIVE VERSION
            ================================================== */}

            <div
              className="
                block
                lg:hidden
              "
            >

              {/* =================================================
                  MOBILE ORBIT AREA
              ================================================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  bg-transparent
                "
                style={{
                  /*
                   * Enough room for the reduced orbit.
                   * Sub-services remain BELOW this area.
                   */
                  height:
                    selectedService
                      ? "430px"
                      : "460px",
                }}
              >

                <ITNetworkBackground />

                {/* =================================================
                    MOBILE ROTATING STAGE
                ================================================== */}

                <motion.div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                  "
                  style={{
                    width:
                      `${MOBILE_STAGE_WIDTH}px`,
                    height:
                      `${MOBILE_STAGE_HEIGHT}px`,
                    marginLeft:
                      `-${MOBILE_STAGE_WIDTH / 2}px`,
                    marginTop:
                      `-${MOBILE_STAGE_HEIGHT / 2}px`,
                  }}
                >

                  {/* =================================================
                      ROTATING OUTER ORBIT
                  ================================================== */}

                  <motion.div
                    className="
                      absolute
                      inset-0
                    "
                    style={{
                      rotate:
                        orbitRotation,
                      transformOrigin:
                        "50% 50%",
                    }}
                  >

                    {/* MOBILE CONNECTORS */}

                    <svg
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        h-full
                        w-full
                        overflow-visible
                      "
                      viewBox={`
                        0
                        0
                        ${MOBILE_STAGE_WIDTH}
                        ${MOBILE_STAGE_HEIGHT}
                      `}
                      fill="none"
                    >

                      <defs>
                        {mobileServicePositions.map(
                          (_, index) => (
                            <filter
                              id={`mobile-glow-${index}`}
                              key={`mobile-filter-${index}`}
                              x="-30%"
                              y="-30%"
                              width="160%"
                              height="160%"
                            >
                              <feGaussianBlur
                                stdDeviation="3"
                                result="blur"
                              />

                              <feComposite
                                in="SourceGraphic"
                                in2="blur"
                                operator="over"
                              />
                            </filter>
                          )
                        )}
                      </defs>

                      {mobileServicePositions.map(
                        (position, index) => {
                          const service =
                            keyServices[index];

                          const isActive =
                            activeService ===
                            service.name;

                          const nodeRingColor =
                            service.color;

                          const startX =
                            MOBILE_CENTER_X +
                            (MOBILE_CENTER_SIZE /
                              2) *
                              Math.cos(
                                position.radians
                              );

                          const startY =
                            MOBILE_CENTER_Y +
                            (MOBILE_CENTER_SIZE /
                              2) *
                              Math.sin(
                                position.radians
                              );

                          return (
                            <g
                              key={`mobile-line-${index}`}
                            >

                              <line
                                x1={startX}
                                y1={startY}
                                x2={position.x}
                                y2={position.y}
                                stroke={
                                  nodeRingColor
                                }
                                strokeWidth={
                                  isActive
                                    ? "2"
                                    : "1"
                                }
                                strokeDasharray="5 9"
                                opacity={
                                  isActive
                                    ? 0.95
                                    : 0.55
                                }
                                filter={
                                  isActive
                                    ? `url(#mobile-glow-${index})`
                                    : undefined
                                }
                              />

                            </g>
                          );
                        }
                      )}

                    </svg>

                    {/* =================================================
                        MOBILE KEY SERVICE CARDS
                    ================================================== */}

                    {keyServices.map(
                      (service, index) => {
                        const position =
                          mobileServicePositions[
                            index
                          ];

                        const isActive =
                          activeService ===
                          service.name;

                        const nodeRingColor =
                          getActiveRingColor(
                            position.angle
                          );

                        const ServiceIcon =
                          service.icon;

                        return (
                          <div
                            key={
                              `mobile-service-${service.name}`
                            }
                            className="
                              absolute
                              z-30
                            "
                            style={{
                              left:
                                `${position.x -
                                  MOBILE_CARD_WIDTH /
                                    2}px`,

                              top:
                                `${position.y -
                                  MOBILE_CARD_HEIGHT /
                                    2}px`,

                              width:
                                `${MOBILE_CARD_WIDTH}px`,

                              height:
                                `${MOBILE_CARD_HEIGHT}px`,
                            }}
                          >

                            {/* COUNTER ROTATION
                                KEEPS CARD STRAIGHT */}

                            <motion.div
                              className="
                                h-full
                                w-full
                              "
                              style={{
                                rotate:
                                  counterRotation,
                                transformOrigin:
                                  "50% 50%",
                              }}
                            >

                              {/* KEY SERVICE OPENS
                                  SUB SERVICES ONLY */}

                              <button
                                type="button"
                                onClick={() => {
                                  if (
                                    isActive
                                  ) {
                                    closeAllServices();
                                  } else {
                                    openService(
                                      service.name
                                    );
                                  }
                                }}
                                onFocus={() =>
                                  openService(
                                    service.name
                                  )
                                }
                                aria-expanded={
                                  isActive
                                }
                                className="
                                  group
                                  flex
                                  h-full
                                  w-full
                                  items-center
                                  gap-1.5
                                  rounded-full
                                  border
                                  bg-slate-900/95
                                  px-1.5
                                  shadow-xl
                                  backdrop-blur-xl
                                  transition-all
                                  duration-300
                                  focus:outline-none
                                "
                                style={{
                                  borderColor:
                                    isActive
                                      ? service.color
                                      : "rgba(71,85,105,.65)",

                                  boxShadow:
                                    isActive
                                      ? `0 0 18px -3px ${service.color}AA`
                                      : "0 8px 18px -8px rgba(0,0,0,.8)",
                                }}
                              >

                                <span
                                  className="
                                    flex
                                    size-6
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-white
                                  "
                                  style={{
                                    backgroundColor:
                                      nodeRingColor,
                                  }}
                                >
                                  <ServiceIcon
                                    className="size-3"
                                    strokeWidth={2.3}
                                  />
                                </span>

                                <span
                                  className="
                                    min-w-0
                                    flex-1
                                    truncate
                                    text-left
                                    text-[8px]
                                    font-black
                                    leading-tight
                                    text-white
                                  "
                                >
                                  {service.name}
                                </span>

                                <ChevronRight
                                  className="
                                    size-2.5
                                    shrink-0
                                    text-slate-400
                                  "
                                />

                              </button>

                            </motion.div>

                          </div>
                        );
                      }
                    )}

                  </motion.div>

                  {/* =================================================
                      MOBILE FIXED CENTER
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      z-40
                    "
                    style={{
                      left:
                        `${MOBILE_CENTER_X}px`,
                      top:
                        `${MOBILE_CENTER_Y}px`,
                      transform:
                        "translate(-50%, -50%)",
                    }}
                  >

                    {/* CENTER RING ROTATES */}

                    <motion.div
                      className="
                        absolute
                        rounded-full
                      "
                      style={{
                        width:
                          `${MOBILE_CENTER_SIZE + 18}px`,
                        height:
                          `${MOBILE_CENTER_SIZE + 18}px`,
                        left:
                          "-9px",
                        top:
                          "-9px",
                        rotate:
                          orbitRotation,
                      }}
                    >

                      <svg
                        viewBox="0 0 200 200"
                        className="
                          h-full
                          w-full
                        "
                        fill="none"
                      >

                        <path
                          d="M 100,10 A 90,90 0 0,1 190,100 L 165,100 A 65,65 0 0,0 100,35 Z"
                          fill={
                            LOGO_COLORS.blue
                          }
                        />

                        <path
                          d="M 190,100 A 90,90 0 0,1 100,190 L 100,165 A 65,65 0 0,0 165,100 Z"
                          fill={
                            LOGO_COLORS.green
                          }
                        />

                        <path
                          d="M 100,190 A 90,90 0 0,1 10,100 L 35,100 A 65,65 0 0,0 100,165 Z"
                          fill={
                            LOGO_COLORS.orange
                          }
                        />

                        <path
                          d="M 10,100 A 90,90 0 0,1 100,10 L 100,35 A 65,65 0 0,0 35,100 Z"
                          fill={
                            LOGO_COLORS.pink
                          }
                        />

                      </svg>

                    </motion.div>

                    {/* =================================================
                        CENTER HUB ITSELF IS FIXED
                        IT DOES NOT ROTATE
                    ================================================== */}

                    <div
                      className="
                        pointer-events-auto
                        relative
                        flex
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-500/50
                        bg-slate-950
                        text-center
                        shadow-[0_0_30px_rgba(0,114,206,.35)]
                      "
                      style={{
                        width:
                          `${MOBILE_CENTER_SIZE}px`,
                        height:
                          `${MOBILE_CENTER_SIZE}px`,
                      }}
                    >

                      <span
                        className="
                          max-w-[52px]
                          text-[8px]
                          font-black
                          leading-tight
                          text-white
                        "
                      >
                        IT
                        <br />
                        Consulting
                      
                      </span>

                    </div>

                  </div>

                </motion.div>

              </div>

              {/* =================================================
                  MOBILE SUB SERVICES AT BOTTOM
              ================================================== */}

              <AnimatePresence mode="wait">

                {selectedService && (
                  <motion.div
                    key={selectedService.name}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 35,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="
                      relative
                      z-50
                      border-t
                      border-slate-700
                      bg-slate-900
                    "
                  >

                    {/* MOBILE SELECTED SERVICE HEADER */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-800
                        px-4
                        py-3
                      "
                    >

                      <div
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-3
                        "
                      >

                        <span
                          className="
                            flex
                            size-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            text-white
                          "
                          style={{
                            background:
                              selectedService.color,
                          }}
                        >
                          <selectedService.icon
                            className="size-4.5"
                          />
                        </span>

                        <div className="min-w-0">

                          <p
                            className="
                              text-[9px]
                              font-extrabold
                              uppercase
                              tracking-wider
                              text-slate-400
                            "
                          >
                            Specialized Capabilities
                          </p>

                          <h3
                            className="
                              truncate
                              text-sm
                              font-black
                              text-white
                            "
                          >
                            {selectedService.name}
                          </h3>

                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={
                          closeAllServices
                        }
                        className="
                          flex
                          size-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-slate-400
                          transition-colors
                          hover:bg-slate-800
                          hover:text-white
                        "
                        aria-label="Close sub services"
                      >
                        <X className="size-4" />
                      </button>

                    </div>

                    {/* =================================================
                        SCROLLABLE SUB SERVICES
                    ================================================== */}

                    <div
                      className="
                        mobile-service-scroll
                        max-h-[250px]
                        overflow-y-auto
                        overscroll-contain
                        px-3
                        py-3
                      "
                      style={{
                        WebkitOverflowScrolling:
                          "touch",
                        touchAction: "pan-y",
                      }}
                    >

                      <div className="space-y-2">

                        {selectedService.subServices.map(
                          (subService, idx) => {
                            const SubIcon =
                              subService.icon;

                            return (
                              <motion.a
                                key={idx}
                                href={
                                  subService.href
                                }
                                target="_blank"
                                rel="noreferrer"
                                initial={{
                                  opacity: 0,
                                  y: 12,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                transition={{
                                  duration: 0.25,
                                  delay:
                                    idx * 0.05,
                                }}
                                className="
                                  flex
                                  min-h-[48px]
                                  items-center
                                  justify-between
                                  rounded-xl
                                  border
                                  border-slate-800
                                  bg-slate-950
                                  px-3
                                  py-2
                                  transition-all
                                  active:scale-[.98]
                                "
                              >

                                <div
                                  className="
                                    flex
                                    min-w-0
                                    items-center
                                    gap-3
                                  "
                                >

                                  <span
                                    className="
                                      flex
                                      size-8
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-lg
                                      transition-all
                                      duration-300
                                    "
                                    style={{
                                      backgroundColor: `${selectedService.color}22`,
                                      color: selectedService.color,
                                      border: `1px solid ${selectedService.color}55`,
                                      boxShadow: `0 0 12px ${selectedService.color}18`,
                                    }}
                                  >
                                    <SubIcon
                                      className="size-4"
                                      strokeWidth={2.2}
                                    />
                                  </span>

                                  <span
                                    className="
                                      min-w-0
                                      text-[14px]
                                      font-bold
                                      leading-snug
                                      text-white
                                    "
                                  >
                                    {
                                      subService.name
                                    }
                                  </span>

                                </div>

                                <ArrowUpRight
                                  className="
                                    ml-2
                                    size-4
                                    shrink-0
                                    text-slate-400
                                  "
                                />

                              </motion.a>
                            );
                          }
                        )}

                      </div>

                    </div>

                    {/* MOBILE FULL CATEGORY BUTTON */}

                    <div
                      className="
                        border-t
                        border-slate-800
                        p-3
                      "
                    >

                      <a
                        href={
                          selectedService.href
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          px-4
                          py-3
                          text-xs
                          font-bold
                          text-white
                          shadow-lg
                          transition-all
                          active:scale-[.98]
                        "
                        style={{
                          background:
                            selectedService.color,
                        }}
                      >

                        <span>
                          View Full Category Details
                        </span>

                        <ArrowRight className="size-3.5" />

                      </a>

                    </div>

                  </motion.div>
                )}

              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}