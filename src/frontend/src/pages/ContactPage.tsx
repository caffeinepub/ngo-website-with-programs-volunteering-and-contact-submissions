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
      content: 'Chhaperwa, Sandh, Barkagaon, Hazaribagh, Jharkhand 825311',
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

      {/* Contact Info Cards */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
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
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
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
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about Samarpan Trust
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How can I volunteer with Samarpan Trust?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Visit our Get Involved page to learn about current volunteer opportunities and submit your interest form. We'll match you with programs that align with your skills and availability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are donations tax-deductible?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, Samarpan Trust is a registered non-profit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for your records.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Where does Samarpan Trust operate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We currently operate programs in 15 countries across Asia, Africa, and South America, focusing on communities with the greatest need for education, healthcare, and sustainable development support.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How can I stay updated on Samarpan Trust's work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Follow us on social media and check our website regularly for the latest updates on our programs, impact stories, and upcoming events. You can also contact us to join our mailing list.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
