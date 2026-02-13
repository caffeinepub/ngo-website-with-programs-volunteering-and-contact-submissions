import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface FormStatusBannerProps {
  status: 'success' | 'error';
  title?: string;
  message: string;
}

export default function FormStatusBanner({ status, title, message }: FormStatusBannerProps) {
  const isSuccess = status === 'success';

  return (
    <Alert variant={isSuccess ? 'default' : 'destructive'} className="mb-6">
      {isSuccess ? (
        <CheckCircle2 className="h-4 w-4" />
      ) : (
        <AlertCircle className="h-4 w-4" />
      )}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
