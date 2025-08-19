import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, Users, Star, ArrowRight, BookOpen } from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development Bootcamp",
      provider: "TechEd Academy",
      duration: "24 weeks",
      level: "Beginner",
      rating: 4.8,
      students: "12,500+",
      price: "$2,999",
      description: "Learn to build modern web applications from scratch using React, Node.js, and MongoDB.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "HTML/CSS"],
      format: "Online",
      category: "Technology"
    },
    {
      id: 2,
      title: "UX/UI Design Masterclass",
      provider: "Design Institute",
      duration: "16 weeks",
      level: "Intermediate",
      rating: 4.9,
      students: "8,200+",
      price: "$1,899",
      description: "Master user experience and interface design with hands-on projects and industry tools.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
      format: "Online",
      category: "Design"
    },
    {
      id: 3,
      title: "Data Science with Python",
      provider: "DataLearn",
      duration: "20 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: "15,300+",
      price: "$2,499",
      description: "Comprehensive data science program covering statistics, machine learning, and visualization.",
      skills: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "SQL"],
      format: "Online",
      category: "Technology"
    },
    {
      id: 4,
      title: "Digital Marketing Certification",
      provider: "Marketing Pro",
      duration: "12 weeks",
      level: "Beginner",
      rating: 4.6,
      students: "9,800+",
      price: "$1,299",
      description: "Learn digital marketing strategies including SEO, social media, and paid advertising.",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Marketing"],
      format: "Online",
      category: "Marketing"
    },
    {
      id: 5,
      title: "Project Management Professional (PMP)",
      provider: "PM Institute",
      duration: "10 weeks",
      level: "Advanced",
      rating: 4.8,
      students: "6,500+",
      price: "$1,799",
      description: "Prepare for PMP certification and learn advanced project management methodologies.",
      skills: ["Agile", "Scrum", "Risk Management", "Leadership", "Planning"],
      format: "Hybrid",
      category: "Business"
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      provider: "SecureLearn",
      duration: "14 weeks",
      level: "Beginner",
      rating: 4.7,
      students: "7,200+",
      price: "$1,999",
      description: "Learn cybersecurity principles, threat analysis, and security management.",
      skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"],
      format: "Online",
      category: "Technology"
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-secondary text-secondary-foreground";
      case "Intermediate": return "bg-accent text-accent-foreground";
      case "Advanced": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient-primary mb-4">Learn New Skills</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Advance your career with our comprehensive training programs and courses
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search courses, skills, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Card key={course.id} className="card-feature group animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{course.category}</Badge>
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{course.provider}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-accent" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-secondary" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-amber-500 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-primary" />
                    <span>{course.format}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Skills you'll learn:</p>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {course.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{course.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-primary">{course.price}</div>
                  <Link to={`/courses/${course.id}`} className="block">
                    <Button className="btn-accent group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No courses found matching your search.</p>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              Clear Search
            </Button>
          </div>
        )}

        <div className="text-center mt-16">
          <Card className="card-elevated bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Not sure which course to take?</h3>
              <p className="text-muted-foreground mb-6">
                Discover your ideal career path first, then find the perfect courses to get there.
              </p>
              <Link to="/questions">
                <Button className="btn-hero-primary">
                  Take Career Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;