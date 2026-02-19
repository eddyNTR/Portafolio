// =============================================================================
// hooks/useContactForm.ts
// Custom hook que encapsula toda la lógica del formulario de contacto.
// Separa el estado y el manejo de eventos del componente visual (Contact.tsx),
// haciendo el componente más limpio y el hook más fácil de testear.
// =============================================================================

import { useState, type FormEvent, type ChangeEvent } from 'react';

/** Campos del formulario de contacto */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/** Estado del envío del formulario */
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

/** Valor retornado por el hook para ser usado en el componente */
interface UseContactFormReturn {
  formData: FormData;
  status: FormStatus;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
}

// Valores iniciales del formulario — se usan al montar y al limpiar tras envío
const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

/**
 * useContactForm
 * Maneja el estado del formulario, los cambios de inputs y el envío.
 * Retorna todo lo necesario para renderizar el formulario en Contact.tsx.
 */
const useContactForm = (): UseContactFormReturn => {
  // Estado con todos los campos del formulario
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);

  // Estado del proceso de envío
  const [status, setStatus] = useState<FormStatus>('idle');

  /**
   * handleChange — actualiza el campo que cambió usando el atributo `name`
   * del input para identificar qué propiedad del estado modificar.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * handleSubmit — gestiona el envío del formulario.
   * TODO: Reemplaza el setTimeout con tu implementación real
   * (ej: fetch a una API, EmailJS, Formspree, etc.)
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();           // Previene recarga de página
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mreaaqbv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en el envío');
      }

      setStatus('success');
      setFormData(INITIAL_FORM); // Limpia el formulario tras éxito
    } catch {
      setStatus('error');
    }
  };

  return { formData, status, handleChange, handleSubmit };
};

export default useContactForm;
