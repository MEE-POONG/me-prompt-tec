import React, { useState } from 'react';
import { Button, Input, Card, CardHeader, CardBody, CardFooter } from '@/components/ui';

export interface FormField {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  placeholder?: string;
  required?: boolean;
}

export interface FormThemeProps {
  title?: string;
  subtitle?: string;
  fields?: FormField[];
  onSubmit?: (data: Record<string, string>) => void;
  submitLabel?: string;
  cancelLabel?: string;
  onCancel?: () => void;
  isLoading?: boolean;
}

export const FormTheme: React.FC<FormThemeProps> = ({
  title = 'Form',
  subtitle,
  fields = [],
  onSubmit,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  onCancel,
  isLoading = false
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};
    fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit?.(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <Card variant="elevated" padding="lg" className="w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <CardHeader title={title} subtitle={subtitle} />

          <CardBody>
            <div className="space-y-4">
              {fields.map((field) => (
                <Input
                  key={field.name}
                  label={field.label}
                  type={field.type || 'text'}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  error={errors[field.name]}
                  fullWidth
                  disabled={isLoading}
                  required={field.required}
                />
              ))}
            </div>
          </CardBody>

          <CardFooter>
            <div className="flex gap-3 justify-end">
              {onCancel && (
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  onClick={onCancel}
                  disabled={isLoading}
                >
                  {cancelLabel}
                </Button>
              )}
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : submitLabel}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
