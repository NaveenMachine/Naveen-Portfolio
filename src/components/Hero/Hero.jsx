import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div style={{ paddingBottom: "5rem", paddingTop: "9rem", position: "relative" }}>
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Grid background */}
      <div
        style={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "black",
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px)",
          backgroundSize: "20px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Radial gradient */}
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "black",
            maskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", marginTop: "5rem", zIndex: 10, textAlign: "center" }}>
        <div style={{ maxWidth: "90vw", margin: "0 auto" }}>
          {/* Tagline */}
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.1rem",
              fontSize: "0.75rem",
              color: "#8ab4f8",
              marginBottom: "1rem",
            }}
          >
            Dynamic Web Magic with Next.js
          </p>

          {/* TextGenerateEffect */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-[40px] md:text-5xl lg:text-6xl text-center"
          />

          {/* Subtext */}
          <p
            style={{
              fontSize: "1rem",
              letterSpacing: "0.05rem",
              marginBottom: "1rem",
              color: "#ccc",
            }}
          >
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
          </p>

          {/* Magic Button */}
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
