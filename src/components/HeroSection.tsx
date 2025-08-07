import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroShield from "@/assets/hero-shield.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Combat{" "}
              <span className="text-primary">Deepfake Media</span>
              <br />
              With Trustworthy Analysis
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Fakenix helps detect, report, and track manipulated content 
              to create a safer online environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="button-shadow bg-primary hover:bg-primary-hover text-lg px-8 py-6"
                asChild
              >
                <Link to="/detection-demo">Try Detection Demo</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-2 hover:bg-muted"
                asChild
              >
                <Link to="/report-deepfake">Report Deepfake</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroShield}
                alt="Cybersecurity AI Shield"
                className="w-full max-w-lg h-auto drop-shadow-2xl"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;