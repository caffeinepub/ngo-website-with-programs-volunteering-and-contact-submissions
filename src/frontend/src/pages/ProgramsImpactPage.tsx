import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Heart, Droplet, Sprout, Home, Briefcase } from 'lucide-react';

export default function ProgramsImpactPage() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Education for All',
      status: 'Active',
      description: 'Providing quality education and learning resources to underserved communities, ensuring every child has the opportunity to learn and grow.',
      impact: [
        '15,000+ students supported annually',
        '45 schools built or renovated',
        '500+ teachers trained',
        '100,000+ books distributed',
      ],
      locations: 'Kenya, Uganda, Tanzania, India',
    },
    {
      icon: Heart,
      title: 'Healthcare Access',
      status: 'Active',
      description: 'Delivering essential healthcare services, medical supplies, and health education to remote and underserved areas.',
      impact: [
        '25,000+ patients treated annually',
        '12 mobile medical clinics operating',
        '200+ healthcare workers trained',
        '50+ health camps organized yearly',
      ],
      locations: 'Bangladesh, Nepal, Ethiopia, Haiti',
    },
    {
      icon: Droplet,
      title: 'Clean Water Initiative',
      status: 'Active',
      description: 'Building sustainable water infrastructure and promoting hygiene education to ensure access to clean, safe drinking water.',
      impact: [
        '100+ wells constructed',
        '50,000+ people with clean water access',
        '30 water filtration systems installed',
        '200+ communities reached',
      ],
      locations: 'Mali, Niger, Burkina Faso, Senegal',
    },
    {
      icon: Sprout,
      title: 'Sustainable Agriculture',
      status: 'Active',
      description: 'Empowering farmers with modern techniques, tools, and knowledge to increase crop yields and ensure food security.',
      impact: [
        '5,000+ farmers trained',
        '40% average increase in crop yields',
        '100+ farming cooperatives established',
        '20,000+ families benefiting',
      ],
      locations: 'Rwanda, Malawi, Zimbabwe, Guatemala',
    },
    {
      icon: Home,
      title: 'Shelter & Housing',
      status: 'Active',
      description: 'Providing safe, dignified housing solutions for families affected by natural disasters and extreme poverty.',
      impact: [
        '500+ homes built or repaired',
        '2,500+ people housed',
        '15 community centers constructed',
        '100% disaster-resistant structures',
      ],
      locations: 'Philippines, Indonesia, Honduras, Peru',
    },
    {
      icon: Briefcase,
      title: 'Economic Empowerment',
      status: 'Active',
      description: 'Creating opportunities for sustainable livelihoods through skills training, microfinance, and entrepreneurship support.',
      impact: [
        '3,000+ individuals trained',
        '800+ small businesses launched',
        '$2M+ in microloans distributed',
        '75% business success rate',
      ],
      locations: 'Cambodia, Myanmar, Bolivia, Nicaragua',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Programs & Impact
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Discover how we're creating lasting change through comprehensive programs designed to address the root causes of poverty and inequality.
            </p>
          </div>
        </div>
      </section>

      {/* Program Icons Visual */}
      <section className="border-y border-border/40 bg-muted/30 py-12">
        <div className="container">
          <div className="flex justify-center">
            <img
              src="/assets/generated/program-icons-set.dim_512x512.png"
              alt="Program icons representing our diverse initiatives"
              className="h-32 w-auto object-contain opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="container py-16 md:py-24">
        <div className="space-y-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-[auto_1fr] gap-6">
                  <div className="flex items-start justify-center md:justify-start p-6 md:pl-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="pr-6 pb-6 md:pr-8 md:pb-8">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <CardTitle className="text-2xl">{program.title}</CardTitle>
                        <Badge variant="secondary" className="shrink-0">
                          {program.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-base leading-relaxed pt-2">
                        {program.description}
                      </CardDescription>
                      <div className="text-sm text-muted-foreground pt-2">
                        <span className="font-medium">Locations:</span> {program.locations}
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                          Impact Metrics
                        </h4>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {program.impact.map((metric, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Collective Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Through our integrated approach, we've created a ripple effect of positive change that extends far beyond individual programs. By addressing multiple aspects of community development simultaneously, we ensure sustainable, long-term transformation.
            </p>
            <div className="grid gap-6 sm:grid-cols-3 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Lives Directly Impacted</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">200,000+</div>
                <div className="text-sm text-muted-foreground">Indirect Beneficiaries</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">States Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
