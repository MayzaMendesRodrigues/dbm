import React, { useState } from 'react';
import { Contact, Brands } from '../../../constants/constants';
import { MapPin, Clock, Star, Send } from 'lucide-react';
import InputField from '../../../components/ui/InputField';
import './BikeForm.css';
import { EventAnalytics, pushEvent } from '../../../analytics/analytics';

interface BikeData {
  brand: string;
  model: string;
  year: string;
  mileage: string;
  state: string;
  city: string;
}

const BikeForm: React.FC = () => {
  const [formData, setFormData] = useState<BikeData>({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    state: '',
    city: '',
  });
  const [errors, setErrors] = useState<Partial<BikeData>>({});

  const brands = Brands.map(brand => ({ value: brand, label: brand }));

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const years = Array.from({ length: 30 }, (_, i) => {
    const currentYear = getCurrentYear();
    const year = currentYear - i;
    return { value: year.toString(), label: year.toString() };
  });

  const states = [
    { value: 'excelente', label: 'Excelente - Como nueva' },
    { value: 'muy_bueno', label: 'Muy Bueno - Mínimo desgaste' },
    { value: 'bueno', label: 'Bueno - Desgaste normal' },
    { value: 'regular', label: 'Regular - Necesita atención' },
    { value: 'deficiente', label: 'Deficiente - Requiere reparaciones' }
  ];

  const handleInputChange = (field: keyof BikeData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const formatMileage = (value: string): string => {
    const numericValue = value.replace(/\D/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BikeData> = {};
    if (!formData.brand) newErrors.brand = 'Selecciona la marca';
    if (!formData.model) newErrors.model = 'Ingresa el modelo';
    if (!formData.year) newErrors.year = 'Selecciona el año';
    if (!formData.mileage) newErrors.mileage = 'Ingresa el kilometraje';
    if (!formData.state) newErrors.state = 'Selecciona el estado';
    if (!formData.city) newErrors.city = 'Ingresa tu ciudad';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = (): string => {
    const stateLabel = states.find(e => e.value === formData.state)?.label || formData.state;
    return `¡Hola! Quiero vender mi moto:
    *${formData.brand} ${formData.model}*
    Año: ${formData.year}
    Kilometraje: ${formData.mileage.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} km
    Estado: ${stateLabel}
    Ubicación: ${formData.city}
    ¿Podrías cotizarla? ¡Gracias!`;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    pushEvent(EventAnalytics.SellMyBikeFormSubmission)
    const message = encodeURIComponent(generateWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${Contact.PhoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="form-card">
      <div className="form-container">
        <InputField
          label="Marca de la moto"
          id="brand"
          value={formData.brand}
          onChange={(value) => handleInputChange('brand', value)}
          placeholder="Selecciona la marca"
          error={errors.brand}
          options={brands}
        />
        <InputField
          label="Modelo"
          id="model"
          value={formData.model}
          onChange={(value) => handleInputChange('model', value)}
          placeholder="Ej: FZ16, NS 200, Dominar 400"
          error={errors.model}
        />
        <div className="grid-container">
          <InputField
            label="Año"
            id="year"
            value={formData.year}
            onChange={(value) => handleInputChange('year', value)}
            placeholder="Año"
            error={errors.year}
            options={years}
            Icon={Clock}
          />
          <InputField
            label="Kilometraje"
            id="mileage"
            value={formatMileage(formData.mileage)}
            onChange={(value) => handleInputChange('mileage', value.replace(/,/g, ''))}
            placeholder="Ej: 15000"
            error={errors.mileage}
          />
        </div>
        <InputField
          label="Estado general"
          id="state"
          value={formData.state}
          onChange={(value) => handleInputChange('state', value)}
          placeholder="Selecciona el estado"
          error={errors.state}
          options={states}
          Icon={Star}
        />
        <InputField
          label="Ciudad"
          id="city"
          value={formData.city}
          onChange={(value) => handleInputChange('city', value)}
          placeholder="Ej: Capital Federal, Buenos Aires, Córdoba, Rosario"
          error={errors.city}
          Icon={MapPin}
        />
        <button onClick={handleSubmit} className="submit-button">
          <Send size={20} className="button-icon" /> Obtener Cotización
        </button>
      </div>
    </div>
  );
};

export default BikeForm;
