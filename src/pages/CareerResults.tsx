import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, RefreshCw } from "lucide-react";

const CareerResults = () => {
  const location = useLocation();
  const { matches } = location.state || { matches: [] };

  if (!matches || matches.length === 0) {
    return (
      <div className="min-h-screen bg-muted/20 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gradient-primary mb-4">No Results Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find your assessment results. Please take the assessment again.
          </p>
          <Link to="/questions">
            <Button className="btn-accent">
              <RefreshCw className="mr-2 h-4 w-4" />
              Take Assessment Again
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient-primary mb-4">Your Career Matches</h1>
          <p className="text-xl text-muted-foreground">
            Based on your assessment, here are your top career recommendations
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {matches.map((match: any, index: number) => (
            <Card key={match.id} className="card-elevated animate-bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{match.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-accent fill-current" />
                    <Badge variant="secondary" className="text-lg font-semibold">
                      {match.match}% Match
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4">
                      This career path aligns well with your interests, skills, and work preferences 
                      based on your assessment responses.
                    </p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${match.match}%` }}
                      ></div>
                    </div>
                  </div>
                  <Link to={`/careers/${match.id}`}>
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

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Want to explore more career options?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers">
              <Button variant="outline">Browse All Careers</Button>
            </Link>
            <Link to="/questions">
              <Button className="btn-accent">
                <RefreshCw className="mr-2 h-4 w-4" />
                Retake Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerResults;