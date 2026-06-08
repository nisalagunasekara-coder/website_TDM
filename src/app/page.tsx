"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Download, Menu, X, CheckCircle2,
  BarChart3, Users, Zap, LayoutDashboard, Globe,
  Code, Layers, FileText, FileBarChart,
  BookOpen, Github, Linkedin, Mail, Twitter, Presentation
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Gallery", href: "#gallery" },
    { name: "Demo", href: "#demo" },
    { name: "Research", href: "#research" },
    { name: "Commercialization", href: "#commercialization" },
    { name: "Downloads", href: "#downloads" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">[YOUR LOGO/NAME]</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-background">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* 1. HERO SECTION */}
        <section id="home" className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 -z-10" />
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-4 max-w-4xl"
              >
                <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">
                  B.Sc. (Hons) IT – Interactive Media | University of Sri Jayewardenepura
                </h2>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
                  [YOUR PROJECT TITLE HERE]
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
                  [One compelling sentence explaining your value proposition. Example: Revolutionizing how local businesses connect with customers using AI.]
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <a href="#demo" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all" })}>
                  View Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#downloads" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto h-12 px-8 text-base bg-background/50 backdrop-blur-sm" })}>
                  Download Resources <Download className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 mx-auto max-w-5xl rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden aspect-[16/9] relative"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
                <div className="text-center">
                  <LayoutDashboard className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="font-medium">[INSERT HERO IMAGE / UI MOCKUP HERE]</p>
                  <p className="text-sm">Recommended size: 1920x1080px (WebP format)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. PROJECT IDENTITY SECTION */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
            >
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Project Overview
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Transforming Ideas into Interactive Solutions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Provide a 2-3 paragraph introduction explaining what your project is and why it matters. Describe the core concept, the inspiration behind it, and the overarching goal you set out to achieve for your final year project.]
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [This second paragraph should focus on the technical or creative approach you took, highlighting your specialization in Interactive Media and how it informed your solution design.]
                </p>
              </div>

              <Card className="border-2 shadow-lg">
                <CardHeader className="bg-slate-50 dark:bg-slate-900 border-b">
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="p-6 grid gap-4">
                  <div className="grid grid-cols-3 gap-4 border-b pb-4">
                    <div className="font-medium text-muted-foreground">Project Title</div>
                    <div className="col-span-2 font-semibold">[YOUR TITLE]</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-b pb-4">
                    <div className="font-medium text-muted-foreground">Tagline</div>
                    <div className="col-span-2">[ONE SENTENCE VALUE STATEMENT]</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-b pb-4">
                    <div className="font-medium text-muted-foreground">Team</div>
                    <div className="col-span-2">[YOUR NAME] – Lead Developer & Researcher</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-b pb-4">
                    <div className="font-medium text-muted-foreground">Specialization</div>
                    <div className="col-span-2">Interactive Media</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-muted-foreground">Academic Year</div>
                    <div className="col-span-2">2026</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* 3. PROBLEM AND NEED SECTION */}
        <section id="problem" className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The Problem We're Solving</h2>
              <p className="text-lg text-muted-foreground">
                [Explain the real-world problem clearly so a non-technical audience can understand. What is broken, inefficient, or missing in the current landscape?]
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1 rounded-xl overflow-hidden border shadow-lg aspect-square sm:aspect-video md:aspect-square relative"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-red-50 dark:bg-red-950/20 text-red-400">
                  <div className="text-center p-6">
                    <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="font-medium text-red-600 dark:text-red-400 mb-2">[INSERT PROBLEM INFOGRAPHIC HERE]</p>
                    <p className="text-sm text-red-500/70 dark:text-red-400/70">Show a visual contrast of the problem state vs. ideal state or key statistics.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2 space-y-6"
              >
                <Card className="border-l-4 border-l-red-500 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="bg-red-100 text-red-600 p-2 rounded-full"><Users className="h-4 w-4" /></span>
                      The Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>[DESCRIBE REAL-WORLD ISSUE WITH DATA IF AVAILABLE. e.g., "70% of small businesses lack..."]</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="bg-orange-100 text-orange-600 p-2 rounded-full"><Globe className="h-4 w-4" /></span>
                      Why It Matters
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>[EXPLAIN IMPACT ON USERS/SOCIETY. Why should we care about solving this right now?]</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-600 p-2 rounded-full"><CheckCircle2 className="h-4 w-4" /></span>
                      Current Gaps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>[WHAT'S MISSING IN EXISTING SOLUTIONS. e.g., "Existing tools are too expensive or complex..."]</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. SOLUTION OVERVIEW SECTION */}
        <section id="solution" className="py-24 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">Our Solution</h2>
              <p className="text-xl text-muted-foreground">
                [2-3 sentences in plain English explaining what the project does. E.g., "We built a mobile-first platform that seamlessly connects X to Y using advanced algorithms, stripping away complexity."]
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow group">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Zap className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <CardTitle>Feature {i}: [Name]</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">[Briefly describe what this feature does and the specific user benefit it provides.]</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What Makes This Unique</h3>
                  <ul className="space-y-4">
                    {[
                      "Innovation Point 1: [E.g., First to use localized language models...]",
                      "Innovation Point 2: [E.g., Proprietary algorithm that reduces load time by 40%...]",
                      "Innovation Point 3: [E.g., Highly accessible interface designed specifically for...]"
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border p-6">
                  <h4 className="font-semibold text-center mb-4 pb-4 border-b">Competitor Comparison</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 text-sm font-medium text-muted-foreground pb-2 border-b">
                      <div>Feature</div>
                      <div className="text-primary text-center">Our Solution</div>
                      <div className="text-center">Others</div>
                    </div>
                    {[1, 2, 3].map((row) => (
                      <div key={row} className="grid grid-cols-3 text-sm items-center py-1">
                        <div>[Feature {row}]</div>
                        <div className="flex justify-center"><CheckCircle2 className="h-5 w-5 text-green-500" /></div>
                        <div className="flex justify-center text-muted-foreground">Limited</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. VISUAL SHOWCASE SECTION */}
        <section id="gallery" className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Visual Gallery</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the architecture, interface design, and functionality of the system.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "System Architecture Diagram",
                "UI Mockup – Main Screen",
                "User Flow Diagram",
                "Feature Screenshot 1",
                "Feature Screenshot 2",
                "Mobile Responsive View"
              ].map((caption, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-xl overflow-hidden border bg-white dark:bg-slate-950 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative flex items-center justify-center">
                    <div className="text-slate-400 text-center p-4">
                      <LayoutDashboard className="h-8 w-8 mx-auto mb-2 opacity-50 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">[INSERT IMAGE HERE]</span>
                    </div>
                  </div>
                  <div className="p-4 border-t">
                    <p className="font-medium text-sm">{caption}</p>
                    <p className="text-xs text-muted-foreground mt-1">[Briefly explain what this image demonstrates]</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PROTOTYPE / DEMONSTRATION SECTION */}
        <section id="demo" className="py-24 bg-slate-950 text-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300">
                  <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                  Working Prototype
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  See It In Action
                </h2>
                <div className="space-y-4 text-slate-300 text-lg">
                  <p>
                    [2-3 paragraphs explaining what has been practically built/demonstrated. E.g., "We have developed a fully functional MVP that handles core user flows including registration, data processing, and dashboard visualization."]
                  </p>
                  <p>
                    [Explicitly state testing outcomes: "This project has been tested with X users and demonstrated Y specific outcome, validating our core hypothesis."]
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-0">
                    Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-200">
                    <Github className="mr-2 h-4 w-4" /> GitHub Repository
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="aspect-video rounded-xl border border-slate-800 bg-slate-900 flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  <div className="text-center z-10 p-6">
                    <div className="w-16 h-16 rounded-full bg-indigo-600/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-indigo-500/30 cursor-pointer hover:bg-indigo-600/40 transition-colors">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-indigo-400 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                    <p className="font-medium text-lg mb-2">[EMBED YOUTUBE/VIMEO DEMO VIDEO HERE]</p>
                    <p className="text-sm text-slate-400">Placeholder for 2-3 minute project demonstration</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. RESEARCH AND VALIDATION SECTION */}
        <section id="research" className="py-24 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Research Foundation & Validation</h2>
              <p className="text-lg text-muted-foreground">
                Rigorous academic methodology and real-world testing ensure our solution is both theoretically sound and practically viable.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <Card className="h-full bg-slate-50 dark:bg-slate-900 border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" /> Methodology
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Approach</h4>
                      <p className="text-sm font-medium">[e.g., Surveyed 100 users, built prototype, tested with 20 participants]</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Duration</h4>
                      <p className="text-sm font-medium">[e.g., 6 months of iterative development]</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Validation Methods</h4>
                      <ul className="text-sm font-medium list-disc list-inside space-y-1 mt-1">
                        <li>Usability testing with [X] users</li>
                        <li>Peer review by academic supervisors</li>
                        <li>Pilot testing in real environments</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Key Findings & Results</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { metric: "90%", desc: "of users found the system easy to navigate" },
                      { metric: "40%", desc: "reduction in task completion time" },
                      { metric: "4.6/5", desc: "average user satisfaction score" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-950 border rounded-xl p-4 flex flex-col justify-center items-center text-center gap-2 shadow-sm">
                        <div className="text-3xl font-bold text-primary">{item.metric}</div>
                        <div className="text-sm text-muted-foreground leading-tight">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="aspect-[21/9] bg-slate-100 dark:bg-slate-800 rounded-xl border flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-6">
                    <FileBarChart className="h-10 w-10 mx-auto mb-2 text-slate-400" />
                    <p className="font-medium text-slate-600 dark:text-slate-300">[INSERT RESULTS CHART/GRAPH HERE]</p>
                    <p className="text-xs text-slate-500">e.g., Bar chart showing performance improvements</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8. COMMERCIALIZATION & FUTURE POTENTIAL SECTION */}
        <section id="commercialization" className="py-24 bg-primary/5 dark:bg-primary/10 border-y border-primary/10">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Beyond Academia
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Commercialization & Future Potential</h2>
              <p className="text-lg text-muted-foreground">
                From research to real-world impact. A strategic roadmap for transforming this academic project into a sustainable product.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-primary/20 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5 text-primary" /> Target Market</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm">Potential Customers</h4>
                    <p className="text-muted-foreground text-sm">[e.g., "Small e-commerce businesses in Sri Lanka (50,000+ businesses)"]</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Industry Relevance</h4>
                    <p className="text-muted-foreground text-sm">[Why this is needed NOW - market trends, pain points]</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Market Size</h4>
                    <p className="text-muted-foreground text-sm">[Estimate of market size or financial opportunity]</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Layers className="h-5 w-5 text-primary" /> Deployment Pathways</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-primary">1</span></div>
                      <span className="text-sm">[e.g., "Web-based SaaS platform accessible via any browser"]</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-primary">2</span></div>
                      <span className="text-sm">[e.g., "Mobile companion app for field workers"]</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-primary">3</span></div>
                      <span className="text-sm">[e.g., "API integration for existing enterprise systems"]</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-center">Proposed Revenue Models</h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              {[
                { title: "SaaS Subscription", desc: "[e.g., $10/month for small businesses with basic features]" },
                { title: "Freemium Model", desc: "[e.g., Free core access, premium analytics for $20/month]" },
                { title: "Enterprise Licensing", desc: "[e.g., Custom pricing for large organizations requiring dedicated support]" }
              ].map((model, idx) => (
                <Card key={idx} className="text-center shadow-sm hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">{model.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{model.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white dark:bg-slate-950 border-primary/20">
              <CardHeader>
                <CardTitle>Development Roadmap</CardTitle>
                <CardDescription>Structured plan for future iterations and scaling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6 space-y-8 pb-4">
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 rounded-full bg-primary -left-[9px] top-1"></div>
                    <h4 className="font-bold text-lg">Next 6 Months</h4>
                    <p className="text-muted-foreground mt-1 text-sm">[e.g., Add payment gateway, improve mobile UX, expand to 3 new languages]</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 rounded-full bg-primary/60 -left-[9px] top-1"></div>
                    <h4 className="font-bold text-lg">1–2 Years</h4>
                    <p className="text-muted-foreground mt-1 text-sm">[e.g., Expand to regional markets, integrate predictive AI features]</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 rounded-full bg-primary/30 -left-[9px] top-1"></div>
                    <h4 className="font-bold text-lg">Long-term Vision</h4>
                    <p className="text-muted-foreground mt-1 text-sm">[e.g., Become the leading solution for X in South Asia]</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 9. DOWNLOADS SECTION */}
        <section id="downloads" className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Resources & Downloads</h2>
              <p className="text-muted-foreground">Access detailed academic and technical documentation for this project.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                { name: "Research Abstract", type: "PDF", size: "1.2 MB", icon: <FileText className="h-5 w-5" /> },
                { name: "Presentation Slides", type: "PDF", size: "4.5 MB", icon: <Presentation className="h-5 w-5" /> },
                { name: "Project Poster (A3)", type: "PDF", size: "8.1 MB", icon: <FileText className="h-5 w-5" /> },
                { name: "User Manual", type: "PDF", size: "3.4 MB", icon: <BookOpen className="h-5 w-5" /> },
                { name: "GitHub Repository", type: "Code", size: "External Link", icon: <Code className="h-5 w-5" /> },
                { name: "Research Paper Draft", type: "PDF", size: "2.8 MB", icon: <FileText className="h-5 w-5" /> },
              ].map((file, idx) => (
                <a key={idx} href="#" className="block group">
                  <Card className="h-full group-hover:border-primary/50 group-hover:shadow-md transition-all">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          {file.icon}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{file.name}</p>
                          <p className="text-xs text-muted-foreground">{file.type} • {file.size}</p>
                        </div>
                      </div>
                      <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-8 border-b border-slate-800 pb-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-100 mb-2">[YOUR PROJECT TITLE]</h3>
              <p className="text-sm">B.Sc. (Hons) IT – Interactive Media<br />University of Sri Jayewardenepura</p>
            </div>
            <div className="flex justify-center gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:youremail@example.com" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <div className="text-center md:text-right text-sm">
              <p>Developed by <strong>[YOUR NAME]</strong></p>
              <p>Academic Year: 2026</p>
            </div>
          </div>
          <div className="text-center text-xs">
            <p>© 2026 [YOUR NAME] | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
