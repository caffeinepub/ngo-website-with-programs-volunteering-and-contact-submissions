import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We lead with empathy and understanding, putting people first in everything we do.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of collective action and building strong, supportive networks.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We focus on sustainable, measurable outcomes that create lasting positive change.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We operate with integrity and accountability, ensuring trust in all our relationships.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Executive Director',
      bio: '15+ years of experience in international development and humanitarian work.',
    },
    {
      name: 'Michael Chen',
      role: 'Director of Programs',
      bio: 'Expert in sustainable development with a focus on education and healthcare initiatives.',
    },
    {
      name: 'Amara Okafor',
      role: 'Director of Operations',
      bio: 'Specializes in logistics and resource management for global NGO operations.',
    },
    {
      name: 'David Martinez',
      role: 'Director of Fundraising',
      bio: 'Passionate about building partnerships and securing resources for impactful projects.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Samarpan Trust
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Since 2010, we've been dedicated to creating positive change in communities worldwide through education, healthcare, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To empower underserved communities by providing access to quality education, essential healthcare services, and sustainable development opportunities. We work alongside local partners to create lasting solutions that address root causes of poverty and inequality.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                A world where every person has the opportunity to reach their full potential, regardless of their circumstances. We envision thriving communities where access to education, healthcare, and economic opportunities is a reality for all, creating a more equitable and sustainable future.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-16 md:py-24">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals driving our mission forward
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">{member.name}</CardTitle>
                <CardDescription className="text-center font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Samarpan Trust was born from a simple belief: that everyone deserves access to the basic necessities that enable them to thrive. In 2010, a group of passionate individuals came together with a shared vision of creating meaningful change in underserved communities around the world.
              </p>
              <p>
                What started as a small education initiative in rural Kenya has grown into a comprehensive organization operating in 15 countries across three continents. Over the years, we've expanded our focus to include healthcare access, clean water infrastructure, and sustainable economic development programs.
              </p>
              <p>
                Today, with the support of over 2,500 volunteers and thousands of donors, we've impacted more than 50,000 lives. But our work is far from over. Every day, we continue to push forward, driven by the stories of transformation we witness and the communities we serve.
              </p>
              <p>
                We believe that sustainable change comes from working alongside communities, not for them. By partnering with local leaders and organizations, we ensure that our programs are culturally appropriate, locally owned, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
