import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Advanced Detection",
      description: "State-of-the-art AI algorithms that can identify sophisticated deepfake content with 99%+ accuracy."
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Real-time Analysis", 
      description: "Instant detection and verification of suspicious media content across multiple platforms."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Driven",
      description: "Powered by a global community of researchers, experts, and concerned citizens working together."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Fast",
      description: "Ultra-fast processing that can analyze content in seconds, not minutes or hours."
    }
  ];

  const stats = [
    { number: "500K+", label: "Content Analyzed" },
    { number: "25K+", label: "Active Users" },
    { number: "99.2%", label: "Detection Accuracy" },
    { number: "150+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">FAKENIX</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're on a mission to combat the spread of deepfake media and protect digital authenticity. 
            Our cutting-edge AI technology helps identify manipulated content before it can cause harm.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="px-4 py-2 bg-primary text-primary-foreground">
              AI-Powered
            </Badge>
            <Badge className="px-4 py-2 bg-primary text-primary-foreground">
              Open Source
            </Badge>
            <Badge className="px-4 py-2 bg-primary text-primary-foreground">
              Community Driven
            </Badge>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-accent/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FAKENIX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-accent/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In an era where artificial intelligence can create incredibly realistic fake content, 
              we believe everyone deserves access to tools that can help distinguish truth from manipulation. 
              FAKENIX empowers individuals, organizations, and platforms to make informed decisions about 
              the media they consume and share.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3 text-primary">Transparency</h3>
                <p className="text-muted-foreground">
                  Open-source algorithms and transparent detection methods
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3 text-primary">Accessibility</h3>
                <p className="text-muted-foreground">
                  Free detection tools available to everyone, everywhere
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3 text-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuous research and development to stay ahead of threats
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Built by Experts</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Our team consists of AI researchers, cybersecurity experts, and digital rights advocates 
            from leading institutions around the world. Together, we're building the future of content authenticity.
          </p>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Join Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're a researcher, developer, or someone who cares about digital truth, 
                there are many ways to get involved with FAKENIX.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2">
                  Contribute Code
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  Share Research
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  Join Community
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  Report Content
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;