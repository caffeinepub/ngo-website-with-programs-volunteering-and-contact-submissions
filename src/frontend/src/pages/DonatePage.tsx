import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FormStatusBanner from '@/components/FormStatusBanner';
import { useSubmitDonationPledge } from '@/hooks/useNgoSubmissions';
import { Heart, Shield, TrendingUp, Users } from 'lucide-react';

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{ status: 'success' | 'error'; message: string } | null>(null);

  const submitMutation = useSubmitDonationPledge();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.amount.trim()) {
      setFormStatus({
        status: 'error',
        message: 'Please fill in all required fields (Name, Email, and Amount).',
      });
      return;
    }

    if (!formData.email.includes('@')) {
      setFormStatus({
        status: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    const amountNum = parseFloat(formData.amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      setFormStatus({
        status: 'error',
        message: 'Please enter a valid donation amount.',
      });
      return;
    }

    try {
      await submitMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        amount: BigInt(Math.floor(amountNum)),
        message: formData.message || undefined,
      });
      setFormStatus({
        status: 'success',
        message: 'Thank you for your pledge! We will contact you shortly with payment details.',
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        amount: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        status: 'error',
        message: 'Failed to submit your pledge. Please try again or contact us at samarpantrust2@gmail.com.',
      });
    }
  };

  const impactExamples = [
    {
      amount: '$50',
      impact: 'Provides school supplies for 5 children',
      icon: Users,
    },
    {
      amount: '$100',
      impact: 'Funds a week of medical care in a remote clinic',
      icon: Heart,
    },
    {
      amount: '$250',
      impact: 'Builds a clean water well for a small community',
      icon: TrendingUp,
    },
    {
      amount: '$500',
      impact: 'Sponsors a full year of education for a student',
      icon: Shield,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="w-fit mx-auto">
              Every Contribution Counts
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Support Our Mission
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Your donation helps us provide education, healthcare, and sustainable development to communities in need.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Examples */}
      <section className="container py-16 md:py-24">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how your donation can make a real difference in people's lives
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {impactExamples.map((example, index) => {
            const Icon = example.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{example.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{example.impact}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Donation Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Make a Donation Pledge</CardTitle>
              <CardDescription>
                Submit your pledge and we'll contact you with payment details. For immediate assistance, contact us at samarpantrust2@gmail.com or call 7979882539.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus && (
                  <FormStatusBanner
                    status={formStatus.status}
                    message={formStatus.message}
                  />
                )}

                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">
                    Donation Amount (USD) <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    min="1"
                    step="0.01"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    placeholder="50.00"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any special instructions or dedication..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? 'Submitting...' : 'Submit Pledge'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Transparency & Accountability
              </h2>
              <p className="text-lg text-muted-foreground">
                We're committed to using your donations responsibly
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">85%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Of donations go directly to programs
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">10%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Covers operational costs
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">5%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Invested in fundraising
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  At Samarpan Trust, we believe in complete transparency. Every donation is tracked and reported, and we provide regular updates on how funds are being used to create positive change.
                </p>
                <p>
                  We undergo annual independent audits and publish detailed financial reports. Your trust is important to us, and we work hard to ensure every dollar makes the maximum impact.
                </p>
                <p>
                  For questions about donations or to request our latest financial report, please contact us at samarpantrust2@gmail.com or call our office at 9162667748.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
