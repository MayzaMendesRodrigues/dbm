import React, { useState } from 'react';
import InputField from '../../../ui/InputField';
import { Button, Box } from '@mui/material';

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
    console.log('Form submitted:', formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <InputField 
        label="Nombre Completo" 
        id="name" 
        value={formData.name} 
        onChange={(value) => setFormData({ ...formData, name: value })} 
      />
      <InputField 
        label="Email" 
        id="email" 
        type="email"
        value={formData.email} 
        onChange={(value) => setFormData({ ...formData, email: value })} 
      />
      <InputField 
        label="Teléfono" 
        id="phone" 
        type="tel"
        value={formData.phone} 
        onChange={(value) => setFormData({ ...formData, phone: value })} 
      />
      <InputField 
        label="Mensaje" 
        id="message" 
        multiline
        rows={4}
        value={formData.message} 
        onChange={(value) => setFormData({ ...formData, message: value })} 
      />
      <Button 
        type="submit" 
        fullWidth 
        variant="contained" 
        sx={{ mt: 2, mb: 2, backgroundColor: '#D32F2F', '&:hover': { backgroundColor: '#B71C1C' } }}
      >
        Enviar Consulta
      </Button>
    </Box>
  );
};

export default InsuranceConsultingForm;
