import { useState, useRef, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Link, Play, AlertTriangle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const DetectionDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    const MAX_SIZE = 100 * 1024 * 1024; // 100MB
    if (file.size > MAX_SIZE) {
      setSelectedFile(null);
      toast({
        title: "File too large",
        description: "Please upload a file up to 100MB.",
        variant: "destructive",
      });
      e.target.value = "";
      return;
    }
    setSelectedFile(file);
    toast({
      title: "File selected",
      description: `${file.name}`,
    });
  };
  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulate analysis with progress
    setTimeout(() => {
      setResult({
        confidence: 87.3,
        isDeepfake: true,
        details: {
          faceManipulation: 92,
          audioSync: 45,
          compression: 76,
          metadata: 89
        },
        warnings: [
          "Facial expressions appear unnatural in frames 120-145",
          "Audio-visual synchronization inconsistencies detected",
          "Compression artifacts suggest digital manipulation"
        ]
      });
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Deepfake content detected with high confidence",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Detection <span className="text-primary">Demo</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Test our AI-powered deepfake detection technology with your own content
            </p>
          </div>

          <Tabs defaultValue="upload" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload" className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload File
              </TabsTrigger>
              <TabsTrigger value="url" className="flex items-center gap-2">
                <Link className="w-4 h-4" />
                URL Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upload">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Media File</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">Drop your file here or click to upload</p>
                    <p className="text-muted-foreground mb-4">
                      Supports MP4, AVI, MOV, JPG, PNG files up to 100MB
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,video/*"
                      className="hidden"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e)}
                    />
                    <Button variant="outline" onClick={() => fileInputRef.current?.click()} aria-label="Choose file to analyze">
                      Choose File
                    </Button>
                    {selectedFile && (
                      <div className="mt-3 text-sm text-muted-foreground" role="status" aria-live="polite">
                        Selected: <span className="font-medium text-foreground">{selectedFile.name}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="url">
              <Card>
                <CardHeader>
                  <CardTitle>Analyze from URL</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="url">Content URL</Label>
                    <Input 
                      id="url" 
                      placeholder="https://example.com/video.mp4"
                      className="w-full"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enter a direct link to video or image content for analysis
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center my-8">
            <Button 
              size="lg" 
              className="button-shadow"
              onClick={simulateAnalysis}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Start Analysis
                </>
              )}
            </Button>
          </div>

          {isAnalyzing && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full" />
                  Analysis in Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Facial Analysis</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Audio Processing</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Metadata Verification</span>
                      <span>40%</span>
                    </div>
                    <Progress value={40} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {result && (
            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  <div>
                    <CardTitle className="text-destructive">Deepfake Detected</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Confidence: {result.confidence}%
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-background">
                    <div className="text-2xl font-bold text-destructive mb-1">
                      {result.details.faceManipulation}%
                    </div>
                    <div className="text-sm text-muted-foreground">Face Manipulation</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background">
                    <div className="text-2xl font-bold text-yellow-500 mb-1">
                      {result.details.audioSync}%
                    </div>
                    <div className="text-sm text-muted-foreground">Audio Sync</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background">
                    <div className="text-2xl font-bold text-orange-500 mb-1">
                      {result.details.compression}%
                    </div>
                    <div className="text-sm text-muted-foreground">Compression</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background">
                    <div className="text-2xl font-bold text-destructive mb-1">
                      {result.details.metadata}%
                    </div>
                    <div className="text-sm text-muted-foreground">Metadata</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Detection Details:</h4>
                  <div className="space-y-2">
                    {result.warnings.map((warning: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>{warning}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline">
                    Download Report
                  </Button>
                  <Button className="bg-destructive hover:bg-destructive/90">
                    Report This Content
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Privacy & Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Your uploaded content is processed securely and automatically deleted after analysis. 
                    We never store personal media files on our servers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetectionDemo;