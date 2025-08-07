import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      status: "current",
      items: [
        { title: "Enhanced Video Detection Algorithm", completed: true },
        { title: "Real-time Detection API", completed: true },
        { title: "Community Forum Launch", completed: false },
        { title: "Mobile App Beta", completed: false }
      ]
    },
    {
      quarter: "Q2 2025", 
      status: "planned",
      items: [
        { title: "Audio Deepfake Detection", completed: false },
        { title: "Browser Extension", completed: false },
        { title: "Enterprise Dashboard", completed: false },
        { title: "Advanced Reporting System", completed: false }
      ]
    },
    {
      quarter: "Q3 2025",
      status: "future",
      items: [
        { title: "AI-Powered Content Verification", completed: false },
        { title: "Integration with Social Platforms", completed: false },
        { title: "Multi-language Support", completed: false },
        { title: "Blockchain Verification", completed: false }
      ]
    },
    {
      quarter: "Q4 2025",
      status: "future", 
      items: [
        { title: "Global Detection Network", completed: false },
        { title: "Advanced Machine Learning Models", completed: false },
        { title: "Partner API Ecosystem", completed: false },
        { title: "Research Publication Platform", completed: false }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "current":
        return <Zap className="w-5 h-5 text-blue-500" />;
      case "planned":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "current":
        return <Badge className="bg-blue-500 text-white">In Progress</Badge>;
      case "planned":
        return <Badge className="bg-yellow-500 text-white">Planned</Badge>;
      default:
        return <Badge variant="outline">Future</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Product <span className="text-primary">Roadmap</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Our journey to build the most comprehensive deepfake detection platform
            </p>
          </div>

          <div className="space-y-8">
            {roadmapItems.map((quarter, index) => (
              <Card key={quarter.quarter} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(quarter.status)}
                      <CardTitle className="text-2xl">{quarter.quarter}</CardTitle>
                    </div>
                    {getStatusBadge(quarter.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {quarter.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                        {item.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                        )}
                        <span className={`flex-1 ${item.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                          {item.title}
                        </span>
                        {item.completed && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Completed
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                {/* Timeline connector */}
                {index < roadmapItems.length - 1 && (
                  <div className="absolute left-8 -bottom-4 w-0.5 h-8 bg-border" />
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Have a Feature Request?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We'd love to hear your ideas for improving FAKENIX. Join our community forum to share your thoughts and vote on upcoming features.
                </p>
                <div className="flex gap-4 justify-center">
                  <Badge variant="outline" className="px-4 py-2">
                    Community Driven
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    Open Source
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    Research Focused
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;