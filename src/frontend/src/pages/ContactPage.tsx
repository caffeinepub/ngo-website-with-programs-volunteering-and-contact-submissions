import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FormStatusBanner from '@/components/FormStatusBanner';
import { useSubmitContactMessage } from '@/hooks/useNgoSubmissions';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { OFFICE_ADDRESS } from '@/constants/ngoContact';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{ status: 'success' | 'error'; message: string } | null>(null);

  const submitMutation = useSubmitContactMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        status: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message).',
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

    try {
      await submitMutation.mutateAsync(formData);
      setFormStatus({
        status: 'success',
        message: 'Thank you for contacting us! We will respond to your message within 24-48 hours.',
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        status: 'error',
        message: 'Failed to send your message. Please try again or contact us directly via email.',
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'samarpantrust2@gmail.com',
      link: 'mailto:samarpantrust2@gmail.com',
    },
    {
      icon: Phone,
      title: 'Contact',
      content: '7979882539',
      link: 'tel:7979882539',
    },
    {
      icon: SiWhatsapp,
      title: 'WhatsApp',
      content: '8651677735',
      link: 'https://wa.me/918651677735',
    },
    {
      icon: MessageSquare,
      title: 'Office',
      content: '9162667748',
      link: 'tel:9162667748',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: OFFICE_ADDRESS,
      link: null,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Have questions or want to learn more about our work? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = info.link ? (
              <a
                href={info.link}
                className="text-primary hover:underline"
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {info.content}
              </a>
            ) : (
              <span className="text-muted-foreground">{info.content}</span>
            );

            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{content}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus && (
                  <FormStatusBanner
                    status={formStatus.status}
                    message={formStatus.message}
                  />
                )}

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
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
                  <Label htmlFor="email">Email Address *</Label>
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
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">How can I get involved with Samarpan Trust?</h3>
                <p className="text-muted-foreground">
                  There are many ways to get involved! You can volunteer your time, make a donation, or partner with us on specific projects. Visit our Get Involved page to learn more about current opportunities.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Where does Samarpan Trust operate?</h3>
                <p className="text-muted-foreground">
                  We currently operate across 15 states in India, with a focus on education, healthcare, and sustainable development initiatives in underserved communities.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">How are donations used?</h3>
                <p className="text-muted-foreground">
                  Every rupee donated goes directly toward our programs. We maintain complete transparency in our financial operations and provide regular updates to our donors about how their contributions are making an impact.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Can I visit your projects in person?</h3>
                <p className="text-muted-foreground">
                  Yes! We welcome visits from donors, volunteers, and partners. Please contact us in advance to arrange a visit to one of our project sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
