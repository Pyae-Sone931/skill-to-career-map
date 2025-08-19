import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, TrendingUp, DollarSign, Clock, GraduationCap, Users, MapPin, BookOpen } from "lucide-react";

const CareerDetails = () => {
  const { id } = useParams();
  
  // Mock data - in a real app, this would come from an API
  const careerData = {
    1: {
      title: "Software Developer",
      category: "Technology",
      salary: "$75,000 - $120,000",
      growth: "High",
      description: "Software developers create applications and systems that run on computers, mobile devices, and other platforms. They analyze user needs, design software solutions, write code, test applications, and maintain existing software.",
      responsibilities: [
        "Write, test, and maintain code for software applications",
        "Collaborate with cross-functional teams to define and design new features",
        "Debug and resolve technical issues in existing software",
        "Participate in code reviews and maintain coding standards",
        "Stay updated with emerging technologies and industry trends",
        "Document software specifications and user guides"
      ],
      skills: [
        "Programming Languages (JavaScript, Python, Java, C++)",
        "Software Development Frameworks",
        "Database Management",
        "Problem-Solving",
        "Version Control (Git)",
        "Agile/Scrum Methodologies"
      ],
      education: "Bachelor's degree in Computer Science, Software Engineering, or related field",
      experience: "Entry-level to 10+ years depending on role",
      workEnvironment: "Office, remote, or hybrid. Collaborative team environment with focus on continuous learning.",
      jobOutlook: "Much faster than average growth (22% from 2020-2030)",
      locations: ["San Francisco, CA", "Seattle, WA", "New York, NY", "Austin, TX", "Remote"]
    }
  };

  const career = careerData[Number(id) as keyof typeof careerData] || careerData[1];

  return (
    <div className="min-h-screen bg-muted/20 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/careers" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>
        </div>

        <div className="space-y-8">
          {/* Header */}
          <Card className="card-elevated">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{career.category}</Badge>
                    <Badge className="bg-secondary text-secondary-foreground">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {career.growth} Growth
                    </Badge>
                  </div>
                  <h1 className="text-4xl font-bold text-gradient-primary">{career.title}</h1>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-secondary">{career.salary}</div>
                  <div className="text-sm text-muted-foreground">Average Salary Range</div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Overview */}
          <Card className="card-feature">
            <CardHeader>
              <CardTitle>Career Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{career.description}</p>
            </CardContent>
          </Card>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">{career.education}</p>
              </CardContent>
            </Card>
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground">{career.experience}</p>
              </CardContent>
            </Card>
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Job Outlook</h3>
                <p className="text-sm text-muted-foreground">{career.jobOutlook}</p>
              </CardContent>
            </Card>
          </div>

          {/* Responsibilities */}
          <Card className="card-feature">
            <CardHeader>
              <CardTitle>Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {career.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="card-feature">
            <CardHeader>
              <CardTitle>Required Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {career.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Work Environment */}
          <Card className="card-feature">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Work Environment & Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{career.workEnvironment}</p>
              <div className="space-y-2">
                <h4 className="font-medium">Popular Locations:</h4>
                <div className="flex flex-wrap gap-2">
                  {career.locations.map((location, index) => (
                    <Badge key={index} variant="outline">
                      {location}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="card-elevated bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground mb-6">
                Explore courses and training programs to develop the skills needed for this career.
              </p>
              <Link to="/courses">
                <Button className="btn-hero-primary">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Related Courses
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;