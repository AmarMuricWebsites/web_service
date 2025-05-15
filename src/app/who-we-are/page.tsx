import Link from "next/link";
import {
  Users,
  Globe,
  Award,
  Sparkles,
  Lightbulb,
  Target,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-blue-50 dark:from-purple-900/20 dark:via-gray-900 dark:to-blue-900/20">
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-purple-500 to-blue-400"
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3,
                  transform: `scale(${Math.random() * 0.8 + 0.2})`,
                  animation: `float ${
                    Math.random() * 10 + 15
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300 mb-4">
              Our Story
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 dark:from-purple-400 dark:via-blue-300 dark:to-teal-300 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A team of passionate professionals bridging Swedish quality with
              Serbian expertise to deliver exceptional web solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
                Our Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                The IT System Solutions Story
              </h2>
              <div className="space-y-4 text-gray-500 dark:text-gray-400">
                <p>
                  IT System Solutions was founded with a simple mission: to
                  provide small and medium-sized businesses in Sweden with
                  high-quality, custom web applications at competitive prices.
                </p>
                <p>
                  We recognized that many businesses struggle to find affordable
                  yet professional web development services. By leveraging our
                  experienced development team based in Serbia while maintaining
                  Swedish management and communication, we&apos;ve created a
                  unique service model that delivers exceptional value.
                </p>
                <p>
                  Our founder, having worked in both the Swedish and Serbian
                  tech industries, saw an opportunity to bridge the gap between
                  these two markets. This vision has allowed us to combine
                  Swedish business standards with Serbian technical expertise,
                  creating a perfect balance of quality and cost-effectiveness.
                </p>
                <p>
                  Today, we continue to help businesses across Sweden transform
                  their operations with custom web applications tailored to
                  their specific needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=250"
                      alt="Our team"
                      className="h-auto w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt="Our office"
                      className="h-auto w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt="Team collaboration"
                      className="h-auto w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=250"
                      alt="Development process"
                      className="h-auto w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
              Our Values
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Drives Us
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The core principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  We strive for excellence in every project we undertake,
                  ensuring that each solution we deliver exceeds expectations
                  and stands the test of time.
                </p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  We believe in the power of collaboration, working closely with
                  our clients to understand their needs and deliver solutions
                  that truly address their challenges.
                </p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-6 text-teal-600 dark:text-teal-400">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  We embrace innovation and continuously explore new
                  technologies and methodologies to deliver cutting-edge
                  solutions that give our clients a competitive edge.
                </p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6 text-amber-600 dark:text-amber-400">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Results-Driven</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  We focus on delivering measurable results that help our
                  clients achieve their business objectives, whether that&apos;s
                  increasing efficiency, improving customer experience, or
                  driving growth.
                </p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Quality</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  We never compromise on quality, ensuring that every line of
                  code, every design element, and every feature we deliver meets
                  the highest standards of excellence.
                </p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                  <Globe size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Global Perspective</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Our international team brings diverse perspectives and
                  experiences, allowing us to approach challenges with
                  creativity and deliver solutions that work in a global
                  context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
              Meet The Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The People Behind Our Success
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our talented team combines Swedish management with Serbian
              development expertise
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl h-[350px] w-[300px] bg-blue-200">
                {/* <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Team Member"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}
                <User className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">Adnan Skrijelj</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Founder & CEO
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl h-[350px] w-[300px] bg-blue-200">
                {/* <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Team Member"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}
                <User className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">Amar Muric</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Project Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                transform: `translateZ(${Math.random() * 50}px)`,
              }}
            />
          ))}
        </div>

        <div className="container px-4 md:px-6 relative mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Work With Our Team?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Let&apos;s discuss how we can help your business with a custom web
              application solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/what-we-offer">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
