import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Search, MapPin, DollarSign, Clock, Briefcase, Upload, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechStart Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$85,000 - $110,000",
      posted: "2 days ago",
      description: "Join our team to build amazing user interfaces using React and modern web technologies.",
      requirements: ["3+ years React experience", "TypeScript proficiency", "UI/UX design skills"],
      remote: true
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Design Co.",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70,000 - $95,000",
      posted: "1 week ago",
      description: "Create intuitive and engaging user experiences for our digital products.",
      requirements: ["Figma expertise", "User research experience", "Portfolio required"],
      remote: false
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Analytics Plus",
      location: "Remote",
      type: "Full-time",
      salary: "$95,000 - $130,000",
      posted: "3 days ago",
      description: "Analyze complex datasets to drive business insights and machine learning solutions.",
      requirements: ["Python/R proficiency", "Machine learning experience", "Statistics background"],
      remote: true
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      company: "Growth Agency",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$55,000 - $75,000",
      posted: "5 days ago",
      description: "Drive digital marketing campaigns and optimize conversion rates across multiple channels.",
      requirements: ["Google Ads experience", "SEO knowledge", "Analytics skills"],
      remote: false
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$110,000 - $150,000",
      posted: "1 day ago",
      description: "Lead product strategy and development for cutting-edge technology solutions.",
      requirements: ["5+ years product management", "Technical background", "Leadership experience"],
      remote: true
    },
    {
      id: 6,
      title: "Cybersecurity Analyst",
      company: "SecureNet Corp",
      location: "Washington, DC",
      type: "Full-time",
      salary: "$75,000 - $100,000",
      posted: "4 days ago",
      description: "Protect our infrastructure from cyber threats and ensure security compliance.",
      requirements: ["Security certifications", "Network security experience", "Incident response"],
      remote: false
    }
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type.includes('document')) {
        setSelectedFile(file);
        toast({
          title: "CV Uploaded",
          description: `${file.name} has been uploaded successfully.`,
        });
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or Word document.",
          variant: "destructive"
        });
      }
    }
  };

  const handleApply = (jobTitle: string) => {
    if (!selectedFile) {
      toast({
        title: "CV Required",
        description: "Please upload your CV before applying.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Application Submitted",
      description: `Your application for ${jobTitle} has been submitted successfully!`,
    });
  };

  return (
    <div className="min-h-screen bg-muted/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient-primary mb-4">Find Your Next Job</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover exciting career opportunities from top companies
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search jobs, companies, or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-2 space-y-6">
            {filteredJobs.map((job, index) => (
              <Card key={job.id} className="card-feature group animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {job.title}
                      </CardTitle>
                      <p className="text-lg font-medium text-secondary">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <Badge variant={job.remote ? "default" : "secondary"}>
                          {job.remote ? "Remote" : "On-site"}
                        </Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{job.salary}</div>
                      <div className="text-sm text-muted-foreground">per year</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{job.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Requirements:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      Posted {job.posted}
                    </div>
                    <Button 
                      className="btn-accent"
                      onClick={() => handleApply(job.title)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No jobs found matching your search.</p>
                <Button onClick={() => setSearchTerm("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}
          </div>

          {/* CV Upload Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Upload Your CV
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Upload your CV to apply for jobs with one click
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cv-upload">CV/Resume</Label>
                      <div className="mt-1">
                        <Input
                          id="cv-upload"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          className="cursor-pointer"
                        />
                      </div>
                      {selectedFile && (
                        <p className="text-sm text-secondary mt-2 flex items-center">
                          <Upload className="w-4 h-4 mr-1" />
                          {selectedFile.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
                      <Textarea
                        id="cover-letter"
                        placeholder="Write a brief cover letter..."
                        className="mt-1"
                        rows={4}
                      />
                    </div>

                    <Button className="w-full btn-accent" disabled={!selectedFile}>
                      <Upload className="w-4 h-4 mr-2" />
                      {selectedFile ? "CV Ready for Applications" : "Upload CV to Apply"}
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Supported formats: PDF, DOC, DOCX (max 5MB)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Job Search Tips */}
              <Card className="card-feature mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Job Search Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <Briefcase className="w-4 h-4 mt-0.5 mr-2 text-primary flex-shrink-0" />
                    <span>Tailor your CV for each application</span>
                  </div>
                  <div className="flex items-start">
                    <Search className="w-4 h-4 mt-0.5 mr-2 text-secondary flex-shrink-0" />
                    <span>Use specific keywords from job descriptions</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 mt-0.5 mr-2 text-accent flex-shrink-0" />
                    <span>Apply within 48 hours of posting</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;