import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Star, BookOpen, CheckCircle, Play, Download } from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();
  
  // Mock data - in a real app, this would come from an API
  const courseData = {
    1: {
      title: "Full Stack Web Development Bootcamp",
      provider: "TechEd Academy",
      duration: "24 weeks",
      level: "Beginner",
      rating: 4.8,
      students: "12,500+",
      price: "$2,999",
      description: "Master modern web development with this comprehensive bootcamp. Learn to build full-stack applications using the latest technologies and industry best practices. This intensive program combines theoretical knowledge with hands-on projects to prepare you for a successful career in web development.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "HTML/CSS", "Express.js", "Git", "RESTful APIs"],
      format: "Online",
      category: "Technology",
      instructor: "Sarah Johnson",
      instructorBio: "Senior Full Stack Developer with 8+ years of experience at top tech companies. Former Facebook and Google engineer.",
      prerequisites: ["Basic computer skills", "No programming experience required"],
      curriculum: [
        {
          module: "Module 1: Web Development Fundamentals",
          duration: "4 weeks",
          topics: ["HTML5 & CSS3", "Responsive Design", "JavaScript Basics", "DOM Manipulation"]
        },
        {
          module: "Module 2: Frontend Development with React",
          duration: "6 weeks", 
          topics: ["React Components", "State Management", "React Router", "Hooks", "Testing"]
        },
        {
          module: "Module 3: Backend Development with Node.js",
          duration: "6 weeks",
          topics: ["Node.js Fundamentals", "Express.js", "RESTful APIs", "Authentication", "Middleware"]
        },
        {
          module: "Module 4: Database & Full Stack Integration",
          duration: "4 weeks",
          topics: ["MongoDB", "Database Design", "Full Stack Integration", "Deployment"]
        },
        {
          module: "Module 5: Advanced Topics & Portfolio",
          duration: "4 weeks",
          topics: ["Advanced React Patterns", "Performance Optimization", "Final Project", "Career Preparation"]
        }
      ],
      features: [
        "24/7 access to course materials",
        "Live weekly Q&A sessions",
        "Code reviews and feedback",
        "Career support and job placement assistance",
        "Community access and networking",
        "Certificate of completion"
      ],
      outcomes: [
        "Build responsive, modern web applications",
        "Understand full-stack development workflow",
        "Create RESTful APIs and work with databases",
        "Deploy applications to production",
        "Apply for junior developer positions",
        "Continue learning advanced topics independently"
      ]
    }
  };

  const course = courseData[Number(id) as keyof typeof courseData] || courseData[1];

  return (
    <div className="min-h-screen bg-muted/20 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/courses" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </div>

        <div className="space-y-8">
          {/* Header */}
          <Card className="card-elevated">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{course.category}</Badge>
                    <Badge className="bg-secondary text-secondary-foreground">
                      {course.level}
                    </Badge>
                  </div>
                  <h1 className="text-4xl font-bold text-gradient-primary mb-2">{course.title}</h1>
                  <p className="text-lg text-muted-foreground mb-4">by {course.provider}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
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
                </div>
                
                <Card className="w-full lg:w-80 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{course.price}</div>
                    <p className="text-sm text-muted-foreground mb-4">One-time payment</p>
                    <Button className="w-full btn-hero-primary mb-3">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Preview Course
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardHeader>
          </Card>

          {/* Description */}
          <Card className="card-feature">
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{course.description}</p>
            </CardContent>
          </Card>

          {/* Instructor */}
          <Card className="card-feature">
            <CardHeader>
              <CardTitle>Your Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{course.instructor}</h3>
                  <p className="text-muted-foreground">{course.instructorBio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prerequisites & Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-feature">
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-feature">
              <CardHeader>
                <CardTitle>Skills You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Curriculum */}
          <Card className="card-feature">
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{module.module}</h3>
                      <Badge variant="outline">{module.duration}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="text-sm text-muted-foreground">
                          • {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features & Outcomes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-feature">
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-feature">
              <CardHeader>
                <CardTitle>Learning Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <Card className="card-elevated bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of students who have transformed their careers with this course.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero-primary">
                  Enroll Now - {course.price}
                </Button>
                <Link to="/jobs">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    View Job Opportunities
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;