import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Heart, Globe, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const impactMetrics = [
    { icon: Users, label: 'Lives Impacted', value: '50,000+' },
    { icon: Globe, label: 'States Served', value: '15' },
    { icon: Heart, label: 'Volunteers', value: '2,500+' },
    { icon: TrendingUp, label: 'Projects', value: '120+' },
  ];

  const featuredPrograms = [
    {
      title: 'Education for All',
      description: 'Providing quality education and learning resources to underserved communities.',
      impact: '15,000 students supported',
      badge: 'Active',
    },
    {
      title: 'Healthcare Access',
      description: 'Delivering essential healthcare services and medical supplies to remote areas.',
      impact: '25,000 patients treated',
      badge: 'Active',
    },
    {
      title: 'Clean Water Initiative',
      description: 'Building sustainable water infrastructure for communities in need.',
      impact: '100+ wells constructed',
      badge: 'Active',
    },
  ];

  const latestUpdates = [
    {
      date: 'Feb 5, 2026',
      title: 'Medical Camp Serves 1,000 Patients',
      excerpt: 'Our healthcare team provided free medical services to remote communities.',
    },
    {
      date: 'Jan 28, 2026',
      title: 'Clean Water Project Completed',
      excerpt: 'Five new wells now provide clean drinking water to 2,000 people.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Making a Difference Since 2021
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Building a Better Tomorrow
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
                Join us in our mission to empower communities through education, healthcare, and sustainable development initiatives worldwide.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => navigate({ to: '/donate' })}
                  className="text-base"
                >
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: '/get-involved' })}
                  className="text-base"
                >
                  Get Involved
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/ngo-hero.dim_1600x900.png"
                alt="Community support and empowerment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="container py-16 md:py-24">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we're making a lasting impact in communities around the world
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <Badge variant="secondary">{program.badge}</Badge>
                </div>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <TrendingUp className="h-4 w-4" />
                  {program.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate({ to: '/programs' })}
          >
            View All Programs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Latest Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our recent achievements and ongoing projects
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestUpdates.map((update, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{update.date}</div>
                  <CardTitle className="text-xl">{update.title}</CardTitle>
                  <CardDescription className="text-base">{update.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20">
          <CardHeader className="text-center space-y-4 pb-8">
            <CardTitle className="text-3xl sm:text-4xl md:text-5xl">
              Ready to Make a Difference?
            </CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              Your support can transform lives. Join us today and be part of the change you want to see in the world.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
            <Button
              size="lg"
              onClick={() => navigate({ to: '/donate' })}
              className="text-base"
            >
              Make a Donation
              <Heart className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ to: '/get-involved' })}
              className="text-base"
            >
              Volunteer With Us
              <Users className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
