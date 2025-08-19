import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Questions = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 1,
      question: "What type of work environment do you prefer?",
      options: [
        { value: "office", label: "Traditional office setting" },
        { value: "remote", label: "Remote/work from home" },
        { value: "hybrid", label: "Hybrid (mix of office and remote)" },
        { value: "outdoors", label: "Outdoor environments" },
        { value: "travel", label: "Traveling for work" }
      ]
    },
    {
      id: 2,
      question: "Which best describes your preferred work style?",
      options: [
        { value: "team", label: "Collaborative team work" },
        { value: "independent", label: "Independent work" },
        { value: "leadership", label: "Leading teams and projects" },
        { value: "support", label: "Supporting others' work" },
        { value: "creative", label: "Creative and innovative work" }
      ]
    },
    {
      id: 3,
      question: "What motivates you most in your career?",
      options: [
        { value: "money", label: "High salary and financial security" },
        { value: "impact", label: "Making a positive impact on society" },
        { value: "growth", label: "Personal and professional growth" },
        { value: "balance", label: "Work-life balance" },
        { value: "recognition", label: "Recognition and achievements" }
      ]
    },
    {
      id: 4,
      question: "Which skill area interests you most?",
      options: [
        { value: "technology", label: "Technology and programming" },
        { value: "communication", label: "Communication and writing" },
        { value: "analytics", label: "Data analysis and research" },
        { value: "design", label: "Design and creativity" },
        { value: "business", label: "Business and management" }
      ]
    },
    {
      id: 5,
      question: "How do you prefer to solve problems?",
      options: [
        { value: "logical", label: "Logical and systematic approach" },
        { value: "creative", label: "Creative and innovative solutions" },
        { value: "collaborative", label: "Working with others to find solutions" },
        { value: "research", label: "Research and data-driven decisions" },
        { value: "intuitive", label: "Intuitive and experience-based" }
      ]
    },
    {
      id: 6,
      question: "What type of projects excite you most?",
      options: [
        { value: "longterm", label: "Long-term strategic projects" },
        { value: "shortterm", label: "Quick, fast-paced projects" },
        { value: "complex", label: "Complex problem-solving challenges" },
        { value: "people", label: "People-focused initiatives" },
        { value: "innovation", label: "Innovation and new product development" }
      ]
    },
    {
      id: 7,
      question: "Which industry interests you most?",
      options: [
        { value: "tech", label: "Technology and software" },
        { value: "healthcare", label: "Healthcare and medicine" },
        { value: "finance", label: "Finance and banking" },
        { value: "education", label: "Education and training" },
        { value: "marketing", label: "Marketing and advertising" }
      ]
    },
    {
      id: 8,
      question: "How do you prefer to learn new skills?",
      options: [
        { value: "formal", label: "Formal education and courses" },
        { value: "handson", label: "Hands-on experience" },
        { value: "mentorship", label: "Mentorship and guidance" },
        { value: "self", label: "Self-directed learning" },
        { value: "team", label: "Learning from team collaboration" }
      ]
    },
    {
      id: 9,
      question: "What level of responsibility do you prefer?",
      options: [
        { value: "high", label: "High responsibility and decision-making" },
        { value: "moderate", label: "Moderate responsibility with guidance" },
        { value: "team", label: "Shared team responsibility" },
        { value: "specialist", label: "Specialist role with focused responsibility" },
        { value: "growing", label: "Gradually increasing responsibility" }
      ]
    },
    {
      id: 10,
      question: "Which work schedule appeals to you most?",
      options: [
        { value: "traditional", label: "Traditional 9-to-5 schedule" },
        { value: "flexible", label: "Flexible hours" },
        { value: "project", label: "Project-based deadlines" },
        { value: "shift", label: "Shift work or non-traditional hours" },
        { value: "seasonal", label: "Seasonal or contract work" }
      ]
    },
    {
      id: 11,
      question: "What type of interaction do you prefer?",
      options: [
        { value: "clients", label: "Direct client/customer interaction" },
        { value: "internal", label: "Internal team collaboration" },
        { value: "minimal", label: "Minimal social interaction" },
        { value: "public", label: "Public speaking and presentations" },
        { value: "mentoring", label: "Teaching and mentoring others" }
      ]
    },
    {
      id: 12,
      question: "Which best describes your risk tolerance?",
      options: [
        { value: "high", label: "High risk, high reward opportunities" },
        { value: "moderate", label: "Moderate calculated risks" },
        { value: "low", label: "Stable, low-risk environment" },
        { value: "startup", label: "Startup and entrepreneurial risks" },
        { value: "innovative", label: "Innovation-focused calculated risks" }
      ]
    },
    {
      id: 13,
      question: "What career growth path interests you?",
      options: [
        { value: "management", label: "Management and leadership roles" },
        { value: "specialist", label: "Deep specialization in expertise" },
        { value: "entrepreneur", label: "Entrepreneurship and business ownership" },
        { value: "consultant", label: "Consulting and advisory roles" },
        { value: "multiple", label: "Multiple career transitions" }
      ]
    },
    {
      id: 14,
      question: "Which work outcome gives you most satisfaction?",
      options: [
        { value: "products", label: "Creating tangible products or services" },
        { value: "people", label: "Helping and developing people" },
        { value: "problems", label: "Solving complex problems" },
        { value: "systems", label: "Building efficient systems and processes" },
        { value: "knowledge", label: "Generating new knowledge or insights" }
      ]
    },
    {
      id: 15,
      question: "What type of compensation structure do you prefer?",
      options: [
        { value: "salary", label: "Stable salary with benefits" },
        { value: "commission", label: "Performance-based commission" },
        { value: "equity", label: "Equity and stock options" },
        { value: "project", label: "Project-based payments" },
        { value: "mixed", label: "Mixed compensation structure" }
      ]
    }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitAnswers = () => {
    if (Object.keys(answers).length < questions.length) {
      toast({
        title: "Incomplete Assessment",
        description: "Please answer all questions before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Simple career matching logic
    const careerMatches = [
      { id: 1, name: "Software Developer", match: 95 },
      { id: 2, name: "UX/UI Designer", match: 87 }
    ];

    navigate("/career-results", { state: { matches: careerMatches } });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-muted/20 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient-primary mb-4">Career Assessment</h1>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle className="text-xl">{currentQ.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentQuestion] || ""}
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {currentQ.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer py-2">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          {currentQuestion === questions.length - 1 ? (
            <Button
              onClick={submitAnswers}
              disabled={!answers[currentQuestion]}
              className="btn-accent flex items-center space-x-2"
            >
              <CheckCircle className="h-4 w-4" />
              <span>Submit Assessment</span>
            </Button>
          ) : (
            <Button
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
              className="btn-accent flex items-center space-x-2"
            >
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;