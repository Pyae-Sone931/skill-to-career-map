import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, DollarSign, Clock, ArrowRight } from "lucide-react";

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const careers = [
    {
      id: 1,
      title: "Software Developer",
      category: "Technology",
      salary: "$75,000 - $120,000",
      growth: "High",
      description: "Design, develop, and maintain software applications and systems.",
      skills: ["Programming", "Problem Solving", "Teamwork"],
      duration: "4-6 years education"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      category: "Design",
      salary: "$65,000 - $100,000",
      growth: "High",
      description: "Create user-friendly interfaces and improve user experiences.",
      skills: ["Design Thinking", "Prototyping", "User Research"],
      duration: "2-4 years education"
    },
    {
      id: 3,
      title: "Data Scientist",
      category: "Technology",
      salary: "$80,000 - $130,000",
      growth: "Very High",
      description: "Analyze complex data to help organizations make better decisions.",
      skills: ["Statistics", "Python/R", "Machine Learning"],
      duration: "4-6 years education"
    },
    {
      id: 4,
      title: "Digital Marketing Manager",
      category: "Marketing",
      salary: "$55,000 - $90,000",
      growth: "High",
      description: "Develop and execute digital marketing strategies and campaigns.",
      skills: ["Analytics", "Content Creation", "SEO/SEM"],
      duration: "2-4 years education"
    },
    {
      id: 5,
      title: "Product Manager",
      category: "Business",
      salary: "$85,000 - $140,000",
      growth: "High",
      description: "Lead product development from conception to launch.",
      skills: ["Strategy", "Leadership", "Market Analysis"],
      duration: "4-6 years education"
    },
    {
      id: 6,
      title: "Cybersecurity Analyst",
      category: "Technology",
      salary: "$70,000 - $110,000",
      growth: "Very High",
      description: "Protect organizations from cyber threats and security breaches.",
      skills: ["Security Protocols", "Risk Assessment", "Incident Response"],
      duration: "2-4 years education"
    },
    {
      id: 7,
      title: "Nurse Practitioner",
      category: "Healthcare",
      salary: "$95,000 - $125,000",
      growth: "Very High",
      description: "Provide advanced nursing care and patient consultation.",
      skills: ["Patient Care", "Diagnosis", "Treatment Planning"],
      duration: "6-8 years education"
    },
    {
      id: 8,
      title: "Financial Advisor",
      category: "Finance",
      salary: "$60,000 - $120,000",
      growth: "Moderate",
      description: "Help clients make informed financial and investment decisions.",
      skills: ["Financial Planning", "Client Relations", "Investment Analysis"],
      duration: "4 years education"
    }
  ];

  const filteredCareers = careers.filter(career =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case "Very High": return "bg-secondary text-secondary-foreground";
      case "High": return "bg-primary text-primary-foreground";
      case "Moderate": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient-primary mb-4">Explore Career Paths</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover exciting career opportunities that match your interests and goals
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search careers, skills, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCareers.map((career, index) => (
            <Card key={career.id} className="card-feature group animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{career.category}</Badge>
                  <Badge className={getGrowthColor(career.growth)}>
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {career.growth}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {career.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{career.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 mr-2 text-secondary" />
                    <span>{career.salary}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-accent" />
                    <span>{career.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {career.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link to={`/careers/${career.id}`} className="block">
                  <Button className="w-full btn-accent group mt-4">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCareers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No careers found matching your search.</p>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              Clear Search
            </Button>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Not sure which career is right for you?
          </p>
          <Link to="/questions">
            <Button className="btn-hero-primary">
              Take Our Career Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;