import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, TrendingUp } from "lucide-react";

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: "AI-Generated Deepfakes Target Financial Institutions in Latest Cyber Attack Wave",
      excerpt: "Cybercriminals are increasingly using sophisticated deepfake technology to bypass facial recognition systems in banking applications, raising concerns about digital identity verification.",
      category: "Cybersecurity",
      date: "2025-01-05",
      readTime: "4 min read",
      trending: true,
      source: "Cybersecurity Today"
    },
    {
      id: 2,
      title: "New EU Regulations Mandate Deepfake Detection in Social Media Platforms",
      excerpt: "The European Union announces comprehensive legislation requiring social media companies to implement AI-powered deepfake detection systems by Q3 2025.",
      category: "Regulation",
      date: "2025-01-03",
      readTime: "6 min read",
      trending: false,
      source: "TechPolicy News"
    },
    {
      id: 3,
      title: "Corporate Executives Targeted in Sophisticated Voice Deepfake Scams",
      excerpt: "A new report reveals that voice cloning technology is being used to impersonate CEOs and CFOs in fraudulent wire transfer requests, with losses exceeding $50 million.",
      category: "Fraud Alert",
      date: "2025-01-02",
      readTime: "5 min read",
      trending: true,
      source: "Business Security Weekly"
    },
    {
      id: 4,
      title: "Advanced Detection Algorithms Show 99.7% Accuracy in Identifying Deepfake Content",
      excerpt: "Researchers at leading universities collaborate to develop next-generation machine learning models that can detect even the most sophisticated manipulated media.",
      category: "Technology",
      date: "2024-12-30",
      readTime: "7 min read",
      trending: false,
      source: "AI Research Journal"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Latest Deepfake & Cybersecurity News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about the latest developments in deepfake detection, cybersecurity threats, 
            and digital media manipulation trends.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {newsArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant={article.category === 'Fraud Alert' ? 'destructive' : 'secondary'}
                    className="text-xs font-medium"
                  >
                    {article.category}
                  </Badge>
                  {article.trending && (
                    <div className="flex items-center text-primary text-xs font-medium">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <span>{article.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">
                    {article.source}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                    Read More
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary">
            View All News & Updates
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;