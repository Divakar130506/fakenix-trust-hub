import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReportDeepfake = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Report <span className="text-primary">Deepfake Media</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Help us build a safer internet by reporting suspicious or manipulated content
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Submit a Report</CardTitle>
              <CardDescription>
                Provide details about the suspected deepfake content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="url">Content URL</Label>
                <Input 
                  id="url" 
                  placeholder="https://example.com/suspicious-video"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Content Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="audio">Audio</SelectItem>
                    <SelectItem value="text">Text/Article</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="platform">Platform</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Where was this found?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="twitter">Twitter/X</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe why you believe this content is a deepfake..."
                  className="min-h-32"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your Email (Optional)</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="your@email.com"
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  We may contact you for additional information
                </p>
              </div>

              <Button className="w-full button-shadow">
                Submit Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportDeepfake;