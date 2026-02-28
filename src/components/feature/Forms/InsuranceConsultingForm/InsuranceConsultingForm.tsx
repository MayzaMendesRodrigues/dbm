import React, { useState } from 'react';

interface InsuranceConsultingFormProps {
  // Add props if needed
}

const InsuranceConsultingForm: React.FC<InsuranceConsultingFormProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Name" id="name" value={formData.name} onChange={(value) => setFormData({ ...formData, name: value })} />
      <InputField label="Email" id="email" value={formData.email} onChange={(value) => setFormData({ ...formData, email: value })} />
      <InputField label="Phone" id="phone" value={formData.phone} onChange={(value) => setFormData({ ...formData, phone: value })} />
      <textarea value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InsuranceConsultingForm;
