import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Forum = () => {
  const forumPosts = [
    {
      id: 1,
      title: "New AI Detection Method Shows 99% Accuracy",
      author: "SecurityExpert",
      category: "Research",
      replies: 23,
      views: 1547,
      lastActivity: "2 hours ago",
      isSticky: true
    },
    {
      id: 2,
      title: "How to Spot Deepfake Videos: A Beginner's Guide",
      author: "TechAnalyst",
      category: "Education",
      replies: 45,
      views: 3201,
      lastActivity: "4 hours ago",
      isSticky: false
    },
    {
      id: 3,
      title: "Legal Implications of Deepfake Technology",
      author: "LegalAdvocate",
      category: "Legal",
      replies: 12,
      views: 890,
      lastActivity: "1 day ago",
      isSticky: false
    },
    {
      id: 4,
      title: "Community Guidelines Update - January 2025",
      author: "Moderator",
      category: "Announcements",
      replies: 8,
      views: 567,
      lastActivity: "2 days ago",
      isSticky: true
    }
  ];

  const categories = [
    { name: "General Discussion", posts: 156, color: "bg-blue-500" },
    { name: "Research", posts: 89, color: "bg-green-500" },
    { name: "Education", posts: 234, color: "bg-purple-500" },
    { name: "Legal", posts: 67, color: "bg-orange-500" },
    { name: "Announcements", posts: 23, color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Community <span className="text-primary">Forum</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Join the discussion about deepfake detection and digital media authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <Badge variant="secondary">{category.posts}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Forum Posts */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Latest Discussions</h2>
                <Button>New Post</Button>
              </div>

              <div className="space-y-4">
                {forumPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {post.isSticky && (
                              <Badge className="bg-yellow-500 text-white">Pinned</Badge>
                            )}
                            <Badge variant="outline">{post.category}</Badge>
                          </div>
                          <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>by <span className="font-medium">{post.author}</span></span>
                            <span>{post.replies} replies</span>
                            <span>{post.views} views</span>
                            <span>Last activity: {post.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More Posts</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forum;