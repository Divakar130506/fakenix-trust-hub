import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TrackReports = () => {
  const sampleReports = [
    {
      id: "RPT-2025-001",
      status: "Under Review",
      platform: "YouTube",
      type: "Video",
      dateSubmitted: "2025-01-08",
      statusColor: "bg-yellow-500"
    },
    {
      id: "RPT-2025-002", 
      status: "Verified",
      platform: "Facebook",
      type: "Image",
      dateSubmitted: "2025-01-07",
      statusColor: "bg-green-500"
    },
    {
      id: "RPT-2025-003",
      status: "Investigating",
      platform: "Twitter/X",
      type: "Video",
      dateSubmitted: "2025-01-06",
      statusColor: "bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Track Your <span className="text-primary">Reports</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Monitor the status of your deepfake reports and see investigation progress
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search Reports</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Input 
                placeholder="Enter report ID (e.g., RPT-2025-001)"
                className="flex-1"
              />
              <Button>Search</Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Recent Reports</h2>
            {sampleReports.map((report) => (
              <Card key={report.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-semibold text-lg">{report.id}</h3>
                        <Badge 
                          className={`${report.statusColor} text-white`}
                        >
                          {report.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div>
                          <span className="font-medium">Platform:</span> {report.platform}
                        </div>
                        <div>
                          <span className="font-medium">Type:</span> {report.type}
                        </div>
                        <div>
                          <span className="font-medium">Submitted:</span> {report.dateSubmitted}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't have a report ID? Check your email for confirmation details.
            </p>
            <Button variant="outline" className="mr-4">
              Contact Support
            </Button>
            <Button>
              Submit New Report
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackReports;