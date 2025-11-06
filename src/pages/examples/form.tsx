import { FormTheme } from '@/container/theme';

export default function FormPage() {
  const fields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text' as const,
      placeholder: 'Enter your first name',
      required: true
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text' as const,
      placeholder: 'Enter your last name',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email' as const,
      placeholder: 'Enter your email',
      required: true
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel' as const,
      placeholder: 'Enter your phone number',
      required: false
    }
  ];

  const handleSubmit = (data: Record<string, string>) => {
    console.log('Form submitted:', data);
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <FormTheme
      title="User Registration"
      subtitle="Please fill in your information"
      fields={fields}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      submitLabel="Register"
    />
  );
}
