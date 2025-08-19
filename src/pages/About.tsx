import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, Award, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { label: "Career Paths", value: "500+", icon: Target },
    { label: "Success Stories", value: "10,000+", icon: TrendingUp },
    { label: "Partner Companies", value: "250+", icon: Users },
    { label: "Course Providers", value: "50+", icon: Award }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former career counselor with 15+ years helping people find their dream careers.",
      expertise: ["Career Counseling", "Leadership", "Strategy"]
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      bio: "Tech veteran who led product teams at major tech companies.",
      expertise: ["Product Development", "AI/ML", "User Experience"]
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Learning Officer",
      bio: "PhD in Industrial Psychology with expertise in career assessment and development.",
      expertise: ["Psychology", "Assessment Design", "Learning Science"]
    },
    {
      name: "David Kim",
      role: "Head of Partnerships",
      bio: "Business development expert connecting talent with opportunities.",
      expertise: ["Business Development", "Partnerships", "Market Analysis"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe everyone deserves to find fulfilling work that aligns with their passions and values."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Our scientific approach to career matching ensures accurate, personalized recommendations."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to continuous learning and helping our users evolve throughout their careers."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community where professionals can connect and support each other."
    }
  ];

  return (
    <div className="min-h-screen bg-muted/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-6">
            About CareerPath
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help millions of people discover and pursue careers that bring them 
            fulfillment, growth, and success. Our platform combines cutting-edge technology with proven 
            career guidance methodologies to create personalized career recommendations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="card-feature text-center animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="card-feature">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To democratize career guidance by providing everyone with access to world-class career 
                assessment tools, personalized recommendations, and comprehensive learning resources. 
                We believe that finding the right career shouldn't be left to chance.
              </p>
            </CardContent>
          </Card>

          <Card className="card-feature">
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                A world where every person has clarity about their career path and access to the 
                resources they need to achieve their professional goals. We envision a future where 
                career fulfillment is the norm, not the exception.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient-primary mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="card-feature text-center animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate professionals dedicated to your career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="card-feature animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact */}
        <Card className="card-elevated bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Have questions about our platform or want to partner with us? 
                  We'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <span>support@careerpath.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-secondary mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-accent mr-3" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">Ready to Find Your Path?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of professionals who have discovered their ideal careers with CareerPath.
                </p>
                <Link to="/questions">
                  <Button className="btn-hero-primary">
                    Start Your Journey Today
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;