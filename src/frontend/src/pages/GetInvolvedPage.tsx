import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FormStatusBanner from '@/components/FormStatusBanner';
import { useSubmitVolunteerInterest } from '@/hooks/useNgoSubmissions';
import { Heart, Users, BookOpen, Stethoscope, Droplet, Home } from 'lucide-react';

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    areaOfInterest: '',
    availability: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const submitMutation = useSubmitVolunteerInterest();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.areaOfInterest || !formData.availability) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    if (!formData.email.includes('@')) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    try {
      await submitMutation.mutateAsync(formData);
      setFormStatus({
        type: 'success',
        message: 'Thank you for your interest! We will contact you soon with volunteer opportunities.',
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        areaOfInterest: '',
        availability: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to submit your interest. Please try again.',
      });
    }
  };

  const opportunities = [
    {
      icon: BookOpen,
      title: 'Education Programs',
      description: 'Help teach literacy, STEM subjects, or vocational skills to students in underserved communities.',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Initiatives',
      description: 'Support medical clinics, health education campaigns, or maternal and child health programs.',
    },
    {
      icon: Droplet,
      title: 'Clean Water Projects',
      description: 'Assist with water infrastructure development, maintenance, and community education.',
    },
    {
      icon: Home,
      title: 'Community Development',
      description: 'Participate in housing projects, economic empowerment programs, or agricultural initiatives.',
    },
    {
      icon: Users,
      title: 'Administrative Support',
      description: 'Contribute your professional skills in areas like marketing, finance, IT, or project management.',
    },
    {
      icon: Heart,
      title: 'Fundraising & Events',
      description: 'Help organize fundraising campaigns, awareness events, or donor engagement activities.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get Involved
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Join our community of dedicated volunteers making a real difference in the lives of people around the world. Your time and skills can create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="container py-16 md:py-24">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Volunteer Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the many ways you can contribute your time and talents
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {opportunity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
              Why Volunteer with Samarpan Trust?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Volunteering with Samarpan Trust offers a unique opportunity to make a tangible difference while gaining valuable experience and building meaningful connections. Our volunteers are at the heart of everything we do.
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Make Real Impact:</strong> See the direct results of your efforts in the communities we serve.
                </li>
                <li>
                  <strong>Develop New Skills:</strong> Gain hands-on experience in international development, project management, and cross-cultural collaboration.
                </li>
                <li>
                  <strong>Join a Global Community:</strong> Connect with like-minded individuals from around the world who share your passion for positive change.
                </li>
                <li>
                  <strong>Flexible Opportunities:</strong> Choose from on-site positions or remote volunteer roles that fit your schedule and location.
                </li>
                <li>
                  <strong>Comprehensive Support:</strong> Receive training, mentorship, and ongoing support throughout your volunteer journey.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Interest Form */}
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Express Your Interest</CardTitle>
              <CardDescription>
                Fill out the form below to let us know you're interested in volunteering. We'll reach out with opportunities that match your interests and availability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formStatus && (
                <FormStatusBanner
                  status={formStatus.type}
                  message={formStatus.message}
                />
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="areaOfInterest">
                    Area of Interest <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.areaOfInterest}
                    onValueChange={(value) => setFormData({ ...formData, areaOfInterest: value })}
                  >
                    <SelectTrigger id="areaOfInterest">
                      <SelectValue placeholder="Select an area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Education Programs</SelectItem>
                      <SelectItem value="healthcare">Healthcare Initiatives</SelectItem>
                      <SelectItem value="water">Clean Water Projects</SelectItem>
                      <SelectItem value="community">Community Development</SelectItem>
                      <SelectItem value="admin">Administrative Support</SelectItem>
                      <SelectItem value="fundraising">Fundraising & Events</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">
                    Availability <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.availability}
                    onValueChange={(value) => setFormData({ ...formData, availability: value })}
                  >
                    <SelectTrigger id="availability">
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time (40+ hours/week)</SelectItem>
                      <SelectItem value="part-time">Part-time (20-40 hours/week)</SelectItem>
                      <SelectItem value="flexible">Flexible (10-20 hours/week)</SelectItem>
                      <SelectItem value="occasional">Occasional (as needed)</SelectItem>
                      <SelectItem value="remote">Remote only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your skills, experience, or any specific interests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? 'Submitting...' : 'Submit Interest'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
