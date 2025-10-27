// "use client";

// import Image from "next/image";
// import { Button } from "@/shared/ui/button/button";
// import { cn } from "@/shared/lib/utils";
// import { ArrowRight } from "lucide-react";

// interface HeaderProps {
//   className?: string;
// }

// export const Header = ({ className }: HeaderProps) => {
//   const handleLogin = () => {
//     console.log("Login clicked");
//   };

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 bg-white/70 bg-neutral-60",
//         "supports-[backdrop-filter]:bg-white/50",
//         "py-8",
//         className
//       )}
//     >
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(
//               to right,
//               rgba(0, 122, 255, 0.05) 0px,
//               rgba(0, 122, 255, 0.05) 1px,
//               transparent 1px,
//               transparent calc(100% / 24)
//             )
//           `,
//           backgroundSize: "100% 100%",
//         }}
//       />
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <Image
//               src="/logo.svg"
//               alt="Бригада.ру"
//               width={40}
//               height={40}
//               className="object-contain border rounded-full w-56 h-56 p-8"
//               priority
//             />
//             <span className="text-2xl font-bold text-neutral-90 tracking-tight">
//               Бригада.ру
//             </span>
//           </div>

//           <div className="flex items-center gap-3 sm:gap-4">
//             <Button
//               onClick={handleLogin}
//               variant="outline"
//               size="sm"
//               rightIcon={<ArrowRight size={24} />}
//             >
//               Войти
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
