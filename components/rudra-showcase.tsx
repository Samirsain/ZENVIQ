"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Safari } from "@/components/ui/safari"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Sparkles,
  Globe,
  Brain,
  Moon,
  Smartphone,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

const features = [
  { icon: BookOpen, label: "10+ Sacred Texts", color: "text-amber-600" },
  { icon: Brain, label: "AI Spiritual Guide", color: "text-violet-600" },
  { icon: Globe, label: "Multi-Script Support", color: "text-cyan-600" },
  { icon: Moon, label: "Dark Mode", color: "text-indigo-600" },
  { icon: Smartphone, label: "Fully Responsive", color: "text-emerald-600" },
  { icon: Sparkles, label: "Cinematic UI", color: "text-pink-600" },
]

const techStack = ["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase", "Gemini AI", "Framer Motion"]

export default function RudraShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-orange-50/30"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating emojis */}
      <motion.div
        className="absolute top-12 left-[8%] text-4xl opacity-30 hidden lg:block select-none"
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        🕉️
      </motion.div>
      <motion.div
        className="absolute top-28 right-[10%] text-3xl opacity-25 hidden lg:block select-none"
        animate={{ y: [0, -14, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        📚
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-[12%] text-3xl opacity-20 hidden lg:block select-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        🪷
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-xs font-semibold text-amber-800 tracking-wide uppercase">
              Our Own Product
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            रुद्रा —{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Rudra
            </span>{" "}
            <span className="inline-block animate-float align-middle">
              <svg className="w-12 h-12 sm:w-14 sm:h-14 inline-block" viewBox="0 0 1406 817" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1228.99 462.402C1257.22 456.09 1287.88 457.039 1316.26 459.172L1359.75 462.441L1344.69 503.371C1336.12 526.652 1326.47 550.129 1314.81 572.402C1330.19 570.52 1346.18 571.031 1361.61 572.191L1405.1 575.449L1390.04 616.379C1373.29 661.902 1350.46 707.281 1306.87 732.359C1277.91 749.031 1197.97 779.27 1155.81 792.141C1104.83 753.262 1048.2 693.121 861.418 691.309C861.418 691.309 1031.81 705.281 1113.43 798.441C967.945 827.371 796.688 826.059 702.547 761.609C608.41 826.059 437.145 827.371 291.664 798.441C373.289 705.281 543.684 691.309 543.684 691.309C356.898 693.121 303.461 751.129 252.488 790.012C210.32 777.129 127.188 749.031 98.2266 732.359C54.6367 707.281 31.8125 661.902 15.0625 616.379L0 575.449L43.4883 572.191C58.918 571.031 74.9062 570.52 90.2891 572.402C78.6328 550.129 68.9727 526.652 60.4062 503.371L45.3438 462.441L88.8359 459.172C117.223 457.039 147.875 456.09 176.105 462.402C158.82 422.73 146.473 380.48 136.324 339.211L125.91 296.859L169.492 298.449C230.816 300.699 301.555 307.152 349.102 348.941C345.656 298.52 349.605 247.031 355.688 197.789L361.035 154.512L401.191 171.52C449.082 191.809 506.344 218.379 545.887 252.75C550.633 256.871 555.129 261.129 559.34 265.531C580.637 183.191 624.105 103.941 676.273 34.8086L702.547 0L728.816 34.8086C780.988 103.941 824.457 183.191 845.758 265.531C849.969 261.129 854.457 256.871 859.207 252.75C898.746 218.379 956.008 191.809 1003.9 171.52L1044.06 154.512L1049.41 197.789C1055.49 247.031 1059.44 298.52 1056 348.941C1103.54 307.152 1174.28 300.699 1235.6 298.449L1279.19 296.859L1268.77 339.211C1258.62 380.48 1246.28 422.73 1228.99 462.402Z" fill="#4B4B71"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M478.586 727.291C434.816 737.693 389.164 754.021 351.555 779.021C349.707 780.252 347.871 781.502 346.055 782.783C456.973 798.463 603.383 799.221 688 741.834C623.82 704.861 547.684 710.881 478.586 727.291Z" fill="#F2E0CE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M348.793 780.879C347.875 781.5 346.965 782.141 346.055 782.781C444.652 796.719 571.305 798.859 657.656 758.852L688 741.832C574.824 798.539 348.84 780.879 348.793 780.879Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M478.586 727.29C434.816 737.693 389.164 754.021 351.555 779.021C349.707 780.251 347.871 781.501 346.055 782.782C346.055 782.782 490.277 693.521 688 741.833L672.695 733.923C611.926 705.861 542.266 712.173 478.586 727.29Z" fill="#DEBD9C"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1313.8 491.999C1121.54 477.581 1228.01 577.628 1030.35 671.62C1029.08 674.902 1027.82 678.218 1026.56 681.601C1182.62 673.691 1251.57 661.089 1313.8 491.999Z" fill="#F2E0CE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1313.8 491.999C1121.54 477.581 1228.01 577.628 1030.35 671.62C1030.35 671.62 1116.06 656.671 1164.54 579.448C1164.54 579.448 1210.04 485.038 1304.49 515.991C1307.61 508.359 1310.72 500.378 1313.8 491.999Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1030.35 671.621C1029.08 674.902 1027.82 678.219 1026.56 681.602C1162.36 674.719 1232.2 664.27 1289.05 550.25L1313.8 492C1310.28 501.559 1306.74 510.602 1303.16 519.18C1227.6 686.379 1030.35 671.621 1030.35 671.621Z" fill="#DEBD9C"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1236.81 331.352C955.207 341.672 1126.12 469.691 854.316 638.352C853.008 643.32 851.707 648.352 850.426 653.461C1075.83 616.59 1173.93 587.07 1236.81 331.352Z" fill="#BDE1D4"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M168.273 331.352C449.875 341.672 278.957 469.691 550.766 638.352C552.078 643.32 553.371 648.352 554.652 653.461C329.254 616.59 231.156 587.07 168.273 331.352Z" fill="#BDE1D4"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M388.34 201.832C487.422 243.801 532.922 277.16 551.812 309.602C536.047 433.512 537.484 545.98 610.644 651.48C429.125 542.43 355.847 464.801 388.34 201.832Z" fill="#F0ACB4"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1359.15 605.014C1236.37 595.811 1304.36 659.702 1178.15 719.714C1177.34 721.811 1176.53 723.932 1175.73 726.092C1275.38 721.042 1319.41 712.995 1359.15 605.014Z" fill="#66CBCE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1359.15 605.014C1237.57 595.904 1303.02 658.463 1181.76 717.951C1181.8 717.951 1243.38 704.353 1268.41 652.162C1268.41 652.162 1295 600.572 1354.42 617.31C1356.01 613.361 1357.58 609.271 1359.15 605.014Z" fill="#C4EBEF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1181.76 717.949C1180.56 718.539 1179.38 719.129 1178.15 719.711C1177.34 721.809 1176.53 723.93 1175.73 726.09C1275.38 721.039 1319.41 712.992 1359.15 605.012C1314.49 718.172 1192.7 718.18 1181.76 717.949Z" fill="#3E939C"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M170.512 331.43C427.461 342.961 310.031 448.41 483.25 590.781L484 591C502.719 606.359 524.688 622.16 550.766 638.352C302.43 551.191 414.074 363.441 170.512 331.43Z" fill="#E8F7F5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M550.766 638.352C552.078 643.32 553.371 648.352 554.652 653.461C329.254 616.59 231.156 587.07 168.273 331.352C168.273 331.352 200.945 467.969 310.828 558.32C367.914 605.262 446.625 621.051 550.766 638.352Z" fill="#93CBB9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1234.57 331.43C977.617 342.961 1095.05 448.41 921.828 590.781L921.078 591C902.355 606.359 880.387 622.16 854.316 638.352C1102.66 551.191 991.008 363.441 1234.57 331.43Z" fill="#E8F7F5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M854.316 638.352C853.008 643.32 851.707 648.352 850.426 653.461C1075.83 616.59 1173.93 587.07 1236.81 331.352C1236.81 331.352 1204.14 467.969 1094.25 558.32C1037.17 605.262 958.457 621.051 854.316 638.352Z" fill="#93CBB9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M388.34 201.832C487.422 243.801 532.922 277.16 551.812 309.602C536.047 433.512 537.484 545.98 610.645 651.48C501.586 570.02 528.984 419.691 528.984 419.691C533.242 363.219 529.52 346.18 529.52 346.18C524.191 266.262 388.34 201.832 388.34 201.832Z" fill="#F9E2EF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M610.644 651.48C429.125 542.43 355.847 464.801 388.34 201.832C388.34 201.832 362.246 484.262 610.644 651.48Z" fill="#E17989"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M91.2656 491.999C283.527 477.581 177.059 577.628 374.715 671.62C375.984 674.902 377.25 678.218 378.508 681.601C222.441 673.691 153.492 661.089 91.2656 491.999Z" fill="#F2E0CE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M91.2656 491.999C283.527 477.581 177.059 577.628 374.715 671.62C374.715 671.62 289.012 656.671 240.531 579.448C240.531 579.448 195.027 485.038 100.582 515.991C97.4531 508.359 94.3516 500.378 91.2656 491.999Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M374.715 671.621C375.984 674.902 377.25 678.219 378.508 681.602C242.703 674.719 172.867 664.27 116.02 550.25L91.2656 492C94.7852 501.559 98.3281 510.602 101.906 519.18C177.461 686.379 374.715 671.621 374.715 671.621Z" fill="#DEBD9C"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M45.9219 605.014C168.695 595.811 100.707 659.702 226.922 719.714C227.734 721.811 228.539 723.932 229.344 726.092C129.684 721.042 85.6562 712.995 45.9219 605.014Z" fill="#66CBCE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M45.9219 605.014C167.492 595.904 102.051 658.463 223.309 717.951C223.27 717.951 161.684 704.353 136.656 652.162C136.656 652.162 110.062 600.572 50.6484 617.31C49.0625 613.361 47.4883 609.271 45.9219 605.014Z" fill="#C4EBEF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M223.309 717.949C224.504 718.539 225.688 719.129 226.922 719.711C227.734 721.809 228.539 723.93 229.344 726.09C129.684 721.039 85.6562 712.992 45.9219 605.012C90.5742 718.172 212.371 718.18 223.309 717.949Z" fill="#3E939C"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1017.42 201.832C918.336 243.801 872.836 277.16 853.945 309.602C869.719 433.512 868.277 545.98 795.117 651.48C976.637 542.43 1049.92 464.801 1017.42 201.832Z" fill="#F0ACB4"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1017.42 201.832C918.336 243.801 872.836 277.16 853.945 309.602C869.719 433.512 868.277 545.98 795.117 651.48C904.176 570.02 876.777 419.691 876.777 419.691C872.516 363.219 876.246 346.18 876.246 346.18C881.566 266.262 1017.42 201.832 1017.42 201.832Z" fill="#F9E2EF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M795.117 651.48C976.637 542.43 1049.92 464.801 1017.42 201.832C1017.42 201.832 1043.52 484.262 795.117 651.48Z" fill="#E17989"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M940.035 727.291C983.809 737.693 1029.46 754.021 1067.07 779.021C1068.92 780.252 1070.75 781.502 1072.57 782.783C961.648 798.463 815.238 799.221 730.617 741.834C794.797 704.861 870.938 710.881 940.035 727.291Z" fill="#F2E0CE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1069.83 780.879C1070.75 781.5 1071.66 782.141 1072.57 782.781C973.969 796.719 847.316 798.859 760.969 758.852L730.617 741.832C843.797 798.539 1069.78 780.879 1069.83 780.879Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M940.035 727.29C983.809 737.693 1029.46 754.021 1067.07 779.021C1068.92 780.251 1070.75 781.501 1072.57 782.782C1072.57 782.782 928.348 693.521 730.617 741.833L745.926 733.923C806.695 705.861 876.355 712.173 940.035 727.29Z" fill="#DEBD9C"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M702.547 719.582H704.219C881.489 526.711 852.766 253.672 702.547 54.6406C552.328 253.672 523.602 526.711 700.871 719.582H702.547Z" fill="#F3E1CF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M702.547 719.582H704.219C737.238 683.66 763.098 644.949 782.367 604.469C758.098 618.691 731.059 626.641 702.547 626.641C674.035 626.641 646.988 618.691 622.73 604.469C642 644.961 667.859 683.66 700.871 719.582H702.547Z" fill="#DEBD9C"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M768.527 162.461C750.367 124.871 728.238 88.6719 702.547 54.6406C676.859 88.6719 654.73 124.871 636.57 162.469C657.117 152.84 679.348 147.582 702.547 147.582C725.746 147.582 747.977 152.84 768.527 162.461Z" fill="#FDFDF8"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M527.609 109.762C551.59 109.762 571.027 129.199 571.027 153.18C571.027 177.16 551.59 196.59 527.609 196.59C503.629 196.59 484.191 177.16 484.191 153.18C484.191 129.199 503.629 109.762 527.609 109.762ZM45.7539 532.219C51.6406 532.219 56.4102 536.992 56.4102 542.871C56.4102 548.762 51.6406 553.531 45.7539 553.531C39.8672 553.531 35.1016 548.762 35.1016 542.871C35.1016 536.992 39.8672 532.219 45.7539 532.219ZM121.668 402.5C132.262 402.5 140.848 411.082 140.848 421.672C140.848 432.27 132.262 440.852 121.668 440.852C111.074 440.852 102.488 432.27 102.488 421.672C102.488 411.082 111.074 402.5 121.668 402.5ZM297.203 233.621C313.828 233.621 327.301 247.102 327.301 263.719C327.301 280.34 313.828 293.82 297.203 293.82C280.582 293.82 267.105 280.34 267.105 263.719C267.105 247.102 280.582 233.621 297.203 233.621Z" fill="#4B4B71"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M879.207 109.762C855.227 109.762 835.785 129.199 835.785 153.18C835.785 177.16 855.227 196.59 879.207 196.59C903.188 196.59 922.617 177.16 922.617 153.18C922.617 129.199 903.188 109.762 879.207 109.762ZM1361.06 532.219C1355.18 532.219 1350.41 536.992 1350.41 542.871C1350.41 548.762 1355.18 553.531 1361.06 553.531C1366.95 553.531 1371.72 548.762 1371.72 542.871C1371.72 536.992 1366.95 532.219 1361.06 532.219ZM1285.15 402.5C1274.56 402.5 1265.97 411.082 1265.97 421.672C1265.97 432.27 1274.56 440.852 1285.15 440.852C1295.74 440.852 1304.33 432.27 1304.33 421.672C1304.33 411.082 1295.74 402.5 1285.15 402.5ZM1109.61 233.621C1092.99 233.621 1079.52 247.102 1079.52 263.719C1079.52 280.34 1092.99 293.82 1109.61 293.82C1126.24 293.82 1139.71 280.34 1139.71 263.719C1139.71 247.102 1126.24 233.621 1109.61 233.621Z" fill="#4B4B71"/>
              </svg>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Digital Museum of Timeless Wisdom — Preserving and connecting ancient Indian culture
            rooted in{" "}
            <span className="font-semibold text-amber-700">सनातन धर्म</span>
          </p>
        </motion.div>

        {/* Safari Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-14"
        >
          <div className="relative group">
            {/* Glow behind Safari */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/30 via-orange-200/20 to-red-200/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

            <div className="relative shadow-stripe-xl rounded-xl overflow-hidden">
              <Safari
                url="rudra.zenviqdigital.in/rudra"
                imageSrc="/rudraa.png"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {features.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-100 hover:shadow-stripe-sm hover:border-slate-200 transition-all duration-300 group"
              >
                <feat.icon className={`w-5 h-5 ${feat.color} group-hover:scale-110 transition-transform`} />
                <span className="text-[11px] font-semibold text-slate-600 text-center leading-tight">
                  {feat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[10px] px-3 py-1 bg-slate-100/80 text-slate-500 border-0 font-medium"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white rounded-full px-8 py-3 shadow-lg text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <Link
              href="https://rudra.zenviqdigital.in/rudra"
              target="_blank"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Visit Rudra
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-3 text-sm font-semibold border-slate-300 hover:border-amber-400 hover:bg-amber-50 transition-all duration-300"
          >
            <Link
              href="https://github.com/Samirsain/rudra"
              target="_blank"
              className="flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Source
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
